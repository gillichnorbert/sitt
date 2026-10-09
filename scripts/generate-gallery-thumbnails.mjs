// Run manually with Node, cwebp and exiftool installed; no npm dependency is needed.
// Only the 16 managed WebP files under public/assets/thumbnails are written.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assets = resolve(root, 'public/assets');
const managed = resolve(assets, 'thumbnails');
const cwebp = process.env['CWEBP_BIN'] ?? 'cwebp';
const exiftool = process.env['EXIFTOOL_BIN'] ?? 'exiftool';
const sources = [
  ['sittszallitas/after_1.jpeg', 'sittszallitas-after_1.webp'],
  ['sittszallitas/after_2.webp', 'sittszallitas-after_2.webp'],
  ['sittszallitas/after_3.jpeg', 'sittszallitas-after_3.webp'],
  ['sittszallitas/after_4.webp', 'sittszallitas-after_4.webp'],
  ['sittszallitas/after_5.webp', 'sittszallitas-after_5.webp'],
  ['sittszallitas/after_6.webp', 'sittszallitas-after_6.webp'],
  ['sittszallitas/IMG_6643.webp', 'sittszallitas-IMG_6643.webp'],
  ['sittszallitas/IMG_6635.webp', 'sittszallitas-IMG_6635.webp'],
  ['foldmunka/IMG_5523.webp', 'foldmunka-IMG_5523.webp'],
  ['foldmunka/IMG_5522.webp', 'foldmunka-IMG_5522.webp'],
  ['aruszallitas/aru1.webp', 'aruszallitas-aru1.webp'],
  ['aruszallitas/aru2.webp', 'aruszallitas-aru2.webp'],
  ['aruszallitas/folyamat-szallitas.webp', 'aruszallitas-folyamat-szallitas.webp'],
  ['aruszallitas/aru3.webp', 'aruszallitas-aru3.webp'],
  ['aruszallitas/folyamat-celba-eres.webp', 'aruszallitas-folyamat-celba-eres.webp'],
  ['aruszallitas/folyamat-rakodas.webp', 'aruszallitas-folyamat-rakodas.webp']
];
assert.equal(sources.length, 16);
assert.equal(new Set(sources.map(([, name]) => name)).size, 16);

function run(binary, args) {
  const result = spawnSync(binary, args, { encoding: 'utf8' });
  if (result.error) throw Error(`${binary} is required: ${result.error.message}`);
  if (result.status !== 0) throw Error(`${binary} failed: ${result.stderr || result.stdout}`);
  return result.stdout;
}
const sourceFiles = sources.map(([name]) => resolve(assets, name));
for (const file of sourceFiles) assert.ok(file.startsWith(assets + '/'));
const sourceInfo = JSON.parse(run(exiftool, ['-json', '-n', '-ImageWidth', '-ImageHeight', '-Orientation', ...sourceFiles]));
assert.equal(sourceInfo.length, 16);
const digests = sourceFiles.map(file => createHash('sha256').update(readFileSync(file)).digest('hex'));
// These current JPEGs have normal orientation (1); WebPs have no orientation tag.
// Refuse future rotated/mirrored inputs instead of silently changing their display.
for (const info of sourceInfo) {
  assert.equal(info.Orientation ?? 1, 1, `Normalize orientation deliberately before using ${info.SourceFile}`);
  assert.ok(info.ImageWidth > 0 && info.ImageHeight > 0);
}

mkdirSync(managed, { recursive: true });
assert.equal(realpathSync(managed), join(realpathSync(assets), 'thumbnails'), 'Managed output must not be a symlink');
const staging = mkdtempSync(join(managed, '.generate-'));
try {
  for (const [index, [, name]] of sources.entries()) {
    const info = sourceInfo[index];
    // The shorter side is 144px: enough for the existing 45px square at 3x density.
    // Keep all content and the source ratio; never enlarge a source image.
    const scale = Math.min(1, 144 / Math.min(info.ImageWidth, info.ImageHeight));
    const width = Math.max(1, Math.round(info.ImageWidth * scale));
    run(cwebp, ['-quiet', '-q', '85', '-m', '6', '-resize', String(width), '0', '-metadata', 'none', sourceFiles[index], '-o', join(staging, name)]);
  }
  const outputInfo = JSON.parse(run(exiftool, ['-json', '-n', '-ImageWidth', '-ImageHeight', '-Orientation', '-GPS:All', ...sources.map(([, name]) => join(staging, name))]));
  assert.equal(outputInfo.length, 16);
  let beforeBytes = 0;
  let afterBytes = 0;
  for (const [index, [, name]] of sources.entries()) {
    const original = sourceInfo[index];
    const thumbnail = outputInfo[index];
    assert.equal(createHash('sha256').update(readFileSync(sourceFiles[index])).digest('hex'), digests[index], 'Original must remain unchanged');
    assert.ok(thumbnail.ImageWidth <= original.ImageWidth && thumbnail.ImageHeight <= original.ImageHeight, name);
    assert.ok(Math.abs(thumbnail.ImageHeight - thumbnail.ImageWidth * original.ImageHeight / original.ImageWidth) <= 1, `Source ratio changed: ${name}`);
    assert.equal(thumbnail.Orientation ?? 1, 1, name);
    assert.ok(!Object.keys(thumbnail).some(key => key.startsWith('GPS')), `GPS metadata found: ${name}`);
    const outputFile = join(staging, name);
    const originalSize = statSync(sourceFiles[index]).size;
    const thumbnailSize = statSync(outputFile).size;
    assert.ok(thumbnailSize > 0 && thumbnailSize < originalSize, name);
    beforeBytes += originalSize;
    afterBytes += thumbnailSize;
    renameSync(outputFile, join(managed, name));
    console.log(`${name}: ${original.ImageWidth}x${original.ImageHeight} → ${thumbnail.ImageWidth}x${thumbnail.ImageHeight}; ${originalSize} → ${thumbnailSize} bytes`);
  }
  console.log(`OK: 16 thumbnails; ${beforeBytes} → ${afterBytes} bytes (${(100 * (1 - afterBytes / beforeBytes)).toFixed(2)}% less). Original hashes, orientation and aspect ratios verified; no GPS metadata copied.`);
} finally {
  rmSync(staging, { recursive: true, force: true });
}

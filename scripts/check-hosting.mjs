// Offline check of vercel.json against the actual prerendered build.
// This models its documented routes/filesystem phases; it does not contact Vercel.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'));
assert.equal(config.framework, null, 'Static hosting must disable the Angular SPA preset');
assert.equal(config.outputDirectory, 'dist/sitt-transport/browser');
assert.equal(config.installCommand, 'npm ci');
assert.equal(config.buildCommand, 'npm run build && npm run check:hosting');
for (const key of ['rewrites', 'redirects', 'headers', 'cleanUrls', 'trailingSlash', 'builds']) {
  assert.ok(!(key in config), `Keep routing in one explicit routes table: ${key}`);
}
const output = resolve(root, config.outputDirectory);
const routes = config.routes;
const filesystem = routes.findIndex(route => route.handle === 'filesystem');
assert.ok(filesystem > 0, 'Static files must be checked before the 404 fallback');
assert.equal(routes.filter(route => route.handle === 'filesystem').length, 1);
assert.equal(filesystem, routes.length - 2);
assert.equal(routes.at(-1).status, 404);
assert.equal(routes.at(-1).dest, '/404.html');
for (const route of routes.filter(route => route.src)) {
  assert.ok(route.src.startsWith('^') && route.src.endsWith('$'), route.src);
  assert.equal(route.caseSensitive, true, route.src);
  assert.ok(!route.dest?.startsWith('http'), 'Do not proxy unknown URLs to an external site');
}

const mimeTypes = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.txt': 'text/plain', '.xml': 'application/xml', '.json': 'application/json',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2'
};
function fileAt(pathname) {
  const file = resolve(output, '.' + pathname);
  if (file !== output && !file.startsWith(output + '/')) return null;
  try { return statSync(file).isFile() ? file : null; } catch { return null; }
}
function responseFor(requestUrl) {
  const url = new URL(requestUrl, 'https://terramove.hu');
  const headers = {};
  function fromFile(file, status = 200) {
    assert.ok(file, `Missing build file for ${requestUrl}`);
    return {
      status, file, headers: { 'content-type': mimeTypes[extname(file).toLowerCase()], ...headers },
      body: readFileSync(file)
    };
  }
  for (const route of routes) {
    if (route.handle === 'filesystem') {
      const file = fileAt(url.pathname);
      if (file) return fromFile(file);
      continue;
    }
    const regex = new RegExp(route.src, route.caseSensitive ? '' : 'i');
    if (!regex.test(url.pathname)) continue;
    for (const [key, value] of Object.entries(route.headers ?? {})) {
      headers[key.toLowerCase()] = url.pathname.replace(regex, value);
    }
    if (headers.location && route.status >= 300 && route.status < 400) {
      // Vercel passes through the query string unless the destination replaces it.
      if (!headers.location.includes('?')) headers.location += url.search;
      return { status: route.status, headers, body: Buffer.alloc(0) };
    }
    if (route.continue) continue;
    if (route.dest) return fromFile(fileAt(url.pathname.replace(regex, route.dest)), route.status ?? 200);
    throw Error(`Unhandled route for ${requestUrl}`);
  }
  throw Error(`No terminating route for ${requestUrl}`);
}

const sitemap = readFileSync(resolve(output, 'sitemap.xml'), 'utf8');
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert.equal(pages.length, 7, 'Update hosting routes intentionally when adding approved pages');
for (const pathname of pages) {
  for (const query of ['', '?utm_source=hosting-check']) {
    const response = responseFor(pathname + query);
    assert.equal(response.status, 200, pathname);
    assert.equal(response.headers['cache-control'], 'no-cache');
    assert.ok(response.body.toString().includes(`href="https://terramove.hu${pathname}"`), pathname);
    assert.equal(relative(output, response.file), pathname === '/' ? 'index.html' : pathname.slice(1) + '/index.html');
  }
  if (pathname !== '/') {
    for (const suffix of ['/', '//', '/index.html', '/index.html/']) {
      const response = responseFor(pathname + suffix + '?utm_source=hosting-check');
      assert.equal(response.status, 301, pathname + suffix);
      assert.equal(response.headers.location, pathname + '?utm_source=hosting-check');
      assert.equal(responseFor(response.headers.location).status, 200);
    }
  }
}
for (const pathname of ['/kezdolap', '/kezdolap/', '/index.html', '/index.html/']) {
  const response = responseFor(pathname + '?utm_source=hosting-check&x=1');
  assert.equal(response.status, 301, pathname);
  assert.equal(response.headers.location, '/?utm_source=hosting-check&x=1');
}
console.log('PASS: 7 prerendered pages, canonical redirects and query preservation');

for (const pathname of [
  '/kalkulator', '/kalkulator/', '/tudastar', '/tudastar/tehertaxi-rendeles',
  '/nincs-ilyen-oldal', '/nincs-ilyen-oldal/', '/szolgaltatasok/nincs-ilyen',
  '/szolgaltatasok/sittszallitas/tobb', '/szolgaltatasok/sittszallitas.js',
  '/arainkx', '/Araink', '/KEZDOLAP', '/index.csr.html', '/404.html',
  '/missing.js', '/missing.css', '/assets/missing.webp', '/assets/cover.webp/missing',
  '/favicon.ico/missing', '/robots.txt/missing', '/.well-known/missing.json'
]) {
  const response = responseFor(pathname + '?utm_source=hosting-check');
  assert.equal(response.status, 404, pathname);
  assert.equal(relative(output, response.file), '404.html');
  assert.match(response.body.toString(), /<meta name="robots" content="noindex,follow">/);
  assert.equal(response.headers['x-robots-tag'], 'noindex');
  assert.equal(response.headers['cache-control'], 'no-cache');
}
console.log('PASS: retired, unknown, malformed and missing-asset URLs return 404/noindex');

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = resolve(directory, entry.name);
    return entry.isDirectory() ? filesUnder(file) : [file];
  });
}
const staticFiles = filesUnder(output).filter(file => extname(file) !== '.html');
for (const file of staticFiles) {
  const pathname = '/' + relative(output, file);
  const response = responseFor(pathname + '?v=hosting-check');
  assert.equal(response.status, 200, pathname);
  assert.equal(response.file, file, pathname);
  assert.deepEqual(response.body, readFileSync(file), pathname);
  assert.ok(!response.headers.location, pathname);
}
for (const pathname of ['/llms.txt', '/robots.txt', '/sitemap.xml', '/ai-catalog.json', '/.well-known/ai-catalog.json', '/.well-known/ard.json']) {
  const response = responseFor(pathname);
  assert.ok(!response.body.toString().trimStart().startsWith('<!doctype'), pathname);
  assert.equal(response.headers['cache-control'], 'public, max-age=300');
  if (pathname.endsWith('.json')) {
    assert.match(response.headers['content-type'], /^application\/json/);
    JSON.parse(response.body.toString());
  } else if (pathname.endsWith('.txt')) assert.match(response.headers['content-type'], /^text\/plain/);
  else assert.match(response.headers['content-type'], /^application\/xml/);
}
console.log(`PASS: ${staticFiles.length} real static files and discovery content types`);
console.log('OK: local Vercel routing/configuration simulation. A preview deployment is still required to confirm Vercel edge behavior.');

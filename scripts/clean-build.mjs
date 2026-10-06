import { rmSync } from 'node:fs';
// Remove only this project's generated output before rebuilding.
rmSync(new URL('../dist/sitt-transport/', import.meta.url), { recursive: true, force: true });

// Cross-platform SPA fallback for GitHub Pages.
// Copies the neutral SPA fallback shell (build/200.html, emitted by
// adapter-static's `fallback` option) -> build/404.html so client-side routing
// works on deep links / refresh. Sourcing from 200.html (not index.html) keeps
// the prerendered home page intact at build/index.html — index.html is now real
// crawler-visible content, not the empty shell (Wave 3 PR 3.1, SEO prerender).
// Replaces the shell-specific `cp` which failed on Windows (audit 2026-05-13,
// Wave 0 PR 0.2).
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const src = resolve('build', '200.html');
const dest = resolve('build', '404.html');

if (!existsSync(src)) {
  console.error(`[postbuild] ${src} not found — did "vite build" run first (adapter fallback: '200.html')?`);
  process.exit(1);
}

copyFileSync(src, dest);
console.log('[postbuild] build/404.html SPA fallback created from build/200.html');

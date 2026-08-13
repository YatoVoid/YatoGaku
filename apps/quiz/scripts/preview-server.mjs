// Production-preview static server for E2E.
//
// `npm run build` emits assets under the GitHub Pages base path `/2026-Smart-Quiz/`
// (SvelteKit `paths.base`). A plain `serve build -s` serves the build at root, so the
// baked `/2026-Smart-Quiz/...` asset/route URLs 404 and the app never hydrates.
//
// This server mirrors the real GitHub Pages layout so Playwright can exercise the
// actual production artifact:
//   - mounts `build/` under the base prefix `/2026-Smart-Quiz/`
//   - 302-redirects any root-level request (e.g. `/alphabet`) into the base prefix,
//     so the existing root-relative `page.goto('/...')` specs reach the app unchanged
//   - serves the SPA fallback (`200.html`) for extensionless routes under the base
//     that were not prerendered (deep-link parity with the GH Pages 404.html fallback)
//   - returns a real 404 for missing *assets* (paths with an extension) so a broken
//     asset reference still fails the E2E run instead of silently falling back
//
// Port + base are overridable via env for reuse.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, normalize, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT || process.argv[2] || 4173);
const BASE = process.env.PREVIEW_BASE || '/2026-Smart-Quiz';
const ROOT = fileURLToPath(new URL('../build', import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.map': 'application/json; charset=utf-8'
};

function send(res, status, body, type) {
  res.writeHead(status, {
    'content-type': type || 'text/plain; charset=utf-8',
    'cache-control': 'no-store'
  });
  res.end(body);
}

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {
    /* not a file */
  }
  return null;
}

async function resolveFile(relPath) {
  // Prevent path traversal, then resolve route -> static file.
  const clean = normalize(relPath).replace(/^(\.\.([/\\]|$))+/, '');
  if (clean === '/' || clean === '' || clean === '\\') {
    return tryFile(join(ROOT, 'index.html'));
  }
  const candidates = [
    join(ROOT, clean), // exact file: /_app/..., /favicon.png, /manifest.json
    join(ROOT, `${clean}.html`), // prerendered route: /alphabet -> alphabet.html
    join(ROOT, clean, 'index.html') // nested index, if any
  ];
  for (const c of candidates) {
    const f = await tryFile(c);
    if (f) return f;
  }
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const path = decodeURIComponent(url.pathname);

    // Funnel everything under the base prefix (mirrors GH Pages `/2026-Smart-Quiz/`).
    if (path === BASE) {
      res.writeHead(302, { location: `${BASE}/${url.search}` });
      return res.end();
    }
    if (!path.startsWith(`${BASE}/`)) {
      res.writeHead(302, { location: `${BASE}${path === '/' ? '/' : path}${url.search}` });
      return res.end();
    }

    const relPath = path.slice(BASE.length) || '/';
    const file = await resolveFile(relPath);
    if (file) {
      const body = await readFile(file);
      return send(res, 200, body, MIME[extname(file)] || 'application/octet-stream');
    }

    // Missing asset (has an extension) -> real 404 (don't mask broken references).
    if (extname(relPath)) {
      return send(res, 404, `Not found: ${relPath}`);
    }

    // Extensionless route -> SPA fallback (matches GH Pages 404.html deep-link boot).
    const fallback = await tryFile(join(ROOT, '200.html'));
    if (fallback) {
      const body = await readFile(fallback);
      return send(res, 200, body, MIME['.html']);
    }
    return send(res, 404, 'Not found');
  } catch (err) {
    send(res, 500, `Preview server error: ${err && err.message}`);
  }
});

server.listen(PORT, () => {
  console.log(`[preview] serving ${ROOT} at http://localhost:${PORT}${BASE}/`);
});

# Vendored: kana trainer

- Source repo: https://github.com/vedxyz/kana
- Commit vendored: `a2df03af2815675903126d52eca50654caa23a4c`
- Date vendored: 2026-08-14
- License: MIT, see `LICENSE` in this directory (copied unmodified from upstream)

Source copied as-is from the upstream repo root, `.git` history excluded. No
logic changes made.

## Config change needed to build inside this monorepo

`npm run build` (`tsc && vite build`) failed with syntax errors from
`../../node_modules/@types/node/ffi.d.ts`. TypeScript's default `typeRoots`
behavior walks up parent directories for any `node_modules/@types` folder.
Since `apps/kana` has no `@types/node` of its own, it was picking up the
root Docusaurus project's `@types/node@26.2.0`, whose `.d.ts` syntax the
kana project's TypeScript 4.9.5 cannot parse.

Fix: added `"typeRoots": ["./node_modules/@types"]` to `apps/kana/tsconfig.json`
to stop it from looking at the parent project's types. This is a one-line
config addition, not a logic change; it only affects which `@types` packages
TypeScript considers, and only matters because this project now lives nested
inside another npm project instead of standalone.

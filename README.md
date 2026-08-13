# YatoGaku

A static Japanese-learning website. It aggregates existing open source
learning tools rather than rebuilding a UI or SRS engine from scratch. Work
in progress.

## Structure

- Site root: a Docusaurus (classic, TypeScript) site that serves as the shell
  and doc/lesson navigation.
- `apps/kana/`: a kana (hiragana/katakana) trainer, vendored from
  [vedxyz/kana](https://github.com/vedxyz/kana).
- `apps/quiz/`: a kanji/vocabulary/grammar reference with SM-2 spaced
  repetition, vendored from the `svelte-app/` subdirectory of
  [VictorAurelius/2026-Smart-Quiz](https://github.com/VictorAurelius/2026-Smart-Quiz).

`docs/SOURCES.md` records why each upstream project was chosen, license
verification, and the projects that were considered and rejected.

## Licenses

This repo's own code (Docusaurus config, glue code, docs, README) is MIT
licensed, see `LICENSE`. `apps/kana/` and `apps/quiz/` are vendored copies of
upstream MIT-licensed projects and carry their own `LICENSE` and
`VENDORED.md` files recording the exact commit vendored.

## Building

Each piece can build on its own, or all three can build and assemble into
one deployable tree in a single step.

### Everything at once

```
npm install
npm --prefix apps/kana install
npm --prefix apps/quiz install
npm run build:all
```

Runs the root Docusaurus build, the kana build, and the quiz build, then
copies the kana and quiz static output into `build/apps/kana/` and
`build/apps/quiz/`. The result in `build/` is the full site, ready to serve
or deploy as-is.

### One piece at a time

```
npm install && npm run build        # site root, output to build/
cd apps/kana && npm install && npm run build   # output to apps/kana/dist/
cd apps/quiz && npm install && npm run build   # output to apps/quiz/build/
```

## Deployment

`.github/workflows/deploy.yml` builds all three pieces with `npm run
build:all` and publishes `build/` to GitHub Pages on every push to `main`,
or on manual dispatch. `docusaurus.config.ts` assumes this repo lives at
`github.com/YatoVoid/YatoGaku` (`url: https://YatoVoid.github.io`, `baseUrl:
/YatoGaku/`); if it ends up somewhere else, update those two fields and the
base path settings in `apps/kana/vite.config.ts` and
`apps/quiz/svelte.config.js` to match. GitHub Pages itself needs to be set to
the "GitHub Actions" source in the repo's Settings once this is pushed, since
that setting cannot be configured from inside the repo.

## Status

The three pieces build independently and assemble into one deployable tree
via `npm run build:all`, verified locally by serving the assembled `build/`
directory and loading `/`, `/apps/kana/`, and `/apps/quiz/` in a real
browser. The GitHub Actions deploy workflow has not been exercised against
a live GitHub Pages deployment yet, since this repo has not been pushed to a
remote. No content (kanji data, grammar lessons, translation layer) has been
added yet; `apps/quiz` still ships its original Vietnamese-paired content,
see `docs/SOURCES.md` for that caveat.

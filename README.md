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

Each piece builds independently.

### Site root (Docusaurus)

```
npm install
npm run build
```

Output goes to `build/`.

### Kana trainer

```
cd apps/kana
npm install
npm run build
```

Output goes to `apps/kana/dist/`.

### Quiz app

```
cd apps/quiz
npm install
npm run build
```

Output goes to `apps/quiz/build/`.

## Status

Scaffolding stage. The three pieces build independently but are not yet
wired together into one deployable site (no shared nav, no copying
`apps/kana` and `apps/quiz` build output into the Docusaurus static build).
No content (kanji data, grammar lessons, translation layer) has been added
yet.

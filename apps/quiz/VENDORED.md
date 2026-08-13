# Vendored: kanji/vocab/grammar/SRS quiz app

- Source repo: https://github.com/VictorAurelius/2026-Smart-Quiz
- Subdirectory vendored: `svelte-app/`
- Commit vendored: `63e9450e028d18303a84e00a04c3d41c8d2fe03b`
- Date vendored: 2026-08-14
- License: MIT, see `LICENSE` in this directory (copied unmodified from upstream)

Source copied as-is from the upstream repo's `svelte-app/` subdirectory,
`.git` history excluded. No logic changes made.

## Base path change for hosting under this site

Upstream hardcodes production `paths.base` to `/2026-Smart-Quiz` in
`svelte.config.js`, matching their own deploy at
victoraurelius.github.io/2026-Smart-Quiz/. Changed to
`/YatoGaku/apps/quiz` to match where this app is served from inside the
assembled YatoGaku site (github.com/YatoVoid/YatoGaku, project pages,
this app copied to `build/apps/quiz/`). Path only, no logic changed.

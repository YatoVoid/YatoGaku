# Vendored: kanji/vocab/grammar/SRS quiz app

- Source repo: https://github.com/VictorAurelius/2026-Smart-Quiz
- Subdirectory vendored: `svelte-app/`
- Commit vendored: `63e9450e028d18303a84e00a04c3d41c8d2fe03b`
- Date vendored: 2026-08-14
- License: MIT, see `LICENSE` in this directory (copied unmodified from upstream)

Source copied as-is from the upstream repo's `svelte-app/` subdirectory,
`.git` history excluded. Three changes made since, described below.

## Base path change for hosting under this site

Upstream hardcodes production `paths.base` to `/2026-Smart-Quiz` in
`svelte.config.js`, matching their own deploy at
victoraurelius.github.io/2026-Smart-Quiz/. Changed to
`/YatoGaku/apps/quiz` to match where this app is served from inside the
assembled YatoGaku site (github.com/YatoVoid/YatoGaku, project pages,
this app copied to `build/apps/quiz/`). Path only, no logic changed.

## Made English the default practice direction

Upstream's vocabulary and grammar data already carries a real, populated
`english` field on every item (confirmed: 0 empty across all N5 minna
lessons, N4/N3/N2 course lessons, kanji N1-N3 data), and the underlying
`QuizDirection` type and `quizUtils.ts` already fully support `ja-en`/
`en-ja`. But the lesson page's practice-direction selector
(`src/routes/course/[courseId]/lesson/[id]/+page.svelte`) only exposed
three options (ja-vi, vi-ja, vi-romaji), missing English entirely, and
`src/lib/stores/progress.ts`'s default settings defaulted to `ja-vi`.

Added a `ja-en` option to the lesson page's selector (kept the three
existing Vietnamese-pair options, did not remove them) and made it the
default `selectedDirection`; changed the four `defaultDirection: 'ja-vi'`
occurrences in `progress.ts` to `'ja-en'`. Also fixed
`src/routes/quiz/[mode]/+page.svelte`'s direction label, which had no
`ja-en`/`en-ja` case and silently mislabeled English mode as "Nhật →
Romaji"; added explicit cases for both plus a safe fallback.

Not fixed: Conversations data (`ConversationPattern`/`DialogueLine`) has
no `english` field at all, Vietnamese only. Left as a known limitation,
see docs/SOURCES.md, rather than authoring 110 dialogue translations
under this key result's scope.

## Translated remaining UI chrome to English

Following on from the direction fix above, translated the app's
remaining Vietnamese interface chrome (not learning content): the home
page (`src/routes/+page.svelte`) hero and tools list; the breadcrumb/
page-title system (`src/lib/navigation/routeMeta.ts`), which affects
every workspace route, not just the home page; the error page
(`+error.svelte`); the quiz results page (`results/+page.svelte`); and
the kanji library page (`kanji/+page.svelte`). Updated
`src/tests/routeMeta.test.ts`, which asserted the old Vietnamese
breadcrumb labels, to match.

Deliberately not touched: individual lesson titles (both the Minna no
Nihongo course lessons and the kanji lesson library) carry an embedded
Vietnamese subtitle baked directly into their data (e.g. "わたしは
～です (Giới thiệu bản thân)", "数字・基本 (Số đếm & Cơ bản)"). This is
lesson content, not interface chrome, and editing it title-by-title
across dozens of lessons was judged out of scope here, same reasoning
as leaving Conversations untranslated.

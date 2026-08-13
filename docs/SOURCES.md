---
id: sources
---

# Upstream projects

YatoGaku is built on top of existing open source Japanese learning tools rather than an invented UI or a rewritten SRS engine. This file records which projects were selected, why, their license, and where their code lives in this repo. Every license claim here was checked against the actual `LICENSE` file content in the upstream repo, not the license badge or the repo description.

## Site shell / UI base: Docusaurus

- Repo: https://github.com/facebook/docusaurus
- License: MIT (verified against `LICENSE` at repo root)
- Maintained by: Meta, 65,900+ stars, commits as recent as this week
- Why: Docusaurus is a real, widely used, human designed documentation site generator with sidebar based lesson navigation, dark mode, search, and mobile responsive layout out of the box. It has official first party support for building and deploying to GitHub Pages. Using it as the site shell means the grammar lesson path, the resource index, and the dashboard all sit inside a real, already designed interface instead of one built from scratch.
- Where it lives: the site root (`docusaurus.config.ts`, `sidebars.ts`, `src/`, `docs/`) will be the Docusaurus project itself once scaffolded in Task 2. Custom pages (dashboard, drill launchers) are added as Docusaurus React pages/components, not a separate framework bolted on top of it.

## Kana trainer: vedxyz/kana

- Repo: https://github.com/vedxyz/kana
- Live demo: https://vedxyz.github.io/kana/ (already deployed as a static GitHub Pages site, proving the build output works there)
- License: MIT (verified against `LICENSE` at repo root, copyright Ved, 2023)
- Stack: React + TypeScript + Vite + Mantine UI + wanakana (kana/romaji conversion, itself MIT licensed)
- Maintained: last push 2026-08-07, actively developed, 35 stars
- Why: covers hiragana and katakana training with multiple practice modes, is a real finished app (not a toy), builds to static output, and its React/Vite stack integrates cleanly alongside a Docusaurus site as a separately built sub-app.
- Where it will live: vendored under `apps/kana/` as a subtree/vendored copy of the upstream source, built independently, output copied into the Docusaurus static build under `/apps/kana/` at deploy time (Task 2/3).

## Kanji, vocabulary, grammar reference, and SRS: VictorAurelius/2026-Smart-Quiz

- Repo: https://github.com/VictorAurelius/2026-Smart-Quiz
- Live demo: https://victoraurelius.github.io/2026-Smart-Quiz/ (already deployed as a static GitHub Pages PWA)
- License: MIT (verified against `LICENSE` at repo root, copyright Smart Quiz contributors, 2025-2026)
- Stack: SvelteKit 2, Svelte 5, TypeScript strict, Tailwind, `@sveltejs/adapter-static` (prerendered static output, no server required), Vitest with 973 passing tests, Playwright e2e tests
- Maintained: last push 2026-07-08, created 2026-02-10
- Why: this is the closest match found to the objective's kanji/vocab/grammar/SRS requirement in a single project. It already ships JLPT N5 through N1 kanji with stroke order, a searchable grammar reference, JLPT vocabulary, flashcard/multiple-choice/typing quiz modes, SM-2 based spaced repetition with leech detection, and full timed JLPT mock exams, all offline-first and installable as a PWA. Building this from scratch, as multiple separate homemade features, is exactly what the objective prohibits.
- Language caveat, investigated and mostly resolved in a later key result: this app's data ships bilingual Japanese/Vietnamese content by default, but investigation found every `VocabItem` and `GrammarItem` also carries a real, fully populated `english` field (confirmed 0 empty entries across all 25 N5 minna lessons, N4/N3/N2 course lessons, and kanji N1-N3 data), and the direction system (`quizUtils.ts`) already had correct `ja-en`/`en-ja` handling built in. The gap was that the lesson-page practice selector never exposed an English option and defaulted to Vietnamese. Fixed: added the English option, made it the default (Vietnamese options kept, not removed), and translated the persistent sidebar nav and settings page to English. Remaining known gaps: the Conversations feature (110 dialogue patterns) has no English field in its data type at all, Vietnamese only, and was not translated (writing 110 dialogue translations was judged out of scope for this key result, since doing it under time pressure without review risks the kind of invented/rewritten content this project avoids elsewhere); the home page hero text and the breadcrumb/page-title system also remain Vietnamese, not yet translated. See `apps/quiz/VENDORED.md` for the exact diffs and reasoning.
- Where it will live: vendored under `apps/quiz/` as a subtree/vendored copy of the upstream `svelte-app/` source, built independently, output copied into the Docusaurus static build under `/apps/quiz/` at deploy time (Task 2/3).

## Considered and rejected

- **georgescutelnicu/Kitsuno** — described as a hiragana/katakana/kanji flashcard platform, but `gh api repos/georgescutelnicu/Kitsuno` reports `license: null` (no LICENSE file exists, despite the README claiming MIT), and it requires a Java Spring Boot + PostgreSQL backend, which cannot run on GitHub Pages. Rejected on both license and hosting grounds.
- **rdunk/kana** — clean, actively used (kana.party), but `gh api repos/rdunk/kana` reports `license: null`: no LICENSE file exists in the repo, so it is all rights reserved by default and not legally reusable. Rejected on license grounds alone.
- **learn-awesome/flashcard** — small, localStorage based Vue SRS flashcard component, but the repo is archived (read only since 2021) and its license reports as `NOASSERTION` (ambiguous, not a confirmed permissive grant). Rejected: unmaintained and unverifiable license.
- **h16nning/skola** — well built local-first SRS flashcard PWA using FSRS, but licensed AGPL-3.0. AGPL's network-use copyleft clause would put unusual obligations on a static site meant to be freely rehosted/forked by anyone; rejected in favor of MIT licensed alternatives to keep the whole stack uniformly permissive.
- **ShiraKamiSRS**, **SamToki/KanaMaster**, **NeutronX-dev/kana-master**, **justremember/kana-input-trainer** — all GPL-3.0. Rejected for the same copyleft reasoning as skola.
- **mifunetoshiro/kanjium** — large, well known kanji/pitch-accent data resource (344 stars), but `license: NOASSERTION`, no clear grant to redistribute. Not vendored; may be linked to as an external reference resource instead of copied into this repo.
- **KaanDarcey/Tensai** — Japanese vocab SRS app, but no LICENSE file (`license: null`) and only 2 stars with no activity since 2023. Rejected on license and maintenance grounds.

## Data sources considered for later content key results (not yet vendored)

These were found during research and are recorded here so a future key result does not have to re-research them. None were vendored in this key result since KR1 is scoped to selecting the app/engine projects and scaffolding, not populating content.

- **davidluzgouveia/kanji-data** — https://github.com/davidluzgouveia/kanji-data, MIT license (verified), JSON kanji dataset with JLPT levels and WaniKani cross references. Useful for filling English meanings into the Smart Quiz kanji data.
- **jamsinclair/open-anki-jlpt-decks** — https://github.com/jamsinclair/open-anki-jlpt-decks, MIT license (verified), JLPT vocabulary as CSV, English glosses included.
- **Bluskyo/JLPT_Vocabulary** — https://github.com/Bluskyo/JLPT_Vocabulary, MIT license (verified), JLPT vocabulary converted from tanos.co.uk into JSON/CSV.
- **open-spaced-repetition/ts-fsrs** — https://github.com/open-spaced-repetition/ts-fsrs, MIT license (verified), TypeScript implementation of the FSRS scheduling algorithm, more modern than the SM-2 algorithm Smart Quiz currently uses. Noted as a possible future upgrade path for the SRS engine, not adopted in this key result to avoid scope creep: Smart Quiz's existing SM-2 implementation already meets the objective's SRS requirement.

## Grammar explanation sources (linked, not copied)

Per the objective, grammar explanations are not rewritten. Grammar lesson pages in this site link out to (or embed via iframe where the source's terms allow it) the existing explanations rather than restating them:

- Tae Kim's Guide to Japanese Grammar — http://www.guidetojapanese.org/learn/
- Imabi — https://imabi.org/
- Wasabi grammar reference — https://www.wasabi-jpn.com/japanese-grammar/wasabis-online-japanese-grammar-reference/
- Tofugu grammar reference — https://www.tofugu.com/japanese-grammar/

Listening/reading resources are linked the same way (NHK lessons, Erin's Challenge), and dictionary lookup links out to Jisho. None of these are copied into this repo; the grammar lesson pages built in later key results are index pages that organize links to these sources by JLPT level, plus a short factual note on what each lesson covers, not a rewrite of the explanation itself.

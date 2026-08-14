<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getKanjiLessonData } from '$lib/data/kanji/lessons';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { kanaToRomaji } from '$lib/utils/kanaUtils';
  import StrokeOrder from '$lib/components/kanji/StrokeOrder.svelte';
  import RadicalBreakdown from '$lib/components/kanji/RadicalBreakdown.svelte';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import { ArrowLeft, ArrowRight, Search, Volume2 } from 'lucide-svelte';

  let searchTerm = '';
  let selectedCharacter = '';
  $: lessonId = Number($page.params.lesson || 0);
  $: lessonData = lessonId > 0 ? getKanjiLessonData(lessonId) : null;
  $: kanjiList = lessonData?.kanji ?? [];
  $: filteredKanji = kanjiList.filter(item => {
    const query = searchTerm.trim().toLowerCase();
    return !query || item.character.includes(query) || item.onyomi.some(value => value.toLowerCase().includes(query)) || item.kunyomi.some(value => value.toLowerCase().includes(query)) || item.vietnamese.toLowerCase().includes(query) || item.english.toLowerCase().includes(query);
  });
  $: if (filteredKanji.length && !filteredKanji.some(item => item.character === selectedCharacter)) selectedCharacter = filteredKanji[0].character;
  $: selected = kanjiList.find(item => item.character === selectedCharacter) ?? filteredKanji[0] ?? null;
  $: selectedIndex = selected ? kanjiList.findIndex(item => item.character === selected.character) : -1;

  function move(offset: number) {
    const next = kanjiList[selectedIndex + offset];
    if (next) selectedCharacter = next.character;
  }
</script>

<svelte:head><title>Kanji Study Desk · Lesson {lessonId} · YatoGaku</title></svelte:head>

{#if lessonData && selected}
  <div class="kanji-desk">
    <aside class="lesson-timeline" aria-label="Kanji in this lesson">
      <div class="timeline-heading"><p>Lesson {lessonData.lessonNumber}</p><h1>{lessonData.title}</h1><span>{kanjiList.length} kanji</span></div>
      <label class="search"><Search size={16} aria-hidden="true" /><span class="sr-only">Search kanji</span><input bind:value={searchTerm} placeholder="Character, reading, meaning..." /></label>
      <div class="glyph-list">
        {#each filteredKanji as item, index}
          <button class:active={selected.character === item.character} on:click={() => selectedCharacter = item.character} aria-current={selected.character === item.character ? 'true' : undefined}>
            <span class="glyph">{item.character}</span><span><strong>{item.english}</strong><small>{item.onyomi[0] || item.kunyomi[0] || '—'}</small></span><em>{index + 1}</em>
          </button>
        {/each}
        {#if filteredKanji.length === 0}<p class="no-result">No matching kanji found.</p>{/if}
      </div>
    </aside>

    <main class="glyph-focus">
      <div class="focus-nav">
        <button on:click={() => move(-1)} disabled={selectedIndex <= 0} aria-label="Previous kanji"><ArrowLeft size={20} aria-hidden="true" /></button>
        <span>{selectedIndex + 1} / {kanjiList.length}</span>
        <button on:click={() => move(1)} disabled={selectedIndex >= kanjiList.length - 1} aria-label="Next kanji"><ArrowRight size={20} aria-hidden="true" /></button>
      </div>
      <div class="hero-glyph" aria-label={`Kanji ${selected.character}`}>{selected.character}</div>
      <button class="speak" on:click={() => playJapaneseAudio(selected.character)}><Volume2 size={20} aria-hidden="true" /> Listen to this character</button>
      <dl class="readings">
        <div><dt>Âm On</dt><dd>{selected.onyomi.join('、') || '—'}</dd></div>
        <div><dt>Âm Kun</dt><dd>{selected.kunyomi.join('、') || '—'}</dd></div>
        <div><dt>Stroke count</dt><dd>{selected.strokeCount}</dd></div>
      </dl>
      <div class="meaning"><strong>{selected.english}</strong></div>
      <div class="mobile-actions"><a href="{base}/kanji/{lessonId}/quiz/flashcard?direction=kanji-en">Practice this character <ArrowRight size={16} aria-hidden="true" /></a></div>
    </main>

    <section class="study-panel" aria-label="Kanji details">
      <section><div class="panel-heading"><p>Stroke order</p><span>{selected.strokeCount} strokes</span></div><StrokeOrder character={selected.character} size={180} /></section>
      <section><div class="panel-heading"><p>Components</p></div><RadicalBreakdown character={selected.character} /></section>
      {#if selected.examples.length}
        <section><div class="panel-heading"><p>Example words</p><span>{selected.examples.length} words</span></div><div class="examples">{#each selected.examples as example}<article><button on:click={() => playJapaneseAudio(example.kana)} aria-label={`Play pronunciation of ${example.word}`}><Volume2 size={16} aria-hidden="true" /></button><div><strong>{example.word}</strong><span>{example.kana} · {kanaToRomaji(example.kana)}</span></div><p>{example.meaning}</p></article>{/each}</div></section>
      {/if}
    </section>
  </div>
{:else}
  <PageEmpty title="Kanji lesson not found" description={`Lesson ${lessonId} has no kanji data yet.`} action={{ label: 'Back to kanji list', href: '/kanji' }} />
{/if}

<style>
  .kanji-desk { min-height: calc(100svh - 76px); display: grid; grid-template-columns: minmax(210px, 260px) minmax(300px, .85fr) minmax(340px, 1.15fr); background: var(--color-card); }
  .lesson-timeline, .glyph-focus, .study-panel { min-width: 0; padding: clamp(1rem, 3vw, 2rem); }
  .lesson-timeline { border-right: 1px solid var(--color-border); background: var(--color-background); }
  .timeline-heading p { margin: 0; color: var(--color-primary); font-size: .72rem; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
  .timeline-heading h1 { margin: 4px 0; font-family: var(--font-japanese); font-size: 1.05rem; line-height: 1.35; }
  .timeline-heading span { color: var(--color-muted-foreground); font-size: .75rem; }
  .search { min-height: 44px; display: flex; align-items: center; gap: var(--spacing-xs); margin: var(--spacing-lg) 0 var(--spacing-sm); padding: 0 var(--spacing-sm); background: var(--color-card); border: 1px solid var(--color-border); border-radius: var(--radius-control); }
  .search input { min-width: 0; flex: 1; background: transparent; border: 0; outline: 0; }
  .glyph-list { display: grid; gap: 2px; }
  .glyph-list button { min-height: 58px; display: grid; grid-template-columns: 38px minmax(0, 1fr) auto; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-xs) var(--spacing-sm); color: var(--color-foreground); background: transparent; border: 0; border-radius: var(--radius-control); text-align: left; cursor: pointer; }
  .glyph-list button:hover, .glyph-list button.active { background: var(--color-primary-subtle); }
  .glyph-list button.active { color: var(--color-primary); }
  .glyph-list .glyph { font-family: var(--font-japanese); font-size: 1.65rem; }
  .glyph-list button > span:nth-child(2) { min-width: 0; display: grid; }
  .glyph-list strong, .glyph-list small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .glyph-list small, .glyph-list em { color: var(--color-muted-foreground); font-size: .68rem; font-style: normal; }
  .no-result { color: var(--color-muted-foreground); font-size: .82rem; }
  .glyph-focus { display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 1px solid var(--color-border); text-align: center; }
  .focus-nav { width: 100%; display: flex; align-items: center; justify-content: space-between; color: var(--color-muted-foreground); font-size: .75rem; }
  .focus-nav button { width: 44px; height: 44px; display: grid; place-items: center; color: inherit; background: transparent; border: 0; border-radius: var(--radius-control); cursor: pointer; }
  .focus-nav button:hover:not(:disabled) { background: var(--color-muted); }
  .hero-glyph { margin: clamp(1rem, 4vw, 2.5rem) 0; font-family: var(--font-japanese); font-size: clamp(7rem, 15vw, 11rem); font-weight: 600; line-height: .9; }
  .speak { min-height: 44px; display: inline-flex; align-items: center; gap: var(--spacing-xs); padding: 0 var(--spacing-md); color: var(--color-primary); background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-control); cursor: pointer; }
  .readings { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); margin: var(--spacing-xl) 0 var(--spacing-md); border-block: 1px solid var(--color-border); }
  .readings div { padding: var(--spacing-md) var(--spacing-xs); border-right: 1px solid var(--color-border); }
  .readings div:last-child { border-right: 0; }
  .readings dt { color: var(--color-muted-foreground); font-size: .68rem; }
  .readings dd { margin: 4px 0 0; font-family: var(--font-japanese); font-size: .9rem; font-weight: 650; }
  .meaning { display: grid; }
  .meaning strong { font-size: 1.25rem; }
  .mobile-actions { margin-top: var(--spacing-lg); }
  .mobile-actions a { min-height: 44px; display: inline-flex; align-items: center; gap: var(--spacing-sm); color: var(--color-primary); font-weight: 700; text-decoration: none; }
  .study-panel { display: grid; align-content: start; gap: var(--spacing-xl); overflow-y: auto; }
  .study-panel > section { padding-bottom: var(--spacing-xl); border-bottom: 1px solid var(--color-border); }
  .study-panel > section:last-child { border-bottom: 0; }
  .panel-heading { display: flex; justify-content: space-between; margin-bottom: var(--spacing-md); }
  .panel-heading p { margin: 0; font-weight: 750; }
  .panel-heading span { color: var(--color-muted-foreground); font-size: .75rem; }
  .examples article { display: grid; grid-template-columns: 44px minmax(0, 1fr); align-items: center; padding: var(--spacing-sm) 0; border-bottom: 1px solid var(--color-border); }
  .examples article > button { width: 40px; height: 40px; display: grid; place-items: center; color: var(--color-primary); background: transparent; border: 0; border-radius: var(--radius-control); cursor: pointer; }
  .examples article > div { min-width: 0; display: grid; }
  .examples strong { font-family: var(--font-japanese); font-size: 1.05rem; }
  .examples span { color: var(--color-muted-foreground); font-size: .72rem; }
  .examples article > p { grid-column: 2; margin: 2px 0 0; }
  @media (max-width: 1050px) {
    .kanji-desk { grid-template-columns: 220px minmax(0, 1fr); }
    .glyph-focus { border-right: 0; }
    .study-panel { grid-column: 2; border-top: 1px solid var(--color-border); overflow: visible; }
  }
  @media (max-width: 700px) {
    .kanji-desk { display: flex; flex-direction: column; }
    .lesson-timeline { position: static; border-right: 0; border-bottom: 1px solid var(--color-border); }
    .glyph-list { display: flex; overflow-x: auto; padding-bottom: var(--spacing-xs); }
    .glyph-list button { min-width: 72px; grid-template-columns: 1fr; justify-items: center; }
    .glyph-list button > span:nth-child(2), .glyph-list em { display: none; }
    .glyph-focus { order: 2; min-height: 520px; border-bottom: 1px solid var(--color-border); }
    .study-panel { order: 3; border-top: 0; }
    .hero-glyph { font-size: 8rem; }
  }
</style>

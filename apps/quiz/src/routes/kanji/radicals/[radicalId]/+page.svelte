<script lang="ts">
  /**
   * Radical Detail Page — shows kanji for a specific radical with quiz link
   */
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getKanjiItemsByRadical, getRadicals } from '$lib/data/kanji/radicals';
  import type { KanjiItem } from '$lib/types';

  $: radicalId = decodeURIComponent($page.params.radicalId);
  $: kanjiItems = getKanjiItemsByRadical(radicalId) as KanjiItem[];
  $: radicalInfo = getRadicals(radicalId)[0] ?? null;
  $: canQuiz = kanjiItems.length >= 1;
  $: canMC = kanjiItems.length >= 4;

  function startQuiz(mode: string) {
    goto(`${base}/kanji/radicals/${encodeURIComponent(radicalId)}/quiz/${mode}?direction=kanji-vi`);
  }
</script>

<svelte:head>
  <title>Radical {radicalId} — YatoGaku</title>
</svelte:head>

<div class="radical-detail-page">
  <div class="page-header">
    <a href="{base}/kanji/radicals" class="back-link">← Radicals</a>
    <div class="radical-hero">
      <div class="radical-char">{radicalId}</div>
      {#if radicalInfo}
        <div class="radical-meaning">{radicalInfo.meaningVi} · {radicalInfo.meaningEn}</div>
        <div class="radical-strokes">{radicalInfo.strokeCount} strokes</div>
      {/if}
    </div>
  </div>

  {#if kanjiItems.length === 0}
    <div class="no-data">
      <p>No kanji containing this radical were found in the current data.</p>
      <a href="{base}/kanji/radicals" class="ui-button" data-variant="secondary">Back</a>
    </div>
  {:else}
    <div class="kanji-section">
      <h2>{kanjiItems.length} kanji with this radical</h2>
      <div class="kanji-grid">
        {#each kanjiItems as item}
          <a
            href="{base}/kanji/radicals/{encodeURIComponent(radicalId)}/quiz/flashcard?direction=kanji-vi"
            class="kanji-card"
            title="{item.english}"
          >
            <div class="kanji-char">{item.character}</div>
            <div class="kanji-en">{item.english}</div>
            <div class="kanji-vi">{item.english}</div>
          </a>
        {/each}
      </div>
    </div>

    <div class="quiz-section">
      <h2>Practice</h2>
      <div class="quiz-modes">
        <button class="quiz-mode-btn" on:click={() => startQuiz('flashcard')} disabled={!canQuiz}>
          <span class="mode-icon">🃏</span>
          <span class="mode-name">Flashcard</span>
          <span class="mode-desc">Flip cards to memorize</span>
        </button>
        <button class="quiz-mode-btn" on:click={() => startQuiz('mc')} disabled={!canMC}>
          <span class="mode-icon">📝</span>
          <span class="mode-name">Multiple choice</span>
          <span class="mode-desc">{canMC ? 'Choose the correct answer' : 'Needs at least 4 kanji'}</span>
        </button>
        <button class="quiz-mode-btn" on:click={() => startQuiz('typing')} disabled={!canQuiz}>
          <span class="mode-icon">⌨️</span>
          <span class="mode-name">Type the meaning</span>
          <span class="mode-desc">Type the English meaning</span>
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .radical-detail-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-muted-foreground);
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    transition: color var(--motion-standard);
  }

  .back-link:hover {
    color: var(--color-primary);
  }

  .radical-hero {
    text-align: center;
    padding: 1.5rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    margin-bottom: 1.5rem;
  }

  .radical-char {
    font-family: var(--font-japanese);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .radical-meaning {
    font-size: 1.1rem;
    color: var(--color-foreground);
    margin-bottom: 0.25rem;
  }

  .radical-strokes {
    font-size: 0.85rem;
    color: var(--color-muted-foreground);
  }

  .kanji-section {
    margin-bottom: 2rem;
  }

  .kanji-section h2,
  .quiz-section h2 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  .kanji-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 0.5rem;
  }

  .kanji-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 0.5rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    text-decoration: none;
    color: var(--color-foreground);
    transition: border-color var(--motion-standard), transform var(--motion-standard);
    cursor: pointer;
  }

  .kanji-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  .kanji-char {
    font-family: var(--font-japanese);
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .kanji-en {
    font-size: 0.7rem;
    color: var(--color-muted-foreground);
    text-align: center;
    margin-top: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80px;
  }

  .kanji-vi {
    font-size: 0.7rem;
    color: var(--color-primary);
    text-align: center;
  }

  .quiz-modes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.75rem;
  }

  .quiz-mode-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 1rem;
    background: var(--color-card);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-surface);
    cursor: pointer;
    transition: border-color var(--motion-standard), transform var(--motion-standard);
    font-family: inherit;
  }

  .quiz-mode-btn:hover:not(:disabled) {
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  .quiz-mode-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .mode-icon {
    font-size: 1.5rem;
  }

  .mode-name {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .mode-desc {
    font-size: 0.75rem;
    color: var(--color-muted-foreground);
    text-align: center;
  }

  .no-data {
    text-align: center;
    padding: 3rem;
    color: var(--color-muted-foreground);
  }
</style>

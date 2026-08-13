<script lang="ts">
  /**
   * Vocabulary List Page
   * Shows all vocabulary items for a specific lesson
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getLessonData } from '$lib/data/minna/lessons';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { kanaToRomaji } from '$lib/utils/kanaUtils';
  import type { VocabItem } from '$lib/types';

  let searchTerm = '';
  let filterType: 'all' | 'main' | 'additional' | 'kanji' | 'supplementary' = 'all';

  $: lessonId = parseInt($page.params.id || '0');
  $: lessonData = lessonId > 0 ? getLessonData(lessonId) : null;
  $: vocabulary = lessonData?.vocabulary || [];

  $: filteredVocab = vocabulary.filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      item.japanese.toLowerCase().includes(search) ||
      item.kana.toLowerCase().includes(search) ||
      item.vietnamese.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search)
    );
  });

  function speak(text: string, event?: MouseEvent) {
    event?.stopPropagation();
    playJapaneseAudio(text);
  }

  function goBack() {
    goto(`${base}/lesson/${lessonId}`);
  }

  const hasAudio = typeof window !== 'undefined' && 'speechSynthesis' in window;
</script>

<svelte:head>
  <title>Vocabulary - Bài {lessonId} | Smart Quiz</title>
</svelte:head>

{#if lessonData}
  <div class="vocab-page">
    <div class="page-header">
      <h2>📚 Vocabulary - Bài {lessonData.lessonNumber}</h2>
      <p class="subtitle">{lessonData.title}</p>
      <p class="word-count">{vocabulary.length} từ vựng</p>
    </div>

    <!-- Controls -->
    <div class="controls">
      <div class="search-box">
        <input
          type="text"
          placeholder="Search Japanese, Kana, Vietnamese, English..."
          bind:value={searchTerm}
          class="search-input"
        />
        {#if searchTerm}
          <button class="clear-search" on:click={() => searchTerm = ''}>✕</button>
        {/if}
      </div>

      <div class="filter-controls">
        <select bind:value={filterType} class="filter-select">
          <option value="all">All types</option>
          <option value="main">Main</option>
          <option value="additional">Additional</option>
          <option value="kanji">Kanji</option>
          <option value="supplementary">Supplementary</option>
        </select>
      </div>
    </div>

    <div class="results-info">
      {#if searchTerm || filterType !== 'all'}
        <p>Showing <strong>{filteredVocab.length}</strong> of {vocabulary.length} words</p>
      {:else}
        <p>All <strong>{vocabulary.length}</strong> words</p>
      {/if}
    </div>

    <!-- Vocabulary Cards -->
    <div class="vocab-list">
      {#each filteredVocab as item, index}
        <div class="vocab-card">
          <div class="vocab-index">{index + 1}</div>
          <div class="vocab-main">
            <div class="vocab-japanese">{item.japanese}</div>
            {#if item.kana && item.kana !== item.japanese}
              <div class="vocab-kana">{item.kana}</div>
            {/if}
            <div class="vocab-romaji" aria-hidden="true">{kanaToRomaji(item.kana)}</div>
          </div>
          <div class="vocab-meanings">
            <div class="vocab-vietnamese">{item.vietnamese}</div>
            <div class="vocab-english">{item.english}</div>
          </div>
          <div class="vocab-meta">
            <span class="type-badge type-{item.type}">{item.type}</span>
            {#if hasAudio}
              <button class="btn-speak" on:click={(e) => speak(item.kana, e)} title="Listen">
                🔊
              </button>
            {/if}
          </div>
          {#if item.example}
            <div class="vocab-example">
              <span class="example-label">Ex:</span> {item.example}
            </div>
          {/if}
        </div>
      {/each}

      {#if filteredVocab.length === 0}
        <div class="empty-state">
          No vocabulary found matching "{searchTerm}"
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="error-state">
    <h2>Lesson Not Found</h2>
    <p>Lesson {lessonId} does not exist.</p>
    <button class="btn-back" on:click={() => goto(`${base}/`)}>Back to Home</button>
  </div>
{/if}

<style>
  .vocab-page {
    max-width: 800px;
    margin: 0 auto;
  }

  .page-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .header-top {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .page-header h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--color-muted-foreground);
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  .word-count {
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 600;
  }

  .controls {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .search-box {
    flex: 1;
    min-width: 200px;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 0.6rem 2rem 0.6rem 0.75rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    font-size: 0.9rem;
    background: var(--color-card);
    color: var(--color-foreground);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .clear-search {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--color-muted-foreground);
    cursor: pointer;
    font-size: 1rem;
  }

  .filter-select {
    padding: 0.6rem 0.75rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    font-size: 0.85rem;
    background: var(--color-card);
    color: var(--color-foreground);
  }

  .results-info {
    margin-bottom: 0.75rem;
    color: var(--color-muted-foreground);
    font-size: 0.82rem;
  }

  .vocab-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .vocab-card {
    display: grid;
    grid-template-columns: 2rem 1fr 1fr auto;
    gap: 0.75rem;
    align-items: center;
    padding: 0.75rem 1rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    transition: border-color var(--motion-standard);
  }

  .vocab-card:hover {
    border-color: var(--color-primary);
  }

  .vocab-index {
    color: var(--color-muted-foreground);
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
  }

  .vocab-japanese {
    font-family: var(--font-japanese);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .vocab-kana {
    font-family: var(--font-japanese);
    font-size: 0.85rem;
    color: var(--color-primary);
  }

  .vocab-romaji {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    font-style: italic;
    letter-spacing: 0.02em;
  }

  .vocab-vietnamese {
    font-size: 0.95rem;
    font-weight: 500;
  }

  .vocab-english {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
  }

  .vocab-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .type-badge {
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius-surface);
    text-transform: uppercase;
  }

  .type-main { background: var(--color-primary-subtle); color: var(--color-primary); }
  .type-additional { background: var(--color-success-subtle); color: var(--color-success); }
  .type-kanji { background: var(--color-warning-subtle); color: var(--color-primary); }
  .type-supplementary { background: var(--color-border); color: var(--color-muted-foreground); }

  .btn-speak {
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    padding: 0.2rem 0.4rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;
  }

  .btn-speak:hover {
    border-color: var(--color-primary);
  }

  .vocab-example {
    grid-column: 2 / -1;
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    font-style: italic;
    font-family: var(--font-japanese);
  }

  .example-label {
    font-weight: 600;
    font-style: normal;
    color: var(--color-primary);
  }

  .btn-back {
    padding: 0.4rem 0.8rem;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    cursor: pointer;
    font-size: 0.85rem;
    color: var(--color-foreground);
    transition: all 0.2s;
  }

  .btn-back:hover {
    background: var(--color-border);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .empty-state, .error-state {
    text-align: center;
    padding: 3rem;
    color: var(--color-muted-foreground);
  }

  @media (max-width: 600px) {
    .vocab-card {
      grid-template-columns: 1.5rem 1fr auto;
      gap: 0.5rem;
      padding: 0.6rem 0.75rem;
    }

    .vocab-meanings {
      grid-column: 2 / -1;
    }

    .vocab-example {
      grid-column: 1 / -1;
    }

    .controls {
      flex-direction: column;
    }
  }
</style>

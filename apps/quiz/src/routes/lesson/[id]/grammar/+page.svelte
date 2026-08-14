<script lang="ts">
  /**
   * Grammar Patterns Page
   * Shows all grammar patterns for a specific lesson
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getLessonData } from '$lib/data/minna/lessons';
  import type { GrammarItem } from '$lib/types';

  let searchTerm = '';
  let expandedIndex: number | null = null;

  $: lessonId = parseInt($page.params.id || '0');
  $: lessonData = lessonId > 0 ? getLessonData(lessonId) : null;
  $: grammar = lessonData?.grammar || [];

  $: filteredGrammar = grammar.filter(item => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      item.pattern.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search) ||
      item.explanation.toLowerCase().includes(search)
    );
  });

  function toggleExpand(index: number) {
    expandedIndex = expandedIndex === index ? null : index;
  }

  function goBack() {
    goto(`${base}/lesson/${lessonId}`);
  }
</script>

<svelte:head>
  <title>Grammar - Lesson {lessonId} | YatoGaku</title>
</svelte:head>

{#if lessonData}
  <div class="grammar-page">
    <div class="page-header">
      <h2>Grammar - Lesson {lessonData.lessonNumber}</h2>
      <p class="subtitle">{lessonData.title}</p>
      <p class="pattern-count">{grammar.length} grammar points</p>
    </div>

    <!-- Search -->
    <div class="controls">
      <div class="search-box">
        <input
          type="text"
          placeholder="Search patterns, meanings..."
          bind:value={searchTerm}
          class="search-input"
        />
        {#if searchTerm}
          <button class="clear-search" on:click={() => searchTerm = ''}>✕</button>
        {/if}
      </div>
    </div>

    {#if searchTerm}
      <div class="results-info">
        <p>Showing <strong>{filteredGrammar.length}</strong> of {grammar.length} patterns</p>
      </div>
    {/if}

    <!-- Grammar Cards -->
    <div class="grammar-list">
      {#each filteredGrammar as item, index}
        <div class="grammar-card" class:expanded={expandedIndex === index}>
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="grammar-header" on:click={() => toggleExpand(index)}>
            <div class="grammar-main">
              <div class="grammar-pattern">{item.pattern}</div>
              <div class="grammar-meaning">{item.english}</div>
              <div class="grammar-english">{item.english}</div>
            </div>
            <div class="grammar-meta">
              <span class="type-badge type-{item.type}">{item.type}</span>
              <span class="expand-icon">{expandedIndex === index ? '▲' : '▼'}</span>
            </div>
          </div>

          {#if expandedIndex === index}
            <div class="grammar-details">
              <div class="explanation">
                <h4>Explanation</h4>
                <p>{item.explanation}</p>
              </div>

              {#if item.examples && item.examples.length > 0}
                <div class="examples">
                  <h4>Examples</h4>
                  {#each item.examples as example}
                    <div class="example-item">
                      <div class="example-jp">{example.japanese}</div>
                      <div class="example-vi">{example.english}</div>
                      {#if example.english}
                        <div class="example-en">{example.english}</div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}

      {#if filteredGrammar.length === 0}
        <div class="empty-state">
          No grammar patterns found matching "{searchTerm}"
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
  .grammar-page {
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

  .pattern-count {
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 600;
  }

  .controls {
    margin-bottom: 1rem;
  }

  .search-box {
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

  .results-info {
    margin-bottom: 0.75rem;
    color: var(--color-muted-foreground);
    font-size: 0.82rem;
  }

  .grammar-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .grammar-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    overflow: hidden;
    transition: border-color var(--motion-standard);
  }

  .grammar-card:hover {
    border-color: var(--color-primary);
  }

  .grammar-card.expanded {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-surface);
  }

  .grammar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    cursor: pointer;
    gap: 1rem;
  }

  .grammar-pattern {
    font-family: var(--font-japanese);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.15rem;
  }

  .grammar-meaning {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .grammar-english {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  .grammar-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
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

  .expand-icon {
    font-size: 0.7rem;
    color: var(--color-muted-foreground);
  }

  .grammar-details {
    padding: 0 1rem 1rem;
    border-top: 1px solid var(--color-border);
  }

  .grammar-details h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0.75rem 0 0.4rem;
  }

  .explanation p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--color-foreground);
  }

  .examples {
    margin-top: 0.5rem;
  }

  .example-item {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.4rem;
    background: var(--color-background);
    border-radius: var(--radius-control);
    border: 1px solid var(--color-primary);
  }

  .example-jp {
    font-family: var(--font-japanese);
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.15rem;
  }

  .example-vi {
    font-size: 0.85rem;
    color: var(--color-foreground);
  }

  .example-en {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    font-style: italic;
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
    .grammar-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .grammar-meta {
      align-self: flex-end;
    }
  }
</style>

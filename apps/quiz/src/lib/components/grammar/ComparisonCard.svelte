<script lang="ts">
  /**
   * Comparison Card Component
   * Shows comparison title, patterns involved, description, JLPT/difficulty tags
   * Based on createComparisonCard() function from grammar-reference.js
   */

  import { createEventDispatcher } from 'svelte';
  import type { GrammarComparison } from '$lib/types';

  export let comparison: GrammarComparison;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }

  $: tags = (() => {
    const tagList = [];
    if (comparison.jlptLevel) {
      tagList.push({ text: comparison.jlptLevel, className: 'tag-jlpt' });
    }
    if (comparison.difficulty) {
      tagList.push({ text: comparison.difficulty, className: 'tag-difficulty' });
    }
    return tagList;
  })();
</script>

<div
  class="comparison-card"
  on:click={handleClick}
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  <div class="comparison-card-header">
    <h3 class="comparison-card-title">{comparison.title}</h3>
  </div>

  <div class="comparison-card-patterns">
    {#each comparison.patterns as pattern}
      <span class="comparison-pattern-badge">{pattern}</span>
    {/each}
  </div>

  <p class="comparison-card-description">{comparison.english}</p>

  {#if tags.length > 0}
    <div class="comparison-card-meta">
      {#each tags as tag}
        <span class="tag {tag.className}">{tag.text}</span>
      {/each}
    </div>
  {/if}
</div>

<style>
  .comparison-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    padding: 1.25rem;
    cursor: pointer;
    transition: border-color var(--motion-standard), box-shadow var(--motion-standard);
  }

  .comparison-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-surface);
  }

  .comparison-card:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .comparison-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  .comparison-card-title {
    font-family: var(--font-japanese);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin: 0;
  }

  .comparison-card-patterns {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .comparison-pattern-badge {
    padding: 0.375rem 0.75rem;
    background: var(--bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    font-family: var(--font-japanese);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .comparison-card-description {
    font-size: 0.95rem;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
  }

  .comparison-card-description-en {
    font-style: italic;
    color: var(--color-muted-foreground);
  }

  .comparison-card-meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.75rem;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .tag-jlpt {
    background: var(--color-primary-subtle);
    color: var(--color-primary);
  }

  .tag-difficulty {
    background: var(--color-success-subtle);
    color: var(--color-success);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .comparison-card {
      padding: 1rem;
    }

    .comparison-card-title {
      font-size: 1.1rem;
    }

    .comparison-pattern-badge {
      font-size: 0.85rem;
      padding: 0.3rem 0.6rem;
    }

    .comparison-card-description {
      font-size: 0.9rem;
    }
  }
</style>

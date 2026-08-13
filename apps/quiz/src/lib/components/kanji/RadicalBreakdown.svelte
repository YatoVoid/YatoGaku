<script lang="ts">
  import { getRadicals } from '$lib/data/kanji/radicals';
  import { base } from '$app/paths';

  export let character: string;

  $: radicals = getRadicals(character);
</script>

<div class="radical-breakdown">
  {#if radicals.length > 0}
    <div class="rb-header">Radicals ({radicals.length})</div>
    <div class="radical-list">
      {#each radicals as r}
        <a href="{base}/kanji/radicals?q={r.character}" class="radical-item">
          <span class="radical-char">{r.character}</span>
          <span class="radical-name">{r.meaningVi}</span>
          <span class="radical-en">{r.meaningEn}</span>
        </a>
      {/each}
    </div>
  {:else}
    <p class="no-data">No radical data available</p>
  {/if}
</div>

<style>
  .radical-breakdown {
    margin-top: 0.5rem;
  }

  .rb-header {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-muted-foreground);
    margin-bottom: 0.4rem;
  }

  .radical-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .radical-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.5rem;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    text-decoration: none;
    color: var(--color-foreground);
    font-size: 0.8rem;
    transition: border-color 0.15s;
  }

  .radical-item:hover {
    border-color: var(--color-primary);
  }

  .radical-char {
    font-family: var(--font-japanese);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  .radical-name {
    font-weight: 500;
  }

  .radical-en {
    color: var(--color-muted-foreground);
    font-size: 0.7rem;
  }

  .no-data {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }
</style>

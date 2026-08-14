<script lang="ts">
  import type { GrammarPattern } from '$lib/types';
  import { X } from 'lucide-svelte';
  export let pattern: GrammarPattern;
  export let onclose: () => void;
</script>

<section class="inline-detail" aria-labelledby="grammar-detail-title">
  <button class="close" on:click={onclose} aria-label="Close details"><X size={20} aria-hidden="true" /></button>
  <p class="eyebrow">Grammar Details</p>
  <h3 id="grammar-detail-title">{pattern.pattern}</h3>
  <p class="meaning">{pattern.english}</p>
  {#if pattern.explanation}<div class="explanation"><h4>Usage</h4><p>{pattern.explanation}</p></div>{/if}
  {#if pattern.examples?.length}
    <div class="examples"><h4>Examples in Context</h4>{#each pattern.examples as example}<article><p class="japanese">{example.japanese}</p><p>{example.english}</p></article>{/each}</div>
  {/if}
  {#if pattern.meta?.tips}<aside><strong>Memory tip</strong><p>{pattern.meta.tips}</p></aside>{/if}
</section>

<style>
  .inline-detail { position: relative; margin: 0 0 var(--spacing-lg); padding: clamp(1rem, 4vw, 2rem); background: var(--color-card); border: 1px solid var(--color-primary); border-radius: var(--radius-surface); }
  .close { position: absolute; top: var(--spacing-sm); right: var(--spacing-sm); width: 44px; height: 44px; display: grid; place-items: center; color: var(--color-muted-foreground); background: transparent; border: 0; border-radius: var(--radius-control); cursor: pointer; }
  .close:hover { background: var(--color-muted); }
  .eyebrow { margin: 0 0 4px; color: var(--color-primary); font-size: .7rem; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
  h3 { margin: 0; padding-right: 48px; font-family: var(--font-japanese); font-size: 1.4rem; }
  .meaning { display: grid; margin: var(--spacing-sm) 0 var(--spacing-lg); font-weight: 650; }
  h4 { margin: 0 0 var(--spacing-sm); font-size: .85rem; }
  .explanation p, aside p { margin: 0; line-height: 1.65; }
  .examples { margin-top: var(--spacing-lg); }
  article { padding: var(--spacing-md) 0; border-top: 1px solid var(--color-border); }
  article p { margin: 0; }
  .japanese { font-family: var(--font-japanese); font-size: 1.05rem; font-weight: 650; }
  aside { margin-top: var(--spacing-lg); padding: var(--spacing-md); background: var(--color-warning-subtle); border-radius: var(--radius-control); }
</style>

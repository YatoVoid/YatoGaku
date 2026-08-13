<script lang="ts">
  import type { GrammarComparison } from '$lib/types';
  import { X } from 'lucide-svelte';
  export let comparison: GrammarComparison;
  export let onclose: () => void;
</script>

<section class="comparison-detail" aria-labelledby="comparison-title">
  <button on:click={onclose} aria-label="Đóng so sánh"><X size={20} aria-hidden="true" /></button>
  <p>So sánh ngữ pháp</p><h3 id="comparison-title">{comparison.title}</h3>
  <div class="patterns">{#each comparison.patterns as pattern}<span>{pattern}</span>{/each}</div>
  <p class="meaning">{comparison.vietnamese}</p>
  {#if comparison.tips}<aside><strong>Điểm phân biệt</strong><p>{comparison.tips}</p></aside>{/if}
  {#if comparison.examples?.length}<div class="examples">{#each comparison.examples as example}<article><strong>{example.pattern}</strong><p class="japanese">{example.japanese}</p><p>{example.vietnamese}</p></article>{/each}</div>{/if}
</section>

<style>
  .comparison-detail { position: relative; margin: 0 0 var(--spacing-lg); padding: clamp(1rem, 4vw, 2rem); background: var(--color-card); border: 1px solid var(--color-primary); border-radius: var(--radius-surface); }
  button { position: absolute; top: var(--spacing-sm); right: var(--spacing-sm); width: 44px; height: 44px; display: grid; place-items: center; color: var(--color-muted-foreground); background: transparent; border: 0; border-radius: var(--radius-control); cursor: pointer; }
  button:hover { background: var(--color-muted); }
  .comparison-detail > p:first-of-type { margin: 0; color: var(--color-primary); font-size: .7rem; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
  h3 { margin: 3px 0 var(--spacing-md); padding-right: 48px; }
  .patterns { display: flex; flex-wrap: wrap; gap: var(--spacing-xs); }
  .patterns span { padding: 4px 9px; font-family: var(--font-japanese); background: var(--color-primary-subtle); border-radius: var(--radius-control); }
  .meaning { line-height: 1.65; }
  aside { padding: var(--spacing-md); background: var(--color-warning-subtle); border-radius: var(--radius-control); }
  aside p { margin-bottom: 0; }
  article { padding: var(--spacing-md) 0; border-top: 1px solid var(--color-border); }
  article p { margin: 2px 0; }
  .japanese { font-family: var(--font-japanese); font-size: 1.05rem; }
</style>

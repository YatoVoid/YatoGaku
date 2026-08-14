<script lang="ts">
  /**
   * Reusable search input with icon, clear button, and keyboard shortcut hint.
   */

  import { Search, X } from 'lucide-svelte';

  export let value = '';
  export let placeholder = 'Search...';

  let inputEl: HTMLInputElement;

  function clear() {
    value = '';
    inputEl?.focus();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') clear();
  }
</script>

<div class="relative">
  <Search size={16} class="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" aria-hidden="true" />
  <input
    bind:this={inputEl}
    bind:value
    type="text"
    {placeholder}
    on:keydown={handleKeydown}
    class="w-full pl-10 pr-9 py-2.5 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
    aria-label={placeholder}
  />
  {#if value}
    <button
      on:click={clear}
      class="absolute right-1 top-1/2 -translate-y-1/2 min-w-11 min-h-11 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Clear search"
    >
      <X size={16} aria-hidden="true" />
    </button>
  {/if}
</div>

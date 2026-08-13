<script lang="ts">
  /**
   * Simple breadcrumb trail.
   * Usage: <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Course' }]} />
   */

  import { base } from '$app/paths';
  import { ChevronRight } from 'lucide-svelte';

  export let items: { label: string; href?: string }[] = [];
</script>

<nav aria-label="Breadcrumb" class="flex items-center gap-1 text-xs text-muted-foreground mb-3 flex-wrap">
  {#each items as item, i}
    {#if i > 0}
      <ChevronRight size={12} class="flex-shrink-0 opacity-50" aria-hidden="true" />
    {/if}
    {#if item.href && i < items.length - 1}
      <a href="{base}{item.href}" class="hover:text-primary no-underline transition-colors">{item.label}</a>
    {:else}
      <span class="text-foreground/70 font-medium truncate max-w-[150px]">{item.label}</span>
    {/if}
  {/each}
</nav>

<script lang="ts">
  /**
   * Standardized empty state for pages.
   * Shows icon, title, optional description and action link.
   */

  import { base } from '$app/paths';
  import { Inbox } from 'lucide-svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';

  export let title = 'Nothing here yet';
  export let description = '';
  export let action: { label: string; href: string } | undefined = undefined;
</script>

<div class="text-center py-12 px-6 space-y-4">
  <Inbox class="mx-auto text-muted-foreground" size={48} />
  <h3 class="text-lg font-medium text-foreground">{title}</h3>
  {#if description}
    <p class="text-muted-foreground text-sm">{description}</p>
  {/if}
  {#if action}
    <a
      href="{base}{action.href}"
      class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground no-underline hover:bg-primary/90 transition-colors"
    >
      {action.label}
    </a>
  {/if}
</div>

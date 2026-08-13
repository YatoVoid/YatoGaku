<script lang="ts">
  /**
   * Standardized error state for pages.
   * Shows error icon, message, and optional retry button.
   */

  import { AlertCircle } from 'lucide-svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';

  export let message = 'Something went wrong';
  export let retry: (() => void) | undefined = undefined;
</script>

<div class="text-center py-12 px-6 space-y-4">
  <AlertCircle class="mx-auto text-destructive" size={48} />
  <p class="text-muted-foreground">{message}</p>
  {#if retry}
    <UiButton onclick={retry}>Try again</UiButton>
  {/if}
</div>

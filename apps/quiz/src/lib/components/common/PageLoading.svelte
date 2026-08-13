<script lang="ts">
  /**
   * Standardized loading skeleton for page content.
   * Uses shadcn Skeleton with configurable lines and card placeholders.
   */

  import { Skeleton } from '$lib/components/ui/skeleton';

  export let lines = 3;
  export let cards = 0;
</script>

<div class="space-y-4 " role="status" aria-label="Loading">
  {#each Array(lines) as _}
    <Skeleton class="h-4 w-full" />
  {/each}
  {#if cards > 0}
    <div class="grid grid-cols-2 gap-4">
      {#each Array(cards) as _}
        <Skeleton class="h-24 w-full rounded-lg" />
      {/each}
    </div>
  {/if}
</div>

<script lang="ts">
  /**
   * Skeleton loading for row-based list pages.
   * Shows N placeholder rows with circle + text shimmer.
   */

  import { Skeleton } from '$lib/components/ui/skeleton';

  export let rows = 5;
</script>

<div class="flex flex-col gap-3.5 " role="status" aria-label="Loading">
  {#each Array(rows) as _}
    <div class="flex items-center gap-4 px-5 py-5 bg-card border border-border rounded-xl">
      <Skeleton class="w-9 h-9 rounded-full flex-shrink-0" />
      <div class="flex-1 space-y-2">
        <Skeleton class="h-4 w-3/4" />
        <Skeleton class="h-3 w-1/2" />
      </div>
      <Skeleton class="w-4 h-4 rounded flex-shrink-0" />
    </div>
  {/each}
</div>

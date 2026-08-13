<script lang="ts">
  import { Skeleton } from '$lib/components/ui/skeleton';
</script>

<div class="skeleton-card">
  <Skeleton width="60%" height="1.2rem" />
  <Skeleton width="100%" height="0.8rem" />
  <Skeleton width="90%" height="0.8rem" />
  <Skeleton width="40%" height="2rem" />
</div>

<style>
  .skeleton-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    box-shadow: var(--shadow-surface);
  }
</style>

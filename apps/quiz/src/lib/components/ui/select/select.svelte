<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils/cn';
  interface Props extends HTMLSelectAttributes { class?: string; }
  let { class: className, children, ...props }: Props = $props();
</script>
<select class={cn('min-h-11 w-full rounded-control border border-input bg-background px-3 py-2 text-base text-foreground transition-colors duration-fast focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className)} {...props}>{@render children?.()}</select>

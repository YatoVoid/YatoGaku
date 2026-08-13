<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils/cn';
  interface Props extends HTMLInputAttributes { class?: string; invalid?: boolean; }
  let { class: className, invalid = false, ...props }: Props = $props();
</script>
<input class={cn('flex min-h-11 w-full rounded-control border border-input bg-background px-3 py-2 text-base text-foreground transition-colors duration-fast placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', invalid && 'border-destructive', className)} aria-invalid={invalid || undefined} {...props} />

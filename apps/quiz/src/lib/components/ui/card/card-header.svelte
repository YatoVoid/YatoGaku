<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
  }

  let { class: className, children, ...props }: Props = $props();
</script>

<div class={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
  {@render children?.()}
</div>

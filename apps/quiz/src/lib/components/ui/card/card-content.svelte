<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
  }

  let { class: className, children, ...props }: Props = $props();
</script>

<div data-slot="card-content" class={cn('p-6 pt-0', className)} {...props}>
  {@render children?.()}
</div>

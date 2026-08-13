<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    class?: string;
  }

  let { class: className, children, ...props }: Props = $props();
</script>

<p class={cn('text-sm text-muted-foreground', className)} {...props}>
  {@render children?.()}
</p>

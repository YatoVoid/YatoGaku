<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    class?: string;
  }

  let {
    orientation = 'horizontal',
    decorative = true,
    class: className,
    ...props
  }: Props = $props();
</script>

<div
  role={decorative ? 'none' : 'separator'}
  aria-orientation={decorative ? undefined : orientation}
  class={cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    className
  )}
  {...props}
></div>

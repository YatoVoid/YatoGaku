<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }

  let { class: className, size = 'lg', children, style, ...props }: Props = $props();

  const maxWidths = {
    sm: '36rem',
    md: '42rem',
    lg: '56rem',
    xl: '72rem'
  };
</script>

<div
  class={cn(
    'page-workspace grid gap-5 py-5 sm:py-6 lg:gap-6 lg:py-8',
    className
  )}
  style={`--page-workspace-max:${maxWidths[size]};${style ?? ''}`}
  {...props}
>
  {@render children?.()}
</div>

<style>
  .page-workspace {
    width: min(calc(100% - 2rem), var(--page-workspace-max));
    margin-inline: auto;
  }

  @media (min-width: 640px) {
    .page-workspace {
      width: min(calc(100% - 3rem), var(--page-workspace-max));
    }
  }
</style>

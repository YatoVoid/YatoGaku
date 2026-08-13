<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    width?: string;
    height?: string;
    rounded?: boolean;
  }

  let { class: className, width, height, rounded = false, style, ...props }: Props = $props();
</script>

<div
  data-slot="skeleton"
  class={cn('skeleton animate-pulse bg-muted motion-reduce:animate-none', rounded ? 'rounded-pill' : 'rounded-control', className)}
  style={`${width ? `width:${width};` : ''}${height ? `height:${height};` : ''}${style ?? ''}`}
  role="status"
  aria-label="Loading"
  {...props}
></div>

<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    hover?: boolean;
    clickable?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
  }

  let { class: className, hover = false, clickable = false, padding = 'none', children, onclick, onkeydown, role, ...props }: Props = $props();
  const paddings = { none: '', sm: 'p-3', md: 'p-4', lg: 'p-6' };
  function handleKeydown(event: KeyboardEvent) {
    onkeydown?.(event as any);
    if (clickable && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); onclick?.(event as any); }
  }
</script>

{#if clickable}
  <div data-slot="card" class={cn('cursor-pointer rounded-surface border border-border bg-card text-card-foreground', paddings[padding], hover && 'transition-[transform,box-shadow,border-color] duration-normal hover:-translate-y-0.5 hover:border-primary hover:shadow-lifted', className)} role="button" tabindex="0" {onclick} onkeydown={handleKeydown} {...props}>{@render children?.()}</div>
{:else}
  <div data-slot="card" class={cn('rounded-surface border border-border bg-card text-card-foreground', paddings[padding], hover && 'transition-[transform,box-shadow,border-color] duration-normal hover:-translate-y-0.5 hover:border-primary hover:shadow-lifted', className)} {role} {onclick} onkeydown={handleKeydown} {...props}>{@render children?.()}</div>
{/if}

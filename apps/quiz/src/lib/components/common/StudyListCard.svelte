<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    title: string;
    subtitle?: string;
    meta?: string;
    active?: boolean;
    class?: string;
    leading?: Snippet;
    trailing?: Snippet;
  }

  let {
    href,
    title,
    subtitle,
    meta,
    active = false,
    class: className,
    leading,
    trailing
  }: Props = $props();
</script>

<a
  {href}
  class={cn(
    'group grid min-h-[72px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-surface border border-border bg-card p-4 text-left text-card-foreground no-underline transition-[background,border-color,transform,box-shadow]',
    'hover:-translate-y-0.5 hover:border-primary hover:bg-accent hover:shadow-surface',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    active && 'border-primary bg-primary-subtle ring-1 ring-primary/30',
    className
  )}
>
  <div class="grid size-11 shrink-0 place-items-center rounded-control bg-primary-subtle text-primary">
    {#if leading}
      {@render leading()}
    {/if}
  </div>

  <div class="min-w-0">
    <h3 class="truncate text-sm font-bold leading-5 text-foreground">{title}</h3>
    {#if subtitle}
      <p class="mt-0.5 truncate text-xs leading-5 text-muted-foreground">{subtitle}</p>
    {/if}
  </div>

  <div class="flex shrink-0 items-center gap-2 text-xs font-semibold text-muted-foreground">
    {#if meta}
      <span class="rounded-control bg-muted px-2 py-1">{meta}</span>
    {/if}
    {#if trailing}
      {@render trailing()}
    {/if}
  </div>
</a>

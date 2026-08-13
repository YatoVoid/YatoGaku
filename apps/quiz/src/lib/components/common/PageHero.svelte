<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { Snippet } from 'svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    script?: 'default' | 'japanese' | 'chinese';
    class?: string;
    actions?: Snippet;
  }

  let {
    eyebrow,
    title,
    subtitle,
    script = 'default',
    class: className,
    actions
  }: Props = $props();

  const scriptClass = {
    default: '',
    japanese: 'font-japanese',
    chinese: 'font-chinese'
  };
</script>

<section
  class={cn(
    'grid gap-4 rounded-surface border border-border bg-card p-5 text-card-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-6',
    className
  )}
>
  <div class="min-w-0">
    {#if eyebrow}
      <p class="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">{eyebrow}</p>
    {/if}
    <h1 class={cn('text-2xl font-bold leading-tight tracking-tight text-foreground', scriptClass[script])}>
      {title}
    </h1>
    {#if subtitle}
      <p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{subtitle}</p>
    {/if}
  </div>

  {#if actions}
    <div class="flex flex-wrap items-center gap-2 sm:justify-end">
      {@render actions()}
    </div>
  {/if}
</section>

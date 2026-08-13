<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    current?: number;
    total?: number;
    showText?: boolean;
    textPosition?: 'top' | 'inside' | 'none';
    label?: string;
    class?: string;
  }

  let { value = 0, max = 100, current, total, showText = false, textPosition = 'none', label, class: className, ...props }: Props = $props();

  let actualValue = $derived(current ?? value);
  let actualMax = $derived(total ?? max);
  let percentage = $derived(actualMax > 0 ? Math.min(Math.max((actualValue / actualMax) * 100, 0), 100) : 0);
  let displayText = $derived(label ?? `${actualValue} / ${actualMax} (${Math.round(percentage)}%)`);
</script>

<div class="w-full">
  {#if showText && textPosition === 'top'}<div class="progress-text mb-1 text-right text-label font-semibold text-muted-foreground">{displayText}</div>{/if}
  <div role="progressbar" aria-valuemin={0} aria-valuemax={actualMax} aria-valuenow={actualValue} aria-label={displayText}
    class={cn('relative h-2 w-full overflow-hidden rounded-pill bg-secondary', className)} {...props}>
    <div data-slot="progress-indicator" class="h-full origin-left bg-primary transition-transform duration-slow motion-reduce:transition-none" style="transform: scaleX({percentage / 100})"></div>
    {#if showText && textPosition === 'inside' && percentage > 15}<span class="progress-text-inside sr-only">{Math.round(percentage)}%</span>{/if}
  </div>
</div>

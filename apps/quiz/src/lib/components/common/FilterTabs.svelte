<script lang="ts">
  import { cn } from '$lib/utils/cn';

  interface Option<T> {
    id: T;
    label: string;
    description?: string;
  }

  type TabValue = string | number;

  interface Props {
    options: Option<TabValue>[];
    value: TabValue;
    ariaLabel: string;
    class?: string;
    onchange?: (value: TabValue) => void;
  }

  let { options, value = $bindable(), ariaLabel, class: className, onchange }: Props = $props();
</script>

<div
  class={cn('filter-tabs gap-2 rounded-surface border border-border bg-card p-2 sm:flex sm:flex-wrap', className)}
  role="radiogroup"
  aria-label={ariaLabel}
>
  {#each options as option}
    <button
      type="button"
      role="radio"
      aria-checked={value === option.id}
      aria-label={option.description ? `${option.label} — ${option.description}` : option.label}
      class={cn(
        'min-h-11 rounded-control px-3 py-2 text-left text-sm font-semibold transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        value === option.id
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
      onclick={() => {
        value = option.id;
        onchange?.(option.id);
      }}
    >
      <span class="block">{option.label}</span>
      {#if option.description}
        <span class="block text-xs font-medium opacity-75">{option.description}</span>
      {/if}
    </button>
  {/each}
</div>

<style>
  .filter-tabs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7.25rem, 1fr));
  }
</style>

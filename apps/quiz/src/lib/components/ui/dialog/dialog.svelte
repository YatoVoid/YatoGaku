<script lang="ts">
  import { tick, type Snippet } from 'svelte';
  import { X } from 'lucide-svelte';
  import { cn } from '$lib/utils/cn';

  interface Props {
    open?: boolean; title: string; description?: string; class?: string;
    showClose?: boolean; children?: Snippet; footer?: Snippet;
    onopenchange?: (open: boolean) => void;
  }
  let { open = $bindable(false), title, description, class: className, showClose = true, children, footer, onopenchange }: Props = $props();
  let content = $state<HTMLDivElement>();

  function setOpen(value: boolean) { open = value; onopenchange?.(value); }
  function handleKeydown(event: KeyboardEvent) {
    if (!open) return;
    if (event.key === 'Escape') setOpen(false);
    if (event.key !== 'Tab' || !content) return;
    const items = content.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  $effect(() => { if (open) tick().then(() => content?.focus()); });
</script>

<svelte:window onkeydown={handleKeydown} />
{#if open}
  <div class="fixed inset-0 z-overlay flex items-center justify-center bg-overlay p-4" role="presentation" onclick={(e) => e.target === e.currentTarget && setOpen(false)}>
    <div bind:this={content} role="dialog" aria-modal="true" aria-labelledby="ui-dialog-title" aria-describedby={description ? 'ui-dialog-description' : undefined} tabindex="-1"
      class={cn('z-modal flex max-h-[85vh] w-[min(90vw,40rem)] flex-col overflow-hidden rounded-surface border border-border bg-card text-card-foreground shadow-lifted focus:outline-none', className)}>
      <header class="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div><h2 id="ui-dialog-title" class="text-title font-semibold">{title}</h2>{#if description}<p id="ui-dialog-description" class="mt-1 text-sm text-muted-foreground">{description}</p>{/if}</div>
        {#if showClose}<button class="ui-button" data-variant="ghost" data-size="icon" onclick={() => setOpen(false)} aria-label="Close dialog"><X class="size-5" strokeWidth={2} aria-hidden="true" /></button>{/if}
      </header>
      <div class="overflow-y-auto p-6">{@render children?.()}</div>
      {#if footer}<footer class="flex justify-end gap-2 border-t border-border px-6 py-4">{@render footer()}</footer>{/if}
    </div>
  </div>
{/if}

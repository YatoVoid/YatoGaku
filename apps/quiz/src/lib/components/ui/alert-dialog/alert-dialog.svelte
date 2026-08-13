<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  interface Props { open?: boolean; title?: string; description?: string; confirmText?: string; cancelText?: string; destructive?: boolean; onconfirm?: () => void; oncancel?: () => void; }
  let { open = $bindable(false), title = 'Confirm', description = 'Are you sure?', confirmText = 'Confirm', cancelText = 'Cancel', destructive = false, onconfirm, oncancel }: Props = $props();
  function cancel() { open = false; oncancel?.(); }
  function confirm() { open = false; onconfirm?.(); }
  function keydown(event: KeyboardEvent) { if (event.key === 'Escape') cancel(); }
</script>
<svelte:window onkeydown={keydown} />
{#if open}
  <div class="fixed inset-0 z-overlay flex items-center justify-center bg-overlay p-4" role="presentation" onclick={(e) => e.target === e.currentTarget && cancel()}>
    <div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-description" tabindex="-1" class="z-modal w-[min(90vw,25rem)] rounded-surface border border-border bg-card p-6 text-card-foreground shadow-lifted">
      <h2 id="alert-title" class="text-title font-semibold">{title}</h2>
      <p id="alert-description" class="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div class="mt-6 flex justify-end gap-2"><Button variant="outline" onclick={cancel}>{cancelText}</Button><Button variant={destructive ? 'destructive' : 'default'} onclick={confirm}>{confirmText}</Button></div>
    </div>
  </div>
{/if}

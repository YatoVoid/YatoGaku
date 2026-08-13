<script lang="ts">
  import { CheckCircle2, CircleAlert, Info } from 'lucide-svelte';
  import { cn } from '$lib/utils/cn';

  interface Props {
    message: string;
    type?: 'success' | 'error' | 'info';
    visible?: boolean;
  }
  let { message, type = 'success', visible = true }: Props = $props();
  const styles = {
    success: 'bg-success text-success-foreground',
    error: 'bg-destructive text-destructive-foreground',
    info: 'bg-primary text-primary-foreground'
  };
</script>

{#if visible}
  <div class={cn('fixed left-1/2 top-4 z-toast flex max-w-[90vw] -translate-x-1/2 items-center gap-2 rounded-control px-4 py-3 text-sm font-medium shadow-lifted motion-safe:', styles[type])}
    role={type === 'error' ? 'alert' : 'status'} aria-live={type === 'error' ? 'assertive' : 'polite'} aria-atomic="true">
    {#if type === 'success'}<CheckCircle2 class="size-4" strokeWidth={2} />
    {:else if type === 'error'}<CircleAlert class="size-4" strokeWidth={2} />
    {:else}<Info class="size-4" strokeWidth={2} />{/if}
    <span>{message}</span>
  </div>
{/if}

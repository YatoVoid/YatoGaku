<script lang="ts">
  import { cn } from '$lib/utils/cn';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'default' | 'primary' | 'accent' | 'destructive' | 'danger' | 'outline' | 'secondary' | 'ghost' | 'link' | 'success';
  type Size = 'default' | 'md' | 'sm' | 'lg' | 'icon';

  interface Props extends HTMLButtonAttributes {
    variant?: Variant;
    size?: Size;
    class?: string;
    href?: string;
    loading?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right';
  }

  let {
    variant = 'default',
    size = 'default',
    class: className,
    href,
    loading = false,
    disabled = false,
    icon,
    iconPosition = 'left',
    children,
    ...props
  }: Props = $props();
  let elementProps: any = $derived(props);

  const normalizedVariant = $derived(variant === 'primary' || variant === 'accent' ? 'default' : variant === 'danger' ? 'destructive' : variant);
  const normalizedSize = $derived(size === 'md' ? 'default' : size);
</script>

{#snippet content()}
  {#if loading}<span class="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true"></span>{/if}
  {#if icon && iconPosition === 'left'}<span aria-hidden="true">{icon}</span>{/if}
  {@render children?.()}
  {#if icon && iconPosition === 'right'}<span aria-hidden="true">{icon}</span>{/if}
{/snippet}

{#if href}
  <a
    class={cn(
      'ui-button', className
    )}
    {href}
    data-variant={normalizedVariant}
    data-size={normalizedSize}
    aria-disabled={disabled || loading || undefined}
    tabindex={disabled || loading ? -1 : undefined}
    {...elementProps}
  >{@render content()}</a>
{:else}
  <button
    class={cn(
      'ui-button', className
    )}
    disabled={disabled || loading}
    data-variant={normalizedVariant}
    data-size={normalizedSize}
    aria-busy={loading || undefined}
    {...elementProps}
  >{@render content()}</button>
{/if}

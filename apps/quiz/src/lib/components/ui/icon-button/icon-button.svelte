<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  interface Props {
    icon: any;
    label: string;
    title?: string;
    size?: 'sm' | 'md';
    variant?: 'ghost' | 'outline' | 'secondary';
    disabled?: boolean;
    onclick?: (event: MouseEvent) => void;
  }
  let { icon: Icon, label, title = label, size = 'md', variant = 'ghost', disabled = false, onclick }: Props = $props();
</script>
<Button {variant} size="icon" class={size === 'sm' ? 'size-11 md:size-10' : 'size-touch'} aria-label={label} {title} {disabled} {onclick}>
  <Icon class={size === 'sm' ? 'size-4' : 'size-5'} strokeWidth={2} aria-hidden="true" />
</Button>

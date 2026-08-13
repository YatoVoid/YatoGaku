<script lang="ts">
  import { Switch as BitsSwitch } from 'bits-ui';
  interface Props { checked?: boolean; disabled?: boolean; label: string; onchange?: (checked: boolean) => void; }
  let { checked = $bindable(false), disabled = false, label, onchange }: Props = $props();
</script>
<BitsSwitch.Root bind:checked {disabled} onCheckedChange={onchange} aria-label={label}
  class="relative inline-flex h-11 w-12 shrink-0 cursor-pointer items-center p-1 before:absolute before:inset-x-0 before:top-2 before:h-7 before:rounded-pill before:bg-input before:transition-colors before:duration-fast data-[state=checked]:before:bg-primary disabled:cursor-not-allowed disabled:opacity-50">
  <BitsSwitch.Thumb class="relative z-raised block size-5 rounded-pill bg-card shadow-surface transition-transform duration-fast data-[state=checked]:translate-x-5" />
</BitsSwitch.Root>

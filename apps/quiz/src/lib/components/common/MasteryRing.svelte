<script lang="ts">
  export let percentage = 0;
  export let size = 48;

  $: radius = (size - 6) / 2;
  $: circumference = 2 * Math.PI * radius;
  $: offset = circumference - (percentage / 100) * circumference;
</script>

<div class="mastery-ring" style="width: {size}px; height: {size}px">
  <svg viewBox="0 0 {size} {size}" width={size} height={size}>
    <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="var(--color-border)" stroke-width="3" />
    {#if percentage > 0}
      <circle cx={size/2} cy={size/2} r={radius} fill="none"
        stroke={percentage >= 70 ? 'var(--color-success)' : 'var(--color-primary)'}
        stroke-width="3" stroke-linecap="round"
        stroke-dasharray={circumference} stroke-dashoffset={offset}
        transform="rotate(-90 {size/2} {size/2})" />
    {/if}
  </svg>
  <span class="mastery-text">
{percentage}%
  </span>
</div>

<style>
  .mastery-ring {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mastery-ring svg {
    position: absolute;
    inset: 0;
  }

  .mastery-ring svg circle {
    transition: stroke-dashoffset 0.4s ease;
  }

  .mastery-text {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--color-muted-foreground);
    z-index: 1;
  }
</style>

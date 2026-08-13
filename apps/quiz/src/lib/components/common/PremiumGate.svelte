<script lang="ts">
  import { base } from '$app/paths';
  import { isPremium } from '$lib/utils/premiumUtils';
  import { Lock } from 'lucide-svelte';

  export let featureName = 'this feature';
  export let previewCount = 50;

  $: premium = isPremium();
</script>

{#if premium}
  <slot />
{:else}
  <slot name="preview" />
  <div class="text-center py-8 px-4 mt-4 bg-card border-2 border-dashed border-border rounded-lg">
    <Lock class="mx-auto text-muted-foreground mb-2" size={40} aria-hidden="true" />
    <h3 class="text-lg font-semibold text-foreground mb-2">Premium Feature</h3>
    <p class="text-sm text-muted-foreground mb-4">Showing first {previewCount} items. Upgrade to access full {featureName}.</p>
    <a
      href="{base}/premium"
      class="inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg no-underline font-semibold text-sm hover:bg-primary/90 transition-colors"
    >
      Learn More
    </a>
  </div>
{/if}

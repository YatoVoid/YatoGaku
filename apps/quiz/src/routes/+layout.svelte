<script lang="ts">
  import '../app.css';
  import { uiStore } from '$lib/stores';
  import { onMount } from 'svelte';
  import AppShell from '$lib/components/layout/AppShell.svelte';
  import SkipLink from '$lib/components/common/SkipLink.svelte';
  import {
    registerServiceWorker,
    setupInstallPrompt,
    updateAvailable,
    canInstall,
    applyUpdate,
    showInstallPrompt,
    isPWA
  } from '$lib/utils/pwa';
  import { initFont } from '$lib/utils/fontUtils';
  import { Toast } from '$lib/components/ui/toast';
  import { toastStore } from '$lib/stores/toast';
  import { X } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  let showInstallBanner = false;

  // Apply dark mode class and register service worker on mount
  onMount(() => {
    const darkMode = $uiStore.darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    initFont();

    registerServiceWorker();
    setupInstallPrompt();

    // Show install banner after 30s if not already installed
    setTimeout(() => {
      if ($canInstall && !isPWA()) {
        showInstallBanner = true;
      }
    }, 30000);
  });

  // Reactively update dark mode
  $: {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', $uiStore.darkMode);
    }
  }

  function dismissInstall() {
    showInstallBanner = false;
  }

  async function handleInstall() {
    await showInstallPrompt();
    showInstallBanner = false;
  }
</script>

<div class="app min-h-screen bg-background text-foreground">
  <SkipLink />
  <AppShell>

  {#if $updateAvailable}
    <div class="update-banner">
      <span>A new version is available!</span>
      <Button size="sm" variant="ghost" class="text-primary-foreground hover:bg-primary-foreground/15" onclick={applyUpdate}>Update now</Button>
    </div>
  {/if}

  {#if showInstallBanner}
    <div class="install-banner">
      <span>Install YatoGaku Quiz for offline access</span>
      <div class="banner-actions">
        <Button size="sm" variant="ghost" class="text-primary-foreground hover:bg-primary-foreground/15" onclick={handleInstall}>Install</Button>
        <Button size="icon" variant="ghost" class="text-primary-foreground hover:bg-primary-foreground/15" onclick={dismissInstall} aria-label="Dismiss install prompt"><X class="size-4" strokeWidth={2} aria-hidden="true" /></Button>
      </div>
    </div>
  {/if}

    <slot />

    {#if $toastStore}
      <Toast message={$toastStore.message} type={$toastStore.type} />
    {/if}
  </AppShell>
</div>

<style>
  .update-banner,
  .install-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .update-banner {
    background: var(--color-primary);
    color: white;
  }

  .install-banner {
    background: var(--color-primary);
    color: white;
  }

  .banner-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

</style>

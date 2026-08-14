<script lang="ts">
  /**
   * Settings Page
   * Quiz settings, export/import progress, clear data
   */

  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import {
    progressStore,
    updateSettings,
    clearProgress,
    exportProgress,
    importProgress
  } from '$lib/stores';
  import type { QuizDirection } from '$lib/types';
  import { getAvailableFonts, getCurrentFont, setFont, initFont } from '$lib/utils/fontUtils';
  import { AlertDialog } from '$lib/components/ui/alert-dialog';
  import { showToast } from '$lib/stores/toast';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import { Select } from '$lib/components/ui/select';
  import { Switch } from '$lib/components/ui/switch';
  import { Settings2, Type, BarChart3, Database, Download, Upload, Trash2 } from 'lucide-svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  const fonts = getAvailableFonts();
  let selectedFont = 'system';
  let showClearConfirm = false;
  let saveMessage = '';
  let saveTimer: ReturnType<typeof setTimeout>;

  function announceSaved() {
    saveMessage = 'Saved on this device';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveMessage = '', 2500);
  }

  onMount(() => {
    selectedFont = getCurrentFont();
    initFont();
  });

  function handleFontChange(fontId: string) {
    selectedFont = fontId;
    setFont(fontId);
    announceSaved();
  }

  $: settings = $progressStore.settings;

  const directions: { value: QuizDirection; label: string }[] = [
    { value: 'ja-en', label: 'Japanese → English' },
    { value: 'en-ja', label: 'English → Japanese' },
    { value: 'ja-romaji', label: 'Japanese → Romaji' }
  ];

  function handleDirectionChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    updateSettings({ defaultDirection: target.value as QuizDirection });
    announceSaved();
  }

  function handleAutoPlayChange(checked: boolean) {
    updateSettings({ autoPlay: checked });
    announceSaved();
  }

  function handleShowEnglishChange(checked: boolean) {
    updateSettings({ showEnglish: checked });
    announceSaved();
  }

  function handleExport() {
    const json = exportProgress();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smart-quiz-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Exported successfully!', 'success');
  }

  let fileInput: HTMLInputElement;

  function handleImportClick() {
    fileInput?.click();
  }

  function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      if (importProgress(text)) {
        showToast('Imported successfully!', 'success');
      } else {
        showToast('Invalid file format.', 'error');
      }
    };
    reader.readAsText(file);
    target.value = '';
  }

  $: lessonCount = Object.keys($progressStore.lessons).length;
  $: hskCount = Object.keys($progressStore.hsk).length;
  $: totalItems = Object.values($progressStore.lessons).reduce((sum, l) =>
    sum + Object.keys(l.vocabProgress).length, 0);
</script>

<svelte:head>
  <title>Settings - YatoGaku</title>
</svelte:head>

<PageWorkspace size="md">
  <PageHero
    eyebrow="Preferences"
    title="Settings"
    subtitle="Customize your study experience, font, progress data, and default quiz options."
  />

  <div class="flex flex-col gap-8">
    <p class="sr-only" aria-live="polite">{saveMessage}</p>

  <!-- Quiz Settings -->
  <section>
    <h2 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
      <Settings2 size={12} aria-hidden="true" /> Quiz Settings
    </h2>
    <div class="overflow-hidden rounded-surface border border-border bg-card">
      <div class="flex items-center justify-between px-5 py-5">
        <div>
          <label for="direction" class="text-sm font-medium block">Default Direction</label>
          <span class="text-[0.65rem] text-muted-foreground">Default direction when starting a quiz</span>
        </div>
        <Select
          id="direction"
          value={settings.defaultDirection}
          onchange={handleDirectionChange}
          class="w-auto min-w-44 bg-muted font-medium"
        >
          {#each directions as d}
            <option value={d.value}>{d.label}</option>
          {/each}
        </Select>
      </div>
      <div class="h-px bg-border/50 mx-5"></div>
      <div class="flex items-center justify-between px-5 py-5">
        <div>
          <label for="autoPlay" class="text-sm font-medium block">Auto-speak on new card</label>
          <span class="text-[0.65rem] text-muted-foreground">Automatically play audio when a new card appears</span>
        </div>
        <Switch checked={settings.autoPlay} label="Auto-speak on new card" onchange={handleAutoPlayChange} />
      </div>
      <div class="h-px bg-border/50 mx-5"></div>
      <div class="flex items-center justify-between px-5 py-5">
        <div>
          <label for="showEnglish" class="text-sm font-medium block">Show English translations</label>
          <span class="text-[0.65rem] text-muted-foreground">Show the English meaning alongside Vietnamese</span>
        </div>
        <Switch checked={settings.showEnglish} label="Show English translations" onchange={handleShowEnglishChange} />
      </div>
    </div>
  </section>

  <!-- Font Settings -->
  <section>
    <h2 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
      <Type size={12} aria-hidden="true" /> Japanese Font
    </h2>
    <div class="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Font selection">
      {#each fonts as font}
        <button
          role="radio"
          aria-checked={selectedFont === font.id}
          class="flex flex-col items-center gap-2 p-5 rounded-2xl cursor-pointer transition-colors text-center active:scale-[0.97]
            {selectedFont === font.id
              ? 'bg-primary/10 shadow-md ring-2 ring-primary border border-primary/30'
              : 'bg-card border border-border hover:-translate-y-0.5 hover:border-primary'}"
          on:click={() => handleFontChange(font.id)}
        >
          <div class="text-xl leading-snug" style="font-family: {font.family}">{font.preview}</div>
          <div class="text-xs font-semibold">{font.name}</div>
          <div class="text-[0.65rem] text-muted-foreground">{font.nameJa}</div>
        </button>
      {/each}
    </div>
  </section>

  <!-- Progress Summary -->
  <section>
    <h2 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
      <BarChart3 size={12} aria-hidden="true" /> Progress Summary
    </h2>
    {#if lessonCount === 0 && totalItems === 0 && hskCount === 0}
      <div class="rounded-surface border border-border bg-card p-5 text-center">
        <p class="text-sm text-muted-foreground">Start studying to see your progress here.</p>
      </div>
    {:else}
      <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col items-center gap-1 rounded-surface border border-border bg-card p-5">
          <span class="text-2xl font-bold text-primary">{lessonCount}</span>
          <span class="text-[0.7rem] text-muted-foreground text-center">Lessons studied</span>
        </div>
        <div class="flex flex-col items-center gap-1 rounded-surface border border-border bg-card p-5">
          <span class="text-2xl font-bold text-primary">{totalItems}</span>
          <span class="text-[0.7rem] text-muted-foreground text-center">Words practiced</span>
        </div>
        <div class="flex flex-col items-center gap-1 rounded-surface border border-border bg-card p-5">
          <span class="text-2xl font-bold text-primary">{hskCount}</span>
          <span class="text-[0.7rem] text-muted-foreground text-center">HSK groups</span>
        </div>
      </div>
    {/if}
  </section>

  <!-- Data Management -->
  <section>
    <h2 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
      <Database size={12} aria-hidden="true" /> Data Management
    </h2>
    <div class="flex flex-col gap-3">
      <p class="text-sm text-muted-foreground rounded-control border border-border bg-muted p-3">Progress is stored locally and works offline. Data only leaves this device if you export it yourself.</p>
      <button
        class="group flex w-full cursor-pointer items-center gap-4 rounded-surface border border-border bg-card px-5 py-5 text-left transition-colors duration-200 hover:border-primary active:scale-[0.98]"
        on:click={handleExport}
      >
        <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Download size={20} class="text-primary" aria-hidden="true" />
        </div>
        <div class="flex-1 min-w-0">
          <strong class="text-sm block">Export Progress</strong>
          <span class="text-xs text-muted-foreground">Download as JSON</span>
        </div>
      </button>
      <button
        class="group flex w-full cursor-pointer items-center gap-4 rounded-surface border border-border bg-card px-5 py-5 text-left transition-colors duration-200 hover:border-primary active:scale-[0.98]"
        on:click={handleImportClick}
      >
        <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Upload size={20} class="text-primary" aria-hidden="true" />
        </div>
        <div class="flex-1 min-w-0">
          <strong class="text-sm block">Import Progress</strong>
          <span class="text-xs text-muted-foreground">Restore from file</span>
        </div>
      </button>
      <input type="file" accept=".json" bind:this={fileInput} on:change={handleFileChange} class="hidden" />
      <button
        class="group flex w-full cursor-pointer items-center gap-4 rounded-surface border border-border bg-card px-5 py-5 text-left transition-colors duration-200 hover:border-destructive active:scale-[0.98]"
        on:click={() => showClearConfirm = true}
      >
        <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
          <Trash2 size={20} class="text-destructive" aria-hidden="true" />
        </div>
        <div class="flex-1 min-w-0">
          <strong class="text-sm block text-destructive">Clear All Progress</strong>
          <span class="text-xs text-muted-foreground">Delete permanently</span>
        </div>
      </button>
    </div>
  </section>
  </div>
</PageWorkspace>

<AlertDialog
  bind:open={showClearConfirm}
  title="Clear All Progress"
  description="Are you sure you want to clear all progress? This cannot be undone."
  confirmText="Clear All"
  destructive
  onconfirm={() => { clearProgress(); showToast('Progress cleared', 'success'); }}
/>

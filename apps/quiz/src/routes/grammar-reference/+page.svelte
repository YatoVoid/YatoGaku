<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { getAllGrammar } from '$lib/data/minna/grammar';
  import { getAllComparisons } from '$lib/data/minna/grammar/comparisons';
  import { GRAMMAR_CATEGORIES, GRAMMAR_FUNCTIONS, JLPT_LEVELS } from '$lib/data/minna/grammar/metadata';
  import {
    mergeGrammarWithMetadata,
    applyFilters,
    groupByLesson,
    groupByCategory,
    groupByFunction
  } from '$lib/utils/grammarUtils';
  import type { GrammarPattern, GrammarFilters, GrammarViewMode, GrammarComparison } from '$lib/types';
  import GrammarCard from '$lib/components/grammar/GrammarCard.svelte';
  import GrammarInlineDetail from '$lib/components/grammar/GrammarInlineDetail.svelte';
  import ComparisonCard from '$lib/components/grammar/ComparisonCard.svelte';
  import ComparisonInlineDetail from '$lib/components/grammar/ComparisonInlineDetail.svelte';
  import BackButton from '$lib/components/common/BackButton.svelte';

  let allPatterns: GrammarPattern[] = [];
  let filteredPatterns: GrammarPattern[] = [];
  let selectedPatterns = new Set<string>();
  let currentView: GrammarViewMode = 'lesson';

  const filters = writable<GrammarFilters>({ search: '', jlpt: 'all', category: 'all', function: 'all' });

  let selectedPattern: GrammarPattern | null = null;
  let selectedComparison: GrammarComparison | null = null;
  let searchTimeout: ReturnType<typeof setTimeout>;

  onMount(() => {
    const rawPatterns = getAllGrammar();
    allPatterns = mergeGrammarWithMetadata(rawPatterns);
    filteredPatterns = allPatterns;
  });

  $: { filteredPatterns = applyFilters(allPatterns, $filters); }

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => { filters.update(f => ({ ...f, search: target.value })); }, 300);
  }

  function handleViewChange(view: GrammarViewMode) { currentView = view; }

  function togglePatternSelection(patternString: string) {
    if (selectedPatterns.has(patternString)) selectedPatterns.delete(patternString);
    else selectedPatterns.add(patternString);
    selectedPatterns = selectedPatterns;
  }

  function showPattern(pattern: GrammarPattern) { selectedPattern = selectedPattern?.pattern === pattern.pattern ? null : pattern; }
  function showComparison(comparison: GrammarComparison) { selectedComparison = selectedComparison?.id === comparison.id ? null : comparison; }

  $: groupedData = (() => {
    switch (currentView) {
      case 'lesson': return groupByLesson(filteredPatterns);
      case 'category': return groupByCategory(filteredPatterns);
      case 'function': return groupByFunction(filteredPatterns);
      default: return {};
    }
  })();

  $: comparisons = getAllComparisons();

  const viewTabs = [
    { id: 'lesson' as const, label: 'By lesson' },
    { id: 'category' as const, label: 'By category' },
    { id: 'function' as const, label: 'By function' },
    { id: 'comparisons' as const, label: 'Comparisons' },
  ];
</script>

<svelte:head>
  <title>Grammar Reference - YatoGaku</title>
</svelte:head>

<div class="min-h-screen pb-24">
  <!-- Header -->
  <div class="px-6 py-5 bg-muted border-b border-border">
    <div class="flex items-center gap-4">
      <BackButton />
      <h1 class="text-xl font-bold text-foreground">Grammar Reference</h1>
    </div>
  </div>

  <!-- Search + Filters -->
  <div class="px-6 py-4 bg-card border-b border-border">
    <div class="mb-3">
      <input
        type="text"
        class="w-full px-4 py-3 border-2 border-border rounded-xl text-base bg-muted text-foreground focus:outline-none focus:border-primary transition-colors"
        placeholder="Search grammar..."
        on:input={handleSearchInput}
      />
    </div>
    <div class="grid gap-3" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
      <select class="px-2 py-2 border border-border rounded-lg bg-muted text-foreground text-sm" bind:value={$filters.jlpt} on:change={() => filters.set($filters)}>
        <option value="all">All JLPT levels</option>
        {#each JLPT_LEVELS as level}<option value={level}>{level}</option>{/each}
      </select>
      <select class="px-2 py-2 border border-border rounded-lg bg-muted text-foreground text-sm" bind:value={$filters.category} on:change={() => filters.set($filters)}>
        <option value="all">All categories</option>
        {#each Object.values(GRAMMAR_CATEGORIES) as category}<option value={category.id}>{category.icon} {category.name}</option>{/each}
      </select>
      <select class="px-2 py-2 border border-border rounded-lg bg-muted text-foreground text-sm" bind:value={$filters.function} on:change={() => filters.set($filters)}>
        <option value="all">All functions</option>
        {#each Object.values(GRAMMAR_FUNCTIONS) as func}<option value={func.id || ''}>{func.name}</option>{/each}
      </select>
    </div>
  </div>

  <!-- View Tabs -->
  <div class="flex px-6 bg-card border-b-2 border-border overflow-x-auto">
    {#each viewTabs as tab}
      <button
        class="px-5 py-3 bg-transparent border-none border-b-[3px] border-transparent text-muted-foreground text-sm font-semibold cursor-pointer whitespace-nowrap transition-colors hover:text-foreground hover:bg-muted
          {currentView === tab.id ? '!text-primary !border-primary' : ''}"
        on:click={() => handleViewChange(tab.id)}
      >
        {tab.label}
      </button>
    {/each}
  </div>

  <!-- Content -->
  <div class="p-6">
    {#if currentView === 'comparisons'}
      <div class="flex justify-between items-center p-4 mb-4 bg-muted rounded-lg">
        <h3 class="text-lg font-bold">Grammar Comparisons</h3>
        <span class="text-sm text-muted-foreground">{comparisons.length} comparisons</span>
      </div>
      <div class="grid gap-4">
        {#each comparisons as comparison}
          <ComparisonCard {comparison} on:click={() => showComparison(comparison)} />
          {#if selectedComparison?.id === comparison.id}<ComparisonInlineDetail {comparison} onclose={() => selectedComparison = null} />{/if}
        {/each}
      </div>
    {:else}
      {#if filteredPatterns.length === 0}
        <div class="text-center py-12 text-muted-foreground">
          <p class="text-base font-semibold mb-2">No grammar found.</p>
          <p>Try changing the filters or search terms.</p>
        </div>
      {:else}
        {#each Object.entries(groupedData) as [key, group]}
          <div class="mb-8">
            <div class="flex justify-between items-center p-4 mb-4 bg-muted rounded-lg">
              {#if currentView === 'lesson'}
                <h3 class="text-lg font-bold">Lesson {group.lessonNumber}</h3>
              {:else if currentView === 'category' && group.category}
                <h3 class="text-lg font-bold">{group.category.icon} {group.category.name}</h3>
              {:else if currentView === 'function' && group.function}
                <h3 class="text-lg font-bold">{group.function.name}</h3>
              {/if}
              <span class="text-sm text-muted-foreground">{group.patterns.length} patterns</span>
            </div>
            {#each group.patterns as pattern}
              <GrammarCard
                {pattern}
                selected={selectedPatterns.has(pattern.pattern)}
                on:toggle={() => togglePatternSelection(pattern.pattern)}
                on:detail={() => showPattern(pattern)}
              />
              {#if selectedPattern?.pattern === pattern.pattern}<GrammarInlineDetail {pattern} onclose={() => selectedPattern = null} />{/if}
            {/each}
          </div>
        {/each}
      {/if}
    {/if}
  </div>

  <!-- Selected Footer -->
  {#if selectedPatterns.size > 0}
    <div class="fixed bottom-0 inset-x-0 px-6 py-4 bg-card border-t-2 border-border flex justify-between items-center shadow-lg z-50">
      <div class="text-base">
        <span class="text-xl font-bold text-primary">{selectedPatterns.size}</span> patterns selected
      </div>
      <button class="ui-button" data-variant="default">Quiz selected patterns</button>
    </div>
  {/if}
</div>

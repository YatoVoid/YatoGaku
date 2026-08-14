<script lang="ts">
  /**
   * Course Vocabulary List Page
   * Shows all vocabulary items for a specific lesson in a course
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { getCourse } from '$lib/data/courses';
  import { kanaToRomaji } from '$lib/utils/kanaUtils';
  import { buildQuizUrl } from '$lib/utils/courseUtils';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import BackButton from '$lib/components/common/BackButton.svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import { IconButton } from '$lib/components/ui/icon-button';
  import { X, CheckSquare, Square, Volume2, Layers, CheckCircle, Keyboard } from 'lucide-svelte';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import SearchInput from '$lib/components/common/SearchInput.svelte';
  import type { CourseId } from '$lib/types/course';
  import type { QuizMode, VocabItem } from '$lib/types';

  let searchTerm = '';
  let filterType: 'all' | 'main' | 'additional' | 'kanji' | 'supplementary' = 'all';

  $: courseId = $page.params.courseId as CourseId;
  $: lessonId = parseInt($page.params.id || '0');
  $: course = getCourse(courseId);
  $: lessonData = course?.getLessonData(lessonId);
  $: vocabulary = lessonData?.vocabulary || [];

  $: filteredVocab = vocabulary.filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      item.japanese.toLowerCase().includes(search) ||
      item.kana.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search)
    );
  });

  let selectedSet: Set<VocabItem> = new Set();
  $: allFilteredSelected = filteredVocab.length > 0 && filteredVocab.every(item => selectedSet.has(item));

  function toggleItem(item: VocabItem) {
    if (selectedSet.has(item)) selectedSet.delete(item);
    else selectedSet.add(item);
    selectedSet = selectedSet;
  }

  function toggleFiltered() {
    if (allFilteredSelected) {
      filteredVocab.forEach(item => selectedSet.delete(item));
    } else {
      filteredVocab.forEach(item => selectedSet.add(item));
    }
    selectedSet = selectedSet;
  }

  function clearSelection() {
    selectedSet.clear();
    selectedSet = selectedSet;
  }

  function practice(mode: QuizMode) {
    if (!selectedSet.size) return;
    sessionStorage.setItem('smartquiz_custom_vocab', JSON.stringify([...selectedSet]));
    goto(buildQuizUrl(courseId, mode, lessonId));
  }

  let hasAudio = false;
  onMount(() => {
    hasAudio = 'speechSynthesis' in window;
  });

  const typeBadgeVariant: Record<string, string> = {
    main: 'bg-primary text-white',
    additional: 'bg-secondary text-secondary-foreground',
    kanji: 'bg-success text-white',
    supplementary: 'bg-muted text-muted-foreground',
  };
</script>

<svelte:head>
  <title>Vocabulary - {lessonData?.title || 'Lesson'} | {course?.metadata.title || 'YatoGaku'}</title>
</svelte:head>

{#if lessonData && course}
  <PageWorkspace size="lg" class={selectedSet.size > 0 ? 'pb-28' : ''}>
    <PageHero
      eyebrow={`${course.metadata.level} · Lesson ${lessonData.lessonNumber}`}
      title="Vocabulary"
      subtitle={`${lessonData.title} · ${vocabulary.length} vocabulary words`}
    >
      {#snippet actions()}
        <BackButton href={`/course/${courseId}/lesson/${lessonId}`} text="Back to Lesson" />
      {/snippet}
    </PageHero>

    <!-- Controls -->
    <div class="flex gap-3 flex-wrap">
      <div class="flex-1 min-w-[220px]">
        <SearchInput bind:value={searchTerm} placeholder="Search Japanese, Kana, Vietnamese, English..." />
      </div>
      <select bind:value={filterType} class="py-2.5 px-3 border border-border rounded-xl bg-card text-foreground text-sm cursor-pointer">
        <option value="all">All types</option>
        <option value="main">Main</option>
        <option value="additional">Additional</option>
        <option value="kanji">Kanji</option>
        <option value="supplementary">Supplementary</option>
      </select>
    </div>

    <!-- Selection bar -->
    <div class="flex items-center gap-2 flex-wrap text-sm">
      <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-border rounded-lg text-sm cursor-pointer hover:border-primary hover:text-primary transition-colors bg-transparent" on:click={toggleFiltered}>
        <span class="leading-none">{#if allFilteredSelected}<CheckSquare size={16} aria-hidden="true" />{:else}<Square size={16} aria-hidden="true" />{/if}</span>
        {allFilteredSelected ? 'Deselect' : 'Select all'}
        {#if filterType !== 'all'}({filterType}){/if}
        ({filteredVocab.length})
      </button>
      {#if selectedSet.size > 0}
        <span class="font-semibold text-primary">{selectedSet.size} selected</span>
        <button class="text-xs text-muted-foreground underline cursor-pointer bg-transparent border-none hover:text-destructive" on:click={clearSelection}>Clear selection</button>
      {/if}
      <span class="ml-auto text-xs text-muted-foreground">
        {#if searchTerm || filterType !== 'all'}
          {filteredVocab.length} / {vocabulary.length} words
        {:else}
          {vocabulary.length} words
        {/if}
      </span>
    </div>

    <!-- Vocabulary Cards -->
    <div class="flex flex-col gap-3">
      {#each filteredVocab as item, index}
        <div
          class="vocab-card {selectedSet.has(item) ? 'selected' : ''}"
          on:click={() => toggleItem(item)}
          role="checkbox"
          aria-checked={selectedSet.has(item)}
          tabindex="0"
          on:keydown={(e) => e.key === ' ' && (e.preventDefault(), toggleItem(item))}
        >
          <div class="flex flex-col items-center gap-1.5">
            <input
              type="checkbox"
              class="w-4 h-4 cursor-pointer accent-primary"
              checked={selectedSet.has(item)}
              on:click|stopPropagation
              on:change={() => toggleItem(item)}
            />
            <span class="w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full text-xs font-bold">{index + 1}</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <div class="text-lg font-semibold text-foreground" style="font-family: var(--font-japanese)">{item.japanese}</div>
            {#if item.kana && item.kana !== item.japanese}
              <div class="text-sm text-muted-foreground">{item.kana}</div>
            {/if}
            <div class="text-xs text-muted-foreground italic">{kanaToRomaji(item.kana)}</div>
          </div>
          <div class="flex flex-col gap-0.5">
            <div class="text-sm font-semibold text-foreground">{item.english}</div>
            <div class="text-sm text-muted-foreground">{item.english}</div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <Badge class="{typeBadgeVariant[item.type] || ''} text-[0.65rem] uppercase tracking-wider">{item.type}</Badge>
            {#if hasAudio}
              <button class="border border-border rounded-lg px-2 py-1 cursor-pointer hover:border-primary transition-colors bg-transparent" on:click|stopPropagation={() => playJapaneseAudio(item.kana || item.japanese)} title="Listen">
                <Volume2 size={16} aria-hidden="true" />
              </button>
            {/if}
          </div>
          {#if item.example}
            <div class="col-span-full col-start-2 p-3 bg-muted rounded-lg text-sm mt-1">
              <span class="font-semibold text-primary">Ex:</span> {item.example}
            </div>
          {/if}
        </div>
      {/each}

      {#if filteredVocab.length === 0}
        <div class="text-center py-12 text-muted-foreground">
          No vocabulary found matching "{searchTerm}"
        </div>
      {/if}
    </div>
  </PageWorkspace>
{:else}
  <PageEmpty
    title="Lesson Not Found"
    description="The vocabulary for this lesson could not be loaded."
    action={{ label: 'Back to Courses', href: '/courses' }}
  />
{/if}

<!-- Practice bar -->
{#if selectedSet.size > 0}
  <div class="practice-bar fixed bottom-0 inset-x-0 bg-card border-t-2 border-primary px-4 py-2.5 flex items-center gap-3 z-50 shadow-lg">
    <span class="text-sm text-muted-foreground whitespace-nowrap"><strong class="text-primary text-base">{selectedSet.size}</strong> words</span>
    <div class="flex gap-2 flex-1 justify-center flex-wrap">
      <UiButton size="sm" onclick={() => practice('flashcard')}><Layers class="size-4" strokeWidth={2} aria-hidden="true" /> Flashcard</UiButton>
      <UiButton size="sm" onclick={() => practice('multiple-choice')}><CheckCircle class="size-4" strokeWidth={2} aria-hidden="true" /> Multiple choice</UiButton>
      <UiButton size="sm" onclick={() => practice('typing')}><Keyboard class="size-4" strokeWidth={2} aria-hidden="true" /> Type it</UiButton>
    </div>
    <IconButton icon={X} label="Clear selection" title="Deselect all" variant="outline" onclick={clearSelection} />
  </div>
{/if}

<style>
  .vocab-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.75rem;
    align-items: start;
    transition: all 0.2s ease;
    cursor: pointer;
    user-select: none;
  }
  .vocab-card:hover {
    box-shadow: var(--shadow-surface);
    border-color: var(--color-primary);
  }
  .vocab-card.selected {
    border-color: var(--color-primary);
    background: color-mix(in srgb, var(--color-primary) 6%, var(--color-card));
  }
  .col-span-full { grid-column: 2 / -1; }

  @media (max-width: 768px) {
    .vocab-card { grid-template-columns: auto 1fr; gap: 0.6rem; }
    .col-span-full { grid-column: 1 / -1; }
  }
</style>

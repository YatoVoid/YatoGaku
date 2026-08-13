<script lang="ts">
  import { base } from '$app/paths';
  import { getKanjiLessonMetadata } from '$lib/data/kanji/lessons';
  import { KANJI_N3_DATA } from '$lib/data/kanji/kanji-n3';
  import { KANJI_N2_DATA } from '$lib/data/kanji/kanji-n2';
  import { KANJI_N1_DATA } from '$lib/data/kanji/kanji-n1';
  import { kanjiProgressStore, getKanjiMastery, getRecentKanjiLesson } from '$lib/stores/kanjiProgress';
  import FilterTabs from '$lib/components/common/FilterTabs.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import SearchInput from '$lib/components/common/SearchInput.svelte';
  import StudyListCard from '$lib/components/common/StudyListCard.svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import { BookOpen, ChevronRight } from 'lucide-svelte';

  const allLessons = getKanjiLessonMetadata();
  let searchQuery = '';
  let selectedLevel: 'n5n4' | 'n3' | 'n2' | 'n1' = 'n5n4';
  let masteryFilter: 'all' | 'started' | 'mastered' = 'all';

  const levels = [
    { id: 'n5n4' as const, label: 'N5/N4', count: 255, desc: '25 Minna lessons' },
    { id: 'n3' as const, label: 'N3', count: KANJI_N3_DATA.length, desc: 'Intermediate' },
    { id: 'n2' as const, label: 'N2', count: KANJI_N2_DATA.length, desc: 'Upper intermediate' },
    { id: 'n1' as const, label: 'N1', count: KANJI_N1_DATA.length, desc: 'Advanced' }
  ];

  const masteryOptions = [
    { id: 'all', label: 'All' },
    { id: 'started', label: 'In progress' },
    { id: 'mastered', label: 'Mastered' }
  ];

  $: totalKanji = levels.reduce((s, l) => s + l.count, 0);
  $: levelOptions = levels.map(lvl => ({
    id: lvl.id,
    label: lvl.label,
    description: `${lvl.count} kanji`
  }));

  $: recentLesson = getRecentKanjiLesson($kanjiProgressStore);
  $: searchedLessons = searchQuery
    ? allLessons.filter(l =>
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(l.lessonNumber).includes(searchQuery)
      )
    : allLessons;
  $: lessons = searchedLessons.filter(lesson => {
    const mastery = getKanjiMastery($kanjiProgressStore, lesson.lessonNumber);
    if (masteryFilter === 'started') return mastery > 0 && mastery < 80;
    if (masteryFilter === 'mastered') return mastery >= 80;
    return true;
  });

  function getKanjiList(level: string) {
    switch (level) {
      case 'n3': return KANJI_N3_DATA;
      case 'n2': return KANJI_N2_DATA;
      case 'n1': return KANJI_N1_DATA;
      default: return [];
    }
  }
</script>

<svelte:head>
  <title>Kanji ({totalKanji} characters) | Smart Quiz</title>
</svelte:head>

<PageWorkspace size="lg">
  <PageHero
    eyebrow="Japanese script"
    title="漢字 Kanji"
    subtitle="{totalKanji} kanji, N5 through N1. Pick a level, study by lesson, then come back to review what isn't solid yet."
    script="japanese"
  >
    {#snippet actions()}
      <UiButton href="{base}/kanji/radicals" variant="outline" size="sm">
        <BookOpen size={16} aria-hidden="true" />
        214 Radicals
      </UiButton>
    {/snippet}
  </PageHero>

  <FilterTabs bind:value={selectedLevel} options={levelOptions} ariaLabel="JLPT level" />

  {#if selectedLevel === 'n5n4'}
    {#if recentLesson}
      <StudyListCard
        href="{base}/kanji/{recentLesson}/reference"
        title="Continue kanji study"
        subtitle={`Lesson ${recentLesson} · ${getKanjiMastery($kanjiProgressStore, recentLesson)}% mastered`}
        active
      >
        {#snippet leading()}
          <span class="text-sm font-bold">{recentLesson}</span>
        {/snippet}

        {#snippet trailing()}
          <ChevronRight size={20} class="text-primary" aria-hidden="true" />
        {/snippet}
      </StudyListCard>
    {/if}

    <section class="grid gap-3" aria-label="Search and filter kanji lessons">
      <SearchInput bind:value={searchQuery} placeholder="Search lessons... (number or name)" />
      <FilterTabs bind:value={masteryFilter} options={masteryOptions} ariaLabel="Filter by mastery" class="sm:inline-flex sm:w-fit" />
    </section>

    <section class="grid gap-3" aria-label="Kanji lessons">
      {#each lessons as lesson}
        {@const mastery = getKanjiMastery($kanjiProgressStore, lesson.lessonNumber)}
        <StudyListCard
          href="{base}/kanji/{lesson.lessonNumber}"
          title={lesson.title}
          subtitle={lesson.preview}
          meta={`${lesson.kanjiCount} kanji`}
        >
          {#snippet leading()}
            <span class="text-sm font-bold">{lesson.lessonNumber}</span>
          {/snippet}

          {#snippet trailing()}
            <span class="text-primary">{mastery}%</span>
            <ChevronRight size={20} class="text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
          {/snippet}
        </StudyListCard>
      {/each}

      {#if lessons.length === 0}
        <p class="rounded-surface border border-border bg-card p-6 text-center text-sm text-muted-foreground">
          No kanji lessons match this filter.
        </p>
      {/if}
    </section>
  {:else}
    <section class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" aria-label="Kanji {selectedLevel.toUpperCase()}">
      {#each getKanjiList(selectedLevel) as k}
        <article class="grid min-h-28 place-items-center gap-1 rounded-surface border border-border bg-card p-4 text-center">
          <span class="font-japanese text-4xl font-bold leading-none text-foreground">{k.character}</span>
          <span class="max-w-full truncate text-xs text-muted-foreground">{k.english.split(',')[0]}</span>
        </article>
      {/each}
    </section>
  {/if}
</PageWorkspace>

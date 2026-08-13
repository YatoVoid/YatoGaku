<script lang="ts">
  import { getAllHSKLevels, getHSKData } from '$lib/data/hsk';
  import { base } from '$app/paths';
  import { ChevronRight } from 'lucide-svelte';
  import FilterTabs from '$lib/components/common/FilterTabs.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import StudyListCard from '$lib/components/common/StudyListCard.svelte';

  const levels = getAllHSKLevels();
  let selectedLevel = 5;

  $: groups = getHSKData(selectedLevel);
  $: totalWords = groups.reduce((s, g) => s + g.words.length, 0);
  $: selectedLevelData = levels.find(l => l.level === selectedLevel);
  $: levelOptions = levels.map(lvl => ({
    id: lvl.level,
    label: `HSK ${lvl.level}`,
    description: `${lvl.wordCount} từ`
  }));

  const groupDescriptions: Record<string, string> = {
    a: 'Từ phổ biến nhất',
    b: 'Giao tiếp hằng ngày',
    c: 'Học thuật & công việc',
    d: 'Chuyên ngành',
    e: 'Nâng cao'
  };
</script>

<svelte:head>
  <title>HSK {selectedLevel} — {totalWords} từ | Smart Quiz</title>
</svelte:head>

<PageWorkspace size="lg">
  <PageHero
    eyebrow="Chinese vocabulary"
    title="HSK 汉语水平考试"
    subtitle="Chinese Proficiency Test — {levels.reduce((s, l) => s + l.wordCount, 0)}+ từ vựng được chia theo cấp độ và nhóm học."
    script="chinese"
  />

  <FilterTabs bind:value={selectedLevel} options={levelOptions} ariaLabel="HSK level" />

  <section class="grid gap-3" aria-label="HSK {selectedLevel} groups">
    <p class="text-sm text-muted-foreground">
      HSK {selectedLevelData?.level ?? selectedLevel} — {totalWords} từ vựng, {groups.length} nhóm
    </p>

    {#each groups as group}
      {@const desc = groupDescriptions[group.id.toLowerCase()] || ''}
      <StudyListCard
        href="{base}/hsk/{group.id}"
        title={group.title}
        subtitle={desc}
        meta={`${group.words.length} từ`}
      >
        {#snippet leading()}
          <span class="text-lg font-bold font-chinese">{group.id.toUpperCase()}</span>
        {/snippet}

        {#snippet trailing()}
          <ChevronRight size={20} class="text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
        {/snippet}
      </StudyListCard>
    {/each}
  </section>
</PageWorkspace>

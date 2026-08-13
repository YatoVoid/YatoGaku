<script lang="ts">
  /**
   * /exams — list available mock JLPT papers grouped by level.
  */
  import { getAvailableLevels, getPaperSummariesByLevel } from '$lib/data/exams';
  import ExamCard from '$lib/components/exam/ExamCard.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  const levels = getAvailableLevels();
  const byLevel = levels.map((level) => ({
    level,
    papers: getPaperSummariesByLevel(level)
  }));
  const totalPapers = byLevel.reduce((n, g) => n + g.papers.length, 0);
</script>

<svelte:head>
  <title>Luyện đề JLPT - Smart Quiz</title>
  <meta name="description" content="Làm đề thi thử JLPT theo cấp độ — chấm điểm, xem lại đáp án và giải thích." />
</svelte:head>

<PageWorkspace size="lg">
  <PageHero
    eyebrow="Exam practice"
    title="Luyện đề JLPT"
    subtitle="Làm đề thi thử có tính giờ, chấm điểm và xem lại đáp án."
  />

  {#if totalPapers === 0}
    <div class="rounded-surface border border-border bg-card p-8 text-center">
      <p class="text-sm font-bold mb-1">Chưa có đề thi</p>
      <p class="text-xs text-muted-foreground">Các đề thi thử sẽ sớm được bổ sung.</p>
    </div>
  {:else}
    {#each byLevel as group (group.level)}
      <section class="mb-7">
        <h2 class="mb-3 flex items-center gap-2 text-lg font-bold">
          <span>{group.level}</span>
          <span class="text-xs font-normal text-muted-foreground">({group.papers.length} đề)</span>
        </h2>
        <div class="flex flex-col gap-3">
          {#each group.papers as paper (paper.id)}
            <ExamCard summary={paper} />
          {/each}
        </div>
      </section>
    {/each}
  {/if}
</PageWorkspace>

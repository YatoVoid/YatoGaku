<script lang="ts">
  /**
   * Summary card for one exam paper — links into the runner at /exams/[id].
   */
  import { base } from '$app/paths';
  import type { ExamPaperSummary } from '$lib/types/exam';
  import { sectionTypeLabel } from '$lib/utils/examUtils';
  import { Badge } from '$lib/components/ui/badge';
  import { FileText, Clock, ListChecks, ChevronRight } from 'lucide-svelte';

  let { summary }: { summary: ExamPaperSummary } = $props();

  // De-duplicate section types while preserving order (a paper may repeat one).
  const uniqueTypes = $derived([...new Set(summary.sectionTypes)]);
  const sourceLabel = $derived(
    [summary.source.name, summary.source.license].filter(Boolean).join(' · ')
  );
</script>

<a
  href="{base}/exams/{summary.id}"
  class="exam-card"
  data-testid="exam-card"
  data-paper-id={summary.id}
>
  <div class="exam-card__body">
    <div class="exam-card__head">
      <Badge variant="secondary" class="font-bold">{summary.level}</Badge>
      <h3 class="exam-card__title">{summary.title}</h3>
    </div>

    <div class="exam-card__meta">
      <span class="meta"><FileText size={16} aria-hidden="true" /> {summary.questionCount} questions</span>
      <span class="meta"><Clock size={16} aria-hidden="true" /> {summary.durationMinutes} min</span>
      <span class="meta"><ListChecks size={16} aria-hidden="true" /> {uniqueTypes.length} sections</span>
    </div>

    <div class="exam-card__types">
      {#each uniqueTypes as type (type)}
        <Badge variant="outline" class="text-[0.7rem]">{sectionTypeLabel(type)}</Badge>
      {/each}
    </div>

    {#if sourceLabel}
      <p class="exam-card__source">Source: {sourceLabel}</p>
    {/if}
  </div>

  <ChevronRight size={20} class="exam-card__chevron" aria-hidden="true" />
</a>

<style>
  .exam-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1.1rem 1.25rem;
    background: var(--color-card);
    border: 1px solid color-mix(in srgb, var(--color-border) 60%, transparent);
    border-radius: var(--radius-surface);
    box-shadow: var(--shadow-surface);
    text-decoration: none;
    color: inherit;
    transition:
      border-color 0.2s,
      transform 0.2s,
      box-shadow 0.2s;
  }
  .exam-card:hover {
    border-color: color-mix(in srgb, var(--color-primary) 50%, transparent);
    transform: translateY(-2px);
    box-shadow: var(--shadow-surface);
  }
  .exam-card__body {
    flex: 1;
    min-width: 0;
  }
  .exam-card__head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .exam-card__title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
  }
  .exam-card__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-bottom: 0.6rem;
  }
  .meta {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
  }
  .exam-card__types {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  .exam-card__source {
    margin: 0.6rem 0 0;
    font-size: 0.72rem;
    color: var(--color-muted-foreground);
  }
  :global(.exam-card__chevron) {
    flex-shrink: 0;
    color: var(--color-muted-foreground);
    transition: transform 0.2s;
  }
  .exam-card:hover :global(.exam-card__chevron) {
    transform: translateX(3px);
    color: var(--color-primary);
  }
</style>

<script lang="ts">
  /**
   * Exam result + per-question review screen.
   */
  import { base } from '$app/paths';
  import type { ExamPaper, ExamResult } from '$lib/types/exam';
  import { sectionTypeLabel } from '$lib/utils/examUtils';
  import ExamQuestionView from './ExamQuestionView.svelte';
  import { Badge } from '$lib/components/ui/badge';
  import Button from '$lib/components/ui/button/button.svelte';

  let {
    paper,
    result,
    answers,
    onretake
  }: {
    paper: ExamPaper;
    result: ExamResult;
    answers: Record<string, number>;
    onretake?: () => void;
  } = $props();

  function formatDuration(seconds?: number): string {
    if (seconds === undefined) return '—';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  // Precompute a stable 1-based question number per section (no template mutation).
  const reviewSections = $derived(
    (() => {
      let offset = 0;
      return paper.sections.map((section) => {
        const startNumber = offset;
        offset += section.questions.length;
        return { section, startNumber };
      });
    })()
  );
</script>

<div class="result" data-testid="exam-result">
  <!-- Score summary -->
  <div class="summary {result.passed ? 'summary--pass' : 'summary--fail'}">
    <div class="summary__emoji">{result.passed ? '🎉' : '📚'}</div>
    <h2 class="summary__title">
      {result.passed ? 'Passed!' : 'Not yet'}
    </h2>
    <div class="summary__score">
      <span class="summary__percent">{result.scorePercent}%</span>
      <Badge variant={result.passed ? 'default' : 'destructive'}>
        {result.passed ? 'PASS' : 'FAIL'}
      </Badge>
    </div>
    <p class="summary__detail">
      {result.correct}/{result.total} correct · Time {formatDuration(result.durationSeconds)}
    </p>
    <p class="summary__note">Need ≥ 60% to pass.</p>
  </div>

  <!-- Per-section breakdown -->
  <div class="sections">
    {#each result.sections as s, i (i)}
      <div class="section-stat">
        <span class="section-stat__label">{sectionTypeLabel(s.type)}</span>
        <span class="section-stat__value">{s.correct}/{s.total}</span>
        <span class="section-stat__pct">
          {s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0}%
        </span>
      </div>
    {/each}
  </div>

  <!-- Actions -->
  <div class="actions">
    {#if onretake}
      <Button onclick={onretake}>Retry</Button>
    {/if}
    <Button variant="secondary" onclick={() => (window.location.href = `${base}/exams`)}>
      Back to exam list
    </Button>
  </div>

  <!-- Review -->
  <h3 class="review-heading">Review Your Answers</h3>
  {#each reviewSections as { section, startNumber }, si (si)}
    <section class="review-section">
      <h4 class="review-section__title" style="font-family: var(--font-japanese)">{section.title}</h4>

      {#if section.passages}
        {#each section.passages as psg (psg.id)}
          <div class="passage">
            <p class="passage__text" style="font-family: var(--font-japanese)">{psg.text}</p>
            {#if psg.translation}
              <p class="passage__translation">{psg.translation}</p>
            {/if}
          </div>
        {/each}
      {/if}

      {#each section.questions as question, qi (question.id)}
        <ExamQuestionView
          {question}
          number={startNumber + qi + 1}
          selected={answers[question.id]}
          review={true}
        />
      {/each}
    </section>
  {/each}
</div>

<style>
  .result {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .summary {
    text-align: center;
    padding: 1.75rem 1.25rem;
    border-radius: var(--radius-surface);
    border: 1px solid var(--color-border);
  }
  .summary--pass {
    background: color-mix(in srgb, var(--color-success) 8%, var(--color-card));
    border-color: color-mix(in srgb, var(--color-success) 35%, transparent);
  }
  .summary--fail {
    background: color-mix(in srgb, var(--color-destructive) 7%, var(--color-card));
    border-color: color-mix(in srgb, var(--color-destructive) 30%, transparent);
  }
  .summary__emoji {
    font-size: 2.5rem;
  }
  .summary__title {
    margin: 0.25rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .summary__score {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
  }
  .summary__percent {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--color-primary);
    font-variant-numeric: tabular-nums;
  }
  .summary__detail {
    margin: 0;
    font-size: 0.9rem;
    color: var(--color-muted-foreground);
  }
  .summary__note {
    margin: 0.25rem 0 0;
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
  }
  .sections {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .section-stat {
    flex: 1 1 0;
    min-width: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    padding: 0.85rem 0.5rem;
    background: var(--color-muted);
    border-radius: 0.75rem;
  }
  .section-stat__label {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--color-muted-foreground);
  }
  .section-stat__value {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .section-stat__pct {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-primary);
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
  }
  .review-heading {
    margin: 0.75rem 0 0;
    font-size: 1.1rem;
    font-weight: 700;
  }
  .review-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .review-section__title {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  .passage {
    padding: 0.9rem 1rem;
    background: var(--color-muted);
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
  }
  .passage__text {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    white-space: pre-line;
  }
  .passage__translation {
    margin: 0.5rem 0 0;
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
  }
</style>

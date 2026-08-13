<script lang="ts">
  /**
   * Lessons Page - Minna no Nihongo Lesson Grid
   */

  import { getLessonMetadata } from '$lib/data/minna/lessons';
  import Card from '$lib/components/ui/card/card.svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  const lessons = getLessonMetadata();

  function handleLessonClick(lessonNumber: number) {
    goto(`${base}/lesson/${lessonNumber}`);
  }
</script>

<svelte:head>
  <title>Minna no Nihongo - Lessons | Smart Quiz</title>
</svelte:head>

<div class="lessons-page">
  <div class="screen-heading">
    <h2>Minna no Nihongo</h2>
    <p class="text-muted">
      25 lessons — vocabulary, grammar, and quiz
    </p>
  </div>

  <div class="lesson-grid">
    {#each lessons as lesson}
      <Card hover clickable onclick={() => handleLessonClick(lesson.lessonNumber)}>
        <div class="lesson-number">Bài {lesson.lessonNumber}</div>
        <div class="lesson-title">{lesson.title}</div>
        <div class="lesson-meta">
          {lesson.vocabCount} từ • {lesson.grammarCount} ngữ pháp
        </div>
        <div class="lesson-progress-bar">
          <div class="fill" style="width: 0%"></div>
        </div>
      </Card>
    {/each}
  </div>
</div>

<style>

  .screen-heading h2 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .lesson-number {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.25rem;
  }

  .lesson-title {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.4rem;
  }

  .lesson-meta {
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.5rem;
  }

  .lesson-progress-bar {
    height: 4px;
    background: var(--color-border);
    border-radius: var(--radius-control);
    overflow: hidden;
  }

  .lesson-progress-bar .fill {
    height: 100%;
    background: var(--color-success);
    border-radius: var(--radius-control);
    transition: none;
  }

  @media (max-width: 600px) {
    .lesson-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem;
    }

    .screen-heading h2 {
      font-size: 1.15rem;
    }

    .lesson-title {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 380px) {
    .lesson-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

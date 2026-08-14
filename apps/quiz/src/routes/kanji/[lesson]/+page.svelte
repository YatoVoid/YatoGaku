<script lang="ts">
  /**
   * Kanji Lesson Menu Page
   * Shows reference + quiz mode options for a specific kanji lesson
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getKanjiLessonData } from '$lib/data/kanji/lessons';
  import Button from '$lib/components/ui/button/button.svelte';

  import type { KanjiQuizDirection } from '$lib/utils/kanjiQuizUtils';

  $: lessonId = parseInt($page.params.lesson || '0');
  $: lessonData = lessonId > 0 ? getKanjiLessonData(lessonId) : null;

  let selectedDirection: KanjiQuizDirection = 'kanji-en';

  const directions: { value: KanjiQuizDirection; label: string }[] = [
    { value: 'kanji-en', label: 'Kanji → English' },
    { value: 'kanji-reading', label: 'Kanji → Reading' },
    { value: 'kanji-romaji', label: 'Kanji → Romaji' },
  ];

  function goToReference() {
    goto(`${base}/kanji/${lessonId}/reference`);
  }

  function startQuiz(mode: 'flashcard' | 'mc' | 'typing') {
    goto(`${base}/kanji/${lessonId}/quiz/${mode}?direction=${selectedDirection}`);
  }
</script>

<svelte:head>
  <title>{lessonData?.title || 'Kanji Lesson'} - YatoGaku</title>
</svelte:head>

{#if lessonData}
  <div class="lesson-menu">
    <div class="lesson-header">
      <div class="lesson-number-badge">Kanji - Lesson {lessonData.lessonNumber}</div>
      <h2 class="lesson-title-large">{lessonData.title}</h2>
      <div class="lesson-stats">
        <span>{lessonData.kanji.length} kanji</span>
      </div>
    </div>

    <div class="menu-actions">
      <Button
        variant="outline"
        size="lg"
        icon="📖"
        onclick={goToReference}
      >
        Kanji Reference Table
      </Button>

      <div class="direction-selector">
        <p class="direction-label">Direction</p>
        <div class="direction-options">
          {#each directions as dir}
            <button
              class="direction-btn {selectedDirection === dir.value ? 'active' : ''}"
              onclick={() => selectedDirection = dir.value}
            >
              {dir.label}
            </button>
          {/each}
        </div>
      </div>

      <div class="menu-section-divider">
        <hr class="menu-divider-line" />
        <span class="menu-divider-text">Quiz Modes</span>
        <hr class="menu-divider-line" />
      </div>

      <Button
        variant="primary"
        size="lg"
        icon="🎴"
        onclick={() => startQuiz('flashcard')}
      >
        Flashcard Quiz
      </Button>

      <Button
        variant="accent"
        size="lg"
        icon="✓"
        onclick={() => startQuiz('mc')}
      >
        Multiple Choice
      </Button>

      <Button
        variant="success"
        size="lg"
        icon="⌨️"
        onclick={() => startQuiz('typing')}
      >
        Typing Quiz
      </Button>
    </div>
  </div>
{:else}
  <div class="error-state">
    <h2>Kanji Lesson Not Found</h2>
    <p>The kanji lesson you're looking for doesn't exist.</p>
    <Button variant="primary" onclick={() => goto(`${base}/kanji`)}>
      Back to Kanji
    </Button>
  </div>
{/if}

<style>
  .lesson-menu {
    max-width: 500px;
    margin: 0 auto;
  }

  .direction-selector {
    margin: 1rem 0;
  }

  .direction-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-muted-foreground);
    margin-bottom: 0.5rem;
  }

  .direction-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .direction-btn {
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid var(--color-border);
    background: var(--color-card);
    color: var(--color-muted-foreground);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .direction-btn:hover {
    border-color: var(--color-primary);
    color: var(--color-foreground);
  }

  .direction-btn.active {
    background: var(--color-primary);
    color: var(--color-primary-foreground);
    border-color: var(--color-primary);
  }

  .lesson-header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary));
    border-radius: var(--radius-surface);
    color: white;
  }

  .lesson-number-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  .lesson-title-large {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: var(--font-japanese);
    margin: 0 0 0.75rem 0;
  }

  .lesson-stats {
    font-size: 0.9rem;
    opacity: 0.9;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .menu-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .error-state {
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .error-state h2 {
    margin-bottom: 1rem;
  }

  .error-state p {
    color: var(--color-muted-foreground);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    .lesson-header {
      padding: 1rem;
    }

    .lesson-title-large {
      font-size: 1.25rem;
    }
  }
</style>

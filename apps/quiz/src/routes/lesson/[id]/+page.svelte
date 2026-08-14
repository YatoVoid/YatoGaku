<script lang="ts">
  /**
   * Lesson Menu Page
   * Shows quiz mode options for a specific lesson
   */

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getLessonData } from '$lib/data/minna/lessons';
  import Button from '$lib/components/ui/button/button.svelte';
  import Card from '$lib/components/ui/card/card.svelte';

  $: lessonId = parseInt($page.params.id || '0');
  $: lessonData = lessonId > 0 ? getLessonData(lessonId) : null;

  function startQuiz(mode: 'flashcard' | 'multiple-choice' | 'typing') {
    goto(`${base}/quiz/${mode}?lesson=${lessonId}`);
  }

  function viewVocabulary() {
    goto(`${base}/lesson/${lessonId}/vocabulary`);
  }

  function viewGrammar() {
    goto(`${base}/lesson/${lessonId}/grammar`);
  }
</script>

<svelte:head>
  <title>{lessonData?.title || 'Lesson'} - YatoGaku</title>
</svelte:head>

{#if lessonData}
  <div class="lesson-menu">
    <div class="lesson-header">
      <div class="lesson-number-badge">Lesson {lessonData.lessonNumber}</div>
      <h2 class="lesson-title-large">{lessonData.title}</h2>
      <div class="lesson-stats">
        <span>{lessonData.vocabulary.length} vocabulary words</span>
        <span>•</span>
        <span>{lessonData.grammar.length} grammar points</span>
      </div>
    </div>

    <div class="menu-actions">
      <h3 class="section-title">📝 Quiz Modes</h3>

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
        onclick={() => startQuiz('multiple-choice')}
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

      <div class="menu-section-divider">
        <hr class="menu-divider-line" />
        <span class="menu-divider-text">Study Materials</span>
        <hr class="menu-divider-line" />
      </div>

      <Button
        variant="outline"
        size="md"
        icon="📚"
        onclick={viewVocabulary}
      >
        View Vocabulary List
      </Button>

      <Button
        variant="outline"
        size="md"
        icon="📖"
        onclick={viewGrammar}
      >
        View Grammar Patterns
      </Button>
    </div>
  </div>
{:else}
  <div class="error-state">
    <h2>Lesson Not Found</h2>
    <p>The lesson you're looking for doesn't exist.</p>
    <Button variant="primary" onclick={() => goto(`${base}/`)}>
      Back to Home
    </Button>
  </div>
{/if}

<style>
  .lesson-menu {
    max-width: 500px;
    margin: 0 auto;
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

  .section-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: var(--color-foreground);
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

<script lang="ts">
  /**
   * Kanji Multiple Choice Component
   * Shows kanji character → choose meaning/reading
   */

  import type { KanjiItem } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { Volume2, Check, X } from 'lucide-svelte';

  export let item: KanjiItem;
  export let options: string[] = [];
  export let answer: string;

  const dispatch = createEventDispatcher();

  let selectedOption: string | null = null;
  let answered = false;

  // Reset state when question changes
  let prevAnswer = '';
  $: if (answer !== prevAnswer) {
    prevAnswer = answer;
    selectedOption = null;
    answered = false;
  }

  function selectOption(option: string) {
    if (answered) return;

    selectedOption = option;
    answered = true;

  }

  function advance() {
    if (!answered || selectedOption === null) return;
    dispatch(selectedOption === answer ? 'correct' : 'wrong', { item });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'F1') {
      event.preventDefault();
      playJapaneseAudio(item.character);
      return;
    }
    if (answered) {
      if (event.key === 'Enter') { event.preventDefault(); advance(); }
      return;
    }

    const key = event.key;
    if (['1', '2', '3', '4'].includes(key)) {
      const index = parseInt(key) - 1;
      if (options[index]) {
        selectOption(options[index]);
      }
    }
  }

  function getOptionClass(option: string): string {
    if (!answered) return 'mc-option';
    if (option === answer) return 'mc-option correct';
    if (option === selectedOption) return 'mc-option wrong';
    return 'mc-option disabled';
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="quiz-question-card">
  <div class="question-label">What is the meaning of:</div>
  <div class="question-kanji">{item.character}</div>
  <div class="question-meta">
    {#if item.onyomi.length > 0}
      <span class="meta-reading">{item.onyomi.join('、')}</span>
    {/if}
  </div>
  <button class="btn-speak btn-speak--fc" on:click={() => playJapaneseAudio(item.character)}>
    <Volume2 size={16} aria-hidden="true" /> Speak (F1)
  </button>
</div>

<div class="mc-options">
  {#each options as option, index}
    <button
      class={getOptionClass(option)}
      on:click={() => selectOption(option)}
      disabled={answered}
    >
      <span class="mc-option-number">{index + 1}.</span>
      <span class="mc-option-text">{option}</span>
    </button>
  {/each}
</div>

{#if answered}
  <div class="feedback" class:correct={selectedOption === answer} class:wrong={selectedOption !== answer} aria-live="polite" aria-atomic="true">
    {#if selectedOption === answer}
      <Check size={16} aria-hidden="true" /> Correct!
    {:else}
      <X size={16} aria-hidden="true" /> Wrong! The correct answer is: {answer}
    {/if}
  </div>
  <button class="ui-button next-action" data-variant="default" data-size="lg" on:click={advance}>Next question</button>
  <div class="hint-text">Press Enter to continue</div>
{/if}

{#if !answered}
  <div class="hint-text">
    Press 1-4 to choose · F1 to speak
  </div>
{/if}

<style>
  .quiz-question-card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    padding: 1.5rem;
    margin-bottom: 1.25rem;
    box-shadow: var(--shadow-surface);
    text-align: center;
  }

  .question-label {
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.4rem;
  }

  .question-kanji {
    font-family: var(--font-japanese);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .question-meta {
    margin-bottom: 0.5rem;
  }

  .meta-reading {
    font-family: var(--font-japanese);
    font-size: 0.95rem;
    color: var(--color-muted-foreground);
  }

  .mc-options {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  .mc-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    text-align: left;
    background: var(--color-card);
    color: var(--color-foreground);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-control);
    cursor: pointer;
    transition: border-color var(--motion-standard), background var(--motion-standard);
    line-height: 1.4;
  }

  .mc-option:hover:not(:disabled):not(.disabled) {
    border-color: var(--color-primary);
  }

  .mc-option.correct {
    border-color: var(--color-success);
    background: var(--color-success-subtle);
  }

  .mc-option.wrong {
    border-color: var(--color-destructive);
    background: var(--color-destructive-subtle);
  }

  .mc-option.disabled {
    cursor: default;
    opacity: 0.7;
  }

  .mc-option.correct.disabled {
    opacity: 1;
  }

  .mc-option-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  .mc-option-text {
    flex: 1;
  }

  .feedback {
    padding: 0.8rem 1rem;
    border-radius: var(--radius-control);
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
  }

  .feedback.correct {
    background: var(--color-success-subtle);
    color: var(--color-success);
  }

  .feedback.wrong {
    background: var(--color-destructive-subtle);
    color: var(--color-destructive);
  }

  .hint-text {
    text-align: center;
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
  }

  .next-action { width: 100%; margin-bottom: var(--spacing-sm); }

  @media (max-width: 600px) {
    .question-kanji {
      font-size: 2.5rem;
    }

    .mc-option {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }
  }
</style>

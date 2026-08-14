<script lang="ts">
  /**
   * A single multiple-choice exam question.
   * - active mode: clickable options, highlights the chosen one.
   * - review mode: read-only; marks the correct answer + the user's wrong pick,
   *   and reveals the explanation.
   */
  import type { ExamQuestion } from '$lib/types/exam';
  import { Check, X } from 'lucide-svelte';

  let {
    question,
    number,
    selected,
    onselect,
    review = false
  }: {
    question: ExamQuestion;
    number: number;
    selected: number | undefined;
    onselect?: (index: number) => void;
    review?: boolean;
  } = $props();

  type OptionState = 'correct' | 'wrong' | 'chosen' | 'idle';

  function optionState(idx: number): OptionState {
    if (review) {
      if (idx === question.answerIndex) return 'correct';
      if (idx === selected && selected !== question.answerIndex) return 'wrong';
      return 'idle';
    }
    return idx === selected ? 'chosen' : 'idle';
  }

  function handle(idx: number) {
    if (review) return;
    onselect?.(idx);
  }

  const answeredCorrectly = $derived(review && selected === question.answerIndex);
</script>

<div class="exam-question" data-question-id={question.id}>
  <p class="prompt">
    <span class="q-number">{number}.</span>
    <span style="font-family: var(--font-japanese)">{question.prompt}</span>
  </p>

  {#if question.audioUrl}
    <!-- svelte-ignore a11y_media_has_caption -->
    <audio controls src={question.audioUrl} class="mb-3 w-full"></audio>
  {/if}

  <div class="options" role="group" aria-label={`Question ${number}`}>
    {#each question.options as option, idx (idx)}
      <button
        type="button"
        class="option option--{optionState(idx)}"
        aria-pressed={selected === idx}
        disabled={review}
        onclick={() => handle(idx)}
      >
        <span class="option-key">{idx + 1}.</span>
        <span class="option-text">{option}</span>
        {#if review && optionState(idx) === 'correct'}
          <Check size={16} class="ml-auto text-success" aria-label="Correct answer" />
        {:else if review && optionState(idx) === 'wrong'}
          <X size={16} class="ml-auto text-destructive" aria-label="Your choice was wrong" />
        {/if}
      </button>
    {/each}
  </div>

  {#if review}
    <p class="verdict {answeredCorrectly ? 'verdict--ok' : 'verdict--no'}">
      {#if selected === undefined}
        Not answered: the correct answer is {question.answerIndex + 1}.
      {:else if answeredCorrectly}
        Correct
      {:else}
        You chose {selected + 1}, the correct answer is {question.answerIndex + 1}.
      {/if}
    </p>
    {#if question.explanation}
      <p class="explanation">💡 {question.explanation}</p>
    {/if}
  {/if}
</div>

<style>
  .exam-question {
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-card);
  }
  .prompt {
    display: flex;
    gap: 0.5rem;
    margin: 0 0 0.85rem;
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.5;
  }
  .q-number {
    color: var(--color-primary);
    font-weight: 700;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .option {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0.7rem 0.9rem;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: left;
    background: var(--color-background);
    color: var(--color-foreground);
    border: 2px solid var(--color-border);
    border-radius: 0.5rem;
    cursor: pointer;
    transition:
      border-color 0.15s,
      background 0.15s;
  }
  .option:disabled {
    cursor: default;
  }
  .option:hover:not(:disabled) {
    border-color: var(--color-primary);
  }
  .option-key {
    min-width: 1.4rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  .option-text {
    flex: 1;
  }
  .option--chosen {
    border-color: var(--color-primary);
    background: color-mix(in srgb, var(--color-primary) 12%, var(--color-card));
  }
  .option--correct {
    border-color: var(--color-success);
    background: color-mix(in srgb, var(--color-success) 14%, var(--color-card));
  }
  .option--wrong {
    border-color: var(--color-destructive);
    background: color-mix(in srgb, var(--color-destructive) 12%, var(--color-card));
  }
  .verdict {
    margin: 0.75rem 0 0;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .verdict--ok {
    color: var(--color-success);
  }
  .verdict--no {
    color: var(--color-destructive);
  }
  .explanation {
    margin: 0.4rem 0 0;
    padding: 0.6rem 0.75rem;
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--color-muted-foreground);
    background: var(--color-muted);
    border-radius: 0.5rem;
  }
</style>

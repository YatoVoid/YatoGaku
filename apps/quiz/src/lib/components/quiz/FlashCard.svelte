<script lang="ts">
  /**
   * FlashCard Component with 3D Flip Animation
   * Preserves CSS transform-style: preserve-3d for smooth flip
   */

  import type { VocabItem } from '$lib/types';
  import { createEventDispatcher, afterUpdate } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { Volume2, Check, X } from 'lucide-svelte';

  export let item: VocabItem;
  export let questionText = '';  // display text (based on direction)
  export let answerText = '';    // answer text (based on direction)
  export let autoFlip = false;
  export let autoSpeak = true;
  export let flipped = false;

  $: frontText = questionText || item.japanese;
  $: backText = answerText || item.vietnamese;

  const dispatch = createEventDispatcher();

  let cardElement: HTMLDivElement;
  let lastSpokenItem = '';

  function toggleFlip() {
    flipped = !flipped;
  }

  // Auto-speak when new card appears (front side)
  $: if (autoSpeak && !flipped && item?.japanese && item.japanese !== lastSpokenItem) {
    lastSpokenItem = item.japanese;
    setTimeout(() => playJapaneseAudio(item.kana || item.japanese), 200);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'F1') {
      event.preventDefault();
      playJapaneseAudio(item.kana || item.japanese);
      return;
    }
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      toggleFlip();
    }
  }

  function handleCorrect() {
    dispatch('correct', { item });
  }

  function handleWrong() {
    dispatch('wrong', { item });
  }

  // Auto-flip after delay
  $: {
    if (autoFlip && !flipped) {
      const timer = setTimeout(() => {
        flipped = true;
      }, 3000);
      // Cleanup will be handled by Svelte
    }
  }
</script>

<div
  class="flashcard"
  class:flipped
  tabindex="0"
  role="button"
  aria-label="Flip card"
  on:click={toggleFlip}
  on:keydown={handleKeydown}
  bind:this={cardElement}
>
  <div class="flashcard-inner">
    <!-- Front Side (Question) -->
    <div class="flashcard-front" aria-hidden={flipped}>
      <div class="fc-japanese">{frontText}</div>
      <div class="hint-text">Space to flip · F1 to speak</div>
      <button class="btn-speak btn-speak--fc" on:click|stopPropagation={() => playJapaneseAudio(item.kana || item.japanese)}>
        <Volume2 size={16} aria-hidden="true" /> Speak (F1)
      </button>
    </div>

    <!-- Back Side (Answer) -->
    <div class="flashcard-back" aria-hidden={!flipped}>
      <div class="fc-meaning">{backText}</div>
      {#if item.example}
        <div class="fc-example">{item.example}</div>
      {/if}
    </div>
  </div>
</div>

<!-- Navigation Controls -->
<div class="fc-nav">
  <button class="ui-button" data-variant="destructive" on:click={handleWrong}>
    <X size={16} aria-hidden="true" /> Wrong
  </button>
  <button class="ui-button" data-variant="success" on:click={handleCorrect}>
    <Check size={16} aria-hidden="true" /> Correct
  </button>
</div>

<style>
  .flashcard {
    width: 100%;
    max-width: 480px;
    height: 280px;
    margin: 0 auto 1rem;
    cursor: pointer;
    outline: none;
  }

  .flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .flashcard-front,
  .flashcard-back {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-surface);
    box-shadow: var(--shadow-lifted);
  }

  .flashcard-back {
    display: none;
  }

  .flashcard.flipped .flashcard-front {
    display: none;
  }

  .flashcard.flipped .flashcard-back {
    display: flex;
  }

  /* Front Side Styles */
  .fc-japanese {
    font-family: var(--font-japanese);
    font-size: 1.875rem; /* text-3xl — consistent across all quiz modes */
    font-weight: 700;
    text-align: center;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  .hint-text {
    text-align: center;
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-top: 1rem;
  }

  /* Back Side Styles */
  .fc-meaning {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .fc-example {
    font-family: var(--font-japanese);
    font-size: 0.85rem;
    color: var(--color-muted-foreground);
    font-style: italic;
    text-align: center;
    margin-top: 0.5rem;
  }

  /* Navigation */
  .fc-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  /* Mobile Responsive */
  @media (max-width: 600px) {
    .flashcard {
      height: 240px;
    }

    .fc-japanese {
      font-size: 1.5rem;
    }

    .fc-nav {
      gap: 0.4rem;
    }

    .fc-nav .ui-button {
      padding: 0.5rem 0.8rem;
      font-size: 0.85rem;
    }
  }
</style>

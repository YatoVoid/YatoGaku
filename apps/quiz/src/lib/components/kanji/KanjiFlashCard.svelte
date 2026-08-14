<script lang="ts">
  /**
   * Kanji FlashCard Component with 3D Flip Animation
   * Front: large kanji character; Back: readings + meanings + examples
   */

  import type { KanjiItem } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { kanaToRomaji } from '$lib/utils/kanaUtils';
  import { Volume2, Check, X } from 'lucide-svelte';

  export let item: KanjiItem;
  export let flipped = false;

  const dispatch = createEventDispatcher();

  function toggleFlip() {
    flipped = !flipped;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'F1') {
      event.preventDefault();
      playJapaneseAudio(item.character);
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
</script>

<div
  class="flashcard"
  class:flipped
  tabindex="0"
  role="button"
  aria-label="Flip card"
  on:click={toggleFlip}
  on:keydown={handleKeydown}
>
  <div class="flashcard-inner">
    <!-- Front Side (Kanji) -->
    <div class="flashcard-front">
      <div class="fc-kanji">{item.character}</div>
      <div class="fc-stroke">{item.strokeCount} strokes</div>
      <div class="hint-text">Space to flip · F1 to speak</div>
      <button class="btn-speak btn-speak--fc" on:click|stopPropagation={() => playJapaneseAudio(item.character)}>
        <Volume2 size={16} aria-hidden="true" /> Speak (F1)
      </button>
    </div>

    <!-- Back Side (Readings + Meaning + Examples) -->
    <div class="flashcard-back">
      <div class="fc-readings">
        {#if item.onyomi.length > 0}
          <div class="fc-reading-row">
            <span class="reading-label">音</span>
            <span class="reading-on">{item.onyomi.join('、')}</span>
          </div>
        {/if}
        {#if item.kunyomi.length > 0}
          <div class="fc-reading-row">
            <span class="reading-label">訓</span>
            <span class="reading-kun">{item.kunyomi.join('、')}</span>
          </div>
        {/if}
      </div>
      <div class="fc-meaning">{item.english}</div>
      {#if item.examples.length > 0}
        <div class="fc-example">
          <span>{item.examples[0].word} ({item.examples[0].kana})</span>
          <span class="fc-romaji">{kanaToRomaji(item.examples[0].kana)}</span>
          <span class="fc-ex-meaning">— {item.examples[0].meaning}</span>
          <button class="fc-ex-audio" on:click|stopPropagation={() => playJapaneseAudio(item.examples[0].kana)} aria-label="Play pronunciation of {item.examples[0].word}">
            🔊
          </button>
        </div>
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
    perspective: 800px;
    width: 100%;
    max-width: 480px;
    height: 300px;
    margin: 0 auto 1rem;
    cursor: pointer;
    outline: none;
  }

  .flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
  }

  .flashcard.flipped .flashcard-inner {
    transform: rotateY(180deg);
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
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .flashcard-back {
    transform: rotateY(180deg);
  }

  .fc-kanji {
    font-family: var(--font-japanese);
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .fc-stroke {
    font-size: 0.8rem;
    color: var(--color-muted-foreground);
    margin-bottom: 0.5rem;
  }

  .hint-text {
    text-align: center;
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    margin-top: 0.5rem;
  }

  .fc-readings {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 0.75rem;
  }

  .fc-reading-row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-japanese);
    font-size: 1.1rem;
  }

  .reading-label {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.1rem 0.3rem;
    border-radius: var(--radius-control);
    background: var(--color-border);
    color: var(--color-muted-foreground);
  }

  .reading-on {
    color: var(--color-primary);
    font-weight: 500;
  }

  .reading-kun {
    color: var(--color-primary);
    font-weight: 500;
  }

  .fc-meaning {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    text-align: center;
  }

  .fc-example {
    font-family: var(--font-japanese);
    font-size: 0.82rem;
    color: var(--color-muted-foreground);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .fc-romaji {
    font-family: inherit;
    font-size: 0.75rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  .fc-ex-meaning {
    font-size: 0.78rem;
  }

  .fc-ex-audio {
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    cursor: pointer;
    padding: 0.1rem 0.3rem;
    font-size: 0.7rem;
    transition: all 0.15s;
  }

  .fc-ex-audio:hover {
    border-color: var(--color-primary);
  }

  .fc-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    .flashcard {
      height: 260px;
    }

    .fc-kanji {
      font-size: 3rem;
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

<script lang="ts">
  /**
   * Kanji Stroke Order Animation
   * Loads KanjiVG SVG and animates strokes with CSS stroke-dasharray
   */

  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { Pause, Play, SkipBack, SkipForward } from 'lucide-svelte';

  export let character: string;
  export let autoPlay = false;
  export let size = 150;

  let svgContent = '';
  let totalStrokes = 0;
  let currentStroke = 0;
  let playing = false;
  let speed = 1;
  let loaded = false;
  let error = false;
  let animTimer: ReturnType<typeof setTimeout>;

  function charToHex(char: string): string {
    return (char.codePointAt(0) || 0).toString(16).padStart(5, '0');
  }

  async function loadSVG() {
    loaded = false;
    error = false;
    currentStroke = 0;
    playing = false;

    const hex = charToHex(character);
    try {
      const res = await fetch(`${base}/kanjivg/${hex}.svg`);
      if (!res.ok) { error = true; return; }
      svgContent = await res.text();
      // Count paths (strokes)
      const matches = svgContent.match(/<path[^>]*d="[^"]+"/g);
      totalStrokes = matches ? matches.length : 0;
      loaded = true;
      if (autoPlay && totalStrokes > 0) play();
    } catch {
      error = true;
    }
  }

  function play() {
    if (currentStroke >= totalStrokes) currentStroke = 0;
    playing = true;
    stepAuto();
  }

  function stepAuto() {
    if (!playing || currentStroke >= totalStrokes) {
      playing = false;
      return;
    }
    currentStroke++;
    animTimer = setTimeout(stepAuto, 600 / speed);
  }

  function pause() {
    playing = false;
    clearTimeout(animTimer);
  }

  function stepForward() {
    pause();
    if (currentStroke < totalStrokes) currentStroke++;
  }

  function stepBack() {
    pause();
    if (currentStroke > 0) currentStroke--;
  }

  function setSpeed(s: number) {
    speed = s;
  }

  onMount(() => { loadSVG(); });
  $: if (character) loadSVG();
</script>

<div class="stroke-order" style="--size: {size}px">
  {#if error}
    <div class="stroke-fallback">Stroke data not available</div>
  {:else}
    {#if loaded}
      <div class="stroke-display" style="width: {size}px; height: {size}px" role="img" aria-label={`Thứ tự nét chữ ${character}: đang hiển thị ${currentStroke} trên ${totalStrokes} nét`}>
        {@html svgContent}
      </div>
    {:else}
      <div class="stroke-fallback">Loading...</div>
    {/if}

    <div class="stroke-info">
      Nét {currentStroke}/{totalStrokes}
    </div>

    <div class="stroke-controls">
      <button class="ctrl-btn" on:click={stepBack} aria-label="Nét trước" disabled={!loaded}><SkipBack size={16} aria-hidden="true" /></button>
      {#if playing}
        <button class="ctrl-btn ctrl-main" on:click={pause} aria-label="Tạm dừng"><Pause size={20} aria-hidden="true" /></button>
      {:else}
        <button class="ctrl-btn ctrl-main" on:click={play} aria-label="Phát thứ tự nét" disabled={!loaded}><Play size={20} aria-hidden="true" /></button>
      {/if}
      <button class="ctrl-btn" on:click={stepForward} aria-label="Nét tiếp theo" disabled={!loaded}><SkipForward size={16} aria-hidden="true" /></button>

      <div class="speed-control">
        {#each [0.5, 1, 2] as s}
          <button
            class="speed-btn"
            class:active={speed === s}
            on:click={() => setSpeed(s)}
          >{s}x</button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .stroke-order {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .stroke-display {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-card);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stroke-display :global(svg) {
    width: 100%;
    height: 100%;
  }

  .stroke-fallback {
    padding: 1rem;
    text-align: center;
    color: var(--color-muted-foreground);
    font-size: 0.85rem;
  }

  .stroke-info {
    font-size: 0.78rem;
    color: var(--color-muted-foreground);
    font-weight: 600;
  }

  .stroke-controls {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .ctrl-btn {
    width: 44px;
    height: 44px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-card);
    cursor: pointer;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .ctrl-btn:hover { background: var(--color-border); }
  .ctrl-main { width: 48px; height: 48px; }

  .speed-control {
    display: flex;
    gap: 0.15rem;
    margin-left: 0.5rem;
  }

  .speed-btn {
    min-height: 44px;
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    font-weight: 600;
    font-family: inherit;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    background: var(--color-background);
    color: var(--color-muted-foreground);
    cursor: pointer;
  }

  .speed-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }
</style>

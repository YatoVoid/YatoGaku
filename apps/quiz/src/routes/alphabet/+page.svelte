<script lang="ts">
  import { onMount } from 'svelte';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { HIRAGANA_DATA, KATAKANA_DATA } from '$lib/data/minna/alphabet';
  import type { AlphabetData, AlphabetChar } from '$lib/types';
  import BackButton from '$lib/components/common/BackButton.svelte';
  import Button from '$lib/components/ui/button/button.svelte';

  type AlphabetScript = 'hiragana' | 'katakana';

  let currentScript: AlphabetScript = 'hiragana';
  let hasAudioSupport = false;

  const ROW_LABELS: Record<string, string> = {
    vowel: 'あ行',
    k: 'か行',
    g: 'が行',
    s: 'さ行',
    z: 'ざ行',
    t: 'た行',
    d: 'だ行',
    n: 'な行',
    h: 'は行',
    b: 'ば行',
    p: 'ぱ行',
    m: 'ま行',
    y: 'や行',
    r: 'ら行',
    w: 'わ行',
    nn: 'ん'
  };

  const COL_HEADERS = ['a', 'i', 'u', 'e', 'o'];

  onMount(() => {
    // Check for speech synthesis support
    hasAudioSupport = typeof window !== 'undefined' && 'speechSynthesis' in window;
  });

  function switchScript(script: AlphabetScript) {
    currentScript = script;
  }

  function speakKana(kana: string) {
    if (!hasAudioSupport) return;
    playJapaneseAudio(kana);
  }

  $: currentData = currentScript === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;
</script>

<svelte:head>
  <title>Alphabet - Smart Quiz</title>
</svelte:head>

<div class="min-h-screen pb-8">
  <!-- Header -->
  <div class="p-6 bg-secondary border-b border-border">
    <div class="flex items-center gap-4">
      <BackButton />
      <h1 class="text-2xl font-bold text-foreground">🔤 Bảng chữ cái</h1>
    </div>
  </div>

  <!-- Tabs -->
  <div class="flex bg-background border-b-2 border-border px-6 overflow-x-auto">
    <button
      class="tab flex-1 px-6 py-4 bg-transparent border-b-3 border-transparent text-muted-foreground text-[0.95rem] font-semibold cursor-pointer whitespace-nowrap transition-colors duration-200 hover:text-foreground hover:bg-muted"
      class:active={currentScript === 'hiragana'}
      on:click={() => switchScript('hiragana')}
    >
      Hiragana (ひらがな)
    </button>
    <button
      class="tab flex-1 px-6 py-4 bg-transparent border-b-3 border-transparent text-muted-foreground text-[0.95rem] font-semibold cursor-pointer whitespace-nowrap transition-colors duration-200 hover:text-foreground hover:bg-muted"
      class:active={currentScript === 'katakana'}
      on:click={() => switchScript('katakana')}
    >
      Katakana (カタカナ)
    </button>
  </div>

  <!-- Content -->
  <div class="p-6">
    <p class="mb-4 text-sm text-muted-foreground" role="status">
      {hasAudioSupport ? 'Phát âm dùng giọng đọc trên thiết bị và có thể hoạt động ngoại tuyến.' : 'Thiết bị này không hỗ trợ phát âm tự động; bảng chữ vẫn dùng được đầy đủ.'}
    </p>
    <!-- Basic Characters Table -->
    <div class="mb-12">
      <h2 class="text-xl font-bold text-foreground mb-6">Bảng cơ bản (46 ký tự)</h2>

      <div class="overflow-x-auto rounded-lg bg-secondary p-4">
        <table class="w-full border-collapse text-base">
          <thead>
            <tr>
              <th></th>
              {#each COL_HEADERS as col}
                <th class="py-3 px-2 text-center font-semibold text-muted-foreground text-sm uppercase">{col}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each currentData.rows as row}
              {@const firstCell = row.find(Boolean)}
              {#if firstCell}
                <tr>
                  <th class="py-3 px-4 text-right font-semibold text-muted-foreground text-sm min-w-[80px]">
                    {ROW_LABELS[firstCell.row] || firstCell.row}
                  </th>
                  {#each row as cell}
                    {#if cell}
                      <td
                        class="alpha-cell py-4 px-2 text-center border border-border bg-background transition-colors duration-200"
                        class:alpha-cell--audio={hasAudioSupport}
                        title={hasAudioSupport ? `Phát âm: ${cell.romaji}` : cell.romaji}
                        on:click={() => speakKana(cell.kana)}
                        on:keydown={(e) => e.key === 'Enter' && speakKana(cell.kana)}
                        tabindex={hasAudioSupport ? 0 : -1}
                        role={hasAudioSupport ? 'button' : undefined}
                      >
                        <span class="block text-3xl font-medium text-foreground mb-1 md:text-2xl">{cell.kana}</span>
                        <span class="block text-xs text-muted-foreground italic md:text-[0.75rem]">{cell.romaji}</span>
                      </td>
                    {:else}
                      <td class="py-4 px-2 text-center border border-border bg-secondary opacity-30"></td>
                    {/if}
                  {/each}
                </tr>
              {/if}
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Combo Characters (Youon) -->
    {#if currentData.combo.length > 0}
      <div class="mb-12">
        <h2 class="text-xl font-bold text-foreground mb-6">
          拗音 (Youon) - {currentScript === 'hiragana' ? 'Hiragana' : 'Katakana'}
        </h2>

        <div class="alpha-combo-grid">
          {#each currentData.combo as cell}
            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
            <div
              class="alpha-cell py-5 px-3 text-center border border-border bg-background rounded-lg transition-colors duration-200"
              class:alpha-cell--audio={hasAudioSupport}
              title={hasAudioSupport ? `Phát âm: ${cell.romaji}` : cell.romaji}
              on:click={() => speakKana(cell.kana)}
              on:keydown={(e) => e.key === 'Enter' && speakKana(cell.kana)}
              tabindex={hasAudioSupport ? 0 : -1}
              role={hasAudioSupport ? 'button' : undefined}
            >
              <span class="block text-3xl font-medium text-foreground mb-1 md:text-2xl">{cell.kana}</span>
              <span class="block text-xs text-muted-foreground italic md:text-[0.75rem]">{cell.romaji}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Quiz Actions -->
    <div class="my-12 p-8 bg-secondary rounded-xl border-2 border-dashed border-border">
      <h3 class="text-lg font-bold text-foreground mb-6 text-center">Luyện tập</h3>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        <Button variant="primary" size="lg">
          🎯 Quiz {currentScript === 'hiragana' ? 'Hiragana' : 'Katakana'}
        </Button>
        <Button variant="outline" size="lg">
          🎲 Quiz cả hai
        </Button>
      </div>
    </div>

    <!-- Audio Note -->
    {#if hasAudioSupport}
      <p class="text-center text-muted-foreground text-sm mt-8 italic">
        💡 Nhấp vào ký tự để nghe phát âm
      </p>
    {/if}
  </div>
</div>

<style>
  .tab.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  .alpha-cell--audio {
    cursor: pointer;
  }

  .alpha-cell--audio:hover {
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    border-color: var(--color-primary);
    transform: scale(1.05);
  }

  .alpha-cell--audio:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .alpha-combo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.5rem;
  }
</style>

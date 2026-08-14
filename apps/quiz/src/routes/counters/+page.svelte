<script lang="ts">
  import { NUMBERS_DATA, COUNTERS_DATA } from '$lib/data/minna/counters';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import FilterTabs from '$lib/components/common/FilterTabs.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import type { NumberData, CounterType } from '$lib/types/lesson';
  import { Volume2 } from 'lucide-svelte';

  let activeTab: 'numbers' | 'counters' = 'counters';
  let expandedCounters = new Set<number>();

  function toggleCounter(index: number) {
    if (expandedCounters.has(index)) expandedCounters.delete(index);
    else expandedCounters.add(index);
    expandedCounters = expandedCounters;
  }

  function speak(text: string) {
    playJapaneseAudio(text);
  }

  const hasAudio = typeof window !== 'undefined' && 'speechSynthesis' in window;
</script>

<svelte:head>
  <title>Japanese Counters - YatoGaku</title>
</svelte:head>

<PageWorkspace size="xl">
  <PageHero
    eyebrow="Reference"
    title="Numbers &amp; Counters"
    subtitle="Numbers and Japanese counter words: quick reference for how to read numbers and counters in Japanese."
    script="japanese"
  />

  <!-- Tabs -->
  <FilterTabs
    bind:value={activeTab}
    ariaLabel="Counters reference section"
    class="sm:w-fit"
    options={[
      { id: 'numbers', label: 'Basic Numbers' },
      { id: 'counters', label: `Counters (${COUNTERS_DATA.length})` }
    ]}
  />

  {#if activeTab === 'numbers'}
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Basic Numbers</h2>
      <p class="text-sm text-muted-foreground mb-4">The Japanese number system from 0 to 兆 (trillion)</p>

      <div class="overflow-x-auto rounded-lg shadow-sm">
        <table class="numbers-table">
          <thead>
            <tr>
              <th>Number</th><th>Kanji</th><th>Kana</th><th>Romaji</th>
              {#if hasAudio}<th>Audio</th>{/if}
            </tr>
          </thead>
          <tbody>
            {#each NUMBERS_DATA as num}
              <tr class:irregular={num.note === 'irregular'}>
                <td class="font-semibold font-mono">{num.number.toLocaleString()}</td>
                <td class="text-lg" style="font-family: var(--font-japanese)">{num.kanji}</td>
                <td class="text-lg" style="font-family: var(--font-japanese)">
                  {num.kana}
                  {#if num.alt}<span class="text-sm text-muted-foreground"> / {num.alt.kana}</span>{/if}
                </td>
                <td>
                  {num.romaji}
                  {#if num.alt}<span class="text-sm text-muted-foreground"> / {num.alt.romaji}</span>{/if}
                </td>
                {#if hasAudio}
                  <td>
                    <button class="border border-border rounded px-2 py-1 cursor-pointer hover:border-primary hover:bg-muted transition-colors bg-transparent flex items-center" on:click={() => speak(num.kanji)} title="Play pronunciation"><Volume2 size={16} aria-hidden="true" /></button>
                  </td>
                {/if}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>
  {:else}
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Counter Words</h2>
      <p class="text-sm text-muted-foreground mb-4">Special counting words used to count different types of things in Japanese</p>

      <div class="flex flex-col gap-3">
        {#each COUNTERS_DATA as counter, index}
          {@const isExpanded = expandedCounters.has(index)}
          <div class="bg-card border border-border rounded-xl overflow-hidden transition-colors hover:shadow-md" class:border-primary={isExpanded}>
            <button class="w-full flex items-center gap-4 p-4 bg-transparent border-none cursor-pointer text-left hover:bg-muted transition-colors" on:click={() => toggleCounter(index)}>
              <div class="flex-1 flex items-center gap-4 sm:flex-row flex-col sm:items-center items-start">
                <span class="text-4xl font-bold text-primary min-w-[60px] text-center" style="font-family: var(--font-japanese)">{counter.counter}</span>
                <div class="flex flex-col gap-1">
                  <span class="text-lg font-medium">{counter.kana} ({counter.romaji})</span>
                  <span class="text-sm text-muted-foreground">{counter.vietnamese}</span>
                  {#if counter.lesson}
                    <span class="inline-block w-fit bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5">Lesson {counter.lesson}</span>
                  {/if}
                </div>
              </div>
              {#if hasAudio}
                <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
                <span class="border border-border rounded-lg px-2 py-1.5 cursor-pointer hover:border-primary transition-colors flex items-center" on:click|stopPropagation={() => speak(counter.counter)} title="Play pronunciation"><Volume2 size={16} aria-hidden="true" /></span>
              {/if}
              <span class="text-sm text-muted-foreground">{isExpanded ? '▼' : '▶'}</span>
            </button>

            {#if isExpanded}
              <div class="p-5 border-t border-border bg-muted">
                <h4 class="text-base font-semibold mb-3">Readings (1-10{counter.readings.length > 10 ? '+' : ''})</h4>
                <div class="readings-grid mb-4">
                  {#each counter.readings as reading}
                    <div class="reading-item" class:irregular={reading.irregular}>
                      <span class="text-sm font-bold text-muted-foreground">{reading.number}</span>
                      <span class="font-semibold text-lg" style="font-family: var(--font-japanese)">{reading.form}</span>
                      <span class="text-sm">{reading.kana}</span>
                      <span class="text-xs text-muted-foreground col-span-full">({reading.romaji})</span>
                      {#if hasAudio}
                        <button class="border border-border rounded px-1.5 py-0.5 cursor-pointer hover:border-primary bg-transparent transition-colors flex items-center" on:click={() => speak(reading.form)} title="Play pronunciation"><Volume2 size={12} aria-hidden="true" /></button>
                      {/if}
                    </div>
                  {/each}
                </div>

                <div class="p-3 bg-card rounded-lg mb-3">
                  <h4 class="text-base font-semibold mb-2">Example:</h4>
                  <p class="text-lg mb-1" style="font-family: var(--font-japanese)">{counter.example.japanese}</p>
                  <p class="text-sm text-muted-foreground">{counter.example.vietnamese}</p>
                </div>

                {#if counter.readings.some(r => r.irregular)}
                  <div class="flex items-center gap-2 text-sm text-muted-foreground">
                    <span class="w-3 h-3 bg-destructive/20 border-2 border-destructive rounded-sm"></span>
                    Irregular
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Info Panel -->
  <div class="bg-muted border border-border p-5 rounded-surface mt-6">
    <h3 class="text-lg font-bold mb-3">Notes</h3>
    <ul class="list-none p-0 space-y-3 text-sm leading-relaxed">
      <li><strong>Counter words</strong> are special words used when counting things in Japanese</li>
      <li>Different types of things use different counters (flat items, long items, animals, people...)</li>
      <li><strong>Red highlighting</strong> marks irregular readings that need to be memorized</li>
      <li>Click each counter to see the full 1-10 readings</li>
    </ul>
  </div>
</PageWorkspace>

<style>
  .numbers-table { width: 100%; border-collapse: collapse; background: var(--color-card); }
  .numbers-table th { background: var(--color-muted); padding: 0.75rem; text-align: left; font-weight: 600; border-bottom: 2px solid var(--color-border); }
  .numbers-table td { padding: 0.75rem; border-bottom: 1px solid var(--color-border); }
  .numbers-table tr.irregular { background: color-mix(in srgb, var(--color-destructive) 10%, var(--color-card)); }
  .numbers-table tr.irregular td { color: var(--color-destructive); }

  .readings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
  }
  .reading-item {
    display: grid;
    grid-template-columns: 30px 1fr auto;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: var(--color-card);
    border-radius: var(--radius-control);
    border: 1px solid var(--color-border);
  }
  .reading-item.irregular {
    background: color-mix(in srgb, var(--color-destructive) 10%, var(--color-card));
    border-color: var(--color-destructive);
  }
  .reading-item.irregular span:nth-child(3) { color: var(--color-destructive); font-weight: 600; }
  .col-span-full { grid-column: 2 / -1; }

  @media (max-width: 768px) {
    .readings-grid { grid-template-columns: 1fr; }
  }
</style>

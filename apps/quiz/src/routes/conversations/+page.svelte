<script lang="ts">
  /**
   * Conversation Patterns Page
   * Shows dialogues + sentence patterns + memory tips per JLPT level
   */

  import { base } from '$app/paths';
  import { getConversations } from '$lib/data/conversations';
  import { playJapaneseAudio } from '$lib/utils/audioUtils';
  import { kanaToRomaji } from '$lib/utils/kanaUtils';
  import { ChevronRight, Volume2, MessageCircle, Lightbulb, Globe } from 'lucide-svelte';
  import FilterTabs from '$lib/components/common/FilterTabs.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import type { ConversationPattern } from '$lib/types/lesson';
  import { onMount } from 'svelte';

  let selectedLevel = 'n5';
  let expandedId: string | null = null;
  let hasAudioSupport = false;
  onMount(() => { hasAudioSupport = 'speechSynthesis' in window; });

  const levels = [
    { id: 'n5', label: 'N5', desc: 'Beginner' },
    { id: 'n4', label: 'N4', desc: 'Elementary' },
    { id: 'n3', label: 'N3', desc: 'Intermediate' },
    { id: 'n2', label: 'N2', desc: 'Upper-intermediate' },
    { id: 'n1', label: 'N1', desc: 'Advanced' },
  ];

  $: conversations = getConversations(selectedLevel);

  function toggle(id: string) {
    expandedId = expandedId === id ? null : id;
  }
</script>

<svelte:head>
  <title>Conversation Patterns — YatoGaku</title>
</svelte:head>

<PageWorkspace size="lg">
  <PageHero
    eyebrow="Conversation patterns"
    title="Conversation Patterns"
    subtitle="Real conversations, sentence patterns, memory tips, and pronunciation to turn lesson knowledge into reflex."
  />

  <div class="flex flex-col gap-6">

    <p class="text-sm text-muted-foreground" role="status">
      {hasAudioSupport ? 'Conversations use the device\'s built-in voice; offline availability depends on the installed Japanese voice pack.' : 'This device does not support automatic pronunciation; conversation content is still available offline.'}
    </p>

    <FilterTabs
      bind:value={selectedLevel}
      options={levels.map((lvl) => ({ id: lvl.id, label: lvl.label, description: lvl.desc }))}
      ariaLabel="JLPT level"
      onchange={() => expandedId = null}
    />

    <!-- Conversation Cards -->
    <div class="flex flex-col gap-3">
      {#each conversations as conv, i}
        <div
          class="overflow-hidden rounded-surface border border-border bg-card transition-colors duration-200"
          style="animation-delay: {i * 50}ms"
        >
          <!-- Header (clickable) -->
          <button
            class="w-full flex items-center gap-4 px-5 py-5 text-left cursor-pointer hover:bg-accent/30 transition-colors active:scale-[0.99]"
            on:click={() => toggle(conv.id)}
            aria-expanded={expandedId === conv.id}
          >
            <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageCircle size={20} class="text-primary" aria-hidden="true" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-bold text-foreground">{conv.title}</h3>
              <p class="text-xs text-muted-foreground">{conv.titleJp} — {conv.situation}</p>
            </div>
            <ChevronRight size={20} class="flex-shrink-0 text-muted-foreground transition-transform duration-200 {expandedId === conv.id ? 'rotate-90' : ''}" aria-hidden="true" />
          </button>

          <!-- Expanded content -->
          {#if expandedId === conv.id}
            <div class="px-5 pb-5 flex flex-col gap-4 border-t border-border/30 pt-4">
              <!-- Sentence Patterns -->
              <div>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
                  <Globe size={12} aria-hidden="true" /> Patterns
                </h4>
                <div class="flex flex-col gap-3">
                  {#each conv.patterns as pat}
                    <div class="bg-muted/30 rounded-xl p-4 space-y-1.5">
                      <div class="flex items-center gap-2">
                        <p class="text-sm font-semibold" style="font-family: var(--font-japanese)">{pat.japanese}</p>
                        <button
                          class="flex-shrink-0 p-1 rounded hover:bg-muted transition-colors"
                          on:click|stopPropagation={() => playJapaneseAudio(pat.kana)}
                          aria-label="Play pronunciation"
                        >
                          <Volume2 size={16} class="text-muted-foreground" aria-hidden="true" />
                        </button>
                      </div>
                      <p class="text-xs text-muted-foreground italic">{kanaToRomaji(pat.kana)}</p>
                      <p class="text-xs text-foreground/80">{pat.vietnamese}</p>
                      <div class="flex items-start gap-1.5 mt-2 pt-2 border-t border-border/30">
                        <Lightbulb size={12} class="text-warning-text flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <p class="text-[0.7rem] text-warning-text leading-relaxed">{pat.memoryTip}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Dialogue -->
              <div>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-1.5">
                  <MessageCircle size={12} aria-hidden="true" /> Conversations
                </h4>
                <div class="bg-muted/20 rounded-xl p-4 space-y-3">
                  {#each conv.dialogue as line}
                    <div class="flex gap-3">
                      <span class="flex-shrink-0 text-xs font-bold text-primary min-w-[2rem]">{line.speaker}:</span>
                      <div class="space-y-0.5">
                        <div class="flex items-center gap-2">
                          <p class="text-sm" style="font-family: var(--font-japanese)">{line.japanese}</p>
                          <button
                            class="flex-shrink-0 p-0.5 rounded hover:bg-muted transition-colors"
                            on:click|stopPropagation={() => playJapaneseAudio(line.kana)}
                            aria-label="Play pronunciation"
                          >
                            <Volume2 size={12} class="text-muted-foreground" aria-hidden="true" />
                          </button>
                        </div>
                        <p class="text-xs text-muted-foreground italic">{kanaToRomaji(line.kana)}</p>
                        <p class="text-xs text-foreground/70">{line.vietnamese}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Cultural Note -->
              {#if conv.culturalNote}
                <div class="flex items-start gap-2 bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p class="text-xs text-foreground/80 leading-relaxed">{conv.culturalNote}</p>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</PageWorkspace>

<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { HSK5_DATA } from '$lib/data/hsk';
  import { playChineseAudio } from '$lib/utils/audioUtils';
  import type { HSKWord } from '$lib/types/hsk';

  let searchTerm = '';
  let sortBy: 'pinyin' | 'chinese' | 'vietnamese' = 'pinyin';

  $: groupId = $page.params.group;
  $: groupData = HSK5_DATA.find(g => g.id === groupId);
  $: words = groupData?.words || [];

  $: filteredWords = words.filter(word => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      word.chinese.toLowerCase().includes(search) ||
      word.pinyin.toLowerCase().includes(search) ||
      word.vietnamese.toLowerCase().includes(search)
    );
  });

  $: sortedWords = [...filteredWords].sort((a, b) => {
    if (sortBy === 'pinyin') return a.pinyin.localeCompare(b.pinyin);
    if (sortBy === 'chinese') return a.chinese.localeCompare(b.chinese);
    return a.vietnamese.localeCompare(b.vietnamese);
  });

  function speak(text: string) {
    playChineseAudio(text);
  }

  function goBack() {
    goto(`${base}/hsk`);
  }

  const hasAudio = typeof window !== 'undefined' && 'speechSynthesis' in window;
</script>

<svelte:head>
  <title>HSK 5 - Group {(groupId || '').toUpperCase()} | {groupData?.title || 'Vocabulary'}</title>
</svelte:head>

<div class="vocab-container">
  {#if !groupData}
    <div class="error-state">
      <h2>Group not found</h2>
      <p>The HSK group "{groupId}" does not exist.</p>
      <button class="btn-primary" on:click={goBack}>Back to HSK Menu</button>
    </div>
  {:else}
    <header class="page-header">
      <button class="btn-back" on:click={goBack}>← Back</button>
      <div class="header-content">
        <div class="group-badge">{(groupId || '').toUpperCase()}</div>
        <div>
          <h1>HSK 5 - {groupData?.title || ''}</h1>
          <p class="word-count">{words.length} words</p>
        </div>
      </div>
    </header>

    <!-- Quiz Modes -->
    <div class="quiz-modes">
      <a href="{base}/hsk/{groupId}/quiz/flashcard?direction=chinese-vi" class="ui-button" data-variant="default">🎴 Flashcard</a>
      <a href="{base}/hsk/{groupId}/quiz/mc?direction=chinese-vi" class="ui-button" data-variant="default">✓ Multiple Choice</a>
      <a href="{base}/hsk/{groupId}/quiz/typing?direction=chinese-vi" class="ui-button" data-variant="success">⌨️ Typing</a>
    </div>

    <!-- Controls -->
    <div class="controls">
      <div class="search-box">
        <input
          type="text"
          placeholder="Search by Chinese, Pinyin, or Vietnamese..."
          bind:value={searchTerm}
          class="search-input"
        />
        {#if searchTerm}
          <button class="clear-search" on:click={() => searchTerm = ''}>✕</button>
        {/if}
      </div>

      <div class="sort-controls">
        <label for="sort">Sort by:</label>
        <select id="sort" bind:value={sortBy} class="sort-select">
          <option value="pinyin">Pinyin</option>
          <option value="chinese">Chinese</option>
          <option value="vietnamese">Vietnamese</option>
        </select>
      </div>
    </div>

    <!-- Results Info -->
    <div class="results-info">
      {#if searchTerm}
        <p>Found <strong>{filteredWords.length}</strong> of {words.length} words</p>
      {:else}
        <p>Showing all <strong>{words.length}</strong> words</p>
      {/if}
    </div>

    <!-- Vocabulary Table -->
    <div class="table-wrapper">
      <table class="vocab-table">
        <thead>
          <tr>
            <th class="col-index">#</th>
            <th class="col-chinese">Chinese</th>
            <th class="col-pinyin">Pinyin</th>
            <th class="col-vietnamese">Vietnamese</th>
            {#if hasAudio}
              <th class="col-audio">Audio</th>
            {/if}
          </tr>
        </thead>
        <tbody>
          {#if sortedWords.length === 0}
            <tr>
              <td colspan="5" class="empty-state">
                No words found matching "{searchTerm}"
              </td>
            </tr>
          {:else}
            {#each sortedWords as word, index}
              <tr class="vocab-row">
                <td class="col-index">{index + 1}</td>
                <td class="col-chinese cn-text">{word.chinese}</td>
                <td class="col-pinyin">{word.pinyin}</td>
                <td class="col-vietnamese">{word.vietnamese}</td>
                {#if hasAudio}
                  <td class="col-audio">
                    <button
                      class="btn-speak"
                      on:click={() => speak(word.chinese)}
                      title="Phát âm"
                    >
                      🔊
                    </button>
                  </td>
                {/if}
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  .vocab-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .error-state {
    text-align: center;
    padding: 4rem 2rem;
  }

  .error-state h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--error);
  }

  .btn-primary {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-primary:hover {
    background: var(--color-primary-hover);
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .btn-back {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-control);
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-muted-foreground);
    margin-bottom: 1rem;
    transition: all 0.2s;
  }

  .btn-back:hover {
    background: var(--bg-secondary);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .group-badge {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
    color: white;
    font-size: 1.75rem;
    font-weight: 700;
    border-radius: 12px;
  }

  .header-content h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .word-count {
    color: var(--color-muted-foreground);
    font-size: 0.875rem;
  }

  .controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .search-box {
    flex: 1;
    min-width: 250px;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  .search-input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .clear-search {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--color-muted-foreground);
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  .clear-search:hover {
    color: var(--color-foreground);
  }

  .sort-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .sort-controls label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-muted-foreground);
  }

  .sort-select {
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    border: 2px solid var(--border-color);
    border-radius: var(--radius-control);
    font-size: 0.875rem;
    background: white;
    cursor: pointer;
  }

  .results-info {
    margin-bottom: 1rem;
    color: var(--color-muted-foreground);
    font-size: 0.875rem;
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 8px;
    box-shadow: var(--shadow-lifted);
  }

  .vocab-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
  }

  .vocab-table thead {
    background: var(--bg-secondary);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .vocab-table th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid var(--border-color);
    color: var(--color-foreground);
  }

  .vocab-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .vocab-row:hover {
    background: var(--bg-tertiary);
  }

  .col-index {
    width: 60px;
    text-align: center;
    color: var(--color-muted-foreground);
    font-family: monospace;
  }

  .col-chinese {
    width: 120px;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .cn-text {
    font-family: 'Noto Sans SC', sans-serif;
  }

  .col-pinyin {
    width: 180px;
    font-style: italic;
    color: var(--color-muted-foreground);
  }

  .col-vietnamese {
    flex: 1;
  }

  .col-audio {
    width: 80px;
    text-align: center;
  }

  .btn-speak {
    background: none;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-control);
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s;
  }

  .btn-speak:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  .empty-state {
    text-align: center;
    padding: 3rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  @media (max-width: 768px) {
    .vocab-container {
      padding: 1rem 0.5rem;
    }

    .header-content {
      gap: 1rem;
    }

    .group-badge {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    .header-content h1 {
      font-size: 1.5rem;
    }

    .controls {
      flex-direction: column;
      gap: 0.75rem;
    }

    .search-box,
    .sort-controls {
      width: 100%;
    }

    .vocab-table {
      font-size: 0.875rem;
    }

    .vocab-table th,
    .vocab-table td {
      padding: 0.75rem 0.5rem;
    }

    .col-chinese {
      font-size: 1.125rem;
    }
  }
</style>

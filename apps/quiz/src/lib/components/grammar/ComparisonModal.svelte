<script lang="ts">
  /**
   * Comparison Modal Component
   * Shows comparison table, tips, examples, common mistakes
   * Based on showComparisonModal() function from grammar-reference.js
   */

  import { createEventDispatcher } from 'svelte';
  import type { GrammarComparison } from '$lib/types';
  import { Lightbulb, Edit3, AlertTriangle } from 'lucide-svelte';

  export let comparison: GrammarComparison;
  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function handleClose() {
    isOpen = false;
    dispatch('close');
  }

  function handleOverlayClick() {
    handleClose();
  }

  function handleContentClick(e: MouseEvent) {
    e.stopPropagation();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      handleClose();
    }
  }

  // Helper function to get cell value from row based on header
  function getCellValue(row: any, header: string, index: number): string {
    if (index === 0) {
      return row.aspect || row.meaning || '';
    }

    // Try to match header to row property
    const key = header.toLowerCase().replace(/[^a-z]/g, '');

    // Check common keys
    const commonKeys = ['wa', 'ga', 'ni', 'de', 'wo', 'tai', 'hoshii', 'mashou', 'masenka', 'ta', 'teiru', 'meaning', 'example'];

    for (const k of commonKeys) {
      if (row[k] !== undefined) {
        return row[k];
      }
    }

    return row[key] || '';
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class="modal active">
    <div class="modal-overlay" on:click={handleOverlayClick} on:keydown={() => {}} role="presentation"></div>

    <div class="modal-content modal-content-xl" on:click={handleContentClick} on:keydown={() => {}} role="dialog" aria-modal="true" tabindex="-1">
      <!-- Header -->
      <div class="modal-header">
        <h2 class="modal-title">{comparison.title}</h2>
        <button class="modal-close" on:click={handleClose} aria-label="Close modal">
          ×
        </button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <!-- Tips/Introduction Section -->
        {#if comparison.tips}
          <div class="comparison-intro">
            <div class="comparison-intro-title"><Lightbulb size={16} aria-hidden="true" /> Mẹo phân biệt</div>
            <div class="comparison-intro-text">{comparison.tips}</div>
          </div>
        {/if}

        <!-- Comparison Table -->
        {#if comparison.table}
          <div class="comparison-table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  {#each comparison.table.headers as header}
                    <th>{header}</th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each comparison.table.rows as row}
                  <tr>
                    {#each comparison.table.headers as header, index}
                      <td>{getCellValue(row, header, index)}</td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}

        <!-- Examples Section -->
        {#if comparison.examples && comparison.examples.length > 0}
          <div class="comparison-examples-section">
            <div class="comparison-examples-title"><Edit3 size={16} aria-hidden="true" /> Ví dụ minh họa</div>
            <div class="comparison-examples-grid">
              {#each comparison.examples as example}
                <div class="comparison-example-card">
                  <div class="comparison-example-pattern">{example.pattern}</div>
                  <div class="comparison-example-jp">{example.japanese}</div>
                  <div class="comparison-example-vi">{example.vietnamese}</div>
                  {#if example.explanation}
                    <div class="comparison-example-explanation">{example.explanation}</div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Common Mistakes Section -->
        {#if comparison.commonMistakes && comparison.commonMistakes.length > 0}
          <div class="comparison-mistakes">
            <div class="comparison-mistakes-title"><AlertTriangle size={16} aria-hidden="true" /> Lỗi thường gặp</div>
            <ul class="comparison-mistakes-list">
              {#each comparison.commonMistakes as mistake}
                <li>{mistake}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }

  .modal.active {
    display: flex;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);
    backdrop-filter: blur(2px);
  }

  .modal-content {
    position: relative;
    background: var(--color-card);
    border-radius: var(--radius-surface);
    box-shadow: var(--shadow-lifted);
    max-height: 85vh;
    width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .modal-content-xl {
    max-width: 1000px;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary));
    color: white;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    font-family: var(--font-japanese);
  }

  .modal-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background var(--motion-standard);
  }

  .modal-close:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .modal-body {
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1;
  }

  /* Introduction/Tips */
  .comparison-intro {
    padding: 1rem;
    background: var(--color-warning-subtle);
    border: 1px solid var(--color-warning);
    border-radius: var(--radius-control);
    margin-bottom: 1.5rem;
  }

  :global([data-theme="dark"]) .comparison-intro {
    background: var(--color-warning-subtle);
  }

  .comparison-intro-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
  }

  .comparison-intro-text {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-foreground);
  }

  /* Comparison Table */
  .comparison-table-wrapper {
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  .comparison-table th {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary));
    color: white;
    font-weight: 700;
    padding: 0.875rem;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .comparison-table th:first-child {
    border-top-left-radius: var(--radius-control);
  }

  .comparison-table th:last-child {
    border-top-right-radius: var(--radius-control);
  }

  .comparison-table td {
    padding: 0.875rem;
    border: 1px solid var(--color-border);
    background: var(--color-card);
    color: var(--color-foreground);
    vertical-align: top;
  }

  .comparison-table tr:nth-child(even) td {
    background: var(--bg-primary);
  }

  .comparison-table td:first-child {
    font-weight: 600;
    color: var(--color-primary);
    min-width: 120px;
  }

  /* Examples Section */
  .comparison-examples-section {
    margin-bottom: 1.5rem;
  }

  .comparison-examples-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comparison-examples-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .comparison-example-card {
    padding: 1rem;
    background: var(--bg-primary);
    border-radius: var(--radius-control);
    border: 1px solid var(--color-success);
  }

  .comparison-example-pattern {
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .comparison-example-jp {
    font-family: var(--font-japanese);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-foreground);
    margin-bottom: 0.375rem;
  }

  .comparison-example-vi {
    font-size: 0.95rem;
    color: var(--color-foreground);
    margin-bottom: 0.25rem;
  }

  .comparison-example-explanation {
    font-size: 0.9rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  /* Common Mistakes */
  .comparison-mistakes {
    padding: 1rem;
    background: var(--color-destructive-subtle);
    border: 1px solid var(--color-destructive);
    border-radius: var(--radius-control);
    margin-bottom: 1.5rem;
  }

  .comparison-mistakes-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
  }

  .comparison-mistakes-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .comparison-mistakes-list li {
    font-size: 0.95rem;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .comparison-mistakes-list li:before {
    content: "⚠️";
    position: absolute;
    left: 0;
  }

  .comparison-mistakes-list li:last-child {
    margin-bottom: 0;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .modal-content {
      width: 95%;
      max-height: 90vh;
    }

    .modal-header {
      padding: 1rem 1.25rem;
    }

    .modal-title {
      font-size: 1.25rem;
    }

    .modal-body {
      padding: 1.25rem;
    }

    .comparison-table-wrapper {
      margin-left: -1.25rem;
      margin-right: -1.25rem;
      padding: 0 1.25rem;
    }

    .comparison-table {
      font-size: 0.85rem;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 0.625rem;
    }

    .comparison-example-jp {
      font-size: 1rem;
    }
  }
</style>

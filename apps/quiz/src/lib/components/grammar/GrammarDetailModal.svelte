<script lang="ts">
  /**
   * Grammar Detail Modal Component
   * Shows full pattern details: meaning, explanation, examples, tips, mnemonics, common mistakes, related patterns
   * Based on showPatternDetail() function from grammar-reference.js
   */

  import { createEventDispatcher, onMount } from 'svelte';
  import type { GrammarPattern } from '$lib/types';
  import { BookOpen, Lightbulb, Brain, AlertTriangle, PenLine, Edit3, Link } from 'lucide-svelte';

  export let pattern: GrammarPattern;
  export let allPatterns: GrammarPattern[] = [];
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

  function handleRelatedPatternClick(relatedPattern: string) {
    // Find the related pattern in allPatterns
    const foundPattern = allPatterns.find(p => p.pattern === relatedPattern);
    if (foundPattern) {
      dispatch('showRelated', foundPattern);
    }
  }

  $: tags = (() => {
    const tagList = [];
    if (pattern.meta?.jlptLevel) {
      tagList.push({ text: pattern.meta.jlptLevel, className: 'tag-jlpt' });
    }
    if (pattern.meta?.difficulty) {
      tagList.push({ text: pattern.meta.difficulty, className: 'tag-difficulty' });
    }
    if (pattern.lessonNumber) {
      tagList.push({ text: `Bài ${pattern.lessonNumber}`, className: 'tag-lesson' });
    }
    return tagList;
  })();
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class="modal active">
    <div class="modal-overlay" on:click={handleOverlayClick} on:keydown={() => {}} role="presentation"></div>

    <div class="modal-content modal-content-lg" on:click={handleContentClick} on:keydown={() => {}} role="dialog" aria-modal="true" tabindex="-1">
      <!-- Header -->
      <div class="modal-header">
        <h2 class="modal-title">{pattern.pattern}</h2>
        <button class="modal-close" on:click={handleClose} aria-label="Close modal">
          ×
        </button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <!-- Meaning Section -->
        <div class="detail-section">
          <div class="detail-meaning">{pattern.vietnamese}</div>
          {#if pattern.english}
            <div class="detail-meaning-en">{pattern.english}</div>
          {/if}
        </div>

        <!-- Meta Tags -->
        {#if tags.length > 0}
          <div class="detail-section">
            <div class="detail-meta-tags">
              {#each tags as tag}
                <span class="tag {tag.className}">{tag.text}</span>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Explanation -->
        {#if pattern.explanation}
          <div class="detail-section">
            <div class="detail-section-title"><BookOpen size={16} aria-hidden="true" /> Giải thích</div>
            <div class="detail-explanation">{pattern.explanation}</div>
          </div>
        {/if}

        <!-- Tips -->
        {#if pattern.meta?.tips}
          <div class="detail-section">
            <div class="detail-section-title"><Lightbulb size={16} aria-hidden="true" /> Mẹo ghi nhớ</div>
            <div class="detail-tip">{pattern.meta.tips}</div>
          </div>
        {/if}

        <!-- Mnemonics -->
        {#if pattern.meta?.mnemonics}
          <div class="detail-section">
            <div class="detail-section-title"><Brain size={16} aria-hidden="true" /> Cách nhớ</div>
            <div class="detail-mnemonic">{pattern.meta.mnemonics}</div>
          </div>
        {/if}

        <!-- Common Mistakes -->
        {#if pattern.meta?.commonMistakes}
          <div class="detail-section">
            <div class="detail-section-title"><AlertTriangle size={16} aria-hidden="true" /> Lỗi thường gặp</div>
            <div class="detail-mistake">{pattern.meta.commonMistakes}</div>
          </div>
        {/if}

        <!-- Usage Notes -->
        {#if pattern.meta?.usageNotes}
          <div class="detail-section">
            <div class="detail-section-title"><PenLine size={16} aria-hidden="true" /> Ghi chú sử dụng</div>
            <div class="detail-explanation">{pattern.meta.usageNotes}</div>
          </div>
        {/if}

        <!-- Examples -->
        {#if pattern.examples && pattern.examples.length > 0}
          <div class="detail-section">
            <div class="detail-section-title"><Edit3 size={16} aria-hidden="true" /> Ví dụ</div>
            <div class="detail-examples">
              {#each pattern.examples as example}
                <div class="detail-example">
                  <div class="detail-example-jp">{example.japanese}</div>
                  <div class="detail-example-vi">{example.vietnamese}</div>
                  {#if example.english}
                    <div class="detail-example-en">{example.english}</div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Related Patterns -->
        {#if pattern.meta?.relatedPatterns && pattern.meta.relatedPatterns.length > 0}
          <div class="detail-section">
            <div class="detail-section-title"><Link size={16} aria-hidden="true" /> Ngữ pháp liên quan</div>
            <div class="detail-related-patterns">
              {#each pattern.meta.relatedPatterns as relatedPattern}
                <button
                  class="related-pattern-link"
                  on:click={() => handleRelatedPatternClick(relatedPattern)}
                >
                  {relatedPattern}
                </button>
              {/each}
            </div>
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

  .modal-content-lg {
    max-width: 800px;
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

  /* Detail Sections */
  .detail-section {
    margin-bottom: 1.5rem;
  }

  .detail-section:last-child {
    margin-bottom: 0;
  }

  .detail-section-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-foreground);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Meaning */
  .detail-meaning {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-foreground);
    margin-bottom: 0.5rem;
  }

  .detail-meaning-en {
    font-size: 0.95rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  /* Meta Tags */
  .detail-meta-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .detail-meta-tags .tag {
    padding: 0.375rem 0.75rem;
    font-size: 0.85rem;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .tag-jlpt {
    background: var(--color-primary-subtle);
    color: var(--color-primary);
  }

  .tag-lesson {
    background: var(--color-primary-subtle);
    color: var(--color-primary);
  }

  .tag-difficulty {
    background: var(--color-success-subtle);
    color: var(--color-success);
  }

  /* Explanation */
  .detail-explanation {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-foreground);
    padding: 1rem;
    background: var(--bg-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-control);
  }

  /* Tips */
  .detail-tip {
    padding: 1rem;
    background: var(--color-warning-subtle);
    border: 1px solid var(--color-warning);
    border-radius: var(--radius-control);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-foreground);
  }

  :global([data-theme="dark"]) .detail-tip {
    background: var(--color-warning-subtle);
  }

  /* Mnemonics */
  .detail-mnemonic {
    padding: 1rem;
    background: var(--color-info-subtle);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-control);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-foreground);
  }

  :global([data-theme="dark"]) .detail-mnemonic {
    background: var(--color-info-subtle);
  }

  /* Common Mistakes */
  .detail-mistake {
    padding: 1rem;
    background: var(--color-destructive-subtle);
    border: 1px solid var(--color-destructive);
    border-radius: var(--radius-control);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-foreground);
  }

  /* Examples */
  .detail-examples {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .detail-example {
    padding: 1rem;
    background: var(--bg-primary);
    border-radius: var(--radius-control);
    border: 1px solid var(--color-success);
  }

  .detail-example-jp {
    font-family: var(--font-japanese);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-foreground);
    margin-bottom: 0.375rem;
  }

  .detail-example-vi {
    font-size: 0.95rem;
    color: var(--color-foreground);
    margin-bottom: 0.25rem;
  }

  .detail-example-en {
    font-size: 0.9rem;
    color: var(--color-muted-foreground);
    font-style: italic;
  }

  /* Related Patterns */
  .detail-related-patterns {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
  }

  .related-pattern-link {
    display: inline-block;
    padding: 0.5rem 0.875rem;
    background: var(--bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    color: var(--color-primary);
    font-family: var(--font-japanese);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: background var(--motion-standard), border-color var(--motion-standard);
  }

  .related-pattern-link:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
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

    .detail-section-title {
      font-size: 0.95rem;
    }

    .detail-meaning {
      font-size: 1rem;
    }

    .detail-example-jp {
      font-size: 1rem;
    }
  }
</style>

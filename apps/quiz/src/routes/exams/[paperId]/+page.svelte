<script lang="ts">
  /**
   * /exams/[paperId] — the exam runner for one paper.
   * CSR-only (served via the SPA fallback, like /quiz/[mode]).
   */
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { loadPaper } from '$lib/data/exams';
  import ExamRunner from '$lib/components/exam/ExamRunner.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  const paperId = $derived($page.params.paperId);
  const paper = $derived(loadPaper(paperId));
</script>

<svelte:head>
  <title>{paper ? `${paper.title} - YatoGaku` : 'Paper not found - YatoGaku'}</title>
</svelte:head>

<PageWorkspace size="lg">
  {#if paper}
    {#key paper.id}
      <ExamRunner {paper} />
    {/key}
  {:else}
    <div class="rounded-surface border border-border bg-card p-8 text-center">
      <p class="text-sm font-bold mb-1">Exam not found</p>
      <p class="text-xs text-muted-foreground mb-4">
        Paper <code>{paperId}</code> doesn't exist or has been removed.
      </p>
      <a
        href="{base}/exams"
        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90"
      >
        Back to exam list
      </a>
    </div>
  {/if}
</PageWorkspace>

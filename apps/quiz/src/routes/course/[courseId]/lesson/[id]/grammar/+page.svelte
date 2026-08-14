<script lang="ts">
  /**
   * Course Grammar Patterns Page
   * Shows all grammar patterns for a specific lesson in a course
  */

  import { page } from '$app/stores';
  import { getCourse } from '$lib/data/courses';
  import { Card, CardContent } from '$lib/components/ui/card';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import BackButton from '$lib/components/common/BackButton.svelte';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import SearchInput from '$lib/components/common/SearchInput.svelte';
  import type { CourseId } from '$lib/types/course';

  let searchTerm = '';
  let expandedIndex: number | null = null;

  $: courseId = $page.params.courseId as CourseId;
  $: lessonId = parseInt($page.params.id || '0');
  $: course = getCourse(courseId);
  $: lessonData = course?.getLessonData(lessonId);
  $: grammar = lessonData?.grammar || [];

  $: filteredGrammar = grammar.filter(item => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      item.pattern.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search) ||
      item.english.toLowerCase().includes(search) ||
      item.explanation.toLowerCase().includes(search)
    );
  });

  function toggleExpand(index: number) {
    expandedIndex = expandedIndex === index ? null : index;
  }
</script>

<svelte:head>
  <title>Grammar - {lessonData?.title || 'Lesson'} | {course?.metadata.title || 'YatoGaku'}</title>
</svelte:head>

{#if lessonData && course}
  <PageWorkspace size="lg">
    <PageHero
      eyebrow={`${course.metadata.level} · Lesson ${lessonData.lessonNumber}`}
      title="Grammar"
      subtitle={`${lessonData.title} · ${grammar.length} grammar points`}
    >
      {#snippet actions()}
        <BackButton href={`/course/${courseId}/lesson/${lessonId}`} text="Back to Lesson" />
      {/snippet}
    </PageHero>

    <!-- Search -->
    <SearchInput bind:value={searchTerm} placeholder="Search patterns, meanings..." />

    {#if searchTerm}
      <p class="text-center text-sm text-muted-foreground mb-4">
        Showing <strong class="text-primary">{filteredGrammar.length}</strong> of {grammar.length} patterns
      </p>
    {/if}

    <!-- Grammar Cards -->
    <div class="flex flex-col gap-3">
      {#each filteredGrammar as item, index}
        <Card class="{expandedIndex === index ? 'border-primary' : ''} hover:border-primary transition-colors">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="p-4 cursor-pointer flex justify-between items-start gap-4" on:click={() => toggleExpand(index)}>
            <div class="flex-1 flex flex-col gap-1">
              <div class="text-lg font-bold text-primary" style="font-family: var(--font-japanese)">{item.pattern}</div>
              <div class="text-sm font-semibold text-foreground">{item.english}</div>
              <div class="text-sm text-muted-foreground">{item.english}</div>
            </div>
            <div class="flex flex-col items-end gap-2">
              <Badge class="{item.type === 'main' ? 'bg-primary text-white' : 'bg-secondary text-secondary-foreground'} text-[0.65rem] uppercase">{item.type}</Badge>
              <span class="text-xs text-muted-foreground">{expandedIndex === index ? '▲' : '▼'}</span>
            </div>
          </div>

          {#if expandedIndex === index}
            <CardContent class="pt-0 flex flex-col gap-3">
              <div class="p-3 bg-muted rounded-lg">
                <h4 class="text-sm font-bold text-primary mb-2">Explanation:</h4>
                <p class="text-sm leading-relaxed text-foreground">{item.explanation}</p>
              </div>

              {#if item.examples && item.examples.length > 0}
                <div class="p-3 bg-muted rounded-lg">
                  <h4 class="text-sm font-bold text-primary mb-2">Examples:</h4>
                  {#each item.examples as example}
                    <div class="p-3 bg-card rounded-lg mb-2 last:mb-0">
                      <div class="text-sm font-semibold text-foreground mb-1" style="font-family: var(--font-japanese)">{example.japanese}</div>
                      <div class="text-sm text-foreground mb-0.5">{example.english}</div>
                      <div class="text-xs text-muted-foreground">{example.english}</div>
                    </div>
                  {/each}
                </div>
              {/if}
            </CardContent>
          {/if}
        </Card>
      {/each}

      {#if filteredGrammar.length === 0}
        <div class="text-center py-12 text-muted-foreground">
          No grammar patterns found matching "{searchTerm}"
        </div>
      {/if}
    </div>
  </PageWorkspace>
{:else}
  <PageWorkspace size="md">
    <PageEmpty
      title="Lesson Not Found"
      description="The lesson you're looking for doesn't exist."
      action={{ label: 'Back to Courses', href: '/courses' }}
    />
  </PageWorkspace>
{/if}

<script lang="ts">
  import { base } from '$app/paths';
  import { getAllCourses } from '$lib/data/courses';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import StudyListCard from '$lib/components/common/StudyListCard.svelte';
  import { ChevronRight } from 'lucide-svelte';

  const courses = getAllCourses();
</script>

<svelte:head>
  <title>Courses - YatoGaku</title>
</svelte:head>

<PageWorkspace size="lg">
  <PageHero
    eyebrow="Learning path"
    title="Japanese Courses"
    subtitle="Pick a course to get started. Each one follows the same rhythm: lessons, vocabulary, grammar, practice, and review."
  />

  {#if courses.length === 0}
    <PageEmpty title="No courses available" description="Please check back later." />
  {:else}
    <section class="grid gap-3" aria-label="Course list">
      {#each courses as course}
        <StudyListCard
          href="{base}/course/{course.metadata.id}"
          title={course.metadata.title}
          subtitle={course.metadata.description}
          class="overflow-hidden"
        >
          {#snippet leading()}
            <span class="text-2xl" aria-hidden="true">{course.metadata.icon}</span>
          {/snippet}

          {#snippet trailing()}
            <Badge class="text-[0.65rem]" style="background: {course.metadata.color}; color: white">{course.metadata.level}</Badge>
            <ChevronRight size={20} class="text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
          {/snippet}
        </StudyListCard>
      {/each}
    </section>
  {/if}
</PageWorkspace>

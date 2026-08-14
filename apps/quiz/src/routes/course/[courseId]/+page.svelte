<script lang="ts">
  import { page } from '$app/stores';
  import { getCourse } from '$lib/data/courses';
  import { buildLessonUrl } from '$lib/utils/courseUtils';
  import { progressStore } from '$lib/stores';
  import { getLessonMastery, getNextLesson, getCourseProgress } from '$lib/utils/progressUtils';
  import MasteryRing from '$lib/components/common/MasteryRing.svelte';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';
  import SearchInput from '$lib/components/common/SearchInput.svelte';
  import StudyListCard from '$lib/components/common/StudyListCard.svelte';
  import UiButton from '$lib/components/ui/button/button.svelte';
  import { ChevronRight } from 'lucide-svelte';
  import type { CourseId } from '$lib/types/course';

  let searchQuery = '';

  $: courseId = $page.params.courseId as CourseId;
  $: course = getCourse(courseId);
  $: allLessons = course?.getLessonMetadata() ?? [];
  $: courseProgress = getCourseProgress($progressStore, courseId);
  $: nextLesson = getNextLesson($progressStore, courseId);

  $: lessons = searchQuery
    ? allLessons.filter(l =>
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(l.lessonNumber).includes(searchQuery)
      )
    : allLessons;

  function groupLessons(items: typeof lessons) {
    const groups: { label: string; items: typeof lessons }[] = [];
    for (let i = 0; i < items.length; i += 5) {
      const chunk = items.slice(i, i + 5);
      const start = chunk[0]?.lessonNumber ?? i + 1;
      const end = chunk[chunk.length - 1]?.lessonNumber ?? i + 5;
      groups.push({ label: `Lesson ${start}-${end}`, items: chunk });
    }
    return groups;
  }

  $: lessonGroups = searchQuery ? [{ label: 'Results', items: lessons }] : groupLessons(lessons);
</script>

<svelte:head>
  <title>{course?.metadata.title || 'Course'} - YatoGaku</title>
</svelte:head>

{#if course}
  <PageWorkspace size="lg">
    <PageHero
      eyebrow={course.metadata.level}
      title={course.metadata.title}
      subtitle="{course.metadata.description} · {courseProgress.completed}/{courseProgress.total} lessons completed"
    >
      {#snippet actions()}
        <UiButton href={buildLessonUrl(courseId, nextLesson)} size="sm">
          {courseProgress.completed === 0 ? 'Start' : `Continue lesson ${nextLesson}`}
        </UiButton>
      {/snippet}
    </PageHero>

    <SearchInput bind:value={searchQuery} placeholder="Search lessons... (number or name)" />

    {#each lessonGroups as group}
      <section class="grid gap-3" aria-label={group.label}>
        <h2 class="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{group.label}</h2>

        {#each group.items as lesson}
          {@const mastery = getLessonMastery($progressStore, courseId, lesson.lessonNumber)}
          <StudyListCard
            href={buildLessonUrl(courseId, lesson.lessonNumber)}
            title={lesson.title}
            subtitle={`${lesson.vocabCount} words · ${lesson.grammarCount} grammar points`}
            active={lesson.lessonNumber === nextLesson}
          >
            {#snippet leading()}
              <span class="text-sm font-bold">{lesson.lessonNumber}</span>
            {/snippet}

            {#snippet trailing()}
              {#if mastery > 0}
                <MasteryRing percentage={mastery} size={32} />
              {:else if lesson.lessonNumber === nextLesson}
                <span class="rounded-control bg-primary-subtle px-2 py-1 text-xs font-bold text-primary">Next</span>
              {/if}
              <ChevronRight size={20} class="text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            {/snippet}
          </StudyListCard>
        {/each}
      </section>
    {/each}
  </PageWorkspace>
{:else}
  <PageWorkspace size="md">
    <PageEmpty
      title="Course Not Found"
      description="The course you're looking for doesn't exist."
      action={{ label: 'View All Courses', href: '/courses' }}
    />
  </PageWorkspace>
{/if}

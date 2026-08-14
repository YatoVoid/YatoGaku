<script lang="ts">
  /**
   * Statistics Dashboard
   * Shows overview stats, mastery distribution, lesson breakdown
   */

  import { progressStore } from '$lib/stores';
  import { base } from '$app/paths';
  import {
    computeOverviewStats,
    computeLessonStats,
    getMasteryLabel,
    getMasteryColor,
    formatLastStudied
  } from '$lib/utils/statsUtils';
  import { loadStreak, checkAchievements } from '$lib/utils/achievementUtils';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import PageHero from '$lib/components/common/PageHero.svelte';
  import PageWorkspace from '$lib/components/common/PageWorkspace.svelte';

  $: overview = computeOverviewStats($progressStore);
  $: lessonStats = computeLessonStats($progressStore);
  $: hasData = overview.totalWords > 0;
  $: streak = loadStreak();
  $: achievements = checkAchievements($progressStore, streak);
  $: unlockedCount = achievements.filter(a => a.unlocked).length;
  $: maxMastery = Math.max(...overview.masteryDistribution, 1);
  $: weakestLesson = [...lessonStats].sort((a, b) => a.accuracy - b.accuracy)[0];
</script>

<svelte:head>
  <title>Statistics - YatoGaku</title>
</svelte:head>

<PageWorkspace size="md">
  <PageHero
    eyebrow="Learning analytics"
    title="Progress"
    subtitle="Track accuracy, streaks, mastery, and which lessons to review next."
  />

  {#if !hasData}
    <div class="text-center py-12 text-muted-foreground">
      <h2 class="text-lg font-bold text-foreground mb-2">No data yet</h2>
      <p class="text-sm">Start studying to see your statistics here!</p>
      <a class="ui-button mt-4" data-variant="default" href="{base}/courses">Choose a Lesson</a>
    </div>
  {:else}
    {#if weakestLesson}
      <section class="mb-4 rounded-surface border border-border bg-card p-4" aria-labelledby="next-action-title">
        <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended next</p>
        <h2 id="next-action-title" class="text-lg font-bold">Reinforce Lesson {weakestLesson.lessonNumber}</h2>
        <p class="text-sm text-muted-foreground mb-3">Current accuracy {weakestLesson.accuracy}%. A short flashcard round will help pinpoint what to review.</p>
        <a class="ui-button" data-variant="default" href="{base}/quiz/flashcard?lesson={weakestLesson.lessonNumber}">Review This Lesson</a>
      </section>
    {/if}
    <!-- Overview Cards -->
    <div class="grid grid-cols-2 gap-3 mb-4">
      {#each [
        { value: overview.totalWords, label: 'Words Practiced' },
        { value: `${overview.accuracy}%`, label: 'Accuracy' },
        { value: overview.totalCorrect, label: 'Correct' },
        { value: overview.totalLessons, label: 'Lessons' }
      ] as stat}
        <Card>
          <CardContent class="py-4 text-center">
            <div class="text-2xl font-bold text-primary">{stat.value}</div>
            <div class="text-xs text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      {/each}
    </div>

    <!-- Streak -->
    <Card class="mb-4">
      <CardContent class="py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div>
            <div class="text-2xl font-bold text-primary leading-none">{streak.currentStreak}</div>
            <div class="text-xs text-muted-foreground">day streak</div>
          </div>
        </div>
        <div class="text-right text-xs text-muted-foreground space-y-0.5">
          <div>Best: {streak.longestStreak} days</div>
          <div>Total: {streak.totalDays} days</div>
        </div>
      </CardContent>
    </Card>

    <!-- Achievements -->
    <Card class="mb-4">
      <CardHeader class="pb-2"><CardTitle class="text-sm">Achievements ({unlockedCount}/{achievements.length})</CardTitle></CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 gap-2">
          {#each achievements as ach}
            <div class="flex items-center gap-2 p-2.5 bg-muted rounded-lg {ach.unlocked ? '' : 'opacity-40'}">
              <span class="text-xl min-w-[1.8rem] text-center">{ach.unlocked ? ach.icon : '🔒'}</span>
              <div>
                <div class="text-xs font-semibold">{ach.title}</div>
                <div class="text-[0.65rem] text-muted-foreground">{ach.description}</div>
              </div>
            </div>
          {/each}
        </div>
      </CardContent>
    </Card>

    <!-- Mastery Distribution -->
    <Card class="mb-4">
      <CardHeader class="pb-2"><CardTitle class="text-sm">Mastery Distribution</CardTitle></CardHeader>
      <CardContent>
        <div class="flex flex-col gap-2">
          {#each overview.masteryDistribution as count, level}
            <div class="grid items-center gap-2" style="grid-template-columns: 4.5rem 1fr 2rem;">
              <span class="text-xs font-semibold text-right" style="color: {getMasteryColor(level)}">
                {getMasteryLabel(level)}
              </span>
              <div class="h-4 bg-muted rounded-full overflow-hidden">
              <div
                  role="img"
                  aria-label={`${getMasteryLabel(level)}: ${count} words`}
                  class="h-full rounded-full transition-colors duration-500"
                  style="width: {(count / maxMastery) * 100}%; background: {getMasteryColor(level)}; min-width: 2px"
                ></div>
              </div>
              <span class="text-xs font-semibold text-muted-foreground text-right">{count}</span>
            </div>
          {/each}
        </div>
      </CardContent>
    </Card>

    <!-- Lesson Breakdown -->
    {#if lessonStats.length > 0}
      <Card class="mb-4">
        <CardHeader class="pb-2"><CardTitle class="text-sm">Lesson Breakdown</CardTitle></CardHeader>
        <CardContent>
          <!-- Table Header -->
          <div class="grid gap-2 py-2 text-[0.7rem] font-bold text-muted-foreground uppercase border-b border-border"
            style="grid-template-columns: 3rem 2.5rem 3.5rem 3rem 1fr;">
            <span>Lesson</span><span>Words</span><span>Accuracy</span><span>Mastery</span><span>Last</span>
          </div>
          {#each lessonStats as ls}
            <div class="grid gap-2 py-2 text-sm border-b border-border last:border-0 items-center"
              style="grid-template-columns: 3rem 2.5rem 3.5rem 3rem 1fr;">
              <span class="font-semibold text-primary">#{ls.lessonNumber}</span>
              <span>{ls.wordCount}</span>
              <span class="{ls.accuracy >= 80 ? 'text-success-text font-semibold' : ls.accuracy < 50 ? 'text-destructive font-semibold' : ''}">
                {ls.accuracy}%
              </span>
              <span>{ls.avgMastery}</span>
              <span class="text-xs text-muted-foreground">{formatLastStudied(ls.lastStudied)}</span>
            </div>
          {/each}
        </CardContent>
      </Card>
    {/if}
  {/if}
</PageWorkspace>

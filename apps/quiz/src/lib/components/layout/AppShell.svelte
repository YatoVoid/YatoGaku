<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { progressStore, uiStore, toggleDarkMode } from '$lib/stores';
  import { getDueCount } from '$lib/utils/srsUtils';
  import { getCourseProgress } from '$lib/utils/progressUtils';
  import { getCourseMetadata } from '$lib/data/courses';
  import { getRouteMeta } from '$lib/navigation/routeMeta';
  import { Progress } from '$lib/components/ui/progress';
  import { IconButton } from '$lib/components/ui/icon-button';
  import { AlertDialog } from '$lib/components/ui/alert-dialog';
  import {
    BookOpen, ChartNoAxesColumnIncreasing, ChevronLeft, CircleUserRound, CloudOff,
    Home, Moon, RefreshCw, Settings, Sun, Wifi, X
  } from 'lucide-svelte';

  let online = true;
  let hydrated = false;
  let confirmExit = false;

  $: meta = getRouteMeta($page.url.pathname, base);
  $: dueCount = getDueCount($progressStore);
  $: course = meta.courseId ? getCourseMetadata(meta.courseId) : null;
  $: courseProgress = meta.courseId ? getCourseProgress($progressStore, meta.courseId) : null;
  $: coursePercent = courseProgress && courseProgress.total > 0
    ? Math.round((courseProgress.completed / courseProgress.total) * 100) : 0;

  const primaryLinks = [
    { href: '/', label: 'Today', section: 'home', icon: Home },
    { href: '/courses', label: 'Learn', section: 'learn', icon: BookOpen },
    { href: '/review', label: 'Review', section: 'review', icon: RefreshCw },
    { href: '/stats', label: 'Progress', section: 'progress', icon: ChartNoAxesColumnIncreasing }
  ] as const;

  onMount(() => {
    hydrated = true;
    updateConnection();
  });

  function updateConnection() {
    online = navigator.onLine;
  }

  function goBack() {
    if (history.length > 1) history.back();
    else goto(`${base}/`);
  }

  function requestExit() {
    confirmExit = true;
  }
</script>

<svelte:window on:online={updateConnection} on:offline={updateConnection} />

<svelte:head><title>{meta.title} · YatoGaku</title></svelte:head>

<div class:focus-shell={meta.mode === 'focus'} class="app-shell" data-hydrated={hydrated}>
  {#if meta.mode === 'workspace'}
    <aside class="desktop-rail" aria-label="Main navigation">
      <a class="brand" href="{base}/" aria-label="YatoGaku Home">
        <img src="{base}/yatogaku-logo.png" alt="YatoGaku" width="28" height="28" />
      </a>

      <nav class="rail-nav">
        {#each primaryLinks as link}
          <a href="{base}{link.href}" class:active={meta.section === link.section} aria-current={meta.section === link.section ? 'page' : undefined}>
            <svelte:component this={link.icon} size={20} strokeWidth={2} aria-hidden="true" />
            <span>{link.label}</span>
            {#if link.section === 'review' && dueCount > 0}<span class="count">{dueCount > 99 ? '99+' : dueCount}</span>{/if}
          </a>
        {/each}
      </nav>

      <div class="rail-context">
        {#if course && courseProgress}
          <a class="course-context" href="{base}/course/{meta.courseId}">
            <span class="eyebrow">Studying</span>
            <strong>{course.level} · {course.title}</strong>
            <span>{courseProgress.completed}/{courseProgress.total} lessons done</span>
            <Progress value={coursePercent} label={`${course.level} progress`} />
          </a>
        {/if}
        <div class:offline={!online} class="connection" role="status">
          {#if online}<Wifi size={16} aria-hidden="true" /><span>Online</span>
          {:else}<CloudOff size={16} aria-hidden="true" /><span>Offline</span>{/if}
        </div>
        <a class="rail-settings" href="{base}/settings" class:active={meta.section === 'settings'}>
          <Settings size={20} aria-hidden="true" /><span>Settings</span>
        </a>
      </div>
    </aside>
  {/if}

  <div class="shell-stage">
    <header class="topbar">
      <div class="topbar-leading">
        {#if meta.mode === 'focus'}
          <IconButton icon={X} label="Exit session" onclick={requestExit} />
        {:else}
          <a class="mobile-brand" href="{base}/" aria-label="YatoGaku Home"><CircleUserRound size={24} aria-hidden="true" /></a>
        {/if}
        <div class="title-block">
          {#if meta.mode === 'workspace' && meta.breadcrumbs.length > 1}
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              {#each meta.breadcrumbs as item, index}
                {#if item.href && index < meta.breadcrumbs.length - 1}<a href="{base}{item.href}">{item.label}</a><span aria-hidden="true">/</span>
                {:else}<span aria-current="page">{item.label}</span>{/if}
              {/each}
            </nav>
          {/if}
          <p class="page-title">{meta.title}</p>
        </div>
      </div>
      <div class="topbar-actions">
        <span class:offline={!online} class="mobile-connection" aria-label={online ? 'App is online' : 'App is offline'}>
          {#if online}<Wifi size={16} aria-hidden="true" />{:else}<CloudOff size={16} aria-hidden="true" />{/if}
        </span>
        <IconButton icon={$uiStore.darkMode ? Sun : Moon} label={$uiStore.darkMode ? 'Use light theme' : 'Use dark theme'} onclick={toggleDarkMode} />
        {#if meta.mode === 'focus'}
          <a class="settings-action" href="{base}/settings" aria-label="Settings"><Settings size={20} aria-hidden="true" /></a>
        {/if}
      </div>
    </header>

    <div class="route-announcer" aria-live="polite" aria-atomic="true">Opened {meta.title}</div>
    <main id="main-content" tabindex="-1" class="shell-content"><slot /></main>
  </div>

  {#if meta.mode === 'workspace'}
    <nav class="mobile-nav" aria-label="Main navigation, mobile">
      {#each primaryLinks as link}
        <a href="{base}{link.href}" class:active={meta.section === link.section} aria-current={meta.section === link.section ? 'page' : undefined}>
          <span class="nav-icon"><svelte:component this={link.icon} size={20} strokeWidth={2} aria-hidden="true" />
            {#if link.section === 'review' && dueCount > 0}<span class="mobile-count">{dueCount > 9 ? '9+' : dueCount}</span>{/if}
          </span>
          <span>{link.label}</span>
        </a>
      {/each}
    </nav>
  {/if}
</div>

<AlertDialog bind:open={confirmExit} title="Leave this session?" description="Progress on the current question may be lost." confirmText="Leave" cancelText="Keep studying" destructive onconfirm={goBack} />

<style>
  .app-shell { min-height: 100svh; background: var(--color-background); color: var(--color-foreground); }
  .desktop-rail { display: none; }
  .shell-stage { min-width: 0; min-height: 100svh; }
  .topbar { position: sticky; top: 0; z-index: var(--z-sticky); min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-sm); padding: 0 var(--spacing-md); background: var(--color-background); border-bottom: 1px solid var(--color-border); }
  .topbar-leading, .topbar-actions { display: flex; align-items: center; min-width: 0; gap: var(--spacing-xs); }
  .title-block { min-width: 0; }
  .page-title { margin: 0; font-size: .95rem; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .breadcrumbs { display: none; }
  .mobile-brand, .settings-action { width: var(--spacing-touch); height: var(--spacing-touch); display: grid; place-items: center; color: var(--color-primary); border-radius: var(--radius-control); }
  .settings-action { color: var(--color-muted-foreground); }
  .mobile-connection { display: grid; place-items: center; width: 32px; color: var(--color-success); }
  .mobile-connection.offline { color: var(--color-warning); }
  .shell-content { min-height: calc(100svh - 64px); padding-bottom: calc(76px + env(safe-area-inset-bottom)); outline: none; }
  .focus-shell .shell-content { padding-bottom: env(safe-area-inset-bottom); }
  .mobile-nav { position: fixed; inset: auto 0 0; z-index: var(--z-sticky); display: grid; grid-template-columns: repeat(4, 1fr); padding: var(--spacing-xs) max(var(--spacing-xs), env(safe-area-inset-right)) max(var(--spacing-xs), env(safe-area-inset-bottom)) max(var(--spacing-xs), env(safe-area-inset-left)); background: var(--color-card); border-top: 1px solid var(--color-border); }
  .mobile-nav a { min-height: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; color: var(--color-muted-foreground); text-decoration: none; border-radius: var(--radius-control); font-size: .7rem; font-weight: 650; }
  .mobile-nav a.active { color: var(--color-primary); background: var(--color-primary-subtle); }
  .nav-icon { position: relative; display: grid; place-items: center; }
  .mobile-count { position: absolute; top: -7px; right: -13px; min-width: 17px; height: 17px; padding: 0 3px; display: grid; place-items: center; border-radius: var(--radius-pill); background: var(--color-destructive); color: var(--color-destructive-foreground); font-size: .6rem; }
  .route-announcer { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

  @media (min-width: 900px) {
    .app-shell:not(.focus-shell) { display: grid; grid-template-columns: 248px minmax(0, 1fr); }
    .desktop-rail { position: sticky; top: 0; height: 100svh; display: flex; flex-direction: column; padding: var(--spacing-lg) var(--spacing-md); background: var(--color-shell); color: var(--color-shell-foreground); border-right: 1px solid color-mix(in srgb, white 10%, transparent); }
    .brand { display: block; min-height: 44px; padding: 8px; margin-bottom: var(--spacing-lg); }
    .brand img { display: block; border-radius: 6px; }
    .rail-nav { display: grid; gap: var(--spacing-xs); }
    .rail-nav a, .rail-settings { min-height: 44px; display: flex; align-items: center; gap: var(--spacing-sm); padding: 0 12px; color: color-mix(in srgb, var(--color-shell-foreground) 70%, transparent); border-radius: var(--radius-control); text-decoration: none; font-size: .9rem; font-weight: 600; }
    .rail-nav a:hover, .rail-settings:hover { color: var(--color-shell-foreground); background: color-mix(in srgb, white 7%, transparent); }
    .rail-nav a.active, .rail-settings.active { color: white; background: color-mix(in srgb, var(--color-primary) 38%, transparent); }
    .count { margin-left: auto; min-width: 24px; padding: 2px 6px; text-align: center; border-radius: var(--radius-pill); background: var(--color-primary); color: white; font-size: .7rem; }
    .rail-context { display: grid; gap: var(--spacing-sm); margin-top: auto; }
    .course-context { display: grid; gap: 5px; padding: var(--spacing-md); color: var(--color-shell-foreground); background: color-mix(in srgb, white 6%, transparent); border: 1px solid color-mix(in srgb, white 10%, transparent); border-radius: var(--radius-surface); text-decoration: none; }
    .course-context .eyebrow { color: color-mix(in srgb, var(--color-shell-foreground) 60%, transparent); text-transform: uppercase; letter-spacing: .08em; font-size: .65rem; font-weight: 700; }
    .course-context strong { font-size: .95rem; }
    .course-context > span:last-of-type { color: color-mix(in srgb, var(--color-shell-foreground) 67%, transparent); font-size: .75rem; }
    .connection { min-height: 36px; display: flex; align-items: center; gap: var(--spacing-sm); padding: 0 12px; color: color-mix(in srgb, var(--color-shell-foreground) 66%, transparent); font-size: .75rem; }
    .connection.offline { color: var(--color-warning); }
    .topbar { min-height: 76px; padding: 0 var(--spacing-xl); }
    .mobile-brand, .mobile-nav { display: none; }
    .breadcrumbs { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; color: var(--color-muted-foreground); font-size: .7rem; }
    .breadcrumbs a { color: inherit; text-decoration: none; }
    .breadcrumbs a:hover { color: var(--color-primary); }
    .page-title { font-size: 1.05rem; }
    .shell-content { min-height: calc(100svh - 76px); padding-bottom: 0; }
    .focus-shell .topbar { max-width: 1120px; margin: 0 auto; border-inline: 1px solid var(--color-border); }
    .focus-shell .shell-content { max-width: 1120px; margin: 0 auto; }
  }
</style>

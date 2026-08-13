<script lang="ts">
  import { base } from '$app/paths';
  import { getAllCourses } from '$lib/data/courses';
  import { progressStore } from '$lib/stores';
  import { getCourseProgress, getNextLesson } from '$lib/utils/progressUtils';
  import PageError from '$lib/components/common/PageError.svelte';
  import { ArrowRight, BookOpen, Languages, Library, MessageCircle, Shapes } from 'lucide-svelte';

  let dataError = false;
  let courses: ReturnType<typeof getAllCourses> = [];
  try { courses = getAllCourses(); } catch (error) { console.error('[SmartQuiz] Home data error:', error); dataError = true; }

  $: primaryCourse = courses[0] ?? null;
  $: primaryProgress = primaryCourse ? getCourseProgress($progressStore, primaryCourse.metadata.id) : null;
  $: nextLesson = primaryCourse ? getNextLesson($progressStore, primaryCourse.metadata.id) : 1;
  $: hasProgress = Boolean(primaryProgress && (primaryProgress.completed > 0 || Object.keys($progressStore.lessons).length > 0));

  const tools = [
    { href: '/kanji', label: 'Kanji', detail: 'Tra cứu và luyện viết', icon: Shapes },
    { href: '/grammar-reference', label: 'Ngữ pháp', detail: 'Mẫu câu theo cấp độ', icon: Library },
    { href: '/alphabet', label: 'Bảng chữ cái', detail: 'Hiragana và Katakana', icon: Languages },
    { href: '/conversations', label: 'Hội thoại', detail: 'Mẫu câu trong ngữ cảnh', icon: MessageCircle }
  ];
</script>

<svelte:head><title>Hôm nay học gì? · Smart Quiz</title></svelte:head>

{#if dataError}
  <PageError message="Không thể tải dữ liệu học tập." retry={() => location.reload()} />
{:else if primaryCourse && primaryProgress}
  <div class="home-workspace">
    <section class="today" aria-labelledby="today-title">
      <p class="eyebrow">Không gian học hôm nay</p>
      <h1 id="today-title">{hasProgress ? 'Tiếp tục từ nơi bạn dừng lại' : 'Bắt đầu một nhịp học nhỏ'}</h1>
      <p class="intro">{hasProgress ? `Bạn đang ở lộ trình ${primaryCourse.metadata.level}. Một bài ngắn là đủ để giữ nhịp.` : 'Minna no Nihongo N5 là lộ trình phù hợp để bắt đầu.'}</p>

      <a class="continue-action" href="{base}/course/{primaryCourse.metadata.id}/lesson/{nextLesson}">
        <span class="continue-copy">
          <span class="action-label">{hasProgress ? 'Học tiếp' : 'Bắt đầu'}</span>
          <strong>{primaryCourse.metadata.title} · Bài {nextLesson}</strong>
          <span>{primaryProgress.completed}/{primaryProgress.total} bài hoàn thành</span>
        </span>
        <ArrowRight size={24} aria-hidden="true" />
      </a>
    </section>

    <section class="course-paths" aria-labelledby="paths-title">
      <div class="section-heading">
        <div><p class="eyebrow">Lộ trình</p><h2 id="paths-title">Chọn cấp độ tiếng Nhật</h2></div>
        <a href="{base}/courses">Xem tất cả</a>
      </div>
      <div class="path-list">
        {#each courses as course}
          {@const progress = getCourseProgress($progressStore, course.metadata.id)}
          <a href="{base}/course/{course.metadata.id}" class="path-row">
            <span class="level" style={`--course-color:${course.metadata.color}`}>{course.metadata.level}</span>
            <span class="path-copy"><strong>{course.metadata.title}</strong><span>{course.metadata.description}</span></span>
            <span class="path-progress">{progress.completed}/{progress.total}</span>
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        {/each}
      </div>
    </section>

    <section class="study-tools" aria-labelledby="tools-title">
      <p class="eyebrow">Thư viện học</p>
      <h2 id="tools-title">Tra cứu khi cần</h2>
      <div class="tool-list">
        {#each tools as tool}
          <a href="{base}{tool.href}"><svelte:component this={tool.icon} size={20} aria-hidden="true" /><span><strong>{tool.label}</strong><small>{tool.detail}</small></span><ArrowRight size={16} aria-hidden="true" /></a>
        {/each}
      </div>
      <a class="all-tools" href="{base}/courses"><BookOpen size={16} aria-hidden="true" /> Khám phá toàn bộ nội dung</a>
    </section>
  </div>
{/if}

<style>
  .home-workspace { width: min(100% - 2rem, 920px); margin: 0 auto; padding: clamp(2rem, 7vw, 5rem) 0; }
  .today { max-width: 720px; margin-bottom: clamp(3rem, 8vw, 6rem); }
  .eyebrow { margin: 0 0 6px; color: var(--color-primary); font-size: .72rem; font-weight: 750; letter-spacing: .1em; text-transform: uppercase; }
  h1, h2 { margin: 0; line-height: 1.2; }
  h1 { max-width: 18ch; font-size: clamp(2rem, 6vw, 3.75rem); letter-spacing: -.035em; }
  h2 { font-size: clamp(1.25rem, 3vw, 1.65rem); }
  .intro { max-width: 58ch; margin: var(--spacing-md) 0 var(--spacing-lg); color: var(--color-muted-foreground); line-height: 1.65; }
  .continue-action { min-height: 104px; display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-lg); padding: var(--spacing-lg); color: var(--color-primary-foreground); background: var(--color-primary); border-radius: var(--radius-surface); text-decoration: none; }
  .continue-action:hover { background: var(--color-primary-hover); }
  .continue-copy { display: grid; gap: 3px; }
  .continue-copy .action-label { opacity: .75; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
  .continue-copy strong { font-size: clamp(1.05rem, 3vw, 1.35rem); }
  .continue-copy > span:last-child { opacity: .8; font-size: .8rem; }
  .course-paths { margin-bottom: clamp(3rem, 8vw, 5rem); }
  .section-heading { display: flex; align-items: end; justify-content: space-between; gap: var(--spacing-md); margin-bottom: var(--spacing-md); }
  .section-heading > a, .all-tools { color: var(--color-primary); font-size: .85rem; font-weight: 650; text-decoration: none; }
  .path-list { border-block: 1px solid var(--color-border); }
  .path-row { min-height: 76px; display: grid; grid-template-columns: 48px minmax(0, 1fr) auto 20px; align-items: center; gap: var(--spacing-md); color: var(--color-foreground); border-bottom: 1px solid var(--color-border); text-decoration: none; }
  .path-row:last-child { border-bottom: 0; }
  .path-row:hover .path-copy strong { color: var(--color-primary); }
  .level { width: 44px; height: 44px; display: grid; place-items: center; color: var(--course-color); border: 1px solid color-mix(in srgb, var(--course-color) 35%, var(--color-border)); border-radius: var(--radius-control); font-weight: 800; }
  .path-copy { min-width: 0; display: grid; }
  .path-copy span { overflow: hidden; color: var(--color-muted-foreground); font-size: .78rem; text-overflow: ellipsis; white-space: nowrap; }
  .path-progress { color: var(--color-muted-foreground); font-size: .75rem; font-variant-numeric: tabular-nums; }
  .tool-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: var(--spacing-md) 0; border: 1px solid var(--color-border); border-radius: var(--radius-surface); overflow: hidden; }
  .tool-list a { min-height: 76px; display: flex; align-items: center; gap: var(--spacing-md); padding: var(--spacing-md); color: var(--color-foreground); text-decoration: none; border-bottom: 1px solid var(--color-border); }
  .tool-list a:nth-child(odd) { border-right: 1px solid var(--color-border); }
  .tool-list a:nth-last-child(-n+2) { border-bottom: 0; }
  .tool-list a:hover { background: var(--color-muted); }
  .tool-list a > span { flex: 1; display: grid; }
  .tool-list small { color: var(--color-muted-foreground); }
  .all-tools { display: inline-flex; align-items: center; gap: var(--spacing-xs); }
  @media (max-width: 600px) {
    .home-workspace { width: min(100% - 1.25rem, 920px); padding-top: var(--spacing-xl); }
    .tool-list { grid-template-columns: 1fr; }
    .tool-list a, .tool-list a:nth-child(odd), .tool-list a:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--color-border); }
    .tool-list a:last-child { border-bottom: 0; }
    .path-row { grid-template-columns: 44px minmax(0, 1fr) 20px; gap: var(--spacing-sm); }
    .path-progress { display: none; }
  }
</style>

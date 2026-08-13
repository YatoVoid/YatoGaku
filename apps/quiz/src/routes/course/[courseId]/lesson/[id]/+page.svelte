<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { getCourse } from '$lib/data/courses';
  import { buildQuizUrl, buildVocabularyUrl, buildGrammarUrl } from '$lib/utils/courseUtils';
  import { progressStore } from '$lib/stores';
  import { getLessonMastery } from '$lib/utils/progressUtils';
  import PageEmpty from '$lib/components/common/PageEmpty.svelte';
  import { Progress } from '$lib/components/ui/progress';
  import type { CourseId } from '$lib/types/course';
  import type { QuizDirection } from '$lib/types';
  import { ArrowRight, BookOpen, CheckCircle2, Keyboard, Languages, Layers, Library, MessageCircle, PenLine } from 'lucide-svelte';

  $: courseId = $page.params.courseId as CourseId;
  $: lessonId = Number($page.params.id || 0);
  $: course = getCourse(courseId);
  $: lesson = course?.getLessonData(lessonId);
  $: mastery = getLessonMastery($progressStore, courseId, lessonId);
  let selectedDirection: QuizDirection = 'ja-vi';

  const directions: { value: QuizDirection; label: string; description: string }[] = [
    { value: 'ja-vi', label: 'Nhật → Việt', description: 'Nhận diện nghĩa' },
    { value: 'vi-ja', label: 'Việt → Nhật', description: 'Gợi nhớ từ Nhật' },
    { value: 'vi-romaji', label: 'Việt → Romaji', description: 'Luyện cách đọc' }
  ];

  function startQuiz(mode: string) { goto(buildQuizUrl(courseId, mode, lessonId, selectedDirection)); }
</script>

<svelte:head><title>{lesson?.title || 'Bài học'} · {course?.metadata.title || 'Smart Quiz'}</title></svelte:head>

{#if lesson && course}
  <div class="lesson-workspace">
    <header class="lesson-heading">
      <p class="eyebrow">{course.metadata.level} · Bài {lesson.lessonNumber}</p>
      <h1>{lesson.title}</h1>
      <p>{lesson.vocabulary.length} từ vựng · {lesson.grammar.length} mẫu ngữ pháp</p>
      <div class="mastery"><span>Tiến trình bài học</span><strong>{mastery}%</strong></div>
      <Progress value={mastery} label={`Tiến trình bài ${lesson.lessonNumber}: ${mastery}%`} />
    </header>

    <section class="next-step" aria-labelledby="next-title">
      <div><p class="eyebrow">Nên học tiếp</p><h2 id="next-title">{mastery === 0 ? 'Làm quen từ vựng bằng flashcard' : 'Củng cố phần đang học'}</h2><p>{mastery === 0 ? 'Xem từng từ trước, chưa cần nhớ hoàn hảo.' : 'Một lượt ngắn giúp xác định chính xác phần cần ôn.'}</p></div>
      <button class="primary-study" on:click={() => startQuiz('flashcard')}>Bắt đầu flashcard <ArrowRight size={20} aria-hidden="true" /></button>
    </section>

    <section class="direction" aria-labelledby="direction-title">
      <div class="section-title"><Languages size={20} aria-hidden="true" /><div><h2 id="direction-title">Chiều luyện tập</h2><p>Áp dụng cho các quiz bên dưới</p></div></div>
      <div class="direction-options" role="radiogroup" aria-label="Chiều luyện tập">
        {#each directions as direction}
          <button role="radio" aria-checked={selectedDirection === direction.value} class:active={selectedDirection === direction.value} on:click={() => selectedDirection = direction.value}>
            <strong>{direction.label}</strong><span>{direction.description}</span>
          </button>
        {/each}
      </div>
    </section>

    <section class="study-sections" aria-labelledby="materials-title">
      <div class="section-title"><BookOpen size={20} aria-hidden="true" /><div><h2 id="materials-title">Nội dung bài học</h2><p>Đọc trước, luyện tập sau</p></div></div>
      <div class="study-list">
        <button on:click={() => goto(buildVocabularyUrl(courseId, lessonId))}><Library size={20} aria-hidden="true" /><span><strong>Từ vựng</strong><small>{lesson.vocabulary.length} từ · nghe, tìm kiếm và chọn để luyện</small></span><ArrowRight size={16} aria-hidden="true" /></button>
        <button on:click={() => goto(buildGrammarUrl(courseId, lessonId))}><PenLine size={20} aria-hidden="true" /><span><strong>Ngữ pháp</strong><small>{lesson.grammar.length} mẫu · giải thích và ví dụ</small></span><ArrowRight size={16} aria-hidden="true" /></button>
        <a href="{base}/kanji"><Layers size={20} aria-hidden="true" /><span><strong>Kanji liên quan</strong><small>Mở bàn học Kanji theo cấp độ</small></span><ArrowRight size={16} aria-hidden="true" /></a>
        <a href="{base}/conversations"><MessageCircle size={20} aria-hidden="true" /><span><strong>Hội thoại</strong><small>Đặt từ và mẫu câu vào ngữ cảnh</small></span><ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </section>

    <section class="practice" aria-labelledby="practice-title">
      <div class="section-title"><CheckCircle2 size={20} aria-hidden="true" /><div><h2 id="practice-title">Luyện tập</h2><p>Chọn cách nhớ phù hợp</p></div></div>
      <div class="practice-list">
        <button on:click={() => startQuiz('multiple-choice')}><CheckCircle2 size={20} aria-hidden="true" /><span><strong>Chọn đáp án</strong><small>Nhận phản hồi ngay, dùng phím 1–4</small></span><ArrowRight size={16} aria-hidden="true" /></button>
        <button on:click={() => startQuiz('typing')}><Keyboard size={20} aria-hidden="true" /><span><strong>Nhập câu trả lời</strong><small>Gợi nhớ chủ động bằng bàn phím</small></span><ArrowRight size={16} aria-hidden="true" /></button>
        {#if lesson.grammar.length > 0}<button on:click={() => goto(`${base}/course/${courseId}/lesson/${lessonId}/grammar-quiz/mixed`)}><PenLine size={20} aria-hidden="true" /><span><strong>Quiz ngữ pháp</strong><small>Điền chỗ trống và nhận diện mẫu câu</small></span><ArrowRight size={16} aria-hidden="true" /></button>{/if}
      </div>
    </section>
  </div>
{:else}
  <PageEmpty title="Không tìm thấy bài học" description="Bài học này không tồn tại hoặc chưa sẵn sàng." action={{ label: 'Về danh sách khóa học', href: '/courses' }} />
{/if}

<style>
  .lesson-workspace { width: min(100% - 2rem, 820px); margin: 0 auto; padding: clamp(2rem, 6vw, 4rem) 0; }
  .lesson-heading { max-width: 680px; margin-bottom: clamp(2.5rem, 7vw, 4.5rem); }
  .eyebrow { margin: 0 0 5px; color: var(--color-primary); font-size: .72rem; font-weight: 750; letter-spacing: .09em; text-transform: uppercase; }
  h1, h2, p { margin-top: 0; }
  h1 { margin-bottom: var(--spacing-sm); font-family: var(--font-japanese); font-size: clamp(1.75rem, 5vw, 2.75rem); line-height: 1.25; }
  h2 { margin-bottom: 3px; font-size: 1.15rem; }
  .lesson-heading > p:not(.eyebrow), .next-step p, .section-title p { color: var(--color-muted-foreground); }
  .mastery { display: flex; justify-content: space-between; margin-top: var(--spacing-lg); font-size: .78rem; }
  .next-step { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: end; gap: var(--spacing-xl); padding: var(--spacing-lg); margin-bottom: clamp(2.5rem, 7vw, 4rem); color: var(--color-shell-foreground); background: var(--color-shell); border-radius: var(--radius-surface); }
  .next-step .eyebrow { color: color-mix(in srgb, var(--color-primary) 70%, white); }
  .next-step p { margin-bottom: 0; color: color-mix(in srgb, var(--color-shell-foreground) 72%, transparent); }
  .primary-study { min-height: 48px; display: inline-flex; align-items: center; gap: var(--spacing-sm); padding: 0 var(--spacing-md); color: var(--color-primary-foreground); background: var(--color-primary); border: 0; border-radius: var(--radius-control); font-weight: 700; cursor: pointer; }
  section:not(.next-step) { margin-bottom: clamp(2.5rem, 7vw, 4rem); }
  .section-title { display: flex; align-items: flex-start; gap: var(--spacing-sm); margin-bottom: var(--spacing-md); }
  .section-title :global(svg) { color: var(--color-primary); margin-top: 2px; }
  .section-title p { margin-bottom: 0; font-size: .78rem; }
  .direction-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-sm); }
  .direction-options button { min-height: 70px; display: grid; align-content: center; gap: 2px; padding: var(--spacing-sm); color: var(--color-muted-foreground); background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-control); cursor: pointer; }
  .direction-options button.active { color: var(--color-primary); background: var(--color-primary-subtle); border-color: var(--color-primary); }
  .direction-options span { font-size: .7rem; }
  .study-list, .practice-list { border-block: 1px solid var(--color-border); }
  .study-list button, .study-list a, .practice-list button { width: 100%; min-height: 72px; display: flex; align-items: center; gap: var(--spacing-md); padding: var(--spacing-sm) 0; color: var(--color-foreground); background: transparent; border: 0; border-bottom: 1px solid var(--color-border); text-align: left; text-decoration: none; cursor: pointer; }
  .study-list > :last-child, .practice-list > :last-child { border-bottom: 0; }
  .study-list > * > :global(svg:first-child), .practice-list > * > :global(svg:first-child) { color: var(--color-primary); }
  .study-list span, .practice-list span { flex: 1; display: grid; }
  .study-list small, .practice-list small { color: var(--color-muted-foreground); line-height: 1.45; }
  @media (max-width: 620px) {
    .lesson-workspace { width: min(100% - 1.25rem, 820px); }
    .next-step { grid-template-columns: 1fr; align-items: start; }
    .primary-study { justify-content: center; }
    .direction-options { grid-template-columns: 1fr; }
    .direction-options button { min-height: 58px; }
  }
</style>

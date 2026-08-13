import type { CourseId } from '$lib/types/course';

export type ShellMode = 'workspace' | 'focus';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface RouteMeta {
  title: string;
  section: 'home' | 'learn' | 'review' | 'progress' | 'settings';
  mode: ShellMode;
  courseId?: CourseId;
  lessonId?: number;
  breadcrumbs: BreadcrumbItem[];
}

const LABELS: Record<string, string> = {
  courses: 'Khóa học', vocabulary: 'Từ vựng', grammar: 'Ngữ pháp', alphabet: 'Bảng chữ cái',
  counters: 'Trợ số từ', conversations: 'Hội thoại', hsk: 'HSK 5', kanji: 'Kanji',
  radicals: 'Bộ thủ', review: 'Ôn tập', stats: 'Tiến trình', settings: 'Cài đặt',
  exams: 'Đề thi', 'mock-test': 'Thi thử', premium: 'Premium', about: 'Giới thiệu',
  results: 'Kết quả', 'grammar-reference': 'Ngữ pháp', vocab: 'Từ vựng'
};

export function stripBase(pathname: string, base = ''): string {
  if (base && pathname.startsWith(base)) return pathname.slice(base.length) || '/';
  return pathname || '/';
}

function isFocusRoute(path: string): boolean {
  return path.startsWith('/quiz/') || path === '/results' ||
    /\/quiz\//.test(path) || /^\/exams\/[^/]+/.test(path) || path === '/mock-test';
}

function sectionFor(path: string): RouteMeta['section'] {
  if (path === '/') return 'home';
  if (path.startsWith('/review')) return 'review';
  if (path.startsWith('/stats')) return 'progress';
  if (path.startsWith('/settings')) return 'settings';
  return 'learn';
}

export function getRouteMeta(pathname: string, base = ''): RouteMeta {
  const path = stripBase(pathname, base);
  const segments = path.split('/').filter(Boolean);
  const courseMatch = path.match(/^\/course\/(n[1-5])(?:\/lesson\/(\d+))?/);
  const queryCourseMatch = path.match(/^\/quiz\//);
  const courseId = courseMatch?.[1] as CourseId | undefined;
  const lessonId = courseMatch?.[2] ? Number(courseMatch[2]) : undefined;
  let title = path === '/' ? 'Hôm nay bạn muốn học gì?' : LABELS[segments.at(-1) ?? ''] ?? 'Smart Quiz';

  if (courseId && lessonId) {
    if (path.includes('/vocabulary')) title = 'Từ vựng';
    else if (path.includes('/grammar-quiz')) title = 'Luyện ngữ pháp';
    else if (path.endsWith('/grammar')) title = 'Ngữ pháp';
    else title = `Bài ${lessonId}`;
  } else if (courseId) title = `Khóa ${courseId.toUpperCase()}`;
  else if (path.startsWith('/quiz/')) title = 'Phiên luyện tập';
  else if (/^\/hsk\/[^/]+\/quiz/.test(path)) title = 'Luyện HSK';
  else if (/^\/hsk\/[^/]+/.test(path)) title = 'Từ vựng HSK';
  else if (/^\/kanji\/.+\/quiz/.test(path)) title = 'Luyện Kanji';
  else if (/^\/kanji\/\d+\/reference/.test(path)) title = 'Tra cứu Kanji';
  else if (/^\/kanji\/\d+/.test(path)) title = `Bài Kanji ${segments[1]}`;
  else if (/^\/kanji\/radicals\/[^/]+/.test(path)) title = `Bộ thủ ${decodeURIComponent(segments[2] ?? '')}`;
  else if (/^\/exams\/[^/]+/.test(path)) title = 'Đang làm bài thi';
  else if (/^\/vocab\/[^/]+/.test(path)) title = `Từ vựng ${(segments[1] ?? '').toUpperCase()}`;

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Trang chủ', href: '/' }];
  if (courseId) {
    breadcrumbs.push({ label: 'Khóa học', href: '/courses' });
    breadcrumbs.push({ label: courseId.toUpperCase(), href: `/course/${courseId}` });
    if (lessonId) breadcrumbs.push({ label: `Bài ${lessonId}`, href: `/course/${courseId}/lesson/${lessonId}` });
    if (breadcrumbs.at(-1)?.label !== title) breadcrumbs.push({ label: title });
  } else if (path !== '/') {
    const root = segments[0] ?? '';
    breadcrumbs.push({ label: LABELS[root] ?? title });
    if (breadcrumbs.at(-1)?.label !== title) breadcrumbs.push({ label: title });
  }

  return {
    title,
    section: sectionFor(path),
    mode: isFocusRoute(path) ? 'focus' : 'workspace',
    courseId: queryCourseMatch ? undefined : courseId,
    lessonId,
    breadcrumbs
  };
}

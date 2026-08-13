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
  courses: 'Courses', vocabulary: 'Vocabulary', grammar: 'Grammar', alphabet: 'Alphabet',
  counters: 'Counters', conversations: 'Conversations', hsk: 'HSK 5', kanji: 'Kanji',
  radicals: 'Radicals', review: 'Review', stats: 'Progress', settings: 'Settings',
  exams: 'Exams', 'mock-test': 'Mock test', premium: 'Premium', about: 'About',
  results: 'Results', 'grammar-reference': 'Grammar', vocab: 'Vocabulary'
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
  let title = path === '/' ? 'What do you want to study today?' : LABELS[segments.at(-1) ?? ''] ?? 'Smart Quiz';

  if (courseId && lessonId) {
    if (path.includes('/vocabulary')) title = 'Vocabulary';
    else if (path.includes('/grammar-quiz')) title = 'Grammar practice';
    else if (path.endsWith('/grammar')) title = 'Grammar';
    else title = `Lesson ${lessonId}`;
  } else if (courseId) title = `${courseId.toUpperCase()} course`;
  else if (path.startsWith('/quiz/')) title = 'Study session';
  else if (/^\/hsk\/[^/]+\/quiz/.test(path)) title = 'HSK practice';
  else if (/^\/hsk\/[^/]+/.test(path)) title = 'HSK vocabulary';
  else if (/^\/kanji\/.+\/quiz/.test(path)) title = 'Kanji practice';
  else if (/^\/kanji\/\d+\/reference/.test(path)) title = 'Kanji reference';
  else if (/^\/kanji\/\d+/.test(path)) title = `Kanji lesson ${segments[1]}`;
  else if (/^\/kanji\/radicals\/[^/]+/.test(path)) title = `Radical ${decodeURIComponent(segments[2] ?? '')}`;
  else if (/^\/exams\/[^/]+/.test(path)) title = 'Taking exam';
  else if (/^\/vocab\/[^/]+/.test(path)) title = `${(segments[1] ?? '').toUpperCase()} vocabulary`;

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
  if (courseId) {
    breadcrumbs.push({ label: 'Courses', href: '/courses' });
    breadcrumbs.push({ label: courseId.toUpperCase(), href: `/course/${courseId}` });
    if (lessonId) breadcrumbs.push({ label: `Lesson ${lessonId}`, href: `/course/${courseId}/lesson/${lessonId}` });
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

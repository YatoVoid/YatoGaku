import { render } from '@testing-library/svelte';
import { vi } from 'vitest';
import type { ComponentType, SvelteComponent } from 'svelte';

/**
 * Render a Svelte component with props
 */
export function renderComponent(
  Component: ComponentType,
  props?: Record<string, any>
) {
  return render(Component, { props } as any);
}

/**
 * Create mock quiz session data
 */
export function createMockQuizSession() {
  return {
    questions: [
      {
        id: '1',
        japanese: 'こんにちは',
        vietnamese: 'Xin chào',
        kana: 'こんにちは',
        romaji: 'konnichiwa',
        english: 'Hello',
        lesson: 1
      },
      {
        id: '2',
        japanese: 'ありがとう',
        vietnamese: 'Cảm ơn',
        kana: 'ありがとう',
        romaji: 'arigatou',
        english: 'Thank you',
        lesson: 1
      }
    ],
    currentIndex: 0,
    answers: [],
    startTime: Date.now(),
    mode: 'flashcard' as const
  };
}

/**
 * Create mock lesson data
 */
export function createMockLesson(lessonNumber: number = 1) {
  return {
    lessonNumber,
    title: `Lesson ${lessonNumber}`,
    vocabulary: [
      {
        id: `${lessonNumber}-1`,
        japanese: 'テスト',
        kana: 'てすと',
        romaji: 'tesuto',
        vietnamese: 'Kiểm tra',
        english: 'Test',
        example: 'テストをします。',
        lesson: lessonNumber
      }
    ],
    grammar: [
      {
        id: `g${lessonNumber}-1`,
        pattern: '～は～です',
        vietnamese: 'là',
        english: 'is/am/are',
        explanation: 'Mẫu câu cơ bản',
        examples: [
          {
            japanese: '私は学生です。',
            vietnamese: 'Tôi là sinh viên.',
            english: 'I am a student.'
          }
        ]
      }
    ]
  };
}

/**
 * Mock localStorage with data
 */
export function mockLocalStorage(data: Record<string, any>) {
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
}

/**
 * Get value from mocked localStorage
 */
export function getFromLocalStorage<T = any>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item);
  } catch {
    return item as any;
  }
}

/**
 * Wait for async operations
 */
export function waitForAsync(ms: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Create mock user event
 */
export function createMockEvent(type: string, data: any = {}) {
  return new Event(type, { bubbles: true, cancelable: true, ...data });
}

/**
 * Mock fetch responses
 */
export function mockFetch(response: any, options: { status?: number; ok?: boolean } = {}) {
  return vi.fn().mockResolvedValue({
    ok: options.ok ?? true,
    status: options.status ?? 200,
    json: async () => response,
    text: async () => JSON.stringify(response),
  });
}

/**
 * Create mock HSK vocabulary item
 */
export function createMockHSKItem(id: string = '1') {
  return {
    id,
    chinese: '你好',
    pinyin: 'nǐ hǎo',
    vietnamese: 'Xin chào',
    english: 'Hello',
    group: 'a' as const,
    example: '你好吗？'
  };
}

/**
 * Create mock grammar pattern
 */
export function createMockGrammarPattern(id: string = '1') {
  return {
    id,
    pattern: '～は～です',
    vietnamese: 'là',
    english: 'is/am/are',
    explanation: 'Mẫu câu cơ bản để nói về danh từ',
    examples: [
      {
        japanese: '私は学生です。',
        vietnamese: 'Tôi là sinh viên.',
        english: 'I am a student.'
      }
    ],
    lesson: 1
  };
}

/**
 * Assert element has correct attributes
 */
export function assertElementAttributes(
  element: HTMLElement,
  attributes: Record<string, string>
) {
  Object.entries(attributes).forEach(([key, value]) => {
    expect(element).toHaveAttribute(key, value);
  });
}

/**
 * Assert element has correct classes
 */
export function assertElementClasses(
  element: HTMLElement,
  classes: string[]
) {
  classes.forEach(className => {
    expect(element).toHaveClass(className);
  });
}

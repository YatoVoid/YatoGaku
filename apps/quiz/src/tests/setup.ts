import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit modules
vi.mock('$app/environment', () => ({
  browser: true,
  dev: false,
  building: false,
  version: 'test'
}));

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
  invalidate: vi.fn(),
  invalidateAll: vi.fn(),
  preloadData: vi.fn(),
  preloadCode: vi.fn(),
  beforeNavigate: vi.fn(),
  afterNavigate: vi.fn()
}));

vi.mock('$app/stores', () => {
  const readable = (value: any) => ({
    subscribe: (fn: (value: any) => void) => {
      fn(value);
      return () => {};
    }
  });

  return {
    page: readable({
      url: new URL('http://localhost:5173'),
      params: {},
      route: { id: null },
      status: 200,
      error: null,
      data: {},
      state: {},
      form: undefined
    }),
    navigating: readable(null),
    updated: {
      check: vi.fn(),
      subscribe: readable(false).subscribe
    }
  };
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    }
  };
})();

(globalThis as any).localStorage = localStorageMock;

// Mock window.matchMedia for theme tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

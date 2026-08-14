// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import type ListeningReadingIndexComponent from './index';

// Small fixture, not the real listening/reading data, so this test
// doesn't need updating whenever real resources are added.
vi.mock('@site/src/data/listening-reading', () => ({
  listeningReadingResources: [
    {
      id: 'res-1',
      name: 'Resource One',
      description: 'First resource description.',
      url: 'https://example.test/resource-1',
      level: 'absolute-beginner',
      kind: 'listening',
    },
    {
      id: 'res-2',
      name: 'Resource Two',
      description: 'Second resource description.',
      url: 'https://example.test/resource-2',
      level: 'absolute-beginner',
      kind: 'reading',
    },
    {
      id: 'res-3',
      name: 'Resource Three',
      description: 'Third resource description.',
      url: 'https://example.test/resource-3',
      level: 'n5',
      kind: 'listening-and-reading',
    },
  ],
}));

function setupStorage() {
  const store: Record<string, string> = {};
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  });
  return store;
}

// progress.ts caches isStorageAvailable()'s result at module scope, so
// each test needs a fresh module graph, same pattern as
// GrammarIndex.test.tsx and Dashboard.test.tsx.
async function freshComponent(): Promise<typeof ListeningReadingIndexComponent> {
  vi.resetModules();
  const mod = await import('./index');
  return mod.default;
}

describe('ListeningReadingIndex', () => {
  const originalLocalStorageDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    if (originalLocalStorageDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalLocalStorageDescriptor);
    }
  });

  it('renders the correct number of level groups and resources', async () => {
    setupStorage();
    const ListeningReadingIndex = await freshComponent();
    render(<ListeningReadingIndex />);
    await screen.findByRole('heading', {level: 2, name: 'Absolute beginner'});
    expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(2);
    expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(3);
  });

  it('renders outbound resource links with correct href, target, and rel', async () => {
    setupStorage();
    const ListeningReadingIndex = await freshComponent();
    render(<ListeningReadingIndex />);
    const links = await screen.findAllByRole('link', {name: 'Visit'});
    const link = links.find((l) => l.getAttribute('href') === 'https://example.test/resource-1');
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows the unavailable note and disables checkboxes when storage is unavailable', async () => {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get(): never {
        throw new Error('storage disabled');
      },
    });
    const ListeningReadingIndex = await freshComponent();
    render(<ListeningReadingIndex />);
    expect(
      await screen.findByText(/progress tracking isn.t available in this browser/i),
    ).toBeInTheDocument();
    for (const box of screen.getAllByRole('checkbox')) {
      expect(box).toBeDisabled();
    }
  });

  it('hides the unavailable note and enables checkboxes when storage is available', async () => {
    setupStorage();
    const ListeningReadingIndex = await freshComponent();
    render(<ListeningReadingIndex />);
    await screen.findAllByRole('checkbox');
    expect(screen.queryByText(/progress tracking isn.t available/i)).not.toBeInTheDocument();
    for (const box of screen.getAllByRole('checkbox')) {
      expect(box).not.toBeDisabled();
    }
  });

  it('writes checked state under the "listening-reading" progress category', async () => {
    const store = setupStorage();
    const ListeningReadingIndex = await freshComponent();
    render(<ListeningReadingIndex />);
    const checkboxes = await screen.findAllByRole('checkbox');
    checkboxes[0].click();

    const raw = store['yatogaku-progress'];
    expect(raw).toBeDefined();
    const parsed = JSON.parse(raw);
    expect(parsed['listening-reading']).toEqual({'res-1': true});
  });
});

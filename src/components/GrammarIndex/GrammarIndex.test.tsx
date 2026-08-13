// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import type {GrammarGroup} from '@site/src/data/n5-grammar';
import type GrammarIndexComponent from './index';

// Small fixture, deliberately not the real N5/N4/N3 data, so this test
// doesn't need updating whenever grammar content changes.
const fixtureGroups: GrammarGroup[] = [
  {
    id: 'group-a',
    title: 'Group A',
    points: [
      {
        id: 'point-1',
        title: 'Point One',
        description: 'First point description.',
        sources: [{name: 'Tae Kim', url: 'https://guidetojapanese.org/example-1'}],
      },
      {
        id: 'point-2',
        title: 'Point Two',
        description: 'Second point description.',
        sources: [
          {name: 'Imabi', url: 'https://imabi.org/example-2'},
          {name: 'Tofugu', url: 'https://www.tofugu.com/example-2'},
        ],
      },
    ],
  },
  {
    id: 'group-b',
    title: 'Group B',
    points: [
      {
        id: 'point-3',
        title: 'Point Three',
        description: 'Third point description.',
        sources: [{name: 'Tae Kim', url: 'https://guidetojapanese.org/example-3'}],
      },
    ],
  },
];

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
// each test needs a fresh module graph (fresh GrammarIndex re-imported
// after resetModules) to avoid one test's storage state leaking into
// the next, the same pattern used in src/utils/progress.test.ts.
async function freshGrammarIndex(): Promise<typeof GrammarIndexComponent> {
  vi.resetModules();
  const mod = await import('./index');
  return mod.default;
}

describe('GrammarIndex', () => {
  const originalLocalStorageDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    // Object.defineProperty overrides (used to simulate a throwing
    // localStorage getter) aren't undone by vi.unstubAllGlobals(), so
    // restore jsdom's real descriptor explicitly.
    if (originalLocalStorageDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalLocalStorageDescriptor);
    }
  });

  it('renders the correct number of groups and points for the given groups prop', async () => {
    setupStorage();
    const GrammarIndex = await freshGrammarIndex();
    render(<GrammarIndex groups={fixtureGroups} progressCategory="fixture-category" />);
    await screen.findByRole('heading', {level: 2, name: 'Group A'});
    expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(2);
    expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(3);
  });

  it('renders outbound source links with correct href, target, and rel', async () => {
    setupStorage();
    const GrammarIndex = await freshGrammarIndex();
    render(<GrammarIndex groups={fixtureGroups} progressCategory="fixture-category" />);
    // Two points cite "Tae Kim" in this fixture, so match by href instead
    // of name to avoid an ambiguous query.
    const links = await screen.findAllByRole('link', {name: 'Tae Kim'});
    const link = links.find((l) => l.getAttribute('href') === 'https://guidetojapanese.org/example-1');
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows the unavailable note and disables checkboxes when storage is unavailable', async () => {
    // jsdom provides a real, working localStorage by default, so
    // simulating "unavailable" requires actively breaking it, the same
    // throwing-getter technique used in src/utils/progress.test.ts.
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get(): never {
        throw new Error('storage disabled');
      },
    });
    const GrammarIndex = await freshGrammarIndex();
    render(<GrammarIndex groups={fixtureGroups} progressCategory="fixture-category" />);
    expect(
      await screen.findByText(/progress tracking isn.t available in this browser/i),
    ).toBeInTheDocument();
    const checkboxes = screen.getAllByRole('checkbox');
    for (const box of checkboxes) {
      expect(box).toBeDisabled();
    }
  });

  it('hides the unavailable note and enables checkboxes when storage is available', async () => {
    setupStorage();
    const GrammarIndex = await freshGrammarIndex();
    render(<GrammarIndex groups={fixtureGroups} progressCategory="fixture-category" />);
    await screen.findAllByRole('checkbox');
    expect(screen.queryByText(/progress tracking isn.t available/i)).not.toBeInTheDocument();
    for (const box of screen.getAllByRole('checkbox')) {
      expect(box).not.toBeDisabled();
    }
  });

  it('writes checked state under the progressCategory prop passed to it, not a hardcoded one', async () => {
    const store = setupStorage();
    const GrammarIndex = await freshGrammarIndex();
    render(<GrammarIndex groups={fixtureGroups} progressCategory="grammar-n4" />);
    const checkboxes = await screen.findAllByRole('checkbox');
    checkboxes[0].click();

    const raw = store['yatogaku-progress'];
    expect(raw).toBeDefined();
    const parsed = JSON.parse(raw);
    // Must be stored under the category this instance was given...
    expect(parsed['grammar-n4']).toEqual({'point-1': true});
    // ...and NOT under an unrelated category, which is exactly the
    // collision risk manually verified by hand in key results 7 and 8.
    expect(parsed.grammar).toBeUndefined();
  });
});

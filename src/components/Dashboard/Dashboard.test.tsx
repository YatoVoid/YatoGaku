// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';

// Dashboard imports its data directly (not via props). The two
// Docusaurus-only imports (Link, useDocusaurusContext) resolve via the
// stub aliases in vitest.config.mts, so no vi.mock is needed for them.
// The data modules are mocked with fixtures small enough that this
// test doesn't need updating whenever real grammar/listening content
// changes, same principle as GrammarIndex's fixture data.
// Each level uses distinct point ids (n5-a, n4-a, ...) rather than
// reusing the same id across levels. This matters for the
// deliberate-break-and-revert check: if two levels shared an id and a
// category got swapped, the wrong category could still happen to
// contain that id and silently produce the same count, masking the
// bug instead of catching it.
vi.mock('@site/src/data/n5-grammar', () => ({
  n5GrammarGroups: [{id: 'g', title: 'G', points: [{id: 'n5-a', title: 'A', description: '', sources: []}, {id: 'n5-b', title: 'B', description: '', sources: []}]}],
}));
vi.mock('@site/src/data/n4-grammar', () => ({
  n4GrammarGroups: [{id: 'g', title: 'G', points: [{id: 'n4-a', title: 'A', description: '', sources: []}]}],
}));
vi.mock('@site/src/data/n3-grammar', () => ({
  n3GrammarGroups: [{id: 'g', title: 'G', points: [{id: 'n3-a', title: 'A', description: '', sources: []}]}],
}));
vi.mock('@site/src/data/n2-grammar', () => ({
  n2GrammarGroups: [{id: 'g', title: 'G', points: [{id: 'n2-a', title: 'A', description: '', sources: []}]}],
}));
vi.mock('@site/src/data/n1-grammar', () => ({
  n1GrammarGroups: [{id: 'g', title: 'G', points: [{id: 'n1-a', title: 'A', description: '', sources: []}]}],
}));
vi.mock('@site/src/data/listening-reading', () => ({
  listeningReadingResources: [
    {id: 'r1', name: 'R1', description: '', url: '', level: 'absolute-beginner', kind: 'listening'},
    {id: 'r2', name: 'R2', description: '', url: '', level: 'n5', kind: 'reading'},
  ],
}));

function setupStorage(seed?: Record<string, Record<string, boolean>>) {
  const store: Record<string, string> = {};
  if (seed) {
    store['yatogaku-progress'] = JSON.stringify(seed);
  }
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  });
}

describe('Dashboard', () => {
  const originalLocalStorageDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    if (originalLocalStorageDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalLocalStorageDescriptor);
    }
  });

  it('renders correct done/total per section from persisted progress', async () => {
    setupStorage({
      grammar: {'n5-a': true, 'n5-b': true},
      'grammar-n4': {'n4-a': true},
      'listening-reading': {r1: true},
    });
    const {default: Dashboard} = await import('./index');
    render(<Dashboard />);

    expect(await screen.findByText('N5 grammar: 2 / 2')).toBeInTheDocument();
    expect(screen.getByText('N4 grammar: 1 / 1')).toBeInTheDocument();
    expect(screen.getByText('N3 grammar: 0 / 1')).toBeInTheDocument();
    expect(screen.getByText('Listening & reading: 1 / 2')).toBeInTheDocument();
  });

  it('computes a 0% progress bar width when total is 0, without dividing by zero', async () => {
    vi.doMock('@site/src/data/n5-grammar', () => ({n5GrammarGroups: []}));
    setupStorage({});
    const {default: Dashboard} = await import('./index');
    const {container} = render(<Dashboard />);
    await screen.findByText('N5 grammar: 0 / 0');
    const bars = container.querySelectorAll('[style*="width"]');
    expect(bars[0]).toHaveStyle({width: '0%'});
  });

  it('shows the unavailable note when storage is unavailable', async () => {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get(): never {
        throw new Error('storage disabled');
      },
    });
    const {default: Dashboard} = await import('./index');
    render(<Dashboard />);
    expect(
      await screen.findByText(/progress tracking isn.t available in this browser/i),
    ).toBeInTheDocument();
  });
});

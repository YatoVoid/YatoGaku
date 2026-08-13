// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import {act, render, screen, cleanup} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {useCategoryProgress, useTrackedItem} from './useProgress';

function TrackedItemProbe({category, id}: {category: string; id: string}) {
  const {checked, toggle, available} = useTrackedItem(category, id);
  return (
    <div>
      <span data-testid="checked">{String(checked)}</span>
      <span data-testid="available">{String(available)}</span>
      <button onClick={() => toggle(!checked)}>toggle</button>
    </div>
  );
}

function CategoryProgressProbe({category, ids}: {category: string; ids: string[]}) {
  const {done, total, available} = useCategoryProgress(category, ids);
  return (
    <div>
      <span data-testid="done">{done}</span>
      <span data-testid="total">{total}</span>
      <span data-testid="available">{String(available)}</span>
    </div>
  );
}

describe('useTrackedItem', () => {
  beforeEach(() => {
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
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('starts unchecked before mount effects settle, then reflects persisted state', async () => {
    localStorage.setItem('yatogaku-progress', JSON.stringify({grammar: {'copula-desu-da': true}}));
    render(<TrackedItemProbe category="grammar" id="copula-desu-da" />);
    // After the effect runs, it should reflect the persisted true value.
    await screen.findByTestId('available');
    expect(screen.getByTestId('checked')).toHaveTextContent('true');
  });

  it('toggling updates both the UI and localStorage', async () => {
    render(<TrackedItemProbe category="grammar" id="particle-wa" />);
    await screen.findByTestId('available');
    expect(screen.getByTestId('checked').textContent).toBe('false');

    await act(async () => {
      screen.getByText('toggle').click();
    });

    expect(screen.getByTestId('checked').textContent).toBe('true');
    const stored = JSON.parse(localStorage.getItem('yatogaku-progress') || '{}');
    expect(stored.grammar['particle-wa']).toBe(true);
  });
});

describe('useCategoryProgress', () => {
  beforeEach(() => {
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
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('reports accurate done/total from persisted data after mount', async () => {
    localStorage.setItem(
      'yatogaku-progress',
      JSON.stringify({grammar: {a: true, b: true, c: false}}),
    );
    render(<CategoryProgressProbe category="grammar" ids={['a', 'b', 'c', 'd']} />);
    expect(await screen.findByTestId('done')).toHaveTextContent('2');
    expect(screen.getByTestId('total')).toHaveTextContent('4');
  });
});

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';

// progress.ts keeps module-level cache state (storageAvailable,
// memoryFallback), so each test gets a fresh module instance via
// resetModules + dynamic import, otherwise scenarios would leak into
// each other through that cache.
async function freshModule() {
  vi.resetModules();
  return import('./progress');
}

describe('progress', () => {
  const originalWindow = (globalThis as {window?: unknown}).window;

  afterEach(() => {
    if (originalWindow === undefined) {
      delete (globalThis as {window?: unknown}).window;
    } else {
      (globalThis as {window?: unknown}).window = originalWindow;
    }
  });

  describe('normal localStorage', () => {
    beforeEach(() => {
      const store: Record<string, string> = {};
      (globalThis as {window?: unknown}).window = {
        localStorage: {
          getItem: (key: string) => (key in store ? store[key] : null),
          setItem: (key: string, value: string) => {
            store[key] = value;
          },
          removeItem: (key: string) => {
            delete store[key];
          },
        },
      };
    });

    it('reports storage as available', async () => {
      const mod = await freshModule();
      expect(mod.isStorageAvailable()).toBe(true);
    });

    it('round-trips isDone/setDone', async () => {
      const mod = await freshModule();
      expect(mod.isDone('grammar', 'copula-desu-da')).toBe(false);
      mod.setDone('grammar', 'copula-desu-da', true);
      expect(mod.isDone('grammar', 'copula-desu-da')).toBe(true);
      mod.setDone('grammar', 'copula-desu-da', false);
      expect(mod.isDone('grammar', 'copula-desu-da')).toBe(false);
    });

    it('computes accurate getProgress counts', async () => {
      const mod = await freshModule();
      mod.setDone('grammar', 'a', true);
      mod.setDone('grammar', 'b', true);
      mod.setDone('grammar', 'c', false);
      expect(mod.getProgress('grammar', ['a', 'b', 'c', 'd'])).toEqual({done: 2, total: 4});
    });
  });

  describe('SSR (no window at all)', () => {
    beforeEach(() => {
      delete (globalThis as {window?: unknown}).window;
    });

    it('reports storage as unavailable without throwing', async () => {
      const mod = await freshModule();
      expect(() => mod.isStorageAvailable()).not.toThrow();
      expect(mod.isStorageAvailable()).toBe(false);
    });

    it('falls back to an in-memory store that still works', async () => {
      const mod = await freshModule();
      expect(() => mod.setDone('grammar', 'x', true)).not.toThrow();
      expect(mod.isDone('grammar', 'x')).toBe(true);
      expect(mod.getProgress('grammar', ['x', 'y'])).toEqual({done: 1, total: 2});
    });
  });

  describe('window exists but localStorage getter throws (Safari private mode)', () => {
    // This is the exact bug found and fixed in key result 4: the first
    // version of isStorageAvailable() read `window.localStorage`
    // outside its try block, which crashed here.
    beforeEach(() => {
      Object.defineProperty(globalThis, 'window', {
        configurable: true,
        value: {
          get localStorage(): never {
            throw new Error('storage disabled');
          },
        },
      });
    });

    it('does not throw from isStorageAvailable and reports false', async () => {
      const mod = await freshModule();
      expect(() => mod.isStorageAvailable()).not.toThrow();
      expect(mod.isStorageAvailable()).toBe(false);
    });

    it('does not throw from setDone/isDone/getProgress, and still returns usable answers', async () => {
      const mod = await freshModule();
      expect(() => mod.setDone('grammar', 'x', true)).not.toThrow();
      expect(() => mod.isDone('grammar', 'x')).not.toThrow();
      expect(mod.isDone('grammar', 'x')).toBe(true);
      expect(() => mod.getProgress('grammar', ['x'])).not.toThrow();
    });
  });
});

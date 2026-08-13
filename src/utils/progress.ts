// Progress tracking backed by localStorage, one JSON blob under a single
// key rather than one localStorage key per item, so it's simple to
// inspect or clear later.
//
// Falls back to an in-memory store, silently, whenever localStorage is
// unreachable: during Docusaurus's Node-side prerender (no `window` at
// all), or in a real browser with storage disabled (private browsing in
// some browsers, or a user setting). Callers can check
// isStorageAvailable() to show a note, but nothing here throws either way.

const STORAGE_KEY = 'yatogaku-progress';

type ProgressData = Record<string, Record<string, boolean>>;

let memoryFallback: ProgressData = {};
let storageAvailable: boolean | null = null;

export function isStorageAvailable(): boolean {
  if (storageAvailable !== null) {
    return storageAvailable;
  }
  // Everything in this block, including the `window.localStorage`
  // property access itself, must stay inside the try: some browsers
  // (Safari in certain private-browsing modes) throw on reading the
  // `localStorage` property, not just on calling its methods.
  try {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
      storageAvailable = false;
      return false;
    }
    const testKey = `${STORAGE_KEY}-test`;
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    storageAvailable = true;
  } catch {
    storageAvailable = false;
  }
  return storageAvailable;
}

function readData(): ProgressData {
  if (!isStorageAvailable()) {
    return memoryFallback;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressData) : {};
  } catch {
    return memoryFallback;
  }
}

function writeData(data: ProgressData): void {
  if (!isStorageAvailable()) {
    memoryFallback = data;
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    memoryFallback = data;
  }
}

export function isDone(category: string, id: string): boolean {
  const data = readData();
  return Boolean(data[category]?.[id]);
}

export function setDone(category: string, id: string, done: boolean): void {
  const data = readData();
  if (!data[category]) {
    data[category] = {};
  }
  data[category][id] = done;
  writeData(data);
}

export function getProgress(category: string, totalIds: string[]): {done: number; total: number} {
  const data = readData();
  const categoryData = data[category] ?? {};
  const done = totalIds.filter((id) => categoryData[id]).length;
  return {done, total: totalIds.length};
}

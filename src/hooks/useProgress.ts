import {useEffect, useState} from 'react';
import {getProgress, isDone, isStorageAvailable, setDone} from '@site/src/utils/progress';

// Starts unchecked/unavailable on every render (including the server
// prerender, where there is no storage to read) and only applies the
// real persisted value after mount. Reading storage during the initial
// render would make the server-rendered HTML and the first client
// render disagree, which React reports as a hydration mismatch.
export function useTrackedItem(category: string, id: string): {
  checked: boolean;
  toggle: (next: boolean) => void;
  available: boolean;
} {
  const [checked, setChecked] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setAvailable(isStorageAvailable());
    setChecked(isDone(category, id));
  }, [category, id]);

  function toggle(next: boolean) {
    setChecked(next);
    setDone(category, id, next);
  }

  return {checked, toggle, available};
}

export function useCategoryProgress(category: string, totalIds: string[]): {
  done: number;
  total: number;
  available: boolean;
} {
  const [progress, setProgress] = useState({done: 0, total: totalIds.length});
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setAvailable(isStorageAvailable());
    setProgress(getProgress(category, totalIds));
    // Re-read on focus, so the dashboard picks up changes made on
    // another tab/page without needing a shared in-memory store.
    function onFocus() {
      setProgress(getProgress(category, totalIds));
    }
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, totalIds.join(',')]);

  return {...progress, available};
}

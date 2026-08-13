import { describe, it, expect, vi } from 'vitest';
import { showToast, toastStore } from '$lib/stores/toast';
import { Toast } from '$lib/components/ui/toast';

describe('Toast Store', () => {
  it('showToast sets store value', () => {
    let value: any = null;
    const unsub = toastStore.subscribe(v => { value = v; });
    showToast('Test message', 'success');
    expect(value).toEqual({ message: 'Test message', type: 'success' });
    unsub();
  });

  it('showToast defaults to success type', () => {
    let value: any = null;
    const unsub = toastStore.subscribe(v => { value = v; });
    showToast('Hello');
    expect(value?.type).toBe('success');
    unsub();
  });

  it('Toast component exports correctly', () => {
    expect(Toast).toBeDefined();
  });
});

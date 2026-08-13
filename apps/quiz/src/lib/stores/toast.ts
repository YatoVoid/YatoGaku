import { writable } from 'svelte/store';

export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}

export const toastStore = writable<ToastMessage | null>(null);

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'success') {
  toastStore.set({ message, type });
  setTimeout(() => toastStore.set(null), 3000);
}

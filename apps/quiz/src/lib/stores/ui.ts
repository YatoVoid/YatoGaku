/**
 * UI State Store
 * Manages UI state (dark mode, modals, keyboard visibility)
 */

import { writable } from 'svelte/store';
import type { UIState } from '$lib/types';
import { browser } from '$app/environment';

// Load dark mode preference from localStorage
function loadDarkMode(): boolean {
  if (!browser) return false;

  try {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

const initialState: UIState = {
  darkMode: loadDarkMode(),
  showVirtualKeyboard: false,
  activeModal: null,
  breadcrumbs: []
};

export const uiStore = writable<UIState>(initialState);

// Dark mode toggle with localStorage sync
export function toggleDarkMode() {
  uiStore.update(state => {
    const newDarkMode = !state.darkMode;
    if (browser) {
      localStorage.setItem('darkMode', String(newDarkMode));
      document.documentElement.classList.toggle('dark', newDarkMode);
    }
    return {
      ...state,
      darkMode: newDarkMode
    };
  });
}

// Modal management
export function openModal(modalId: string) {
  uiStore.update(state => ({
    ...state,
    activeModal: modalId
  }));
}

export function closeModal() {
  uiStore.update(state => ({
    ...state,
    activeModal: null
  }));
}

// Virtual keyboard
export function toggleVirtualKeyboard() {
  uiStore.update(state => ({
    ...state,
    showVirtualKeyboard: !state.showVirtualKeyboard
  }));
}

export function showVirtualKeyboard() {
  uiStore.update(state => ({
    ...state,
    showVirtualKeyboard: true
  }));
}

export function hideVirtualKeyboard() {
  uiStore.update(state => ({
    ...state,
    showVirtualKeyboard: false
  }));
}

// Breadcrumbs
export function updateBreadcrumbs(crumbs: string[]) {
  uiStore.update(state => ({
    ...state,
    breadcrumbs: crumbs
  }));
}

// Initialize dark mode on mount
if (browser) {
  const darkMode = loadDarkMode();
  document.documentElement.classList.toggle('dark', darkMode);
}

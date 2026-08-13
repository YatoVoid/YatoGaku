/**
 * Unit tests for ui store
 * Tests UI state management (dark mode, modals, keyboard, breadcrumbs)
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { get } from 'svelte/store';
import {
  uiStore,
  toggleDarkMode,
  openModal,
  closeModal,
  toggleVirtualKeyboard,
  showVirtualKeyboard,
  hideVirtualKeyboard,
  updateBreadcrumbs
} from '$lib/stores/ui';

describe('ui store', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset document class list
    document.documentElement.className = '';
  });

  describe('uiStore', () => {
    it('should have initial state', () => {
      const state = get(uiStore);

      expect(state.darkMode).toBeDefined();
      expect(typeof state.darkMode).toBe('boolean');
      expect(state.showVirtualKeyboard).toBe(false);
      expect(state.activeModal).toBeNull();
      expect(state.breadcrumbs).toEqual([]);
    });

    it('should have boolean darkMode value', () => {
      const state = get(uiStore);

      expect(typeof state.darkMode).toBe('boolean');
    });
  });

  describe('toggleDarkMode action', () => {
    it('should toggle dark mode from false to true', () => {
      // Set initial state to false
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleDarkMode();

      expect(get(uiStore).darkMode).toBe(true);
    });

    it('should toggle dark mode from true to false', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleDarkMode();

      expect(get(uiStore).darkMode).toBe(false);
    });

    it('should save to localStorage', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleDarkMode();

      expect(localStorage.getItem('darkMode')).toBe('true');
    });

    it('should update document class list', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleDarkMode();

      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should remove dark class when toggling off', () => {
      document.documentElement.classList.add('dark');

      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleDarkMode();

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: true,
        activeModal: 'test-modal',
        breadcrumbs: ['Home', 'Lesson']
      });

      toggleDarkMode();

      const state = get(uiStore);

      expect(state.showVirtualKeyboard).toBe(true);
      expect(state.activeModal).toBe('test-modal');
      expect(state.breadcrumbs).toEqual(['Home', 'Lesson']);
    });
  });

  describe('openModal action', () => {
    it('should set activeModal', () => {
      openModal('settings-modal');

      expect(get(uiStore).activeModal).toBe('settings-modal');
    });

    it('should replace previous modal', () => {
      openModal('modal-1');
      openModal('modal-2');

      expect(get(uiStore).activeModal).toBe('modal-2');
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: true,
        activeModal: null,
        breadcrumbs: ['Test']
      });

      openModal('test-modal');

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.showVirtualKeyboard).toBe(true);
      expect(state.breadcrumbs).toEqual(['Test']);
    });
  });

  describe('closeModal action', () => {
    it('should set activeModal to null', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: 'test-modal',
        breadcrumbs: []
      });

      closeModal();

      expect(get(uiStore).activeModal).toBeNull();
    });

    it('should work when no modal is open', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      closeModal();

      expect(get(uiStore).activeModal).toBeNull();
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: true,
        activeModal: 'test-modal',
        breadcrumbs: ['Home']
      });

      closeModal();

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.showVirtualKeyboard).toBe(true);
      expect(state.breadcrumbs).toEqual(['Home']);
    });
  });

  describe('toggleVirtualKeyboard action', () => {
    it('should toggle from false to true', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      toggleVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(true);
    });

    it('should toggle from true to false', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: true,
        activeModal: null,
        breadcrumbs: []
      });

      toggleVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(false);
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: false,
        activeModal: 'modal',
        breadcrumbs: ['Test']
      });

      toggleVirtualKeyboard();

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.activeModal).toBe('modal');
      expect(state.breadcrumbs).toEqual(['Test']);
    });
  });

  describe('showVirtualKeyboard action', () => {
    it('should set showVirtualKeyboard to true', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      showVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(true);
    });

    it('should remain true if already true', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: true,
        activeModal: null,
        breadcrumbs: []
      });

      showVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(true);
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: false,
        activeModal: 'modal',
        breadcrumbs: ['Test']
      });

      showVirtualKeyboard();

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.activeModal).toBe('modal');
      expect(state.breadcrumbs).toEqual(['Test']);
    });
  });

  describe('hideVirtualKeyboard action', () => {
    it('should set showVirtualKeyboard to false', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: true,
        activeModal: null,
        breadcrumbs: []
      });

      hideVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(false);
    });

    it('should remain false if already false', () => {
      uiStore.set({
        darkMode: false,
        showVirtualKeyboard: false,
        activeModal: null,
        breadcrumbs: []
      });

      hideVirtualKeyboard();

      expect(get(uiStore).showVirtualKeyboard).toBe(false);
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: true,
        activeModal: 'modal',
        breadcrumbs: ['Test']
      });

      hideVirtualKeyboard();

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.activeModal).toBe('modal');
      expect(state.breadcrumbs).toEqual(['Test']);
    });
  });

  describe('updateBreadcrumbs action', () => {
    it('should update breadcrumbs', () => {
      updateBreadcrumbs(['Home', 'Lessons', 'Lesson 1']);

      expect(get(uiStore).breadcrumbs).toEqual(['Home', 'Lessons', 'Lesson 1']);
    });

    it('should replace previous breadcrumbs', () => {
      updateBreadcrumbs(['First']);
      updateBreadcrumbs(['Second', 'Third']);

      expect(get(uiStore).breadcrumbs).toEqual(['Second', 'Third']);
    });

    it('should handle empty array', () => {
      updateBreadcrumbs(['Home']);
      updateBreadcrumbs([]);

      expect(get(uiStore).breadcrumbs).toEqual([]);
    });

    it('should not change other state', () => {
      uiStore.set({
        darkMode: true,
        showVirtualKeyboard: true,
        activeModal: 'modal',
        breadcrumbs: []
      });

      updateBreadcrumbs(['Test']);

      const state = get(uiStore);

      expect(state.darkMode).toBe(true);
      expect(state.showVirtualKeyboard).toBe(true);
      expect(state.activeModal).toBe('modal');
    });
  });

  describe('keyboard and modal interactions', () => {
    it('should allow independent state changes', () => {
      openModal('test-modal');
      showVirtualKeyboard();

      const state = get(uiStore);

      expect(state.activeModal).toBe('test-modal');
      expect(state.showVirtualKeyboard).toBe(true);
    });

    it('should allow closing modal without affecting keyboard', () => {
      openModal('modal');
      showVirtualKeyboard();
      closeModal();

      const state = get(uiStore);

      expect(state.activeModal).toBeNull();
      expect(state.showVirtualKeyboard).toBe(true);
    });

    it('should allow hiding keyboard without affecting modal', () => {
      openModal('modal');
      showVirtualKeyboard();
      hideVirtualKeyboard();

      const state = get(uiStore);

      expect(state.activeModal).toBe('modal');
      expect(state.showVirtualKeyboard).toBe(false);
    });
  });

  describe('dark mode and other features interaction', () => {
    it('should allow all features to work together', () => {
      const initialDarkMode = get(uiStore).darkMode;

      toggleDarkMode();
      openModal('settings');
      showVirtualKeyboard();
      updateBreadcrumbs(['Home', 'Settings']);

      const state = get(uiStore);

      expect(state.darkMode).toBe(!initialDarkMode); // Toggled from initial
      expect(state.activeModal).toBe('settings');
      expect(state.showVirtualKeyboard).toBe(true);
      expect(state.breadcrumbs).toEqual(['Home', 'Settings']);
    });
  });
});

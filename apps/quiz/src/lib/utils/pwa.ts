/**
 * PWA Utilities
 * Service worker registration and PWA install prompt handling
 */

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

import { writable } from 'svelte/store';
import { base } from '$app/paths';

let deferredPrompt: BeforeInstallPromptEvent | null = null;

// Stores for PWA state
export const updateAvailable = writable(false);
export const canInstall = writable(false);

/**
 * Register service worker for PWA offline support
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register(`${base}/sw.js`, {
      scope: `${base}/`
    });

    // Check for updates periodically
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000); // Check every hour

    // Listen for new service worker
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (!newWorker) return;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          updateAvailable.set(true);
        }
      });
    });

    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
}

/**
 * Unregister service worker (useful for development)
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const result = await registration.unregister();
    return result;
  } catch (error) {
    console.error('Service Worker unregistration failed:', error);
    return false;
  }
}

/**
 * Setup PWA install prompt
 */
export function setupInstallPrompt() {
  if (typeof window === 'undefined') return;

  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    canInstall.set(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    canInstall.set(false);
  });
}

/**
 * Show PWA install prompt
 */
export async function showInstallPrompt(): Promise<'accepted' | 'dismissed' | null> {
  if (!deferredPrompt) {
    return null;
  }

  try {
    await deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;
    return choiceResult.outcome;
  } catch (error) {
    console.error('Install prompt failed:', error);
    return null;
  }
}

/**
 * Check if app is installed as PWA
 */
export function isPWA(): boolean {
  if (typeof window === 'undefined') return false;

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes('android-app://')
  );
}

/**
 * Check if install prompt is available
 */
export function canInstallPWA(): boolean {
  return deferredPrompt !== null;
}

/**
 * Apply pending update — skip waiting and reload
 */
export async function applyUpdate(): Promise<void> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  const registration = await navigator.serviceWorker.ready;
  if (registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
  updateAvailable.set(false);
  window.location.reload();
}

/**
 * Clear all caches (useful for debugging)
 */
export async function clearAllCaches(): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return;
  }

  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
  } catch (error) {
    console.error('Failed to clear caches:', error);
  }
}

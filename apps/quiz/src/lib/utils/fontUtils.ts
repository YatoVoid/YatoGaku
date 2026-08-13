/**
 * Font Utility Functions
 * Manages Japanese font selection and loading
 */

import { browser } from '$app/environment';

const FONT_KEY = 'smart_quiz_font';

export interface FontOption {
  id: string;
  name: string;
  nameJa: string;
  family: string;
  googleFontsUrl?: string;
  preview: string;
}

const FONTS: FontOption[] = [
  {
    id: 'system',
    name: 'System Default',
    nameJa: 'システムフォント',
    family: '"Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
    preview: 'あいうえお 漢字'
  },
  {
    id: 'noto-sans-jp',
    name: 'Noto Sans JP',
    nameJa: 'ノトサンス',
    family: '"Noto Sans JP", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
    preview: 'あいうえお 漢字'
  },
  {
    id: 'noto-serif-jp',
    name: 'Noto Serif JP (Mincho)',
    nameJa: '明朝体',
    family: '"Noto Serif JP", serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&display=swap',
    preview: 'あいうえお 漢字'
  },
  {
    id: 'zen-maru-gothic',
    name: 'Zen Maru Gothic (Rounded)',
    nameJa: '丸ゴシック',
    family: '"Zen Maru Gothic", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap',
    preview: 'あいうえお 漢字'
  }
];

/**
 * Get all available font options
 */
export function getAvailableFonts(): FontOption[] {
  return FONTS;
}

/**
 * Get currently selected font ID
 */
export function getCurrentFont(): string {
  if (!browser) return 'system';
  try {
    return localStorage.getItem(FONT_KEY) || 'system';
  } catch {
    return 'system';
  }
}

/**
 * Set font selection
 */
export function setFont(fontId: string): void {
  if (!browser) return;
  localStorage.setItem(FONT_KEY, fontId);
  applyFont(fontId);
}

/**
 * Get CSS font-family value for a font ID
 */
export function getFontCSSValue(fontId: string): string {
  const font = FONTS.find(f => f.id === fontId);
  return font?.family || FONTS[0].family;
}

/**
 * Apply font to document and load Google Font if needed
 */
export function applyFont(fontId: string): void {
  if (!browser) return;

  const font = FONTS.find(f => f.id === fontId);
  if (!font) return;

  // Load Google Font stylesheet if needed
  if (font.googleFontsUrl) {
    const existingLink = document.querySelector(`link[data-font="${fontId}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = font.googleFontsUrl;
      link.setAttribute('data-font', fontId);
      document.head.appendChild(link);
    }
  }

  // Set CSS variable
  document.documentElement.style.setProperty('--font-japanese', font.family);
}

/**
 * Initialize font on app load
 */
export function initFont(): void {
  if (!browser) return;
  const fontId = getCurrentFont();
  if (fontId !== 'system') {
    applyFont(fontId);
  }
}

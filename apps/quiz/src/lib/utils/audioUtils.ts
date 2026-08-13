/**
 * Audio utilities for speech synthesis
 */

function playAudio(text: string, lang: string): void {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

export function playJapaneseAudio(text: string): void {
  playAudio(text, 'ja-JP');
}

export function playChineseAudio(text: string): void {
  playAudio(text, 'zh-CN');
}

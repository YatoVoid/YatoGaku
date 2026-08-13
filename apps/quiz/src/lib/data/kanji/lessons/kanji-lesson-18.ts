// Minna no Nihongo Kanji — Lesson 18: Emotions & States
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_18_DATA: KanjiLessonData = {
  lessonNumber: 18,
  title: '感情・状態 (Cảm xúc & Trạng thái)',
  kanji: [
    {
      character: '好',
      onyomi: ['コウ'],
      kunyomi: ['す.く', 'この.む'],
      strokeCount: 6,
      jlpt: 4,
      vietnamese: 'hảo',
      english: 'like, fond of',
      examples: [
        { word: '好き', kana: 'すき', meaning: 'like, fond of', vietnamese: 'thích' },
        { word: '好む', kana: 'このむ', meaning: 'to prefer', vietnamese: 'ưa thích' },
        { word: '好物', kana: 'こうぶつ', meaning: 'favorite food', vietnamese: 'món yêu thích' }
      ]
    },
    {
      character: '嫌',
      onyomi: ['ケン', 'ゲン'],
      kunyomi: ['きら.う', 'いや'],
      strokeCount: 13,
      jlpt: 4,
      vietnamese: 'hiềm',
      english: 'dislike, hate',
      examples: [
        { word: '嫌い', kana: 'きらい', meaning: 'dislike, hate', vietnamese: 'ghét' },
        { word: '嫌う', kana: 'きらう', meaning: 'to dislike', vietnamese: 'ghét bỏ' },
        { word: '機嫌', kana: 'きげん', meaning: 'mood, humor', vietnamese: 'tâm trạng' }
      ]
    },
    {
      character: '楽',
      onyomi: ['ガク', 'ラク'],
      kunyomi: ['たの.しい', 'たの.しむ'],
      strokeCount: 13,
      jlpt: 4,
      vietnamese: 'lạc',
      english: 'enjoyable, music',
      examples: [
        { word: '楽しい', kana: 'たのしい', meaning: 'fun, enjoyable', vietnamese: 'vui vẻ' },
        { word: '音楽', kana: 'おんがく', meaning: 'music', vietnamese: 'âm nhạc' },
        { word: '楽な', kana: 'らくな', meaning: 'comfortable, easy', vietnamese: 'thoải mái' }
      ]
    },
    {
      character: '忙',
      onyomi: ['ボウ'],
      kunyomi: ['いそが.しい'],
      strokeCount: 6,
      jlpt: 4,
      vietnamese: 'mang',
      english: 'busy',
      examples: [
        { word: '忙しい', kana: 'いそがしい', meaning: 'busy', vietnamese: 'bận rộn' },
        { word: '多忙', kana: 'たぼう', meaning: 'very busy', vietnamese: 'đa mang, rất bận' },
        { word: '忙しさ', kana: 'いそがしさ', meaning: 'busyness', vietnamese: 'sự bận rộn' }
      ]
    },
    {
      character: '暑',
      onyomi: ['ショ'],
      kunyomi: ['あつ.い'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'thử',
      english: 'hot (weather)',
      examples: [
        { word: '暑い', kana: 'あつい', meaning: 'hot (weather)', vietnamese: 'nóng (thời tiết)' },
        { word: '暑さ', kana: 'あつさ', meaning: 'heat', vietnamese: 'cái nóng' },
        { word: '猛暑', kana: 'もうしょ', meaning: 'intense heat', vietnamese: 'nóng dữ dội' }
      ]
    },
    {
      character: '寒',
      onyomi: ['カン'],
      kunyomi: ['さむ.い'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'hàn',
      english: 'cold (weather)',
      examples: [
        { word: '寒い', kana: 'さむい', meaning: 'cold (weather)', vietnamese: 'lạnh (thời tiết)' },
        { word: '寒さ', kana: 'さむさ', meaning: 'coldness', vietnamese: 'cái lạnh' },
        { word: '寒気', kana: 'さむけ', meaning: 'chill, cold air', vietnamese: 'hàn khí, ớn lạnh' }
      ]
    },
    {
      character: '暖',
      onyomi: ['ダン'],
      kunyomi: ['あたた.かい', 'あたた.める'],
      strokeCount: 13,
      jlpt: 4,
      vietnamese: 'noãn',
      english: 'warm',
      examples: [
        { word: '暖かい', kana: 'あたたかい', meaning: 'warm', vietnamese: 'ấm áp' },
        { word: '暖房', kana: 'だんぼう', meaning: 'heating', vietnamese: 'sưởi ấm' },
        { word: '温暖', kana: 'おんだん', meaning: 'warm (climate)', vietnamese: 'ôn noãn, ấm áp' }
      ]
    },
    {
      character: '涼',
      onyomi: ['リョウ'],
      kunyomi: ['すず.しい', 'すず.む'],
      strokeCount: 11,
      jlpt: 4,
      vietnamese: 'lương',
      english: 'cool, refreshing',
      examples: [
        { word: '涼しい', kana: 'すずしい', meaning: 'cool, refreshing', vietnamese: 'mát mẻ' },
        { word: '涼む', kana: 'すずむ', meaning: 'to cool off', vietnamese: 'hóng mát' },
        { word: '清涼', kana: 'せいりょう', meaning: 'cool, refreshing', vietnamese: 'thanh lương, mát lạnh' }
      ]
    },
    {
      character: '強',
      onyomi: ['キョウ', 'ゴウ'],
      kunyomi: ['つよ.い', 'つよ.める'],
      strokeCount: 11,
      jlpt: 4,
      vietnamese: 'cường',
      english: 'strong',
      examples: [
        { word: '強い', kana: 'つよい', meaning: 'strong', vietnamese: 'mạnh, khỏe' },
        { word: '勉強', kana: 'べんきょう', meaning: 'study', vietnamese: 'học tập' },
        { word: '強化', kana: 'きょうか', meaning: 'strengthening', vietnamese: 'cường hóa, tăng cường' }
      ]
    },
    {
      character: '弱',
      onyomi: ['ジャク'],
      kunyomi: ['よわ.い', 'よわ.る'],
      strokeCount: 10,
      jlpt: 4,
      vietnamese: 'nhược',
      english: 'weak',
      examples: [
        { word: '弱い', kana: 'よわい', meaning: 'weak', vietnamese: 'yếu' },
        { word: '弱点', kana: 'じゃくてん', meaning: 'weak point', vietnamese: 'nhược điểm' },
        { word: '弱る', kana: 'よわる', meaning: 'to weaken', vietnamese: 'suy yếu' }
      ]
    }
  ]
};

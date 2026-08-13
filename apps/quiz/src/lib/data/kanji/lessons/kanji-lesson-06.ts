// Minna no Nihongo Kanji — Lesson 06: Daily Life & Weather
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_06_DATA: KanjiLessonData = {
  lessonNumber: 6,
  title: '日常・天気 (Cuộc sống hàng ngày & Thời tiết)',
  kanji: [
    {
      character: '天',
      onyomi: ['テン'],
      kunyomi: ['あめ', 'あま'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'thiên',
      english: 'heaven, sky',
      examples: [
        { word: '天気', kana: 'てんき', meaning: 'weather', vietnamese: 'thời tiết' },
        { word: '天国', kana: 'てんごく', meaning: 'heaven, paradise', vietnamese: 'thiên đường' },
        { word: '天才', kana: 'てんさい', meaning: 'genius', vietnamese: 'thiên tài' }
      ]
    },
    {
      character: '気',
      onyomi: ['キ', 'ケ'],
      kunyomi: [],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'khí',
      english: 'spirit, air, mood',
      examples: [
        { word: '天気', kana: 'てんき', meaning: 'weather', vietnamese: 'thời tiết' },
        { word: '元気', kana: 'げんき', meaning: 'energetic, healthy', vietnamese: 'khỏe mạnh' },
        { word: '気持ち', kana: 'きもち', meaning: 'feeling', vietnamese: 'cảm giác' }
      ]
    },
    {
      character: '雨',
      onyomi: ['ウ'],
      kunyomi: ['あめ', 'あま'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'vũ',
      english: 'rain',
      examples: [
        { word: '雨', kana: 'あめ', meaning: 'rain', vietnamese: 'mưa' },
        { word: '大雨', kana: 'おおあめ', meaning: 'heavy rain', vietnamese: 'mưa lớn' },
        { word: '梅雨', kana: 'つゆ', meaning: 'rainy season', vietnamese: 'mùa mưa' }
      ]
    },
    {
      character: '雪',
      onyomi: ['セツ'],
      kunyomi: ['ゆき'],
      strokeCount: 11,
      jlpt: 4,
      vietnamese: 'tuyết',
      english: 'snow',
      examples: [
        { word: '雪', kana: 'ゆき', meaning: 'snow', vietnamese: 'tuyết' },
        { word: '大雪', kana: 'おおゆき', meaning: 'heavy snow', vietnamese: 'tuyết lớn' },
        { word: '雪国', kana: 'ゆきぐに', meaning: 'snow country', vietnamese: 'xứ tuyết' }
      ]
    },
    {
      character: '風',
      onyomi: ['フウ', 'フ'],
      kunyomi: ['かぜ', 'かざ'],
      strokeCount: 9,
      jlpt: 4,
      vietnamese: 'phong',
      english: 'wind, style',
      examples: [
        { word: '風', kana: 'かぜ', meaning: 'wind', vietnamese: 'gió' },
        { word: '台風', kana: 'たいふう', meaning: 'typhoon', vietnamese: 'bão' },
        { word: '風邪', kana: 'かぜ', meaning: 'cold (illness)', vietnamese: 'cảm lạnh' }
      ]
    },
    {
      character: '電',
      onyomi: ['デン'],
      kunyomi: [],
      strokeCount: 13,
      jlpt: 5,
      vietnamese: 'điện',
      english: 'electricity',
      examples: [
        { word: '電話', kana: 'でんわ', meaning: 'telephone', vietnamese: 'điện thoại' },
        { word: '電車', kana: 'でんしゃ', meaning: 'train', vietnamese: 'tàu điện' },
        { word: '電気', kana: 'でんき', meaning: 'electricity, light', vietnamese: 'điện' }
      ]
    },
    {
      character: '話',
      onyomi: ['ワ'],
      kunyomi: ['はな.す', 'はなし'],
      strokeCount: 13,
      jlpt: 5,
      vietnamese: 'thoại',
      english: 'talk, story',
      examples: [
        { word: '電話', kana: 'でんわ', meaning: 'telephone', vietnamese: 'điện thoại' },
        { word: '話す', kana: 'はなす', meaning: 'to speak', vietnamese: 'nói' },
        { word: '会話', kana: 'かいわ', meaning: 'conversation', vietnamese: 'hội thoại' }
      ]
    },
    {
      character: '車',
      onyomi: ['シャ'],
      kunyomi: ['くるま'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'xa',
      english: 'car, vehicle',
      examples: [
        { word: '車', kana: 'くるま', meaning: 'car', vietnamese: 'xe ô tô' },
        { word: '電車', kana: 'でんしゃ', meaning: 'train', vietnamese: 'tàu điện' },
        { word: '自転車', kana: 'じてんしゃ', meaning: 'bicycle', vietnamese: 'xe đạp' }
      ]
    },
    {
      character: '道',
      onyomi: ['ドウ', 'トウ'],
      kunyomi: ['みち'],
      strokeCount: 12,
      jlpt: 5,
      vietnamese: 'đạo',
      english: 'road, way, path',
      examples: [
        { word: '道', kana: 'みち', meaning: 'road, street', vietnamese: 'đường' },
        { word: '道路', kana: 'どうろ', meaning: 'road, highway', vietnamese: 'đường sá' },
        { word: '柔道', kana: 'じゅうどう', meaning: 'judo', vietnamese: 'nhu đạo' }
      ]
    },
    {
      character: '駅',
      onyomi: ['エキ'],
      kunyomi: [],
      strokeCount: 14,
      jlpt: 5,
      vietnamese: 'dịch',
      english: 'station',
      examples: [
        { word: '駅', kana: 'えき', meaning: 'station', vietnamese: 'ga' },
        { word: '駅前', kana: 'えきまえ', meaning: 'in front of the station', vietnamese: 'trước ga' },
        { word: '駅員', kana: 'えきいん', meaning: 'station staff', vietnamese: 'nhân viên ga' }
      ]
    }
  ]
};

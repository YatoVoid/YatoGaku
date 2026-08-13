// Minna no Nihongo Kanji — Lesson 08: Adjectives
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_08_DATA: KanjiLessonData = {
  lessonNumber: 8,
  title: '形容詞 (Tính từ)',
  kanji: [
    {
      character: '多',
      onyomi: ['タ'],
      kunyomi: ['おお.い'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'đa',
      english: 'many, much',
      examples: [
        { word: '多い', kana: 'おおい', meaning: 'many, much', vietnamese: 'nhiều' },
        { word: '多分', kana: 'たぶん', meaning: 'probably', vietnamese: 'có lẽ' },
        { word: '多数', kana: 'たすう', meaning: 'majority', vietnamese: 'đa số' }
      ]
    },
    {
      character: '少',
      onyomi: ['ショウ'],
      kunyomi: ['すく.ない', 'すこ.し'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'thiểu',
      english: 'few, little',
      examples: [
        { word: '少ない', kana: 'すくない', meaning: 'few, little', vietnamese: 'ít' },
        { word: '少し', kana: 'すこし', meaning: 'a little', vietnamese: 'một chút' },
        { word: '少年', kana: 'しょうねん', meaning: 'boy, youth', vietnamese: 'thiếu niên' }
      ]
    },
    {
      character: '早',
      onyomi: ['ソウ', 'サッ'],
      kunyomi: ['はや.い', 'はや.まる'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'tảo',
      english: 'early, fast',
      examples: [
        { word: '早い', kana: 'はやい', meaning: 'early, fast', vietnamese: 'sớm, nhanh' },
        { word: '早朝', kana: 'そうちょう', meaning: 'early morning', vietnamese: 'sáng sớm' },
        { word: '早速', kana: 'さっそく', meaning: 'at once, immediately', vietnamese: 'ngay lập tức' }
      ]
    },
    {
      character: '遅',
      onyomi: ['チ'],
      kunyomi: ['おく.れる', 'おそ.い'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'trì',
      english: 'late, slow',
      examples: [
        { word: '遅い', kana: 'おそい', meaning: 'late, slow', vietnamese: 'muộn, chậm' },
        { word: '遅れる', kana: 'おくれる', meaning: 'to be late', vietnamese: 'bị muộn' },
        { word: '遅刻', kana: 'ちこく', meaning: 'tardiness', vietnamese: 'trễ giờ' }
      ]
    },
    {
      character: '近',
      onyomi: ['キン'],
      kunyomi: ['ちか.い'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'cận',
      english: 'near, close',
      examples: [
        { word: '近い', kana: 'ちかい', meaning: 'near, close', vietnamese: 'gần' },
        { word: '近く', kana: 'ちかく', meaning: 'nearby', vietnamese: 'gần đây' },
        { word: '最近', kana: 'さいきん', meaning: 'recently', vietnamese: 'gần đây, dạo này' }
      ]
    },
    {
      character: '遠',
      onyomi: ['エン', 'オン'],
      kunyomi: ['とお.い'],
      strokeCount: 13,
      jlpt: 5,
      vietnamese: 'viễn',
      english: 'far, distant',
      examples: [
        { word: '遠い', kana: 'とおい', meaning: 'far, distant', vietnamese: 'xa' },
        { word: '遠足', kana: 'えんそく', meaning: 'excursion, field trip', vietnamese: 'dã ngoại' },
        { word: '永遠', kana: 'えいえん', meaning: 'eternity', vietnamese: 'vĩnh viễn' }
      ]
    },
    {
      character: '広',
      onyomi: ['コウ'],
      kunyomi: ['ひろ.い', 'ひろ.がる'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'quảng',
      english: 'wide, broad',
      examples: [
        { word: '広い', kana: 'ひろい', meaning: 'wide, spacious', vietnamese: 'rộng' },
        { word: '広場', kana: 'ひろば', meaning: 'plaza, open space', vietnamese: 'quảng trường' },
        { word: '広告', kana: 'こうこく', meaning: 'advertisement', vietnamese: 'quảng cáo' }
      ]
    },
    {
      character: '狭',
      onyomi: ['キョウ'],
      kunyomi: ['せま.い'],
      strokeCount: 9,
      jlpt: 4,
      vietnamese: 'hiệp',
      english: 'narrow, cramped',
      examples: [
        { word: '狭い', kana: 'せまい', meaning: 'narrow, cramped', vietnamese: 'chật, hẹp' },
        { word: '狭める', kana: 'せばめる', meaning: 'to narrow', vietnamese: 'thu hẹp' },
        { word: '狭量', kana: 'きょうりょう', meaning: 'narrow-minded', vietnamese: 'hẹp hòi' }
      ]
    },
    {
      character: '重',
      onyomi: ['ジュウ', 'チョウ'],
      kunyomi: ['おも.い', 'かさ.ねる'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'trọng',
      english: 'heavy, important',
      examples: [
        { word: '重い', kana: 'おもい', meaning: 'heavy', vietnamese: 'nặng' },
        { word: '重要', kana: 'じゅうよう', meaning: 'important', vietnamese: 'trọng yếu' },
        { word: '体重', kana: 'たいじゅう', meaning: 'body weight', vietnamese: 'thể trọng' }
      ]
    },
    {
      character: '軽',
      onyomi: ['ケイ'],
      kunyomi: ['かる.い', 'かろ.やか'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'khinh',
      english: 'light (weight)',
      examples: [
        { word: '軽い', kana: 'かるい', meaning: 'light (weight)', vietnamese: 'nhẹ' },
        { word: '軽食', kana: 'けいしょく', meaning: 'light meal, snack', vietnamese: 'bữa ăn nhẹ' },
        { word: '手軽', kana: 'てがる', meaning: 'easy, simple', vietnamese: 'đơn giản' }
      ]
    }
  ]
};

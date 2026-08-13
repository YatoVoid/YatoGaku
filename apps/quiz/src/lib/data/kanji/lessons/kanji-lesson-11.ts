// Minna no Nihongo Kanji — Lesson 11: Counting & Quantities
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_11_DATA: KanjiLessonData = {
  lessonNumber: 11,
  title: '数量・助数詞 (Số lượng & Trợ số từ)',
  kanji: [
    {
      character: '年',
      onyomi: ['ネン'],
      kunyomi: ['とし'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'niên',
      english: 'year',
      examples: [
        { word: '今年', kana: 'ことし', meaning: 'this year', vietnamese: 'năm nay' },
        { word: '去年', kana: 'きょねん', meaning: 'last year', vietnamese: 'năm ngoái' },
        { word: '一年', kana: 'いちねん', meaning: 'one year', vietnamese: 'một năm' }
      ]
    },
    {
      character: '回',
      onyomi: ['カイ'],
      kunyomi: ['まわ.る', 'まわ.す'],
      strokeCount: 6,
      jlpt: 4,
      vietnamese: 'hồi',
      english: 'times, turn around',
      examples: [
        { word: '一回', kana: 'いっかい', meaning: 'one time', vietnamese: 'một lần' },
        { word: '今回', kana: 'こんかい', meaning: 'this time', vietnamese: 'lần này' },
        { word: '回る', kana: 'まわる', meaning: 'to turn, to rotate', vietnamese: 'quay, xoay' }
      ]
    },
    {
      character: '番',
      onyomi: ['バン'],
      kunyomi: [],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'phiên',
      english: 'number, order, turn',
      examples: [
        { word: '番号', kana: 'ばんごう', meaning: 'number', vietnamese: 'số hiệu' },
        { word: '一番', kana: 'いちばん', meaning: 'number one, most', vietnamese: 'số một, nhất' },
        { word: '交番', kana: 'こうばん', meaning: 'police box', vietnamese: 'trạm cảnh sát' }
      ]
    },
    {
      character: '度',
      onyomi: ['ド', 'タク'],
      kunyomi: ['たび'],
      strokeCount: 9,
      jlpt: 4,
      vietnamese: 'độ',
      english: 'degree, time, occurrence',
      examples: [
        { word: '一度', kana: 'いちど', meaning: 'once', vietnamese: 'một lần' },
        { word: '温度', kana: 'おんど', meaning: 'temperature', vietnamese: 'nhiệt độ' },
        { word: '今度', kana: 'こんど', meaning: 'this time, next time', vietnamese: 'lần này, lần tới' }
      ]
    },
    {
      character: '個',
      onyomi: ['コ'],
      kunyomi: [],
      strokeCount: 10,
      jlpt: 4,
      vietnamese: 'cá',
      english: 'counter for small objects',
      examples: [
        { word: '一個', kana: 'いっこ', meaning: 'one (piece)', vietnamese: 'một cái' },
        { word: '三個', kana: 'さんこ', meaning: 'three (pieces)', vietnamese: 'ba cái' },
        { word: '個人', kana: 'こじん', meaning: 'individual', vietnamese: 'cá nhân' }
      ]
    },
    {
      character: '台',
      onyomi: ['ダイ', 'タイ'],
      kunyomi: [],
      strokeCount: 5,
      jlpt: 4,
      vietnamese: 'đài',
      english: 'counter for machines, platform',
      examples: [
        { word: '一台', kana: 'いちだい', meaning: 'one (machine/vehicle)', vietnamese: 'một chiếc (máy/xe)' },
        { word: '台風', kana: 'たいふう', meaning: 'typhoon', vietnamese: 'bão' },
        { word: '台所', kana: 'だいどころ', meaning: 'kitchen', vietnamese: 'nhà bếp' }
      ]
    },
    {
      character: '枚',
      onyomi: ['マイ'],
      kunyomi: [],
      strokeCount: 8,
      jlpt: 4,
      vietnamese: 'mai',
      english: 'counter for flat objects',
      examples: [
        { word: '一枚', kana: 'いちまい', meaning: 'one (flat thing)', vietnamese: 'một tờ/tấm' },
        { word: '二枚', kana: 'にまい', meaning: 'two (flat things)', vietnamese: 'hai tờ/tấm' },
        { word: '枚数', kana: 'まいすう', meaning: 'number of flat things', vietnamese: 'số lượng (tờ/tấm)' }
      ]
    },
    {
      character: '冊',
      onyomi: ['サツ'],
      kunyomi: [],
      strokeCount: 5,
      jlpt: 4,
      vietnamese: 'sách',
      english: 'counter for books',
      examples: [
        { word: '一冊', kana: 'いっさつ', meaning: 'one (book)', vietnamese: 'một cuốn (sách)' },
        { word: '三冊', kana: 'さんさつ', meaning: 'three (books)', vietnamese: 'ba cuốn (sách)' },
        { word: '冊子', kana: 'さっし', meaning: 'booklet', vietnamese: 'sách nhỏ, tập san' }
      ]
    },
    {
      character: '匹',
      onyomi: ['ヒキ'],
      kunyomi: [],
      strokeCount: 4,
      jlpt: 4,
      vietnamese: 'thất',
      english: 'counter for small animals',
      examples: [
        { word: '一匹', kana: 'いっぴき', meaning: 'one (small animal)', vietnamese: 'một con' },
        { word: '三匹', kana: 'さんびき', meaning: 'three (small animals)', vietnamese: 'ba con' },
        { word: '二匹', kana: 'にひき', meaning: 'two (small animals)', vietnamese: 'hai con' }
      ]
    },
    {
      character: '杯',
      onyomi: ['ハイ'],
      kunyomi: ['さかずき'],
      strokeCount: 8,
      jlpt: 4,
      vietnamese: 'bôi',
      english: 'counter for cups, glasses',
      examples: [
        { word: '一杯', kana: 'いっぱい', meaning: 'one cup, full', vietnamese: 'một ly, đầy' },
        { word: '乾杯', kana: 'かんぱい', meaning: 'cheers, toast', vietnamese: 'cạn ly' },
        { word: '三杯', kana: 'さんばい', meaning: 'three cups', vietnamese: 'ba ly' }
      ]
    }
  ]
};

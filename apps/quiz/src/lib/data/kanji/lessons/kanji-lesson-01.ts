// Minna no Nihongo Kanji — Lesson 01: Numbers & Basic Kanji
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_01_DATA: KanjiLessonData = {
  lessonNumber: 1,
  title: '数字・基本 (Numbers & Basics)',
  kanji: [
    {
      character: '一',
      onyomi: ['イチ', 'イツ'],
      kunyomi: ['ひと.つ'],
      strokeCount: 1,
      jlpt: 5,
      vietnamese: 'nhất',
      english: 'one',
      examples: [
        { word: '一つ', kana: 'ひとつ', meaning: 'one (thing)', vietnamese: 'một (cái)' },
        { word: '一人', kana: 'ひとり', meaning: 'one person', vietnamese: 'một người' },
        { word: '一月', kana: 'いちがつ', meaning: 'January', vietnamese: 'tháng 1' }
      ]
    },
    {
      character: '二',
      onyomi: ['ニ'],
      kunyomi: ['ふた.つ'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'nhị',
      english: 'two',
      examples: [
        { word: '二つ', kana: 'ふたつ', meaning: 'two (things)', vietnamese: 'hai (cái)' },
        { word: '二人', kana: 'ふたり', meaning: 'two people', vietnamese: 'hai người' },
        { word: '二月', kana: 'にがつ', meaning: 'February', vietnamese: 'tháng 2' }
      ]
    },
    {
      character: '三',
      onyomi: ['サン'],
      kunyomi: ['み.つ', 'みっ.つ'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'tam',
      english: 'three',
      examples: [
        { word: '三つ', kana: 'みっつ', meaning: 'three (things)', vietnamese: 'ba (cái)' },
        { word: '三月', kana: 'さんがつ', meaning: 'March', vietnamese: 'tháng 3' },
        { word: '三人', kana: 'さんにん', meaning: 'three people', vietnamese: 'ba người' }
      ]
    },
    {
      character: '四',
      onyomi: ['シ'],
      kunyomi: ['よ.つ', 'よっ.つ', 'よん'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'tứ',
      english: 'four',
      examples: [
        { word: '四つ', kana: 'よっつ', meaning: 'four (things)', vietnamese: 'bốn (cái)' },
        { word: '四月', kana: 'しがつ', meaning: 'April', vietnamese: 'tháng 4' },
        { word: '四人', kana: 'よにん', meaning: 'four people', vietnamese: 'bốn người' }
      ]
    },
    {
      character: '五',
      onyomi: ['ゴ'],
      kunyomi: ['いつ.つ'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'ngũ',
      english: 'five',
      examples: [
        { word: '五つ', kana: 'いつつ', meaning: 'five (things)', vietnamese: 'năm (cái)' },
        { word: '五月', kana: 'ごがつ', meaning: 'May', vietnamese: 'tháng 5' },
        { word: '五人', kana: 'ごにん', meaning: 'five people', vietnamese: 'năm người' }
      ]
    },
    {
      character: '六',
      onyomi: ['ロク'],
      kunyomi: ['む.つ', 'むっ.つ'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'lục',
      english: 'six',
      examples: [
        { word: '六つ', kana: 'むっつ', meaning: 'six (things)', vietnamese: 'sáu (cái)' },
        { word: '六月', kana: 'ろくがつ', meaning: 'June', vietnamese: 'tháng 6' },
        { word: '六日', kana: 'むいか', meaning: 'sixth day', vietnamese: 'ngày 6' }
      ]
    },
    {
      character: '七',
      onyomi: ['シチ'],
      kunyomi: ['なな.つ', 'なな'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'thất',
      english: 'seven',
      examples: [
        { word: '七つ', kana: 'ななつ', meaning: 'seven (things)', vietnamese: 'bảy (cái)' },
        { word: '七月', kana: 'しちがつ', meaning: 'July', vietnamese: 'tháng 7' },
        { word: '七日', kana: 'なのか', meaning: 'seventh day', vietnamese: 'ngày 7' }
      ]
    },
    {
      character: '八',
      onyomi: ['ハチ'],
      kunyomi: ['や.つ', 'やっ.つ'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'bát',
      english: 'eight',
      examples: [
        { word: '八つ', kana: 'やっつ', meaning: 'eight (things)', vietnamese: 'tám (cái)' },
        { word: '八月', kana: 'はちがつ', meaning: 'August', vietnamese: 'tháng 8' },
        { word: '八日', kana: 'ようか', meaning: 'eighth day', vietnamese: 'ngày 8' }
      ]
    },
    {
      character: '九',
      onyomi: ['キュウ', 'ク'],
      kunyomi: ['ここの.つ'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'cửu',
      english: 'nine',
      examples: [
        { word: '九つ', kana: 'ここのつ', meaning: 'nine (things)', vietnamese: 'chín (cái)' },
        { word: '九月', kana: 'くがつ', meaning: 'September', vietnamese: 'tháng 9' },
        { word: '九日', kana: 'ここのか', meaning: 'ninth day', vietnamese: 'ngày 9' }
      ]
    },
    {
      character: '十',
      onyomi: ['ジュウ', 'ジッ'],
      kunyomi: ['とお'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'thập',
      english: 'ten',
      examples: [
        { word: '十', kana: 'じゅう', meaning: 'ten', vietnamese: 'mười' },
        { word: '十月', kana: 'じゅうがつ', meaning: 'October', vietnamese: 'tháng 10' },
        { word: '二十', kana: 'にじゅう', meaning: 'twenty', vietnamese: 'hai mươi' }
      ]
    },
    {
      character: '百',
      onyomi: ['ヒャク'],
      kunyomi: [],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'bách',
      english: 'hundred',
      examples: [
        { word: '百', kana: 'ひゃく', meaning: 'hundred', vietnamese: 'trăm' },
        { word: '三百', kana: 'さんびゃく', meaning: 'three hundred', vietnamese: 'ba trăm' },
        { word: '百円', kana: 'ひゃくえん', meaning: '100 yen', vietnamese: '100 yên' }
      ]
    },
    {
      character: '千',
      onyomi: ['セン'],
      kunyomi: ['ち'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'thiên',
      english: 'thousand',
      examples: [
        { word: '千', kana: 'せん', meaning: 'thousand', vietnamese: 'nghìn' },
        { word: '三千', kana: 'さんぜん', meaning: 'three thousand', vietnamese: 'ba nghìn' },
        { word: '千円', kana: 'せんえん', meaning: '1000 yen', vietnamese: '1000 yên' }
      ]
    },
    {
      character: '万',
      onyomi: ['マン', 'バン'],
      kunyomi: [],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'vạn',
      english: 'ten thousand',
      examples: [
        { word: '一万', kana: 'いちまん', meaning: 'ten thousand', vietnamese: 'mười nghìn' },
        { word: '万円', kana: 'まんえん', meaning: '10,000 yen', vietnamese: '10.000 yên' },
        { word: '万年筆', kana: 'まんねんひつ', meaning: 'fountain pen', vietnamese: 'bút máy' }
      ]
    },
    {
      character: '円',
      onyomi: ['エン'],
      kunyomi: ['まる.い'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'viên',
      english: 'circle, yen',
      examples: [
        { word: '円', kana: 'えん', meaning: 'yen', vietnamese: 'yên (tiền)' },
        { word: '五百円', kana: 'ごひゃくえん', meaning: '500 yen', vietnamese: '500 yên' },
        { word: '円い', kana: 'まるい', meaning: 'round', vietnamese: 'tròn' }
      ]
    }
  ]
};

// Minna no Nihongo Kanji — Lesson 04: Actions & Directions
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_04_DATA: KanjiLessonData = {
  lessonNumber: 4,
  title: '動作・方向 (Actions & Directions)',
  kanji: [
    {
      character: '行',
      onyomi: ['コウ', 'ギョウ'],
      kunyomi: ['い.く', 'おこな.う'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'hành',
      english: 'go, carry out',
      examples: [
        { word: '行く', kana: 'いく', meaning: 'to go', vietnamese: 'đi' },
        { word: '旅行', kana: 'りょこう', meaning: 'travel', vietnamese: 'du lịch' },
        { word: '銀行', kana: 'ぎんこう', meaning: 'bank', vietnamese: 'ngân hàng' }
      ]
    },
    {
      character: '来',
      onyomi: ['ライ'],
      kunyomi: ['く.る', 'きた.る'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'lai',
      english: 'come',
      examples: [
        { word: '来る', kana: 'くる', meaning: 'to come', vietnamese: 'đến' },
        { word: '来週', kana: 'らいしゅう', meaning: 'next week', vietnamese: 'tuần sau' },
        { word: '来月', kana: 'らいげつ', meaning: 'next month', vietnamese: 'tháng sau' }
      ]
    },
    {
      character: '帰',
      onyomi: ['キ'],
      kunyomi: ['かえ.る'],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'quy',
      english: 'return home',
      examples: [
        { word: '帰る', kana: 'かえる', meaning: 'to return home', vietnamese: 'về nhà' },
        { word: '帰国', kana: 'きこく', meaning: 'return to home country', vietnamese: 'về nước' },
        { word: '帰り', kana: 'かえり', meaning: 'return (trip)', vietnamese: 'đường về' }
      ]
    },
    {
      character: '食',
      onyomi: ['ショク'],
      kunyomi: ['た.べる'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'thực',
      english: 'eat, food',
      examples: [
        { word: '食べる', kana: 'たべる', meaning: 'to eat', vietnamese: 'ăn' },
        { word: '食堂', kana: 'しょくどう', meaning: 'cafeteria', vietnamese: 'nhà ăn' },
        { word: '食事', kana: 'しょくじ', meaning: 'meal', vietnamese: 'bữa ăn' }
      ]
    },
    {
      character: '飲',
      onyomi: ['イン'],
      kunyomi: ['の.む'],
      strokeCount: 12,
      jlpt: 5,
      vietnamese: 'ẩm',
      english: 'drink',
      examples: [
        { word: '飲む', kana: 'のむ', meaning: 'to drink', vietnamese: 'uống' },
        { word: '飲み物', kana: 'のみもの', meaning: 'drink, beverage', vietnamese: 'đồ uống' },
        { word: '飲料', kana: 'いんりょう', meaning: 'beverage', vietnamese: 'thức uống' }
      ]
    },
    {
      character: '見',
      onyomi: ['ケン'],
      kunyomi: ['み.る', 'み.える'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'kiến',
      english: 'see, look',
      examples: [
        { word: '見る', kana: 'みる', meaning: 'to see, look', vietnamese: 'xem, nhìn' },
        { word: '花見', kana: 'はなみ', meaning: 'cherry blossom viewing', vietnamese: 'ngắm hoa anh đào' },
        { word: '意見', kana: 'いけん', meaning: 'opinion', vietnamese: 'ý kiến' }
      ]
    },
    {
      character: '聞',
      onyomi: ['ブン', 'モン'],
      kunyomi: ['き.く', 'き.こえる'],
      strokeCount: 14,
      jlpt: 5,
      vietnamese: 'văn',
      english: 'hear, ask, listen',
      examples: [
        { word: '聞く', kana: 'きく', meaning: 'to listen, to ask', vietnamese: 'nghe, hỏi' },
        { word: '新聞', kana: 'しんぶん', meaning: 'newspaper', vietnamese: 'báo' },
        { word: '聞こえる', kana: 'きこえる', meaning: 'to be heard', vietnamese: 'nghe thấy' }
      ]
    },
    {
      character: '読',
      onyomi: ['ドク', 'トク'],
      kunyomi: ['よ.む'],
      strokeCount: 14,
      jlpt: 5,
      vietnamese: 'đọc',
      english: 'read',
      examples: [
        { word: '読む', kana: 'よむ', meaning: 'to read', vietnamese: 'đọc' },
        { word: '読書', kana: 'どくしょ', meaning: 'reading (books)', vietnamese: 'đọc sách' },
        { word: '読み方', kana: 'よみかた', meaning: 'way of reading', vietnamese: 'cách đọc' }
      ]
    },
    {
      character: '書',
      onyomi: ['ショ'],
      kunyomi: ['か.く'],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'thư',
      english: 'write, book',
      examples: [
        { word: '書く', kana: 'かく', meaning: 'to write', vietnamese: 'viết' },
        { word: '辞書', kana: 'じしょ', meaning: 'dictionary', vietnamese: 'từ điển' },
        { word: '図書館', kana: 'としょかん', meaning: 'library', vietnamese: 'thư viện' }
      ]
    },
    {
      character: '買',
      onyomi: ['バイ'],
      kunyomi: ['か.う'],
      strokeCount: 12,
      jlpt: 5,
      vietnamese: 'mãi',
      english: 'buy',
      examples: [
        { word: '買う', kana: 'かう', meaning: 'to buy', vietnamese: 'mua' },
        { word: '買い物', kana: 'かいもの', meaning: 'shopping', vietnamese: 'mua sắm' },
        { word: '売買', kana: 'ばいばい', meaning: 'buying and selling', vietnamese: 'mua bán' }
      ]
    }
  ]
};

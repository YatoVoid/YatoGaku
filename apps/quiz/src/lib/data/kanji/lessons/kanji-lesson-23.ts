// Minna no Nihongo Kanji — Lesson 23: Colors & Shapes
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_23_DATA: KanjiLessonData = {
  lessonNumber: 23,
  title: '色・形 (Màu sắc & Hình dạng)',
  kanji: [
    {
      character: '色',
      onyomi: ['ショク', 'シキ'],
      kunyomi: ['いろ'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'sắc',
      english: 'color',
      examples: [
        { word: '色', kana: 'いろ', meaning: 'color', vietnamese: 'màu sắc' },
        { word: '景色', kana: 'けしき', meaning: 'scenery', vietnamese: 'cảnh sắc' },
        { word: '色々', kana: 'いろいろ', meaning: 'various', vietnamese: 'nhiều loại' }
      ]
    },
    {
      character: '白',
      onyomi: ['ハク', 'ビャク'],
      kunyomi: ['しろ', 'しら', 'しろ.い'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'bạch',
      english: 'white',
      examples: [
        { word: '白い', kana: 'しろい', meaning: 'white', vietnamese: 'trắng' },
        { word: '白紙', kana: 'はくし', meaning: 'blank paper', vietnamese: 'bạch chỉ' },
        { word: '白鳥', kana: 'はくちょう', meaning: 'swan', vietnamese: 'thiên nga' }
      ]
    },
    {
      character: '黒',
      onyomi: ['コク'],
      kunyomi: ['くろ', 'くろ.い'],
      strokeCount: 11,
      jlpt: 5,
      vietnamese: 'hắc',
      english: 'black',
      examples: [
        { word: '黒い', kana: 'くろい', meaning: 'black', vietnamese: 'đen' },
        { word: '黒板', kana: 'こくばん', meaning: 'blackboard', vietnamese: 'bảng đen' },
        { word: '黒字', kana: 'くろじ', meaning: 'profit (in the black)', vietnamese: 'lãi, thặng dư' }
      ]
    },
    {
      character: '赤',
      onyomi: ['セキ', 'シャク'],
      kunyomi: ['あか', 'あか.い'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'xích',
      english: 'red',
      examples: [
        { word: '赤い', kana: 'あかい', meaning: 'red', vietnamese: 'đỏ' },
        { word: '赤ちゃん', kana: 'あかちゃん', meaning: 'baby', vietnamese: 'em bé' },
        { word: '赤字', kana: 'あかじ', meaning: 'deficit (in the red)', vietnamese: 'lỗ, thâm hụt' }
      ]
    },
    {
      character: '青',
      onyomi: ['セイ', 'ショウ'],
      kunyomi: ['あお', 'あお.い'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'thanh',
      english: 'blue, green',
      examples: [
        { word: '青い', kana: 'あおい', meaning: 'blue, green', vietnamese: 'xanh' },
        { word: '青年', kana: 'せいねん', meaning: 'youth, young man', vietnamese: 'thanh niên' },
        { word: '青空', kana: 'あおぞら', meaning: 'blue sky', vietnamese: 'bầu trời xanh' }
      ]
    },
    {
      character: '丸',
      onyomi: ['ガン'],
      kunyomi: ['まる', 'まる.い'],
      strokeCount: 3,
      jlpt: 4,
      vietnamese: 'hoàn',
      english: 'round, circle',
      examples: [
        { word: '丸い', kana: 'まるい', meaning: 'round, circular', vietnamese: 'tròn' },
        { word: '丸', kana: 'まる', meaning: 'circle', vietnamese: 'hình tròn' },
        { word: '日の丸', kana: 'ひのまる', meaning: 'Japanese flag', vietnamese: 'quốc kỳ Nhật' }
      ]
    },
    {
      character: '角',
      onyomi: ['カク'],
      kunyomi: ['かど', 'つの'],
      strokeCount: 7,
      jlpt: 4,
      vietnamese: 'giác',
      english: 'angle, corner, horn',
      examples: [
        { word: '角', kana: 'かど', meaning: 'corner', vietnamese: 'góc' },
        { word: '三角', kana: 'さんかく', meaning: 'triangle', vietnamese: 'tam giác' },
        { word: '四角', kana: 'しかく', meaning: 'square, rectangle', vietnamese: 'tứ giác' }
      ]
    },
    {
      character: '線',
      onyomi: ['セン'],
      kunyomi: [],
      strokeCount: 15,
      jlpt: 4,
      vietnamese: 'tuyến',
      english: 'line, wire',
      examples: [
        { word: '線', kana: 'せん', meaning: 'line', vietnamese: 'đường, tuyến' },
        { word: '新幹線', kana: 'しんかんせん', meaning: 'bullet train', vietnamese: 'tàu cao tốc' },
        { word: '直線', kana: 'ちょくせん', meaning: 'straight line', vietnamese: 'đường thẳng' }
      ]
    },
    {
      character: '点',
      onyomi: ['テン'],
      kunyomi: ['つ.ける', 'つ.く'],
      strokeCount: 9,
      jlpt: 4,
      vietnamese: 'điểm',
      english: 'point, dot, mark',
      examples: [
        { word: '点', kana: 'てん', meaning: 'point, dot', vietnamese: 'điểm' },
        { word: '百点', kana: 'ひゃくてん', meaning: '100 points, perfect score', vietnamese: 'trăm điểm' },
        { word: '欠点', kana: 'けってん', meaning: 'flaw, defect', vietnamese: 'khuyết điểm' }
      ]
    },
    {
      character: '形',
      onyomi: ['ケイ', 'ギョウ'],
      kunyomi: ['かたち', 'かた'],
      strokeCount: 7,
      jlpt: 4,
      vietnamese: 'hình',
      english: 'shape, form',
      examples: [
        { word: '形', kana: 'かたち', meaning: 'shape, form', vietnamese: 'hình dạng' },
        { word: '人形', kana: 'にんぎょう', meaning: 'doll', vietnamese: 'búp bê' },
        { word: '三角形', kana: 'さんかくけい', meaning: 'triangle (shape)', vietnamese: 'hình tam giác' }
      ]
    }
  ]
};

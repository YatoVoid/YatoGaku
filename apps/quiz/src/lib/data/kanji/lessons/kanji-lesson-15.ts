// Minna no Nihongo Kanji — Lesson 15: Position & Direction
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_15_DATA: KanjiLessonData = {
  lessonNumber: 15,
  title: '位置・方向 (Vị trí & Phương hướng)',
  kanji: [
    {
      character: '上',
      onyomi: ['ジョウ', 'ショウ'],
      kunyomi: ['うえ', 'あ.がる', 'のぼ.る'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'thượng',
      english: 'up, above',
      examples: [
        { word: '上', kana: 'うえ', meaning: 'above, on top', vietnamese: 'trên' },
        { word: '上手', kana: 'じょうず', meaning: 'skillful', vietnamese: 'giỏi, khéo' },
        { word: '上がる', kana: 'あがる', meaning: 'to rise, to go up', vietnamese: 'lên, tăng' }
      ]
    },
    {
      character: '下',
      onyomi: ['カ', 'ゲ'],
      kunyomi: ['した', 'さ.がる', 'くだ.る'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'hạ',
      english: 'down, below',
      examples: [
        { word: '下', kana: 'した', meaning: 'below, under', vietnamese: 'dưới' },
        { word: '下手', kana: 'へた', meaning: 'unskillful', vietnamese: 'kém, vụng' },
        { word: '地下鉄', kana: 'ちかてつ', meaning: 'subway', vietnamese: 'tàu điện ngầm' }
      ]
    },
    {
      character: '中',
      onyomi: ['チュウ'],
      kunyomi: ['なか'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'trung',
      english: 'middle, inside',
      examples: [
        { word: '中', kana: 'なか', meaning: 'inside, middle', vietnamese: 'bên trong, giữa' },
        { word: '中国', kana: 'ちゅうごく', meaning: 'China', vietnamese: 'Trung Quốc' },
        { word: '一日中', kana: 'いちにちじゅう', meaning: 'all day long', vietnamese: 'cả ngày' }
      ]
    },
    {
      character: '外',
      onyomi: ['ガイ', 'ゲ'],
      kunyomi: ['そと', 'はず.す', 'ほか'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'ngoại',
      english: 'outside',
      examples: [
        { word: '外', kana: 'そと', meaning: 'outside', vietnamese: 'bên ngoài' },
        { word: '外国', kana: 'がいこく', meaning: 'foreign country', vietnamese: 'ngoại quốc' },
        { word: '外出', kana: 'がいしゅつ', meaning: 'going out', vietnamese: 'ra ngoài' }
      ]
    },
    {
      character: '右',
      onyomi: ['ウ', 'ユウ'],
      kunyomi: ['みぎ'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'hữu',
      english: 'right',
      examples: [
        { word: '右', kana: 'みぎ', meaning: 'right', vietnamese: 'bên phải' },
        { word: '右手', kana: 'みぎて', meaning: 'right hand', vietnamese: 'tay phải' },
        { word: '右側', kana: 'みぎがわ', meaning: 'right side', vietnamese: 'phía bên phải' }
      ]
    },
    {
      character: '左',
      onyomi: ['サ'],
      kunyomi: ['ひだり'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'tả',
      english: 'left',
      examples: [
        { word: '左', kana: 'ひだり', meaning: 'left', vietnamese: 'bên trái' },
        { word: '左手', kana: 'ひだりて', meaning: 'left hand', vietnamese: 'tay trái' },
        { word: '左右', kana: 'さゆう', meaning: 'left and right', vietnamese: 'tả hữu, trái phải' }
      ]
    },
    {
      character: '北',
      onyomi: ['ホク'],
      kunyomi: ['きた'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'bắc',
      english: 'north',
      examples: [
        { word: '北', kana: 'きた', meaning: 'north', vietnamese: 'phía bắc' },
        { word: '北海道', kana: 'ほっかいどう', meaning: 'Hokkaido', vietnamese: 'Hokkaido' },
        { word: '北口', kana: 'きたぐち', meaning: 'north exit', vietnamese: 'cửa phía bắc' }
      ]
    },
    {
      character: '南',
      onyomi: ['ナン', 'ナ'],
      kunyomi: ['みなみ'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'nam',
      english: 'south',
      examples: [
        { word: '南', kana: 'みなみ', meaning: 'south', vietnamese: 'phía nam' },
        { word: '南口', kana: 'みなみぐち', meaning: 'south exit', vietnamese: 'cửa phía nam' },
        { word: '南米', kana: 'なんべい', meaning: 'South America', vietnamese: 'Nam Mỹ' }
      ]
    },
    {
      character: '東',
      onyomi: ['トウ'],
      kunyomi: ['ひがし'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'đông',
      english: 'east',
      examples: [
        { word: '東', kana: 'ひがし', meaning: 'east', vietnamese: 'phía đông' },
        { word: '東京', kana: 'とうきょう', meaning: 'Tokyo', vietnamese: 'Đông Kinh (Tokyo)' },
        { word: '東口', kana: 'ひがしぐち', meaning: 'east exit', vietnamese: 'cửa phía đông' }
      ]
    },
    {
      character: '西',
      onyomi: ['セイ', 'サイ'],
      kunyomi: ['にし'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'tây',
      english: 'west',
      examples: [
        { word: '西', kana: 'にし', meaning: 'west', vietnamese: 'phía tây' },
        { word: '西口', kana: 'にしぐち', meaning: 'west exit', vietnamese: 'cửa phía tây' },
        { word: '東西', kana: 'とうざい', meaning: 'east and west', vietnamese: 'đông tây' }
      ]
    }
  ]
};

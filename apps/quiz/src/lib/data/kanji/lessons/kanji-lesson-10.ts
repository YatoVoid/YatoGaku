// Minna no Nihongo Kanji — Lesson 10: Places & Buildings
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_10_DATA: KanjiLessonData = {
  lessonNumber: 10,
  title: '場所・建物 (Nơi chốn & Toà nhà)',
  kanji: [
    {
      character: '店',
      onyomi: ['テン'],
      kunyomi: ['みせ'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'điếm',
      english: 'shop, store',
      examples: [
        { word: '店', kana: 'みせ', meaning: 'shop, store', vietnamese: 'cửa hàng' },
        { word: '喫茶店', kana: 'きっさてん', meaning: 'coffee shop', vietnamese: 'quán cà phê' },
        { word: '店員', kana: 'てんいん', meaning: 'shop clerk', vietnamese: 'nhân viên cửa hàng' }
      ]
    },
    {
      character: '病',
      onyomi: ['ビョウ', 'ヘイ'],
      kunyomi: ['や.む', 'やまい'],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'bệnh',
      english: 'sick, illness',
      examples: [
        { word: '病気', kana: 'びょうき', meaning: 'illness, sickness', vietnamese: 'bệnh' },
        { word: '病院', kana: 'びょういん', meaning: 'hospital', vietnamese: 'bệnh viện' },
        { word: '病人', kana: 'びょうにん', meaning: 'sick person', vietnamese: 'bệnh nhân' }
      ]
    },
    {
      character: '院',
      onyomi: ['イン'],
      kunyomi: [],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'viện',
      english: 'institute, temple',
      examples: [
        { word: '病院', kana: 'びょういん', meaning: 'hospital', vietnamese: 'bệnh viện' },
        { word: '大学院', kana: 'だいがくいん', meaning: 'graduate school', vietnamese: 'sau đại học' },
        { word: '入院', kana: 'にゅういん', meaning: 'hospitalization', vietnamese: 'nhập viện' }
      ]
    },
    {
      character: '図',
      onyomi: ['ズ', 'ト'],
      kunyomi: ['はか.る'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'đồ',
      english: 'diagram, figure',
      examples: [
        { word: '図書館', kana: 'としょかん', meaning: 'library', vietnamese: 'thư viện' },
        { word: '地図', kana: 'ちず', meaning: 'map', vietnamese: 'bản đồ' },
        { word: '図画', kana: 'ずが', meaning: 'drawing, picture', vietnamese: 'đồ họa' }
      ]
    },
    {
      character: '館',
      onyomi: ['カン'],
      kunyomi: ['やかた'],
      strokeCount: 16,
      jlpt: 5,
      vietnamese: 'quán',
      english: 'building, hall',
      examples: [
        { word: '図書館', kana: 'としょかん', meaning: 'library', vietnamese: 'thư viện' },
        { word: '映画館', kana: 'えいがかん', meaning: 'movie theater', vietnamese: 'rạp chiếu phim' },
        { word: '大使館', kana: 'たいしかん', meaning: 'embassy', vietnamese: 'đại sứ quán' }
      ]
    },
    {
      character: '室',
      onyomi: ['シツ'],
      kunyomi: ['むろ'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'thất',
      english: 'room',
      examples: [
        { word: '教室', kana: 'きょうしつ', meaning: 'classroom', vietnamese: 'phòng học' },
        { word: '部屋', kana: 'へや', meaning: 'room', vietnamese: 'phòng' },
        { word: '会議室', kana: 'かいぎしつ', meaning: 'conference room', vietnamese: 'phòng họp' }
      ]
    },
    {
      character: '場',
      onyomi: ['ジョウ'],
      kunyomi: ['ば'],
      strokeCount: 12,
      jlpt: 5,
      vietnamese: 'trường',
      english: 'place, location',
      examples: [
        { word: '場所', kana: 'ばしょ', meaning: 'place, location', vietnamese: 'nơi chốn' },
        { word: '駐車場', kana: 'ちゅうしゃじょう', meaning: 'parking lot', vietnamese: 'bãi đỗ xe' },
        { word: '工場', kana: 'こうじょう', meaning: 'factory', vietnamese: 'công trường' }
      ]
    },
    {
      character: '所',
      onyomi: ['ショ'],
      kunyomi: ['ところ'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'sở',
      english: 'place, spot',
      examples: [
        { word: '場所', kana: 'ばしょ', meaning: 'place, location', vietnamese: 'nơi chốn' },
        { word: '住所', kana: 'じゅうしょ', meaning: 'address', vietnamese: 'địa chỉ' },
        { word: '台所', kana: 'だいどころ', meaning: 'kitchen', vietnamese: 'nhà bếp' }
      ]
    },
    {
      character: '地',
      onyomi: ['チ', 'ジ'],
      kunyomi: [],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'địa',
      english: 'ground, earth',
      examples: [
        { word: '地図', kana: 'ちず', meaning: 'map', vietnamese: 'bản đồ' },
        { word: '地下鉄', kana: 'ちかてつ', meaning: 'subway', vietnamese: 'tàu điện ngầm' },
        { word: '地震', kana: 'じしん', meaning: 'earthquake', vietnamese: 'động đất' }
      ]
    },
    {
      character: '鉄',
      onyomi: ['テツ'],
      kunyomi: [],
      strokeCount: 13,
      jlpt: 4,
      vietnamese: 'thiết',
      english: 'iron, steel',
      examples: [
        { word: '地下鉄', kana: 'ちかてつ', meaning: 'subway', vietnamese: 'tàu điện ngầm' },
        { word: '鉄道', kana: 'てつどう', meaning: 'railway', vietnamese: 'đường sắt' },
        { word: '私鉄', kana: 'してつ', meaning: 'private railway', vietnamese: 'đường sắt tư nhân' }
      ]
    }
  ]
};

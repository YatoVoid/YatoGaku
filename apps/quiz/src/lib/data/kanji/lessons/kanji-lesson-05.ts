// Minna no Nihongo Kanji — Lesson 05: Places & Adjectives
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_05_DATA: KanjiLessonData = {
  lessonNumber: 5,
  title: '場所・形容詞 (Places & Adjectives)',
  kanji: [
    {
      character: '大',
      onyomi: ['ダイ', 'タイ'],
      kunyomi: ['おお.きい'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'đại',
      english: 'big, large',
      examples: [
        { word: '大きい', kana: 'おおきい', meaning: 'big', vietnamese: 'to, lớn' },
        { word: '大学', kana: 'だいがく', meaning: 'university', vietnamese: 'đại học' },
        { word: '大人', kana: 'おとな', meaning: 'adult', vietnamese: 'người lớn' }
      ]
    },
    {
      character: '小',
      onyomi: ['ショウ'],
      kunyomi: ['ちい.さい', 'こ', 'お'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'tiểu',
      english: 'small, little',
      examples: [
        { word: '小さい', kana: 'ちいさい', meaning: 'small', vietnamese: 'nhỏ' },
        { word: '小学校', kana: 'しょうがっこう', meaning: 'elementary school', vietnamese: 'trường tiểu học' },
        { word: '小説', kana: 'しょうせつ', meaning: 'novel', vietnamese: 'tiểu thuyết' }
      ]
    },
    {
      character: '高',
      onyomi: ['コウ'],
      kunyomi: ['たか.い'],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'cao',
      english: 'tall, high, expensive',
      examples: [
        { word: '高い', kana: 'たかい', meaning: 'tall, expensive', vietnamese: 'cao, đắt' },
        { word: '高校', kana: 'こうこう', meaning: 'high school', vietnamese: 'trường cấp 3' },
        { word: '最高', kana: 'さいこう', meaning: 'the best, highest', vietnamese: 'tuyệt nhất' }
      ]
    },
    {
      character: '安',
      onyomi: ['アン'],
      kunyomi: ['やす.い'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'an',
      english: 'cheap, peaceful',
      examples: [
        { word: '安い', kana: 'やすい', meaning: 'cheap', vietnamese: 'rẻ' },
        { word: '安心', kana: 'あんしん', meaning: 'relief, peace of mind', vietnamese: 'yên tâm' },
        { word: '安全', kana: 'あんぜん', meaning: 'safety', vietnamese: 'an toàn' }
      ]
    },
    {
      character: '新',
      onyomi: ['シン'],
      kunyomi: ['あたら.しい', 'あら.た'],
      strokeCount: 13,
      jlpt: 5,
      vietnamese: 'tân',
      english: 'new',
      examples: [
        { word: '新しい', kana: 'あたらしい', meaning: 'new', vietnamese: 'mới' },
        { word: '新聞', kana: 'しんぶん', meaning: 'newspaper', vietnamese: 'báo' },
        { word: '新幹線', kana: 'しんかんせん', meaning: 'bullet train', vietnamese: 'tàu cao tốc' }
      ]
    },
    {
      character: '古',
      onyomi: ['コ'],
      kunyomi: ['ふる.い'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'cổ',
      english: 'old (things)',
      examples: [
        { word: '古い', kana: 'ふるい', meaning: 'old (not person)', vietnamese: 'cũ' },
        { word: '中古', kana: 'ちゅうこ', meaning: 'secondhand', vietnamese: 'đồ cũ' },
        { word: '古典', kana: 'こてん', meaning: 'classic', vietnamese: 'cổ điển' }
      ]
    },
    {
      character: '長',
      onyomi: ['チョウ'],
      kunyomi: ['なが.い'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'trường',
      english: 'long, leader',
      examples: [
        { word: '長い', kana: 'ながい', meaning: 'long', vietnamese: 'dài' },
        { word: '社長', kana: 'しゃちょう', meaning: 'company president', vietnamese: 'giám đốc' },
        { word: '校長', kana: 'こうちょう', meaning: 'principal', vietnamese: 'hiệu trưởng' }
      ]
    },
    {
      character: '会',
      onyomi: ['カイ'],
      kunyomi: ['あ.う'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'hội',
      english: 'meet, association',
      examples: [
        { word: '会う', kana: 'あう', meaning: 'to meet', vietnamese: 'gặp' },
        { word: '会社', kana: 'かいしゃ', meaning: 'company', vietnamese: 'công ty' },
        { word: '会議', kana: 'かいぎ', meaning: 'meeting', vietnamese: 'cuộc họp' }
      ]
    },
    {
      character: '社',
      onyomi: ['シャ'],
      kunyomi: ['やしろ'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'xã',
      english: 'company, shrine',
      examples: [
        { word: '会社', kana: 'かいしゃ', meaning: 'company', vietnamese: 'công ty' },
        { word: '社員', kana: 'しゃいん', meaning: 'company employee', vietnamese: 'nhân viên' },
        { word: '神社', kana: 'じんじゃ', meaning: 'Shinto shrine', vietnamese: 'đền thờ' }
      ]
    },
    {
      character: '校',
      onyomi: ['コウ'],
      kunyomi: [],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'hiệu',
      english: 'school',
      examples: [
        { word: '学校', kana: 'がっこう', meaning: 'school', vietnamese: 'trường học' },
        { word: '高校', kana: 'こうこう', meaning: 'high school', vietnamese: 'trường cấp 3' },
        { word: '校長', kana: 'こうちょう', meaning: 'principal', vietnamese: 'hiệu trưởng' }
      ]
    }
  ]
};

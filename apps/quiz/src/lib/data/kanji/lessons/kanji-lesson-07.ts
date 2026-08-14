// Minna no Nihongo Kanji — Lesson 07: Family
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_07_DATA: KanjiLessonData = {
  lessonNumber: 7,
  title: '家族 (Family)',
  kanji: [
    {
      character: '父',
      onyomi: ['フ'],
      kunyomi: ['ちち'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'phụ',
      english: 'father',
      examples: [
        { word: '父', kana: 'ちち', meaning: 'father (humble)', vietnamese: 'cha' },
        { word: 'お父さん', kana: 'おとうさん', meaning: 'father (polite)', vietnamese: 'bố, cha' },
        { word: '父母', kana: 'ふぼ', meaning: 'parents', vietnamese: 'phụ mẫu' }
      ]
    },
    {
      character: '母',
      onyomi: ['ボ'],
      kunyomi: ['はは'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'mẫu',
      english: 'mother',
      examples: [
        { word: '母', kana: 'はは', meaning: 'mother (humble)', vietnamese: 'mẹ' },
        { word: 'お母さん', kana: 'おかあさん', meaning: 'mother (polite)', vietnamese: 'mẹ' },
        { word: '母国', kana: 'ぼこく', meaning: 'homeland', vietnamese: 'mẫu quốc' }
      ]
    },
    {
      character: '兄',
      onyomi: ['ケイ', 'キョウ'],
      kunyomi: ['あに'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'huynh',
      english: 'older brother',
      examples: [
        { word: '兄', kana: 'あに', meaning: 'older brother (humble)', vietnamese: 'anh trai' },
        { word: 'お兄さん', kana: 'おにいさん', meaning: 'older brother (polite)', vietnamese: 'anh trai' },
        { word: '兄弟', kana: 'きょうだい', meaning: 'siblings', vietnamese: 'huynh đệ' }
      ]
    },
    {
      character: '姉',
      onyomi: ['シ'],
      kunyomi: ['あね'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'tỷ',
      english: 'older sister',
      examples: [
        { word: '姉', kana: 'あね', meaning: 'older sister (humble)', vietnamese: 'chị gái' },
        { word: 'お姉さん', kana: 'おねえさん', meaning: 'older sister (polite)', vietnamese: 'chị gái' },
        { word: '姉妹', kana: 'しまい', meaning: 'sisters', vietnamese: 'chị em gái' }
      ]
    },
    {
      character: '弟',
      onyomi: ['テイ', 'ダイ', 'デ'],
      kunyomi: ['おとうと'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'đệ',
      english: 'younger brother',
      examples: [
        { word: '弟', kana: 'おとうと', meaning: 'younger brother', vietnamese: 'em trai' },
        { word: '兄弟', kana: 'きょうだい', meaning: 'siblings', vietnamese: 'huynh đệ' },
        { word: '弟子', kana: 'でし', meaning: 'disciple, pupil', vietnamese: 'đệ tử' }
      ]
    },
    {
      character: '妹',
      onyomi: ['マイ'],
      kunyomi: ['いもうと'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'muội',
      english: 'younger sister',
      examples: [
        { word: '妹', kana: 'いもうと', meaning: 'younger sister', vietnamese: 'em gái' },
        { word: '姉妹', kana: 'しまい', meaning: 'sisters', vietnamese: 'chị em gái' },
        { word: '妹さん', kana: 'いもうとさん', meaning: 'younger sister (polite)', vietnamese: 'em gái (lịch sự)' }
      ]
    },
    {
      character: '子',
      onyomi: ['シ', 'ス'],
      kunyomi: ['こ'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'tử',
      english: 'child',
      examples: [
        { word: '子供', kana: 'こども', meaning: 'child', vietnamese: 'trẻ em' },
        { word: '女の子', kana: 'おんなのこ', meaning: 'girl', vietnamese: 'bé gái' },
        { word: '男の子', kana: 'おとこのこ', meaning: 'boy', vietnamese: 'bé trai' }
      ]
    },
    {
      character: '女',
      onyomi: ['ジョ', 'ニョ'],
      kunyomi: ['おんな', 'め'],
      strokeCount: 3,
      jlpt: 5,
      vietnamese: 'nữ',
      english: 'woman, female',
      examples: [
        { word: '女の人', kana: 'おんなのひと', meaning: 'woman', vietnamese: 'phụ nữ' },
        { word: '女性', kana: 'じょせい', meaning: 'female, woman', vietnamese: 'nữ giới' },
        { word: '彼女', kana: 'かのじょ', meaning: 'she, girlfriend', vietnamese: 'cô ấy, bạn gái' }
      ]
    },
    {
      character: '男',
      onyomi: ['ダン', 'ナン'],
      kunyomi: ['おとこ'],
      strokeCount: 7,
      jlpt: 5,
      vietnamese: 'nam',
      english: 'man, male',
      examples: [
        { word: '男の人', kana: 'おとこのひと', meaning: 'man', vietnamese: 'đàn ông' },
        { word: '男性', kana: 'だんせい', meaning: 'male, man', vietnamese: 'nam giới' },
        { word: '長男', kana: 'ちょうなん', meaning: 'eldest son', vietnamese: 'trưởng nam' }
      ]
    },
    {
      character: '友',
      onyomi: ['ユウ'],
      kunyomi: ['とも'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'hữu',
      english: 'friend',
      examples: [
        { word: '友達', kana: 'ともだち', meaning: 'friend', vietnamese: 'bạn bè' },
        { word: '友人', kana: 'ゆうじん', meaning: 'friend (formal)', vietnamese: 'bạn hữu' },
        { word: '親友', kana: 'しんゆう', meaning: 'best friend', vietnamese: 'thân hữu' }
      ]
    }
  ]
};

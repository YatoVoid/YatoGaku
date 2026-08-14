// Minna no Nihongo Kanji — Lesson 02: People & Countries
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_02_DATA: KanjiLessonData = {
  lessonNumber: 2,
  title: '人・国 (People & Countries)',
  kanji: [
    {
      character: '人',
      onyomi: ['ジン', 'ニン'],
      kunyomi: ['ひと'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'nhân',
      english: 'person, people',
      examples: [
        { word: '人', kana: 'ひと', meaning: 'person', vietnamese: 'người' },
        { word: '日本人', kana: 'にほんじん', meaning: 'Japanese person', vietnamese: 'người Nhật' },
        { word: '一人', kana: 'ひとり', meaning: 'one person', vietnamese: 'một người' }
      ]
    },
    {
      character: '日',
      onyomi: ['ニチ', 'ジツ'],
      kunyomi: ['ひ', 'か'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'nhật',
      english: 'day, sun, Japan',
      examples: [
        { word: '日本', kana: 'にほん', meaning: 'Japan', vietnamese: 'Nhật Bản' },
        { word: '毎日', kana: 'まいにち', meaning: 'every day', vietnamese: 'mỗi ngày' },
        { word: '日曜日', kana: 'にちようび', meaning: 'Sunday', vietnamese: 'Chủ nhật' }
      ]
    },
    {
      character: '本',
      onyomi: ['ホン'],
      kunyomi: ['もと'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'bản',
      english: 'book, origin',
      examples: [
        { word: '本', kana: 'ほん', meaning: 'book', vietnamese: 'sách' },
        { word: '日本', kana: 'にほん', meaning: 'Japan', vietnamese: 'Nhật Bản' },
        { word: '日本語', kana: 'にほんご', meaning: 'Japanese language', vietnamese: 'tiếng Nhật' }
      ]
    },
    {
      character: '国',
      onyomi: ['コク'],
      kunyomi: ['くに'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'quốc',
      english: 'country',
      examples: [
        { word: '国', kana: 'くに', meaning: 'country', vietnamese: 'đất nước' },
        { word: '中国', kana: 'ちゅうごく', meaning: 'China', vietnamese: 'Trung Quốc' },
        { word: '外国人', kana: 'がいこくじん', meaning: 'foreigner', vietnamese: 'người nước ngoài' }
      ]
    },
    {
      character: '語',
      onyomi: ['ゴ'],
      kunyomi: ['かた.る'],
      strokeCount: 14,
      jlpt: 5,
      vietnamese: 'ngữ',
      english: 'language, word',
      examples: [
        { word: '日本語', kana: 'にほんご', meaning: 'Japanese language', vietnamese: 'tiếng Nhật' },
        { word: '英語', kana: 'えいご', meaning: 'English language', vietnamese: 'tiếng Anh' },
        { word: '物語', kana: 'ものがたり', meaning: 'story', vietnamese: 'câu chuyện' }
      ]
    },
    {
      character: '学',
      onyomi: ['ガク'],
      kunyomi: ['まな.ぶ'],
      strokeCount: 8,
      jlpt: 5,
      vietnamese: 'học',
      english: 'study, learning',
      examples: [
        { word: '学生', kana: 'がくせい', meaning: 'student', vietnamese: 'sinh viên' },
        { word: '大学', kana: 'だいがく', meaning: 'university', vietnamese: 'đại học' },
        { word: '学校', kana: 'がっこう', meaning: 'school', vietnamese: 'trường học' }
      ]
    },
    {
      character: '生',
      onyomi: ['セイ', 'ショウ'],
      kunyomi: ['い.きる', 'う.まれる', 'なま'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'sinh',
      english: 'life, birth, raw',
      examples: [
        { word: '学生', kana: 'がくせい', meaning: 'student', vietnamese: 'sinh viên' },
        { word: '先生', kana: 'せんせい', meaning: 'teacher', vietnamese: 'giáo viên' },
        { word: '生まれる', kana: 'うまれる', meaning: 'to be born', vietnamese: 'được sinh ra' }
      ]
    },
    {
      character: '先',
      onyomi: ['セン'],
      kunyomi: ['さき'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'tiên',
      english: 'previous, ahead',
      examples: [
        { word: '先生', kana: 'せんせい', meaning: 'teacher', vietnamese: 'giáo viên' },
        { word: '先週', kana: 'せんしゅう', meaning: 'last week', vietnamese: 'tuần trước' },
        { word: '先月', kana: 'せんげつ', meaning: 'last month', vietnamese: 'tháng trước' }
      ]
    },
    {
      character: '私',
      onyomi: ['シ'],
      kunyomi: ['わたし', 'わたくし'],
      strokeCount: 7,
      jlpt: 4,
      vietnamese: 'tư',
      english: 'I, private',
      examples: [
        { word: '私', kana: 'わたし', meaning: 'I, me', vietnamese: 'tôi' },
        { word: '私立', kana: 'しりつ', meaning: 'private (institution)', vietnamese: 'tư lập' },
        { word: '私たち', kana: 'わたしたち', meaning: 'we', vietnamese: 'chúng tôi' }
      ]
    },
    {
      character: '名',
      onyomi: ['メイ', 'ミョウ'],
      kunyomi: ['な'],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'danh',
      english: 'name, famous',
      examples: [
        { word: '名前', kana: 'なまえ', meaning: 'name', vietnamese: 'tên' },
        { word: '名刺', kana: 'めいし', meaning: 'business card', vietnamese: 'danh thiếp' },
        { word: '有名', kana: 'ゆうめい', meaning: 'famous', vietnamese: 'nổi tiếng' }
      ]
    }
  ]
};

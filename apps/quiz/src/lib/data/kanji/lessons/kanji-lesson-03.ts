// Minna no Nihongo Kanji — Lesson 03: Time & Calendar
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_03_DATA: KanjiLessonData = {
  lessonNumber: 3,
  title: '時間・曜日 (Thời gian & Thứ)',
  kanji: [
    {
      character: '時',
      onyomi: ['ジ'],
      kunyomi: ['とき'],
      strokeCount: 10,
      jlpt: 5,
      vietnamese: 'thời',
      english: 'time, hour',
      examples: [
        { word: '時間', kana: 'じかん', meaning: 'time', vietnamese: 'thời gian' },
        { word: '一時', kana: 'いちじ', meaning: 'one o\'clock', vietnamese: '1 giờ' },
        { word: '時計', kana: 'とけい', meaning: 'clock, watch', vietnamese: 'đồng hồ' }
      ]
    },
    {
      character: '分',
      onyomi: ['ブン', 'フン', 'プン'],
      kunyomi: ['わ.ける', 'わ.かる'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'phân',
      english: 'minute, divide',
      examples: [
        { word: '五分', kana: 'ごふん', meaning: 'five minutes', vietnamese: '5 phút' },
        { word: '十分', kana: 'じゅっぷん', meaning: 'ten minutes', vietnamese: '10 phút' },
        { word: '自分', kana: 'じぶん', meaning: 'oneself', vietnamese: 'bản thân' }
      ]
    },
    {
      character: '半',
      onyomi: ['ハン'],
      kunyomi: ['なか.ば'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'bán',
      english: 'half',
      examples: [
        { word: '半分', kana: 'はんぶん', meaning: 'half', vietnamese: 'một nửa' },
        { word: '三時半', kana: 'さんじはん', meaning: 'half past three', vietnamese: '3 giờ rưỡi' },
        { word: '半年', kana: 'はんとし', meaning: 'half a year', vietnamese: 'nửa năm' }
      ]
    },
    {
      character: '今',
      onyomi: ['コン', 'キン'],
      kunyomi: ['いま'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'kim',
      english: 'now, present',
      examples: [
        { word: '今', kana: 'いま', meaning: 'now', vietnamese: 'bây giờ' },
        { word: '今日', kana: 'きょう', meaning: 'today', vietnamese: 'hôm nay' },
        { word: '今週', kana: 'こんしゅう', meaning: 'this week', vietnamese: 'tuần này' }
      ]
    },
    {
      character: '午',
      onyomi: ['ゴ'],
      kunyomi: [],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'ngọ',
      english: 'noon',
      examples: [
        { word: '午前', kana: 'ごぜん', meaning: 'morning, AM', vietnamese: 'buổi sáng' },
        { word: '午後', kana: 'ごご', meaning: 'afternoon, PM', vietnamese: 'buổi chiều' },
        { word: '正午', kana: 'しょうご', meaning: 'noon', vietnamese: 'giữa trưa' }
      ]
    },
    {
      character: '前',
      onyomi: ['ゼン'],
      kunyomi: ['まえ'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'tiền',
      english: 'before, front',
      examples: [
        { word: '午前', kana: 'ごぜん', meaning: 'morning, AM', vietnamese: 'buổi sáng' },
        { word: '名前', kana: 'なまえ', meaning: 'name', vietnamese: 'tên' },
        { word: '前', kana: 'まえ', meaning: 'in front of', vietnamese: 'phía trước' }
      ]
    },
    {
      character: '後',
      onyomi: ['ゴ', 'コウ'],
      kunyomi: ['あと', 'うし.ろ'],
      strokeCount: 9,
      jlpt: 5,
      vietnamese: 'hậu',
      english: 'after, behind',
      examples: [
        { word: '午後', kana: 'ごご', meaning: 'afternoon, PM', vietnamese: 'buổi chiều' },
        { word: '後ろ', kana: 'うしろ', meaning: 'behind', vietnamese: 'phía sau' },
        { word: '最後', kana: 'さいご', meaning: 'last', vietnamese: 'cuối cùng' }
      ]
    },
    {
      character: '毎',
      onyomi: ['マイ'],
      kunyomi: [],
      strokeCount: 6,
      jlpt: 5,
      vietnamese: 'mỗi',
      english: 'every, each',
      examples: [
        { word: '毎日', kana: 'まいにち', meaning: 'every day', vietnamese: 'mỗi ngày' },
        { word: '毎週', kana: 'まいしゅう', meaning: 'every week', vietnamese: 'mỗi tuần' },
        { word: '毎朝', kana: 'まいあさ', meaning: 'every morning', vietnamese: 'mỗi sáng' }
      ]
    },
    {
      character: '週',
      onyomi: ['シュウ'],
      kunyomi: [],
      strokeCount: 11,
      jlpt: 5,
      vietnamese: 'tuần',
      english: 'week',
      examples: [
        { word: '今週', kana: 'こんしゅう', meaning: 'this week', vietnamese: 'tuần này' },
        { word: '先週', kana: 'せんしゅう', meaning: 'last week', vietnamese: 'tuần trước' },
        { word: '来週', kana: 'らいしゅう', meaning: 'next week', vietnamese: 'tuần sau' }
      ]
    },
    {
      character: '月',
      onyomi: ['ゲツ', 'ガツ'],
      kunyomi: ['つき'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'nguyệt',
      english: 'month, moon',
      examples: [
        { word: '月曜日', kana: 'げつようび', meaning: 'Monday', vietnamese: 'thứ Hai' },
        { word: '一月', kana: 'いちがつ', meaning: 'January', vietnamese: 'tháng 1' },
        { word: '今月', kana: 'こんげつ', meaning: 'this month', vietnamese: 'tháng này' }
      ]
    },
    {
      character: '火',
      onyomi: ['カ'],
      kunyomi: ['ひ'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'hoả',
      english: 'fire',
      examples: [
        { word: '火曜日', kana: 'かようび', meaning: 'Tuesday', vietnamese: 'thứ Ba' },
        { word: '火事', kana: 'かじ', meaning: 'fire (disaster)', vietnamese: 'hoả hoạn' },
        { word: '花火', kana: 'はなび', meaning: 'fireworks', vietnamese: 'pháo hoa' }
      ]
    },
    {
      character: '水',
      onyomi: ['スイ'],
      kunyomi: ['みず'],
      strokeCount: 4,
      jlpt: 5,
      vietnamese: 'thuỷ',
      english: 'water',
      examples: [
        { word: '水曜日', kana: 'すいようび', meaning: 'Wednesday', vietnamese: 'thứ Tư' },
        { word: '水', kana: 'みず', meaning: 'water', vietnamese: 'nước' },
        { word: 'お水', kana: 'おみず', meaning: 'water (polite)', vietnamese: 'nước (lịch sự)' }
      ]
    }
  ]
};

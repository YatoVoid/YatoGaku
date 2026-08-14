// Minna no Nihongo Kanji — Lesson 13: Verbs III
import type { KanjiLessonData } from '$lib/types';

export const KANJI_LESSON_13_DATA: KanjiLessonData = {
  lessonNumber: 13,
  title: '動詞 III (Verbs III)',
  kanji: [
    {
      character: '出',
      onyomi: ['シュツ', 'スイ'],
      kunyomi: ['で.る', 'だ.す'],
      strokeCount: 5,
      jlpt: 5,
      vietnamese: 'xuất',
      english: 'go out, put out',
      examples: [
        { word: '出る', kana: 'でる', meaning: 'to go out, to exit', vietnamese: 'ra ngoài' },
        { word: '出す', kana: 'だす', meaning: 'to put out, to send', vietnamese: 'đưa ra, gửi' },
        { word: '出口', kana: 'でぐち', meaning: 'exit', vietnamese: 'lối ra' }
      ]
    },
    {
      character: '入',
      onyomi: ['ニュウ'],
      kunyomi: ['い.る', 'い.れる', 'はい.る'],
      strokeCount: 2,
      jlpt: 5,
      vietnamese: 'nhập',
      english: 'enter, put in',
      examples: [
        { word: '入る', kana: 'はいる', meaning: 'to enter', vietnamese: 'vào' },
        { word: '入れる', kana: 'いれる', meaning: 'to put in', vietnamese: 'cho vào' },
        { word: '入口', kana: 'いりぐち', meaning: 'entrance', vietnamese: 'lối vào' }
      ]
    },
    {
      character: '開',
      onyomi: ['カイ'],
      kunyomi: ['あ.く', 'あ.ける', 'ひら.く'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'khai',
      english: 'open',
      examples: [
        { word: '開ける', kana: 'あける', meaning: 'to open (transitive)', vietnamese: 'mở (cái gì)' },
        { word: '開く', kana: 'ひらく', meaning: 'to open (intransitive)', vietnamese: 'mở ra' },
        { word: '開会', kana: 'かいかい', meaning: 'opening of a meeting', vietnamese: 'khai hội' }
      ]
    },
    {
      character: '閉',
      onyomi: ['ヘイ'],
      kunyomi: ['し.める', 'し.まる', 'と.じる'],
      strokeCount: 11,
      jlpt: 4,
      vietnamese: 'bế',
      english: 'close, shut',
      examples: [
        { word: '閉める', kana: 'しめる', meaning: 'to close (transitive)', vietnamese: 'đóng (cái gì)' },
        { word: '閉まる', kana: 'しまる', meaning: 'to close (intransitive)', vietnamese: 'đóng lại' },
        { word: '閉会', kana: 'へいかい', meaning: 'closing of a meeting', vietnamese: 'bế hội' }
      ]
    },
    {
      character: '始',
      onyomi: ['シ'],
      kunyomi: ['はじ.める', 'はじ.まる'],
      strokeCount: 8,
      jlpt: 4,
      vietnamese: 'thủy',
      english: 'begin, start',
      examples: [
        { word: '始める', kana: 'はじめる', meaning: 'to begin (transitive)', vietnamese: 'bắt đầu (cái gì)' },
        { word: '始まる', kana: 'はじまる', meaning: 'to begin (intransitive)', vietnamese: 'bắt đầu' },
        { word: '開始', kana: 'かいし', meaning: 'start, commencement', vietnamese: 'khai thủy, bắt đầu' }
      ]
    },
    {
      character: '終',
      onyomi: ['シュウ'],
      kunyomi: ['お.わる', 'お.える'],
      strokeCount: 11,
      jlpt: 4,
      vietnamese: 'chung',
      english: 'end, finish',
      examples: [
        { word: '終わる', kana: 'おわる', meaning: 'to end (intransitive)', vietnamese: 'kết thúc' },
        { word: '終える', kana: 'おえる', meaning: 'to finish (transitive)', vietnamese: 'hoàn thành' },
        { word: '最終', kana: 'さいしゅう', meaning: 'last, final', vietnamese: 'cuối cùng' }
      ]
    },
    {
      character: '送',
      onyomi: ['ソウ'],
      kunyomi: ['おく.る'],
      strokeCount: 9,
      jlpt: 4,
      vietnamese: 'tống',
      english: 'send',
      examples: [
        { word: '送る', kana: 'おくる', meaning: 'to send', vietnamese: 'gửi' },
        { word: '送料', kana: 'そうりょう', meaning: 'shipping cost', vietnamese: 'phí vận chuyển' },
        { word: '見送り', kana: 'みおくり', meaning: 'seeing off', vietnamese: 'tiễn đưa' }
      ]
    },
    {
      character: '届',
      onyomi: [],
      kunyomi: ['とど.く', 'とど.ける'],
      strokeCount: 8,
      jlpt: 4,
      vietnamese: 'giới',
      english: 'deliver, reach',
      examples: [
        { word: '届く', kana: 'とどく', meaning: 'to reach, to arrive', vietnamese: 'đến nơi' },
        { word: '届ける', kana: 'とどける', meaning: 'to deliver', vietnamese: 'giao, chuyển đến' },
        { word: '届け出', kana: 'とどけで', meaning: 'notification, report', vietnamese: 'khai báo' }
      ]
    },
    {
      character: '払',
      onyomi: ['フツ'],
      kunyomi: ['はら.う'],
      strokeCount: 5,
      jlpt: 4,
      vietnamese: 'phất',
      english: 'pay',
      examples: [
        { word: '払う', kana: 'はらう', meaning: 'to pay', vietnamese: 'trả tiền' },
        { word: '支払い', kana: 'しはらい', meaning: 'payment', vietnamese: 'thanh toán' },
        { word: '払い戻す', kana: 'はらいもどす', meaning: 'to refund', vietnamese: 'hoàn tiền' }
      ]
    },
    {
      character: '貸',
      onyomi: ['タイ'],
      kunyomi: ['か.す'],
      strokeCount: 12,
      jlpt: 4,
      vietnamese: 'thải',
      english: 'lend',
      examples: [
        { word: '貸す', kana: 'かす', meaning: 'to lend', vietnamese: 'cho mượn' },
        { word: '貸し出し', kana: 'かしだし', meaning: 'lending, rental', vietnamese: 'cho thuê, cho mượn' },
        { word: '貸家', kana: 'かしや', meaning: 'house for rent', vietnamese: 'nhà cho thuê' }
      ]
    }
  ]
};

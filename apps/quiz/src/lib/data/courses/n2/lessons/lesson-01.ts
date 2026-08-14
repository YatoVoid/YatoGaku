/**
 * N2 Lesson 01 — ～ようにする / ～ようになる
 * Habitual change, gradual change
 */

import type { LessonData } from '$lib/types';

export const LESSON_01_DATA: LessonData = {
  lessonNumber: 1,
  title: 'ようにする／ようになる (Making an effort to / Gradually coming to)',
  vocabulary: [
    { japanese: '心がける', kana: 'こころがける', vietnamese: 'cố gắng, lưu ý', english: 'to try to, to keep in mind', type: 'main', example: '健康に心がけています。' },
    { japanese: '気をつける', kana: 'きをつける', vietnamese: 'cẩn thận, chú ý', english: 'to be careful', type: 'main', example: '車に気をつけてください。' },
    { japanese: '習慣', kana: 'しゅうかん', vietnamese: 'thói quen', english: 'habit, custom', type: 'main', example: '毎朝走る習慣をつけました。' },
    { japanese: '日常', kana: 'にちじょう', vietnamese: 'thường ngày, hàng ngày', english: 'daily life, everyday', type: 'main', example: '日常生活で気をつけること。' },
    { japanese: '意識', kana: 'いしき', vietnamese: 'ý thức', english: 'consciousness, awareness', type: 'main', example: '環境問題を意識するようになった。' },
    { japanese: '変化', kana: 'へんか', vietnamese: 'sự thay đổi', english: 'change', type: 'main', example: '最近、大きな変化がありました。' },
    { japanese: '徐々に', kana: 'じょじょに', vietnamese: 'dần dần', english: 'gradually', type: 'main', example: '徐々に慣れてきました。' },
    { japanese: '自然に', kana: 'しぜんに', vietnamese: 'tự nhiên', english: 'naturally', type: 'main', example: '自然に日本語が話せるようになった。' },
    { japanese: '目標', kana: 'もくひょう', vietnamese: 'mục tiêu', english: 'goal, target', type: 'main', example: '目標を達成するように努力する。' },
    { japanese: '努力', kana: 'どりょく', vietnamese: 'sự nỗ lực', english: 'effort', type: 'main', example: '毎日努力しています。' },
    { japanese: '改善', kana: 'かいぜん', vietnamese: 'cải thiện', english: 'improvement', type: 'additional', example: '生活を改善するようにしています。' },
    { japanese: '維持', kana: 'いじ', vietnamese: 'duy trì', english: 'maintenance, preservation', type: 'additional', example: '健康を維持するようにしている。' },
    { japanese: '身につける', kana: 'みにつける', vietnamese: 'tiếp thu, học được', english: 'to acquire (skills)', type: 'main', example: '新しい技術を身につけた。' },
    { japanese: '慣れる', kana: 'なれる', vietnamese: 'quen', english: 'to get used to', type: 'main', example: '新しい環境に慣れるようになった。' },
    { japanese: '続ける', kana: 'つづける', vietnamese: 'tiếp tục', english: 'to continue', type: 'main', example: '運動を続けるようにしています。' },
  ],
  grammar: [
    {
      pattern: '～ようにする',
      vietnamese: 'Cố gắng làm ~, chú ý để ~',
      english: 'To try to ~, to make sure to ~',
      explanation: 'Biểu thị nỗ lực có ý thức để thay đổi thói quen hoặc hành vi. Thường dùng khi muốn diễn đạt quyết tâm cá nhân.',
      type: 'main',
      examples: [
        { japanese: '毎日野菜を食べるようにしています。', vietnamese: 'Tôi cố gắng ăn rau mỗi ngày.', english: 'I try to eat vegetables every day.' },
        { japanese: '遅刻しないようにしてください。', vietnamese: 'Hãy cố gắng đừng đi trễ.', english: 'Please try not to be late.' },
      ]
    },
    {
      pattern: '～ようになる',
      vietnamese: 'Trở nên ~, dần dần ~',
      english: 'To come to ~, to become able to ~',
      explanation: 'Biểu thị sự thay đổi dần dần, tự nhiên theo thời gian. Không phải do nỗ lực có ý thức mà là kết quả tự nhiên.',
      type: 'main',
      examples: [
        { japanese: '日本語が話せるようになりました。', vietnamese: 'Tôi đã có thể nói tiếng Nhật được rồi.', english: 'I have become able to speak Japanese.' },
        { japanese: '朝早く起きられるようになった。', vietnamese: 'Tôi đã có thể dậy sớm buổi sáng rồi.', english: 'I have become able to wake up early.' },
      ]
    },
    {
      pattern: '～ようにしている',
      vietnamese: 'Đang cố gắng (thói quen thường xuyên)',
      english: 'To make it a habit to ~',
      explanation: 'Dạng ている của ようにする — nhấn mạnh đây là thói quen đang duy trì, không phải hành động một lần.',
      type: 'main',
      examples: [
        { japanese: 'なるべく歩くようにしている。', vietnamese: 'Tôi cố gắng đi bộ càng nhiều càng tốt.', english: 'I make it a habit to walk as much as possible.' },
        { japanese: '夜遅く食べないようにしている。', vietnamese: 'Tôi cố gắng không ăn khuya.', english: 'I try not to eat late at night.' },
      ]
    },
    {
      pattern: '～ないようにする',
      vietnamese: 'Cố gắng không ~',
      english: 'To try not to ~',
      explanation: 'Dạng phủ định — biểu thị nỗ lực tránh một hành vi.',
      type: 'additional',
      examples: [
        { japanese: '甘いものを食べないようにしている。', vietnamese: 'Tôi cố gắng không ăn đồ ngọt.', english: 'I try not to eat sweets.' },
        { japanese: '忘れ物をしないようにする。', vietnamese: 'Cố gắng không quên đồ.', english: 'To try not to forget things.' },
      ]
    },
  ]
};

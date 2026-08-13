/**
 * N1 Lesson 01 — ～てはじめて / ～た上で
 * Only after doing ~, after thorough consideration
 */

import type { LessonData } from '$lib/types';

export const LESSON_01_DATA: LessonData = {
  lessonNumber: 1,
  title: 'てはじめて／た上で (Chỉ sau khi ~ / Sau khi cân nhắc)',
  vocabulary: [
    { japanese: '痛感', kana: 'つうかん', vietnamese: 'cảm nhận sâu sắc', english: 'to feel keenly', type: 'main', example: '健康の大切さを痛感した。' },
    { japanese: '実感', kana: 'じっかん', vietnamese: 'cảm nhận thực tế', english: 'to realize, to feel truly', type: 'main', example: '親になって実感した。' },
    { japanese: '経験', kana: 'けいけん', vietnamese: 'kinh nghiệm', english: 'experience', type: 'main', example: '失敗を経験して成長した。' },
    { japanese: '検討', kana: 'けんとう', vietnamese: 'xem xét, cân nhắc', english: 'examination, consideration', type: 'main', example: '十分に検討した上で決めます。' },
    { japanese: '確認', kana: 'かくにん', vietnamese: 'xác nhận', english: 'confirmation', type: 'main', example: '事実を確認した上で報告する。' },
    { japanese: '認識', kana: 'にんしき', vietnamese: 'nhận thức', english: 'recognition, awareness', type: 'main', example: '問題の深刻さを認識した。' },
    { japanese: '理解', kana: 'りかい', vietnamese: 'lý giải, hiểu', english: 'understanding', type: 'main', example: '相手の立場を理解する。' },
    { japanese: '判断', kana: 'はんだん', vietnamese: 'phán đoán', english: 'judgment', type: 'main', example: '状況を判断した上で行動する。' },
    { japanese: '体験', kana: 'たいけん', vietnamese: 'trải nghiệm', english: 'personal experience', type: 'main', example: '実際に体験してみてください。' },
    { japanese: '気づく', kana: 'きづく', vietnamese: 'nhận ra', english: 'to notice, to realize', type: 'main', example: '大切なことに気づいた。' },
    { japanese: '失って', kana: 'うしなって', vietnamese: 'mất đi', english: 'to lose', type: 'main', example: '失ってはじめて分かる。' },
    { japanese: '慎重', kana: 'しんちょう', vietnamese: 'thận trọng', english: 'careful, cautious', type: 'additional', example: '慎重に考えた上で決断した。' },
    { japanese: '踏まえる', kana: 'ふまえる', vietnamese: 'dựa trên, căn cứ vào', english: 'to be based on', type: 'additional', example: '結果を踏まえて判断する。' },
    { japanese: '振り返る', kana: 'ふりかえる', vietnamese: 'nhìn lại', english: 'to look back, to reflect', type: 'additional', example: '過去を振り返ってみる。' },
    { japanese: '見直す', kana: 'みなおす', vietnamese: 'xem xét lại', english: 'to review, to reconsider', type: 'additional', example: '計画を見直す必要がある。' },
  ],
  grammar: [
    {
      pattern: '～てはじめて',
      vietnamese: 'Chỉ sau khi ~ mới ~',
      english: 'Only after ~ing did I realize ~',
      explanation: 'Biểu thị rằng chỉ sau khi trải qua một sự việc, người nói mới nhận ra hoặc hiểu được điều gì đó. Nhấn mạnh kinh nghiệm trực tiếp là cần thiết.',
      type: 'main',
      examples: [
        { japanese: '病気になってはじめて健康のありがたさが分かった。', vietnamese: 'Chỉ sau khi bị bệnh tôi mới hiểu được giá trị của sức khỏe.', english: 'Only after getting sick did I understand the value of health.' },
        { japanese: '日本に来てはじめて本当の寿司を食べた。', vietnamese: 'Chỉ sau khi đến Nhật tôi mới được ăn sushi thật sự.', english: 'Only after coming to Japan did I eat real sushi.' },
      ]
    },
    {
      pattern: '～た上で',
      vietnamese: 'Sau khi ~ rồi mới ~',
      english: 'After ~ing, upon ~ing',
      explanation: 'Biểu thị hành động thứ hai được thực hiện sau khi đã hoàn thành hành động thứ nhất một cách kỹ lưỡng. Mang sắc thái trang trọng.',
      type: 'main',
      examples: [
        { japanese: '説明を聞いた上で、質問してください。', vietnamese: 'Sau khi nghe giải thích xong hãy đặt câu hỏi.', english: 'Please ask questions after hearing the explanation.' },
        { japanese: 'よく考えた上での決断です。', vietnamese: 'Đây là quyết định sau khi đã suy nghĩ kỹ.', english: 'This is a decision made after careful thought.' },
      ]
    },
    {
      pattern: '～上で（の）',
      vietnamese: 'Trong việc ~, khi ~',
      english: 'In ~ing, when it comes to ~',
      explanation: 'Biểu thị phạm vi hoặc lĩnh vực liên quan. Khác với ～た上で (thời gian), đây chỉ phạm vi.',
      type: 'main',
      examples: [
        { japanese: '日本語を学ぶ上で、漢字は大切です。', vietnamese: 'Trong việc học tiếng Nhật, kanji rất quan trọng.', english: 'When learning Japanese, kanji is important.' },
        { japanese: '仕事をする上で必要なスキルです。', vietnamese: 'Đây là kỹ năng cần thiết trong công việc.', english: 'This is a necessary skill for working.' },
      ]
    },
    {
      pattern: '～からこそ',
      vietnamese: 'Chính vì ~ nên mới ~',
      english: 'Precisely because ~',
      explanation: 'Nhấn mạnh lý do đặc biệt. こそ tăng cường ý nghĩa c��a から.',
      type: 'additional',
      examples: [
        { japanese: '好きだからこそ厳しいことも言う。', vietnamese: 'Chính vì thích nên mới nói những điều nghiêm khắc.', english: 'Precisely because I like you, I say harsh things.' },
        { japanese: '経験があるからこそ分かることがある。', vietnamese: 'Chính vì có kinh nghiệm nên mới hiểu được.', english: 'There are things you understand precisely because you have experience.' },
      ]
    },
  ]
};

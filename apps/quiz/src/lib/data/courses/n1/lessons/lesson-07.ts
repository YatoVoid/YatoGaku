/**
 * N1 Lesson 07 — べく／んがために
 * In order to (literary) — Purpose & determination
 */

import type { LessonData } from '$lib/types';

export const LESSON_07_DATA: LessonData = {
  lessonNumber: 7,
  title: 'べく／んがために (Để mà ~ / Vì mục đích ~ — văn chương)',
  vocabulary: [
    { japanese: '目的', kana: 'もくてき', vietnamese: 'mục đích', english: 'purpose, objective', type: 'main', example: '目的を達成するために努力する。' },
    { japanese: '志', kana: 'こころざし', vietnamese: 'chí hướng, hoài bão', english: 'ambition, aspiration', type: 'main', example: '高い志を持って生きる。' },
    { japanese: '決意', kana: 'けつい', vietnamese: 'quyết tâm', english: 'determination, resolution', type: 'main', example: '留学する決意を固めた。' },
    { japanese: '奮闘', kana: 'ふんとう', vietnamese: 'phấn đấu', english: 'hard struggle, strenuous effort', type: 'main', example: '夢のために奮闘している。' },
    { japanese: '遂げる', kana: 'とげる', vietnamese: 'hoàn thành, đạt được', english: 'to accomplish, to achieve', type: 'main', example: '長年の夢を遂げた。' },
    { japanese: '邁進', kana: 'まいしん', vietnamese: 'mạnh tiến, tiến về phía trước', english: 'pushing forward, striving', type: 'main', example: '目標に向かって邁進する。' },
    { japanese: '抱負', kana: 'ほうふ', vietnamese: 'hoài bão, ước vọng', english: 'aspiration, ambition', type: 'main', example: '新年の抱負を語った。' },
    { japanese: '使命', kana: 'しめい', vietnamese: 'sứ mệnh', english: 'mission, duty', type: 'main', example: '使命を果たすべく全力を尽くす。' },
    { japanese: '信念', kana: 'しんねん', vietnamese: 'tín niệm, niềm tin', english: 'belief, conviction', type: 'main', example: '信念を貫き通した。' },
    { japanese: '志す', kana: 'こころざす', vietnamese: 'hướng đến, quyết chí', english: 'to aspire to, to aim for', type: 'main', example: '医者を志す若者が増えている。' },
    { japanese: '果たす', kana: 'はたす', vietnamese: 'hoàn thành, thực hiện', english: 'to fulfill, to accomplish', type: 'main', example: '約束を果たすべく努力した。' },
    { japanese: '渾身', kana: 'こんしん', vietnamese: 'toàn tâm toàn lực', english: 'with all one\'s might', type: 'additional', example: '渾身の力を込めて投げた。' },
    { japanese: '執念', kana: 'しゅうねん', vietnamese: 'chấp niệm, ý chí kiên cường', english: 'tenacity, persistence', type: 'additional', example: '執念で夢を実現した。' },
    { japanese: '一心不乱', kana: 'いっしんふらん', vietnamese: 'nhất tâm bất loạn, chuyên chú', english: 'wholeheartedly, single-mindedly', type: 'additional', example: '一心不乱に勉強した。' },
    { japanese: '貫く', kana: 'つらぬく', vietnamese: 'kiên trì, xuyên suốt', english: 'to stick to, to carry through', type: 'additional', example: '自分の意志を貫いた。' },
  ],
  grammar: [
    {
      pattern: '～べく',
      vietnamese: 'Để ~, nhằm ~',
      english: 'In order to ~, with the aim of ~',
      explanation: 'Dạng văn viết trang trọng của ～ために. Biểu thị mục đích cao cả hoặc nỗ lực có chủ đích. Đi với động từ dạng từ điển (Vる + べく). Không dùng cho mục đích tầm thường.',
      type: 'main',
      examples: [
        { japanese: '真実を明らかにすべく、調査を開始した。', vietnamese: 'Để làm sáng tỏ sự thật, cuộc điều tra đã được bắt đầu.', english: 'An investigation was launched in order to reveal the truth.' },
        { japanese: '世界平和を実現すべく、各国が協力している。', vietnamese: 'Nhằm thực hiện hòa bình thế giới, các nước đang hợp tác.', english: 'Countries are cooperating in order to achieve world peace.' },
      ]
    },
    {
      pattern: '～んがために',
      vietnamese: 'Vì mục đích ~, để mà ~',
      english: 'For the sake of ~ing, in order to ~',
      explanation: 'Dạng cổ điển, rất trang trọng của ～ために. Nhấn mạnh quyết tâm mãnh liệt. Cấu trúc: Vない bỏ ない + んがために (例: 勝たんがために). する → せんがために. Thường gặp trong văn chương, diễn thuyết.',
      type: 'main',
      examples: [
        { japanese: '勝たんがために、選手たちは厳しい練習に耐えた。', vietnamese: 'Vì mục đích chiến thắng, các vận động viên đã chịu đựng luyện tập khắc nghiệt.', english: 'For the sake of winning, the athletes endured rigorous training.' },
        { japanese: '生き残らんがために、あらゆる手段を講じた。', vietnamese: 'Vì mục đích sinh tồn, mọi biện pháp đều đã được thực hiện.', english: 'For the sake of survival, every possible measure was taken.' },
      ]
    },
    {
      pattern: '～べくして',
      vietnamese: '~ một cách tất yếu, đương nhiên phải ~',
      english: '~ as was meant to be, ~ as expected',
      explanation: 'Biểu thị rằng kết quả xảy ra là tất yếu, không có gì bất ngờ. Thường dùng trong cấu trúc ～べくして～た (ví dụ: なるべくしてなった). Mang sắc thái rằng mọi thứ dẫn đến kết quả này.',
      type: 'main',
      examples: [
        { japanese: '彼の成功は、なるべくしてなったものだ。', vietnamese: 'Thành công của anh ấy là điều tất yếu phải xảy ra.', english: 'His success was something that was meant to happen.' },
        { japanese: 'あの事故は起こるべくして起こった。', vietnamese: 'Tai nạn đó đương nhiên phải xảy ra thôi.', english: 'That accident happened as it was bound to happen.' },
      ]
    },
    {
      pattern: '～んばかりに',
      vietnamese: 'Như thể sắp ~, gần như muốn ~',
      english: 'As if about to ~, almost as though ~',
      explanation: 'Biểu thị trạng thái cường điệu, như thể sắp làm điều gì đó. Dùng để mô tả mức độ cực đoan của hành động hoặc cảm xúc. Cấu trúc: Vない bỏ ない + んばかりに. する → せんばかりに.',
      type: 'additional',
      examples: [
        { japanese: '彼女は泣かんばかりに感謝の言葉を述べた。', vietnamese: 'Cô ấy nói lời cảm ơn với vẻ như sắp khóc.', english: 'She expressed her gratitude as if she were about to cry.' },
        { japanese: '会場は割れんばかりの拍手に包まれた。', vietnamese: 'Hội trường tràn ngập tiếng vỗ tay như muốn vỡ tung.', english: 'The venue was filled with thunderous applause, as if it would burst.' },
      ]
    },
  ]
};

/**
 * N1 Lesson 13 — たりとも～ない／といえども
 * Not even ~, although (formal)
 */

import type { LessonData } from '$lib/types';

export const LESSON_13_DATA: LessonData = {
  lessonNumber: 13,
  title: 'たりとも～ない／といえども (Not even / Even though)',
  vocabulary: [
    { japanese: '規則', kana: 'きそく', vietnamese: 'quy tắc', english: 'rule, regulation', type: 'main', example: '規則を厳守しなければならない。' },
    { japanese: '厳格', kana: 'げんかく', vietnamese: 'nghiêm khắc', english: 'strict, rigorous', type: 'main', example: '厳格な教育を受けた。' },
    { japanese: '遵守', kana: 'じゅんしゅ', vietnamese: 'tuân thủ', english: 'compliance, observance', type: 'main', example: '法律の遵守は義務だ。' },
    { japanese: '例外', kana: 'れいがい', vietnamese: 'ngoại lệ', english: 'exception', type: 'main', example: '例外は一切認めない。' },
    { japanese: '違反', kana: 'いはん', vietnamese: 'vi phạm', english: 'violation, infringement', type: 'main', example: '交通違反で罰金を払った。' },
    { japanese: '処罰', kana: 'しょばつ', vietnamese: 'xử phạt', english: 'punishment, penalty', type: 'main', example: '違反者は厳しく処罰される。' },
    { japanese: '権限', kana: 'けんげん', vietnamese: 'quyền hạn', english: 'authority, power', type: 'main', example: '彼にはその権限がない。' },
    { japanese: '義務', kana: 'ぎむ', vietnamese: 'nghĩa vụ', english: 'duty, obligation', type: 'main', example: '納税は国民の義務だ。' },
    { japanese: '妥協', kana: 'だきょう', vietnamese: 'thỏa hiệp', english: 'compromise', type: 'main', example: '品質に妥協はしない。' },
    { japanese: '容赦', kana: 'ようしゃ', vietnamese: 'tha thứ, khoan dung', english: 'mercy, leniency', type: 'main', example: '容赦なく批判された。' },
    { japanese: '一瞬', kana: 'いっしゅん', vietnamese: 'một khoảnh khắc', english: 'a moment, an instant', type: 'main', example: '一瞬たりとも気を抜けない。' },
    { japanese: '怠る', kana: 'おこたる', vietnamese: 'lơ là, bỏ bê', english: 'to neglect, to be lazy about', type: 'additional', example: '準備を怠ってはならない。' },
    { japanese: '侵害', kana: 'しんがい', vietnamese: 'xâm phạm', english: 'infringement, violation', type: 'additional', example: '人権を侵害してはならない。' },
    { japanese: '断固', kana: 'だんこ', vietnamese: 'kiên quyết', english: 'firmly, resolutely', type: 'additional', example: '断固として反対する。' },
    { japanese: '公正', kana: 'こうせい', vietnamese: 'công bằng', english: 'fair, impartial', type: 'additional', example: '公正な判断が求められる。' },
  ],
  grammar: [
    {
      pattern: '～たりとも～ない',
      vietnamese: 'Dù chỉ ~ cũng không ~',
      english: 'Not even ~, not a single ~',
      explanation: 'Biểu thị ngay cả một lượng nhỏ nhất cũng không được phép hoặc không thể. Thường đi với số lượng nhỏ: 一秒たりとも, 一歩たりとも, 一円たりとも. Mang sắc thái nghiêm túc, quyết tâm.',
      type: 'main',
      examples: [
        { japanese: '一秒たりとも無駄にしてはいけない。', vietnamese: 'Dù chỉ một giây cũng không được lãng phí.', english: 'You must not waste even a single second.' },
        { japanese: '一歩たりとも譲らない。', vietnamese: 'Dù chỉ một bước cũng không nhượng bộ.', english: 'I will not yield even a single step.' },
      ]
    },
    {
      pattern: '～といえども',
      vietnamese: 'Dù là ~ đi nữa, mặc dù là ~',
      english: 'Even though ~, although ~ (formal)',
      explanation: 'Biểu thị nhượng bộ trang trọng. Dù A có đúng đi nữa, B vẫn áp dụng. Tương tự ～ても nhưng trang trọng, dùng trong văn viết và phát biểu chính thức.',
      type: 'main',
      examples: [
        { japanese: '社長といえども、法律には従わなければならない。', vietnamese: 'Dù là giám đốc đi nữa cũng phải tuân theo pháp luật.', english: 'Even the company president must obey the law.' },
        { japanese: 'いかに優秀といえども、一人では限界がある。', vietnamese: 'Dù có giỏi đến mấy, một mình cũng có giới hạn.', english: 'No matter how excellent, there are limits to what one person can do.' },
      ]
    },
    {
      pattern: '～とて',
      vietnamese: 'Dù ~ đi nữa, cho dù ~',
      english: 'Even if ~, even though ~',
      explanation: 'Biểu thị nhượng bộ, tương tự ～ても nhưng mang tính văn chương cổ kính hơn. Thường dùng trong văn viết hoặc diễn đạt trang trọng. Đi với danh từ hoặc thể thường.',
      type: 'main',
      examples: [
        { japanese: '子供とて、許されることではない。', vietnamese: 'Dù là trẻ con đi nữa, đó cũng không phải là điều được phép.', english: 'Even for a child, it is not something that can be forgiven.' },
        { japanese: '泣いたとて、何も変わらない。', vietnamese: 'Dù có khóc đi nữa, chẳng gì thay đổi.', english: 'Even if you cry, nothing will change.' },
      ]
    },
    {
      pattern: '～であれ',
      vietnamese: 'Dù là ~ đi nữa, bất kể là ~',
      english: 'Even if it is ~, no matter what ~',
      explanation: 'Biểu thị nhượng bộ mạnh, thường đi với danh từ. Nhấn mạnh rằng dù trong bất kỳ trường hợp nào, kết luận vẫn không đổi. Dạng: N であれ. Cũng dùng lặp: AであれBであれ (dù A hay B).',
      type: 'additional',
      examples: [
        { japanese: 'たとえ大統領であれ、法の下では平等だ。', vietnamese: 'Dù là tổng thống đi nữa, trước pháp luật đều bình đẳng.', english: 'Even if one is the president, they are equal under the law.' },
        { japanese: '理由が何であれ、暴力は許されない。', vietnamese: 'Bất kể lý do là gì, bạo lực đều không được chấp nhận.', english: 'Whatever the reason, violence is unacceptable.' },
      ]
    },
  ]
};

/**
 * N2 Lesson 06 — くせに／にもかかわらず／ものの
 * Contradiction, despite
 */

import type { LessonData } from '$lib/types';

export const LESSON_06_DATA: LessonData = {
  lessonNumber: 6,
  title: 'くせに／にもかかわらず／ものの (Even though / Despite / Although)',
  vocabulary: [
    { japanese: '期待', kana: 'きたい', vietnamese: 'kỳ vọng', english: 'expectation', type: 'main', example: '期待に応えるように頑張る。' },
    { japanese: '予想', kana: 'よそう', vietnamese: 'dự đoán', english: 'prediction, expectation', type: 'main', example: '予想に反して、結果は良かった。' },
    { japanese: '裏切る', kana: 'うらぎる', vietnamese: 'phản bội', english: 'to betray', type: 'main', example: '友人の信頼を裏切った。' },
    { japanese: '意外', kana: 'いがい', vietnamese: 'bất ngờ, ngoài dự kiến', english: 'unexpected, surprising', type: 'main', example: '意外な結果に驚いた。' },
    { japanese: '反対', kana: 'はんたい', vietnamese: 'phản đối', english: 'opposition, opposite', type: 'main', example: '両親に反対された。' },
    { japanese: '矛盾', kana: 'むじゅん', vietnamese: 'mâu thuẫn', english: 'contradiction', type: 'main', example: '言っていることが矛盾している。' },
    { japanese: '実際', kana: 'じっさい', vietnamese: 'thực tế', english: 'actually, in reality', type: 'main', example: '実際にやってみるとそうでもなかった。' },
    { japanese: '表面', kana: 'ひょうめん', vietnamese: 'bề mặt', english: 'surface', type: 'additional', example: '表面的には穏やかだった。' },
    { japanese: '態度', kana: 'たいど', vietnamese: 'thái độ', english: 'attitude', type: 'main', example: '彼の態度は矛盾している。' },
    { japanese: '威張る', kana: 'いばる', vietnamese: 'hống hách, khoe khoang', english: 'to be bossy, to boast', type: 'main', example: '何も知らないくせに威張っている。' },
    { japanese: '困難', kana: 'こんなん', vietnamese: 'khó khăn', english: 'difficulty, hardship', type: 'main', example: '困難にもかかわらず、最後までやり遂げた。' },
    { japanese: '覚悟', kana: 'かくご', vietnamese: 'giác ngộ, sẵn sàng', english: 'readiness, preparedness', type: 'additional', example: '覚悟はしていたものの、やはり辛かった。' },
    { japanese: '自覚', kana: 'じかく', vietnamese: 'tự giác', english: 'self-awareness', type: 'additional', example: '自覚がないくせに文句を言う。' },
    { japanese: '皮肉', kana: 'ひにく', vietnamese: 'mỉa mai, châm biếm', english: 'irony, sarcasm', type: 'main', example: 'それは皮肉な結果だった。' },
    { japanese: '中途半端', kana: 'ちゅうとはんぱ', vietnamese: 'nửa vời, dở dang', english: 'half-hearted, incomplete', type: 'main', example: '中途半端なやり方では成功しない。' },
  ],
  grammar: [
    {
      pattern: '～くせに',
      vietnamese: 'Mặc dù ~ mà lại (trách móc)',
      english: 'Even though ~, despite ~ (critical)',
      explanation: 'Biểu thị sự mâu thuẫn với sắc thái chỉ trích, trách móc, coi thường. Thường dùng khi nói về người khác.',
      type: 'main',
      examples: [
        { japanese: '何も知らないくせに、偉そうに話す。', vietnamese: 'Mặc dù không biết gì mà nói chuyện ra vẻ ta đây.', english: 'Even though he knows nothing, he talks as if he is important.' },
        { japanese: '自分でやらないくせに、人の仕事に文句を言う。', vietnamese: 'Mặc dù tự mình không làm mà lại phàn nàn việc người khác.', english: 'Even though he does not do it himself, he complains about others\' work.' },
      ]
    },
    {
      pattern: '～にもかかわらず',
      vietnamese: 'Bất chấp ~, mặc dù ~',
      english: 'Despite ~, in spite of ~',
      explanation: 'Biểu thị kết quả trái ngược với dự kiến. Trang trọng, khách quan hơn くせに. Dùng được trong văn viết lẫn văn nói.',
      type: 'main',
      examples: [
        { japanese: '雨にもかかわらず、多くの人が集まった。', vietnamese: 'Bất chấp mưa, nhiều người vẫn tập trung đông.', english: 'Despite the rain, many people gathered.' },
        { japanese: '努力したにもかかわらず、試験に落ちてしまった。', vietnamese: 'Mặc dù đã nỗ lực nhưng vẫn trượt kỳ thi.', english: 'Despite my efforts, I failed the exam.' },
      ]
    },
    {
      pattern: '～ものの',
      vietnamese: 'Tuy rằng ~ nhưng',
      english: 'Although ~, even though ~',
      explanation: 'Biểu thị sự thừa nhận vế trước nhưng kết quả hoặc tình hình thực tế khác với kỳ vọng. Thường dùng trong văn viết.',
      type: 'main',
      examples: [
        { japanese: '本は買ったものの、まだ読んでいない。', vietnamese: 'Tuy đã mua sách nhưng vẫn chưa đọc.', english: 'Although I bought the book, I have not read it yet.' },
        { japanese: '日本語を勉強しているものの、まだうまく話せない。', vietnamese: 'Tuy đang học tiếng Nhật nhưng vẫn chưa nói giỏi.', english: 'Although I am studying Japanese, I still cannot speak well.' },
      ]
    },
    {
      pattern: '～とはいえ',
      vietnamese: 'Tuy nói là ~ nhưng, dẫu cho ~',
      english: 'Although ~, having said that ~',
      explanation: 'Thừa nhận sự thật ở vế trước nhưng bổ sung điều kiện hoặc giới hạn ở vế sau. Trang trọng, thường dùng trong văn viết.',
      type: 'main',
      examples: [
        { japanese: '春とはいえ、まだ寒い日が続いている。', vietnamese: 'Tuy nói là mùa xuân nhưng vẫn còn những ngày lạnh.', english: 'Although it is spring, cold days continue.' },
        { japanese: '子供とはいえ、やっていいことと悪いことの区別はつくはずだ。', vietnamese: 'Dẫu là trẻ con nhưng phải phân biệt được việc nên làm và không nên làm.', english: 'Even though they are children, they should be able to tell right from wrong.' },
      ]
    },
  ]
};

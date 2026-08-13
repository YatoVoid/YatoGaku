/**
 * N1 Lesson 10 — 極まりない／きわまる／限りだ
 * Extremely ~, the utmost ~
 */

import type { LessonData } from '$lib/types';

export const LESSON_10_DATA: LessonData = {
  lessonNumber: 10,
  title: '極まりない／きわまる／限りだ (Cực kỳ ~ / Vô cùng ~)',
  vocabulary: [
    { japanese: '感激', kana: 'かんげき', vietnamese: 'cảm kích, xúc động', english: 'deeply moved, impressed', type: 'main', example: '彼の言葉に感激した。' },
    { japanese: '憤慨', kana: 'ふんがい', vietnamese: 'phẫn nộ', english: 'indignation, resentment', type: 'main', example: '不正に対して憤慨した。' },
    { japanese: '愉快', kana: 'ゆかい', vietnamese: 'vui vẻ, thú vị', english: 'pleasant, delightful', type: 'main', example: '愉快な仲間と過ごす。' },
    { japanese: '不愉快', kana: 'ふゆかい', vietnamese: 'khó chịu', english: 'unpleasant, disagreeable', type: 'main', example: '不愉快な思いをした。' },
    { japanese: '痛恨', kana: 'つうこん', vietnamese: 'đau đớn, thống hận', english: 'bitter regret, deep remorse', type: 'main', example: '痛恨のミスを犯した。' },
    { japanese: '喜悦', kana: 'きえつ', vietnamese: 'hân hoan, vui mừng', english: 'joy, delight', type: 'main', example: '合格の喜悦に浸る。' },
    { japanese: '絶望', kana: 'ぜつぼう', vietnamese: 'tuyệt vọng', english: 'despair, hopelessness', type: 'main', example: '絶望的な状況に陥った。' },
    { japanese: '激怒', kana: 'げきど', vietnamese: 'giận dữ, nổi giận', english: 'rage, fury', type: 'main', example: '上司の発言に激怒した。' },
    { japanese: '恐怖', kana: 'きょうふ', vietnamese: 'sợ hãi, kinh hoàng', english: 'fear, terror', type: 'main', example: '恐怖で体が震えた。' },
    { japanese: '屈辱', kana: 'くつじょく', vietnamese: 'nhục nhã', english: 'humiliation, disgrace', type: 'main', example: '屈辱を味わった。' },
    { japanese: '歓喜', kana: 'かんき', vietnamese: 'hoan hỉ, vui sướng', english: 'great joy, elation', type: 'main', example: '優勝の歓喜に沸いた。' },
    { japanese: '悲嘆', kana: 'ひたん', vietnamese: 'bi thương, đau buồn', english: 'grief, lamentation', type: 'additional', example: '友人の死を悲嘆した。' },
    { japanese: '興奮', kana: 'こうふん', vietnamese: 'hưng phấn, kích động', english: 'excitement, agitation', type: 'additional', example: '興奮して眠れなかった。' },
    { japanese: '極端', kana: 'きょくたん', vietnamese: 'cực đoan', english: 'extreme, radical', type: 'additional', example: '極端な意見は避けるべきだ。' },
    { japanese: '甚大', kana: 'じんだい', vietnamese: 'to lớn, nghiêm trọng', english: 'enormous, immense', type: 'additional', example: '台風による甚大な被害が出た。' },
  ],
  grammar: [
    {
      pattern: '～極まりない',
      vietnamese: 'Cực kỳ ~, vô cùng ~',
      english: 'Extremely ~, utterly ~',
      explanation: 'Biểu thị mức độ cực đoan của một tính chất. Đi với tính từ đuôi な (bỏ な). Thường dùng trong văn viết trang trọng, mang sắc thái tiêu cực nhiều hơn.',
      type: 'main',
      examples: [
        { japanese: 'あの発言は失礼極まりない。', vietnamese: 'Phát ngôn đó cực kỳ thất lễ.', english: 'That remark is utterly rude.' },
        { japanese: '彼の態度は不愉快極まりない。', vietnamese: 'Thái độ của anh ta vô cùng khó chịu.', english: 'His attitude is extremely unpleasant.' },
      ]
    },
    {
      pattern: '～きわまる／きわまりない',
      vietnamese: 'Cực kỳ ~, ~ đến tột độ',
      english: 'To be extremely ~, to be the height of ~',
      explanation: 'Tương tự ～極まりない nhưng ～きわまる là dạng động từ (trang trọng hơn). Cả hai đều nhấn mạnh mức độ cao nhất. ～きわまる thường đi với danh từ qua trợ từ の.',
      type: 'main',
      examples: [
        { japanese: '危険きわまる行為だ。', vietnamese: 'Đó là hành vi nguy hiểm cực độ.', english: 'That is an extremely dangerous act.' },
        { japanese: '感動きわまって涙が出た。', vietnamese: 'Xúc động đến cùng cực nên đã rơi nước mắt.', english: 'I was so deeply moved that tears came out.' },
      ]
    },
    {
      pattern: '～限りだ',
      vietnamese: 'Thật là ~, vô cùng ~',
      english: 'To feel extremely ~, ~ to the utmost',
      explanation: 'Biểu thị cảm xúc mãnh liệt của người nói. Đi với tính từ い hoặc な (な → な限りだ). Chỉ dùng để diễn tả cảm xúc cá nhân.',
      type: 'main',
      examples: [
        { japanese: '息子が合格して嬉しい限りだ。', vietnamese: 'Con trai đỗ, tôi vui mừng vô cùng.', english: 'I am overjoyed that my son passed.' },
        { japanese: '一人暮らしは寂しい限りだ。', vietnamese: 'Sống một mình thật cô đơn vô cùng.', english: 'Living alone is extremely lonely.' },
      ]
    },
    {
      pattern: '～この上ない',
      vietnamese: 'Không gì hơn ~, ~ nhất',
      english: 'Nothing more ~ than, the most ~',
      explanation: 'Biểu thị mức độ cao nhất không thể vượt qua. Đi với tính từ い (bỏ い) hoặc tính từ な (bỏ な). Dùng trong văn viết trang trọng.',
      type: 'additional',
      examples: [
        { japanese: '彼女の笑顔は美しいことこの上ない。', vietnamese: 'Nụ cười của cô ấy đẹp không gì sánh bằng.', english: 'Her smile is the most beautiful thing.' },
        { japanese: '今回の結果は残念この上ない。', vietnamese: 'Kết quả lần này đáng tiếc không gì hơn.', english: 'This result is the most regrettable.' },
      ]
    },
  ]
};

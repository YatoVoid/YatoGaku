/**
 * N1 Lesson 02 — にほかならない／に相違ない
 * Nothing but, no doubt — Certainty & conviction
 */

import type { LessonData } from '$lib/types';

export const LESSON_02_DATA: LessonData = {
  lessonNumber: 2,
  title: 'にほかならない／に相違ない (Nothing other than / Surely)',
  vocabulary: [
    { japanese: '確信', kana: 'かくしん', vietnamese: 'xác tín, tin chắc', english: 'conviction, firm belief', type: 'main', example: '成功を確信している。' },
    { japanese: '真実', kana: 'しんじつ', vietnamese: 'sự thật', english: 'truth', type: 'main', example: '真実は一つしかない。' },
    { japanese: '事実', kana: 'じじつ', vietnamese: 'sự thực', english: 'fact', type: 'main', example: 'これは紛れもない事実だ。' },
    { japanese: '断言', kana: 'だんげん', vietnamese: 'khẳng định, đoán chắc', english: 'assertion, declaration', type: 'main', example: '彼は自信を持って断言した。' },
    { japanese: '疑いない', kana: 'うたがいない', vietnamese: 'không nghi ngờ gì', english: 'undoubtable', type: 'main', example: '彼の才能は疑いない。' },
    { japanese: '明白', kana: 'めいはく', vietnamese: 'rõ ràng, minh bạch', english: 'obvious, clear', type: 'main', example: '明白な証拠がある。' },
    { japanese: '根拠', kana: 'こんきょ', vietnamese: 'căn cứ, cơ sở', english: 'basis, grounds', type: 'main', example: '科学的根拠に基づいている。' },
    { japanese: '証拠', kana: 'しょうこ', vietnamese: 'bằng chứng', english: 'evidence, proof', type: 'main', example: '証拠が不十分だ。' },
    { japanese: '必然', kana: 'ひつぜん', vietnamese: 'tất nhiên, tất yếu', english: 'inevitable, necessary', type: 'main', example: 'これは必然の結果だ。' },
    { japanese: '相違', kana: 'そうい', vietnamese: 'sự khác biệt, sai khác', english: 'difference, discrepancy', type: 'main', example: '両者の間に相違はない。' },
    { japanese: '裏付ける', kana: 'うらづける', vietnamese: 'chứng thực, củng cố', english: 'to substantiate', type: 'main', example: 'データが理論を裏付けている。' },
    { japanese: '紛れもない', kana: 'まぎれもない', vietnamese: 'rõ ràng, chắc chắn', english: 'unmistakable, certain', type: 'additional', example: 'これは紛れもない事実だ。' },
    { japanese: '揺るぎない', kana: 'ゆるぎない', vietnamese: 'không lay chuyển', english: 'unwavering, steadfast', type: 'additional', example: '揺るぎない信念を持つ。' },
    { japanese: '過言', kana: 'かごん', vietnamese: 'lời nói quá', english: 'overstatement', type: 'additional', example: '過言ではないと思う。' },
    { japanese: '単なる', kana: 'たんなる', vietnamese: 'chỉ là, đơn thuần', english: 'mere, simple', type: 'additional', example: 'これは単なる偶然ではない。' },
  ],
  grammar: [
    {
      pattern: '～にほかならない',
      vietnamese: 'Không gì khác hơn là ~, chính là ~',
      english: 'Nothing but ~, none other than ~',
      explanation: 'Dùng để khẳng định mạnh mẽ rằng điều đó chính là ~, không phải gì khác. Thường dùng trong văn viết trang trọng để nhấn mạnh nguyên nhân hoặc bản chất.',
      type: 'main',
      examples: [
        { japanese: '彼が成功したのは、努力の結果にほかならない。', vietnamese: 'Việc anh ấy thành công không gì khác hơn là kết quả của sự nỗ lực.', english: 'His success is nothing but the result of hard work.' },
        { japanese: 'この問題が起きたのは、準備不足にほかならない。', vietnamese: 'Vấn đề này xảy ra không gì khác hơn là do thiếu chuẩn bị.', english: 'This problem occurred due to nothing other than lack of preparation.' },
      ]
    },
    {
      pattern: '～に相違ない',
      vietnamese: 'Chắc chắn là ~, không nghi ngờ gì ~',
      english: 'There is no doubt that ~, certainly ~',
      explanation: 'Cách diễn đạt trang trọng, văn viết của ～に違いない. Dùng để khẳng định sự chắc chắn dựa trên suy luận hoặc bằng chứng. Thường gặp trong văn bản pháp lý, học thuật.',
      type: 'main',
      examples: [
        { japanese: 'この遺跡は千年以上前のものに相違ない。', vietnamese: 'Di tích này chắc chắn là từ hơn một nghìn năm trước.', english: 'This ruin is certainly from over a thousand years ago.' },
        { japanese: '犯人は内部の者に相違ない。', vietnamese: 'Thủ phạm chắc chắn là người trong nội bộ.', english: 'The culprit is undoubtedly an insider.' },
      ]
    },
    {
      pattern: '～にすぎない',
      vietnamese: 'Chỉ là ~, chẳng qua chỉ ~',
      english: 'Nothing more than ~, merely ~',
      explanation: 'Dùng để hạ thấp, giảm nhẹ mức độ quan trọng của sự việc. Nhấn mạnh rằng điều đó không có gì đặc biệt hay quan trọng hơn.',
      type: 'main',
      examples: [
        { japanese: 'これは私の個人的な意見にすぎない。', vietnamese: 'Đây chỉ là ý kiến cá nhân của tôi mà thôi.', english: 'This is nothing more than my personal opinion.' },
        { japanese: '彼は単なるアルバイトにすぎない。', vietnamese: 'Anh ta chẳng qua chỉ là nhân viên bán thời gian.', english: 'He is merely a part-time worker.' },
      ]
    },
    {
      pattern: '～に決まっている',
      vietnamese: 'Chắc chắn là ~, nhất định là ~',
      english: 'It is certain that ~, must be ~',
      explanation: 'Biểu thị sự xác tín mạnh mẽ của người nói, thường mang tính chủ quan. So với ～に相違ない (trang trọng), mẫu này tự nhiên hơn trong hội thoại nhưng vẫn dùng ở cấp độ N1 trong ngữ cảnh phức tạp.',
      type: 'additional',
      examples: [
        { japanese: 'あの店は人気があるから、並んでいるに決まっている。', vietnamese: 'Quán đó nổi tiếng nên chắc chắn là phải xếp hàng.', english: 'That restaurant is popular, so there must be a line.' },
        { japanese: 'こんな簡単な問題、間違えるに決まっていない。', vietnamese: 'Câu hỏi đơn giản thế này, chắc chắn không thể sai.', english: 'With such a simple question, there is no way to get it wrong.' },
      ]
    },
  ]
};

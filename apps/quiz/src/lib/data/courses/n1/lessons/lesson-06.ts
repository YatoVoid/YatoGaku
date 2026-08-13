/**
 * N1 Lesson 06 — ならでは／ともなると
 * Unique to, when it comes to — Specialness & status
 */

import type { LessonData } from '$lib/types';

export const LESSON_06_DATA: LessonData = {
  lessonNumber: 6,
  title: 'ならでは／ともなると (Chỉ riêng ~ mới có / Khi đã ở vị thế ~)',
  vocabulary: [
    { japanese: '独自', kana: 'どくじ', vietnamese: 'độc đáo, riêng biệt', english: 'unique, original', type: 'main', example: '独自の文化が発展した。' },
    { japanese: '特有', kana: 'とくゆう', vietnamese: 'đặc hữu, riêng có', english: 'peculiar to, characteristic of', type: 'main', example: '日本特有の文化だ。' },
    { japanese: '格別', kana: 'かくべつ', vietnamese: 'đặc biệt, khác hẳn', english: 'exceptional, special', type: 'main', example: '手作りの味は格別だ。' },
    { japanese: '地位', kana: 'ちい', vietnamese: 'địa vị', english: 'status, position', type: 'main', example: '社会的地位が高い。' },
    { japanese: '立場', kana: 'たちば', vietnamese: 'lập trường, vị trí', english: 'standpoint, position', type: 'main', example: '管理者の立場ともなると責任が重い。' },
    { japanese: '風格', kana: 'ふうかく', vietnamese: 'phong cách, dáng vẻ', english: 'dignity, style', type: 'main', example: '歴史ある建物には風格がある。' },
    { japanese: '威厳', kana: 'いげん', vietnamese: 'uy nghiêm', english: 'dignity, majesty', type: 'main', example: '校長としての威厳を保つ。' },
    { japanese: '名声', kana: 'めいせい', vietnamese: 'danh tiếng', english: 'fame, reputation', type: 'main', example: '世界的な名声を得た。' },
    { japanese: '本場', kana: 'ほんば', vietnamese: 'nơi chính gốc, bản xứ', english: 'authentic place, home of', type: 'main', example: '本場の味を楽しむ。' },
    { japanese: '醍醐味', kana: 'だいごみ', vietnamese: 'tinh túy, cái hay nhất', english: 'the true charm, best part', type: 'main', example: '旅の醍醐味は出会いだ。' },
    { japanese: '相応しい', kana: 'ふさわしい', vietnamese: 'xứng đáng, phù hợp', english: 'suitable, appropriate', type: 'main', example: 'リーダーに相応しい人物だ。' },
    { japanese: '唯一無二', kana: 'ゆいいつむに', vietnamese: 'duy nhất vô nhị', english: 'one and only, unique', type: 'additional', example: '唯一無二の存在だ。' },
    { japanese: '際立つ', kana: 'きわだつ', vietnamese: 'nổi bật', english: 'to stand out, to be conspicuous', type: 'additional', example: '彼女の才能は際立っている。' },
    { japanese: '貫禄', kana: 'かんろく', vietnamese: 'phong thái, uy phong', english: 'presence, dignity', type: 'additional', example: '社長としての貫禄が出てきた。' },
    { japanese: '伴う', kana: 'ともなう', vietnamese: 'đi kèm, kèm theo', english: 'to accompany, to involve', type: 'additional', example: '責任が伴う仕事だ。' },
  ],
  grammar: [
    {
      pattern: '～ならでは（の）',
      vietnamese: 'Chỉ riêng ~ mới có, đặc trưng chỉ ~ mới ~',
      english: 'Unique to ~, only possible with ~',
      explanation: 'Dùng để ca ngợi đặc điểm tích cực mà chỉ riêng ~ mới có. Luôn mang sắc thái khen ngợi. ～ならではの + danh từ (bổ nghĩa), ～ならではだ (kết câu).',
      type: 'main',
      examples: [
        { japanese: 'この景色は北海道ならではの美しさだ。', vietnamese: 'Phong cảnh này là vẻ đẹp chỉ riêng Hokkaido mới có.', english: 'This scenery is a beauty unique to Hokkaido.' },
        { japanese: '手作りならではの温かみがある。', vietnamese: 'Có sự ấm áp mà chỉ đồ thủ công mới mang lại.', english: 'There is a warmth that only handmade items can offer.' },
      ]
    },
    {
      pattern: '～ともなると',
      vietnamese: 'Khi đã đến mức ~, khi đã ở vị thế ~',
      english: 'When it comes to ~, once you reach the level of ~',
      explanation: 'Biểu thị rằng khi ai đó đạt đến một vị trí, mức độ nhất định thì tình hình sẽ khác đi (thường là trách nhiệm, kỳ vọng tăng lên). Nhấn mạnh sự thay đổi đi kèm với vị thế.',
      type: 'main',
      examples: [
        { japanese: '部長ともなると、部下の管理も重要な仕事だ。', vietnamese: 'Khi đã ở vị trí trưởng phòng thì quản lý cấp dưới cũng là công việc quan trọng.', english: 'When you reach the level of department head, managing subordinates is also an important task.' },
        { japanese: '大学生ともなると、自分で考えて行動すべきだ。', vietnamese: 'Khi đã là sinh viên đại học thì nên tự suy nghĩ và hành động.', english: 'Once you are a university student, you should think and act on your own.' },
      ]
    },
    {
      pattern: '～ともなれば',
      vietnamese: 'Nếu đã đến mức ~, một khi đã ở vị thế ~',
      english: 'If it comes to ~, when one reaches ~',
      explanation: 'Gần nghĩa với ～ともなると nhưng mang tính giả định hơn (なれば = nếu). Dùng khi nói về tình huống chưa xảy ra hoặc nói chung chung. Cũng nhấn mạnh trách nhiệm và kỳ vọng.',
      type: 'main',
      examples: [
        { japanese: '社長ともなれば、会社全体の責任を負わなければならない。', vietnamese: 'Nếu đã ở vị thế giám đốc thì phải chịu trách nhiệm toàn bộ công ty.', english: 'If one is the president, one must bear responsibility for the entire company.' },
        { japanese: 'オリンピックともなれば、世界中が注目する。', vietnamese: 'Một khi đã là Olympic thì cả thế giới đều chú ý.', english: 'When it comes to the Olympics, the whole world pays attention.' },
      ]
    },
    {
      pattern: '～ならではの',
      vietnamese: 'Đặc trưng riêng của ~, chỉ ~ mới có',
      english: '~ -specific, uniquely ~',
      explanation: 'Dạng bổ nghĩa cho danh từ của ～ならでは. Đặt trước danh từ để nhấn mạnh đặc điểm chỉ riêng ~ mới có. Luôn tích cực. Rất phổ biến trong quảng cáo, du lịch, ẩm thực.',
      type: 'additional',
      examples: [
        { japanese: '京都ならではの風情を楽しんだ。', vietnamese: 'Tôi đã tận hưởng phong vị chỉ riêng Kyoto mới có.', english: 'I enjoyed the charm unique to Kyoto.' },
        { japanese: 'プロならではの技術に感動した。', vietnamese: 'Tôi cảm động trước kỹ thuật mà chỉ dân chuyên nghiệp mới có.', english: 'I was impressed by the technique unique to professionals.' },
      ]
    },
  ]
};

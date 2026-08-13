/**
 * N1 Lesson 11 — めく／じみた／ぶる
 * Seeming, -ish, pretending
 */

import type { LessonData } from '$lib/types';

export const LESSON_11_DATA: LessonData = {
  lessonNumber: 11,
  title: 'めく／じみた／ぶる (Có vẻ ~ / Giả vờ ~)',
  vocabulary: [
    { japanese: '皮肉', kana: 'ひにく', vietnamese: 'mỉa mai, châm biếm', english: 'irony, sarcasm', type: 'main', example: '皮肉めいた言い方をする。' },
    { japanese: '謎', kana: 'なぞ', vietnamese: 'bí ẩn, câu đố', english: 'mystery, riddle', type: 'main', example: '謎めいた微笑みを浮かべた。' },
    { japanese: '春', kana: 'はる', vietnamese: 'mùa xuân', english: 'spring', type: 'main', example: '春めいた陽気になってきた。' },
    { japanese: '所帯', kana: 'しょたい', vietnamese: 'gia đình, hộ gia đình', english: 'household, family', type: 'main', example: '所帯じみた話ばかりする。' },
    { japanese: '偽善', kana: 'ぎぜん', vietnamese: 'giả thiện, đạo đức giả', english: 'hypocrisy', type: 'main', example: '偽善ぶった態度が嫌いだ。' },
    { japanese: '気取る', kana: 'きどる', vietnamese: 'làm bộ, ra vẻ', english: 'to put on airs', type: 'main', example: '彼はいつも紳士ぶっている。' },
    { japanese: '外見', kana: 'がいけん', vietnamese: 'vẻ ngoài', english: 'outward appearance', type: 'main', example: '外見で人を判断しない。' },
    { japanese: '雰囲気', kana: 'ふんいき', vietnamese: 'bầu không khí', english: 'atmosphere, mood', type: 'main', example: '秋めいた雰囲気が漂う。' },
    { japanese: '装う', kana: 'よそおう', vietnamese: 'giả vờ, trang điểm', english: 'to pretend, to dress up', type: 'main', example: '平静を装っていた。' },
    { japanese: '見せかけ', kana: 'みせかけ', vietnamese: 'bề ngoài, vẻ bên ngoài', english: 'pretense, facade', type: 'main', example: '優しさは見せかけに過ぎない。' },
    { japanese: '虚勢', kana: 'きょせい', vietnamese: 'hư trương thanh thế', english: 'bluff, bravado', type: 'main', example: '虚勢を張っているだけだ。' },
    { japanese: '年寄り', kana: 'としより', vietnamese: 'người già', english: 'elderly person', type: 'additional', example: '年寄りじみたことを言う。' },
    { japanese: '大人', kana: 'おとな', vietnamese: 'người lớn', english: 'adult', type: 'additional', example: '大人ぶった態度を取る。' },
    { japanese: '憂い', kana: 'うれい', vietnamese: 'nỗi buồn, ưu tư', english: 'sorrow, melancholy', type: 'additional', example: '憂いげな表情を見せた。' },
    { japanese: '悲し', kana: 'かなし', vietnamese: 'buồn bã', english: 'sad, sorrowful', type: 'additional', example: '悲しげな目をしている。' },
  ],
  grammar: [
    {
      pattern: '～めく',
      vietnamese: 'Có vẻ ~, mang dáng vẻ ~',
      english: 'To seem like ~, to have an air of ~',
      explanation: 'Gắn vào danh từ để tạo động từ mang nghĩa "có vẻ như ~, mang dáng vẻ ~". Thường dùng với một số từ cố định: 春めく, 謎めく, 皮肉めく. Không dùng tự do với mọi danh từ.',
      type: 'main',
      examples: [
        { japanese: 'だいぶ春めいてきましたね。', vietnamese: 'Trời đã mang hơi thở mùa xuân rồi nhỉ.', english: 'It has become quite spring-like, hasn\'t it?' },
        { japanese: '彼女は謎めいた笑みを浮かべた。', vietnamese: 'Cô ấy nở một nụ cười đầy bí ẩn.', english: 'She wore a mysterious smile.' },
      ]
    },
    {
      pattern: '～じみた',
      vietnamese: 'Giống như ~, na ná ~',
      english: 'Resembling ~, -ish, smacking of ~',
      explanation: 'Gắn vào danh từ để tạo tính từ mang nghĩa tiêu cực "giống như ~, có mùi ~". Thường mang sắc thái chê bai hoặc coi thường. Ví dụ: 子供じみた (trẻ con), 所帯じみた (bà nội trợ).',
      type: 'main',
      examples: [
        { japanese: 'そんな子供じみたことはやめなさい。', vietnamese: 'Đừng làm chuyện trẻ con như vậy nữa.', english: 'Stop doing such childish things.' },
        { japanese: '所帯じみた格好をしている。', vietnamese: 'Ăn mặc kiểu bà nội trợ quá.', english: 'She is dressed in a frumpy, housewifely manner.' },
      ]
    },
    {
      pattern: '～ぶる',
      vietnamese: 'Giả vờ ~, làm ra vẻ ~',
      english: 'To pretend to be ~, to act ~',
      explanation: 'Gắn vào danh từ hoặc gốc tính từ い để tạo động từ nghĩa "giả vờ là ~, ra vẻ ~". Mang sắc thái phê phán, chỉ trích người làm bộ. Ví dụ: 偉ぶる, 知ったかぶる.',
      type: 'main',
      examples: [
        { japanese: '彼はいつも偉ぶっている。', vietnamese: 'Anh ta lúc nào cũng ra vẻ ta đây.', english: 'He always acts all high and mighty.' },
        { japanese: '知ったかぶりをしないでください。', vietnamese: 'Đừng làm ra vẻ biết tuốt.', english: 'Please don\'t pretend to know everything.' },
      ]
    },
    {
      pattern: '～げ',
      vietnamese: 'Có vẻ ~, trông ~',
      english: 'Seeming ~, appearing ~',
      explanation: 'Gắn vào gốc tính từ い (bỏ い) hoặc một số danh từ để tạo tính từ な mang nghĩa "có vẻ ~, trông ~". Diễn tả ấn tượng bên ngoài về cảm xúc/trạng thái. Ví dụ: 悲しげ, 嬉しげ, 自信ありげ.',
      type: 'additional',
      examples: [
        { japanese: '彼女は悲しげな表情で窓の外を見ていた。', vietnamese: 'Cô ấy nhìn ra ngoài cửa sổ với vẻ mặt buồn bã.', english: 'She was looking out the window with a sad expression.' },
        { japanese: '子供たちは楽しげに遊んでいた。', vietnamese: 'Bọn trẻ chơi đùa trông rất vui vẻ.', english: 'The children were playing, looking happy.' },
      ]
    },
  ]
};

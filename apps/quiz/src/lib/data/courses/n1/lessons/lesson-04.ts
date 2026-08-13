/**
 * N1 Lesson 04 — かたわら／がてら／ついでに
 * While doing, on the occasion of — Multitasking & efficiency
 */

import type { LessonData } from '$lib/types';

export const LESSON_04_DATA: LessonData = {
  lessonNumber: 4,
  title: 'かたわら／がてら／ついでに (Bên cạnh đó / Nhân tiện)',
  vocabulary: [
    { japanese: '兼業', kana: 'けんぎょう', vietnamese: 'kiêm nghiệp, làm thêm', english: 'side job, secondary occupation', type: 'main', example: '農業のかたわら兼業で収入を得ている。' },
    { japanese: '副業', kana: 'ふくぎょう', vietnamese: 'nghề phụ', english: 'side business', type: 'main', example: '副業として翻訳の仕事をしている。' },
    { japanese: '両立', kana: 'りょうりつ', vietnamese: 'song hành, cân bằng cả hai', english: 'balancing both, compatibility', type: 'main', example: '仕事と育児の両立は大変だ。' },
    { japanese: '片手間', kana: 'かたてま', vietnamese: 'tranh thủ, làm thêm bên cạnh', english: 'on the side, in spare time', type: 'main', example: '片手間にできる仕事ではない。' },
    { japanese: '効率', kana: 'こうりつ', vietnamese: 'hiệu suất', english: 'efficiency', type: 'main', example: '効率よく時間を使いたい。' },
    { japanese: '散歩', kana: 'さんぽ', vietnamese: 'đi dạo', english: 'walk, stroll', type: 'main', example: '散歩がてら買い物に行く。' },
    { japanese: '用事', kana: 'ようじ', vietnamese: 'việc cần làm', english: 'errand, business', type: 'main', example: '用事のついでに友人を訪ねた。' },
    { japanese: '同時に', kana: 'どうじに', vietnamese: 'đồng thời', english: 'simultaneously', type: 'main', example: '二つのことを同時に行う。' },
    { japanese: '合間', kana: 'あいま', vietnamese: 'khoảng trống, lúc rảnh', english: 'interval, spare moment', type: 'main', example: '仕事の合間に読書する。' },
    { japanese: '手際よく', kana: 'てぎわよく', vietnamese: 'khéo léo, nhanh nhẹn', english: 'efficiently, skillfully', type: 'main', example: '手際よく料理を作った。' },
    { japanese: '掛け持ち', kana: 'かけもち', vietnamese: 'kiêm nhiệm, làm nhiều việc', english: 'holding multiple positions', type: 'main', example: '二つの仕事を掛け持ちしている。' },
    { japanese: '傍ら', kana: 'かたわら', vietnamese: 'bên cạnh', english: 'beside, while', type: 'additional', example: '研究のかたわら執筆活動を続けた。' },
    { japanese: '怠らない', kana: 'おこたらない', vietnamese: 'không lơ là, không bỏ bê', english: 'to not neglect', type: 'additional', example: '本業を怠らないようにしている。' },
    { japanese: '器用', kana: 'きよう', vietnamese: 'khéo tay, đa năng', english: 'dexterous, skillful', type: 'additional', example: '彼は器用に何でもこなす。' },
    { japanese: '充実', kana: 'じゅうじつ', vietnamese: 'đầy đủ, sung mãn', english: 'fulfillment, enrichment', type: 'additional', example: '充実した毎日を送っている。' },
  ],
  grammar: [
    {
      pattern: '～かたわら',
      vietnamese: 'Bên cạnh việc ~, vừa ~ vừa ~',
      english: 'While ~ing, in addition to ~ing',
      explanation: 'Dùng khi ai đó làm một hoạt động chính và đồng thời làm thêm hoạt động phụ trong thời gian dài. Mang tính trang trọng, thường dùng trong văn viết. Hoạt động trước かたわら là việc chính.',
      type: 'main',
      examples: [
        { japanese: '彼は大学で教えるかたわら、小説を書いている。', vietnamese: 'Anh ấy bên cạnh việc dạy đại học, còn viết tiểu thuyết.', english: 'While teaching at university, he also writes novels.' },
        { japanese: '会社員として働くかたわら、ボランティア活動にも参加している。', vietnamese: 'Bên cạnh việc làm nhân viên công ty, cô ấy còn tham gia hoạt động tình nguyện.', english: 'While working as an office worker, she also participates in volunteer activities.' },
      ]
    },
    {
      pattern: '～がてら',
      vietnamese: 'Nhân tiện ~, tranh thủ ~',
      english: 'While ~ing, on the occasion of ~ing',
      explanation: 'Biểu thị việc tranh thủ làm thêm một việc khác nhân dịp đang làm việc chính. Khác với ついでに, がてら nhấn mạnh hai việc có mức độ quan trọng gần nhau. Thường đi với danh từ hoặc Vます.',
      type: 'main',
      examples: [
        { japanese: '散歩がてら、近くの本屋に寄った。', vietnamese: 'Nhân tiện đi dạo, tôi đã ghé hiệu sách gần đây.', english: 'While taking a walk, I stopped by the nearby bookstore.' },
        { japanese: '買い物がてら、友人の家を訪ねた。', vietnamese: 'Nhân tiện đi mua sắm, tôi đã ghé thăm nhà bạn.', english: 'On the occasion of shopping, I visited my friend\'s house.' },
      ]
    },
    {
      pattern: '～ついでに',
      vietnamese: 'Nhân tiện ~, tiện thể ~',
      english: 'While you\'re at it, taking the opportunity to ~',
      explanation: 'Biểu thị việc tranh thủ làm thêm việc phụ khi đang làm việc chính. Việc chính quan trọng hơn, việc sau chỉ là tranh thủ. Dùng được cả trong văn nói và viết.',
      type: 'main',
      examples: [
        { japanese: '出張のついでに、観光もしてきた。', vietnamese: 'Nhân tiện đi công tác, tôi cũng đi tham quan luôn.', english: 'While on a business trip, I also did some sightseeing.' },
        { japanese: 'コンビニに行くついでに、手紙を出してきてくれない？', vietnamese: 'Nhân tiện đi cửa hàng tiện lợi, gửi giúp tôi lá thư được không?', english: 'While you\'re going to the convenience store, could you mail this letter?' },
      ]
    },
    {
      pattern: '～かたがた',
      vietnamese: 'Nhân dịp ~, kiêm luôn việc ~',
      english: 'For the purpose of ~ and also ~',
      explanation: 'Biểu thị việc thực hiện hai mục đích cùng lúc. Rất trang trọng, thường dùng trong thư từ hoặc giao tiếp lịch sự. Thường đi với: お礼かたがた、ご挨拶かたがた、お見舞いかたがた.',
      type: 'additional',
      examples: [
        { japanese: 'お礼かたがた、先生のお宅を訪問した。', vietnamese: 'Nhân dịp cảm ơn, tôi đã đến thăm nhà thầy.', english: 'I visited the teacher\'s house for the purpose of expressing thanks.' },
        { japanese: 'ご挨拶かたがた、新商品のご紹介に参りました。', vietnamese: 'Nhân dịp chào hỏi, tôi đến để giới thiệu sản phẩm mới.', english: 'I have come to introduce our new product, also as a courtesy visit.' },
      ]
    },
  ]
};

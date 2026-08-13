/**
 * N2 Lesson 13 — たびに／際に／途中で
 * Every time, on the occasion, midway
 */

import type { LessonData } from '$lib/types';

export const LESSON_13_DATA: LessonData = {
  lessonNumber: 13,
  title: 'たびに／際に／途中で (Every time, on the occasion, midway)',
  vocabulary: [
    { japanese: '旅行', kana: 'りょこう', vietnamese: 'du lịch', english: 'travel, trip', type: 'main', example: '旅行のたびにお土産を買う。' },
    { japanese: '出張', kana: 'しゅっちょう', vietnamese: 'công tác', english: 'business trip', type: 'main', example: '出張の際に取引先を訪問する。' },
    { japanese: '行事', kana: 'ぎょうじ', vietnamese: 'sự kiện, lễ hội', english: 'event, ceremony', type: 'main', example: '学校の行事に参加する。' },
    { japanese: '機会', kana: 'きかい', vietnamese: 'cơ hội', english: 'opportunity, occasion', type: 'main', example: 'いい機会があれば挑戦したい。' },
    { japanese: '場面', kana: 'ばめん', vietnamese: 'cảnh, tình huống', english: 'scene, situation', type: 'main', example: '困った場面に遭遇した。' },
    { japanese: '帰省', kana: 'きせい', vietnamese: 'về quê', english: 'homecoming, returning home', type: 'main', example: '帰省のたびに故郷の変化に驚く。' },
    { japanese: '通勤', kana: 'つうきん', vietnamese: 'đi làm', english: 'commuting', type: 'main', example: '通勤の途中で事故があった。' },
    { japanese: '式典', kana: 'しきてん', vietnamese: 'lễ kỷ niệm, buổi lễ', english: 'ceremony', type: 'main', example: '卒業式典の際にスピーチをした。' },
    { japanese: '訪問', kana: 'ほうもん', vietnamese: 'thăm viếng', english: 'visit', type: 'main', example: '訪問の際はご連絡ください。' },
    { japanese: '途中', kana: 'とちゅう', vietnamese: 'giữa chừng, trên đường', english: 'on the way, midway', type: 'main', example: '仕事の途中で電話がかかってきた。' },
    { japanese: '思い出', kana: 'おもいで', vietnamese: 'kỷ niệm', english: 'memory, recollection', type: 'additional', example: '旅行のたびに素敵な思い出ができる。' },
    { japanese: '季節', kana: 'きせつ', vietnamese: 'mùa', english: 'season', type: 'additional', example: '季節が変わるたびに風邪をひく。' },
    { japanese: '中断', kana: 'ちゅうだん', vietnamese: 'gián đoạn', english: 'interruption, suspension', type: 'main', example: '作業の途中で中断された。' },
    { japanese: '再会', kana: 'さいかい', vietnamese: 'tái hội, gặp lại', english: 'reunion', type: 'main', example: '友人と再会するたびに昔を思い出す。' },
    { japanese: '注意事項', kana: 'ちゅういじこう', vietnamese: 'lưu ý, chú ý', english: 'precautions, notes', type: 'additional', example: '利用の際の注意事項を確認する。' },
  ],
  grammar: [
    {
      pattern: '～たびに',
      vietnamese: 'Mỗi khi ~, mỗi lần ~',
      english: 'Every time ~, whenever ~',
      explanation: 'Biểu thị một việc lặp đi lặp lại mỗi khi có một sự kiện nào đó. Dùng với động từ từ điển hoặc danh từ + の.',
      type: 'main',
      examples: [
        { japanese: '日本に行くたびに、新しい発見がある。', vietnamese: 'Mỗi lần đi Nhật, lại có phát hiện mới.', english: 'Every time I go to Japan, I make new discoveries.' },
        { japanese: '会うたびに、彼女はきれいになっている。', vietnamese: 'Mỗi lần gặp, cô ấy lại đẹp hơn.', english: 'Every time I meet her, she looks more beautiful.' },
      ]
    },
    {
      pattern: '～際（に）',
      vietnamese: 'Khi ~, nhân dịp ~',
      english: 'On the occasion of ~, when ~',
      explanation: 'Biểu thị thời điểm xảy ra sự việc. Văn phong trang trọng, thường dùng trong công văn, thông báo. Tương đương ときに nhưng lịch sự hơn.',
      type: 'main',
      examples: [
        { japanese: 'お帰りの際は、忘れ物のないようにご注意ください。', vietnamese: 'Khi quý khách ra về, xin hãy chú ý đừng quên đồ.', english: 'When you leave, please make sure you do not forget anything.' },
        { japanese: '申し込みの際に、身分証明書が必要です。', vietnamese: 'Khi đăng ký, cần giấy chứng minh nhân thân.', english: 'An identification document is required when applying.' },
      ]
    },
    {
      pattern: '～途中で／途中に',
      vietnamese: 'Giữa chừng ~, trên đường ~',
      english: 'In the middle of ~, on the way ~',
      explanation: 'Biểu thị sự việc xảy ra giữa chừng một hành động hoặc trên đường đi. 途中で nhấn mạnh hành động, 途中に nhấn mạnh thời điểm.',
      type: 'main',
      examples: [
        { japanese: '会議の途中で、急に停電になった。', vietnamese: 'Giữa chừng cuộc họp, bỗng nhiên mất điện.', english: 'In the middle of the meeting, there was a sudden power outage.' },
        { japanese: '学校に行く途中で、友達に会った。', vietnamese: 'Trên đường đi học, tôi gặp bạn.', english: 'On my way to school, I met a friend.' },
      ]
    },
    {
      pattern: '～最中に',
      vietnamese: 'Đang giữa lúc ~ (thì bất ngờ...)',
      english: 'Right in the middle of ~',
      explanation: 'Biểu thị đang ở đỉnh điểm của một hành động thì có sự việc bất ngờ xảy ra. Mang sắc thái bất ngờ, thường là phiền phức.',
      type: 'main',
      examples: [
        { japanese: '食事の最中に、地震が起きた。', vietnamese: 'Đang giữa bữa ăn thì động đất xảy ra.', english: 'An earthquake occurred right in the middle of our meal.' },
        { japanese: '試験の最中に、携帯電話が鳴った。', vietnamese: 'Đang giữa lúc thi thì điện thoại reo.', english: 'A cell phone rang right in the middle of the exam.' },
      ]
    },
  ]
};

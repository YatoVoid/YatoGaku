/**
 * N2 Lesson 05 — ばかり／ばかりか／ばかりに
 * Only, not only, because of
 */

import type { LessonData } from '$lib/types';

export const LESSON_05_DATA: LessonData = {
  lessonNumber: 5,
  title: 'ばかり／ばかりか／ばかりに (Only / Not only / Just because)',
  vocabulary: [
    { japanese: '文句', kana: 'もんく', vietnamese: 'lời phàn nàn', english: 'complaint', type: 'main', example: '文句ばかり言わないでください。' },
    { japanese: '無駄', kana: 'むだ', vietnamese: 'lãng phí, vô ích', english: 'waste, useless', type: 'main', example: 'お金を無駄にした。' },
    { japanese: '過剰', kana: 'かじょう', vietnamese: 'quá mức', english: 'excess, surplus', type: 'additional', example: '過剰な心配は体に悪い。' },
    { japanese: '結果', kana: 'けっか', vietnamese: 'kết quả', english: 'result', type: 'main', example: '努力の結果、合格した。' },
    { japanese: '責任', kana: 'せきにん', vietnamese: 'trách nhiệm', english: 'responsibility', type: 'main', example: '自分の責任を果たす。' },
    { japanese: '不満', kana: 'ふまん', vietnamese: 'bất mãn', english: 'dissatisfaction', type: 'main', example: '仕事に不満がある。' },
    { japanese: '後悔', kana: 'こうかい', vietnamese: 'hối hận', english: 'regret', type: 'main', example: 'あの時の決断を後悔している。' },
    { japanese: '失敗', kana: 'しっぱい', vietnamese: 'thất bại', english: 'failure', type: 'main', example: '失敗を恐れないでください。' },
    { japanese: '迷惑', kana: 'めいわく', vietnamese: 'phiền phức', english: 'trouble, nuisance', type: 'main', example: '人に迷惑をかけてばかりいる。' },
    { japanese: '怠ける', kana: 'なまける', vietnamese: 'lười biếng', english: 'to be lazy, to slack off', type: 'main', example: '怠けてばかりいると後悔するよ。' },
    { japanese: '贅沢', kana: 'ぜいたく', vietnamese: 'xa xỉ', english: 'luxury, extravagance', type: 'additional', example: '贅沢ばかりしていてはいけない。' },
    { japanese: '愚痴', kana: 'ぐち', vietnamese: 'lời than vãn', english: 'grumble, complaint', type: 'additional', example: '愚痴ばかり言っている。' },
    { japanese: '油断', kana: 'ゆだん', vietnamese: 'sơ suất, mất cảnh giác', english: 'carelessness', type: 'main', example: '油断したばかりに事故が起きた。' },
    { japanese: '損害', kana: 'そんがい', vietnamese: 'tổn hại', english: 'damage, loss', type: 'main', example: '台風で大きな損害を受けた。' },
    { japanese: '反省', kana: 'はんせい', vietnamese: 'phản tỉnh, kiểm điểm', english: 'reflection, self-criticism', type: 'main', example: '自分の行動を反省する。' },
  ],
  grammar: [
    {
      pattern: '～ばかり',
      vietnamese: 'Toàn là ~, chỉ ~ thôi',
      english: 'Nothing but ~, only ~',
      explanation: 'Biểu thị hành động hoặc trạng thái lặp đi lặp lại quá nhiều, thường mang sắc thái tiêu cực hoặc phàn nàn.',
      type: 'main',
      examples: [
        { japanese: '彼はゲームばかりしている。', vietnamese: 'Anh ấy toàn chơi game thôi.', english: 'He does nothing but play games.' },
        { japanese: '最近、残業ばかりで疲れた。', vietnamese: 'Gần đây toàn tăng ca nên mệt lắm.', english: 'I am tired because I have been doing nothing but overtime recently.' },
      ]
    },
    {
      pattern: '～ばかりか',
      vietnamese: 'Không chỉ ~ mà còn',
      english: 'Not only ~ but also',
      explanation: 'Biểu thị việc không chỉ dừng ở mức đó mà còn thêm điều khác nữa, thường là điều bất ngờ hoặc nghiêm trọng hơn.',
      type: 'main',
      examples: [
        { japanese: '彼は英語ばかりか、フランス語も話せる。', vietnamese: 'Anh ấy không chỉ nói tiếng Anh mà còn nói được tiếng Pháp.', english: 'He can speak not only English but also French.' },
        { japanese: '熱が出たばかりか、咳も止まらない。', vietnamese: 'Không chỉ sốt mà còn ho không ngừng.', english: 'Not only do I have a fever, but I also cannot stop coughing.' },
      ]
    },
    {
      pattern: '～ばかりに',
      vietnamese: 'Chỉ vì ~ mà (kết quả xấu)',
      english: 'Just because ~, simply because ~',
      explanation: 'Biểu thị nguyên nhân duy nhất dẫn đến kết quả tiêu cực, đáng tiếc. Nhấn mạnh sự hối hận.',
      type: 'main',
      examples: [
        { japanese: 'うそをついたばかりに、友達を失った。', vietnamese: 'Chỉ vì nói dối mà mất bạn.', english: 'Just because I lied, I lost my friend.' },
        { japanese: '少し油断したばかりに、大きな事故になった。', vietnamese: 'Chỉ vì sơ suất một chút mà thành tai nạn lớn.', english: 'Just because I was a little careless, it became a major accident.' },
      ]
    },
    {
      pattern: '～たばかり',
      vietnamese: 'Vừa mới ~ xong',
      english: 'Just did ~, have just ~',
      explanation: 'Biểu thị hành động vừa mới hoàn thành, thời gian chưa lâu. Khác với ばかり (toàn là).',
      type: 'main',
      examples: [
        { japanese: '日本に来たばかりで、まだ何もわからない。', vietnamese: 'Vừa mới đến Nhật nên chưa biết gì cả.', english: 'I have just come to Japan, so I do not know anything yet.' },
        { japanese: 'この車は買ったばかりなのに、もう壊れた。', vietnamese: 'Xe này vừa mới mua mà đã hỏng rồi.', english: 'Even though I just bought this car, it is already broken.' },
      ]
    },
  ]
};

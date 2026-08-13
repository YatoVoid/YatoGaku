/**
 * N2 Lesson 07 — おかげで／せいで／ために
 * Cause positive/negative
 */

import type { LessonData } from '$lib/types';

export const LESSON_07_DATA: LessonData = {
  lessonNumber: 7,
  title: 'おかげで／せいで／ために (Nhờ ~ / Tại ~ / Vì ~)',
  vocabulary: [
    { japanese: '感謝', kana: 'かんしゃ', vietnamese: 'cảm tạ, biết ơn', english: 'gratitude, appreciation', type: 'main', example: '先生に感謝しています。' },
    { japanese: '恩恵', kana: 'おんけい', vietnamese: 'ân huệ', english: 'grace, benefit', type: 'additional', example: '自然の恩恵を受けている。' },
    { japanese: '支援', kana: 'しえん', vietnamese: 'hỗ trợ', english: 'support, assistance', type: 'main', example: '多くの人の支援のおかげで成功した。' },
    { japanese: '協力', kana: 'きょうりょく', vietnamese: 'hợp tác', english: 'cooperation', type: 'main', example: 'みんなの協力が必要です。' },
    { japanese: '被害', kana: 'ひがい', vietnamese: 'thiệt hại', english: 'damage, harm', type: 'main', example: '台風の被害が大きかった。' },
    { japanese: '災害', kana: 'さいがい', vietnamese: 'thiên tai', english: 'disaster', type: 'main', example: '自然災害に備えることが大切だ。' },
    { japanese: '不注意', kana: 'ふちゅうい', vietnamese: 'bất cẩn', english: 'carelessness', type: 'main', example: '不注意のせいで怪我をした。' },
    { japanese: '恵まれる', kana: 'めぐまれる', vietnamese: 'được ban phước, may mắn', english: 'to be blessed with', type: 'main', example: '才能に恵まれている。' },
    { japanese: '原因', kana: 'げんいん', vietnamese: 'nguyên nhân', english: 'cause', type: 'main', example: '事故の原因を調べる。' },
    { japanese: '要因', kana: 'よういん', vietnamese: 'yếu tố', english: 'factor', type: 'additional', example: '成功の要因を分析する。' },
    { japanese: '貢献', kana: 'こうけん', vietnamese: 'cống hiến', english: 'contribution', type: 'main', example: '社会に貢献したい。' },
    { japanese: '犠牲', kana: 'ぎせい', vietnamese: 'hy sinh', english: 'sacrifice', type: 'additional', example: '多くの犠牲を払った。' },
    { japanese: '回復', kana: 'かいふく', vietnamese: 'phục hồi', english: 'recovery', type: 'main', example: '薬のおかげで早く回復した。' },
    { japanese: '悪化', kana: 'あっか', vietnamese: 'xấu đi, ác hóa', english: 'deterioration', type: 'main', example: '天候が悪化したために中止になった。' },
    { japanese: '恨む', kana: 'うらむ', vietnamese: 'oán hận', english: 'to bear a grudge', type: 'main', example: '彼のせいで失敗したと恨んでいる。' },
  ],
  grammar: [
    {
      pattern: '～おかげで',
      vietnamese: 'Nhờ ~ mà (kết quả tốt)',
      english: 'Thanks to ~',
      explanation: 'Biểu thị nguyên nhân dẫn đến kết quả tích cực. Mang sắc thái biết ơn. Đôi khi dùng mỉa mai cho kết quả tiêu cực.',
      type: 'main',
      examples: [
        { japanese: '先生のおかげで、試験に合格できました。', vietnamese: 'Nhờ thầy/cô mà tôi đã đỗ kỳ thi.', english: 'Thanks to my teacher, I was able to pass the exam.' },
        { japanese: '毎日運動したおかげで、健康になった。', vietnamese: 'Nhờ tập thể dục mỗi ngày mà tôi trở nên khỏe mạnh.', english: 'Thanks to exercising every day, I became healthy.' },
      ]
    },
    {
      pattern: '～せいで',
      vietnamese: 'Tại ~ mà, do ~ mà (kết quả xấu)',
      english: 'Because of ~ (negative result)',
      explanation: 'Biểu thị nguyên nhân dẫn đến kết quả tiêu cực. Mang sắc thái đổ lỗi, trách móc.',
      type: 'main',
      examples: [
        { japanese: '雨のせいで、試合が中止になった。', vietnamese: 'Tại mưa mà trận đấu bị hủy.', english: 'Because of the rain, the match was canceled.' },
        { japanese: '彼のせいで、プロジェクトが遅れた。', vietnamese: 'Tại anh ấy mà dự án bị trễ.', english: 'Because of him, the project was delayed.' },
      ]
    },
    {
      pattern: '～ために',
      vietnamese: 'Vì ~ nên (trung lập)',
      english: 'Because of ~, due to ~',
      explanation: 'Biểu thị nguyên nhân một cách khách quan, trung lập — không mang sắc thái tích cực hay tiêu cực. Dùng được trong cả văn nói và văn viết.',
      type: 'main',
      examples: [
        { japanese: '台風のために、電車が止まった。', vietnamese: 'Vì bão nên tàu điện bị dừng.', english: 'Due to the typhoon, the trains stopped.' },
        { japanese: '工事のために、この道は通れません。', vietnamese: 'Vì thi công nên con đường này không đi được.', english: 'Due to construction, this road is closed.' },
      ]
    },
    {
      pattern: '～によって',
      vietnamese: 'Bởi ~, do ~ (phương tiện/nguyên nhân)',
      english: 'By means of ~, due to ~, depending on ~',
      explanation: 'Đa nghĩa: (1) nguyên nhân khách quan, (2) phương tiện/cách thức, (3) tùy theo. Thường dùng trong văn viết trang trọng.',
      type: 'main',
      examples: [
        { japanese: '地震によって、多くの家が壊れた。', vietnamese: 'Do động đất mà nhiều ngôi nhà bị phá hủy.', english: 'Due to the earthquake, many houses were destroyed.' },
        { japanese: '国によって、文化が違う。', vietnamese: 'Tùy theo quốc gia mà văn hóa khác nhau.', english: 'Culture differs depending on the country.' },
      ]
    },
  ]
};

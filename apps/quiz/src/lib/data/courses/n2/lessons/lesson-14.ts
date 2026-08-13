/**
 * N2 Lesson 14 — 恐れがある／かねない／得る
 * Risk, possibility
 */

import type { LessonData } from '$lib/types';

export const LESSON_14_DATA: LessonData = {
  lessonNumber: 14,
  title: '恐れがある／かねない／得る (Risk, possibility)',
  vocabulary: [
    { japanese: '危険', kana: 'きけん', vietnamese: 'nguy hiểm', english: 'danger, risk', type: 'main', example: 'この道は危険な恐れがある。' },
    { japanese: '災害', kana: 'さいがい', vietnamese: 'thiên tai', english: 'disaster', type: 'main', example: '大きな災害が起きる恐れがある。' },
    { japanese: '予測', kana: 'よそく', vietnamese: 'dự đoán', english: 'prediction, forecast', type: 'main', example: '結果を予測することは難しい。' },
    { japanese: '可能性', kana: 'かのうせい', vietnamese: 'khả năng', english: 'possibility', type: 'main', example: '成功する可能性は十分にあり得る。' },
    { japanese: '被害', kana: 'ひがい', vietnamese: 'thiệt hại', english: 'damage, harm', type: 'main', example: '台風による被害が心配される。' },
    { japanese: '事故', kana: 'じこ', vietnamese: 'tai nạn', english: 'accident', type: 'main', example: '不注意は事故につながりかねない。' },
    { japanese: '影響', kana: 'えいきょう', vietnamese: 'ảnh hưởng', english: 'influence, impact', type: 'main', example: '健康に影響を及ぼす恐れがある。' },
    { japanese: '警告', kana: 'けいこく', vietnamese: 'cảnh báo', english: 'warning', type: 'main', example: '気象庁が警告を発表した。' },
    { japanese: '対策', kana: 'たいさく', vietnamese: 'biện pháp đối phó', english: 'countermeasure', type: 'main', example: '早めに対策を立てるべきだ。' },
    { japanese: '深刻', kana: 'しんこく', vietnamese: 'nghiêm trọng', english: 'serious, grave', type: 'main', example: '問題は深刻になりかねない。' },
    { japanese: '崩壊', kana: 'ほうかい', vietnamese: 'sụp đổ', english: 'collapse, destruction', type: 'additional', example: '建物が崩壊する恐れがある。' },
    { japanese: '拡大', kana: 'かくだい', vietnamese: 'mở rộng, lan rộng', english: 'expansion, spread', type: 'additional', example: '感染が拡大しかねない状況だ。' },
    { japanese: '回避', kana: 'かいひ', vietnamese: 'né tránh', english: 'avoidance', type: 'main', example: '危機を回避し得る方法を探す。' },
    { japanese: '予防', kana: 'よぼう', vietnamese: 'phòng ngừa', english: 'prevention', type: 'main', example: '病気の予防が大切だ。' },
    { japanese: '不安', kana: 'ふあん', vietnamese: 'bất an, lo lắng', english: 'anxiety, worry', type: 'additional', example: '将来に対する不安がある。' },
  ],
  grammar: [
    {
      pattern: '～恐れがある',
      vietnamese: 'Có nguy cơ ~, e rằng ~',
      english: 'There is a risk of ~, there is a fear that ~',
      explanation: 'Biểu thị khả năng xảy ra điều xấu, tiêu cực. Thường dùng trong tin tức, báo cáo, cảnh báo. Văn phong trang trọng.',
      type: 'main',
      examples: [
        { japanese: '明日、台風が上陸する恐れがある。', vietnamese: 'Ngày mai có nguy cơ bão đổ bộ.', english: 'There is a risk that the typhoon will make landfall tomorrow.' },
        { japanese: 'このまま放置すると、状況が悪化する恐れがある。', vietnamese: 'Nếu cứ để yên thế này, e rằng tình hình sẽ xấu đi.', english: 'If left as is, there is a risk that the situation will worsen.' },
      ]
    },
    {
      pattern: '～かねない',
      vietnamese: 'Có thể ~ (điều xấu), biết đâu sẽ ~',
      english: 'Might ~, could possibly ~ (negative outcome)',
      explanation: 'Biểu thị khả năng xảy ra điều không mong muốn. Gần nghĩa với 恐れがある nhưng ít trang trọng hơn, dùng được trong hội thoại.',
      type: 'main',
      examples: [
        { japanese: 'そんなことを言ったら、誤解されかねない。', vietnamese: 'Nói vậy biết đâu sẽ bị hiểu nhầm.', english: 'If you say something like that, you could be misunderstood.' },
        { japanese: '無理をすると、体を壊しかねない。', vietnamese: 'Nếu cố quá sức, có thể làm hỏng cơ thể.', english: 'If you push yourself too hard, you could ruin your health.' },
      ]
    },
    {
      pattern: '～得る／得ない',
      vietnamese: 'Có thể ~ / Không thể ~ (về mặt lý thuyết)',
      english: 'Can ~, is possible / Cannot ~, is impossible',
      explanation: 'Biểu thị khả năng lý thuyết — một sự việc có thể hoặc không thể xảy ra. 得る đọc là える hoặc うる. 得ない luôn đọc là えない.',
      type: 'main',
      examples: [
        { japanese: 'そんなことはあり得ない。', vietnamese: 'Chuyện đó không thể xảy ra.', english: 'That is impossible.' },
        { japanese: '誰にでも起こり得ることだ。', vietnamese: 'Đó là chuyện có thể xảy ra với bất kỳ ai.', english: 'It is something that can happen to anyone.' },
      ]
    },
    {
      pattern: '～かねる',
      vietnamese: 'Khó mà ~, không thể ~ (lịch sự từ chối)',
      english: 'Cannot ~, find it difficult to ~ (polite refusal)',
      explanation: 'Biểu thị việc không thể làm được vì lý do tâm lý hoặc lịch sự. Thường dùng trong kinh doanh để từ chối nhẹ nhàng. Khác với できない ở sắc thái lịch sự.',
      type: 'main',
      examples: [
        { japanese: 'その件に関しては、お答えしかねます。', vietnamese: 'Về vấn đề đó, tôi khó có thể trả lời.', english: 'I am afraid I cannot answer regarding that matter.' },
        { japanese: 'ご要望には応じかねます。', vietnamese: 'Chúng tôi khó có thể đáp ứng yêu cầu của quý khách.', english: 'We are unable to comply with your request.' },
      ]
    },
  ]
};

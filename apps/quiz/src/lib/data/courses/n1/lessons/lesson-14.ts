/**
 * N1 Lesson 14 — に即して／を踏まえて
 * Based on, taking into account
 */

import type { LessonData } from '$lib/types';

export const LESSON_14_DATA: LessonData = {
  lessonNumber: 14,
  title: 'に即して／を踏まえて (In accordance with / Based on)',
  vocabulary: [
    { japanese: '分析', kana: 'ぶんせき', vietnamese: 'phân tích', english: 'analysis', type: 'main', example: 'データを分析して報告する。' },
    { japanese: '方針', kana: 'ほうしん', vietnamese: 'phương châm, chính sách', english: 'policy, course of action', type: 'main', example: '会社の方針に従う。' },
    { japanese: '戦略', kana: 'せんりゃく', vietnamese: 'chiến lược', english: 'strategy', type: 'main', example: '新しい戦略を立てる。' },
    { japanese: '策定', kana: 'さくてい', vietnamese: 'lập kế hoạch', english: 'formulation, planning', type: 'main', example: '計画を策定する。' },
    { japanese: '実態', kana: 'じったい', vietnamese: 'thực trạng', english: 'actual conditions, reality', type: 'main', example: '現場の実態を把握する。' },
    { japanese: '見解', kana: 'けんかい', vietnamese: 'quan điểm, ý kiến', english: 'opinion, view', type: 'main', example: '専門家の見解を求める。' },
    { japanese: '根拠', kana: 'こんきょ', vietnamese: 'căn cứ, cơ sở', english: 'basis, grounds', type: 'main', example: '科学的根拠に基づく。' },
    { japanese: '指針', kana: 'ししん', vietnamese: 'chỉ dẫn, kim chỉ nam', english: 'guideline, guiding principle', type: 'main', example: '行動の指針を示す。' },
    { japanese: '前提', kana: 'ぜんてい', vietnamese: 'tiền đề', english: 'premise, prerequisite', type: 'main', example: 'この議論は平等を前提としている。' },
    { japanese: '妥当', kana: 'だとう', vietnamese: 'thỏa đáng, hợp lý', english: 'appropriate, reasonable', type: 'main', example: '妥当な判断だと思う。' },
    { japanese: '施策', kana: 'しさく', vietnamese: 'biện pháp, chính sách', english: 'measure, policy', type: 'main', example: '新たな施策を講じる。' },
    { japanese: '遂行', kana: 'すいこう', vietnamese: 'thực hiện, thi hành', english: 'execution, carrying out', type: 'additional', example: '任務を遂行する。' },
    { japanese: '準拠', kana: 'じゅんきょ', vietnamese: 'tuân theo, dựa theo', english: 'conformity, compliance', type: 'additional', example: '国際基準に準拠する。' },
    { japanese: '立案', kana: 'りつあん', vietnamese: 'lập án, soạn thảo', english: 'planning, drafting', type: 'additional', example: '企画を立案する。' },
    { japanese: '検証', kana: 'けんしょう', vietnamese: 'kiểm chứng', english: 'verification, validation', type: 'additional', example: '仮説を検証する。' },
  ],
  grammar: [
    {
      pattern: '～に即して',
      vietnamese: 'Phù hợp với ~, dựa theo ~',
      english: 'In accordance with ~, based on ~',
      explanation: 'Biểu thị hành động phù hợp, sát với thực tế hoặc quy định. Nhấn mạnh sự tuân thủ chặt chẽ theo một tiêu chuẩn cụ thể. Dùng trong văn viết trang trọng, đặc biệt trong ngữ cảnh hành chính, pháp luật.',
      type: 'main',
      examples: [
        { japanese: '現実に即した対策を立てるべきだ。', vietnamese: 'Nên lập đối sách phù hợp với thực tế.', english: 'We should create measures that are in line with reality.' },
        { japanese: '法律に即して判断する。', vietnamese: 'Phán đoán dựa theo pháp luật.', english: 'We will judge in accordance with the law.' },
      ]
    },
    {
      pattern: '～を踏まえて',
      vietnamese: 'Dựa trên ~, căn cứ vào ~',
      english: 'Based on ~, taking ~ into account',
      explanation: 'Biểu thị việc sử dụng thông tin, kinh nghiệm hoặc kết quả trước đó làm cơ sở để hành động tiếp. Nhấn mạnh sự cân nhắc kỹ lưỡng trước khi quyết định.',
      type: 'main',
      examples: [
        { japanese: '調査結果を踏まえて、計画を修正した。', vietnamese: 'Dựa trên kết quả khảo sát, chúng tôi đã chỉnh sửa kế hoạch.', english: 'Based on the survey results, we revised the plan.' },
        { japanese: '過去の失敗を踏まえて、新しい方法を試みる。', vietnamese: 'Căn cứ vào thất bại trong quá khứ, thử phương pháp mới.', english: 'Taking past failures into account, we will try a new approach.' },
      ]
    },
    {
      pattern: '～に基づいて',
      vietnamese: 'Dựa trên ~, căn cứ theo ~',
      english: 'Based on ~, on the basis of ~',
      explanation: 'Biểu thị cơ sở, nền tảng cho hành động hoặc quyết định. Tương tự ～を踏まえて nhưng nhấn mạnh tính chính thức và nền tảng lý thuyết/pháp lý hơn.',
      type: 'main',
      examples: [
        { japanese: '科学的データに基づいて結論を出した。', vietnamese: 'Đưa ra kết luận dựa trên dữ liệu khoa học.', english: 'We drew conclusions based on scientific data.' },
        { japanese: '憲法に基づいて国民の権利が保障されている。', vietnamese: 'Quyền của công dân được đảm bảo dựa trên hiến pháp.', english: 'Citizens\' rights are guaranteed based on the constitution.' },
      ]
    },
    {
      pattern: '～に沿って',
      vietnamese: 'Theo ~, dọc theo ~',
      english: 'Along ~, in line with ~',
      explanation: 'Biểu thị hành động tuân theo một hướng đi, kế hoạch hoặc phương châm đã định sẵn. Nhấn mạnh sự nhất quán với đường lối đã vạch ra.',
      type: 'additional',
      examples: [
        { japanese: '計画に沿って事業を進める。', vietnamese: 'Tiến hành công việc theo kế hoạch.', english: 'We will proceed with the project in line with the plan.' },
        { japanese: 'お客様のご要望に沿った提案をいたします。', vietnamese: 'Chúng tôi sẽ đưa ra đề xuất phù hợp với yêu cầu của quý khách.', english: 'We will make proposals that meet the customer\'s requests.' },
      ]
    },
  ]
};

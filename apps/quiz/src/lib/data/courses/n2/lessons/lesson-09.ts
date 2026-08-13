/**
 * N2 Lesson 09 — に関して／について／に対して
 * Regarding, about, toward
 */

import type { LessonData } from '$lib/types';

export const LESSON_09_DATA: LessonData = {
  lessonNumber: 9,
  title: 'に関して／について／に対して (Regarding, about, toward)',
  vocabulary: [
    { japanese: '議論', kana: 'ぎろん', vietnamese: 'sự thảo luận, tranh luận', english: 'discussion, argument', type: 'main', example: 'この問題について議論しましょう。' },
    { japanese: '話題', kana: 'わだい', vietnamese: 'đề tài, chủ đề', english: 'topic, subject', type: 'main', example: '最近の話題に関して意見を聞きたい。' },
    { japanese: '研究', kana: 'けんきゅう', vietnamese: 'nghiên cứu', english: 'research, study', type: 'main', example: '環境問題に関する研究が増えている。' },
    { japanese: '意見', kana: 'いけん', vietnamese: 'ý kiến', english: 'opinion', type: 'main', example: 'この件に対して意見がありますか。' },
    { japanese: '批判', kana: 'ひはん', vietnamese: 'sự phê phán', english: 'criticism', type: 'main', example: '政府の政策に対して批判が高まっている。' },
    { japanese: '賛成', kana: 'さんせい', vietnamese: 'tán thành, đồng ý', english: 'agreement, approval', type: 'main', example: 'その提案に対して賛成です。' },
    { japanese: '反対', kana: 'はんたい', vietnamese: 'phản đối', english: 'opposition, objection', type: 'main', example: '計画に対して反対する人が多い。' },
    { japanese: '対象', kana: 'たいしょう', vietnamese: 'đối tượng', english: 'target, subject', type: 'main', example: '調査の対象について説明します。' },
    { japanese: '見解', kana: 'けんかい', vietnamese: 'kiến giải, quan điểm', english: 'view, opinion', type: 'main', example: '専門家の見解に関して報告する。' },
    { japanese: '立場', kana: 'たちば', vietnamese: 'lập trường, vị trí', english: 'standpoint, position', type: 'main', example: '相手の立場に対して理解を示す。' },
    { japanese: '論文', kana: 'ろんぶん', vietnamese: 'luận văn, bài nghiên cứu', english: 'thesis, paper', type: 'additional', example: '日本の教育に関する論文を書いた。' },
    { japanese: '調査', kana: 'ちょうさ', vietnamese: 'điều tra, khảo sát', english: 'investigation, survey', type: 'additional', example: '消費者の行動について調査した。' },
    { japanese: '主張', kana: 'しゅちょう', vietnamese: 'chủ trương, luận điểm', english: 'claim, assertion', type: 'main', example: '彼の主張に対して疑問を感じる。' },
    { japanese: '観点', kana: 'かんてん', vietnamese: 'quan điểm, góc nhìn', english: 'viewpoint, perspective', type: 'additional', example: '異なる観点から問題について考える。' },
    { japanese: '分析', kana: 'ぶんせき', vietnamese: 'phân tích', english: 'analysis', type: 'main', example: 'データに関して詳しく分析した。' },
  ],
  grammar: [
    {
      pattern: '～に関して',
      vietnamese: 'Liên quan đến ~, về ~',
      english: 'Regarding ~, concerning ~',
      explanation: 'Dùng trong văn viết, văn phong trang trọng. Biểu thị chủ đề mà mình đề cập đến. Có thể dùng dạng に関する + danh từ.',
      type: 'main',
      examples: [
        { japanese: '今回のプロジェクトに関して、ご質問はありますか。', vietnamese: 'Liên quan đến dự án lần này, quý vị có câu hỏi nào không?', english: 'Do you have any questions regarding this project?' },
        { japanese: '環境問題に関する記事を読んだ。', vietnamese: 'Tôi đã đọc bài báo liên quan đến vấn đề môi trường.', english: 'I read an article concerning environmental issues.' },
      ]
    },
    {
      pattern: '～について',
      vietnamese: 'Về ~',
      english: 'About ~, concerning ~',
      explanation: 'Cách diễn đạt phổ biến nhất để nói "về" một chủ đề. Dùng được trong cả văn nói và văn viết. Ít trang trọng hơn に関して.',
      type: 'main',
      examples: [
        { japanese: '日本の文化について研究しています。', vietnamese: 'Tôi đang nghiên cứu về văn hóa Nhật Bản.', english: 'I am researching about Japanese culture.' },
        { japanese: '将来について真剣に考えるべきだ。', vietnamese: 'Nên suy nghĩ nghiêm túc về tương lai.', english: 'You should think seriously about the future.' },
      ]
    },
    {
      pattern: '～に対して',
      vietnamese: 'Đối với ~, hướng về ~',
      english: 'Toward ~, against ~, in contrast to ~',
      explanation: 'Biểu thị đối tượng mà hành động hoặc thái độ hướng tới. Cũng dùng để so sánh đối lập hai sự việc.',
      type: 'main',
      examples: [
        { japanese: '先生は学生に対して厳しい。', vietnamese: 'Giáo viên nghiêm khắc đối với học sinh.', english: 'The teacher is strict toward the students.' },
        { japanese: '兄はスポーツが好きなのに対して、弟は読書が好きだ。', vietnamese: 'Anh trai thích thể thao, trái lại em trai thích đọc sách.', english: 'The older brother likes sports, whereas the younger brother likes reading.' },
      ]
    },
    {
      pattern: '～にとって',
      vietnamese: 'Đối với ~ (mà nói)',
      english: 'For ~, to ~',
      explanation: 'Biểu thị lập trường, quan điểm của ai đó khi đánh giá một sự việc. Nhấn mạnh góc nhìn cá nhân.',
      type: 'main',
      examples: [
        { japanese: '私にとって、家族が一番大切です。', vietnamese: 'Đối với tôi, gia đình là quan trọng nhất.', english: 'For me, family is the most important.' },
        { japanese: '外国人にとって、漢字は難しい。', vietnamese: 'Đối với người nước ngoài, chữ Hán rất khó.', english: 'For foreigners, kanji is difficult.' },
      ]
    },
  ]
};

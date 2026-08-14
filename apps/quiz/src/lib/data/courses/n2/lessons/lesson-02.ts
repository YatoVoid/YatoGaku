/**
 * N2 Lesson 02 — ～ことにする / ～ことになる
 * Personal decision vs external decision
 */

import type { LessonData } from '$lib/types';

export const LESSON_02_DATA: LessonData = {
  lessonNumber: 2,
  title: 'ことにする／ことになる (Personal decision / External decision)',
  vocabulary: [
    { japanese: '決定', kana: 'けってい', vietnamese: 'quyết định', english: 'decision', type: 'main', example: '重要な決定を下した。' },
    { japanese: '決心', kana: 'けっしん', vietnamese: 'quyết tâm', english: 'determination, resolve', type: 'main', example: '留学する決心をした。' },
    { japanese: '転職', kana: 'てんしょく', vietnamese: 'chuyển việc', english: 'job change', type: 'main', example: '来月転職することにしました。' },
    { japanese: '規則', kana: 'きそく', vietnamese: 'quy tắc', english: 'rule, regulation', type: 'main', example: '会社の規則に従う。' },
    { japanese: '方針', kana: 'ほうしん', vietnamese: 'phương châm, chính sách', english: 'policy, direction', type: 'main', example: '新しい方針が発表された。' },
    { japanese: '組織', kana: 'そしき', vietnamese: 'tổ chức', english: 'organization', type: 'main', example: '組織の改革が必要だ。' },
    { japanese: '会議', kana: 'かいぎ', vietnamese: 'cuộc họp', english: 'meeting, conference', type: 'main', example: '午後から会議がある。' },
    { japanese: '提案', kana: 'ていあん', vietnamese: 'đề xuất', english: 'proposal, suggestion', type: 'main', example: '新しいプロジェクトを提案した。' },
    { japanese: '担当', kana: 'たんとう', vietnamese: 'phụ trách', english: 'in charge of', type: 'main', example: '私がこのプロジェクトを担当します。' },
    { japanese: '予定', kana: 'よてい', vietnamese: 'dự định, kế hoạch', english: 'plan, schedule', type: 'main', example: '来週の予定を確認する。' },
    { japanese: '異動', kana: 'いどう', vietnamese: 'chuyển công tác', english: 'personnel transfer', type: 'additional', example: '来月、大阪に異動することになった。' },
    { japanese: '採用', kana: 'さいよう', vietnamese: 'tuyển dụng', english: 'hiring, adoption', type: 'additional', example: '新しいシステムを採用することになった。' },
    { japanese: '辞退', kana: 'じたい', vietnamese: 'từ chối, rút lui', english: 'to decline, to withdraw', type: 'main', example: 'そのオファーを辞退することにした。' },
    { japanese: '実施', kana: 'じっし', vietnamese: 'thực hiện, thực thi', english: 'implementation', type: 'main', example: '新制度を実施することになった。' },
    { japanese: '配属', kana: 'はいぞく', vietnamese: 'phân công, bổ nhiệm', english: 'assignment, posting', type: 'additional', example: '営業部に配属されることになった。' },
  ],
  grammar: [
    {
      pattern: '～ことにする',
      vietnamese: 'Quyết định (tự mình) ~',
      english: 'To decide to ~',
      explanation: 'Biểu thị quyết định do bản thân đưa ra. Nhấn mạnh ý chí cá nhân trong việc lựa chọn.',
      type: 'main',
      examples: [
        { japanese: '来年から日本に留学することにしました。', vietnamese: 'Tôi đã quyết định du học Nhật Bản từ năm sau.', english: 'I have decided to study abroad in Japan from next year.' },
        { japanese: 'タバコをやめることにした。', vietnamese: 'Tôi đã quyết định bỏ thuốc lá.', english: 'I decided to quit smoking.' },
      ]
    },
    {
      pattern: '～ことになる',
      vietnamese: 'Được quyết định rằng ~, hóa ra là ~',
      english: 'It has been decided that ~, it turns out that ~',
      explanation: 'Biểu thị quyết định từ bên ngoài (công ty, tổ chức, hoàn cảnh) chứ không phải do bản thân. Thường dùng trong ngữ cảnh công việc.',
      type: 'main',
      examples: [
        { japanese: '来月から大阪支社に転勤することになりました。', vietnamese: 'Tôi sẽ chuyển đến chi nhánh Osaka từ tháng sau (do công ty quyết định).', english: 'It has been decided that I will transfer to the Osaka branch next month.' },
        { japanese: '会議は来週に延期されることになった。', vietnamese: 'Cuộc họp đã được quyết định hoãn lại đến tuần sau.', english: 'It was decided that the meeting would be postponed to next week.' },
      ]
    },
    {
      pattern: '～ことにしている',
      vietnamese: 'Luôn luôn ~ (quy tắc cá nhân)',
      english: 'To make it a rule to ~',
      explanation: 'Biểu thị thói quen hoặc quy tắc cá nhân mà bản thân đã tự đặt ra và đang duy trì.',
      type: 'main',
      examples: [
        { japanese: '毎朝6時に起きることにしている。', vietnamese: 'Tôi luôn dậy lúc 6 giờ sáng (quy tắc của mình).', english: 'I make it a rule to wake up at 6 every morning.' },
        { japanese: '寝る前にスマホを見ないことにしている。', vietnamese: 'Tôi luôn không xem điện thoại trước khi ngủ (quy tắc của mình).', english: 'I make it a rule not to look at my phone before bed.' },
      ]
    },
    {
      pattern: '～ことになっている',
      vietnamese: 'Theo quy định thì ~, đã được sắp xếp là ~',
      english: 'It is the rule that ~, it is arranged that ~',
      explanation: 'Biểu thị quy định, luật lệ, hoặc kế hoạch đã được sắp xếp bởi tổ chức hoặc xã hội.',
      type: 'main',
      examples: [
        { japanese: 'この会社では毎週金曜日に報告書を提出することになっている。', vietnamese: 'Ở công ty này, theo quy định phải nộp báo cáo vào thứ Sáu hàng tuần.', english: 'At this company, it is the rule to submit reports every Friday.' },
        { japanese: '来月、新しいオフィスに引っ越すことになっている。', vietnamese: 'Đã được sắp xếp là tháng sau sẽ chuyển sang văn phòng mới.', english: 'It is arranged that we will move to a new office next month.' },
      ]
    },
  ]
};

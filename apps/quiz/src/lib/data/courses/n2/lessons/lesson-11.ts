/**
 * N2 Lesson 11 — 以上／上で／次第
 * Once, upon, depending on
 */

import type { LessonData } from '$lib/types';

export const LESSON_11_DATA: LessonData = {
  lessonNumber: 11,
  title: '以上／上で／次第 (Once, upon, depending on)',
  vocabulary: [
    { japanese: '条件', kana: 'じょうけん', vietnamese: 'điều kiện', english: 'condition, requirement', type: 'main', example: '条件次第で結果が変わる。' },
    { japanese: '手続き', kana: 'てつづき', vietnamese: 'thủ tục', english: 'procedure, process', type: 'main', example: '手続きが完了し次第、連絡します。' },
    { japanese: '契約', kana: 'けいやく', vietnamese: 'hợp đồng', english: 'contract', type: 'main', example: '契約を結んだ以上、責任がある。' },
    { japanese: '決定', kana: 'けってい', vietnamese: 'quyết định', english: 'decision', type: 'main', example: '結果が決定し次第、お知らせします。' },
    { japanese: '検討', kana: 'けんとう', vietnamese: 'xem xét, cân nhắc', english: 'examination, consideration', type: 'main', example: '十分に検討した上で判断する。' },
    { japanese: '段階', kana: 'だんかい', vietnamese: 'giai đoạn', english: 'stage, phase', type: 'main', example: '次の段階に進む準備ができた。' },
    { japanese: '申請', kana: 'しんせい', vietnamese: 'đơn xin, nộp đơn', english: 'application, request', type: 'main', example: 'ビザの申請手続きについて説明する。' },
    { japanese: '承認', kana: 'しょうにん', vietnamese: 'phê duyệt, chấp thuận', english: 'approval', type: 'main', example: '上司の承認を得た上で実行する。' },
    { japanese: '確認', kana: 'かくにん', vietnamese: 'xác nhận', english: 'confirmation', type: 'main', example: '内容を確認した上でサインしてください。' },
    { japanese: '状況', kana: 'じょうきょう', vietnamese: 'tình hình, tình trạng', english: 'situation, circumstances', type: 'main', example: '状況次第で対応を変える。' },
    { japanese: '結論', kana: 'けつろん', vietnamese: 'kết luận', english: 'conclusion', type: 'additional', example: '議論した上で結論を出す。' },
    { japanese: '提出', kana: 'ていしゅつ', vietnamese: 'nộp, trình', english: 'submission', type: 'additional', example: '書類を提出し次第、審査が始まる。' },
    { japanese: '実施', kana: 'じっし', vietnamese: 'thực hiện', english: 'implementation, execution', type: 'main', example: '計画を実施する上で注意点がある。' },
    { japanese: '判断', kana: 'はんだん', vietnamese: 'phán đoán, đánh giá', english: 'judgment', type: 'main', example: '事実を把握した上で判断する。' },
    { japanese: '方針', kana: 'ほうしん', vietnamese: 'phương châm, chính sách', english: 'policy, direction', type: 'additional', example: '会社の方針に従う以上、文句は言えない。' },
  ],
  grammar: [
    {
      pattern: '～以上（は）',
      vietnamese: 'Đã ~ thì phải..., một khi đã ~',
      english: 'Once ~, now that ~, since ~',
      explanation: 'Biểu thị rằng một khi đã quyết định hoặc đã xảy ra điều gì đó thì phải chấp nhận hệ quả. Vế sau thường là nghĩa vụ, quyết tâm.',
      type: 'main',
      examples: [
        { japanese: '引き受けた以上、最後までやり遂げます。', vietnamese: 'Đã nhận lời thì sẽ làm đến cùng.', english: 'Since I accepted it, I will see it through to the end.' },
        { japanese: '日本に住んでいる以上、日本の法律を守らなければならない。', vietnamese: 'Một khi đã sống ở Nhật thì phải tuân thủ pháp luật Nhật Bản.', english: 'Since you live in Japan, you must obey Japanese law.' },
      ]
    },
    {
      pattern: '～上で',
      vietnamese: 'Sau khi ~, trên cơ sở ~',
      english: 'After ~ing, upon ~ing, based on ~',
      explanation: 'Biểu thị việc làm một hành động sau khi đã hoàn thành hành động trước đó. Nhấn mạnh trình tự và sự cẩn thận.',
      type: 'main',
      examples: [
        { japanese: 'よく考えた上で、返事をします。', vietnamese: 'Suy nghĩ kỹ rồi sẽ trả lời.', english: 'I will reply after thinking it over carefully.' },
        { japanese: '両親と相談した上で、留学を決めた。', vietnamese: 'Sau khi bàn bạc với bố mẹ, tôi đã quyết định du học.', english: 'I decided to study abroad after consulting with my parents.' },
      ]
    },
    {
      pattern: '～次第',
      vietnamese: 'Ngay khi ~, tùy thuộc vào ~',
      english: 'As soon as ~, depending on ~',
      explanation: 'Có hai nghĩa: (1) Ngay khi ~ xong (動詞ます形 + 次第), (2) Tùy thuộc vào ~ (名詞 + 次第). Văn phong trang trọng, thường dùng trong công việc.',
      type: 'main',
      examples: [
        { japanese: '届き次第、ご連絡いたします。', vietnamese: 'Ngay khi nhận được, tôi sẽ liên lạc.', english: 'I will contact you as soon as it arrives.' },
        { japanese: '成功するかどうかは努力次第だ。', vietnamese: 'Thành công hay không tùy thuộc vào nỗ lực.', english: 'Whether you succeed depends on your effort.' },
      ]
    },
    {
      pattern: '～上は',
      vietnamese: 'Đã ~ thì...',
      english: 'Now that ~, since ~',
      explanation: 'Gần nghĩa với ～以上は nhưng văn phong cứng hơn, thường dùng trong văn viết. Vế sau thường là quyết tâm hoặc nghĩa vụ.',
      type: 'additional',
      examples: [
        { japanese: 'やると決めた上は、全力を尽くす。', vietnamese: 'Đã quyết định làm thì phải dốc hết sức.', english: 'Now that I have decided to do it, I will give it my all.' },
        { japanese: '社会人になった上は、自分で生活しなければならない。', vietnamese: 'Đã trở thành người đi làm thì phải tự lo cuộc sống.', english: 'Now that you are a working adult, you must support yourself.' },
      ]
    },
  ]
};

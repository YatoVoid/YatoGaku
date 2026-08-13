/**
 * N1 Lesson 09 — なり／や否や／そばから
 * As soon as ~, the moment ~
 */

import type { LessonData } from '$lib/types';

export const LESSON_09_DATA: LessonData = {
  lessonNumber: 9,
  title: 'なり／や否や／そばから (Ngay khi ~ / Vừa ~ thì ~)',
  vocabulary: [
    { japanese: '瞬間', kana: 'しゅんかん', vietnamese: 'khoảnh khắc', english: 'moment, instant', type: 'main', example: 'ドアを開けた瞬間、猫が飛び出した。' },
    { japanese: '直ちに', kana: 'ただちに', vietnamese: 'ngay lập tức', english: 'immediately, at once', type: 'main', example: '危険を察知して直ちに避難した。' },
    { japanese: '即座に', kana: 'そくざに', vietnamese: 'tức khắc', english: 'instantly, on the spot', type: 'main', example: '質問に即座に答えた。' },
    { japanese: '反射的', kana: 'はんしゃてき', vietnamese: 'phản xạ', english: 'reflexive, instinctive', type: 'main', example: '反射的に手を引っ込めた。' },
    { japanese: '咄嗟に', kana: 'とっさに', vietnamese: 'tức thì, bất giác', english: 'in a split second', type: 'main', example: '咄嗟に嘘をついてしまった。' },
    { japanese: '間髪を入れず', kana: 'かんはつをいれず', vietnamese: 'không chút do dự', english: 'without a moment\'s delay', type: 'main', example: '間髪を入れず反論した。' },
    { japanese: '矢先', kana: 'やさき', vietnamese: 'đúng lúc sắp ~', english: 'just as one was about to', type: 'main', example: '出かけようとした矢先に電話が鳴った。' },
    { japanese: '途端に', kana: 'とたんに', vietnamese: 'ngay lúc đó', english: 'just as, the moment', type: 'main', example: '立ち上がった途端にめまいがした。' },
    { japanese: '一斉に', kana: 'いっせいに', vietnamese: 'đồng loạt', english: 'all at once, simultaneously', type: 'main', example: '合図とともに一斉に走り出した。' },
    { japanese: '素早い', kana: 'すばやい', vietnamese: 'nhanh nhẹn', english: 'quick, swift', type: 'main', example: '素早い判断が求められる。' },
    { japanese: '駆けつける', kana: 'かけつける', vietnamese: 'chạy đến, vội đến', english: 'to rush to', type: 'main', example: '知らせを聞いて駆けつけた。' },
    { japanese: '飛び出す', kana: 'とびだす', vietnamese: 'lao ra, nhảy ra', english: 'to jump out, to rush out', type: 'additional', example: '子供が道に飛び出した。' },
    { japanese: '逃げ出す', kana: 'にげだす', vietnamese: 'bỏ chạy', english: 'to run away, to flee', type: 'additional', example: '犬を見て逃げ出した。' },
    { japanese: '衝動的', kana: 'しょうどうてき', vietnamese: 'bốc đồng', english: 'impulsive', type: 'additional', example: '衝動的に買い物をしてしまう。' },
    { japanese: '迅速', kana: 'じんそく', vietnamese: 'nhanh chóng', english: 'prompt, swift', type: 'additional', example: '迅速な対応に感謝します。' },
  ],
  grammar: [
    {
      pattern: '～なり',
      vietnamese: 'Vừa ~ thì ngay ~',
      english: 'As soon as ~, immediately ~',
      explanation: 'Biểu thị hành động thứ hai xảy ra ngay lập tức sau hành động thứ nhất. Chủ ngữ thường là người khác (không phải người nói). Nhấn mạnh sự bất ngờ hoặc nhanh chóng.',
      type: 'main',
      examples: [
        { japanese: '彼は部屋に入るなり、泣き出した。', vietnamese: 'Anh ấy vừa vào phòng thì khóc ngay.', english: 'As soon as he entered the room, he started crying.' },
        { japanese: '先生は教室に入るなり、テストを配り始めた。', vietnamese: 'Thầy giáo vừa vào lớp thì phát bài kiểm tra ngay.', english: 'The teacher started handing out tests the moment he entered the classroom.' },
      ]
    },
    {
      pattern: '～や否や',
      vietnamese: 'Vừa ~ thì lập tức ~',
      english: 'No sooner had ~ than ~',
      explanation: 'Biểu thị hai hành động xảy ra gần như đồng thời, hành động sau diễn ra ngay sau hành động trước. Dùng trong văn viết trang trọng. Động từ ở thể từ điển.',
      type: 'main',
      examples: [
        { japanese: 'ベルが鳴るや否や、学生たちは教室を飛び出した。', vietnamese: 'Chuông vừa reo, học sinh lập tức chạy ra khỏi lớp.', english: 'No sooner had the bell rung than the students rushed out of the classroom.' },
        { japanese: '扉が開くや否や、観客が殺到した。', vietnamese: 'Cửa vừa mở, khán giả ùa vào ngay.', english: 'The moment the door opened, the audience rushed in.' },
      ]
    },
    {
      pattern: '～そばから',
      vietnamese: 'Vừa ~ xong thì lại ~',
      english: 'As fast as ~, no sooner ~ than ~',
      explanation: 'Biểu thị sự lặp lại gây thất vọng: vừa làm xong một việc thì kết quả bị phủ nhận ngay. Thường mang sắc thái tiêu cực hoặc bất lực.',
      type: 'main',
      examples: [
        { japanese: '片付けるそばから子供が散らかす。', vietnamese: 'Vừa dọn xong thì con lại bày bừa.', english: 'As fast as I tidy up, the kids make a mess again.' },
        { japanese: '覚えたそばから忘れてしまう。', vietnamese: 'Vừa nhớ xong thì lại quên ngay.', english: 'I forget things as soon as I learn them.' },
      ]
    },
    {
      pattern: '～が早いか',
      vietnamese: 'Vừa ~ thì ngay lập tức ~',
      english: 'The instant ~, no sooner ~ than ~',
      explanation: 'Biểu thị hành động thứ hai xảy ra gần như cùng lúc với hành động thứ nhất. Tương tự ～や否や nhưng nhấn mạnh tốc độ hơn. Dùng trong văn viết.',
      type: 'additional',
      examples: [
        { japanese: 'チャイムが鳴るが早いか、子供たちは外に飛び出した。', vietnamese: 'Chuông vừa reo, bọn trẻ lập tức chạy ra ngoài.', english: 'The instant the chime rang, the children rushed outside.' },
        { japanese: '合図を見るが早いか、選手たちは一斉にスタートした。', vietnamese: 'Vừa thấy hiệu lệnh, các vận động viên đồng loạt xuất phát.', english: 'The moment they saw the signal, the athletes all started at once.' },
      ]
    },
  ]
};

/**
 * N1 Lesson 05 — に至るまで／を皮切りに
 * Ranging to, starting with — Scope & expansion
 */

import type { LessonData } from '$lib/types';

export const LESSON_05_DATA: LessonData = {
  lessonNumber: 5,
  title: 'に至るまで／を皮切りに (Even up to / Starting with)',
  vocabulary: [
    { japanese: '範囲', kana: 'はんい', vietnamese: 'phạm vi', english: 'scope, range', type: 'main', example: '調査の範囲を広げた。' },
    { japanese: '展開', kana: 'てんかい', vietnamese: 'triển khai, mở rộng', english: 'development, expansion', type: 'main', example: '事業を全国に展開した。' },
    { japanese: '拡大', kana: 'かくだい', vietnamese: 'mở rộng, phóng đại', english: 'expansion, enlargement', type: 'main', example: '被害が拡大している。' },
    { japanese: '発端', kana: 'ほったん', vietnamese: 'khởi đầu, nguyên nhân', english: 'origin, beginning', type: 'main', example: 'この事件が発端となった。' },
    { japanese: '契機', kana: 'けいき', vietnamese: 'cơ hội, bước ngoặt', english: 'opportunity, turning point', type: 'main', example: '留学を契機に人生が変わった。' },
    { japanese: '連鎖', kana: 'れんさ', vietnamese: 'chuỗi, liên hoàn', english: 'chain, series', type: 'main', example: '連鎖反応が起きた。' },
    { japanese: '一連', kana: 'いちれん', vietnamese: 'một loạt', english: 'a series of', type: 'main', example: '一連の事件を調べている。' },
    { japanese: '波及', kana: 'はきゅう', vietnamese: 'lan rộng, ảnh hưởng', english: 'ripple effect, spread', type: 'main', example: '影響が各地に波及した。' },
    { japanese: '端緒', kana: 'たんしょ', vietnamese: 'đầu mối, manh mối', english: 'clue, beginning', type: 'main', example: '捜査の端緒をつかんだ。' },
    { japanese: '皮切り', kana: 'かわきり', vietnamese: 'sự khởi đầu', english: 'start, beginning', type: 'main', example: '東京を皮切りに全国ツアーを行う。' },
    { japanese: '経緯', kana: 'けいい', vietnamese: 'quá trình, diễn biến', english: 'details, circumstances', type: 'main', example: '事件の経緯を説明した。' },
    { japanese: '隅々', kana: 'すみずみ', vietnamese: 'mọi ngóc ngách', english: 'every corner', type: 'additional', example: '部屋の隅々まで掃除した。' },
    { japanese: '網羅', kana: 'もうら', vietnamese: 'bao quát, bao gồm hết', english: 'comprehensive coverage', type: 'additional', example: 'すべての分野を網羅している。' },
    { japanese: '起点', kana: 'きてん', vietnamese: 'điểm xuất phát', english: 'starting point', type: 'additional', example: '東京を起点として出発した。' },
    { japanese: '至る', kana: 'いたる', vietnamese: 'đến, đạt tới', english: 'to reach, to arrive at', type: 'additional', example: '合意に至るまで長い時間がかかった。' },
  ],
  grammar: [
    {
      pattern: '～に至るまで',
      vietnamese: 'Cho đến tận ~, thậm chí đến ~',
      english: 'Ranging all the way to ~, even extending to ~',
      explanation: 'Nhấn mạnh phạm vi rộng lớn, bao gồm cả những thứ không ngờ tới. Thường đi với ～から để tạo cặp「から～に至るまで」. Dùng trong văn viết trang trọng.',
      type: 'main',
      examples: [
        { japanese: '子供からお年寄りに至るまで、誰もが楽しめるイベントだ。', vietnamese: 'Từ trẻ em cho đến tận người cao tuổi, đây là sự kiện ai cũng có thể tận hưởng.', english: 'It is an event that everyone from children to the elderly can enjoy.' },
        { japanese: '食事の内容から食器の配置に至るまで、すべて計算されている。', vietnamese: 'Từ nội dung bữa ăn cho đến tận cách bài trí bát đĩa, tất cả đều được tính toán.', english: 'Everything from the meal content to the arrangement of tableware has been calculated.' },
      ]
    },
    {
      pattern: '～を皮切りに（して）',
      vietnamese: 'Bắt đầu từ ~, lấy ~ làm khởi đầu',
      english: 'Starting with ~, beginning with ~',
      explanation: 'Biểu thị rằng một sự việc là điểm khởi đầu, sau đó cùng loại sự việc tiếp tục diễn ra. Thường dùng cho sự kiện tích cực hoặc trung lập. Mang tính văn viết.',
      type: 'main',
      examples: [
        { japanese: '大阪公演を皮切りに、全国ツアーが始まった。', vietnamese: 'Bắt đầu từ buổi biểu diễn ở Osaka, tour diễn toàn quốc đã khởi động.', english: 'Starting with the Osaka performance, the nationwide tour began.' },
        { japanese: '第一号店のオープンを皮切りに、次々と支店が増えた。', vietnamese: 'Bắt đầu từ việc khai trương cửa hàng số 1, các chi nhánh liên tục tăng lên.', english: 'Starting with the opening of the first store, branches increased one after another.' },
      ]
    },
    {
      pattern: '～をきっかけに（して）',
      vietnamese: 'Nhân dịp ~, lấy ~ làm cơ hội',
      english: 'Taking ~ as an opportunity, triggered by ~',
      explanation: 'Biểu thị rằng một sự kiện trở thành bước ngoặt hay cơ hội dẫn đến thay đổi. Khác với を皮切りに (chuỗi sự kiện cùng loại), をきっかけに nhấn mạnh sự thay đổi về chất.',
      type: 'main',
      examples: [
        { japanese: '震災をきっかけに、防災意識が高まった。', vietnamese: 'Nhân dịp trận động đất, ý thức phòng chống thiên tai được nâng cao.', english: 'Triggered by the earthquake, disaster prevention awareness increased.' },
        { japanese: '結婚をきっかけに、生活習慣を見直した。', vietnamese: 'Nhân dịp kết hôn, tôi đã xem xét lại thói quen sinh hoạt.', english: 'Taking marriage as an opportunity, I reconsidered my lifestyle habits.' },
      ]
    },
    {
      pattern: '～に至る',
      vietnamese: 'Đi đến ~, dẫn đến ~',
      english: 'To come to ~, to result in ~',
      explanation: 'Biểu thị quá trình phát triển dẫn đến kết quả cuối cùng. Mang tính trang trọng, thường dùng trong tường thuật. ～に至った (quá khứ) chỉ kết quả; ～に至るまで chỉ phạm vi.',
      type: 'additional',
      examples: [
        { japanese: '長い交渉の末、ようやく合意に至った。', vietnamese: 'Sau cuộc đàm phán dài, cuối cùng đã đi đến thỏa thuận.', english: 'After long negotiations, they finally reached an agreement.' },
        { japanese: '事態は最悪の状況に至った。', vietnamese: 'Tình hình đã đi đến trạng thái tồi tệ nhất.', english: 'The situation has reached the worst possible state.' },
      ]
    },
  ]
};

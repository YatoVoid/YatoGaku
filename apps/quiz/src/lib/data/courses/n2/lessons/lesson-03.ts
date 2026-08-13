/**
 * N2 Lesson 03 — わけだ／わけがない／わけではない
 * Reasoning, impossibility
 */

import type { LessonData } from '$lib/types';

export const LESSON_03_DATA: LessonData = {
  lessonNumber: 3,
  title: 'わけだ／わけがない／わけではない (Lý do / Không thể nào / Không hẳn)',
  vocabulary: [
    { japanese: '理由', kana: 'りゆう', vietnamese: 'lý do', english: 'reason', type: 'main', example: '遅刻した理由を説明してください。' },
    { japanese: '原因', kana: 'げんいん', vietnamese: 'nguyên nhân', english: 'cause', type: 'main', example: '事故の原因を調査する。' },
    { japanese: '結論', kana: 'けつろん', vietnamese: 'kết luận', english: 'conclusion', type: 'main', example: 'まだ結論は出ていない。' },
    { japanese: '状況', kana: 'じょうきょう', vietnamese: 'tình hình, hoàn cảnh', english: 'situation, circumstances', type: 'main', example: '現在の状況を把握する。' },
    { japanese: '事情', kana: 'じじょう', vietnamese: 'sự tình, hoàn cảnh', english: 'circumstances, reasons', type: 'main', example: '個人的な事情で休みます。' },
    { japanese: '当然', kana: 'とうぜん', vietnamese: 'đương nhiên', english: 'naturally, of course', type: 'main', example: '努力すれば、成功するのは当然だ。' },
    { japanese: '不可能', kana: 'ふかのう', vietnamese: 'bất khả năng', english: 'impossible', type: 'main', example: 'それは不可能だと思う。' },
    { japanese: '納得', kana: 'なっとく', vietnamese: 'thông suốt, chấp nhận', english: 'understanding, acceptance', type: 'main', example: 'やっと納得できました。' },
    { japanese: '判断', kana: 'はんだん', vietnamese: 'phán đoán', english: 'judgment', type: 'main', example: '正しい判断をすることが大切だ。' },
    { japanese: '矛盾', kana: 'むじゅん', vietnamese: 'mâu thuẫn', english: 'contradiction', type: 'additional', example: '彼の話には矛盾がある。' },
    { japanese: '根拠', kana: 'こんきょ', vietnamese: 'căn cứ', english: 'basis, grounds', type: 'additional', example: 'その主張には根拠がない。' },
    { japanese: '道理', kana: 'どうり', vietnamese: 'đạo lý, lẽ đương nhiên', english: 'reason, logic', type: 'main', example: 'どうりで遅いわけだ。' },
    { japanese: '必ずしも', kana: 'かならずしも', vietnamese: 'không nhất thiết', english: 'not necessarily', type: 'main', example: '高いものが必ずしもいいわけではない。' },
    { japanese: '立場', kana: 'たちば', vietnamese: 'lập trường, vị trí', english: 'standpoint, position', type: 'main', example: '相手の立場に立って考える。' },
    { japanese: '仕方がない', kana: 'しかたがない', vietnamese: 'không có cách nào, đành chịu', english: 'cannot be helped', type: 'main', example: '遅れたのは仕方がない。' },
  ],
  grammar: [
    {
      pattern: '～わけだ',
      vietnamese: 'Thảo nào ~, nghĩa là ~, tức là ~',
      english: 'That means ~, no wonder ~',
      explanation: 'Biểu thị sự suy luận logic — từ thông tin đã biết, rút ra kết luận hợp lý. Thường dùng khi hiểu ra điều gì đó.',
      type: 'main',
      examples: [
        { japanese: '彼は10年日本に住んでいたのか。日本語が上手なわけだ。', vietnamese: 'Anh ấy đã sống ở Nhật 10 năm à? Thảo nào tiếng Nhật giỏi.', english: 'He lived in Japan for 10 years? No wonder his Japanese is good.' },
        { japanese: '1ドル150円ということは、1万円は約67ドルなわけだ。', vietnamese: '1 đô 150 yên, tức là 10.000 yên khoảng 67 đô.', english: 'If 1 dollar is 150 yen, that means 10,000 yen is about 67 dollars.' },
      ]
    },
    {
      pattern: '～わけがない',
      vietnamese: 'Không thể nào ~, không có lý do gì để ~',
      english: 'There is no way that ~, it is impossible that ~',
      explanation: 'Biểu thị sự phủ định mạnh — cho rằng điều đó hoàn toàn không thể xảy ra theo logic.',
      type: 'main',
      examples: [
        { japanese: 'あんなに勉強したのだから、落ちるわけがない。', vietnamese: 'Đã học nhiều như vậy thì không thể nào trượt được.', english: 'Since I studied that much, there is no way I will fail.' },
        { japanese: '子供にそんな難しい問題が解けるわけがない。', vietnamese: 'Không thể nào trẻ con giải được bài toán khó như vậy.', english: 'There is no way a child can solve such a difficult problem.' },
      ]
    },
    {
      pattern: '～わけではない',
      vietnamese: 'Không hẳn là ~, không phải là ~',
      english: 'It does not mean that ~, it is not that ~',
      explanation: 'Phủ định một phần — không phải hoàn toàn như vậy. Dùng để điều chỉnh, làm rõ ý kiến.',
      type: 'main',
      examples: [
        { japanese: '嫌いなわけではないが、あまり食べたくない。', vietnamese: 'Không phải là ghét, nhưng không muốn ăn lắm.', english: 'It is not that I dislike it, but I do not really want to eat it.' },
        { japanese: 'お金がないわけではないが、無駄遣いはしたくない。', vietnamese: 'Không phải là không có tiền, nhưng không muốn tiêu hoang.', english: 'It is not that I do not have money, but I do not want to waste it.' },
      ]
    },
    {
      pattern: '～わけにはいかない',
      vietnamese: 'Không thể ~, không được phép ~',
      english: 'Cannot possibly ~, must not ~',
      explanation: 'Biểu thị điều mà về mặt đạo đức, xã hội, hoặc lý do cá nhân không thể làm hoặc không thể không làm.',
      type: 'main',
      examples: [
        { japanese: '約束したので、行かないわけにはいかない。', vietnamese: 'Đã hứa rồi nên không thể không đi.', english: 'Since I made a promise, I cannot not go.' },
        { japanese: '秘密なので、誰にも言うわけにはいかない。', vietnamese: 'Vì là bí mật nên không thể nói cho ai được.', english: 'Since it is a secret, I cannot tell anyone.' },
      ]
    },
  ]
};

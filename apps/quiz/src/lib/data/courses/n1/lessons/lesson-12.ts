/**
 * N1 Lesson 12 — もさることながら／はおろか
 * Not to mention, let alone
 */

import type { LessonData } from '$lib/types';

export const LESSON_12_DATA: LessonData = {
  lessonNumber: 12,
  title: 'もさることながら／はおろか (Not to mention / Let alone)',
  vocabulary: [
    { japanese: '比較', kana: 'ひかく', vietnamese: 'so sánh', english: 'comparison', type: 'main', example: '二つの商品を比較する。' },
    { japanese: '圧倒的', kana: 'あっとうてき', vietnamese: 'áp đảo', english: 'overwhelming', type: 'main', example: '圧倒的な差で勝利した。' },
    { japanese: '格段', kana: 'かくだん', vietnamese: 'vượt trội, đặc biệt', english: 'remarkably, significantly', type: 'main', example: '技術が格段に向上した。' },
    { japanese: '顕著', kana: 'けんちょ', vietnamese: 'nổi bật, rõ rệt', english: 'remarkable, conspicuous', type: 'main', example: '顕著な成果を上げた。' },
    { japanese: '飛躍', kana: 'ひやく', vietnamese: 'nhảy vọt, bước tiến', english: 'leap, great advance', type: 'main', example: '飛躍的な成長を遂げた。' },
    { japanese: '凌駕', kana: 'りょうが', vietnamese: 'vượt qua, lấn át', english: 'to surpass, to outstrip', type: 'main', example: '前作を凌駕する出来だ。' },
    { japanese: '匹敵', kana: 'ひってき', vietnamese: 'sánh ngang, ngang hàng', english: 'to rival, to be comparable', type: 'main', example: 'プロに匹敵する腕前だ。' },
    { japanese: '際立つ', kana: 'きわだつ', vietnamese: 'nổi bật', english: 'to stand out, to be conspicuous', type: 'main', example: '彼女の才能が際立っている。' },
    { japanese: '言うまでもなく', kana: 'いうまでもなく', vietnamese: 'không cần nói cũng biết', english: 'needless to say', type: 'main', example: '言うまでもなく健康が一番大切だ。' },
    { japanese: '無論', kana: 'むろん', vietnamese: 'dĩ nhiên, tất nhiên', english: 'of course, naturally', type: 'main', example: '無論、反対する人もいる。' },
    { japanese: '尚更', kana: 'なおさら', vietnamese: 'càng thêm, lại càng', english: 'all the more, even more so', type: 'main', example: '雨の日は尚更注意が必要だ。' },
    { japanese: '桁違い', kana: 'けたちがい', vietnamese: 'khác hẳn, vượt xa', english: 'on a different scale', type: 'additional', example: '桁違いの実力を見せた。' },
    { japanese: '遥かに', kana: 'はるかに', vietnamese: 'xa hơn nhiều, vượt xa', english: 'far, by far', type: 'additional', example: '予想を遥かに超えた結果だ。' },
    { japanese: '一層', kana: 'いっそう', vietnamese: 'hơn nữa, thêm', english: 'even more, further', type: 'additional', example: '一層の努力が必要だ。' },
    { japanese: '加えて', kana: 'くわえて', vietnamese: 'thêm vào đó', english: 'in addition, moreover', type: 'additional', example: '経験に加えて、知識も豊富だ。' },
  ],
  grammar: [
    {
      pattern: '～もさることながら',
      vietnamese: '~ cũng đáng kể, nhưng ~ còn hơn',
      english: '~ is one thing, but ~ is also ~',
      explanation: 'Thừa nhận yếu tố A quan trọng, nhưng nhấn mạnh yếu tố B cũng quan trọng không kém hoặc hơn. Cấu trúc: A もさることながら B も～. Dùng trong văn viết.',
      type: 'main',
      examples: [
        { japanese: '味もさることながら、このレストランはサービスも素晴らしい。', vietnamese: 'Hương vị cũng đáng kể, nhưng dịch vụ của nhà hàng này cũng tuyệt vời.', english: 'The taste is one thing, but this restaurant\'s service is also wonderful.' },
        { japanese: '才能もさることながら、彼の努力は誰にも負けない。', vietnamese: 'Tài năng cũng đáng nể, nhưng sự nỗ lực của anh ấy không thua ai.', english: 'His talent is one thing, but his effort is second to none.' },
      ]
    },
    {
      pattern: '～はおろか',
      vietnamese: 'Chưa nói đến ~, ngay cả ~ cũng ~',
      english: 'Let alone ~, not to mention ~',
      explanation: 'Đưa ra một ví dụ dễ hơn/nhỏ hơn (A) rồi nói ngay cả cái khó hơn/lớn hơn (B) cũng như vậy. Nhấn mạnh phạm vi rộng. Thường đi với も hoặc さえ ở vế sau.',
      type: 'main',
      examples: [
        { japanese: '漢字はおろか、ひらがなさえ読めない。', vietnamese: 'Chưa nói đến kanji, ngay cả hiragana cũng không đọc được.', english: 'Let alone kanji, they can\'t even read hiragana.' },
        { japanese: '旅行はおろか、近所に出かける余裕もない。', vietnamese: 'Chưa nói đến du lịch, ngay cả đi loanh quanh cũng không có thời gian.', english: 'Let alone traveling, I don\'t even have time to go around the neighborhood.' },
      ]
    },
    {
      pattern: '～はもとより',
      vietnamese: 'Không chỉ ~, dĩ nhiên ~ và cả ~',
      english: 'Not only ~, but also ~; ~ goes without saying',
      explanation: 'Biểu thị A là điều đương nhiên, và thêm B cũng vậy. Tương tự ～はもちろん nhưng trang trọng hơn. Dùng trong văn viết và phát biểu chính thức.',
      type: 'main',
      examples: [
        { japanese: '国内はもとより、海外でも高く評価されている。', vietnamese: 'Không chỉ trong nước, mà ở nước ngoài cũng được đánh giá cao.', english: 'It is highly regarded not only domestically but also internationally.' },
        { japanese: '大人はもとより、子供にも人気がある。', vietnamese: 'Không chỉ người lớn, trẻ em cũng yêu thích.', english: 'It is popular not only with adults but also with children.' },
      ]
    },
    {
      pattern: '～にとどまらず',
      vietnamese: 'Không dừng lại ở ~, không chỉ ~',
      english: 'Not limited to ~, going beyond ~',
      explanation: 'Biểu thị phạm vi không chỉ giới hạn ở A mà mở rộng ra B. Nhấn mạnh sự lan rộng hoặc phát triển vượt mong đợi. Dùng trong văn viết trang trọng.',
      type: 'additional',
      examples: [
        { japanese: '影響は日本にとどまらず、世界中に広がった。', vietnamese: 'Ảnh hưởng không dừng lại ở Nhật Bản mà lan rộng ra toàn thế giới.', english: 'The impact was not limited to Japan but spread worldwide.' },
        { japanese: '彼の活躍は芸能界にとどまらず、政治にも及んでいる。', vietnamese: 'Hoạt động của anh ấy không chỉ trong giới giải trí mà còn mở rộng sang chính trị.', english: 'His activities are not limited to entertainment but extend to politics.' },
      ]
    },
  ]
};

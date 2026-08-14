/**
 * N2 Lesson 15 — N2 Review & Mixed Grammar
 * All patterns combined — additional N2 grammar
 */

import type { LessonData } from '$lib/types';

export const LESSON_15_DATA: LessonData = {
  lessonNumber: 15,
  title: 'N2 Review & Mixed Grammar (Comprehensive Review)',
  vocabulary: [
    { japanese: '社会', kana: 'しゃかい', vietnamese: 'xã hội', english: 'society', type: 'main', example: '社会に貢献したいと思っている。' },
    { japanese: '経験', kana: 'けいけん', vietnamese: 'kinh nghiệm', english: 'experience', type: 'main', example: '海外での経験があるだけあって、英語が上手だ。' },
    { japanese: '価値', kana: 'かち', vietnamese: 'giá trị', english: 'value, worth', type: 'main', example: 'この作品には十分な価値がある。' },
    { japanese: '実力', kana: 'じつりょく', vietnamese: 'thực lực', english: 'true ability, competence', type: 'main', example: '実力があるだけあって、結果を出した。' },
    { japanese: '世論', kana: 'よろん', vietnamese: 'dư luận', english: 'public opinion', type: 'main', example: '世論は賛否が分かれている。' },
    { japanese: '仮定', kana: 'かてい', vietnamese: 'giả định', english: 'assumption, hypothesis', type: 'main', example: 'もし失敗したとしたら、どうしますか。' },
    { japanese: '矛盾', kana: 'むじゅん', vietnamese: 'mâu thuẫn', english: 'contradiction', type: 'main', example: '彼の説明には矛盾がある。' },
    { japanese: '評価', kana: 'ひょうか', vietnamese: 'đánh giá', english: 'evaluation, assessment', type: 'main', example: 'ベテランだけあって、評価が高い。' },
    { japanese: '独立', kana: 'どくりつ', vietnamese: 'độc lập', english: 'independence', type: 'main', example: '親から独立するにしても、準備が必要だ。' },
    { japanese: '妥協', kana: 'だきょう', vietnamese: 'thỏa hiệp', english: 'compromise', type: 'main', example: '簡単には妥協できない。' },
    { japanese: '根拠', kana: 'こんきょ', vietnamese: 'căn cứ, cơ sở', english: 'basis, grounds', type: 'additional', example: '科学的な根拠に基づいて判断する。' },
    { japanese: '通用', kana: 'つうよう', vietnamese: 'có hiệu lực, dùng được', english: 'to be accepted, to be valid', type: 'additional', example: '言い訳は通用しない。' },
    { japanese: '前提', kana: 'ぜんてい', vietnamese: 'tiền đề', english: 'premise, prerequisite', type: 'main', example: '参加を前提として話を進める。' },
    { japanese: '偏見', kana: 'へんけん', vietnamese: 'thành kiến', english: 'prejudice, bias', type: 'main', example: '外見だけで判断するのは偏見だ。' },
    { japanese: '柔軟', kana: 'じゅうなん', vietnamese: 'linh hoạt', english: 'flexible', type: 'additional', example: '柔軟な考え方が必要だ。' },
  ],
  grammar: [
    {
      pattern: '～としたら／とすれば',
      vietnamese: 'Nếu giả sử ~, nếu ~ thì',
      english: 'If (hypothetically) ~, supposing ~',
      explanation: 'Biểu thị giả định — đặt ra tình huống giả sử để suy luận. としたら nhấn mạnh giả định cụ thể, とすれば nhấn mạnh suy luận logic.',
      type: 'main',
      examples: [
        { japanese: '宝くじに当たったとしたら、何をしますか。', vietnamese: 'Nếu giả sử trúng xổ số, bạn sẽ làm gì?', english: 'If you were to win the lottery, what would you do?' },
        { japanese: '彼の言うことが本当だとすれば、大変なことになる。', vietnamese: 'Nếu những gì anh ấy nói là thật thì sẽ rất nghiêm trọng.', english: 'If what he says is true, it would be a serious matter.' },
      ]
    },
    {
      pattern: '～にしても',
      vietnamese: 'Cho dù ~ đi nữa, ngay cả khi ~',
      english: 'Even if ~, even though ~, granting that ~',
      explanation: 'Biểu thị nhượng bộ — dù thừa nhận điều kiện nhưng kết quả vẫn không thay đổi. Có thể dùng AにしてもBにしても nghĩa là "dù A hay B".',
      type: 'main',
      examples: [
        { japanese: '忙しいにしても、食事はちゃんと取るべきだ。', vietnamese: 'Cho dù bận đi nữa, cũng nên ăn uống đầy đủ.', english: 'Even if you are busy, you should eat properly.' },
        { japanese: '賛成するにしても反対するにしても、理由を述べてください。', vietnamese: 'Dù tán thành hay phản đối, hãy nêu lý do.', english: 'Whether you agree or disagree, please state your reasons.' },
      ]
    },
    {
      pattern: '～からといって',
      vietnamese: 'Không phải vì ~ mà..., chỉ vì ~ thì không có nghĩa là...',
      english: 'Just because ~ does not mean ~',
      explanation: 'Phủ nhận suy luận đơn giản — chỉ vì có lý do A không có nghĩa là kết luận B đúng. Vế sau thường phủ định hoặc khuyên nhủ.',
      type: 'main',
      examples: [
        { japanese: '安いからといって、たくさん買うのはよくない。', vietnamese: 'Không phải vì rẻ mà mua nhiều là tốt.', english: 'Just because it is cheap does not mean you should buy a lot.' },
        { japanese: '日本人だからといって、全員が寿司を好きなわけではない。', vietnamese: 'Không phải vì là người Nhật mà ai cũng thích sushi.', english: 'Just because someone is Japanese does not mean they all like sushi.' },
      ]
    },
    {
      pattern: '～だけあって',
      vietnamese: 'Xứng đáng với ~, đúng là ~ (nên...)',
      english: 'As expected of ~, befitting ~',
      explanation: 'Biểu thị kết quả xứng đáng với danh tiếng, kinh nghiệm hoặc đặc điểm. Mang sắc thái khen ngợi, công nhận.',
      type: 'main',
      examples: [
        { japanese: '有名なレストランだけあって、料理がとてもおいしかった。', vietnamese: 'Đúng là nhà hàng nổi tiếng, đồ ăn rất ngon.', english: 'As expected of a famous restaurant, the food was very delicious.' },
        { japanese: '10年も日本に住んでいただけあって、日本語がペラペラだ。', vietnamese: 'Xứng đáng với 10 năm sống ở Nhật, tiếng Nhật nói trôi chảy.', english: 'As you would expect from living in Japan for 10 years, their Japanese is fluent.' },
      ]
    },
  ]
};

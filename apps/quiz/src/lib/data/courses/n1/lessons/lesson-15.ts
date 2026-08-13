/**
 * N1 Lesson 15 — N1 Review & Mixed Grammar
 * All patterns combined — additional N1 grammar
 */

import type { LessonData } from '$lib/types';

export const LESSON_15_DATA: LessonData = {
  lessonNumber: 15,
  title: 'N1 総合復習 (Ôn tập tổng hợp N1)',
  vocabulary: [
    { japanese: '論文', kana: 'ろんぶん', vietnamese: 'luận văn, bài nghiên cứu', english: 'thesis, academic paper', type: 'main', example: '博士論文を提出した。' },
    { japanese: '概念', kana: 'がいねん', vietnamese: 'khái niệm', english: 'concept, notion', type: 'main', example: '新しい概念を導入する。' },
    { japanese: '抽象的', kana: 'ちゅうしょうてき', vietnamese: 'trừu tượng', english: 'abstract', type: 'main', example: '抽象的な議論を避ける。' },
    { japanese: '普遍的', kana: 'ふへんてき', vietnamese: 'phổ biến, phổ quát', english: 'universal', type: 'main', example: '普遍的な価値観を大切にする。' },
    { japanese: '矛盾', kana: 'むじゅん', vietnamese: 'mâu thuẫn', english: 'contradiction', type: 'main', example: '彼の発言には矛盾がある。' },
    { japanese: '洞察', kana: 'どうさつ', vietnamese: 'thấu hiểu, sự sáng suốt', english: 'insight, discernment', type: 'main', example: '鋭い洞察力を持っている。' },
    { japanese: '帰結', kana: 'きけつ', vietnamese: 'kết quả, hệ quả', english: 'conclusion, consequence', type: 'main', example: '論理的な帰結として認める。' },
    { japanese: '懸念', kana: 'けねん', vietnamese: 'lo ngại', english: 'concern, apprehension', type: 'main', example: '安全性に対する懸念が高まる。' },
    { japanese: '趣旨', kana: 'しゅし', vietnamese: 'ý chính, chủ đề', english: 'gist, purpose, intent', type: 'main', example: '提案の趣旨を説明する。' },
    { japanese: '逸脱', kana: 'いつだつ', vietnamese: 'đi lệch, vượt ra ngoài', english: 'deviation, departure', type: 'main', example: '規範から逸脱した行為だ。' },
    { japanese: '是非', kana: 'ぜひ', vietnamese: 'đúng sai, phải trái', english: 'right and wrong, pros and cons', type: 'main', example: '是非を問う議論が必要だ。' },
    { japanese: '典型的', kana: 'てんけいてき', vietnamese: 'điển hình', english: 'typical, representative', type: 'additional', example: '典型的な日本の文化だ。' },
    { japanese: '恩恵', kana: 'おんけい', vietnamese: 'ân huệ, ơn', english: 'benefit, blessing', type: 'additional', example: '科学技術の恩恵を受ける。' },
    { japanese: '名残', kana: 'なごり', vietnamese: 'dư âm, dấu vết còn lại', english: 'remnant, lingering trace', type: 'additional', example: '冬の名残がまだ感じられる。' },
    { japanese: '所以', kana: 'ゆえん', vietnamese: 'lý do, nguyên nhân', english: 'reason, the reason why', type: 'additional', example: '彼が尊敬される所以だ。' },
  ],
  grammar: [
    {
      pattern: '～とあって',
      vietnamese: 'Vì là ~, bởi vì ~ (tình huống đặc biệt)',
      english: 'Because of the special circumstance that ~',
      explanation: 'Biểu thị lý do dẫn đến kết quả tự nhiên, đặc biệt khi hoàn cảnh đó là bất thường hoặc đáng chú ý. Thường dùng để giải thích tình huống mà ai cũng hiểu được.',
      type: 'main',
      examples: [
        { japanese: '連休とあって、どこも人でいっぱいだ。', vietnamese: 'Vì là kỳ nghỉ dài nên đâu đâu cũng đông người.', english: 'Because it\'s a long holiday, everywhere is packed with people.' },
        { japanese: '有名人が来るとあって、会場は満席だった。', vietnamese: 'Vì có người nổi tiếng đến nên hội trường chật kín.', english: 'Because a celebrity was coming, the venue was fully packed.' },
      ]
    },
    {
      pattern: '～とあれば',
      vietnamese: 'Nếu là vì ~ thì ~',
      english: 'If it is the case that ~, if it means ~',
      explanation: 'Biểu thị điều kiện đặc biệt khiến người nói sẵn sàng hành động. Mang sắc thái quyết tâm hoặc sẵn lòng làm vì mục đích quan trọng.',
      type: 'main',
      examples: [
        { japanese: '子供のためとあれば、何でもする。', vietnamese: 'Nếu là vì con thì làm gì cũng được.', english: 'If it\'s for my children, I\'ll do anything.' },
        { japanese: '必要とあれば、海外まで行きます。', vietnamese: 'Nếu cần thiết thì tôi sẽ đi ra nước ngoài.', english: 'If it\'s necessary, I\'ll go overseas.' },
      ]
    },
    {
      pattern: '～ものを',
      vietnamese: 'Đáng lẽ ~ thì tốt rồi, vậy mà ~',
      english: 'If only ~, it would have been fine if ~, but ~',
      explanation: 'Biểu thị sự tiếc nuối hoặc trách móc nhẹ. Đáng lẽ làm A thì tốt rồi nhưng lại không làm. Thường dùng ở cuối câu hoặc giữa câu, mang sắc thái không hài lòng.',
      type: 'main',
      examples: [
        { japanese: '早く言えばいいものを、黙っていたから問題になった。', vietnamese: 'Đáng lẽ nói sớm thì tốt rồi, vì im lặng nên mới thành vấn đề.', english: 'If only you had said so earlier; because you kept quiet, it became a problem.' },
        { japanese: '素直に謝ればいいものを、言い訳ばかりする。', vietnamese: 'Đáng lẽ thành thật xin lỗi thì xong, vậy mà cứ toàn bào chữa.', english: 'It would be fine if you just apologized honestly, but you keep making excuses.' },
      ]
    },
    {
      pattern: '～ばこそ',
      vietnamese: 'Chính vì ~ nên mới ~',
      english: 'Precisely because ~, it is because ~ that ~',
      explanation: 'Nhấn mạnh lý do chính đáng cho hành động. Tương tự ～からこそ nhưng dùng thể ば, mang tính văn chương và nhấn mạnh hơn. Thường dùng để biện minh hoặc giải thích động cơ tốt.',
      type: 'additional',
      examples: [
        { japanese: '信頼すればこそ、厳しいことも言うのだ。', vietnamese: 'Chính vì tin tưởng nên mới nói những điều nghiêm khắc.', english: 'It is precisely because I trust you that I say harsh things.' },
        { japanese: '愛すればこそ、心を鬼にして叱る。', vietnamese: 'Chính vì yêu thương nên mới cứng lòng mà mắng.', english: 'It is precisely because of love that I steel my heart and scold.' },
      ]
    },
  ]
};

/**
 * N2 Lesson 08 — っぽい／気味／がち
 * Tendency, seeming
 */

import type { LessonData } from '$lib/types';

export const LESSON_08_DATA: LessonData = {
  lessonNumber: 8,
  title: 'っぽい／気味／がち (-ish / Tendency toward / Prone to)',
  vocabulary: [
    { japanese: '大人', kana: 'おとな', vietnamese: 'người lớn', english: 'adult', type: 'main', example: '彼は大人っぽい話し方をする。' },
    { japanese: '子供', kana: 'こども', vietnamese: 'trẻ con', english: 'child', type: 'main', example: '子供っぽい行動はやめてください。' },
    { japanese: '飽きる', kana: 'あきる', vietnamese: 'chán', english: 'to get bored', type: 'main', example: '飽きっぽい性格を直したい。' },
    { japanese: '怒る', kana: 'おこる', vietnamese: 'giận, tức giận', english: 'to get angry', type: 'main', example: '怒りっぽい人は損をする。' },
    { japanese: '忘れる', kana: 'わすれる', vietnamese: 'quên', english: 'to forget', type: 'main', example: '忘れっぽくなってきた。' },
    { japanese: '風邪', kana: 'かぜ', vietnamese: 'cảm cúm', english: 'cold (illness)', type: 'main', example: '風邪気味なので早く寝ます。' },
    { japanese: '疲労', kana: 'ひろう', vietnamese: 'mệt mỏi', english: 'fatigue', type: 'main', example: '疲労気味で集中できない。' },
    { japanese: '太る', kana: 'ふとる', vietnamese: 'béo, tăng cân', english: 'to gain weight', type: 'main', example: '最近太り気味だ。' },
    { japanese: '遠慮', kana: 'えんりょ', vietnamese: 'khách sáo, e dè', english: 'reserve, restraint', type: 'main', example: '遠慮がちに話す。' },
    { japanese: '欠席', kana: 'けっせき', vietnamese: 'vắng mặt', english: 'absence', type: 'main', example: '最近、欠席がちだ。' },
    { japanese: '内気', kana: 'うちき', vietnamese: 'rụt rè, nhút nhát', english: 'shy, introverted', type: 'additional', example: '内気な性格を克服したい。' },
    { japanese: '体調', kana: 'たいちょう', vietnamese: 'tình trạng sức khỏe', english: 'physical condition', type: 'main', example: '体調を崩しがちだ。' },
    { japanese: '傾向', kana: 'けいこう', vietnamese: 'khuynh hướng', english: 'tendency, trend', type: 'main', example: '最近の若者にはその傾向がある。' },
    { japanese: '性格', kana: 'せいかく', vietnamese: 'tính cách', english: 'personality, character', type: 'main', example: '明るい性格の人が好きだ。' },
    { japanese: '限界', kana: 'げんかい', vietnamese: 'giới hạn', english: 'limit', type: 'additional', example: '体力の限界を感じて走りきれなかった。' },
  ],
  grammar: [
    {
      pattern: '～っぽい',
      vietnamese: 'Có vẻ ~, giống ~, hay bị ~',
      english: '~ish, seem like ~, tend to ~',
      explanation: 'Gắn vào danh từ/động từ/tính từ để biểu thị "có tính chất ~", "dễ ~". Khẩu ngữ, thường dùng trong giao tiếp hàng ngày.',
      type: 'main',
      examples: [
        { japanese: '彼女は大人っぽい雰囲気がある。', vietnamese: 'Cô ấy có phong cách trưởng thành.', english: 'She has a mature vibe.' },
        { japanese: '最近忘れっぽくなった。', vietnamese: 'Gần đây tôi hay quên.', english: 'I have become forgetful recently.' },
      ]
    },
    {
      pattern: '～気味',
      vietnamese: 'Hơi ~, có xu hướng ~',
      english: 'Slightly ~, a touch of ~',
      explanation: 'Biểu thị trạng thái "hơi có dấu hiệu ~". Thường dùng với trạng thái tiêu cực về sức khỏe hoặc tình trạng.',
      type: 'main',
      examples: [
        { japanese: '風邪気味なので、今日は早く帰ります。', vietnamese: 'Vì hơi bị cảm nên hôm nay tôi về sớm.', english: 'Since I have a slight cold, I will go home early today.' },
        { japanese: '最近、太り気味なのでダイエットを始めた。', vietnamese: 'Gần đây hơi tăng cân nên bắt đầu ăn kiêng.', english: 'I have been gaining a bit of weight recently, so I started dieting.' },
      ]
    },
    {
      pattern: '～がち',
      vietnamese: 'Hay bị ~, có khuynh hướng ~',
      english: 'Tend to ~, prone to ~',
      explanation: 'Biểu thị xu hướng tiêu cực xảy ra thường xuyên, không mong muốn. Thường dùng với tình trạng xấu.',
      type: 'main',
      examples: [
        { japanese: '梅雨の時期は曇りがちだ。', vietnamese: 'Mùa mưa thường hay bị âm u.', english: 'During the rainy season, it tends to be cloudy.' },
        { japanese: '一人暮らしだと、栄養が偏りがちになる。', vietnamese: 'Sống một mình thì dinh dưỡng hay bị mất cân bằng.', english: 'When living alone, nutrition tends to become unbalanced.' },
      ]
    },
    {
      pattern: '～きる／きれない',
      vietnamese: 'Làm ~ hết, hoàn toàn ~ / Không thể ~ hết',
      english: 'To completely ~, to ~ thoroughly / Cannot ~ completely',
      explanation: 'きる biểu thị hoàn thành triệt để. きれない biểu thị không thể hoàn thành hết, vượt quá khả năng.',
      type: 'main',
      examples: [
        { japanese: '42キロを走りきった。', vietnamese: 'Tôi đã chạy hết 42 km.', english: 'I ran the full 42 kilometers.' },
        { japanese: '食べきれないほどの料理が出てきた。', vietnamese: 'Đồ ăn nhiều đến mức không thể ăn hết.', english: 'So much food came out that I could not finish it all.' },
      ]
    },
  ]
};

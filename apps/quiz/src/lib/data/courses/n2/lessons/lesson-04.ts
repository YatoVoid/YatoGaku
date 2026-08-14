/**
 * N2 Lesson 04 — にしたがって／につれて／とともに
 * Proportional change
 */

import type { LessonData } from '$lib/types';

export const LESSON_04_DATA: LessonData = {
  lessonNumber: 4,
  title: 'にしたがって／につれて／とともに (As, along with, proportional change)',
  vocabulary: [
    { japanese: '成長', kana: 'せいちょう', vietnamese: 'tăng trưởng, lớn lên', english: 'growth', type: 'main', example: '子供の成長は早い。' },
    { japanese: '発展', kana: 'はってん', vietnamese: 'phát triển', english: 'development', type: 'main', example: '技術の発展が著しい。' },
    { japanese: '進歩', kana: 'しんぽ', vietnamese: 'tiến bộ', english: 'progress', type: 'main', example: '医学の進歩は目覚ましい。' },
    { japanese: '人口', kana: 'じんこう', vietnamese: 'dân số', english: 'population', type: 'main', example: '世界の人口は増え続けている。' },
    { japanese: '高齢化', kana: 'こうれいか', vietnamese: 'già hóa', english: 'aging (of population)', type: 'main', example: '日本は高齢化が進んでいる。' },
    { japanese: '経済', kana: 'けいざい', vietnamese: 'kinh tế', english: 'economy', type: 'main', example: '経済が発展するにつれて生活が豊かになった。' },
    { japanese: '環境', kana: 'かんきょう', vietnamese: 'môi trường', english: 'environment', type: 'main', example: '環境問題は深刻だ。' },
    { japanese: '技術', kana: 'ぎじゅつ', vietnamese: 'kỹ thuật, công nghệ', english: 'technology, skill', type: 'main', example: 'AI技術の進歩は速い。' },
    { japanese: '影響', kana: 'えいきょう', vietnamese: 'ảnh hưởng', english: 'influence, impact', type: 'main', example: 'SNSは若者に大きな影響を与えている。' },
    { japanese: '変動', kana: 'へんどう', vietnamese: 'biến động', english: 'fluctuation, change', type: 'additional', example: '為替レートの変動が激しい。' },
    { japanese: '拡大', kana: 'かくだい', vietnamese: 'mở rộng', english: 'expansion', type: 'main', example: '市場が拡大している。' },
    { japanese: '減少', kana: 'げんしょう', vietnamese: 'giảm thiểu', english: 'decrease', type: 'main', example: '出生率が減少している。' },
    { japanese: '増加', kana: 'ぞうか', vietnamese: 'tăng thêm', english: 'increase', type: 'main', example: '外国人観光客が増加した。' },
    { japanese: '複雑', kana: 'ふくざつ', vietnamese: 'phức tạp', english: 'complex, complicated', type: 'additional', example: '社会が複雑になってきた。' },
    { japanese: '著しい', kana: 'いちじるしい', vietnamese: 'đáng kể, rõ rệt', english: 'remarkable, notable', type: 'additional', example: '技術の進歩は著しい。' },
  ],
  grammar: [
    {
      pattern: '～にしたがって',
      vietnamese: 'Theo ~, cùng với sự ~ thì',
      english: 'As ~, in accordance with ~',
      explanation: 'Biểu thị sự thay đổi tỷ lệ thuận — khi A thay đổi thì B cũng thay đổi theo. Cũng có nghĩa "tuân theo".',
      type: 'main',
      examples: [
        { japanese: '高度が上がるにしたがって、気温が下がる。', vietnamese: 'Theo sự tăng của độ cao thì nhiệt độ giảm.', english: 'As the altitude rises, the temperature drops.' },
        { japanese: '年を取るにしたがって、体力が衰える。', vietnamese: 'Cùng với việc già đi thì thể lực suy giảm.', english: 'As one gets older, physical strength declines.' },
      ]
    },
    {
      pattern: '～につれて',
      vietnamese: 'Cùng với ~, theo đà ~',
      english: 'As ~, along with ~',
      explanation: 'Tương tự にしたがって — biểu thị hai sự việc thay đổi đồng thời, tỷ lệ thuận. Thường dùng với sự thay đổi tự nhiên, dần dần.',
      type: 'main',
      examples: [
        { japanese: '経済が発展するにつれて、生活水準が上がった。', vietnamese: 'Cùng với sự phát triển kinh tế, mức sống đã tăng lên.', english: 'As the economy developed, the standard of living rose.' },
        { japanese: '日本語を勉強するにつれて、日本文化に興味を持つようになった。', vietnamese: 'Cùng với việc học tiếng Nhật, tôi dần dần quan tâm đến văn hóa Nhật.', english: 'As I studied Japanese, I became interested in Japanese culture.' },
      ]
    },
    {
      pattern: '～とともに',
      vietnamese: 'Cùng với ~, đồng thời với ~',
      english: 'Along with ~, together with ~',
      explanation: 'Biểu thị hai sự việc xảy ra đồng thời hoặc thay đổi cùng nhau. Mang sắc thái trang trọng, thường dùng trong văn viết.',
      type: 'main',
      examples: [
        { japanese: '時代の変化とともに、人々の価値観も変わった。', vietnamese: 'Cùng với sự thay đổi của thời đại, quan niệm giá trị của con người cũng thay đổi.', english: 'Along with the changes of the times, people\'s values have also changed.' },
        { japanese: '科学の発展とともに、新しい問題も生まれている。', vietnamese: 'Cùng với sự phát triển khoa học, những vấn đề mới cũng phát sinh.', english: 'Along with the development of science, new problems are also emerging.' },
      ]
    },
    {
      pattern: '～に伴って',
      vietnamese: 'Đi kèm với ~, song song với ~',
      english: 'Accompanying ~, along with ~',
      explanation: 'Biểu thị sự thay đổi hoặc sự việc đi kèm. Trang trọng hơn につれて, thường dùng trong văn viết, báo chí.',
      type: 'main',
      examples: [
        { japanese: '都市化に伴って、環境問題が深刻になっている。', vietnamese: 'Đi kèm với đô thị hóa, vấn đề môi trường trở nên nghiêm trọng.', english: 'Accompanying urbanization, environmental problems are becoming serious.' },
        { japanese: '人口増加に伴って、食料不足が心配されている。', vietnamese: 'Song song với tăng dân số, tình trạng thiếu lương thực đáng lo ngại.', english: 'Along with population growth, food shortages are a concern.' },
      ]
    },
  ]
};

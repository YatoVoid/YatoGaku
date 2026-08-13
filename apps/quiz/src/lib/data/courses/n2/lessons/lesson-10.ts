/**
 * N2 Lesson 10 — ざるを得ない／ないわけにはいかない
 * Compulsion, unavoidable actions
 */

import type { LessonData } from '$lib/types';

export const LESSON_10_DATA: LessonData = {
  lessonNumber: 10,
  title: 'ざるを得ない／ないわけにはいかない (Compulsion, unavoidable)',
  vocabulary: [
    { japanese: '義務', kana: 'ぎむ', vietnamese: 'nghĩa vụ', english: 'duty, obligation', type: 'main', example: '税金を払う義務がある。' },
    { japanese: '責任', kana: 'せきにん', vietnamese: 'trách nhiệm', english: 'responsibility', type: 'main', example: '自分の行動に責任を持つべきだ。' },
    { japanese: '圧力', kana: 'あつりょく', vietnamese: 'áp lực', english: 'pressure', type: 'main', example: '上司からの圧力が強い。' },
    { japanese: '強制', kana: 'きょうせい', vietnamese: 'cưỡng chế, bắt buộc', english: 'compulsion, enforcement', type: 'main', example: '参加を強制されている。' },
    { japanese: '仕方がない', kana: 'しかたがない', vietnamese: 'không có cách nào, đành phải', english: 'cannot be helped', type: 'main', example: '仕方がないから引き受けた。' },
    { japanese: '覚悟', kana: 'かくご', vietnamese: 'giác ngộ, quyết tâm', english: 'resolution, preparedness', type: 'main', example: '失敗する覚悟で挑戦した。' },
    { japanese: '我慢', kana: 'がまん', vietnamese: 'nhẫn nại, chịu đựng', english: 'patience, endurance', type: 'main', example: '痛みを我慢せざるを得なかった。' },
    { japanese: '負担', kana: 'ふたん', vietnamese: 'gánh nặng', english: 'burden, load', type: 'main', example: '経済的な負担が大きい。' },
    { japanese: '避ける', kana: 'さける', vietnamese: 'tránh', english: 'to avoid', type: 'main', example: '危険を避けることができない。' },
    { japanese: '従う', kana: 'したがう', vietnamese: 'tuân theo', english: 'to follow, to obey', type: 'main', example: '規則に従わざるを得ない。' },
    { japanese: '締め切り', kana: 'しめきり', vietnamese: 'hạn chót', english: 'deadline', type: 'additional', example: '締め切りが迫っている。' },
    { japanese: '命令', kana: 'めいれい', vietnamese: 'mệnh lệnh', english: 'order, command', type: 'additional', example: '上司の命令に従わなければならない。' },
    { japanese: '衝動', kana: 'しょうどう', vietnamese: 'xung động, thôi thúc', english: 'impulse, urge', type: 'additional', example: '泣きたい衝動を抑えられない。' },
    { japanese: '耐える', kana: 'たえる', vietnamese: 'chịu đựng', english: 'to endure, to bear', type: 'main', example: '寒さに耐えなければならない。' },
    { japanese: '断る', kana: 'ことわる', vietnamese: 'từ chối', english: 'to refuse, to decline', type: 'main', example: '断るわけにはいかない。' },
  ],
  grammar: [
    {
      pattern: '～ざるを得ない',
      vietnamese: 'Không thể không ~, buộc phải ~',
      english: 'Cannot help but ~, have no choice but to ~',
      explanation: 'Biểu thị việc bắt buộc phải làm dù không muốn. Văn phong trang trọng. する → せざるを得ない. Các động từ khác: bỏ る/う rồi thêm ざるを得ない.',
      type: 'main',
      examples: [
        { japanese: '証拠がある以上、認めざるを得ない。', vietnamese: 'Đã có bằng chứng thì không thể không thừa nhận.', english: 'Since there is evidence, I have no choice but to admit it.' },
        { japanese: '会社の方針が変わったので、計画を変更せざるを得なかった。', vietnamese: 'Vì chính sách công ty thay đổi nên buộc phải thay đổi kế hoạch.', english: 'Since the company policy changed, we had no choice but to change the plan.' },
      ]
    },
    {
      pattern: '～ないわけにはいかない',
      vietnamese: 'Không thể không ~, phải ~ (do lý do xã hội/đạo đức)',
      english: 'Cannot not ~, must ~ (due to social/moral obligation)',
      explanation: 'Biểu thị nghĩa vụ phải làm vì lý do xã hội, đạo đức hoặc thể diện. Khác với ざるを得ない ở chỗ nhấn mạnh yếu tố xã hội hơn là hoàn cảnh bắt buộc.',
      type: 'main',
      examples: [
        { japanese: '招待されたので、行かないわけにはいかない。', vietnamese: 'Đã được mời nên không thể không đi.', english: 'Since I was invited, I cannot not go.' },
        { japanese: '約束した以上、守らないわけにはいかない。', vietnamese: 'Đã hứa rồi thì không thể không giữ lời.', english: 'Since I promised, I must keep my word.' },
      ]
    },
    {
      pattern: '～ずにはいられない',
      vietnamese: 'Không thể nhịn được, không thể không ~',
      english: 'Cannot help but ~, cannot resist ~ing',
      explanation: 'Biểu thị cảm xúc hoặc hành động tự phát không kiềm chế được. Mang tính tự nhiên, không phải bắt buộc từ bên ngoài. する → せずにはいられない.',
      type: 'main',
      examples: [
        { japanese: 'その映画を見て、泣かずにはいられなかった。', vietnamese: 'Xem bộ phim đó xong, không thể nhịn khóc được.', english: 'After watching that movie, I could not help but cry.' },
        { japanese: '彼の冗談を聞くと、笑わずにはいられない。', vietnamese: 'Nghe truyện cười của anh ấy, không thể nhịn cười được.', english: 'When I hear his jokes, I cannot help but laugh.' },
      ]
    },
    {
      pattern: '～てたまらない',
      vietnamese: 'Vô cùng ~, ~ không chịu nổi',
      english: 'Unbearably ~, extremely ~',
      explanation: 'Biểu thị cảm giác hoặc cảm xúc mãnh liệt đến mức không chịu nổi. Thường dùng với tính từ hoặc động từ chỉ cảm xúc/cảm giác.',
      type: 'main',
      examples: [
        { japanese: '合格の知らせを聞いて、嬉しくてたまらない。', vietnamese: 'Nghe tin đỗ, vui mừng không chịu nổi.', english: 'I am unbearably happy hearing the news of passing.' },
        { japanese: '夏は暑くてたまらない。', vietnamese: 'Mùa hè nóng không chịu nổi.', english: 'Summer is unbearably hot.' },
      ]
    },
  ]
};

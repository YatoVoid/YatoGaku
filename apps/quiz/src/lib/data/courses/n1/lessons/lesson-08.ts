/**
 * N1 Lesson 08 — まじき／ざるを得ない (Literary emphasis)
 * Must not / Cannot help but — Ethics & obligation
 */

import type { LessonData } from '$lib/types';

export const LESSON_08_DATA: LessonData = {
  lessonNumber: 8,
  title: 'まじき／ざるを得ない (Không được phép ~ / Không thể không ~)',
  vocabulary: [
    { japanese: '倫理', kana: 'りんり', vietnamese: 'luân lý, đạo đức', english: 'ethics, morals', type: 'main', example: '医療倫理を守るべきだ。' },
    { japanese: '道徳', kana: 'どうとく', vietnamese: 'đạo đức', english: 'morality, ethics', type: 'main', example: '道徳的に許されない行為だ。' },
    { japanese: '義務', kana: 'ぎむ', vietnamese: 'nghĩa vụ', english: 'duty, obligation', type: 'main', example: '納税は国民の義務だ。' },
    { japanese: '責務', kana: 'せきむ', vietnamese: 'trách vụ, trách nhiệm', english: 'responsibility, duty', type: 'main', example: '社会的責務を果たす。' },
    { japanese: '良心', kana: 'りょうしん', vietnamese: 'lương tâm', english: 'conscience', type: 'main', example: '良心に従って行動する。' },
    { japanese: '規範', kana: 'きはん', vietnamese: 'quy phạm, chuẩn mực', english: 'norm, standard', type: 'main', example: '社会的規範に反する行為だ。' },
    { japanese: '禁じる', kana: 'きんじる', vietnamese: 'cấm, nghiêm cấm', english: 'to prohibit, to forbid', type: 'main', example: '法律で禁じられている。' },
    { japanese: '背く', kana: 'そむく', vietnamese: 'phản bội, trái lại', english: 'to go against, to disobey', type: 'main', example: '信頼に背く行為は許されない。' },
    { japanese: '怠る', kana: 'おこたる', vietnamese: 'lơ là, bỏ bê', english: 'to neglect, to be negligent', type: 'main', example: '安全管理を怠ってはならない。' },
    { japanese: '戒める', kana: 'いましめる', vietnamese: 'răn dạy, cảnh tỉnh', english: 'to admonish, to warn', type: 'main', example: '自分自身を戒める。' },
    { japanese: '不正', kana: 'ふせい', vietnamese: 'bất chính, gian lận', english: 'injustice, fraud', type: 'main', example: '不正を見て見ぬふりはできない。' },
    { japanese: '弁明', kana: 'べんめい', vietnamese: 'biện minh', english: 'justification, explanation', type: 'additional', example: '弁明の余地がない。' },
    { japanese: '厳禁', kana: 'げんきん', vietnamese: 'nghiêm cấm', english: 'strictly prohibited', type: 'additional', example: '撮影は厳禁です。' },
    { japanese: '容認', kana: 'ようにん', vietnamese: 'dung nhận, chấp nhận', english: 'tolerance, acceptance', type: 'additional', example: 'このような行為は容認できない。' },
    { japanese: '断じて', kana: 'だんじて', vietnamese: 'dứt khoát, tuyệt đối', english: 'absolutely, positively', type: 'additional', example: 'そのような行為は断じて許さない。' },
  ],
  grammar: [
    {
      pattern: '～まじき',
      vietnamese: 'Không được phép ~, không xứng đáng ~',
      english: 'Must not ~, unbecoming of ~, inexcusable to ~',
      explanation: 'Dạng cổ điển, trang trọng biểu thị hành vi không thể chấp nhận được đối với vai trò hoặc vị trí nào đó. Thường dùng: ～にあるまじき (không xứng đáng với ~), Vるまじき + danh từ. Mang sắc thái phê phán mạnh.',
      type: 'main',
      examples: [
        { japanese: '教師にあるまじき行為として厳しく処分された。', vietnamese: 'Bị xử phạt nghiêm khắc vì hành vi không xứng đáng với tư cách giáo viên.', english: 'They were strictly punished for conduct unbecoming of a teacher.' },
        { japanese: '許すまじき犯罪に対して、厳罰を求める声が高まった。', vietnamese: 'Tiếng nói đòi hỏi hình phạt nghiêm khắc đối với tội ác không thể tha thứ ngày càng lớn.', english: 'Calls for severe punishment for the unforgivable crime grew louder.' },
      ]
    },
    {
      pattern: '～ざるを得ない',
      vietnamese: 'Không thể không ~, buộc phải ~',
      english: 'Cannot help but ~, have no choice but to ~',
      explanation: 'Biểu thị việc bất đắc dĩ phải làm dù không muốn. Cấu trúc: Vない bỏ ない + ざるを得ない (する → せざるを得ない). Trang trọng hơn ～なければならない. Thường dùng trong văn viết, phát biểu chính thức.',
      type: 'main',
      examples: [
        { japanese: '証拠が不十分なため、無罪と認めざるを得ない。', vietnamese: 'Do bằng chứng không đủ nên buộc phải công nhận vô tội.', english: 'Due to insufficient evidence, we have no choice but to acknowledge innocence.' },
        { japanese: '経済状況を考えると、値上げせざるを得ない。', vietnamese: 'Xét đến tình hình kinh tế, buộc phải tăng giá.', english: 'Considering the economic situation, we have no choice but to raise prices.' },
      ]
    },
    {
      pattern: '～べからず',
      vietnamese: 'Cấm ~, không được ~',
      english: 'Must not ~, do not ~ (prohibition)',
      explanation: 'Dạng cổ điển của cấm đoán. Rất trang trọng, thường thấy trên biển báo, quy tắc, cách ngôn. Cấu trúc: Vる + べからず. する → するべからず. Ngắn gọn và mạnh mẽ hơn ～てはいけない.',
      type: 'main',
      examples: [
        { japanese: '初心忘るべからず。', vietnamese: 'Không được quên tâm ban đầu.', english: 'Never forget your original intention. (proverb)' },
        { japanese: '関係者以外立ち入るべからず。', vietnamese: 'Người không có phận sự cấm vào.', english: 'No entry for unauthorized persons.' },
      ]
    },
    {
      pattern: '～ずにはおかない',
      vietnamese: 'Không thể không ~, nhất định sẽ khiến ~',
      english: 'Cannot help but ~, never fails to ~',
      explanation: 'Biểu thị rằng sự việc tất yếu gây ra phản ứng hoặc kết quả nào đó. Hai nghĩa: (1) cảm xúc tự nhiên không kìm được, (2) chủ thể nhất định sẽ hành động. Cấu trúc: Vない bỏ ない + ずにはおかない (する → せずにはおかない).',
      type: 'additional',
      examples: [
        { japanese: 'あの映画は見る者を感動させずにはおかない。', vietnamese: 'Bộ phim đó nhất định sẽ khiến người xem phải cảm động.', english: 'That movie never fails to move its viewers.' },
        { japanese: '不正を発見したら、報告せずにはおかない。', vietnamese: 'Nếu phát hiện gian lận, nhất định sẽ phải báo cáo.', english: 'If fraud is discovered, one cannot help but report it.' },
      ]
    },
  ]
};

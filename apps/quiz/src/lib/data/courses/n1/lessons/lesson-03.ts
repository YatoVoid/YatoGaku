/**
 * N1 Lesson 03 — をものともせず／をよそに
 * Despite, regardless of — Courage & adversity
 */

import type { LessonData } from '$lib/types';

export const LESSON_03_DATA: LessonData = {
  lessonNumber: 3,
  title: 'をものともせず／をよそに (Bất chấp / Mặc kệ)',
  vocabulary: [
    { japanese: '逆境', kana: 'ぎゃっきょう', vietnamese: 'nghịch cảnh', english: 'adversity', type: 'main', example: '逆境に負けない精神力が必要だ。' },
    { japanese: '勇敢', kana: 'ゆうかん', vietnamese: 'dũng cảm', english: 'brave, courageous', type: 'main', example: '勇敢に立ち向かった。' },
    { japanese: '困難', kana: 'こんなん', vietnamese: 'khó khăn', english: 'difficulty, hardship', type: 'main', example: '困難をものともせず前進した。' },
    { japanese: '障害', kana: 'しょうがい', vietnamese: 'trở ngại, chướng ngại', english: 'obstacle, barrier', type: 'main', example: 'あらゆる障害を乗り越えた。' },
    { japanese: '反対', kana: 'はんたい', vietnamese: 'phản đối', english: 'opposition, objection', type: 'main', example: '周囲の反対をよそに計画を進めた。' },
    { japanese: '批判', kana: 'ひはん', vietnamese: 'phê phán', english: 'criticism', type: 'main', example: '批判をものともせず信念を貫いた。' },
    { japanese: '無関心', kana: 'むかんしん', vietnamese: 'thờ ơ, vô quan tâm', english: 'indifference, apathy', type: 'main', example: '社会問題に無関心でいてはいけない。' },
    { japanese: '立ち向かう', kana: 'たちむかう', vietnamese: 'đối mặt, đương đầu', english: 'to confront, to stand up to', type: 'main', example: '強敵に立ち向かう勇気がある。' },
    { japanese: '克服', kana: 'こくふく', vietnamese: 'khắc phục', english: 'overcoming', type: 'main', example: '恐怖を克服した。' },
    { japanese: '忍耐', kana: 'にんたい', vietnamese: 'nhẫn nại', english: 'patience, endurance', type: 'main', example: '忍耐力が試される場面だ。' },
    { japanese: '余儀なく', kana: 'よぎなく', vietnamese: 'bất đắc dĩ', english: 'unavoidably, reluctantly', type: 'main', example: '退職を余儀なくされた。' },
    { japanese: '不屈', kana: 'ふくつ', vietnamese: 'bất khuất', english: 'indomitable, unyielding', type: 'additional', example: '不屈の精神で挑み続けた。' },
    { japanese: '顧みず', kana: 'かえりみず', vietnamese: 'không đoái hoài', english: 'without regard for', type: 'additional', example: '危険を顧みず救助に向かった。' },
    { japanese: '冷ややか', kana: 'ひややか', vietnamese: 'lạnh nhạt', english: 'cold, chilly (attitude)', type: 'additional', example: '周囲の冷ややかな視線を感じた。' },
    { japanese: '覚悟', kana: 'かくご', vietnamese: 'giác ngộ, quyết tâm', english: 'resolution, preparedness', type: 'additional', example: '覚悟を決めて挑戦した。' },
  ],
  grammar: [
    {
      pattern: '～をものともせず',
      vietnamese: 'Bất chấp ~, không hề sợ ~',
      english: 'In defiance of ~, undaunted by ~',
      explanation: 'Dùng khi ai đó không hề nao núng trước khó khăn, nguy hiểm hay trở ngại. Mang sắc thái ngợi ca, tán dương sự dũng cảm. Chủ ngữ thường là người thứ ba.',
      type: 'main',
      examples: [
        { japanese: '彼女は病気をものともせず、マラソンを完走した。', vietnamese: 'Cô ấy bất chấp bệnh tật, đã hoàn thành cuộc chạy marathon.', english: 'She completed the marathon, undaunted by her illness.' },
        { japanese: '選手たちは悪天候をものともせず試合に臨んだ。', vietnamese: 'Các vận động viên bất chấp thời tiết xấu để ra sân thi đấu.', english: 'The athletes took to the field undaunted by the bad weather.' },
      ]
    },
    {
      pattern: '～をよそに',
      vietnamese: 'Mặc kệ ~, bỏ ngoài tai ~',
      english: 'Regardless of ~, ignoring ~',
      explanation: 'Biểu thị việc ai đó phớt lờ, mặc kệ cảm xúc, mong muốn hay lo lắng của người khác. Thường mang sắc thái phê phán nhẹ hoặc trung lập.',
      type: 'main',
      examples: [
        { japanese: '親の心配をよそに、息子は一人で海外へ旅立った。', vietnamese: 'Mặc kệ sự lo lắng của bố mẹ, cậu con trai một mình lên đường ra nước ngoài.', english: 'Ignoring his parents\' worries, the son set off abroad alone.' },
        { japanese: '住民の反対をよそに、開発計画が進められた。', vietnamese: 'Mặc kệ sự phản đối của cư dân, kế hoạch phát triển vẫn được tiến hành.', english: 'The development plan proceeded regardless of residents\' opposition.' },
      ]
    },
    {
      pattern: '～をおいて',
      vietnamese: 'Ngoài ~ ra không ai/không gì khác',
      english: 'Apart from ~, no one/nothing else but ~',
      explanation: 'Dùng để khẳng định rằng chỉ có duy nhất ~ mới phù hợp, không có lựa chọn nào khác. Thường đi với phủ định (ない、いない). Mang tính trang trọng.',
      type: 'main',
      examples: [
        { japanese: 'このプロジェクトを任せられるのは、彼をおいて他にいない。', vietnamese: 'Người có thể giao phó dự án này, ngoài anh ấy ra không ai khác.', english: 'There is no one but him who can be entrusted with this project.' },
        { japanese: '日本文化を体験するなら、京都をおいて他にない。', vietnamese: 'Nếu muốn trải nghiệm văn hóa Nhật thì ngoài Kyoto ra không đâu khác.', english: 'If you want to experience Japanese culture, there is nowhere else but Kyoto.' },
      ]
    },
    {
      pattern: '～を余儀なくされる',
      vietnamese: 'Bị buộc phải ~, bất đắc dĩ phải ~',
      english: 'To be forced to ~, to be compelled to ~',
      explanation: 'Biểu thị việc bị hoàn cảnh ép buộc phải làm điều không mong muốn. Dùng trong văn viết trang trọng, đặc biệt trong tin tức và báo cáo. Chủ ngữ là người bị buộc.',
      type: 'additional',
      examples: [
        { japanese: '台風の影響で、イベントは中止を余儀なくされた。', vietnamese: 'Do ảnh hưởng của bão, sự kiện buộc phải hủy bỏ.', english: 'Due to the typhoon, the event was forced to be cancelled.' },
        { japanese: '経営悪化により、大規模なリストラを余儀なくされた。', vietnamese: 'Do tình hình kinh doanh xấu đi, công ty buộc phải tái cơ cấu quy mô lớn.', english: 'Due to deteriorating business conditions, they were forced into large-scale restructuring.' },
      ]
    },
  ]
};

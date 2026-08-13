/**
 * N2 Lesson 12 — 限り／限りでは／に限って
 * As long as, as far as, only when
 */

import type { LessonData } from '$lib/types';

export const LESSON_12_DATA: LessonData = {
  lessonNumber: 12,
  title: '限り／限りでは／に限って (As long as, as far as, only when)',
  vocabulary: [
    { japanese: '範囲', kana: 'はんい', vietnamese: 'phạm vi', english: 'range, scope', type: 'main', example: '許可された範囲で行動する。' },
    { japanese: '制限', kana: 'せいげん', vietnamese: 'giới hạn, hạn chế', english: 'restriction, limit', type: 'main', example: '速度制限を守ってください。' },
    { japanese: '例外', kana: 'れいがい', vietnamese: 'ngoại lệ', english: 'exception', type: 'main', example: 'この規則に例外はない。' },
    { japanese: '限界', kana: 'げんかい', vietnamese: 'giới hạn, cực hạn', english: 'limit, boundary', type: 'main', example: '体力の限界に達した。' },
    { japanese: '把握', kana: 'はあく', vietnamese: 'nắm bắt, hiểu rõ', english: 'grasp, comprehension', type: 'main', example: '状況を把握した限りでは問題ない。' },
    { japanese: '有効', kana: 'ゆうこう', vietnamese: 'có hiệu lực, hiệu quả', english: 'valid, effective', type: 'main', example: 'このクーポンは今月限り有効です。' },
    { japanese: '期限', kana: 'きげん', vietnamese: 'thời hạn', english: 'deadline, time limit', type: 'main', example: '期限を過ぎたら無効になる。' },
    { japanese: '特定', kana: 'とくてい', vietnamese: 'xác định, cụ thể', english: 'specific, particular', type: 'main', example: '特定の条件に限って適用される。' },
    { japanese: '永遠', kana: 'えいえん', vietnamese: 'vĩnh viễn', english: 'eternity, forever', type: 'main', example: '幸せが永遠に続く限りはない。' },
    { japanese: '知る限り', kana: 'しるかぎり', vietnamese: 'theo như tôi biết', english: 'as far as I know', type: 'main', example: '私の知る限り、彼は正直な人だ。' },
    { japanese: '無制限', kana: 'むせいげん', vietnamese: 'không giới hạn', english: 'unlimited', type: 'additional', example: 'このプランはデータ無制限です。' },
    { japanese: '境界', kana: 'きょうかい', vietnamese: 'ranh giới', english: 'boundary, border', type: 'additional', example: '国の境界を越える。' },
    { japanese: '適用', kana: 'てきよう', vietnamese: 'áp dụng', english: 'application, apply', type: 'main', example: 'この割引は学生に限り適用される。' },
    { japanese: '普段', kana: 'ふだん', vietnamese: 'bình thường, thường ngày', english: 'usually, normally', type: 'main', example: '普段は静かな人に限って怒ると怖い。' },
    { japanese: '可能', kana: 'かのう', vietnamese: 'có thể', english: 'possible', type: 'additional', example: '可能な限り協力します。' },
  ],
  grammar: [
    {
      pattern: '～限り',
      vietnamese: 'Chừng nào còn ~, miễn là ~',
      english: 'As long as ~, so long as ~',
      explanation: 'Biểu thị điều kiện duy trì — chừng nào điều kiện còn đúng thì kết quả vẫn đúng. Dùng với động từ, tính từ, danh từ.',
      type: 'main',
      examples: [
        { japanese: '健康である限り、働き続けたい。', vietnamese: 'Chừng nào còn khỏe mạnh, tôi muốn tiếp tục làm việc.', english: 'As long as I am healthy, I want to keep working.' },
        { japanese: '努力を続ける限り、夢は叶う。', vietnamese: 'Miễn là tiếp tục nỗ lực, giấc mơ sẽ thành hiện thực.', english: 'As long as you keep trying, your dream will come true.' },
      ]
    },
    {
      pattern: '～限りでは',
      vietnamese: 'Theo như ~ (phạm vi thông tin)',
      english: 'As far as ~, to the extent that ~',
      explanation: 'Biểu thị phạm vi thông tin mà người nói có được. Thường dùng với 知る, 聞く, 調べる, 見る.',
      type: 'main',
      examples: [
        { japanese: '私が調べた限りでは、問題は見つからなかった。', vietnamese: 'Theo như tôi điều tra thì không tìm thấy vấn đề gì.', english: 'As far as I investigated, no problem was found.' },
        { japanese: '聞いた限りでは、彼は来月転職するらしい。', vietnamese: 'Theo như tôi nghe thì hình như anh ấy sẽ đổi việc tháng sau.', english: 'As far as I heard, he seems to be changing jobs next month.' },
      ]
    },
    {
      pattern: '～に限って',
      vietnamese: 'Hễ ~ thì lại..., chỉ riêng ~ thì...',
      english: 'Only when ~, it is always ~ that ~',
      explanation: 'Biểu thị sự trùng hợp khó chịu — điều không mong muốn lại xảy ra đúng lúc không nên. Mang sắc thái bực bội.',
      type: 'main',
      examples: [
        { japanese: '傘を持っていない日に限って、雨が降る。', vietnamese: 'Hễ ngày nào không mang ô thì lại mưa.', english: 'It always rains on the days I do not bring an umbrella.' },
        { japanese: '急いでいるときに限って、電車が遅れる。', vietnamese: 'Hễ lúc nào vội thì tàu lại trễ.', english: 'The train is always late when I am in a hurry.' },
      ]
    },
    {
      pattern: '～に限らず',
      vietnamese: 'Không chỉ ~ (mà còn...)',
      english: 'Not limited to ~, not only ~',
      explanation: 'Biểu thị phạm vi rộng hơn — không chỉ giới hạn ở đối tượng được nêu. Thường đi với も hoặc でも ở vế sau.',
      type: 'main',
      examples: [
        { japanese: '若者に限らず、高齢者もSNSを使っている。', vietnamese: 'Không chỉ giới trẻ mà người cao tuổi cũng dùng mạng xã hội.', english: 'Not only young people, but elderly people also use social media.' },
        { japanese: 'この問題は日本に限らず、世界中で起きている。', vietnamese: 'Vấn đề này không chỉ ở Nhật mà xảy ra trên toàn thế giới.', english: 'This problem is not limited to Japan; it occurs worldwide.' },
      ]
    },
  ]
};

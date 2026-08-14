/**
 * N3 Lessons — Lesson 12: Degree and Scope
 * 程度・範囲 (Degree and Scope)
 */

import type { LessonData } from '$lib/types';

export const LESSON_12_DATA: LessonData = {
  lessonNumber: 12,
  title: '程度・範囲 (Degree and Scope)',
  vocabulary: [
    // Quantity and extent
    {
      japanese: '量',
      kana: 'りょう',
      vietnamese: 'lượng, số lượng',
      english: 'quantity, amount',
      type: 'main',
      example: '食べる量を減らしている。'
    },
    {
      japanese: '程度',
      kana: 'ていど',
      vietnamese: 'mức độ, trình độ',
      english: 'degree, extent',
      type: 'main',
      example: 'どの程度日本語ができますか。'
    },
    {
      japanese: '範囲',
      kana: 'はんい',
      vietnamese: 'phạm vi',
      english: 'range, scope',
      type: 'main',
      example: '試験の範囲を確認した。'
    },
    {
      japanese: '限界',
      kana: 'げんかい',
      vietnamese: 'giới hạn',
      english: 'limit, boundary',
      type: 'main',
      example: '体力の限界に達した。'
    },
    {
      japanese: '限る',
      kana: 'かぎる',
      vietnamese: 'giới hạn, hạn chế',
      english: 'to limit, to restrict',
      type: 'main',
      example: '参加者を100人に限る。'
    },
    {
      japanese: '以上',
      kana: 'いじょう',
      vietnamese: 'trên, hơn, từ ~ trở lên',
      english: 'more than, above',
      type: 'main',
      example: '18歳以上の方が対象です。'
    },
    {
      japanese: '以下',
      kana: 'いか',
      vietnamese: 'dưới, từ ~ trở xuống',
      english: 'less than, below',
      type: 'main',
      example: '5人以下のグループで活動する。'
    },
    {
      japanese: '以内',
      kana: 'いない',
      vietnamese: 'trong vòng, không quá',
      english: 'within, no more than',
      type: 'main',
      example: '3日以内に返事をください。'
    },
    {
      japanese: '以外',
      kana: 'いがい',
      vietnamese: 'ngoài ra, ngoại trừ',
      english: 'other than, except',
      type: 'main',
      example: '日曜日以外は毎日働いている。'
    },
    {
      japanese: '約',
      kana: 'やく',
      vietnamese: 'khoảng, ước chừng',
      english: 'approximately, about',
      type: 'main',
      example: '約30分かかります。'
    },
    {
      japanese: '少なくとも',
      kana: 'すくなくとも',
      vietnamese: 'ít nhất',
      english: 'at least',
      type: 'main',
      example: '少なくとも週に3回は運動したい。'
    },
    {
      japanese: '多少',
      kana: 'たしょう',
      vietnamese: 'ít nhiều, đôi chút',
      english: 'more or less, somewhat',
      type: 'main',
      example: '多少の問題はあるが、大丈夫だ。'
    },
    {
      japanese: '十分',
      kana: 'じゅうぶん',
      vietnamese: 'đầy đủ, đủ',
      english: 'enough, sufficient',
      type: 'main',
      example: '十分な睡眠をとることが大切だ。'
    },
    {
      japanese: '不足',
      kana: 'ふそく',
      vietnamese: 'thiếu, không đủ',
      english: 'shortage, insufficiency',
      type: 'main',
      example: '人手が不足している。'
    },
    {
      japanese: '余る',
      kana: 'あまる',
      vietnamese: 'thừa, dư',
      english: 'to be left over, to remain',
      type: 'main',
      example: 'お金が余った。'
    },
    {
      japanese: '超える',
      kana: 'こえる',
      vietnamese: 'vượt quá',
      english: 'to exceed, to surpass',
      type: 'main',
      example: '気温が40度を超えた。'
    },
    {
      japanese: '届く',
      kana: 'とどく',
      vietnamese: 'tới, đến được',
      english: 'to reach, to arrive',
      type: 'main',
      example: '手が届かない場所にある。'
    },
    {
      japanese: '合計',
      kana: 'ごうけい',
      vietnamese: 'tổng cộng',
      english: 'total, sum',
      type: 'main',
      example: '合計で5000円になります。'
    },
    {
      japanese: '平均',
      kana: 'へいきん',
      vietnamese: 'trung bình',
      english: 'average',
      type: 'main',
      example: '平均点は70点だった。'
    },
    {
      japanese: '割合',
      kana: 'わりあい',
      vietnamese: 'tỉ lệ',
      english: 'ratio, proportion',
      type: 'main',
      example: '女性の割合が増えている。'
    },

    // Additional vocabulary
    {
      japanese: '最大',
      kana: 'さいだい',
      vietnamese: 'lớn nhất, tối đa',
      english: 'maximum, largest',
      type: 'additional',
      example: '最大10人まで参加できる。'
    },
    {
      japanese: '最小',
      kana: 'さいしょう',
      vietnamese: 'nhỏ nhất, tối thiểu',
      english: 'minimum, smallest',
      type: 'additional',
      example: '被害を最小にする努力をした。'
    },
    {
      japanese: '相当',
      kana: 'そうとう',
      vietnamese: 'tương đương, khá, đáng kể',
      english: 'considerable, equivalent',
      type: 'additional',
      example: '相当な努力が必要だ。'
    },
    {
      japanese: 'かなり',
      kana: 'かなり',
      vietnamese: 'khá, tương đối',
      english: 'considerably, fairly',
      type: 'additional',
      example: 'かなり難しい試験だった。'
    },
    {
      japanese: 'やや',
      kana: 'やや',
      vietnamese: 'hơi, một chút',
      english: 'slightly, somewhat',
      type: 'additional',
      example: '今日はやや寒い。'
    },
    {
      japanese: 'わずか',
      kana: 'わずか',
      vietnamese: 'chỉ, ít ỏi',
      english: 'only, merely, slight',
      type: 'additional',
      example: 'わずか3分で終わった。'
    },
    {
      japanese: '全体',
      kana: 'ぜんたい',
      vietnamese: 'toàn bộ, tổng thể',
      english: 'whole, entire',
      type: 'additional',
      example: '全体の80%が賛成した。'
    },
    {
      japanese: '部分',
      kana: 'ぶぶん',
      vietnamese: 'phần, bộ phận',
      english: 'part, portion',
      type: 'additional',
      example: 'この部分がよく分からない。'
    },
    {
      japanese: '半分',
      kana: 'はんぶん',
      vietnamese: 'một nửa',
      english: 'half',
      type: 'additional',
      example: '仕事の半分が終わった。'
    },
    {
      japanese: '倍',
      kana: 'ばい',
      vietnamese: 'gấp, lần',
      english: 'times, -fold',
      type: 'additional',
      example: '去年の2倍の売り上げだ。'
    },
    {
      japanese: '数',
      kana: 'かず',
      vietnamese: 'số, số lượng',
      english: 'number, quantity',
      type: 'additional',
      example: '参加者の数を数えた。'
    }
  ],
  grammar: [
    {
      pattern: '～ほど',
      vietnamese: 'đến mức ~, càng ~ càng ~',
      english: 'to the extent that, the more... the more',
      type: 'main',
      explanation: 'Diễn tả mức độ của một sự việc. Có thể dùng dạng: (1) Động từ/Tính từ + ほど (đến mức), (2) ～ば～ほど (càng... càng...). Cũng dùng để so sánh phủ định: A は B ほど～ない (A không bằng B).',
      examples: [
        {
          japanese: '死ぬほど疲れた。',
          vietnamese: 'Mệt đến mức chết được.',
          english: 'I was tired to the point of death.',
          type: 'main'
        },
        {
          japanese: '勉強すればするほど面白くなる。',
          vietnamese: 'Càng học càng thấy thú vị.',
          english: 'The more you study, the more interesting it becomes.',
          type: 'main'
        },
        {
          japanese: '東京は大阪ほど暑くない。',
          vietnamese: 'Tokyo không nóng bằng Osaka.',
          english: 'Tokyo is not as hot as Osaka.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～くらい/ぐらい',
      vietnamese: 'khoảng ~, tầm ~, đến mức ~',
      english: 'about, approximately, to the extent of',
      type: 'main',
      explanation: 'Có hai cách dùng chính: (1) Chỉ mức độ ước lượng gần đúng (khoảng, tầm). (2) Chỉ mức độ cao/thấp (đến mức). くらい và ぐらい có thể dùng thay thế nhau.',
      examples: [
        {
          japanese: '30分くらい待った。',
          vietnamese: 'Tôi đã đợi khoảng 30 phút.',
          english: 'I waited about 30 minutes.',
          type: 'main'
        },
        {
          japanese: '泣きたいくらい嬉しかった。',
          vietnamese: 'Vui đến mức muốn khóc.',
          english: 'I was so happy I could cry.',
          type: 'main'
        },
        {
          japanese: 'このぐらいの大きさでいいですか。',
          vietnamese: 'Cỡ tầm này có được không?',
          english: 'Is this size about right?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ばかり',
      vietnamese: 'chỉ toàn ~, vừa mới ~',
      english: 'only, nothing but, just (did)',
      type: 'main',
      explanation: 'Có hai cách dùng chính: (1) Danh từ/Động từ て-form + ばかり = chỉ toàn, chỉ ~. (2) Động từ た-form + ばかり = vừa mới ~ xong. Thường mang sắc thái tiêu cực khi dùng nghĩa "chỉ toàn".',
      examples: [
        {
          japanese: '彼は文句ばかり言っている。',
          vietnamese: 'Anh ấy chỉ toàn phàn nàn.',
          english: 'He does nothing but complain.',
          type: 'main'
        },
        {
          japanese: '日本に来たばかりです。',
          vietnamese: 'Tôi vừa mới đến Nhật.',
          english: 'I just came to Japan.',
          type: 'main'
        },
        {
          japanese: 'ゲームばかりしないで勉強しなさい。',
          vietnamese: 'Đừng chỉ chơi game, hãy học đi.',
          english: 'Stop just playing games and study.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～だけ',
      vietnamese: 'chỉ ~, chỉ ~ thôi',
      english: 'only, just, as much as',
      type: 'main',
      explanation: 'Diễn tả giới hạn, hạn chế. Dùng sau danh từ, động từ dạng từ điển hoặc た-form. Khác ばかり ở chỗ だけ trung tính hơn, không mang sắc thái tiêu cực. Dạng できるだけ = hết sức có thể.',
      examples: [
        {
          japanese: '水だけ飲みました。',
          vietnamese: 'Tôi chỉ uống nước thôi.',
          english: 'I only drank water.',
          type: 'main'
        },
        {
          japanese: 'できるだけ早く来てください。',
          vietnamese: 'Hãy đến sớm nhất có thể.',
          english: 'Please come as early as possible.',
          type: 'main'
        },
        {
          japanese: '見ただけで分かった。',
          vietnamese: 'Chỉ nhìn thôi là đã hiểu.',
          english: 'I understood just by looking.',
          type: 'additional'
        }
      ]
    }
  ]
};

/**
 * N3 Lessons — Lesson 15: Comprehensive Review
 * 総合復習 (Tổng hợp ôn tập)
 */

import type { LessonData } from '$lib/types';

export const LESSON_15_DATA: LessonData = {
  lessonNumber: 15,
  title: '総合復習 (Tổng hợp ôn tập)',
  vocabulary: [
    // Feelings and emotions
    {
      japanese: '感動',
      kana: 'かんどう',
      vietnamese: 'cảm động',
      english: 'impression, being moved',
      type: 'main',
      example: '映画を見て感動した。'
    },
    {
      japanese: '不安',
      kana: 'ふあん',
      vietnamese: 'bất an, lo lắng',
      english: 'anxiety, uneasiness',
      type: 'main',
      example: '将来に不安を感じている。'
    },
    {
      japanese: '満足',
      kana: 'まんぞく',
      vietnamese: 'hài lòng, mãn nguyện',
      english: 'satisfaction',
      type: 'main',
      example: '結果に満足している。'
    },
    {
      japanese: '後悔',
      kana: 'こうかい',
      vietnamese: 'hối hận',
      english: 'regret',
      type: 'main',
      example: 'あの時やめなければよかったと後悔している。'
    },
    {
      japanese: '期待',
      kana: 'きたい',
      vietnamese: 'kỳ vọng, mong đợi',
      english: 'expectation, hope',
      type: 'main',
      example: '新しいプロジェクトに期待している。'
    },
    {
      japanese: '我慢',
      kana: 'がまん',
      vietnamese: 'nhẫn nhịn, chịu đựng',
      english: 'patience, endurance',
      type: 'main',
      example: '痛いけど我慢している。'
    },

    // Abstract concepts
    {
      japanese: '価値',
      kana: 'かち',
      vietnamese: 'giá trị',
      english: 'value, worth',
      type: 'main',
      example: 'この経験には大きな価値がある。'
    },
    {
      japanese: '意味',
      kana: 'いみ',
      vietnamese: 'ý nghĩa',
      english: 'meaning, significance',
      type: 'main',
      example: 'この言葉の意味が分からない。'
    },
    {
      japanese: '常識',
      kana: 'じょうしき',
      vietnamese: 'thường thức, kiến thức phổ thông',
      english: 'common sense',
      type: 'main',
      example: 'それは常識だと思う。'
    },
    {
      japanese: '印象',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'main',
      example: '第一印象はとても大切だ。'
    },
    {
      japanese: '記憶',
      kana: 'きおく',
      vietnamese: 'ký ức, trí nhớ',
      english: 'memory, recollection',
      type: 'main',
      example: '子どもの頃の記憶がある。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'main',
      example: 'いい経験になった。'
    },

    // Society and daily life
    {
      japanese: '社会',
      kana: 'しゃかい',
      vietnamese: 'xã hội',
      english: 'society',
      type: 'main',
      example: '社会のルールを守るべきだ。'
    },
    {
      japanese: '環境',
      kana: 'かんきょう',
      vietnamese: 'môi trường',
      english: 'environment',
      type: 'main',
      example: '環境問題について考える必要がある。'
    },
    {
      japanese: '習慣',
      kana: 'しゅうかん',
      vietnamese: 'thói quen, tập quán',
      english: 'habit, custom',
      type: 'main',
      example: '早起きの習慣を身につけたい。'
    },
    {
      japanese: '責任',
      kana: 'せきにん',
      vietnamese: 'trách nhiệm',
      english: 'responsibility',
      type: 'main',
      example: '自分の行動に責任を持つべきだ。'
    },
    {
      japanese: '立場',
      kana: 'たちば',
      vietnamese: 'lập trường, vị trí',
      english: 'position, standpoint',
      type: 'main',
      example: '相手の立場になって考えよう。'
    },
    {
      japanese: '事情',
      kana: 'じじょう',
      vietnamese: 'sự tình, hoàn cảnh',
      english: 'circumstances, situation',
      type: 'main',
      example: '個人的な事情で休みます。'
    },
    {
      japanese: '世話',
      kana: 'せわ',
      vietnamese: 'chăm sóc, giúp đỡ',
      english: 'care, assistance',
      type: 'main',
      example: 'いつもお世話になっています。'
    },
    {
      japanese: '迷惑',
      kana: 'めいわく',
      vietnamese: 'phiền phức, làm phiền',
      english: 'trouble, nuisance',
      type: 'main',
      example: '迷惑をかけてすみません。'
    },

    // Additional vocabulary — mixed review
    {
      japanese: '自然',
      kana: 'しぜん',
      vietnamese: 'tự nhiên, thiên nhiên',
      english: 'nature, natural',
      type: 'additional',
      example: '自然の中でリラックスする。'
    },
    {
      japanese: '複雑',
      kana: 'ふくざつ',
      vietnamese: 'phức tạp',
      english: 'complicated, complex',
      type: 'additional',
      example: 'この問題は複雑だ。'
    },
    {
      japanese: '単純',
      kana: 'たんじゅん',
      vietnamese: 'đơn giản, đơn thuần',
      english: 'simple, plain',
      type: 'additional',
      example: '答えは意外と単純だった。'
    },
    {
      japanese: '正確',
      kana: 'せいかく',
      vietnamese: 'chính xác',
      english: 'accurate, precise',
      type: 'additional',
      example: '正確な情報を伝えてください。'
    },
    {
      japanese: '適切',
      kana: 'てきせつ',
      vietnamese: 'thích hợp, phù hợp',
      english: 'appropriate, suitable',
      type: 'additional',
      example: '適切な言葉を選ぶことが大切だ。'
    },
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary, needed',
      type: 'additional',
      example: 'パスポートが必要です。'
    },
    {
      japanese: '可能',
      kana: 'かのう',
      vietnamese: 'có thể, khả năng',
      english: 'possible, feasible',
      type: 'additional',
      example: '変更は可能ですか。'
    },
    {
      japanese: '無理',
      kana: 'むり',
      vietnamese: 'vô lý, không thể, gượng ép',
      english: 'impossible, unreasonable',
      type: 'additional',
      example: '無理をしないでください。'
    },
    {
      japanese: '当然',
      kana: 'とうぜん',
      vietnamese: 'đương nhiên, tất nhiên',
      english: 'natural, obvious',
      type: 'additional',
      example: '努力すれば成功するのは当然だ。'
    },
    {
      japanese: '実際',
      kana: 'じっさい',
      vietnamese: 'thực tế, thực ra',
      english: 'actually, in fact',
      type: 'additional',
      example: '実際に見るともっと大きい。'
    },
    {
      japanese: '現在',
      kana: 'げんざい',
      vietnamese: 'hiện tại',
      english: 'present, current',
      type: 'additional',
      example: '現在の状況を説明します。'
    },
    {
      japanese: '将来',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'additional',
      example: '将来の夢は医者になることだ。'
    }
  ],
  grammar: [
    {
      pattern: '～わけだ',
      vietnamese: 'tức là ~, có nghĩa là ~, đó là lý do ~',
      english: 'that is why, it means that, no wonder',
      type: 'main',
      explanation: 'Dùng để rút ra kết luận logic từ thông tin đã biết, hoặc giải thích nguyên nhân. Cấu trúc: Câu thường + わけだ。Dạng phủ định: ～わけではない (không hẳn là) / ～わけがない (không thể nào).',
      examples: [
        {
          japanese: '毎日練習しているから、上手なわけだ。',
          vietnamese: 'Vì luyện tập mỗi ngày nên giỏi là đương nhiên.',
          english: 'Since they practice every day, no wonder they are good.',
          type: 'main'
        },
        {
          japanese: '日本人だからといって、全員が寿司が好きなわけではない。',
          vietnamese: 'Không phải vì là người Nhật mà ai cũng thích sushi.',
          english: 'Just because someone is Japanese does not mean they all like sushi.',
          type: 'main'
        },
        {
          japanese: 'そんなことがあるわけがない。',
          vietnamese: 'Không thể nào có chuyện đó.',
          english: 'There is no way that could happen.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～はずだ',
      vietnamese: 'chắc hẳn ~, lẽ ra phải ~',
      english: 'should be, supposed to, expected to',
      type: 'main',
      explanation: 'Diễn tả sự suy đoán dựa trên căn cứ logic hoặc kỳ vọng hợp lý. Cấu trúc: Câu thường + はずだ。Dạng phủ định: ～はずがない (không thể nào) hoặc ～ないはずだ (chắc là không).',
      examples: [
        {
          japanese: '彼はもう着いているはずだ。',
          vietnamese: 'Chắc hẳn anh ấy đã đến rồi.',
          english: 'He should have arrived by now.',
          type: 'main'
        },
        {
          japanese: 'この道を行けば駅に着くはずだ。',
          vietnamese: 'Đi đường này chắc hẳn sẽ tới ga.',
          english: 'If you go this way, you should arrive at the station.',
          type: 'main'
        },
        {
          japanese: 'あの人が嘘をつくはずがない。',
          vietnamese: 'Không thể nào người đó nói dối.',
          english: 'There is no way that person would lie.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことがある',
      vietnamese: 'đôi khi ~, thỉnh thoảng ~',
      english: 'sometimes, there are times when',
      type: 'main',
      explanation: 'Diễn tả việc thỉnh thoảng xảy ra. Cấu trúc: Động từ dạng từ điển + ことがある。Chú ý phân biệt với た-form + ことがある (đã từng ~ - kinh nghiệm quá khứ, học ở N4).',
      examples: [
        {
          japanese: '朝ごはんを食べないことがある。',
          vietnamese: 'Đôi khi tôi không ăn sáng.',
          english: 'Sometimes I do not eat breakfast.',
          type: 'main'
        },
        {
          japanese: '仕事で遅くなることがある。',
          vietnamese: 'Thỉnh thoảng tôi về muộn vì công việc.',
          english: 'Sometimes I get home late because of work.',
          type: 'main'
        },
        {
          japanese: '電車が遅れることがある。',
          vietnamese: 'Đôi khi tàu điện bị trễ.',
          english: 'The train is sometimes late.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ものだ',
      vietnamese: 'vốn dĩ là ~, đáng lẽ phải ~, thường là ~',
      english: 'it is natural that, used to, should',
      type: 'main',
      explanation: 'Có ba cách dùng: (1) Chân lý/thường tình: ～ものだ = vốn dĩ là, theo lẽ thường. (2) Hồi tưởng: よく～たものだ = trước đây hay ~. (3) Khuyên bảo/cảm thán: ～ものだ = nên ~, thật là ~.',
      examples: [
        {
          japanese: '時間はあっという間に過ぎるものだ。',
          vietnamese: 'Thời gian vốn dĩ trôi qua rất nhanh.',
          english: 'Time passes by in the blink of an eye.',
          type: 'main'
        },
        {
          japanese: '子どもの頃、よくこの公園で遊んだものだ。',
          vietnamese: 'Hồi nhỏ, tôi thường hay chơi ở công viên này.',
          english: 'When I was a child, I used to play in this park.',
          type: 'main'
        },
        {
          japanese: '人の悪口を言うものではない。',
          vietnamese: 'Không nên nói xấu người khác.',
          english: 'One should not speak ill of others.',
          type: 'additional'
        }
      ]
    }
  ]
};

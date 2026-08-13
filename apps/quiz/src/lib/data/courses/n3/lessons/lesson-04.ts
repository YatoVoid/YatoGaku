/**
 * N3 Core Lessons — Lesson 04
 * Volitional + Conjecture (Ý chí và suy đoán)
 */

import type { LessonData } from '$lib/types';

export const LESSON_04_DATA: LessonData = {
  lessonNumber: 4,
  title: '意志・推量 (Ý chí và suy đoán / Volitional + conjecture)',
  vocabulary: [
    // Plans & Decisions
    {
      japanese: '決める',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '来月引っ越すことに決めました。'
    },
    {
      japanese: '決まる',
      kana: 'きまる',
      vietnamese: 'được quyết định',
      english: 'to be decided',
      type: 'main',
      example: '旅行の日程が決まりました。'
    },
    {
      japanese: '計画する',
      kana: 'けいかくする',
      vietnamese: 'lập kế hoạch',
      english: 'to plan',
      type: 'main',
      example: '旅行を計画しています。'
    },
    {
      japanese: '目標',
      kana: 'もくひょう',
      vietnamese: 'mục tiêu',
      english: 'goal, target',
      type: 'main',
      example: '今年の目標を決めよう。'
    },
    {
      japanese: '将来',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '将来何になろうと思いますか。'
    },
    {
      japanese: '夢',
      kana: 'ゆめ',
      vietnamese: 'giấc mơ, ước mơ',
      english: 'dream',
      type: 'main',
      example: '夢を叶えよう。'
    },
    {
      japanese: '挑戦する',
      kana: 'ちょうせんする',
      vietnamese: 'thử thách, thách thức',
      english: 'to challenge, to try',
      type: 'main',
      example: '新しいことに挑戦しよう。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ, bỏ cuộc',
      english: 'to give up',
      type: 'main',
      example: '絶対に諦めないつもりです。'
    },

    // Guessing & Probability
    {
      japanese: '予想する',
      kana: 'よそうする',
      vietnamese: 'dự đoán',
      english: 'to predict, to expect',
      type: 'main',
      example: '結果を予想するのは難しい。'
    },
    {
      japanese: '推測する',
      kana: 'すいそくする',
      vietnamese: 'suy đoán, phỏng đoán',
      english: 'to guess, to infer',
      type: 'additional',
      example: '原因を推測しています。'
    },
    {
      japanese: '確か',
      kana: 'たしか',
      vietnamese: 'chắc chắn, nếu tôi nhớ không nhầm',
      english: 'certain, if I remember correctly',
      type: 'main',
      example: '確か、彼は来年結婚するでしょう。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn, nhất định',
      english: 'surely, certainly',
      type: 'main',
      example: 'きっとうまくいくでしょう。'
    },
    {
      japanese: 'たぶん',
      kana: 'たぶん',
      vietnamese: 'có lẽ, chắc là',
      english: 'probably, maybe',
      type: 'main',
      example: 'たぶん明日は雨でしょう。'
    },
    {
      japanese: 'もしかしたら',
      kana: 'もしかしたら',
      vietnamese: 'biết đâu, có thể',
      english: 'perhaps, possibly',
      type: 'main',
      example: 'もしかしたら彼は来ないかもしれない。'
    },
    {
      japanese: 'おそらく',
      kana: 'おそらく',
      vietnamese: 'có lẽ, chắc hẳn',
      english: 'probably, presumably',
      type: 'main',
      example: 'おそらく電車が遅れたのでしょう。'
    },

    // Actions & Verbs
    {
      japanese: '引っ越す',
      kana: 'ひっこす',
      vietnamese: 'chuyển nhà',
      english: 'to move (house)',
      type: 'main',
      example: '来月東京に引っ越そうと思っています。'
    },
    {
      japanese: '転職する',
      kana: 'てんしょくする',
      vietnamese: 'đổi việc',
      english: 'to change jobs',
      type: 'main',
      example: '転職しようかどうか迷っています。'
    },
    {
      japanese: '留学する',
      kana: 'りゅうがくする',
      vietnamese: 'du học',
      english: 'to study abroad',
      type: 'main',
      example: '日本に留学しようと思います。'
    },
    {
      japanese: '迷う',
      kana: 'まよう',
      vietnamese: 'phân vân, lạc',
      english: 'to be lost, to hesitate',
      type: 'main',
      example: 'どちらにしようか迷っています。'
    },
    {
      japanese: '信じる',
      kana: 'しんじる',
      vietnamese: 'tin tưởng',
      english: 'to believe',
      type: 'main',
      example: 'きっと成功すると信じています。'
    },
    {
      japanese: '予約する',
      kana: 'よやくする',
      vietnamese: 'đặt trước, đặt chỗ',
      english: 'to reserve, to book',
      type: 'main',
      example: 'ホテルを予約しようと思います。'
    },
    {
      japanese: '受ける',
      kana: 'うける',
      vietnamese: 'nhận, thi (kỳ thi)',
      english: 'to receive, to take (exam)',
      type: 'main',
      example: '来月N3を受けようと思っています。'
    },
    {
      japanese: '叶える',
      kana: 'かなえる',
      vietnamese: 'thực hiện (ước mơ)',
      english: 'to make (a dream) come true',
      type: 'main',
      example: '夢を叶えるために頑張ります。'
    },

    // Nouns
    {
      japanese: '日程',
      kana: 'にってい',
      vietnamese: 'lịch trình',
      english: 'schedule, itinerary',
      type: 'main',
      example: '日程を調整しましょう。'
    },
    {
      japanese: '可能性',
      kana: 'かのうせい',
      vietnamese: 'khả năng',
      english: 'possibility',
      type: 'main',
      example: '雨の可能性が高いです。'
    },
    {
      japanese: '意見',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'main',
      example: '皆さんの意見を聞きたいです。'
    },
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'main',
      example: '遅刻の理由を教えてください。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'main',
      example: 'いい経験になるでしょう。'
    },

    // Adjectives
    {
      japanese: '不安',
      kana: 'ふあん',
      vietnamese: 'bất an, lo lắng',
      english: 'anxious, uneasy',
      type: 'main',
      example: '試験の前は不安です。'
    },
    {
      japanese: '自信',
      kana: 'じしん',
      vietnamese: 'tự tin',
      english: 'confidence',
      type: 'main',
      example: '自信を持とう。'
    },
    {
      japanese: '無理',
      kana: 'むり',
      vietnamese: 'quá sức, không thể',
      english: 'impossible, unreasonable',
      type: 'main',
      example: '無理かもしれないけど、やってみよう。'
    }
  ],
  grammar: [
    {
      pattern: '〜よう／〜おう (意志形)',
      vietnamese: 'hãy ~, cùng ~ nhé',
      english: 'volitional form (let us ~, I will ~)',
      type: 'main',
      explanation: 'Thể ý chí diễn tả ý định hoặc rủ rê. Nhóm I: う段→おう段 (行く→行こう). Nhóm II: る→よう (食べる→食べよう). Nhóm III: する→しよう, くる→こよう.',
      examples: [
        {
          japanese: '一緒に昼ご飯を食べよう。',
          vietnamese: 'Cùng ăn trưa nhé.',
          english: 'Let us eat lunch together.',
          type: 'main'
        },
        {
          japanese: '今日は早く寝よう。',
          vietnamese: 'Hôm nay hãy đi ngủ sớm.',
          english: 'Let us go to bed early today.',
          type: 'main'
        },
        {
          japanese: '新しいことに挑戦しよう。',
          vietnamese: 'Hãy thử thách điều mới.',
          english: 'Let us try something new.',
          type: 'main'
        },
        {
          japanese: '来年こそ目標を達成しよう。',
          vietnamese: 'Năm tới nhất định hãy đạt được mục tiêu.',
          english: 'Let us definitely achieve our goals next year.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ようと思う／〜ようと思っている',
      vietnamese: 'tôi nghĩ sẽ ~, tôi dự định ~',
      english: 'I think I will ~, I intend to ~',
      type: 'main',
      explanation: 'Diễn tả ý định, dự định của người nói. 〜ようと思う: quyết định tại thời điểm nói. 〜ようと思っている: đã nghĩ từ trước.',
      examples: [
        {
          japanese: '来月日本に留学しようと思います。',
          vietnamese: 'Tôi dự định du học Nhật vào tháng tới.',
          english: 'I intend to study abroad in Japan next month.',
          type: 'main'
        },
        {
          japanese: '転職しようと思っています。',
          vietnamese: 'Tôi đang nghĩ sẽ đổi việc.',
          english: 'I have been thinking of changing jobs.',
          type: 'main'
        },
        {
          japanese: 'ダイエットしようと思ったけど、無理だった。',
          vietnamese: 'Tôi đã nghĩ sẽ giảm cân nhưng không được.',
          english: 'I thought I would diet, but I could not.',
          type: 'main'
        },
        {
          japanese: '来年N3を受けようと思っています。',
          vietnamese: 'Tôi đang dự định thi N3 năm tới.',
          english: 'I am thinking of taking the N3 next year.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜だろう／〜でしょう',
      vietnamese: 'chắc là ~, có lẽ ~',
      english: 'probably ~, I think ~',
      type: 'main',
      explanation: 'Diễn tả suy đoán, phỏng đoán. でしょう là dạng lịch sự của だろう. Thường đi với きっと、たぶん、おそらく.',
      examples: [
        {
          japanese: '明日はたぶん雨でしょう。',
          vietnamese: 'Ngày mai chắc là mưa.',
          english: 'It will probably rain tomorrow.',
          type: 'main'
        },
        {
          japanese: 'きっとうまくいくでしょう。',
          vietnamese: 'Chắc chắn sẽ ổn thôi.',
          english: 'It will surely go well.',
          type: 'main'
        },
        {
          japanese: '彼はもう帰っただろう。',
          vietnamese: 'Anh ấy chắc đã về rồi.',
          english: 'He has probably already gone home.',
          type: 'main'
        },
        {
          japanese: 'おそらく電車が遅れたのでしょう。',
          vietnamese: 'Có lẽ tàu đã bị trễ.',
          english: 'The train was presumably delayed.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜かもしれない',
      vietnamese: 'có thể ~, biết đâu ~',
      english: 'might ~, may ~',
      type: 'main',
      explanation: 'Diễn tả khả năng xảy ra nhưng không chắc chắn (khoảng 50% hoặc thấp hơn). Dạng lịch sự: かもしれません.',
      examples: [
        {
          japanese: '明日は雪が降るかもしれません。',
          vietnamese: 'Ngày mai có thể tuyết rơi.',
          english: 'It might snow tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないかもしれない。',
          vietnamese: 'Có thể anh ấy sẽ không đến.',
          english: 'He might not come.',
          type: 'main'
        },
        {
          japanese: 'もしかしたら、間違っているかもしれません。',
          vietnamese: 'Biết đâu, có thể tôi đã sai.',
          english: 'Perhaps I might be wrong.',
          type: 'main'
        },
        {
          japanese: '無理かもしれないけど、やってみよう。',
          vietnamese: 'Có thể không được, nhưng hãy thử xem.',
          english: 'It might be impossible, but let us try.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜つもり',
      vietnamese: 'dự định ~, có ý ~',
      english: 'intend to ~, plan to ~',
      type: 'additional',
      explanation: 'Diễn tả dự định, kế hoạch cá nhân đã quyết định. 〜つもりはない: không có ý định ~.',
      examples: [
        {
          japanese: '来年結婚するつもりです。',
          vietnamese: 'Tôi dự định năm tới sẽ kết hôn.',
          english: 'I plan to get married next year.',
          type: 'main'
        },
        {
          japanese: '絶対に諦めないつもりです。',
          vietnamese: 'Tôi hoàn toàn không có ý định bỏ cuộc.',
          english: 'I definitely do not intend to give up.',
          type: 'main'
        },
        {
          japanese: '夏休みに北海道に行くつもりです。',
          vietnamese: 'Tôi dự định đi Hokkaido vào kỳ nghỉ hè.',
          english: 'I plan to go to Hokkaido during summer vacation.',
          type: 'main'
        }
      ]
    }
  ]
};

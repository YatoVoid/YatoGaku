/**
 * N4 Core Lessons — Lesson 03
 * Particles and Sentence Structures
 */

import type { LessonData } from '$lib/types';

export const LESSON_03_DATA: LessonData = {
  lessonNumber: 3,
  title: '助詞と文型 (Particles and Sentence Patterns)',
  vocabulary: [
    // Change & State Verbs
    {
      japanese: 'なる',
      kana: 'なる',
      vietnamese: 'trở thành, trở nên',
      english: 'to become',
      type: 'main',
      example: '医者になりたいです。'
    },
    {
      japanese: '変わる',
      kana: 'かわる',
      vietnamese: 'thay đổi',
      english: 'to change',
      type: 'main',
      example: '天気が変わりました。'
    },
    {
      japanese: '増える',
      kana: 'ふえる',
      vietnamese: 'tăng lên',
      english: 'to increase',
      type: 'main',
      example: '人が増えました。'
    },
    {
      japanese: '減る',
      kana: 'へる',
      vietnamese: 'giảm',
      english: 'to decrease',
      type: 'main',
      example: '体重が減りました。'
    },
    {
      japanese: '上がる',
      kana: 'あがる',
      vietnamese: 'lên, tăng',
      english: 'to go up, to rise',
      type: 'main',
      example: '気温が上がりました。'
    },
    {
      japanese: '下がる',
      kana: 'さがる',
      vietnamese: 'xuống, hạ',
      english: 'to go down, to fall',
      type: 'main',
      example: '値段が下がりました。'
    },

    // Necessity & Obligation
    {
      japanese: 'しなければならない',
      kana: 'しなければならない',
      vietnamese: 'phải làm',
      english: 'must do',
      type: 'main',
      example: '宿題をしなければなりません。'
    },
    {
      japanese: 'しなくてもいい',
      kana: 'しなくてもいい',
      vietnamese: 'không cần làm',
      english: 'do not need to do',
      type: 'main',
      example: '今日は来なくてもいいです。'
    },

    // Ability & Possibility
    {
      japanese: 'できる',
      kana: 'できる',
      vietnamese: 'có thể làm, hoàn thành',
      english: 'can do, to be completed',
      type: 'main',
      example: '日本語ができます。'
    },
    {
      japanese: '分かる',
      kana: 'わかる',
      vietnamese: 'hiểu',
      english: 'to understand',
      type: 'main',
      example: '意味が分かりますか。'
    },
    {
      japanese: '聞こえる',
      kana: 'きこえる',
      vietnamese: 'nghe thấy',
      english: 'to be audible',
      type: 'main',
      example: '音楽が聞こえます。'
    },
    {
      japanese: '見える',
      kana: 'みえる',
      vietnamese: 'nhìn thấy',
      english: 'to be visible',
      type: 'main',
      example: '富士山が見えます。'
    },

    // Communication
    {
      japanese: '伝える',
      kana: 'つたえる',
      vietnamese: 'truyền đạt, báo cho biết',
      english: 'to convey, to tell',
      type: 'main',
      example: 'メッセージを伝えました。'
    },
    {
      japanese: '頼む',
      kana: 'たのむ',
      vietnamese: 'nhờ vả, yêu cầu',
      english: 'to request, to ask',
      type: 'main',
      example: '友達に頼みました。'
    },
    {
      japanese: '誘う',
      kana: 'さそう',
      vietnamese: 'rủ, mời',
      english: 'to invite',
      type: 'main',
      example: '友達を映画に誘いました。'
    },
    {
      japanese: '断る',
      kana: 'ことわる',
      vietnamese: 'từ chối',
      english: 'to refuse, to decline',
      type: 'main',
      example: '誘いを断りました。'
    },
    {
      japanese: '謝る',
      kana: 'あやまる',
      vietnamese: 'xin lỗi',
      english: 'to apologize',
      type: 'main',
      example: '遅れて謝りました。'
    },
    {
      japanese: '相談する',
      kana: 'そうだんする',
      vietnamese: 'bàn bạc, tham khảo ý kiến',
      english: 'to consult, to discuss',
      type: 'main',
      example: '先生に相談しました。'
    },
    {
      japanese: '説明する',
      kana: 'せつめいする',
      vietnamese: 'giải thích',
      english: 'to explain',
      type: 'main',
      example: '使い方を説明してください。'
    },

    // Thinking & Planning
    {
      japanese: '考える',
      kana: 'かんがえる',
      vietnamese: 'suy nghĩ, cân nhắc',
      english: 'to think, to consider',
      type: 'main',
      example: '将来について考えています。'
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
      japanese: '予約する',
      kana: 'よやくする',
      vietnamese: 'đặt trước',
      english: 'to reserve, to book',
      type: 'main',
      example: 'ホテルを予約しました。'
    },
    {
      japanese: '約束する',
      kana: 'やくそくする',
      vietnamese: 'hứa, hẹn',
      english: 'to promise',
      type: 'main',
      example: '友達と約束しました。'
    },

    // Actions
    {
      japanese: '触る',
      kana: 'さわる',
      vietnamese: 'chạm vào',
      english: 'to touch',
      type: 'main',
      example: '触らないでください。'
    },
    {
      japanese: '押す',
      kana: 'おす',
      vietnamese: 'ấn, đẩy',
      english: 'to push, to press',
      type: 'main',
      example: 'ボタンを押してください。'
    },
    {
      japanese: '引く',
      kana: 'ひく',
      vietnamese: 'kéo',
      english: 'to pull',
      type: 'main',
      example: 'ドアを引いてください。'
    },
    {
      japanese: '並ぶ',
      kana: 'ならぶ',
      vietnamese: 'xếp hàng',
      english: 'to line up',
      type: 'main',
      example: '駅で並んでいます。'
    },
    {
      japanese: '集まる',
      kana: 'あつまる',
      vietnamese: 'tập trung, tụ họp',
      english: 'to gather',
      type: 'main',
      example: '公園に集まりました。'
    },
    {
      japanese: '別れる',
      kana: 'わかれる',
      vietnamese: 'chia tay',
      english: 'to part, to separate',
      type: 'main',
      example: '駅で別れました。'
    },
    {
      japanese: '参加する',
      kana: 'さんかする',
      vietnamese: 'tham gia',
      english: 'to participate',
      type: 'main',
      example: 'イベントに参加しました。'
    },

    // Conditions & States
    {
      japanese: '用事',
      kana: 'ようじ',
      vietnamese: 'việc, công việc',
      english: 'business, errand',
      type: 'main',
      example: '用事があります。'
    },
    {
      japanese: '準備',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'main',
      example: '準備をしています。'
    },
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'dự định, kế hoạch',
      english: 'plan, schedule',
      type: 'main',
      example: '明日の予定はありますか。'
    },
    {
      japanese: '都合',
      kana: 'つごう',
      vietnamese: 'sự thuận tiện, lịch trình',
      english: 'convenience, circumstances',
      type: 'main',
      example: '都合が悪いです。'
    },
    {
      japanese: '約束',
      kana: 'やくそく',
      vietnamese: 'lời hứa, cuộc hẹn',
      english: 'promise, appointment',
      type: 'main',
      example: '約束を守ります。'
    },
    {
      japanese: '予約',
      kana: 'よやく',
      vietnamese: 'sự đặt trước',
      english: 'reservation',
      type: 'main',
      example: '予約が必要です。'
    },

    // Time & Frequency
    {
      japanese: '将来',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '将来について考えています。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'trên đường, giữa chừng',
      english: 'on the way, halfway',
      type: 'main',
      example: '途中で会いました。'
    },
    {
      japanese: 'いつも',
      kana: 'いつも',
      vietnamese: 'luôn luôn',
      english: 'always',
      type: 'main',
      example: 'いつもありがとう。'
    },
    {
      japanese: 'たまに',
      kana: 'たまに',
      vietnamese: 'thỉnh thoảng',
      english: 'occasionally',
      type: 'main',
      example: 'たまに映画を見ます。'
    },
    {
      japanese: 'たいてい',
      kana: 'たいてい',
      vietnamese: 'thường thường',
      english: 'usually',
      type: 'main',
      example: 'たいてい7時に起きます。'
    },
    {
      japanese: 'なかなか',
      kana: 'なかなか',
      vietnamese: 'không dễ (dùng với phủ định)',
      english: 'not easily',
      type: 'main',
      example: 'なかなか会えません。'
    },

    // Nouns - People
    {
      japanese: '医者',
      kana: 'いしゃ',
      vietnamese: 'bác sĩ',
      english: 'doctor',
      type: 'main',
      example: '医者になりたいです。'
    },
    {
      japanese: '看護師',
      kana: 'かんごし',
      vietnamese: 'y tá',
      english: 'nurse',
      type: 'main',
      example: '看護師として働いています。'
    },
    {
      japanese: '弁護士',
      kana: 'べんごし',
      vietnamese: 'luật sư',
      english: 'lawyer',
      type: 'additional',
      example: '弁護士になりました。'
    },

    // Nouns - Places & Things
    {
      japanese: '天気',
      kana: 'てんき',
      vietnamese: 'thời tiết',
      english: 'weather',
      type: 'main',
      example: '今日はいい天気ですね。'
    },
    {
      japanese: '気温',
      kana: 'きおん',
      vietnamese: 'nhiệt độ',
      english: 'temperature',
      type: 'main',
      example: '気温が上がりました。'
    },
    {
      japanese: '体重',
      kana: 'たいじゅう',
      vietnamese: 'cân nặng',
      english: 'body weight',
      type: 'main',
      example: '体重が減りました。'
    },
    {
      japanese: '値段',
      kana: 'ねだん',
      vietnamese: 'giá cả',
      english: 'price',
      type: 'main',
      example: '値段が高いです。'
    },
    {
      japanese: '意味',
      kana: 'いみ',
      vietnamese: 'ý nghĩa',
      english: 'meaning',
      type: 'main',
      example: 'この言葉の意味が分かりません。'
    },
    {
      japanese: '使い方',
      kana: 'つかいかた',
      vietnamese: 'cách sử dụng',
      english: 'how to use',
      type: 'main',
      example: '使い方を教えてください。'
    },
    {
      japanese: 'メッセージ',
      kana: 'メッセージ',
      vietnamese: 'tin nhắn',
      english: 'message',
      type: 'main',
      example: 'メッセージを送りました。'
    },
    {
      japanese: 'イベント',
      kana: 'イベント',
      vietnamese: 'sự kiện',
      english: 'event',
      type: 'main',
      example: 'イベントに参加します。'
    },
    {
      japanese: 'ボタン',
      kana: 'ボタン',
      vietnamese: 'nút (bấm)',
      english: 'button',
      type: 'main',
      example: 'ボタンを押してください。'
    },
    {
      japanese: '旅行',
      kana: 'りょこう',
      vietnamese: 'du lịch',
      english: 'travel, trip',
      type: 'main',
      example: '夏休みに旅行します。'
    },
    {
      japanese: 'ホテル',
      kana: 'ホテル',
      vietnamese: 'khách sạn',
      english: 'hotel',
      type: 'main',
      example: 'ホテルを予約しました。'
    },

    // Abstract Nouns
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'main',
      example: '理由を教えてください。'
    },
    {
      japanese: '方法',
      kana: 'ほうほう',
      vietnamese: 'phương pháp',
      english: 'method, way',
      type: 'main',
      example: 'いい方法があります。'
    },
    {
      japanese: '場合',
      kana: 'ばあい',
      vietnamese: 'trường hợp',
      english: 'case, occasion',
      type: 'main',
      example: 'その場合は連絡してください。'
    },

    // Adjectives
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary',
      type: 'main',
      example: 'パスポートが必要です。'
    },
    {
      japanese: '大事',
      kana: 'だいじ',
      vietnamese: 'quan trọng',
      english: 'important',
      type: 'main',
      example: '健康が大事です。'
    },
    {
      japanese: '無理',
      kana: 'むり',
      vietnamese: 'không thể, quá sức',
      english: 'impossible, unreasonable',
      type: 'main',
      example: 'それは無理です。'
    },
    {
      japanese: '大丈夫',
      kana: 'だいじょうぶ',
      vietnamese: 'không sao, ổn',
      english: 'all right, okay',
      type: 'main',
      example: '大丈夫ですか。'
    },
    {
      japanese: '残念',
      kana: 'ざんねん',
      vietnamese: 'tiếc, đáng tiếc',
      english: 'regrettable, disappointing',
      type: 'main',
      example: '残念ですが、行けません。'
    },
    {
      japanese: '元気',
      kana: 'げんき',
      vietnamese: 'khỏe mạnh, năng động',
      english: 'healthy, energetic',
      type: 'main',
      example: '元気ですか。'
    },
    {
      japanese: '暇',
      kana: 'ひま',
      vietnamese: 'rảnh rỗi',
      english: 'free (time)',
      type: 'main',
      example: '今日は暇です。'
    },
    {
      japanese: '心配',
      kana: 'しんぱい',
      vietnamese: 'lo lắng',
      english: 'worry, concern',
      type: 'main',
      example: '心配しないでください。'
    },
    {
      japanese: '安全',
      kana: 'あんぜん',
      vietnamese: 'an toàn',
      english: 'safe',
      type: 'main',
      example: 'ここは安全です。'
    },
    {
      japanese: '危険',
      kana: 'きけん',
      vietnamese: 'nguy hiểm',
      english: 'dangerous',
      type: 'main',
      example: 'ここは危険です。'
    },

    // Expressions
    {
      japanese: 'そのため',
      kana: 'そのため',
      vietnamese: 'vì thế, vì lý do đó',
      english: 'for that reason, therefore',
      type: 'main',
      example: '雨が降りました。そのため、中止しました。'
    },
    {
      japanese: 'それで',
      kana: 'それで',
      vietnamese: 'vì thế, do đó',
      english: 'so, therefore',
      type: 'main',
      example: '忙しかったです。それで、行けませんでした。'
    },
    {
      japanese: 'それでも',
      kana: 'それでも',
      vietnamese: 'dù vậy',
      english: 'even so, nevertheless',
      type: 'main',
      example: '高いです。それでも、買います。'
    },
    {
      japanese: 'もし',
      kana: 'もし',
      vietnamese: 'nếu',
      english: 'if',
      type: 'main',
      example: 'もし雨が降ったら、中止します。'
    }
  ],
  grammar: [
    {
      pattern: '〜のに (目的)',
      vietnamese: 'để ~ (mục đích)',
      english: 'in order to ~, for ~ing',
      type: 'main',
      explanation: 'Diễn tả mục đích của hành động. Cấu trúc: Động từ辞書形 + のに + 動詞/い形容詞/な形容詞',
      examples: [
        {
          japanese: '日本語を勉強するのに、辞書が必要です。',
          vietnamese: 'Để học tiếng Nhật, từ điển là cần thiết.',
          english: 'A dictionary is necessary for studying Japanese.',
          type: 'main'
        },
        {
          japanese: '旅行に行くのに、お金がかかります。',
          vietnamese: 'Để đi du lịch, cần tốn tiền.',
          english: 'It costs money to travel.',
          type: 'main'
        },
        {
          japanese: 'このアプリは使うのに便利です。',
          vietnamese: 'App này tiện lợi để sử dụng.',
          english: 'This app is convenient to use.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜のに (逆接)',
      vietnamese: 'mặc dù ~, nhưng ~',
      english: 'although ~, despite ~',
      type: 'main',
      explanation: 'Diễn tả nghĩa trái ngược với kỳ vọng. Cấu trúc: 普通形 + のに',
      examples: [
        {
          japanese: '勉強したのに、テストができませんでした。',
          vietnamese: 'Mặc dù đã học nhưng không làm được bài kiểm tra.',
          english: 'Although I studied, I could not do the test.',
          type: 'main'
        },
        {
          japanese: '安いのに、誰も買いません。',
          vietnamese: 'Mặc dù rẻ nhưng không ai mua.',
          english: 'Although it is cheap, no one buys it.',
          type: 'main'
        },
        {
          japanese: '約束したのに、来ませんでした。',
          vietnamese: 'Mặc dù đã hứa nhưng không đến.',
          english: 'Although they promised, they did not come.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜なければならない',
      vietnamese: 'phải ~',
      english: 'must ~, have to ~',
      type: 'main',
      explanation: 'Diễn tả nghĩa vụ, sự cần thiết phải làm. Cấu trúc: 動詞ない形 + なければならない/なりません',
      examples: [
        {
          japanese: '明日早く起きなければなりません。',
          vietnamese: 'Ngày mai tôi phải dậy sớm.',
          english: 'I must wake up early tomorrow.',
          type: 'main'
        },
        {
          japanese: '宿題をしなければなりません。',
          vietnamese: 'Tôi phải làm bài tập về nhà.',
          english: 'I have to do my homework.',
          type: 'main'
        },
        {
          japanese: 'パスポートを持って行かなければなりません。',
          vietnamese: 'Tôi phải mang theo hộ chiếu.',
          english: 'I must bring my passport.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜なくてもいい',
      vietnamese: 'không cần ~',
      english: 'do not have to ~, need not ~',
      type: 'main',
      explanation: 'Diễn tả không cần phải làm gì. Cấu trúc: 動詞ない形 + なくてもいい/いいです',
      examples: [
        {
          japanese: '明日は来なくてもいいです。',
          vietnamese: 'Ngày mai bạn không cần đến.',
          english: 'You do not have to come tomorrow.',
          type: 'main'
        },
        {
          japanese: '急がなくてもいいです。',
          vietnamese: 'Bạn không cần vội.',
          english: 'You do not need to hurry.',
          type: 'main'
        },
        {
          japanese: '予約しなくてもいいです。',
          vietnamese: 'Bạn không cần đặt trước.',
          english: 'You do not need to make a reservation.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ために (目的)',
      vietnamese: 'để ~ (mục đích)',
      english: 'in order to ~, for the purpose of ~',
      type: 'main',
      explanation: 'Diễn tả mục đích của hành động. Cấu trúc: 動詞辞書形/名詞 + のために',
      examples: [
        {
          japanese: '医者になるために、勉強しています。',
          vietnamese: 'Tôi đang học để trở thành bác sĩ.',
          english: 'I am studying to become a doctor.',
          type: 'main'
        },
        {
          japanese: '健康のために、運動します。',
          vietnamese: 'Tôi tập thể dục vì sức khỏe.',
          english: 'I exercise for my health.',
          type: 'main'
        },
        {
          japanese: '試験に合格するために、毎日勉強します。',
          vietnamese: 'Tôi học mỗi ngày để đậu kỳ thi.',
          english: 'I study every day to pass the exam.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ために (原因)',
      vietnamese: 'vì ~, do ~',
      english: 'because of ~, due to ~',
      type: 'additional',
      explanation: 'Diễn tả nguyên nhân của tình trạng. Thường dùng với danh từ hoặc động từ た形.',
      examples: [
        {
          japanese: '雨のために、中止しました。',
          vietnamese: 'Vì mưa nên đã hủy.',
          english: 'We canceled because of the rain.',
          type: 'main'
        },
        {
          japanese: '台風のために、飛行機が遅れました。',
          vietnamese: 'Vì bão nên máy bay bị trễ.',
          english: 'The flight was delayed due to the typhoon.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ように (目的)',
      vietnamese: 'để có thể ~',
      english: 'so that ~, in order to ~',
      type: 'main',
      explanation: 'Diễn tả mục đích muốn đạt được trạng thái nào đó. Cấu trúc: 動詞辞書形/ない形 + ように',
      examples: [
        {
          japanese: '日本語が話せるように、毎日練習します。',
          vietnamese: 'Tôi luyện tập mỗi ngày để có thể nói được tiếng Nhật.',
          english: 'I practice every day so that I can speak Japanese.',
          type: 'main'
        },
        {
          japanese: '忘れないように、メモします。',
          vietnamese: 'Tôi ghi chú để không quên.',
          english: 'I take notes so that I do not forget.',
          type: 'main'
        },
        {
          japanese: '遅れないように、早く出ます。',
          vietnamese: 'Tôi ra sớm để không bị trễ.',
          english: 'I leave early so as not to be late.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ようになる',
      vietnamese: 'trở nên ~, bắt đầu ~',
      english: 'come to ~, get to ~',
      type: 'main',
      explanation: 'Diễn tả sự thay đổi của khả năng hoặc thói quen. Cấu trúc: 動詞辞書形/ない形 + ようになる',
      examples: [
        {
          japanese: '日本語が話せるようになりました。',
          vietnamese: 'Tôi đã có thể nói được tiếng Nhật.',
          english: 'I came to be able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: '毎日運動するようになりました。',
          vietnamese: 'Tôi đã bắt đầu tập thể dục mỗi ngày.',
          english: 'I came to exercise every day.',
          type: 'main'
        },
        {
          japanese: 'タバコを吸わないようになりました。',
          vietnamese: 'Tôi đã không hút thuốc nữa.',
          english: 'I came not to smoke.',
          type: 'additional'
        }
      ]
    }
  ]
};

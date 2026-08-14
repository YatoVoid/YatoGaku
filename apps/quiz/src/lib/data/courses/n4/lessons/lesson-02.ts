/**
 * N4 Core Lessons — Lesson 02
 * Verbs, Adjectives and Experiences
 */

import type { LessonData } from '$lib/types';

export const LESSON_02_DATA: LessonData = {
  lessonNumber: 2,
  title: '動詞と形容詞と経験 (Verbs, Adjectives, and Experience)',
  vocabulary: [
    // Movement & Transportation
    {
      japanese: '行く',
      kana: 'いく',
      vietnamese: 'đi',
      english: 'to go',
      type: 'main',
      example: '学校へ行きます。'
    },
    {
      japanese: '来る',
      kana: 'くる',
      vietnamese: 'đến, tới',
      english: 'to come',
      type: 'main',
      example: '友達が家に来ます。'
    },
    {
      japanese: '乗る',
      kana: 'のる',
      vietnamese: 'lên (xe), đi (xe)',
      english: 'to ride, to get on',
      type: 'main',
      example: '電車に乗ります。'
    },
    {
      japanese: '降りる',
      kana: 'おりる',
      vietnamese: 'xuống (xe)',
      english: 'to get off',
      type: 'main',
      example: '次の駅で降ります。'
    },
    {
      japanese: '通う',
      kana: 'かよう',
      vietnamese: 'đi lại (thường xuyên)',
      english: 'to commute, to attend',
      type: 'main',
      example: '大学に通っています。'
    },
    {
      japanese: '止まる',
      kana: 'とまる',
      vietnamese: 'dừng lại',
      english: 'to stop',
      type: 'main',
      example: 'バスが止まりました。'
    },
    {
      japanese: '曲がる',
      kana: 'まがる',
      vietnamese: 'rẽ, quẹo',
      english: 'to turn',
      type: 'main',
      example: '次の角を右に曲がります。'
    },

    // Seeing & Watching
    {
      japanese: '見る',
      kana: 'みる',
      vietnamese: 'xem, nhìn',
      english: 'to see, to watch',
      type: 'main',
      example: '映画を見ました。'
    },
    {
      japanese: '見せる',
      kana: 'みせる',
      vietnamese: 'cho xem',
      english: 'to show',
      type: 'main',
      example: '写真を見せてください。'
    },
    {
      japanese: '会う',
      kana: 'あう',
      vietnamese: 'gặp',
      english: 'to meet',
      type: 'main',
      example: '友達に会いました。'
    },

    // Reading & Writing
    {
      japanese: '読む',
      kana: 'よむ',
      vietnamese: 'đọc',
      english: 'to read',
      type: 'main',
      example: '本を読んでいます。'
    },
    {
      japanese: '書く',
      kana: 'かく',
      vietnamese: 'viết',
      english: 'to write',
      type: 'main',
      example: '手紙を書きました。'
    },

    // Giving & Receiving
    {
      japanese: 'あげる',
      kana: 'あげる',
      vietnamese: 'cho (ai đó)',
      english: 'to give',
      type: 'main',
      example: '友達にプレゼントをあげました。'
    },
    {
      japanese: 'もらう',
      kana: 'もらう',
      vietnamese: 'nhận được',
      english: 'to receive',
      type: 'main',
      example: '母からお金をもらいました。'
    },
    {
      japanese: '貸す',
      kana: 'かす',
      vietnamese: 'cho mượn',
      english: 'to lend',
      type: 'main',
      example: '友達に本を貸しました。'
    },
    {
      japanese: '借りる',
      kana: 'かりる',
      vietnamese: 'mượn, vay',
      english: 'to borrow',
      type: 'main',
      example: '図書館で本を借りました。'
    },

    // Opening & Closing
    {
      japanese: '開ける',
      kana: 'あける',
      vietnamese: 'mở',
      english: 'to open',
      type: 'main',
      example: '窓を開けてください。'
    },
    {
      japanese: '閉める',
      kana: 'しめる',
      vietnamese: 'đóng',
      english: 'to close',
      type: 'main',
      example: 'ドアを閉めてください。'
    },
    {
      japanese: '消す',
      kana: 'けす',
      vietnamese: 'tắt, xóa',
      english: 'to turn off, to erase',
      type: 'main',
      example: '電気を消してください。'
    },
    {
      japanese: 'つける',
      kana: 'つける',
      vietnamese: 'bật (đèn), gắn',
      english: 'to turn on, to attach',
      type: 'main',
      example: '電気をつけてください。'
    },

    // Other Actions
    {
      japanese: '始める',
      kana: 'はじめる',
      vietnamese: 'bắt đầu (làm gì)',
      english: 'to begin, to start',
      type: 'main',
      example: '勉強を始めました。'
    },
    {
      japanese: '始まる',
      kana: 'はじまる',
      vietnamese: 'bắt đầu (tự động)',
      english: 'to begin',
      type: 'main',
      example: '授業が始まりました。'
    },
    {
      japanese: '終わる',
      kana: 'おわる',
      vietnamese: 'kết thúc',
      english: 'to end, to finish',
      type: 'main',
      example: '仕事が終わりました。'
    },
    {
      japanese: '続ける',
      kana: 'つづける',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'main',
      example: '勉強を続けます。'
    },
    {
      japanese: 'やめる',
      kana: 'やめる',
      vietnamese: 'dừng lại, từ bỏ',
      english: 'to stop, to quit',
      type: 'main',
      example: '会社をやめました。'
    },
    {
      japanese: '探す',
      kana: 'さがす',
      vietnamese: 'tìm kiếm',
      english: 'to search, to look for',
      type: 'main',
      example: '鍵を探しています。'
    },
    {
      japanese: '見つける',
      kana: 'みつける',
      vietnamese: 'tìm thấy',
      english: 'to find',
      type: 'main',
      example: '鍵を見つけました。'
    },
    {
      japanese: '選ぶ',
      kana: 'えらぶ',
      vietnamese: 'chọn',
      english: 'to choose, to select',
      type: 'main',
      example: 'どちらを選びますか。'
    },
    {
      japanese: '決める',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '予定を決めました。'
    },

    // Feeling & Emotion
    {
      japanese: '笑う',
      kana: 'わらう',
      vietnamese: 'cười',
      english: 'to laugh, to smile',
      type: 'main',
      example: '面白くて笑いました。'
    },
    {
      japanese: '泣く',
      kana: 'なく',
      vietnamese: 'khóc',
      english: 'to cry',
      type: 'main',
      example: '悲しくて泣きました。'
    },
    {
      japanese: '怒る',
      kana: 'おこる',
      vietnamese: 'tức giận',
      english: 'to get angry',
      type: 'main',
      example: '先生が怒りました。'
    },
    {
      japanese: '困る',
      kana: 'こまる',
      vietnamese: 'gặp khó khăn, bối rối',
      english: 'to be troubled',
      type: 'main',
      example: '困っています。'
    },

    // Nouns - Transportation
    {
      japanese: '電車',
      kana: 'でんしゃ',
      vietnamese: 'tàu điện',
      english: 'train',
      type: 'main',
      example: '電車で行きます。'
    },
    {
      japanese: 'バス',
      kana: 'バス',
      vietnamese: 'xe buýt',
      english: 'bus',
      type: 'main',
      example: 'バスに乗ります。'
    },
    {
      japanese: '駅',
      kana: 'えき',
      vietnamese: 'ga (tàu)',
      english: 'station',
      type: 'main',
      example: '駅で降ります。'
    },
    {
      japanese: 'バス停',
      kana: 'バスてい',
      vietnamese: 'trạm xe buýt',
      english: 'bus stop',
      type: 'main',
      example: 'バス停で待っています。'
    },
    {
      japanese: '車',
      kana: 'くるま',
      vietnamese: 'xe hơi',
      english: 'car',
      type: 'main',
      example: '車で行きます。'
    },
    {
      japanese: '自転車',
      kana: 'じてんしゃ',
      vietnamese: 'xe đạp',
      english: 'bicycle',
      type: 'main',
      example: '自転車で学校に行きます。'
    },
    {
      japanese: '飛行機',
      kana: 'ひこうき',
      vietnamese: 'máy bay',
      english: 'airplane',
      type: 'main',
      example: '飛行機で日本に行きました。'
    },

    // Nouns - Places
    {
      japanese: '大学',
      kana: 'だいがく',
      vietnamese: 'trường đại học',
      english: 'university',
      type: 'main',
      example: '大学に通っています。'
    },
    {
      japanese: '図書館',
      kana: 'としょかん',
      vietnamese: 'thư viện',
      english: 'library',
      type: 'main',
      example: '図書館で本を借りました。'
    },
    {
      japanese: '映画館',
      kana: 'えいがかん',
      vietnamese: 'rạp chiếu phim',
      english: 'movie theater',
      type: 'main',
      example: '映画館で映画を見ました。'
    },
    {
      japanese: 'スーパー',
      kana: 'スーパー',
      vietnamese: 'siêu thị',
      english: 'supermarket',
      type: 'main',
      example: 'スーパーで買い物をします。'
    },
    {
      japanese: '角',
      kana: 'かど',
      vietnamese: 'góc (đường)',
      english: 'corner',
      type: 'main',
      example: '角を曲がってください。'
    },

    // Nouns - Objects
    {
      japanese: '本',
      kana: 'ほん',
      vietnamese: 'sách',
      english: 'book',
      type: 'main',
      example: '本を読んでいます。'
    },
    {
      japanese: '映画',
      kana: 'えいが',
      vietnamese: 'phim',
      english: 'movie',
      type: 'main',
      example: '映画を見ました。'
    },
    {
      japanese: '写真',
      kana: 'しゃしん',
      vietnamese: 'ảnh',
      english: 'photograph',
      type: 'main',
      example: '写真を撮りました。'
    },
    {
      japanese: '手紙',
      kana: 'てがみ',
      vietnamese: 'thư',
      english: 'letter',
      type: 'main',
      example: '手紙を書きました。'
    },
    {
      japanese: 'プレゼント',
      kana: 'プレゼント',
      vietnamese: 'quà tặng',
      english: 'present, gift',
      type: 'main',
      example: 'プレゼントをもらいました。'
    },
    {
      japanese: '窓',
      kana: 'まど',
      vietnamese: 'cửa sổ',
      english: 'window',
      type: 'main',
      example: '窓を開けてください。'
    },
    {
      japanese: 'ドア',
      kana: 'ドア',
      vietnamese: 'cửa',
      english: 'door',
      type: 'main',
      example: 'ドアを閉めてください。'
    },
    {
      japanese: '電気',
      kana: 'でんき',
      vietnamese: 'đèn, điện',
      english: 'light, electricity',
      type: 'main',
      example: '電気をつけてください。'
    },
    {
      japanese: '鍵',
      kana: 'かぎ',
      vietnamese: 'chìa khóa',
      english: 'key',
      type: 'main',
      example: '鍵を探しています。'
    },

    // i-Adjectives
    {
      japanese: '面白い',
      kana: 'おもしろい',
      vietnamese: 'thú vị, hay',
      english: 'interesting, funny',
      type: 'main',
      example: 'この本は面白いです。'
    },
    {
      japanese: 'つまらない',
      kana: 'つまらない',
      vietnamese: 'nhàm chán',
      english: 'boring',
      type: 'main',
      example: 'この映画はつまらなかったです。'
    },
    {
      japanese: '楽しい',
      kana: 'たのしい',
      vietnamese: 'vui vẻ',
      english: 'fun, enjoyable',
      type: 'main',
      example: '昨日はとても楽しかったです。'
    },
    {
      japanese: '悲しい',
      kana: 'かなしい',
      vietnamese: 'buồn',
      english: 'sad',
      type: 'main',
      example: '悲しい映画でした。'
    },
    {
      japanese: '難しい',
      kana: 'むずかしい',
      vietnamese: 'khó',
      english: 'difficult',
      type: 'main',
      example: '日本語は難しいですか。'
    },
    {
      japanese: '易しい',
      kana: 'やさしい',
      vietnamese: 'dễ',
      english: 'easy',
      type: 'main',
      example: 'この問題は易しいです。'
    },
    {
      japanese: '優しい',
      kana: 'やさしい',
      vietnamese: 'tử tế, dịu dàng',
      english: 'kind, gentle',
      type: 'main',
      example: '田中さんは優しい人です。'
    },
    {
      japanese: '美味しい',
      kana: 'おいしい',
      vietnamese: 'ngon',
      english: 'delicious',
      type: 'main',
      example: 'このケーキは美味しいです。'
    },
    {
      japanese: '不味い',
      kana: 'まずい',
      vietnamese: 'dở, không ngon',
      english: 'bad-tasting',
      type: 'additional',
      example: 'この料理は不味いです。'
    },
    {
      japanese: '良い',
      kana: 'よい/いい',
      vietnamese: 'tốt',
      english: 'good',
      type: 'main',
      example: 'いい天気ですね。'
    },
    {
      japanese: '悪い',
      kana: 'わるい',
      vietnamese: 'xấu, tệ',
      english: 'bad',
      type: 'main',
      example: '成績が悪いです。'
    },
    {
      japanese: '高い',
      kana: 'たかい',
      vietnamese: 'cao, đắt',
      english: 'high, expensive',
      type: 'main',
      example: 'このレストランは高いです。'
    },
    {
      japanese: '安い',
      kana: 'やすい',
      vietnamese: 'rẻ',
      english: 'cheap',
      type: 'main',
      example: 'この店は安いです。'
    },
    {
      japanese: '低い',
      kana: 'ひくい',
      vietnamese: 'thấp',
      english: 'low',
      type: 'additional',
      example: '声が低いです。'
    },

    // na-Adjectives
    {
      japanese: '便利',
      kana: 'べんり',
      vietnamese: 'tiện lợi',
      english: 'convenient',
      type: 'main',
      example: 'この駅は便利です。'
    },
    {
      japanese: '不便',
      kana: 'ふべん',
      vietnamese: 'bất tiện',
      english: 'inconvenient',
      type: 'main',
      example: 'この場所は不便です。'
    },
    {
      japanese: '有名',
      kana: 'ゆうめい',
      vietnamese: 'nổi tiếng',
      english: 'famous',
      type: 'main',
      example: '有名な俳優です。'
    },
    {
      japanese: '簡単',
      kana: 'かんたん',
      vietnamese: 'đơn giản',
      english: 'simple, easy',
      type: 'main',
      example: 'この問題は簡単です。'
    },
    {
      japanese: '大切',
      kana: 'たいせつ',
      vietnamese: 'quan trọng',
      english: 'important, precious',
      type: 'main',
      example: '家族はとても大切です。'
    },

    // Adverbs & Expressions
    {
      japanese: 'とても',
      kana: 'とても',
      vietnamese: 'rất',
      english: 'very',
      type: 'main',
      example: 'とても美味しいです。'
    },
    {
      japanese: 'あまり',
      kana: 'あまり',
      vietnamese: 'không lắm (dùng với phủ định)',
      english: 'not very',
      type: 'main',
      example: 'あまり高くないです。'
    },
    {
      japanese: '全然',
      kana: 'ぜんぜん',
      vietnamese: 'hoàn toàn không',
      english: 'not at all',
      type: 'main',
      example: '全然分かりません。'
    },
    {
      japanese: 'どちら',
      kana: 'どちら',
      vietnamese: 'cái nào (trong hai)',
      english: 'which (of two)',
      type: 'main',
      example: 'どちらがいいですか。'
    },
    {
      japanese: '昨日',
      kana: 'きのう',
      vietnamese: 'hôm qua',
      english: 'yesterday',
      type: 'main',
      example: '昨日映画を見ました。'
    },
    {
      japanese: '次',
      kana: 'つぎ',
      vietnamese: 'kế tiếp, tiếp theo',
      english: 'next',
      type: 'main',
      example: '次の駅で降ります。'
    }
  ],
  grammar: [
    {
      pattern: '〜たことがある',
      vietnamese: 'đã từng ~',
      english: 'have done ~ (experience)',
      type: 'main',
      explanation: 'Diễn tả kinh nghiệm đã làm gì đó trong quá khứ. Cấu trúc: Động từ た形 + ことがある/ありません',
      examples: [
        {
          japanese: '日本に行ったことがあります。',
          vietnamese: 'Tôi đã từng đến Nhật Bản.',
          english: 'I have been to Japan.',
          type: 'main'
        },
        {
          japanese: '富士山を見たことがありますか。',
          vietnamese: 'Bạn đã từng nhìn thấy núi Phú Sĩ chưa?',
          english: 'Have you ever seen Mt. Fuji?',
          type: 'main'
        },
        {
          japanese: 'この映画を見たことがありません。',
          vietnamese: 'Tôi chưa từng xem bộ phim này.',
          english: 'I have never seen this movie.',
          type: 'main'
        },
        {
          japanese: '納豆を食べたことがありますか。',
          vietnamese: 'Bạn đã từng ăn natto chưa?',
          english: 'Have you ever eaten natto?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'い形容詞の活用',
      vietnamese: 'chia động tính từ đuôi い',
      english: 'i-adjective conjugation',
      type: 'main',
      explanation: 'Cách chia tính từ đuôi い:\n・Hiện tại khẳng định: 〜い (高い)\n・Hiện tại phủ định: 〜くない (高くない)\n・Quá khứ khẳng định: 〜かった (高かった)\n・Quá khứ phủ định: 〜くなかった (高くなかった)',
      examples: [
        {
          japanese: 'この本は面白いです。',
          vietnamese: 'Cuốn sách này thú vị.',
          english: 'This book is interesting.',
          type: 'main'
        },
        {
          japanese: 'この映画は面白くないです。',
          vietnamese: 'Bộ phim này không thú vị.',
          english: 'This movie is not interesting.',
          type: 'main'
        },
        {
          japanese: '昨日はとても楽しかったです。',
          vietnamese: 'Hôm qua rất vui.',
          english: 'Yesterday was very fun.',
          type: 'main'
        },
        {
          japanese: '値段は高くなかったです。',
          vietnamese: 'Giá không đắt.',
          english: 'The price was not expensive.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'な形容詞の活用',
      vietnamese: 'chia động tính từ đuôi な',
      english: 'na-adjective conjugation',
      type: 'main',
      explanation: 'Cách chia tính từ đuôi な (danh từ tính từ):\n・Hiện tại khẳng định: 〜です (便利です)\n・Hiện tại phủ định: 〜じゃないです (便利じゃないです)\n・Quá khứ khẳng định: 〜でした (便利でした)\n・Quá khứ phủ định: 〜じゃなかったです (便利じゃなかったです)',
      examples: [
        {
          japanese: 'この駅は便利です。',
          vietnamese: 'Ga này tiện lợi.',
          english: 'This station is convenient.',
          type: 'main'
        },
        {
          japanese: 'ここは静かじゃないです。',
          vietnamese: 'Đây không yên tĩnh.',
          english: 'This place is not quiet.',
          type: 'main'
        },
        {
          japanese: '昨日は暇でした。',
          vietnamese: 'Hôm qua tôi rảnh.',
          english: 'I was free yesterday.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜て、〜 (並列)',
      vietnamese: 'và, rồi (liệt kê)',
      english: '~, and ~ (listing)',
      type: 'main',
      explanation: 'Nối hai tính từ hoặc động từ để liệt kê nhiều tính chất hoặc hành động. て形được dùng để nối câu.',
      examples: [
        {
          japanese: 'この部屋は広くて、きれいです。',
          vietnamese: 'Căn phòng này rộng và đẹp.',
          english: 'This room is spacious and clean.',
          type: 'main'
        },
        {
          japanese: '映画を見て、ご飯を食べました。',
          vietnamese: 'Tôi xem phim và ăn cơm.',
          english: 'I watched a movie and ate a meal.',
          type: 'main'
        },
        {
          japanese: '東京は便利で、面白いです。',
          vietnamese: 'Tokyo tiện lợi và thú vị.',
          english: 'Tokyo is convenient and interesting.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜くて、〜 (理由)',
      vietnamese: 'vì ~, nên ~',
      english: 'because ~, ~',
      type: 'main',
      explanation: 'Diễn tả nguyên nhân, lý do bằng cách sử dụng て形của tính từ い. Câu sau là kết quả.',
      examples: [
        {
          japanese: '安くて、たくさん買いました。',
          vietnamese: 'Vì rẻ nên tôi mua nhiều.',
          english: 'Because it was cheap, I bought a lot.',
          type: 'main'
        },
        {
          japanese: '面白くて、最後まで読みました。',
          vietnamese: 'Vì hay nên tôi đọc đến hết.',
          english: 'Because it was interesting, I read to the end.',
          type: 'main'
        },
        {
          japanese: '暑くて、窓を開けました。',
          vietnamese: 'Vì nóng nên tôi mở cửa sổ.',
          english: 'Because it was hot, I opened the window.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てから、〜 (復習)',
      vietnamese: 'sau khi ~, thì ~ (ôn tập)',
      english: 'after ~, ~ (review)',
      type: 'additional',
      explanation: 'Diễn tả hành động tuần tự: làm xong việc đầu tiên rồi mới làm việc thứ hai.',
      examples: [
        {
          japanese: '映画を見てから、レストランに行きました。',
          vietnamese: 'Sau khi xem phim, tôi đến nhà hàng.',
          english: 'After watching the movie, I went to the restaurant.',
          type: 'main'
        },
        {
          japanese: '本を読んでから、寝ます。',
          vietnamese: 'Sau khi đọc sách, tôi đi ngủ.',
          english: 'After reading a book, I go to bed.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'あげる・もらう・くれる',
      vietnamese: 'cho và nhận',
      english: 'giving and receiving',
      type: 'additional',
      explanation: 'Ba động từ chỉ sự trao đổi đồ vật:\n・あげる: tôi cho người khác\n・もらう: tôi nhận từ người khác\n・くれる: người khác cho tôi',
      examples: [
        {
          japanese: '友達にプレゼントをあげました。',
          vietnamese: 'Tôi đã tặng quà cho bạn.',
          english: 'I gave a present to my friend.',
          type: 'main'
        },
        {
          japanese: '母からお金をもらいました。',
          vietnamese: 'Tôi nhận tiền từ mẹ.',
          english: 'I received money from my mother.',
          type: 'main'
        },
        {
          japanese: '友達が本をくれました。',
          vietnamese: 'Bạn tôi cho tôi cuốn sách.',
          english: 'My friend gave me a book.',
          type: 'additional'
        }
      ]
    }
  ]
};

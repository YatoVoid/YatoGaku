/**
 * N4 Core Lessons — Lesson 05
 * Desire, Ability and Potential Forms
 */

import type { LessonData } from '$lib/types';

export const LESSON_05_DATA: LessonData = {
  lessonNumber: 5,
  title: '願望と可能形 (Mong muốn và thể khả năng)',
  vocabulary: [
    // Desire & Want
    {
      japanese: '欲しい',
      kana: 'ほしい',
      vietnamese: 'muốn (có cái gì)',
      english: 'to want (something)',
      type: 'main',
      example: '新しい車が欲しいです。'
    },
    {
      japanese: '〜たい',
      kana: '〜たい',
      vietnamese: 'muốn (làm gì)',
      english: 'want to (do)',
      type: 'main',
      example: '日本に行きたいです。'
    },

    // Potential Verbs
    {
      japanese: '話せる',
      kana: 'はなせる',
      vietnamese: 'có thể nói',
      english: 'can speak',
      type: 'main',
      example: '日本語が話せます。'
    },
    {
      japanese: '読める',
      kana: 'よめる',
      vietnamese: 'có thể đọc',
      english: 'can read',
      type: 'main',
      example: '漢字が読めます。'
    },
    {
      japanese: '書ける',
      kana: 'かける',
      vietnamese: 'có thể viết',
      english: 'can write',
      type: 'main',
      example: 'ひらがなが書けます。'
    },
    {
      japanese: '食べられる',
      kana: 'たべられる',
      vietnamese: 'có thể ăn',
      english: 'can eat',
      type: 'main',
      example: '辛い物が食べられます。'
    },
    {
      japanese: '飲める',
      kana: 'のめる',
      vietnamese: 'có thể uống',
      english: 'can drink',
      type: 'main',
      example: 'お酒が飲めます。'
    },
    {
      japanese: '聞ける',
      kana: 'きける',
      vietnamese: 'có thể hỏi, có thể nghe',
      english: 'can ask, can hear',
      type: 'main',
      example: '先生に聞けます。'
    },
    {
      japanese: '見られる',
      kana: 'みられる',
      vietnamese: 'có thể xem',
      english: 'can see, can watch',
      type: 'main',
      example: 'ここから富士山が見られます。'
    },
    {
      japanese: '来られる',
      kana: 'こられる',
      vietnamese: 'có thể đến',
      english: 'can come',
      type: 'main',
      example: '明日来られますか。'
    },
    {
      japanese: '行ける',
      kana: 'いける',
      vietnamese: 'có thể đi',
      english: 'can go',
      type: 'main',
      example: '今日は行けません。'
    },

    // Trying & Attempting
    {
      japanese: '試す',
      kana: 'ためす',
      vietnamese: 'thử',
      english: 'to try, to test',
      type: 'main',
      example: '新しい方法を試します。'
    },
    {
      japanese: '挑戦する',
      kana: 'ちょうせんする',
      vietnamese: 'thử thách',
      english: 'to challenge',
      type: 'main',
      example: '新しいことに挑戦します。'
    },

    // Hoping & Wishing
    {
      japanese: '願う',
      kana: 'ねがう',
      vietnamese: 'ước, nguyện',
      english: 'to wish, to hope',
      type: 'main',
      example: '幸せを願います。'
    },
    {
      japanese: '期待する',
      kana: 'きたいする',
      vietnamese: 'kỳ vọng, mong đợi',
      english: 'to expect, to hope',
      type: 'main',
      example: 'いい結果を期待しています。'
    },

    // Understanding & Skills
    {
      japanese: '理解する',
      kana: 'りかいする',
      vietnamese: 'hiểu',
      english: 'to understand',
      type: 'main',
      example: '説明を理解しました。'
    },
    {
      japanese: '得意',
      kana: 'とくい',
      vietnamese: 'giỏi, có khiếu',
      english: 'good at',
      type: 'main',
      example: '数学が得意です。'
    },
    {
      japanese: '苦手',
      kana: 'にがて',
      vietnamese: 'không giỏi, yếu',
      english: 'poor at, weak at',
      type: 'main',
      example: '英語が苦手です。'
    },
    {
      japanese: '上手',
      kana: 'じょうず',
      vietnamese: 'giỏi, khéo léo',
      english: 'skillful, good at',
      type: 'main',
      example: '日本語が上手ですね。'
    },
    {
      japanese: '下手',
      kana: 'へた',
      vietnamese: 'kém, không giỏi',
      english: 'poor at, unskillful',
      type: 'main',
      example: '料理が下手です。'
    },

    // Trying Food & Experiences
    {
      japanese: '味',
      kana: 'あじ',
      vietnamese: 'vị',
      english: 'taste, flavor',
      type: 'main',
      example: 'いい味ですね。'
    },
    {
      japanese: '辛い',
      kana: 'からい',
      vietnamese: 'cay',
      english: 'spicy, hot',
      type: 'main',
      example: 'この料理は辛いです。'
    },
    {
      japanese: '甘い',
      kana: 'あまい',
      vietnamese: 'ngọt',
      english: 'sweet',
      type: 'main',
      example: 'このケーキは甘いです。'
    },
    {
      japanese: '酸っぱい',
      kana: 'すっぱい',
      vietnamese: 'chua',
      english: 'sour',
      type: 'main',
      example: 'レモンは酸っぱいです。'
    },
    {
      japanese: '苦い',
      kana: 'にがい',
      vietnamese: 'đắng',
      english: 'bitter',
      type: 'main',
      example: 'コーヒーは苦いです。'
    },
    {
      japanese: '塩辛い',
      kana: 'しおからい',
      vietnamese: 'mặn',
      english: 'salty',
      type: 'main',
      example: 'この料理は塩辛いです。'
    },

    // Food & Drink
    {
      japanese: 'お酒',
      kana: 'おさけ',
      vietnamese: 'rượu',
      english: 'alcohol, sake',
      type: 'main',
      example: 'お酒が飲めますか。'
    },
    {
      japanese: 'ビール',
      kana: 'ビール',
      vietnamese: 'bia',
      english: 'beer',
      type: 'main',
      example: 'ビールを飲みます。'
    },
    {
      japanese: 'ワイン',
      kana: 'ワイン',
      vietnamese: 'rượu vang',
      english: 'wine',
      type: 'main',
      example: '赤ワインが好きです。'
    },
    {
      japanese: '肉',
      kana: 'にく',
      vietnamese: 'thịt',
      english: 'meat',
      type: 'main',
      example: '肉が好きです。'
    },
    {
      japanese: '魚',
      kana: 'さかな',
      vietnamese: 'cá',
      english: 'fish',
      type: 'main',
      example: '魚を食べます。'
    },
    {
      japanese: '果物',
      kana: 'くだもの',
      vietnamese: 'trái cây',
      english: 'fruit',
      type: 'main',
      example: '果物が好きです。'
    },
    {
      japanese: 'りんご',
      kana: 'りんご',
      vietnamese: 'táo',
      english: 'apple',
      type: 'main',
      example: 'りんごを食べます。'
    },
    {
      japanese: 'バナナ',
      kana: 'バナナ',
      vietnamese: 'chuối',
      english: 'banana',
      type: 'main',
      example: 'バナナが好きです。'
    },

    // Activities & Hobbies
    {
      japanese: '趣味',
      kana: 'しゅみ',
      vietnamese: 'sở thích',
      english: 'hobby',
      type: 'main',
      example: '趣味は何ですか。'
    },
    {
      japanese: 'スポーツ',
      kana: 'スポーツ',
      vietnamese: 'thể thao',
      english: 'sports',
      type: 'main',
      example: 'スポーツが好きです。'
    },
    {
      japanese: '運動',
      kana: 'うんどう',
      vietnamese: 'vận động, tập thể dục',
      english: 'exercise',
      type: 'main',
      example: '毎日運動します。'
    },
    {
      japanese: 'サッカー',
      kana: 'サッカー',
      vietnamese: 'bóng đá',
      english: 'soccer',
      type: 'main',
      example: 'サッカーができます。'
    },
    {
      japanese: 'テニス',
      kana: 'テニス',
      vietnamese: 'quần vợt',
      english: 'tennis',
      type: 'main',
      example: 'テニスをします。'
    },
    {
      japanese: '水泳',
      kana: 'すいえい',
      vietnamese: 'bơi lội',
      english: 'swimming',
      type: 'main',
      example: '水泳が得意です。'
    },
    {
      japanese: '泳ぐ',
      kana: 'およぐ',
      vietnamese: 'bơi',
      english: 'to swim',
      type: 'main',
      example: '海で泳ぎました。'
    },
    {
      japanese: '登る',
      kana: 'のぼる',
      vietnamese: 'leo, treo',
      english: 'to climb',
      type: 'main',
      example: '山に登りました。'
    },
    {
      japanese: '弾く',
      kana: 'ひく',
      vietnamese: 'chơi (đàn)',
      english: 'to play (instrument)',
      type: 'main',
      example: 'ピアノが弾けます。'
    },
    {
      japanese: '歌う',
      kana: 'うたう',
      vietnamese: 'hát',
      english: 'to sing',
      type: 'main',
      example: '歌を歌います。'
    },
    {
      japanese: '踊る',
      kana: 'おどる',
      vietnamese: 'nhảy múa',
      english: 'to dance',
      type: 'main',
      example: '踊ることが好きです。'
    },
    {
      japanese: '描く',
      kana: 'かく',
      vietnamese: 'vẽ',
      english: 'to draw, to paint',
      type: 'main',
      example: '絵を描きます。'
    },
    {
      japanese: '撮る',
      kana: 'とる',
      vietnamese: 'chụp (ảnh)',
      english: 'to take (photo)',
      type: 'main',
      example: '写真を撮ります。'
    },

    // Instruments & Arts
    {
      japanese: 'ピアノ',
      kana: 'ピアノ',
      vietnamese: 'đàn piano',
      english: 'piano',
      type: 'main',
      example: 'ピアノが弾けます。'
    },
    {
      japanese: 'ギター',
      kana: 'ギター',
      vietnamese: 'đàn guitar',
      english: 'guitar',
      type: 'main',
      example: 'ギターを弾きます。'
    },
    {
      japanese: '歌',
      kana: 'うた',
      vietnamese: 'bài hát',
      english: 'song',
      type: 'main',
      example: '歌を歌います。'
    },
    {
      japanese: '絵',
      kana: 'え',
      vietnamese: 'tranh, hình vẽ',
      english: 'picture, drawing',
      type: 'main',
      example: '絵を描きます。'
    },

    // Places for Activities
    {
      japanese: 'プール',
      kana: 'プール',
      vietnamese: 'hồ bơi',
      english: 'swimming pool',
      type: 'main',
      example: 'プールで泳ぎます。'
    },
    {
      japanese: 'ジム',
      kana: 'ジム',
      vietnamese: 'phòng gym',
      english: 'gym',
      type: 'main',
      example: 'ジムで運動します。'
    },

    // Feelings & States
    {
      japanese: '嬉しい',
      kana: 'うれしい',
      vietnamese: 'vui, mừng',
      english: 'happy, glad',
      type: 'main',
      example: 'プレゼントをもらって嬉しいです。'
    },
    {
      japanese: '楽しみ',
      kana: 'たのしみ',
      vietnamese: 'mong chờ',
      english: 'looking forward to',
      type: 'main',
      example: '旅行が楽しみです。'
    },
    {
      japanese: '寂しい',
      kana: 'さびしい',
      vietnamese: 'cô đơn, buồn',
      english: 'lonely, sad',
      type: 'main',
      example: '一人で寂しいです。'
    },
    {
      japanese: '恥ずかしい',
      kana: 'はずかしい',
      vietnamese: 'xấu hổ, ngại',
      english: 'embarrassed, shy',
      type: 'main',
      example: '間違えて恥ずかしいです。'
    },
    {
      japanese: '怖い',
      kana: 'こわい',
      vietnamese: 'sợ',
      english: 'scary, frightening',
      type: 'main',
      example: 'ホラー映画は怖いです。'
    },

    // Abstract Nouns
    {
      japanese: '夢',
      kana: 'ゆめ',
      vietnamese: 'giấc mơ, ước mơ',
      english: 'dream',
      type: 'main',
      example: '夢は医者になることです。'
    },
    {
      japanese: '希望',
      kana: 'きぼう',
      vietnamese: 'hy vọng',
      english: 'hope',
      type: 'main',
      example: '希望があります。'
    },
    {
      japanese: '目標',
      kana: 'もくひょう',
      vietnamese: 'mục tiêu',
      english: 'goal, objective',
      type: 'main',
      example: '目標を達成しました。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'main',
      example: '経験があります。'
    },
    {
      japanese: '能力',
      kana: 'のうりょく',
      vietnamese: 'năng lực',
      english: 'ability, capability',
      type: 'main',
      example: '日本語の能力があります。'
    },
    {
      japanese: '才能',
      kana: 'さいのう',
      vietnamese: 'tài năng',
      english: 'talent',
      type: 'main',
      example: '音楽の才能があります。'
    },

    // Adjectives - Describing Things
    {
      japanese: '素晴らしい',
      kana: 'すばらしい',
      vietnamese: 'tuyệt vời',
      english: 'wonderful, magnificent',
      type: 'main',
      example: '素晴らしい景色です。'
    },
    {
      japanese: '素敵',
      kana: 'すてき',
      vietnamese: 'tuyệt vời, đẹp',
      english: 'lovely, wonderful',
      type: 'main',
      example: '素敵なプレゼントですね。'
    },
    {
      japanese: '最高',
      kana: 'さいこう',
      vietnamese: 'tuyệt nhất, tốt nhất',
      english: 'the best, supreme',
      type: 'main',
      example: '最高の日でした。'
    },
    {
      japanese: '完璧',
      kana: 'かんぺき',
      vietnamese: 'hoàn hảo',
      english: 'perfect',
      type: 'main',
      example: '完璧な答えです。'
    },
    {
      japanese: '特別',
      kana: 'とくべつ',
      vietnamese: 'đặc biệt',
      english: 'special',
      type: 'main',
      example: '特別な日です。'
    },

    // Degree & Comparison
    {
      japanese: 'もっと',
      kana: 'もっと',
      vietnamese: 'hơn nữa',
      english: 'more',
      type: 'main',
      example: 'もっと勉強したいです。'
    },
    {
      japanese: 'もう少し',
      kana: 'もうすこし',
      vietnamese: 'thêm một chút',
      english: 'a little more',
      type: 'main',
      example: 'もう少し待ってください。'
    },
    {
      japanese: '一番',
      kana: 'いちばん',
      vietnamese: 'nhất',
      english: 'most, number one',
      type: 'main',
      example: '日本語が一番好きです。'
    },
    {
      japanese: '最も',
      kana: 'もっとも',
      vietnamese: 'nhất (trang trọng)',
      english: 'most (formal)',
      type: 'additional',
      example: '最も大切なことです。'
    },

    // Question Words
    {
      japanese: 'どんな',
      kana: 'どんな',
      vietnamese: 'loại gì, như thế nào',
      english: 'what kind of',
      type: 'main',
      example: 'どんな音楽が好きですか。'
    },
    {
      japanese: 'どうして',
      kana: 'どうして',
      vietnamese: 'tại sao',
      english: 'why',
      type: 'main',
      example: 'どうして来ませんでしたか。'
    },

    // Expressions
    {
      japanese: 'ぜひ',
      kana: 'ぜひ',
      vietnamese: 'nhất định, непременно',
      english: 'by all means, definitely',
      type: 'main',
      example: 'ぜひ来てください。'
    },
    {
      japanese: 'できれば',
      kana: 'できれば',
      vietnamese: 'nếu có thể',
      english: 'if possible',
      type: 'main',
      example: 'できれば、手伝ってください。'
    }
  ],
  grammar: [
    {
      pattern: '〜たい',
      vietnamese: 'muốn ~',
      english: 'want to ~',
      type: 'main',
      explanation: 'Diễn tả mong muốn làm gì của bản thân. Cấu trúc: 動詞ます形-ます + たい/たいです。Phủ định: たくない/たくありません',
      examples: [
        {
          japanese: '日本に行きたいです。',
          vietnamese: 'Tôi muốn đến Nhật Bản.',
          english: 'I want to go to Japan.',
          type: 'main'
        },
        {
          japanese: '日本語を勉強したいです。',
          vietnamese: 'Tôi muốn học tiếng Nhật.',
          english: 'I want to study Japanese.',
          type: 'main'
        },
        {
          japanese: 'もう帰りたくないです。',
          vietnamese: 'Tôi không muốn về nữa.',
          english: 'I do not want to go home yet.',
          type: 'main'
        },
        {
          japanese: '何が食べたいですか。',
          vietnamese: 'Bạn muốn ăn gì?',
          english: 'What do you want to eat?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜が欲しい',
      vietnamese: 'muốn có ~',
      english: 'want ~ (thing)',
      type: 'main',
      explanation: 'Diễn tả muốn có vật gì đó. Cấu trúc: 名詞 + が欲しい/欲しいです。Phủ định: 欲しくない/欲しくありません',
      examples: [
        {
          japanese: '新しい車が欲しいです。',
          vietnamese: 'Tôi muốn có xe hơi mới.',
          english: 'I want a new car.',
          type: 'main'
        },
        {
          japanese: 'お金が欲しいです。',
          vietnamese: 'Tôi muốn có tiền.',
          english: 'I want money.',
          type: 'main'
        },
        {
          japanese: '何が欲しいですか。',
          vietnamese: 'Bạn muốn gì?',
          english: 'What do you want?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '可能形 (Potential Form)',
      vietnamese: 'thể khả năng',
      english: 'can ~, be able to ~',
      type: 'main',
      explanation: 'Diễn tả khả năng làm được việc gì. \nNhóm I: う段 → える段 (書く→書ける)\nNhóm II: る → られる (食べる→食べられる)\nNhóm III: する→できる, 来る→来られる\nTrợ từ đối tượng thay が cho を',
      examples: [
        {
          japanese: '日本語が話せます。',
          vietnamese: 'Tôi có thể nói tiếng Nhật.',
          english: 'I can speak Japanese.',
          type: 'main'
        },
        {
          japanese: '漢字が書けますか。',
          vietnamese: 'Bạn có thể viết chữ Hán không?',
          english: 'Can you write kanji?',
          type: 'main'
        },
        {
          japanese: '辛い物が食べられません。',
          vietnamese: 'Tôi không thể ăn đồ cay.',
          english: 'I cannot eat spicy food.',
          type: 'main'
        },
        {
          japanese: 'ここから富士山が見られます。',
          vietnamese: 'Từ đây có thể nhìn thấy núi Phú Sĩ.',
          english: 'You can see Mt. Fuji from here.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てみる',
      vietnamese: 'thử ~',
      english: 'try doing ~',
      type: 'main',
      explanation: 'Diễn tả hành động thử làm gì đó. Cấu trúc: 動詞て形 + みる/みます',
      examples: [
        {
          japanese: '寿司を食べてみました。',
          vietnamese: 'Tôi đã thử ăn sushi.',
          english: 'I tried eating sushi.',
          type: 'main'
        },
        {
          japanese: 'この服を着てみてもいいですか。',
          vietnamese: 'Tôi có thể thử mặc quần áo này không?',
          english: 'May I try on these clothes?',
          type: 'main'
        },
        {
          japanese: 'もう一度やってみます。',
          vietnamese: 'Tôi sẽ thử làm lại một lần nữa.',
          english: 'I will try doing it once more.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ことができる',
      vietnamese: 'có thể ~',
      english: 'can ~, be able to ~',
      type: 'main',
      explanation: 'Diễn tả khả năng làm được việc gì (khách quan hơn thể khả năng). Cấu trúc: 動詞辞書形 + ことができる',
      examples: [
        {
          japanese: 'ここで写真を撮ることができます。',
          vietnamese: 'Có thể chụp ảnh ở đây.',
          english: 'You can take photos here.',
          type: 'main'
        },
        {
          japanese: 'インターネットで予約することができます。',
          vietnamese: 'Có thể đặt trước qua internet.',
          english: 'You can make reservations on the internet.',
          type: 'main'
        },
        {
          japanese: '日本語で話すことができますか。',
          vietnamese: 'Bạn có thể nói bằng tiếng Nhật không?',
          english: 'Can you speak in Japanese?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜が上手だ/下手だ',
      vietnamese: 'giỏi ~ / kém ~',
      english: 'good at ~ / poor at ~',
      type: 'main',
      explanation: 'Diễn tả mức độ kỹ năng. 上手(じょうず)=giỏi, 下手(へた)=kém. Cấu trúc: 名詞 + が上手/下手',
      examples: [
        {
          japanese: '田中さんは日本語が上手です。',
          vietnamese: 'Anh Tanaka giỏi tiếng Nhật.',
          english: 'Mr. Tanaka is good at Japanese.',
          type: 'main'
        },
        {
          japanese: '私は料理が下手です。',
          vietnamese: 'Tôi kém về nấu ăn.',
          english: 'I am poor at cooking.',
          type: 'main'
        },
        {
          japanese: '歌が上手ですね。',
          vietnamese: 'Bạn hát giỏi nhé.',
          english: 'You are good at singing.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜が得意だ/苦手だ',
      vietnamese: 'giỏi ~ / không giỏi ~',
      english: 'good at ~ / weak at ~',
      type: 'main',
      explanation: 'Diễn tả khả năng chủ quan. 得意(とくい)=giỏi, có khiếu; 苦手(にがて)=yếu, không giỏi',
      examples: [
        {
          japanese: '数学が得意です。',
          vietnamese: 'Tôi giỏi toán.',
          english: 'I am good at mathematics.',
          type: 'main'
        },
        {
          japanese: '英語が苦手です。',
          vietnamese: 'Tôi không giỏi tiếng Anh.',
          english: 'I am weak at English.',
          type: 'main'
        },
        {
          japanese: 'スポーツが得意ですか。',
          vietnamese: 'Bạn có giỏi thể thao không?',
          english: 'Are you good at sports?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ほうがいい',
      vietnamese: 'nên ~',
      english: 'had better ~, should ~',
      type: 'main',
      explanation: 'Diễn tả lời khuyên. Cấu trúc: 動詞た形 + ほうがいい (khuyên nên làm); 動詞ない形 + ほうがいい (khuyên không nên làm)',
      examples: [
        {
          japanese: '早く寝たほうがいいですよ。',
          vietnamese: 'Bạn nên đi ngủ sớm.',
          english: 'You should go to bed early.',
          type: 'main'
        },
        {
          japanese: '薬を飲んだほうがいいです。',
          vietnamese: 'Bạn nên uống thuốc.',
          english: 'You should take medicine.',
          type: 'main'
        },
        {
          japanese: '食べ過ぎないほうがいいです。',
          vietnamese: 'Bạn không nên ăn quá nhiều.',
          english: 'You should not eat too much.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜より〜のほうが',
      vietnamese: '~ hơn ~',
      english: '~ is more ~ than ~',
      type: 'additional',
      explanation: 'So sánh hai đối tượng. Cấu trúc: A より B のほうが〜 (B hơn A)',
      examples: [
        {
          japanese: '犬より猫のほうが好きです。',
          vietnamese: 'Tôi thích mèo hơn chó.',
          english: 'I like cats more than dogs.',
          type: 'main'
        },
        {
          japanese: '車より電車のほうが便利です。',
          vietnamese: 'Tàu điện tiện hơn xe hơi.',
          english: 'Trains are more convenient than cars.',
          type: 'main'
        },
        {
          japanese: '夏より春のほうが好きです。',
          vietnamese: 'Tôi thích mùa xuân hơn mùa hè.',
          english: 'I like spring more than summer.',
          type: 'additional'
        }
      ]
    }
  ]
};

/**
 * N4 Core Lessons — Lesson 01
 * Daily Activities and Progressive Actions
 */

import type { LessonData } from '$lib/types';

export const LESSON_01_DATA: LessonData = {
  lessonNumber: 1,
  title: '日常活動と進行形 (Daily Activities and Progressive Form)',
  vocabulary: [
    // Daily Activities - Main Verbs
    {
      japanese: '起きる',
      kana: 'おきる',
      vietnamese: 'thức dậy, dậy',
      english: 'to wake up, to get up',
      type: 'main',
      example: '毎朝6時に起きます。'
    },
    {
      japanese: '寝る',
      kana: 'ねる',
      vietnamese: 'ngủ',
      english: 'to sleep, to go to bed',
      type: 'main',
      example: '昨日は11時に寝ました。'
    },
    {
      japanese: '着る',
      kana: 'きる',
      vietnamese: 'mặc (quần áo)',
      english: 'to wear, to put on',
      type: 'main',
      example: '今日は新しいシャツを着ています。'
    },
    {
      japanese: '脱ぐ',
      kana: 'ぬぐ',
      vietnamese: 'cởi (quần áo, giày)',
      english: 'to take off',
      type: 'main',
      example: '部屋に入る前に靴を脱ぎます。'
    },
    {
      japanese: '洗う',
      kana: 'あらう',
      vietnamese: 'rửa, giặt',
      english: 'to wash',
      type: 'main',
      example: '毎日顔を洗います。'
    },
    {
      japanese: '磨く',
      kana: 'みがく',
      vietnamese: 'đánh (răng), đánh bóng',
      english: 'to brush, to polish',
      type: 'main',
      example: '食べた後、歯を磨きます。'
    },
    {
      japanese: '浴びる',
      kana: 'あびる',
      vietnamese: 'tắm (vòi sen)',
      english: 'to take (a shower)',
      type: 'main',
      example: '朝シャワーを浴びます。'
    },
    {
      japanese: '入る',
      kana: 'はいる',
      vietnamese: 'vào, đi vào',
      english: 'to enter, to take (a bath)',
      type: 'main',
      example: '夜お風呂に入ります。'
    },
    {
      japanese: '出る',
      kana: 'でる',
      vietnamese: 'ra, đi ra',
      english: 'to go out, to leave',
      type: 'main',
      example: '7時に家を出ます。'
    },
    {
      japanese: '出かける',
      kana: 'でかける',
      vietnamese: 'ra ngoài, đi chơi',
      english: 'to go out',
      type: 'main',
      example: '友達と出かけます。'
    },
    {
      japanese: '帰る',
      kana: 'かえる',
      vietnamese: 'về, trở về',
      english: 'to return, to go home',
      type: 'main',
      example: '5時に家に帰ります。'
    },
    {
      japanese: '歩く',
      kana: 'あるく',
      vietnamese: 'đi bộ',
      english: 'to walk',
      type: 'main',
      example: '毎日30分歩いています。'
    },
    {
      japanese: '走る',
      kana: 'はしる',
      vietnamese: 'chạy',
      english: 'to run',
      type: 'main',
      example: '公園で走っています。'
    },
    {
      japanese: '座る',
      kana: 'すわる',
      vietnamese: 'ngồi',
      english: 'to sit',
      type: 'main',
      example: '椅子に座ってください。'
    },
    {
      japanese: '立つ',
      kana: 'たつ',
      vietnamese: 'đứng',
      english: 'to stand',
      type: 'main',
      example: 'バス停で立っています。'
    },
    {
      japanese: '待つ',
      kana: 'まつ',
      vietnamese: 'đợi, chờ',
      english: 'to wait',
      type: 'main',
      example: '友達を待っています。'
    },
    {
      japanese: '休む',
      kana: 'やすむ',
      vietnamese: 'nghỉ ngơi',
      english: 'to rest, to take a day off',
      type: 'main',
      example: '今日は会社を休みます。'
    },
    {
      japanese: '働く',
      kana: 'はたらく',
      vietnamese: 'làm việc',
      english: 'to work',
      type: 'main',
      example: '銀行で働いています。'
    },
    {
      japanese: '勉強する',
      kana: 'べんきょうする',
      vietnamese: 'học, học tập',
      english: 'to study',
      type: 'main',
      example: '毎日日本語を勉強しています。'
    },
    {
      japanese: '練習する',
      kana: 'れんしゅうする',
      vietnamese: 'luyện tập',
      english: 'to practice',
      type: 'main',
      example: '毎週ピアノを練習します。'
    },

    // Communication & Information
    {
      japanese: '話す',
      kana: 'はなす',
      vietnamese: 'nói, nói chuyện',
      english: 'to speak, to talk',
      type: 'main',
      example: '友達と話しています。'
    },
    {
      japanese: '聞く',
      kana: 'きく',
      vietnamese: 'nghe, hỏi',
      english: 'to listen, to ask',
      type: 'main',
      example: '音楽を聞いています。'
    },
    {
      japanese: '教える',
      kana: 'おしえる',
      vietnamese: 'dạy, chỉ',
      english: 'to teach, to tell',
      type: 'main',
      example: '先生が日本語を教えています。'
    },
    {
      japanese: '習う',
      kana: 'ならう',
      vietnamese: 'học (từ ai đó)',
      english: 'to learn',
      type: 'main',
      example: '田中さんに日本語を習っています。'
    },
    {
      japanese: '覚える',
      kana: 'おぼえる',
      vietnamese: 'nhớ, ghi nhớ',
      english: 'to memorize, to remember',
      type: 'main',
      example: '新しい漢字を覚えています。'
    },
    {
      japanese: '忘れる',
      kana: 'わすれる',
      vietnamese: 'quên',
      english: 'to forget',
      type: 'main',
      example: '名前を忘れてしまいました。'
    },
    {
      japanese: '思う',
      kana: 'おもう',
      vietnamese: 'nghĩ, cho rằng',
      english: 'to think',
      type: 'main',
      example: 'いい考えだと思います。'
    },
    {
      japanese: '知る',
      kana: 'しる',
      vietnamese: 'biết',
      english: 'to know',
      type: 'main',
      example: 'この人を知っています。'
    },

    // Eating & Drinking
    {
      japanese: '食べる',
      kana: 'たべる',
      vietnamese: 'ăn',
      english: 'to eat',
      type: 'main',
      example: '今朝ご飯を食べました。'
    },
    {
      japanese: '飲む',
      kana: 'のむ',
      vietnamese: 'uống',
      english: 'to drink',
      type: 'main',
      example: 'コーヒーを飲んでいます。'
    },
    {
      japanese: '作る',
      kana: 'つくる',
      vietnamese: 'làm, chế tạo',
      english: 'to make',
      type: 'main',
      example: '料理を作っています。'
    },
    {
      japanese: '料理する',
      kana: 'りょうりする',
      vietnamese: 'nấu ăn',
      english: 'to cook',
      type: 'main',
      example: '母は毎日料理します。'
    },

    // Shopping & Money
    {
      japanese: '買う',
      kana: 'かう',
      vietnamese: 'mua',
      english: 'to buy',
      type: 'main',
      example: 'スーパーで野菜を買います。'
    },
    {
      japanese: '売る',
      kana: 'うる',
      vietnamese: 'bán',
      english: 'to sell',
      type: 'main',
      example: 'この店は服を売っています。'
    },
    {
      japanese: '払う',
      kana: 'はらう',
      vietnamese: 'trả (tiền)',
      english: 'to pay',
      type: 'main',
      example: 'クレジットカードで払います。'
    },

    // Using & Possessing
    {
      japanese: '使う',
      kana: 'つかう',
      vietnamese: 'sử dụng, dùng',
      english: 'to use',
      type: 'main',
      example: '毎日パソコンを使っています。'
    },
    {
      japanese: '持つ',
      kana: 'もつ',
      vietnamese: 'cầm, giữ, có',
      english: 'to hold, to have',
      type: 'main',
      example: 'カバンを持っています。'
    },
    {
      japanese: '持っている',
      kana: 'もっている',
      vietnamese: 'có, sở hữu',
      english: 'to have, to possess',
      type: 'main',
      example: '車を持っていますか。'
    },

    // Communication Technology
    {
      japanese: '電話する',
      kana: 'でんわする',
      vietnamese: 'gọi điện thoại',
      english: 'to call',
      type: 'additional',
      example: '母に電話しました。'
    },
    {
      japanese: 'メールする',
      kana: 'メールする',
      vietnamese: 'gửi email',
      english: 'to email',
      type: 'additional',
      example: '先生にメールしました。'
    },

    // Nouns - Daily Items
    {
      japanese: '顔',
      kana: 'かお',
      vietnamese: 'mặt',
      english: 'face',
      type: 'main',
      example: '毎朝顔を洗います。'
    },
    {
      japanese: '歯',
      kana: 'は',
      vietnamese: 'răng',
      english: 'tooth, teeth',
      type: 'main',
      example: '食後に歯を磨きます。'
    },
    {
      japanese: '手',
      kana: 'て',
      vietnamese: 'tay',
      english: 'hand',
      type: 'main',
      example: '手を洗ってください。'
    },
    {
      japanese: '服',
      kana: 'ふく',
      vietnamese: 'quần áo',
      english: 'clothes',
      type: 'main',
      example: '新しい服を買いました。'
    },
    {
      japanese: 'シャツ',
      kana: 'シャツ',
      vietnamese: 'áo sơ mi',
      english: 'shirt',
      type: 'main',
      example: '白いシャツを着ています。'
    },
    {
      japanese: 'ズボン',
      kana: 'ズボン',
      vietnamese: 'quần dài',
      english: 'pants, trousers',
      type: 'additional',
      example: '黒いズボンを履いています。'
    },
    {
      japanese: '靴',
      kana: 'くつ',
      vietnamese: 'giày',
      english: 'shoes',
      type: 'main',
      example: '靴を脱いでください。'
    },
    {
      japanese: '眼鏡',
      kana: 'めがね',
      vietnamese: 'kính mắt',
      english: 'glasses',
      type: 'main',
      example: '眼鏡をかけています。'
    },

    // Time & Frequency
    {
      japanese: '毎日',
      kana: 'まいにち',
      vietnamese: 'mỗi ngày, hàng ngày',
      english: 'every day',
      type: 'main',
      example: '毎日日本語を勉強します。'
    },
    {
      japanese: '毎朝',
      kana: 'まいあさ',
      vietnamese: 'mỗi sáng',
      english: 'every morning',
      type: 'main',
      example: '毎朝コーヒーを飲みます。'
    },
    {
      japanese: '毎晩',
      kana: 'まいばん',
      vietnamese: 'mỗi tối',
      english: 'every night',
      type: 'main',
      example: '毎晩本を読みます。'
    },
    {
      japanese: '毎週',
      kana: 'まいしゅう',
      vietnamese: 'mỗi tuần',
      english: 'every week',
      type: 'additional',
      example: '毎週日曜日に映画を見ます。'
    },
    {
      japanese: '今',
      kana: 'いま',
      vietnamese: 'bây giờ',
      english: 'now',
      type: 'main',
      example: '今何をしていますか。'
    },
    {
      japanese: '最近',
      kana: 'さいきん',
      vietnamese: 'gần đây',
      english: 'recently, lately',
      type: 'additional',
      example: '最近忙しいです。'
    },

    // Places
    {
      japanese: '会社',
      kana: 'かいしゃ',
      vietnamese: 'công ty',
      english: 'company',
      type: 'main',
      example: '会社で働いています。'
    },
    {
      japanese: '銀行',
      kana: 'ぎんこう',
      vietnamese: 'ngân hàng',
      english: 'bank',
      type: 'main',
      example: '銀行で働いています。'
    },
    {
      japanese: '公園',
      kana: 'こうえん',
      vietnamese: 'công viên',
      english: 'park',
      type: 'main',
      example: '公園で走っています。'
    },
    {
      japanese: 'お風呂',
      kana: 'おふろ',
      vietnamese: 'bồn tắm, nhà tắm',
      english: 'bath',
      type: 'main',
      example: 'お風呂に入っています。'
    },

    // Additional Vocabulary
    {
      japanese: 'シャワー',
      kana: 'シャワー',
      vietnamese: 'vòi sen',
      english: 'shower',
      type: 'main',
      example: 'シャワーを浴びます。'
    },
    {
      japanese: 'カバン',
      kana: 'カバン',
      vietnamese: 'cặp, túi xách',
      english: 'bag',
      type: 'main',
      example: 'カバンを持っています。'
    },
    {
      japanese: 'ご飯',
      kana: 'ごはん',
      vietnamese: 'cơm, bữa ăn',
      english: 'rice, meal',
      type: 'main',
      example: 'ご飯を食べています。'
    },
    {
      japanese: '野菜',
      kana: 'やさい',
      vietnamese: 'rau',
      english: 'vegetables',
      type: 'main',
      example: '野菜を買いました。'
    },
    {
      japanese: '音楽',
      kana: 'おんがく',
      vietnamese: 'âm nhạc',
      english: 'music',
      type: 'main',
      example: '音楽を聞いています。'
    },
    {
      japanese: '考え',
      kana: 'かんがえ',
      vietnamese: 'suy nghĩ, ý tưởng',
      english: 'idea, thought',
      type: 'additional',
      example: 'いい考えですね。'
    },
    {
      japanese: '名前',
      kana: 'なまえ',
      vietnamese: 'tên',
      english: 'name',
      type: 'main',
      example: '名前を覚えています。'
    },
    {
      japanese: '漢字',
      kana: 'かんじ',
      vietnamese: 'chữ Hán',
      english: 'kanji',
      type: 'main',
      example: '漢字を勉強しています。'
    },

    // Adjectives & States
    {
      japanese: '忙しい',
      kana: 'いそがしい',
      vietnamese: 'bận rộn',
      english: 'busy',
      type: 'main',
      example: '最近忙しいです。'
    },
    {
      japanese: '新しい',
      kana: 'あたらしい',
      vietnamese: 'mới',
      english: 'new',
      type: 'main',
      example: '新しい靴を買いました。'
    },
    {
      japanese: '白い',
      kana: 'しろい',
      vietnamese: 'trắng',
      english: 'white',
      type: 'additional',
      example: '白いシャツを着ています。'
    },
    {
      japanese: '黒い',
      kana: 'くろい',
      vietnamese: 'đen',
      english: 'black',
      type: 'additional',
      example: '黒い靴を履いています。'
    }
  ],
  grammar: [
    {
      pattern: '〜ている (継続)',
      vietnamese: 'đang ~, đang trong quá trình ~',
      english: 'be ~ing (progressive)',
      type: 'main',
      explanation: 'Diễn tả hành động đang diễn ra tại thời điểm nói. Cấu trúc: Động từ て形 + いる/います',
      examples: [
        {
          japanese: '今、ご飯を食べています。',
          vietnamese: 'Bây giờ tôi đang ăn cơm.',
          english: 'I am eating now.',
          type: 'main'
        },
        {
          japanese: '友達と話しています。',
          vietnamese: 'Tôi đang nói chuyện với bạn.',
          english: 'I am talking with my friend.',
          type: 'main'
        },
        {
          japanese: '音楽を聞いています。',
          vietnamese: 'Tôi đang nghe nhạc.',
          english: 'I am listening to music.',
          type: 'main'
        },
        {
          japanese: '何をしていますか。',
          vietnamese: 'Bạn đang làm gì?',
          english: 'What are you doing?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ている (結果の状態)',
      vietnamese: 'đã ~ và giữ trạng thái đó',
      english: 'be ~ing (resultant state)',
      type: 'main',
      explanation: 'Diễn tả trạng thái sau khi hành động hoàn thành. Thường dùng với động từ chỉ sự thay đổi trạng thái.',
      examples: [
        {
          japanese: '眼鏡をかけています。',
          vietnamese: 'Tôi đang đeo kính.',
          english: 'I am wearing glasses.',
          type: 'main'
        },
        {
          japanese: '白いシャツを着ています。',
          vietnamese: 'Tôi đang mặc áo sơ mi trắng.',
          english: 'I am wearing a white shirt.',
          type: 'main'
        },
        {
          japanese: '田中さんを知っています。',
          vietnamese: 'Tôi biết anh Tanaka.',
          english: 'I know Mr. Tanaka.',
          type: 'main'
        },
        {
          japanese: '車を持っています。',
          vietnamese: 'Tôi có xe hơi.',
          english: 'I have a car.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ている (習慣)',
      vietnamese: 'thường ~, có thói quen ~',
      english: 'be ~ing (habitual action)',
      type: 'main',
      explanation: 'Diễn tả hành động được lặp lại thường xuyên, thói quen. Thường đi với các từ chỉ tần suất.',
      examples: [
        {
          japanese: '毎日日本語を勉強しています。',
          vietnamese: 'Tôi học tiếng Nhật mỗi ngày.',
          english: 'I study Japanese every day.',
          type: 'main'
        },
        {
          japanese: '銀行で働いています。',
          vietnamese: 'Tôi làm việc ở ngân hàng.',
          english: 'I work at a bank.',
          type: 'main'
        },
        {
          japanese: '最近、毎朝走っています。',
          vietnamese: 'Gần đây tôi chạy bộ mỗi sáng.',
          english: 'I have been running every morning recently.',
          type: 'main'
        }
      ]
    },
    {
      pattern: 'て形の作り方',
      vietnamese: 'cách làm thể て',
      english: 'how to make て-form',
      type: 'additional',
      explanation: 'Cách biến đổi động từ sang thể て:\n1) Nhóm I: う→って, く→いて, ぐ→いで, す→して, つ→って, ぬ→んで, ぶ→んで, む→んで, る→って\n2) Nhóm II: る→て\n3) Nhóm III: する→して, くる→きて',
      examples: [
        {
          japanese: '食べる → 食べて',
          vietnamese: 'ăn → đang ăn',
          english: 'eat → eating',
          type: 'main'
        },
        {
          japanese: '飲む → 飲んで',
          vietnamese: 'uống → đang uống',
          english: 'drink → drinking',
          type: 'main'
        },
        {
          japanese: '話す → 話して',
          vietnamese: 'nói → đang nói',
          english: 'speak → speaking',
          type: 'main'
        },
        {
          japanese: '書く → 書いて',
          vietnamese: 'viết → đang viết',
          english: 'write → writing',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てください',
      vietnamese: 'hãy ~, làm ơn ~',
      english: 'please ~',
      type: 'main',
      explanation: 'Diễn tả lời yêu cầu, nhờ vả một cách lịch sự. Cấu trúc: Động từ て形 + ください',
      examples: [
        {
          japanese: 'ここに座ってください。',
          vietnamese: 'Hãy ngồi đây.',
          english: 'Please sit here.',
          type: 'main'
        },
        {
          japanese: '靴を脱いでください。',
          vietnamese: 'Làm ơn cởi giày.',
          english: 'Please take off your shoes.',
          type: 'main'
        },
        {
          japanese: 'もう一度言ってください。',
          vietnamese: 'Làm ơn nói lại một lần nữa.',
          english: 'Please say it again.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜てから、〜',
      vietnamese: 'sau khi ~, thì ~',
      english: 'after ~, ~',
      type: 'main',
      explanation: 'Diễn tả hai hành động xảy ra tuần tự. Hành động đầu hoàn thành trước rồi mới đến hành động sau.',
      examples: [
        {
          japanese: '宿題をしてから、遊びます。',
          vietnamese: 'Sau khi làm bài tập về nhà, tôi sẽ chơi.',
          english: 'After doing homework, I will play.',
          type: 'main'
        },
        {
          japanese: 'ご飯を食べてから、歯を磨きます。',
          vietnamese: 'Sau khi ăn cơm, tôi đánh răng.',
          english: 'After eating, I brush my teeth.',
          type: 'main'
        },
        {
          japanese: 'シャワーを浴びてから、寝ます。',
          vietnamese: 'Sau khi tắm, tôi đi ngủ.',
          english: 'After taking a shower, I go to bed.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜と思います',
      vietnamese: 'tôi nghĩ rằng ~',
      english: 'I think that ~',
      type: 'additional',
      explanation: 'Diễn tả ý kiến, suy nghĩ của người nói. Trước と là câu thường thể (plain form).',
      examples: [
        {
          japanese: 'いい考えだと思います。',
          vietnamese: 'Tôi nghĩ đó là ý tưởng hay.',
          english: 'I think it is a good idea.',
          type: 'main'
        },
        {
          japanese: '明日は雨が降ると思います。',
          vietnamese: 'Tôi nghĩ ngày mai trời sẽ mưa.',
          english: 'I think it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: 'この仕事は難しいと思います。',
          vietnamese: 'Tôi nghĩ công việc này khó.',
          english: 'I think this work is difficult.',
          type: 'additional'
        }
      ]
    }
  ]
};

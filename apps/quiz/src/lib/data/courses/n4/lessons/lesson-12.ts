/**
 * N4 Core Lessons — Lesson 12: Potential Form
 * Ability and possibility expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_12_DATA: LessonData = {
  lessonNumber: 12,
  title: '可能形 (Thể khả năng)',
  vocabulary: [
    // Ability verbs
    {
      japanese: 'できる',
      kana: 'できる',
      vietnamese: 'có thể làm được',
      english: 'can do, to be able to',
      type: 'main',
      example: '日本語ができます。'
    },
    {
      japanese: '泳げる',
      kana: 'およげる',
      vietnamese: 'có thể bơi',
      english: 'can swim',
      type: 'main',
      example: '私は泳げます。'
    },
    {
      japanese: '書ける',
      kana: 'かける',
      vietnamese: 'có thể viết',
      english: 'can write',
      type: 'main',
      example: '漢字が書けます。'
    },
    {
      japanese: '読める',
      kana: 'よめる',
      vietnamese: 'có thể đọc',
      english: 'can read',
      type: 'main',
      example: 'ひらがなが読めます。'
    },
    {
      japanese: '話せる',
      kana: 'はなせる',
      vietnamese: 'có thể nói',
      english: 'can speak',
      type: 'main',
      example: '英語が話せます。'
    },
    {
      japanese: '聞ける',
      kana: 'きける',
      vietnamese: 'có thể nghe',
      english: 'can hear, can listen',
      type: 'main',
      example: '音楽が聞けます。'
    },
    {
      japanese: '見られる',
      kana: 'みられる',
      vietnamese: 'có thể xem',
      english: 'can see, can watch',
      type: 'main',
      example: 'この映画は見られますか。'
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
      japanese: '行ける',
      kana: 'いける',
      vietnamese: 'có thể đi',
      english: 'can go',
      type: 'main',
      example: '明日は行けません。'
    },
    {
      japanese: '来られる',
      kana: 'こられる',
      vietnamese: 'có thể đến',
      english: 'can come',
      type: 'main',
      example: 'パーティーに来られますか。'
    },
    {
      japanese: '使える',
      kana: 'つかえる',
      vietnamese: 'có thể sử dụng',
      english: 'can use',
      type: 'main',
      example: 'パソコンが使えます。'
    },

    // Skills and abilities
    {
      japanese: '運転',
      kana: 'うんてん',
      vietnamese: 'lái xe',
      english: 'driving',
      type: 'main',
      example: '車の運転ができます。'
    },
    {
      japanese: '料理',
      kana: 'りょうり',
      vietnamese: 'nấu ăn, món ăn',
      english: 'cooking, cuisine',
      type: 'main',
      example: '日本料理が作れます。'
    },
    {
      japanese: '楽器',
      kana: 'がっき',
      vietnamese: 'nhạc cụ',
      english: 'musical instrument',
      type: 'main',
      example: '楽器が弾けますか。'
    },
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
      example: 'ギターが弾けません。'
    },
    {
      japanese: 'スポーツ',
      kana: 'スポーツ',
      vietnamese: 'thể thao',
      english: 'sports',
      type: 'main',
      example: 'スポーツができますか。'
    },
    {
      japanese: 'サッカー',
      kana: 'サッカー',
      vietnamese: 'bóng đá',
      english: 'soccer, football',
      type: 'main',
      example: 'サッカーができます。'
    },
    {
      japanese: 'テニス',
      kana: 'テニス',
      vietnamese: 'tennis',
      english: 'tennis',
      type: 'main',
      example: 'テニスができません。'
    },
    {
      japanese: '野球',
      kana: 'やきゅう',
      vietnamese: 'bóng chày',
      english: 'baseball',
      type: 'main',
      example: '野球ができますか。'
    },

    // Languages
    {
      japanese: '日本語',
      kana: 'にほんご',
      vietnamese: 'tiếng Nhật',
      english: 'Japanese language',
      type: 'main',
      example: '日本語が話せます。'
    },
    {
      japanese: '英語',
      kana: 'えいご',
      vietnamese: 'tiếng Anh',
      english: 'English language',
      type: 'main',
      example: '英語が話せますか。'
    },
    {
      japanese: '中国語',
      kana: 'ちゅうごくご',
      vietnamese: 'tiếng Trung',
      english: 'Chinese language',
      type: 'main',
      example: '中国語が話せません。'
    },
    {
      japanese: '韓国語',
      kana: 'かんこくご',
      vietnamese: 'tiếng Hàn',
      english: 'Korean language',
      type: 'main',
      example: '韓国語が話せますか。'
    },
    {
      japanese: '外国語',
      kana: 'がいこくご',
      vietnamese: 'ngoại ngữ',
      english: 'foreign language',
      type: 'main',
      example: '外国語が話せます。'
    },

    // Possibility and conditions
    {
      japanese: '可能',
      kana: 'かのう',
      vietnamese: 'có thể, khả năng',
      english: 'possible, capability',
      type: 'main',
      example: 'それは可能です。'
    },
    {
      japanese: '不可能',
      kana: 'ふかのう',
      vietnamese: 'không thể',
      english: 'impossible',
      type: 'main',
      example: 'それは不可能です。'
    },
    {
      japanese: '能力',
      kana: 'のうりょく',
      vietnamese: 'năng lực',
      english: 'ability, capacity',
      type: 'main',
      example: '能力がありますか。'
    },
    {
      japanese: '上手',
      kana: 'じょうず',
      vietnamese: 'giỏi',
      english: 'skillful, good at',
      type: 'main',
      example: '料理が上手です。'
    },
    {
      japanese: '下手',
      kana: 'へた',
      vietnamese: 'kém',
      english: 'unskillful, poor at',
      type: 'main',
      example: '歌が下手です。'
    },
    {
      japanese: '得意',
      kana: 'とくい',
      vietnamese: 'giỏi, sở trường',
      english: 'strong point, good at',
      type: 'main',
      example: '数学が得意です。'
    },
    {
      japanese: '苦手',
      kana: 'にがて',
      vietnamese: 'yếu, không giỏi',
      english: 'weak point, poor at',
      type: 'main',
      example: '英語が苦手です。'
    },

    // Actions and activities
    {
      japanese: '習う',
      kana: 'ならう',
      vietnamese: 'học',
      english: 'to learn',
      type: 'main',
      example: 'ピアノを習っています。'
    },
    {
      japanese: '練習',
      kana: 'れんしゅう',
      vietnamese: 'luyện tập',
      english: 'practice',
      type: 'main',
      example: '毎日練習します。'
    },
    {
      japanese: '勉強',
      kana: 'べんきょう',
      vietnamese: 'học tập',
      english: 'study',
      type: 'main',
      example: '日本語を勉強しています。'
    },
    {
      japanese: '覚える',
      kana: 'おぼえる',
      vietnamese: 'nhớ, ghi nhớ',
      english: 'to memorize, to remember',
      type: 'main',
      example: '漢字を覚えます。'
    },
    {
      japanese: '忘れる',
      kana: 'わすれる',
      vietnamese: 'quên',
      english: 'to forget',
      type: 'main',
      example: '名前を忘れました。'
    },

    // Additional vocabulary
    {
      japanese: '試す',
      kana: 'ためす',
      vietnamese: 'thử',
      english: 'to try, to test',
      type: 'additional',
      example: 'やってみます。'
    },
    {
      japanese: '挑戦',
      kana: 'ちょうせん',
      vietnamese: 'thách thức',
      english: 'challenge',
      type: 'additional',
      example: '新しいことに挑戦します。'
    },
    {
      japanese: '努力',
      kana: 'どりょく',
      vietnamese: 'nỗ lực',
      english: 'effort',
      type: 'additional',
      example: '努力すれば、できます。'
    },
    {
      japanese: '頑張る',
      kana: 'がんばる',
      vietnamese: 'cố gắng',
      english: 'to do one\'s best',
      type: 'additional',
      example: '頑張ってください。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'additional',
      example: '諦めないでください。'
    },
    {
      japanese: '成功',
      kana: 'せいこう',
      vietnamese: 'thành công',
      english: 'success',
      type: 'additional',
      example: '成功しました。'
    },
    {
      japanese: '失敗',
      kana: 'しっぱい',
      vietnamese: 'thất bại',
      english: 'failure',
      type: 'additional',
      example: '失敗しても大丈夫です。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'additional',
      example: '経験があります。'
    },
    {
      japanese: '資格',
      kana: 'しかく',
      vietnamese: 'bằng cấp, chứng chỉ',
      english: 'qualification, license',
      type: 'additional',
      example: '運転免許の資格があります。'
    },
    {
      japanese: '免許',
      kana: 'めんきょ',
      vietnamese: 'giấy phép',
      english: 'license',
      type: 'additional',
      example: '運転免許を持っています。'
    },
    {
      japanese: '技術',
      kana: 'ぎじゅつ',
      vietnamese: 'kỹ thuật',
      english: 'technique, technology',
      type: 'additional',
      example: '技術があります。'
    },
    {
      japanese: '才能',
      kana: 'さいのう',
      vietnamese: 'tài năng',
      english: 'talent',
      type: 'additional',
      example: '才能があります。'
    },
    {
      japanese: '趣味',
      kana: 'しゅみ',
      vietnamese: 'sở thích',
      english: 'hobby',
      type: 'additional',
      example: '趣味は何ですか。'
    },
    {
      japanese: '特技',
      kana: 'とくぎ',
      vietnamese: 'kỹ năng đặc biệt',
      english: 'special skill',
      type: 'additional',
      example: '特技は料理です。'
    },
    {
      japanese: '弾く',
      kana: 'ひく',
      vietnamese: 'chơi (nhạc cụ dây)',
      english: 'to play (string instrument)',
      type: 'additional',
      example: 'ピアノを弾きます。'
    },
    {
      japanese: '吹く',
      kana: 'ふく',
      vietnamese: 'thổi (nhạc cụ)',
      english: 'to blow, to play (wind instrument)',
      type: 'additional',
      example: 'フルートを吹きます。'
    },
    {
      japanese: '歌う',
      kana: 'うたう',
      vietnamese: 'hát',
      english: 'to sing',
      type: 'additional',
      example: '歌が歌えます。'
    },
    {
      japanese: '踊る',
      kana: 'おどる',
      vietnamese: 'nhảy múa',
      english: 'to dance',
      type: 'additional',
      example: 'ダンスが踊れます。'
    },
    {
      japanese: '描く',
      kana: 'かく',
      vietnamese: 'vẽ',
      english: 'to draw, to paint',
      type: 'additional',
      example: '絵が描けます。'
    },
    {
      japanese: '作る',
      kana: 'つくる',
      vietnamese: 'làm, chế tạo',
      english: 'to make, to create',
      type: 'additional',
      example: '料理が作れます。'
    },

    // Supplementary
    {
      japanese: '水泳',
      kana: 'すいえい',
      vietnamese: 'bơi lội',
      english: 'swimming',
      type: 'supplementary',
      example: '水泳ができます。'
    },
    {
      japanese: 'バスケットボール',
      kana: 'バスケットボール',
      vietnamese: 'bóng rổ',
      english: 'basketball',
      type: 'supplementary',
      example: 'バスケットボールができます。'
    },
    {
      japanese: 'バレーボール',
      kana: 'バレーボール',
      vietnamese: 'bóng chuyền',
      english: 'volleyball',
      type: 'supplementary',
      example: 'バレーボールができます。'
    },
    {
      japanese: '卓球',
      kana: 'たっきゅう',
      vietnamese: 'bóng bàn',
      english: 'table tennis',
      type: 'supplementary',
      example: '卓球ができます。'
    },
    {
      japanese: 'ヴァイオリン',
      kana: 'ヴァイオリン',
      vietnamese: 'đàn violin',
      english: 'violin',
      type: 'supplementary',
      example: 'ヴァイオリンが弾けます。'
    },
    {
      japanese: 'フルート',
      kana: 'フルート',
      vietnamese: 'sáo flute',
      english: 'flute',
      type: 'supplementary',
      example: 'フルートが吹けます。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 81eee323d687b6ef
    {
      japanese: "褒めます",
      kana: "ほめます",
      vietnamese: "khen",
      english: "khen",
      type: "main",
      example: "先生に褒められました。\nSensei ni homeraremashita.\nTôi được thầy/cô khen."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 6c3a72313f2299be
    {
      japanese: "叱ります",
      kana: "しかります",
      vietnamese: "mắng, la",
      english: "mắng, la",
      type: "main",
      example: "母に叱られました。\nHaha ni shikararemashita.\nTôi bị mẹ mắng."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 0c21e268473dc562
    {
      japanese: "誘います",
      kana: "さそいます",
      vietnamese: "mời, rủ",
      english: "mời, rủ",
      type: "main",
      example: "友達を映画に誘います。\nTomodachi o eiga ni sasoimasu.\nTôi rủ bạn đi xem phim."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | a372a9752bdb4ae5
    {
      japanese: "招待します",
      kana: "しょうたいします",
      vietnamese: "mời",
      english: "mời",
      type: "main",
      example: "パーティーに招待されました。\nPaatii ni shoutai saremashita.\nTôi được mời đến bữa tiệc."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | c6c4a9348d655cb1
    {
      japanese: "頼みます",
      kana: "たのみます",
      vietnamese: "nhờ, yêu cầu",
      english: "nhờ, yêu cầu",
      type: "main",
      example: "友達に仕事を頼みます。\nTomodachi ni shigoto o tanomimasu.\nTôi nhờ bạn làm việc."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 03a8bde9ddbd2ac6
    {
      japanese: "注意します",
      kana: "ちゅういします",
      vietnamese: "chú ý, nhắc nhở, cảnh báo",
      english: "chú ý, nhắc nhở, cảnh báo",
      type: "main",
      example: "先生に注意されました。\nSensei ni chuui saremashita.\nTôi bị thầy/cô nhắc nhở."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 42a8640b297ae0ec
    {
      japanese: "盗ります",
      kana: "とります",
      vietnamese: "ăn trộm, lấy cắp",
      english: "ăn trộm, lấy cắp",
      type: "main",
      example: "財布を盗られました。\nSaifu o toraremashita.\nTôi bị lấy cắp ví."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | ee6a53113059db77
    {
      japanese: "踏みます",
      kana: "ふみます",
      vietnamese: "giẫm, giẫm lên",
      english: "giẫm, giẫm lên",
      type: "main",
      example: "足を踏まれました。\nAshi o fumaremashita.\nTôi bị giẫm lên chân."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | b8f1c111a3c4333b
    {
      japanese: "壊します",
      kana: "こわします",
      vietnamese: "phá, làm hỏng",
      english: "phá, làm hỏng",
      type: "main",
      example: "弟が時計を壊しました。\nOtouto ga tokei o kowashimashita.\nEm trai tôi làm hỏng đồng hồ."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 6c5dfc35d1a35b37
    {
      japanese: "汚します",
      kana: "よごします",
      vietnamese: "làm bẩn",
      english: "làm bẩn",
      type: "main",
      example: "服を汚しました。\nFuku o yogoshimashita.\nTôi làm bẩn quần áo."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 9327d830e320aa95
    {
      japanese: "行います",
      kana: "おこないます",
      vietnamese: "thực hiện, tiến hành",
      english: "thực hiện, tiến hành",
      type: "main",
      example: "会議を行います。\nKaigi o okonaimasu.\nTiến hành cuộc họp."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 4cfa3a36ede9b8c6
    {
      japanese: "輸出します",
      kana: "ゆしゅつします",
      vietnamese: "xuất khẩu",
      english: "xuất khẩu",
      type: "main",
      example: "日本は車を輸出しています。\nNihon wa kuruma o yushutsu shite imasu.\nNhật Bản đang xuất khẩu ô tô."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | c3782a28a6956e5c
    {
      japanese: "輸入します",
      kana: "ゆにゅうします",
      vietnamese: "nhập khẩu",
      english: "nhập khẩu",
      type: "main",
      example: "米を輸入します。\nKome o yunyuu shimasu.\nNhập khẩu gạo."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 54bb16d6d92a6278
    {
      japanese: "翻訳します",
      kana: "ほんやくします",
      vietnamese: "dịch, biên dịch",
      english: "dịch, biên dịch",
      type: "main",
      example: "本を英語に翻訳します。\nHon o eigo ni honyaku shimasu.\nDịch sách sang tiếng Anh."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 97271c8d9b95beed
    {
      japanese: "発明します",
      kana: "はつめいします",
      vietnamese: "phát minh",
      english: "phát minh",
      type: "main",
      example: "インスタントラーメンを発明しました。\nInsutanto raamen o hatsumei shimashita.\nĐã phát minh ra mì ăn liền."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 913955929ccdda06
    {
      japanese: "発見します",
      kana: "はっけんします",
      vietnamese: "phát hiện, tìm ra",
      english: "phát hiện, tìm ra",
      type: "main",
      example: "新しい星を発見しました。\nAtarashii hoshi o hakken shimashita.\nĐã phát hiện một ngôi sao mới."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 82d8bc51f93f4f48
    {
      japanese: "米",
      kana: "こめ",
      vietnamese: "gạo",
      english: "gạo",
      type: "main",
      example: "米を食べます。\nKome o tabemasu.\nTôi ăn cơm/gạo."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | ab4b299d294fbb39
    {
      japanese: "麦",
      kana: "むぎ",
      vietnamese: "lúa mạch",
      english: "lúa mạch",
      type: "main",
      example: "麦からビールを作ります。\nMugi kara biiru o tsukurimasu.\nLàm bia từ lúa mạch."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 0955135751937933
    {
      japanese: "石油",
      kana: "せきゆ",
      vietnamese: "dầu mỏ",
      english: "dầu mỏ",
      type: "main",
      example: "石油を輸入します。\nSekiyu o yunyuu shimasu.\nNhập khẩu dầu mỏ."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 11b74a6558d0e167
    {
      japanese: "原料",
      kana: "げんりょう",
      vietnamese: "nguyên liệu",
      english: "nguyên liệu",
      type: "main",
      example: "ラーメンの原料は小麦です。\nRaamen no genryou wa komugi desu.\nNguyên liệu của ramen là lúa mì."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 1c8eac7666154de8
    {
      japanese: "インスタントラーメン",
      kana: "インスタントラーメン",
      vietnamese: "mì ăn liền, mì gói",
      english: "mì ăn liền, mì gói",
      type: "main",
      example: "インスタントラーメンを食べます。\nInsutanto raamen o tabemasu.\nTôi ăn mì gói."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 2c5db3630e45d1ff
    {
      japanese: "デート",
      kana: "デート",
      vietnamese: "cuộc hẹn hò",
      english: "cuộc hẹn hò",
      type: "main",
      example: "日曜日にデートします。\nNichiyoubi ni deeto shimasu.\nChủ nhật tôi hẹn hò."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | af716f150fb15af0
    {
      japanese: "泥棒",
      kana: "どろぼう",
      vietnamese: "kẻ trộm",
      english: "kẻ trộm",
      type: "main",
      example: "どろぼうに財布を盗られました。\nDorobou ni saifu o toraremashita.\nTôi bị kẻ trộm lấy ví."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | deb83c8ae6913e3e
    {
      japanese: "警官",
      kana: "けいかん",
      vietnamese: "cảnh sát",
      english: "cảnh sát",
      type: "main",
      example: "警官に注意されました。\nKeikan ni chuui saremashita.\nTôi bị cảnh sát nhắc nhở."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | a5b83b9c1092c19d
    {
      japanese: "世界中",
      kana: "せかいじゅう",
      vietnamese: "khắp thế giới, toàn thế giới",
      english: "khắp thế giới, toàn thế giới",
      type: "main",
      example: "世界中で使われています。\nSekai juu de tsukawarete imasu.\nNó được dùng trên toàn thế giới."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 6b65035ed7506f2a
    {
      japanese: "～中",
      kana: "～じゅう",
      vietnamese: "khắp ~, toàn ~",
      english: "khắp ~, toàn ~",
      type: "main",
      example: "一日中勉強しました。\nIchinichi juu benkyou shimashita.\nTôi đã học cả ngày."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 3a3fabe7e939cabe
    {
      japanese: "一世紀",
      kana: "いっせいき",
      vietnamese: "một thế kỷ",
      english: "một thế kỷ",
      type: "main",
      example: "一世紀は100年です。\nIsseiki wa hyaku-nen desu.\nMột thế kỷ là 100 năm."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | fe2888eafc607533
    {
      japanese: "何語",
      kana: "なにご",
      vietnamese: "tiếng gì, ngôn ngữ nào",
      english: "tiếng gì, ngôn ngữ nào",
      type: "main",
      example: "これは何語ですか。\nKore wa nanigo desu ka.\nĐây là tiếng gì?"
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | d46fd7ee646bb5da
    {
      japanese: "だれか",
      kana: "だれか",
      vietnamese: "ai đó",
      english: "ai đó",
      type: "main",
      example: "だれか来ました。\nDareka kimashita.\nCó ai đó đã đến."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | ad45f7d77608291a
    {
      japanese: "よかったですね。",
      kana: "よかったですね。",
      vietnamese: "Hay quá nhỉ, vui quá nhỉ",
      english: "Hay quá nhỉ, vui quá nhỉ",
      type: "main",
      example: "合格しましたか。よかったですね。\nGoukaku shimashita ka. Yokatta desu ne.\nBạn đỗ rồi à. Hay quá nhỉ."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 2a47b41487d3b2f9
    {
      japanese: "オリンピック",
      kana: "オリンピック",
      vietnamese: "Olympic",
      english: "Olympic",
      type: "main",
      example: "オリンピックが行われます。\nOrinpikku ga okonawaremasu.\nOlympic được tổ chức."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | ad752427d3ea9181
    {
      japanese: "ワールドカップ",
      kana: "ワールドカップ",
      vietnamese: "World Cup",
      english: "World Cup",
      type: "main",
      example: "ワールドカップを見ます。\nWaarudo Kappu o mimasu.\nTôi xem World Cup."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 1a99c31c44c802d8
    {
      japanese: "東大寺",
      kana: "とうだいじ",
      vietnamese: "chùa Todaiji",
      english: "chùa Todaiji",
      type: "main",
      example: "東大寺へ行きました。\nToudaiji e ikimashita.\nTôi đã đi chùa Todaiji."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 796f3d1c1b49eb78
    {
      japanese: "大仏",
      kana: "だいぶつ",
      vietnamese: "tượng Phật lớn",
      english: "tượng Phật lớn",
      type: "main",
      example: "大仏を見ました。\nDaibutsu o mimashita.\nTôi đã xem tượng Phật lớn."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | c5d4b03e67f01316
    {
      japanese: "江戸時代",
      kana: "えどじだい",
      vietnamese: "thời Edo",
      english: "thời Edo",
      type: "main",
      example: "江戸時代に作られました。\nEdo jidai ni tsukuraremashita.\nNó được làm vào thời Edo."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | a05f23254ec0895f
    {
      japanese: "ポルトガル",
      kana: "ポルトガル",
      vietnamese: "Bồ Đào Nha",
      english: "Bồ Đào Nha",
      type: "main",
      example: "ポルトガルから来ました。\nPorutogaru kara kimashita.\nTôi đến từ Bồ Đào Nha."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 49dca90bca63b445
    {
      japanese: "サウジアラビア",
      kana: "サウジアラビア",
      vietnamese: "Ả-rập Xê-út",
      english: "Ả-rập Xê-út",
      type: "main",
      example: "サウジアラビアは石油を輸出しています。\nSaujiarabia wa sekiyu o yushutsu shite imasu.\nẢ-rập Xê-út xuất khẩu dầu mỏ."
    },
    // source: review_tu_vung_bai_37.md | 1. Từ vựng chính | 55dcdf682821bcbb
    {
      japanese: "ロシア",
      kana: "ロシア",
      vietnamese: "Nga",
      english: "Nga",
      type: "main",
      example: "ロシアへ行きたいです。\nRoshia e ikitai desu.\nTôi muốn đi Nga."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 91bdffa875a686b6
    {
      japanese: "皆様",
      kana: "みなさま",
      vietnamese: "quý vị, mọi người",
      english: "quý vị, mọi người",
      type: "supplementary",
      example: "皆様、こんにちは。\nMinasama, konnichiwa.\nXin chào quý vị."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 33910683633a7a92
    {
      japanese: "焼けます",
      kana: "やけます",
      vietnamese: "cháy, bị cháy",
      english: "cháy, bị cháy",
      type: "supplementary",
      example: "家が焼けました。\nIe ga yakemashita.\nNhà bị cháy."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 2689b802d14b5a48
    {
      japanese: "その後",
      kana: "そのあと",
      vietnamese: "sau đó",
      english: "sau đó",
      type: "supplementary",
      example: "その後、家へ帰りました。\nSono ato, ie e kaerimashita.\nSau đó tôi về nhà."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 40f1332f78dbc934
    {
      japanese: "世界遺産",
      kana: "せかいいさん",
      vietnamese: "di sản thế giới",
      english: "di sản thế giới",
      type: "supplementary",
      example: "東照宮は世界遺産です。\nToushouguu wa sekai isan desu.\nĐền Toshogu là di sản thế giới."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | bce83ecac491d8a1
    {
      japanese: "～の一つ",
      kana: "～のひとつ",
      vietnamese: "một trong những ~",
      english: "một trong những ~",
      type: "supplementary",
      example: "日本の有名なお寺の一つです。\nNihon no yuumei na otera no hitotsu desu.\nĐây là một trong những ngôi chùa nổi tiếng của Nhật."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 378e26f5f109de93
    {
      japanese: "金色",
      kana: "きんいろ",
      vietnamese: "màu vàng kim",
      english: "màu vàng kim",
      type: "supplementary",
      example: "金色の仏像です。\nKin’iro no butsuzou desu.\nĐó là tượng Phật màu vàng kim."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | ece714121703f93a
    {
      japanese: "本物",
      kana: "ほんもの",
      vietnamese: "đồ thật, hàng thật",
      english: "đồ thật, hàng thật",
      type: "supplementary",
      example: "これは本物です。\nKore wa honmono desu.\nĐây là đồ thật."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 9b5e2dcf1532132b
    {
      japanese: "金",
      kana: "きん",
      vietnamese: "vàng",
      english: "vàng",
      type: "supplementary",
      example: "金で作られています。\nKin de tsukurarete imasu.\nNó được làm bằng vàng."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 9113053b3cd27574
    {
      japanese: "一キロ",
      kana: "いっキロ",
      vietnamese: "một kilogram, một kilomet",
      english: "một kilogram, một kilomet",
      type: "supplementary",
      example: "金を一キロ使いました。\nKin o ikkiro tsukaimashita.\nĐã dùng một kg vàng."
    },
    // source: review_tu_vung_bai_37.md | 2. Từ vựng phần hội thoại | 92ed7a22d2906a10
    {
      japanese: "美しい",
      kana: "うつくしい",
      vietnamese: "đẹp",
      english: "đẹp",
      type: "supplementary",
      example: "美しい建物です。\nUtsukushii tatemono desu.\nĐó là một tòa nhà đẹp."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 05217906f9ab7ea1
    {
      japanese: "豪華な",
      kana: "ごうかな",
      vietnamese: "hào hoa, sang trọng",
      english: "hào hoa, sang trọng",
      type: "supplementary",
      example: "豪華なホテルに泊まりました。\nGouka na hoteru ni tomarimashita.\nTôi đã ở khách sạn sang trọng."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 95bb27eac11fb4da
    {
      japanese: "彫刻",
      kana: "ちょうこく",
      vietnamese: "điêu khắc",
      english: "điêu khắc",
      type: "supplementary",
      example: "木の彫刻を見ました。\nKi no choukoku o mimashita.\nTôi đã xem tượng điêu khắc bằng gỗ."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | d4503d7bf765bbe5
    {
      japanese: "言い伝え",
      kana: "いいつたえ",
      vietnamese: "truyền thuyết, lời truyền lại",
      english: "truyền thuyết, lời truyền lại",
      type: "supplementary",
      example: "古い言い伝えがあります。\nFurui iitsutae ga arimasu.\nCó một truyền thuyết cổ."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 6008bd460fd7161e
    {
      japanese: "眠ります",
      kana: "ねむります",
      vietnamese: "ngủ",
      english: "ngủ",
      type: "supplementary",
      example: "猫が眠っています。\nNeko ga nemutte imasu.\nCon mèo đang ngủ."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | dea3391f01c28d02
    {
      japanese: "彫ります",
      kana: "ほります",
      vietnamese: "khắc, chạm khắc",
      english: "khắc, chạm khắc",
      type: "supplementary",
      example: "木に猫を彫ります。\nKi ni neko o horimasu.\nKhắc hình con mèo lên gỗ."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 48a96b559dd0f265
    {
      japanese: "仲間",
      kana: "なかま",
      vietnamese: "bạn bè, đồng nghiệp, người cùng nhóm",
      english: "bạn bè, đồng nghiệp, người cùng nhóm",
      type: "supplementary",
      example: "仲間と働きます。\nNakama to hatarakimasu.\nTôi làm việc cùng đồng đội."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 5fb84642859ac414
    {
      japanese: "しかし",
      kana: "しかし",
      vietnamese: "nhưng, tuy nhiên",
      english: "nhưng, tuy nhiên",
      type: "supplementary",
      example: "しかし、時間がありません。\nShikashi, jikan ga arimasen.\nTuy nhiên, không có thời gian."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 8f98b2648817b808
    {
      japanese: "一生懸命",
      kana: "いっしょうけんめい",
      vietnamese: "hết sức, chăm chỉ, miệt mài",
      english: "hết sức, chăm chỉ, miệt mài",
      type: "supplementary",
      example: "一生懸命勉強します。\nIsshoukenmei benkyou shimasu.\nTôi học thật chăm chỉ."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | b9725dda321ef863
    {
      japanese: "ねずみ",
      kana: "ねずみ",
      vietnamese: "con chuột",
      english: "con chuột",
      type: "supplementary",
      example: "ねずみがいます。\nNezumi ga imasu.\nCó con chuột."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | e504b57d09e02f35
    {
      japanese: "一匹もいません",
      kana: "いっぴきもいません",
      vietnamese: "không có con nào cả",
      english: "không có con nào cả",
      type: "supplementary",
      example: "この部屋にはねずみが一匹もいません。\nKono heya ni wa nezumi ga ippiki mo imasen.\nTrong phòng này không có con chuột nào cả."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 24607855d121ad23
    {
      japanese: "東照宮",
      kana: "とうしょうぐう",
      vietnamese: "đền Toshogu",
      english: "đền Toshogu",
      type: "supplementary",
      example: "東照宮は日光にあります。\nToushouguu wa Nikkou ni arimasu.\nĐền Toshogu ở Nikko."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 51d6c5672f80814b
    {
      japanese: "眠り猫",
      kana: "ねむりねこ",
      vietnamese: "“mèo ngủ”, tác phẩm điêu khắc",
      english: "“mèo ngủ”, tác phẩm điêu khắc",
      type: "supplementary",
      example: "眠り猫は有名な彫刻です。\nNemuri Neko wa yuumei na choukoku desu.\nNemuri Neko là tác phẩm điêu khắc nổi tiếng."
    },
    // source: review_tu_vung_bai_37.md | 3. Từ vựng phần đọc hiểu | 7c87920f8aedb734
    {
      japanese: "左甚五郎",
      kana: "ひだりじんごろう",
      vietnamese: "tên một nhà điêu khắc nổi tiếng thời Edo",
      english: "tên một nhà điêu khắc nổi tiếng thời Edo",
      type: "supplementary",
      example: "左甚五郎が作ったと言われています。\nHidari Jingorou ga tsukutta to iwarete imasu.\nNgười ta nói Hidari Jingoro đã làm ra nó."
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 4e4b769b5bf73357
    {
      japanese: "先生に褒められます",
      kana: "先生に褒められます",
      vietnamese: "được thầy/cô khen",
      english: "được thầy/cô khen",
      type: "supplementary",
      example: "Dạng bị động của 褒めます / homemasu"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 38dd34e05d585e60
    {
      japanese: "母に叱られます",
      kana: "母に叱られます",
      vietnamese: "bị mẹ mắng",
      english: "bị mẹ mắng",
      type: "supplementary",
      example: "Bị động, người gây tác động đi với に"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | a8729b3543cc9b15
    {
      japanese: "パーティーに招待されます",
      kana: "パーティーに招待されます",
      vietnamese: "được mời đến tiệc",
      english: "được mời đến tiệc",
      type: "supplementary",
      example: "招待します → 招待されます"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | fdcca3669a33349d
    {
      japanese: "財布を盗られます",
      kana: "財布を盗られます",
      vietnamese: "bị lấy cắp ví",
      english: "bị lấy cắp ví",
      type: "supplementary",
      example: "Bị động gây phiền toái"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 3fbe6aadc8560846
    {
      japanese: "足を踏まれます",
      kana: "足を踏まれます",
      vietnamese: "bị giẫm lên chân",
      english: "bị giẫm lên chân",
      type: "supplementary",
      example: "Bị động gây khó chịu"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 60f9e751323ef6fe
    {
      japanese: "米を輸入します",
      kana: "米を輸入します",
      vietnamese: "nhập khẩu gạo",
      english: "nhập khẩu gạo",
      type: "supplementary",
      example: "輸入 = nhập khẩu"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 881f40682f6ef1bb
    {
      japanese: "車を輸出します",
      kana: "車を輸出します",
      vietnamese: "xuất khẩu ô tô",
      english: "xuất khẩu ô tô",
      type: "supplementary",
      example: "輸出 = xuất khẩu"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 4d3016d63ae9a56b
    {
      japanese: "発明されました",
      kana: "発明されました",
      vietnamese: "đã được phát minh",
      english: "đã được phát minh",
      type: "supplementary",
      example: "Dạng bị động của 発明します"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | 6bbfc29aeaa65da1
    {
      japanese: "発見されました",
      kana: "発見されました",
      vietnamese: "đã được phát hiện",
      english: "đã được phát hiện",
      type: "supplementary",
      example: "Dạng bị động của 発見します"
    },
    // source: review_tu_vung_bai_37.md | 4. Cụm cần nhớ trong bài 37 | ea074974f656d635
    {
      japanese: "世界中で使われています",
      kana: "世界中で使われています",
      vietnamese: "được dùng trên toàn thế giới",
      english: "được dùng trên toàn thế giới",
      type: "supplementary",
      example: "Bị động + trạng thái tiếp diễn"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 407d318c2806cc29
    {
      japanese: "注",
      kana: "チュウ / chuu",
      vietnamese: "Chú — chú ý, rót",
      english: "chú ý, rót",
      type: "kanji",
      example: "注意します / chuui shimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 1299ccaa918588fd
    {
      japanese: "意",
      kana: "イ / i",
      vietnamese: "Ý — ý, ý nghĩa",
      english: "ý, ý nghĩa",
      type: "kanji",
      example: "注意します / chuui shimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 4ae8374401605946
    {
      japanese: "行",
      kana: "コウ / kou, ギョウ / gyou",
      vietnamese: "Hành — đi, thực hiện",
      english: "đi, thực hiện",
      type: "kanji",
      example: "行います / okonaimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | d64e6fedda3351be
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, đưa ra",
      english: "ra, đưa ra",
      type: "kanji",
      example: "輸出します / yushutsu shimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 47824c74808e757e
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào, cho vào",
      english: "vào, cho vào",
      type: "kanji",
      example: "輸入します / yunyuu shimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 4e1e3829fa87d6c0
    {
      japanese: "発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — phát ra, phát triển",
      english: "phát ra, phát triển",
      type: "kanji",
      example: "発明 / hatsumei, 発見 / hakken"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 2d523665d9712d23
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "Kiến — nhìn, thấy",
      english: "nhìn, thấy",
      type: "kanji",
      example: "発見します / hakken shimasu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 0da498247616c3d1
    {
      japanese: "米",
      kana: "ベイ / bei, マイ / mai",
      vietnamese: "Mễ — gạo, Mỹ",
      english: "gạo, Mỹ",
      type: "kanji",
      example: "米 / kome"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 86aa21b61fb026f9
    {
      japanese: "石",
      kana: "セキ / seki",
      vietnamese: "Thạch — đá",
      english: "đá",
      type: "kanji",
      example: "石油 / sekiyu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 48bfcd9de997a3d5
    {
      japanese: "油",
      kana: "ユ / yu",
      vietnamese: "Du — dầu",
      english: "dầu",
      type: "kanji",
      example: "石油 / sekiyu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 91614f6b810a43cf
    {
      japanese: "世",
      kana: "セ / se, セイ / sei",
      vietnamese: "Thế — đời, thế giới",
      english: "đời, thế giới",
      type: "kanji",
      example: "世界 / sekai, 世紀 / seiki"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 2e9b58674ae34da8
    {
      japanese: "界",
      kana: "カイ / kai",
      vietnamese: "Giới — ranh giới, thế giới",
      english: "ranh giới, thế giới",
      type: "kanji",
      example: "世界 / sekai"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 458ad72c5c10df5a
    {
      japanese: "中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — trong, giữa, toàn",
      english: "trong, giữa, toàn",
      type: "kanji",
      example: "世界中 / sekai juu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | b14f3132a0842d80
    {
      japanese: "一",
      kana: "イチ / ichi",
      vietnamese: "Nhất — một",
      english: "một",
      type: "kanji",
      example: "一世紀 / isseiki, 一つ / hitotsu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | ba2a69fe2fdaf407
    {
      japanese: "何",
      kana: "カ / ka",
      vietnamese: "Hà — gì",
      english: "gì",
      type: "kanji",
      example: "何語 / nanigo"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | aacecddffa4ed8d5
    {
      japanese: "語",
      kana: "ゴ / go",
      vietnamese: "Ngữ — ngôn ngữ, lời nói",
      english: "ngôn ngữ, lời nói",
      type: "kanji",
      example: "何語 / nanigo"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 1f262c2a4bc54329
    {
      japanese: "東",
      kana: "トウ / tou",
      vietnamese: "Đông — phía đông",
      english: "phía đông",
      type: "kanji",
      example: "東大寺 / Toudaiji, 東照宮 / Toushouguu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 3db26f394d54e8e8
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — lớn",
      english: "lớn",
      type: "kanji",
      example: "大仏 / Daibutsu, 東大寺 / Toudaiji"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 92d78d3ea4450836
    {
      japanese: "寺",
      kana: "ジ / ji",
      vietnamese: "Tự — chùa",
      english: "chùa",
      type: "kanji",
      example: "東大寺 / Toudaiji"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | c0051421e0c274d9
    {
      japanese: "仏",
      kana: "ブツ / butsu",
      vietnamese: "Phật — Phật",
      english: "Phật",
      type: "kanji",
      example: "大仏 / Daibutsu"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 5b55192548b5dac7
    {
      japanese: "時",
      kana: "ジ / ji",
      vietnamese: "Thời — thời gian",
      english: "thời gian",
      type: "kanji",
      example: "江戸時代 / Edo jidai"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 835f1d419301951a
    {
      japanese: "代",
      kana: "ダイ / dai",
      vietnamese: "Đại — thời đại, thay thế",
      english: "thời đại, thay thế",
      type: "kanji",
      example: "江戸時代 / Edo jidai"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 8e37e4564cb9f57d
    {
      japanese: "金",
      kana: "キン / kin",
      vietnamese: "Kim — vàng, tiền",
      english: "vàng, tiền",
      type: "kanji",
      example: "金 / kin, 金色 / kin’iro"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 8c0da01492b30380
    {
      japanese: "色",
      kana: "ショク / shoku, シキ / shiki",
      vietnamese: "Sắc — màu sắc",
      english: "màu sắc",
      type: "kanji",
      example: "金色 / kin’iro"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | ecefb2e6773b5a10
    {
      japanese: "本",
      kana: "ホン / hon",
      vietnamese: "Bản — gốc, sách, thật",
      english: "gốc, sách, thật",
      type: "kanji",
      example: "本物 / honmono"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 5f936bc3f90c5fcf
    {
      japanese: "物",
      kana: "ブツ / butsu, モツ / motsu",
      vietnamese: "Vật — vật, đồ vật",
      english: "vật, đồ vật",
      type: "kanji",
      example: "本物 / honmono"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | 2923d629851e43ff
    {
      japanese: "美",
      kana: "ビ / bi",
      vietnamese: "Mỹ — đẹp",
      english: "đẹp",
      type: "kanji",
      example: "美しい / utsukushii"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | a76f6ce7668ac86a
    {
      japanese: "言",
      kana: "ゲン / gen, ゴン / gon",
      vietnamese: "Ngôn — nói, lời",
      english: "nói, lời",
      type: "kanji",
      example: "言い伝え / iitsutae"
    },
    // source: review_tu_vung_bai_37.md | 6. Kanji N5–N4 cần học kỹ | ebd66c2414b767c9
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Sinh — sống, sinh ra",
      english: "sống, sinh ra",
      type: "kanji",
      example: "一生懸命 / isshoukenmei"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c76d7cb5f709230c
    {
      japanese: "注意",
      kana: "チュウ / chuu",
      vietnamese: "Chú — 注 = chú ý/rót; 意 = ý",
      english: "注 = chú ý/rót; 意 = ý",
      type: "kanji",
      example: "注意"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 96478c6f86b7a0db
    {
      japanese: "注意",
      kana: "イ / i",
      vietnamese: "Ý — 注 = chú ý; 意 = ý",
      english: "注 = chú ý; 意 = ý",
      type: "kanji",
      example: "注意"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 604790868a4e484e
    {
      japanese: "意味",
      kana: "イ / i",
      vietnamese: "Ý — 意 = ý; 味 = vị/nghĩa",
      english: "意 = ý; 味 = vị/nghĩa",
      type: "kanji",
      example: "意味"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5b54ca9654427e69
    {
      japanese: "行う",
      kana: "おこな.う / okonau",
      vietnamese: "Hành — 行 = thực hiện",
      english: "行 = thực hiện",
      type: "kanji",
      example: "行う"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f9c9d4a793fbb6a3
    {
      japanese: "行く",
      kana: "い.く / iku",
      vietnamese: "Hành — 行 = đi",
      english: "行 = đi",
      type: "kanji",
      example: "行く"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3d33f2560c4e73f5
    {
      japanese: "輸出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — 輸 = vận chuyển; 出 = ra",
      english: "輸 = vận chuyển; 出 = ra",
      type: "kanji",
      example: "輸出"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d60a48dea87848b5
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1870cb38b46f87c6
    {
      japanese: "輸入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 輸 = vận chuyển; 入 = vào",
      english: "輸 = vận chuyển; 入 = vào",
      type: "kanji",
      example: "輸入"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e37d515a9979e913
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = vào",
      english: "入 = vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c2d003152a17c00d
    {
      japanese: "発明",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 発 = phát ra; 明 = sáng/tỏ",
      english: "発 = phát ra; 明 = sáng/tỏ",
      type: "kanji",
      example: "発明"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d66900f641c766cf
    {
      japanese: "発見",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 発 = phát ra; 見 = thấy",
      english: "発 = phát ra; 見 = thấy",
      type: "kanji",
      example: "発見"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d8a85f8284141e6a
    {
      japanese: "発見",
      kana: "ケン / ken",
      vietnamese: "Kiến — 発 = phát ra; 見 = thấy",
      english: "発 = phát ra; 見 = thấy",
      type: "kanji",
      example: "発見"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a269000a09a672d5
    {
      japanese: "見る",
      kana: "み.る / miru",
      vietnamese: "Kiến — 見 = nhìn",
      english: "見 = nhìn",
      type: "kanji",
      example: "見る"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 95e6e4c8fdf1a60a
    {
      japanese: "米",
      kana: "こめ / kome",
      vietnamese: "Mễ — 米 = gạo",
      english: "米 = gạo",
      type: "kanji",
      example: "米"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b773297cb902f1c8
    {
      japanese: "石油",
      kana: "セキ / seki",
      vietnamese: "Thạch — 石 = đá; 油 = dầu",
      english: "石 = đá; 油 = dầu",
      type: "kanji",
      example: "石油"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f9c24e348001a6b3
    {
      japanese: "石",
      kana: "いし / ishi",
      vietnamese: "Thạch — 石 = đá",
      english: "石 = đá",
      type: "kanji",
      example: "石"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 788eb30d8a038dff
    {
      japanese: "石油",
      kana: "ユ / yu",
      vietnamese: "Du — 石 = đá; 油 = dầu",
      english: "石 = đá; 油 = dầu",
      type: "kanji",
      example: "石油"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 82fe019bc0e82237
    {
      japanese: "世界",
      kana: "セ / se",
      vietnamese: "Thế — 世 = đời/thế; 界 = ranh giới",
      english: "世 = đời/thế; 界 = ranh giới",
      type: "kanji",
      example: "世界"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9064382c9d0c0dc2
    {
      japanese: "世紀",
      kana: "セイ / sei",
      vietnamese: "Thế — 世 = thế; 紀 = kỷ",
      english: "世 = thế; 紀 = kỷ",
      type: "kanji",
      example: "世紀"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8c0c2adcd6b3016a
    {
      japanese: "世界",
      kana: "カイ / kai",
      vietnamese: "Giới — 世 = thế; 界 = giới",
      english: "世 = thế; 界 = giới",
      type: "kanji",
      example: "世界"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 36f97aa1dcaf75d9
    {
      japanese: "世界中",
      kana: "チュウ / chuu/juu",
      vietnamese: "Trung — 世界 = thế giới; 中 = khắp/toàn",
      english: "世界 = thế giới; 中 = khắp/toàn",
      type: "kanji",
      example: "世界中"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 135d9740b9a19f80
    {
      japanese: "中",
      kana: "なか / naka",
      vietnamese: "Trung — 中 = bên trong",
      english: "中 = bên trong",
      type: "kanji",
      example: "中"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ddbd1f2a8be74cd4
    {
      japanese: "一つ",
      kana: "ひと.つ / hitotsu",
      vietnamese: "Nhất — 一 = một",
      english: "一 = một",
      type: "kanji",
      example: "一つ"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1271dba6f67edee0
    {
      japanese: "一世紀",
      kana: "イチ / ichi",
      vietnamese: "Nhất — 一 = một; 世紀 = thế kỷ",
      english: "一 = một; 世紀 = thế kỷ",
      type: "kanji",
      example: "一世紀"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 418ac1457a97e4fb
    {
      japanese: "何語",
      kana: "なに / nani, なん / nan",
      vietnamese: "Hà — 何 = gì; 語 = ngôn ngữ",
      english: "何 = gì; 語 = ngôn ngữ",
      type: "kanji",
      example: "何語"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | eacec76d4a84ddbb
    {
      japanese: "何語",
      kana: "ゴ / go",
      vietnamese: "Ngữ — 何 = gì; 語 = ngôn ngữ",
      english: "何 = gì; 語 = ngôn ngữ",
      type: "kanji",
      example: "何語"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 108137724fb8da30
    {
      japanese: "日本語",
      kana: "ゴ / go",
      vietnamese: "Ngữ — 日本 = Nhật Bản; 語 = tiếng",
      english: "日本 = Nhật Bản; 語 = tiếng",
      type: "kanji",
      example: "日本語"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6436293496f36f46
    {
      japanese: "東大寺",
      kana: "トウ / tou",
      vietnamese: "Đông — 東 = đông; 大 = lớn; 寺 = chùa",
      english: "東 = đông; 大 = lớn; 寺 = chùa",
      type: "kanji",
      example: "東大寺"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4d1442f05f332476
    {
      japanese: "東",
      kana: "ひがし / higashi",
      vietnamese: "Đông — 東 = phía đông",
      english: "東 = phía đông",
      type: "kanji",
      example: "東"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 549495c2cfccb3c8
    {
      japanese: "大仏",
      kana: "ダイ / dai",
      vietnamese: "Đại — 大 = lớn; 仏 = Phật",
      english: "大 = lớn; 仏 = Phật",
      type: "kanji",
      example: "大仏"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1575d42246eeba35
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 61db18703c096453
    {
      japanese: "寺",
      kana: "てら / tera",
      vietnamese: "Tự — 寺 = chùa",
      english: "寺 = chùa",
      type: "kanji",
      example: "寺"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5276d65f87ee527e
    {
      japanese: "大仏",
      kana: "ブツ / butsu",
      vietnamese: "Phật — 大 = lớn; 仏 = Phật",
      english: "大 = lớn; 仏 = Phật",
      type: "kanji",
      example: "大仏"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0a56e245b4506a17
    {
      japanese: "時代",
      kana: "ジ / ji",
      vietnamese: "Thời — 時 = thời; 代 = đại",
      english: "時 = thời; 代 = đại",
      type: "kanji",
      example: "時代"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 08b1e616951daae6
    {
      japanese: "時",
      kana: "とき / toki",
      vietnamese: "Thời — 時 = thời gian",
      english: "時 = thời gian",
      type: "kanji",
      example: "時"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 507895414c020b20
    {
      japanese: "時代",
      kana: "ダイ / dai",
      vietnamese: "Đại — 時 = thời; 代 = đại",
      english: "時 = thời; 代 = đại",
      type: "kanji",
      example: "時代"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c5b7c767a0d0d9d9
    {
      japanese: "金色",
      kana: "キン / kin",
      vietnamese: "Kim — 金 = vàng; 色 = màu",
      english: "金 = vàng; 色 = màu",
      type: "kanji",
      example: "金色"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4194233beec8a908
    {
      japanese: "金色",
      kana: "いろ / iro",
      vietnamese: "Sắc — 金 = vàng; 色 = màu",
      english: "金 = vàng; 色 = màu",
      type: "kanji",
      example: "金色"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 494ad06bd381de12
    {
      japanese: "本物",
      kana: "ホン / hon",
      vietnamese: "Bản — 本 = thật/gốc; 物 = vật",
      english: "本 = thật/gốc; 物 = vật",
      type: "kanji",
      example: "本物"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 33b900b91030fa71
    {
      japanese: "本物",
      kana: "もの / mono",
      vietnamese: "Vật — 本 = thật/gốc; 物 = vật",
      english: "本 = thật/gốc; 物 = vật",
      type: "kanji",
      example: "本物"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 29c0e36dbbdd63cf
    {
      japanese: "物",
      kana: "もの / mono",
      vietnamese: "Vật — 物 = đồ vật",
      english: "物 = đồ vật",
      type: "kanji",
      example: "物"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 59ccca405a02709f
    {
      japanese: "美しい",
      kana: "うつく.しい / utsukushii",
      vietnamese: "Mỹ — 美 = đẹp",
      english: "美 = đẹp",
      type: "kanji",
      example: "美しい"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 336964da2c616cdf
    {
      japanese: "言い伝え",
      kana: "い.う / iu",
      vietnamese: "Ngôn — 言う = nói; 伝え = truyền lại",
      english: "言う = nói; 伝え = truyền lại",
      type: "kanji",
      example: "言い伝え"
    },
    // source: review_tu_vung_bai_37.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7d21c47d3889ca81
    {
      japanese: "一生",
      kana: "ショウ / shou",
      vietnamese: "Sinh — 一 = một; 生 = đời",
      english: "一 = một; 生 = đời",
      type: "kanji",
      example: "一生"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '可能形 (Potential form)',
      vietnamese: 'thể khả năng',
      english: 'can do, able to do',
      type: 'main',
      explanation: 'Diễn tả khả năng làm điều gì đó. Nhóm 1: ます→える. Nhóm 2: ます→られる. Nhóm 3: する→できる, 来る→来られる.',
      examples: [
        {
          japanese: '私は泳げます。',
          vietnamese: 'Tôi có thể bơi.',
          english: 'I can swim.',
          type: 'main'
        },
        {
          japanese: '漢字が書けます。',
          vietnamese: 'Tôi có thể viết kanji.',
          english: 'I can write kanji.',
          type: 'main'
        },
        {
          japanese: '日本語が話せます。',
          vietnamese: 'Tôi có thể nói tiếng Nhật.',
          english: 'I can speak Japanese.',
          type: 'main'
        },
        {
          japanese: '明日は来られません。',
          vietnamese: 'Ngày mai tôi không thể đến.',
          english: 'I can\'t come tomorrow.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ことができる',
      vietnamese: 'có thể ~',
      english: 'can do ~, able to do ~',
      type: 'main',
      explanation: 'Cách diễn đạt khả năng lịch sự hơn. Dùng động từ thể từ điển + ことができる.',
      examples: [
        {
          japanese: '日本語を話すことができます。',
          vietnamese: 'Tôi có thể nói tiếng Nhật.',
          english: 'I can speak Japanese.',
          type: 'main'
        },
        {
          japanese: 'ピアノを弾くことができます。',
          vietnamese: 'Tôi có thể chơi piano.',
          english: 'I can play the piano.',
          type: 'main'
        },
        {
          japanese: 'ここで写真を撮ることができますか。',
          vietnamese: 'Ở đây có thể chụp ảnh không?',
          english: 'Can I take pictures here?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜が + 可能形',
      vietnamese: '~ có thể (trợ từ が)',
      english: '~ can (particle が)',
      type: 'main',
      explanation: 'Với động từ khả năng, đối tượng thường dùng trợ từ が thay vì を. Có thể dùng cả hai nhưng が tự nhiên hơn.',
      examples: [
        {
          japanese: '英語が話せます。',
          vietnamese: 'Tôi có thể nói tiếng Anh.',
          english: 'I can speak English.',
          type: 'main'
        },
        {
          japanese: '辛い物が食べられません。',
          vietnamese: 'Tôi không thể ăn đồ cay.',
          english: 'I can\'t eat spicy food.',
          type: 'main'
        },
        {
          japanese: 'お酒が飲めますか。',
          vietnamese: 'Bạn có thể uống rượu không?',
          english: 'Can you drink alcohol?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜上手/下手',
      vietnamese: 'giỏi / kém',
      english: 'good at / bad at',
      type: 'main',
      explanation: 'Diễn tả mức độ thành thạo. 上手だ: giỏi. 下手だ: kém. Dùng với danh từ + が.',
      examples: [
        {
          japanese: '料理が上手です。',
          vietnamese: 'Giỏi nấu ăn.',
          english: 'Good at cooking.',
          type: 'main'
        },
        {
          japanese: '日本語が上手ですね。',
          vietnamese: 'Bạn giỏi tiếng Nhật nhỉ.',
          english: 'You\'re good at Japanese.',
          type: 'main'
        },
        {
          japanese: '歌が下手です。',
          vietnamese: 'Hát kém.',
          english: 'Bad at singing.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜得意/苦手',
      vietnamese: 'sở trường / yếu kém',
      english: 'strong point / weak point',
      type: 'main',
      explanation: 'Diễn tả khả năng chủ quan. 得意: giỏi, sở trường. 苦手: không giỏi, yếu.',
      examples: [
        {
          japanese: '数学が得意です。',
          vietnamese: 'Toán là sở trường của tôi.',
          english: 'I\'m good at math.',
          type: 'main'
        },
        {
          japanese: 'スポーツは苦手です。',
          vietnamese: 'Tôi không giỏi thể thao.',
          english: 'I\'m not good at sports.',
          type: 'main'
        },
        {
          japanese: '何が得意ですか。',
          vietnamese: 'Bạn giỏi gì?',
          english: 'What are you good at?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '見える / 聞こえる',
      vietnamese: 'nhìn thấy / nghe thấy',
      english: 'can see / can hear (naturally)',
      type: 'additional',
      explanation: 'Khả năng tự nhiên, không phải học được. 見える: nhìn thấy. 聞こえる: nghe thấy.',
      examples: [
        {
          japanese: 'あそこに富士山が見えます。',
          vietnamese: 'Nhìn thấy núi Phú Sĩ ở đằng kia.',
          english: 'Mt. Fuji can be seen over there.',
          type: 'main'
        },
        {
          japanese: '音楽が聞こえます。',
          vietnamese: 'Nghe thấy âm nhạc.',
          english: 'Music can be heard.',
          type: 'main'
        },
        {
          japanese: '声が聞こえません。',
          vietnamese: 'Không nghe thấy giọng nói.',
          english: 'I can\'t hear your voice.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜やすい / 〜にくい',
      vietnamese: 'dễ ~ / khó ~',
      english: 'easy to ~ / hard to ~',
      type: 'additional',
      explanation: 'Diễn tả độ dễ/khó của hành động. Dùng với ます形 + やすい/にくい.',
      examples: [
        {
          japanese: 'この本は読みやすいです。',
          vietnamese: 'Quyển sách này dễ đọc.',
          english: 'This book is easy to read.',
          type: 'main'
        },
        {
          japanese: 'この字は読みにくいです。',
          vietnamese: 'Chữ này khó đọc.',
          english: 'This character is hard to read.',
          type: 'main'
        },
        {
          japanese: 'この靴は歩きやすいです。',
          vietnamese: 'Đôi giày này dễ đi.',
          english: 'These shoes are easy to walk in.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ようになる',
      vietnamese: 'trở nên có thể ~',
      english: 'to become able to ~',
      type: 'additional',
      explanation: 'Diễn tả sự thay đổi khả năng theo thời gian. Dùng với động từ thể từ điển hoặc thể phủ định + ようになる.',
      examples: [
        {
          japanese: '日本語が話せるようになりました。',
          vietnamese: 'Tôi đã có thể nói tiếng Nhật rồi.',
          english: 'I became able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: '泳げるようになりたいです。',
          vietnamese: 'Tôi muốn trở nên có thể bơi.',
          english: 'I want to become able to swim.',
          type: 'main'
        },
        {
          japanese: '漢字が読めるようになりました。',
          vietnamese: 'Tôi đã có thể đọc kanji rồi.',
          english: 'I became able to read kanji.',
          type: 'additional'
        }
      ]
    }
  ]
};

/**
 * N4 Core Lessons — Lesson 25
 * Focus: N4 Comprehensive Review
 */

import type { LessonData } from '$lib/types';

export const LESSON_25_DATA: LessonData = {
  lessonNumber: 25,
  title: 'N4総復習 (Tổng ôn tập N4)',
  vocabulary: [
    // Essential N4 verbs review
    {
      japanese: '頑張る（がんばる）',
      kana: 'がんばる',
      vietnamese: 'cố gắng',
      english: 'to do one\'s best',
      type: 'main',
      example: '試験に向けて頑張ります。'
    },
    {
      japanese: '諦める（あきらめる）',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'main',
      example: '諦めないでください。'
    },
    {
      japanese: '困る（こまる）',
      kana: 'こまる',
      vietnamese: 'gặp khó khăn',
      english: 'to be troubled',
      type: 'main',
      example: '質問がなくて困っています。'
    },
    {
      japanese: '助ける（たすける）',
      kana: 'たすける',
      vietnamese: 'giúp đỡ',
      english: 'to help/save',
      type: 'main',
      example: '友達を助けました。'
    },
    {
      japanese: '守る（まもる）',
      kana: 'まもる',
      vietnamese: 'bảo vệ, tuân thủ',
      english: 'to protect/obey',
      type: 'main',
      example: 'ルールを守ってください。'
    },
    {
      japanese: '破る（やぶる）',
      kana: 'やぶる',
      vietnamese: 'phá vỡ, xé',
      english: 'to break/tear',
      type: 'main',
      example: '約束を破りました。'
    },
    {
      japanese: '直す（なおす）',
      kana: 'なおす',
      vietnamese: 'sửa',
      english: 'to fix/correct',
      type: 'main',
      example: '間違いを直してください。'
    },
    {
      japanese: '壊す（こわす）',
      kana: 'こわす',
      vietnamese: 'phá hỏng',
      english: 'to break (something)',
      type: 'main',
      example: 'コップを壊してしまいました。'
    },
    {
      japanese: '壊れる（こわれる）',
      kana: 'こわれる',
      vietnamese: 'bị hỏng',
      english: 'to break (itself)',
      type: 'main',
      example: 'パソコンが壊れました。'
    },
    {
      japanese: '捨てる（すてる）',
      kana: 'すてる',
      vietnamese: 'vứt bỏ',
      english: 'to throw away',
      type: 'main',
      example: 'ゴミを捨ててください。'
    },
    {
      japanese: '拾う（ひろう）',
      kana: 'ひろう',
      vietnamese: 'nhặt',
      english: 'to pick up',
      type: 'main',
      example: '財布を拾いました。'
    },
    {
      japanese: '探す（さがす）',
      kana: 'さがす',
      vietnamese: 'tìm kiếm',
      english: 'to search/look for',
      type: 'main',
      example: '鍵を探しています。'
    },
    {
      japanese: '見つける（みつける）',
      kana: 'みつける',
      vietnamese: 'tìm thấy',
      english: 'to find',
      type: 'main',
      example: '鍵を見つけました。'
    },
    {
      japanese: '見つかる（みつかる）',
      kana: 'みつかる',
      vietnamese: 'được tìm thấy',
      english: 'to be found',
      type: 'main',
      example: '鍵が見つかりました。'
    },
    {
      japanese: '失くす（なくす）',
      kana: 'なくす',
      vietnamese: 'làm mất',
      english: 'to lose',
      type: 'main',
      example: '財布を失くしました。'
    },
    // Important N4 adjectives
    {
      japanese: '優しい（やさしい）',
      kana: 'やさしい',
      vietnamese: 'dịu dàng, dễ',
      english: 'kind/gentle/easy',
      type: 'main',
      example: '優しい先生です。'
    },
    {
      japanese: '厳しい（きびしい）',
      kana: 'きびしい',
      vietnamese: 'nghiêm khắc',
      english: 'strict/harsh',
      type: 'main',
      example: '厳しい先生です。'
    },
    {
      japanese: '正しい（ただしい）',
      kana: 'ただしい',
      vietnamese: 'đúng',
      english: 'correct/right',
      type: 'main',
      example: '正しい答えです。'
    },
    {
      japanese: '珍しい（めずらしい）',
      kana: 'めずらしい',
      vietnamese: 'hiếm',
      english: 'rare/unusual',
      type: 'main',
      example: '珍しい花ですね。'
    },
    {
      japanese: '恥ずかしい（はずかしい）',
      kana: 'はずかしい',
      vietnamese: 'xấu hổ',
      english: 'embarrassed/shy',
      type: 'main',
      example: '恥ずかしくて言えません。'
    },
    {
      japanese: '悔しい（くやしい）',
      kana: 'くやしい',
      vietnamese: 'tiếc nuối, ân hận',
      english: 'regrettable/vexing',
      type: 'main',
      example: '負けて悔しいです。'
    },
    {
      japanese: '嬉しい（うれしい）',
      kana: 'うれしい',
      vietnamese: 'vui',
      english: 'happy/glad',
      type: 'main',
      example: 'プレゼントをもらって嬉しいです。'
    },
    {
      japanese: '悲しい（かなしい）',
      kana: 'かなしい',
      vietnamese: 'buồn',
      english: 'sad',
      type: 'main',
      example: '悲しい知らせを聞きました。'
    },
    {
      japanese: '怖い（こわい）',
      kana: 'こわい',
      vietnamese: 'sợ',
      english: 'scary/frightening',
      type: 'main',
      example: 'ホラー映画は怖いです。'
    },
    {
      japanese: '可笑しい（おかしい）',
      kana: 'おかしい',
      vietnamese: 'buồn cười, kỳ lạ',
      english: 'funny/strange',
      type: 'main',
      example: 'おかしな話ですね。'
    },
    // Important N4 na-adjectives
    {
      japanese: '真面目（まじめ）',
      kana: 'まじめ',
      vietnamese: 'nghiêm túc',
      english: 'serious/earnest',
      type: 'main',
      example: '真面目な学生です。'
    },
    {
      japanese: '不真面目（ふまじめ）',
      kana: 'ふまじめ',
      vietnamese: 'không nghiêm túc',
      english: 'not serious',
      type: 'main',
      example: '不真面目な態度です。'
    },
    {
      japanese: '丁寧（ていねい）',
      kana: 'ていねい',
      vietnamese: 'lịch sự, cẩn thận',
      english: 'polite/careful',
      type: 'main',
      example: '丁寧な説明をありがとうございます。'
    },
    {
      japanese: '親切（しんせつ）',
      kana: 'しんせつ',
      vietnamese: 'tử tế',
      english: 'kind',
      type: 'main',
      example: '親切な人です。'
    },
    {
      japanese: '失礼（しつれい）',
      kana: 'しつれい',
      vietnamese: 'thất lễ',
      english: 'rude/impolite',
      type: 'main',
      example: '失礼な態度です。'
    },
    {
      japanese: '素直（すなお）',
      kana: 'すなお',
      vietnamese: 'ngay thẳng, ngoan',
      english: 'obedient/honest',
      type: 'main',
      example: '素直な子供です。'
    },
    {
      japanese: '正直（しょうじき）',
      kana: 'しょうじき',
      vietnamese: 'thành thật',
      english: 'honest',
      type: 'main',
      example: '正直に言ってください。'
    },
    {
      japanese: '自由（じゆう）',
      kana: 'じゆう',
      vietnamese: 'tự do',
      english: 'free/freedom',
      type: 'main',
      example: '自由な時間があります。'
    },
    {
      japanese: '平和（へいわ）',
      kana: 'へいわ',
      vietnamese: 'hòa bình',
      english: 'peace/peaceful',
      type: 'main',
      example: '平和な世界を願います。'
    },
    // Important N4 nouns
    {
      japanese: '将来（しょうらい）',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '将来の夢は何ですか。'
    },
    {
      japanese: '過去（かこ）',
      kana: 'かこ',
      vietnamese: 'quá khứ',
      english: 'past',
      type: 'main',
      example: '過去のことは忘れましょう。'
    },
    {
      japanese: '現在（げんざい）',
      kana: 'げんざい',
      vietnamese: 'hiện tại',
      english: 'present',
      type: 'main',
      example: '現在の状況を説明します。'
    },
    {
      japanese: '最近（さいきん）',
      kana: 'さいきん',
      vietnamese: 'gần đây',
      english: 'recently',
      type: 'main',
      example: '最近忙しいです。'
    },
    {
      japanese: '以前（いぜん）',
      kana: 'いぜん',
      vietnamese: 'trước đây',
      english: 'before/previously',
      type: 'main',
      example: '以前住んでいた町です。'
    },
    {
      japanese: '以後（いご）',
      kana: 'いご',
      vietnamese: 'sau đó',
      english: 'after/since',
      type: 'main',
      example: 'それ以後会っていません。'
    },
    {
      japanese: '人生（じんせい）',
      kana: 'じんせい',
      vietnamese: 'cuộc đời',
      english: 'life',
      type: 'main',
      example: '人生は短いです。'
    },
    {
      japanese: '世界（せかい）',
      kana: 'せかい',
      vietnamese: 'thế giới',
      english: 'world',
      type: 'main',
      example: '世界中を旅行したいです。'
    },
    {
      japanese: '社会（しゃかい）',
      kana: 'しゃかい',
      vietnamese: 'xã hội',
      english: 'society',
      type: 'main',
      example: '社会に貢献したいです。'
    },
    // Additional important vocabulary
    {
      japanese: '態度（たいど）',
      kana: 'たいど',
      vietnamese: 'thái độ',
      english: 'attitude',
      type: 'additional',
      example: '良い態度で接します。'
    },
    {
      japanese: '表情（ひょうじょう）',
      kana: 'ひょうじょう',
      vietnamese: 'biểu cảm, nét mặt',
      english: 'facial expression',
      type: 'additional',
      example: '悲しい表情をしています。'
    },
    {
      japanese: '印象（いんしょう）',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'additional',
      example: '良い印象を受けました。'
    },
    {
      japanese: '感想（かんそう）',
      kana: 'かんそう',
      vietnamese: 'cảm tưởng',
      english: 'impression/thoughts',
      type: 'additional',
      example: '映画の感想を聞かせてください。'
    },
    {
      japanese: '意識（いしき）',
      kana: 'いしき',
      vietnamese: 'ý thức',
      english: 'consciousness',
      type: 'additional',
      example: '環境意識を持ちましょう。'
    },
    {
      japanese: '無意識（むいしき）',
      kana: 'むいしき',
      vietnamese: 'vô thức',
      english: 'unconscious',
      type: 'additional',
      example: '無意識にやってしまいました。'
    },
    {
      japanese: '興味（きょうみ）',
      kana: 'きょうみ',
      vietnamese: 'sự quan tâm',
      english: 'interest',
      type: 'additional',
      example: '日本文化に興味があります。'
    },
    {
      japanese: '趣味（しゅみ）',
      kana: 'しゅみ',
      vietnamese: 'sở thích',
      english: 'hobby',
      type: 'additional',
      example: '趣味は写真を撮ることです。'
    },
    {
      japanese: '夢（ゆめ）',
      kana: 'ゆめ',
      vietnamese: 'giấc mơ, ước mơ',
      english: 'dream',
      type: 'additional',
      example: '将来の夢は医者になることです。'
    },
    {
      japanese: '希望（きぼう）',
      kana: 'きぼう',
      vietnamese: 'hy vọng',
      english: 'hope',
      type: 'additional',
      example: '希望を持ち続けます。'
    },
    {
      japanese: '失望（しつぼう）',
      kana: 'しつぼう',
      vietnamese: 'thất vọng',
      english: 'disappointment',
      type: 'additional',
      example: '結果に失望しました。'
    },
    {
      japanese: '努力（どりょく）',
      kana: 'どりょく',
      vietnamese: 'nỗ lực',
      english: 'effort',
      type: 'additional',
      example: '努力すれば成功します。'
    },
    {
      japanese: '苦労（くろう）',
      kana: 'くろう',
      vietnamese: 'vất vả',
      english: 'hardship/trouble',
      type: 'additional',
      example: '色々苦労しました。'
    },
    {
      japanese: '工夫（くふう）',
      kana: 'くふう',
      vietnamese: 'sáng kiến',
      english: 'device/ingenuity',
      type: 'additional',
      example: '工夫して問題を解決しました。'
    },
    {
      japanese: '才能（さいのう）',
      kana: 'さいのう',
      vietnamese: 'tài năng',
      english: 'talent/ability',
      type: 'additional',
      example: '音楽の才能があります。'
    },
    {
      japanese: '技術（ぎじゅつ）',
      kana: 'ぎじゅつ',
      vietnamese: 'kỹ thuật',
      english: 'technique/technology',
      type: 'additional',
      example: '新しい技術を学びます。'
    },
    {
      japanese: '技能（ぎのう）',
      kana: 'ぎのう',
      vietnamese: 'kỹ năng',
      english: 'skill',
      type: 'additional',
      example: '技能を向上させます。'
    },
    {
      japanese: '実力（じつりょく）',
      kana: 'じつりょく',
      vietnamese: 'thực lực',
      english: 'actual ability',
      type: 'additional',
      example: '実力を発揮します。'
    },
    {
      japanese: '性質（せいしつ）',
      kana: 'せいしつ',
      vietnamese: 'tính chất',
      english: 'nature/property',
      type: 'additional',
      example: 'この物質の性質を調べます。'
    },
    {
      japanese: '性格（せいかく）',
      kana: 'せいかく',
      vietnamese: 'tính cách',
      english: 'personality',
      type: 'additional',
      example: '明るい性格です。'
    },
    // Supplementary vocabulary
    {
      japanese: '幸せ（しあわせ）',
      kana: 'しあわせ',
      vietnamese: 'hạnh phúc',
      english: 'happiness',
      type: 'supplementary',
      example: '幸せな人生を送りたいです。'
    },
    {
      japanese: '不幸（ふこう）',
      kana: 'ふこう',
      vietnamese: 'bất hạnh',
      english: 'unhappiness/misfortune',
      type: 'supplementary',
      example: '不幸な出来事でした。'
    },
    {
      japanese: '運命（うんめい）',
      kana: 'うんめい',
      vietnamese: 'số phận',
      english: 'fate/destiny',
      type: 'supplementary',
      example: 'これは運命だと思います。'
    },
    {
      japanese: '奇跡（きせき）',
      kana: 'きせき',
      vietnamese: 'kỳ tích',
      english: 'miracle',
      type: 'supplementary',
      example: '奇跡が起こりました。'
    },
    {
      japanese: '感動（かんどう）',
      kana: 'かんどう',
      vietnamese: 'cảm động',
      english: 'impression/emotion',
      type: 'supplementary',
      example: '映画に感動しました。'
    },
    {
      japanese: '感謝（かんしゃ）',
      kana: 'かんしゃ',
      vietnamese: 'biết ơn',
      english: 'gratitude/thanks',
      type: 'supplementary',
      example: 'ご支援に感謝します。'
    },
    {
      japanese: '尊敬（そんけい）',
      kana: 'そんけい',
      vietnamese: 'tôn kính',
      english: 'respect',
      type: 'supplementary',
      example: '先生を尊敬しています。'
    },
    {
      japanese: '信頼（しんらい）',
      kana: 'しんらい',
      vietnamese: 'tin cậy',
      english: 'trust/confidence',
      type: 'supplementary',
      example: '信頼できる人です。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | d7f2d75b0fe96142
    {
      japanese: "参ります",
      kana: "まいります",
      vietnamese: "đi, đến — khiêm nhường của 行きます / 来ます",
      english: "đi, đến — khiêm nhường của 行きます / 来ます",
      type: "main",
      example: "明日、会社へ参ります。\nAshita, kaisha e mairimasu.\nNgày mai tôi sẽ đến công ty."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 7c4fd4a8db993d82
    {
      japanese: "おります",
      kana: "おります",
      vietnamese: "ở, có — khiêm nhường của います",
      english: "ở, có — khiêm nhường của います",
      type: "main",
      example: "私はロビーにおります。\nWatakushi wa robii ni orimasu.\nTôi đang ở sảnh."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 7398fa68f957cfc2
    {
      japanese: "いただきます",
      kana: "いただきます",
      vietnamese: "ăn, uống, nhận — khiêm nhường của 食べます / 飲みます / もらいます",
      english: "ăn, uống, nhận — khiêm nhường của 食べます / 飲みます / もらいます",
      type: "main",
      example: "お茶をいただきます。\nOcha o itadakimasu.\nTôi xin uống trà ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 89af909cfca60aa3
    {
      japanese: "申します",
      kana: "もうします",
      vietnamese: "nói, tên là — khiêm nhường của 言います",
      english: "nói, tên là — khiêm nhường của 言います",
      type: "main",
      example: "Nguyễnと申します。\nNguyen to moushimasu.\nTôi tên là Nguyễn ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | ccca5d8ffa7e20b2
    {
      japanese: "いたします",
      kana: "いたします",
      vietnamese: "làm — khiêm nhường của します",
      english: "làm — khiêm nhường của します",
      type: "main",
      example: "明日、ご連絡いたします。\nAshita, go-renraku itashimasu.\nNgày mai tôi sẽ liên lạc ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | b5a25976ff525c62
    {
      japanese: "拝見します",
      kana: "はいけんします",
      vietnamese: "xem, nhìn — khiêm nhường của 見ます",
      english: "xem, nhìn — khiêm nhường của 見ます",
      type: "main",
      example: "資料を拝見します。\nShiryou o haiken shimasu.\nTôi xin xem tài liệu ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 9723850f40fe987b
    {
      japanese: "存じます",
      kana: "ぞんじます",
      vietnamese: "biết — khiêm nhường của 知ります",
      english: "biết — khiêm nhường của 知ります",
      type: "main",
      example: "その方を存じています。\nSono kata o zonjite imasu.\nTôi có biết vị đó ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | fbffacb02e70d66f
    {
      japanese: "伺います",
      kana: "うかがいます",
      vietnamese: "hỏi, nghe, đến thăm — khiêm nhường của 聞きます / 行きます",
      english: "hỏi, nghe, đến thăm — khiêm nhường của 聞きます / 行きます",
      type: "main",
      example: "先生に伺います。\nSensei ni ukagaimasu.\nTôi xin hỏi thầy/cô ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 8f96084115a3052f
    {
      japanese: "お目にかかります",
      kana: "おめにかかります",
      vietnamese: "gặp — khiêm nhường của 会います",
      english: "gặp — khiêm nhường của 会います",
      type: "main",
      example: "社長にお目にかかりました。\nShachou ni o-me ni kakarimashita.\nTôi đã được gặp giám đốc ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | fd1e0b794e39046b
    {
      japanese: "入れます",
      kana: "いれます",
      vietnamese: "pha, cho vào",
      english: "pha, cho vào",
      type: "main",
      example: "コーヒーを入れます。\nKoohii o iremasu.\nTôi pha cà phê."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 7af8a168b9cf9e58
    {
      japanese: "用意します",
      kana: "よういします",
      vietnamese: "chuẩn bị",
      english: "chuẩn bị",
      type: "main",
      example: "会議の資料を用意します。\nKaigi no shiryou o youi shimasu.\nTôi chuẩn bị tài liệu cuộc họp."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 3b2f4d989d75d8fb
    {
      japanese: "私",
      kana: "わたくし",
      vietnamese: "tôi — cách nói trang trọng hơn わたし",
      english: "tôi — cách nói trang trọng hơn わたし",
      type: "main",
      example: "私は田中と申します。\nWatakushi wa Tanaka to moushimasu.\nTôi là Tanaka ạ."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | f697d6b9a11d78c0
    {
      japanese: "ガイド",
      kana: "ガイド",
      vietnamese: "hướng dẫn viên",
      english: "hướng dẫn viên",
      type: "main",
      example: "ガイドに聞きます。\nGaido ni kikimasu.\nTôi hỏi hướng dẫn viên."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | d7a28c9df74e8c93
    {
      japanese: "メールアドレス",
      kana: "メールアドレス",
      vietnamese: "địa chỉ email",
      english: "địa chỉ email",
      type: "main",
      example: "メールアドレスを教えてください。\nMeeru adoresu o oshiete kudasai.\nHãy cho tôi biết địa chỉ email."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | c2d943399f8113be
    {
      japanese: "スケジュール",
      kana: "スケジュール",
      vietnamese: "lịch trình, thời khóa biểu",
      english: "lịch trình, thời khóa biểu",
      type: "main",
      example: "明日のスケジュールを確認します。\nAshita no sukejuuru o kakunin shimasu.\nTôi xác nhận lịch trình ngày mai."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 1bbc2e4ed149c625
    {
      japanese: "再来週",
      kana: "さらいしゅう",
      vietnamese: "tuần sau nữa",
      english: "tuần sau nữa",
      type: "main",
      example: "再来週、東京へ参ります。\nSaraishuu, Toukyou e mairimasu.\nTuần sau nữa tôi sẽ đến Tokyo."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | c7813faaa66baef5
    {
      japanese: "再来月",
      kana: "さらいげつ",
      vietnamese: "tháng sau nữa",
      english: "tháng sau nữa",
      type: "main",
      example: "再来月、試験があります。\nSaraigetsu, shiken ga arimasu.\nTháng sau nữa có kỳ thi."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | f9296d0c2b4c207a
    {
      japanese: "再来年",
      kana: "さらいねん",
      vietnamese: "năm sau nữa",
      english: "năm sau nữa",
      type: "main",
      example: "再来年、日本へ行きます。\nSarainen, Nihon e ikimasu.\nNăm sau nữa tôi đi Nhật."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | fb1aefd3b4c9556e
    {
      japanese: "初めに",
      kana: "はじめに",
      vietnamese: "đầu tiên, trước hết",
      english: "đầu tiên, trước hết",
      type: "main",
      example: "初めに、自己紹介します。\nHajime ni, jikoshoukai shimasu.\nĐầu tiên, tôi sẽ tự giới thiệu."
    },
    // source: review_tu_vung_bai_50.md | 2. Từ vựng chính | 2b6c9eef8459ba8e
    {
      japanese: "江戸東京博物館",
      kana: "えどとうきょうはくぶつかん",
      vietnamese: "Bảo tàng Edo-Tokyo",
      english: "Bảo tàng Edo-Tokyo",
      type: "main",
      example: "江戸東京博物館を見学します。\nEdo Toukyou Hakubutsukan o kengaku shimasu.\nTôi tham quan Bảo tàng Edo-Tokyo."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | 43b88e1b56f973b9
    {
      japanese: "緊張します",
      kana: "きんちょうします",
      vietnamese: "căng thẳng, hồi hộp",
      english: "căng thẳng, hồi hộp",
      type: "supplementary",
      example: "スピーチの前に緊張します。\nSupiichi no mae ni kinchou shimasu.\nTôi hồi hộp trước bài phát biểu."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | aaf43a1a200dad4e
    {
      japanese: "賞金",
      kana: "しょうきん",
      vietnamese: "tiền thưởng",
      english: "tiền thưởng",
      type: "supplementary",
      example: "賞金をもらいました。\nShoukin o moraimashita.\nTôi đã nhận tiền thưởng."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | fcaa912705183c43
    {
      japanese: "きりん",
      kana: "きりん",
      vietnamese: "hươu cao cổ",
      english: "hươu cao cổ",
      type: "supplementary",
      example: "動物園できりんを見ました。\nDoubutsuen de kirin o mimashita.\nTôi đã xem hươu cao cổ ở sở thú."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | 75c53fb76fcfd3df
    {
      japanese: "頃",
      kana: "ころ",
      vietnamese: "khoảng, thời điểm, hồi",
      english: "khoảng, thời điểm, hồi",
      type: "supplementary",
      example: "子どもの頃、日本語を勉強しました。\nKodomo no koro, Nihongo o benkyou shimashita.\nHồi nhỏ tôi đã học tiếng Nhật."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | d147ef1abc6c7fae
    {
      japanese: "叶います",
      kana: "かないます",
      vietnamese: "thành hiện thực",
      english: "thành hiện thực",
      type: "supplementary",
      example: "夢が叶いました。\nYume ga kanaimashita.\nƯớc mơ đã thành hiện thực."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | c471e088a3c981ae
    {
      japanese: "応援します",
      kana: "おうえんします",
      vietnamese: "động viên, cổ vũ",
      english: "động viên, cổ vũ",
      type: "supplementary",
      example: "友達を応援します。\nTomodachi o ouen shimasu.\nTôi cổ vũ bạn."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | eadd384df5bf58a5
    {
      japanese: "心から",
      kana: "こころから",
      vietnamese: "từ tận đáy lòng",
      english: "từ tận đáy lòng",
      type: "supplementary",
      example: "心から感謝しています。\nKokoro kara kansha shite imasu.\nTôi biết ơn từ tận đáy lòng."
    },
    // source: review_tu_vung_bai_50.md | 3. Từ vựng phần hội thoại | 6cf45e3644bc2f8d
    {
      japanese: "感謝します",
      kana: "かんしゃします",
      vietnamese: "cảm ơn, cảm tạ",
      english: "cảm ơn, cảm tạ",
      type: "supplementary",
      example: "先生に感謝しています。\nSensei ni kansha shite imasu.\nTôi biết ơn thầy/cô."
    },
    // source: review_tu_vung_bai_50.md | 4. Từ vựng phần đọc hiểu | 24a89c85d960dc96
    {
      japanese: "お礼",
      kana: "おれい",
      vietnamese: "lời cảm ơn, sự cảm ơn",
      english: "lời cảm ơn, sự cảm ơn",
      type: "supplementary",
      example: "お礼を言います。\nO-rei o iimasu.\nTôi nói lời cảm ơn."
    },
    // source: review_tu_vung_bai_50.md | 4. Từ vựng phần đọc hiểu | 1c3601a74cb1e695
    {
      japanese: "お元気でいらっしゃいますか",
      kana: "おげんきでいらっしゃいますか",
      vietnamese: "Anh/chị có khỏe không ạ?",
      english: "Anh/chị có khỏe không ạ?",
      type: "supplementary",
      example: "お元気でいらっしゃいますか。\nOgenki de irasshaimasu ka.\nAnh/chị có khỏe không ạ?"
    },
    // source: review_tu_vung_bai_50.md | 4. Từ vựng phần đọc hiểu | c988dbdc9cbca832
    {
      japanese: "迷惑をかけます",
      kana: "めいわくをかけます",
      vietnamese: "làm phiền",
      english: "làm phiền",
      type: "supplementary",
      example: "ご迷惑をかけて、すみません。\nGo-meiwaku o kakete, sumimasen.\nXin lỗi vì đã làm phiền."
    },
    // source: review_tu_vung_bai_50.md | 4. Từ vựng phần đọc hiểu | cfb57d81c57bed95
    {
      japanese: "生かします",
      kana: "いかします",
      vietnamese: "tận dụng, phát huy, dùng",
      english: "tận dụng, phát huy, dùng",
      type: "supplementary",
      example: "経験を生かします。\nKeiken o ikashimasu.\nTôi phát huy kinh nghiệm."
    },
    // source: review_tu_vung_bai_50.md | 4. Từ vựng phần đọc hiểu | 4717d64f029ac935
    {
      japanese: "ミュンヘン",
      kana: "ミュンヘン",
      vietnamese: "Munich, thành phố ở Đức",
      english: "Munich, thành phố ở Đức",
      type: "supplementary",
      example: "ミュンヘンへ行きました。\nMyunhen e ikimashita.\nTôi đã đi Munich."
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | cf338fcaae799398
    {
      japanese: "田中と申します",
      kana: "田中と申します",
      vietnamese: "Tôi tên là Tanaka ạ",
      english: "Tôi tên là Tanaka ạ",
      type: "supplementary",
      example: "Khiêm nhường của と言います"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | 8c848936ddc354ce
    {
      japanese: "明日参ります",
      kana: "明日参ります",
      vietnamese: "Ngày mai tôi sẽ đến ạ",
      english: "Ngày mai tôi sẽ đến ạ",
      type: "supplementary",
      example: "Khiêm nhường của 行きます / 来ます"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | b0c207f9db05a2c1
    {
      japanese: "ロビーにおります",
      kana: "ロビーにおります",
      vietnamese: "Tôi đang ở sảnh ạ",
      english: "Tôi đang ở sảnh ạ",
      type: "supplementary",
      example: "Khiêm nhường của います"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | 21e5d03a3f9541de
    {
      japanese: "資料を拝見します",
      kana: "資料を拝見します",
      vietnamese: "Tôi xin xem tài liệu ạ",
      english: "Tôi xin xem tài liệu ạ",
      type: "supplementary",
      example: "Khiêm nhường của 見ます"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | fd032e9fb759b6e0
    {
      japanese: "先生に伺います",
      kana: "先生に伺います",
      vietnamese: "Tôi xin hỏi thầy/cô ạ",
      english: "Tôi xin hỏi thầy/cô ạ",
      type: "supplementary",
      example: "Khiêm nhường của 聞きます"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | b2b31881583da830
    {
      japanese: "社長にお目にかかります",
      kana: "社長にお目にかかります",
      vietnamese: "Tôi được gặp giám đốc ạ",
      english: "Tôi được gặp giám đốc ạ",
      type: "supplementary",
      example: "Khiêm nhường của 会います"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | 5affa6ffeadcf962
    {
      japanese: "ご迷惑をかけます",
      kana: "ご迷惑をかけます",
      vietnamese: "làm phiền",
      english: "làm phiền",
      type: "supplementary",
      example: "Hay dùng khi xin lỗi"
    },
    // source: review_tu_vung_bai_50.md | 5. Cụm kính ngữ / khiêm nhường cần nhớ | f26b471bb2300957
    {
      japanese: "心から感謝します",
      kana: "心から感謝します",
      vietnamese: "cảm ơn từ tận đáy lòng",
      english: "cảm ơn từ tận đáy lòng",
      type: "supplementary",
      example: "Cách nói trang trọng"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | b39bc0df57fb8b94
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "Kiến — nhìn, xem, thấy",
      english: "nhìn, xem, thấy",
      type: "kanji",
      example: "拝見します / haiken shimasu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 62fcc88db55de9b4
    {
      japanese: "目",
      kana: "モク / moku",
      vietnamese: "Mục — mắt, mục tiêu",
      english: "mắt, mục tiêu",
      type: "kanji",
      example: "お目にかかります / o-me ni kakarimasu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 348b2ea2b67e297a
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào, cho vào",
      english: "vào, cho vào",
      type: "kanji",
      example: "入れます / iremasu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 78101dbf181eb8aa
    {
      japanese: "用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — dùng, việc cần làm",
      english: "dùng, việc cần làm",
      type: "kanji",
      example: "用意します / youi shimasu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | c978cd99bf72eb2b
    {
      japanese: "意",
      kana: "イ / i",
      vietnamese: "Ý — ý, ý định",
      english: "ý, ý định",
      type: "kanji",
      example: "用意します / youi shimasu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 2bbcb9c07668fa4b
    {
      japanese: "私",
      kana: "シ / shi",
      vietnamese: "Tư — tôi, riêng tư",
      english: "tôi, riêng tư",
      type: "kanji",
      example: "私 / watakushi"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 2d5902f637141980
    {
      japanese: "来",
      kana: "ライ / rai",
      vietnamese: "Lai — đến",
      english: "đến",
      type: "kanji",
      example: "再来週 / saraishuu, 再来月 / saraigetsu, 再来年 / sarainen"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | c109974486f35239
    {
      japanese: "週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — tuần",
      english: "tuần",
      type: "kanji",
      example: "再来週 / saraishuu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | c68670ce007fef2a
    {
      japanese: "月",
      kana: "ゲツ / getsu, ガツ / gatsu",
      vietnamese: "Nguyệt — tháng, mặt trăng",
      english: "tháng, mặt trăng",
      type: "kanji",
      example: "再来月 / saraigetsu"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 2a19fffaa3787cc6
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "Niên — năm",
      english: "năm",
      type: "kanji",
      example: "再来年 / sarainen"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 87b6e9025e4a2f49
    {
      japanese: "初",
      kana: "ショ / sho",
      vietnamese: "Sơ — đầu tiên, ban đầu",
      english: "đầu tiên, ban đầu",
      type: "kanji",
      example: "初めに / hajime ni"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 1a98647546eb165e
    {
      japanese: "東",
      kana: "トウ / tou",
      vietnamese: "Đông — phía đông",
      english: "phía đông",
      type: "kanji",
      example: "東京 / Toukyou"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | bcc42b6fc1a24205
    {
      japanese: "京",
      kana: "キョウ / kyou, ケイ / kei",
      vietnamese: "Kinh — kinh đô",
      english: "kinh đô",
      type: "kanji",
      example: "東京 / Toukyou"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | ac290887abc2a3f3
    {
      japanese: "物",
      kana: "ブツ / butsu, モツ / motsu",
      vietnamese: "Vật — vật, đồ vật",
      english: "vật, đồ vật",
      type: "kanji",
      example: "博物館 / hakubutsukan"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 205b310ab4e706c5
    {
      japanese: "館",
      kana: "カン / kan",
      vietnamese: "Quán — tòa nhà, nhà lớn",
      english: "tòa nhà, nhà lớn",
      type: "kanji",
      example: "博物館 / hakubutsukan"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 9df4b291f4fa3328
    {
      japanese: "金",
      kana: "キン / kin",
      vietnamese: "Kim — vàng, tiền",
      english: "vàng, tiền",
      type: "kanji",
      example: "賞金 / shoukin"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | 5975fbac1e7796b3
    {
      japanese: "心",
      kana: "シン / shin",
      vietnamese: "Tâm — tim, lòng",
      english: "tim, lòng",
      type: "kanji",
      example: "心から / kokoro kara"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | de28f04aa514c7e1
    {
      japanese: "元",
      kana: "ゲン / gen",
      vietnamese: "Nguyên — gốc, nguyên khí",
      english: "gốc, nguyên khí",
      type: "kanji",
      example: "元気 / genki"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | b23c433fddb28e74
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần",
      english: "khí, tinh thần",
      type: "kanji",
      example: "元気 / genki"
    },
    // source: review_tu_vung_bai_50.md | 6. Kanji N5–N4 cần học kỹ | e7f1a51311b89d33
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Sinh — sống, sinh ra",
      english: "sống, sinh ra",
      type: "kanji",
      example: "生かします / ikashimasu"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4898065069c3836e
    {
      japanese: "拝見",
      kana: "ケン / ken",
      vietnamese: "Kiến — 拝 = bái, kính cẩn; 見 = xem",
      english: "拝 = bái, kính cẩn; 見 = xem",
      type: "kanji",
      example: "拝見"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9d70c84ce53436aa
    {
      japanese: "見る",
      kana: "み.る / miru",
      vietnamese: "Kiến — 見 = nhìn, xem",
      english: "見 = nhìn, xem",
      type: "kanji",
      example: "見る"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 2e81757321423a45
    {
      japanese: "意見",
      kana: "ケン / ken",
      vietnamese: "Kiến — 意 = ý; 見 = cách nhìn",
      english: "意 = ý; 見 = cách nhìn",
      type: "kanji",
      example: "意見"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 547457fc6c14e5d5
    {
      japanese: "目",
      kana: "め / me",
      vietnamese: "Mục — 目 = mắt",
      english: "目 = mắt",
      type: "kanji",
      example: "目"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8688a2a9985beb12
    {
      japanese: "目上",
      kana: "め / me",
      vietnamese: "Mục — 目 = mắt; 上 = trên/người trên",
      english: "目 = mắt; 上 = trên/người trên",
      type: "kanji",
      example: "目上"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c3866923c27af4fd
    {
      japanese: "目的",
      kana: "モク / moku",
      vietnamese: "Mục — 目 = mục; 的 = đích",
      english: "目 = mục; 的 = đích",
      type: "kanji",
      example: "目的"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 11024fd4c9f727de
    {
      japanese: "入れる",
      kana: "い.れる / ireru",
      vietnamese: "Nhập — 入 = cho vào",
      english: "入 = cho vào",
      type: "kanji",
      example: "入れる"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 723e5e36f3e5c347
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = đi vào",
      english: "入 = đi vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f71bbc4cfb06199f
    {
      japanese: "入学",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 入 = vào; 学 = học",
      english: "入 = vào; 学 = học",
      type: "kanji",
      example: "入学"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 792f0a83ffed9c4d
    {
      japanese: "用意",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 用 = dùng; 意 = ý, chuẩn bị trong lòng",
      english: "用 = dùng; 意 = ý, chuẩn bị trong lòng",
      type: "kanji",
      example: "用意"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 576f8612c18c4609
    {
      japanese: "用事",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 用 = việc cần làm; 事 = việc",
      english: "用 = việc cần làm; 事 = việc",
      type: "kanji",
      example: "用事"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 24cbba959f50eade
    {
      japanese: "利用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 利 = lợi; 用 = dùng",
      english: "利 = lợi; 用 = dùng",
      type: "kanji",
      example: "利用"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f805468fb61f3ab5
    {
      japanese: "用意",
      kana: "イ / i",
      vietnamese: "Ý — 用 = dùng/chuẩn bị; 意 = ý",
      english: "用 = dùng/chuẩn bị; 意 = ý",
      type: "kanji",
      example: "用意"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 604790868a4e484e
    {
      japanese: "意味",
      kana: "イ / i",
      vietnamese: "Ý — 意 = ý; 味 = vị/nghĩa",
      english: "意 = ý; 味 = vị/nghĩa",
      type: "kanji",
      example: "意味"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fb485d0fdcfbb71e
    {
      japanese: "注意",
      kana: "イ / i",
      vietnamese: "Ý — 注 = rót/chú tâm; 意 = ý",
      english: "注 = rót/chú tâm; 意 = ý",
      type: "kanji",
      example: "注意"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c7af11396300625c
    {
      japanese: "私",
      kana: "わたし / watashi",
      vietnamese: "Tư — 私 = tôi, riêng tư",
      english: "私 = tôi, riêng tư",
      type: "kanji",
      example: "私"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b4765f6fd35ba48e
    {
      japanese: "私",
      kana: "わたくし / watakushi",
      vietnamese: "Tư — 私 = tôi, cách nói trang trọng",
      english: "私 = tôi, cách nói trang trọng",
      type: "kanji",
      example: "私"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 74357694e2174af8
    {
      japanese: "来る",
      kana: "く.る / kuru",
      vietnamese: "Lai — 来 = đến",
      english: "来 = đến",
      type: "kanji",
      example: "来る"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1fb3f1102cb3d798
    {
      japanese: "来年",
      kana: "ライ / rai",
      vietnamese: "Lai — 来 = tới; 年 = năm",
      english: "来 = tới; 年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6098caa7d0355ddb
    {
      japanese: "再来週",
      kana: "ライ / rai",
      vietnamese: "Lai — 再 = lại; 来 = tới; 週 = tuần",
      english: "再 = lại; 来 = tới; 週 = tuần",
      type: "kanji",
      example: "再来週"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 91f740c3b2a6bd92
    {
      japanese: "来週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — 来 = tới; 週 = tuần",
      english: "来 = tới; 週 = tuần",
      type: "kanji",
      example: "来週"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 378b67d3894e6410
    {
      japanese: "毎週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — 毎 = mỗi; 週 = tuần",
      english: "毎 = mỗi; 週 = tuần",
      type: "kanji",
      example: "毎週"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 28295465ec2e82a1
    {
      japanese: "再来週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — 再 = lại; 来 = tới; 週 = tuần",
      english: "再 = lại; 来 = tới; 週 = tuần",
      type: "kanji",
      example: "再来週"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ddb3e81dae6d82ce
    {
      japanese: "月",
      kana: "つき / tsuki",
      vietnamese: "Nguyệt — 月 = tháng",
      english: "月 = tháng",
      type: "kanji",
      example: "月"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1c5e021b9442ffeb
    {
      japanese: "来月",
      kana: "ゲツ / getsu",
      vietnamese: "Nguyệt — 来 = tới; 月 = tháng",
      english: "来 = tới; 月 = tháng",
      type: "kanji",
      example: "来月"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0128b9df14659376
    {
      japanese: "再来月",
      kana: "ゲツ / getsu",
      vietnamese: "Nguyệt — 再 = lại; 来 = tới; 月 = tháng",
      english: "再 = lại; 来 = tới; 月 = tháng",
      type: "kanji",
      example: "再来月"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6e661cee03de2f52
    {
      japanese: "年",
      kana: "とし / toshi",
      vietnamese: "Niên — 年 = năm",
      english: "年 = năm",
      type: "kanji",
      example: "年"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 69e2af199121ecc9
    {
      japanese: "来年",
      kana: "ネン / nen",
      vietnamese: "Niên — 来 = tới; 年 = năm",
      english: "来 = tới; 年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8b952e24a4672c79
    {
      japanese: "再来年",
      kana: "ネン / nen",
      vietnamese: "Niên — 再 = lại; 来 = tới; 年 = năm",
      english: "再 = lại; 来 = tới; 年 = năm",
      type: "kanji",
      example: "再来年"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f7594c39bc76cd6e
    {
      japanese: "初めに",
      kana: "はじ.め / hajime",
      vietnamese: "Sơ — 初 = đầu tiên",
      english: "初 = đầu tiên",
      type: "kanji",
      example: "初めに"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6f390801d8fc3128
    {
      japanese: "最初",
      kana: "ショ / sho",
      vietnamese: "Sơ — 最 = nhất; 初 = đầu",
      english: "最 = nhất; 初 = đầu",
      type: "kanji",
      example: "最初"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4d1442f05f332476
    {
      japanese: "東",
      kana: "ひがし / higashi",
      vietnamese: "Đông — 東 = phía đông",
      english: "東 = phía đông",
      type: "kanji",
      example: "東"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d5a9ee4bdc4703e5
    {
      japanese: "東京",
      kana: "トウ / tou",
      vietnamese: "Đông — 東 = đông; 京 = kinh đô",
      english: "東 = đông; 京 = kinh đô",
      type: "kanji",
      example: "東京"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 66237f2c84f5a0ae
    {
      japanese: "東京",
      kana: "キョウ / kyou",
      vietnamese: "Kinh — 東 = đông; 京 = kinh đô",
      english: "東 = đông; 京 = kinh đô",
      type: "kanji",
      example: "東京"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4d6a052a290b2c5f
    {
      japanese: "博物館",
      kana: "ブツ / butsu",
      vietnamese: "Vật — 博 = rộng/triển lãm; 物 = vật; 館 = tòa nhà",
      english: "博 = rộng/triển lãm; 物 = vật; 館 = tòa nhà",
      type: "kanji",
      example: "博物館"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 29c0e36dbbdd63cf
    {
      japanese: "物",
      kana: "もの / mono",
      vietnamese: "Vật — 物 = đồ vật",
      english: "物 = đồ vật",
      type: "kanji",
      example: "物"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | efc40bb2a60e9178
    {
      japanese: "動物",
      kana: "ブツ / butsu",
      vietnamese: "Vật — 動 = động; 物 = vật",
      english: "動 = động; 物 = vật",
      type: "kanji",
      example: "動物"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a4d5895d9dfc8d28
    {
      japanese: "博物館",
      kana: "カン / kan",
      vietnamese: "Quán — 博 = rộng/triển lãm; 物 = vật; 館 = tòa nhà",
      english: "博 = rộng/triển lãm; 物 = vật; 館 = tòa nhà",
      type: "kanji",
      example: "博物館"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b553181c919ff5b3
    {
      japanese: "図書館",
      kana: "カン / kan",
      vietnamese: "Quán — 図 = bản vẽ/sách; 書 = sách; 館 = tòa nhà",
      english: "図 = bản vẽ/sách; 書 = sách; 館 = tòa nhà",
      type: "kanji",
      example: "図書館"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 36633aa6fc946397
    {
      japanese: "賞金",
      kana: "キン / kin",
      vietnamese: "Kim — 賞 = thưởng; 金 = tiền",
      english: "賞 = thưởng; 金 = tiền",
      type: "kanji",
      example: "賞金"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 09de3c39d601dc71
    {
      japanese: "お金",
      kana: "かね / kane",
      vietnamese: "Kim — 金 = tiền",
      english: "金 = tiền",
      type: "kanji",
      example: "お金"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 98e5995ed85f485e
    {
      japanese: "金曜日",
      kana: "キン / kin",
      vietnamese: "Kim — 金 = vàng/kim loại; 曜日 = thứ",
      english: "金 = vàng/kim loại; 曜日 = thứ",
      type: "kanji",
      example: "金曜日"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4c4d6c3792b86f49
    {
      japanese: "心",
      kana: "こころ / kokoro",
      vietnamese: "Tâm — 心 = tim, lòng",
      english: "心 = tim, lòng",
      type: "kanji",
      example: "心"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 166348948db1ddd1
    {
      japanese: "心配",
      kana: "シン / shin",
      vietnamese: "Tâm — 心 = lòng; 配 = lo liệu",
      english: "心 = lòng; 配 = lo liệu",
      type: "kanji",
      example: "心配"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e0030ebfc844c0ff
    {
      japanese: "元気",
      kana: "ゲン / gen",
      vietnamese: "Nguyên — 元 = nguồn gốc; 気 = khí, tinh thần",
      english: "元 = nguồn gốc; 気 = khí, tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | df0015d980f7fa43
    {
      japanese: "元気",
      kana: "キ / ki",
      vietnamese: "Khí — 元 = nguồn gốc; 気 = khí, tinh thần",
      english: "元 = nguồn gốc; 気 = khí, tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 826937778cb2631d
    {
      japanese: "天気",
      kana: "キ / ki",
      vietnamese: "Khí — 天 = trời; 気 = khí",
      english: "天 = trời; 気 = khí",
      type: "kanji",
      example: "天気"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 62c2080e2e1a8bed
    {
      japanese: "生きる",
      kana: "い.きる / ikiru",
      vietnamese: "Sinh — 生 = sống, sinh ra",
      english: "生 = sống, sinh ra",
      type: "kanji",
      example: "生きる"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | af30c8f78da295e2
    {
      japanese: "生かす",
      kana: "い.かす / ikasu",
      vietnamese: "Sinh — 生 = phát huy, làm sống",
      english: "生 = phát huy, làm sống",
      type: "kanji",
      example: "生かす"
    },
    // source: review_tu_vung_bai_50.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b679a538dd9f4740
    {
      japanese: "学生",
      kana: "セイ / sei",
      vietnamese: "Sinh — 学 = học; 生 = người",
      english: "学 = học; 生 = người",
      type: "kanji",
      example: "学生"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～ようになる',
      vietnamese: 'trở nên có thể..., dần dần...',
      english: 'to become able to...',
      type: 'main',
      explanation: 'Biểu thị sự thay đổi dần dần về khả năng hoặc thói quen. Cấu trúc: 動詞辞書形 + ようになる (khả năng), 動詞ない形 + ようになる (thôi làm).',
      examples: [
        {
          japanese: '日本語が話せるようになりました。',
          vietnamese: 'Tôi đã có thể nói tiếng Nhật.',
          english: 'I became able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: 'タバコを吸わないようになりました。',
          vietnamese: 'Tôi đã không hút thuốc nữa.',
          english: 'I stopped smoking.',
          type: 'main'
        },
        {
          japanese: '早く起きられるようになりたいです。',
          vietnamese: 'Tôi muốn có thể dậy sớm.',
          english: 'I want to be able to wake up early.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようにする',
      vietnamese: 'cố gắng làm..., làm sao để...',
      english: 'to make sure to..., to try to...',
      type: 'main',
      explanation: 'Biểu thị nỗ lực có ý thức để làm gì đó hoặc đạt được một trạng thái. Cấu trúc: 動詞辞書形/ない形 + ようにする.',
      examples: [
        {
          japanese: '毎日運動するようにしています。',
          vietnamese: 'Tôi cố gắng tập thể dục mỗi ngày.',
          english: 'I make sure to exercise every day.',
          type: 'main'
        },
        {
          japanese: '遅刻しないようにします。',
          vietnamese: 'Tôi cố gắng không đến muộn.',
          english: 'I try not to be late.',
          type: 'main'
        },
        {
          japanese: '健康に気をつけるようにしてください。',
          vietnamese: 'Hãy cố gắng chăm sóc sức khỏe.',
          english: 'Please make sure to take care of your health.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～やすい／～にくい',
      vietnamese: 'dễ.../khó...',
      english: 'easy to.../hard to...',
      type: 'main',
      explanation: 'Biểu thị độ dễ hoặc khó của hành động. Cấu trúc: 動詞ます形(bỏます) + やすい (dễ) / にくい (khó).',
      examples: [
        {
          japanese: 'この本は読みやすいです。',
          vietnamese: 'Cuốn sách này dễ đọc.',
          english: 'This book is easy to read.',
          type: 'main'
        },
        {
          japanese: 'この漢字は覚えにくいです。',
          vietnamese: 'Chữ Hán này khó nhớ.',
          english: 'This kanji is hard to remember.',
          type: 'main'
        },
        {
          japanese: '使いやすい道具です。',
          vietnamese: 'Đây là công cụ dễ sử dụng.',
          english: 'This is an easy-to-use tool.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～すぎる',
      vietnamese: 'quá...',
      english: 'too...',
      type: 'main',
      explanation: 'Biểu thị mức độ quá mức. Cấu trúc: 動詞ます形(bỏます) + すぎる, い形容詞(bỏい) + すぎる, な形容詞 + すぎる.',
      examples: [
        {
          japanese: '食べすぎました。',
          vietnamese: 'Tôi đã ăn quá nhiều.',
          english: 'I ate too much.',
          type: 'main'
        },
        {
          japanese: 'この服は高すぎます。',
          vietnamese: 'Quần áo này quá đắt.',
          english: 'These clothes are too expensive.',
          type: 'main'
        },
        {
          japanese: '親切すぎる人です。',
          vietnamese: 'Người này tử tế quá mức.',
          english: 'This person is too kind.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～そうだ（様態）',
      vietnamese: 'có vẻ..., trông...',
      english: 'looks like..., seems...',
      type: 'main',
      explanation: 'Biểu thị dự đoán dựa trên quan sát. Cấu trúc: 動詞ます形(bỏます) + そうだ, い形容詞(bỏい) + そうだ, な形容詞 + そうだ.',
      examples: [
        {
          japanese: '雨が降りそうです。',
          vietnamese: 'Trời có vẻ sắp mưa.',
          english: 'It looks like it will rain.',
          type: 'main'
        },
        {
          japanese: 'この料理は美味しそうです。',
          vietnamese: 'Món ăn này trông ngon.',
          english: 'This dish looks delicious.',
          type: 'main'
        },
        {
          japanese: '彼は元気そうですね。',
          vietnamese: 'Anh ấy có vẻ khỏe nhỉ.',
          english: 'He seems well.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～そうだ（伝聞）',
      vietnamese: 'nghe nói...',
      english: 'I heard that...',
      type: 'main',
      explanation: 'Biểu thị thông tin được nghe từ người khác. Cấu trúc: 普通形 + そうだ.',
      examples: [
        {
          japanese: '明日は雨だそうです。',
          vietnamese: 'Nghe nói ngày mai sẽ mưa.',
          english: 'I heard it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '田中さんは結婚するそうです。',
          vietnamese: 'Nghe nói anh Tanaka sẽ kết hôn.',
          english: 'I heard Mr. Tanaka will get married.',
          type: 'main'
        },
        {
          japanese: 'あの店は美味しいそうです。',
          vietnamese: 'Nghe nói quán đó ngon.',
          english: 'I heard that restaurant is delicious.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～らしい',
      vietnamese: 'có vẻ, nghe nói',
      english: 'it seems/apparently',
      type: 'main',
      explanation: 'Biểu thị suy đoán dựa trên thông tin không chắc chắn. Lịch sự hơn そうだ(伝聞). Cấu trúc: 普通形 + らしい.',
      examples: [
        {
          japanese: '彼は学生らしいです。',
          vietnamese: 'Có vẻ anh ấy là sinh viên.',
          english: 'He seems to be a student.',
          type: 'main'
        },
        {
          japanese: '明日は雨らしいです。',
          vietnamese: 'Có vẻ ngày mai sẽ mưa.',
          english: 'It seems it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '忙しいらしくて、連絡がありません。',
          vietnamese: 'Có vẻ bận nên không liên lạc.',
          english: 'He seems busy and hasn\'t contacted me.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～はずだ',
      vietnamese: 'chắc hẳn, đáng lẽ',
      english: 'should be/must be',
      type: 'main',
      explanation: 'Biểu thị suy đoán mạnh dựa trên lý do hoặc bằng chứng. Cấu trúc: 普通形 + はずだ (ない形 + はずがない = không thể).',
      examples: [
        {
          japanese: '彼はもう着いたはずです。',
          vietnamese: 'Chắc hẳn anh ấy đã đến rồi.',
          english: 'He should have arrived already.',
          type: 'main'
        },
        {
          japanese: 'こんなに高いはずがありません。',
          vietnamese: 'Không thể đắt như vậy được.',
          english: 'It can\'t be this expensive.',
          type: 'main'
        },
        {
          japanese: '知っているはずです。',
          vietnamese: 'Chắc hẳn biết rồi.',
          english: 'He must know.',
          type: 'additional'
        }
      ]
    }
  ]
};

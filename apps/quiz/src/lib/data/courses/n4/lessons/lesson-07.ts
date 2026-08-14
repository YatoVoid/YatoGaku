/**
 * N4 Core Lessons — Lesson 07: Giving and Receiving
 * Focus: あげる、くれる、もらう and their humble/honorific forms
 */

import type { LessonData } from '$lib/types';

export const LESSON_07_DATA: LessonData = {
  lessonNumber: 7,
  title: '授受表現 (Giving and Receiving Expressions)',
  vocabulary: [
    // Giving and receiving verbs
    {
      japanese: 'あげる',
      kana: 'あげる',
      vietnamese: 'cho (tôi cho người khác)',
      english: 'to give',
      type: 'main',
      example: '友達に本をあげました。'
    },
    {
      japanese: 'くれる',
      kana: 'くれる',
      vietnamese: 'cho (người khác cho tôi)',
      english: 'to give (to me)',
      type: 'main',
      example: '友達が本をくれました。'
    },
    {
      japanese: 'もらう',
      kana: 'もらう',
      vietnamese: 'nhận',
      english: 'to receive',
      type: 'main',
      example: '友達に本をもらいました。'
    },
    {
      japanese: 'さしあげる',
      kana: 'さしあげる',
      vietnamese: 'cho (khiêm tốn)',
      english: 'to give (humble)',
      type: 'main',
      example: '先生に花をさしあげました。'
    },
    {
      japanese: 'くださる',
      kana: 'くださる',
      vietnamese: 'cho (tôn kính)',
      english: 'to give (honorific)',
      type: 'main',
      example: '先生が本をくださいました。'
    },
    {
      japanese: 'いただく',
      kana: 'いただく',
      vietnamese: 'nhận (khiêm tốn)',
      english: 'to receive (humble)',
      type: 'main',
      example: '先生に本をいただきました。'
    },
    {
      japanese: 'やる',
      kana: 'やる',
      vietnamese: 'cho (thân mật, cho động vật/cây)',
      english: 'to give (casual, for animals/plants)',
      type: 'main',
      example: '犬に餌をやります。'
    },
    // Related verbs
    {
      japanese: '送る',
      kana: 'おくる',
      vietnamese: 'gửi',
      english: 'to send',
      type: 'main',
      example: '友達にプレゼントを送りました。'
    },
    {
      japanese: '届ける',
      kana: 'とどける',
      vietnamese: 'chuyển đến',
      english: 'to deliver',
      type: 'main',
      example: '荷物を届けてもらいました。'
    },
    {
      japanese: '渡す',
      kana: 'わたす',
      vietnamese: 'trao, đưa',
      english: 'to hand over',
      type: 'main',
      example: 'メッセージを渡してください。'
    },
    {
      japanese: '受け取る',
      kana: 'うけとる',
      vietnamese: 'nhận lấy',
      english: 'to receive, to accept',
      type: 'main',
      example: '荷物を受け取りました。'
    },
    {
      japanese: '貸す',
      kana: 'かす',
      vietnamese: 'cho mượn',
      english: 'to lend',
      type: 'main',
      example: '友達に傘を貸してあげました。'
    },
    {
      japanese: '借りる',
      kana: 'かりる',
      vietnamese: 'mượn',
      english: 'to borrow',
      type: 'main',
      example: '友達に本を借りました。'
    },
    {
      japanese: '返す',
      kana: 'かえす',
      vietnamese: 'trả lại',
      english: 'to return',
      type: 'main',
      example: '来週本を返します。'
    },
    {
      japanese: '教える',
      kana: 'おしえる',
      vietnamese: 'dạy, chỉ dẫn',
      english: 'to teach, to tell',
      type: 'main',
      example: '道を教えてくれました。'
    },
    {
      japanese: '伝える',
      kana: 'つたえる',
      vietnamese: 'truyền đạt',
      english: 'to convey, to tell',
      type: 'main',
      example: 'メッセージを伝えてください。'
    },
    {
      japanese: '紹介する',
      kana: 'しょうかいする',
      vietnamese: 'giới thiệu',
      english: 'to introduce',
      type: 'main',
      example: '友達を紹介してくれました。'
    },
    {
      japanese: '案内する',
      kana: 'あんないする',
      vietnamese: 'hướng dẫn',
      english: 'to guide',
      type: 'main',
      example: '街を案内してもらいました。'
    },
    {
      japanese: '手伝う',
      kana: 'てつだう',
      vietnamese: 'giúp đỡ',
      english: 'to help',
      type: 'main',
      example: '引っ越しを手伝ってくれました。'
    },
    {
      japanese: '助ける',
      kana: 'たすける',
      vietnamese: 'cứu giúp',
      english: 'to save, to help',
      type: 'main',
      example: '困った時に助けてくれました。'
    },
    // Nouns related to giving and receiving
    {
      japanese: 'プレゼント',
      kana: 'プレゼント',
      vietnamese: 'quà tặng',
      english: 'present, gift',
      type: 'main',
      example: '誕生日にプレゼントをもらいました。'
    },
    {
      japanese: '贈り物',
      kana: 'おくりもの',
      vietnamese: 'quà biếu',
      english: 'gift',
      type: 'main',
      example: '結婚式に贈り物をあげました。'
    },
    {
      japanese: 'お土産',
      kana: 'おみやげ',
      vietnamese: 'quà lưu niệm',
      english: 'souvenir',
      type: 'main',
      example: '旅行でお土産を買ってきました。'
    },
    {
      japanese: 'お祝い',
      kana: 'おいわい',
      vietnamese: 'lời chúc mừng',
      english: 'celebration, congratulations',
      type: 'main',
      example: '誕生日のお祝いをもらいました。'
    },
    {
      japanese: 'お礼',
      kana: 'おれい',
      vietnamese: 'lời cảm ơn',
      english: 'thanks, gratitude',
      type: 'main',
      example: 'お礼に食事をおごりました。'
    },
    {
      japanese: '親切',
      kana: 'しんせつ',
      vietnamese: 'tử tế',
      english: 'kindness',
      type: 'main',
      example: '親切にしてくれました。'
    },
    {
      japanese: 'お世話',
      kana: 'おせわ',
      vietnamese: 'sự chăm sóc',
      english: 'care, assistance',
      type: 'main',
      example: 'いつもお世話になっています。'
    },
    {
      japanese: '恩',
      kana: 'おん',
      vietnamese: 'ơn huệ',
      english: 'favor, debt of gratitude',
      type: 'main',
      example: '先生の恩は忘れません。'
    },
    {
      japanese: '恩返し',
      kana: 'おんがえし',
      vietnamese: 'báo ơn',
      english: 'repaying a favor',
      type: 'main',
      example: '恩返しがしたいです。'
    },
    {
      japanese: '感謝',
      kana: 'かんしゃ',
      vietnamese: 'lòng biết ơn',
      english: 'gratitude',
      type: 'main',
      example: '感謝の気持ちを伝えました。'
    },
    // People and relationships
    {
      japanese: '恩人',
      kana: 'おんじん',
      vietnamese: 'ân nhân',
      english: 'benefactor',
      type: 'additional',
      example: '彼は私の恩人です。'
    },
    {
      japanese: '友人',
      kana: 'ゆうじん',
      vietnamese: 'bạn bè',
      english: 'friend (formal)',
      type: 'additional',
      example: '友人にプレゼントをあげました。'
    },
    {
      japanese: '知人',
      kana: 'ちじん',
      vietnamese: 'người quen',
      english: 'acquaintance',
      type: 'additional',
      example: '知人に会いました。'
    },
    {
      japanese: '先輩',
      kana: 'せんぱい',
      vietnamese: 'tiền bối',
      english: 'senior',
      type: 'main',
      example: '先輩にアドバイスをもらいました。'
    },
    {
      japanese: '後輩',
      kana: 'こうはい',
      vietnamese: 'hậu bối',
      english: 'junior',
      type: 'main',
      example: '後輩に仕事を教えてあげました。'
    },
    {
      japanese: '同僚',
      kana: 'どうりょう',
      vietnamese: 'đồng nghiệp',
      english: 'colleague',
      type: 'main',
      example: '同僚に手伝ってもらいました。'
    },
    {
      japanese: '上司',
      kana: 'じょうし',
      vietnamese: 'cấp trên',
      english: 'boss, superior',
      type: 'main',
      example: '上司にアドバイスをいただきました。'
    },
    {
      japanese: '部下',
      kana: 'ぶか',
      vietnamese: 'cấp dưới',
      english: 'subordinate',
      type: 'main',
      example: '部下に仕事を任せました。'
    },
    {
      japanese: '客',
      kana: 'きゃく',
      vietnamese: 'khách',
      english: 'guest, customer',
      type: 'main',
      example: 'お客様にお茶をさしあげました。'
    },
    {
      japanese: '近所',
      kana: 'きんじょ',
      vietnamese: 'hàng xóm',
      english: 'neighborhood',
      type: 'main',
      example: '近所の人にお土産をあげました。'
    },
    // Actions and expressions
    {
      japanese: 'おごる',
      kana: 'おごる',
      vietnamese: 'mời (trả tiền)',
      english: 'to treat (pay for someone)',
      type: 'additional',
      example: '友達にご飯をおごってもらいました。'
    },
    {
      japanese: '迷惑をかける',
      kana: 'めいわくをかける',
      vietnamese: 'làm phền',
      english: 'to cause trouble',
      type: 'additional',
      example: '迷惑をかけてすみません。'
    },
    {
      japanese: '世話をする',
      kana: 'せわをする',
      vietnamese: 'chăm sóc',
      english: 'to take care of',
      type: 'additional',
      example: '犬の世話をしてもらいました。'
    },
    {
      japanese: '面倒を見る',
      kana: 'めんどうをみる',
      vietnamese: 'chăm sóc, trông nom',
      english: 'to take care of',
      type: 'additional',
      example: '弟の面倒を見てくれました。'
    },
    {
      japanese: '迎えに来る',
      kana: 'むかえにくる',
      vietnamese: 'đến đón',
      english: 'to come to pick up',
      type: 'additional',
      example: '駅まで迎えに来てくれました。'
    },
    {
      japanese: '送る',
      kana: 'おくる',
      vietnamese: 'đưa đi',
      english: 'to see off',
      type: 'additional',
      example: '家まで送ってくれました。'
    },
    {
      japanese: '預かる',
      kana: 'あずかる',
      vietnamese: 'giữ hộ',
      english: 'to keep, to look after',
      type: 'additional',
      example: '荷物を預かってもらいました。'
    },
    {
      japanese: '預ける',
      kana: 'あずける',
      vietnamese: 'gửi, ký thác',
      english: 'to deposit, to entrust',
      type: 'additional',
      example: '荷物を預けました。'
    },
    // Supplementary expressions
    {
      japanese: 'どういたしまして',
      kana: 'どういたしまして',
      vietnamese: 'không có chi',
      english: 'you\'re welcome',
      type: 'supplementary',
      example: 'ありがとう。どういたしまして。'
    },
    {
      japanese: 'お世話になります',
      kana: 'おせわになります',
      vietnamese: 'nhờ sự giúp đỡ của bạn',
      english: 'thank you for your help',
      type: 'supplementary',
      example: 'いつもお世話になります。'
    },
    {
      japanese: 'お世話になりました',
      kana: 'おせわになりました',
      vietnamese: 'cảm ơn đã giúp đỡ',
      english: 'thank you for your help (past)',
      type: 'supplementary',
      example: '本当にお世話になりました。'
    },
    {
      japanese: 'お疲れ様でした',
      kana: 'おつかれさまでした',
      vietnamese: 'anh/chị vất vả rồi',
      english: 'thank you for your hard work',
      type: 'supplementary',
      example: 'お疲れ様でした。'
    },
    {
      japanese: 'ご苦労様でした',
      kana: 'ごくろうさまでした',
      vietnamese: 'anh/chị đã vất vả (dùng cho cấp dưới)',
      english: 'thank you for your trouble (to subordinates)',
      type: 'supplementary',
      example: 'ご苦労様でした。'
    },
    {
      japanese: 'いただきます',
      kana: 'いただきます',
      vietnamese: 'xin phép dùng (trước bữa ăn)',
      english: 'thank you for the meal (before eating)',
      type: 'supplementary',
      example: 'いただきます。'
    },
    {
      japanese: 'ごちそうさまでした',
      kana: 'ごちそうさまでした',
      vietnamese: 'cảm ơn bữa ăn',
      english: 'thank you for the meal (after eating)',
      type: 'supplementary',
      example: 'ごちそうさまでした。'
    },
    {
      japanese: 'お待たせしました',
      kana: 'おまたせしました',
      vietnamese: 'xin lỗi đã để bạn đợi',
      english: 'sorry to keep you waiting',
      type: 'supplementary',
      example: 'お待たせしました。'
    },
    {
      japanese: 'お邪魔しました',
      kana: 'おじゃましました',
      vietnamese: 'xin lỗi đã làm phền',
      english: 'sorry for intruding (when leaving)',
      type: 'supplementary',
      example: 'お邪魔しました。'
    },
    {
      japanese: 'お陰様で',
      kana: 'おかげさまで',
      vietnamese: 'nhờ ơn anh/chị',
      english: 'thanks to you',
      type: 'supplementary',
      example: 'お陰様で元気です。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 4ee3a110f5d89481
    {
      japanese: "運動します",
      kana: "うんどうします",
      vietnamese: "vận động, tập thể thao",
      english: "vận động, tập thể thao",
      type: "main",
      example: "毎朝運動します。\nMaiasa undou shimasu.\nTôi tập thể dục mỗi sáng."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 736578f6e8c4574e
    {
      japanese: "成功します",
      kana: "せいこうします",
      vietnamese: "thành công",
      english: "thành công",
      type: "main",
      example: "試験に成功しました。\nShiken ni seikou shimashita.\nTôi đã thành công trong kỳ thi."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 8f6c80459b188c91
    {
      japanese: "失敗します",
      kana: "しっぱいします",
      vietnamese: "thất bại, trượt",
      english: "thất bại, trượt",
      type: "main",
      example: "試験に失敗しました。\nShiken ni shippai shimashita.\nTôi đã trượt kỳ thi."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | d029ca2cd5566fba
    {
      japanese: "合格します",
      kana: "ごうかくします",
      vietnamese: "đỗ, đạt",
      english: "đỗ, đạt",
      type: "main",
      example: "日本語の試験に合格しました。\nNihongo no shiken ni goukaku shimashita.\nTôi đã đỗ kỳ thi tiếng Nhật."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 9ed3e93388eb5eb8
    {
      japanese: "雨がやみます",
      kana: "やみます",
      vietnamese: "tạnh, ngừng mưa",
      english: "tạnh, ngừng mưa",
      type: "main",
      example: "雨がやみました。\nAme ga yamimashita.\nMưa đã tạnh."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 61f621348bfd3777
    {
      japanese: "晴れます",
      kana: "はれます",
      vietnamese: "nắng, quang đãng",
      english: "nắng, quang đãng",
      type: "main",
      example: "明日は晴れます。\nAshita wa haremasu.\nNgày mai trời nắng."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 8e1f23f32c7234a6
    {
      japanese: "曇ります",
      kana: "くもります",
      vietnamese: "có mây, âm u",
      english: "có mây, âm u",
      type: "main",
      example: "今日は曇っています。\nKyou wa kumotte imasu.\nHôm nay trời nhiều mây."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | ea841609ff6813ae
    {
      japanese: "続きます",
      kana: "つづきます",
      vietnamese: "tiếp tục, kéo dài",
      english: "tiếp tục, kéo dài",
      type: "main",
      example: "熱が続いています。\nNetsu ga tsuzuite imasu.\nCơn sốt vẫn tiếp tục."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | aefb9bd53aa8d68b
    {
      japanese: "風邪をひきます",
      kana: "ひきます",
      vietnamese: "bị cảm",
      english: "bị cảm",
      type: "main",
      example: "風邪をひきました。\nKaze o hikimashita.\nTôi bị cảm rồi."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 4aeb8cb1a8510f67
    {
      japanese: "冷やします",
      kana: "ひやします",
      vietnamese: "làm lạnh",
      english: "làm lạnh",
      type: "main",
      example: "水で頭を冷やします。\nMizu de atama o hiyashimasu.\nTôi làm mát đầu bằng nước."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 5957713a1ec9180b
    {
      japanese: "込みます",
      kana: "こみます",
      vietnamese: "đông, tắc, chen chúc",
      english: "đông, tắc, chen chúc",
      type: "main",
      example: "道が込んでいます。\nMichi ga konde imasu.\nĐường đang đông."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 7b926399a892ee2f
    {
      japanese: "道がすきます",
      kana: "すきます",
      vietnamese: "vắng, thưa",
      english: "vắng, thưa",
      type: "main",
      example: "道がすいています。\nMichi ga suite imasu.\nĐường đang vắng."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | cb8f2267cf545422
    {
      japanese: "出ます",
      kana: "でます",
      vietnamese: "tham gia, dự",
      english: "tham gia, dự",
      type: "main",
      example: "パーティーに出ます。\nPaatii ni demasu.\nTôi tham dự bữa tiệc."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 6715da58468ed880
    {
      japanese: "無理をします",
      kana: "むりをします",
      vietnamese: "gắng sức, cố quá",
      english: "gắng sức, cố quá",
      type: "main",
      example: "無理をしないでください。\nMuri o shinaide kudasai.\nĐừng cố quá nhé."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 27cdcac3ce01fa40
    {
      japanese: "十分［な］",
      kana: "じゅうぶん［な］",
      vietnamese: "đủ, đầy đủ",
      english: "đủ, đầy đủ",
      type: "main",
      example: "休みは十分です。\nYasumi wa juubun desu.\nThời gian nghỉ là đủ."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 01580129fbfcd497
    {
      japanese: "おかしい",
      kana: "おかしい",
      vietnamese: "lạ, không bình thường, buồn cười",
      english: "lạ, không bình thường, buồn cười",
      type: "main",
      example: "この音はおかしいです。\nKono oto wa okashii desu.\nÂm thanh này lạ."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 04d7845cf5d2480d
    {
      japanese: "うるさい",
      kana: "うるさい",
      vietnamese: "ồn ào, âm thanh to",
      english: "ồn ào, âm thanh to",
      type: "main",
      example: "外がうるさいです。\nSoto ga urusai desu.\nBên ngoài ồn ào."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 6ced3256524a7b02
    {
      japanese: "先生",
      kana: "せんせい",
      vietnamese: "bác sĩ; thầy/cô",
      english: "bác sĩ; thầy/cô",
      type: "main",
      example: "先生に相談します。\nSensei ni soudan shimasu.\nTôi hỏi ý kiến bác sĩ/thầy cô."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 427310fbcfa7cc3e
    {
      japanese: "火傷",
      kana: "やけど",
      vietnamese: "vết bỏng",
      english: "vết bỏng",
      type: "main",
      example: "手にやけどをしました。\nTe ni yakedo o shimashita.\nTôi bị bỏng ở tay."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 07b9908a05105192
    {
      japanese: "怪我",
      kana: "けが",
      vietnamese: "vết thương, bị thương",
      english: "vết thương, bị thương",
      type: "main",
      example: "足にけがをしました。\nAshi ni kega o shimashita.\nTôi bị thương ở chân."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | 5f4bd09089803825
    {
      japanese: "咳",
      kana: "せき",
      vietnamese: "ho",
      english: "ho",
      type: "main",
      example: "せきが出ます。\nSeki ga demasu.\nTôi bị ho."
    },
    // source: review_tu_vung_bai_32.md | 1. Từ vựng chính | af983c7973072166
    {
      japanese: "インフルエンザ",
      kana: "インフルエンザ",
      vietnamese: "cúm dịch",
      english: "cúm dịch",
      type: "main",
      example: "インフルエンザになりました。\nInfuruenza ni narimashita.\nTôi bị cúm."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 535e3ae577a1fdc2
    {
      japanese: "空",
      kana: "そら",
      vietnamese: "bầu trời",
      english: "bầu trời",
      type: "supplementary",
      example: "空がきれいです。\nSora ga kirei desu.\nBầu trời đẹp."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | c81e1bf30d00974b
    {
      japanese: "太陽",
      kana: "たいよう",
      vietnamese: "mặt trời",
      english: "mặt trời",
      type: "supplementary",
      example: "太陽が出ています。\nTaiyou ga dete imasu.\nMặt trời đang lên."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 88515de961d6134a
    {
      japanese: "星",
      kana: "ほし",
      vietnamese: "sao, ngôi sao",
      english: "sao, ngôi sao",
      type: "supplementary",
      example: "星が見えます。\nHoshi ga miemasu.\nCó thể nhìn thấy sao."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 19711c75d5b9c6d3
    {
      japanese: "風",
      kana: "かぜ",
      vietnamese: "gió",
      english: "gió",
      type: "supplementary",
      example: "風が強いです。\nKaze ga tsuyoi desu.\nGió mạnh."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | f888e28ab20c10b6
    {
      japanese: "東",
      kana: "ひがし",
      vietnamese: "phía đông",
      english: "phía đông",
      type: "supplementary",
      example: "東の空が明るいです。\nHigashi no sora ga akarui desu.\nBầu trời phía đông sáng."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 8c861c6a4ef0315e
    {
      japanese: "西",
      kana: "にし",
      vietnamese: "phía tây",
      english: "phía tây",
      type: "supplementary",
      example: "西の方へ行きます。\nNishi no hou e ikimasu.\nTôi đi về phía tây."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 19b17ba1b6c16bd7
    {
      japanese: "南",
      kana: "みなみ",
      vietnamese: "phía nam",
      english: "phía nam",
      type: "supplementary",
      example: "南は暖かいです。\nMinami wa atatakai desu.\nPhía nam ấm áp."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 98f58de15cd9c1c5
    {
      japanese: "北",
      kana: "きた",
      vietnamese: "phía bắc",
      english: "phía bắc",
      type: "supplementary",
      example: "北は寒いです。\nKita wa samui desu.\nPhía bắc lạnh."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | e09f3fb61a0b9388
    {
      japanese: "国際～",
      kana: "こくさい～",
      vietnamese: "mang tính quốc tế",
      english: "mang tính quốc tế",
      type: "supplementary",
      example: "国際会議があります。\nKokusai kaigi ga arimasu.\nCó hội nghị quốc tế."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | b841a2b379e03695
    {
      japanese: "水道",
      kana: "すいどう",
      vietnamese: "nước máy",
      english: "nước máy",
      type: "supplementary",
      example: "水道の水を飲みます。\nSuidou no mizu o nomimasu.\nTôi uống nước máy."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | cc5f6f80a03effd8
    {
      japanese: "エンジン",
      kana: "エンジン",
      vietnamese: "động cơ",
      english: "động cơ",
      type: "supplementary",
      example: "エンジンがおかしいです。\nEnjin ga okashii desu.\nĐộng cơ có vấn đề."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | bdd5c194307a173b
    {
      japanese: "チーム",
      kana: "チーム",
      vietnamese: "đội, nhóm",
      english: "đội, nhóm",
      type: "supplementary",
      example: "私のチームが勝ちました。\nWatashi no chiimu ga kachimashita.\nĐội của tôi đã thắng."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | ceee1941e6dbeb1f
    {
      japanese: "今夜",
      kana: "こんや",
      vietnamese: "tối nay, đêm nay",
      english: "tối nay, đêm nay",
      type: "supplementary",
      example: "今夜、雨が降ります。\nKonya, ame ga furimasu.\nTối nay trời sẽ mưa."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 727bdc2fb7158e0e
    {
      japanese: "夕方",
      kana: "ゆうがた",
      vietnamese: "chiều tối",
      english: "chiều tối",
      type: "supplementary",
      example: "夕方、散歩します。\nYuugata, sanpo shimasu.\nChiều tối tôi đi dạo."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 0585e412d3b66945
    {
      japanese: "前",
      kana: "まえ",
      vietnamese: "trước",
      english: "trước",
      type: "supplementary",
      example: "駅の前で会います。\nEki no mae de aimasu.\nGặp nhau trước ga."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | 9f8124068514644c
    {
      japanese: "遅く",
      kana: "おそく",
      vietnamese: "muộn, khuya",
      english: "muộn, khuya",
      type: "supplementary",
      example: "遅く帰りました。\nOsoku kaerimashita.\nTôi đã về muộn."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | e66fdead178141db
    {
      japanese: "こんなに",
      kana: "こんなに",
      vietnamese: "như thế này, đến mức này",
      english: "như thế này, đến mức này",
      type: "supplementary",
      example: "こんなに暑いです。\nKonna ni atsui desu.\nNóng đến mức này."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | c8c7bc2ef04f9a9b
    {
      japanese: "そんなに",
      kana: "そんなに",
      vietnamese: "như thế đó, đến mức đó",
      english: "như thế đó, đến mức đó",
      type: "supplementary",
      example: "そんなに心配しないでください。\nSonna ni shinpai shinaide kudasai.\nĐừng lo đến mức đó."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | a0e557f5b753aabc
    {
      japanese: "あんなに",
      kana: "あんなに",
      vietnamese: "như thế kia, đến mức kia",
      english: "như thế kia, đến mức kia",
      type: "supplementary",
      example: "あんなに人が多いです。\nAnna ni hito ga ooi desu.\nĐông người đến mức kia."
    },
    // source: review_tu_vung_bai_32.md | 2. Từ vựng về thiên nhiên, phương hướng, thời gian | cde6875e3bd9b750
    {
      japanese: "ヨーロッパ",
      kana: "ヨーロッパ",
      vietnamese: "châu Âu",
      english: "châu Âu",
      type: "supplementary",
      example: "ヨーロッパへ行きたいです。\nYooroppa e ikitai desu.\nTôi muốn đi châu Âu."
    },
    // source: review_tu_vung_bai_32.md | 3. Từ vựng hội thoại | cb2da7a4efb0bff1
    {
      japanese: "元気",
      kana: "げんき",
      vietnamese: "khỏe, khỏe mạnh",
      english: "khỏe, khỏe mạnh",
      type: "supplementary",
      example: "お元気ですか。\nOgenki desu ka.\nBạn có khỏe không?"
    },
    // source: review_tu_vung_bai_32.md | 3. Từ vựng hội thoại | d22bc396fab93c1b
    {
      japanese: "胃",
      kana: "い",
      vietnamese: "dạ dày",
      english: "dạ dày",
      type: "supplementary",
      example: "胃が痛いです。\nI ga itai desu.\nTôi đau dạ dày."
    },
    // source: review_tu_vung_bai_32.md | 3. Từ vựng hội thoại | 910024fec74fe9d3
    {
      japanese: "ストレス",
      kana: "ストレス",
      vietnamese: "stress, căng thẳng",
      english: "stress, căng thẳng",
      type: "supplementary",
      example: "ストレスがあります。\nSutoresu ga arimasu.\nTôi bị căng thẳng."
    },
    // source: review_tu_vung_bai_32.md | 3. Từ vựng hội thoại | e1fce17a284273b1
    {
      japanese: "それはいけませんね。",
      kana: "それはいけませんね。",
      vietnamese: "Thế thì thật không tốt.",
      english: "Thế thì thật không tốt.",
      type: "supplementary",
      example: "A: 胃が痛いです。\nI ga itai desu.\nB: それはいけませんね。\nSore wa ikemasen ne."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | daeb3238930fdd8c
    {
      japanese: "星占い",
      kana: "ほしうらない",
      vietnamese: "bói sao",
      english: "bói sao",
      type: "supplementary",
      example: "星占いを読みます。\nHoshi uranai o yomimasu.\nTôi đọc bói sao."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 13f7e1c150ca641c
    {
      japanese: "牡牛座",
      kana: "おうしざ",
      vietnamese: "chòm sao Kim Ngưu",
      english: "chòm sao Kim Ngưu",
      type: "supplementary",
      example: "私は牡牛座です。\nWatashi wa oushiza desu.\nTôi thuộc cung Kim Ngưu."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 4e331355955e338a
    {
      japanese: "働きすぎ",
      kana: "はたらきすぎ",
      vietnamese: "làm việc quá sức",
      english: "làm việc quá sức",
      type: "supplementary",
      example: "働きすぎはよくないです。\nHataraki sugi wa yokunai desu.\nLàm việc quá sức là không tốt."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 994b2c14da9d8c6b
    {
      japanese: "困ります",
      kana: "こまります",
      vietnamese: "rắc rối, khó xử",
      english: "rắc rối, khó xử",
      type: "supplementary",
      example: "お金がなくて困っています。\nOkane ga nakute komatte imasu.\nTôi đang khó xử vì không có tiền."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | ccc7de1a73f5640a
    {
      japanese: "宝くじ",
      kana: "たからくじ",
      vietnamese: "xổ số",
      english: "xổ số",
      type: "supplementary",
      example: "宝くじを買いました。\nTakara kuji o kaimashita.\nTôi đã mua vé số."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | f2b0229d8fe75294
    {
      japanese: "当たります",
      kana: "あたります",
      vietnamese: "trúng, trúng thưởng",
      english: "trúng, trúng thưởng",
      type: "supplementary",
      example: "宝くじが当たりました。\nTakara kuji ga atarimashita.\nTôi đã trúng xổ số."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 09e8d86128b12326
    {
      japanese: "健康",
      kana: "けんこう",
      vietnamese: "sức khỏe",
      english: "sức khỏe",
      type: "supplementary",
      example: "健康に気をつけます。\nKenkou ni ki o tsukemasu.\nTôi chú ý đến sức khỏe."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 0402081c601e9bb7
    {
      japanese: "恋愛",
      kana: "れんあい",
      vietnamese: "tình yêu",
      english: "tình yêu",
      type: "supplementary",
      example: "恋愛運がいいです。\nRen’ai un ga ii desu.\nVận tình yêu tốt."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 26bcf176f3454f68
    {
      japanese: "恋人",
      kana: "こいびと",
      vietnamese: "người yêu",
      english: "người yêu",
      type: "supplementary",
      example: "恋人に会います。\nKoibito ni aimasu.\nTôi gặp người yêu."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | 18b414705edf898e
    {
      japanese: "ラッキーアイテム",
      kana: "ラッキーアイテム",
      vietnamese: "vật may mắn",
      english: "vật may mắn",
      type: "supplementary",
      example: "今日のラッキーアイテムは石です。\nKyou no rakkii aitemu wa ishi desu.\nVật may mắn hôm nay là đá."
    },
    // source: review_tu_vung_bai_32.md | 4. Từ vựng bài đọc | de550c0f568db518
    {
      japanese: "石",
      kana: "いし",
      vietnamese: "đá, viên đá",
      english: "đá, viên đá",
      type: "supplementary",
      example: "石を拾いました。\nIshi o hiroimashita.\nTôi đã nhặt một viên đá."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 1584a657f2bd3347
    {
      japanese: "試験に合格します",
      kana: "試験に合格します",
      vietnamese: "đỗ kỳ thi",
      english: "đỗ kỳ thi",
      type: "supplementary",
      example: "Dùng trợ từ に / ni."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 5f4a2be821270f08
    {
      japanese: "試験に失敗します",
      kana: "試験に失敗します",
      vietnamese: "trượt kỳ thi",
      english: "trượt kỳ thi",
      type: "supplementary",
      example: "Dùng に / ni, không dùng を."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 3703227995b9904e
    {
      japanese: "雨がやみます",
      kana: "雨がやみます",
      vietnamese: "mưa tạnh",
      english: "mưa tạnh",
      type: "supplementary",
      example: "Chủ ngữ là 雨 / ame."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | bfa19684290d6f76
    {
      japanese: "熱が続きます",
      kana: "熱が続きます",
      vietnamese: "sốt kéo dài",
      english: "sốt kéo dài",
      type: "supplementary",
      example: "Chủ ngữ là 熱 / netsu."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 63899015804cd91c
    {
      japanese: "風邪をひきます",
      kana: "風邪をひきます",
      vietnamese: "bị cảm",
      english: "bị cảm",
      type: "supplementary",
      example: "Dùng trợ từ を / o."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 16a0b5f80aebc96a
    {
      japanese: "道が込みます",
      kana: "道が込みます",
      vietnamese: "đường đông",
      english: "đường đông",
      type: "supplementary",
      example: "Chủ ngữ là 道 / michi."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | ac1a39ebd9e42c23
    {
      japanese: "道がすきます",
      kana: "道がすきます",
      vietnamese: "đường vắng",
      english: "đường vắng",
      type: "supplementary",
      example: "Trái nghĩa với 込みます / komimasu."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 15082eb1b0da3ec1
    {
      japanese: "試合に出ます",
      kana: "試合に出ます",
      vietnamese: "tham gia trận đấu",
      english: "tham gia trận đấu",
      type: "supplementary",
      example: "出ます / demasu ở đây là “tham gia”."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | bc40256c8a80e998
    {
      japanese: "パーティーに出ます",
      kana: "パーティーに出ます",
      vietnamese: "dự tiệc",
      english: "dự tiệc",
      type: "supplementary",
      example: "Cũng dùng に / ni."
    },
    // source: review_tu_vung_bai_32.md | 5. Cụm từ cần nhớ | 183251c1ecbbd6ce
    {
      japanese: "無理をします",
      kana: "無理をします",
      vietnamese: "cố quá, gắng sức",
      english: "cố quá, gắng sức",
      type: "supplementary",
      example: "Hay dùng: 無理をしないでください."
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | f79f65604b997567
    {
      japanese: "運",
      kana: "ウン / un",
      vietnamese: "Vận — vận chuyển, vận may",
      english: "vận chuyển, vận may",
      type: "kanji",
      example: "運動 / undou"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | c8cec974ffdc2be2
    {
      japanese: "動",
      kana: "ドウ / dou",
      vietnamese: "Động — chuyển động",
      english: "chuyển động",
      type: "kanji",
      example: "運動 / undou, 働きすぎ / hataraki sugi"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 87b91ead9376d6ea
    {
      japanese: "合",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — hợp, khớp",
      english: "hợp, khớp",
      type: "kanji",
      example: "合格 / goukaku"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 15ae2200d67706d7
    {
      japanese: "雨",
      kana: "ウ / u",
      vietnamese: "Vũ — mưa",
      english: "mưa",
      type: "kanji",
      example: "雨がやみます / ame ga yamimasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 54d49af7bc3c7c77
    {
      japanese: "晴",
      kana: "セイ / sei",
      vietnamese: "Tình — trời quang, nắng",
      english: "trời quang, nắng",
      type: "kanji",
      example: "晴れます / haremasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 245069ed7b201b62
    {
      japanese: "熱",
      kana: "ネツ / netsu",
      vietnamese: "Nhiệt — nóng, sốt",
      english: "nóng, sốt",
      type: "kanji",
      example: "熱が続きます / netsu ga tsuzukimasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 4589060d8f05ac08
    {
      japanese: "冷",
      kana: "レイ / rei",
      vietnamese: "Lãnh — lạnh, làm lạnh",
      english: "lạnh, làm lạnh",
      type: "kanji",
      example: "冷やします / hiyashimasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 6e76803773c5ec6c
    {
      japanese: "道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — đường",
      english: "đường",
      type: "kanji",
      example: "道が込みます / michi ga komimasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 32ead531771f753b
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, xuất hiện",
      english: "ra, xuất hiện",
      type: "kanji",
      example: "出ます / demasu"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | ae5b245d0025cad9
    {
      japanese: "十",
      kana: "ジュウ / juu",
      vietnamese: "Thập — mười",
      english: "mười",
      type: "kanji",
      example: "十分 / juubun"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 6fa4b92b9a4dc499
    {
      japanese: "分",
      kana: "ブン / bun, フン / fun",
      vietnamese: "Phân — phần, phút, hiểu",
      english: "phần, phút, hiểu",
      type: "kanji",
      example: "十分 / juubun"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | c632caa288c09d58
    {
      japanese: "先",
      kana: "セン / sen",
      vietnamese: "Tiên — trước",
      english: "trước",
      type: "kanji",
      example: "先生 / sensei"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | c8f29ebe08421de3
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Sinh — sống, sinh ra",
      english: "sống, sinh ra",
      type: "kanji",
      example: "先生 / sensei"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | d86cb3e1c607b2b0
    {
      japanese: "空",
      kana: "クウ / kuu",
      vietnamese: "Không — trời, trống",
      english: "trời, trống",
      type: "kanji",
      example: "空 / sora"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | fe651aef6a32972c
    {
      japanese: "太",
      kana: "タイ / tai, タ / ta",
      vietnamese: "Thái — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "太陽 / taiyou"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | ce0a0bed70cd4e46
    {
      japanese: "星",
      kana: "セイ / sei",
      vietnamese: "Tinh — sao",
      english: "sao",
      type: "kanji",
      example: "星 / hoshi, 星占い / hoshi uranai"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 652b3b7aca1ea366
    {
      japanese: "風",
      kana: "フウ / fuu",
      vietnamese: "Phong — gió",
      english: "gió",
      type: "kanji",
      example: "風 / kaze"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | db0ddc79178eb2f7
    {
      japanese: "東",
      kana: "トウ / tou",
      vietnamese: "Đông — phía đông",
      english: "phía đông",
      type: "kanji",
      example: "東 / higashi"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 8f8be00bfa83b4fe
    {
      japanese: "西",
      kana: "セイ / sei, サイ / sai",
      vietnamese: "Tây — phía tây",
      english: "phía tây",
      type: "kanji",
      example: "西 / nishi"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 40b2469ce10fcfa3
    {
      japanese: "南",
      kana: "ナン / nan",
      vietnamese: "Nam — phía nam",
      english: "phía nam",
      type: "kanji",
      example: "南 / minami"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 017073879479fd1e
    {
      japanese: "北",
      kana: "ホク / hoku",
      vietnamese: "Bắc — phía bắc",
      english: "phía bắc",
      type: "kanji",
      example: "北 / kita"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | c04f265527be0d98
    {
      japanese: "国",
      kana: "コク / koku",
      vietnamese: "Quốc — nước, quốc gia",
      english: "nước, quốc gia",
      type: "kanji",
      example: "国際 / kokusai"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 2f2440df48a8aebd
    {
      japanese: "水",
      kana: "スイ / sui",
      vietnamese: "Thủy — nước",
      english: "nước",
      type: "kanji",
      example: "水道 / suidou"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 79541374c6baabd8
    {
      japanese: "今",
      kana: "コン / kon, キン / kin",
      vietnamese: "Kim — bây giờ",
      english: "bây giờ",
      type: "kanji",
      example: "今夜 / konya"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 748f88928b5fc231
    {
      japanese: "夜",
      kana: "ヤ / ya",
      vietnamese: "Dạ — đêm",
      english: "đêm",
      type: "kanji",
      example: "今夜 / konya"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 888a7966c4a68328
    {
      japanese: "夕",
      kana: "セキ / seki",
      vietnamese: "Tịch — chiều tối",
      english: "chiều tối",
      type: "kanji",
      example: "夕方 / yuugata"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 0e61c6b00a4afa0a
    {
      japanese: "方",
      kana: "ホウ / hou",
      vietnamese: "Phương — hướng, phía, cách",
      english: "hướng, phía, cách",
      type: "kanji",
      example: "夕方 / yuugata"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 2d72c9e93c913f94
    {
      japanese: "前",
      kana: "ゼン / zen",
      vietnamese: "Tiền — trước",
      english: "trước",
      type: "kanji",
      example: "前 / mae"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 66f34b93e5da5034
    {
      japanese: "遅",
      kana: "チ / chi",
      vietnamese: "Trì — muộn, chậm",
      english: "muộn, chậm",
      type: "kanji",
      example: "遅く / osoku"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | de28f04aa514c7e1
    {
      japanese: "元",
      kana: "ゲン / gen",
      vietnamese: "Nguyên — gốc, nguyên khí",
      english: "gốc, nguyên khí",
      type: "kanji",
      example: "元気 / genki"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | b23c433fddb28e74
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần",
      english: "khí, tinh thần",
      type: "kanji",
      example: "元気 / genki"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 469e54d8038e92c0
    {
      japanese: "牛",
      kana: "ギュウ / gyuu",
      vietnamese: "Ngưu — bò",
      english: "bò",
      type: "kanji",
      example: "牡牛座 / oushiza"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | 10cc0f8a8b30cf88
    {
      japanese: "人",
      kana: "ジン / jin, ニン / nin",
      vietnamese: "Nhân — người",
      english: "người",
      type: "kanji",
      example: "恋人 / koibito"
    },
    // source: review_tu_vung_bai_32.md | 6. Kanji N5–N4 cần học kỹ | dce626f6421c97aa
    {
      japanese: "石",
      kana: "セキ / seki",
      vietnamese: "Thạch — đá",
      english: "đá",
      type: "kanji",
      example: "石 / ishi"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0d31e9683dd57cfd
    {
      japanese: "運動",
      kana: "ウン / un",
      vietnamese: "Vận — 運 = vận động/vận chuyển; 動 = chuyển động",
      english: "運 = vận động/vận chuyển; 動 = chuyển động",
      type: "kanji",
      example: "運動"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 979f095ed910f5ff
    {
      japanese: "動く",
      kana: "うご.く / ugoku",
      vietnamese: "Động — 動 = chuyển động",
      english: "動 = chuyển động",
      type: "kanji",
      example: "動く"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c7b6af3e56b883f4
    {
      japanese: "動物",
      kana: "ドウ / dou",
      vietnamese: "Động — 動 = chuyển động; 物 = vật",
      english: "動 = chuyển động; 物 = vật",
      type: "kanji",
      example: "動物"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 74ed21f1ca43efa7
    {
      japanese: "合格",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — 合 = hợp, khớp; 格 = tư cách, chuẩn",
      english: "合 = hợp, khớp; 格 = tư cách, chuẩn",
      type: "kanji",
      example: "合格"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9c899c598215e207
    {
      japanese: "合う",
      kana: "あ.う / au",
      vietnamese: "Hợp — 合 = gặp, hợp lại",
      english: "合 = gặp, hợp lại",
      type: "kanji",
      example: "合う"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d3344ebab44cd80a
    {
      japanese: "雨",
      kana: "あめ / ame",
      vietnamese: "Vũ — 雨 = mưa",
      english: "雨 = mưa",
      type: "kanji",
      example: "雨"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | aec274014c4d0537
    {
      japanese: "大雨",
      kana: "ウ / u",
      vietnamese: "Vũ — 大 = lớn; 雨 = mưa",
      english: "大 = lớn; 雨 = mưa",
      type: "kanji",
      example: "大雨"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 71b9d8caa5c2a781
    {
      japanese: "晴れる",
      kana: "は.れる / hareru",
      vietnamese: "Tình — 晴 = trời quang",
      english: "晴 = trời quang",
      type: "kanji",
      example: "晴れる"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e9057cd398c75222
    {
      japanese: "熱心",
      kana: "ネツ / netsu",
      vietnamese: "Nhiệt — 熱 = nóng; 心 = tim, lòng",
      english: "熱 = nóng; 心 = tim, lòng",
      type: "kanji",
      example: "熱心"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b3529dde9d8ba5eb
    {
      japanese: "冷やす",
      kana: "ひ.やす / hiyasu",
      vietnamese: "Lãnh — 冷 = làm lạnh",
      english: "冷 = làm lạnh",
      type: "kanji",
      example: "冷やす"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f9ebd1a565644635
    {
      japanese: "冷水",
      kana: "レイ / rei",
      vietnamese: "Lãnh — 冷 = lạnh; 水 = nước",
      english: "冷 = lạnh; 水 = nước",
      type: "kanji",
      example: "冷水"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 558c400e06d5b132
    {
      japanese: "道",
      kana: "みち / michi",
      vietnamese: "Đạo — 道 = đường",
      english: "道 = đường",
      type: "kanji",
      example: "道"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ccb0d5a1d1e4177a
    {
      japanese: "水道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — 水 = nước; 道 = đường/ống dẫn",
      english: "水 = nước; 道 = đường/ống dẫn",
      type: "kanji",
      example: "水道"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ec1efac0121a1ff0
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f10669c80d09df4f
    {
      japanese: "出す",
      kana: "だ.す / dasu",
      vietnamese: "Xuất — 出 = đưa ra",
      english: "出 = đưa ra",
      type: "kanji",
      example: "出す"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3d3793e02cb11df0
    {
      japanese: "十分",
      kana: "ジュウ / juu",
      vietnamese: "Thập — 十 = mười; 分 = phần",
      english: "十 = mười; 分 = phần",
      type: "kanji",
      example: "十分"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8ccd5e24c5c3c293
    {
      japanese: "十分",
      kana: "ブン / bun",
      vietnamese: "Phân — 十 = mười; 分 = phần",
      english: "十 = mười; 分 = phần",
      type: "kanji",
      example: "十分"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b69e5547e256886e
    {
      japanese: "分かる",
      kana: "わ.かる / wakaru",
      vietnamese: "Phân — 分 = hiểu, phân biệt",
      english: "分 = hiểu, phân biệt",
      type: "kanji",
      example: "分かる"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7e3bc5f421a1b5ca
    {
      japanese: "先生",
      kana: "セン / sen",
      vietnamese: "Tiên — 先 = trước; 生 = sinh ra",
      english: "先 = trước; 生 = sinh ra",
      type: "kanji",
      example: "先生"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 61ef1442707f8a3d
    {
      japanese: "先生",
      kana: "セイ / sei",
      vietnamese: "Sinh — 先 = trước; 生 = sinh ra",
      english: "先 = trước; 生 = sinh ra",
      type: "kanji",
      example: "先生"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0faee863737bdcc6
    {
      japanese: "空",
      kana: "そら / sora",
      vietnamese: "Không — 空 = bầu trời",
      english: "空 = bầu trời",
      type: "kanji",
      example: "空"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1f5d07b2e5464f91
    {
      japanese: "空港",
      kana: "クウ / kuu",
      vietnamese: "Không — 空 = không; 港 = cảng",
      english: "空 = không; 港 = cảng",
      type: "kanji",
      example: "空港"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f403ba7c15a089aa
    {
      japanese: "太陽",
      kana: "タイ / tai",
      vietnamese: "Thái — 太 = to, lớn; 陽 = mặt trời",
      english: "太 = to, lớn; 陽 = mặt trời",
      type: "kanji",
      example: "太陽"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c18c92d380e25cc0
    {
      japanese: "星",
      kana: "ほし / hoshi",
      vietnamese: "Tinh — 星 = sao",
      english: "星 = sao",
      type: "kanji",
      example: "星"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fe3873ced52f868e
    {
      japanese: "星占い",
      kana: "ほし / hoshi",
      vietnamese: "Tinh — 星 = sao; 占い = bói",
      english: "星 = sao; 占い = bói",
      type: "kanji",
      example: "星占い"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 249e7d717dcb42ba
    {
      japanese: "風",
      kana: "かぜ / kaze",
      vietnamese: "Phong — 風 = gió",
      english: "風 = gió",
      type: "kanji",
      example: "風"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 477d33f59c9d27ba
    {
      japanese: "台風",
      kana: "フウ / fuu",
      vietnamese: "Phong — 台 = đài, bệ; 風 = gió",
      english: "台 = đài, bệ; 風 = gió",
      type: "kanji",
      example: "台風"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fae7abf401fcdf04
    {
      japanese: "東",
      kana: "ひがし / higashi",
      vietnamese: "Đông — 東 = phía đông",
      english: "東 = phía đông",
      type: "kanji",
      example: "東"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d5a9ee4bdc4703e5
    {
      japanese: "東京",
      kana: "トウ / tou",
      vietnamese: "Đông — 東 = đông; 京 = kinh đô",
      english: "東 = đông; 京 = kinh đô",
      type: "kanji",
      example: "東京"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 74aa44b8ed6e837c
    {
      japanese: "西",
      kana: "にし / nishi",
      vietnamese: "Tây — 西 = phía tây",
      english: "西 = phía tây",
      type: "kanji",
      example: "西"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | dbcb0b26623a15fd
    {
      japanese: "南",
      kana: "みなみ / minami",
      vietnamese: "Nam — 南 = phía nam",
      english: "南 = phía nam",
      type: "kanji",
      example: "南"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3e6bfc85954c4fca
    {
      japanese: "北",
      kana: "きた / kita",
      vietnamese: "Bắc — 北 = phía bắc",
      english: "北 = phía bắc",
      type: "kanji",
      example: "北"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 13a2f875a500f51f
    {
      japanese: "国際",
      kana: "コク / koku",
      vietnamese: "Quốc — 国 = nước; 際 = ranh giới/quốc tế",
      english: "国 = nước; 際 = ranh giới/quốc tế",
      type: "kanji",
      example: "国際"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 193e74b230644cc5
    {
      japanese: "国",
      kana: "くに / kuni",
      vietnamese: "Quốc — 国 = nước",
      english: "国 = nước",
      type: "kanji",
      example: "国"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 28624c51a8272272
    {
      japanese: "水",
      kana: "みず / mizu",
      vietnamese: "Thủy — 水 = nước",
      english: "水 = nước",
      type: "kanji",
      example: "水"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 730fbd38af1f14ed
    {
      japanese: "水道",
      kana: "スイ / sui",
      vietnamese: "Thủy — 水 = nước; 道 = đường/ống dẫn",
      english: "水 = nước; 道 = đường/ống dẫn",
      type: "kanji",
      example: "水道"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bd331a0a3e62a27a
    {
      japanese: "今夜",
      kana: "コン / kon",
      vietnamese: "Kim — 今 = bây giờ; 夜 = đêm",
      english: "今 = bây giờ; 夜 = đêm",
      type: "kanji",
      example: "今夜"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | feab0b6cbd9274dd
    {
      japanese: "今",
      kana: "いま / ima",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | cfd83bf1cb209849
    {
      japanese: "今夜",
      kana: "ヤ / ya",
      vietnamese: "Dạ — 今 = bây giờ; 夜 = đêm",
      english: "今 = bây giờ; 夜 = đêm",
      type: "kanji",
      example: "今夜"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8bae5d5cb5dc209f
    {
      japanese: "夜",
      kana: "よる / yoru",
      vietnamese: "Dạ — 夜 = đêm",
      english: "夜 = đêm",
      type: "kanji",
      example: "夜"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f6419f71336638a6
    {
      japanese: "夕方",
      kana: "ゆう / yuu",
      vietnamese: "Tịch — 夕 = chiều; 方 = phía/khoảng thời gian",
      english: "夕 = chiều; 方 = phía/khoảng thời gian",
      type: "kanji",
      example: "夕方"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3a0a61a6d9f20e56
    {
      japanese: "夕方",
      kana: "かた / kata/gata",
      vietnamese: "Phương — 夕 = chiều; 方 = khoảng/phía",
      english: "夕 = chiều; 方 = khoảng/phía",
      type: "kanji",
      example: "夕方"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 82432c304b181929
    {
      japanese: "前",
      kana: "まえ / mae",
      vietnamese: "Tiền — 前 = trước",
      english: "前 = trước",
      type: "kanji",
      example: "前"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b4e5f7763da43528
    {
      japanese: "遅い",
      kana: "おそ.い / osoi",
      vietnamese: "Trì — 遅 = muộn, chậm",
      english: "遅 = muộn, chậm",
      type: "kanji",
      example: "遅い"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d81208cd130ae074
    {
      japanese: "元気",
      kana: "ゲン / gen",
      vietnamese: "Nguyên — 元 = nguồn gốc; 気 = khí/tinh thần",
      english: "元 = nguồn gốc; 気 = khí/tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a554eedc0ceb1a6e
    {
      japanese: "元気",
      kana: "キ / ki",
      vietnamese: "Khí — 元 = nguồn gốc; 気 = khí/tinh thần",
      english: "元 = nguồn gốc; 気 = khí/tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c1028aa4f8cff100
    {
      japanese: "牡牛座",
      kana: "うし / ushi",
      vietnamese: "Ngưu — 牡 = con đực; 牛 = bò; 座 = chòm/cung",
      english: "牡 = con đực; 牛 = bò; 座 = chòm/cung",
      type: "kanji",
      example: "牡牛座"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3216b50a461e3fca
    {
      japanese: "恋人",
      kana: "ひと / hito/bito",
      vietnamese: "Nhân — 恋 = yêu; 人 = người",
      english: "恋 = yêu; 人 = người",
      type: "kanji",
      example: "恋人"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f9c24e348001a6b3
    {
      japanese: "石",
      kana: "いし / ishi",
      vietnamese: "Thạch — 石 = đá",
      english: "石 = đá",
      type: "kanji",
      example: "石"
    },
    // source: review_tu_vung_bai_32.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c6f0e8d097816f53
    {
      japanese: "宝石",
      kana: "セキ / seki",
      vietnamese: "Thạch — 宝 = báu; 石 = đá",
      english: "宝 = báu; 石 = đá",
      type: "kanji",
      example: "宝石"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '〜てあげる',
      vietnamese: 'làm ~ cho (người khác)',
      english: 'to do ~ for (someone)',
      type: 'main',
      explanation: 'Biểu thị hành động mà người nói hoặc người trong nhóm của người nói làm cho người khác. Chủ ngữ là người làm. Người nhận lợi ích được đánh dấu bằng に.',
      examples: [
        {
          japanese: '友達に日本語を教えてあげました。',
          vietnamese: 'Tôi đã dạy tiếng Nhật cho bạn.',
          english: 'I taught Japanese to my friend.',
          type: 'main'
        },
        {
          japanese: '母に手紙を書いてあげました。',
          vietnamese: 'Tôi đã viết thư cho mẹ.',
          english: 'I wrote a letter for my mother.',
          type: 'main'
        },
        {
          japanese: '荷物を持ってあげましょうか。',
          vietnamese: 'Để tôi mang hành lý cho bạn nhé?',
          english: 'Shall I carry your luggage for you?',
          type: 'main'
        },
        {
          japanese: '弟に本を読んであげました。',
          vietnamese: 'Tôi đọc sách cho em trai.',
          english: 'I read a book to my younger brother.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てくれる',
      vietnamese: 'làm ~ cho tôi',
      english: 'to do ~ for me',
      type: 'main',
      explanation: 'Biểu thị hành động mà người khác làm cho người nói hoặc người trong nhóm của người nói. Người nói là người nhận lợi ích. Chủ ngữ là người làm (được đánh dấu bằng が).',
      examples: [
        {
          japanese: '友達が日本語を教えてくれました。',
          vietnamese: 'Bạn tôi đã dạy tiếng Nhật cho tôi.',
          english: 'My friend taught me Japanese.',
          type: 'main'
        },
        {
          japanese: '母が手紙を書いてくれました。',
          vietnamese: 'Mẹ đã viết thư cho tôi.',
          english: 'My mother wrote a letter for me.',
          type: 'main'
        },
        {
          japanese: '手伝ってくれませんか。',
          vietnamese: 'Bạn có thể giúp tôi không?',
          english: 'Could you help me?',
          type: 'main'
        },
        {
          japanese: '駅まで送ってくれました。',
          vietnamese: 'Họ đã đưa tôi đến ga.',
          english: 'They took me to the station.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てもらう',
      vietnamese: 'được người khác làm ~ cho',
      english: 'to have someone do ~ for me',
      type: 'main',
      explanation: 'Biểu thị người nói nhận được hành động từ người khác. Người nói là người nhận lợi ích. Người làm được đánh dấu bằng に.',
      examples: [
        {
          japanese: '友達に日本語を教えてもらいました。',
          vietnamese: 'Tôi được bạn dạy tiếng Nhật.',
          english: 'I had my friend teach me Japanese.',
          type: 'main'
        },
        {
          japanese: '先生に推薦状を書いてもらいました。',
          vietnamese: 'Tôi được thầy viết thư giới thiệu.',
          english: 'I had my teacher write a letter of recommendation.',
          type: 'main'
        },
        {
          japanese: '友達に駅まで送ってもらいました。',
          vietnamese: 'Tôi được bạn đưa đến ga.',
          english: 'I had my friend take me to the station.',
          type: 'main'
        },
        {
          japanese: '写真を撮ってもらえますか。',
          vietnamese: 'Bạn có thể chụp ảnh cho tôi được không?',
          english: 'Could you take a picture for me?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てさしあげる',
      vietnamese: 'làm ~ cho (khiêm tốn)',
      english: 'to do ~ for (humble)',
      type: 'main',
      explanation: 'Dạng khiêm tốn của 〜てあげる. Dùng khi người nói làm điều gì đó cho người có địa vị cao hơn (giáo viên, khách hàng, v.v.).',
      examples: [
        {
          japanese: '先生の荷物を持ってさしあげました。',
          vietnamese: 'Tôi đã mang hành lý cho thầy.',
          english: 'I carried my teacher\'s luggage.',
          type: 'main'
        },
        {
          japanese: 'お客様をご案内してさしあげます。',
          vietnamese: 'Tôi sẽ hướng dẫn quý khách.',
          english: 'I will guide the customer.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜てくださる',
      vietnamese: 'làm ~ cho tôi (tôn kính)',
      english: 'to do ~ for me (honorific)',
      type: 'main',
      explanation: 'Dạng tôn kính của 〜てくれる. Dùng khi người có địa vị cao hơn làm điều gì đó cho người nói.',
      examples: [
        {
          japanese: '先生が推薦状を書いてくださいました。',
          vietnamese: 'Thầy đã viết thư giới thiệu cho tôi.',
          english: 'My teacher wrote a letter of recommendation for me.',
          type: 'main'
        },
        {
          japanese: '社長が説明してくださいました。',
          vietnamese: 'Giám đốc đã giải thích cho tôi.',
          english: 'The president explained to me.',
          type: 'main'
        },
        {
          japanese: '教えてくださいませんか。',
          vietnamese: 'Thầy có thể dạy cho em được không ạ?',
          english: 'Could you please teach me?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ていただく',
      vietnamese: 'được người khác làm ~ cho (khiêm tốn)',
      english: 'to have someone do ~ for me (humble)',
      type: 'main',
      explanation: 'Dạng khiêm tốn của 〜てもらう. Dùng khi người nói nhận được hành động từ người có địa vị cao hơn.',
      examples: [
        {
          japanese: '先生に推薦状を書いていただきました。',
          vietnamese: 'Tôi được thầy viết thư giới thiệu.',
          english: 'I had my teacher write a letter of recommendation.',
          type: 'main'
        },
        {
          japanese: '社長にアドバイスをいただきました。',
          vietnamese: 'Tôi được giám đốc cho lời khuyên.',
          english: 'I received advice from the president.',
          type: 'main'
        },
        {
          japanese: '見ていただけますか。',
          vietnamese: 'Anh có thể xem giúp tôi được không?',
          english: 'Could you please look at it for me?',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'あげる/くれる/もらう (物)',
      vietnamese: 'cho/nhận (đồ vật)',
      english: 'to give/receive (objects)',
      type: 'additional',
      explanation: 'Dùng trực tiếp với danh từ để biểu thị cho và nhận đồ vật.',
      examples: [
        {
          japanese: '友達に本をあげました。',
          vietnamese: 'Tôi cho bạn một quyển sách.',
          english: 'I gave my friend a book.',
          type: 'main'
        },
        {
          japanese: '友達が本をくれました。',
          vietnamese: 'Bạn tôi cho tôi một quyển sách.',
          english: 'My friend gave me a book.',
          type: 'main'
        },
        {
          japanese: '友達に本をもらいました。',
          vietnamese: 'Tôi nhận được sách từ bạn.',
          english: 'I received a book from my friend.',
          type: 'main'
        }
      ]
    }
  ]
};

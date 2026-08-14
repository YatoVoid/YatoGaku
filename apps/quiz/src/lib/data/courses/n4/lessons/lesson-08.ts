/**
 * N4 Core Lessons — Lesson 08: Passive Form
 * Focus: 受身形 (passive form) - expressing receiving actions
 */

import type { LessonData } from '$lib/types';

export const LESSON_08_DATA: LessonData = {
  lessonNumber: 8,
  title: '受身形 (Passive Form)',
  vocabulary: [
    // Verbs commonly used in passive
    {
      japanese: '褒める',
      kana: 'ほめる',
      vietnamese: 'khen ngợi',
      english: 'to praise',
      type: 'main',
      example: '先生に褒められました。'
    },
    {
      japanese: '叱る',
      kana: 'しかる',
      vietnamese: 'mắng',
      english: 'to scold',
      type: 'main',
      example: '母に叱られました。'
    },
    {
      japanese: '怒る',
      kana: 'おこる',
      vietnamese: 'tức giận',
      english: 'to get angry',
      type: 'main',
      example: '先生に怒られました。'
    },
    {
      japanese: '笑う',
      kana: 'わらう',
      vietnamese: 'cười',
      english: 'to laugh',
      type: 'main',
      example: 'みんなに笑われました。'
    },
    {
      japanese: '見る',
      kana: 'みる',
      vietnamese: 'nhìn',
      english: 'to see, to look at',
      type: 'main',
      example: 'じろじろ見られて嫌でした。'
    },
    {
      japanese: '呼ぶ',
      kana: 'よぶ',
      vietnamese: 'gọi',
      english: 'to call',
      type: 'main',
      example: '先生に呼ばれました。'
    },
    {
      japanese: '誘う',
      kana: 'さそう',
      vietnamese: 'rủ, mời',
      english: 'to invite',
      type: 'main',
      example: '友達にパーティーに誘われました。'
    },
    {
      japanese: '頼む',
      kana: 'たのむ',
      vietnamese: 'nhờ vả',
      english: 'to request',
      type: 'main',
      example: '上司に仕事を頼まれました。'
    },
    {
      japanese: '命じる',
      kana: 'めいじる',
      vietnamese: 'ra lệnh',
      english: 'to order, to command',
      type: 'main',
      example: '出張を命じられました。'
    },
    {
      japanese: '注意する',
      kana: 'ちゅういする',
      vietnamese: 'chú ý, nhắc nhở',
      english: 'to caution, to warn',
      type: 'main',
      example: '先生に注意されました。'
    },
    {
      japanese: '批判する',
      kana: 'ひはんする',
      vietnamese: 'phê bình',
      english: 'to criticize',
      type: 'main',
      example: '計画を批判されました。'
    },
    {
      japanese: '邪魔する',
      kana: 'じゃまする',
      vietnamese: 'làm phá, cản trở',
      english: 'to disturb, to interfere',
      type: 'main',
      example: '勉強を邪魔されました。'
    },
    {
      japanese: '盗む',
      kana: 'ぬすむ',
      vietnamese: 'ăn cắp',
      english: 'to steal',
      type: 'main',
      example: '財布を盗まれました。'
    },
    {
      japanese: '壊す',
      kana: 'こわす',
      vietnamese: 'phá hủy',
      english: 'to break, to destroy',
      type: 'main',
      example: 'カメラを壊されました。'
    },
    {
      japanese: '踏む',
      kana: 'ふむ',
      vietnamese: 'giẫm',
      english: 'to step on',
      type: 'main',
      example: '足を踏まれました。'
    },
    {
      japanese: '押す',
      kana: 'おす',
      vietnamese: 'đẩy',
      english: 'to push',
      type: 'main',
      example: '電車で押されました。'
    },
    {
      japanese: 'ぶつかる',
      kana: 'ぶつかる',
      vietnamese: 'va chạm',
      english: 'to bump into',
      type: 'main',
      example: '自転車にぶつかられました。'
    },
    {
      japanese: '噛む',
      kana: 'かむ',
      vietnamese: 'cắn',
      english: 'to bite',
      type: 'main',
      example: '犬に噛まれました。'
    },
    {
      japanese: '刺す',
      kana: 'さす',
      vietnamese: 'đâm, chích',
      english: 'to sting, to stab',
      type: 'main',
      example: '蚊に刺されました。'
    },
    {
      japanese: '殺す',
      kana: 'ころす',
      vietnamese: 'giết',
      english: 'to kill',
      type: 'main',
      example: '昆虫に殺されました。'
    },
    // Verbs for beneficial passive
    {
      japanese: '生まれる',
      kana: 'うまれる',
      vietnamese: 'sinh ra',
      english: 'to be born',
      type: 'main',
      example: '東京で生まれました。'
    },
    {
      japanese: '建てる',
      kana: 'たてる',
      vietnamese: 'xây dựng',
      english: 'to build',
      type: 'main',
      example: 'この建物は100年前に建てられました。'
    },
    {
      japanese: '作る',
      kana: 'つくる',
      vietnamese: 'làm, chế tạo',
      english: 'to make',
      type: 'main',
      example: 'この時計は日本で作られました。'
    },
    {
      japanese: '書く',
      kana: 'かく',
      vietnamese: 'viết',
      english: 'to write',
      type: 'main',
      example: 'この本は夏目漱石に書かれました。'
    },
    {
      japanese: '発明する',
      kana: 'はつめいする',
      vietnamese: 'phát minh',
      english: 'to invent',
      type: 'main',
      example: '電話はベルによって発明されました。'
    },
    {
      japanese: '発見する',
      kana: 'はっけんする',
      vietnamese: 'phát hiện',
      english: 'to discover',
      type: 'main',
      example: '新しい星が発見されました。'
    },
    {
      japanese: '選ぶ',
      kana: 'えらぶ',
      vietnamese: 'chọn',
      english: 'to choose, to elect',
      type: 'main',
      example: '社長に選ばれました。'
    },
    {
      japanese: '招待する',
      kana: 'しょうたいする',
      vietnamese: 'mời (chính thức)',
      english: 'to invite (formal)',
      type: 'main',
      example: '結婚式に招待されました。'
    },
    {
      japanese: '尊敬する',
      kana: 'そんけいする',
      vietnamese: 'tôn kính',
      english: 'to respect',
      type: 'main',
      example: 'みんなに尊敬されています。'
    },
    {
      japanese: '愛する',
      kana: 'あいする',
      vietnamese: 'yêu thương',
      english: 'to love',
      type: 'main',
      example: '家族に愛されています。'
    },
    // Related nouns and adjectives
    {
      japanese: '被害',
      kana: 'ひがい',
      vietnamese: 'thiệt hại',
      english: 'damage, harm',
      type: 'main',
      example: '台風の被害を受けました。'
    },
    {
      japanese: '迷惑',
      kana: 'めいわく',
      vietnamese: 'phiền toái',
      english: 'trouble, nuisance',
      type: 'main',
      example: '迷惑をかけられました。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence',
      type: 'main',
      example: '先生に大きな影響を受けました。'
    },
    {
      japanese: '評価',
      kana: 'ひょうか',
      vietnamese: 'đánh giá',
      english: 'evaluation',
      type: 'main',
      example: '高く評価されました。'
    },
    {
      japanese: '批評',
      kana: 'ひひょう',
      vietnamese: 'phê bình',
      english: 'criticism, review',
      type: 'main',
      example: '作品が批評されました。'
    },
    {
      japanese: '感動',
      kana: 'かんどう',
      vietnamese: 'cảm động',
      english: 'emotion, impression',
      type: 'main',
      example: '映画に感動しました。'
    },
    {
      japanese: '印象',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'main',
      example: '良い印象を持たれました。'
    },
    {
      japanese: '恥ずかしい',
      kana: 'はずかしい',
      vietnamese: 'xấu hổ',
      english: 'embarrassed',
      type: 'main',
      example: '間違いを指摘されて恥ずかしかったです。'
    },
    {
      japanese: '悲しい',
      kana: 'かなしい',
      vietnamese: 'buồn',
      english: 'sad',
      type: 'main',
      example: 'ペットが死んで悲しかったです。'
    },
    {
      japanese: '悔しい',
      kana: 'くやしい',
      vietnamese: 'tức tối',
      english: 'vexing, regrettable',
      type: 'main',
      example: '試合に負けて悔しかったです。'
    },
    // Additional expressions
    {
      japanese: '迷惑をかける',
      kana: 'めいわくをかける',
      vietnamese: 'gây phiền phức',
      english: 'to cause trouble',
      type: 'additional',
      example: '迷惑をかけてすみません。'
    },
    {
      japanese: '被害を受ける',
      kana: 'ひがいをうける',
      vietnamese: 'chịu thiệt hại',
      english: 'to suffer damage',
      type: 'additional',
      example: '地震で被害を受けました。'
    },
    {
      japanese: '影響を受ける',
      kana: 'えいきょうをうける',
      vietnamese: 'chịu ảnh hưởng',
      english: 'to be influenced',
      type: 'additional',
      example: '先生に大きな影響を受けました。'
    },
    {
      japanese: 'びっくりする',
      kana: 'びっくりする',
      vietnamese: 'ngạc nhiên',
      english: 'to be surprised',
      type: 'additional',
      example: '突然呼ばれてびっくりしました。'
    },
    {
      japanese: 'がっかりする',
      kana: 'がっかりする',
      vietnamese: 'thất vọng',
      english: 'to be disappointed',
      type: 'additional',
      example: '結果を見てがっかりしました。'
    },
    {
      japanese: 'むかつく',
      kana: 'むかつく',
      vietnamese: 'khó chịu',
      english: 'to be irritated',
      type: 'additional',
      example: '嘘をつかれてむかつきました。'
    },
    // Supplementary vocabulary
    {
      japanese: '犯人',
      kana: 'はんにん',
      vietnamese: 'phạm nhân',
      english: 'criminal',
      type: 'supplementary',
      example: '犯人が捕まりました。'
    },
    {
      japanese: '泥棒',
      kana: 'どろぼう',
      vietnamese: 'kẻ trộm',
      english: 'thief',
      type: 'supplementary',
      example: '泥棒に入られました。'
    },
    {
      japanese: '詐欺',
      kana: 'さぎ',
      vietnamese: 'lừa đảo',
      english: 'fraud',
      type: 'supplementary',
      example: '詐欺に遭いました。'
    },
    {
      japanese: '事故',
      kana: 'じこ',
      vietnamese: 'tai nạn',
      english: 'accident',
      type: 'supplementary',
      example: '事故に遭いました。'
    },
    {
      japanese: '災害',
      kana: 'さいがい',
      vietnamese: 'thảm họa',
      english: 'disaster',
      type: 'supplementary',
      example: '災害の被害を受けました。'
    },
    {
      japanese: '台風',
      kana: 'たいふう',
      vietnamese: 'bão',
      english: 'typhoon',
      type: 'supplementary',
      example: '台風で家が壊されました。'
    },
    {
      japanese: '地震',
      kana: 'じしん',
      vietnamese: 'động đất',
      english: 'earthquake',
      type: 'supplementary',
      example: '地震で建物が倒れました。'
    },
    {
      japanese: '火事',
      kana: 'かじ',
      vietnamese: 'hỏa hoạn',
      english: 'fire',
      type: 'supplementary',
      example: '火事で家を失いました。'
    },
    {
      japanese: '洪水',
      kana: 'こうずい',
      vietnamese: 'lũ lụt',
      english: 'flood',
      type: 'supplementary',
      example: '洪水で道路が使えません。'
    },
    {
      japanese: '嵐',
      kana: 'あらし',
      vietnamese: 'bão táp',
      english: 'storm',
      type: 'supplementary',
      example: '嵐で木が倒れました。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 2a88bdbcef2e1d14
    {
      japanese: "逃げます",
      kana: "にげます",
      vietnamese: "chạy trốn, bỏ chạy",
      english: "chạy trốn, bỏ chạy",
      type: "main",
      example: "犬が逃げました。\nInu ga nigemashita.\nCon chó đã chạy mất."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | ba78b50484530a3b
    {
      japanese: "騒ぎます",
      kana: "さわぎます",
      vietnamese: "làm ồn, làm rùm beng",
      english: "làm ồn, làm rùm beng",
      type: "main",
      example: "子どもたちが騒いでいます。\nKodomo-tachi ga sawaide imasu.\nBọn trẻ đang làm ồn."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 3096f6d339e9dcfc
    {
      japanese: "諦めます",
      kana: "あきらめます",
      vietnamese: "từ bỏ, đầu hàng",
      english: "từ bỏ, đầu hàng",
      type: "main",
      example: "夢をあきらめません。\nYume o akiramemasen.\nTôi không từ bỏ ước mơ."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | d3466f70bec01f27
    {
      japanese: "投げます",
      kana: "なげます",
      vietnamese: "ném",
      english: "ném",
      type: "main",
      example: "ボールを投げます。\nBooru o nagemasu.\nTôi ném bóng."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | ad68eeef36b60ca1
    {
      japanese: "守ります",
      kana: "まもります",
      vietnamese: "bảo vệ, tuân thủ, giữ",
      english: "bảo vệ, tuân thủ, giữ",
      type: "main",
      example: "約束を守ります。\nYakusoku o mamorimasu.\nTôi giữ lời hứa."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 0f78ca0e930627d3
    {
      japanese: "始まります",
      kana: "はじまります",
      vietnamese: "bắt đầu",
      english: "bắt đầu",
      type: "main",
      example: "会議は9時に始まります。\nKaigi wa ku-ji ni hajimarimasu.\nCuộc họp bắt đầu lúc 9 giờ."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 83891c6dbc92cd6b
    {
      japanese: "式",
      kana: "しき",
      vietnamese: "buổi lễ",
      english: "buổi lễ",
      type: "main",
      example: "入学式があります。\nNyuugakushiki ga arimasu.\nCó lễ nhập học."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | b6b841dd0dbd006d
    {
      japanese: "出席します",
      kana: "しゅっせきします",
      vietnamese: "tham dự, có mặt",
      english: "tham dự, có mặt",
      type: "main",
      example: "会議に出席します。\nKaigi ni shusseki shimasu.\nTôi tham dự cuộc họp."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | cb290ced08bcbd9f
    {
      japanese: "会議",
      kana: "かいぎ",
      vietnamese: "cuộc họp",
      english: "cuộc họp",
      type: "main",
      example: "明日、会議があります。\nAshita, kaigi ga arimasu.\nNgày mai có cuộc họp."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 5c437b64a48f6ff3
    {
      japanese: "伝えます",
      kana: "つたえます",
      vietnamese: "truyền đạt, nhắn lại",
      english: "truyền đạt, nhắn lại",
      type: "main",
      example: "先生に伝えます。\nSensei ni tsutaemasu.\nTôi sẽ truyền đạt lại với thầy/cô."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 04cd8c4154da56af
    {
      japanese: "注意します",
      kana: "ちゅういします",
      vietnamese: "chú ý, cẩn thận",
      english: "chú ý, cẩn thận",
      type: "main",
      example: "車に注意してください。\nKuruma ni chuui shite kudasai.\nHãy chú ý xe ô tô."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | f0ae8ae889b25979
    {
      japanese: "車",
      kana: "くるま",
      vietnamese: "xe ô tô",
      english: "xe ô tô",
      type: "main",
      example: "車が来ます。\nKuruma ga kimasu.\nXe ô tô đang đến."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 6aee7a6d718f5c1c
    {
      japanese: "外します",
      kana: "はずします",
      vietnamese: "rời, tháo ra; vắng mặt tạm thời",
      english: "rời, tháo ra; vắng mặt tạm thời",
      type: "main",
      example: "席を外します。\nSeki o hazushimasu.\nTôi rời chỗ một lát."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 2efae1ab9cfac942
    {
      japanese: "席",
      kana: "せき",
      vietnamese: "chỗ ngồi, ghế",
      english: "chỗ ngồi, ghế",
      type: "main",
      example: "席がありますか。\nSeki ga arimasu ka.\nCó chỗ ngồi không?"
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 95e28d765a37a1b4
    {
      japanese: "戻ります",
      kana: "もどります",
      vietnamese: "trở lại, quay trở lại",
      english: "trở lại, quay trở lại",
      type: "main",
      example: "すぐ戻ります。\nSugu modorimasu.\nTôi sẽ quay lại ngay."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | ce09d6812df97695
    {
      japanese: "あります",
      kana: "あります",
      vietnamese: "có",
      english: "có",
      type: "main",
      example: "電話があります。\nDenwa ga arimasu.\nCó điện thoại."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | d9206500433da8ec
    {
      japanese: "電話",
      kana: "でんわ",
      vietnamese: "điện thoại",
      english: "điện thoại",
      type: "main",
      example: "あとで電話します。\nAto de denwa shimasu.\nLát nữa tôi sẽ gọi điện."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 8d7285e5fcfea9fb
    {
      japanese: "リサイクルします",
      kana: "リサイクルします",
      vietnamese: "tái chế",
      english: "tái chế",
      type: "main",
      example: "ペットボトルをリサイクルします。\nPetto botoru o risaikuru shimasu.\nTôi tái chế chai nhựa."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | e7ced4c3aafe1919
    {
      japanese: "だめ［な］",
      kana: "だめ［な］",
      vietnamese: "không được, không ổn, hỏng",
      english: "không được, không ổn, hỏng",
      type: "main",
      example: "ここで写真を撮ってはだめです。\nKoko de shashin o totte wa dame desu.\nKhông được chụp ảnh ở đây."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 927258a23b51cd79
    {
      japanese: "同じ",
      kana: "おなじ",
      vietnamese: "giống, cùng",
      english: "giống, cùng",
      type: "main",
      example: "同じ本を持っています。\nOnaji hon o motte imasu.\nTôi có cùng quyển sách."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 11fca2f25f53d760
    {
      japanese: "警察",
      kana: "けいさつ",
      vietnamese: "cảnh sát",
      english: "cảnh sát",
      type: "main",
      example: "警察に電話します。\nKeisatsu ni denwa shimasu.\nTôi gọi cho cảnh sát."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | cfb6efd7604da6ed
    {
      japanese: "マーク",
      kana: "マーク",
      vietnamese: "ký hiệu, mark",
      english: "ký hiệu, mark",
      type: "main",
      example: "このマークは何ですか。\nKono maaku wa nan desu ka.\nKý hiệu này là gì?"
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 5c7c42153a059523
    {
      japanese: "ボール",
      kana: "ボール",
      vietnamese: "quả bóng",
      english: "quả bóng",
      type: "main",
      example: "ボールを投げないでください。\nBooru o nagenaide kudasai.\nĐừng ném bóng."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 3abdceb573fe5d82
    {
      japanese: "締め切り",
      kana: "しめきり",
      vietnamese: "hạn chót, hạn cuối",
      english: "hạn chót, hạn cuối",
      type: "main",
      example: "申し込みの締め切りは明日です。\nMoushikomi no shimekiri wa ashita desu.\nHạn chót đăng ký là ngày mai."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 98d9f36fb3473751
    {
      japanese: "規則",
      kana: "きそく",
      vietnamese: "quy tắc, kỷ luật",
      english: "quy tắc, kỷ luật",
      type: "main",
      example: "規則を守ります。\nKisoku o mamorimasu.\nTôi tuân thủ quy tắc."
    },
    // source: review_tu_vung_bai_33.md | 1. Từ vựng chính | 9069bd35be0f9671
    {
      japanese: "危険",
      kana: "きけん",
      vietnamese: "nguy hiểm",
      english: "nguy hiểm",
      type: "main",
      example: "ここは危険です。\nKoko wa kiken desu.\nChỗ này nguy hiểm."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 58d928bf88a6d180
    {
      japanese: "使用禁止",
      kana: "しょうきんし",
      vietnamese: "cấm sử dụng",
      english: "cấm sử dụng",
      type: "supplementary",
      example: "このトイレは使用禁止です。\nKono toire wa shiyou kinshi desu.\nNhà vệ sinh này cấm sử dụng."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 65d29353a25b5e6c
    {
      japanese: "立入禁止",
      kana: "たちいりきんし",
      vietnamese: "cấm vào",
      english: "cấm vào",
      type: "supplementary",
      example: "ここは立入禁止です。\nKoko wa tachiiri kinshi desu.\nChỗ này cấm vào."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 1a19cde290024be1
    {
      japanese: "徐行",
      kana: "じょこう",
      vietnamese: "chạy chậm",
      english: "chạy chậm",
      type: "supplementary",
      example: "この道は徐行してください。\nKono michi wa jokou shite kudasai.\nHãy đi chậm ở đường này."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 4a5d3f522fbcd9c3
    {
      japanese: "入口",
      kana: "いりぐち",
      vietnamese: "cửa vào",
      english: "cửa vào",
      type: "supplementary",
      example: "入口はあちらです。\nIriguchi wa achira desu.\nCửa vào ở đằng kia."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 7192d45577303d39
    {
      japanese: "出口",
      kana: "でぐち",
      vietnamese: "cửa ra",
      english: "cửa ra",
      type: "supplementary",
      example: "出口はどこですか。\nDeguchi wa doko desu ka.\nCửa ra ở đâu?"
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 1f57195a80248880
    {
      japanese: "非常口",
      kana: "ひじょうぐち",
      vietnamese: "cửa thoát hiểm",
      english: "cửa thoát hiểm",
      type: "supplementary",
      example: "非常口を確認してください。\nHijouguchi o kakunin shite kudasai.\nHãy xác nhận cửa thoát hiểm."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 75f93f7b6a71f7b5
    {
      japanese: "無料",
      kana: "むりょう",
      vietnamese: "miễn phí",
      english: "miễn phí",
      type: "supplementary",
      example: "入場は無料です。\nNyuujou wa muryou desu.\nVào cửa miễn phí."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 74ef59142e03c4a1
    {
      japanese: "割引",
      kana: "わりびき",
      vietnamese: "giảm giá",
      english: "giảm giá",
      type: "supplementary",
      example: "学生は割引があります。\nGakusei wa waribiki ga arimasu.\nHọc sinh/sinh viên có giảm giá."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 4c55a47c81d0ba6b
    {
      japanese: "飲み放題",
      kana: "のみほうだい",
      vietnamese: "uống thoải mái không giới hạn",
      english: "uống thoải mái không giới hạn",
      type: "supplementary",
      example: "この店は飲み放題があります。\nKono mise wa nomihoudai ga arimasu.\nQuán này có gói uống không giới hạn."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | b542f7c2ba824264
    {
      japanese: "使用中",
      kana: "しようちゅう",
      vietnamese: "đang sử dụng",
      english: "đang sử dụng",
      type: "supplementary",
      example: "トイレは使用中です。\nToire wa shiyou chuu desu.\nNhà vệ sinh đang được sử dụng."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 01b5c9105428bd5f
    {
      japanese: "募集中",
      kana: "ぼしゅうちゅう",
      vietnamese: "đang tuyển",
      english: "đang tuyển",
      type: "supplementary",
      example: "アルバイト募集中です。\nArubaito boshuu chuu desu.\nĐang tuyển làm thêm."
    },
    // source: review_tu_vung_bai_33.md | 2. Biển báo, thông báo thường gặp | 8dfce2665f40f6a5
    {
      japanese: "～中",
      kana: "～ちゅう",
      vietnamese: "đang ~",
      english: "đang ~",
      type: "supplementary",
      example: "会議中です。\nKaigi chuu desu.\nĐang họp."
    },
    // source: review_tu_vung_bai_33.md | 3. Từ ngữ bổ sung | ae577f9805126ff1
    {
      japanese: "どういう～",
      kana: "どういう～",
      vietnamese: "~ gì, ~ như thế nào",
      english: "~ gì, ~ như thế nào",
      type: "supplementary",
      example: "これはどういう意味ですか。\nKore wa dou iu imi desu ka.\nCái này nghĩa là gì?"
    },
    // source: review_tu_vung_bai_33.md | 3. Từ ngữ bổ sung | a78202384732b0c1
    {
      japanese: "いくら［～ても］",
      kana: "いくら［～ても］",
      vietnamese: "dù có ~ bao nhiêu đi nữa",
      english: "dù có ~ bao nhiêu đi nữa",
      type: "supplementary",
      example: "いくら勉強しても、難しいです。\nIkura benkyou shite mo, muzukashii desu.\nDù học bao nhiêu thì vẫn khó."
    },
    // source: review_tu_vung_bai_33.md | 3. Từ ngữ bổ sung | 579a8300d1aebd47
    {
      japanese: "もう",
      kana: "もう",
      vietnamese: "không ~ nữa",
      english: "không ~ nữa",
      type: "supplementary",
      example: "もう食べません。\nMou tabemasen.\nTôi không ăn nữa."
    },
    // source: review_tu_vung_bai_33.md | 3. Từ ngữ bổ sung | 1919c61742e9ce14
    {
      japanese: "あと～",
      kana: "あと～",
      vietnamese: "còn ~",
      english: "còn ~",
      type: "supplementary",
      example: "あと10分です。\nAto juppun desu.\nCòn 10 phút nữa."
    },
    // source: review_tu_vung_bai_33.md | 3. Từ ngữ bổ sung | 3849d8adf4ab80be
    {
      japanese: "～ほど",
      kana: "～ほど",
      vietnamese: "khoảng ~",
      english: "khoảng ~",
      type: "supplementary",
      example: "30分ほど待ちました。\nSanjuppun hodo machimashita.\nTôi đã đợi khoảng 30 phút."
    },
    // source: review_tu_vung_bai_33.md | 4. Từ vựng phần hội thoại | 2c45c585ad27fc5f
    {
      japanese: "駐車違反",
      kana: "ちゅうしゃいはん",
      vietnamese: "đỗ xe trái phép",
      english: "đỗ xe trái phép",
      type: "supplementary",
      example: "駐車違反をしました。\nChuusha ihan o shimashita.\nTôi đã đỗ xe trái phép."
    },
    // source: review_tu_vung_bai_33.md | 4. Từ vựng phần hội thoại | 0231f9c673487c47
    {
      japanese: "罰金",
      kana: "ばっきん",
      vietnamese: "tiền phạt",
      english: "tiền phạt",
      type: "supplementary",
      example: "罰金を払います。\nBakkin o haraimasu.\nTôi nộp tiền phạt."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | 261185e27423616a
    {
      japanese: "起きます",
      kana: "おきます",
      vietnamese: "xảy ra, thức dậy",
      english: "xảy ra, thức dậy",
      type: "supplementary",
      example: "地震が起きました。\nJishin ga okimashita.\nĐộng đất đã xảy ra."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | c10819f3dbe93d13
    {
      japanese: "助け合います",
      kana: "たすけあいます",
      vietnamese: "giúp đỡ lẫn nhau",
      english: "giúp đỡ lẫn nhau",
      type: "supplementary",
      example: "困った時、助け合います。\nKomatta toki, tasukeaimasu.\nKhi khó khăn, chúng ta giúp đỡ lẫn nhau."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | 9099d2cea1d302da
    {
      japanese: "もともと",
      kana: "もともと",
      vietnamese: "vốn là, nguyên là",
      english: "vốn là, nguyên là",
      type: "supplementary",
      example: "彼はもともと先生でした。\nKare wa motomoto sensei deshita.\nBan đầu anh ấy vốn là giáo viên."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | 2a789baa719f184e
    {
      japanese: "悲しい",
      kana: "かなしい",
      vietnamese: "buồn",
      english: "buồn",
      type: "supplementary",
      example: "悲しいニュースを聞きました。\nKanashii nyuusu o kikimashita.\nTôi đã nghe tin buồn."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | 1e8b240f46643ce3
    {
      japanese: "もっと",
      kana: "もっと",
      vietnamese: "hơn, thêm nữa",
      english: "hơn, thêm nữa",
      type: "supplementary",
      example: "もっと勉強したいです。\nMotto benkyou shitai desu.\nTôi muốn học thêm nữa."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | fdf0b766876cb2a1
    {
      japanese: "挨拶",
      kana: "あいさつ",
      vietnamese: "chào hỏi",
      english: "chào hỏi",
      type: "supplementary",
      example: "毎朝あいさつします。\nMaiasa aisatsu shimasu.\nTôi chào hỏi mỗi sáng."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | fbf3f0554de1cd01
    {
      japanese: "相手",
      kana: "あいて",
      vietnamese: "đối phương, người kia",
      english: "đối phương, người kia",
      type: "supplementary",
      example: "相手の気持ちを考えます。\nAite no kimochi o kangaemasu.\nTôi nghĩ đến cảm xúc của đối phương."
    },
    // source: review_tu_vung_bai_33.md | 5. Từ vựng phần đọc hiểu | c147d54020f80fec
    {
      japanese: "気持ち",
      kana: "きもち",
      vietnamese: "tâm trạng, cảm xúc",
      english: "tâm trạng, cảm xúc",
      type: "supplementary",
      example: "気持ちがいいです。\nKimochi ga ii desu.\nTôi cảm thấy dễ chịu."
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | dd876ab94bd823c9
    {
      japanese: "式が始まります",
      kana: "式が始まります",
      vietnamese: "buổi lễ bắt đầu",
      english: "buổi lễ bắt đầu",
      type: "supplementary",
      example: "始まります / hajimarimasu là tự động từ"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 585567ba676541c3
    {
      japanese: "会議に出席します",
      kana: "会議に出席します",
      vietnamese: "tham dự cuộc họp",
      english: "tham dự cuộc họp",
      type: "supplementary",
      example: "Dùng trợ từ に / ni"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 5a7cb3c02d219775
    {
      japanese: "車に注意します",
      kana: "車に注意します",
      vietnamese: "chú ý xe ô tô",
      english: "chú ý xe ô tô",
      type: "supplementary",
      example: "Dùng に / ni với đối tượng cần chú ý"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 53503b4242904148
    {
      japanese: "席を外します",
      kana: "席を外します",
      vietnamese: "rời chỗ một lát",
      english: "rời chỗ một lát",
      type: "supplementary",
      example: "Cách nói lịch sự khi tạm vắng mặt"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 9171b5d03d94c463
    {
      japanese: "電話があります",
      kana: "電話があります",
      vietnamese: "có điện thoại",
      english: "có điện thoại",
      type: "supplementary",
      example: "Thường dùng khi có cuộc gọi đến"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | ac09b3f9dcdc890f
    {
      japanese: "規則を守ります",
      kana: "規則を守ります",
      vietnamese: "tuân thủ quy tắc",
      english: "tuân thủ quy tắc",
      type: "supplementary",
      example: "守ります / mamorimasu = bảo vệ, giữ, tuân thủ"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 75c17780defa72d8
    {
      japanese: "ボールを投げます",
      kana: "ボールを投げます",
      vietnamese: "ném bóng",
      english: "ném bóng",
      type: "supplementary",
      example: "Dùng trợ từ を / o"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 05ead85f637d31e3
    {
      japanese: "地震が起きます",
      kana: "地震が起きます",
      vietnamese: "động đất xảy ra",
      english: "động đất xảy ra",
      type: "supplementary",
      example: "起きます / okimasu = xảy ra/thức dậy"
    },
    // source: review_tu_vung_bai_33.md | 6. Cụm cần nhớ trong bài 33 | 2caa676c8b70ad3c
    {
      japanese: "助け合います",
      kana: "助け合います",
      vietnamese: "giúp đỡ lẫn nhau",
      english: "giúp đỡ lẫn nhau",
      type: "supplementary",
      example: "Vます bỏ ます + 合います = làm với nhau/lẫn nhau"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 6f3e1c45671ba073
    {
      japanese: "投",
      kana: "トウ / tou",
      vietnamese: "Đầu — ném",
      english: "ném",
      type: "kanji",
      example: "投げます / nagemasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | a2660c1b947eb03a
    {
      japanese: "守",
      kana: "シュ / shu",
      vietnamese: "Thủ — bảo vệ, giữ",
      english: "bảo vệ, giữ",
      type: "kanji",
      example: "守ります / mamorimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | fbb0a3ee8fe22732
    {
      japanese: "始",
      kana: "シ / shi",
      vietnamese: "Thủy — bắt đầu",
      english: "bắt đầu",
      type: "kanji",
      example: "始まります / hajimarimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 24b6d87bcfce23af
    {
      japanese: "式",
      kana: "シキ / shiki",
      vietnamese: "Thức — nghi thức, buổi lễ",
      english: "nghi thức, buổi lễ",
      type: "kanji",
      example: "式 / shiki"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | d23d1a4827fe583c
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, xuất hiện",
      english: "ra, xuất hiện",
      type: "kanji",
      example: "出席します / shusseki shimasu, 出口 / deguchi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 5fd52ef467214ea0
    {
      japanese: "会",
      kana: "カイ / kai",
      vietnamese: "Hội — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "会議 / kaigi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 3b46a9b55e7cd96e
    {
      japanese: "伝",
      kana: "デン / den",
      vietnamese: "Truyền — truyền đạt",
      english: "truyền đạt",
      type: "kanji",
      example: "伝えます / tsutaemasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 41b88860d8843928
    {
      japanese: "注",
      kana: "チュウ / chuu",
      vietnamese: "Chú — rót, chú ý",
      english: "rót, chú ý",
      type: "kanji",
      example: "注意します / chuui shimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 1299ccaa918588fd
    {
      japanese: "意",
      kana: "イ / i",
      vietnamese: "Ý — ý, ý nghĩa",
      english: "ý, ý nghĩa",
      type: "kanji",
      example: "注意します / chuui shimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | d03fc1fe6d63ce5f
    {
      japanese: "車",
      kana: "シャ / sha",
      vietnamese: "Xa — xe",
      english: "xe",
      type: "kanji",
      example: "車 / kuruma"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | c1f2eec1c98dc173
    {
      japanese: "外",
      kana: "ガイ / gai",
      vietnamese: "Ngoại — ngoài, tháo ra",
      english: "ngoài, tháo ra",
      type: "kanji",
      example: "外します / hazushimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | d9ca1d91d5e18def
    {
      japanese: "同",
      kana: "ドウ / dou",
      vietnamese: "Đồng — giống, cùng",
      english: "giống, cùng",
      type: "kanji",
      example: "同じ / onaji"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 8a0e94cb0ecbe99c
    {
      japanese: "席",
      kana: "セキ / seki",
      vietnamese: "Tịch — chỗ ngồi",
      english: "chỗ ngồi",
      type: "kanji",
      example: "席 / seki"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 0d5884a05ba77163
    {
      japanese: "切",
      kana: "セツ / setsu",
      vietnamese: "Thiết — cắt, hạn",
      english: "cắt, hạn",
      type: "kanji",
      example: "締め切り / shimekiri"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 805fce22de924ed6
    {
      japanese: "使",
      kana: "シ / shi",
      vietnamese: "Sử — dùng, sai khiến",
      english: "dùng, sai khiến",
      type: "kanji",
      example: "使用 / shiyou"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | f541f2e16bdf1b49
    {
      japanese: "用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — dùng",
      english: "dùng",
      type: "kanji",
      example: "使用 / shiyou"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 65910bc12ca66374
    {
      japanese: "止",
      kana: "シ / shi",
      vietnamese: "Chỉ — dừng, cấm",
      english: "dừng, cấm",
      type: "kanji",
      example: "禁止 / kinshi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 86aef0a744f6c091
    {
      japanese: "立",
      kana: "リツ / ritsu",
      vietnamese: "Lập — đứng",
      english: "đứng",
      type: "kanji",
      example: "立入禁止 / tachiiri kinshi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | ba8b9c3f865a62e0
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào",
      english: "vào",
      type: "kanji",
      example: "入口 / iriguchi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 10c1bb0e5e1f1215
    {
      japanese: "口",
      kana: "コウ / kou",
      vietnamese: "Khẩu — miệng, cửa",
      english: "miệng, cửa",
      type: "kanji",
      example: "入口 / iriguchi, 出口 / deguchi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | fcbac6c276a7b19b
    {
      japanese: "無",
      kana: "ム / mu",
      vietnamese: "Vô — không có",
      english: "không có",
      type: "kanji",
      example: "無料 / muryou"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 5b6dc60335d60d83
    {
      japanese: "飲",
      kana: "イン / in",
      vietnamese: "Ẩm — uống",
      english: "uống",
      type: "kanji",
      example: "飲み放題 / nomihoudai"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | e7fdde155612392c
    {
      japanese: "中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — trong, đang",
      english: "trong, đang",
      type: "kanji",
      example: "使用中 / shiyou chuu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 580e1fc61d0402b5
    {
      japanese: "地",
      kana: "チ / chi, ジ / ji",
      vietnamese: "Địa — đất",
      english: "đất",
      type: "kanji",
      example: "地震 / jishin"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 740134bb96fe64d9
    {
      japanese: "起",
      kana: "キ / ki",
      vietnamese: "Khởi — thức dậy, xảy ra",
      english: "thức dậy, xảy ra",
      type: "kanji",
      example: "起きます / okimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 86cfecf5564e194e
    {
      japanese: "助",
      kana: "ジョ / jo",
      vietnamese: "Trợ — giúp đỡ",
      english: "giúp đỡ",
      type: "kanji",
      example: "助け合います / tasukeaimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | bdb333b56db21dca
    {
      japanese: "合",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — hợp lại, cùng nhau",
      english: "hợp lại, cùng nhau",
      type: "kanji",
      example: "助け合います / tasukeaimasu"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 3bb14d2c8c83cdb9
    {
      japanese: "手",
      kana: "シュ / shu",
      vietnamese: "Thủ — tay, người",
      english: "tay, người",
      type: "kanji",
      example: "相手 / aite"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | 7b71a156eb008e08
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần, cảm giác",
      english: "khí, tinh thần, cảm giác",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_33.md | 7. Kanji N5–N4 cần học kỹ | c949241f4c80df3b
    {
      japanese: "持",
      kana: "ジ / ji",
      vietnamese: "Trì — cầm, giữ",
      english: "cầm, giữ",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 84b80db79a1d8a6b
    {
      japanese: "投げる",
      kana: "な.げる / nageru",
      vietnamese: "Đầu — 投 = ném",
      english: "投 = ném",
      type: "kanji",
      example: "投げる"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 8baa9a77bd0a40e5
    {
      japanese: "投手",
      kana: "トウ / tou",
      vietnamese: "Đầu — 投 = ném/gửi; 手 = người",
      english: "投 = ném/gửi; 手 = người",
      type: "kanji",
      example: "投手"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | a4b91dfda6b4d05f
    {
      japanese: "守る",
      kana: "まも.る / mamoru",
      vietnamese: "Thủ — 守 = bảo vệ, giữ",
      english: "守 = bảo vệ, giữ",
      type: "kanji",
      example: "守る"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | dfe183f586fc0a26
    {
      japanese: "留守",
      kana: "シュ / shu",
      vietnamese: "Thủ — 留 = ở lại; 守 = giữ nhà",
      english: "留 = ở lại; 守 = giữ nhà",
      type: "kanji",
      example: "留守"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 26400dae29b50656
    {
      japanese: "始まる",
      kana: "はじ.まる / hajimaru",
      vietnamese: "Thủy — 始 = bắt đầu",
      english: "始 = bắt đầu",
      type: "kanji",
      example: "始まる"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 724d8ddc160f2438
    {
      japanese: "始める",
      kana: "はじ.める / hajimeru",
      vietnamese: "Thủy — 始 = bắt đầu",
      english: "始 = bắt đầu",
      type: "kanji",
      example: "始める"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | d7c50e965c02a896
    {
      japanese: "入学式",
      kana: "シキ / shiki",
      vietnamese: "Thức — 入 = vào; 学 = học; 式 = lễ",
      english: "入 = vào; 学 = học; 式 = lễ",
      type: "kanji",
      example: "入学式"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 52bc1edb21ff198d
    {
      japanese: "出口",
      kana: "で / de",
      vietnamese: "Xuất — 出 = ra; 口 = cửa",
      english: "出 = ra; 口 = cửa",
      type: "kanji",
      example: "出口"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 1834797b0c938300
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | f10669c80d09df4f
    {
      japanese: "出す",
      kana: "だ.す / dasu",
      vietnamese: "Xuất — 出 = đưa ra",
      english: "出 = đưa ra",
      type: "kanji",
      example: "出す"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 3c4d270ca2012426
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp",
      english: "会 = gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 44f447d04d29c4fe
    {
      japanese: "会社",
      kana: "カイ / kai",
      vietnamese: "Hội — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 07c6023f1e8e88b9
    {
      japanese: "会議",
      kana: "カイ / kai",
      vietnamese: "Hội — 会 = họp; 議 = bàn bạc",
      english: "会 = họp; 議 = bàn bạc",
      type: "kanji",
      example: "会議"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 01c444c3a82e5f02
    {
      japanese: "伝える",
      kana: "つた.える / tsutaeru",
      vietnamese: "Truyền — 伝 = truyền đạt",
      english: "伝 = truyền đạt",
      type: "kanji",
      example: "伝える"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | b40f32e6d7ae5239
    {
      japanese: "注意",
      kana: "チュウ / chuu",
      vietnamese: "Chú — 注 = chú ý; 意 = ý",
      english: "注 = chú ý; 意 = ý",
      type: "kanji",
      example: "注意"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 96478c6f86b7a0db
    {
      japanese: "注意",
      kana: "イ / i",
      vietnamese: "Ý — 注 = chú ý; 意 = ý",
      english: "注 = chú ý; 意 = ý",
      type: "kanji",
      example: "注意"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 604790868a4e484e
    {
      japanese: "意味",
      kana: "イ / i",
      vietnamese: "Ý — 意 = ý; 味 = vị/nghĩa",
      english: "意 = ý; 味 = vị/nghĩa",
      type: "kanji",
      example: "意味"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 81895ec1925e3ff9
    {
      japanese: "車",
      kana: "くるま / kuruma",
      vietnamese: "Xa — 車 = xe",
      english: "車 = xe",
      type: "kanji",
      example: "車"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 08207c869a9a2c75
    {
      japanese: "電車",
      kana: "シャ / sha",
      vietnamese: "Xa — 電 = điện; 車 = xe",
      english: "電 = điện; 車 = xe",
      type: "kanji",
      example: "電車"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 7865af2d01062db3
    {
      japanese: "外",
      kana: "そと / soto",
      vietnamese: "Ngoại — 外 = ngoài",
      english: "外 = ngoài",
      type: "kanji",
      example: "外"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 576784823a3ae3d0
    {
      japanese: "外す",
      kana: "はず.す / hazusu",
      vietnamese: "Ngoại — 外 = tháo/rời ra",
      english: "外 = tháo/rời ra",
      type: "kanji",
      example: "外す"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 6ad107d163cf2200
    {
      japanese: "同じ",
      kana: "おな.じ / onaji",
      vietnamese: "Đồng — 同 = giống, cùng",
      english: "同 = giống, cùng",
      type: "kanji",
      example: "同じ"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 88e1294e43200bcf
    {
      japanese: "同時",
      kana: "ドウ / dou",
      vietnamese: "Đồng — 同 = cùng; 時 = thời gian",
      english: "同 = cùng; 時 = thời gian",
      type: "kanji",
      example: "同時"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 7b6354442496d61e
    {
      japanese: "出席",
      kana: "セキ / seki",
      vietnamese: "Tịch — 出 = ra/có mặt; 席 = chỗ ngồi",
      english: "出 = ra/có mặt; 席 = chỗ ngồi",
      type: "kanji",
      example: "出席"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 1962f35b992f9566
    {
      japanese: "切る",
      kana: "き.る / kiru",
      vietnamese: "Thiết — 切 = cắt",
      english: "切 = cắt",
      type: "kanji",
      example: "切る"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 222dfc2d64c7eedb
    {
      japanese: "締め切り",
      kana: "き.り / kiri",
      vietnamese: "Thiết — 締 = thắt/khép; 切 = cắt/kết thúc",
      english: "締 = thắt/khép; 切 = cắt/kết thúc",
      type: "kanji",
      example: "締め切り"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | bf37e22880e39771
    {
      japanese: "使う",
      kana: "つか.う / tsukau",
      vietnamese: "Sử — 使 = dùng",
      english: "使 = dùng",
      type: "kanji",
      example: "使う"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 19983a774b8545b1
    {
      japanese: "使用",
      kana: "シ / shi",
      vietnamese: "Sử — 使 = dùng; 用 = dùng",
      english: "使 = dùng; 用 = dùng",
      type: "kanji",
      example: "使用"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 0739666825dbe30d
    {
      japanese: "用事",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 用 = dùng",
      english: "用 = dùng",
      type: "kanji",
      example: "用事"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 34c648ac1aa1ac72
    {
      japanese: "使用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 使 = dùng; 用 = dùng",
      english: "使 = dùng; 用 = dùng",
      type: "kanji",
      example: "使用"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | febd5a0ad6090848
    {
      japanese: "止まる",
      kana: "と.まる / tomaru",
      vietnamese: "Chỉ — 止 = dừng",
      english: "止 = dừng",
      type: "kanji",
      example: "止まる"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 33b0a197811a26c0
    {
      japanese: "禁止",
      kana: "シ / shi",
      vietnamese: "Chỉ — 禁 = cấm; 止 = dừng",
      english: "禁 = cấm; 止 = dừng",
      type: "kanji",
      example: "禁止"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | a8cb63080e1d6203
    {
      japanese: "立つ",
      kana: "た.つ / tatsu",
      vietnamese: "Lập — 立 = đứng",
      english: "立 = đứng",
      type: "kanji",
      example: "立つ"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 6a878b00d7d211ad
    {
      japanese: "立入禁止",
      kana: "た.ち / tachi",
      vietnamese: "Lập — 立 = đứng; 入 = vào; 禁止 = cấm",
      english: "立 = đứng; 入 = vào; 禁止 = cấm",
      type: "kanji",
      example: "立入禁止"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 599d1b4cfc1db8d6
    {
      japanese: "入口",
      kana: "いり / iri",
      vietnamese: "Nhập — 入 = vào; 口 = cửa",
      english: "入 = vào; 口 = cửa",
      type: "kanji",
      example: "入口"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 723e5e36f3e5c347
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = đi vào",
      english: "入 = đi vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | b6aa0ec2a944fe75
    {
      japanese: "口",
      kana: "くち / kuchi",
      vietnamese: "Khẩu — 口 = miệng, cửa",
      english: "口 = miệng, cửa",
      type: "kanji",
      example: "口"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 89ae220effa43562
    {
      japanese: "出口",
      kana: "ぐち / guchi",
      vietnamese: "Khẩu — 出 = ra; 口 = cửa",
      english: "出 = ra; 口 = cửa",
      type: "kanji",
      example: "出口"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | ad2d445c7a01dabf
    {
      japanese: "無料",
      kana: "ム / mu",
      vietnamese: "Vô — 無 = không có; 料 = phí",
      english: "無 = không có; 料 = phí",
      type: "kanji",
      example: "無料"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 014822753a5e5b85
    {
      japanese: "飲む",
      kana: "の.む / nomu",
      vietnamese: "Ẩm — 飲 = uống",
      english: "飲 = uống",
      type: "kanji",
      example: "飲む"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 2d2007b2d5bd2171
    {
      japanese: "飲み放題",
      kana: "の.み / nomi",
      vietnamese: "Ẩm — 飲 = uống; 放題 = thoải mái không giới hạn",
      english: "飲 = uống; 放題 = thoải mái không giới hạn",
      type: "kanji",
      example: "飲み放題"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 4a9b6f276ff62389
    {
      japanese: "中",
      kana: "なか / naka",
      vietnamese: "Trung — 中 = trong, giữa",
      english: "中 = trong, giữa",
      type: "kanji",
      example: "中"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | b3891724216bab6d
    {
      japanese: "使用中",
      kana: "チュウ / chuu",
      vietnamese: "Trung — 使用 = sử dụng; 中 = đang",
      english: "使用 = sử dụng; 中 = đang",
      type: "kanji",
      example: "使用中"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | aeb82e4439cae5b9
    {
      japanese: "地震",
      kana: "ジ / ji",
      vietnamese: "Địa — 地 = đất; 震 = rung",
      english: "地 = đất; 震 = rung",
      type: "kanji",
      example: "地震"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | afef5e475724f4aa
    {
      japanese: "起きる",
      kana: "お.きる / okiru",
      vietnamese: "Khởi — 起 = xảy ra, thức dậy",
      english: "起 = xảy ra, thức dậy",
      type: "kanji",
      example: "起きる"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | cccc696778b1b6b5
    {
      japanese: "助ける",
      kana: "たす.ける / tasukeru",
      vietnamese: "Trợ — 助 = giúp",
      english: "助 = giúp",
      type: "kanji",
      example: "助ける"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 1873b12b4e6a6290
    {
      japanese: "助け合う",
      kana: "あ.う / au",
      vietnamese: "Hợp — 助 = giúp; 合 = lẫn nhau/cùng nhau",
      english: "助 = giúp; 合 = lẫn nhau/cùng nhau",
      type: "kanji",
      example: "助け合う"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 4f253d8d085b49ff
    {
      japanese: "手",
      kana: "て / te",
      vietnamese: "Thủ — 手 = tay, người",
      english: "手 = tay, người",
      type: "kanji",
      example: "手"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 7d307486c163aea0
    {
      japanese: "相手",
      kana: "て / te",
      vietnamese: "Thủ — 相 = lẫn nhau; 手 = người",
      english: "相 = lẫn nhau; 手 = người",
      type: "kanji",
      example: "相手"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | 725b1754519381d5
    {
      japanese: "気持ち",
      kana: "キ / ki",
      vietnamese: "Khí — 気 = tinh thần, cảm giác; 持 = giữ",
      english: "気 = tinh thần, cảm giác; 持 = giữ",
      type: "kanji",
      example: "気持ち"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | a10ab4b9f0784d8d
    {
      japanese: "持つ",
      kana: "も.つ / motsu",
      vietnamese: "Trì — 持 = cầm, giữ",
      english: "持 = cầm, giữ",
      type: "kanji",
      example: "持つ"
    },
    // source: review_tu_vung_bai_33.md | 8. Từ ghép On/Kun của Kanji N5–N4 | af718cd40d510698
    {
      japanese: "気持ち",
      kana: "も.ち / mochi",
      vietnamese: "Trì — 気 = cảm giác; 持 = giữ",
      english: "気 = cảm giác; 持 = giữ",
      type: "kanji",
      example: "気持ち"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '受身形（直接受身）',
      vietnamese: 'thể bị động (trực tiếp)',
      english: 'passive form (direct passive)',
      type: 'main',
      explanation: 'Biểu thị hành động mà chủ ngữ bị tác động trực tiếp. Cấu tạo: Nhóm I: a段 + れる (書く→書かれる), Nhóm II: る → られる (食べる→食べられる), Nhóm III: する→される, くる→こられる. Người thực hiện được đánh dấu bằng に.',
      examples: [
        {
          japanese: '先生に褒められました。',
          vietnamese: 'Tôi được thầy khen.',
          english: 'I was praised by my teacher.',
          type: 'main'
        },
        {
          japanese: '母に叱られました。',
          vietnamese: 'Tôi bị mẹ mắng.',
          english: 'I was scolded by my mother.',
          type: 'main'
        },
        {
          japanese: 'この本は夏目漱石によって書かれました。',
          vietnamese: 'Quyển sách này được viết bởi Natsume Soseki.',
          english: 'This book was written by Natsume Soseki.',
          type: 'main'
        },
        {
          japanese: '財布を盗まれました。',
          vietnamese: 'Ví của tôi bị mất trộm.',
          english: 'My wallet was stolen.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '間接受身（迷惑の受身）',
      vietnamese: 'thể bị động gián tiếp (bị động phiền toái)',
      english: 'indirect passive (adversative passive)',
      type: 'main',
      explanation: 'Biểu thị hành động của người khác gây ảnh hưởng tiêu cực đến chủ ngữ. Đặc trưng của tiếng Nhật, không có trong tiếng Anh. Chủ ngữ là người bị ảnh hưởng.',
      examples: [
        {
          japanese: '雨に降られました。',
          vietnamese: 'Tôi bị mưa.',
          english: 'I got rained on.',
          type: 'main'
        },
        {
          japanese: '電車の中で足を踏まれました。',
          vietnamese: 'Tôi bị dẫm lên chân trong tàu điện.',
          english: 'I had my foot stepped on in the train.',
          type: 'main'
        },
        {
          japanese: '夜中に友達に電話されました。',
          vietnamese: 'Tôi bị bạn gọi điện giữa đêm.',
          english: 'I had a friend call me in the middle of the night.',
          type: 'main'
        },
        {
          japanese: '赤ちゃんに泣かれて困りました。',
          vietnamese: 'Tôi bị em bé khóc làm phiền.',
          english: 'I was troubled by the baby crying.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '持ち主の受身',
      vietnamese: 'thể bị động sở hữu',
      english: 'possessive passive',
      type: 'main',
      explanation: 'Biểu thị một phần của cơ thể hoặc đồ vật thuộc về chủ ngữ bị tác động. Đồ vật được đánh dấu bằng を.',
      examples: [
        {
          japanese: '足を踏まれました。',
          vietnamese: 'Chân tôi bị dẫm.',
          english: 'My foot was stepped on.',
          type: 'main'
        },
        {
          japanese: '財布を盗まれました。',
          vietnamese: 'Ví của tôi bị mất trộm.',
          english: 'My wallet was stolen.',
          type: 'main'
        },
        {
          japanese: 'カメラを壊されました。',
          vietnamese: 'Máy ảnh của tôi bị làm hỏng.',
          english: 'My camera was broken.',
          type: 'main'
        },
        {
          japanese: '犬に手を噛まれました。',
          vietnamese: 'Tay tôi bị chó cắn.',
          english: 'My hand was bitten by a dog.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'に vs によって',
      vietnamese: 'に (người) vs によって (người nổi tiếng/sự vật)',
      english: 'に (person) vs によって (famous person/thing)',
      type: 'main',
      explanation: 'に dùng cho người thực hiện thông thường. によって dùng cho người nổi tiếng, tổ chức, hoặc nguyên nhân tự nhiên. によって mang tính trang trọng hơn.',
      examples: [
        {
          japanese: '先生に褒められました。',
          vietnamese: 'Tôi được thầy khen.',
          english: 'I was praised by my teacher.',
          type: 'main'
        },
        {
          japanese: 'この小説は夏目漱石によって書かれました。',
          vietnamese: 'Tiểu thuyết này được viết bởi Natsume Soseki.',
          english: 'This novel was written by Natsume Soseki.',
          type: 'main'
        },
        {
          japanese: '地震によって建物が壊されました。',
          vietnamese: 'Tòa nhà bị phá hủy bởi động đất.',
          english: 'The building was destroyed by an earthquake.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '受身形の感情表現',
      vietnamese: 'biểu hiện cảm xúc với thể bị động',
      english: 'expressing emotions with passive',
      type: 'additional',
      explanation: 'Dùng thể bị động để biểu thị cảm xúc của chủ ngữ về hành động mà họ bị tác động.',
      examples: [
        {
          japanese: '先生に褒められて嬉しかったです。',
          vietnamese: 'Tôi vui vì được thầy khen.',
          english: 'I was happy to be praised by my teacher.',
          type: 'main'
        },
        {
          japanese: 'みんなに笑われて恥ずかしかったです。',
          vietnamese: 'Tôi xấu hổ vì bị mọi người cười.',
          english: 'I was embarrassed to be laughed at by everyone.',
          type: 'main'
        },
        {
          japanese: '友達に裏切られて悲しかったです。',
          vietnamese: 'Tôi buồn vì bị bạn phản bội.',
          english: 'I was sad to be betrayed by my friend.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '受身形の肯定的な使い方',
      vietnamese: 'cách dùng tích cực của thể bị động',
      english: 'positive use of passive form',
      type: 'additional',
      explanation: 'Không phải tất cả các câu bị động đều mang nghĩa tiêu cực. Có thể biểu thị ý nghĩa tích cực như được tôn kính, được yêu mến.',
      examples: [
        {
          japanese: 'みんなに尊敬されています。',
          vietnamese: 'Được mọi người tôn kính.',
          english: 'He is respected by everyone.',
          type: 'main'
        },
        {
          japanese: '結婚式に招待されました。',
          vietnamese: 'Tôi được mời đến đám cưới.',
          english: 'I was invited to the wedding.',
          type: 'main'
        },
        {
          japanese: '家族に愛されています。',
          vietnamese: 'Được gia đình yêu thương.',
          english: 'I am loved by my family.',
          type: 'additional'
        }
      ]
    }
  ]
};

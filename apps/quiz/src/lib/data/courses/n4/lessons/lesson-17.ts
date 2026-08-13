/**
 * N4 Core Lessons — Lesson 17: 複合動詞 (Compound Verbs & Verb Combinations)
 * Focus: ~始める、~終わる、~続ける、verb combinations
 */

import type { LessonData } from '$lib/types';

export const LESSON_17_DATA: LessonData = {
  lessonNumber: 17,
  title: '複合動詞 (Động từ ghép)',
  vocabulary: [
    // Main Vocabulary - Basic Verbs
    {
      japanese: '始める',
      kana: 'はじめる',
      vietnamese: 'bắt đầu',
      english: 'to begin, to start',
      type: 'main',
      example: '勉強を始めました。'
    },
    {
      japanese: '終わる',
      kana: 'おわる',
      vietnamese: 'kết thúc',
      english: 'to end, to finish',
      type: 'main',
      example: '会議が終わりました。'
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
      japanese: '止める',
      kana: 'やめる',
      vietnamese: 'dừng lại, nghỉ',
      english: 'to stop, to quit',
      type: 'main',
      example: 'タバコを止めました。'
    },
    {
      japanese: '出す',
      kana: 'だす',
      vietnamese: 'đưa ra, bắt đầu',
      english: 'to put out, to start',
      type: 'main',
      example: '走り出しました。'
    },
    {
      japanese: '直す',
      kana: 'なおす',
      vietnamese: 'sửa, làm lại',
      english: 'to fix, to redo',
      type: 'main',
      example: '書き直してください。'
    },
    {
      japanese: '忘れる',
      kana: 'わすれる',
      vietnamese: 'quên',
      english: 'to forget',
      type: 'main',
      example: '財布を忘れました。'
    },
    {
      japanese: '残る',
      kana: 'のこる',
      vietnamese: 'còn lại',
      english: 'to remain, to be left',
      type: 'main',
      example: 'お金が少し残っています。'
    },
    {
      japanese: '過ぎる',
      kana: 'すぎる',
      vietnamese: 'qua, quá mức',
      english: 'to pass, to exceed',
      type: 'main',
      example: '食べ過ぎました。'
    },
    {
      japanese: '足りる',
      kana: 'たりる',
      vietnamese: 'đủ',
      english: 'to be enough',
      type: 'main',
      example: 'お金が足りません。'
    },

    // Main Vocabulary - Compound Verbs
    {
      japanese: '読み始める',
      kana: 'よみはじめる',
      vietnamese: 'bắt đầu đọc',
      english: 'to start reading',
      type: 'main',
      example: '本を読み始めました。'
    },
    {
      japanese: '食べ終わる',
      kana: 'たべおわる',
      vietnamese: 'ăn xong',
      english: 'to finish eating',
      type: 'main',
      example: 'もう食べ終わりましたか。'
    },
    {
      japanese: '話し続ける',
      kana: 'はなしつづける',
      vietnamese: 'tiếp tục nói',
      english: 'to keep talking',
      type: 'main',
      example: '彼は話し続けています。'
    },
    {
      japanese: '走り出す',
      kana: 'はしりだす',
      vietnamese: 'bắt đầu chạy',
      english: 'to start running',
      type: 'main',
      example: '急に走り出しました。'
    },
    {
      japanese: '書き直す',
      kana: 'かきなおす',
      vietnamese: 'viết lại',
      english: 'to rewrite',
      type: 'main',
      example: 'レポートを書き直しました。'
    },
    {
      japanese: '言い忘れる',
      kana: 'いいわすれる',
      vietnamese: 'quên nói',
      english: 'to forget to say',
      type: 'main',
      example: '大事なことを言い忘れました。'
    },
    {
      japanese: '飲み過ぎる',
      kana: 'のみすぎる',
      vietnamese: 'uống quá nhiều',
      english: 'to drink too much',
      type: 'main',
      example: 'お酒を飲み過ぎました。'
    },
    {
      japanese: '買い物する',
      kana: 'かいものする',
      vietnamese: 'mua sắm',
      english: 'to shop',
      type: 'main',
      example: '週末に買い物します。'
    },
    {
      japanese: '散歩する',
      kana: 'さんぽする',
      vietnamese: 'đi dạo',
      english: 'to take a walk',
      type: 'main',
      example: '公園を散歩しました。'
    },
    {
      japanese: '相談する',
      kana: 'そうだんする',
      vietnamese: 'tham khảo ý kiến',
      english: 'to consult',
      type: 'main',
      example: '先生に相談します。'
    },

    // Additional Vocabulary - More Verbs
    {
      japanese: '通う',
      kana: 'かよう',
      vietnamese: 'đi lại thường xuyên',
      english: 'to commute, to attend',
      type: 'additional',
      example: '学校に通っています。'
    },
    {
      japanese: '慣れる',
      kana: 'なれる',
      vietnamese: 'quen',
      english: 'to get used to',
      type: 'additional',
      example: '日本の生活に慣れました。'
    },
    {
      japanese: '変わる',
      kana: 'かわる',
      vietnamese: 'thay đổi',
      english: 'to change',
      type: 'additional',
      example: '町が変わりました。'
    },
    {
      japanese: '増える',
      kana: 'ふえる',
      vietnamese: 'tăng',
      english: 'to increase',
      type: 'additional',
      example: '人口が増えています。'
    },
    {
      japanese: '減る',
      kana: 'へる',
      vietnamese: 'giảm',
      english: 'to decrease',
      type: 'additional',
      example: '体重が減りました。'
    },
    {
      japanese: '進む',
      kana: 'すすむ',
      vietnamese: 'tiến tới',
      english: 'to advance, to progress',
      type: 'additional',
      example: '計画が進んでいます。'
    },
    {
      japanese: '遅れる',
      kana: 'おくれる',
      vietnamese: 'chậm, trễ',
      english: 'to be late, to be delayed',
      type: 'additional',
      example: '電車が遅れています。'
    },
    {
      japanese: '急ぐ',
      kana: 'いそぐ',
      vietnamese: 'vội vã',
      english: 'to hurry',
      type: 'additional',
      example: '急がないと遅れます。'
    },
    {
      japanese: '焦る',
      kana: 'あせる',
      vietnamese: 'vội vàng, lo lắng',
      english: 'to be impatient, to panic',
      type: 'additional',
      example: '焦らないでください。'
    },
    {
      japanese: '疲れる',
      kana: 'つかれる',
      vietnamese: 'mệt',
      english: 'to get tired',
      type: 'additional',
      example: 'とても疲れました。'
    },

    // Additional Vocabulary - Compound Actions
    {
      japanese: '作り直す',
      kana: 'つくりなおす',
      vietnamese: 'làm lại',
      english: 'to remake',
      type: 'additional',
      example: '料理を作り直しました。'
    },
    {
      japanese: '持ち出す',
      kana: 'もちだす',
      vietnamese: 'mang ra',
      english: 'to bring out',
      type: 'additional',
      example: '古い話を持ち出さないでください。'
    },
    {
      japanese: '取り出す',
      kana: 'とりだす',
      vietnamese: 'lấy ra',
      english: 'to take out',
      type: 'additional',
      example: '財布を取り出しました。'
    },
    {
      japanese: '思い出す',
      kana: 'おもいだす',
      vietnamese: 'nhớ ra',
      english: 'to remember, to recall',
      type: 'additional',
      example: '名前を思い出しました。'
    },
    {
      japanese: '聞き返す',
      kana: 'ききかえす',
      vietnamese: 'hỏi lại',
      english: 'to ask again',
      type: 'additional',
      example: 'もう一度聞き返しました。'
    },
    {
      japanese: '見直す',
      kana: 'みなおす',
      vietnamese: 'xem lại',
      english: 'to review, to look over',
      type: 'additional',
      example: 'テストを見直してください。'
    },
    {
      japanese: '乗り換える',
      kana: 'のりかえる',
      vietnamese: 'chuyển (phương tiện)',
      english: 'to transfer, to change',
      type: 'additional',
      example: 'ここで電車を乗り換えます。'
    },
    {
      japanese: '引っ越す',
      kana: 'ひっこす',
      vietnamese: 'chuyển nhà',
      english: 'to move (house)',
      type: 'additional',
      example: '来月引っ越します。'
    },
    {
      japanese: '出かける',
      kana: 'でかける',
      vietnamese: 'ra ngoài',
      english: 'to go out',
      type: 'additional',
      example: '友達と出かけました。'
    },
    {
      japanese: '帰る',
      kana: 'かえる',
      vietnamese: 'về',
      english: 'to return, to go home',
      type: 'additional',
      example: 'もう帰ります。'
    },

    // Supplementary Vocabulary - Nouns Related to Actions
    {
      japanese: '始まり',
      kana: 'はじまり',
      vietnamese: 'sự bắt đầu',
      english: 'beginning',
      type: 'supplementary',
      example: '物語の始まりです。'
    },
    {
      japanese: '終わり',
      kana: 'おわり',
      vietnamese: 'kết thúc',
      english: 'end',
      type: 'supplementary',
      example: '今日の終わりです。'
    },
    {
      japanese: '続き',
      kana: 'つづき',
      vietnamese: 'phần tiếp theo',
      english: 'continuation',
      type: 'supplementary',
      example: '続きは明日話します。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'giữa chừng',
      english: 'on the way, midway',
      type: 'supplementary',
      example: '途中で止めました。'
    },
    {
      japanese: '最初',
      kana: 'さいしょ',
      vietnamese: 'đầu tiên',
      english: 'first, beginning',
      type: 'supplementary',
      example: '最初から始めましょう。'
    },
    {
      japanese: '最後',
      kana: 'さいご',
      vietnamese: 'cuối cùng',
      english: 'last, end',
      type: 'supplementary',
      example: '最後まで頑張ります。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'dọc đường',
      english: 'on the way',
      type: 'supplementary',
      example: '途中で友達に会いました。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'supplementary',
      example: 'いい経験になりました。'
    },
    {
      japanese: '習慣',
      kana: 'しゅうかん',
      vietnamese: 'thói quen',
      english: 'habit',
      type: 'supplementary',
      example: '毎日走る習慣があります。'
    },
    {
      japanese: '練習',
      kana: 'れんしゅう',
      vietnamese: 'luyện tập',
      english: 'practice',
      type: 'supplementary',
      example: '毎日練習しています。'
    },

    // Supplementary Vocabulary - Time & Duration
    {
      japanese: '一時',
      kana: 'いちじ',
      vietnamese: 'tạm thời',
      english: 'temporarily',
      type: 'supplementary',
      example: '一時的に止めます。'
    },
    {
      japanese: '永久',
      kana: 'えいきゅう',
      vietnamese: 'vĩnh viễn',
      english: 'permanently',
      type: 'supplementary',
      example: '永久に続きます。'
    },
    {
      japanese: '連続',
      kana: 'れんぞく',
      vietnamese: 'liên tục',
      english: 'continuous',
      type: 'supplementary',
      example: '三日連続で雨です。'
    },
    {
      japanese: '中断',
      kana: 'ちゅうだん',
      vietnamese: 'gián đoạn',
      english: 'interruption',
      type: 'supplementary',
      example: '作業を中断しました。'
    },
    {
      japanese: '再開',
      kana: 'さいかい',
      vietnamese: 'tái khởi động',
      english: 'resumption',
      type: 'supplementary',
      example: '会議を再開します。'
    },
    {
      japanese: '中止',
      kana: 'ちゅうし',
      vietnamese: 'hủy bỏ',
      english: 'cancellation',
      type: 'supplementary',
      example: '中止になりました。'
    },
    {
      japanese: '延期',
      kana: 'えんき',
      vietnamese: 'hoãn lại',
      english: 'postponement',
      type: 'supplementary',
      example: '試験が延期されました。'
    },
    {
      japanese: '進行',
      kana: 'しんこう',
      vietnamese: 'tiến hành',
      english: 'progress, proceeding',
      type: 'supplementary',
      example: '工事が進行中です。'
    },
    {
      japanese: '完了',
      kana: 'かんりょう',
      vietnamese: 'hoàn thành',
      english: 'completion',
      type: 'supplementary',
      example: '作業が完了しました。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'đang dở',
      english: 'incomplete, midway',
      type: 'supplementary',
      example: '仕事が途中です。'
    },

    // Supplementary Vocabulary - States & Conditions
    {
      japanese: '状態',
      kana: 'じょうたい',
      vietnamese: 'trạng thái',
      english: 'condition, state',
      type: 'supplementary',
      example: 'いい状態です。'
    },
    {
      japanese: '様子',
      kana: 'ようす',
      vietnamese: 'tình hình',
      english: 'state, appearance',
      type: 'supplementary',
      example: '様子を見ましょう。'
    },
    {
      japanese: '変化',
      kana: 'へんか',
      vietnamese: 'sự thay đổi',
      english: 'change',
      type: 'supplementary',
      example: '大きな変化がありました。'
    },
    {
      japanese: '維持',
      kana: 'いじ',
      vietnamese: 'duy trì',
      english: 'maintenance',
      type: 'supplementary',
      example: '健康を維持します。'
    },
    {
      japanese: '継続',
      kana: 'けいぞく',
      vietnamese: 'tiếp tục',
      english: 'continuation',
      type: 'supplementary',
      example: '継続して勉強します。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | c5b3ffb1b3cc46fe
    {
      japanese: "包みます",
      kana: "つつみます",
      vietnamese: "bọc, gói",
      english: "bọc, gói",
      type: "main",
      example: "プレゼントを紙で包みます。\nPurezento o kami de tsutsumimasu.\nTôi gói quà bằng giấy."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | e419ac924b372844
    {
      japanese: "沸かします",
      kana: "わかします",
      vietnamese: "đun sôi",
      english: "đun sôi",
      type: "main",
      example: "やかんでお湯を沸かします。\nYakan de oyu o wakashimasu.\nTôi đun nước nóng bằng ấm."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | e06cc173a03cba85
    {
      japanese: "混ぜます",
      kana: "まぜます",
      vietnamese: "trộn, khuấy",
      english: "trộn, khuấy",
      type: "main",
      example: "材料をよく混ぜます。\nZairyou o yoku mazemasu.\nTôi trộn kỹ nguyên liệu."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 93aebe878dea4c9e
    {
      japanese: "計算します",
      kana: "けいさんします",
      vietnamese: "tính toán, làm tính",
      english: "tính toán, làm tính",
      type: "main",
      example: "値段を計算します。\nNedan o keisan shimasu.\nTôi tính giá tiền."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 4b476b1047e562c7
    {
      japanese: "並びます",
      kana: "ならびます",
      vietnamese: "xếp hàng",
      english: "xếp hàng",
      type: "main",
      example: "駅で人が並んでいます。\nEki de hito ga narande imasu.\nMọi người đang xếp hàng ở ga."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 236ba292538b0c24
    {
      japanese: "丈夫[な]",
      kana: "じょうぶ[な]",
      vietnamese: "chắc, bền; khỏe mạnh",
      english: "chắc, bền; khỏe mạnh",
      type: "main",
      example: "このかばんは丈夫です。\nKono kaban wa joubu desu.\nCái cặp này bền."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 99411f60247ee66f
    {
      japanese: "ー",
      kana: "アパート",
      vietnamese: "phòng trọ, căn hộ",
      english: "phòng trọ, căn hộ",
      type: "main",
      example: "アパートに住んでいます。\nApaato ni sunde imasu.\nTôi đang sống ở căn hộ/phòng trọ."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | b5e3f933da5d62d3
    {
      japanese: "弁護士",
      kana: "べんごし",
      vietnamese: "luật sư",
      english: "luật sư",
      type: "main",
      example: "兄は弁護士です。\nAni wa bengoshi desu.\nAnh trai tôi là luật sư."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 32ba72abb92caee2
    {
      japanese: "音楽家",
      kana: "おんがくか",
      vietnamese: "nhạc sĩ",
      english: "nhạc sĩ",
      type: "main",
      example: "ベートーベンは有名な音楽家です。\nBeetooben wa yuumei na ongakuka desu.\nBeethoven là một nhạc sĩ nổi tiếng."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 3f28b3de13076f73
    {
      japanese: "子どもたち",
      kana: "こどもたち",
      vietnamese: "trẻ em, bọn trẻ",
      english: "trẻ em, bọn trẻ",
      type: "main",
      example: "子どもたちは公園で遊んでいます。\nKodomotachi wa kouen de asonde imasu.\nBọn trẻ đang chơi ở công viên."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 420354b55858453a
    {
      japanese: "自然",
      kana: "しぜん",
      vietnamese: "tự nhiên, thiên nhiên",
      english: "tự nhiên, thiên nhiên",
      type: "main",
      example: "自然を大切にします。\nShizen o taisetsu ni shimasu.\nTôi coi trọng thiên nhiên."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 22e5ee441b7d8a60
    {
      japanese: "教育",
      kana: "きょういく",
      vietnamese: "giáo dục, việc học hành",
      english: "giáo dục, việc học hành",
      type: "main",
      example: "教育はとても大切です。\nKyouiku wa totemo taisetsu desu.\nGiáo dục rất quan trọng."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 540dd20171fd9dbe
    {
      japanese: "文化",
      kana: "ぶんか",
      vietnamese: "văn hóa",
      english: "văn hóa",
      type: "main",
      example: "日本の文化を勉強しています。\nNihon no bunka o benkyou shite imasu.\nTôi đang học văn hóa Nhật Bản."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 53510bc2c754a17f
    {
      japanese: "社会",
      kana: "しゃかい",
      vietnamese: "xã hội",
      english: "xã hội",
      type: "main",
      example: "社会の問題について考えます。\nShakai no mondai ni tsuite kangaemasu.\nTôi suy nghĩ về các vấn đề xã hội."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | a66b50ada00314ee
    {
      japanese: "政治",
      kana: "せいじ",
      vietnamese: "chính trị",
      english: "chính trị",
      type: "main",
      example: "政治に興味があります。\nSeiji ni kyoumi ga arimasu.\nTôi có hứng thú với chính trị."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 938625a9544a962b
    {
      japanese: "法律",
      kana: "ほうりつ",
      vietnamese: "pháp luật",
      english: "pháp luật",
      type: "main",
      example: "法律を守らなければなりません。\nHouritsu o mamoranakereba narimasen.\nPhải tuân thủ pháp luật."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 19e3263027ebc8de
    {
      japanese: "戦争",
      kana: "せんそう",
      vietnamese: "chiến tranh",
      english: "chiến tranh",
      type: "main",
      example: "戦争はよくないです。\nSensou wa yokunai desu.\nChiến tranh là không tốt."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 3481f66b54f857c8
    {
      japanese: "平和",
      kana: "へいわ",
      vietnamese: "hòa bình",
      english: "hòa bình",
      type: "main",
      example: "世界の平和を願います。\nSekai no heiwa o negaimasu.\nTôi cầu mong hòa bình thế giới."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 89e247a234e39500
    {
      japanese: "目的",
      kana: "もくてき",
      vietnamese: "mục đích",
      english: "mục đích",
      type: "main",
      example: "旅行の目的は何ですか。\nRyokou no mokuteki wa nan desu ka.\nMục đích của chuyến du lịch là gì?"
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 3afa3d251751cc81
    {
      japanese: "論文",
      kana: "ろんぶん",
      vietnamese: "luận văn, bài báo học thuật",
      english: "luận văn, bài báo học thuật",
      type: "main",
      example: "大学で論文を書きます。\nDaigaku de ronbun o kakimasu.\nTôi viết luận văn ở đại học."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | f3993f50fe607b36
    {
      japanese: "楽しみ",
      kana: "たのしみ",
      vietnamese: "niềm vui; điều mong đợi",
      english: "niềm vui; điều mong đợi",
      type: "main",
      example: "旅行が楽しみです。\nRyokou ga tanoshimi desu.\nTôi rất mong chờ chuyến du lịch."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | dcfa1a54f08ebd67
    {
      japanese: "ー",
      kana: "ミキサー",
      vietnamese: "máy trộn, máy xay",
      english: "máy trộn, máy xay",
      type: "main",
      example: "ミキサーでジュースを作ります。\nMikisaa de juusu o tsukurimasu.\nTôi làm nước ép bằng máy xay."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 367897f2987a4fa6
    {
      japanese: "ー",
      kana: "やかん",
      vietnamese: "cái ấm nước",
      english: "cái ấm nước",
      type: "main",
      example: "やかんに水を入れます。\nYakan ni mizu o iremasu.\nTôi cho nước vào ấm."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 05351fa3f3a85ed7
    {
      japanese: "ー",
      kana: "ふた",
      vietnamese: "cái nắp",
      english: "cái nắp",
      type: "main",
      example: "ふたを開けてください。\nFuta o akete kudasai.\nHãy mở nắp ra."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 0ae0dbfe46c7396f
    {
      japanese: "栓抜き",
      kana: "せんぬき",
      vietnamese: "cái mở nắp chai",
      english: "cái mở nắp chai",
      type: "main",
      example: "栓抜きで瓶を開けます。\nSennuki de bin o akemasu.\nTôi mở chai bằng cái mở nắp chai."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 559274427190e06e
    {
      japanese: "缶切り",
      kana: "かんきり",
      vietnamese: "cái mở đồ hộp",
      english: "cái mở đồ hộp",
      type: "main",
      example: "缶切りで缶詰を開けます。\nKankiri de kanzume o akemasu.\nTôi mở đồ hộp bằng cái mở hộp."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | c92cf39432184939
    {
      japanese: "缶詰",
      kana: "かんづめ",
      vietnamese: "đồ hộp",
      english: "đồ hộp",
      type: "main",
      example: "缶詰を買いました。\nKanzume o kaimashita.\nTôi đã mua đồ hộp."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | b896fcebb86c9050
    {
      japanese: "のし袋",
      kana: "のしぶくろ",
      vietnamese: "phong bì bỏ tiền mừng, bao lì xì",
      english: "phong bì bỏ tiền mừng, bao lì xì",
      type: "main",
      example: "のし袋にお金を入れます。\nNoshibukuro ni okane o iremasu.\nTôi cho tiền vào phong bì mừng."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 4da75a506fe636f8
    {
      japanese: "ー",
      kana: "ふろしき",
      vietnamese: "tấm vải để gói đồ",
      english: "tấm vải để gói đồ",
      type: "main",
      example: "ふろしきで荷物を包みます。\nFuroshiki de nimotsu o tsutsumimasu.\nTôi gói hành lý bằng khăn gói đồ."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 2ee61ffdeaa3349f
    {
      japanese: "ー",
      kana: "そろばん",
      vietnamese: "bàn tính",
      english: "bàn tính",
      type: "main",
      example: "そろばんで計算します。\nSoroban de keisan shimasu.\nTôi tính toán bằng bàn tính."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 0d1234101a27d245
    {
      japanese: "体温計",
      kana: "たいおんけい",
      vietnamese: "máy đo nhiệt độ cơ thể",
      english: "máy đo nhiệt độ cơ thể",
      type: "main",
      example: "体温計で熱を測ります。\nTaionkei de netsu o hakarimasu.\nTôi đo sốt bằng nhiệt kế."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 62d5a4525a7bcc2b
    {
      japanese: "材料",
      kana: "ざいりょう",
      vietnamese: "nguyên liệu, vật liệu",
      english: "nguyên liệu, vật liệu",
      type: "main",
      example: "カレーの材料を買います。\nKaree no zairyou o kaimasu.\nTôi mua nguyên liệu làm cà ri."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 2304c24da3b42d9a
    {
      japanese: "ー",
      kana: "ある〜",
      vietnamese: "có một ~, một ~ nào đó",
      english: "có một ~, một ~ nào đó",
      type: "main",
      example: "ある日、男が来ました。\nAru hi, otoko ga kimashita.\nMột ngày nọ, có một người đàn ông đến."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 8a656a7911bc4ad2
    {
      japanese: "一生懸命",
      kana: "いっしょうけんめい",
      vietnamese: "hết sức, chăm chỉ",
      english: "hết sức, chăm chỉ",
      type: "main",
      example: "一生懸命日本語を勉強します。\nIsshoukenmei Nihongo o benkyou shimasu.\nTôi học tiếng Nhật hết sức chăm chỉ."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 952de6e41e358b45
    {
      japanese: "ー",
      kana: "なぜ",
      vietnamese: "tại sao",
      english: "tại sao",
      type: "main",
      example: "なぜ日本語を勉強していますか。\nNaze Nihongo o benkyou shite imasu ka.\nTại sao bạn đang học tiếng Nhật?"
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 031dee6bba6039f2
    {
      japanese: "ー",
      kana: "どのくらい",
      vietnamese: "bao nhiêu, khoảng bao lâu",
      english: "bao nhiêu, khoảng bao lâu",
      type: "main",
      example: "日本語をどのくらい勉強しましたか。\nNihongo o dono kurai benkyou shimashita ka.\nBạn đã học tiếng Nhật khoảng bao lâu rồi?"
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 2a5cefbcda926082
    {
      japanese: "国連",
      kana: "こくれん",
      vietnamese: "Liên Hợp Quốc",
      english: "Liên Hợp Quốc",
      type: "main",
      example: "国連で働きたいです。\nKokuren de hatarakitai desu.\nTôi muốn làm việc ở Liên Hợp Quốc."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 8a419a82e2b0a06a
    {
      japanese: "ー",
      kana: "エリーゼのために",
      vietnamese: "Für Elise / Dành cho Elise",
      english: "Für Elise / Dành cho Elise",
      type: "main",
      example: "「エリーゼのために」は有名な曲です。\n“Eriize no tame ni” wa yuumei na kyoku desu.\n“Für Elise” là một bản nhạc nổi tiếng."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 1fa2e70f6668c257
    {
      japanese: "ー",
      kana: "ベートーベン",
      vietnamese: "Beethoven",
      english: "Beethoven",
      type: "main",
      example: "ベートーベンはドイツの音楽家です。\nBeetooben wa Doitsu no ongakuka desu.\nBeethoven là nhạc sĩ người Đức."
    },
    // source: review_tu_vung_bai_42.md | 1. Từ vựng chính | 574caf9b308bcef0
    {
      japanese: "子どもニュース",
      kana: "こどもニュース",
      vietnamese: "bản tin thiếu nhi",
      english: "bản tin thiếu nhi",
      type: "main",
      example: "子どもニュースを見ます。\nKodomo nyuusu o mimasu.\nTôi xem bản tin thiếu nhi."
    },
    // source: review_tu_vung_bai_42.md | 2. Từ vựng hội thoại | 2181f2d7aceca377
    {
      japanese: "出ます［ボーナスが〜］",
      kana: "でます［ボーナスが〜］",
      vietnamese: "có thưởng, tiền thưởng được phát",
      english: "có thưởng, tiền thưởng được phát",
      type: "supplementary",
      example: "今年はボーナスが出ます。\nKotoshi wa boonasu ga demasu.\nNăm nay có thưởng."
    },
    // source: review_tu_vung_bai_42.md | 2. Từ vựng hội thoại | 37c8d2894526d44d
    {
      japanese: "半分",
      kana: "はんぶん",
      vietnamese: "một nửa",
      english: "một nửa",
      type: "supplementary",
      example: "ケーキを半分食べました。\nKeeki o hanbun tabemashita.\nTôi đã ăn một nửa cái bánh."
    },
    // source: review_tu_vung_bai_42.md | 2. Từ vựng hội thoại | 55cdb5816ed6abbb
    {
      japanese: "ー",
      kana: "ローン",
      vietnamese: "khoản vay trả góp, tiền vay góp",
      english: "khoản vay trả góp, tiền vay góp",
      type: "supplementary",
      example: "ローンで車を買いました。\nRoon de kuruma o kaimashita.\nTôi đã mua xe bằng khoản vay trả góp."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 99450fd4cd311e2f
    {
      japanese: "ー",
      kana: "カップめん",
      vietnamese: "mì ly, mì ăn liền đựng trong cốc",
      english: "mì ly, mì ăn liền đựng trong cốc",
      type: "supplementary",
      example: "カップめんにお湯を注ぎます。\nKappu men ni oyu o sosogimasu.\nTôi đổ nước nóng vào mì ly."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | f892b10f0357b188
    {
      japanese: "世界初",
      kana: "せかいはつ",
      vietnamese: "đầu tiên trên thế giới",
      english: "đầu tiên trên thế giới",
      type: "supplementary",
      example: "これは世界初のカップめんです。\nKore wa sekai hatsu no kappu men desu.\nĐây là mì ly đầu tiên trên thế giới."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | b96928aa7d33cb23
    {
      japanese: "ー",
      kana: "〜によって",
      vietnamese: "bởi ~, do ~",
      english: "bởi ~, do ~",
      type: "supplementary",
      example: "カップめんは安藤百福によって作られました。\nKappu men wa Andou Momofuku ni yotte tsukuraremashita.\nMì ly được tạo ra bởi Ando Momofuku."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 3597be9502fdafcf
    {
      japanese: "ー",
      kana: "どんぶり",
      vietnamese: "cái bát tô",
      english: "cái bát tô",
      type: "supplementary",
      example: "どんぶりにめんを入れます。\nDonburi ni men o iremasu.\nTôi cho mì vào bát tô."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 2cfebd4736c9c0f9
    {
      japanese: "ー",
      kana: "めん",
      vietnamese: "mì sợi",
      english: "mì sợi",
      type: "supplementary",
      example: "めんをゆでます。\nMen o yudemasu.\nTôi luộc mì."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 9274baa4591f8ef4
    {
      japanese: "広めます",
      kana: "ひろめます",
      vietnamese: "nhân rộng, mở rộng, truyền bá",
      english: "nhân rộng, mở rộng, truyền bá",
      type: "supplementary",
      example: "日本の文化を世界に広めます。\nNihon no bunka o sekai ni hiromemasu.\nTôi truyền bá văn hóa Nhật ra thế giới."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 80d9bc243c72f94e
    {
      japanese: "市場調査",
      kana: "しじょうちょうさ",
      vietnamese: "điều tra thị trường",
      english: "điều tra thị trường",
      type: "supplementary",
      example: "新しい商品について市場調査をします。\nAtarashii shouhin ni tsuite shijou chousa o shimasu.\nTôi điều tra thị trường về sản phẩm mới."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | d9b5e3e5d91559da
    {
      japanese: "割ります",
      kana: "わります",
      vietnamese: "bẻ ra, chia nhỏ; làm vỡ",
      english: "bẻ ra, chia nhỏ; làm vỡ",
      type: "supplementary",
      example: "卵を割ります。\nTamago o warimasu.\nTôi đập trứng."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | a57bbef2649ceabb
    {
      japanese: "注ぎます",
      kana: "そそぎます",
      vietnamese: "đổ vào, rót vào",
      english: "đổ vào, rót vào",
      type: "supplementary",
      example: "コップに水を注ぎます。\nKoppu ni mizu o sosogimasu.\nTôi rót nước vào cốc."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 75f8fd7a418aa011
    {
      japanese: "ー",
      kana: "チキンラーメン",
      vietnamese: "tên một loại mì ăn liền",
      english: "tên một loại mì ăn liền",
      type: "supplementary",
      example: "チキンラーメンを食べました。\nChikin raamen o tabemashita.\nTôi đã ăn Chikin Ramen."
    },
    // source: review_tu_vung_bai_42.md | 3. Từ vựng đọc hiểu | 1adcbf02b573d1e0
    {
      japanese: "安藤百福",
      kana: "あんどうももふく",
      vietnamese: "Ando Momofuku, nhà kinh doanh/nhà phát minh người Nhật",
      english: "Ando Momofuku, nhà kinh doanh/nhà phát minh người Nhật",
      type: "supplementary",
      example: "安藤百福はチキンラーメンを作りました。\nAndou Momofuku wa Chikin raamen o tsukurimashita.\nAndo Momofuku đã tạo ra Chikin Ramen."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 2f200ac6e054df23
    {
      japanese: "プレゼントを包みます",
      kana: "プレゼントを包みます",
      vietnamese: "gói quà",
      english: "gói quà",
      type: "supplementary",
      example: "Dùng を / o với vật được gói."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 64a34c76de661161
    {
      japanese: "お湯を沸かします",
      kana: "お湯を沸かします",
      vietnamese: "đun nước nóng",
      english: "đun nước nóng",
      type: "supplementary",
      example: "沸かします / wakashimasu là ngoại động từ: mình đun cho nước sôi."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 1d8f7859b91dfe27
    {
      japanese: "材料を混ぜます",
      kana: "材料を混ぜます",
      vietnamese: "trộn nguyên liệu",
      english: "trộn nguyên liệu",
      type: "supplementary",
      example: "Hay dùng trong nấu ăn."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 41ff0cf1ac89c975
    {
      japanese: "値段を計算します",
      kana: "値段を計算します",
      vietnamese: "tính giá tiền",
      english: "tính giá tiền",
      type: "supplementary",
      example: "計算します / keisan shimasu dùng cho tính toán số liệu."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | f6bd9e704836b97e
    {
      japanese: "列に並びます",
      kana: "列に並びます",
      vietnamese: "xếp vào hàng",
      english: "xếp vào hàng",
      type: "supplementary",
      example: "Dùng に / ni với “hàng” mình xếp vào."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | e382a4a047b15873
    {
      japanese: "ボーナスが出ます",
      kana: "ボーナスが出ます",
      vietnamese: "có tiền thưởng",
      english: "có tiền thưởng",
      type: "supplementary",
      example: "Chủ ngữ là ボーナス / boonasu; dùng が / ga."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 241b191ecdf07061
    {
      japanese: "ローンで買います",
      kana: "ローンで買います",
      vietnamese: "mua bằng khoản vay trả góp",
      english: "mua bằng khoản vay trả góp",
      type: "supplementary",
      example: "で / de chỉ phương tiện/cách thức thanh toán."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | a5b0a2d00b7fe331
    {
      japanese: "一生懸命勉強します",
      kana: "一生懸命勉強します",
      vietnamese: "học hết sức chăm chỉ",
      english: "học hết sức chăm chỉ",
      type: "supplementary",
      example: "一生懸命 / isshoukenmei thường đứng trước động từ."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | 64822589d6e8a22a
    {
      japanese: "〜によって作られます",
      kana: "〜によって作られます",
      vietnamese: "được tạo ra bởi ~",
      english: "được tạo ra bởi ~",
      type: "supplementary",
      example: "Dùng trong câu bị động để nói tác giả/người tạo ra."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | aed35c008126deb0
    {
      japanese: "お湯を注ぎます",
      kana: "お湯を注ぎます",
      vietnamese: "rót/đổ nước nóng vào",
      english: "rót/đổ nước nóng vào",
      type: "supplementary",
      example: "注ぎます / sosogimasu thường dùng với chất lỏng."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | d5cfc677f9191658
    {
      japanese: "文化を広めます",
      kana: "文化を広めます",
      vietnamese: "truyền bá văn hóa",
      english: "truyền bá văn hóa",
      type: "supplementary",
      example: "広めます / hiromemasu là “làm cho lan rộng”."
    },
    // source: review_tu_vung_bai_42.md | 4. Cụm cần nhớ | cfd3a636aa161e3a
    {
      japanese: "市場調査をします",
      kana: "市場調査をします",
      vietnamese: "điều tra thị trường",
      english: "điều tra thị trường",
      type: "supplementary",
      example: "Cụm danh từ + します / shimasu."
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 9c73d8231ed5c0ad
    {
      japanese: "計",
      kana: "ケイ / kei",
      vietnamese: "Kế — tính toán, kế hoạch",
      english: "tính toán, kế hoạch",
      type: "kanji",
      example: "計算します / keisan shimasu"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | e30897d1702e65e5
    {
      japanese: "算",
      kana: "サン / san",
      vietnamese: "Toán — tính toán",
      english: "tính toán",
      type: "kanji",
      example: "計算します / keisan shimasu"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 1e6a98f550fdf0c7
    {
      japanese: "子",
      kana: "シ / shi, ス / su",
      vietnamese: "Tử — con, đứa trẻ",
      english: "con, đứa trẻ",
      type: "kanji",
      example: "子どもたち / kodomotachi"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 992c11201a006f5e
    {
      japanese: "自",
      kana: "ジ / ji, シ / shi",
      vietnamese: "Tự — bản thân, tự mình",
      english: "bản thân, tự mình",
      type: "kanji",
      example: "自然 / shizen"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 90555627909a2bda
    {
      japanese: "然",
      kana: "ゼン / zen, ネン / nen",
      vietnamese: "Nhiên — như vậy, tự nhiên",
      english: "như vậy, tự nhiên",
      type: "kanji",
      example: "自然 / shizen"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 8cc822dc39411174
    {
      japanese: "教",
      kana: "キョウ / kyou",
      vietnamese: "Giáo — dạy",
      english: "dạy",
      type: "kanji",
      example: "教育 / kyouiku"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | b5a037ababf721eb
    {
      japanese: "育",
      kana: "イク / iku",
      vietnamese: "Dục — nuôi dưỡng",
      english: "nuôi dưỡng",
      type: "kanji",
      example: "教育 / kyouiku"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | ca3dd2ca8e1124cf
    {
      japanese: "文",
      kana: "ブン / bun, モン / mon",
      vietnamese: "Văn — văn, chữ, văn hóa",
      english: "văn, chữ, văn hóa",
      type: "kanji",
      example: "文化 / bunka"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 35e15676efccf020
    {
      japanese: "化",
      kana: "カ / ka, ケ / ke",
      vietnamese: "Hóa — biến hóa, văn hóa",
      english: "biến hóa, văn hóa",
      type: "kanji",
      example: "文化 / bunka"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 3992b78210aa86a4
    {
      japanese: "社",
      kana: "シャ / sha",
      vietnamese: "Xã — xã hội, công ty, đền",
      english: "xã hội, công ty, đền",
      type: "kanji",
      example: "社会 / shakai"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | eabe9b321efb2471
    {
      japanese: "会",
      kana: "カイ / kai, エ / e",
      vietnamese: "Hội — gặp, hội",
      english: "gặp, hội",
      type: "kanji",
      example: "社会 / shakai"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | aa28a0eb4a8ba07e
    {
      japanese: "国",
      kana: "コク / koku",
      vietnamese: "Quốc — nước, quốc gia",
      english: "nước, quốc gia",
      type: "kanji",
      example: "国連 / Kokuren"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | ba61b2fedbb63b0a
    {
      japanese: "出",
      kana: "シュツ / shutsu, スイ / sui",
      vietnamese: "Xuất — ra, xuất hiện",
      english: "ra, xuất hiện",
      type: "kanji",
      example: "出ます / demasu"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 1983445437ad6cc6
    {
      japanese: "半",
      kana: "ハン / han",
      vietnamese: "Bán — một nửa",
      english: "một nửa",
      type: "kanji",
      example: "半分 / hanbun"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 12d67743bfe7c1c5
    {
      japanese: "分",
      kana: "ブン / bun, フン / fun, ブ / bu",
      vietnamese: "Phân — phần, chia, phút",
      english: "phần, chia, phút",
      type: "kanji",
      example: "半分 / hanbun"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 4c2552fe25b2da63
    {
      japanese: "体",
      kana: "タイ / tai, テイ / tei",
      vietnamese: "Thể — cơ thể",
      english: "cơ thể",
      type: "kanji",
      example: "体温計 / taionkei"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 6dfe149e50d4eccf
    {
      japanese: "温",
      kana: "オン / on",
      vietnamese: "Ôn — ấm, nhiệt độ",
      english: "ấm, nhiệt độ",
      type: "kanji",
      example: "体温計 / taionkei"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 21e769812e1f589e
    {
      japanese: "目",
      kana: "モク / moku, ボク / boku",
      vietnamese: "Mục — mắt, mục tiêu",
      english: "mắt, mục tiêu",
      type: "kanji",
      example: "目的 / mokuteki"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | c2f5a758ae83aac4
    {
      japanese: "的",
      kana: "テキ / teki",
      vietnamese: "Đích — đích, mục tiêu, tính chất",
      english: "đích, mục tiêu, tính chất",
      type: "kanji",
      example: "目的 / mokuteki"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | c6fde96ba080558d
    {
      japanese: "楽",
      kana: "ガク / gaku, ラク / raku",
      vietnamese: "Lạc — vui, âm nhạc",
      english: "vui, âm nhạc",
      type: "kanji",
      example: "楽しみ / tanoshimi"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 5880e5d8af51b226
    {
      japanese: "平",
      kana: "ヘイ / hei, ビョウ / byou",
      vietnamese: "Bình — bằng phẳng, hòa bình",
      english: "bằng phẳng, hòa bình",
      type: "kanji",
      example: "平和 / heiwa"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 7ed5a60c8437221e
    {
      japanese: "和",
      kana: "ワ / wa, オ / o",
      vietnamese: "Hòa — hòa hợp, Nhật Bản",
      english: "hòa hợp, Nhật Bản",
      type: "kanji",
      example: "平和 / heiwa"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | a86748a81d26aed4
    {
      japanese: "世",
      kana: "セイ / sei, セ / se",
      vietnamese: "Thế — thế gian, đời",
      english: "thế gian, đời",
      type: "kanji",
      example: "世界 / sekai"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | bd922f8963f4acfe
    {
      japanese: "界",
      kana: "カイ / kai",
      vietnamese: "Giới — thế giới, ranh giới",
      english: "thế giới, ranh giới",
      type: "kanji",
      example: "世界 / sekai"
    },
    // source: review_tu_vung_bai_42.md | 5. Kanji N5–N4 cần học kỹ | 88ba20fda98285f7
    {
      japanese: "男",
      kana: "ダン / dan, ナン / nan",
      vietnamese: "Nam — đàn ông, nam giới",
      english: "đàn ông, nam giới",
      type: "kanji",
      example: "男 / otoko"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b1854a44a0fe5adf
    {
      japanese: "計算",
      kana: "ケイ / kei",
      vietnamese: "Kế — 計 = tính toán, kế hoạch",
      english: "計 = tính toán, kế hoạch",
      type: "kanji",
      example: "計算"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2bb715c7c4777513
    {
      japanese: "計算",
      kana: "サン / san",
      vietnamese: "Toán — 算 = tính toán",
      english: "算 = tính toán",
      type: "kanji",
      example: "計算"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d03e22a6863b0f91
    {
      japanese: "子ども",
      kana: "こ / ko",
      vietnamese: "Tử — 子 = con, trẻ em",
      english: "子 = con, trẻ em",
      type: "kanji",
      example: "子ども"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d397e36b6bc38e35
    {
      japanese: "親子",
      kana: "シ / shi",
      vietnamese: "Tử — 親 = cha mẹ; 子 = con",
      english: "親 = cha mẹ; 子 = con",
      type: "kanji",
      example: "親子"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | eb25a868b63c6f36
    {
      japanese: "自然",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 然 = tự nhiên",
      english: "自 = tự mình; 然 = tự nhiên",
      type: "kanji",
      example: "自然"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 79f5273ecc2ece0a
    {
      japanese: "自分",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 分 = phần/bản thân",
      english: "自 = tự mình; 分 = phần/bản thân",
      type: "kanji",
      example: "自分"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 48a6a24a259ad002
    {
      japanese: "教育",
      kana: "キョウ / kyou",
      vietnamese: "Giáo — 教 = dạy; 育 = nuôi dưỡng",
      english: "教 = dạy; 育 = nuôi dưỡng",
      type: "kanji",
      example: "教育"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0a77e13962ddde19
    {
      japanese: "教える",
      kana: "おし.える / oshieru",
      vietnamese: "Giáo — 教 = dạy",
      english: "教 = dạy",
      type: "kanji",
      example: "教える"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5bfa6d4f73d4f67c
    {
      japanese: "育てる",
      kana: "そだ.てる / sodateru",
      vietnamese: "Dục — 育 = nuôi dưỡng",
      english: "育 = nuôi dưỡng",
      type: "kanji",
      example: "育てる"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | fb24485db928bd96
    {
      japanese: "文化",
      kana: "ブン / bun",
      vietnamese: "Văn — 文 = văn; 化 = biến hóa",
      english: "文 = văn; 化 = biến hóa",
      type: "kanji",
      example: "文化"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 203b40ac6f8540ad
    {
      japanese: "文法",
      kana: "ブン / bun",
      vietnamese: "Văn — 文 = chữ, văn",
      english: "文 = chữ, văn",
      type: "kanji",
      example: "文法"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 716c8d96ff53ac0d
    {
      japanese: "文化",
      kana: "カ / ka",
      vietnamese: "Hóa — 文 = văn; 化 = hóa",
      english: "文 = văn; 化 = hóa",
      type: "kanji",
      example: "文化"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2778360ac0d8fc12
    {
      japanese: "社会",
      kana: "シャ / sha",
      vietnamese: "Xã — 社 = xã hội/công ty; 会 = hội",
      english: "社 = xã hội/công ty; 会 = hội",
      type: "kanji",
      example: "社会"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 12edda9b51646252
    {
      japanese: "会社",
      kana: "シャ / sha",
      vietnamese: "Xã — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bf82f7a42f9f2159
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp",
      english: "会 = gặp",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 6498e370796bc22f
    {
      japanese: "国連",
      kana: "コク / koku",
      vietnamese: "Quốc — 国 = nước; 連 = liên kết",
      english: "国 = nước; 連 = liên kết",
      type: "kanji",
      example: "国連"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | dde9b2fa5a1a94ee
    {
      japanese: "国",
      kana: "くに / kuni",
      vietnamese: "Quốc — 国 = nước",
      english: "国 = nước",
      type: "kanji",
      example: "国"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 35e40bead40408d4
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 98313aba7b0c0230
    {
      japanese: "出す",
      kana: "だ.す / dasu",
      vietnamese: "Xuất — 出 = đưa ra",
      english: "出 = đưa ra",
      type: "kanji",
      example: "出す"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ef1e9478fba586a1
    {
      japanese: "半分",
      kana: "ハン / han",
      vietnamese: "Bán — 半 = một nửa; 分 = phần",
      english: "半 = một nửa; 分 = phần",
      type: "kanji",
      example: "半分"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d20588687bcee2c4
    {
      japanese: "分ける",
      kana: "わ.ける / wakeru",
      vietnamese: "Phân — 分 = phần, chia",
      english: "分 = phần, chia",
      type: "kanji",
      example: "分ける"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 259426354122fc16
    {
      japanese: "体温計",
      kana: "タイ / tai",
      vietnamese: "Thể — 体 = cơ thể; 温 = nhiệt độ; 計 = máy đo",
      english: "体 = cơ thể; 温 = nhiệt độ; 計 = máy đo",
      type: "kanji",
      example: "体温計"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bc218becda2c3c62
    {
      japanese: "温かい",
      kana: "あたた.かい / atatakai",
      vietnamese: "Ôn — 温 = ấm, nhiệt độ",
      english: "温 = ấm, nhiệt độ",
      type: "kanji",
      example: "温かい"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0dd017dee4b5d71c
    {
      japanese: "目的",
      kana: "モク / moku",
      vietnamese: "Mục — 目 = mắt, mục; 的 = đích",
      english: "目 = mắt, mục; 的 = đích",
      type: "kanji",
      example: "目的"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cbcd81f0c2c39a2d
    {
      japanese: "目",
      kana: "め / me",
      vietnamese: "Mục — 目 = mắt",
      english: "目 = mắt",
      type: "kanji",
      example: "目"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 504023b2dc1d4a13
    {
      japanese: "目的",
      kana: "テキ / teki",
      vietnamese: "Đích — 的 = mục tiêu/tính chất",
      english: "的 = mục tiêu/tính chất",
      type: "kanji",
      example: "目的"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d2bbd706eab94486
    {
      japanese: "楽しい",
      kana: "たの.しい / tanoshii",
      vietnamese: "Lạc — 楽 = vui",
      english: "楽 = vui",
      type: "kanji",
      example: "楽しい"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8b5f04d91d0cc066
    {
      japanese: "音楽",
      kana: "ガク / gaku",
      vietnamese: "Lạc — 音 = âm thanh; 楽 = nhạc",
      english: "音 = âm thanh; 楽 = nhạc",
      type: "kanji",
      example: "音楽"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 63f839e2412f6ebb
    {
      japanese: "平和",
      kana: "ヘイ / hei",
      vietnamese: "Bình — 平 = bình; 和 = hòa",
      english: "平 = bình; 和 = hòa",
      type: "kanji",
      example: "平和"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | da7aacf14d77afcb
    {
      japanese: "平和",
      kana: "ワ / wa",
      vietnamese: "Hòa — 平 = bình; 和 = hòa",
      english: "平 = bình; 和 = hòa",
      type: "kanji",
      example: "平和"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1ea34daffc088918
    {
      japanese: "世界",
      kana: "セ / se",
      vietnamese: "Thế — 世 = thế gian; 界 = giới",
      english: "世 = thế gian; 界 = giới",
      type: "kanji",
      example: "世界"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | faad01a716a8de69
    {
      japanese: "世界",
      kana: "カイ / kai",
      vietnamese: "Giới — 世 = thế gian; 界 = giới",
      english: "世 = thế gian; 界 = giới",
      type: "kanji",
      example: "世界"
    },
    // source: review_tu_vung_bai_42.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8055bf42aa7395df
    {
      japanese: "男",
      kana: "おとこ / otoko",
      vietnamese: "Nam — 男 = đàn ông",
      english: "男 = đàn ông",
      type: "kanji",
      example: "男"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～始める',
      vietnamese: 'bắt đầu ~',
      english: 'to start/begin doing',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ hành động bắt đầu. Ví dụ: 食べる→食べ始める (bắt đầu ăn). Nhấn mạnh thời điểm khởi đầu của hành động.',
      examples: [
        {
          japanese: '本を読み始めました。',
          vietnamese: 'Tôi đã bắt đầu đọc sách.',
          english: 'I started reading a book.',
          type: 'main'
        },
        {
          japanese: '雨が降り始めました。',
          vietnamese: 'Trời bắt đầu mưa.',
          english: 'It started to rain.',
          type: 'main'
        },
        {
          japanese: '日本語を勉強し始めたのは去年です。',
          vietnamese: 'Tôi bắt đầu học tiếng Nhật từ năm ngoái.',
          english: 'I started studying Japanese last year.',
          type: 'main'
        },
        {
          japanese: '赤ちゃんが泣き始めました。',
          vietnamese: 'Em bé bắt đầu khóc.',
          english: 'The baby started crying.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～終わる',
      vietnamese: 'làm xong ~, hoàn thành ~',
      english: 'to finish doing',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ hành động hoàn tất. Ví dụ: 食べる→食べ終わる (ăn xong). Nhấn mạnh sự hoàn thành của hành động.',
      examples: [
        {
          japanese: '宿題をやり終わりました。',
          vietnamese: 'Tôi đã làm xong bài tập về nhà.',
          english: 'I finished doing my homework.',
          type: 'main'
        },
        {
          japanese: 'もう食べ終わりましたか。',
          vietnamese: 'Bạn ăn xong rồi à?',
          english: 'Have you finished eating?',
          type: 'main'
        },
        {
          japanese: 'レポートを書き終わったら、提出してください。',
          vietnamese: 'Sau khi viết xong báo cáo, hãy nộp.',
          english: 'Please submit it after you finish writing the report.',
          type: 'main'
        },
        {
          japanese: '映画が終わり終わったら、電話します。',
          vietnamese: 'Sau khi phim chiếu xong, tôi sẽ gọi điện.',
          english: 'I\'ll call after the movie ends.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～続ける',
      vietnamese: 'tiếp tục ~',
      english: 'to continue doing',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ hành động tiếp diễn liên tục. Ví dụ: 話す→話し続ける (tiếp tục nói). Nhấn mạnh tính liên tục của hành động.',
      examples: [
        {
          japanese: '彼は三時間も話し続けました。',
          vietnamese: 'Anh ấy đã nói liên tục 3 tiếng đồng hồ.',
          english: 'He kept talking for three hours.',
          type: 'main'
        },
        {
          japanese: '雨が降り続いています。',
          vietnamese: 'Trời mưa liên tục.',
          english: 'It continues to rain.',
          type: 'main'
        },
        {
          japanese: '毎日走り続けています。',
          vietnamese: 'Tôi tiếp tục chạy mỗi ngày.',
          english: 'I continue to run every day.',
          type: 'main'
        },
        {
          japanese: '努力し続ければ、きっと成功します。',
          vietnamese: 'Nếu tiếp tục nỗ lực, chắc chắn sẽ thành công.',
          english: 'If you keep trying, you will surely succeed.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～出す',
      vietnamese: 'bắt đầu ~ (đột ngột)',
      english: 'to start doing suddenly',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ hành động bắt đầu đột ngột hoặc bắt đầu làm điều gì đó. Ví dụ: 走る→走り出す (bắt đầu chạy). Thường mang ý nghĩa đột ngột, tự nhiên.',
      examples: [
        {
          japanese: '急に雨が降り出しました。',
          vietnamese: 'Trời đột nhiên bắt đầu mưa.',
          english: 'It suddenly started raining.',
          type: 'main'
        },
        {
          japanese: '赤ちゃんが泣き出しました。',
          vietnamese: 'Em bé bắt đầu khóc.',
          english: 'The baby started crying.',
          type: 'main'
        },
        {
          japanese: '犬が走り出しました。',
          vietnamese: 'Con chó bắt đầu chạy.',
          english: 'The dog started running.',
          type: 'main'
        },
        {
          japanese: '彼女は笑い出しました。',
          vietnamese: 'Cô ấy bật cười.',
          english: 'She burst out laughing.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～直す',
      vietnamese: 'làm lại ~, sửa lại ~',
      english: 'to redo, to do again',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ việc làm lại hoặc sửa chữa. Ví dụ: 書く→書き直す (viết lại). Mang ý nghĩa sửa chữa hoặc cải thiện.',
      examples: [
        {
          japanese: 'レポートを書き直しました。',
          vietnamese: 'Tôi đã viết lại báo cáo.',
          english: 'I rewrote the report.',
          type: 'main'
        },
        {
          japanese: '間違えたので、やり直してください。',
          vietnamese: 'Vì sai rồi nên hãy làm lại.',
          english: 'Please do it again because it\'s wrong.',
          type: 'main'
        },
        {
          japanese: '服を着直しました。',
          vietnamese: 'Tôi đã mặc lại quần áo.',
          english: 'I put my clothes on again.',
          type: 'main'
        },
        {
          japanese: '考え直してみます。',
          vietnamese: 'Tôi sẽ thử suy nghĩ lại.',
          english: 'I\'ll think about it again.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～過ぎる',
      vietnamese: '~ quá mức',
      english: 'too much, excessively',
      type: 'main',
      explanation: 'Nối với thể ます của động từ (bỏ ます) hoặc với tính từ (い-adj bỏ い, な-adj giữ nguyên) để chỉ mức độ quá mức. Ví dụ: 食べる→食べ過ぎる (ăn quá nhiều), 高い→高過ぎる (quá cao).',
      examples: [
        {
          japanese: '昨日飲み過ぎました。',
          vietnamese: 'Hôm qua tôi đã uống quá nhiều.',
          english: 'I drank too much yesterday.',
          type: 'main'
        },
        {
          japanese: 'このケーキは甘過ぎます。',
          vietnamese: 'Chiếc bánh này quá ngọt.',
          english: 'This cake is too sweet.',
          type: 'main'
        },
        {
          japanese: '働き過ぎないでください。',
          vietnamese: 'Đừng làm việc quá sức.',
          english: 'Don\'t work too hard.',
          type: 'main'
        },
        {
          japanese: '心配し過ぎですよ。',
          vietnamese: 'Bạn lo lắng quá đấy.',
          english: 'You worry too much.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～忘れる',
      vietnamese: 'quên ~',
      english: 'to forget to do',
      type: 'additional',
      explanation: 'Nối với thể ます của động từ (bỏ ます) để chỉ việc quên làm điều gì đó. Ví dụ: 持つ→持ち忘れる (quên mang theo). Diễn tả hành động bị bỏ sót.',
      examples: [
        {
          japanese: '傘を持ち忘れました。',
          vietnamese: 'Tôi đã quên mang ô.',
          english: 'I forgot to bring my umbrella.',
          type: 'main'
        },
        {
          japanese: '大切なことを言い忘れました。',
          vietnamese: 'Tôi đã quên nói điều quan trọng.',
          english: 'I forgot to say something important.',
          type: 'main'
        },
        {
          japanese: '買い忘れた物がありますか。',
          vietnamese: 'Có thứ gì bạn quên mua không?',
          english: 'Is there anything you forgot to buy?',
          type: 'main'
        },
        {
          japanese: '鍵を閉め忘れました。',
          vietnamese: 'Tôi đã quên khóa cửa.',
          english: 'I forgot to lock the door.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～やすい／～にくい',
      vietnamese: 'dễ ~/khó ~',
      english: 'easy to do / hard to do',
      type: 'additional',
      explanation: 'Nối với thể ます của động từ (bỏ ます). やすい chỉ sự dễ dàng, にくい chỉ sự khó khăn. Ví dụ: 読む→読みやすい (dễ đọc), 読みにくい (khó đọc).',
      examples: [
        {
          japanese: 'この本は読みやすいです。',
          vietnamese: 'Cuốn sách này dễ đọc.',
          english: 'This book is easy to read.',
          type: 'main'
        },
        {
          japanese: '字が小さくて読みにくいです。',
          vietnamese: 'Chữ nhỏ nên khó đọc.',
          english: 'The letters are small and hard to read.',
          type: 'main'
        },
        {
          japanese: 'この靴は歩きやすいです。',
          vietnamese: 'Đôi giày này dễ đi.',
          english: 'These shoes are easy to walk in.',
          type: 'main'
        },
        {
          japanese: '彼の話は分かりにくいです。',
          vietnamese: 'Câu chuyện của anh ấy khó hiểu.',
          english: 'His story is hard to understand.',
          type: 'additional'
        }
      ]
    }
  ]
};

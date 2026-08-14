/**
 * N4 Core Lessons — Lesson 16: 条件表現 (Negative Conditionals & Assumptions)
 * Focus: ~なければ、~ないと、conditional expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_16_DATA: LessonData = {
  lessonNumber: 16,
  title: '条件表現 (Conditional Expressions)',
  vocabulary: [
    // Main Vocabulary - Verbs
    {
      japanese: '急ぐ',
      kana: 'いそぐ',
      vietnamese: 'vội vã, gấp rút',
      english: 'to hurry',
      type: 'main',
      example: '急がないと遅れますよ。'
    },
    {
      japanese: '間に合う',
      kana: 'まにあう',
      vietnamese: 'kịp giờ',
      english: 'to be in time',
      type: 'main',
      example: '急げば間に合います。'
    },
    {
      japanese: '遅れる',
      kana: 'おくれる',
      vietnamese: 'trễ, muộn',
      english: 'to be late',
      type: 'main',
      example: '電車が遅れています。'
    },
    {
      japanese: '準備する',
      kana: 'じゅんびする',
      vietnamese: 'chuẩn bị',
      english: 'to prepare',
      type: 'main',
      example: '旅行の準備をしなければなりません。'
    },
    {
      japanese: '確認する',
      kana: 'かくにんする',
      vietnamese: 'xác nhận, kiểm tra',
      english: 'to confirm, to check',
      type: 'main',
      example: '予約を確認してください。'
    },
    {
      japanese: '予約する',
      kana: 'よやくする',
      vietnamese: 'đặt trước',
      english: 'to reserve, to book',
      type: 'main',
      example: 'レストランを予約しました。'
    },
    {
      japanese: '申し込む',
      kana: 'もうしこむ',
      vietnamese: 'đăng ký, nộp đơn',
      english: 'to apply',
      type: 'main',
      example: '大学に申し込みます。'
    },
    {
      japanese: '提出する',
      kana: 'ていしゅつする',
      vietnamese: 'nộp, gửi',
      english: 'to submit',
      type: 'main',
      example: 'レポートを提出しなければなりません。'
    },
    {
      japanese: '合格する',
      kana: 'ごうかくする',
      vietnamese: 'đỗ, đậu',
      english: 'to pass (exam)',
      type: 'main',
      example: '試験に合格しました。'
    },
    {
      japanese: '失敗する',
      kana: 'しっぱいする',
      vietnamese: 'thất bại',
      english: 'to fail',
      type: 'main',
      example: '失敗したら、もう一度やります。'
    },

    // Main Vocabulary - Nouns
    {
      japanese: '条件',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition',
      type: 'main',
      example: 'この条件なら大丈夫です。'
    },
    {
      japanese: '場合',
      kana: 'ばあい',
      vietnamese: 'trường hợp',
      english: 'case, situation',
      type: 'main',
      example: '雨の場合は中止します。'
    },
    {
      japanese: '約束',
      kana: 'やくそく',
      vietnamese: 'lời hứa',
      english: 'promise',
      type: 'main',
      example: '約束を守らなければなりません。'
    },
    {
      japanese: '期限',
      kana: 'きげん',
      vietnamese: 'hạn chót',
      english: 'deadline',
      type: 'main',
      example: '期限までに提出してください。'
    },
    {
      japanese: '締め切り',
      kana: 'しめきり',
      vietnamese: 'hạn cuối',
      english: 'deadline',
      type: 'main',
      example: '締め切りは明日です。'
    },
    {
      japanese: '規則',
      kana: 'きそく',
      vietnamese: 'quy tắc',
      english: 'rule',
      type: 'main',
      example: '規則を守らなければなりません。'
    },
    {
      japanese: '許可',
      kana: 'きょか',
      vietnamese: 'sự cho phép',
      english: 'permission',
      type: 'main',
      example: '許可がなければ入れません。'
    },
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary',
      type: 'main',
      example: 'パスポートが必要です。'
    },
    {
      japanese: '義務',
      kana: 'ぎむ',
      vietnamese: 'nghĩa vụ',
      english: 'duty, obligation',
      type: 'main',
      example: '学生の義務です。'
    },
    {
      japanese: '責任',
      kana: 'せきにん',
      vietnamese: 'trách nhiệm',
      english: 'responsibility',
      type: 'main',
      example: '責任を取らなければなりません。'
    },

    // Additional Vocabulary - Verbs
    {
      japanese: '片付ける',
      kana: 'かたづける',
      vietnamese: 'dọn dẹp',
      english: 'to tidy up',
      type: 'additional',
      example: '部屋を片付けなければなりません。'
    },
    {
      japanese: '注意する',
      kana: 'ちゅういする',
      vietnamese: 'chú ý, cẩn thận',
      english: 'to be careful, to warn',
      type: 'additional',
      example: '車に注意してください。'
    },
    {
      japanese: '守る',
      kana: 'まもる',
      vietnamese: 'bảo vệ, giữ',
      english: 'to protect, to keep',
      type: 'additional',
      example: '約束を守ります。'
    },
    {
      japanese: '破る',
      kana: 'やぶる',
      vietnamese: 'phá vỡ, vi phạm',
      english: 'to break, to violate',
      type: 'additional',
      example: '規則を破ってはいけません。'
    },
    {
      japanese: '従う',
      kana: 'したがう',
      vietnamese: 'tuân theo',
      english: 'to follow, to obey',
      type: 'additional',
      example: '指示に従ってください。'
    },
    {
      japanese: '怠ける',
      kana: 'なまける',
      vietnamese: 'lười biếng',
      english: 'to be lazy, to neglect',
      type: 'additional',
      example: '勉強を怠けてはいけません。'
    },
    {
      japanese: '努力する',
      kana: 'どりょくする',
      vietnamese: 'nỗ lực',
      english: 'to make an effort',
      type: 'additional',
      example: 'もっと努力しなければなりません。'
    },
    {
      japanese: '我慢する',
      kana: 'がまんする',
      vietnamese: 'chịu đựng, kiên nhẫn',
      english: 'to endure, to be patient',
      type: 'additional',
      example: '少し我慢してください。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'additional',
      example: '諦めてはいけません。'
    },
    {
      japanese: '続ける',
      kana: 'つづける',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'additional',
      example: '勉強を続けなければなりません。'
    },

    // Additional Vocabulary - Nouns
    {
      japanese: '義理',
      kana: 'ぎり',
      vietnamese: 'nghĩa vụ xã hội',
      english: 'social obligation',
      type: 'additional',
      example: '義理で行かなければなりません。'
    },
    {
      japanese: '都合',
      kana: 'つごう',
      vietnamese: 'sự thuận tiện',
      english: 'convenience, circumstances',
      type: 'additional',
      example: '都合が悪ければ、来なくてもいいです。'
    },
    {
      japanese: '理由',
      kana: 'りゆう',
      vietnamese: 'lý do',
      english: 'reason',
      type: 'additional',
      example: '理由を説明しなければなりません。'
    },
    {
      japanese: '原因',
      kana: 'げんいん',
      vietnamese: 'nguyên nhân',
      english: 'cause',
      type: 'additional',
      example: '原因を調べます。'
    },
    {
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'additional',
      example: '結果を待っています。'
    },
    {
      japanese: '影響',
      kana: 'えいきょう',
      vietnamese: 'ảnh hưởng',
      english: 'influence',
      type: 'additional',
      example: '天気の影響で遅れました。'
    },
    {
      japanese: '問題',
      kana: 'もんだい',
      vietnamese: 'vấn đề',
      english: 'problem',
      type: 'additional',
      example: '問題がなければ、始めます。'
    },
    {
      japanese: '解決',
      kana: 'かいけつ',
      vietnamese: 'giải quyết',
      english: 'solution',
      type: 'additional',
      example: '問題を解決しなければなりません。'
    },
    {
      japanese: '対策',
      kana: 'たいさく',
      vietnamese: 'biện pháp',
      english: 'countermeasure',
      type: 'additional',
      example: '対策を考えます。'
    },
    {
      japanese: '方法',
      kana: 'ほうほう',
      vietnamese: 'phương pháp',
      english: 'method',
      type: 'additional',
      example: 'いい方法があります。'
    },

    // Supplementary Vocabulary - Adjectives & Adverbs
    {
      japanese: '必ず',
      kana: 'かならず',
      vietnamese: 'nhất định',
      english: 'certainly, without fail',
      type: 'supplementary',
      example: '必ず来てください。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn',
      english: 'surely',
      type: 'supplementary',
      example: 'きっと合格します。'
    },
    {
      japanese: 'もし',
      kana: 'もし',
      vietnamese: 'nếu',
      english: 'if',
      type: 'supplementary',
      example: 'もし雨なら、中止します。'
    },
    {
      japanese: '万一',
      kana: 'まんいち',
      vietnamese: 'vạn nhất',
      english: 'if by any chance',
      type: 'supplementary',
      example: '万一の場合は連絡してください。'
    },
    {
      japanese: 'とにかく',
      kana: 'とにかく',
      vietnamese: 'dù sao chăng nữa',
      english: 'anyway, anyhow',
      type: 'supplementary',
      example: 'とにかく頑張ります。'
    },
    {
      japanese: 'どうしても',
      kana: 'どうしても',
      vietnamese: 'dù thế nào',
      english: 'no matter what',
      type: 'supplementary',
      example: 'どうしても行かなければなりません。'
    },
    {
      japanese: 'ぜひ',
      kana: 'ぜひ',
      vietnamese: 'nhất định (mời mọc)',
      english: 'by all means',
      type: 'supplementary',
      example: 'ぜひ来てください。'
    },
    {
      japanese: 'できるだけ',
      kana: 'できるだけ',
      vietnamese: 'càng... càng tốt',
      english: 'as much as possible',
      type: 'supplementary',
      example: 'できるだけ早く来てください。'
    },
    {
      japanese: 'なるべく',
      kana: 'なるべく',
      vietnamese: 'càng... càng tốt',
      english: 'as much as possible',
      type: 'supplementary',
      example: 'なるべく安いものを買います。'
    },
    {
      japanese: '絶対に',
      kana: 'ぜったいに',
      vietnamese: 'tuyệt đối',
      english: 'absolutely',
      type: 'supplementary',
      example: '絶対に遅れません。'
    },

    // Supplementary Vocabulary - Time Expressions
    {
      japanese: '以前',
      kana: 'いぜん',
      vietnamese: 'trước đây',
      english: 'before, ago',
      type: 'supplementary',
      example: '以前は学生でした。'
    },
    {
      japanese: '以後',
      kana: 'いご',
      vietnamese: 'sau đó',
      english: 'after, since',
      type: 'supplementary',
      example: 'その日以後、会っていません。'
    },
    {
      japanese: '直前',
      kana: 'ちょくぜん',
      vietnamese: 'ngay trước',
      english: 'just before',
      type: 'supplementary',
      example: '出発直前に電話がありました。'
    },
    {
      japanese: '直後',
      kana: 'ちょくご',
      vietnamese: 'ngay sau',
      english: 'right after',
      type: 'supplementary',
      example: '食事の直後に寝ました。'
    },
    {
      japanese: '途中',
      kana: 'とちゅう',
      vietnamese: 'giữa chừng',
      english: 'on the way, midway',
      type: 'supplementary',
      example: '途中で止めてはいけません。'
    },
    {
      japanese: '最中',
      kana: 'さいちゅう',
      vietnamese: 'đang lúc',
      english: 'in the middle of',
      type: 'supplementary',
      example: '仕事の最中です。'
    },
    {
      japanese: '当日',
      kana: 'とうじつ',
      vietnamese: 'ngày hôm đó',
      english: 'that day, the day',
      type: 'supplementary',
      example: '当日は9時に集合です。'
    },
    {
      japanese: '前日',
      kana: 'ぜんじつ',
      vietnamese: 'ngày hôm trước',
      english: 'previous day',
      type: 'supplementary',
      example: '前日に準備しました。'
    },
    {
      japanese: '翌日',
      kana: 'よくじつ',
      vietnamese: 'ngày hôm sau',
      english: 'next day',
      type: 'supplementary',
      example: '翌日、返事が来ました。'
    },
    {
      japanese: '当時',
      kana: 'とうじ',
      vietnamese: 'thời đó',
      english: 'at that time',
      type: 'supplementary',
      example: '当時は若かったです。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 67d498dbb28cafd4
    {
      japanese: "頂きます（thường viết kana）",
      kana: "いただきます",
      vietnamese: "nhận; khiêm nhường ngữ của もらいます / moraimasu",
      english: "nhận; khiêm nhường ngữ của もらいます / moraimasu",
      type: "main",
      example: "先生にお土産をいただきました。\nSensei ni omiyage o itadakimashita.\nTôi đã nhận quà từ thầy/cô."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | ac19df08b123457f
    {
      japanese: "下さいます（thường viết kana）",
      kana: "くださいます",
      vietnamese: "cho, tặng tôi; tôn kính ngữ của くれます / kuremasu",
      english: "cho, tặng tôi; tôn kính ngữ của くれます / kuremasu",
      type: "main",
      example: "先生が日本の絵本をくださいました。\nSensei ga Nihon no ehon o kudasaimashita.\nThầy/cô đã tặng tôi một quyển sách tranh Nhật Bản."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 5bbf3adb7fc9ea96
    {
      japanese: "やります",
      kana: "やります",
      vietnamese: "cho, tặng; dùng với người dưới, động vật, cây cối",
      english: "cho, tặng; dùng với người dưới, động vật, cây cối",
      type: "main",
      example: "犬にえさをやります。\nInu ni esa o yarimasu.\nTôi cho chó ăn."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 1fb474449c394250
    {
      japanese: "上げます",
      kana: "あげます",
      vietnamese: "nâng lên; tăng lên; cho, tặng",
      english: "nâng lên; tăng lên; cho, tặng",
      type: "main",
      example: "妹におもちゃをあげます。\nImouto ni omocha o agemasu.\nTôi tặng đồ chơi cho em gái."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | b4f85b67db0fee5f
    {
      japanese: "下げます",
      kana: "さげます",
      vietnamese: "hạ xuống, giảm xuống",
      english: "hạ xuống, giảm xuống",
      type: "main",
      example: "暖房の温度を下げます。\nDanbou no ondo o sagemasu.\nTôi hạ nhiệt độ máy sưởi xuống."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 7d2f3d9e678fff42
    {
      japanese: "親切にします",
      kana: "しんせつにします",
      vietnamese: "giúp đỡ, đối xử tử tế",
      english: "giúp đỡ, đối xử tử tế",
      type: "main",
      example: "お年寄りに親切にします。\nOtoshiyori ni shinsetsu ni shimasu.\nTôi đối xử tử tế với người cao tuổi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 4932f4545a6ea6a4
    {
      japanese: "可愛い",
      kana: "かわいい",
      vietnamese: "xinh, dễ thương, đáng yêu",
      english: "xinh, dễ thương, đáng yêu",
      type: "main",
      example: "この猿はかわいいです。\nKono saru wa kawaii desu.\nCon khỉ này dễ thương."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 287a7e81a5a477ac
    {
      japanese: "珍しい",
      kana: "めずらしい",
      vietnamese: "hiếm, hiếm có, lạ",
      english: "hiếm, hiếm có, lạ",
      type: "main",
      example: "珍しい絵はがきをもらいました。\nMezurashii ehagaki o moraimashita.\nTôi đã nhận được một tấm bưu ảnh hiếm/lạ."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | ecbde7caa1d95f47
    {
      japanese: "お祝い",
      kana: "おいわい",
      vietnamese: "quà mừng, lời chúc mừng",
      english: "quà mừng, lời chúc mừng",
      type: "main",
      example: "友達にお祝いをあげます。\nTomodachi ni oiwai o agemasu.\nTôi tặng quà mừng cho bạn."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 6cde51bf1646593a
    {
      japanese: "お年玉",
      kana: "おとしだま",
      vietnamese: "tiền mừng tuổi",
      english: "tiền mừng tuổi",
      type: "main",
      example: "子供にお年玉をあげます。\nKodomo ni otoshidama o agemasu.\nTôi cho trẻ con tiền mừng tuổi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 053a17cd9a9b2f08
    {
      japanese: "お見舞い",
      kana: "おみまい",
      vietnamese: "thăm người ốm; quà thăm bệnh",
      english: "thăm người ốm; quà thăm bệnh",
      type: "main",
      example: "友達のお見舞いに行きます。\nTomodachi no omimai ni ikimasu.\nTôi đi thăm bạn bị ốm."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | bdf0897c9491746f
    {
      japanese: "興味",
      kana: "きょうみ",
      vietnamese: "hứng thú, sự quan tâm",
      english: "hứng thú, sự quan tâm",
      type: "main",
      example: "日本の昔話に興味があります。\nNihon no mukashibanashi ni kyoumi ga arimasu.\nTôi có hứng thú với truyện cổ tích Nhật Bản."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | ed002a50d6743d42
    {
      japanese: "情報",
      kana: "じょうほう",
      vietnamese: "thông tin",
      english: "thông tin",
      type: "main",
      example: "インターネットで情報を見ます。\nIntaanetto de jouhou o mimasu.\nTôi xem thông tin trên Internet."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 6aab5c7e51dede53
    {
      japanese: "文法",
      kana: "ぶんぽう",
      vietnamese: "ngữ pháp",
      english: "ngữ pháp",
      type: "main",
      example: "この文法は難しいです。\nKono bunpou wa muzukashii desu.\nNgữ pháp này khó."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 160463091b9104e3
    {
      japanese: "発音",
      kana: "はつおん",
      vietnamese: "phát âm",
      english: "phát âm",
      type: "main",
      example: "発音を練習します。\nHatsuon o renshuu shimasu.\nTôi luyện phát âm."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | e8147862b2c412a5
    {
      japanese: "猿",
      kana: "さる",
      vietnamese: "con khỉ",
      english: "con khỉ",
      type: "main",
      example: "山に猿がいます。\nYama ni saru ga imasu.\nCó khỉ ở trên núi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 53c32567376edb15
    {
      japanese: "餌（thường viết kana）",
      kana: "えさ",
      vietnamese: "đồ ăn cho động vật, mồi",
      english: "đồ ăn cho động vật, mồi",
      type: "main",
      example: "かめにえさをやります。\nKame ni esa o yarimasu.\nTôi cho rùa ăn."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | edced0d8064be2ae
    {
      japanese: "おもちゃ",
      kana: "おもちゃ",
      vietnamese: "đồ chơi",
      english: "đồ chơi",
      type: "main",
      example: "子供たちはおもちゃで遊びます。\nKodomotachi wa omocha de asobimasu.\nBọn trẻ chơi bằng đồ chơi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | e051e70e2bebc206
    {
      japanese: "絵本",
      kana: "えほん",
      vietnamese: "sách tranh, truyện tranh cho trẻ em",
      english: "sách tranh, truyện tranh cho trẻ em",
      type: "main",
      example: "子供に絵本を読んであげます。\nKodomo ni ehon o yonde agemasu.\nTôi đọc sách tranh cho trẻ nghe."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 7c88b81c62b9b882
    {
      japanese: "絵はがき / 絵葉書",
      kana: "えはがき",
      vietnamese: "bưu ảnh",
      english: "bưu ảnh",
      type: "main",
      example: "祖母に絵はがきを送ります。\nSobo ni ehagaki o okurimasu.\nTôi gửi bưu ảnh cho bà."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | d72c77e81e69db16
    {
      japanese: "ドライバー",
      kana: "ドライバー",
      vietnamese: "cái tua-vít; tài xế",
      english: "cái tua-vít; tài xế",
      type: "main",
      example: "ドライバーでねじを回します。\nDoraibaa de neji o mawashimasu.\nTôi vặn ốc bằng tua-vít."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 77093e0a021d5a15
    {
      japanese: "ハンカチ",
      kana: "ハンカチ",
      vietnamese: "khăn tay, khăn mùi xoa",
      english: "khăn tay, khăn mùi xoa",
      type: "main",
      example: "ハンカチを使います。\nHankachi o tsukaimasu.\nTôi dùng khăn tay."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 4d2ed516cb1d4fbe
    {
      japanese: "靴下",
      kana: "くつした",
      vietnamese: "tất, vớ",
      english: "tất, vớ",
      type: "main",
      example: "靴下をはきます。\nKutsushita o hakimasu.\nTôi đi tất."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 8903ae05ad2a862a
    {
      japanese: "手袋",
      kana: "てぶくろ",
      vietnamese: "găng tay",
      english: "găng tay",
      type: "main",
      example: "寒いので、手袋をします。\nSamui node, tebukuro o shimasu.\nVì trời lạnh nên tôi đeo găng tay."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 78ff4a1071bf6adb
    {
      japanese: "幼稚園",
      kana: "ようちえん",
      vietnamese: "trường mẫu giáo, trường mầm non",
      english: "trường mẫu giáo, trường mầm non",
      type: "main",
      example: "妹は幼稚園に通っています。\nImouto wa youchien ni kayotte imasu.\nEm gái tôi đang đi học mẫu giáo."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 3732683e24609bb9
    {
      japanese: "暖房",
      kana: "だんぼう",
      vietnamese: "thiết bị sưởi, hệ thống làm ấm",
      english: "thiết bị sưởi, hệ thống làm ấm",
      type: "main",
      example: "寒いので、暖房をつけます。\nSamui node, danbou o tsukemasu.\nVì trời lạnh nên tôi bật máy sưởi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 3ad9ef904e2171fd
    {
      japanese: "冷房",
      kana: "れいぼう",
      vietnamese: "thiết bị làm mát, điều hòa lạnh",
      english: "thiết bị làm mát, điều hòa lạnh",
      type: "main",
      example: "暑いので、冷房をつけます。\nAtsui node, reibou o tsukemasu.\nVì trời nóng nên tôi bật điều hòa."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 53b7304bb21e364c
    {
      japanese: "温度",
      kana: "おんど",
      vietnamese: "nhiệt độ",
      english: "nhiệt độ",
      type: "main",
      example: "部屋の温度を上げます。\nHeya no ondo o agemasu.\nTôi tăng nhiệt độ trong phòng."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 6d44e91b49e758bc
    {
      japanese: "祖父",
      kana: "そふ",
      vietnamese: "ông; dùng với bản thân",
      english: "ông; dùng với bản thân",
      type: "main",
      example: "祖父にお祝いをあげます。\nSofu ni oiwai o agemasu.\nTôi tặng quà mừng cho ông tôi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 800a965019e8028f
    {
      japanese: "祖母",
      kana: "そぼ",
      vietnamese: "bà; dùng với bản thân",
      english: "bà; dùng với bản thân",
      type: "main",
      example: "祖母は優しいです。\nSobo wa yasashii desu.\nBà tôi hiền lành."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | f01287299ed14647
    {
      japanese: "孫",
      kana: "まご",
      vietnamese: "cháu; dùng với bản thân",
      english: "cháu; dùng với bản thân",
      type: "main",
      example: "祖父は孫におもちゃをやります。\nSofu wa mago ni omocha o yarimasu.\nÔng cho cháu đồ chơi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | db0dd1721207f833
    {
      japanese: "お孫さん",
      kana: "おまごさん",
      vietnamese: "cháu; dùng với người khác",
      english: "cháu; dùng với người khác",
      type: "main",
      example: "お孫さんはお元気ですか。\nOmago-san wa ogenki desu ka.\nCháu của bác/ông/bà có khỏe không ạ?"
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | b370d64a1d39aa66
    {
      japanese: "おじ",
      kana: "おじ",
      vietnamese: "chú, cậu, bác trai; dùng với bản thân",
      english: "chú, cậu, bác trai; dùng với bản thân",
      type: "main",
      example: "おじに会います。\nOji ni aimasu.\nTôi gặp chú/cậu/bác trai của tôi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 865ebc619f591e11
    {
      japanese: "おじさん",
      kana: "おじさん",
      vietnamese: "chú, cậu, bác trai; dùng với người khác",
      english: "chú, cậu, bác trai; dùng với người khác",
      type: "main",
      example: "近所のおじさんは親切です。\nKinjo no ojisan wa shinsetsu desu.\nÔng/chú hàng xóm rất tốt bụng."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 6acd8fc2fd96f4ba
    {
      japanese: "おば",
      kana: "おば",
      vietnamese: "cô, dì, bác gái; dùng với bản thân",
      english: "cô, dì, bác gái; dùng với bản thân",
      type: "main",
      example: "おばからハンカチをいただきました。\nOba kara hankachi o itadakimashita.\nTôi đã nhận khăn tay từ cô/dì/bác gái của tôi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | bf888c02763a8749
    {
      japanese: "おばさん",
      kana: "おばさん",
      vietnamese: "cô, dì, bác gái; dùng với người khác",
      english: "cô, dì, bác gái; dùng với người khác",
      type: "main",
      example: "近所のおばさんが親切にしてくださいました。\nKinjo no obasan ga shinsetsu ni shite kudasaimashita.\nCô/bác hàng xóm đã đối xử tử tế với tôi."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | ebc9f12f135ce65e
    {
      japanese: "管理人",
      kana: "かんりにん",
      vietnamese: "người quản lý, người trông coi",
      english: "người quản lý, người trông coi",
      type: "main",
      example: "管理人に相談します。\nKanrinin ni soudan shimasu.\nTôi hỏi ý kiến người quản lý."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | 061c7e44f87dcb96
    {
      japanese: "〜さん",
      kana: "〜さん",
      vietnamese: "ông, bà, anh, chị; hậu tố lịch sự",
      english: "ông, bà, anh, chị; hậu tố lịch sự",
      type: "main",
      example: "ドライバーさんに道を聞きます。\nDoraibaa-san ni michi o kikimasu.\nTôi hỏi đường bác tài xế."
    },
    // source: review_tu_vung_bai_41.md | 1. Từ vựng chính | f2665dc3caf47dce
    {
      japanese: "この間",
      kana: "このあいだ",
      vietnamese: "hôm nọ, vừa rồi",
      english: "hôm nọ, vừa rồi",
      type: "main",
      example: "この間、友達に会いました。\nKono aida, tomodachi ni aimashita.\nHôm nọ tôi đã gặp bạn."
    },
    // source: review_tu_vung_bai_41.md | 2. Từ vựng hội thoại | 2ea79a6554d0ab15
    {
      japanese: "一言",
      kana: "ひとこと",
      vietnamese: "đôi lời, một lời ngắn",
      english: "đôi lời, một lời ngắn",
      type: "supplementary",
      example: "ひとことお願いします。\nHitokoto onegai shimasu.\nXin anh/chị phát biểu đôi lời."
    },
    // source: review_tu_vung_bai_41.md | 2. Từ vựng hội thoại | 0a60a444f6c84380
    {
      japanese: "〜ずつ",
      kana: "〜ずつ",
      vietnamese: "từng, mỗi...",
      english: "từng, mỗi...",
      type: "supplementary",
      example: "一人に一つずつあげます。\nHitori ni hitotsu zutsu agemasu.\nTôi tặng mỗi người một cái."
    },
    // source: review_tu_vung_bai_41.md | 2. Từ vựng hội thoại | 3f66ce8c0e349b61
    {
      japanese: "二人",
      kana: "ふたり",
      vietnamese: "hai người, cặp đôi",
      english: "hai người, cặp đôi",
      type: "supplementary",
      example: "二人はお幸せです。\nFutari wa oshiawase desu.\nHai người rất hạnh phúc."
    },
    // source: review_tu_vung_bai_41.md | 2. Từ vựng hội thoại | 3c4dd6dcb3394055
    {
      japanese: "お宅",
      kana: "おたく",
      vietnamese: "nhà; cách nói kính ngữ của うち / uchi hoặc いえ / ie",
      english: "nhà; cách nói kính ngữ của うち / uchi hoặc いえ / ie",
      type: "supplementary",
      example: "先生のお宅に伺います。\nSensei no otaku ni ukagaimasu.\nTôi sẽ đến nhà thầy/cô."
    },
    // source: review_tu_vung_bai_41.md | 2. Từ vựng hội thoại | 150c945ac3c706d8
    {
      japanese: "どうぞ お幸せに",
      kana: "どうぞ お幸せに",
      vietnamese: "Chúc hai người hạnh phúc.",
      english: "Chúc hai người hạnh phúc.",
      type: "supplementary",
      example: "ご結婚おめでとうございます。どうぞお幸せに。\nGo-kekkon omedetou gozaimasu. Douzo oshiawase ni.\nChúc mừng kết hôn. Chúc hai người hạnh phúc."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | aee5b0ba2b54e6d1
    {
      japanese: "昔話",
      kana: "むかしばなし",
      vietnamese: "truyện cổ tích, chuyện xưa",
      english: "truyện cổ tích, chuyện xưa",
      type: "supplementary",
      example: "昔話を読みます。\nMukashibanashi o yomimasu.\nTôi đọc truyện cổ tích."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 9a1bc652f73074d4
    {
      japanese: "ある〜",
      kana: "ある〜",
      vietnamese: "một..., có một...",
      english: "một..., có một...",
      type: "supplementary",
      example: "ある日、男が海へ行きました。\nAru hi, otoko ga umi e ikimashita.\nMột ngày nọ, người đàn ông đi ra biển."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 23088038763cec0c
    {
      japanese: "男",
      kana: "おとこ",
      vietnamese: "người đàn ông, nam giới",
      english: "người đàn ông, nam giới",
      type: "supplementary",
      example: "男はかめを助けました。\nOtoko wa kame o tasukemashita.\nNgười đàn ông đã cứu con rùa."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 1c3e365dc9e1c39f
    {
      japanese: "子供たち",
      kana: "こどもたち",
      vietnamese: "bọn trẻ, trẻ em",
      english: "bọn trẻ, trẻ em",
      type: "supplementary",
      example: "子供たちがかめをいじめています。\nKodomotachi ga kame o ijimete imasu.\nBọn trẻ đang bắt nạt con rùa."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 74173bec56b407c1
    {
      japanese: "いじめます",
      kana: "いじめます",
      vietnamese: "bắt nạt",
      english: "bắt nạt",
      type: "supplementary",
      example: "弱い人をいじめてはいけません。\nYowai hito o ijimete wa ikemasen.\nKhông được bắt nạt người yếu hơn."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 7331ce3f4e100465
    {
      japanese: "亀",
      kana: "かめ",
      vietnamese: "con rùa",
      english: "con rùa",
      type: "supplementary",
      example: "かめが海に帰ります。\nKame ga umi ni kaerimasu.\nCon rùa trở về biển."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | ebb384971e301885
    {
      japanese: "助けます",
      kana: "たすけます",
      vietnamese: "giúp, cứu giúp",
      english: "giúp, cứu giúp",
      type: "supplementary",
      example: "男はかめを助けます。\nOtoko wa kame o tasukemasu.\nNgười đàn ông cứu con rùa."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 568299bdc92c1990
    {
      japanese: "優しい",
      kana: "やさしい",
      vietnamese: "hiền lành, dịu dàng, tốt bụng",
      english: "hiền lành, dịu dàng, tốt bụng",
      type: "supplementary",
      example: "祖母は優しい人です。\nSobo wa yasashii hito desu.\nBà tôi là người hiền lành."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 5211b79d2ae1da3e
    {
      japanese: "お姫様",
      kana: "おひめさま",
      vietnamese: "công chúa",
      english: "công chúa",
      type: "supplementary",
      example: "お姫様はきれいです。\nOhime-sama wa kirei desu.\nCông chúa xinh đẹp."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 37668e5b573232b9
    {
      japanese: "暮らします",
      kana: "くらします",
      vietnamese: "sống, sinh hoạt",
      english: "sống, sinh hoạt",
      type: "supplementary",
      example: "祖父は田舎で暮らしています。\nSofu wa inaka de kurashite imasu.\nÔng tôi đang sống ở quê."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | ffe860df0ace3c02
    {
      japanese: "陸",
      kana: "りく",
      vietnamese: "đất liền, lục địa",
      english: "đất liền, lục địa",
      type: "supplementary",
      example: "かめは陸に上がりました。\nKame wa riku ni agarimashita.\nCon rùa đã bò lên đất liền."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 53f3bc06fac57b57
    {
      japanese: "すると",
      kana: "すると",
      vietnamese: "thế rồi, sau đó",
      english: "thế rồi, sau đó",
      type: "supplementary",
      example: "箱を開けました。すると、煙が出ました。\nHako o akemashita. Suruto, kemuri ga demashita.\nTôi mở hộp. Thế rồi khói bay ra."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | c5127f5048903ed9
    {
      japanese: "煙",
      kana: "けむり",
      vietnamese: "khói",
      english: "khói",
      type: "supplementary",
      example: "箱から煙が出ました。\nHako kara kemuri ga demashita.\nKhói bay ra từ chiếc hộp."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 9afc02097ffca00e
    {
      japanese: "真っ白な",
      kana: "まっしろな",
      vietnamese: "trắng toát, trắng ngần",
      english: "trắng toát, trắng ngần",
      type: "supplementary",
      example: "髪が真っ白になりました。\nKami ga masshiro ni narimashita.\nTóc đã trở nên trắng toát."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | 5aabf67bd424a85a
    {
      japanese: "中身",
      kana: "なかみ",
      vietnamese: "nội dung, cái bên trong",
      english: "nội dung, cái bên trong",
      type: "supplementary",
      example: "箱の中身を確かめます。\nHako no nakami o tashikamemasu.\nTôi kiểm tra thứ bên trong chiếc hộp."
    },
    // source: review_tu_vung_bai_41.md | 3. Từ vựng đọc hiểu | c12b8049b72bc85d
    {
      japanese: "浦島 太郎",
      kana: "うらしま たろう",
      vietnamese: "tên nhân vật chính trong truyện cổ tích",
      english: "tên nhân vật chính trong truyện cổ tích",
      type: "supplementary",
      example: "浦島太郎は有名な昔話です。\nUrashima Tarou wa yuumei na mukashibanashi desu.\nUrashima Tarou là một truyện cổ tích nổi tiếng."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 9f0d738d90fae95d
    {
      japanese: "先生にお土産をいただきます",
      kana: "先生にお土産をいただきます",
      vietnamese: "nhận quà từ thầy/cô",
      english: "nhận quà từ thầy/cô",
      type: "supplementary",
      example: "いただきます / itadakimasu là khiêm nhường ngữ, hạ mình khi nói mình nhận từ người trên."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 41f618bf586fbd29
    {
      japanese: "先生がお土産をくださいます",
      kana: "先生がお土産をくださいます",
      vietnamese: "thầy/cô cho tôi quà",
      english: "thầy/cô cho tôi quà",
      type: "supplementary",
      example: "くださいます / kudasaimasu là tôn kính ngữ của くれます / kuremasu, tôn người cho mình."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | cf35e1abd85e3511
    {
      japanese: "犬にえさをやります",
      kana: "犬にえさをやります",
      vietnamese: "cho chó ăn",
      english: "cho chó ăn",
      type: "supplementary",
      example: "やります / yarimasu dùng với động vật, cây cối hoặc người dưới/bé hơn."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 81e95e8f16318587
    {
      japanese: "友達にプレゼントをあげます",
      kana: "友達にプレゼントをあげます",
      vietnamese: "tặng quà cho bạn",
      english: "tặng quà cho bạn",
      type: "supplementary",
      example: "あげます / agemasu dùng khi mình cho người khác; người nhận thường không phải người trên trong quan hệ trang trọng."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 9632f84b77b2a750
    {
      japanese: "温度を上げます",
      kana: "温度を上げます",
      vietnamese: "tăng nhiệt độ",
      english: "tăng nhiệt độ",
      type: "supplementary",
      example: "上げます / agemasu = nâng lên, tăng lên."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | d138ae483e375c74
    {
      japanese: "温度を下げます",
      kana: "温度を下げます",
      vietnamese: "hạ nhiệt độ",
      english: "hạ nhiệt độ",
      type: "supplementary",
      example: "下げます / sagemasu = hạ xuống, giảm xuống."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 1063dacf11ca366a
    {
      japanese: "人に親切にします",
      kana: "人に親切にします",
      vietnamese: "đối xử tử tế với ai",
      english: "đối xử tử tế với ai",
      type: "supplementary",
      example: "Dùng trợ từ に / ni với người được đối xử tử tế."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 00102fb99109fb9e
    {
      japanese: "〜に興味があります",
      kana: "〜に興味があります",
      vietnamese: "có hứng thú với...",
      english: "có hứng thú với...",
      type: "supplementary",
      example: "Ví dụ: 日本語に興味があります / Nihongo ni kyoumi ga arimasu = Tôi có hứng thú với tiếng Nhật."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | eae6ad1ba7052909
    {
      japanese: "お見舞いに行きます",
      kana: "お見舞いに行きます",
      vietnamese: "đi thăm người ốm",
      english: "đi thăm người ốm",
      type: "supplementary",
      example: "お見舞い / omimai thường dùng khi thăm bệnh hoặc gửi quà thăm bệnh."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 0225f08d39f448bb
    {
      japanese: "一人に一つずつ",
      kana: "一人に一つずつ",
      vietnamese: "mỗi người một cái",
      english: "mỗi người một cái",
      type: "supplementary",
      example: "ずつ / zutsu diễn tả phân chia đều theo từng người/từng lần."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 2f8112909f044ad3
    {
      japanese: "先生のお宅",
      kana: "先生のお宅",
      vietnamese: "nhà thầy/cô",
      english: "nhà thầy/cô",
      type: "supplementary",
      example: "お宅 / otaku là cách nói lịch sự về nhà của người khác."
    },
    // source: review_tu_vung_bai_41.md | 4. Cụm cần nhớ | 2f72a5425633e9e7
    {
      japanese: "どうぞお幸せに",
      kana: "どうぞお幸せに",
      vietnamese: "chúc hạnh phúc",
      english: "chúc hạnh phúc",
      type: "supplementary",
      example: "Câu chúc thường dùng trong đám cưới."
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | c5dff8b3b059a95b
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "THƯỢNG — trên, nâng lên, tăng lên",
      english: "trên, nâng lên, tăng lên",
      type: "kanji",
      example: "上げます / agemasu"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 775302bef669c9e6
    {
      japanese: "下",
      kana: "カ / ka, ゲ / ge",
      vietnamese: "HẠ — dưới, hạ xuống, giảm xuống",
      english: "dưới, hạ xuống, giảm xuống",
      type: "kanji",
      example: "下げます / sagemasu, 靴下 / kutsushita"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 9a4b3a26d84bad62
    {
      japanese: "親",
      kana: "シン / shin",
      vietnamese: "THÂN — cha mẹ, thân thiết",
      english: "cha mẹ, thân thiết",
      type: "kanji",
      example: "親切 / shinsetsu"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | b92b652269eeba70
    {
      japanese: "切",
      kana: "セツ / setsu",
      vietnamese: "THIẾT — cắt; thiết tha, tử tế trong 親切 / shinsetsu",
      english: "cắt; thiết tha, tử tế trong 親切 / shinsetsu",
      type: "kanji",
      example: "親切 / shinsetsu"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 02c174dbd7e923e8
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "NIÊN — năm, tuổi",
      english: "năm, tuổi",
      type: "kanji",
      example: "お年玉 / otoshidama"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | fafb8836633fb251
    {
      japanese: "玉",
      kana: "ギョク / gyoku",
      vietnamese: "NGỌC — ngọc, viên, quả cầu",
      english: "ngọc, viên, quả cầu",
      type: "kanji",
      example: "お年玉 / otoshidama"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 13ad967b81713afe
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "KIẾN — nhìn, xem, thăm",
      english: "nhìn, xem, thăm",
      type: "kanji",
      example: "お見舞い / omimai"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 2ca3fbed97488e6a
    {
      japanese: "文",
      kana: "ブン / bun, モン / mon",
      vietnamese: "VĂN — văn, câu, chữ viết",
      english: "văn, câu, chữ viết",
      type: "kanji",
      example: "文法 / bunpou"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 4b98fa407946c8e7
    {
      japanese: "法",
      kana: "ホウ / hou",
      vietnamese: "PHÁP — luật, phương pháp, quy tắc",
      english: "luật, phương pháp, quy tắc",
      type: "kanji",
      example: "文法 / bunpou"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 6c2c9830b4564d1e
    {
      japanese: "発",
      kana: "ハツ / hatsu, ホツ / hotsu",
      vietnamese: "PHÁT — phát ra, bắt đầu",
      english: "phát ra, bắt đầu",
      type: "kanji",
      example: "発音 / hatsuon"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 0463b3edd929230c
    {
      japanese: "音",
      kana: "オン / on, イン / in",
      vietnamese: "ÂM — âm thanh",
      english: "âm thanh",
      type: "kanji",
      example: "発音 / hatsuon"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 2115843f335083c4
    {
      japanese: "絵",
      kana: "エ / e, カイ / kai",
      vietnamese: "HỘI — tranh, hình vẽ",
      english: "tranh, hình vẽ",
      type: "kanji",
      example: "絵本 / ehon, 絵はがき / ehagaki"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | e07445fee2b067bc
    {
      japanese: "本",
      kana: "ホン / hon",
      vietnamese: "BẢN — sách, gốc",
      english: "sách, gốc",
      type: "kanji",
      example: "絵本 / ehon"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 1cb8def20bff7e1d
    {
      japanese: "手",
      kana: "シュ / shu",
      vietnamese: "THỦ — tay",
      english: "tay",
      type: "kanji",
      example: "手袋 / tebukuro"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 14101aadc86b3fd8
    {
      japanese: "園",
      kana: "エン / en",
      vietnamese: "VIÊN — vườn, trường",
      english: "vườn, trường",
      type: "kanji",
      example: "幼稚園 / youchien"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 3b3f26c2193dda9a
    {
      japanese: "温",
      kana: "オン / on",
      vietnamese: "ÔN — ấm",
      english: "ấm",
      type: "kanji",
      example: "温度 / ondo"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 0d71cadc805dcb04
    {
      japanese: "度",
      kana: "ド / do",
      vietnamese: "ĐỘ — mức độ, lần, nhiệt độ",
      english: "mức độ, lần, nhiệt độ",
      type: "kanji",
      example: "温度 / ondo"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 68fcb910647dfdd9
    {
      japanese: "父",
      kana: "フ / fu",
      vietnamese: "PHỤ — cha, bố",
      english: "cha, bố",
      type: "kanji",
      example: "祖父 / sofu"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 69e651e7bbc7a8cb
    {
      japanese: "母",
      kana: "ボ / bo",
      vietnamese: "MẪU — mẹ",
      english: "mẹ",
      type: "kanji",
      example: "祖母 / sobo"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 30fafb26721a1818
    {
      japanese: "間",
      kana: "カン / kan, ケン / ken",
      vietnamese: "GIAN — khoảng, giữa, thời gian",
      english: "khoảng, giữa, thời gian",
      type: "kanji",
      example: "この間 / kono aida"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 940263c4d2ce9aab
    {
      japanese: "一",
      kana: "イチ / ichi, イツ / itsu",
      vietnamese: "NHẤT — một",
      english: "một",
      type: "kanji",
      example: "一言 / hitokoto"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 274afc525fa72e77
    {
      japanese: "言",
      kana: "ゲン / gen, ゴン / gon",
      vietnamese: "NGÔN — nói, lời nói",
      english: "nói, lời nói",
      type: "kanji",
      example: "一言 / hitokoto"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 7b91019a25382bf9
    {
      japanese: "二",
      kana: "ニ / ni",
      vietnamese: "NHỊ — hai",
      english: "hai",
      type: "kanji",
      example: "二人 / futari"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | eb9e6bdfee911a2a
    {
      japanese: "人",
      kana: "ジン / jin, ニン / nin",
      vietnamese: "NHÂN — người",
      english: "người",
      type: "kanji",
      example: "二人 / futari, 管理人 / kanrinin"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 8b61c2430106c6a6
    {
      japanese: "昔",
      kana: "セキ / seki",
      vietnamese: "TÍCH — xưa, ngày xưa",
      english: "xưa, ngày xưa",
      type: "kanji",
      example: "昔話 / mukashibanashi"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 68c1a656494ff2e6
    {
      japanese: "話",
      kana: "ワ / wa",
      vietnamese: "THOẠI — nói, câu chuyện",
      english: "nói, câu chuyện",
      type: "kanji",
      example: "昔話 / mukashibanashi"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 7966f2b12e9c4406
    {
      japanese: "男",
      kana: "ダン / dan, ナン / nan",
      vietnamese: "NAM — đàn ông, nam giới",
      english: "đàn ông, nam giới",
      type: "kanji",
      example: "男 / otoko"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 22814187535918d5
    {
      japanese: "子",
      kana: "シ / shi, ス / su",
      vietnamese: "TỬ — đứa trẻ, con",
      english: "đứa trẻ, con",
      type: "kanji",
      example: "子供たち / kodomotachi"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 5dbdeca159cf9980
    {
      japanese: "助",
      kana: "ジョ / jo",
      vietnamese: "TRỢ — giúp, cứu",
      english: "giúp, cứu",
      type: "kanji",
      example: "助けます / tasukemasu"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 75a1e7f448bf9ea7
    {
      japanese: "白",
      kana: "ハク / haku, ビャク / byaku",
      vietnamese: "BẠCH — trắng",
      english: "trắng",
      type: "kanji",
      example: "真っ白 / masshiro"
    },
    // source: review_tu_vung_bai_41.md | 5. Kanji N5–N4 cần học kỹ | 1bb1b66ac59be2e7
    {
      japanese: "中",
      kana: "チュウ / chuu, ジュウ / juu",
      vietnamese: "TRUNG — trong, giữa",
      english: "trong, giữa",
      type: "kanji",
      example: "中身 / nakami"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f873d29a1b0ef38b
    {
      japanese: "上げます",
      kana: "あ.げる / ageru",
      vietnamese: "THƯỢNG — 上 = trên, nâng lên",
      english: "上 = trên, nâng lên",
      type: "kanji",
      example: "上げます"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cf1b812696a0f9c9
    {
      japanese: "上手",
      kana: "ジョウ / jou",
      vietnamese: "THƯỢNG — 上 = trên; 手 = tay",
      english: "上 = trên; 手 = tay",
      type: "kanji",
      example: "上手"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 58a322c39a073dd0
    {
      japanese: "下げます",
      kana: "さ.げる / sageru",
      vietnamese: "HẠ — 下 = dưới, hạ xuống",
      english: "下 = dưới, hạ xuống",
      type: "kanji",
      example: "下げます"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 30af0f7ae6c11061
    {
      japanese: "靴下",
      kana: "した / shita",
      vietnamese: "HẠ — 靴 = giày; 下 = dưới",
      english: "靴 = giày; 下 = dưới",
      type: "kanji",
      example: "靴下"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 052e9608492b8b06
    {
      japanese: "親切",
      kana: "シン / shin",
      vietnamese: "THÂN — 親 = thân; 切 = thiết",
      english: "親 = thân; 切 = thiết",
      type: "kanji",
      example: "親切"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f654cdb39a9d32ee
    {
      japanese: "親切",
      kana: "セツ / setsu",
      vietnamese: "THIẾT — 親 = thân; 切 = thiết",
      english: "親 = thân; 切 = thiết",
      type: "kanji",
      example: "親切"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e92606ca5a25cff7
    {
      japanese: "来年",
      kana: "ネン / nen",
      vietnamese: "NIÊN — 年 = năm",
      english: "年 = năm",
      type: "kanji",
      example: "来年"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 23859f9a64806613
    {
      japanese: "年",
      kana: "とし / toshi",
      vietnamese: "NIÊN — 年 = tuổi/năm",
      english: "年 = tuổi/năm",
      type: "kanji",
      example: "年"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c350680caeaf8915
    {
      japanese: "お年玉",
      kana: "たま / tama",
      vietnamese: "NGỌC — 年 = năm; 玉 = ngọc/viên",
      english: "年 = năm; 玉 = ngọc/viên",
      type: "kanji",
      example: "お年玉"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 29e20798aa39eab3
    {
      japanese: "見学",
      kana: "ケン / ken",
      vietnamese: "KIẾN — 見 = nhìn; 学 = học",
      english: "見 = nhìn; 学 = học",
      type: "kanji",
      example: "見学"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2d979ac85fe6e113
    {
      japanese: "見ます",
      kana: "み.る / miru",
      vietnamese: "KIẾN — 見 = nhìn",
      english: "見 = nhìn",
      type: "kanji",
      example: "見ます"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | bae6d39051023f8f
    {
      japanese: "文法",
      kana: "ブン / bun",
      vietnamese: "VĂN — 文 = văn; 法 = quy tắc",
      english: "文 = văn; 法 = quy tắc",
      type: "kanji",
      example: "文法"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 88dc488a5d885e2c
    {
      japanese: "方法",
      kana: "ホウ / hou",
      vietnamese: "PHÁP — 方 = phương; 法 = phương pháp",
      english: "方 = phương; 法 = phương pháp",
      type: "kanji",
      example: "方法"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | fe91737fbc8e98ae
    {
      japanese: "発音",
      kana: "ハツ / hatsu",
      vietnamese: "PHÁT — 発 = phát ra; 音 = âm",
      english: "発 = phát ra; 音 = âm",
      type: "kanji",
      example: "発音"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f27bc95d4031e540
    {
      japanese: "音",
      kana: "おと / oto",
      vietnamese: "ÂM — 音 = âm thanh",
      english: "音 = âm thanh",
      type: "kanji",
      example: "音"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 89d0c7bb41efa398
    {
      japanese: "発音",
      kana: "オン / on",
      vietnamese: "ÂM — 発 = phát ra; 音 = âm",
      english: "発 = phát ra; 音 = âm",
      type: "kanji",
      example: "発音"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0edee5ec12ae4b80
    {
      japanese: "絵本",
      kana: "エ / e",
      vietnamese: "HỘI — 絵 = tranh; 本 = sách",
      english: "絵 = tranh; 本 = sách",
      type: "kanji",
      example: "絵本"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 9871dd4881193605
    {
      japanese: "絵画",
      kana: "カイ / kai",
      vietnamese: "HỘI — 絵 = tranh; 画 = tranh/vẽ",
      english: "絵 = tranh; 画 = tranh/vẽ",
      type: "kanji",
      example: "絵画"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c4514117be102185
    {
      japanese: "手袋",
      kana: "て / te",
      vietnamese: "THỦ — 手 = tay; 袋 = túi",
      english: "手 = tay; 袋 = túi",
      type: "kanji",
      example: "手袋"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 21a1f9b4a593e818
    {
      japanese: "手術",
      kana: "シュ / shu",
      vietnamese: "THỦ — 手 = tay; 術 = kỹ thuật",
      english: "手 = tay; 術 = kỹ thuật",
      type: "kanji",
      example: "手術"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 9b794e83d587ebbe
    {
      japanese: "公園",
      kana: "エン / en",
      vietnamese: "VIÊN — 公 = công; 園 = vườn",
      english: "公 = công; 園 = vườn",
      type: "kanji",
      example: "公園"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 217cc17621b6df3c
    {
      japanese: "幼稚園",
      kana: "エン / en",
      vietnamese: "VIÊN — 幼 = nhỏ; 稚 = non; 園 = trường/vườn",
      english: "幼 = nhỏ; 稚 = non; 園 = trường/vườn",
      type: "kanji",
      example: "幼稚園"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | df0925a6c4c81c72
    {
      japanese: "温度",
      kana: "オン / on",
      vietnamese: "ÔN — 温 = ấm; 度 = độ",
      english: "温 = ấm; 度 = độ",
      type: "kanji",
      example: "温度"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 3c171fa3f2c0b335
    {
      japanese: "温かい",
      kana: "あたた.かい / atatakai",
      vietnamese: "ÔN — 温 = ấm",
      english: "温 = ấm",
      type: "kanji",
      example: "温かい"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 15ed5276ab6e9129
    {
      japanese: "温度",
      kana: "ド / do",
      vietnamese: "ĐỘ — 温 = ấm; 度 = mức độ",
      english: "温 = ấm; 度 = mức độ",
      type: "kanji",
      example: "温度"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 26fa033ec6d114c7
    {
      japanese: "祖父",
      kana: "フ / fu",
      vietnamese: "PHỤ — 祖 = tổ tiên; 父 = cha",
      english: "祖 = tổ tiên; 父 = cha",
      type: "kanji",
      example: "祖父"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 1631ca6809554af7
    {
      japanese: "父",
      kana: "ちち / chichi",
      vietnamese: "PHỤ — 父 = cha",
      english: "父 = cha",
      type: "kanji",
      example: "父"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | de22f73b1f4fa48d
    {
      japanese: "祖母",
      kana: "ボ / bo",
      vietnamese: "MẪU — 祖 = tổ tiên; 母 = mẹ",
      english: "祖 = tổ tiên; 母 = mẹ",
      type: "kanji",
      example: "祖母"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d63ba8024ffd2125
    {
      japanese: "母",
      kana: "はは / haha",
      vietnamese: "MẪU — 母 = mẹ",
      english: "母 = mẹ",
      type: "kanji",
      example: "母"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 081b8768aa864911
    {
      japanese: "この間",
      kana: "あいだ / aida",
      vietnamese: "GIAN — 間 = khoảng giữa",
      english: "間 = khoảng giữa",
      type: "kanji",
      example: "この間"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 718d724a0308069b
    {
      japanese: "時間",
      kana: "カン / kan",
      vietnamese: "GIAN — 時 = thời; 間 = khoảng",
      english: "時 = thời; 間 = khoảng",
      type: "kanji",
      example: "時間"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ce8eaff073a4937f
    {
      japanese: "一言",
      kana: "ひと / hito",
      vietnamese: "NHẤT — 一 = một; 言 = lời",
      english: "一 = một; 言 = lời",
      type: "kanji",
      example: "一言"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0a2a464b5c244cab
    {
      japanese: "一番",
      kana: "イチ / ichi",
      vietnamese: "NHẤT — 一 = một; 番 = số thứ tự",
      english: "一 = một; 番 = số thứ tự",
      type: "kanji",
      example: "一番"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5d1ae63efbde80d1
    {
      japanese: "一言",
      kana: "こと / koto",
      vietnamese: "NGÔN — 一 = một; 言 = lời",
      english: "一 = một; 言 = lời",
      type: "kanji",
      example: "一言"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 67e57f2ae345ba39
    {
      japanese: "言語",
      kana: "ゲン / gen",
      vietnamese: "NGÔN — 言 = nói; 語 = ngôn ngữ",
      english: "言 = nói; 語 = ngôn ngữ",
      type: "kanji",
      example: "言語"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8b84fde826c5aa27
    {
      japanese: "二人",
      kana: "ふた / futa",
      vietnamese: "NHỊ — 二 = hai; 人 = người",
      english: "二 = hai; 人 = người",
      type: "kanji",
      example: "二人"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 44b06c99e3925b1e
    {
      japanese: "二月",
      kana: "ニ / ni",
      vietnamese: "NHỊ — 二 = hai; 月 = tháng",
      english: "二 = hai; 月 = tháng",
      type: "kanji",
      example: "二月"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 80b1ce772c5b7690
    {
      japanese: "人",
      kana: "ひと / hito",
      vietnamese: "NHÂN — 人 = người",
      english: "人 = người",
      type: "kanji",
      example: "人"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d14b6571bb541d62
    {
      japanese: "管理人",
      kana: "ニン / nin",
      vietnamese: "NHÂN — 管 = quản; 理 = lý; 人 = người",
      english: "管 = quản; 理 = lý; 人 = người",
      type: "kanji",
      example: "管理人"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | eb6267f2ee69f9c0
    {
      japanese: "昔話",
      kana: "むかし / mukashi",
      vietnamese: "TÍCH — 昔 = xưa; 話 = chuyện",
      english: "昔 = xưa; 話 = chuyện",
      type: "kanji",
      example: "昔話"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c12851ffd85f2877
    {
      japanese: "昔話",
      kana: "はなし / hanashi",
      vietnamese: "THOẠI — 昔 = xưa; 話 = chuyện",
      english: "昔 = xưa; 話 = chuyện",
      type: "kanji",
      example: "昔話"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ded2f8c18289b5e2
    {
      japanese: "会話",
      kana: "ワ / wa",
      vietnamese: "THOẠI — 会 = gặp/hội; 話 = nói",
      english: "会 = gặp/hội; 話 = nói",
      type: "kanji",
      example: "会話"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 076b138419103e18
    {
      japanese: "男",
      kana: "おとこ / otoko",
      vietnamese: "NAM — 男 = đàn ông",
      english: "男 = đàn ông",
      type: "kanji",
      example: "男"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ba72ab1ca8cb7200
    {
      japanese: "男性",
      kana: "ダン / dan",
      vietnamese: "NAM — 男 = nam; 性 = giới tính",
      english: "男 = nam; 性 = giới tính",
      type: "kanji",
      example: "男性"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5fcc7a21f9e5c275
    {
      japanese: "子ども",
      kana: "こ / ko",
      vietnamese: "TỬ — 子 = trẻ/con",
      english: "子 = trẻ/con",
      type: "kanji",
      example: "子ども"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 21e202f7a31d64a7
    {
      japanese: "子孫",
      kana: "シ / shi",
      vietnamese: "TỬ — 子 = con; 孫 = cháu",
      english: "子 = con; 孫 = cháu",
      type: "kanji",
      example: "子孫"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 855530b06c9f19cb
    {
      japanese: "助けます",
      kana: "たす.ける / tasukeru",
      vietnamese: "TRỢ — 助 = giúp",
      english: "助 = giúp",
      type: "kanji",
      example: "助けます"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | eead8ba4f93341b7
    {
      japanese: "助手",
      kana: "ジョ / jo",
      vietnamese: "TRỢ — 助 = giúp; 手 = tay/người",
      english: "助 = giúp; 手 = tay/người",
      type: "kanji",
      example: "助手"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2b5e27a7328a761f
    {
      japanese: "白い",
      kana: "しろ.い / shiroi",
      vietnamese: "BẠCH — 白 = trắng",
      english: "白 = trắng",
      type: "kanji",
      example: "白い"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d71188fbb049838b
    {
      japanese: "白紙",
      kana: "ハク / haku",
      vietnamese: "BẠCH — 白 = trắng; 紙 = giấy",
      english: "白 = trắng; 紙 = giấy",
      type: "kanji",
      example: "白紙"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 992342ca1e31455a
    {
      japanese: "中身",
      kana: "なか / naka",
      vietnamese: "TRUNG — 中 = bên trong; 身 = thân/bên trong",
      english: "中 = bên trong; 身 = thân/bên trong",
      type: "kanji",
      example: "中身"
    },
    // source: review_tu_vung_bai_41.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e73f2db0326f2cf8
    {
      japanese: "中国",
      kana: "チュウ / chuu",
      vietnamese: "TRUNG — 中 = trung; 国 = nước",
      english: "中 = trung; 国 = nước",
      type: "kanji",
      example: "中国"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～なければならない',
      vietnamese: 'phải ~, cần phải ~',
      english: 'must, have to',
      type: 'main',
      explanation: 'Diễn tả nghĩa vụ hoặc sự cần thiết. Được tạo bằng cách thêm "なければならない" vào thể phủ định của động từ (thể ない bỏ い). Dạng lịch sự: なければなりません. Dạng rút gọn thông dụng: なきゃ、なくちゃ。',
      examples: [
        {
          japanese: '明日までにレポートを提出しなければなりません。',
          vietnamese: 'Phải nộp báo cáo trước ngày mai.',
          english: 'I must submit the report by tomorrow.',
          type: 'main'
        },
        {
          japanese: '毎日薬を飲まなければなりません。',
          vietnamese: 'Phải uống thuốc mỗi ngày.',
          english: 'I have to take medicine every day.',
          type: 'main'
        },
        {
          japanese: '規則を守らなければなりません。',
          vietnamese: 'Phải tuân thủ quy tắc.',
          english: 'We must follow the rules.',
          type: 'main'
        },
        {
          japanese: 'パスポートを持って行かなければなりません。',
          vietnamese: 'Phải mang theo hộ chiếu.',
          english: 'I have to bring my passport.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～なくてもいい',
      vietnamese: 'không cần ~, không phải ~',
      english: 'don\'t have to, need not',
      type: 'main',
      explanation: 'Diễn tả việc không cần thiết phải làm. Được tạo từ thể ない của động từ (bỏ い) + てもいい. Đây là dạng phủ định của なければならない.',
      examples: [
        {
          japanese: '明日は来なくてもいいです。',
          vietnamese: 'Ngày mai không cần đến.',
          english: 'You don\'t have to come tomorrow.',
          type: 'main'
        },
        {
          japanese: '全部食べなくてもいいですよ。',
          vietnamese: 'Không cần ăn hết đâu.',
          english: 'You don\'t have to eat everything.',
          type: 'main'
        },
        {
          japanese: '急がなくてもいいです。',
          vietnamese: 'Không cần vội.',
          english: 'You don\'t have to hurry.',
          type: 'main'
        },
        {
          japanese: '今すぐ決めなくてもいいです。',
          vietnamese: 'Không cần quyết định ngay bây giờ.',
          english: 'You don\'t have to decide right now.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ないと',
      vietnamese: 'nếu không ~ thì (không được)',
      english: 'if not, must (casual)',
      type: 'main',
      explanation: 'Dạng rút gọn của ～ないといけない hoặc ～ないとだめだ. Thường dùng trong văn nói để diễn tả nghĩa vụ. Mang ý "nếu không làm thì không ổn".',
      examples: [
        {
          japanese: 'もう行かないと。',
          vietnamese: 'Phải đi rồi. (Không đi là không được)',
          english: 'I have to go now.',
          type: 'main'
        },
        {
          japanese: '急がないと間に合わないよ。',
          vietnamese: 'Không vội sẽ không kịp đâu.',
          english: 'We won\'t make it if we don\'t hurry.',
          type: 'main'
        },
        {
          japanese: '勉強しないと、試験に落ちますよ。',
          vietnamese: 'Không học thì sẽ trượt kỳ thi đấy.',
          english: 'You\'ll fail the exam if you don\'t study.',
          type: 'main'
        },
        {
          japanese: '早く寝ないとだめだよ。',
          vietnamese: 'Phải ngủ sớm đi.',
          english: 'You need to go to bed early.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ば',
      vietnamese: 'nếu ~',
      english: 'if (conditional)',
      type: 'main',
      explanation: 'Diễn tả điều kiện "nếu ~". Động từ: thay đổi u-dan thành e-dan + ば (書く→書けば). い-adjective: bỏ い + ければ (高い→高ければ). な-adjective/Noun: であれば/なら.',
      examples: [
        {
          japanese: '天気がよければ、ピクニックに行きます。',
          vietnamese: 'Nếu thời tiết tốt thì sẽ đi dã ngoại.',
          english: 'If the weather is good, we\'ll go on a picnic.',
          type: 'main'
        },
        {
          japanese: '分からなければ、聞いてください。',
          vietnamese: 'Nếu không hiểu thì hãy hỏi.',
          english: 'If you don\'t understand, please ask.',
          type: 'main'
        },
        {
          japanese: '安ければ買います。',
          vietnamese: 'Nếu rẻ thì tôi sẽ mua.',
          english: 'I\'ll buy it if it\'s cheap.',
          type: 'main'
        },
        {
          japanese: '時間があれば、手伝います。',
          vietnamese: 'Nếu có thời gian thì tôi sẽ giúp.',
          english: 'If I have time, I\'ll help.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～なければ',
      vietnamese: 'nếu không ~',
      english: 'if not, unless',
      type: 'main',
      explanation: 'Dạng điều kiện phủ định. Được tạo từ thể ない của động từ (bỏ い) + ければ. Diễn tả "nếu không ~ thì".',
      examples: [
        {
          japanese: '雨が降らなければ、出かけます。',
          vietnamese: 'Nếu không mưa thì sẽ ra ngoài.',
          english: 'If it doesn\'t rain, I\'ll go out.',
          type: 'main'
        },
        {
          japanese: '許可がなければ入れません。',
          vietnamese: 'Nếu không có phép thì không được vào.',
          english: 'You can\'t enter without permission.',
          type: 'main'
        },
        {
          japanese: '努力しなければ成功しません。',
          vietnamese: 'Nếu không nỗ lực thì sẽ không thành công.',
          english: 'You won\'t succeed unless you make an effort.',
          type: 'main'
        },
        {
          japanese: 'チケットがなければ見られません。',
          vietnamese: 'Nếu không có vé thì không xem được.',
          english: 'You can\'t watch it without a ticket.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～場合',
      vietnamese: 'trong trường hợp ~',
      english: 'in case of, in the event of',
      type: 'additional',
      explanation: 'Diễn tả trường hợp, tình huống. Thường dùng trong văn viết hoặc văn nói trang trọng. Có thể kết hợp với の、という、は。',
      examples: [
        {
          japanese: '雨の場合は中止します。',
          vietnamese: 'Trong trường hợp trời mưa thì sẽ hủy.',
          english: 'In case of rain, it will be canceled.',
          type: 'main'
        },
        {
          japanese: '病気の場合は休んでください。',
          vietnamese: 'Trong trường hợp bị ốm thì hãy nghỉ.',
          english: 'If you\'re sick, please take a rest.',
          type: 'main'
        },
        {
          japanese: '遅れる場合は連絡してください。',
          vietnamese: 'Trong trường hợp đến muộn thì hãy liên lạc.',
          english: 'Please contact us if you\'re going to be late.',
          type: 'main'
        },
        {
          japanese: '火事の場合は非常口を使ってください。',
          vietnamese: 'Trong trường hợp cháy thì hãy dùng lối thoát hiểm.',
          english: 'In case of fire, use the emergency exit.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ないといけない',
      vietnamese: 'phải ~, không thể không ~',
      english: 'must, have to',
      type: 'additional',
      explanation: 'Tương tự ～なければならない nhưng thông dụng hơn trong văn nói. Diễn tả nghĩa vụ hoặc sự cần thiết. Dạng rút gọn: ～ないと。',
      examples: [
        {
          japanese: '明日早く起きないといけません。',
          vietnamese: 'Ngày mai phải dậy sớm.',
          english: 'I have to get up early tomorrow.',
          type: 'main'
        },
        {
          japanese: '宿題をしないといけない。',
          vietnamese: 'Phải làm bài tập về nhà.',
          english: 'I have to do my homework.',
          type: 'main'
        },
        {
          japanese: '今日中に終わらせないといけません。',
          vietnamese: 'Phải hoàn thành trong hôm nay.',
          english: 'I have to finish it by today.',
          type: 'main'
        },
        {
          japanese: 'もっと練習しないといけないね。',
          vietnamese: 'Phải luyện tập nhiều hơn nhé.',
          english: 'We have to practice more.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～てはいけない',
      vietnamese: 'không được ~',
      english: 'must not, may not',
      type: 'additional',
      explanation: 'Diễn tả sự cấm đoán. Được tạo từ thể て + はいけない/はだめだ. Thể thân mật: ちゃだめ、じゃだめ。',
      examples: [
        {
          japanese: 'ここで写真を撮ってはいけません。',
          vietnamese: 'Không được chụp ảnh ở đây.',
          english: 'You must not take photos here.',
          type: 'main'
        },
        {
          japanese: '諦めてはいけませんよ。',
          vietnamese: 'Không được bỏ cuộc đâu.',
          english: 'You mustn\'t give up.',
          type: 'main'
        },
        {
          japanese: '遅刻してはいけません。',
          vietnamese: 'Không được đến muộn.',
          english: 'You must not be late.',
          type: 'main'
        },
        {
          japanese: '嘘をついてはいけない。',
          vietnamese: 'Không được nói dối.',
          english: 'You must not lie.',
          type: 'additional'
        }
      ]
    }
  ]
};

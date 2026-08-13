/**
 * N4 Core Lessons — Lesson 19: 決定と変化 (Decision & Change Expressions)
 * Focus: ~ことにする、~ことになる、decision and change expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_19_DATA: LessonData = {
  lessonNumber: 19,
  title: '決定と変化 (Quyết định và Thay đổi)',
  vocabulary: [
    // Main Vocabulary - Decisions & Changes
    {
      japanese: '決める',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '行くことに決めました。'
    },
    {
      japanese: '決まる',
      kana: 'きまる',
      vietnamese: 'được quyết định',
      english: 'to be decided',
      type: 'main',
      example: '日程が決まりました。'
    },
    {
      japanese: '変える',
      kana: 'かえる',
      vietnamese: 'thay đổi (tác động)',
      english: 'to change (transitive)',
      type: 'main',
      example: '予定を変えました。'
    },
    {
      japanese: '変わる',
      kana: 'かわる',
      vietnamese: 'thay đổi (tự nhiên)',
      english: 'to change (intransitive)',
      type: 'main',
      example: '天気が変わりました。'
    },
    {
      japanese: '選ぶ',
      kana: 'えらぶ',
      vietnamese: 'chọn',
      english: 'to choose, to select',
      type: 'main',
      example: 'この服を選びました。'
    },
    {
      japanese: '選択',
      kana: 'せんたく',
      vietnamese: 'sự lựa chọn',
      english: 'choice, selection',
      type: 'main',
      example: '選択を間違えました。'
    },
    {
      japanese: '決定',
      kana: 'けってい',
      vietnamese: 'quyết định',
      english: 'decision',
      type: 'main',
      example: '重要な決定です。'
    },
    {
      japanese: '判断',
      kana: 'はんだん',
      vietnamese: 'phán đoán',
      english: 'judgment, decision',
      type: 'main',
      example: '正しい判断をしました。'
    },
    {
      japanese: '選択肢',
      kana: 'せんたくし',
      vietnamese: 'lựa chọn',
      english: 'option, choice',
      type: 'main',
      example: '三つの選択肢があります。'
    },
    {
      japanese: '可能性',
      kana: 'かのうせい',
      vietnamese: 'khả năng',
      english: 'possibility',
      type: 'main',
      example: '成功の可能性があります。'
    },

    // Main Vocabulary - Plans & Arrangements
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'dự định',
      english: 'plan, schedule',
      type: 'main',
      example: '明日の予定は何ですか。'
    },
    {
      japanese: '計画',
      kana: 'けいかく',
      vietnamese: 'kế hoạch',
      english: 'plan',
      type: 'main',
      example: '旅行の計画を立てます。'
    },
    {
      japanese: '予約',
      kana: 'よやく',
      vietnamese: 'đặt trước',
      english: 'reservation',
      type: 'main',
      example: 'ホテルを予約しました。'
    },
    {
      japanese: '準備',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'main',
      example: '準備ができました。'
    },
    {
      japanese: '延期',
      kana: 'えんき',
      vietnamese: 'hoãn lại',
      english: 'postponement',
      type: 'main',
      example: '会議を延期しました。'
    },
    {
      japanese: '中止',
      kana: 'ちゅうし',
      vietnamese: 'hủy bỏ',
      english: 'cancellation',
      type: 'main',
      example: 'イベントが中止になりました。'
    },
    {
      japanese: '変更',
      kana: 'へんこう',
      vietnamese: 'thay đổi',
      english: 'change, modification',
      type: 'main',
      example: '予定を変更しました。'
    },
    {
      japanese: '取り消し',
      kana: 'とりけし',
      vietnamese: 'hủy bỏ',
      english: 'cancellation',
      type: 'main',
      example: '予約を取り消しました。'
    },
    {
      japanese: '日程',
      kana: 'にってい',
      vietnamese: 'lịch trình',
      english: 'schedule',
      type: 'main',
      example: '日程が変わりました。'
    },
    {
      japanese: '都合',
      kana: 'つごう',
      vietnamese: 'sự thuận tiện',
      english: 'convenience',
      type: 'main',
      example: '都合が悪いです。'
    },

    // Main Vocabulary - Actions & States
    {
      japanese: '迷う',
      kana: 'まよう',
      vietnamese: 'lưỡng lự, lạc đường',
      english: 'to hesitate, to get lost',
      type: 'main',
      example: 'どちらにするか迷っています。'
    },
    {
      japanese: '悩む',
      kana: 'なやむ',
      vietnamese: 'lo lắng, băn khoăn',
      english: 'to worry, to be troubled',
      type: 'main',
      example: '進路について悩んでいます。'
    },
    {
      japanese: '考える',
      kana: 'かんがえる',
      vietnamese: 'suy nghĩ',
      english: 'to think',
      type: 'main',
      example: 'よく考えてください。'
    },
    {
      japanese: '思う',
      kana: 'おもう',
      vietnamese: 'nghĩ',
      english: 'to think',
      type: 'main',
      example: '行かないことにしようと思います。'
    },
    {
      japanese: '賛成',
      kana: 'さんせい',
      vietnamese: 'tán thành',
      english: 'agreement',
      type: 'main',
      example: '賛成します。'
    },
    {
      japanese: '反対',
      kana: 'はんたい',
      vietnamese: 'phản đối',
      english: 'opposition',
      type: 'main',
      example: '反対する人はいますか。'
    },
    {
      japanese: '受け入れる',
      kana: 'うけいれる',
      vietnamese: 'chấp nhận',
      english: 'to accept',
      type: 'main',
      example: '提案を受け入れました。'
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
      japanese: '承諾',
      kana: 'しょうだく',
      vietnamese: 'chấp thuận',
      english: 'consent, acceptance',
      type: 'main',
      example: '承諾を得ました。'
    },
    {
      japanese: '拒否',
      kana: 'きょひ',
      vietnamese: 'từ chối',
      english: 'refusal, rejection',
      type: 'main',
      example: '要求を拒否しました。'
    },

    // Additional Vocabulary - More Verbs
    {
      japanese: '辞める',
      kana: 'やめる',
      vietnamese: 'thôi, nghỉ việc',
      english: 'to quit, to resign',
      type: 'additional',
      example: '会社を辞めることにしました。'
    },
    {
      japanese: '止める',
      kana: 'やめる',
      vietnamese: 'dừng lại',
      english: 'to stop',
      type: 'additional',
      example: 'タバコを止めました。'
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
      japanese: '続ける',
      kana: 'つづける',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'additional',
      example: '勉強を続けることにしました。'
    },
    {
      japanese: '始める',
      kana: 'はじめる',
      vietnamese: 'bắt đầu',
      english: 'to begin',
      type: 'additional',
      example: '新しい仕事を始めます。'
    },
    {
      japanese: '検討する',
      kana: 'けんとうする',
      vietnamese: 'xem xét',
      english: 'to consider',
      type: 'additional',
      example: '提案を検討します。'
    },
    {
      japanese: '相談する',
      kana: 'そうだんする',
      vietnamese: 'tham khảo',
      english: 'to consult',
      type: 'additional',
      example: '友達に相談しました。'
    },
    {
      japanese: '提案する',
      kana: 'ていあんする',
      vietnamese: 'đề xuất',
      english: 'to propose',
      type: 'additional',
      example: '新しい方法を提案しました。'
    },
    {
      japanese: '承認する',
      kana: 'しょうにんする',
      vietnamese: 'phê duyệt',
      english: 'to approve',
      type: 'additional',
      example: '計画が承認されました。'
    },
    {
      japanese: '却下する',
      kana: 'きゃっかする',
      vietnamese: 'bác bỏ',
      english: 'to reject',
      type: 'additional',
      example: '提案が却下されました。'
    },

    // Additional Vocabulary - States & Conditions
    {
      japanese: '確定',
      kana: 'かくてい',
      vietnamese: 'xác định',
      english: 'confirmation, decision',
      type: 'additional',
      example: '日程が確定しました。'
    },
    {
      japanese: '確認',
      kana: 'かくにん',
      vietnamese: 'xác nhận',
      english: 'confirmation',
      type: 'additional',
      example: '予約を確認してください。'
    },
    {
      japanese: '決心',
      kana: 'けっしん',
      vietnamese: 'quyết tâm',
      english: 'determination',
      type: 'additional',
      example: '決心がつきました。'
    },
    {
      japanese: '意思',
      kana: 'いし',
      vietnamese: 'ý chí',
      english: 'will, intention',
      type: 'additional',
      example: '強い意思が必要です。'
    },
    {
      japanese: '意見',
      kana: 'いけん',
      vietnamese: 'ý kiến',
      english: 'opinion',
      type: 'additional',
      example: 'あなたの意見を聞かせてください。'
    },
    {
      japanese: '意図',
      kana: 'いと',
      vietnamese: 'ý định',
      english: 'intention',
      type: 'additional',
      example: '意図が分かりません。'
    },
    {
      japanese: '結論',
      kana: 'けつろん',
      vietnamese: 'kết luận',
      english: 'conclusion',
      type: 'additional',
      example: '結論を出しました。'
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
      japanese: '成果',
      kana: 'せいか',
      vietnamese: 'thành quả',
      english: 'result, achievement',
      type: 'additional',
      example: 'いい成果が出ました。'
    },
    {
      japanese: '効果',
      kana: 'こうか',
      vietnamese: 'hiệu quả',
      english: 'effect',
      type: 'additional',
      example: '効果がありました。'
    },

    // Supplementary Vocabulary - Transitions
    {
      japanese: '移る',
      kana: 'うつる',
      vietnamese: 'chuyển đến',
      english: 'to move to',
      type: 'supplementary',
      example: '別の会社に移ることになりました。'
    },
    {
      japanese: '移す',
      kana: 'うつす',
      vietnamese: 'chuyển (tác động)',
      english: 'to transfer',
      type: 'supplementary',
      example: '荷物を移しました。'
    },
    {
      japanese: '転職',
      kana: 'てんしょく',
      vietnamese: 'chuyển việc',
      english: 'job change',
      type: 'supplementary',
      example: '転職を考えています。'
    },
    {
      japanese: '異動',
      kana: 'いどう',
      vietnamese: 'thuyên chuyển',
      english: 'transfer',
      type: 'supplementary',
      example: '大阪に異動になりました。'
    },
    {
      japanese: '引っ越し',
      kana: 'ひっこし',
      vietnamese: 'chuyển nhà',
      english: 'moving',
      type: 'supplementary',
      example: '来月引っ越します。'
    },
    {
      japanese: '進学',
      kana: 'しんがく',
      vietnamese: 'tiến học',
      english: 'advancing to higher education',
      type: 'supplementary',
      example: '大学に進学することになりました。'
    },
    {
      japanese: '就職',
      kana: 'しゅうしょく',
      vietnamese: 'xin việc',
      english: 'getting a job',
      type: 'supplementary',
      example: '来年就職します。'
    },
    {
      japanese: '退職',
      kana: 'たいしょく',
      vietnamese: 'nghỉ việc',
      english: 'retirement, resignation',
      type: 'supplementary',
      example: '来月退職することになりました。'
    },
    {
      japanese: '卒業',
      kana: 'そつぎょう',
      vietnamese: 'tốt nghiệp',
      english: 'graduation',
      type: 'supplementary',
      example: '来年卒業します。'
    },
    {
      japanese: '入学',
      kana: 'にゅうがく',
      vietnamese: 'nhập học',
      english: 'entrance, enrollment',
      type: 'supplementary',
      example: '4月に入学しました。'
    },

    // Supplementary Vocabulary - Adjectives
    {
      japanese: '適切',
      kana: 'てきせつ',
      vietnamese: 'thích hợp',
      english: 'appropriate',
      type: 'supplementary',
      example: '適切な判断です。'
    },
    {
      japanese: '妥当',
      kana: 'だとう',
      vietnamese: 'hợp lý',
      english: 'appropriate, reasonable',
      type: 'supplementary',
      example: '妥当な決定です。'
    },
    {
      japanese: '正しい',
      kana: 'たださい',
      vietnamese: 'đúng',
      english: 'correct',
      type: 'supplementary',
      example: '正しい選択をしました。'
    },
    {
      japanese: '間違い',
      kana: 'まちがい',
      vietnamese: 'sai lầm',
      english: 'mistake',
      type: 'supplementary',
      example: '間違った決定でした。'
    },
    {
      japanese: '最適',
      kana: 'さいてき',
      vietnamese: 'tối ưu',
      english: 'optimal',
      type: 'supplementary',
      example: '最適な方法を選びました。'
    },
    {
      japanese: '最善',
      kana: 'さいぜん',
      vietnamese: 'tốt nhất',
      english: 'best',
      type: 'supplementary',
      example: '最善を尽くしました。'
    },
    {
      japanese: '慎重',
      kana: 'しんちょう',
      vietnamese: 'thận trọng',
      english: 'careful, cautious',
      type: 'supplementary',
      example: '慎重に考えてください。'
    },
    {
      japanese: '急',
      kana: 'きゅう',
      vietnamese: 'gấp',
      english: 'urgent',
      type: 'supplementary',
      example: '急な変更です。'
    },
    {
      japanese: '重要',
      kana: 'じゅうよう',
      vietnamese: 'quan trọng',
      english: 'important',
      type: 'supplementary',
      example: '重要な決定です。'
    },
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary',
      type: 'supplementary',
      example: '変更が必要です。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | d28c5b98ab4c931b
    {
      japanese: "泣きます",
      kana: "なきます",
      vietnamese: "khóc",
      english: "khóc",
      type: "main",
      example: "子どもが泣いています。\nKodomo ga naite imasu.\nĐứa trẻ đang khóc."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | dbcdc86903d4fcef
    {
      japanese: "笑います",
      kana: "わらいます",
      vietnamese: "cười",
      english: "cười",
      type: "main",
      example: "みんなで笑いました。\nMinna de waraimashita.\nMọi người đã cùng cười."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 0855fd9ed258400f
    {
      japanese: "眠ります",
      kana: "ねむります",
      vietnamese: "ngủ",
      english: "ngủ",
      type: "main",
      example: "赤ちゃんがよく眠ります。\nAkachan ga yoku nemurimasu.\nEm bé ngủ rất ngon."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 9911547912469de0
    {
      japanese: "乾きます",
      kana: "かわきます",
      vietnamese: "khô",
      english: "khô",
      type: "main",
      example: "シャツが乾きました。\nShatsu ga kawakimashita.\nÁo sơ mi đã khô."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 5c09ee69dab1e455
    {
      japanese: "濡れます",
      kana: "ぬれます",
      vietnamese: "ướt",
      english: "ướt",
      type: "main",
      example: "雨でシャツがぬれました。\nAme de shatsu ga nuremashita.\nÁo sơ mi bị ướt vì mưa."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 6ccca618006bbf52
    {
      japanese: "滑ります",
      kana: "すべります",
      vietnamese: "trượt",
      english: "trượt",
      type: "main",
      example: "雪の日に道で滑りました。\nYuki no hi ni michi de suberimashita.\nTôi đã trượt trên đường vào ngày tuyết rơi."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 356f490e1aba1624
    {
      japanese: "起きます",
      kana: "おきます",
      vietnamese: "xảy ra, thức dậy",
      english: "xảy ra, thức dậy",
      type: "main",
      example: "事故が起きました。\nJiko ga okimashita.\nTai nạn đã xảy ra."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | aea4c73f6467c0f5
    {
      japanese: "事故",
      kana: "じこ",
      vietnamese: "tai nạn, sự cố",
      english: "tai nạn, sự cố",
      type: "main",
      example: "事故に気をつけてください。\nJiko ni ki o tsukete kudasai.\nHãy cẩn thận tai nạn."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | fef9dedcb199c586
    {
      japanese: "調節します",
      kana: "ちょうせつします",
      vietnamese: "điều chỉnh, điều tiết",
      english: "điều chỉnh, điều tiết",
      type: "main",
      example: "エアコンの温度を調節します。\nEakon no ondo o chousetsu shimasu.\nTôi điều chỉnh nhiệt độ điều hòa."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 40779009fa53bde0
    {
      japanese: "安全な",
      kana: "あんぜんな",
      vietnamese: "an toàn",
      english: "an toàn",
      type: "main",
      example: "この道は安全です。\nKono michi wa anzen desu.\nCon đường này an toàn."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | cae2b2e5a01b9442
    {
      japanese: "危険な",
      kana: "きけんな",
      vietnamese: "nguy hiểm",
      english: "nguy hiểm",
      type: "main",
      example: "ここで泳ぐのは危険です。\nKoko de oyogu no wa kiken desu.\nBơi ở đây rất nguy hiểm."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 9dca1d198e172f19
    {
      japanese: "濃い",
      kana: "こい",
      vietnamese: "đậm, nồng",
      english: "đậm, nồng",
      type: "main",
      example: "このコーヒーは味が濃いです。\nKono koohii wa aji ga koi desu.\nCà phê này có vị đậm."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 8ae0028e27d98ec3
    {
      japanese: "薄い",
      kana: "うすい",
      vietnamese: "nhạt, loãng, mỏng",
      english: "nhạt, loãng, mỏng",
      type: "main",
      example: "このスープは味が薄いです。\nKono suupu wa aji ga usui desu.\nMón súp này vị nhạt."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 5f15acedcaf41099
    {
      japanese: "厚い",
      kana: "あつい",
      vietnamese: "dày",
      english: "dày",
      type: "main",
      example: "この本は厚いです。\nKono hon wa atsui desu.\nQuyển sách này dày."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 187412fd5fe2e7c4
    {
      japanese: "太い",
      kana: "ふとい",
      vietnamese: "to, dày, mập, nét đậm",
      english: "to, dày, mập, nét đậm",
      type: "main",
      example: "この線は太いです。\nKono sen wa futoi desu.\nĐường nét này dày."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 7c18ca3b711d5a04
    {
      japanese: "細い",
      kana: "ほそい",
      vietnamese: "mảnh, nhỏ, gầy",
      english: "mảnh, nhỏ, gầy",
      type: "main",
      example: "彼女は指が細いです。\nKanojo wa yubi ga hosoi desu.\nNgón tay của cô ấy thon."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 4bae218878c8f3cc
    {
      japanese: "空気",
      kana: "くうき",
      vietnamese: "không khí",
      english: "không khí",
      type: "main",
      example: "山の空気はきれいです。\nYama no kuuki wa kirei desu.\nKhông khí trên núi trong lành."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 829dbb76d94d5cb7
    {
      japanese: "涙",
      kana: "なみだ",
      vietnamese: "nước mắt",
      english: "nước mắt",
      type: "main",
      example: "涙が出ました。\nNamida ga demashita.\nNước mắt đã chảy ra."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 8de464b908589211
    {
      japanese: "和食",
      kana: "わしょく",
      vietnamese: "món ăn Nhật",
      english: "món ăn Nhật",
      type: "main",
      example: "私は和食が好きです。\nWatashi wa washoku ga suki desu.\nTôi thích món ăn Nhật."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | e1d1e81b5591735a
    {
      japanese: "洋食",
      kana: "ようしょく",
      vietnamese: "món ăn Âu Mỹ",
      english: "món ăn Âu Mỹ",
      type: "main",
      example: "このレストランは洋食がおいしいです。\nKono resutoran wa youshoku ga oishii desu.\nNhà hàng này món Âu rất ngon."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | ebb2639b82759bc2
    {
      japanese: "おかず",
      kana: "おかず",
      vietnamese: "thức ăn, món ăn kèm với cơm",
      english: "thức ăn, món ăn kèm với cơm",
      type: "main",
      example: "晩ご飯のおかずを作ります。\nBangohan no okazu o tsukurimasu.\nTôi làm món ăn kèm cho bữa tối."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | eeed6e82c39d5b9a
    {
      japanese: "量",
      kana: "りょう",
      vietnamese: "lượng, số lượng",
      english: "lượng, số lượng",
      type: "main",
      example: "砂糖の量を少なくします。\nSatou no ryou o sukunaku shimasu.\nTôi giảm lượng đường."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | bcfe81526ffdc816
    {
      japanese: "一倍",
      kana: "いっぱい",
      vietnamese: "một lần, gấp một lần",
      english: "một lần, gấp một lần",
      type: "main",
      example: "量を一倍にします。\nRyou o ippai ni shimasu.\nTôi để lượng ở mức một lần."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 500fbec3935e37e0
    {
      japanese: "シングル",
      kana: "シングル",
      vietnamese: "phòng đơn, loại một giường",
      english: "phòng đơn, loại một giường",
      type: "main",
      example: "シングルの部屋を予約します。\nShinguru no heya o yoyaku shimasu.\nTôi đặt phòng đơn."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | aab762987deb3540
    {
      japanese: "ツイン",
      kana: "ツイン",
      vietnamese: "phòng đôi, loại hai giường",
      english: "phòng đôi, loại hai giường",
      type: "main",
      example: "ツインの部屋はありますか。\nTsuin no heya wa arimasu ka.\nCó phòng đôi không ạ?"
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 7a770b2bf9d4d685
    {
      japanese: "洗濯物",
      kana: "せんたくもの",
      vietnamese: "quần áo giặt",
      english: "quần áo giặt",
      type: "main",
      example: "洗濯物がまだ乾いていません。\nSentakumono ga mada kawaite imasen.\nQuần áo giặt vẫn chưa khô."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 8ff18015cf35ddf9
    {
      japanese: "DVD",
      kana: "DVD",
      vietnamese: "DVD",
      english: "DVD",
      type: "main",
      example: "DVDを見ます。\nDii bui dii o mimasu.\nTôi xem DVD."
    },
    // source: review_tu_vung_bai_44.md | 1. Từ vựng chính | 1ad80203018dd9e7
    {
      japanese: "ホテル広島",
      kana: "ホテルひろしま",
      vietnamese: "tên khách sạn Hiroshima",
      english: "tên khách sạn Hiroshima",
      type: "main",
      example: "ホテル広島に泊まります。\nHoteru Hiroshima ni tomarimasu.\nTôi sẽ ở khách sạn Hiroshima."
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | 1d9482143f737e39
    {
      japanese: "どうなさいますか。",
      kana: "どうなさいますか。",
      vietnamese: "Anh/chị định như thế nào ạ?",
      english: "Anh/chị định như thế nào ạ?",
      type: "supplementary",
      example: "今日はどうなさいますか。\nKyou wa dou nasaimasu ka.\nHôm nay anh/chị định làm như thế nào ạ?"
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | bc76957688c8e7ff
    {
      japanese: "カット",
      kana: "カット",
      vietnamese: "cắt tóc",
      english: "cắt tóc",
      type: "supplementary",
      example: "カットをお願いします。\nKatto o onegai shimasu.\nCho tôi cắt tóc ạ."
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | 4ea0905b479aec30
    {
      japanese: "シャンプー",
      kana: "シャンプー",
      vietnamese: "gội đầu, dầu gội",
      english: "gội đầu, dầu gội",
      type: "supplementary",
      example: "シャンプーもお願いします。\nShanpuu mo onegai shimasu.\nCho tôi gội đầu nữa ạ."
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | 9bb2c416ae0b3ed9
    {
      japanese: "どういうふうになさいますか。",
      kana: "どういうふうになさいますか。",
      vietnamese: "Anh/chị muốn làm kiểu như thế nào ạ?",
      english: "Anh/chị muốn làm kiểu như thế nào ạ?",
      type: "supplementary",
      example: "髪はどういうふうになさいますか。\nKami wa dou iu fuu ni nasaimasu ka.\nAnh/chị muốn tóc kiểu như thế nào ạ?"
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | 7b957e28a37fe4be
    {
      japanese: "ショート",
      kana: "ショート",
      vietnamese: "kiểu ngắn",
      english: "kiểu ngắn",
      type: "supplementary",
      example: "ショートにしてください。\nShooto ni shite kudasai.\nHãy cắt kiểu ngắn cho tôi."
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | ccbdd27bcbacc11d
    {
      japanese: "〜みたいにしてください。",
      kana: "〜みたいにしてください。",
      vietnamese: "hãy làm giống như ~",
      english: "hãy làm giống như ~",
      type: "supplementary",
      example: "この写真みたいにしてください。\nKono shashin mitai ni shite kudasai.\nHãy làm giống như ảnh này."
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | efc0aee272a4437d
    {
      japanese: "これでよろしいでしょうか。",
      kana: "これでよろしいでしょうか。",
      vietnamese: "Thế này đã được chưa ạ?",
      english: "Thế này đã được chưa ạ?",
      type: "supplementary",
      example: "長さはこれでよろしいでしょうか。\nNagasa wa kore de yoroshii deshou ka.\nĐộ dài thế này đã được chưa ạ?"
    },
    // source: review_tu_vung_bai_44.md | 2. Từ vựng hội thoại | 1aff765bad7a0f09
    {
      japanese: "どうもお疲れ様でした",
      kana: "どうもお疲れ様でした。",
      vietnamese: "Cảm ơn anh/chị, anh/chị vất vả rồi",
      english: "Cảm ơn anh/chị, anh/chị vất vả rồi",
      type: "supplementary",
      example: "どうもお疲れ様でした。\nDoumo otsukaresama deshita.\nCảm ơn anh/chị, anh/chị vất vả rồi."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 99b67cac3db3115f
    {
      japanese: "嫌がります",
      kana: "いやがります",
      vietnamese: "không thích, tỏ thái độ khó chịu",
      english: "không thích, tỏ thái độ khó chịu",
      type: "supplementary",
      example: "子どもは薬を飲むのを嫌がります。\nKodomo wa kusuri o nomu no o iyagarimasu.\nTrẻ con không thích uống thuốc."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 1cda171358b29af4
    {
      japanese: "また",
      kana: "また",
      vietnamese: "lại, thêm nữa",
      english: "lại, thêm nữa",
      type: "supplementary",
      example: "また会いましょう。\nMata aimashou.\nHẹn gặp lại."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 63b13fe4d415ffbc
    {
      japanese: "うまく",
      kana: "うまく",
      vietnamese: "tốt, giỏi, suôn sẻ",
      english: "tốt, giỏi, suôn sẻ",
      type: "supplementary",
      example: "仕事がうまくいきました。\nShigoto ga umaku ikimashita.\nCông việc đã diễn ra suôn sẻ."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 277671138a0362c1
    {
      japanese: "順序",
      kana: "じゅんじょ",
      vietnamese: "thứ tự, trình tự",
      english: "thứ tự, trình tự",
      type: "supplementary",
      example: "順序を守ってください。\nJunjo o mamotte kudasai.\nHãy tuân theo thứ tự."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | f7066ba8c1a7cef3
    {
      japanese: "安心な",
      kana: "あんしんな",
      vietnamese: "yên tâm, an tâm",
      english: "yên tâm, an tâm",
      type: "supplementary",
      example: "安心な場所で休みます。\nAnshin na basho de yasumimasu.\nTôi nghỉ ở một nơi yên tâm."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 2219ab11fead62c3
    {
      japanese: "表現",
      kana: "ひょうげん",
      vietnamese: "cách nói, cách diễn đạt, biểu hiện",
      english: "cách nói, cách diễn đạt, biểu hiện",
      type: "supplementary",
      example: "この表現は自然です。\nKono hyougen wa shizen desu.\nCách diễn đạt này tự nhiên."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 96b41c67720e3997
    {
      japanese: "例えば",
      kana: "たとえば",
      vietnamese: "ví dụ là, chẳng hạn",
      english: "ví dụ là, chẳng hạn",
      type: "supplementary",
      example: "例えば、これはどうですか。\nTatoeba, kore wa dou desu ka.\nVí dụ, cái này thì sao?"
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | d24450375006d45c
    {
      japanese: "別れます",
      kana: "わかれます",
      vietnamese: "chia tay, từ biệt",
      english: "chia tay, từ biệt",
      type: "supplementary",
      example: "友だちと駅で別れました。\nTomodachi to eki de wakaremashita.\nTôi đã chia tay bạn ở nhà ga."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 2c6e5f049e384a5a
    {
      japanese: "これら",
      kana: "これら",
      vietnamese: "những cái này",
      english: "những cái này",
      type: "supplementary",
      example: "これらは全部必要です。\nKorera wa zenbu hitsuyou desu.\nNhững cái này đều cần thiết."
    },
    // source: review_tu_vung_bai_44.md | 3. Từ vựng đọc hiểu | 082ab2ffccb3de71
    {
      japanese: "縁起が悪い",
      kana: "えんぎがわるい",
      vietnamese: "không may, điềm xấu, xui xẻo",
      english: "không may, điềm xấu, xui xẻo",
      type: "supplementary",
      example: "この言葉は縁起が悪いと言われています。\nKono kotoba wa engi ga warui to iwarete imasu.\nTừ này được cho là không may."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 899e5aebf50e52f7
    {
      japanese: "シャツが乾きます",
      kana: "シャツが乾きます",
      vietnamese: "áo sơ mi khô",
      english: "áo sơ mi khô",
      type: "supplementary",
      example: "乾きます / kawakimasu là tự động từ, dùng với が / ga."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 80c9a783cd2c18c9
    {
      japanese: "シャツがぬれます",
      kana: "シャツがぬれます",
      vietnamese: "áo sơ mi bị ướt",
      english: "áo sơ mi bị ướt",
      type: "supplementary",
      example: "ぬれます / nuremasu là tự động từ, trạng thái bị ướt."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 52afca8d788b3590
    {
      japanese: "事故が起きます",
      kana: "事故が起きます",
      vietnamese: "tai nạn xảy ra",
      english: "tai nạn xảy ra",
      type: "supplementary",
      example: "Mẫu cố định: sự việc + が起きます / ga okimasu."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | f9c23ae53a921007
    {
      japanese: "温度を調節します",
      kana: "温度を調節します",
      vietnamese: "điều chỉnh nhiệt độ",
      english: "điều chỉnh nhiệt độ",
      type: "supplementary",
      example: "Dùng を / o vì có tác động điều chỉnh một thứ cụ thể."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | f88cdeae37a32fe7
    {
      japanese: "味が濃い",
      kana: "味が濃い",
      vietnamese: "vị đậm",
      english: "vị đậm",
      type: "supplementary",
      example: "Dùng cho cà phê, trà, súp, nước chấm."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 775ff9244eb5dab4
    {
      japanese: "味が薄い",
      kana: "味が薄い",
      vietnamese: "vị nhạt",
      english: "vị nhạt",
      type: "supplementary",
      example: "Trái nghĩa với 味が濃い / aji ga koi."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 1ff4bb05104197ae
    {
      japanese: "本が厚い",
      kana: "本が厚い",
      vietnamese: "sách dày",
      english: "sách dày",
      type: "supplementary",
      example: "厚い / atsui là “dày”, khác với 暑い / atsui là “nóng thời tiết”."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 58c6dbc3b8c67175
    {
      japanese: "線が太い",
      kana: "線が太い",
      vietnamese: "nét/đường kẻ dày",
      english: "nét/đường kẻ dày",
      type: "supplementary",
      example: "太い / futoi dùng cho vật dạng dài có bề ngang to."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 9ae21732f1e40d6b
    {
      japanese: "線が細い",
      kana: "線が細い",
      vietnamese: "nét/đường kẻ mảnh",
      english: "nét/đường kẻ mảnh",
      type: "supplementary",
      example: "細い / hosoi trái nghĩa với 太い / futoi."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 41bfd56401c97cca
    {
      japanese: "和食と洋食",
      kana: "和食と洋食",
      vietnamese: "món Nhật và món Âu",
      english: "món Nhật và món Âu",
      type: "supplementary",
      example: "和食 / washoku là món Nhật; 洋食 / youshoku là món Âu/Mỹ."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 74052534f3526198
    {
      japanese: "シングルの部屋",
      kana: "シングルの部屋",
      vietnamese: "phòng đơn",
      english: "phòng đơn",
      type: "supplementary",
      example: "Thường dùng khi đặt khách sạn."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | f8c633985bcfc652
    {
      japanese: "ツインの部屋",
      kana: "ツインの部屋",
      vietnamese: "phòng đôi hai giường",
      english: "phòng đôi hai giường",
      type: "supplementary",
      example: "Khác ダブル / daburu là giường đôi lớn."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | c0100f66720288b6
    {
      japanese: "これでよろしいでしょうか",
      kana: "これでよろしいでしょうか",
      vietnamese: "thế này được chưa ạ",
      english: "thế này được chưa ạ",
      type: "supplementary",
      example: "Câu lịch sự trong dịch vụ, tiệm tóc, khách sạn."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | 747a7caf2fd7275a
    {
      japanese: "〜みたいにしてください",
      kana: "〜みたいにしてください",
      vietnamese: "hãy làm giống như ~",
      english: "hãy làm giống như ~",
      type: "supplementary",
      example: "Dùng khi đưa ảnh/mẫu cho người khác làm theo."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | c86ae8bcd7f7f801
    {
      japanese: "順序を守ります",
      kana: "順序を守ります",
      vietnamese: "tuân theo thứ tự",
      english: "tuân theo thứ tự",
      type: "supplementary",
      example: "Hay dùng trong hướng dẫn, quy trình."
    },
    // source: review_tu_vung_bai_44.md | 4. Cụm cần nhớ | c056c44bdda4286b
    {
      japanese: "縁起が悪い",
      kana: "縁起が悪い",
      vietnamese: "xui, điềm xấu",
      english: "xui, điềm xấu",
      type: "supplementary",
      example: "Dùng trong văn hóa, quan niệm may rủi."
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 1a64cc06cafa2b29
    {
      japanese: "泣",
      kana: "キュウ / kyuu",
      vietnamese: "KHẤP — khóc",
      english: "khóc",
      type: "kanji",
      example: "泣きます / nakimasu"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 8def018a80b02a6c
    {
      japanese: "笑",
      kana: "ショウ / shou",
      vietnamese: "TIẾU — cười",
      english: "cười",
      type: "kanji",
      example: "笑います / waraimasu"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 5b03d280d8131c7b
    {
      japanese: "眠",
      kana: "ミン / min",
      vietnamese: "MIÊN — ngủ",
      english: "ngủ",
      type: "kanji",
      example: "眠ります / nemurimasu"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 777a79a676242de7
    {
      japanese: "起",
      kana: "キ / ki",
      vietnamese: "KHỞI — dậy, xảy ra",
      english: "dậy, xảy ra",
      type: "kanji",
      example: "起きます / okimasu"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 57816bf13ad22a5e
    {
      japanese: "安",
      kana: "アン / an",
      vietnamese: "AN — yên ổn, rẻ",
      english: "yên ổn, rẻ",
      type: "kanji",
      example: "安全な / anzen na, 安心な / anshin na"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 97cb6abb62f7645e
    {
      japanese: "全",
      kana: "ゼン / zen",
      vietnamese: "TOÀN — toàn bộ",
      english: "toàn bộ",
      type: "kanji",
      example: "安全な / anzen na"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | d9c099371decd809
    {
      japanese: "食",
      kana: "ショク / shoku",
      vietnamese: "THỰC — ăn, món ăn",
      english: "ăn, món ăn",
      type: "kanji",
      example: "和食 / washoku, 洋食 / youshoku"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 8e8c0d40a69230a8
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "KHÍ — khí, tinh thần",
      english: "khí, tinh thần",
      type: "kanji",
      example: "空気 / kuuki"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | ad6f3f4d5d37bf09
    {
      japanese: "空",
      kana: "クウ / kuu",
      vietnamese: "KHÔNG — trời, trống, không khí",
      english: "trời, trống, không khí",
      type: "kanji",
      example: "空気 / kuuki"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | f7a9318f4de7a5ab
    {
      japanese: "一",
      kana: "イチ / ichi, イツ / itsu",
      vietnamese: "NHẤT — một",
      english: "một",
      type: "kanji",
      example: "一倍 / ippai"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 7515391e34802b68
    {
      japanese: "物",
      kana: "ブツ / butsu, モツ / motsu",
      vietnamese: "VẬT — vật, đồ vật",
      english: "vật, đồ vật",
      type: "kanji",
      example: "洗濯物 / sentakumono"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | dbfa88f2571bd73c
    {
      japanese: "太",
      kana: "タイ / tai, タ / ta",
      vietnamese: "THÁI — to, dày",
      english: "to, dày",
      type: "kanji",
      example: "太い / futoi"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 5530fae7bd14064f
    {
      japanese: "細",
      kana: "サイ / sai",
      vietnamese: "TẾ — nhỏ, mảnh",
      english: "nhỏ, mảnh",
      type: "kanji",
      example: "細い / hosoi"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 7d9b191c6f20d973
    {
      japanese: "心",
      kana: "シン / shin",
      vietnamese: "TÂM — tim, lòng, tinh thần",
      english: "tim, lòng, tinh thần",
      type: "kanji",
      example: "安心な / anshin na"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | e18b99b31a87b167
    {
      japanese: "例",
      kana: "レイ / rei",
      vietnamese: "LỆ — ví dụ",
      english: "ví dụ",
      type: "kanji",
      example: "例えば / tatoeba"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | 903d37660771b8c7
    {
      japanese: "別",
      kana: "ベツ / betsu",
      vietnamese: "BIỆT — tách ra, khác",
      english: "tách ra, khác",
      type: "kanji",
      example: "別れます / wakaremasu"
    },
    // source: review_tu_vung_bai_44.md | 5. Kanji N5–N4 cần học kỹ | e8e7197f66bf9a67
    {
      japanese: "悪",
      kana: "アク / aku, オ / o",
      vietnamese: "ÁC — xấu",
      english: "xấu",
      type: "kanji",
      example: "縁起が悪い / engi ga warui"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5f67b65761d2e669
    {
      japanese: "泣く",
      kana: "な.く / naku",
      vietnamese: "KHẤP — 泣 = khóc",
      english: "泣 = khóc",
      type: "kanji",
      example: "泣く"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 64f18efa9c75b26d
    {
      japanese: "号泣",
      kana: "キュウ / kyuu",
      vietnamese: "KHẤP — 号 = gào; 泣 = khóc",
      english: "号 = gào; 泣 = khóc",
      type: "kanji",
      example: "号泣"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 746eb6ee5e354a6e
    {
      japanese: "笑う",
      kana: "わら.う / warau",
      vietnamese: "TIẾU — 笑 = cười",
      english: "笑 = cười",
      type: "kanji",
      example: "笑う"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8747e8912520ba1c
    {
      japanese: "笑顔",
      kana: "え / e, かお / kao",
      vietnamese: "TIẾU — 笑 = cười; 顔 = mặt",
      english: "笑 = cười; 顔 = mặt",
      type: "kanji",
      example: "笑顔"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5db436fac86daf47
    {
      japanese: "爆笑",
      kana: "ショウ / shou",
      vietnamese: "TIẾU — 爆 = nổ; 笑 = cười",
      english: "爆 = nổ; 笑 = cười",
      type: "kanji",
      example: "爆笑"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b69980838fb7d144
    {
      japanese: "眠る",
      kana: "ねむ.る / nemuru",
      vietnamese: "MIÊN — 眠 = ngủ",
      english: "眠 = ngủ",
      type: "kanji",
      example: "眠る"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | da9938803f9b8600
    {
      japanese: "睡眠",
      kana: "ミン / min",
      vietnamese: "MIÊN — 睡 = ngủ; 眠 = ngủ",
      english: "睡 = ngủ; 眠 = ngủ",
      type: "kanji",
      example: "睡眠"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7080bf3140e3e844
    {
      japanese: "起きる",
      kana: "お.きる / okiru",
      vietnamese: "KHỞI — 起 = dậy, phát sinh",
      english: "起 = dậy, phát sinh",
      type: "kanji",
      example: "起きる"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 258040b1bff485ce
    {
      japanese: "起床",
      kana: "キ / ki",
      vietnamese: "KHỞI — 起 = dậy; 床 = giường",
      english: "起 = dậy; 床 = giường",
      type: "kanji",
      example: "起床"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 3a213fe364d38922
    {
      japanese: "安全",
      kana: "アン / an",
      vietnamese: "AN — 安 = yên ổn; 全 = toàn vẹn",
      english: "安 = yên ổn; 全 = toàn vẹn",
      type: "kanji",
      example: "安全"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7a7cc3e6f2ccf1ec
    {
      japanese: "安心",
      kana: "アン / an",
      vietnamese: "AN — 安 = yên; 心 = lòng",
      english: "安 = yên; 心 = lòng",
      type: "kanji",
      example: "安心"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2636cd9b8c97945e
    {
      japanese: "全部",
      kana: "ゼン / zen",
      vietnamese: "TOÀN — 全 = toàn bộ; 部 = phần",
      english: "全 = toàn bộ; 部 = phần",
      type: "kanji",
      example: "全部"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c075befd77238e50
    {
      japanese: "食べる",
      kana: "た.べる / taberu",
      vietnamese: "THỰC — 食 = ăn",
      english: "食 = ăn",
      type: "kanji",
      example: "食べる"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 618c71a04539ba39
    {
      japanese: "和食",
      kana: "ショク / shoku",
      vietnamese: "THỰC — 和 = Nhật, hòa; 食 = món ăn",
      english: "和 = Nhật, hòa; 食 = món ăn",
      type: "kanji",
      example: "和食"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 0e62f93230bfd9ca
    {
      japanese: "洋食",
      kana: "ショク / shoku",
      vietnamese: "THỰC — 洋 = phương Tây; 食 = món ăn",
      english: "洋 = phương Tây; 食 = món ăn",
      type: "kanji",
      example: "洋食"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5c5d31037ad6e734
    {
      japanese: "元気",
      kana: "キ / ki",
      vietnamese: "KHÍ — 元 = gốc, nguồn; 気 = tinh thần",
      english: "元 = gốc, nguồn; 気 = tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 27287330b07aa653
    {
      japanese: "空気",
      kana: "キ / ki",
      vietnamese: "KHÍ — 空 = không khí; 気 = khí",
      english: "空 = không khí; 気 = khí",
      type: "kanji",
      example: "空気"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d0790a33757c2428
    {
      japanese: "空",
      kana: "そら / sora",
      vietnamese: "KHÔNG — 空 = trời",
      english: "空 = trời",
      type: "kanji",
      example: "空"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 65a421aa1798fc5b
    {
      japanese: "空気",
      kana: "クウ / kuu",
      vietnamese: "KHÔNG — 空 = không; 気 = khí",
      english: "空 = không; 気 = khí",
      type: "kanji",
      example: "空気"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c7b2074175724668
    {
      japanese: "一つ",
      kana: "ひと.つ / hitotsu",
      vietnamese: "NHẤT — 一 = một",
      english: "一 = một",
      type: "kanji",
      example: "一つ"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 370c1562dc149591
    {
      japanese: "一倍",
      kana: "イチ / ichi",
      vietnamese: "NHẤT — 一 = một; 倍 = lần",
      english: "一 = một; 倍 = lần",
      type: "kanji",
      example: "一倍"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 72a7d25e24bf5377
    {
      japanese: "物",
      kana: "もの / mono",
      vietnamese: "VẬT — 物 = vật",
      english: "物 = vật",
      type: "kanji",
      example: "物"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | f1d66dccd214d32b
    {
      japanese: "洗濯物",
      kana: "もの / mono",
      vietnamese: "VẬT — 洗 = giặt; 濯 = giặt; 物 = đồ",
      english: "洗 = giặt; 濯 = giặt; 物 = đồ",
      type: "kanji",
      example: "洗濯物"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e697edb03852a736
    {
      japanese: "太い",
      kana: "ふと.い / futoi",
      vietnamese: "THÁI — 太 = to, dày",
      english: "太 = to, dày",
      type: "kanji",
      example: "太い"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5e90f21383a559b4
    {
      japanese: "太陽",
      kana: "タイ / tai",
      vietnamese: "THÁI — 太 = lớn; 陽 = mặt trời",
      english: "太 = lớn; 陽 = mặt trời",
      type: "kanji",
      example: "太陽"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8f29ce058191d579
    {
      japanese: "細い",
      kana: "ほそ.い / hosoi",
      vietnamese: "TẾ — 細 = nhỏ, mảnh",
      english: "細 = nhỏ, mảnh",
      type: "kanji",
      example: "細い"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 51344bb3d7a8cabc
    {
      japanese: "詳細",
      kana: "サイ / sai",
      vietnamese: "TẾ — 細 = nhỏ, chi tiết",
      english: "細 = nhỏ, chi tiết",
      type: "kanji",
      example: "詳細"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 383120a0c2b96a6d
    {
      japanese: "心",
      kana: "こころ / kokoro",
      vietnamese: "TÂM — 心 = lòng, tim",
      english: "心 = lòng, tim",
      type: "kanji",
      example: "心"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | eae61b1659dc7dcd
    {
      japanese: "安心",
      kana: "シン / shin",
      vietnamese: "TÂM — 安 = yên; 心 = lòng",
      english: "安 = yên; 心 = lòng",
      type: "kanji",
      example: "安心"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 13cbd2bebd224fab
    {
      japanese: "例えば",
      kana: "たと.えば / tatoeba",
      vietnamese: "LỆ — 例 = ví dụ",
      english: "例 = ví dụ",
      type: "kanji",
      example: "例えば"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 6cd48ed9129ed52b
    {
      japanese: "別れる",
      kana: "わか.れる / wakareru",
      vietnamese: "BIỆT — 別 = tách ra",
      english: "別 = tách ra",
      type: "kanji",
      example: "別れる"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8abce6dfe3a7a0b4
    {
      japanese: "特別",
      kana: "ベツ / betsu",
      vietnamese: "BIỆT — 特 = đặc biệt; 別 = khác",
      english: "特 = đặc biệt; 別 = khác",
      type: "kanji",
      example: "特別"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | af3581e48a966044
    {
      japanese: "悪い",
      kana: "わる.い / warui",
      vietnamese: "ÁC — 悪 = xấu",
      english: "悪 = xấu",
      type: "kanji",
      example: "悪い"
    },
    // source: review_tu_vung_bai_44.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 11db9988a8b50082
    {
      japanese: "最悪",
      kana: "アク / aku",
      vietnamese: "ÁC — 最 = nhất; 悪 = xấu",
      english: "最 = nhất; 悪 = xấu",
      type: "kanji",
      example: "最悪"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～ことにする',
      vietnamese: 'quyết định ~',
      english: 'to decide to do',
      type: 'main',
      explanation: 'Diễn tả quyết định chủ động của chính mình. Dùng với động từ (thể từ điển/ない) + ことにする. Nhấn mạnh ý chí và quyết định cá nhân. Phủ định: ～ないことにする (quyết định không làm).',
      examples: [
        {
          japanese: '日本に留学することにしました。',
          vietnamese: 'Tôi đã quyết định đi du học Nhật Bản.',
          english: 'I decided to study abroad in Japan.',
          type: 'main'
        },
        {
          japanese: '毎日運動することにしました。',
          vietnamese: 'Tôi đã quyết định tập thể dục mỗi ngày.',
          english: 'I decided to exercise every day.',
          type: 'main'
        },
        {
          japanese: 'タバコを吸わないことにしました。',
          vietnamese: 'Tôi đã quyết định không hút thuốc.',
          english: 'I decided not to smoke.',
          type: 'main'
        },
        {
          japanese: '会社を辞めることにしました。',
          vietnamese: 'Tôi đã quyết định nghỉ việc.',
          english: 'I decided to quit the company.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことになる',
      vietnamese: 'được quyết định ~, trở thành ~',
      english: 'to be decided, to turn out',
      type: 'main',
      explanation: 'Diễn tả quyết định khách quan hoặc do người khác đưa ra, hoặc tình huống tự nhiên diễn ra. Dùng với động từ (thể từ điển/ない) + ことになる. Không phải quyết định của bản thân. Phủ định: ～ないことになる.',
      examples: [
        {
          japanese: '来月から大阪で働くことになりました。',
          vietnamese: 'Từ tháng sau tôi sẽ làm việc ở Osaka. (Được quyết định)',
          english: 'It\'s been decided that I\'ll work in Osaka from next month.',
          type: 'main'
        },
        {
          japanese: '会議が中止になることになりました。',
          vietnamese: 'Cuộc họp đã được quyết định hủy bỏ.',
          english: 'It was decided that the meeting would be canceled.',
          type: 'main'
        },
        {
          japanese: '結婚しないことになりました。',
          vietnamese: 'Cuối cùng không kết hôn.',
          english: 'It turned out that we won\'t get married.',
          type: 'main'
        },
        {
          japanese: '試験の日が変わることになりました。',
          vietnamese: 'Ngày thi đã được thay đổi.',
          english: 'The exam date has been changed.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことにしている',
      vietnamese: 'thường làm ~, có thói quen ~',
      english: 'to make it a rule to do',
      type: 'main',
      explanation: 'Diễn tả thói quen hoặc quy tắc cá nhân đã được quyết định và duy trì. Là dạng tiếp diễn của ～ことにする. Nhấn mạnh việc thực hiện thường xuyên theo quyết định đã đưa ra.',
      examples: [
        {
          japanese: '毎朝ジョギングをすることにしています。',
          vietnamese: 'Tôi thường chạy bộ mỗi sáng.',
          english: 'I make it a rule to jog every morning.',
          type: 'main'
        },
        {
          japanese: '寝る前に本を読むことにしています。',
          vietnamese: 'Tôi thường đọc sách trước khi ngủ.',
          english: 'I make it a rule to read books before bed.',
          type: 'main'
        },
        {
          japanese: 'お酒を飲まないことにしています。',
          vietnamese: 'Tôi không uống rượu (theo quy tắc của mình).',
          english: 'I make it a rule not to drink alcohol.',
          type: 'main'
        },
        {
          japanese: '週末は必ず家族と過ごすことにしています。',
          vietnamese: 'Cuối tuần tôi nhất định dành thời gian với gia đình.',
          english: 'I make it a rule to spend weekends with my family.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ことになっている',
      vietnamese: 'được quy định ~, theo như ~',
      english: 'it is decided that, it is arranged that',
      type: 'main',
      explanation: 'Diễn tả quy định, lịch trình hoặc thỏa thuận đã được thiết lập. Là dạng tiếp diễn của ～ことになる. Dùng để nói về quy tắc, lịch trình hoặc thỏa thuận cố định.',
      examples: [
        {
          japanese: '授業は9時に始まることになっています。',
          vietnamese: 'Theo quy định thì lớp học bắt đầu lúc 9 giờ.',
          english: 'Classes are scheduled to start at 9 o\'clock.',
          type: 'main'
        },
        {
          japanese: 'ここでタバコを吸ってはいけないことになっています。',
          vietnamese: 'Theo quy định thì không được hút thuốc ở đây.',
          english: 'It\'s stipulated that smoking is not allowed here.',
          type: 'main'
        },
        {
          japanese: '来月結婚することになっています。',
          vietnamese: 'Theo dự định thì tháng sau tôi sẽ kết hôn.',
          english: 'It\'s arranged that I\'ll get married next month.',
          type: 'main'
        },
        {
          japanese: 'この書類は明日までに提出することになっています。',
          vietnamese: 'Theo quy định thì tài liệu này phải nộp trước ngày mai.',
          english: 'This document is to be submitted by tomorrow.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようと思う',
      vietnamese: 'định ~, nghĩ sẽ ~',
      english: 'to think of doing, to intend to',
      type: 'main',
      explanation: 'Diễn tả ý định hoặc kế hoạch của bản thân. Dùng với động từ thể ý chí (volitional) + と思う. Nhẹ nhàng hơn ～ことにする và có thể thay đổi.',
      examples: [
        {
          japanese: '明日早く起きようと思います。',
          vietnamese: 'Tôi định dậy sớm vào ngày mai.',
          english: 'I\'m thinking of getting up early tomorrow.',
          type: 'main'
        },
        {
          japanese: '日本語の勉強を続けようと思っています。',
          vietnamese: 'Tôi định tiếp tục học tiếng Nhật.',
          english: 'I\'m thinking of continuing to study Japanese.',
          type: 'main'
        },
        {
          japanese: '新しい仕事を探そうと思います。',
          vietnamese: 'Tôi định tìm việc mới.',
          english: 'I\'m thinking of looking for a new job.',
          type: 'main'
        },
        {
          japanese: '今日は早く帰ろうと思います。',
          vietnamese: 'Hôm nay tôi định về sớm.',
          english: 'I\'m thinking of going home early today.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようとする',
      vietnamese: 'cố gắng ~, sắp ~',
      english: 'to try to do, to be about to',
      type: 'additional',
      explanation: 'Diễn tả việc cố gắng làm điều gì hoặc hành động sắp xảy ra. Dùng với động từ thể ý chí (volitional) + とする. Có 2 nghĩa: 1) Cố gắng làm, 2) Sắp sửa làm.',
      examples: [
        {
          japanese: '彼は窓を開けようとしました。',
          vietnamese: 'Anh ấy đã cố gắng mở cửa sổ.',
          english: 'He tried to open the window.',
          type: 'main'
        },
        {
          japanese: '出かけようとしたとき、電話がかかってきました。',
          vietnamese: 'Khi sắp ra ngoài thì có điện thoại.',
          english: 'Just as I was about to go out, the phone rang.',
          type: 'main'
        },
        {
          japanese: '何度も説明しようとしましたが、分かってくれませんでした。',
          vietnamese: 'Tôi đã cố giải thích nhiều lần nhưng họ không hiểu.',
          english: 'I tried to explain many times but they didn\'t understand.',
          type: 'main'
        },
        {
          japanese: '雨が降ろうとしています。',
          vietnamese: 'Trời sắp mưa.',
          english: 'It\'s about to rain.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～つもりだ',
      vietnamese: 'định ~, có ý định ~',
      english: 'to intend to, to plan to',
      type: 'additional',
      explanation: 'Diễn tả ý định hoặc kế hoạch. Dùng với động từ (thể từ điển/ない) + つもりだ. Mạnh hơn ～ようと思う và yếu hơn ～ことにする. Phủ định: ～ないつもりだ (không có ý định).',
      examples: [
        {
          japanese: '来年日本に行くつもりです。',
          vietnamese: 'Năm sau tôi định đi Nhật.',
          english: 'I plan to go to Japan next year.',
          type: 'main'
        },
        {
          japanese: '今日は早く帰るつもりです。',
          vietnamese: 'Hôm nay tôi định về sớm.',
          english: 'I intend to go home early today.',
          type: 'main'
        },
        {
          japanese: 'もう二度とそんなことはしないつもりです。',
          vietnamese: 'Tôi không có ý định làm như vậy nữa.',
          english: 'I don\'t intend to do such a thing again.',
          type: 'main'
        },
        {
          japanese: '大学院に進学するつもりです。',
          vietnamese: 'Tôi có ý định học cao học.',
          english: 'I plan to go to graduate school.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～予定だ',
      vietnamese: 'dự định ~, theo kế hoạch ~',
      english: 'to be scheduled to, to plan to',
      type: 'additional',
      explanation: 'Diễn tả kế hoạch hoặc lịch trình đã được sắp xếp. Dùng với động từ (thể từ điển/ない) + 予定だ、hoặc Noun の予定だ. Mang tính xác định cao hơn つもり.',
      examples: [
        {
          japanese: '来月日本に行く予定です。',
          vietnamese: 'Tháng sau tôi dự định đi Nhật.',
          english: 'I\'m scheduled to go to Japan next month.',
          type: 'main'
        },
        {
          japanese: '会議は3時に終わる予定です。',
          vietnamese: 'Cuộc họp dự kiến kết thúc lúc 3 giờ.',
          english: 'The meeting is scheduled to end at 3 o\'clock.',
          type: 'main'
        },
        {
          japanese: '明日は雨の予定です。',
          vietnamese: 'Ngày mai dự báo sẽ mưa.',
          english: 'It\'s expected to rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '来週試験がある予定です。',
          vietnamese: 'Tuần sau có dự định thi.',
          english: 'There\'s a test scheduled for next week.',
          type: 'additional'
        }
      ]
    }
  ]
};

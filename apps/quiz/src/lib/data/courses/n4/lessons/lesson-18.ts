/**
 * N4 Core Lessons — Lesson 18: 副詞的表現 (Adverbial Expressions)
 * Focus: ~ように、~ために、purpose and manner expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_18_DATA: LessonData = {
  lessonNumber: 18,
  title: '副詞的表現 (Biểu thức trạng từ)',
  vocabulary: [
    // Main Vocabulary - Purpose & Goal
    {
      japanese: '目的',
      kana: 'もくてき',
      vietnamese: 'mục đích',
      english: 'purpose, goal',
      type: 'main',
      example: '旅行の目的は何ですか。'
    },
    {
      japanese: '目標',
      kana: 'もくひょう',
      vietnamese: 'mục tiêu',
      english: 'goal, target',
      type: 'main',
      example: '目標を達成しました。'
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
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'dự định',
      english: 'schedule, plan',
      type: 'main',
      example: '明日の予定は何ですか。'
    },
    {
      japanese: '希望',
      kana: 'きぼう',
      vietnamese: 'hy vọng',
      english: 'hope, wish',
      type: 'main',
      example: '合格することを希望します。'
    },
    {
      japanese: '願い',
      kana: 'ねがい',
      vietnamese: 'mong muốn',
      english: 'wish, desire',
      type: 'main',
      example: '願いが叶いました。'
    },
    {
      japanese: '夢',
      kana: 'ゆめ',
      vietnamese: 'giấc mơ',
      english: 'dream',
      type: 'main',
      example: '夢を実現したいです。'
    },
    {
      japanese: '将来',
      kana: 'しょうらい',
      vietnamese: 'tương lai',
      english: 'future',
      type: 'main',
      example: '将来、医者になりたいです。'
    },
    {
      japanese: '進路',
      kana: 'しんろ',
      vietnamese: 'con đường',
      english: 'course, path',
      type: 'main',
      example: '進路について考えています。'
    },
    {
      japanese: '成功',
      kana: 'せいこう',
      vietnamese: 'thành công',
      english: 'success',
      type: 'main',
      example: 'プロジェクトが成功しました。'
    },

    // Main Vocabulary - Manner & Method
    {
      japanese: '方法',
      kana: 'ほうほう',
      vietnamese: 'phương pháp',
      english: 'method, way',
      type: 'main',
      example: 'いい方法を考えましょう。'
    },
    {
      japanese: '方式',
      kana: 'ほうしき',
      vietnamese: 'phương thức',
      english: 'form, method',
      type: 'main',
      example: '新しい方式を導入します。'
    },
    {
      japanese: '手段',
      kana: 'しゅだん',
      vietnamese: 'thủ đoạn, phương tiện',
      english: 'means, measure',
      type: 'main',
      example: '連絡の手段がありません。'
    },
    {
      japanese: '様子',
      kana: 'ようす',
      vietnamese: 'tình trạng, dáng vẻ',
      english: 'appearance, situation',
      type: 'main',
      example: '様子を見に行きます。'
    },
    {
      japanese: '状態',
      kana: 'じょうたい',
      vietnamese: 'trạng thái',
      english: 'state, condition',
      type: 'main',
      example: '健康な状態を保ちます。'
    },
    {
      japanese: '形',
      kana: 'かたち',
      vietnamese: 'hình dạng',
      english: 'shape, form',
      type: 'main',
      example: 'いろいろな形があります。'
    },
    {
      japanese: 'やり方',
      kana: 'やりかた',
      vietnamese: 'cách làm',
      english: 'way of doing',
      type: 'main',
      example: 'やり方を教えてください。'
    },
    {
      japanese: '仕方',
      kana: 'しかた',
      vietnamese: 'cách thức',
      english: 'way, method',
      type: 'main',
      example: '仕方がありません。'
    },
    {
      japanese: '手順',
      kana: 'てじゅん',
      vietnamese: 'thủ tục, quy trình',
      english: 'procedure',
      type: 'main',
      example: '手順を確認してください。'
    },
    {
      japanese: '過程',
      kana: 'かてい',
      vietnamese: 'quá trình',
      english: 'process',
      type: 'main',
      example: '過程が大切です。'
    },

    // Main Vocabulary - Actions & Results
    {
      japanese: '努力',
      kana: 'どりょく',
      vietnamese: 'nỗ lực',
      english: 'effort',
      type: 'main',
      example: '努力すれば必ず成功します。'
    },
    {
      japanese: '実現',
      kana: 'じつげん',
      vietnamese: 'thực hiện',
      english: 'realization',
      type: 'main',
      example: '夢を実現しました。'
    },
    {
      japanese: '達成',
      kana: 'たっせい',
      vietnamese: 'đạt được',
      english: 'achievement',
      type: 'main',
      example: '目標を達成しました。'
    },
    {
      japanese: '完成',
      kana: 'かんせい',
      vietnamese: 'hoàn thành',
      english: 'completion',
      type: 'main',
      example: '作品が完成しました。'
    },
    {
      japanese: '実行',
      kana: 'じっこう',
      vietnamese: 'thực hiện',
      english: 'execution',
      type: 'main',
      example: '計画を実行します。'
    },
    {
      japanese: '実施',
      kana: 'じっし',
      vietnamese: 'thực thi',
      english: 'implementation',
      type: 'main',
      example: '試験を実施します。'
    },
    {
      japanese: '遂行',
      kana: 'すいこう',
      vietnamese: 'hoàn thành (nhiệm vụ)',
      english: 'accomplishment',
      type: 'main',
      example: '任務を遂行しました。'
    },
    {
      japanese: '改善',
      kana: 'かいぜん',
      vietnamese: 'cải thiện',
      english: 'improvement',
      type: 'main',
      example: '問題を改善します。'
    },
    {
      japanese: '向上',
      kana: 'こうじょう',
      vietnamese: 'nâng cao',
      english: 'improvement, progress',
      type: 'main',
      example: '能力の向上を目指します。'
    },
    {
      japanese: '進歩',
      kana: 'しんぽ',
      vietnamese: 'tiến bộ',
      english: 'progress',
      type: 'main',
      example: '技術が進歩しました。'
    },

    // Additional Vocabulary - Verbs
    {
      japanese: '目指す',
      kana: 'めざす',
      vietnamese: 'hướng tới',
      english: 'to aim for',
      type: 'additional',
      example: '優勝を目指しています。'
    },
    {
      japanese: '目立つ',
      kana: 'めだつ',
      vietnamese: 'nổi bật',
      english: 'to stand out',
      type: 'additional',
      example: '赤い服が目立ちます。'
    },
    {
      japanese: '叶う',
      kana: 'かなう',
      vietnamese: 'thành hiện thực',
      english: 'to come true',
      type: 'additional',
      example: '願いが叶いました。'
    },
    {
      japanese: '果たす',
      kana: 'はたす',
      vietnamese: 'hoàn thành, thực hiện',
      english: 'to accomplish',
      type: 'additional',
      example: '約束を果たしました。'
    },
    {
      japanese: '遂げる',
      kana: 'とげる',
      vietnamese: 'đạt được',
      english: 'to achieve',
      type: 'additional',
      example: '目的を遂げました。'
    },
    {
      japanese: '成し遂げる',
      kana: 'なしとげる',
      vietnamese: 'hoàn thành',
      english: 'to accomplish',
      type: 'additional',
      example: '仕事を成し遂げました。'
    },
    {
      japanese: '取り組む',
      kana: 'とりくむ',
      vietnamese: 'tham gia, đối phó',
      english: 'to tackle, to work on',
      type: 'additional',
      example: '問題に取り組みます。'
    },
    {
      japanese: '励む',
      kana: 'はげむ',
      vietnamese: 'nỗ lực, cố gắng',
      english: 'to strive, to work hard',
      type: 'additional',
      example: '勉強に励んでいます。'
    },
    {
      japanese: '挑戦する',
      kana: 'ちょうせんする',
      vietnamese: 'thách thức',
      english: 'to challenge',
      type: 'additional',
      example: '新しいことに挑戦します。'
    },
    {
      japanese: '試みる',
      kana: 'こころみる',
      vietnamese: 'thử',
      english: 'to attempt, to try',
      type: 'additional',
      example: '新しい方法を試みます。'
    },

    // Additional Vocabulary - More Actions
    {
      japanese: '頑張る',
      kana: 'がんばる',
      vietnamese: 'cố gắng',
      english: 'to do one\'s best',
      type: 'additional',
      example: '試験に向けて頑張ります。'
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
      japanese: '乗り越える',
      kana: 'のりこえる',
      vietnamese: 'vượt qua',
      english: 'to overcome',
      type: 'additional',
      example: '困難を乗り越えました。'
    },
    {
      japanese: '克服する',
      kana: 'こくふくする',
      vietnamese: 'khắc phục',
      english: 'to overcome',
      type: 'additional',
      example: '弱点を克服しました。'
    },
    {
      japanese: '追求する',
      kana: 'ついきゅうする',
      vietnamese: 'theo đuổi',
      english: 'to pursue',
      type: 'additional',
      example: '夢を追求します。'
    },
    {
      japanese: '実現する',
      kana: 'じつげんする',
      vietnamese: 'thực hiện',
      english: 'to realize',
      type: 'additional',
      example: '計画を実現します。'
    },
    {
      japanese: '達成する',
      kana: 'たっせいする',
      vietnamese: 'đạt được',
      english: 'to achieve',
      type: 'additional',
      example: '目標を達成しました。'
    },
    {
      japanese: '実践する',
      kana: 'じっせんする',
      vietnamese: 'thực hành',
      english: 'to practice',
      type: 'additional',
      example: '学んだことを実践します。'
    },
    {
      japanese: '応用する',
      kana: 'おうようする',
      vietnamese: 'ứng dụng',
      english: 'to apply',
      type: 'additional',
      example: '知識を応用します。'
    },
    {
      japanese: '活用する',
      kana: 'かつようする',
      vietnamese: 'tận dụng',
      english: 'to make use of',
      type: 'additional',
      example: '時間を活用します。'
    },

    // Supplementary Vocabulary - Adverbs
    {
      japanese: 'わざと',
      kana: 'わざと',
      vietnamese: 'cố ý',
      english: 'on purpose',
      type: 'supplementary',
      example: 'わざとやったんですか。'
    },
    {
      japanese: 'わざわざ',
      kana: 'わざわざ',
      vietnamese: 'đặc biệt, cố công',
      english: 'expressly, specially',
      type: 'supplementary',
      example: 'わざわざありがとうございます。'
    },
    {
      japanese: 'せっかく',
      kana: 'せっかく',
      vietnamese: 'công phu, hiếm có',
      english: 'with trouble, specially',
      type: 'supplementary',
      example: 'せっかく来たのに会えませんでした。'
    },
    {
      japanese: 'できるだけ',
      kana: 'できるだけ',
      vietnamese: 'càng nhiều càng tốt',
      english: 'as much as possible',
      type: 'supplementary',
      example: 'できるだけ早く来てください。'
    },
    {
      japanese: 'なるべく',
      kana: 'なるべく',
      vietnamese: 'càng... càng tốt',
      english: 'as... as possible',
      type: 'supplementary',
      example: 'なるべく安いものを買います。'
    },
    {
      japanese: 'なかなか',
      kana: 'なかなか',
      vietnamese: 'khá, mãi mà không',
      english: 'quite, not easily',
      type: 'supplementary',
      example: 'なかなか難しいです。'
    },
    {
      japanese: 'まるで',
      kana: 'まるで',
      vietnamese: 'giống như',
      english: 'just like, as if',
      type: 'supplementary',
      example: 'まるで夢のようです。'
    },
    {
      japanese: 'あたかも',
      kana: 'あたかも',
      vietnamese: 'như thể',
      english: 'as if, as though',
      type: 'supplementary',
      example: 'あたかも本当のようです。'
    },
    {
      japanese: 'まさか',
      kana: 'まさか',
      vietnamese: 'không lẽ',
      english: 'surely not',
      type: 'supplementary',
      example: 'まさか失敗するとは思いませんでした。'
    },
    {
      japanese: 'やっぱり',
      kana: 'やっぱり',
      vietnamese: 'quả nhiên',
      english: 'as expected',
      type: 'supplementary',
      example: 'やっぱり難しかったです。'
    },

    // Supplementary Vocabulary - Time & Manner Expressions
    {
      japanese: 'ついに',
      kana: 'ついに',
      vietnamese: 'cuối cùng',
      english: 'finally, at last',
      type: 'supplementary',
      example: 'ついに完成しました。'
    },
    {
      japanese: 'とうとう',
      kana: 'とうとう',
      vietnamese: 'cuối cùng',
      english: 'finally, at last',
      type: 'supplementary',
      example: 'とうとう雨が降りました。'
    },
    {
      japanese: 'やっと',
      kana: 'やっと',
      vietnamese: 'cuối cùng (sau khi chờ đợi)',
      english: 'finally, at last',
      type: 'supplementary',
      example: 'やっと終わりました。'
    },
    {
      japanese: 'ようやく',
      kana: 'ようやく',
      vietnamese: 'cuối cùng (sau nhiều nỗ lực)',
      english: 'finally, at last',
      type: 'supplementary',
      example: 'ようやく分かりました。'
    },
    {
      japanese: 'いきなり',
      kana: 'いきなり',
      vietnamese: 'đột ngột',
      english: 'suddenly, abruptly',
      type: 'supplementary',
      example: 'いきなり雨が降りました。'
    },
    {
      japanese: '急に',
      kana: 'きゅうに',
      vietnamese: 'đột nhiên',
      english: 'suddenly',
      type: 'supplementary',
      example: '急に寒くなりました。'
    },
    {
      japanese: 'ゆっくり',
      kana: 'ゆっくり',
      vietnamese: 'chậm rãi',
      english: 'slowly',
      type: 'supplementary',
      example: 'ゆっくり話してください。'
    },
    {
      japanese: 'はっきり',
      kana: 'はっきり',
      vietnamese: 'rõ ràng',
      english: 'clearly',
      type: 'supplementary',
      example: 'はっきり言ってください。'
    },
    {
      japanese: 'しっかり',
      kana: 'しっかり',
      vietnamese: 'chắc chắn, vững vàng',
      english: 'firmly, tightly',
      type: 'supplementary',
      example: 'しっかり勉強してください。'
    },
    {
      japanese: 'ちゃんと',
      kana: 'ちゃんと',
      vietnamese: 'đúng cách',
      english: 'properly',
      type: 'supplementary',
      example: 'ちゃんと準備してください。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | d8b3868b999e69e6
    {
      japanese: "増えます",
      kana: "ふえます",
      vietnamese: "tăng, tăng lên",
      english: "tăng, tăng lên",
      type: "main",
      example: "輸出が増えます。\nYushutsu ga fuemasu.\nXuất khẩu tăng."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 27b9c07534ab3c49
    {
      japanese: "減ります",
      kana: "へります",
      vietnamese: "giảm, giảm xuống",
      english: "giảm, giảm xuống",
      type: "main",
      example: "輸出が減ります。\nYushutsu ga herimasu.\nXuất khẩu giảm."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 720eebaf8b9a916e
    {
      japanese: "上がります",
      kana: "あがります",
      vietnamese: "tăng lên, đi lên",
      english: "tăng lên, đi lên",
      type: "main",
      example: "値段が上がりました。\nNedan ga agarimashita.\nGiá đã tăng."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | b3662bb8026f1e7a
    {
      japanese: "下がります",
      kana: "さがります",
      vietnamese: "giảm xuống, đi xuống",
      english: "giảm xuống, đi xuống",
      type: "main",
      example: "値段が下がりました。\nNedan ga sagarimashita.\nGiá đã giảm."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | edff2a7487254faf
    {
      japanese: "切れます",
      kana: "きれます",
      vietnamese: "đứt, bị cắt, hết hạn",
      english: "đứt, bị cắt, hết hạn",
      type: "main",
      example: "ひもが切れました。\nHimo ga kiremashita.\nSợi dây đã bị đứt."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 7857068b936a0a39
    {
      japanese: "とれます",
      kana: "とれます",
      vietnamese: "tuột, rơi ra, lấy được",
      english: "tuột, rơi ra, lấy được",
      type: "main",
      example: "ボタンがとれました。\nBotan ga toremashita.\nCái cúc áo bị tuột."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 22ca50c6d6df375f
    {
      japanese: "落ちます",
      kana: "おちます",
      vietnamese: "rơi, rớt",
      english: "rơi, rớt",
      type: "main",
      example: "荷物が落ちました。\nNimotsu ga ochimashita.\nHành lý đã bị rơi."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 3737036f7b723a34
    {
      japanese: "なくなります",
      kana: "なくなります",
      vietnamese: "mất, hết, không còn",
      english: "mất, hết, không còn",
      type: "main",
      example: "ガソリンがなくなりました。\nGasorin ga nakunarimashita.\nXăng đã hết."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 3992cb65d4b5aaad
    {
      japanese: "変な",
      kana: "へんな",
      vietnamese: "lạ, kỳ quặc",
      english: "lạ, kỳ quặc",
      type: "main",
      example: "変な音がします。\nHen na oto ga shimasu.\nCó âm thanh kỳ lạ."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 1ddb06fd6b980919
    {
      japanese: "幸せな",
      kana: "しあわせな",
      vietnamese: "hạnh phúc",
      english: "hạnh phúc",
      type: "main",
      example: "幸せな生活をしています。\nShiawase na seikatsu o shite imasu.\nTôi đang có cuộc sống hạnh phúc."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 33060d85c68e7bb4
    {
      japanese: "楽な",
      kana: "らくな",
      vietnamese: "thoải mái, nhàn, dễ dàng",
      english: "thoải mái, nhàn, dễ dàng",
      type: "main",
      example: "この仕事は楽です。\nKono shigoto wa raku desu.\nCông việc này nhàn."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 0fca541f5bbe7a42
    {
      japanese: "うまい",
      kana: "うまい",
      vietnamese: "ngon, giỏi; cách nói thân mật",
      english: "ngon, giỏi; cách nói thân mật",
      type: "main",
      example: "このラーメンはうまいです。\nKono raamen wa umai desu.\nMì ramen này ngon."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 90a359809e2e730f
    {
      japanese: "まずい",
      kana: "まずい",
      vietnamese: "dở, không ngon; không ổn",
      english: "dở, không ngon; không ổn",
      type: "main",
      example: "この料理はまずいです。\nKono ryouri wa mazui desu.\nMón ăn này dở."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | f18e71b8870d379a
    {
      japanese: "つまらない",
      kana: "つまらない",
      vietnamese: "buồn tẻ, không thú vị",
      english: "buồn tẻ, không thú vị",
      type: "main",
      example: "この映画はつまらないです。\nKono eiga wa tsumaranai desu.\nBộ phim này chán."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 59c7060c8c96976e
    {
      japanese: "優しい",
      kana: "やさしい",
      vietnamese: "hiền lành, dịu dàng, tốt bụng",
      english: "hiền lành, dịu dàng, tốt bụng",
      type: "main",
      example: "先生は優しいです。\nSensei wa yasashii desu.\nThầy/cô giáo rất hiền."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 5688b31db50a0816
    {
      japanese: "ガソリン",
      kana: "ガソリン",
      vietnamese: "xăng",
      english: "xăng",
      type: "main",
      example: "ガソリンを入れます。\nGasorin o iremasu.\nTôi đổ xăng."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | 593c7e9eac488604
    {
      japanese: "火",
      kana: "ひ",
      vietnamese: "lửa",
      english: "lửa",
      type: "main",
      example: "火を消してください。\nHi o keshite kudasai.\nHãy dập lửa."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | da0cd089486eb4ee
    {
      japanese: "パンフレット",
      kana: "パンフレット",
      vietnamese: "tờ rơi, tờ quảng cáo",
      english: "tờ rơi, tờ quảng cáo",
      type: "main",
      example: "パンフレットをもらいました。\nPanfuretto o moraimashita.\nTôi đã nhận tờ quảng cáo."
    },
    // source: review_tu_vung_bai_43.md | 1. Từ vựng chính | a8aa0b7368ce74ea
    {
      japanese: "今にも",
      kana: "いまにも",
      vietnamese: "có vẻ sắp, như thể sắp",
      english: "có vẻ sắp, như thể sắp",
      type: "main",
      example: "今にも雨が降りそうです。\nIma ni mo ame ga furisou desu.\nTrời có vẻ sắp mưa tới nơi."
    },
    // source: review_tu_vung_bai_43.md | 2. Từ vựng hội thoại | 939a2f1b80baa2a4
    {
      japanese: "わあ",
      kana: "わあ",
      vietnamese: "ôi!, wow!; dùng khi ngạc nhiên hoặc cảm thán",
      english: "ôi!, wow!; dùng khi ngạc nhiên hoặc cảm thán",
      type: "supplementary",
      example: "わあ、きれいですね。\nWaa, kirei desu ne.\nÔi, đẹp quá nhỉ."
    },
    // source: review_tu_vung_bai_43.md | 3. Từ vựng đọc hiểu | 76f05ea40d056298
    {
      japanese: "ばら",
      kana: "ばら",
      vietnamese: "hoa hồng",
      english: "hoa hồng",
      type: "supplementary",
      example: "ばらを買いました。\nBara o kaimashita.\nTôi đã mua hoa hồng."
    },
    // source: review_tu_vung_bai_43.md | 3. Từ vựng đọc hiểu | 458f457ba8f2329a
    {
      japanese: "ドライブ",
      kana: "ドライブ",
      vietnamese: "lái xe đi chơi",
      english: "lái xe đi chơi",
      type: "supplementary",
      example: "週末、ドライブに行きます。\nShuumatsu, doraibu ni ikimasu.\nCuối tuần tôi đi lái xe chơi."
    },
    // source: review_tu_vung_bai_43.md | 3. Từ vựng đọc hiểu | ea268bde459888a9
    {
      japanese: "理由",
      kana: "りゆう",
      vietnamese: "lý do",
      english: "lý do",
      type: "supplementary",
      example: "理由を説明します。\nRiyuu o setsumei shimasu.\nTôi giải thích lý do."
    },
    // source: review_tu_vung_bai_43.md | 3. Từ vựng đọc hiểu | 8ba4b47d3534e135
    {
      japanese: "謝ります",
      kana: "あやまります",
      vietnamese: "xin lỗi, tạ lỗi",
      english: "xin lỗi, tạ lỗi",
      type: "supplementary",
      example: "友達に謝りました。\nTomodachi ni ayamarimashita.\nTôi đã xin lỗi bạn."
    },
    // source: review_tu_vung_bai_43.md | 3. Từ vựng đọc hiểu | c4c68c7943d7a5c6
    {
      japanese: "知り合います",
      kana: "しりあいます",
      vietnamese: "quen biết, làm quen",
      english: "quen biết, làm quen",
      type: "supplementary",
      example: "パーティーで彼と知り合いました。\nPaatii de kare to shiriai mashita.\nTôi đã quen anh ấy ở bữa tiệc."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 0b1852f35a29acf0
    {
      japanese: "輸出が増えます",
      kana: "輸出が増えます",
      vietnamese: "xuất khẩu tăng",
      english: "xuất khẩu tăng",
      type: "supplementary",
      example: "増えます / fuemasu thường đi với số lượng, dân số, lượng hàng, xuất khẩu."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | f3cf00816ee70c74
    {
      japanese: "輸出が減ります",
      kana: "輸出が減ります",
      vietnamese: "xuất khẩu giảm",
      english: "xuất khẩu giảm",
      type: "supplementary",
      example: "減ります / herimasu là giảm về số lượng hoặc lượng."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | b733432ba9b0b6c8
    {
      japanese: "値段が上がります",
      kana: "値段が上がります",
      vietnamese: "giá tăng",
      english: "giá tăng",
      type: "supplementary",
      example: "上がります / agarimasu dùng với giá, nhiệt độ, mức độ."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 138e9e9c74b50b37
    {
      japanese: "値段が下がります",
      kana: "値段が下がります",
      vietnamese: "giá giảm",
      english: "giá giảm",
      type: "supplementary",
      example: "下がります / sagarimasu dùng với giá, nhiệt độ, mức độ."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 03a01fffc3add456
    {
      japanese: "ひもが切れます",
      kana: "ひもが切れます",
      vietnamese: "dây bị đứt",
      english: "dây bị đứt",
      type: "supplementary",
      example: "Tự động từ: dây tự bị đứt, không nhấn mạnh ai cắt."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 171899c8b3451c88
    {
      japanese: "ボタンがとれます",
      kana: "ボタンがとれます",
      vietnamese: "cúc bị tuột",
      english: "cúc bị tuột",
      type: "supplementary",
      example: "とれます / toremasu là bị rời ra, tuột ra."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 9d1a70ad960c6564
    {
      japanese: "荷物が落ちます",
      kana: "荷物が落ちます",
      vietnamese: "hành lý bị rơi",
      english: "hành lý bị rơi",
      type: "supplementary",
      example: "落ちます / ochimasu là tự rơi, rớt xuống."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 5a8e1a439126ff5b
    {
      japanese: "ガソリンがなくなります",
      kana: "ガソリンがなくなります",
      vietnamese: "xăng hết",
      english: "xăng hết",
      type: "supplementary",
      example: "Dùng khi một thứ không còn nữa."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | cb0d2724ee722d80
    {
      japanese: "今にも〜そうです",
      kana: "今にも〜そうです",
      vietnamese: "trông như sắp... tới nơi",
      english: "trông như sắp... tới nơi",
      type: "supplementary",
      example: "Nhấn mạnh cảm giác sự việc sắp xảy ra ngay."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | ddba5396a661a8db
    {
      japanese: "友達に謝ります",
      kana: "友達に謝ります",
      vietnamese: "xin lỗi bạn",
      english: "xin lỗi bạn",
      type: "supplementary",
      example: "Người nhận lời xin lỗi đi với に / ni."
    },
    // source: review_tu_vung_bai_43.md | 4. Cụm cần nhớ | 45aba0cb346a0997
    {
      japanese: "人と知り合います",
      kana: "人と知り合います",
      vietnamese: "quen biết ai",
      english: "quen biết ai",
      type: "supplementary",
      example: "Người mình làm quen đi với と / to."
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 452bf3405ce7bc0c
    {
      japanese: "出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — ra, đưa ra",
      english: "ra, đưa ra",
      type: "kanji",
      example: "輸出 / yushutsu"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 8864302f46d81d56
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — trên, tăng lên",
      english: "trên, tăng lên",
      type: "kanji",
      example: "上がります / agarimasu"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 42c4cfeacc960ded
    {
      japanese: "下",
      kana: "カ / ka, ゲ / ge",
      vietnamese: "Hạ — dưới, giảm xuống",
      english: "dưới, giảm xuống",
      type: "kanji",
      example: "下がります / sagarimasu"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 50e0bb6a379e1cf7
    {
      japanese: "切",
      kana: "セツ / setsu",
      vietnamese: "Thiết — cắt, đứt",
      english: "cắt, đứt",
      type: "kanji",
      example: "切れます / kiremasu"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | dce459fd68e46251
    {
      japanese: "変",
      kana: "ヘン / hen",
      vietnamese: "Biến — thay đổi, lạ",
      english: "thay đổi, lạ",
      type: "kanji",
      example: "変な / hen na"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | f58b0f7a2c5846ad
    {
      japanese: "楽",
      kana: "ガク / gaku, ラク / raku",
      vietnamese: "Lạc / Nhạc — vui, thoải mái, âm nhạc",
      english: "vui, thoải mái, âm nhạc",
      type: "kanji",
      example: "楽な / raku na"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 8e661b0bdb3ae0b8
    {
      japanese: "火",
      kana: "カ / ka",
      vietnamese: "Hỏa — lửa",
      english: "lửa",
      type: "kanji",
      example: "火 / hi"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 9578f990d626c869
    {
      japanese: "今",
      kana: "コン / kon, キン / kin",
      vietnamese: "Kim — bây giờ, hiện tại",
      english: "bây giờ, hiện tại",
      type: "kanji",
      example: "今にも / ima ni mo"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | 148c08b3aefbe84f
    {
      japanese: "知",
      kana: "チ / chi",
      vietnamese: "Tri — biết",
      english: "biết",
      type: "kanji",
      example: "知り合います / shiriai masu"
    },
    // source: review_tu_vung_bai_43.md | 5. Kanji N5–N4 cần học kỹ | a56de78a58e6823c
    {
      japanese: "合",
      kana: "ゴウ / gou, ガッ / ga",
      vietnamese: "Hợp — hợp, gặp, khớp",
      english: "hợp, gặp, khớp",
      type: "kanji",
      example: "知り合います / shiriai masu"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | e7dca6e74b6b0224
    {
      japanese: "輸出",
      kana: "シュツ / shutsu",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "輸出"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 35e40bead40408d4
    {
      japanese: "出る",
      kana: "で.る / deru",
      vietnamese: "Xuất — 出 = ra",
      english: "出 = ra",
      type: "kanji",
      example: "出る"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 36217c266a7223c0
    {
      japanese: "上手",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 上 = trên, tăng",
      english: "上 = trên, tăng",
      type: "kanji",
      example: "上手"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 7077fc2fb806faf4
    {
      japanese: "上がる",
      kana: "あ.がる / agaru",
      vietnamese: "Thượng — 上 = tăng lên",
      english: "上 = tăng lên",
      type: "kanji",
      example: "上がる"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 9c99b3b3314b3509
    {
      japanese: "以下",
      kana: "カ / ka",
      vietnamese: "Hạ — 下 = dưới, giảm",
      english: "下 = dưới, giảm",
      type: "kanji",
      example: "以下"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 37a1325e53ff058a
    {
      japanese: "下がる",
      kana: "さ.がる / sagaru",
      vietnamese: "Hạ — 下 = giảm xuống",
      english: "下 = giảm xuống",
      type: "kanji",
      example: "下がる"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c02f89ef0e41efe3
    {
      japanese: "大切",
      kana: "セツ / setsu",
      vietnamese: "Thiết — 切 = cắt, đứt",
      english: "切 = cắt, đứt",
      type: "kanji",
      example: "大切"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 06b606383c642a25
    {
      japanese: "切れる",
      kana: "き.れる / kireru",
      vietnamese: "Thiết — 切 = đứt",
      english: "切 = đứt",
      type: "kanji",
      example: "切れる"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 95202c4dd645b6ed
    {
      japanese: "変化",
      kana: "ヘン / hen",
      vietnamese: "Biến — 変 = lạ, thay đổi",
      english: "変 = lạ, thay đổi",
      type: "kanji",
      example: "変化"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | accaf6be55391d18
    {
      japanese: "変わる",
      kana: "か.わる / kawaru",
      vietnamese: "Biến — 変 = thay đổi",
      english: "変 = thay đổi",
      type: "kanji",
      example: "変わる"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | af059c87ba41f480
    {
      japanese: "音楽",
      kana: "ガク / gaku",
      vietnamese: "Lạc / Nhạc — 楽 = âm nhạc, vui",
      english: "楽 = âm nhạc, vui",
      type: "kanji",
      example: "音楽"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4722d7381df1720f
    {
      japanese: "楽しい",
      kana: "たの.しい / tanoshii",
      vietnamese: "Lạc / Nhạc — 楽 = vui",
      english: "楽 = vui",
      type: "kanji",
      example: "楽しい"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 207a32218450837e
    {
      japanese: "火曜日",
      kana: "カ / ka",
      vietnamese: "Hỏa — 火 = lửa",
      english: "火 = lửa",
      type: "kanji",
      example: "火曜日"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 043e947304d32fc2
    {
      japanese: "火",
      kana: "ひ / hi",
      vietnamese: "Hỏa — 火 = lửa",
      english: "火 = lửa",
      type: "kanji",
      example: "火"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | af2ab5a5035e61fb
    {
      japanese: "今週",
      kana: "コン / kon",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今週"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ca606b1c1385af7e
    {
      japanese: "今",
      kana: "いま / ima",
      vietnamese: "Kim — 今 = bây giờ",
      english: "今 = bây giờ",
      type: "kanji",
      example: "今"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | dd5cc859f04c09ba
    {
      japanese: "知識",
      kana: "チ / chi",
      vietnamese: "Tri — 知 = biết",
      english: "知 = biết",
      type: "kanji",
      example: "知識"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d69b723ad6cab02e
    {
      japanese: "知る",
      kana: "し.る / shiru",
      vietnamese: "Tri — 知 = biết",
      english: "知 = biết",
      type: "kanji",
      example: "知る"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 824468b16698277a
    {
      japanese: "合格",
      kana: "ゴウ / gou",
      vietnamese: "Hợp — 合 = hợp, khớp",
      english: "合 = hợp, khớp",
      type: "kanji",
      example: "合格"
    },
    // source: review_tu_vung_bai_43.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5273aa0154d5ebe3
    {
      japanese: "合う",
      kana: "あ.う / au",
      vietnamese: "Hợp — 合 = hợp, gặp",
      english: "合 = hợp, gặp",
      type: "kanji",
      example: "合う"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～ように',
      vietnamese: 'để ~, sao cho ~',
      english: 'so that, in order to',
      type: 'main',
      explanation: 'Diễn tả mục đích hoặc cách thức. Dùng với động từ (thể thường) + ように. Khi chỉ mục đích, thường đi với động từ có thể/khả năng (できる、分かる) hoặc động từ trạng thái. Khác với ために vì không dùng với động từ ý chí.',
      examples: [
        {
          japanese: '毎日練習しているので、上手になるようになりました。',
          vietnamese: 'Vì luyện tập mỗi ngày nên đã trở nên giỏi.',
          english: 'I practice every day so I\'ve become good at it.',
          type: 'main'
        },
        {
          japanese: '日本語が話せるように勉強しています。',
          vietnamese: 'Tôi đang học để có thể nói tiếng Nhật.',
          english: 'I\'m studying to be able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: '忘れないようにメモします。',
          vietnamese: 'Tôi ghi chép để không quên.',
          english: 'I take notes so I don\'t forget.',
          type: 'main'
        },
        {
          japanese: '先生が分かるように説明しました。',
          vietnamese: 'Tôi đã giải thích để giáo viên hiểu.',
          english: 'I explained so that the teacher would understand.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ために',
      vietnamese: 'để ~, vì ~',
      english: 'for, in order to, because of',
      type: 'main',
      explanation: 'Có 2 cách dùng: 1) Chỉ mục đích (dùng với động từ dạng từ điển): "để ~". 2) Chỉ nguyên nhân/lý do (dùng với danh từの hoặc động từ thể た): "vì ~". Khác với ように vì có thể dùng với động từ ý chí.',
      examples: [
        {
          japanese: '日本に留学するために、日本語を勉強しています。',
          vietnamese: 'Tôi học tiếng Nhật để đi du học Nhật Bản.',
          english: 'I\'m studying Japanese in order to study abroad in Japan.',
          type: 'main'
        },
        {
          japanese: '健康のために、毎日運動します。',
          vietnamese: 'Vì sức khỏe, tôi tập thể dục mỗi ngày.',
          english: 'I exercise every day for my health.',
          type: 'main'
        },
        {
          japanese: '事故のために、電車が遅れました。',
          vietnamese: 'Vì tai nạn nên tàu điện bị trễ.',
          english: 'The train was delayed because of an accident.',
          type: 'main'
        },
        {
          japanese: '試験に合格するために、一生懸命勉強しました。',
          vietnamese: 'Tôi đã học hành chăm chỉ để đỗ kỳ thi.',
          english: 'I studied hard in order to pass the exam.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようになる',
      vietnamese: 'trở nên ~, bắt đầu ~',
      english: 'to become, to come to',
      type: 'main',
      explanation: 'Diễn tả sự thay đổi hoặc hình thành khả năng/thói quen. Dùng với động từ (thể thường) + ようになる. Chỉ sự thay đổi tự nhiên hoặc kết quả của quá trình.',
      examples: [
        {
          japanese: '日本語が話せるようになりました。',
          vietnamese: 'Tôi đã có thể nói tiếng Nhật được.',
          english: 'I\'ve become able to speak Japanese.',
          type: 'main'
        },
        {
          japanese: '最近早く起きるようになりました。',
          vietnamese: 'Gần đây tôi bắt đầu dậy sớm.',
          english: 'I\'ve started waking up early recently.',
          type: 'main'
        },
        {
          japanese: '野菜を食べるようになりました。',
          vietnamese: 'Tôi đã bắt đầu ăn rau.',
          english: 'I\'ve started eating vegetables.',
          type: 'main'
        },
        {
          japanese: '日本の生活に慣れて、楽しくなるようになりました。',
          vietnamese: 'Quen với cuộc sống Nhật Bản rồi nên đã trở nên vui.',
          english: 'I got used to life in Japan and it became fun.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ようにする',
      vietnamese: 'cố gắng ~, làm sao để ~',
      english: 'to make sure to, to try to',
      type: 'main',
      explanation: 'Diễn tả sự cố gắng có ý thức để tạo ra một tình trạng hoặc thói quen. Dùng với động từ (thể thường) + ようにする. Nhấn mạnh ý chí và hành động chủ động.',
      examples: [
        {
          japanese: '毎日運動するようにしています。',
          vietnamese: 'Tôi cố gắng tập thể dục mỗi ngày.',
          english: 'I make it a point to exercise every day.',
          type: 'main'
        },
        {
          japanese: '遅刻しないようにします。',
          vietnamese: 'Tôi cố gắng không đến muộn.',
          english: 'I try not to be late.',
          type: 'main'
        },
        {
          japanese: '野菜を食べるようにしてください。',
          vietnamese: 'Hãy cố gắng ăn rau.',
          english: 'Please try to eat vegetables.',
          type: 'main'
        },
        {
          japanese: '時間を無駄にしないようにしています。',
          vietnamese: 'Tôi cố gắng không lãng phí thời gian.',
          english: 'I try not to waste time.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ように言う',
      vietnamese: 'bảo ~, yêu cầu ~',
      english: 'to tell/ask someone to do',
      type: 'main',
      explanation: 'Diễn tả việc truyền đạt yêu cầu hoặc mệnh lệnh. Dùng với động từ (thể thường) + ように言う/頼む/伝える. Là cách gián tiếp để truyền đạt lời nói.',
      examples: [
        {
          japanese: '先生は静かにするように言いました。',
          vietnamese: 'Giáo viên đã bảo im lặng.',
          english: 'The teacher told us to be quiet.',
          type: 'main'
        },
        {
          japanese: '母は早く寝るように言いました。',
          vietnamese: 'Mẹ bảo tôi đi ngủ sớm.',
          english: 'My mother told me to go to bed early.',
          type: 'main'
        },
        {
          japanese: '医者は薬を飲むように言いました。',
          vietnamese: 'Bác sĩ bảo uống thuốc.',
          english: 'The doctor told me to take medicine.',
          type: 'main'
        },
        {
          japanese: '友達に手伝うように頼みました。',
          vietnamese: 'Tôi đã nhờ bạn giúp đỡ.',
          english: 'I asked my friend to help.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～そうに',
      vietnamese: 'có vẻ ~',
      english: 'looking ~, seeming ~',
      type: 'additional',
      explanation: 'Diễn tả vẻ ngoài hoặc cách thức có vẻ như thế nào. Dùng với い-adjective (bỏ い) + そうに、な-adjective + そうに. Thường đi với động từ chỉ hành động.',
      examples: [
        {
          japanese: '彼は嬉しそうに笑っています。',
          vietnamese: 'Anh ấy cười một cách vui vẻ.',
          english: 'He is smiling happily.',
          type: 'main'
        },
        {
          japanese: '子供が楽しそうに遊んでいます。',
          vietnamese: 'Trẻ con chơi một cách vui vẻ.',
          english: 'The children are playing joyfully.',
          type: 'main'
        },
        {
          japanese: '寂しそうに歩いています。',
          vietnamese: 'Đi một cách cô đơn.',
          english: 'Walking lonely.',
          type: 'main'
        },
        {
          japanese: '美味しそうに食べていますね。',
          vietnamese: 'Ăn có vẻ ngon nhỉ.',
          english: 'You\'re eating as if it\'s delicious.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ないように',
      vietnamese: 'để không ~, cẩn thận không ~',
      english: 'so as not to, in order not to',
      type: 'additional',
      explanation: 'Diễn tả mục đích tránh điều gì đó xảy ra. Dùng với động từ thể ない + ように. Thường kết hợp với する、気をつける。',
      examples: [
        {
          japanese: '風邪を引かないように気をつけてください。',
          vietnamese: 'Hãy cẩn thận để không bị cảm.',
          english: 'Please be careful not to catch a cold.',
          type: 'main'
        },
        {
          japanese: '忘れないようにメモしました。',
          vietnamese: 'Tôi ghi chép để không quên.',
          english: 'I took notes so I wouldn\'t forget.',
          type: 'main'
        },
        {
          japanese: '遅刻しないように早く起きます。',
          vietnamese: 'Tôi dậy sớm để không bị trễ.',
          english: 'I get up early so I won\'t be late.',
          type: 'main'
        },
        {
          japanese: '間違えないように注意してください。',
          vietnamese: 'Hãy cẩn thận để không làm sai.',
          english: 'Please be careful not to make mistakes.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～まま',
      vietnamese: 'cứ ~, vẫn ~',
      english: 'as it is, unchanged',
      type: 'additional',
      explanation: 'Diễn tả trạng thái không thay đổi. Dùng với: Động từ thể た + まま、い-adj + まま、な-adj な + まま、Noun の + まま. Chỉ việc duy trì một trạng thái trong khi làm việc khác.',
      examples: [
        {
          japanese: '電気をつけたまま寝てしまいました。',
          vietnamese: 'Tôi đã ngủ mà quên tắt đèn.',
          english: 'I fell asleep with the light on.',
          type: 'main'
        },
        {
          japanese: '靴を履いたまま部屋に入らないでください。',
          vietnamese: 'Đừng vào phòng khi còn đi giày.',
          english: 'Please don\'t enter the room with your shoes on.',
          type: 'main'
        },
        {
          japanese: '立ったまま話しましょう。',
          vietnamese: 'Chúng ta nói chuyện khi đứng nhé.',
          english: 'Let\'s talk while standing.',
          type: 'main'
        },
        {
          japanese: 'このまま待っていてください。',
          vietnamese: 'Hãy đợi như thế này.',
          english: 'Please wait just like this.',
          type: 'additional'
        }
      ]
    }
  ]
};

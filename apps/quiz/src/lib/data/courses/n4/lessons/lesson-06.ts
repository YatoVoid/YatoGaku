/**
 * N4 Core Lessons — Lesson 06: Conditionals
 * Focus: 〜たら、〜ば、〜と、〜なら conditional forms
 */

import type { LessonData } from '$lib/types';

export const LESSON_06_DATA: LessonData = {
  lessonNumber: 6,
  title: '条件形 (Conditional Forms)',
  vocabulary: [
    // Verbs related to conditions and outcomes
    {
      japanese: '困る',
      kana: 'こまる',
      vietnamese: 'gặp khó khăn, rắc rối',
      english: 'to be troubled,困る',
      type: 'main',
      example: '雨が降ったら困ります。'
    },
    {
      japanese: '決める',
      kana: 'きめる',
      vietnamese: 'quyết định',
      english: 'to decide',
      type: 'main',
      example: '旅行先を決めます。'
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
      japanese: '急ぐ',
      kana: 'いそぐ',
      vietnamese: 'vội vàng',
      english: 'to hurry',
      type: 'main',
      example: '急げば間に合います。'
    },
    {
      japanese: '間に合う',
      kana: 'まにあう',
      vietnamese: 'kịp giờ',
      english: 'to be in time',
      type: 'main',
      example: '走れば間に合うでしょう。'
    },
    {
      japanese: '遅れる',
      kana: 'おくれる',
      vietnamese: 'trễ, chậm trễ',
      english: 'to be late',
      type: 'main',
      example: '電車が遅れたら連絡します。'
    },
    {
      japanese: '続く',
      kana: 'つづく',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'main',
      example: '雨が続くと困ります。'
    },
    {
      japanese: '続ける',
      kana: 'つづける',
      vietnamese: 'tiếp tục làm',
      english: 'to continue doing',
      type: 'main',
      example: '勉強を続ければ上手になります。'
    },
    {
      japanese: '済む',
      kana: 'すむ',
      vietnamese: 'xong, hoàn thành',
      english: 'to finish, to be settled',
      type: 'main',
      example: '仕事が済んだら帰ります。'
    },
    {
      japanese: '慣れる',
      kana: 'なれる',
      vietnamese: 'quen thuộc',
      english: 'to get used to',
      type: 'main',
      example: '日本に来たら、すぐ慣れますよ。'
    },
    {
      japanese: '増える',
      kana: 'ふえる',
      vietnamese: 'tăng lên',
      english: 'to increase',
      type: 'main',
      example: '人口が増えると問題が起こります。'
    },
    {
      japanese: '減る',
      kana: 'へる',
      vietnamese: 'giảm đi',
      english: 'to decrease',
      type: 'main',
      example: '食べる量を減らせば痩せます。'
    },
    {
      japanese: '変わる',
      kana: 'かわる',
      vietnamese: 'thay đổi',
      english: 'to change',
      type: 'main',
      example: '季節が変わると天気も変わります。'
    },
    {
      japanese: '変える',
      kana: 'かえる',
      vietnamese: 'thay đổi (tác động)',
      english: 'to change something',
      type: 'main',
      example: '予定を変えたら教えてください。'
    },
    {
      japanese: '直す',
      kana: 'なおす',
      vietnamese: 'sửa chữa',
      english: 'to fix, to correct',
      type: 'main',
      example: '間違いがあれば直してください。'
    },
    {
      japanese: '直る',
      kana: 'なおる',
      vietnamese: 'được sửa',
      english: 'to be fixed',
      type: 'main',
      example: '暖かくなったら風邪が直ります。'
    },
    {
      japanese: '間違える',
      kana: 'まちがえる',
      vietnamese: 'làm sai',
      english: 'to make a mistake',
      type: 'main',
      example: '間違えたらやり直します。'
    },
    {
      japanese: '失敗する',
      kana: 'しっぱいする',
      vietnamese: 'thất bại',
      english: 'to fail',
      type: 'main',
      example: '失敗しても諦めないでください。'
    },
    {
      japanese: '成功する',
      kana: 'せいこうする',
      vietnamese: 'thành công',
      english: 'to succeed',
      type: 'main',
      example: '頑張れば成功します。'
    },
    {
      japanese: '諦める',
      kana: 'あきらめる',
      vietnamese: 'từ bỏ',
      english: 'to give up',
      type: 'main',
      example: '諦めなければ夢は叶います。'
    },
    // Nouns and adjectives
    {
      japanese: '条件',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition',
      type: 'main',
      example: '条件が良ければ参加します。'
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
      japanese: '結果',
      kana: 'けっか',
      vietnamese: 'kết quả',
      english: 'result',
      type: 'main',
      example: '結果が出たら連絡します。'
    },
    {
      japanese: '予定',
      kana: 'よてい',
      vietnamese: 'kế hoạch, lịch trình',
      english: 'schedule, plan',
      type: 'main',
      example: '予定が決まったら教えてください。'
    },
    {
      japanese: '予約',
      kana: 'よやく',
      vietnamese: 'đặt trước',
      english: 'reservation',
      type: 'main',
      example: '予約したらすぐ確認メールが来ます。'
    },
    {
      japanese: '連絡',
      kana: 'れんらく',
      vietnamese: 'liên lạc',
      english: 'contact',
      type: 'main',
      example: '到着したら連絡してください。'
    },
    {
      japanese: '相談',
      kana: 'そうだん',
      vietnamese: 'tham khảo ý kiến, thảo luận',
      english: 'consultation',
      type: 'main',
      example: '困ったら相談してください。'
    },
    {
      japanese: '準備',
      kana: 'じゅんび',
      vietnamese: 'chuẩn bị',
      english: 'preparation',
      type: 'main',
      example: '準備ができたら出発します。'
    },
    {
      japanese: '用意',
      kana: 'ようい',
      vietnamese: 'sự chuẩn bị sẵn sàng',
      english: 'preparation, arrangement',
      type: 'main',
      example: '用意が済んだら始めましょう。'
    },
    {
      japanese: '確認',
      kana: 'かくにん',
      vietnamese: 'xác nhận',
      english: 'confirmation',
      type: 'main',
      example: 'メールを確認したら返事をください。'
    },
    {
      japanese: '約束',
      kana: 'やくそく',
      vietnamese: 'lời hứa, hẹn',
      english: 'promise, appointment',
      type: 'main',
      example: '約束を破ったら信用されません。'
    },
    {
      japanese: '機会',
      kana: 'きかい',
      vietnamese: 'cơ hội',
      english: 'opportunity',
      type: 'main',
      example: '機会があれば日本に行きたいです。'
    },
    {
      japanese: '可能',
      kana: 'かのう',
      vietnamese: 'có thể',
      english: 'possible',
      type: 'main',
      example: '可能なら手伝ってください。'
    },
    {
      japanese: '不可能',
      kana: 'ふかのう',
      vietnamese: 'không thể',
      english: 'impossible',
      type: 'main',
      example: '今日中は不可能です。'
    },
    {
      japanese: '必要',
      kana: 'ひつよう',
      vietnamese: 'cần thiết',
      english: 'necessary',
      type: 'main',
      example: '必要なら買っておきます。'
    },
    {
      japanese: '十分',
      kana: 'じゅうぶん',
      vietnamese: 'đủ',
      english: 'enough, sufficient',
      type: 'main',
      example: '時間が十分あれば完成します。'
    },
    {
      japanese: '不十分',
      kana: 'ふじゅうぶん',
      vietnamese: 'không đủ',
      english: 'insufficient',
      type: 'main',
      example: '準備が不十分だと失敗します。'
    },
    {
      japanese: '無理',
      kana: 'むり',
      vietnamese: 'không thể, quá sức',
      english: 'impossible, unreasonable',
      type: 'main',
      example: '無理なら断ってもいいですよ。'
    },
    {
      japanese: '都合',
      kana: 'つごう',
      vietnamese: 'sự thuận tiện',
      english: 'convenience, circumstances',
      type: 'main',
      example: '都合が悪ければ別の日にしましょう。'
    },
    {
      japanese: '便利',
      kana: 'べんり',
      vietnamese: 'tiện lợi',
      english: 'convenient',
      type: 'main',
      example: 'スマホがあれば便利です。'
    },
    // Additional expressions
    {
      japanese: 'もし',
      kana: 'もし',
      vietnamese: 'nếu, giả sử',
      english: 'if (hypothetical)',
      type: 'additional',
      example: 'もし暇なら遊びに来てください。'
    },
    {
      japanese: 'もしも',
      kana: 'もしも',
      vietnamese: 'nếu như (nhấn mạnh)',
      english: 'if (emphatic)',
      type: 'additional',
      example: 'もしもの時は連絡してください。'
    },
    {
      japanese: '万が一',
      kana: 'まんがいち',
      vietnamese: 'vạn một, trong trường hợp hiếm',
      english: 'by any chance, just in case',
      type: 'additional',
      example: '万が一遅れたら電話します。'
    },
    {
      japanese: 'いつでも',
      kana: 'いつでも',
      vietnamese: 'bất cứ khi nào',
      english: 'anytime',
      type: 'additional',
      example: '困ったらいつでも連絡してください。'
    },
    {
      japanese: '必ず',
      kana: 'かならず',
      vietnamese: 'nhất định',
      english: 'without fail, certainly',
      type: 'additional',
      example: '帰ったら必ず電話します。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn',
      english: 'surely, certainly',
      type: 'additional',
      example: '頑張ればきっと成功します。'
    },
    {
      japanese: '多分',
      kana: 'たぶん',
      vietnamese: 'có lẽ',
      english: 'probably',
      type: 'additional',
      example: '天気が良ければ多分行きます。'
    },
    {
      japanese: 'もちろん',
      kana: 'もちろん',
      vietnamese: 'dĩ nhiên',
      english: 'of course',
      type: 'additional',
      example: 'もちろん手伝いますよ。'
    },
    {
      japanese: 'とにかく',
      kana: 'とにかく',
      vietnamese: 'dù sao đi nữa',
      english: 'anyway, in any case',
      type: 'additional',
      example: 'とにかくやってみましょう。'
    },
    {
      japanese: 'それで',
      kana: 'それで',
      vietnamese: 'vì vậy, rồi sao',
      english: 'and then, so',
      type: 'additional',
      example: 'それで、どうしますか。'
    },
    {
      japanese: 'それなら',
      kana: 'それなら',
      vietnamese: 'nếu thế thì',
      english: 'if that is the case',
      type: 'additional',
      example: 'それなら私が行きます。'
    },
    {
      japanese: 'そうすると',
      kana: 'そうすると',
      vietnamese: 'nếu làm như vậy',
      english: 'if you do so',
      type: 'additional',
      example: 'そうすると、うまくいきます。'
    },
    // Supplementary vocabulary
    {
      japanese: '晴れる',
      kana: 'はれる',
      vietnamese: 'nắng, quang đãng',
      english: 'to clear up (weather)',
      type: 'supplementary',
      example: '明日晴れたらピクニックに行きます。'
    },
    {
      japanese: '曇る',
      kana: 'くもる',
      vietnamese: 'nhiều mây',
      english: 'to be cloudy',
      type: 'supplementary',
      example: '曇っても出かけます。'
    },
    {
      japanese: '寒い',
      kana: 'さむい',
      vietnamese: 'lạnh',
      english: 'cold',
      type: 'supplementary',
      example: '寒かったら暖房をつけてください。'
    },
    {
      japanese: '暖かい',
      kana: 'あたたかい',
      vietnamese: 'ấm áp',
      english: 'warm',
      type: 'supplementary',
      example: '暖かくなったら花見に行きましょう。'
    },
    {
      japanese: '涼しい',
      kana: 'すずしい',
      vietnamese: 'mát mẻ',
      english: 'cool',
      type: 'supplementary',
      example: '涼しければ散歩しましょう。'
    },
    {
      japanese: '暑い',
      kana: 'あつい',
      vietnamese: 'nóng',
      english: 'hot',
      type: 'supplementary',
      example: '暑かったらエアコンをつけます。'
    },
    {
      japanese: '忙しい',
      kana: 'いそがしい',
      vietnamese: 'bận rộn',
      english: 'busy',
      type: 'supplementary',
      example: '忙しくなければ手伝ってください。'
    },
    {
      japanese: '暇',
      kana: 'ひま',
      vietnamese: 'rảnh rỗi',
      english: 'free time',
      type: 'supplementary',
      example: '暇なら映画を見ませんか。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 188590aa893345d6
    {
      japanese: "続けます",
      kana: "つづけます",
      vietnamese: "tiếp tục",
      english: "tiếp tục",
      type: "main",
      example: "日本語の勉強を続けます。\nNihongo no benkyou o tsuzukemasu.\nTôi tiếp tục học tiếng Nhật."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 8257bd4c225a7471
    {
      japanese: "見つけます",
      kana: "みつけます",
      vietnamese: "tìm, tìm thấy",
      english: "tìm, tìm thấy",
      type: "main",
      example: "駅で財布を見つけました。\nEki de saifu o mitsukemashita.\nTôi đã tìm thấy ví ở ga."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | e7a66b432bf561cb
    {
      japanese: "取ります",
      kana: "とります",
      vietnamese: "lấy; xin nghỉ khi đi với 休み",
      english: "lấy; xin nghỉ khi đi với 休み",
      type: "main",
      example: "明日、休みを取ります。\nAshita, yasumi o torimasu.\nNgày mai tôi xin nghỉ."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 0105f14aaf2fdfaa
    {
      japanese: "休み",
      kana: "やすみ",
      vietnamese: "nghỉ, ngày nghỉ",
      english: "nghỉ, ngày nghỉ",
      type: "main",
      example: "日曜日は休みです。\nNichiyoubi wa yasumi desu.\nChủ nhật là ngày nghỉ."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 3c8add3afc555727
    {
      japanese: "受けます",
      kana: "うけます",
      vietnamese: "nhận; dự thi",
      english: "nhận; dự thi",
      type: "main",
      example: "来月、試験を受けます。\nRaigetsu, shiken o ukemasu.\nTháng sau tôi sẽ dự thi."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | de7f1e9ce7b26c7c
    {
      japanese: "試験",
      kana: "しけん",
      vietnamese: "kỳ thi",
      english: "kỳ thi",
      type: "main",
      example: "日本語の試験があります。\nNihongo no shiken ga arimasu.\nCó kỳ thi tiếng Nhật."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 9e55de3272ed0181
    {
      japanese: "申し込みます",
      kana: "もうしこみます",
      vietnamese: "đăng ký, nộp đơn",
      english: "đăng ký, nộp đơn",
      type: "main",
      example: "イベントに申し込みます。\nIbento ni moushikomimasu.\nTôi đăng ký sự kiện."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 87022836cc22c85f
    {
      japanese: "休憩します",
      kana: "きゅうけいします",
      vietnamese: "nghỉ giải lao",
      english: "nghỉ giải lao",
      type: "main",
      example: "10分休憩します。\nJuppun kyuukei shimasu.\nNghỉ giải lao 10 phút."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 93d8b37cbd174bf2
    {
      japanese: "連休",
      kana: "れんきゅう",
      vietnamese: "kỳ nghỉ liên tiếp",
      english: "kỳ nghỉ liên tiếp",
      type: "main",
      example: "来週は三連休です。\nRaishuu wa san-renkyuu desu.\nTuần sau là kỳ nghỉ 3 ngày liên tiếp."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 62cb9a800438d883
    {
      japanese: "作文",
      kana: "さくぶん",
      vietnamese: "bài văn",
      english: "bài văn",
      type: "main",
      example: "作文を書きます。\nSakubun o kakimasu.\nTôi viết bài văn."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 37ea917f9ee10cd8
    {
      japanese: "発表",
      kana: "はっぴょう",
      vietnamese: "phát biểu, công bố, thuyết trình",
      english: "phát biểu, công bố, thuyết trình",
      type: "main",
      example: "明日、発表があります。\nAshita, happyou ga arimasu.\nNgày mai có bài thuyết trình."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 4f6b5010f38a5305
    {
      japanese: "展覧会",
      kana: "てんらんかい",
      vietnamese: "triển lãm",
      english: "triển lãm",
      type: "main",
      example: "美術館で展覧会を見ます。\nBijutsukan de tenrankai o mimasu.\nTôi xem triển lãm ở bảo tàng mỹ thuật."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 20f41c5b911da9cf
    {
      japanese: "結婚式",
      kana: "けっこんしき",
      vietnamese: "lễ cưới",
      english: "lễ cưới",
      type: "main",
      example: "友達の結婚式に行きます。\nTomodachi no kekkonshiki ni ikimasu.\nTôi đi dự lễ cưới của bạn."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 7a1c0b964fff94c4
    {
      japanese: "お葬式",
      kana: "おそうしき",
      vietnamese: "lễ tang, đám tang",
      english: "lễ tang, đám tang",
      type: "main",
      example: "お葬式に出ます。\nOsoushiki ni demasu.\nTôi tham dự lễ tang."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 24d0fb43a3abfbbf
    {
      japanese: "式",
      kana: "しき",
      vietnamese: "lễ, nghi thức",
      english: "lễ, nghi thức",
      type: "main",
      example: "入学式があります。\nNyuugakushiki ga arimasu.\nCó lễ nhập học."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | ae6e37043dba6c30
    {
      japanese: "本社",
      kana: "ほんしゃ",
      vietnamese: "trụ sở chính",
      english: "trụ sở chính",
      type: "main",
      example: "本社は東京にあります。\nHonsha wa Toukyou ni arimasu.\nTrụ sở chính ở Tokyo."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 4189afa8a1d157ef
    {
      japanese: "支店",
      kana: "してん",
      vietnamese: "chi nhánh",
      english: "chi nhánh",
      type: "main",
      example: "支店で働いています。\nShiten de hataraite imasu.\nTôi đang làm việc ở chi nhánh."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 0f7ce103e94f46f7
    {
      japanese: "教会",
      kana: "きょうかい",
      vietnamese: "nhà thờ",
      english: "nhà thờ",
      type: "main",
      example: "教会で結婚式をします。\nKyoukai de kekkonshiki o shimasu.\nTổ chức lễ cưới ở nhà thờ."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 208d3187382f9bfa
    {
      japanese: "大学院",
      kana: "だいがくいん",
      vietnamese: "cao học, viện sau đại học",
      english: "cao học, viện sau đại học",
      type: "main",
      example: "大学院に入ります。\nDaigakuin ni hairimasu.\nTôi vào cao học."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | b6973eb401019f77
    {
      japanese: "動物園",
      kana: "どうぶつえん",
      vietnamese: "sở thú, vườn bách thú",
      english: "sở thú, vườn bách thú",
      type: "main",
      example: "動物園へ行きます。\nDoubutsuen e ikimasu.\nTôi đi sở thú."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 5412b16b3169d12e
    {
      japanese: "温泉",
      kana: "おんせん",
      vietnamese: "suối nước nóng",
      english: "suối nước nóng",
      type: "main",
      example: "温泉に入ります。\nOnsen ni hairimasu.\nTôi tắm suối nước nóng."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 18eed1a198a7778d
    {
      japanese: "帰り",
      kana: "かえり",
      vietnamese: "lúc về, chiều về",
      english: "lúc về, chiều về",
      type: "main",
      example: "帰りに買い物します。\nKaeri ni kaimono shimasu.\nLúc về tôi sẽ mua sắm."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 0d19677a6cdc4aac
    {
      japanese: "お子さん",
      kana: "おこさん",
      vietnamese: "con của người khác",
      english: "con của người khác",
      type: "main",
      example: "お子さんはおいくつですか。\nOkosan wa oikutsu desu ka.\nCon anh/chị mấy tuổi rồi ạ?"
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 6ee197ce4a9ef3cb
    {
      japanese: "一号",
      kana: "いちごう",
      vietnamese: "số 1, hiệu số 1",
      english: "số 1, hiệu số 1",
      type: "main",
      example: "のぞみ一号に乗ります。\nNozomi ichigou ni norimasu.\nTôi lên tàu Nozomi số 1."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 5c8f33edb94745fe
    {
      japanese: "～の方",
      kana: "～のほう",
      vietnamese: "phía ~, hướng ~",
      english: "phía ~, hướng ~",
      type: "main",
      example: "駅の方へ歩きます。\nEki no hou e arukimasu.\nTôi đi bộ về phía nhà ga."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | bf19c62ed4e2d193
    {
      japanese: "ずっと",
      kana: "ずっと",
      vietnamese: "suốt, mãi, liên tục",
      english: "suốt, mãi, liên tục",
      type: "main",
      example: "ずっと日本語を勉強しています。\nZutto nihongo o benkyou shite imasu.\nTôi vẫn luôn học tiếng Nhật."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 08e3a3e8c54654e0
    {
      japanese: "バリ",
      kana: "バリ",
      vietnamese: "Bali, hòn đảo ở Indonesia",
      english: "Bali, hòn đảo ở Indonesia",
      type: "main",
      example: "バリへ旅行に行きます。\nBari e ryokou ni ikimasu.\nTôi đi du lịch Bali."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | bd901c469cea415a
    {
      japanese: "ピカソ",
      kana: "ピカソ",
      vietnamese: "Picasso",
      english: "Picasso",
      type: "main",
      example: "ピカソの絵を見ました。\nPikaso no e o mimashita.\nTôi đã xem tranh của Picasso."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 749932adc53ed505
    {
      japanese: "のぞみ",
      kana: "のぞみ",
      vietnamese: "tên tàu Shinkansen",
      english: "tên tàu Shinkansen",
      type: "main",
      example: "のぞみに乗ります。\nNozomi ni norimasu.\nTôi đi tàu Nozomi."
    },
    // source: review_tu_vung_bai_31.md | 1. Từ vựng chính | 13002ef03cf45392
    {
      japanese: "新神戸",
      kana: "しんこうべ",
      vietnamese: "Shin-Kobe, tên ga ở Hyogo",
      english: "Shin-Kobe, tên ga ở Hyogo",
      type: "main",
      example: "新神戸で降ります。\nShin-Koube de orimasu.\nTôi xuống ở Shin-Kobe."
    },
    // source: review_tu_vung_bai_31.md | 2. Từ vựng phần hội thoại | da6083a196b6069e
    {
      japanese: "残ります",
      kana: "のこります",
      vietnamese: "ở lại, còn lại",
      english: "ở lại, còn lại",
      type: "supplementary",
      example: "学校に残ります。\nGakkou ni nokorimasu.\nTôi ở lại trường."
    },
    // source: review_tu_vung_bai_31.md | 2. Từ vựng phần hội thoại | 29725179468eadb0
    {
      japanese: "入学試験",
      kana: "にゅうがくしけん",
      vietnamese: "kỳ thi đầu vào",
      english: "kỳ thi đầu vào",
      type: "supplementary",
      example: "入学試験を受けます。\nNyuugaku shiken o ukemasu.\nTôi dự kỳ thi đầu vào."
    },
    // source: review_tu_vung_bai_31.md | 2. Từ vựng phần hội thoại | eb8917f9826a9898
    {
      japanese: "月に",
      kana: "つきに",
      vietnamese: "mỗi tháng, trong một tháng",
      english: "mỗi tháng, trong một tháng",
      type: "supplementary",
      example: "月に一回映画を見ます。\nTsuki ni ikkai eiga o mimasu.\nMỗi tháng tôi xem phim một lần."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 2489a3a55e057eae
    {
      japanese: "村",
      kana: "むら",
      vietnamese: "làng",
      english: "làng",
      type: "supplementary",
      example: "村に住んでいます。\nMura ni sunde imasu.\nTôi đang sống ở làng."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 1293f0e961fe1617
    {
      japanese: "卒業します",
      kana: "そつぎょうします",
      vietnamese: "tốt nghiệp",
      english: "tốt nghiệp",
      type: "supplementary",
      example: "来年大学を卒業します。\nRainen daigaku o sotsugyou shimasu.\nNăm sau tôi tốt nghiệp đại học."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 442537cb260b41ea
    {
      japanese: "映画館",
      kana: "えいがかん",
      vietnamese: "rạp chiếu phim",
      english: "rạp chiếu phim",
      type: "supplementary",
      example: "映画館で映画を見ます。\nEigakan de eiga o mimasu.\nTôi xem phim ở rạp."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | b57a8ea10be1e1b6
    {
      japanese: "嫌な",
      kana: "いやな",
      vietnamese: "đáng ghét, chán, không thích",
      english: "đáng ghét, chán, không thích",
      type: "supplementary",
      example: "嫌なことがありました。\nIya na koto ga arimashita.\nĐã có chuyện không vui."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 65e7ed1b42a8b259
    {
      japanese: "空",
      kana: "そら",
      vietnamese: "bầu trời",
      english: "bầu trời",
      type: "supplementary",
      example: "空が青いです。\nSora ga aoi desu.\nBầu trời xanh."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | c94bdf32a3786065
    {
      japanese: "閉じます",
      kana: "とじます",
      vietnamese: "đóng, nhắm",
      english: "đóng, nhắm",
      type: "supplementary",
      example: "目を閉じます。\nMe o tojimasu.\nTôi nhắm mắt."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 8a3047fa2affa462
    {
      japanese: "都会",
      kana: "とかい",
      vietnamese: "thành phố, nơi đô hội",
      english: "thành phố, nơi đô hội",
      type: "supplementary",
      example: "都会に住みたいです。\nTokai ni sumitai desu.\nTôi muốn sống ở thành phố."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | ade75acce5e2d16d
    {
      japanese: "子供たち",
      kana: "こどもたち",
      vietnamese: "trẻ em, bọn trẻ",
      english: "trẻ em, bọn trẻ",
      type: "supplementary",
      example: "子供たちが遊んでいます。\nKodomo-tachi ga asonde imasu.\nBọn trẻ đang chơi."
    },
    // source: review_tu_vung_bai_31.md | 3. Từ vựng phần đọc hiểu | 490d07f2d456f028
    {
      japanese: "自由に",
      kana: "じゆうに",
      vietnamese: "tự do, thoải mái",
      english: "tự do, thoải mái",
      type: "supplementary",
      example: "自由に話してください。\nJiyuu ni hanashite kudasai.\nHãy nói chuyện thoải mái."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | 2263a66c0b01b4b0
    {
      japanese: "日本語の勉強を続けます",
      kana: "日本語の勉強を続けます",
      vietnamese: "tiếp tục học tiếng Nhật",
      english: "tiếp tục học tiếng Nhật",
      type: "supplementary",
      example: "続けます / tsuzukemasu đi với を khi nói tiếp tục một việc."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | ff09cde6accceaf9
    {
      japanese: "財布を見つけます",
      kana: "財布を見つけます",
      vietnamese: "tìm thấy ví",
      english: "tìm thấy ví",
      type: "supplementary",
      example: "見つけます / mitsukemasu = tìm thấy, phát hiện ra."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | c6ce8129dfc1f11c
    {
      japanese: "休みを取ります",
      kana: "休みを取ります",
      vietnamese: "xin nghỉ",
      english: "xin nghỉ",
      type: "supplementary",
      example: "Không dịch từng chữ là “lấy nghỉ”, hiểu tự nhiên là xin nghỉ."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | f2bb67f5953c7b3e
    {
      japanese: "試験を受けます",
      kana: "試験を受けます",
      vietnamese: "dự thi",
      english: "dự thi",
      type: "supplementary",
      example: "Người đi thi dùng 受けます / ukemasu, không dùng 試験をします."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | 54a8cd1b2c941c60
    {
      japanese: "イベントに申し込みます",
      kana: "イベントに申し込みます",
      vietnamese: "đăng ký sự kiện",
      english: "đăng ký sự kiện",
      type: "supplementary",
      example: "Thường đi với trợ từ に / ni."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | 36d87660687182ba
    {
      japanese: "月に一回",
      kana: "月に一回",
      vietnamese: "mỗi tháng một lần",
      english: "mỗi tháng một lần",
      type: "supplementary",
      example: "Mẫu tần suất: 期間 + に + số lần."
    },
    // source: review_tu_vung_bai_31.md | 4. Cụm từ cần nhớ | 1b21d6100428cbcf
    {
      japanese: "駅の方へ",
      kana: "駅の方へ",
      vietnamese: "về phía nhà ga",
      english: "về phía nhà ga",
      type: "supplementary",
      example: "方 / hou chỉ hướng/phía."
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 49f08dceba021146
    {
      japanese: "続けます",
      kana: "続けます",
      vietnamese: "tiếp tục",
      english: "tiếp tục",
      type: "supplementary",
      example: "勉強を続けます / benkyou o tsuzukemasu = tiếp tục học"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 3498bbb35d48e927
    {
      japanese: "見つけます",
      kana: "見つけます",
      vietnamese: "tìm thấy",
      english: "tìm thấy",
      type: "supplementary",
      example: "財布を見つけます / saifu o mitsukemasu = tìm thấy ví"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 62385e5e5f7a3205
    {
      japanese: "取ります",
      kana: "取ります",
      vietnamese: "lấy; xin",
      english: "lấy; xin",
      type: "supplementary",
      example: "休みを取ります / yasumi o torimasu = xin nghỉ"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 71cdca7e570fbb03
    {
      japanese: "受けます",
      kana: "受けます",
      vietnamese: "nhận; dự thi",
      english: "nhận; dự thi",
      type: "supplementary",
      example: "試験を受けます / shiken o ukemasu = dự thi"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 4ff4ab9880aa5bb1
    {
      japanese: "申し込みます",
      kana: "申し込みます",
      vietnamese: "đăng ký",
      english: "đăng ký",
      type: "supplementary",
      example: "イベントに申し込みます / ibento ni moushikomimasu = đăng ký sự kiện"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | ea4be6737a4db09b
    {
      japanese: "休憩します",
      kana: "休憩します",
      vietnamese: "nghỉ giải lao",
      english: "nghỉ giải lao",
      type: "supplementary",
      example: "10分休憩します / juppun kyuukei shimasu = nghỉ 10 phút"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 02c2243aee4d43c9
    {
      japanese: "残ります",
      kana: "残ります",
      vietnamese: "ở lại, còn lại",
      english: "ở lại, còn lại",
      type: "supplementary",
      example: "学校に残ります / gakkou ni nokorimasu = ở lại trường"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | 7c5408fa3bbc4850
    {
      japanese: "卒業します",
      kana: "卒業します",
      vietnamese: "tốt nghiệp",
      english: "tốt nghiệp",
      type: "supplementary",
      example: "大学を卒業します / daigaku o sotsugyou shimasu = tốt nghiệp đại học"
    },
    // source: review_tu_vung_bai_31.md | 5. Nhóm động từ quan trọng | ae0a6594e6cd736d
    {
      japanese: "閉じます",
      kana: "閉じます",
      vietnamese: "đóng, nhắm",
      english: "đóng, nhắm",
      type: "supplementary",
      example: "目を閉じます / me o tojimasu = nhắm mắt"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 796366f9a7a29fc0
    {
      japanese: "休",
      kana: "キュウ / kyuu",
      vietnamese: "Hưu — nghỉ",
      english: "nghỉ",
      type: "kanji",
      example: "休み / yasumi, 休憩 / kyuukei, 連休 / renkyuu"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 23661cad430cb48f
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "Kiến — nhìn, thấy",
      english: "nhìn, thấy",
      type: "kanji",
      example: "見つけます / mitsukemasu"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 0c87e9a11b2862ac
    {
      japanese: "取",
      kana: "シュ / shu",
      vietnamese: "Thủ — lấy",
      english: "lấy",
      type: "kanji",
      example: "取ります / torimasu"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | cdc23e4e142ecdda
    {
      japanese: "受",
      kana: "ジュ / ju",
      vietnamese: "Thụ — nhận, chịu",
      english: "nhận, chịu",
      type: "kanji",
      example: "受けます / ukemasu"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | af2cb47139d9d0eb
    {
      japanese: "試",
      kana: "シ / shi",
      vietnamese: "Thí — thử, thi",
      english: "thử, thi",
      type: "kanji",
      example: "試験 / shiken"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | e166eff08e745be1
    {
      japanese: "験",
      kana: "ケン / ken",
      vietnamese: "Nghiệm — kiểm nghiệm, thi",
      english: "kiểm nghiệm, thi",
      type: "kanji",
      example: "試験 / shiken"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 2589524a0a52a614
    {
      japanese: "作",
      kana: "サク / saku",
      vietnamese: "Tác — làm, sáng tác",
      english: "làm, sáng tác",
      type: "kanji",
      example: "作文 / sakubun"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | ea69554bb0956aaa
    {
      japanese: "文",
      kana: "ブン / bun, モン / mon",
      vietnamese: "Văn — văn, câu văn",
      english: "văn, câu văn",
      type: "kanji",
      example: "作文 / sakubun"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 502e6d2943530eb9
    {
      japanese: "発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — phát ra, công bố",
      english: "phát ra, công bố",
      type: "kanji",
      example: "発表 / happyou"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 6df8a45bc397c2c7
    {
      japanese: "表",
      kana: "ヒョウ / hyou",
      vietnamese: "Biểu — biểu thị, bảng",
      english: "biểu thị, bảng",
      type: "kanji",
      example: "発表 / happyou"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | a203ffe34e8f66f7
    {
      japanese: "会",
      kana: "カイ / kai",
      vietnamese: "Hội — hội, gặp",
      english: "hội, gặp",
      type: "kanji",
      example: "展覧会 / tenrankai, 教会 / kyoukai, 都会 / tokai"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 7c72a4641fb7cefd
    {
      japanese: "式",
      kana: "シキ / shiki",
      vietnamese: "Thức — nghi thức, buổi lễ",
      english: "nghi thức, buổi lễ",
      type: "kanji",
      example: "結婚式 / kekkonshiki, お葬式 / osoushiki"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 6ac9d980e0c14fac
    {
      japanese: "本",
      kana: "ホン / hon",
      vietnamese: "Bản — gốc, chính; sách",
      english: "gốc, chính; sách",
      type: "kanji",
      example: "本社 / honsha"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 78c80e781a8f5409
    {
      japanese: "社",
      kana: "シャ / sha",
      vietnamese: "Xã — công ty, xã",
      english: "công ty, xã",
      type: "kanji",
      example: "本社 / honsha"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 66e7ffad6464e21a
    {
      japanese: "店",
      kana: "テン / ten",
      vietnamese: "Điếm — cửa hàng",
      english: "cửa hàng",
      type: "kanji",
      example: "支店 / shiten"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 39acec16fd910f9d
    {
      japanese: "教",
      kana: "キョウ / kyou",
      vietnamese: "Giáo — dạy, giáo",
      english: "dạy, giáo",
      type: "kanji",
      example: "教会 / kyoukai"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | a48b9708380d06f3
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — lớn",
      english: "lớn",
      type: "kanji",
      example: "大学院 / daigakuin"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | e3320aa94273e6c7
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "大学院 / daigakuin, 入学試験 / nyuugaku shiken"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 29e5f0d1cd95f5c6
    {
      japanese: "動",
      kana: "ドウ / dou",
      vietnamese: "Động — chuyển động",
      english: "chuyển động",
      type: "kanji",
      example: "動物園 / doubutsuen"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 669148ba4a2234bd
    {
      japanese: "物",
      kana: "ブツ / butsu, モツ / motsu",
      vietnamese: "Vật — vật, đồ vật",
      english: "vật, đồ vật",
      type: "kanji",
      example: "動物園 / doubutsuen"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 9028510ed88d26fb
    {
      japanese: "園",
      kana: "エン / en",
      vietnamese: "Viên — vườn, khuôn viên",
      english: "vườn, khuôn viên",
      type: "kanji",
      example: "動物園 / doubutsuen"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 0fbec833e5954243
    {
      japanese: "帰",
      kana: "キ / ki",
      vietnamese: "Quy — trở về",
      english: "trở về",
      type: "kanji",
      example: "帰り / kaeri"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 3ebe9533b2bcf3dc
    {
      japanese: "子",
      kana: "シ / shi",
      vietnamese: "Tử — con, đứa trẻ",
      english: "con, đứa trẻ",
      type: "kanji",
      example: "お子さん / okosan, 子供たち / kodomo-tachi"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 795fa62371921779
    {
      japanese: "一",
      kana: "イチ / ichi",
      vietnamese: "Nhất — một",
      english: "một",
      type: "kanji",
      example: "一号 / ichigou"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | cbfb9ab60ea5fcac
    {
      japanese: "方",
      kana: "ホウ / hou",
      vietnamese: "Phương — phía, hướng, cách",
      english: "phía, hướng, cách",
      type: "kanji",
      example: "～の方 / ~ no hou"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 901e2806dfdc7a38
    {
      japanese: "新",
      kana: "シン / shin",
      vietnamese: "Tân — mới",
      english: "mới",
      type: "kanji",
      example: "新神戸 / Shin-Koube"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 0680c7c771321f7a
    {
      japanese: "入",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — vào",
      english: "vào",
      type: "kanji",
      example: "入学試験 / nyuugaku shiken"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | acd5928189537087
    {
      japanese: "月",
      kana: "ゲツ / getsu, ガツ / gatsu",
      vietnamese: "Nguyệt — tháng, mặt trăng",
      english: "tháng, mặt trăng",
      type: "kanji",
      example: "月に / tsuki ni"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 4485bfe855ce7457
    {
      japanese: "村",
      kana: "ソン / son",
      vietnamese: "Thôn — làng",
      english: "làng",
      type: "kanji",
      example: "村 / mura"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | 36acb02941eebc6b
    {
      japanese: "空",
      kana: "クウ / kuu",
      vietnamese: "Không — bầu trời, trống",
      english: "bầu trời, trống",
      type: "kanji",
      example: "空 / sora"
    },
    // source: review_tu_vung_bai_31.md | 6. Kanji N5–N4 cần học kỹ | e868899645a107da
    {
      japanese: "自",
      kana: "ジ / ji",
      vietnamese: "Tự — tự mình",
      english: "tự mình",
      type: "kanji",
      example: "自由に / jiyuu ni"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a5c517ec0f51b8f2
    {
      japanese: "試験",
      kana: "シ / shi",
      vietnamese: "Thí — 試 = thử, thi; 験 = nghiệm, kiểm tra",
      english: "試 = thử, thi; 験 = nghiệm, kiểm tra",
      type: "kanji",
      example: "試験"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 808f61b9127d0242
    {
      japanese: "試す",
      kana: "ため.す / tamesu",
      vietnamese: "Thí — 試 = thử",
      english: "試 = thử",
      type: "kanji",
      example: "試す"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 221ad3e09eb2b20d
    {
      japanese: "試験",
      kana: "ケン / ken",
      vietnamese: "Nghiệm — 試 = thi; 験 = nghiệm, kiểm tra",
      english: "試 = thi; 験 = nghiệm, kiểm tra",
      type: "kanji",
      example: "試験"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b9a5ef6e42254bc8
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | cd1289023f72cfd6
    {
      japanese: "学生",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 生 = người/sinh ra",
      english: "学 = học; 生 = người/sinh ra",
      type: "kanji",
      example: "学生"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 908bbeb176a8add4
    {
      japanese: "大学",
      kana: "ガク / gaku",
      vietnamese: "Học — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 529990b82d4f7d83
    {
      japanese: "入学",
      kana: "ガク / gaku",
      vietnamese: "Học — 入 = vào; 学 = học",
      english: "入 = vào; 学 = học",
      type: "kanji",
      example: "入学"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f652f14cbd383ff5
    {
      japanese: "学ぶ",
      kana: "まな.ぶ / manabu",
      vietnamese: "Học — 学 = học",
      english: "学 = học",
      type: "kanji",
      example: "学ぶ"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 02dd59242146c3ec
    {
      japanese: "作文",
      kana: "サク / saku",
      vietnamese: "Tác — 作 = làm; 文 = văn",
      english: "作 = làm; 文 = văn",
      type: "kanji",
      example: "作文"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f0312432c2a44a19
    {
      japanese: "作る",
      kana: "つく.る / tsukuru",
      vietnamese: "Tác — 作 = làm, tạo ra",
      english: "作 = làm, tạo ra",
      type: "kanji",
      example: "作る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f26508b7c7a053e2
    {
      japanese: "作文",
      kana: "ブン / bun",
      vietnamese: "Văn — 作 = làm; 文 = văn",
      english: "作 = làm; 文 = văn",
      type: "kanji",
      example: "作文"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 84de317bf91a176d
    {
      japanese: "文化",
      kana: "ブン / bun",
      vietnamese: "Văn — 文 = văn; 化 = biến hóa",
      english: "文 = văn; 化 = biến hóa",
      type: "kanji",
      example: "文化"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 29abaacbd2cd0091
    {
      japanese: "休み",
      kana: "やす.み / yasumi",
      vietnamese: "Hưu — 休 = nghỉ",
      english: "休 = nghỉ",
      type: "kanji",
      example: "休み"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9eda57605ee92409
    {
      japanese: "休日",
      kana: "キュウ / kyuu",
      vietnamese: "Hưu — 休 = nghỉ; 日 = ngày",
      english: "休 = nghỉ; 日 = ngày",
      type: "kanji",
      example: "休日"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0f35082507c081f1
    {
      japanese: "休憩",
      kana: "キュウ / kyuu",
      vietnamese: "Hưu — 休 = nghỉ; 憩 = nghỉ ngơi",
      english: "休 = nghỉ; 憩 = nghỉ ngơi",
      type: "kanji",
      example: "休憩"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d67ae6a945eda06f
    {
      japanese: "連休",
      kana: "キュウ / kyuu",
      vietnamese: "Hưu — 連 = liên tiếp; 休 = nghỉ",
      english: "連 = liên tiếp; 休 = nghỉ",
      type: "kanji",
      example: "連休"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 65bdd3af330c9ebc
    {
      japanese: "見る",
      kana: "み.る / miru",
      vietnamese: "Kiến — 見 = nhìn, thấy",
      english: "見 = nhìn, thấy",
      type: "kanji",
      example: "見る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ba8d38ee47e2b270
    {
      japanese: "見つける",
      kana: "み.つける / mitsukeru",
      vietnamese: "Kiến — 見 = thấy; つける = phát hiện ra",
      english: "見 = thấy; つける = phát hiện ra",
      type: "kanji",
      example: "見つける"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ffd28cc6d77d5d6c
    {
      japanese: "意見",
      kana: "ケン / ken",
      vietnamese: "Kiến — 意 = ý; 見 = kiến, cách nhìn",
      english: "意 = ý; 見 = kiến, cách nhìn",
      type: "kanji",
      example: "意見"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 19cc8cf77315abd9
    {
      japanese: "取る",
      kana: "と.る / toru",
      vietnamese: "Thủ — 取 = lấy",
      english: "取 = lấy",
      type: "kanji",
      example: "取る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 01a72b6a99c1f161
    {
      japanese: "受け取る",
      kana: "と.る / toru",
      vietnamese: "Thủ — 受 = nhận; 取 = lấy",
      english: "受 = nhận; 取 = lấy",
      type: "kanji",
      example: "受け取る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c08caeb48a15a274
    {
      japanese: "受ける",
      kana: "う.ける / ukeru",
      vietnamese: "Thụ — 受 = nhận, chịu",
      english: "受 = nhận, chịu",
      type: "kanji",
      example: "受ける"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 87ed99542661d6ef
    {
      japanese: "受付",
      kana: "う.け / uke + ツケ / tsuke",
      vietnamese: "Thụ — 受 = nhận; 付 = gắn, tiếp nhận",
      english: "受 = nhận; 付 = gắn, tiếp nhận",
      type: "kanji",
      example: "受付"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1b5f9c1821039ee4
    {
      japanese: "発表",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 発 = phát ra; 表 = biểu thị",
      english: "発 = phát ra; 表 = biểu thị",
      type: "kanji",
      example: "発表"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6b5dbbceef5d6fdc
    {
      japanese: "出発",
      kana: "ハツ / hatsu",
      vietnamese: "Phát — 出 = ra; 発 = khởi hành",
      english: "出 = ra; 発 = khởi hành",
      type: "kanji",
      example: "出発"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9637f20a546d4813
    {
      japanese: "発表",
      kana: "ヒョウ / hyou",
      vietnamese: "Biểu — 発 = phát ra; 表 = biểu thị",
      english: "発 = phát ra; 表 = biểu thị",
      type: "kanji",
      example: "発表"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3428bccf8b1a1564
    {
      japanese: "会う",
      kana: "あ.う / au",
      vietnamese: "Hội — 会 = gặp, hội",
      english: "会 = gặp, hội",
      type: "kanji",
      example: "会う"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 44f447d04d29c4fe
    {
      japanese: "会社",
      kana: "カイ / kai",
      vietnamese: "Hội — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e5f68d8d780c8459
    {
      japanese: "展覧会",
      kana: "カイ / kai",
      vietnamese: "Hội — 展 = trưng bày; 覧 = xem; 会 = hội",
      english: "展 = trưng bày; 覧 = xem; 会 = hội",
      type: "kanji",
      example: "展覧会"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d7c50e965c02a896
    {
      japanese: "入学式",
      kana: "シキ / shiki",
      vietnamese: "Thức — 入 = vào; 学 = học; 式 = lễ",
      english: "入 = vào; 学 = học; 式 = lễ",
      type: "kanji",
      example: "入学式"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9eaafc2ed9fc8f34
    {
      japanese: "結婚式",
      kana: "シキ / shiki",
      vietnamese: "Thức — 結 = kết; 婚 = hôn nhân; 式 = lễ",
      english: "結 = kết; 婚 = hôn nhân; 式 = lễ",
      type: "kanji",
      example: "結婚式"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f18831b64a24b387
    {
      japanese: "本社",
      kana: "ホン / hon",
      vietnamese: "Bản — 本 = gốc, chính; 社 = công ty",
      english: "本 = gốc, chính; 社 = công ty",
      type: "kanji",
      example: "本社"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4f4233116838c43d
    {
      japanese: "本店",
      kana: "ホン / hon",
      vietnamese: "Bản — 本 = gốc, chính; 店 = cửa hàng",
      english: "本 = gốc, chính; 店 = cửa hàng",
      type: "kanji",
      example: "本店"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 05c0876c88392d52
    {
      japanese: "会社",
      kana: "シャ / sha",
      vietnamese: "Xã — 会 = hội; 社 = công ty",
      english: "会 = hội; 社 = công ty",
      type: "kanji",
      example: "会社"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d1193426888878d4
    {
      japanese: "本社",
      kana: "シャ / sha",
      vietnamese: "Xã — 本 = chính; 社 = công ty",
      english: "本 = chính; 社 = công ty",
      type: "kanji",
      example: "本社"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d1c85e7aa95a1b4b
    {
      japanese: "支店",
      kana: "テン / ten",
      vietnamese: "Điếm — 支 = nhánh; 店 = cửa hàng",
      english: "支 = nhánh; 店 = cửa hàng",
      type: "kanji",
      example: "支店"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1a2d1ef65a97931a
    {
      japanese: "店",
      kana: "みせ / mise",
      vietnamese: "Điếm — 店 = cửa hàng",
      english: "店 = cửa hàng",
      type: "kanji",
      example: "店"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 13c01d902ad69d9b
    {
      japanese: "教える",
      kana: "おし.える / oshieru",
      vietnamese: "Giáo — 教 = dạy",
      english: "教 = dạy",
      type: "kanji",
      example: "教える"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1957641df742b194
    {
      japanese: "教会",
      kana: "キョウ / kyou",
      vietnamese: "Giáo — 教 = giáo; 会 = hội",
      english: "教 = giáo; 会 = hội",
      type: "kanji",
      example: "教会"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1ea846824dd8b3d2
    {
      japanese: "教室",
      kana: "キョウ / kyou",
      vietnamese: "Giáo — 教 = dạy; 室 = phòng",
      english: "教 = dạy; 室 = phòng",
      type: "kanji",
      example: "教室"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5b41aa2e1fba48c9
    {
      japanese: "大学",
      kana: "ダイ / dai",
      vietnamese: "Đại — 大 = lớn; 学 = học",
      english: "大 = lớn; 学 = học",
      type: "kanji",
      example: "大学"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1575d42246eeba35
    {
      japanese: "大きい",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = lớn",
      english: "大 = lớn",
      type: "kanji",
      example: "大きい"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a1f804461f8033fe
    {
      japanese: "動物",
      kana: "ドウ / dou",
      vietnamese: "Động — 動 = động; 物 = vật",
      english: "動 = động; 物 = vật",
      type: "kanji",
      example: "動物"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 979f095ed910f5ff
    {
      japanese: "動く",
      kana: "うご.く / ugoku",
      vietnamese: "Động — 動 = chuyển động",
      english: "動 = chuyển động",
      type: "kanji",
      example: "動く"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 29c0e36dbbdd63cf
    {
      japanese: "物",
      kana: "もの / mono",
      vietnamese: "Vật — 物 = đồ vật",
      english: "物 = đồ vật",
      type: "kanji",
      example: "物"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 754fc057bed87f08
    {
      japanese: "食べ物",
      kana: "もの / mono",
      vietnamese: "Vật — 食べ = ăn; 物 = đồ vật",
      english: "食べ = ăn; 物 = đồ vật",
      type: "kanji",
      example: "食べ物"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | efc40bb2a60e9178
    {
      japanese: "動物",
      kana: "ブツ / butsu",
      vietnamese: "Vật — 動 = động; 物 = vật",
      english: "動 = động; 物 = vật",
      type: "kanji",
      example: "動物"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 03894148f4b38d96
    {
      japanese: "公園",
      kana: "エン / en",
      vietnamese: "Viên — 公 = công cộng; 園 = vườn",
      english: "公 = công cộng; 園 = vườn",
      type: "kanji",
      example: "公園"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7dc170a2387208cd
    {
      japanese: "動物園",
      kana: "エン / en",
      vietnamese: "Viên — 動 = động; 物 = vật; 園 = vườn",
      english: "動 = động; 物 = vật; 園 = vườn",
      type: "kanji",
      example: "動物園"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bd22eb7f083e52ff
    {
      japanese: "帰る",
      kana: "かえ.る / kaeru",
      vietnamese: "Quy — 帰 = trở về",
      english: "帰 = trở về",
      type: "kanji",
      example: "帰る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 10090312e43d9d56
    {
      japanese: "帰国",
      kana: "キ / ki",
      vietnamese: "Quy — 帰 = trở về; 国 = nước",
      english: "帰 = trở về; 国 = nước",
      type: "kanji",
      example: "帰国"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 386efefd85296e21
    {
      japanese: "子",
      kana: "こ / ko",
      vietnamese: "Tử — 子 = đứa trẻ",
      english: "子 = đứa trẻ",
      type: "kanji",
      example: "子"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c2715901e51757e9
    {
      japanese: "子供",
      kana: "こ / ko",
      vietnamese: "Tử — 子 = trẻ; 供 = nhóm/người đi cùng",
      english: "子 = trẻ; 供 = nhóm/người đi cùng",
      type: "kanji",
      example: "子供"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 73ac323f50b80fcf
    {
      japanese: "一号",
      kana: "イチ / ichi",
      vietnamese: "Nhất — 一 = một; 号 = số hiệu",
      english: "一 = một; 号 = số hiệu",
      type: "kanji",
      example: "一号"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 06ab1862d491f1c3
    {
      japanese: "～の方",
      kana: "ホウ / hou",
      vietnamese: "Phương — 方 = hướng, phía",
      english: "方 = hướng, phía",
      type: "kanji",
      example: "～の方"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 740d88abde2d2129
    {
      japanese: "読み方",
      kana: "かた / kata",
      vietnamese: "Phương — 読み = đọc; 方 = cách",
      english: "読み = đọc; 方 = cách",
      type: "kanji",
      example: "読み方"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 63aa5251003c4b02
    {
      japanese: "新しい",
      kana: "あたら.しい / atarashii",
      vietnamese: "Tân — 新 = mới",
      english: "新 = mới",
      type: "kanji",
      example: "新しい"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 934769e8a11a456c
    {
      japanese: "新聞",
      kana: "シン / shin",
      vietnamese: "Tân — 新 = mới; 聞 = nghe",
      english: "新 = mới; 聞 = nghe",
      type: "kanji",
      example: "新聞"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e37d515a9979e913
    {
      japanese: "入る",
      kana: "はい.る / hairu",
      vietnamese: "Nhập — 入 = vào",
      english: "入 = vào",
      type: "kanji",
      example: "入る"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f3f3c5f3767ea0b0
    {
      japanese: "入れる",
      kana: "い.れる / ireru",
      vietnamese: "Nhập — 入 = cho vào",
      english: "入 = cho vào",
      type: "kanji",
      example: "入れる"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f71bbc4cfb06199f
    {
      japanese: "入学",
      kana: "ニュウ / nyuu",
      vietnamese: "Nhập — 入 = vào; 学 = học",
      english: "入 = vào; 学 = học",
      type: "kanji",
      example: "入学"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d62a15511611b331
    {
      japanese: "月",
      kana: "つき / tsuki",
      vietnamese: "Nguyệt — 月 = tháng, trăng",
      english: "月 = tháng, trăng",
      type: "kanji",
      example: "月"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 765fa2986f5c1a79
    {
      japanese: "月曜日",
      kana: "ゲツ / getsu",
      vietnamese: "Nguyệt — 月 = tháng; 曜日 = thứ",
      english: "月 = tháng; 曜日 = thứ",
      type: "kanji",
      example: "月曜日"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4e2e02b00e0b848b
    {
      japanese: "村",
      kana: "むら / mura",
      vietnamese: "Thôn — 村 = làng",
      english: "村 = làng",
      type: "kanji",
      example: "村"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 108e1a334c8e778d
    {
      japanese: "村人",
      kana: "むら / mura",
      vietnamese: "Thôn — 村 = làng; 人 = người",
      english: "村 = làng; 人 = người",
      type: "kanji",
      example: "村人"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0faee863737bdcc6
    {
      japanese: "空",
      kana: "そら / sora",
      vietnamese: "Không — 空 = bầu trời",
      english: "空 = bầu trời",
      type: "kanji",
      example: "空"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1f5d07b2e5464f91
    {
      japanese: "空港",
      kana: "クウ / kuu",
      vietnamese: "Không — 空 = không; 港 = cảng",
      english: "空 = không; 港 = cảng",
      type: "kanji",
      example: "空港"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 570cd6700ed5e14c
    {
      japanese: "自分",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 分 = phần",
      english: "自 = tự mình; 分 = phần",
      type: "kanji",
      example: "自分"
    },
    // source: review_tu_vung_bai_31.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 586fde6d6db3505b
    {
      japanese: "自由",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 由 = do, lý do",
      english: "自 = tự mình; 由 = do, lý do",
      type: "kanji",
      example: "自由"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '〜たら',
      vietnamese: 'nếu/khi ~',
      english: 'if/when ~',
      type: 'main',
      explanation: 'Dạng điều kiện phổ biến nhất, dùng cho cả điều kiện giả định và thời điểm cụ thể. Cấu tạo: động từ た形 + ら, い形容詞かった + ら, な形容詞/danh từ + だったら. Thường dùng khi hành động sau xảy ra sau khi điều kiện được thỏa mãn.',
      examples: [
        {
          japanese: '雨が降ったら、行きません。',
          vietnamese: 'Nếu trời mưa thì tôi sẽ không đi.',
          english: 'If it rains, I won\'t go.',
          type: 'main'
        },
        {
          japanese: '春になったら、桜が咲きます。',
          vietnamese: 'Khi đến mùa xuân thì hoa anh đào nở.',
          english: 'When spring comes, cherry blossoms bloom.',
          type: 'main'
        },
        {
          japanese: '駅に着いたら、電話してください。',
          vietnamese: 'Khi đến ga thì gọi điện cho tôi nhé.',
          english: 'When you arrive at the station, please call me.',
          type: 'main'
        },
        {
          japanese: '安かったら買います。',
          vietnamese: 'Nếu rẻ thì tôi sẽ mua.',
          english: 'If it\'s cheap, I\'ll buy it.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜ば',
      vietnamese: 'nếu ~ (điều kiện chung)',
      english: 'if ~ (general condition)',
      type: 'main',
      explanation: 'Dạng điều kiện mang tính chung chung, thường dùng cho điều kiện luôn đúng hoặc quy luật tự nhiên. Cấu tạo: động từ ば形 (ます→ば), い形容詞ければ, な形容詞/danh từ + ならば/なら. Không dùng cho lời khuyên, yêu cầu, ý chí ở vế sau.',
      examples: [
        {
          japanese: '春が来れば、暖かくなります。',
          vietnamese: 'Nếu mùa xuân đến thì sẽ ấm áp.',
          english: 'If spring comes, it becomes warm.',
          type: 'main'
        },
        {
          japanese: '勉強すれば、わかります。',
          vietnamese: 'Nếu học thì sẽ hiểu.',
          english: 'If you study, you\'ll understand.',
          type: 'main'
        },
        {
          japanese: '急げば間に合います。',
          vietnamese: 'Nếu vội thì sẽ kịp.',
          english: 'If you hurry, you\'ll make it in time.',
          type: 'main'
        },
        {
          japanese: '安ければ買います。',
          vietnamese: 'Nếu rẻ thì sẽ mua.',
          english: 'If it\'s cheap, I\'ll buy it.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜と',
      vietnamese: '~ thì (kết quả tự nhiên)',
      english: '~ (natural consequence)',
      type: 'main',
      explanation: 'Biểu thị mối quan hệ nhân quả tự nhiên, quy luật khách quan hoặc thói quen. Cấu tạo: động từ る形 + と, い形容詞 + と, な形容詞/danh từ + だと. Vế sau không thể là ý chí, mệnh lệnh, yêu cầu.',
      examples: [
        {
          japanese: '春になると、花が咲きます。',
          vietnamese: 'Khi đến mùa xuân thì hoa nở.',
          english: 'When spring comes, flowers bloom.',
          type: 'main'
        },
        {
          japanese: 'このボタンを押すと、電気がつきます。',
          vietnamese: 'Khi nhấn nút này thì đèn sáng.',
          english: 'When you press this button, the light turns on.',
          type: 'main'
        },
        {
          japanese: '右に曲がると、郵便局があります。',
          vietnamese: 'Khi rẽ phải thì có bưu điện.',
          english: 'When you turn right, there\'s a post office.',
          type: 'main'
        },
        {
          japanese: '暑いと、アイスが食べたくなります。',
          vietnamese: 'Khi nóng thì muốn ăn kem.',
          english: 'When it\'s hot, I feel like eating ice cream.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜なら',
      vietnamese: 'nếu ~ (giả định chủ quan)',
      english: 'if ~ (subjective supposition)',
      type: 'main',
      explanation: 'Dùng khi người nói đưa ra giả định dựa trên thông tin từ người khác hoặc tình huống đã biết. Thường dùng để đưa ra lời khuyên, gợi ý. Cấu tạo: động từ る形/た形 + なら, い形容詞 + なら, な形容詞/danh từ + なら.',
      examples: [
        {
          japanese: '日本へ行くなら、京都がいいですよ。',
          vietnamese: 'Nếu đi Nhật thì Kyoto hay đấy.',
          english: 'If you go to Japan, Kyoto is good.',
          type: 'main'
        },
        {
          japanese: '暇なら、手伝ってください。',
          vietnamese: 'Nếu rảnh thì giúp tôi nhé.',
          english: 'If you\'re free, please help me.',
          type: 'main'
        },
        {
          japanese: '明日なら大丈夫です。',
          vietnamese: 'Nếu là ngày mai thì được.',
          english: 'If it\'s tomorrow, it\'s fine.',
          type: 'main'
        },
        {
          japanese: '彼なら知っていると思います。',
          vietnamese: 'Nếu là anh ấy thì tôi nghĩ anh ấy biết.',
          english: 'If it\'s him, I think he knows.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'もし〜たら/ば',
      vietnamese: 'nếu (giả sử) ~',
      english: 'if (supposing) ~',
      type: 'additional',
      explanation: 'Thêm "もし" vào đầu câu để nhấn mạnh tính giả định của điều kiện. Thường dùng với 〜たら hoặc 〜ば.',
      examples: [
        {
          japanese: 'もし時間があったら、映画を見ませんか。',
          vietnamese: 'Nếu có thời gian thì xem phim không?',
          english: 'If you have time, shall we watch a movie?',
          type: 'main'
        },
        {
          japanese: 'もし100万円あれば、何を買いますか。',
          vietnamese: 'Nếu có 1 triệu yên thì bạn sẽ mua gì?',
          english: 'If you had 1 million yen, what would you buy?',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ても/でも',
      vietnamese: 'dù ~ đi nữa',
      english: 'even if ~',
      type: 'additional',
      explanation: 'Biểu thị điều kiện nhượng bộ. Cấu tạo: động từ て形 + も, い形容詞くて + も, な形容詞/danh từ + でも.',
      examples: [
        {
          japanese: '雨が降っても行きます。',
          vietnamese: 'Dù trời mưa tôi vẫn đi.',
          english: 'Even if it rains, I\'ll go.',
          type: 'main'
        },
        {
          japanese: '高くても買います。',
          vietnamese: 'Dù đắt tôi vẫn mua.',
          english: 'Even if it\'s expensive, I\'ll buy it.',
          type: 'main'
        },
        {
          japanese: '忙しくても手伝ってください。',
          vietnamese: 'Dù bận vẫn giúp tôi nhé.',
          english: 'Even if you\'re busy, please help me.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜なければならない',
      vietnamese: 'phải ~',
      english: 'must ~',
      type: 'additional',
      explanation: 'Biểu thị nghĩa vụ, sự bắt buộc. Có thể rút gọn thành 〜なきゃ trong lời nói thân mật.',
      examples: [
        {
          japanese: '宿題をしなければなりません。',
          vietnamese: 'Tôi phải làm bài tập về nhà.',
          english: 'I must do my homework.',
          type: 'main'
        },
        {
          japanese: '早く起きなければなりません。',
          vietnamese: 'Tôi phải dậy sớm.',
          english: 'I must wake up early.',
          type: 'main'
        }
      ]
    }
  ]
};

/**
 * N4 Core Lessons — Lesson 11: Sentence Ending Expressions
 * Appearance and hearsay expressions
 */

import type { LessonData } from '$lib/types';

export const LESSON_11_DATA: LessonData = {
  lessonNumber: 11,
  title: '様態表現 (Biểu hiện dáng vẻ, truyền đạt)',
  vocabulary: [
    // Appearance verbs
    {
      japanese: '見える',
      kana: 'みえる',
      vietnamese: 'nhìn thấy, có vẻ',
      english: 'to be visible, to look, to seem',
      type: 'main',
      example: 'あそこに富士山が見えます。'
    },
    {
      japanese: '聞こえる',
      kana: 'きこえる',
      vietnamese: 'nghe thấy',
      english: 'to be audible, can hear',
      type: 'main',
      example: '音楽が聞こえます。'
    },
    {
      japanese: '似る',
      kana: 'にる',
      vietnamese: 'giống',
      english: 'to resemble, to be similar',
      type: 'main',
      example: '彼は父に似ています。'
    },
    {
      japanese: '似ている',
      kana: 'にている',
      vietnamese: 'giống nhau',
      english: 'to be similar',
      type: 'main',
      example: '双子は顔が似ています。'
    },

    // Weather and conditions
    {
      japanese: '晴れる',
      kana: 'はれる',
      vietnamese: 'nắng, quang đãng',
      english: 'to clear up (weather)',
      type: 'main',
      example: '明日は晴れるそうです。'
    },
    {
      japanese: '曇る',
      kana: 'くもる',
      vietnamese: 'có mây, âm u',
      english: 'to become cloudy',
      type: 'main',
      example: '午後から曇りそうです。'
    },
    {
      japanese: '降る',
      kana: 'ふる',
      vietnamese: 'rơi (mưa, tuyết)',
      english: 'to fall (rain, snow)',
      type: 'main',
      example: '雨が降りそうです。'
    },
    {
      japanese: '台風',
      kana: 'たいふう',
      vietnamese: 'bão',
      english: 'typhoon',
      type: 'main',
      example: '台風が来るそうです。'
    },
    {
      japanese: '地震',
      kana: 'じしん',
      vietnamese: 'động đất',
      english: 'earthquake',
      type: 'main',
      example: '地震が起こりそうです。'
    },
    {
      japanese: '雷',
      kana: 'かみなり',
      vietnamese: 'sấm sét',
      english: 'thunder, lightning',
      type: 'main',
      example: '雷が鳴っています。'
    },

    // Appearance adjectives
    {
      japanese: '美味しそう',
      kana: 'おいしそう',
      vietnamese: 'trông ngon',
      english: 'looks delicious',
      type: 'main',
      example: 'このケーキは美味しそうです。'
    },
    {
      japanese: '楽しそう',
      kana: 'たのしそう',
      vietnamese: 'trông vui',
      english: 'looks fun',
      type: 'main',
      example: 'あの人は楽しそうです。'
    },
    {
      japanese: '難しそう',
      kana: 'むずかしそう',
      vietnamese: 'trông khó',
      english: 'looks difficult',
      type: 'main',
      example: 'この問題は難しそうです。'
    },
    {
      japanese: '暑そう',
      kana: 'あつそう',
      vietnamese: 'trông nóng',
      english: 'looks hot',
      type: 'main',
      example: '今日は暑そうです。'
    },
    {
      japanese: '寒そう',
      kana: 'さむそう',
      vietnamese: 'trông lạnh',
      english: 'looks cold',
      type: 'main',
      example: '外は寒そうです。'
    },

    // States and conditions
    {
      japanese: '元気',
      kana: 'げんき',
      vietnamese: 'khỏe mạnh, vui vẻ',
      english: 'healthy, energetic',
      type: 'main',
      example: '彼女は元気そうです。'
    },
    {
      japanese: '病気',
      kana: 'びょうき',
      vietnamese: 'bệnh',
      english: 'illness, disease',
      type: 'main',
      example: '病気のようです。'
    },
    {
      japanese: '疲れる',
      kana: 'つかれる',
      vietnamese: 'mệt mỏi',
      english: 'to get tired',
      type: 'main',
      example: '彼は疲れているようです。'
    },
    {
      japanese: '眠い',
      kana: 'ねむい',
      vietnamese: 'buồn ngủ',
      english: 'sleepy',
      type: 'main',
      example: '眠そうな顔をしています。'
    },
    {
      japanese: '忙しい',
      kana: 'いそがしい',
      vietnamese: 'bận rộn',
      english: 'busy',
      type: 'main',
      example: '最近忙しそうです。'
    },

    // Communication verbs
    {
      japanese: '伝える',
      kana: 'つたえる',
      vietnamese: 'truyền đạt, cho biết',
      english: 'to convey, to tell',
      type: 'main',
      example: '彼に伝えてください。'
    },
    {
      japanese: '知らせる',
      kana: 'しらせる',
      vietnamese: 'thông báo',
      english: 'to inform, to notify',
      type: 'main',
      example: '結果を知らせます。'
    },
    {
      japanese: '報告',
      kana: 'ほうこく',
      vietnamese: 'báo cáo',
      english: 'report',
      type: 'main',
      example: '上司に報告します。'
    },
    {
      japanese: '連絡',
      kana: 'れんらく',
      vietnamese: 'liên lạc',
      english: 'contact, communication',
      type: 'main',
      example: '後で連絡します。'
    },
    {
      japanese: '返事',
      kana: 'へんじ',
      vietnamese: 'trả lời',
      english: 'reply, answer',
      type: 'main',
      example: '返事を待っています。'
    },

    // News and information
    {
      japanese: 'ニュース',
      kana: 'ニュース',
      vietnamese: 'tin tức',
      english: 'news',
      type: 'main',
      example: 'ニュースで聞きました。'
    },
    {
      japanese: '新聞',
      kana: 'しんぶん',
      vietnamese: 'báo giấy',
      english: 'newspaper',
      type: 'main',
      example: '新聞によると、雨が降るそうです。'
    },
    {
      japanese: '天気予報',
      kana: 'てんきよほう',
      vietnamese: 'dự báo thời tiết',
      english: 'weather forecast',
      type: 'main',
      example: '天気予報によると、明日は晴れるそうです。'
    },
    {
      japanese: '情報',
      kana: 'じょうほう',
      vietnamese: 'thông tin',
      english: 'information',
      type: 'main',
      example: '新しい情報があります。'
    },
    {
      japanese: 'インターネット',
      kana: 'インターネット',
      vietnamese: 'internet',
      english: 'internet',
      type: 'main',
      example: 'インターネットで調べました。'
    },

    // Additional vocabulary
    {
      japanese: '様子',
      kana: 'ようす',
      vietnamese: 'tình trạng, dáng vẻ',
      english: 'appearance, situation',
      type: 'additional',
      example: '様子を見ましょう。'
    },
    {
      japanese: '感じ',
      kana: 'かんじ',
      vietnamese: 'cảm giác',
      english: 'feeling, impression',
      type: 'additional',
      example: 'いい感じです。'
    },
    {
      japanese: '雰囲気',
      kana: 'ふんいき',
      vietnamese: 'bầu không khí',
      english: 'atmosphere, mood',
      type: 'additional',
      example: 'いい雰囲気のレストランです。'
    },
    {
      japanese: '印象',
      kana: 'いんしょう',
      vietnamese: 'ấn tượng',
      english: 'impression',
      type: 'additional',
      example: 'いい印象を受けました。'
    },
    {
      japanese: '表情',
      kana: 'ひょうじょう',
      vietnamese: 'nét mặt, biểu cảm',
      english: 'facial expression',
      type: 'additional',
      example: '彼の表情が変わりました。'
    },
    {
      japanese: '態度',
      kana: 'たいど',
      vietnamese: 'thái độ',
      english: 'attitude',
      type: 'additional',
      example: '態度が悪いです。'
    },
    {
      japanese: '性格',
      kana: 'せいかく',
      vietnamese: 'tính cách',
      english: 'personality, character',
      type: 'additional',
      example: '明るい性格です。'
    },
    {
      japanese: '外見',
      kana: 'がいけん',
      vietnamese: 'ngoại hình',
      english: 'appearance, exterior',
      type: 'additional',
      example: '外見だけで判断しないでください。'
    },
    {
      japanese: '確か',
      kana: 'たしか',
      vietnamese: 'chắc chắn',
      english: 'certain, sure',
      type: 'additional',
      example: '確かに聞きました。'
    },
    {
      japanese: '多分',
      kana: 'たぶん',
      vietnamese: 'có lẽ',
      english: 'probably, maybe',
      type: 'additional',
      example: '多分雨が降ります。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn',
      english: 'surely, certainly',
      type: 'additional',
      example: 'きっと来ます。'
    },
    {
      japanese: 'どうやら',
      kana: 'どうやら',
      vietnamese: 'có vẻ như',
      english: 'apparently, it seems',
      type: 'additional',
      example: 'どうやら雨が降りそうです。'
    },
    {
      japanese: 'まるで',
      kana: 'まるで',
      vietnamese: 'giống như, như thể',
      english: 'just like, as if',
      type: 'additional',
      example: 'まるで夢のようです。'
    },
    {
      japanese: 'ちょうど',
      kana: 'ちょうど',
      vietnamese: 'vừa vặn, đúng lúc',
      english: 'just, exactly',
      type: 'additional',
      example: 'ちょうど来たところです。'
    },
    {
      japanese: '最近',
      kana: 'さいきん',
      vietnamese: 'gần đây',
      english: 'recently, lately',
      type: 'additional',
      example: '最近忙しいです。'
    },
    {
      japanese: '最新',
      kana: 'さいしん',
      vietnamese: 'mới nhất',
      english: 'latest, newest',
      type: 'additional',
      example: '最新のニュースです。'
    },
    {
      japanese: '最高',
      kana: 'さいこう',
      vietnamese: 'tốt nhất, cao nhất',
      english: 'best, highest',
      type: 'additional',
      example: '最高の景色です。'
    },
    {
      japanese: '調子',
      kana: 'ちょうし',
      vietnamese: 'tình trạng, tình hình',
      english: 'condition, state',
      type: 'additional',
      example: '調子がいいです。'
    },
    {
      japanese: '具合',
      kana: 'ぐあい',
      vietnamese: 'tình trạng (sức khỏe)',
      english: 'condition (health)',
      type: 'additional',
      example: '具合が悪いです。'
    },
    {
      japanese: '状態',
      kana: 'じょうたい',
      vietnamese: 'trạng thái',
      english: 'state, condition',
      type: 'additional',
      example: 'いい状態です。'
    },
    {
      japanese: '状況',
      kana: 'じょうきょう',
      vietnamese: 'tình hình',
      english: 'situation, circumstances',
      type: 'additional',
      example: '状況を説明してください。'
    },

    // Supplementary
    {
      japanese: '噂',
      kana: 'うわさ',
      vietnamese: 'tin đồn',
      english: 'rumor, gossip',
      type: 'supplementary',
      example: '噂によると、彼は結婚するそうです。'
    },
    {
      japanese: '評判',
      kana: 'ひょうばん',
      vietnamese: 'danh tiếng, uy tín',
      english: 'reputation, reviews',
      type: 'supplementary',
      example: 'この店は評判がいいです。'
    },
    {
      japanese: '口調',
      kana: 'くちょう',
      vietnamese: 'giọng điệu',
      english: 'tone (of voice)',
      type: 'supplementary',
      example: '優しい口調で話します。'
    },
    {
      japanese: '様',
      kana: 'さま',
      vietnamese: 'ngài, quý vị',
      english: 'Mr./Ms. (formal)',
      type: 'supplementary',
      example: '田中様、いらっしゃいませ。'
    },
    {
      japanese: '方',
      kana: 'かた',
      vietnamese: 'người (lịch sự)',
      english: 'person (polite)',
      type: 'supplementary',
      example: 'あの方は誰ですか。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | e8ee441d9f124871
    {
      japanese: "事故にあいます",
      kana: "あいます",
      vietnamese: "gặp, bị gặp phải; trong bài: gặp tai nạn",
      english: "gặp, bị gặp phải; trong bài: gặp tai nạn",
      type: "main",
      example: "事故にあいました。\nJiko ni aimashita.\nTôi đã gặp tai nạn."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 028fb483b895eb31
    {
      japanese: "貯金します",
      kana: "ちょきんします",
      vietnamese: "tiết kiệm tiền, để dành tiền",
      english: "tiết kiệm tiền, để dành tiền",
      type: "main",
      example: "毎月貯金します。\nMaitsuki chokin shimasu.\nHằng tháng tôi tiết kiệm tiền."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 6f5afd6a4bc2e4f4
    {
      japanese: "過ぎます",
      kana: "すぎます",
      vietnamese: "quá, qua khỏi thời điểm",
      english: "quá, qua khỏi thời điểm",
      type: "main",
      example: "7時を過ぎました。\nShichi-ji o sugimashita.\nĐã quá 7 giờ."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 591e35e00bbd2780
    {
      japanese: "慣れます",
      kana: "なれます",
      vietnamese: "quen với",
      english: "quen với",
      type: "main",
      example: "日本の生活に慣れました。\nNihon no seikatsu ni naremashita.\nTôi đã quen với cuộc sống ở Nhật."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | a60232ddebcdedc5
    {
      japanese: "習慣",
      kana: "しゅうかん",
      vietnamese: "tập quán, thói quen",
      english: "tập quán, thói quen",
      type: "main",
      example: "早く寝る習慣があります。\nHayaku neru shuukan ga arimasu.\nTôi có thói quen ngủ sớm."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 4e1ce96941be4c0e
    {
      japanese: "腐ります",
      kana: "くさります",
      vietnamese: "bị hỏng, bị thiu",
      english: "bị hỏng, bị thiu",
      type: "main",
      example: "食べ物が腐りました。\nTabemono ga kusarimashita.\nThức ăn bị thiu rồi."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 7e1a795bca951b8d
    {
      japanese: "食べ物",
      kana: "たべもの",
      vietnamese: "thức ăn",
      english: "thức ăn",
      type: "main",
      example: "食べ物を買います。\nTabemono o kaimasu.\nTôi mua thức ăn."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 0c76e888eb185a5f
    {
      japanese: "剣道",
      kana: "けんどう",
      vietnamese: "kiếm đạo",
      english: "kiếm đạo",
      type: "main",
      example: "兄は剣道をしています。\nAni wa kendou o shite imasu.\nAnh trai tôi học kiếm đạo."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 2cbf165b49eebc24
    {
      japanese: "柔道",
      kana: "じゅうどう",
      vietnamese: "Judo, nhu đạo",
      english: "Judo, nhu đạo",
      type: "main",
      example: "柔道を習っています。\nJuudou o naratte imasu.\nTôi đang học Judo."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 5a32a68e52139d90
    {
      japanese: "ラッシュ",
      kana: "ラッシュ",
      vietnamese: "giờ cao điểm, tắc đường",
      english: "giờ cao điểm, tắc đường",
      type: "main",
      example: "朝のラッシュは大変です。\nAsa no rasshu wa taihen desu.\nGiờ cao điểm buổi sáng rất vất vả."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | d87e908ef814d4f1
    {
      japanese: "宇宙",
      kana: "うちゅう",
      vietnamese: "vũ trụ",
      english: "vũ trụ",
      type: "main",
      example: "宇宙に行きたいです。\nUchuu ni ikitai desu.\nTôi muốn đi vào vũ trụ."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | a789c627f71c0846
    {
      japanese: "曲",
      kana: "きょく",
      vietnamese: "bài hát, bản nhạc",
      english: "bài hát, bản nhạc",
      type: "main",
      example: "好きな曲を聞きます。\nSuki na kyoku o kikimasu.\nTôi nghe bài hát yêu thích."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 7f319e879cdf9b8e
    {
      japanese: "毎週",
      kana: "まいしゅう",
      vietnamese: "hằng tuần",
      english: "hằng tuần",
      type: "main",
      example: "毎週テニスをします。\nMaishuu tenisu o shimasu.\nHằng tuần tôi chơi tennis."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | ee457215d4d0948d
    {
      japanese: "毎月",
      kana: "まいつき",
      vietnamese: "hằng tháng",
      english: "hằng tháng",
      type: "main",
      example: "毎月本を一冊読みます。\nMaitsuki hon o issatsu yomimasu.\nMỗi tháng tôi đọc một quyển sách."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | efc448ba0332d66e
    {
      japanese: "毎年",
      kana: "まいとし / まいねん",
      vietnamese: "hằng năm",
      english: "hằng năm",
      type: "main",
      example: "毎年旅行します。\nMaitoshi ryokou shimasu.\nHằng năm tôi đi du lịch."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | c9175c819274d7a1
    {
      japanese: "このごろ",
      kana: "このごろ",
      vietnamese: "gần đây, dạo này",
      english: "gần đây, dạo này",
      type: "main",
      example: "このごろ忙しいです。\nKono goro isogashii desu.\nDạo này tôi bận."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 8dbf0226b83bd407
    {
      japanese: "やっと",
      kana: "やっと",
      vietnamese: "cuối cùng thì",
      english: "cuối cùng thì",
      type: "main",
      example: "やっと宿題が終わりました。\nYatto shukudai ga owarimashita.\nCuối cùng bài tập cũng xong."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | db805e5981ef9717
    {
      japanese: "かなり",
      kana: "かなり",
      vietnamese: "khá, tương đối",
      english: "khá, tương đối",
      type: "main",
      example: "今日はかなり寒いです。\nKyou wa kanari samui desu.\nHôm nay khá lạnh."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 2da1b14e2f1f7aad
    {
      japanese: "必ず",
      kana: "かならず",
      vietnamese: "nhất định",
      english: "nhất định",
      type: "main",
      example: "明日必ず来てください。\nAshita kanarazu kite kudasai.\nNgày mai nhất định hãy đến nhé."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | d59382d731cf8425
    {
      japanese: "絶対に",
      kana: "ぜったいに",
      vietnamese: "nhất định, tuyệt đối",
      english: "nhất định, tuyệt đối",
      type: "main",
      example: "絶対に忘れません。\nZettai ni wasuremasen.\nTôi tuyệt đối không quên."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 761b2d0057854de3
    {
      japanese: "上手に",
      kana: "じょうずに",
      vietnamese: "giỏi, khéo",
      english: "giỏi, khéo",
      type: "main",
      example: "彼は日本語を上手に話します。\nKare wa Nihongo o jouzu ni hanashimasu.\nAnh ấy nói tiếng Nhật giỏi."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | 963fad01ac1d32f2
    {
      japanese: "できるだけ",
      kana: "できるだけ",
      vietnamese: "cố gắng hết mức có thể",
      english: "cố gắng hết mức có thể",
      type: "main",
      example: "できるだけ早く来ます。\nDekiru dake hayaku kimasu.\nTôi sẽ đến sớm nhất có thể."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | c7e0cd565ecdd751
    {
      japanese: "ほとんど",
      kana: "ほとんど",
      vietnamese: "hầu hết, hầu như",
      english: "hầu hết, hầu như",
      type: "main",
      example: "宿題はほとんど終わりました。\nShukudai wa hotondo owarimashita.\nBài tập hầu như đã xong."
    },
    // source: review_tu_vung_bai_36.md | 1. Từ vựng chính | fff6f06d38d43721
    {
      japanese: "ショパン",
      kana: "ショパン",
      vietnamese: "Chopin, nhà soạn nhạc Ba Lan",
      english: "Chopin, nhà soạn nhạc Ba Lan",
      type: "main",
      example: "ショパンの曲が好きです。\nShopan no kyoku ga suki desu.\nTôi thích nhạc của Chopin."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | ca05bb10cc20a02f
    {
      japanese: "お客様",
      kana: "おきゃくさま",
      vietnamese: "quý khách, khách hàng",
      english: "quý khách, khách hàng",
      type: "supplementary",
      example: "お客様がいらっしゃいました。\nOkyakusama ga irasshaimashita.\nQuý khách đã đến."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | 3f1a450d4a5563ef
    {
      japanese: "特別［な］",
      kana: "とくべつ［な］",
      vietnamese: "đặc biệt",
      english: "đặc biệt",
      type: "supplementary",
      example: "今日は特別な日です。\nKyou wa tokubetsu na hi desu.\nHôm nay là một ngày đặc biệt."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | 9de518f41ef2106b
    {
      japanese: "していらっしゃいます",
      kana: "していらっしゃいます",
      vietnamese: "đang làm — tôn kính ngữ của しています",
      english: "đang làm — tôn kính ngữ của しています",
      type: "supplementary",
      example: "先生は研究をしていらっしゃいます。\nSensei wa kenkyuu o shite irasshaimasu.\nThầy/cô đang nghiên cứu."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | b0960b7287bf2314
    {
      japanese: "水泳",
      kana: "すいえい",
      vietnamese: "bơi, môn bơi",
      english: "bơi, môn bơi",
      type: "supplementary",
      example: "水泳が上手です。\nSuiei ga jouzu desu.\nTôi bơi giỏi."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | 950071c09ade0cb6
    {
      japanese: "違います",
      kana: "ちがいます",
      vietnamese: "khác nhau, sai",
      english: "khác nhau, sai",
      type: "supplementary",
      example: "答えが違います。\nKotae ga chigaimasu.\nĐáp án sai/khác."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | bc58550fc818b4be
    {
      japanese: "使っていらっしゃるんですね",
      kana: "つかっていらっしゃるんですね",
      vietnamese: "đang dùng nhỉ — kính ngữ của 使っているんですね",
      english: "đang dùng nhỉ — kính ngữ của 使っているんですね",
      type: "supplementary",
      example: "このパソコンを使っていらっしゃるんですね。\nKono pasokon o tsukatte irassharun desu ne.\nNgài đang dùng máy tính này nhỉ."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | f154e6cd74e991a3
    {
      japanese: "チャレンジします",
      kana: "チャレンジします",
      vietnamese: "thử sức, thử làm",
      english: "thử sức, thử làm",
      type: "supplementary",
      example: "新しい仕事にチャレンジします。\nAtarashii shigoto ni charenji shimasu.\nTôi thử sức với công việc mới."
    },
    // source: review_tu_vung_bai_36.md | 2. Từ vựng phần hội thoại | b5f00e5013be5a71
    {
      japanese: "気持ち",
      kana: "きもち",
      vietnamese: "cảm giác, tâm trạng, tâm thế",
      english: "cảm giác, tâm trạng, tâm thế",
      type: "supplementary",
      example: "気持ちがいいです。\nKimochi ga ii desu.\nTôi cảm thấy dễ chịu."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 18fb2455f80b6348
    {
      japanese: "乗り物",
      kana: "のりもの",
      vietnamese: "phương tiện đi lại",
      english: "phương tiện đi lại",
      type: "supplementary",
      example: "日本の乗り物は便利です。\nNihon no norimono wa benri desu.\nPhương tiện đi lại ở Nhật rất tiện."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 83be5666f07ee650
    {
      japanese: "一世紀",
      kana: "いっせいき",
      vietnamese: "một thế kỷ",
      english: "một thế kỷ",
      type: "supplementary",
      example: "一世紀前の写真です。\nIsseiki mae no shashin desu.\nĐây là bức ảnh từ một thế kỷ trước."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 2af02d778494b407
    {
      japanese: "遠く",
      kana: "とおく",
      vietnamese: "xa, ở xa",
      english: "xa, ở xa",
      type: "supplementary",
      example: "遠くへ行きたいです。\nTooku e ikitai desu.\nTôi muốn đi xa."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | cc2319e146b87496
    {
      japanese: "珍しい",
      kana: "めずらしい",
      vietnamese: "hiếm, lạ",
      english: "hiếm, lạ",
      type: "supplementary",
      example: "珍しい花を見ました。\nMezurashii hana o mimashita.\nTôi đã thấy một loài hoa hiếm."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 7f73727d2d2c546e
    {
      japanese: "汽車",
      kana: "きしゃ",
      vietnamese: "tàu hỏa chạy bằng hơi nước",
      english: "tàu hỏa chạy bằng hơi nước",
      type: "supplementary",
      example: "昔、汽車で旅行しました。\nMukashi, kisha de ryokou shimashita.\nNgày xưa người ta đi du lịch bằng tàu hơi nước."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 41431e2bb6db04a1
    {
      japanese: "汽船",
      kana: "きせん",
      vietnamese: "thuyền chạy bằng hơi nước",
      english: "thuyền chạy bằng hơi nước",
      type: "supplementary",
      example: "汽船で川を渡ります。\nKisen de kawa o watarimasu.\nĐi qua sông bằng thuyền hơi nước."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 1a671c31f01377c1
    {
      japanese: "大勢の",
      kana: "おおぜいの",
      vietnamese: "nhiều người",
      english: "nhiều người",
      type: "supplementary",
      example: "大勢の人が来ました。\nOozei no hito ga kimashita.\nRất nhiều người đã đến."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 69a4a167e00b6b27
    {
      japanese: "運びます",
      kana: "はこびます",
      vietnamese: "mang, chở, vận chuyển",
      english: "mang, chở, vận chuyển",
      type: "supplementary",
      example: "荷物を運びます。\nNimotsu o hakobimasu.\nTôi mang hành lý."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 3dcc9393df0125e3
    {
      japanese: "利用します",
      kana: "りようします",
      vietnamese: "sử dụng",
      english: "sử dụng",
      type: "supplementary",
      example: "電車を利用します。\nDensha o riyou shimasu.\nTôi sử dụng tàu điện."
    },
    // source: review_tu_vung_bai_36.md | 3. Từ vựng phần đọc hiểu | 47ea175376a2bac0
    {
      japanese: "自由に",
      kana: "じゆうに",
      vietnamese: "tự do, thoải mái",
      english: "tự do, thoải mái",
      type: "supplementary",
      example: "自由に話してください。\nJiyuu ni hanashite kudasai.\nHãy nói chuyện thoải mái."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | 02b04bf1748279b3
    {
      japanese: "事故にあいます",
      kana: "事故にあいます",
      vietnamese: "gặp tai nạn",
      english: "gặp tai nạn",
      type: "supplementary",
      example: "Dùng trợ từ に / ni với 事故."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | d46d06349507b34e
    {
      japanese: "貯金します",
      kana: "貯金します",
      vietnamese: "tiết kiệm tiền",
      english: "tiết kiệm tiền",
      type: "supplementary",
      example: "Danh từ Hán + します."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | df25cbda6575766b
    {
      japanese: "7時を過ぎます",
      kana: "7時を過ぎます",
      vietnamese: "quá 7 giờ",
      english: "quá 7 giờ",
      type: "supplementary",
      example: "Dùng を / o với mốc thời gian bị vượt qua."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | a6652de5f5788615
    {
      japanese: "習慣に慣れます",
      kana: "習慣に慣れます",
      vietnamese: "quen với tập quán",
      english: "quen với tập quán",
      type: "supplementary",
      example: "慣れます / naremasu thường đi với に / ni."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | e462aadca7d02590
    {
      japanese: "食べ物が腐ります",
      kana: "食べ物が腐ります",
      vietnamese: "thức ăn bị thiu",
      english: "thức ăn bị thiu",
      type: "supplementary",
      example: "Chủ ngữ là đồ ăn/thức ăn."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | 348ce769b6b24ebf
    {
      japanese: "できるだけ早く",
      kana: "できるだけ早く",
      vietnamese: "sớm nhất có thể",
      english: "sớm nhất có thể",
      type: "supplementary",
      example: "Cụm rất hay dùng trong hội thoại."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | 936351bca2b496f3
    {
      japanese: "必ず来ます",
      kana: "必ず来ます",
      vietnamese: "nhất định sẽ đến",
      english: "nhất định sẽ đến",
      type: "supplementary",
      example: "Sắc thái chắc chắn, cam kết."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | b531220868494ed0
    {
      japanese: "絶対に忘れません",
      kana: "絶対に忘れません",
      vietnamese: "tuyệt đối không quên",
      english: "tuyệt đối không quên",
      type: "supplementary",
      example: "Mạnh hơn 必ず trong nhiều ngữ cảnh."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | f36d24d1cd3c3eac
    {
      japanese: "上手に話します",
      kana: "上手に話します",
      vietnamese: "nói khéo/giỏi",
      english: "nói khéo/giỏi",
      type: "supplementary",
      example: "Tính từ な + に để bổ nghĩa cho động từ."
    },
    // source: review_tu_vung_bai_36.md | 4. Cụm cần nhớ trong bài 36 | f9febd8b1e09b24a
    {
      japanese: "水泳をしています",
      kana: "水泳をしています",
      vietnamese: "đang bơi/tập bơi",
      english: "đang bơi/tập bơi",
      type: "supplementary",
      example: "Danh từ hoạt động + をします."
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 8b13833816f4290e
    {
      japanese: "事",
      kana: "ジ / ji",
      vietnamese: "Sự — việc, sự việc",
      english: "việc, sự việc",
      type: "kanji",
      example: "事故 / jiko"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 7b015647bd15ef72
    {
      japanese: "金",
      kana: "キン / kin",
      vietnamese: "Kim — tiền, vàng",
      english: "tiền, vàng",
      type: "kanji",
      example: "貯金 / chokin"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ff1e136aab190926
    {
      japanese: "過",
      kana: "カ / ka",
      vietnamese: "Quá — đi qua, vượt quá",
      english: "đi qua, vượt quá",
      type: "kanji",
      example: "過ぎます / sugimasu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | c2dcd3ae7e143a8e
    {
      japanese: "習",
      kana: "シュウ / shuu",
      vietnamese: "Tập — học, tập luyện",
      english: "học, tập luyện",
      type: "kanji",
      example: "習慣 / shuukan"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 2698039170706f52
    {
      japanese: "食",
      kana: "ショク / shoku",
      vietnamese: "Thực — ăn",
      english: "ăn",
      type: "kanji",
      example: "食べ物 / tabemono"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 6f412c2980feef12
    {
      japanese: "物",
      kana: "ブツ / butsu, モツ / motsu",
      vietnamese: "Vật — đồ vật",
      english: "đồ vật",
      type: "kanji",
      example: "食べ物 / tabemono, 乗り物 / norimono"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 3635c2f7b02bccad
    {
      japanese: "道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — đường, đạo",
      english: "đường, đạo",
      type: "kanji",
      example: "剣道 / kendou, 柔道 / juudou"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 7589d8d7b5ff7865
    {
      japanese: "曲",
      kana: "キョク / kyoku",
      vietnamese: "Khúc — bài hát, khúc nhạc, cong",
      english: "bài hát, khúc nhạc, cong",
      type: "kanji",
      example: "曲 / kyoku"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ac31fad426368d91
    {
      japanese: "毎",
      kana: "マイ / mai",
      vietnamese: "Mỗi — mỗi",
      english: "mỗi",
      type: "kanji",
      example: "毎週 / maishuu, 毎月 / maitsuki, 毎年 / maitoshi"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 5e61e609d29173de
    {
      japanese: "週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — tuần",
      english: "tuần",
      type: "kanji",
      example: "毎週 / maishuu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 769e8813369a5f50
    {
      japanese: "月",
      kana: "ゲツ / getsu, ガツ / gatsu",
      vietnamese: "Nguyệt — tháng, mặt trăng",
      english: "tháng, mặt trăng",
      type: "kanji",
      example: "毎月 / maitsuki"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 029a6ed2d78cc21c
    {
      japanese: "年",
      kana: "ネン / nen",
      vietnamese: "Niên — năm",
      english: "năm",
      type: "kanji",
      example: "毎年 / maitoshi / mainen"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 019b03746d937e0c
    {
      japanese: "必",
      kana: "ヒツ / hitsu",
      vietnamese: "Tất — nhất định, tất yếu",
      english: "nhất định, tất yếu",
      type: "kanji",
      example: "必ず / kanarazu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 1079ac44a999f10a
    {
      japanese: "上",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — trên, giỏi",
      english: "trên, giỏi",
      type: "kanji",
      example: "上手 / jouzu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | fa8e6e0aafbe3874
    {
      japanese: "手",
      kana: "シュ / shu",
      vietnamese: "Thủ — tay, kỹ năng",
      english: "tay, kỹ năng",
      type: "kanji",
      example: "上手 / jouzu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | d0a5405d2a7961f3
    {
      japanese: "客",
      kana: "キャク / kyaku, カク / kaku",
      vietnamese: "Khách — khách",
      english: "khách",
      type: "kanji",
      example: "お客様 / okyakusama"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | da3313001e360165
    {
      japanese: "特",
      kana: "トク / toku",
      vietnamese: "Đặc — đặc biệt",
      english: "đặc biệt",
      type: "kanji",
      example: "特別 / tokubetsu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 3e4a2498871bf690
    {
      japanese: "別",
      kana: "ベツ / betsu",
      vietnamese: "Biệt — khác, riêng biệt",
      english: "khác, riêng biệt",
      type: "kanji",
      example: "特別 / tokubetsu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 788c3e16db2b28f1
    {
      japanese: "水",
      kana: "スイ / sui",
      vietnamese: "Thủy — nước",
      english: "nước",
      type: "kanji",
      example: "水泳 / suiei"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ec4eccddbcaad788
    {
      japanese: "泳",
      kana: "エイ / ei",
      vietnamese: "Vịnh — bơi",
      english: "bơi",
      type: "kanji",
      example: "水泳 / suiei"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | d4a2e96a476ab7b6
    {
      japanese: "違",
      kana: "イ / i",
      vietnamese: "Vi — khác, sai",
      english: "khác, sai",
      type: "kanji",
      example: "違います / chigaimasu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ac85e337de0b4f0a
    {
      japanese: "使",
      kana: "シ / shi",
      vietnamese: "Sử — dùng",
      english: "dùng",
      type: "kanji",
      example: "使います / tsukaimasu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 7b71a156eb008e08
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần, cảm giác",
      english: "khí, tinh thần, cảm giác",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | c949241f4c80df3b
    {
      japanese: "持",
      kana: "ジ / ji",
      vietnamese: "Trì — cầm, giữ",
      english: "cầm, giữ",
      type: "kanji",
      example: "気持ち / kimochi"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ee8cd2d2ed5721c6
    {
      japanese: "乗",
      kana: "ジョウ / jou",
      vietnamese: "Thừa — cưỡi, lên xe",
      english: "cưỡi, lên xe",
      type: "kanji",
      example: "乗り物 / norimono"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | ed1203ff35b5bbf0
    {
      japanese: "世",
      kana: "セイ / sei, セ / se",
      vietnamese: "Thế — đời, thế giới",
      english: "đời, thế giới",
      type: "kanji",
      example: "一世紀 / isseiki"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 7bd2deb7010a02c8
    {
      japanese: "遠",
      kana: "エン / en",
      vietnamese: "Viễn — xa",
      english: "xa",
      type: "kanji",
      example: "遠く / tooku"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 0711a2104975dee0
    {
      japanese: "船",
      kana: "セン / sen",
      vietnamese: "Thuyền — thuyền",
      english: "thuyền",
      type: "kanji",
      example: "汽船 / kisen"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 47061102654dda88
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大勢 / oozei"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 8d0c01d90b21808e
    {
      japanese: "運",
      kana: "ウン / un",
      vietnamese: "Vận — vận chuyển, vận động",
      english: "vận chuyển, vận động",
      type: "kanji",
      example: "運びます / hakobimasu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | b120b082738171dd
    {
      japanese: "利",
      kana: "リ / ri",
      vietnamese: "Lợi — lợi ích",
      english: "lợi ích",
      type: "kanji",
      example: "利用 / riyou"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 1c6e9afe5ff13bc0
    {
      japanese: "用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — dùng",
      english: "dùng",
      type: "kanji",
      example: "利用 / riyou"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | a16c65985e15b0d8
    {
      japanese: "自",
      kana: "ジ / ji",
      vietnamese: "Tự — tự mình",
      english: "tự mình",
      type: "kanji",
      example: "自由 / jiyuu"
    },
    // source: review_tu_vung_bai_36.md | 6. Kanji N5–N4 cần học kỹ | 07fafdd65d95965e
    {
      japanese: "由",
      kana: "ユウ / yuu",
      vietnamese: "Do — nguyên do, nguồn gốc",
      english: "nguyên do, nguồn gốc",
      type: "kanji",
      example: "自由 / jiyuu"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 999b8ce98412db9d
    {
      japanese: "事故",
      kana: "ジ / ji",
      vietnamese: "Sự — 事 = sự việc; 故 = sự cố/cớ",
      english: "事 = sự việc; 故 = sự cố/cớ",
      type: "kanji",
      example: "事故"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b5d4562fd5d6d14b
    {
      japanese: "事",
      kana: "こと / koto",
      vietnamese: "Sự — 事 = việc",
      english: "事 = việc",
      type: "kanji",
      example: "事"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 94070880962bb7cf
    {
      japanese: "貯金",
      kana: "キン / kin",
      vietnamese: "Kim — 貯 = trữ; 金 = tiền",
      english: "貯 = trữ; 金 = tiền",
      type: "kanji",
      example: "貯金"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 09de3c39d601dc71
    {
      japanese: "お金",
      kana: "かね / kane",
      vietnamese: "Kim — 金 = tiền",
      english: "金 = tiền",
      type: "kanji",
      example: "お金"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7b7ed2cfed6ad349
    {
      japanese: "過ぎる",
      kana: "す.ぎる / sugiru",
      vietnamese: "Quá — 過 = vượt qua",
      english: "過 = vượt qua",
      type: "kanji",
      example: "過ぎる"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3777382c9150a8f0
    {
      japanese: "習慣",
      kana: "シュウ / shuu",
      vietnamese: "Tập — 習 = học, tập; 慣 = quen",
      english: "習 = học, tập; 慣 = quen",
      type: "kanji",
      example: "習慣"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0a9efb355abe76f0
    {
      japanese: "習う",
      kana: "なら.う / narau",
      vietnamese: "Tập — 習 = học",
      english: "習 = học",
      type: "kanji",
      example: "習う"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7fdda4ec7b612b32
    {
      japanese: "食べ物",
      kana: "た.べる / taberu",
      vietnamese: "Thực — 食 = ăn; 物 = đồ vật",
      english: "食 = ăn; 物 = đồ vật",
      type: "kanji",
      example: "食べ物"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7293596795cf5aa0
    {
      japanese: "食堂",
      kana: "ショク / shoku",
      vietnamese: "Thực — 食 = ăn; 堂 = nhà/sảnh",
      english: "食 = ăn; 堂 = nhà/sảnh",
      type: "kanji",
      example: "食堂"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 36364ddf06a375c3
    {
      japanese: "食べ物",
      kana: "もの / mono",
      vietnamese: "Vật — 食べ = ăn; 物 = đồ vật",
      english: "食べ = ăn; 物 = đồ vật",
      type: "kanji",
      example: "食べ物"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 415dcc7478b2fe0a
    {
      japanese: "乗り物",
      kana: "もの / mono",
      vietnamese: "Vật — 乗り = đi/lên xe; 物 = vật",
      english: "乗り = đi/lên xe; 物 = vật",
      type: "kanji",
      example: "乗り物"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fbb3e7977f25f32d
    {
      japanese: "剣道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — 剣 = kiếm; 道 = đạo",
      english: "剣 = kiếm; 道 = đạo",
      type: "kanji",
      example: "剣道"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8125bea8f979ebbf
    {
      japanese: "柔道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — 柔 = mềm; 道 = đạo",
      english: "柔 = mềm; 道 = đạo",
      type: "kanji",
      example: "柔道"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 558c400e06d5b132
    {
      japanese: "道",
      kana: "みち / michi",
      vietnamese: "Đạo — 道 = đường",
      english: "道 = đường",
      type: "kanji",
      example: "道"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 82e95226add35805
    {
      japanese: "毎週",
      kana: "マイ / mai",
      vietnamese: "Mỗi — 毎 = mỗi; 週 = tuần",
      english: "毎 = mỗi; 週 = tuần",
      type: "kanji",
      example: "毎週"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e8452180c7905265
    {
      japanese: "毎月",
      kana: "マイ / mai",
      vietnamese: "Mỗi — 毎 = mỗi; 月 = tháng",
      english: "毎 = mỗi; 月 = tháng",
      type: "kanji",
      example: "毎月"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 85bed51ef38fa925
    {
      japanese: "毎年",
      kana: "マイ / mai",
      vietnamese: "Mỗi — 毎 = mỗi; 年 = năm",
      english: "毎 = mỗi; 年 = năm",
      type: "kanji",
      example: "毎年"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7d8b021b1cb70b4e
    {
      japanese: "毎週",
      kana: "シュウ / shuu",
      vietnamese: "Chu — 毎 = mỗi; 週 = tuần",
      english: "毎 = mỗi; 週 = tuần",
      type: "kanji",
      example: "毎週"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f5f4543669b01405
    {
      japanese: "毎月",
      kana: "つき / tsuki",
      vietnamese: "Nguyệt — 毎 = mỗi; 月 = tháng",
      english: "毎 = mỗi; 月 = tháng",
      type: "kanji",
      example: "毎月"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 776924565d765629
    {
      japanese: "毎年",
      kana: "とし / toshi",
      vietnamese: "Niên — 毎 = mỗi; 年 = năm",
      english: "毎 = mỗi; 年 = năm",
      type: "kanji",
      example: "毎年"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 115a96960160cdfe
    {
      japanese: "必ず",
      kana: "かなら.ず / kanarazu",
      vietnamese: "Tất — 必 = nhất định",
      english: "必 = nhất định",
      type: "kanji",
      example: "必ず"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5e23400631aa5ad6
    {
      japanese: "上手",
      kana: "ジョウ / jou",
      vietnamese: "Thượng — 上 = trên/giỏi; 手 = tay/kỹ năng",
      english: "上 = trên/giỏi; 手 = tay/kỹ năng",
      type: "kanji",
      example: "上手"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1c4ef8a00efb5318
    {
      japanese: "上手",
      kana: "シュ / shu/zu",
      vietnamese: "Thủ — 上 = trên/giỏi; 手 = kỹ năng",
      english: "上 = trên/giỏi; 手 = kỹ năng",
      type: "kanji",
      example: "上手"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 353c7f90afda7701
    {
      japanese: "お客様",
      kana: "キャク / kyaku",
      vietnamese: "Khách — 客 = khách; 様 = ngài",
      english: "客 = khách; 様 = ngài",
      type: "kanji",
      example: "お客様"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 27438571169959b3
    {
      japanese: "特別",
      kana: "トク / toku",
      vietnamese: "Đặc — 特 = đặc; 別 = riêng/khác",
      english: "特 = đặc; 別 = riêng/khác",
      type: "kanji",
      example: "特別"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9514b516b6c4da7a
    {
      japanese: "特別",
      kana: "ベツ / betsu",
      vietnamese: "Biệt — 特 = đặc; 別 = riêng biệt",
      english: "特 = đặc; 別 = riêng biệt",
      type: "kanji",
      example: "特別"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9caa040aca6d1ad0
    {
      japanese: "水泳",
      kana: "スイ / sui",
      vietnamese: "Thủy — 水 = nước; 泳 = bơi",
      english: "水 = nước; 泳 = bơi",
      type: "kanji",
      example: "水泳"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 32b5509375eba078
    {
      japanese: "水泳",
      kana: "エイ / ei",
      vietnamese: "Vịnh — 水 = nước; 泳 = bơi",
      english: "水 = nước; 泳 = bơi",
      type: "kanji",
      example: "水泳"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c0808636aee321f1
    {
      japanese: "違う",
      kana: "ちが.う / chigau",
      vietnamese: "Vi — 違 = khác, sai",
      english: "違 = khác, sai",
      type: "kanji",
      example: "違う"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bf37e22880e39771
    {
      japanese: "使う",
      kana: "つか.う / tsukau",
      vietnamese: "Sử — 使 = dùng",
      english: "使 = dùng",
      type: "kanji",
      example: "使う"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 872404487345de78
    {
      japanese: "気持ち",
      kana: "キ / ki",
      vietnamese: "Khí — 気 = cảm giác; 持 = giữ",
      english: "気 = cảm giác; 持 = giữ",
      type: "kanji",
      example: "気持ち"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | e0e24cd3fb4ae8db
    {
      japanese: "持つ",
      kana: "も.つ / motsu",
      vietnamese: "Trì — 気 = cảm giác; 持 = giữ",
      english: "気 = cảm giác; 持 = giữ",
      type: "kanji",
      example: "持つ"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | dfca9dee9acda6bd
    {
      japanese: "乗り物",
      kana: "の.る / noru",
      vietnamese: "Thừa — 乗 = lên xe; 物 = vật",
      english: "乗 = lên xe; 物 = vật",
      type: "kanji",
      example: "乗り物"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d61def273d62bc08
    {
      japanese: "一世紀",
      kana: "セイ / sei",
      vietnamese: "Thế — 一 = một; 世 = đời/thế; 紀 = kỷ",
      english: "一 = một; 世 = đời/thế; 紀 = kỷ",
      type: "kanji",
      example: "一世紀"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 6dc08b640ac8f5ac
    {
      japanese: "遠い",
      kana: "とお.い / tooi",
      vietnamese: "Viễn — 遠 = xa",
      english: "遠 = xa",
      type: "kanji",
      example: "遠い"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1a94f244d9f7bd79
    {
      japanese: "汽船",
      kana: "セン / sen",
      vietnamese: "Thuyền — 汽 = hơi nước; 船 = thuyền",
      english: "汽 = hơi nước; 船 = thuyền",
      type: "kanji",
      example: "汽船"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3fcf86ebf77c59a3
    {
      japanese: "大勢",
      kana: "おお / oo",
      vietnamese: "Đại — 大 = nhiều/lớn; 勢 = thế, số lượng",
      english: "大 = nhiều/lớn; 勢 = thế, số lượng",
      type: "kanji",
      example: "大勢"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3c3e560918e4fd3a
    {
      japanese: "運ぶ",
      kana: "はこ.ぶ / hakobu",
      vietnamese: "Vận — 運 = vận chuyển",
      english: "運 = vận chuyển",
      type: "kanji",
      example: "運ぶ"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 43b38d7797a3acce
    {
      japanese: "利用",
      kana: "リ / ri",
      vietnamese: "Lợi — 利 = lợi; 用 = dùng",
      english: "利 = lợi; 用 = dùng",
      type: "kanji",
      example: "利用"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 24cbba959f50eade
    {
      japanese: "利用",
      kana: "ヨウ / you",
      vietnamese: "Dụng — 利 = lợi; 用 = dùng",
      english: "利 = lợi; 用 = dùng",
      type: "kanji",
      example: "利用"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | c53d17027855e1e8
    {
      japanese: "自由",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 由 = do, nguyên do",
      english: "自 = tự mình; 由 = do, nguyên do",
      type: "kanji",
      example: "自由"
    },
    // source: review_tu_vung_bai_36.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 65dc753a8548e398
    {
      japanese: "自由",
      kana: "ユウ / yuu",
      vietnamese: "Do — 自 = tự mình; 由 = do, nguyên do",
      english: "自 = tự mình; 由 = do, nguyên do",
      type: "kanji",
      example: "自由"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '〜そうだ (appearance)',
      vietnamese: 'trông có vẻ ~',
      english: 'looks/seems like ~',
      type: 'main',
      explanation: 'Diễn tả vẻ ngoài, trạng thái có thể quan sát được. Với い-adj: bỏ い + そう. Với な-adj/động từ: thêm そう.',
      examples: [
        {
          japanese: 'この料理は美味しそうです。',
          vietnamese: 'Món ăn này trông ngon.',
          english: 'This dish looks delicious.',
          type: 'main'
        },
        {
          japanese: '雨が降りそうです。',
          vietnamese: 'Trông như sắp mưa.',
          english: 'It looks like it will rain.',
          type: 'main'
        },
        {
          japanese: '彼は忙しそうです。',
          vietnamese: 'Anh ấy trông có vẻ bận.',
          english: 'He looks busy.',
          type: 'main'
        },
        {
          japanese: 'あの人は楽しそうに話しています。',
          vietnamese: 'Người đó nói chuyện với vẻ vui vẻ.',
          english: 'That person is talking happily.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜そうだ (hearsay)',
      vietnamese: 'nghe nói rằng ~',
      english: 'I heard that ~',
      type: 'main',
      explanation: 'Diễn tả thông tin nghe được từ người khác hoặc nguồn tin. Dùng với câu thông thường + そうだ.',
      examples: [
        {
          japanese: '明日は雨が降るそうです。',
          vietnamese: 'Nghe nói ngày mai sẽ mưa.',
          english: 'I heard it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '田中さんは来月結婚するそうです。',
          vietnamese: 'Nghe nói anh Tanaka sẽ kết hôn tháng sau.',
          english: 'I heard Mr. Tanaka will get married next month.',
          type: 'main'
        },
        {
          japanese: 'ニュースによると、台風が来るそうです。',
          vietnamese: 'Theo tin tức, có bão sắp đến.',
          english: 'According to the news, a typhoon is coming.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜ようだ',
      vietnamese: 'có vẻ như ~, giống như ~',
      english: 'it seems that ~, it\'s like ~',
      type: 'main',
      explanation: 'Diễn tả sự suy đoán dựa trên quan sát hoặc thông tin. Mềm mỏng hơn そうだ.',
      examples: [
        {
          japanese: '彼は病気のようです。',
          vietnamese: 'Anh ấy có vẻ bị bệnh.',
          english: 'He seems to be sick.',
          type: 'main'
        },
        {
          japanese: '雨が降ったようです。',
          vietnamese: 'Có vẻ như đã mưa.',
          english: 'It seems it rained.',
          type: 'main'
        },
        {
          japanese: 'まるで夢のようです。',
          vietnamese: 'Giống như trong mơ.',
          english: 'It\'s like a dream.',
          type: 'main'
        },
        {
          japanese: 'どうやら間違えたようです。',
          vietnamese: 'Có vẻ như tôi đã nhầm.',
          english: 'It seems I made a mistake.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜みたいだ',
      vietnamese: 'giống như ~, có vẻ ~',
      english: 'looks like ~, seems like ~',
      type: 'main',
      explanation: 'Tương tự ようだ nhưng thân mật hơn. Dùng trong hội thoại hàng ngày.',
      examples: [
        {
          japanese: '彼は学生みたいです。',
          vietnamese: 'Anh ấy có vẻ là học sinh.',
          english: 'He looks like a student.',
          type: 'main'
        },
        {
          japanese: '雨が降ったみたいです。',
          vietnamese: 'Có vẻ đã mưa rồi.',
          english: 'It seems it rained.',
          type: 'main'
        },
        {
          japanese: '彼女は忙しいみたいです。',
          vietnamese: 'Cô ấy có vẻ bận.',
          english: 'She seems busy.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '〜によると',
      vietnamese: 'theo ~',
      english: 'according to ~',
      type: 'main',
      explanation: 'Dùng để trích dẫn nguồn thông tin. Thường đi kèm với そうだ.',
      examples: [
        {
          japanese: '天気予報によると、明日は晴れるそうです。',
          vietnamese: 'Theo dự báo thời tiết, ngày mai trời sẽ nắng.',
          english: 'According to the weather forecast, it will be sunny tomorrow.',
          type: 'main'
        },
        {
          japanese: '新聞によると、地震があったそうです。',
          vietnamese: 'Theo báo chí, đã có động đất.',
          english: 'According to the newspaper, there was an earthquake.',
          type: 'main'
        },
        {
          japanese: '友達によると、その店は美味しいそうです。',
          vietnamese: 'Theo bạn tôi, quán đó ngon lắm.',
          english: 'According to my friend, that restaurant is delicious.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '見える / 聞こえる',
      vietnamese: 'nhìn thấy / nghe thấy',
      english: 'can see / can hear',
      type: 'additional',
      explanation: 'Động từ khả năng tự nhiên (không cần chủ ý). 見える: nhìn thấy tự nhiên. 聞こえる: nghe thấy tự nhiên.',
      examples: [
        {
          japanese: 'あそこに富士山が見えます。',
          vietnamese: 'Nhìn thấy núi Phú Sĩ ở đằng kia.',
          english: 'Mt. Fuji can be seen over there.',
          type: 'main'
        },
        {
          japanese: '音楽が聞こえます。',
          vietnamese: 'Nghe thấy tiếng nhạc.',
          english: 'Music can be heard.',
          type: 'main'
        },
        {
          japanese: '窓から海が見えます。',
          vietnamese: 'Nhìn thấy biển từ cửa sổ.',
          english: 'The sea can be seen from the window.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜に似ている',
      vietnamese: 'giống với ~',
      english: 'resembles ~, looks like ~',
      type: 'additional',
      explanation: 'Diễn tả sự giống nhau về ngoại hình hoặc tính cách.',
      examples: [
        {
          japanese: '彼は父に似ています。',
          vietnamese: 'Anh ấy giống bố.',
          english: 'He resembles his father.',
          type: 'main'
        },
        {
          japanese: 'この花はバラに似ています。',
          vietnamese: 'Bông hoa này giống hoa hồng.',
          english: 'This flower looks like a rose.',
          type: 'main'
        },
        {
          japanese: '双子は顔が似ています。',
          vietnamese: 'Hai chị em sinh đôi có khuôn mặt giống nhau.',
          english: 'The twins have similar faces.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜らしい',
      vietnamese: 'có vẻ ~, nghe nói ~',
      english: 'seems ~, I heard ~',
      type: 'additional',
      explanation: 'Diễn tả suy đoán dựa trên thông tin gián tiếp hoặc bằng chứng không chắc chắn.',
      examples: [
        {
          japanese: '明日は雨らしいです。',
          vietnamese: 'Có vẻ ngày mai sẽ mưa.',
          english: 'It seems it will rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は学生らしいです。',
          vietnamese: 'Có vẻ anh ấy là học sinh.',
          english: 'He seems to be a student.',
          type: 'main'
        },
        {
          japanese: 'この店は美味しいらしいです。',
          vietnamese: 'Nghe nói quán này ngon.',
          english: 'I heard this restaurant is delicious.',
          type: 'additional'
        }
      ]
    }
  ]
};

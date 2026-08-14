/**
 * N4 Core Lessons — Lesson 09: Causative Form
 * Focus: 使役形 (causative form) - making/letting someone do something
 */

import type { LessonData } from '$lib/types';

export const LESSON_09_DATA: LessonData = {
  lessonNumber: 9,
  title: '使役形 (Causative Form)',
  vocabulary: [
    // Verbs commonly used in causative
    {
      japanese: '行かせる',
      kana: 'いかせる',
      vietnamese: 'bắt/cho đi',
      english: 'to make/let go',
      type: 'main',
      example: '子供を学校に行かせます。'
    },
    {
      japanese: '来させる',
      kana: 'こさせる',
      vietnamese: 'bắt/cho đến',
      english: 'to make/let come',
      type: 'main',
      example: '部下を会議に来させました。'
    },
    {
      japanese: '食べさせる',
      kana: 'たべさせる',
      vietnamese: 'cho ăn',
      english: 'to feed, to let eat',
      type: 'main',
      example: '赤ちゃんに離乳食を食べさせます。'
    },
    {
      japanese: '飲ませる',
      kana: 'のませる',
      vietnamese: 'cho uống',
      english: 'to give a drink',
      type: 'main',
      example: '子供に薬を飲ませました。'
    },
    {
      japanese: '休ませる',
      kana: 'やすませる',
      vietnamese: 'cho nghỉ',
      english: 'to let rest',
      type: 'main',
      example: '病気の社員を休ませました。'
    },
    {
      japanese: '待たせる',
      kana: 'またせる',
      vietnamese: 'bắt đợi',
      english: 'to make wait',
      type: 'main',
      example: 'お客様を待たせてしまいました。'
    },
    {
      japanese: '泣かせる',
      kana: 'なかせる',
      vietnamese: 'làm khóc',
      english: 'to make cry',
      type: 'main',
      example: '子供を泣かせてしまいました。'
    },
    {
      japanese: '笑わせる',
      kana: 'わらわせる',
      vietnamese: 'làm cười',
      english: 'to make laugh',
      type: 'main',
      example: '友達を笑わせました。'
    },
    {
      japanese: '喜ばせる',
      kana: 'よろこばせる',
      vietnamese: 'làm vui',
      english: 'to please, to make happy',
      type: 'main',
      example: '母を喜ばせたいです。'
    },
    {
      japanese: '怒らせる',
      kana: 'おこらせる',
      vietnamese: 'làm tức giận',
      english: 'to make angry',
      type: 'main',
      example: '先生を怒らせてしまいました。'
    },
    {
      japanese: '心配させる',
      kana: 'しんぱいさせる',
      vietnamese: 'làm lo lắng',
      english: 'to make worry',
      type: 'main',
      example: '親を心配させてしまいました。'
    },
    {
      japanese: '困らせる',
      kana: 'こまらせる',
      vietnamese: 'làm khó',
      english: 'to trouble',
      type: 'main',
      example: '質問で先生を困らせました。'
    },
    {
      japanese: '驚かせる',
      kana: 'おどろかせる',
      vietnamese: 'làm ngạc nhiên',
      english: 'to surprise',
      type: 'main',
      example: '友達を驚かせました。'
    },
    {
      japanese: '感動させる',
      kana: 'かんどうさせる',
      vietnamese: 'làm cảm động',
      english: 'to move emotionally',
      type: 'main',
      example: 'あの映画は人を感動させます。'
    },
    {
      japanese: '勉強させる',
      kana: 'べんきょうさせる',
      vietnamese: 'bắt học',
      english: 'to make study',
      type: 'main',
      example: '子供に英語を勉強させています。'
    },
    {
      japanese: '働かせる',
      kana: 'はたらかせる',
      vietnamese: 'bắt làm việc',
      english: 'to make work',
      type: 'main',
      example: '社員を残業させました。'
    },
    {
      japanese: '手伝わせる',
      kana: 'てつだわせる',
      vietnamese: 'bắt giúp',
      english: 'to make help',
      type: 'main',
      example: '息子に料理を手伝わせました。'
    },
    {
      japanese: '掃除させる',
      kana: 'そうじさせる',
      vietnamese: 'bắt dọn dẹp',
      english: 'to make clean',
      type: 'main',
      example: '子供に部屋を掃除させます。'
    },
    {
      japanese: '覚えさせる',
      kana: 'おぼえさせる',
      vietnamese: 'bắt nhớ',
      english: 'to make remember',
      type: 'main',
      example: '学生に単語を覚えさせました。'
    },
    {
      japanese: '考えさせる',
      kana: 'かんがえさせる',
      vietnamese: 'bắt suy nghĩ',
      english: 'to make think',
      type: 'main',
      example: '生徒に自分で考えさせます。'
    },
    // Permission and allowing
    {
      japanese: '許す',
      kana: 'ゆるす',
      vietnamese: 'cho phép',
      english: 'to permit, to forgive',
      type: 'main',
      example: '外出を許しました。'
    },
    {
      japanese: '許可する',
      kana: 'きょかする',
      vietnamese: 'cho phép (chính thức)',
      english: 'to permit (formal)',
      type: 'main',
      example: '上司が許可してくれました。'
    },
    {
      japanese: '禁止する',
      kana: 'きんしする',
      vietnamese: 'cấm',
      english: 'to prohibit',
      type: 'main',
      example: 'ここでの喫煙は禁止されています。'
    },
    {
      japanese: '命令する',
      kana: 'めいれいする',
      vietnamese: 'ra lệnh',
      english: 'to order',
      type: 'main',
      example: '上司が残業を命令しました。'
    },
    {
      japanese: '強制する',
      kana: 'きょうせいする',
      vietnamese: 'ép buộc',
      english: 'to force',
      type: 'main',
      example: '無理に強制するのは良くないです。'
    },
    {
      japanese: '義務',
      kana: 'ぎむ',
      vietnamese: 'nghĩa vụ',
      english: 'duty, obligation',
      type: 'main',
      example: '税金を払うのは国民の義務です。'
    },
    {
      japanese: '責任',
      kana: 'せきにん',
      vietnamese: 'trách nhiệm',
      english: 'responsibility',
      type: 'main',
      example: 'リーダーには責任があります。'
    },
    {
      japanese: '権利',
      kana: 'けんり',
      vietnamese: 'quyền lợi',
      english: 'right',
      type: 'main',
      example: '誰でも教育を受ける権利があります。'
    },
    {
      japanese: '自由',
      kana: 'じゆう',
      vietnamese: 'tự do',
      english: 'freedom',
      type: 'main',
      example: '子供に自由にさせています。'
    },
    // Related nouns
    {
      japanese: '親',
      kana: 'おや',
      vietnamese: 'cha mẹ',
      english: 'parent',
      type: 'main',
      example: '親は子供に勉強させます。'
    },
    {
      japanese: '上司',
      kana: 'じょうし',
      vietnamese: 'cấp trên',
      english: 'boss',
      type: 'main',
      example: '上司が部下を働かせます。'
    },
    {
      japanese: '部下',
      kana: 'ぶか',
      vietnamese: 'cấp dưới',
      english: 'subordinate',
      type: 'main',
      example: '部下に資料を作らせました。'
    },
    {
      japanese: '先生',
      kana: 'せんせい',
      vietnamese: 'giáo viên',
      english: 'teacher',
      type: 'main',
      example: '先生は生徒に宿題をさせます。'
    },
    {
      japanese: '生徒',
      kana: 'せいと',
      vietnamese: 'học sinh',
      english: 'student',
      type: 'main',
      example: '生徒に作文を書かせました。'
    },
    {
      japanese: '監督',
      kana: 'かんとく',
      vietnamese: 'huấn luyện viên',
      english: 'coach, director',
      type: 'main',
      example: '監督が選手を走らせました。'
    },
    {
      japanese: '選手',
      kana: 'せんしゅ',
      vietnamese: 'vận động viên',
      english: 'athlete, player',
      type: 'main',
      example: '選手に練習させました。'
    },
    // Actions and states
    {
      japanese: '残業',
      kana: 'ざんぎょう',
      vietnamese: 'làm thêm giờ',
      english: 'overtime work',
      type: 'main',
      example: '部下を残業させました。'
    },
    {
      japanese: '出張',
      kana: 'しゅっちょう',
      vietnamese: 'công tác',
      english: 'business trip',
      type: 'main',
      example: '社員を出張させました。'
    },
    {
      japanese: '留学',
      kana: 'りゅうがく',
      vietnamese: 'du học',
      english: 'study abroad',
      type: 'main',
      example: '娘を留学させたいです。'
    },
    {
      japanese: '練習',
      kana: 'れんしゅう',
      vietnamese: 'luyện tập',
      english: 'practice',
      type: 'main',
      example: '選手に練習させました。'
    },
    {
      japanese: '経験',
      kana: 'けいけん',
      vietnamese: 'kinh nghiệm',
      english: 'experience',
      type: 'main',
      example: '若い人にいろいろ経験させたいです。'
    },
    {
      japanese: '体験',
      kana: 'たいけん',
      vietnamese: 'trải nghiệm',
      english: 'personal experience',
      type: 'main',
      example: '子供に色々なことを体験させます。'
    },
    {
      japanese: '挑戦',
      kana: 'ちょうせん',
      vietnamese: 'thử thách',
      english: 'challenge',
      type: 'main',
      example: '新しいことに挑戦させました。'
    },
    // Additional verbs
    {
      japanese: '育てる',
      kana: 'そだてる',
      vietnamese: 'nuôi dưỡng',
      english: 'to raise, to bring up',
      type: 'additional',
      example: '子供を大切に育てます。'
    },
    {
      japanese: '教育する',
      kana: 'きょういくする',
      vietnamese: 'giáo dục',
      english: 'to educate',
      type: 'additional',
      example: '子供を教育するのは大切です。'
    },
    {
      japanese: '指導する',
      kana: 'しどうする',
      vietnamese: 'chỉ đạo',
      english: 'to guide, to coach',
      type: 'additional',
      example: '若い社員を指導します。'
    },
    {
      japanese: '訓練する',
      kana: 'くんれんする',
      vietnamese: 'huấn luyện',
      english: 'to train',
      type: 'additional',
      example: '新入社員を訓練します。'
    },
    {
      japanese: '鍛える',
      kana: 'きたえる',
      vietnamese: 'rèn luyện',
      english: 'to train, to strengthen',
      type: 'additional',
      example: '体を鍛えています。'
    },
    // Supplementary expressions
    {
      japanese: '仕方がない',
      kana: 'しかたがない',
      vietnamese: 'không còn cách nào',
      english: 'it can\'t be helped',
      type: 'supplementary',
      example: '仕方がないから行かせます。'
    },
    {
      japanese: 'わがまま',
      kana: 'わがまま',
      vietnamese: 'ích kỷ, muốn gì được nấy',
      english: 'selfish, willful',
      type: 'supplementary',
      example: '子供をわがままにさせないでください。'
    },
    {
      japanese: '自立する',
      kana: 'じりつする',
      vietnamese: 'tự lập',
      english: 'to be independent',
      type: 'supplementary',
      example: '子供を自立させたいです。'
    },
    {
      japanese: '成長する',
      kana: 'せいちょうする',
      vietnamese: 'trưởng thành',
      english: 'to grow',
      type: 'supplementary',
      example: '子供を成長させたいです。'
    },
    {
      japanese: '発展する',
      kana: 'はってんする',
      vietnamese: 'phát triển',
      english: 'to develop',
      type: 'supplementary',
      example: '会社を発展させたいです。'
    },
    {
      japanese: '安心する',
      kana: 'あんしんする',
      vietnamese: 'yên tâm',
      english: 'to feel relieved',
      type: 'supplementary',
      example: '親を安心させたいです。'
    },
    {
      japanese: '満足する',
      kana: 'まんぞくする',
      vietnamese: 'hài lòng',
      english: 'to be satisfied',
      type: 'supplementary',
      example: 'お客様を満足させるのが目標です。'
    },
    {
      japanese: '反省する',
      kana: 'はんせいする',
      vietnamese: 'phản tỉnh',
      english: 'to reflect, to regret',
      type: 'supplementary',
      example: '生徒に反省させました。'
    },
    {
      japanese: '理解する',
      kana: 'りかいする',
      vietnamese: 'hiểu',
      english: 'to understand',
      type: 'supplementary',
      example: '学生に理解させるのが難しいです。'
    },
    {
      japanese: '納得する',
      kana: 'なっとくする',
      vietnamese: 'thuyết phục',
      english: 'to be convinced',
      type: 'supplementary',
      example: '相手を納得させました。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 8315aabb5f2477de
    {
      japanese: "磨きます［歯を～］",
      kana: "みがきます［歯を～］",
      vietnamese: "mài; đánh răng",
      english: "mài; đánh răng",
      type: "main",
      example: "毎朝、歯を磨きます。\nMaiasa, ha o migakimasu.\nMỗi sáng tôi đánh răng."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 8d4848726d191277
    {
      japanese: "組み立てます",
      kana: "くみたてます",
      vietnamese: "lắp, lắp ráp, lắp đặt",
      english: "lắp, lắp ráp, lắp đặt",
      type: "main",
      example: "机を組み立てます。\nTsukue o kumitatemasu.\nTôi lắp cái bàn."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 19a7e5c21ec5fc50
    {
      japanese: "折ります",
      kana: "おります",
      vietnamese: "gấp, gập, bẻ gãy",
      english: "gấp, gập, bẻ gãy",
      type: "main",
      example: "紙を半分に折ります。\nKami o hanbun ni orimasu.\nTôi gấp giấy làm đôi."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 70a2f6be6a7d94a2
    {
      japanese: "気がつきます［忘れ物に～］",
      kana: "きがつきます［忘れ物に～］",
      vietnamese: "nhận ra, phát hiện",
      english: "nhận ra, phát hiện",
      type: "main",
      example: "忘れ物に気がつきました。\nWasuremono ni ki ga tsukimashita.\nTôi đã nhận ra mình bỏ quên đồ."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | b8202d01ce7ee7ce
    {
      japanese: "つけます［しょうゆを～］",
      kana: "つけます［しょうゆを～］",
      vietnamese: "chấm, nhúng vào",
      english: "chấm, nhúng vào",
      type: "main",
      example: "すしにしょうゆをつけます。\nSushi ni shouyu o tsukemasu.\nTôi chấm sushi vào xì dầu."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 05f1da67e38ab878
    {
      japanese: "見つかります［鍵が～］",
      kana: "みつかります［鍵が～］",
      vietnamese: "được tìm thấy",
      english: "được tìm thấy",
      type: "main",
      example: "鍵が見つかりました。\nKagi ga mitsukarimashita.\nChìa khóa đã được tìm thấy."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 7c1c1c347b12653d
    {
      japanese: "質問します",
      kana: "しつもんします",
      vietnamese: "hỏi, đặt câu hỏi",
      english: "hỏi, đặt câu hỏi",
      type: "main",
      example: "先生に質問します。\nSensei ni shitsumon shimasu.\nTôi hỏi giáo viên."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | a7206bb2fba590af
    {
      japanese: "差します［傘を～］",
      kana: "さします［傘を～］",
      vietnamese: "che ô, giương ô",
      english: "che ô, giương ô",
      type: "main",
      example: "雨の日、傘を差します。\nAme no hi, kasa o sashimasu.\nNgày mưa, tôi che ô."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 4336fd5909779fe9
    {
      japanese: "スポーツクラブ",
      kana: "スポーツクラブ",
      vietnamese: "câu lạc bộ thể thao",
      english: "câu lạc bộ thể thao",
      type: "main",
      example: "スポーツクラブへ行きます。\nSupootsu kurabu e ikimasu.\nTôi đi câu lạc bộ thể thao."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 110a23ff316db719
    {
      japanese: "お城",
      kana: "おしろ",
      vietnamese: "thành, lâu đài",
      english: "thành, lâu đài",
      type: "main",
      example: "大阪のお城を見ました。\nOosaka no oshiro o mimashita.\nTôi đã xem thành Osaka."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 24e61ee61346bba1
    {
      japanese: "説明書",
      kana: "せつめいしょ",
      vietnamese: "sách hướng dẫn",
      english: "sách hướng dẫn",
      type: "main",
      example: "説明書を読んでください。\nSetsumeisho o yonde kudasai.\nHãy đọc sách hướng dẫn."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 598c30c8e94247bd
    {
      japanese: "図",
      kana: "ず",
      vietnamese: "sơ đồ, hình vẽ",
      english: "sơ đồ, hình vẽ",
      type: "main",
      example: "図を見てください。\nZu o mite kudasai.\nHãy nhìn sơ đồ."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | c43d4cd18a921288
    {
      japanese: "線",
      kana: "せん",
      vietnamese: "đường, đường kẻ",
      english: "đường, đường kẻ",
      type: "main",
      example: "赤い線を引きます。\nAkai sen o hikimasu.\nTôi kẻ đường màu đỏ."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | c21c52e4af98e807
    {
      japanese: "矢印",
      kana: "やじるし",
      vietnamese: "dấu mũi tên",
      english: "dấu mũi tên",
      type: "main",
      example: "矢印の方へ行ってください。\nYajirushi no hou e itte kudasai.\nHãy đi theo hướng mũi tên."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 0c7833252a9b3e4b
    {
      japanese: "黒",
      kana: "くろ",
      vietnamese: "màu đen",
      english: "màu đen",
      type: "main",
      example: "黒いかばんを買いました。\nKuroi kaban o kaimashita.\nTôi đã mua cái cặp màu đen."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 46c663bd1c68c8cb
    {
      japanese: "白",
      kana: "しろ",
      vietnamese: "màu trắng",
      english: "màu trắng",
      type: "main",
      example: "白いシャツを着ます。\nShiroi shatsu o kimasu.\nTôi mặc áo sơ mi trắng."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | ff5371579e73b0f3
    {
      japanese: "赤",
      kana: "あか",
      vietnamese: "màu đỏ",
      english: "màu đỏ",
      type: "main",
      example: "赤い花があります。\nAkai hana ga arimasu.\nCó bông hoa màu đỏ."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 28066f0f304fd0f2
    {
      japanese: "青",
      kana: "あお",
      vietnamese: "màu xanh da trời, xanh lam",
      english: "màu xanh da trời, xanh lam",
      type: "main",
      example: "青い空がきれいです。\nAoi sora ga kirei desu.\nBầu trời xanh rất đẹp."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | e64303b855bb6fa2
    {
      japanese: "紺",
      kana: "こん",
      vietnamese: "màu xanh lam đậm, xanh navy",
      english: "màu xanh lam đậm, xanh navy",
      type: "main",
      example: "紺のスーツを着ています。\nKon no suutsu o kite imasu.\nTôi đang mặc bộ vest xanh navy."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | df6b18a3af4141ac
    {
      japanese: "黄色",
      kana: "きいろ",
      vietnamese: "màu vàng",
      english: "màu vàng",
      type: "main",
      example: "黄色い傘を買いました。\nKiiroi kasa o kaimashita.\nTôi đã mua cái ô màu vàng."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 0e264d86662d80a6
    {
      japanese: "茶色",
      kana: "ちゃいろ",
      vietnamese: "màu nâu",
      english: "màu nâu",
      type: "main",
      example: "茶色の靴を履きます。\nChairo no kutsu o hakimasu.\nTôi đi giày màu nâu."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | f0aeac3135c0c16a
    {
      japanese: "醤油",
      kana: "しょうゆ",
      vietnamese: "xì dầu",
      english: "xì dầu",
      type: "main",
      example: "しょうゆを少しつけます。\nShouyu o sukoshi tsukemasu.\nTôi chấm một chút xì dầu."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 0964243ccb4b903e
    {
      japanese: "ソース",
      kana: "ソース",
      vietnamese: "nước chấm, nước sốt",
      english: "nước chấm, nước sốt",
      type: "main",
      example: "肉にソースをかけます。\nNiku ni soosu o kakemasu.\nTôi rưới sốt lên thịt."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 7bf17a05c124881d
    {
      japanese: "お客さん",
      kana: "おきゃくさん",
      vietnamese: "vị khách",
      english: "vị khách",
      type: "main",
      example: "お客さんが来ました。\nOkyaku-san ga kimashita.\nKhách đã đến."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 7c56c85595ec9ea9
    {
      japanese: "～か～",
      kana: "～か～",
      vietnamese: "~ hay ~",
      english: "~ hay ~",
      type: "main",
      example: "コーヒーかお茶を飲みます。\nKoohii ka ocha o nomimasu.\nTôi uống cà phê hoặc trà."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 7942e2457a6edb67
    {
      japanese: "昨夜",
      kana: "ゆうべ",
      vietnamese: "tối qua, đêm qua",
      english: "tối qua, đêm qua",
      type: "main",
      example: "ゆうべ勉強しました。\nYuube benkyou shimashita.\nTối qua tôi đã học."
    },
    // source: review_tu_vung_bai_34.md | 1. Từ vựng chính | 9d5ff8682bd230ae
    {
      japanese: "さっき",
      kana: "さっき",
      vietnamese: "vừa rồi, lúc nãy",
      english: "vừa rồi, lúc nãy",
      type: "main",
      example: "さっき電話しました。\nSakki denwa shimashita.\nVừa rồi tôi đã gọi điện."
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | b30f510a23c70483
    {
      japanese: "茶道",
      kana: "さどう",
      vietnamese: "trà đạo",
      english: "trà đạo",
      type: "supplementary",
      example: "茶道を習っています。\nSadou o naratte imasu.\nTôi đang học trà đạo."
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | beb897a4aa97ba98
    {
      japanese: "お茶をたてます",
      kana: "おちゃをたてます",
      vietnamese: "pha trà, khuấy trà",
      english: "pha trà, khuấy trà",
      type: "supplementary",
      example: "お茶をたてます。\nOcha o tatemasu.\nTôi pha trà."
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | 58c9634fa9c8a7dc
    {
      japanese: "先に",
      kana: "さきに",
      vietnamese: "trước, trước hết",
      english: "trước, trước hết",
      type: "supplementary",
      example: "先にご飯を食べます。\nSaki ni gohan o tabemasu.\nTôi ăn cơm trước."
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | 790cca4d57ad741b
    {
      japanese: "載せます",
      kana: "のせます",
      vietnamese: "để lên, đặt lên",
      english: "để lên, đặt lên",
      type: "supplementary",
      example: "皿に肉を載せます。\nSara ni niku o nosemasu.\nTôi đặt thịt lên đĩa."
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | 04f097a5857303a6
    {
      japanese: "これでいいですか。",
      kana: "これでいいですか。",
      vietnamese: "Thế này có được không?",
      english: "Thế này có được không?",
      type: "supplementary",
      example: "A: これでいいですか。\nKore de ii desu ka.\nThế này có được không?"
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | 7e3c9afb21e23e08
    {
      japanese: "いかがですか。",
      kana: "いかがですか。",
      vietnamese: "Như thế nào ạ?",
      english: "Như thế nào ạ?",
      type: "supplementary",
      example: "お味はいかがですか。\nOaji wa ikaga desu ka.\nHương vị thế nào ạ?"
    },
    // source: review_tu_vung_bai_34.md | 2. Từ vựng phần hội thoại | 3899aa0811814dba
    {
      japanese: "苦い",
      kana: "にがい",
      vietnamese: "đắng",
      english: "đắng",
      type: "supplementary",
      example: "このお茶は少し苦いです。\nKono ocha wa sukoshi nigai desu.\nTrà này hơi đắng."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | 8f1557b9b45852a5
    {
      japanese: "親子どんぶり",
      kana: "おやこどんぶり",
      vietnamese: "món oyako-don, cơm bát tô có thịt gà và trứng",
      english: "món oyako-don, cơm bát tô có thịt gà và trứng",
      type: "supplementary",
      example: "親子どんぶりを作ります。\nOyako donburi o tsukurimasu.\nTôi làm món oyako-don."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | c02c1d7acba3686d
    {
      japanese: "材料",
      kana: "ざいりょう",
      vietnamese: "nguyên liệu",
      english: "nguyên liệu",
      type: "supplementary",
      example: "材料を用意します。\nZairyou o youi shimasu.\nTôi chuẩn bị nguyên liệu."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | dca7f43fc97bad72
    {
      japanese: "～分",
      kana: "～ぶん",
      vietnamese: "phần, suất, lượng cho ~",
      english: "phần, suất, lượng cho ~",
      type: "supplementary",
      example: "これは一人分です。\nKore wa hitori-bun desu.\nĐây là phần cho một người."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | 4cac5efbbbe03979
    {
      japanese: "～グラム",
      kana: "～グラム",
      vietnamese: "~ gam",
      english: "~ gam",
      type: "supplementary",
      example: "肉を100グラム使います。\nNiku o hyaku-guramu tsukaimasu.\nDùng 100 gam thịt."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | f11a0f815f0272d4
    {
      japanese: "～個",
      kana: "～こ",
      vietnamese: "cái, quả, miếng; đếm vật nhỏ",
      english: "cái, quả, miếng; đếm vật nhỏ",
      type: "supplementary",
      example: "卵を二個使います。\nTamago o ni-ko tsukaimasu.\nDùng hai quả trứng."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | 087691a2bdc55611
    {
      japanese: "玉ねぎ",
      kana: "たまねぎ",
      vietnamese: "hành củ",
      english: "hành củ",
      type: "supplementary",
      example: "たまねぎを切ります。\nTamanegi o kirimasu.\nTôi cắt hành."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | bab1b8718a8bd791
    {
      japanese: "4分の1",
      kana: "4ぶんの1",
      vietnamese: "một phần tư",
      english: "một phần tư",
      type: "supplementary",
      example: "たまねぎを4分の1使います。\nTamanegi o yon-bun no ichi tsukaimasu.\nDùng một phần tư củ hành."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | e9310fa4128cee0f
    {
      japanese: "調味料",
      kana: "ちょうみりょう",
      vietnamese: "gia vị",
      english: "gia vị",
      type: "supplementary",
      example: "調味料を入れます。\nChoumiryou o iremasu.\nTôi cho gia vị vào."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | f087ba1b0f616fb6
    {
      japanese: "適当な大きさに",
      kana: "てきとうなおおきさに",
      vietnamese: "thành độ lớn thích hợp",
      english: "thành độ lớn thích hợp",
      type: "supplementary",
      example: "野菜を適当な大きさに切ります。\nYasai o tekitou na ookisa ni kirimasu.\nCắt rau thành kích thước thích hợp."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | da54aafcbecf8331
    {
      japanese: "鍋",
      kana: "なべ",
      vietnamese: "nồi",
      english: "nồi",
      type: "supplementary",
      example: "なべに水を入れます。\nNabe ni mizu o iremasu.\nTôi cho nước vào nồi."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | d9b061976a0cd7c2
    {
      japanese: "火",
      kana: "ひ",
      vietnamese: "lửa",
      english: "lửa",
      type: "supplementary",
      example: "火を弱くします。\nHi o yowaku shimasu.\nTôi vặn nhỏ lửa."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | bc14d1ccb4131c11
    {
      japanese: "火にかけます",
      kana: "ひにかけます",
      vietnamese: "cho lên lửa, đun",
      english: "cho lên lửa, đun",
      type: "supplementary",
      example: "なべを火にかけます。\nNabe o hi ni kakemasu.\nTôi đặt nồi lên bếp đun."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | f485054c801c4673
    {
      japanese: "煮ます",
      kana: "にます",
      vietnamese: "nấu, hầm, luộc",
      english: "nấu, hầm, luộc",
      type: "supplementary",
      example: "野菜を煮ます。\nYasai o nimasu.\nTôi nấu rau."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | f189586414a33e3f
    {
      japanese: "煮えます",
      kana: "にえます",
      vietnamese: "chín, được nấu chín",
      english: "chín, được nấu chín",
      type: "supplementary",
      example: "肉が煮えました。\nNiku ga niemashita.\nThịt đã chín."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | a484d83bbda305a7
    {
      japanese: "丼",
      kana: "どんぶり",
      vietnamese: "bát tô, món cơm bát tô",
      english: "bát tô, món cơm bát tô",
      type: "supplementary",
      example: "どんぶりにご飯を入れます。\nDonburi ni gohan o iremasu.\nTôi cho cơm vào bát tô."
    },
    // source: review_tu_vung_bai_34.md | 3. Từ vựng phần đọc hiểu | 6a1a2ec575721cfd
    {
      japanese: "経ちます",
      kana: "たちます",
      vietnamese: "thời gian trôi qua",
      english: "thời gian trôi qua",
      type: "supplementary",
      example: "10分経ちました。\nJuppun tachimashita.\nĐã trôi qua 10 phút."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 95b86cb421c5855e
    {
      japanese: "歯を磨きます",
      kana: "歯を磨きます",
      vietnamese: "đánh răng",
      english: "đánh răng",
      type: "supplementary",
      example: "Dùng trợ từ を / o với 歯."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | dcb85e3824bca0cb
    {
      japanese: "机を組み立てます",
      kana: "机を組み立てます",
      vietnamese: "lắp cái bàn",
      english: "lắp cái bàn",
      type: "supplementary",
      example: "Lắp ráp đồ vật từ các bộ phận."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | ecbcc93081a46220
    {
      japanese: "紙を折ります",
      kana: "紙を折ります",
      vietnamese: "gấp giấy",
      english: "gấp giấy",
      type: "supplementary",
      example: "折ります có thể là gấp hoặc bẻ gãy."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | d376c39498f4363e
    {
      japanese: "忘れ物に気がつきます",
      kana: "忘れ物に気がつきます",
      vietnamese: "nhận ra đồ bỏ quên",
      english: "nhận ra đồ bỏ quên",
      type: "supplementary",
      example: "Dùng に / ni với điều mình nhận ra."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | e4c5d923ce504122
    {
      japanese: "しょうゆをつけます",
      kana: "しょうゆをつけます",
      vietnamese: "chấm xì dầu",
      english: "chấm xì dầu",
      type: "supplementary",
      example: "Dùng khi chấm đồ ăn vào nước chấm."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 2b2006cdffa2d663
    {
      japanese: "鍵が見つかります",
      kana: "鍵が見つかります",
      vietnamese: "chìa khóa được tìm thấy",
      english: "chìa khóa được tìm thấy",
      type: "supplementary",
      example: "Tự động từ, chủ ngữ là vật được tìm thấy."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 7bf12b726e540489
    {
      japanese: "傘を差します",
      kana: "傘を差します",
      vietnamese: "che ô",
      english: "che ô",
      type: "supplementary",
      example: "Cụm cố định với 傘."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 56e874cf70e9054a
    {
      japanese: "説明書を読みます",
      kana: "説明書を読みます",
      vietnamese: "đọc sách hướng dẫn",
      english: "đọc sách hướng dẫn",
      type: "supplementary",
      example: "Hay gặp khi lắp ráp đồ."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 6d0ccd5f94e4518e
    {
      japanese: "図を見ます",
      kana: "図を見ます",
      vietnamese: "xem sơ đồ",
      english: "xem sơ đồ",
      type: "supplementary",
      example: "図 = sơ đồ, hình vẽ."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | cecbac2c7047c414
    {
      japanese: "お茶をたてます",
      kana: "お茶をたてます",
      vietnamese: "pha trà",
      english: "pha trà",
      type: "supplementary",
      example: "Dùng trong trà đạo."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | 9a36bfbbe85a4433
    {
      japanese: "火にかけます",
      kana: "火にかけます",
      vietnamese: "đặt lên lửa, đun",
      english: "đặt lên lửa, đun",
      type: "supplementary",
      example: "Dùng khi nấu ăn."
    },
    // source: review_tu_vung_bai_34.md | 4. Cụm cần nhớ trong bài 34 | a1a9f58490c84590
    {
      japanese: "適当な大きさに切ります",
      kana: "適当な大きさに切ります",
      vietnamese: "cắt thành độ lớn thích hợp",
      english: "cắt thành độ lớn thích hợp",
      type: "supplementary",
      example: "N/Na-adj + に chỉ kết quả sau khi cắt."
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | b2b9d314e40a4648
    {
      japanese: "歯",
      kana: "シ / shi",
      vietnamese: "Xỉ — răng",
      english: "răng",
      type: "kanji",
      example: "歯を磨きます / ha o migakimasu"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | b36bb1eedbe35ade
    {
      japanese: "気",
      kana: "キ / ki",
      vietnamese: "Khí — khí, tinh thần, cảm giác",
      english: "khí, tinh thần, cảm giác",
      type: "kanji",
      example: "気がつきます / ki ga tsukimasu"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | ea7c5b00ae302bf1
    {
      japanese: "見",
      kana: "ケン / ken",
      vietnamese: "Kiến — nhìn, thấy",
      english: "nhìn, thấy",
      type: "kanji",
      example: "見つかります / mitsukarimasu"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | b5333fdb21a5d087
    {
      japanese: "問",
      kana: "モン / mon",
      vietnamese: "Vấn — hỏi, vấn đề",
      english: "hỏi, vấn đề",
      type: "kanji",
      example: "質問します / shitsumon shimasu"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 213ce386ddc575a1
    {
      japanese: "城",
      kana: "ジョウ / jou",
      vietnamese: "Thành — thành, lâu đài",
      english: "thành, lâu đài",
      type: "kanji",
      example: "お城 / oshiro"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | fb7ff8b03b22edf7
    {
      japanese: "説",
      kana: "セツ / setsu",
      vietnamese: "Thuyết — giải thích, nói",
      english: "giải thích, nói",
      type: "kanji",
      example: "説明書 / setsumeisho"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 65ce38fe6d4a1dbf
    {
      japanese: "明",
      kana: "メイ / mei, ミョウ / myou",
      vietnamese: "Minh — sáng, rõ ràng",
      english: "sáng, rõ ràng",
      type: "kanji",
      example: "説明書 / setsumeisho"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 8cea7a450d484f90
    {
      japanese: "書",
      kana: "ショ / sho",
      vietnamese: "Thư — viết, sách",
      english: "viết, sách",
      type: "kanji",
      example: "説明書 / setsumeisho"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 6c3e9aade6373427
    {
      japanese: "図",
      kana: "ズ / zu, ト / to",
      vietnamese: "Đồ — hình vẽ, sơ đồ",
      english: "hình vẽ, sơ đồ",
      type: "kanji",
      example: "図 / zu"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 58482eca8e65ff0d
    {
      japanese: "線",
      kana: "セン / sen",
      vietnamese: "Tuyến — đường, tuyến",
      english: "đường, tuyến",
      type: "kanji",
      example: "線 / sen"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 6c672c3f0d899d2b
    {
      japanese: "黒",
      kana: "コク / koku",
      vietnamese: "Hắc — đen",
      english: "đen",
      type: "kanji",
      example: "黒 / kuro"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 3b5b37b60df53e79
    {
      japanese: "白",
      kana: "ハク / haku",
      vietnamese: "Bạch — trắng",
      english: "trắng",
      type: "kanji",
      example: "白 / shiro"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | fc49ed7deac6133b
    {
      japanese: "赤",
      kana: "セキ / seki",
      vietnamese: "Xích — đỏ",
      english: "đỏ",
      type: "kanji",
      example: "赤 / aka"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | d132a4373d9758a0
    {
      japanese: "青",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Thanh — xanh, xanh lam",
      english: "xanh, xanh lam",
      type: "kanji",
      example: "青 / ao"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 57d11624eef23f16
    {
      japanese: "色",
      kana: "ショク / shoku, シキ / shiki",
      vietnamese: "Sắc — màu sắc",
      english: "màu sắc",
      type: "kanji",
      example: "黄色 / kiiro, 茶色 / chairo"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 7f553bfbf1b997e3
    {
      japanese: "客",
      kana: "キャク / kyaku",
      vietnamese: "Khách — khách",
      english: "khách",
      type: "kanji",
      example: "お客さん / okyaku-san"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | aeccf7ea0c3a1007
    {
      japanese: "茶",
      kana: "チャ / cha, サ / sa",
      vietnamese: "Trà — trà, màu trà",
      english: "trà, màu trà",
      type: "kanji",
      example: "茶道 / sadou, 茶色 / chairo"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 13c83d0c297375b3
    {
      japanese: "道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — đường, đạo",
      english: "đường, đạo",
      type: "kanji",
      example: "茶道 / sadou"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | e9ae089e8a393d6b
    {
      japanese: "先",
      kana: "セン / sen",
      vietnamese: "Tiên — trước",
      english: "trước",
      type: "kanji",
      example: "先に / saki ni"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 0a9079bee3eb5f1c
    {
      japanese: "親",
      kana: "シン / shin",
      vietnamese: "Thân — cha mẹ, thân",
      english: "cha mẹ, thân",
      type: "kanji",
      example: "親子どんぶり / oyako donburi"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 7accaea653607e36
    {
      japanese: "子",
      kana: "シ / shi, ス / su",
      vietnamese: "Tử — con, đứa trẻ",
      english: "con, đứa trẻ",
      type: "kanji",
      example: "親子どんぶり / oyako donburi"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 746b258f2e639b85
    {
      japanese: "分",
      kana: "ブン / bun, フン / fun",
      vietnamese: "Phân — phần, phút, chia",
      english: "phần, phút, chia",
      type: "kanji",
      example: "～分 / ~ bun, 4分の1 / yon-bun no ichi"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 70b738f60be04360
    {
      japanese: "個",
      kana: "コ / ko",
      vietnamese: "Cá — cái, đơn vị đếm vật nhỏ",
      english: "cái, đơn vị đếm vật nhỏ",
      type: "kanji",
      example: "一個 / ikko"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 342a80c79ca0a2db
    {
      japanese: "大",
      kana: "ダイ / dai, タイ / tai",
      vietnamese: "Đại — to, lớn",
      english: "to, lớn",
      type: "kanji",
      example: "大きさ / ookisa"
    },
    // source: review_tu_vung_bai_34.md | 6. Kanji N5–N4 cần học kỹ | 8e61a88b02ae8fab
    {
      japanese: "火",
      kana: "カ / ka",
      vietnamese: "Hỏa — lửa",
      english: "lửa",
      type: "kanji",
      example: "火 / hi, 火にかけます / hi ni kakemasu"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bb30abd6a85bf08b
    {
      japanese: "歯",
      kana: "は / ha",
      vietnamese: "Xỉ — 歯 = răng",
      english: "歯 = răng",
      type: "kanji",
      example: "歯"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 760a9d2633107d71
    {
      japanese: "気がつく",
      kana: "キ / ki",
      vietnamese: "Khí — 気 = cảm giác; つく = nhận ra",
      english: "気 = cảm giác; つく = nhận ra",
      type: "kanji",
      example: "気がつく"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 91a6a83d38eb9c95
    {
      japanese: "元気",
      kana: "キ / ki",
      vietnamese: "Khí — 元 = nguồn gốc; 気 = khí/tinh thần",
      english: "元 = nguồn gốc; 気 = khí/tinh thần",
      type: "kanji",
      example: "元気"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 9d70c84ce53436aa
    {
      japanese: "見る",
      kana: "み.る / miru",
      vietnamese: "Kiến — 見 = nhìn, xem",
      english: "見 = nhìn, xem",
      type: "kanji",
      example: "見る"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | f32518f20f848d30
    {
      japanese: "見つかる",
      kana: "み.つかる / mitsukaru",
      vietnamese: "Kiến — 見 = thấy; つかる = được tìm thấy",
      english: "見 = thấy; つかる = được tìm thấy",
      type: "kanji",
      example: "見つかる"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 580de53722683292
    {
      japanese: "質問",
      kana: "モン / mon",
      vietnamese: "Vấn — 質 = chất/lượng; 問 = hỏi",
      english: "質 = chất/lượng; 問 = hỏi",
      type: "kanji",
      example: "質問"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | ec275c967126ee73
    {
      japanese: "問題",
      kana: "モン / mon",
      vietnamese: "Vấn — 問 = vấn đề; 題 = đề",
      english: "問 = vấn đề; 題 = đề",
      type: "kanji",
      example: "問題"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fd3567963fd6be9b
    {
      japanese: "お城",
      kana: "しろ / shiro",
      vietnamese: "Thành — 城 = thành, lâu đài",
      english: "城 = thành, lâu đài",
      type: "kanji",
      example: "お城"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 16f8ef8b68caa9e3
    {
      japanese: "説明",
      kana: "セツ / setsu",
      vietnamese: "Thuyết — 説 = giải thích; 明 = rõ ràng",
      english: "説 = giải thích; 明 = rõ ràng",
      type: "kanji",
      example: "説明"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 2cb2a2241cc71835
    {
      japanese: "説明",
      kana: "メイ / mei",
      vietnamese: "Minh — 説 = giải thích; 明 = rõ",
      english: "説 = giải thích; 明 = rõ",
      type: "kanji",
      example: "説明"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5c4491d65722c7e3
    {
      japanese: "明るい",
      kana: "あか.るい / akarui",
      vietnamese: "Minh — 明 = sáng/rõ",
      english: "明 = sáng/rõ",
      type: "kanji",
      example: "明るい"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d60fca2883eea81c
    {
      japanese: "書く",
      kana: "か.く / kaku",
      vietnamese: "Thư — 書 = viết",
      english: "書 = viết",
      type: "kanji",
      example: "書く"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 48a59569cf26e077
    {
      japanese: "説明書",
      kana: "ショ / sho",
      vietnamese: "Thư — 説明 = giải thích; 書 = sách/tài liệu",
      english: "説明 = giải thích; 書 = sách/tài liệu",
      type: "kanji",
      example: "説明書"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3925419cdc2072dc
    {
      japanese: "図",
      kana: "ズ / zu",
      vietnamese: "Đồ — 図 = sơ đồ, hình vẽ",
      english: "図 = sơ đồ, hình vẽ",
      type: "kanji",
      example: "図"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 5b724d63deb6abd1
    {
      japanese: "地図",
      kana: "ズ / zu",
      vietnamese: "Đồ — 地 = đất/bản đồ; 図 = hình vẽ",
      english: "地 = đất/bản đồ; 図 = hình vẽ",
      type: "kanji",
      example: "地図"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 82afc2235a17eeee
    {
      japanese: "黒",
      kana: "くろ / kuro",
      vietnamese: "Hắc — 黒 = đen",
      english: "黒 = đen",
      type: "kanji",
      example: "黒"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 1458471add9850a4
    {
      japanese: "白",
      kana: "しろ / shiro",
      vietnamese: "Bạch — 白 = trắng",
      english: "白 = trắng",
      type: "kanji",
      example: "白"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b3bcac543f13ffc8
    {
      japanese: "白い",
      kana: "しろ.い / shiroi",
      vietnamese: "Bạch — 白 = trắng",
      english: "白 = trắng",
      type: "kanji",
      example: "白い"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 7eda65e4020aabc1
    {
      japanese: "赤",
      kana: "あか / aka",
      vietnamese: "Xích — 赤 = đỏ",
      english: "赤 = đỏ",
      type: "kanji",
      example: "赤"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 0a85c717937429af
    {
      japanese: "赤い",
      kana: "あか.い / akai",
      vietnamese: "Xích — 赤 = đỏ",
      english: "赤 = đỏ",
      type: "kanji",
      example: "赤い"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 8e132f82954b4798
    {
      japanese: "青",
      kana: "あお / ao",
      vietnamese: "Thanh — 青 = xanh lam",
      english: "青 = xanh lam",
      type: "kanji",
      example: "青"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 3f1a96cfbac33b97
    {
      japanese: "青い",
      kana: "あお.い / aoi",
      vietnamese: "Thanh — 青 = xanh lam",
      english: "青 = xanh lam",
      type: "kanji",
      example: "青い"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d2dcd1bfea41f729
    {
      japanese: "黄色",
      kana: "いろ / iro",
      vietnamese: "Sắc — 黄 = vàng; 色 = màu",
      english: "黄 = vàng; 色 = màu",
      type: "kanji",
      example: "黄色"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 033610a06c3c1779
    {
      japanese: "茶色",
      kana: "いろ / iro",
      vietnamese: "Sắc — 茶 = trà/nâu; 色 = màu",
      english: "茶 = trà/nâu; 色 = màu",
      type: "kanji",
      example: "茶色"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fee0ef8716b78032
    {
      japanese: "お客さん",
      kana: "キャク / kyaku",
      vietnamese: "Khách — 客 = khách",
      english: "客 = khách",
      type: "kanji",
      example: "お客さん"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | d92707e08fa64a47
    {
      japanese: "茶道",
      kana: "サ / sa",
      vietnamese: "Trà — 茶 = trà; 道 = đạo",
      english: "茶 = trà; 道 = đạo",
      type: "kanji",
      example: "茶道"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | a0c97173acf5ebe6
    {
      japanese: "茶色",
      kana: "チャ / cha",
      vietnamese: "Trà — 茶 = trà/nâu; 色 = màu",
      english: "茶 = trà/nâu; 色 = màu",
      type: "kanji",
      example: "茶色"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 100bae0bfa555661
    {
      japanese: "茶道",
      kana: "ドウ / dou",
      vietnamese: "Đạo — 茶 = trà; 道 = đạo",
      english: "茶 = trà; 道 = đạo",
      type: "kanji",
      example: "茶道"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 558c400e06d5b132
    {
      japanese: "道",
      kana: "みち / michi",
      vietnamese: "Đạo — 道 = đường",
      english: "道 = đường",
      type: "kanji",
      example: "道"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b6d6dd24ea3c05be
    {
      japanese: "先に",
      kana: "さき / saki",
      vietnamese: "Tiên — 先 = trước",
      english: "先 = trước",
      type: "kanji",
      example: "先に"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 505afa7952dda482
    {
      japanese: "親子",
      kana: "おや / oya",
      vietnamese: "Thân — 親 = cha mẹ; 子 = con",
      english: "親 = cha mẹ; 子 = con",
      type: "kanji",
      example: "親子"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 32d740a573531fd4
    {
      japanese: "親子",
      kana: "こ / ko",
      vietnamese: "Tử — 親 = cha mẹ; 子 = con",
      english: "親 = cha mẹ; 子 = con",
      type: "kanji",
      example: "親子"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b7360d43c63fa01e
    {
      japanese: "～分",
      kana: "ブン / bun",
      vietnamese: "Phân — 分 = phần",
      english: "分 = phần",
      type: "kanji",
      example: "～分"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | bd53acb2cfe08d11
    {
      japanese: "4分の1",
      kana: "ブン / bun",
      vietnamese: "Phân — 分 = chia; 4分の1 = một trong bốn phần",
      english: "分 = chia; 4分の1 = một trong bốn phần",
      type: "kanji",
      example: "4分の1"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 4278734778480255
    {
      japanese: "一個",
      kana: "コ / ko",
      vietnamese: "Cá — 個 = cái, đơn vị đếm",
      english: "個 = cái, đơn vị đếm",
      type: "kanji",
      example: "一個"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | b0a97335382f8d5b
    {
      japanese: "大きさ",
      kana: "おお.きい / ookii",
      vietnamese: "Đại — 大 = lớn; きさ = độ",
      english: "大 = lớn; きさ = độ",
      type: "kanji",
      example: "大きさ"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | fa095044eed1e3bd
    {
      japanese: "火",
      kana: "ひ / hi",
      vietnamese: "Hỏa — 火 = lửa",
      english: "火 = lửa",
      type: "kanji",
      example: "火"
    },
    // source: review_tu_vung_bai_34.md | 7. Từ ghép On/Kun của Kanji N5–N4 | 619f9b9dc749e862
    {
      japanese: "火山",
      kana: "カ / ka",
      vietnamese: "Hỏa — 火 = lửa; 山 = núi",
      english: "火 = lửa; 山 = núi",
      type: "kanji",
      example: "火山"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '使役形（基本）',
      vietnamese: 'thể sai khiến (cơ bản)',
      english: 'causative form (basic)',
      type: 'main',
      explanation: 'Biểu thị hành động bắt hoặc cho phép ai đó làm gì. Cấu tạo: Nhóm I: a段 + せる (書く→書かせる), Nhóm II: る → させる (食べる→食べさせる), Nhóm III: する→させる, くる→こさせる. Người được bắt/cho phép dùng を (nhóm I tự động từ) hoặc に (nhóm II/III và nhóm I tha động từ).',
      examples: [
        {
          japanese: '母は子供に野菜を食べさせました。',
          vietnamese: 'Mẹ bắt con ăn rau.',
          english: 'The mother made her child eat vegetables.',
          type: 'main'
        },
        {
          japanese: '先生は学生を立たせました。',
          vietnamese: 'Thầy bắt học sinh đứng.',
          english: 'The teacher made the student stand.',
          type: 'main'
        },
        {
          japanese: '上司は部下に資料を作らせました。',
          vietnamese: 'Sếp bắt cấp dưới làm tài liệu.',
          english: 'The boss made the subordinate prepare documents.',
          type: 'main'
        },
        {
          japanese: '親は子供を学校に行かせます。',
          vietnamese: 'Cha mẹ bắt con đi học.',
          english: 'Parents make their children go to school.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '使役形（許可）',
      vietnamese: 'thể sai khiến (cho phép)',
      english: 'causative form (permission)',
      type: 'main',
      explanation: 'Biểu thị cho phép ai đó làm gì. Thường đi kèm với 自由に、好きに、v.v. hoặc trong ngữ cảnh xin phép.',
      examples: [
        {
          japanese: '親は子供を自由に遊ばせました。',
          vietnamese: 'Cha mẹ để con tự do chơi.',
          english: 'The parents let their child play freely.',
          type: 'main'
        },
        {
          japanese: '私に考えさせてください。',
          vietnamese: 'Hãy để tôi suy nghĩ.',
          english: 'Please let me think about it.',
          type: 'main'
        },
        {
          japanese: '先生は学生に好きなテーマを選ばせました。',
          vietnamese: 'Thầy để học sinh chọn chủ đề mình thích.',
          english: 'The teacher let students choose their favorite topic.',
          type: 'main'
        },
        {
          japanese: '私を行かせてください。',
          vietnamese: 'Hãy để tôi đi.',
          english: 'Please let me go.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '使役受身形',
      vietnamese: 'thể bị động sai khiến',
      english: 'causative-passive form',
      type: 'main',
      explanation: 'Kết hợp thể sai khiến và thể bị động, biểu thị bị bắt làm gì. Cấu tạo: 使役形 + られる → させられる (nhóm I có thể rút gọn thành さされる→される). Thường mang nghĩa tiêu cực.',
      examples: [
        {
          japanese: '私は上司に残業させられました。',
          vietnamese: 'Tôi bị sếp bắt làm thêm giờ.',
          english: 'I was made to work overtime by my boss.',
          type: 'main'
        },
        {
          japanese: '子供の時、毎日ピアノを練習させられました。',
          vietnamese: 'Hồi bé, tôi bị bắt luyện piano mỗi ngày.',
          english: 'When I was a child, I was made to practice piano every day.',
          type: 'main'
        },
        {
          japanese: '長時間待たされました。',
          vietnamese: 'Tôi bị bắt đợi lâu.',
          english: 'I was made to wait a long time.',
          type: 'main'
        },
        {
          japanese: '先生に作文を書かせられました。',
          vietnamese: 'Tôi bị thầy bắt viết bài văn.',
          english: 'I was made to write an essay by my teacher.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '〜てもらう vs 〜させる',
      vietnamese: '〜てもらう (nhờ) vs 〜させる (bắt)',
      english: '〜てもらう (request) vs 〜させる (make)',
      type: 'main',
      explanation: '〜てもらう biểu thị nhờ người khác làm giúp (người khác tự nguyện). 〜させる biểu thị bắt hoặc cho phép người khác làm (có quyền lực).',
      examples: [
        {
          japanese: '友達に手伝ってもらいました。',
          vietnamese: 'Tôi nhờ bạn giúp.',
          english: 'I had my friend help me.',
          type: 'main'
        },
        {
          japanese: '子供に部屋を掃除させました。',
          vietnamese: 'Tôi bắt con dọn phòng.',
          english: 'I made my child clean the room.',
          type: 'main'
        },
        {
          japanese: '先生に説明してもらいました。',
          vietnamese: 'Tôi nhờ thầy giải thích.',
          english: 'I had my teacher explain it.',
          type: 'additional'
        },
        {
          japanese: '学生に発表させました。',
          vietnamese: 'Tôi bắt học sinh phát biểu.',
          english: 'I made the student present.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'を vs に（使役）',
      vietnamese: 'を vs に (thể sai khiến)',
      english: 'を vs に (causative)',
      type: 'additional',
      explanation: 'Tự động từ nhóm I dùng を. Tha động từ và các động từ khác dùng に. Ví dụ: 行く (tự động) → 行かせる dùng を, 食べる (tha động) → 食べさせる dùng に.',
      examples: [
        {
          japanese: '子供を学校に行かせます。',
          vietnamese: 'Bắt con đi học (tự động từ).',
          english: 'I make my child go to school.',
          type: 'main'
        },
        {
          japanese: '子供に野菜を食べさせます。',
          vietnamese: 'Bắt con ăn rau (tha động từ).',
          english: 'I make my child eat vegetables.',
          type: 'main'
        }
      ]
    },
    {
      pattern: '使役形の感情表現',
      vietnamese: 'biểu hiện cảm xúc với thể sai khiến',
      english: 'expressing emotions with causative',
      type: 'additional',
      explanation: 'Dùng thể sai khiến với động từ biểu thị cảm xúc để nói về việc làm người khác có cảm xúc đó.',
      examples: [
        {
          japanese: '母を喜ばせたいです。',
          vietnamese: 'Tôi muốn làm mẹ vui.',
          english: 'I want to make my mother happy.',
          type: 'main'
        },
        {
          japanese: '先生を怒らせてしまいました。',
          vietnamese: 'Tôi đã làm thầy tức giận.',
          english: 'I made my teacher angry.',
          type: 'main'
        },
        {
          japanese: '親を心配させたくないです。',
          vietnamese: 'Tôi không muốn làm cha mẹ lo lắng.',
          english: 'I don\'t want to make my parents worry.',
          type: 'additional'
        }
      ]
    }
  ]
};

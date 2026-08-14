/**
 * N4 Core Lessons — Lesson 23
 * Focus: Hypothetical and Contrary-to-Fact Conditions
 */

import type { LessonData } from '$lib/types';

export const LESSON_23_DATA: LessonData = {
  lessonNumber: 23,
  title: '仮定と条件 (Hypotheticals and Conditions)',
  vocabulary: [
    // Condition-related verbs
    {
      japanese: '起こる（おこる）',
      kana: 'おこる',
      vietnamese: 'xảy ra',
      english: 'to occur/happen',
      type: 'main',
      example: '地震が起こりました。'
    },
    {
      japanese: '変わる（かわる）',
      kana: 'かわる',
      vietnamese: 'thay đổi',
      english: 'to change',
      type: 'main',
      example: '天気が変わりました。'
    },
    {
      japanese: '変える（かえる）',
      kana: 'かえる',
      vietnamese: 'làm thay đổi',
      english: 'to change (something)',
      type: 'main',
      example: '予定を変えました。'
    },
    {
      japanese: '増える（ふえる）',
      kana: 'ふえる',
      vietnamese: 'tăng',
      english: 'to increase',
      type: 'main',
      example: '人口が増えています。'
    },
    {
      japanese: '増やす（ふやす）',
      kana: 'ふやす',
      vietnamese: 'làm tăng',
      english: 'to increase (something)',
      type: 'main',
      example: '売上を増やしたいです。'
    },
    {
      japanese: '減る（へる）',
      kana: 'へる',
      vietnamese: 'giảm',
      english: 'to decrease',
      type: 'main',
      example: '体重が減りました。'
    },
    {
      japanese: '減らす（へらす）',
      kana: 'へらす',
      vietnamese: 'làm giảm',
      english: 'to reduce (something)',
      type: 'main',
      example: '無駄を減らします。'
    },
    {
      japanese: '続く（つづく）',
      kana: 'つづく',
      vietnamese: 'tiếp tục',
      english: 'to continue',
      type: 'main',
      example: '雨が続いています。'
    },
    {
      japanese: '続ける（つづける）',
      kana: 'つづける',
      vietnamese: 'tiếp tục (làm gì)',
      english: 'to continue (doing)',
      type: 'main',
      example: '勉強を続けます。'
    },
    {
      japanese: '止まる（とまる）',
      kana: 'とまる',
      vietnamese: 'dừng lại',
      english: 'to stop',
      type: 'main',
      example: '雨が止まりました。'
    },
    {
      japanese: '止める（とめる）',
      kana: 'とめる',
      vietnamese: 'làm dừng lại',
      english: 'to stop (something)',
      type: 'main',
      example: '車を止めてください。'
    },
    {
      japanese: '成功する（せいこうする）',
      kana: 'せいこうする',
      vietnamese: 'thành công',
      english: 'to succeed',
      type: 'main',
      example: '計画が成功しました。'
    },
    {
      japanese: '失敗する（しっぱいする）',
      kana: 'しっぱいする',
      vietnamese: 'thất bại',
      english: 'to fail',
      type: 'main',
      example: '試験に失敗しました。'
    },
    {
      japanese: '合格する（ごうかくする）',
      kana: 'ごうかくする',
      vietnamese: 'đậu, đỗ',
      english: 'to pass (exam)',
      type: 'main',
      example: '試験に合格しました。'
    },
    {
      japanese: '不合格（ふごうかく）',
      kana: 'ふごうかく',
      vietnamese: 'trượt',
      english: 'to fail (exam)',
      type: 'main',
      example: '残念ながら不合格でした。'
    },
    // Weather and environment
    {
      japanese: '天気（てんき）',
      kana: 'てんき',
      vietnamese: 'thời tiết',
      english: 'weather',
      type: 'main',
      example: '明日の天気はどうですか。'
    },
    {
      japanese: '晴れ（はれ）',
      kana: 'はれ',
      vietnamese: 'trời nắng',
      english: 'sunny weather',
      type: 'main',
      example: '明日は晴れです。'
    },
    {
      japanese: '曇り（くもり）',
      kana: 'くもり',
      vietnamese: 'trời có mây',
      english: 'cloudy weather',
      type: 'main',
      example: '今日は曇りです。'
    },
    {
      japanese: '雨（あめ）',
      kana: 'あめ',
      vietnamese: 'mưa',
      english: 'rain',
      type: 'main',
      example: '雨が降っています。'
    },
    {
      japanese: '雪（ゆき）',
      kana: 'ゆき',
      vietnamese: 'tuyết',
      english: 'snow',
      type: 'main',
      example: '雪が降りました。'
    },
    {
      japanese: '台風（たいふう）',
      kana: 'たいふう',
      vietnamese: 'bão',
      english: 'typhoon',
      type: 'main',
      example: '台風が来ています。'
    },
    {
      japanese: '地震（じしん）',
      kana: 'じしん',
      vietnamese: 'động đất',
      english: 'earthquake',
      type: 'main',
      example: '地震が起こりました。'
    },
    {
      japanese: '環境（かんきょう）',
      kana: 'かんきょう',
      vietnamese: 'môi trường',
      english: 'environment',
      type: 'main',
      example: '環境を守りましょう。'
    },
    {
      japanese: '自然（しぜん）',
      kana: 'しぜん',
      vietnamese: 'tự nhiên',
      english: 'nature',
      type: 'main',
      example: '自然が豊かです。'
    },
    {
      japanese: '温暖化（おんだんか）',
      kana: 'おんだんか',
      vietnamese: 'sự nóng lên (toàn cầu)',
      english: 'global warming',
      type: 'main',
      example: '地球温暖化が心配です。'
    },
    // Possibility and assumption
    {
      japanese: '場合（ばあい）',
      kana: 'ばあい',
      vietnamese: 'trường hợp',
      english: 'case/situation',
      type: 'main',
      example: '雨の場合は中止です。'
    },
    {
      japanese: '〜次第（〜しだい）',
      kana: '〜しだい',
      vietnamese: 'tùy thuộc vào',
      english: 'depending on',
      type: 'main',
      example: '天気次第で決めます。'
    },
    {
      japanese: 'もし',
      kana: 'もし',
      vietnamese: 'nếu',
      english: 'if',
      type: 'main',
      example: 'もし時間があれば、行きます。'
    },
    {
      japanese: 'もしかしたら',
      kana: 'もしかしたら',
      vietnamese: 'có lẽ, có thể',
      english: 'perhaps/maybe',
      type: 'main',
      example: 'もしかしたら雨かもしれません。'
    },
    {
      japanese: '万一（まんいち）',
      kana: 'まんいち',
      vietnamese: 'vạn nhất, phòng khi',
      english: 'in the unlikely event',
      type: 'main',
      example: '万一の場合に備えます。'
    },
    {
      japanese: '仮に（かりに）',
      kana: 'かりに',
      vietnamese: 'giả sử',
      english: 'supposing/assuming',
      type: 'main',
      example: '仮に失敗しても大丈夫です。'
    },
    // Additional vocabulary
    {
      japanese: '条件（じょうけん）',
      kana: 'じょうけん',
      vietnamese: 'điều kiện',
      english: 'condition',
      type: 'additional',
      example: '条件を満たせば合格です。'
    },
    {
      japanese: '前提（ぜんてい）',
      kana: 'ぜんてい',
      vietnamese: 'tiền đề',
      english: 'premise/assumption',
      type: 'additional',
      example: 'それを前提として話します。'
    },
    {
      japanese: '結論（けつろん）',
      kana: 'けつろん',
      vietnamese: 'kết luận',
      english: 'conclusion',
      type: 'additional',
      example: '結論を出しましょう。'
    },
    {
      japanese: '推測する（すいそくする）',
      kana: 'すいそくする',
      vietnamese: 'suy đoán',
      english: 'to guess/estimate',
      type: 'additional',
      example: '原因を推測します。'
    },
    {
      japanese: '予想する（よそうする）',
      kana: 'よそうする',
      vietnamese: 'dự đoán',
      english: 'to predict/expect',
      type: 'additional',
      example: '結果を予想しました。'
    },
    {
      japanese: '想像する（そうぞうする）',
      kana: 'そうぞうする',
      vietnamese: 'tưởng tượng',
      english: 'to imagine',
      type: 'additional',
      example: '未来を想像します。'
    },
    {
      japanese: '仮定する（かていする）',
      kana: 'かていする',
      vietnamese: 'giả định',
      english: 'to assume',
      type: 'additional',
      example: 'AとBを仮定します。'
    },
    {
      japanese: '実現する（じつげんする）',
      kana: 'じつげんする',
      vietnamese: 'thực hiện',
      english: 'to realize/achieve',
      type: 'additional',
      example: '夢を実現しました。'
    },
    {
      japanese: '達成する（たっせいする）',
      kana: 'たっせいする',
      vietnamese: 'đạt được',
      english: 'to achieve/accomplish',
      type: 'additional',
      example: '目標を達成しました。'
    },
    {
      japanese: '実際（じっさい）',
      kana: 'じっさい',
      vietnamese: 'thực tế',
      english: 'actually/in reality',
      type: 'additional',
      example: '実際に見てください。'
    },
    {
      japanese: '本当（ほんとう）',
      kana: 'ほんとう',
      vietnamese: 'thật',
      english: 'true/real',
      type: 'additional',
      example: '本当ですか。'
    },
    {
      japanese: '嘘（うそ）',
      kana: 'うそ',
      vietnamese: 'nói dối',
      english: 'lie',
      type: 'additional',
      example: '嘘をつかないでください。'
    },
    {
      japanese: '正しい（ただしい）',
      kana: 'ただしい',
      vietnamese: 'đúng',
      english: 'correct/right',
      type: 'additional',
      example: '正しい答えです。'
    },
    {
      japanese: '間違い（まちがい）',
      kana: 'まちがい',
      vietnamese: 'sai lầm',
      english: 'mistake/error',
      type: 'additional',
      example: '間違いがあります。'
    },
    {
      japanese: '確実（かくじつ）',
      kana: 'かくじつ',
      vietnamese: 'chắc chắn',
      english: 'certain/sure',
      type: 'additional',
      example: '確実な方法です。'
    },
    {
      japanese: '不確実（ふかくじつ）',
      kana: 'ふかくじつ',
      vietnamese: 'không chắc chắn',
      english: 'uncertain',
      type: 'additional',
      example: '未来は不確実です。'
    },
    {
      japanese: '絶対（ぜったい）',
      kana: 'ぜったい',
      vietnamese: 'tuyệt đối',
      english: 'absolutely',
      type: 'additional',
      example: '絶対に行きます。'
    },
    {
      japanese: '多分（たぶん）',
      kana: 'たぶん',
      vietnamese: 'có lẽ',
      english: 'probably',
      type: 'additional',
      example: '多分行けると思います。'
    },
    {
      japanese: 'きっと',
      kana: 'きっと',
      vietnamese: 'chắc chắn',
      english: 'surely/certainly',
      type: 'additional',
      example: 'きっと成功します。'
    },
    {
      japanese: '恐らく（おそらく）',
      kana: 'おそらく',
      vietnamese: 'có lẽ',
      english: 'probably/perhaps',
      type: 'additional',
      example: '恐らく大丈夫でしょう。'
    },
    // Supplementary
    {
      japanese: '偶然（ぐうぜん）',
      kana: 'ぐうぜん',
      vietnamese: 'ngẫu nhiên',
      english: 'coincidence/by chance',
      type: 'supplementary',
      example: '偶然会いました。'
    },
    {
      japanese: '必然（ひつぜん）',
      kana: 'ひつぜん',
      vietnamese: 'tất yếu',
      english: 'inevitable/necessary',
      type: 'supplementary',
      example: '必然的な結果です。'
    },
    {
      japanese: '運（うん）',
      kana: 'うん',
      vietnamese: 'vận may',
      english: 'luck/fortune',
      type: 'supplementary',
      example: '運が良かったです。'
    },
    {
      japanese: 'チャンス',
      kana: 'チャンス',
      vietnamese: 'cơ hội',
      english: 'chance/opportunity',
      type: 'supplementary',
      example: 'チャンスを逃しました。'
    },
    {
      japanese: '危険（きけん）',
      kana: 'きけん',
      vietnamese: 'nguy hiểm',
      english: 'danger',
      type: 'supplementary',
      example: '危険な場所です。'
    },
    {
      japanese: '安全（あんぜん）',
      kana: 'あんぜん',
      vietnamese: 'an toàn',
      english: 'safe/safety',
      type: 'supplementary',
      example: '安全な方法です。'
    },
    {
      japanese: '注意（ちゅうい）',
      kana: 'ちゅうい',
      vietnamese: 'chú ý, cẩn thận',
      english: 'caution/attention',
      type: 'supplementary',
      example: '注意してください。'
    },
    {
      japanese: '警告（けいこく）',
      kana: 'けいこく',
      vietnamese: 'cảnh báo',
      english: 'warning',
      type: 'supplementary',
      example: '警告が出ました。'
    },
    // BEGIN_IMPORTED_MINNA_N4_MD
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | b416adaa68e3bd6f
    {
      japanese: "降ろします / 下ろします",
      kana: "おろします",
      vietnamese: "cho xuống, hạ xuống",
      english: "cho xuống, hạ xuống",
      type: "main",
      example: "荷物を車から下ろします。\nNimotsu o kuruma kara oroshimasu.\nTôi hạ hành lý từ xe xuống."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 29bfc5aa7d9a4fca
    {
      japanese: "届けます",
      kana: "とどけます",
      vietnamese: "gửi đến, chuyển đến",
      english: "gửi đến, chuyển đến",
      type: "main",
      example: "書類を会社へ届けます。\nShorui o kaisha e todokemasu.\nTôi chuyển tài liệu đến công ty."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 22de150171f3da05
    {
      japanese: "世話をします",
      kana: "せわをします",
      vietnamese: "chăm sóc",
      english: "chăm sóc",
      type: "main",
      example: "母は犬の世話をします。\nHaha wa inu no sewa o shimasu.\nMẹ tôi chăm sóc con chó."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 795fd9e809fee10d
    {
      japanese: "録音します",
      kana: "ろくおんします",
      vietnamese: "ghi âm",
      english: "ghi âm",
      type: "main",
      example: "授業を録音します。\nJugyou o rokuon shimasu.\nTôi ghi âm tiết học."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 71eb80fca27bb1d0
    {
      japanese: "嫌な",
      kana: "いやな",
      vietnamese: "khó chịu, không thích, đáng ghét",
      english: "khó chịu, không thích, đáng ghét",
      type: "main",
      example: "嫌な音がします。\nIya na oto ga shimasu.\nCó âm thanh khó chịu."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 9b7f1b8d33a9b01e
    {
      japanese: "塾",
      kana: "じゅく",
      vietnamese: "lớp học thêm, trung tâm luyện thi",
      english: "lớp học thêm, trung tâm luyện thi",
      type: "main",
      example: "子どもは塾へ行きます。\nKodomo wa juku e ikimasu.\nĐứa trẻ đi học thêm."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 6e075fbf21b6a7d0
    {
      japanese: "生徒",
      kana: "せいと",
      vietnamese: "học sinh, học trò",
      english: "học sinh, học trò",
      type: "main",
      example: "この学校には生徒が多いです。\nKono gakkou ni wa seito ga ooi desu.\nTrường này có nhiều học sinh."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 47143ae6e157e67b
    {
      japanese: "ファイル",
      kana: "ファイル",
      vietnamese: "file, kẹp tài liệu",
      english: "file, kẹp tài liệu",
      type: "main",
      example: "ファイルを机の上に置きます。\nFairu o tsukue no ue ni okimasu.\nTôi đặt file lên bàn."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 7eddfa8aeca80f2b
    {
      japanese: "自由に",
      kana: "じゆうに",
      vietnamese: "một cách tự do, thoải mái",
      english: "một cách tự do, thoải mái",
      type: "main",
      example: "自由に話してください。\nJiyuu ni hanashite kudasai.\nHãy nói chuyện tự do nhé."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | b20a3117c4a25201
    {
      japanese: "〜間",
      kana: "〜かん",
      vietnamese: "trong khoảng, trong vòng, suốt",
      english: "trong khoảng, trong vòng, suốt",
      type: "main",
      example: "一時間勉強します。\nIchi-jikan benkyou shimasu.\nTôi học trong một tiếng."
    },
    // source: review_tu_vung_bai_48.md | 1. Từ vựng chính | 9f7ce142e34c4bf4
    {
      japanese: "いいことですね。",
      kana: "いいことですね。",
      vietnamese: "hay nhỉ, tốt nhỉ, được đấy nhỉ",
      english: "hay nhỉ, tốt nhỉ, được đấy nhỉ",
      type: "main",
      example: "毎日日本語を勉強しています。いいことですね。\nMainichi Nihongo o benkyou shite imasu. Ii koto desu ne.\nTôi học tiếng Nhật mỗi ngày. Hay đấy nhỉ."
    },
    // source: review_tu_vung_bai_48.md | 2. Từ vựng hội thoại | 270c69d3b8814987
    {
      japanese: "お忙しいですか。",
      kana: "おいそがしいですか。",
      vietnamese: "Anh/chị có bận không?",
      english: "Anh/chị có bận không?",
      type: "supplementary",
      example: "今、お忙しいですか。\nIma, oisogashii desu ka.\nBây giờ anh/chị có bận không ạ?"
    },
    // source: review_tu_vung_bai_48.md | 2. Từ vựng hội thoại | 5309c0d0107826df
    {
      japanese: "営業",
      kana: "えいぎょう",
      vietnamese: "kinh doanh, bán hàng",
      english: "kinh doanh, bán hàng",
      type: "supplementary",
      example: "兄は営業の仕事をしています。\nAni wa eigyou no shigoto o shite imasu.\nAnh trai tôi làm công việc kinh doanh/bán hàng."
    },
    // source: review_tu_vung_bai_48.md | 2. Từ vựng hội thoại | 089381f916c277fe
    {
      japanese: "それまでに",
      kana: "それまでに",
      vietnamese: "trước lúc đó, trước thời điểm đó",
      english: "trước lúc đó, trước thời điểm đó",
      type: "supplementary",
      example: "会議は三時です。それまでに来てください。\nKaigi wa san-ji desu. Sore made ni kite kudasai.\nCuộc họp lúc 3 giờ. Hãy đến trước lúc đó."
    },
    // source: review_tu_vung_bai_48.md | 2. Từ vựng hội thoại | f02f63e15bf15907
    {
      japanese: "構いません",
      kana: "かまいません",
      vietnamese: "không sao, không có vấn đề gì",
      english: "không sao, không có vấn đề gì",
      type: "supplementary",
      example: "ここで写真を撮ってもかまいません。\nKoko de shashin o totte mo kamaimasen.\nChụp ảnh ở đây cũng không sao."
    },
    // source: review_tu_vung_bai_48.md | 2. Từ vựng hội thoại | 43d432340ba22f4d
    {
      japanese: "楽しみます",
      kana: "たのしみます",
      vietnamese: "vui, tận hưởng",
      english: "vui, tận hưởng",
      type: "supplementary",
      example: "旅行を楽しみます。\nRyokou o tanoshimimasu.\nTôi tận hưởng chuyến du lịch."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | 085fcc94024f415d
    {
      japanese: "親",
      kana: "おや",
      vietnamese: "bố mẹ, cha mẹ",
      english: "bố mẹ, cha mẹ",
      type: "supplementary",
      example: "親に相談します。\nOya ni soudan shimasu.\nTôi hỏi ý kiến bố mẹ."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | 2c9239749b0c346d
    {
      japanese: "小学生",
      kana: "しょうがくせい",
      vietnamese: "học sinh tiểu học",
      english: "học sinh tiểu học",
      type: "supplementary",
      example: "弟は小学生です。\nOtouto wa shougakusei desu.\nEm trai tôi là học sinh tiểu học."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | 81282503e6b98bf4
    {
      japanese: "一パーセント",
      kana: "いちパーセント",
      vietnamese: "một phần trăm",
      english: "một phần trăm",
      type: "supplementary",
      example: "一パーセントの人が答えました。\nIchi paasento no hito ga kotaemashita.\nMột phần trăm số người đã trả lời."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | 421ea88a3e098ecd
    {
      japanese: "その次",
      kana: "そのつぎ",
      vietnamese: "tiếp theo đó",
      english: "tiếp theo đó",
      type: "supplementary",
      example: "その次に名前を書きます。\nSono tsugi ni namae o kakimasu.\nTiếp theo đó, viết tên."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | b22e004bfb8b8acd
    {
      japanese: "習字",
      kana: "しゅうじ",
      vietnamese: "học viết chữ bằng bút lông",
      english: "học viết chữ bằng bút lông",
      type: "supplementary",
      example: "小学生は習字を習います。\nShougakusei wa shuuji o naraimasu.\nHọc sinh tiểu học học viết chữ bằng bút lông."
    },
    // source: review_tu_vung_bai_48.md | 3. Từ vựng đọc hiểu | fc12a474d60388a1
    {
      japanese: "普通の",
      kana: "ふつうの",
      vietnamese: "thông thường, bình thường",
      english: "thông thường, bình thường",
      type: "supplementary",
      example: "普通の生活をしています。\nFutsuu no seikatsu o shite imasu.\nTôi đang sống một cuộc sống bình thường."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | 72606f0527fe2a9a
    {
      japanese: "荷物を下ろします",
      kana: "荷物を下ろします",
      vietnamese: "hạ hành lý xuống",
      english: "hạ hành lý xuống",
      type: "supplementary",
      example: "Dùng 下ろします / oroshimasu khi hạ đồ vật từ trên xuống."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | f9067543df553f07
    {
      japanese: "人を車から降ろします",
      kana: "人を車から降ろします",
      vietnamese: "cho người xuống xe",
      english: "cho người xuống xe",
      type: "supplementary",
      example: "Dùng 降ろします / oroshimasu khi cho người xuống khỏi phương tiện."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | 7317e4a3acdaac49
    {
      japanese: "書類を届けます",
      kana: "書類を届けます",
      vietnamese: "chuyển tài liệu đến",
      english: "chuyển tài liệu đến",
      type: "supplementary",
      example: "届けます / todokemasu là ngoại động từ, nghĩa là mình đem/gửi cái gì đến nơi nào đó."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | d4bec169fc719f9e
    {
      japanese: "子どもの世話をします",
      kana: "子どもの世話をします",
      vietnamese: "chăm sóc trẻ em",
      english: "chăm sóc trẻ em",
      type: "supplementary",
      example: "世話をします / sewa o shimasu thường đi với người, động vật hoặc người cần chăm sóc."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | 318323a536761703
    {
      japanese: "授業を録音します",
      kana: "授業を録音します",
      vietnamese: "ghi âm tiết học",
      english: "ghi âm tiết học",
      type: "supplementary",
      example: "録音します / rokuon shimasu là ghi lại âm thanh, không phải quay video."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | e92fa0ac4034edd6
    {
      japanese: "自由に使います",
      kana: "自由に使います",
      vietnamese: "dùng tự do, dùng thoải mái",
      english: "dùng tự do, dùng thoải mái",
      type: "supplementary",
      example: "自由に / jiyuu ni đứng trước động từ để nói làm một cách tự do."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | 4c4de1906edaa8ab
    {
      japanese: "一時間",
      kana: "一時間",
      vietnamese: "một tiếng",
      english: "một tiếng",
      type: "supplementary",
      example: "〜間 / ~kan dùng để chỉ khoảng thời gian kéo dài."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | c9337d91ff78f375
    {
      japanese: "それまでに来ます",
      kana: "それまでに来ます",
      vietnamese: "đến trước lúc đó",
      english: "đến trước lúc đó",
      type: "supplementary",
      example: "までに / made ni nhấn mạnh hạn chót phải hoàn thành trước thời điểm đó."
    },
    // source: review_tu_vung_bai_48.md | 4. Cụm cần nhớ | d8b9bf6263473c2a
    {
      japanese: "〜てもかまいません",
      kana: "〜てもかまいません",
      vietnamese: "làm gì cũng không sao",
      english: "làm gì cũng không sao",
      type: "supplementary",
      example: "Mẫu lịch sự để cho phép hoặc nói không vấn đề gì."
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 3fc7b1495531cfb9
    {
      japanese: "下",
      kana: "カ / ka, ゲ / ge",
      vietnamese: "Hạ — dưới, hạ xuống",
      english: "dưới, hạ xuống",
      type: "kanji",
      example: "下ろします / oroshimasu"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 4a82164cc095780e
    {
      japanese: "世",
      kana: "セ / se, セイ / sei",
      vietnamese: "Thế — đời, thế gian",
      english: "đời, thế gian",
      type: "kanji",
      example: "世話 / sewa"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | da872f75ad9049c7
    {
      japanese: "話",
      kana: "ワ / wa",
      vietnamese: "Thoại — nói chuyện",
      english: "nói chuyện",
      type: "kanji",
      example: "世話 / sewa"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 4c1be285f27bb086
    {
      japanese: "音",
      kana: "オン / on",
      vietnamese: "Âm — âm thanh",
      english: "âm thanh",
      type: "kanji",
      example: "録音 / rokuon"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 309ce0452cdae8ba
    {
      japanese: "生",
      kana: "セイ / sei, ショウ / shou",
      vietnamese: "Sinh — sống, sinh ra, học sinh",
      english: "sống, sinh ra, học sinh",
      type: "kanji",
      example: "生徒 / seito"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 743bc4cf6c0a0f46
    {
      japanese: "自",
      kana: "ジ / ji, シ / shi",
      vietnamese: "Tự — bản thân, tự mình",
      english: "bản thân, tự mình",
      type: "kanji",
      example: "自由 / jiyuu"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 1d18abc650604f6f
    {
      japanese: "由",
      kana: "ユ / yu, ユウ / yuu",
      vietnamese: "Do — lý do, nguồn gốc",
      english: "lý do, nguồn gốc",
      type: "kanji",
      example: "自由 / jiyuu"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 391a367e0d413174
    {
      japanese: "間",
      kana: "カン / kan, ケン / ken",
      vietnamese: "Gian — khoảng giữa, khoảng thời gian",
      english: "khoảng giữa, khoảng thời gian",
      type: "kanji",
      example: "〜間 / ~kan"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 276ff0e2f8566a5e
    {
      japanese: "親",
      kana: "シン / shin",
      vietnamese: "Thân — cha mẹ, thân thiết",
      english: "cha mẹ, thân thiết",
      type: "kanji",
      example: "親 / oya"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 045ccc857d1d16cc
    {
      japanese: "小",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — nhỏ",
      english: "nhỏ",
      type: "kanji",
      example: "小学生 / shougakusei"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 2594d324f6e8fa6d
    {
      japanese: "学",
      kana: "ガク / gaku",
      vietnamese: "Học — học",
      english: "học",
      type: "kanji",
      example: "小学生 / shougakusei"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 2b928aa896ca5515
    {
      japanese: "次",
      kana: "ジ / ji, シ / shi",
      vietnamese: "Thứ — tiếp theo",
      english: "tiếp theo",
      type: "kanji",
      example: "その次 / sono tsugi"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 46c598833d44a92b
    {
      japanese: "習",
      kana: "シュウ / shuu",
      vietnamese: "Tập — học, luyện tập",
      english: "học, luyện tập",
      type: "kanji",
      example: "習字 / shuuji"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 944ad56cd8925f26
    {
      japanese: "字",
      kana: "ジ / ji",
      vietnamese: "Tự — chữ",
      english: "chữ",
      type: "kanji",
      example: "習字 / shuuji"
    },
    // source: review_tu_vung_bai_48.md | 5. Kanji N5–N4 cần học kỹ | 46fd0e04a42e0109
    {
      japanese: "通",
      kana: "ツウ / tsuu, ツ / tsu",
      vietnamese: "Thông — đi qua, thông thường",
      english: "đi qua, thông thường",
      type: "kanji",
      example: "普通 / futsuu"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 60eb927be8ea123c
    {
      japanese: "下ろします",
      kana: "お.ろす / orosu",
      vietnamese: "Hạ — 下 = dưới, hạ xuống",
      english: "下 = dưới, hạ xuống",
      type: "kanji",
      example: "下ろします"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | fb30e9a886713e2f
    {
      japanese: "下",
      kana: "した / shita",
      vietnamese: "Hạ — 下 = dưới",
      english: "下 = dưới",
      type: "kanji",
      example: "下"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 8034b411f33157f6
    {
      japanese: "地下鉄",
      kana: "カ / ka",
      vietnamese: "Hạ — 地 = đất; 下 = dưới",
      english: "地 = đất; 下 = dưới",
      type: "kanji",
      example: "地下鉄"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 93d03d601551a87c
    {
      japanese: "世界",
      kana: "セ / se",
      vietnamese: "Thế — 世 = đời, thế gian",
      english: "世 = đời, thế gian",
      type: "kanji",
      example: "世界"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 027bf1b764585d5c
    {
      japanese: "世話",
      kana: "セ / se",
      vietnamese: "Thế — 世 = đời; 話 = lời nói, nói chuyện",
      english: "世 = đời; 話 = lời nói, nói chuyện",
      type: "kanji",
      example: "世話"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 27760aa2c9f25d05
    {
      japanese: "話します",
      kana: "はな.す / hanasu",
      vietnamese: "Thoại — 話 = nói chuyện",
      english: "話 = nói chuyện",
      type: "kanji",
      example: "話します"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 673eac1feeaceb48
    {
      japanese: "会話",
      kana: "ワ / wa",
      vietnamese: "Thoại — 会 = gặp; 話 = nói chuyện",
      english: "会 = gặp; 話 = nói chuyện",
      type: "kanji",
      example: "会話"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 9eebe11f2f433258
    {
      japanese: "電話",
      kana: "ワ / wa",
      vietnamese: "Thoại — 電 = điện; 話 = nói chuyện",
      english: "電 = điện; 話 = nói chuyện",
      type: "kanji",
      example: "電話"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | cd820f79c7b9509f
    {
      japanese: "音",
      kana: "おと / oto",
      vietnamese: "Âm — 音 = âm thanh",
      english: "音 = âm thanh",
      type: "kanji",
      example: "音"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ad8c4d24686362dd
    {
      japanese: "発音",
      kana: "オン / on",
      vietnamese: "Âm — 発 = phát ra; 音 = âm thanh",
      english: "発 = phát ra; 音 = âm thanh",
      type: "kanji",
      example: "発音"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | edf92e1abf8267c6
    {
      japanese: "生徒",
      kana: "セイ / sei",
      vietnamese: "Sinh — 生 = học sinh; 徒 = người theo học",
      english: "生 = học sinh; 徒 = người theo học",
      type: "kanji",
      example: "生徒"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d7c2266183bdd084
    {
      japanese: "学生",
      kana: "セイ / sei",
      vietnamese: "Sinh — 学 = học; 生 = người học",
      english: "学 = học; 生 = người học",
      type: "kanji",
      example: "学生"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | be2018a70463ec17
    {
      japanese: "生まれます",
      kana: "う.まれる / umareru",
      vietnamese: "Sinh — 生 = sinh ra",
      english: "生 = sinh ra",
      type: "kanji",
      example: "生まれます"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d0899612b6674bce
    {
      japanese: "自分",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 分 = phần",
      english: "自 = tự mình; 分 = phần",
      type: "kanji",
      example: "自分"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 2314657c9a49de9f
    {
      japanese: "自由",
      kana: "ジ / ji",
      vietnamese: "Tự — 自 = tự mình; 由 = lý do, nguồn gốc",
      english: "自 = tự mình; 由 = lý do, nguồn gốc",
      type: "kanji",
      example: "自由"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b9073158e27cf19a
    {
      japanese: "時間",
      kana: "カン / kan",
      vietnamese: "Gian — 時 = giờ; 間 = khoảng",
      english: "時 = giờ; 間 = khoảng",
      type: "kanji",
      example: "時間"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 4b49fa4fbbd2913c
    {
      japanese: "間",
      kana: "あいだ / aida",
      vietnamese: "Gian — 間 = khoảng giữa",
      english: "間 = khoảng giữa",
      type: "kanji",
      example: "間"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 40eba4cad983e455
    {
      japanese: "一週間",
      kana: "カン / kan",
      vietnamese: "Gian — 一 = một; 週 = tuần; 間 = khoảng",
      english: "一 = một; 週 = tuần; 間 = khoảng",
      type: "kanji",
      example: "一週間"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 84328293b605181a
    {
      japanese: "親",
      kana: "おや / oya",
      vietnamese: "Thân — 親 = cha mẹ",
      english: "親 = cha mẹ",
      type: "kanji",
      example: "親"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | b04d67ff45a3c610
    {
      japanese: "両親",
      kana: "シン / shin",
      vietnamese: "Thân — 両 = cả hai; 親 = cha mẹ",
      english: "両 = cả hai; 親 = cha mẹ",
      type: "kanji",
      example: "両親"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | c9e54e00b16d3f10
    {
      japanese: "小さい",
      kana: "ちい.さい / chiisai",
      vietnamese: "Tiểu — 小 = nhỏ",
      english: "小 = nhỏ",
      type: "kanji",
      example: "小さい"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | ae015afcfa030df7
    {
      japanese: "小学校",
      kana: "ショウ / shou",
      vietnamese: "Tiểu — 小 = nhỏ; 学 = học; 校 = trường",
      english: "小 = nhỏ; 学 = học; 校 = trường",
      type: "kanji",
      example: "小学校"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 25edd95d77bd6b8c
    {
      japanese: "学校",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 校 = trường",
      english: "学 = học; 校 = trường",
      type: "kanji",
      example: "学校"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5a0db74e2ff93b99
    {
      japanese: "学生",
      kana: "ガク / gaku",
      vietnamese: "Học — 学 = học; 生 = người học",
      english: "学 = học; 生 = người học",
      type: "kanji",
      example: "学生"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 30c8e779de230c3b
    {
      japanese: "次",
      kana: "つぎ / tsugi",
      vietnamese: "Thứ — 次 = tiếp theo",
      english: "次 = tiếp theo",
      type: "kanji",
      example: "次"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 16e6ef0d40931c8b
    {
      japanese: "次回",
      kana: "ジ / ji",
      vietnamese: "Thứ — 次 = lần tiếp theo; 回 = lần",
      english: "次 = lần tiếp theo; 回 = lần",
      type: "kanji",
      example: "次回"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | d570c7d6f6ccb5f4
    {
      japanese: "習います",
      kana: "なら.う / narau",
      vietnamese: "Tập — 習 = học, luyện",
      english: "習 = học, luyện",
      type: "kanji",
      example: "習います"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 14c8fd27c58b24a2
    {
      japanese: "習字",
      kana: "シュウ / shuu",
      vietnamese: "Tập — 習 = học; 字 = chữ",
      english: "習 = học; 字 = chữ",
      type: "kanji",
      example: "習字"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | dbffdf3079df3f36
    {
      japanese: "漢字",
      kana: "ジ / ji",
      vietnamese: "Tự — 漢 = Hán; 字 = chữ",
      english: "漢 = Hán; 字 = chữ",
      type: "kanji",
      example: "漢字"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 21107672b06c8b3b
    {
      japanese: "通ります",
      kana: "とお.る / tooru",
      vietnamese: "Thông — 通 = đi qua",
      english: "通 = đi qua",
      type: "kanji",
      example: "通ります"
    },
    // source: review_tu_vung_bai_48.md | 6. Từ ghép On/Kun của Kanji N5–N4 | 5bf8f037644da597
    {
      japanese: "普通",
      kana: "ツウ / tsuu",
      vietnamese: "Thông — 普 = phổ biến; 通 = thông thường",
      english: "普 = phổ biến; 通 = thông thường",
      type: "kanji",
      example: "普通"
    },
    // END_IMPORTED_MINNA_N4_MD
  ],
  grammar: [
    {
      pattern: '～たら',
      vietnamese: 'nếu..., khi...',
      english: 'if/when...',
      type: 'main',
      explanation: 'Biểu thị điều kiện hoặc thời gian. Dùng với động từ, tính từ, danh từ. Cấu trúc: động từ た-form + ら. たら có thể dùng cho điều kiện giả định, sự việc đã xảy ra, hoặc phát hiện bất ngờ.',
      examples: [
        {
          japanese: '春になったら、桜が咲きます。',
          vietnamese: 'Khi mùa xuân đến, hoa anh đào nở.',
          english: 'When spring comes, cherry blossoms bloom.',
          type: 'main'
        },
        {
          japanese: '時間があったら、映画を見に行きましょう。',
          vietnamese: 'Nếu có thời gian, hãy đi xem phim.',
          english: 'If we have time, let\'s go see a movie.',
          type: 'main'
        },
        {
          japanese: '家に帰ったら、すぐ寝ました。',
          vietnamese: 'Khi về nhà, tôi ngủ ngay.',
          english: 'When I got home, I went to bed immediately.',
          type: 'main'
        },
        {
          japanese: 'ドアを開けたら、猫がいました。',
          vietnamese: 'Khi mở cửa, có một con mèo.',
          english: 'When I opened the door, there was a cat.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ば',
      vietnamese: 'nếu...',
      english: 'if...',
      type: 'main',
      explanation: 'Biểu thị điều kiện. Động từ: ます → ば (例: 行きます → 行けば), い-adj: い → ければ, な-adj/noun: だ → なら/であれば. Dùng cho điều kiện chung, khách quan.',
      examples: [
        {
          japanese: '安ければ、買います。',
          vietnamese: 'Nếu rẻ thì tôi sẽ mua.',
          english: 'If it\'s cheap, I\'ll buy it.',
          type: 'main'
        },
        {
          japanese: '頑張れば、成功します。',
          vietnamese: 'Nếu cố gắng thì sẽ thành công.',
          english: 'If you try hard, you will succeed.',
          type: 'main'
        },
        {
          japanese: '雨が降れば、行きません。',
          vietnamese: 'Nếu mưa thì tôi sẽ không đi.',
          english: 'If it rains, I won\'t go.',
          type: 'main'
        },
        {
          japanese: '静かであれば、勉強できます。',
          vietnamese: 'Nếu yên tĩnh thì có thể học.',
          english: 'If it\'s quiet, I can study.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～なら',
      vietnamese: 'nếu..., nếu là...',
      english: 'if... (as for...)',
      type: 'main',
      explanation: 'Biểu thị điều kiện dựa trên chủ đề hoặc tình huống. Dùng với danh từ, な-adj, động từ (普通形 + なら). なら nhấn mạnh chủ đề/tình huống làm điều kiện.',
      examples: [
        {
          japanese: '日本へ行くなら、京都がおすすめです。',
          vietnamese: 'Nếu đi Nhật thì tôi khuyên bạn nên đến Kyoto.',
          english: 'If you go to Japan, I recommend Kyoto.',
          type: 'main'
        },
        {
          japanese: '学生なら、割引があります。',
          vietnamese: 'Nếu là sinh viên thì có giảm giá.',
          english: 'If you\'re a student, there\'s a discount.',
          type: 'main'
        },
        {
          japanese: '暇なら、手伝ってください。',
          vietnamese: 'Nếu rảnh thì hãy giúp tôi.',
          english: 'If you\'re free, please help me.',
          type: 'main'
        },
        {
          japanese: '明日なら、会えます。',
          vietnamese: 'Nếu là ngày mai thì có thể gặp.',
          english: 'If it\'s tomorrow, I can meet.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～と',
      vietnamese: 'khi..., nếu... thì...',
      english: 'when/if... (natural consequence)',
      type: 'main',
      explanation: 'Biểu thị kết quả tự nhiên, chắc chắn xảy ra khi có điều kiện. Dùng cho quy luật tự nhiên, thói quen, hoặc phát hiện. Cấu trúc: 普通形 + と.',
      examples: [
        {
          japanese: '春になると、暖かくなります。',
          vietnamese: 'Khi mùa xuân đến thì trời ấm lên.',
          english: 'When spring comes, it gets warm.',
          type: 'main'
        },
        {
          japanese: 'このボタンを押すと、電気がつきます。',
          vietnamese: 'Khi nhấn nút này thì đèn sáng.',
          english: 'When you press this button, the light turns on.',
          type: 'main'
        },
        {
          japanese: '右に曲がると、銀行があります。',
          vietnamese: 'Khi rẽ phải thì có ngân hàng.',
          english: 'When you turn right, there\'s a bank.',
          type: 'main'
        },
        {
          japanese: '窓を開けると、涼しい風が入ってきます。',
          vietnamese: 'Khi mở cửa sổ thì gió mát thổi vào.',
          english: 'When you open the window, cool air comes in.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: 'もし～たら/ば',
      vietnamese: 'nếu... (nhấn mạnh giả định)',
      english: 'if... (emphasizing hypothesis)',
      type: 'main',
      explanation: 'もし kết hợp với たら hoặc ば để nhấn mạnh tính giả định của điều kiện. もし có thể bỏ nhưng làm câu rõ ràng hơn.',
      examples: [
        {
          japanese: 'もし時間があったら、遊びに来てください。',
          vietnamese: 'Nếu có thời gian thì hãy đến chơi.',
          english: 'If you have time, please come visit.',
          type: 'main'
        },
        {
          japanese: 'もし雨が降れば、中止します。',
          vietnamese: 'Nếu mưa thì sẽ hủy.',
          english: 'If it rains, we will cancel.',
          type: 'main'
        },
        {
          japanese: 'もし分からなかったら、聞いてください。',
          vietnamese: 'Nếu không hiểu thì hãy hỏi.',
          english: 'If you don\'t understand, please ask.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～ても',
      vietnamese: 'dù cho..., mặc dù...',
      english: 'even if/though...',
      type: 'main',
      explanation: 'Biểu thị sự tương phản: dù có điều kiện nhưng kết quả không đổi. Cấu trúc: động từ て-form + も.',
      examples: [
        {
          japanese: '雨が降っても、行きます。',
          vietnamese: 'Dù mưa tôi vẫn đi.',
          english: 'Even if it rains, I will go.',
          type: 'main'
        },
        {
          japanese: '高くても、買いたいです。',
          vietnamese: 'Dù đắt tôi vẫn muốn mua.',
          english: 'Even if it\'s expensive, I want to buy it.',
          type: 'main'
        },
        {
          japanese: '忙しくても、手伝います。',
          vietnamese: 'Dù bận tôi vẫn giúp.',
          english: 'Even if I\'m busy, I\'ll help.',
          type: 'main'
        },
        {
          japanese: '失敗しても、諦めません。',
          vietnamese: 'Dù thất bại tôi cũng không bỏ cuộc.',
          english: 'Even if I fail, I won\'t give up.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～場合は',
      vietnamese: 'trong trường hợp...',
      english: 'in case of...',
      type: 'additional',
      explanation: 'Biểu thị trường hợp cụ thể. Dùng trong ngữ cảnh trang trọng hơn. Cấu trúc: 普通形 + 場合は hoặc danh từ + の場合は.',
      examples: [
        {
          japanese: '雨の場合は中止です。',
          vietnamese: 'Trong trường hợp mưa thì hủy.',
          english: 'In case of rain, it will be canceled.',
          type: 'main'
        },
        {
          japanese: '分からない場合は、質問してください。',
          vietnamese: 'Trong trường hợp không hiểu, hãy hỏi.',
          english: 'In case you don\'t understand, please ask.',
          type: 'main'
        },
        {
          japanese: '緊急の場合は、この番号に電話してください。',
          vietnamese: 'Trong trường hợp khẩn cấp, hãy gọi số này.',
          english: 'In case of emergency, call this number.',
          type: 'additional'
        }
      ]
    },
    {
      pattern: '～かもしれない',
      vietnamese: 'có thể..., có lẽ...',
      english: 'might/may...',
      type: 'additional',
      explanation: 'Biểu thị khả năng không chắc chắn. Cấu trúc: 普通形 + かもしれない (lịch sự: かもしれません).',
      examples: [
        {
          japanese: '明日は雨かもしれません。',
          vietnamese: 'Ngày mai có thể mưa.',
          english: 'It might rain tomorrow.',
          type: 'main'
        },
        {
          japanese: '彼は来ないかもしれません。',
          vietnamese: 'Có lẽ anh ấy không đến.',
          english: 'He might not come.',
          type: 'main'
        },
        {
          japanese: '間違っているかもしれません。',
          vietnamese: 'Có thể sai.',
          english: 'It might be wrong.',
          type: 'additional'
        }
      ]
    }
  ]
};

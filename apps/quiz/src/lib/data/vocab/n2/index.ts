import type { VocabItem } from '$lib/types';

export interface VocabItemWithGroup extends VocabItem {
  group: string;
}

export const N2_VOCAB_DATA: VocabItemWithGroup[] = [
  // ===== 動詞 (Verbs) =====
  {
    japanese: '届ける',
    kana: 'とどける',
    vietnamese: 'giao, chuyển đến',
    english: 'to deliver',
    type: 'main',
    group: '動詞',
    example: '荷物を届けてください。'
  },
  {
    japanese: '届く',
    kana: 'とどく',
    vietnamese: 'đến nơi, được giao',
    english: 'to arrive, to reach',
    type: 'main',
    group: '動詞',
    example: '手紙が届きました。'
  },
  {
    japanese: '申し込む',
    kana: 'もうしこむ',
    vietnamese: 'đăng ký, nộp đơn',
    english: 'to apply, to register',
    type: 'main',
    group: '動詞',
    example: '大学に申し込みました。'
  },
  {
    japanese: '断る',
    kana: 'ことわる',
    vietnamese: 'từ chối',
    english: 'to refuse, to decline',
    type: 'main',
    group: '動詞',
    example: '彼の誘いを断りました。'
  },
  {
    japanese: '受け取る',
    kana: 'うけとる',
    vietnamese: 'nhận',
    english: 'to receive',
    type: 'main',
    group: '動詞',
    example: '給料を受け取りました。'
  },
  {
    japanese: '取り消す',
    kana: 'とりけす',
    vietnamese: 'hủy bỏ',
    english: 'to cancel',
    type: 'main',
    group: '動詞',
    example: '予約を取り消しました。'
  },
  {
    japanese: '組み立てる',
    kana: 'くみたてる',
    vietnamese: 'lắp ráp',
    english: 'to assemble',
    type: 'main',
    group: '動詞',
    example: '家具を組み立てます。'
  },
  {
    japanese: '片付ける',
    kana: 'かたづける',
    vietnamese: 'dọn dẹp',
    english: 'to tidy up, to clean up',
    type: 'main',
    group: '動詞',
    example: '部屋を片付けなさい。'
  },
  {
    japanese: '育てる',
    kana: 'そだてる',
    vietnamese: 'nuôi dưỡng, trồng',
    english: 'to raise, to grow',
    type: 'main',
    group: '動詞',
    example: '子供を育てるのは大変です。'
  },
  {
    japanese: '育つ',
    kana: 'そだつ',
    vietnamese: 'lớn lên, phát triển',
    english: 'to grow up',
    type: 'main',
    group: '動詞',
    example: '田舎で育ちました。'
  },
  {
    japanese: '暮らす',
    kana: 'くらす',
    vietnamese: 'sinh sống',
    english: 'to live, to make a living',
    type: 'main',
    group: '動詞',
    example: '東京で暮らしています。'
  },
  {
    japanese: '勤める',
    kana: 'つとめる',
    vietnamese: 'làm việc tại',
    english: 'to work for, to be employed',
    type: 'main',
    group: '動詞',
    example: '銀行に勤めています。'
  },
  {
    japanese: '努力する',
    kana: 'どりょくする',
    vietnamese: 'nỗ lực',
    english: 'to make an effort',
    type: 'main',
    group: '動詞',
    example: '毎日努力しています。'
  },
  {
    japanese: '感じる',
    kana: 'かんじる',
    vietnamese: 'cảm thấy',
    english: 'to feel, to sense',
    type: 'main',
    group: '動詞',
    example: '春の訪れを感じます。'
  },
  {
    japanese: '驚く',
    kana: 'おどろく',
    vietnamese: 'ngạc nhiên',
    english: 'to be surprised',
    type: 'main',
    group: '動詞',
    example: 'その知らせに驚きました。'
  },
  {
    japanese: '悩む',
    kana: 'なやむ',
    vietnamese: 'lo lắng, phiền muộn',
    english: 'to worry, to be troubled',
    type: 'main',
    group: '動詞',
    example: '将来のことで悩んでいます。'
  },
  {
    japanese: '尊敬する',
    kana: 'そんけいする',
    vietnamese: 'kính trọng',
    english: 'to respect',
    type: 'main',
    group: '動詞',
    example: '先生を尊敬しています。'
  },
  {
    japanese: '信じる',
    kana: 'しんじる',
    vietnamese: 'tin tưởng',
    english: 'to believe',
    type: 'main',
    group: '動詞',
    example: '彼の言葉を信じます。'
  },
  {
    japanese: '求める',
    kana: 'もとめる',
    vietnamese: 'yêu cầu, tìm kiếm',
    english: 'to seek, to demand',
    type: 'main',
    group: '動詞',
    example: '平和を求めています。'
  },
  {
    japanese: '集中する',
    kana: 'しゅうちゅうする',
    vietnamese: 'tập trung',
    english: 'to concentrate',
    type: 'main',
    group: '動詞',
    example: '勉強に集中してください。'
  },
  {
    japanese: '発表する',
    kana: 'はっぴょうする',
    vietnamese: 'phát biểu, công bố',
    english: 'to announce, to present',
    type: 'main',
    group: '動詞',
    example: '研究の結果を発表しました。'
  },
  {
    japanese: '参加する',
    kana: 'さんかする',
    vietnamese: 'tham gia',
    english: 'to participate',
    type: 'main',
    group: '動詞',
    example: '会議に参加しました。'
  },
  {
    japanese: '協力する',
    kana: 'きょうりょくする',
    vietnamese: 'hợp tác',
    english: 'to cooperate',
    type: 'main',
    group: '動詞',
    example: 'みんなで協力しましょう。'
  },
  {
    japanese: '影響する',
    kana: 'えいきょうする',
    vietnamese: 'ảnh hưởng',
    english: 'to influence',
    type: 'main',
    group: '動詞',
    example: '天気が農業に影響します。'
  },
  {
    japanese: '比較する',
    kana: 'ひかくする',
    vietnamese: 'so sánh',
    english: 'to compare',
    type: 'main',
    group: '動詞',
    example: '二つの商品を比較しました。'
  },
  {
    japanese: '確認する',
    kana: 'かくにんする',
    vietnamese: 'xác nhận',
    english: 'to confirm, to verify',
    type: 'main',
    group: '動詞',
    example: 'スケジュールを確認してください。'
  },
  {
    japanese: '経験する',
    kana: 'けいけんする',
    vietnamese: 'trải nghiệm',
    english: 'to experience',
    type: 'main',
    group: '動詞',
    example: '色々なことを経験しました。'
  },
  {
    japanese: '成功する',
    kana: 'せいこうする',
    vietnamese: 'thành công',
    english: 'to succeed',
    type: 'main',
    group: '動詞',
    example: '事業に成功しました。'
  },
  {
    japanese: '失敗する',
    kana: 'しっぱいする',
    vietnamese: 'thất bại',
    english: 'to fail',
    type: 'main',
    group: '動詞',
    example: '試験に失敗しました。'
  },
  {
    japanese: '輸出する',
    kana: 'ゆしゅつする',
    vietnamese: 'xuất khẩu',
    english: 'to export',
    type: 'main',
    group: '動詞',
    example: '日本は車を輸出しています。'
  },
  {
    japanese: '輸入する',
    kana: 'ゆにゅうする',
    vietnamese: 'nhập khẩu',
    english: 'to import',
    type: 'main',
    group: '動詞',
    example: '石油を輸入しています。'
  },
  {
    japanese: '貯金する',
    kana: 'ちょきんする',
    vietnamese: 'tiết kiệm tiền',
    english: 'to save money',
    type: 'main',
    group: '動詞',
    example: '毎月貯金しています。'
  },
  {
    japanese: '相談する',
    kana: 'そうだんする',
    vietnamese: 'tham khảo ý kiến, tư vấn',
    english: 'to consult',
    type: 'main',
    group: '動詞',
    example: '先生に相談しました。'
  },
  {
    japanese: '反対する',
    kana: 'はんたいする',
    vietnamese: 'phản đối',
    english: 'to oppose',
    type: 'main',
    group: '動詞',
    example: 'その計画に反対します。'
  },
  {
    japanese: '賛成する',
    kana: 'さんせいする',
    vietnamese: 'tán thành',
    english: 'to agree, to approve',
    type: 'main',
    group: '動詞',
    example: 'あなたの意見に賛成です。'
  },
  {
    japanese: '注目する',
    kana: 'ちゅうもくする',
    vietnamese: 'chú ý, quan tâm',
    english: 'to pay attention to',
    type: 'main',
    group: '動詞',
    example: '世界が日本に注目しています。'
  },
  {
    japanese: '主張する',
    kana: 'しゅちょうする',
    vietnamese: 'chủ trương, khẳng định',
    english: 'to assert, to claim',
    type: 'main',
    group: '動詞',
    example: '自分の意見を主張しました。'
  },
  {
    japanese: '交換する',
    kana: 'こうかんする',
    vietnamese: 'trao đổi',
    english: 'to exchange',
    type: 'main',
    group: '動詞',
    example: '名刺を交換しました。'
  },
  {
    japanese: '維持する',
    kana: 'いじする',
    vietnamese: 'duy trì',
    english: 'to maintain',
    type: 'main',
    group: '動詞',
    example: '健康を維持することが大切です。'
  },
  {
    japanese: '増加する',
    kana: 'ぞうかする',
    vietnamese: 'tăng lên',
    english: 'to increase',
    type: 'main',
    group: '動詞',
    example: '人口が増加しています。'
  },
  {
    japanese: '減少する',
    kana: 'げんしょうする',
    vietnamese: 'giảm đi',
    english: 'to decrease',
    type: 'main',
    group: '動詞',
    example: '出生率が減少しています。'
  },
  {
    japanese: '活躍する',
    kana: 'かつやくする',
    vietnamese: 'hoạt động tích cực',
    english: 'to play an active role',
    type: 'main',
    group: '動詞',
    example: '彼は世界で活躍しています。'
  },
  {
    japanese: '対応する',
    kana: 'たいおうする',
    vietnamese: 'đối ứng, xử lý',
    english: 'to deal with, to correspond',
    type: 'main',
    group: '動詞',
    example: '問題に対応しなければなりません。'
  },
  {
    japanese: '解決する',
    kana: 'かいけつする',
    vietnamese: 'giải quyết',
    english: 'to solve, to resolve',
    type: 'main',
    group: '動詞',
    example: '問題を解決しました。'
  },
  {
    japanese: '提出する',
    kana: 'ていしゅつする',
    vietnamese: 'nộp, đệ trình',
    english: 'to submit',
    type: 'main',
    group: '動詞',
    example: 'レポートを提出してください。'
  },
  {
    japanese: '設計する',
    kana: 'せっけいする',
    vietnamese: 'thiết kế',
    english: 'to design, to plan',
    type: 'main',
    group: '動詞',
    example: '新しいビルを設計しました。'
  },
  {
    japanese: '製造する',
    kana: 'せいぞうする',
    vietnamese: 'sản xuất, chế tạo',
    english: 'to manufacture',
    type: 'main',
    group: '動詞',
    example: 'この工場で車を製造しています。'
  },
  {
    japanese: '開発する',
    kana: 'かいはつする',
    vietnamese: 'phát triển, khai phá',
    english: 'to develop',
    type: 'main',
    group: '動詞',
    example: '新しい技術を開発しました。'
  },
  {
    japanese: '調査する',
    kana: 'ちょうさする',
    vietnamese: 'điều tra',
    english: 'to investigate, to survey',
    type: 'main',
    group: '動詞',
    example: '原因を調査しています。'
  },
  {
    japanese: '保存する',
    kana: 'ほぞんする',
    vietnamese: 'bảo tồn, lưu trữ',
    english: 'to preserve, to save',
    type: 'main',
    group: '動詞',
    example: 'データを保存してください。'
  },
  {
    japanese: '延期する',
    kana: 'えんきする',
    vietnamese: 'hoãn lại',
    english: 'to postpone',
    type: 'main',
    group: '動詞',
    example: '会議を延期しました。'
  },
  {
    japanese: '中止する',
    kana: 'ちゅうしする',
    vietnamese: 'ngừng, hủy bỏ',
    english: 'to cancel, to discontinue',
    type: 'main',
    group: '動詞',
    example: '雨で試合を中止しました。'
  },
  {
    japanese: '実施する',
    kana: 'じっしする',
    vietnamese: 'thực hiện, thi hành',
    english: 'to implement, to carry out',
    type: 'main',
    group: '動詞',
    example: '新しい政策を実施しました。'
  },
  {
    japanese: '普及する',
    kana: 'ふきゅうする',
    vietnamese: 'phổ cập, lan rộng',
    english: 'to spread, to become popular',
    type: 'main',
    group: '動詞',
    example: 'インターネットが普及しました。'
  },
  {
    japanese: '我慢する',
    kana: 'がまんする',
    vietnamese: 'chịu đựng, nhẫn nại',
    english: 'to endure, to be patient',
    type: 'main',
    group: '動詞',
    example: '痛みを我慢しました。'
  },
  {
    japanese: '目指す',
    kana: 'めざす',
    vietnamese: 'hướng tới, nhắm đến',
    english: 'to aim for',
    type: 'main',
    group: '動詞',
    example: '医者を目指しています。'
  },
  {
    japanese: '果たす',
    kana: 'はたす',
    vietnamese: 'hoàn thành, thực hiện',
    english: 'to fulfill, to accomplish',
    type: 'main',
    group: '動詞',
    example: '約束を果たしました。'
  },
  {
    japanese: '抱える',
    kana: 'かかえる',
    vietnamese: 'ôm, mang (vấn đề)',
    english: 'to hold, to have (a problem)',
    type: 'main',
    group: '動詞',
    example: '多くの問題を抱えています。'
  },
  {
    japanese: '支える',
    kana: 'ささえる',
    vietnamese: 'hỗ trợ, nâng đỡ',
    english: 'to support',
    type: 'main',
    group: '動詞',
    example: '家族が私を支えてくれました。'
  },
  {
    japanese: '恵まれる',
    kana: 'めぐまれる',
    vietnamese: 'được ban phước, may mắn có',
    english: 'to be blessed with',
    type: 'main',
    group: '動詞',
    example: '天気に恵まれました。'
  },
  {
    japanese: '溶ける',
    kana: 'とける',
    vietnamese: 'tan chảy',
    english: 'to melt, to dissolve',
    type: 'main',
    group: '動詞',
    example: '雪が溶けました。'
  },

  // ===== 形容詞 (Adjectives) =====
  {
    japanese: '素晴らしい',
    kana: 'すばらしい',
    vietnamese: 'tuyệt vời',
    english: 'wonderful, splendid',
    type: 'main',
    group: '形容詞',
    example: '素晴らしい景色ですね。'
  },
  {
    japanese: '激しい',
    kana: 'はげしい',
    vietnamese: 'dữ dội, mãnh liệt',
    english: 'intense, fierce',
    type: 'main',
    group: '形容詞',
    example: '激しい雨が降っています。'
  },
  {
    japanese: '著しい',
    kana: 'いちじるしい',
    vietnamese: 'đáng kể, nổi bật',
    english: 'remarkable, notable',
    type: 'main',
    group: '形容詞',
    example: '著しい進歩を遂げました。'
  },
  {
    japanese: '幼い',
    kana: 'おさない',
    vietnamese: 'nhỏ tuổi, thơ ấu',
    english: 'young, childish',
    type: 'main',
    group: '形容詞',
    example: '幼い頃の思い出です。'
  },
  {
    japanese: '鋭い',
    kana: 'するどい',
    vietnamese: 'sắc bén, nhạy bén',
    english: 'sharp, keen',
    type: 'main',
    group: '形容詞',
    example: '鋭い意見を述べました。'
  },
  {
    japanese: '穏やかな',
    kana: 'おだやかな',
    vietnamese: 'ôn hòa, yên bình',
    english: 'calm, gentle',
    type: 'main',
    group: '形容詞',
    example: '穏やかな天気です。'
  },
  {
    japanese: '豊かな',
    kana: 'ゆたかな',
    vietnamese: 'phong phú, giàu có',
    english: 'rich, abundant',
    type: 'main',
    group: '形容詞',
    example: '自然が豊かな地域です。'
  },
  {
    japanese: '盛んな',
    kana: 'さかんな',
    vietnamese: 'thịnh vượng, phổ biến',
    english: 'prosperous, popular',
    type: 'main',
    group: '形容詞',
    example: 'この地域は農業が盛んです。'
  },
  {
    japanese: '正確な',
    kana: 'せいかくな',
    vietnamese: 'chính xác',
    english: 'accurate, precise',
    type: 'main',
    group: '形容詞',
    example: '正確な情報を伝えてください。'
  },
  {
    japanese: '適切な',
    kana: 'てきせつな',
    vietnamese: 'thích hợp, phù hợp',
    english: 'appropriate, suitable',
    type: 'main',
    group: '形容詞',
    example: '適切な対応をしてください。'
  },
  {
    japanese: '深刻な',
    kana: 'しんこくな',
    vietnamese: 'nghiêm trọng',
    english: 'serious, grave',
    type: 'main',
    group: '形容詞',
    example: '深刻な問題が発生しました。'
  },
  {
    japanese: '明確な',
    kana: 'めいかくな',
    vietnamese: 'rõ ràng, minh bạch',
    english: 'clear, definite',
    type: 'main',
    group: '形容詞',
    example: '明確な目標を立ててください。'
  },
  {
    japanese: '巨大な',
    kana: 'きょだいな',
    vietnamese: 'khổng lồ',
    english: 'huge, enormous',
    type: 'main',
    group: '形容詞',
    example: '巨大な建物が建てられました。'
  },
  {
    japanese: '貴重な',
    kana: 'きちょうな',
    vietnamese: 'quý giá',
    english: 'precious, valuable',
    type: 'main',
    group: '形容詞',
    example: '貴重な経験をしました。'
  },
  {
    japanese: '急速な',
    kana: 'きゅうそくな',
    vietnamese: 'nhanh chóng',
    english: 'rapid',
    type: 'main',
    group: '形容詞',
    example: '急速な経済発展が見られます。'
  },
  {
    japanese: '膨大な',
    kana: 'ぼうだいな',
    vietnamese: 'đồ sộ, khổng lồ',
    english: 'enormous, vast',
    type: 'main',
    group: '形容詞',
    example: '膨大なデータを分析しました。'
  },
  {
    japanese: '頑固な',
    kana: 'がんこな',
    vietnamese: 'cứng đầu, bướng bỉnh',
    english: 'stubborn',
    type: 'main',
    group: '形容詞',
    example: '祖父は頑固な人です。'
  },
  {
    japanese: '柔軟な',
    kana: 'じゅうなんな',
    vietnamese: 'linh hoạt, mềm dẻo',
    english: 'flexible',
    type: 'main',
    group: '形容詞',
    example: '柔軟な考え方が必要です。'
  },
  {
    japanese: '純粋な',
    kana: 'じゅんすいな',
    vietnamese: 'thuần khiết, trong sáng',
    english: 'pure',
    type: 'main',
    group: '形容詞',
    example: '純粋な気持ちで接してください。'
  },
  {
    japanese: '微妙な',
    kana: 'びみょうな',
    vietnamese: 'tinh tế, tế nhị',
    english: 'subtle, delicate',
    type: 'main',
    group: '形容詞',
    example: '微妙な違いがあります。'
  },
  {
    japanese: '曖昧な',
    kana: 'あいまいな',
    vietnamese: 'mơ hồ, không rõ ràng',
    english: 'vague, ambiguous',
    type: 'main',
    group: '形容詞',
    example: '曖昧な返事をしないでください。'
  },
  {
    japanese: '厳しい',
    kana: 'きびしい',
    vietnamese: 'nghiêm khắc, khắt khe',
    english: 'strict, harsh',
    type: 'main',
    group: '形容詞',
    example: '先生は厳しいですが、優しいです。'
  },
  {
    japanese: '怪しい',
    kana: 'あやしい',
    vietnamese: 'đáng ngờ, kỳ lạ',
    english: 'suspicious, dubious',
    type: 'main',
    group: '形容詞',
    example: '怪しい人を見かけました。'
  },
  {
    japanese: '恥ずかしい',
    kana: 'はずかしい',
    vietnamese: 'xấu hổ',
    english: 'embarrassing, ashamed',
    type: 'main',
    group: '形容詞',
    example: 'みんなの前で恥ずかしかったです。'
  },
  {
    japanese: '羨ましい',
    kana: 'うらやましい',
    vietnamese: 'ghen tị, đáng ngưỡng mộ',
    english: 'envious, jealous',
    type: 'main',
    group: '形容詞',
    example: '彼の才能が羨ましいです。'
  },
  {
    japanese: '情けない',
    kana: 'なさけない',
    vietnamese: 'đáng thương, tội nghiệp',
    english: 'pathetic, miserable',
    type: 'main',
    group: '形容詞',
    example: '自分が情けないと思いました。'
  },
  {
    japanese: '相応しい',
    kana: 'ふさわしい',
    vietnamese: 'phù hợp, xứng đáng',
    english: 'suitable, worthy',
    type: 'main',
    group: '形容詞',
    example: 'リーダーに相応しい人です。'
  },
  {
    japanese: '望ましい',
    kana: 'のぞましい',
    vietnamese: 'đáng mong muốn',
    english: 'desirable',
    type: 'main',
    group: '形容詞',
    example: '望ましい結果が出ました。'
  },
  {
    japanese: '複雑な',
    kana: 'ふくざつな',
    vietnamese: 'phức tạp',
    english: 'complex, complicated',
    type: 'main',
    group: '形容詞',
    example: '複雑な問題を解決しました。'
  },
  {
    japanese: '高度な',
    kana: 'こうどな',
    vietnamese: 'cao cấp, tiên tiến',
    english: 'advanced, sophisticated',
    type: 'main',
    group: '形容詞',
    example: '高度な技術が必要です。'
  },
  {
    japanese: '有効な',
    kana: 'ゆうこうな',
    vietnamese: 'có hiệu lực, hữu hiệu',
    english: 'effective, valid',
    type: 'main',
    group: '形容詞',
    example: 'この方法は有効です。'
  },
  {
    japanese: '具体的な',
    kana: 'ぐたいてきな',
    vietnamese: 'cụ thể',
    english: 'concrete, specific',
    type: 'main',
    group: '形容詞',
    example: '具体的な計画を立ててください。'
  },
  {
    japanese: '積極的な',
    kana: 'せっきょくてきな',
    vietnamese: 'tích cực',
    english: 'active, positive',
    type: 'main',
    group: '形容詞',
    example: '積極的に参加してください。'
  },
  {
    japanese: '消極的な',
    kana: 'しょうきょくてきな',
    vietnamese: 'tiêu cực, thụ động',
    english: 'passive, negative',
    type: 'main',
    group: '形容詞',
    example: '消極的な態度はよくありません。'
  },
  {
    japanese: '効率的な',
    kana: 'こうりつてきな',
    vietnamese: 'hiệu quả',
    english: 'efficient',
    type: 'main',
    group: '形容詞',
    example: '効率的な方法を考えましょう。'
  },
  {
    japanese: '魅力的な',
    kana: 'みりょくてきな',
    vietnamese: 'hấp dẫn, quyến rũ',
    english: 'attractive, charming',
    type: 'main',
    group: '形容詞',
    example: '魅力的な提案ですね。'
  },
  {
    japanese: '圧倒的な',
    kana: 'あっとうてきな',
    vietnamese: 'áp đảo',
    english: 'overwhelming',
    type: 'main',
    group: '形容詞',
    example: '圧倒的な勝利を収めました。'
  },
  {
    japanese: '一般的な',
    kana: 'いっぱんてきな',
    vietnamese: 'phổ biến, chung',
    english: 'general, common',
    type: 'main',
    group: '形容詞',
    example: '一般的にはそう言われています。'
  },
  {
    japanese: '国際的な',
    kana: 'こくさいてきな',
    vietnamese: 'quốc tế',
    english: 'international',
    type: 'main',
    group: '形容詞',
    example: '国際的な会議が開かれました。'
  },
  {
    japanese: '基本的な',
    kana: 'きほんてきな',
    vietnamese: 'cơ bản',
    english: 'basic, fundamental',
    type: 'main',
    group: '形容詞',
    example: '基本的なルールを守ってください。'
  },

  // ===== 名詞・社会 (Nouns - Society) =====
  {
    japanese: '政治',
    kana: 'せいじ',
    vietnamese: 'chính trị',
    english: 'politics',
    type: 'main',
    group: '名詞・社会',
    example: '政治に興味があります。'
  },
  {
    japanese: '経済',
    kana: 'けいざい',
    vietnamese: 'kinh tế',
    english: 'economy',
    type: 'main',
    group: '名詞・社会',
    example: '経済が成長しています。'
  },
  {
    japanese: '社会',
    kana: 'しゃかい',
    vietnamese: 'xã hội',
    english: 'society',
    type: 'main',
    group: '名詞・社会',
    example: '社会問題について議論しました。'
  },
  {
    japanese: '法律',
    kana: 'ほうりつ',
    vietnamese: 'pháp luật',
    english: 'law',
    type: 'main',
    group: '名詞・社会',
    example: '法律を守らなければなりません。'
  },
  {
    japanese: '制度',
    kana: 'せいど',
    vietnamese: 'chế độ, hệ thống',
    english: 'system, institution',
    type: 'main',
    group: '名詞・社会',
    example: '新しい制度が導入されました。'
  },
  {
    japanese: '権利',
    kana: 'けんり',
    vietnamese: 'quyền lợi',
    english: 'right, privilege',
    type: 'main',
    group: '名詞・社会',
    example: '国民の権利を守るべきです。'
  },
  {
    japanese: '義務',
    kana: 'ぎむ',
    vietnamese: 'nghĩa vụ',
    english: 'duty, obligation',
    type: 'main',
    group: '名詞・社会',
    example: '教育は国民の義務です。'
  },
  {
    japanese: '選挙',
    kana: 'せんきょ',
    vietnamese: 'bầu cử',
    english: 'election',
    type: 'main',
    group: '名詞・社会',
    example: '来月選挙が行われます。'
  },
  {
    japanese: '税金',
    kana: 'ぜいきん',
    vietnamese: 'thuế',
    english: 'tax',
    type: 'main',
    group: '名詞・社会',
    example: '税金を払わなければなりません。'
  },
  {
    japanese: '予算',
    kana: 'よさん',
    vietnamese: 'ngân sách',
    english: 'budget',
    type: 'main',
    group: '名詞・社会',
    example: '予算が足りません。'
  },
  {
    japanese: '福祉',
    kana: 'ふくし',
    vietnamese: 'phúc lợi',
    english: 'welfare',
    type: 'main',
    group: '名詞・社会',
    example: '社会福祉の充実が求められています。'
  },
  {
    japanese: '就職',
    kana: 'しゅうしょく',
    vietnamese: 'xin việc, nhận việc',
    english: 'finding employment',
    type: 'main',
    group: '名詞・社会',
    example: '来年就職する予定です。'
  },
  {
    japanese: '退職',
    kana: 'たいしょく',
    vietnamese: 'nghỉ việc, về hưu',
    english: 'retirement, resignation',
    type: 'main',
    group: '名詞・社会',
    example: '父は来年退職します。'
  },
  {
    japanese: '収入',
    kana: 'しゅうにゅう',
    vietnamese: 'thu nhập',
    english: 'income',
    type: 'main',
    group: '名詞・社会',
    example: '収入が増えました。'
  },
  {
    japanese: '支出',
    kana: 'ししゅつ',
    vietnamese: 'chi tiêu',
    english: 'expenditure',
    type: 'main',
    group: '名詞・社会',
    example: '支出を減らす必要があります。'
  },
  {
    japanese: '犯罪',
    kana: 'はんざい',
    vietnamese: 'tội phạm',
    english: 'crime',
    type: 'main',
    group: '名詞・社会',
    example: '犯罪が増えています。'
  },
  {
    japanese: '裁判',
    kana: 'さいばん',
    vietnamese: 'phiên tòa',
    english: 'trial, court',
    type: 'main',
    group: '名詞・社会',
    example: '裁判が始まりました。'
  },
  {
    japanese: '被害',
    kana: 'ひがい',
    vietnamese: 'thiệt hại',
    english: 'damage, harm',
    type: 'main',
    group: '名詞・社会',
    example: '台風の被害が大きかったです。'
  },
  {
    japanese: '事故',
    kana: 'じこ',
    vietnamese: 'tai nạn',
    english: 'accident',
    type: 'main',
    group: '名詞・社会',
    example: '交通事故に注意してください。'
  },
  {
    japanese: '報告',
    kana: 'ほうこく',
    vietnamese: 'báo cáo',
    english: 'report',
    type: 'main',
    group: '名詞・社会',
    example: '報告書を提出しました。'
  },
  {
    japanese: '議論',
    kana: 'ぎろん',
    vietnamese: 'thảo luận, tranh luận',
    english: 'discussion, debate',
    type: 'main',
    group: '名詞・社会',
    example: '環境問題について議論しました。'
  },
  {
    japanese: '世論',
    kana: 'よろん',
    vietnamese: 'dư luận',
    english: 'public opinion',
    type: 'main',
    group: '名詞・社会',
    example: '世論調査の結果が出ました。'
  },
  {
    japanese: '景気',
    kana: 'けいき',
    vietnamese: 'tình hình kinh tế',
    english: 'economic conditions',
    type: 'main',
    group: '名詞・社会',
    example: '景気が回復してきました。'
  },
  {
    japanese: '物価',
    kana: 'ぶっか',
    vietnamese: 'giá cả',
    english: 'prices, cost of living',
    type: 'main',
    group: '名詞・社会',
    example: '物価が上がっています。'
  },
  {
    japanese: '不況',
    kana: 'ふきょう',
    vietnamese: 'suy thoái kinh tế',
    english: 'recession, depression',
    type: 'main',
    group: '名詞・社会',
    example: '不況で失業者が増えました。'
  },
  {
    japanese: '人口',
    kana: 'じんこう',
    vietnamese: 'dân số',
    english: 'population',
    type: 'main',
    group: '名詞・社会',
    example: '日本の人口は減っています。'
  },
  {
    japanese: '少子化',
    kana: 'しょうしか',
    vietnamese: 'giảm tỷ lệ sinh',
    english: 'declining birthrate',
    type: 'main',
    group: '名詞・社会',
    example: '少子化が問題になっています。'
  },
  {
    japanese: '高齢化',
    kana: 'こうれいか',
    vietnamese: 'già hóa dân số',
    english: 'aging population',
    type: 'main',
    group: '名詞・社会',
    example: '高齢化社会が進んでいます。'
  },
  {
    japanese: '差別',
    kana: 'さべつ',
    vietnamese: 'phân biệt đối xử',
    english: 'discrimination',
    type: 'main',
    group: '名詞・社会',
    example: '差別をなくすべきです。'
  },
  {
    japanese: '格差',
    kana: 'かくさ',
    vietnamese: 'khoảng cách, chênh lệch',
    english: 'gap, disparity',
    type: 'main',
    group: '名詞・社会',
    example: '所得格差が広がっています。'
  },
  {
    japanese: '貿易',
    kana: 'ぼうえき',
    vietnamese: 'thương mại, mậu dịch',
    english: 'trade',
    type: 'main',
    group: '名詞・社会',
    example: '日本は貿易が盛んです。'
  },
  {
    japanese: '契約',
    kana: 'けいやく',
    vietnamese: 'hợp đồng',
    english: 'contract',
    type: 'main',
    group: '名詞・社会',
    example: '契約書にサインしました。'
  },
  {
    japanese: '保険',
    kana: 'ほけん',
    vietnamese: 'bảo hiểm',
    english: 'insurance',
    type: 'main',
    group: '名詞・社会',
    example: '保険に入っていますか。'
  },
  {
    japanese: '年金',
    kana: 'ねんきん',
    vietnamese: 'lương hưu',
    english: 'pension',
    type: 'main',
    group: '名詞・社会',
    example: '年金制度が変わりました。'
  },
  {
    japanese: '世代',
    kana: 'せだい',
    vietnamese: 'thế hệ',
    english: 'generation',
    type: 'main',
    group: '名詞・社会',
    example: '若い世代の考え方は違います。'
  },
  {
    japanese: '国籍',
    kana: 'こくせき',
    vietnamese: 'quốc tịch',
    english: 'nationality',
    type: 'main',
    group: '名詞・社会',
    example: '国籍に関係なく参加できます。'
  },
  {
    japanese: '移民',
    kana: 'いみん',
    vietnamese: 'di dân',
    english: 'immigration, immigrant',
    type: 'main',
    group: '名詞・社会',
    example: '移民政策について議論しています。'
  },
  {
    japanese: '平等',
    kana: 'びょうどう',
    vietnamese: 'bình đẳng',
    english: 'equality',
    type: 'main',
    group: '名詞・社会',
    example: '男女平等を目指しています。'
  },
  {
    japanese: '産業',
    kana: 'さんぎょう',
    vietnamese: 'ngành công nghiệp',
    english: 'industry',
    type: 'main',
    group: '名詞・社会',
    example: '自動車産業が発展しました。'
  },
  {
    japanese: '資源',
    kana: 'しげん',
    vietnamese: 'tài nguyên',
    english: 'resources',
    type: 'main',
    group: '名詞・社会',
    example: '資源を大切にしましょう。'
  },

  // ===== 名詞・自然・科学 (Nouns - Nature/Science) =====
  {
    japanese: '環境',
    kana: 'かんきょう',
    vietnamese: 'môi trường',
    english: 'environment',
    type: 'main',
    group: '名詞・自然・科学',
    example: '環境を守ることが大切です。'
  },
  {
    japanese: '温暖化',
    kana: 'おんだんか',
    vietnamese: 'sự nóng lên toàn cầu',
    english: 'global warming',
    type: 'main',
    group: '名詞・自然・科学',
    example: '地球温暖化が進んでいます。'
  },
  {
    japanese: '汚染',
    kana: 'おせん',
    vietnamese: 'ô nhiễm',
    english: 'pollution',
    type: 'main',
    group: '名詞・自然・科学',
    example: '大気汚染が深刻です。'
  },
  {
    japanese: '災害',
    kana: 'さいがい',
    vietnamese: 'thiên tai',
    english: 'disaster',
    type: 'main',
    group: '名詞・自然・科学',
    example: '自然災害に備えましょう。'
  },
  {
    japanese: '地震',
    kana: 'じしん',
    vietnamese: 'động đất',
    english: 'earthquake',
    type: 'main',
    group: '名詞・自然・科学',
    example: '大きな地震がありました。'
  },
  {
    japanese: '噴火',
    kana: 'ふんか',
    vietnamese: 'phun trào núi lửa',
    english: 'volcanic eruption',
    type: 'main',
    group: '名詞・自然・科学',
    example: '火山が噴火しました。'
  },
  {
    japanese: '洪水',
    kana: 'こうずい',
    vietnamese: 'lũ lụt',
    english: 'flood',
    type: 'main',
    group: '名詞・自然・科学',
    example: '洪水で多くの家が流されました。'
  },
  {
    japanese: '干ばつ',
    kana: 'かんばつ',
    vietnamese: 'hạn hán',
    english: 'drought',
    type: 'main',
    group: '名詞・自然・科学',
    example: '干ばつで農作物が枯れました。'
  },
  {
    japanese: '生態系',
    kana: 'せいたいけい',
    vietnamese: 'hệ sinh thái',
    english: 'ecosystem',
    type: 'main',
    group: '名詞・自然・科学',
    example: '生態系を破壊してはいけません。'
  },
  {
    japanese: '絶滅',
    kana: 'ぜつめつ',
    vietnamese: 'tuyệt chủng',
    english: 'extinction',
    type: 'main',
    group: '名詞・自然・科学',
    example: '多くの動物が絶滅の危機にあります。'
  },
  {
    japanese: '再生',
    kana: 'さいせい',
    vietnamese: 'tái tạo, tái sinh',
    english: 'regeneration, recycling',
    type: 'main',
    group: '名詞・自然・科学',
    example: '再生エネルギーが注目されています。'
  },
  {
    japanese: '実験',
    kana: 'じっけん',
    vietnamese: 'thí nghiệm',
    english: 'experiment',
    type: 'main',
    group: '名詞・自然・科学',
    example: '科学の実験をしました。'
  },
  {
    japanese: '研究',
    kana: 'けんきゅう',
    vietnamese: 'nghiên cứu',
    english: 'research',
    type: 'main',
    group: '名詞・自然・科学',
    example: '新しい薬の研究をしています。'
  },
  {
    japanese: '遺伝子',
    kana: 'いでんし',
    vietnamese: 'gen, di truyền',
    english: 'gene',
    type: 'main',
    group: '名詞・自然・科学',
    example: '遺伝子の研究が進んでいます。'
  },
  {
    japanese: '細胞',
    kana: 'さいぼう',
    vietnamese: 'tế bào',
    english: 'cell',
    type: 'main',
    group: '名詞・自然・科学',
    example: '人間の体は細胞でできています。'
  },
  {
    japanese: '酸素',
    kana: 'さんそ',
    vietnamese: 'oxy',
    english: 'oxygen',
    type: 'main',
    group: '名詞・自然・科学',
    example: '植物は酸素を出します。'
  },
  {
    japanese: '二酸化炭素',
    kana: 'にさんかたんそ',
    vietnamese: 'khí CO2',
    english: 'carbon dioxide',
    type: 'main',
    group: '名詞・自然・科学',
    example: '二酸化炭素の排出を減らしましょう。'
  },
  {
    japanese: '宇宙',
    kana: 'うちゅう',
    vietnamese: 'vũ trụ',
    english: 'universe, space',
    type: 'main',
    group: '名詞・自然・科学',
    example: '宇宙の謎はまだ多いです。'
  },
  {
    japanese: '衛星',
    kana: 'えいせい',
    vietnamese: 'vệ tinh',
    english: 'satellite',
    type: 'main',
    group: '名詞・自然・科学',
    example: '人工衛星を打ち上げました。'
  },
  {
    japanese: '現象',
    kana: 'げんしょう',
    vietnamese: 'hiện tượng',
    english: 'phenomenon',
    type: 'main',
    group: '名詞・自然・科学',
    example: '不思議な現象が起きました。'
  },
  {
    japanese: '発見',
    kana: 'はっけん',
    vietnamese: 'phát hiện',
    english: 'discovery',
    type: 'main',
    group: '名詞・自然・科学',
    example: '新しい星が発見されました。'
  },
  {
    japanese: '発明',
    kana: 'はつめい',
    vietnamese: 'phát minh',
    english: 'invention',
    type: 'main',
    group: '名詞・自然・科学',
    example: '電話はベルの発明です。'
  },
  {
    japanese: '原因',
    kana: 'げんいん',
    vietnamese: 'nguyên nhân',
    english: 'cause',
    type: 'main',
    group: '名詞・自然・科学',
    example: '事故の原因を調べています。'
  },
  {
    japanese: '結果',
    kana: 'けっか',
    vietnamese: 'kết quả',
    english: 'result',
    type: 'main',
    group: '名詞・自然・科学',
    example: '実験の結果が出ました。'
  },
  {
    japanese: '分析',
    kana: 'ぶんせき',
    vietnamese: 'phân tích',
    english: 'analysis',
    type: 'main',
    group: '名詞・自然・科学',
    example: 'データを分析しました。'
  },
  {
    japanese: '観測',
    kana: 'かんそく',
    vietnamese: 'quan trắc, quan sát',
    english: 'observation',
    type: 'main',
    group: '名詞・自然・科学',
    example: '天体観測をしました。'
  },
  {
    japanese: '放射能',
    kana: 'ほうしゃのう',
    vietnamese: 'phóng xạ',
    english: 'radioactivity',
    type: 'main',
    group: '名詞・自然・科学',
    example: '放射能の影響が心配です。'
  },
  {
    japanese: '化石',
    kana: 'かせき',
    vietnamese: 'hóa thạch',
    english: 'fossil',
    type: 'main',
    group: '名詞・自然・科学',
    example: '恐竜の化石が発見されました。'
  },
  {
    japanese: '大気',
    kana: 'たいき',
    vietnamese: 'khí quyển',
    english: 'atmosphere',
    type: 'main',
    group: '名詞・自然・科学',
    example: '大気が汚れています。'
  },
  {
    japanese: '気候',
    kana: 'きこう',
    vietnamese: 'khí hậu',
    english: 'climate',
    type: 'main',
    group: '名詞・自然・科学',
    example: '気候変動が問題になっています。'
  },

  // ===== 副詞・接続詞 (Adverbs/Conjunctions) =====
  {
    japanese: 'ますます',
    kana: 'ますます',
    vietnamese: 'ngày càng',
    english: 'increasingly, more and more',
    type: 'main',
    group: '副詞・接続詞',
    example: '問題はますます深刻になっています。'
  },
  {
    japanese: 'わずかに',
    kana: 'わずかに',
    vietnamese: 'một chút, ít ỏi',
    english: 'slightly, barely',
    type: 'main',
    group: '副詞・接続詞',
    example: '温度がわずかに上がりました。'
  },
  {
    japanese: 'かなり',
    kana: 'かなり',
    vietnamese: 'khá, tương đối',
    english: 'fairly, considerably',
    type: 'main',
    group: '副詞・接続詞',
    example: 'かなり難しい問題です。'
  },
  {
    japanese: '極めて',
    kana: 'きわめて',
    vietnamese: 'cực kỳ',
    english: 'extremely',
    type: 'main',
    group: '副詞・接続詞',
    example: '極めて重要な問題です。'
  },
  {
    japanese: 'むしろ',
    kana: 'むしろ',
    vietnamese: 'thà, đúng hơn là',
    english: 'rather',
    type: 'main',
    group: '副詞・接続詞',
    example: 'むしろ、その方がいいです。'
  },
  {
    japanese: 'いっそう',
    kana: 'いっそう',
    vietnamese: 'càng thêm',
    english: 'all the more, even more',
    type: 'main',
    group: '副詞・接続詞',
    example: 'いっそう努力が必要です。'
  },
  {
    japanese: 'しばしば',
    kana: 'しばしば',
    vietnamese: 'thường xuyên',
    english: 'often, frequently',
    type: 'main',
    group: '副詞・接続詞',
    example: 'しばしばこの店に来ます。'
  },
  {
    japanese: 'たちまち',
    kana: 'たちまち',
    vietnamese: 'ngay lập tức',
    english: 'instantly, at once',
    type: 'main',
    group: '副詞・接続詞',
    example: 'その話はたちまち広まりました。'
  },
  {
    japanese: 'やがて',
    kana: 'やがて',
    vietnamese: 'chẳng bao lâu, rồi thì',
    english: 'soon, before long',
    type: 'main',
    group: '副詞・接続詞',
    example: 'やがて春が来るでしょう。'
  },
  {
    japanese: 'ようやく',
    kana: 'ようやく',
    vietnamese: 'cuối cùng cũng, rốt cuộc',
    english: 'finally, at last',
    type: 'main',
    group: '副詞・接続詞',
    example: 'ようやく仕事が終わりました。'
  },
  {
    japanese: 'なるべく',
    kana: 'なるべく',
    vietnamese: 'càng ... càng tốt',
    english: 'as much as possible',
    type: 'main',
    group: '副詞・接続詞',
    example: 'なるべく早く来てください。'
  },
  {
    japanese: 'せめて',
    kana: 'せめて',
    vietnamese: 'ít nhất là',
    english: 'at least',
    type: 'main',
    group: '副詞・接続詞',
    example: 'せめて電話してください。'
  },
  {
    japanese: 'たとえ',
    kana: 'たとえ',
    vietnamese: 'cho dù, dù cho',
    english: 'even if',
    type: 'main',
    group: '副詞・接続詞',
    example: 'たとえ雨でも行きます。'
  },
  {
    japanese: '万一',
    kana: 'まんいち',
    vietnamese: 'nhỡ mà, vạn nhất',
    english: 'by any chance, in case',
    type: 'main',
    group: '副詞・接続詞',
    example: '万一に備えて準備しましょう。'
  },
  {
    japanese: 'つまり',
    kana: 'つまり',
    vietnamese: 'tóm lại, nghĩa là',
    english: 'in other words, that is',
    type: 'main',
    group: '副詞・接続詞',
    example: 'つまり、反対ということですか。'
  },
  {
    japanese: 'すなわち',
    kana: 'すなわち',
    vietnamese: 'tức là, có nghĩa là',
    english: 'namely, in other words',
    type: 'main',
    group: '副詞・接続詞',
    example: '彼は社長、すなわち最高責任者です。'
  },
  {
    japanese: 'したがって',
    kana: 'したがって',
    vietnamese: 'do đó, vì vậy',
    english: 'therefore, consequently',
    type: 'main',
    group: '副詞・接続詞',
    example: '雨です。したがって試合は中止です。'
  },
  {
    japanese: 'ただし',
    kana: 'ただし',
    vietnamese: 'tuy nhiên, nhưng mà',
    english: 'however, provided that',
    type: 'main',
    group: '副詞・接続詞',
    example: '参加は自由です。ただし、申し込みが必要です。'
  },
  {
    japanese: 'もっとも',
    kana: 'もっとも',
    vietnamese: 'tuy nhiên, dù sao thì',
    english: 'although, but then',
    type: 'main',
    group: '副詞・接続詞',
    example: '彼は優秀です。もっとも、欠点もあります。'
  },
  {
    japanese: 'さらに',
    kana: 'さらに',
    vietnamese: 'hơn nữa, thêm vào đó',
    english: 'furthermore, in addition',
    type: 'main',
    group: '副詞・接続詞',
    example: 'さらに詳しく調べます。'
  },
  {
    japanese: 'そもそも',
    kana: 'そもそも',
    vietnamese: 'trước hết, ngay từ đầu',
    english: 'in the first place',
    type: 'main',
    group: '副詞・接続詞',
    example: 'そもそも、なぜそうなったのですか。'
  },
  {
    japanese: 'なおさら',
    kana: 'なおさら',
    vietnamese: 'lại càng',
    english: 'all the more',
    type: 'main',
    group: '副詞・接続詞',
    example: '彼がいないとなおさら寂しいです。'
  },
  {
    japanese: 'いずれ',
    kana: 'いずれ',
    vietnamese: 'sớm muộn gì, trước sau gì',
    english: 'eventually, sooner or later',
    type: 'main',
    group: '副詞・接続詞',
    example: 'いずれ分かる日が来るでしょう。'
  },
  {
    japanese: 'とにかく',
    kana: 'とにかく',
    vietnamese: 'dù gì đi nữa, trước hết',
    english: 'anyway, at any rate',
    type: 'main',
    group: '副詞・接続詞',
    example: 'とにかく、やってみましょう。'
  },
  {
    japanese: '一方',
    kana: 'いっぽう',
    vietnamese: 'mặt khác',
    english: 'on the other hand',
    type: 'main',
    group: '副詞・接続詞',
    example: '経済は成長した。一方、環境は悪化した。'
  },
  {
    japanese: 'それにしても',
    kana: 'それにしても',
    vietnamese: 'dù vậy, thế nhưng mà',
    english: 'even so, nevertheless',
    type: 'main',
    group: '副詞・接続詞',
    example: 'それにしても、暑いですね。'
  },
  {
    japanese: 'かえって',
    kana: 'かえって',
    vietnamese: 'ngược lại, trái lại',
    english: 'on the contrary',
    type: 'main',
    group: '副詞・接続詞',
    example: '薬を飲んだのに、かえって悪くなりました。'
  },
  {
    japanese: '直ちに',
    kana: 'ただちに',
    vietnamese: 'ngay lập tức',
    english: 'immediately',
    type: 'main',
    group: '副詞・接続詞',
    example: '直ちに避難してください。'
  },
  {
    japanese: 'あらかじめ',
    kana: 'あらかじめ',
    vietnamese: 'trước, sẵn',
    english: 'in advance, beforehand',
    type: 'main',
    group: '副詞・接続詞',
    example: 'あらかじめ予約してください。'
  },
  {
    japanese: '果たして',
    kana: 'はたして',
    vietnamese: 'rốt cuộc, quả nhiên',
    english: 'as expected, sure enough',
    type: 'main',
    group: '副詞・接続詞',
    example: '果たして彼の言った通りだった。'
  },

  // ===== 名詞・抽象 (Nouns - Abstract) =====
  {
    japanese: '意識',
    kana: 'いしき',
    vietnamese: 'ý thức',
    english: 'consciousness, awareness',
    type: 'main',
    group: '名詞・抽象',
    example: '環境に対する意識が高まっています。'
  },
  {
    japanese: '価値',
    kana: 'かち',
    vietnamese: 'giá trị',
    english: 'value, worth',
    type: 'main',
    group: '名詞・抽象',
    example: 'この絵には高い価値があります。'
  },
  {
    japanese: '概念',
    kana: 'がいねん',
    vietnamese: 'khái niệm',
    english: 'concept, notion',
    type: 'main',
    group: '名詞・抽象',
    example: '新しい概念を学びました。'
  },
  {
    japanese: '理念',
    kana: 'りねん',
    vietnamese: 'lý niệm, triết lý',
    english: 'philosophy, principle',
    type: 'main',
    group: '名詞・抽象',
    example: '会社の理念に共感しました。'
  },
  {
    japanese: '傾向',
    kana: 'けいこう',
    vietnamese: 'xu hướng',
    english: 'tendency, trend',
    type: 'main',
    group: '名詞・抽象',
    example: '最近の傾向を分析しました。'
  },
  {
    japanese: '状況',
    kana: 'じょうきょう',
    vietnamese: 'tình huống, tình hình',
    english: 'situation, circumstances',
    type: 'main',
    group: '名詞・抽象',
    example: '現在の状況を説明します。'
  },
  {
    japanese: '条件',
    kana: 'じょうけん',
    vietnamese: 'điều kiện',
    english: 'condition, requirement',
    type: 'main',
    group: '名詞・抽象',
    example: '条件を満たしていません。'
  },
  {
    japanese: '要因',
    kana: 'よういん',
    vietnamese: 'yếu tố, nguyên nhân',
    english: 'factor, cause',
    type: 'main',
    group: '名詞・抽象',
    example: '成功の要因を考えましょう。'
  },
  {
    japanese: '背景',
    kana: 'はいけい',
    vietnamese: 'bối cảnh',
    english: 'background',
    type: 'main',
    group: '名詞・抽象',
    example: '歴史的背景を理解する必要があります。'
  },
  {
    japanese: '方針',
    kana: 'ほうしん',
    vietnamese: 'phương châm, chính sách',
    english: 'policy, direction',
    type: 'main',
    group: '名詞・抽象',
    example: '会社の方針が変わりました。'
  },
  {
    japanese: '対策',
    kana: 'たいさく',
    vietnamese: 'đối sách, biện pháp',
    english: 'measure, countermeasure',
    type: 'main',
    group: '名詞・抽象',
    example: '環境問題の対策が必要です。'
  },
  {
    japanese: '手段',
    kana: 'しゅだん',
    vietnamese: 'phương tiện, cách thức',
    english: 'means, method',
    type: 'main',
    group: '名詞・抽象',
    example: '交通手段は何ですか。'
  },
  {
    japanese: '過程',
    kana: 'かてい',
    vietnamese: 'quá trình',
    english: 'process, course',
    type: 'main',
    group: '名詞・抽象',
    example: '製造の過程を見学しました。'
  },
  {
    japanese: '範囲',
    kana: 'はんい',
    vietnamese: 'phạm vi',
    english: 'range, scope',
    type: 'main',
    group: '名詞・抽象',
    example: '試験の範囲を確認してください。'
  },
  {
    japanese: '基準',
    kana: 'きじゅん',
    vietnamese: 'tiêu chuẩn',
    english: 'standard, criterion',
    type: 'main',
    group: '名詞・抽象',
    example: '安全基準を満たしています。'
  },
  {
    japanese: '根拠',
    kana: 'こんきょ',
    vietnamese: 'căn cứ, cơ sở',
    english: 'basis, grounds',
    type: 'main',
    group: '名詞・抽象',
    example: '根拠のある意見を述べてください。'
  },
  {
    japanese: '矛盾',
    kana: 'むじゅん',
    vietnamese: 'mâu thuẫn',
    english: 'contradiction',
    type: 'main',
    group: '名詞・抽象',
    example: '彼の話には矛盾があります。'
  },
  {
    japanese: '偏見',
    kana: 'へんけん',
    vietnamese: 'thành kiến',
    english: 'prejudice, bias',
    type: 'main',
    group: '名詞・抽象',
    example: '偏見をなくすべきです。'
  },
  {
    japanese: '常識',
    kana: 'じょうしき',
    vietnamese: 'kiến thức thường thức',
    english: 'common sense',
    type: 'main',
    group: '名詞・抽象',
    example: 'それは常識です。'
  },
  {
    japanese: '本質',
    kana: 'ほんしつ',
    vietnamese: 'bản chất',
    english: 'essence, true nature',
    type: 'main',
    group: '名詞・抽象',
    example: '問題の本質を見極めましょう。'
  },
  {
    japanese: '特徴',
    kana: 'とくちょう',
    vietnamese: 'đặc điểm',
    english: 'characteristic, feature',
    type: 'main',
    group: '名詞・抽象',
    example: '日本文化の特徴を説明します。'
  },
  {
    japanese: '印象',
    kana: 'いんしょう',
    vietnamese: 'ấn tượng',
    english: 'impression',
    type: 'main',
    group: '名詞・抽象',
    example: '第一印象は大切です。'
  },
  {
    japanese: '効果',
    kana: 'こうか',
    vietnamese: 'hiệu quả',
    english: 'effect',
    type: 'main',
    group: '名詞・抽象',
    example: 'この薬は効果があります。'
  },
  {
    japanese: '役割',
    kana: 'やくわり',
    vietnamese: 'vai trò',
    english: 'role',
    type: 'main',
    group: '名詞・抽象',
    example: '重要な役割を果たしています。'
  },
  {
    japanese: '立場',
    kana: 'たちば',
    vietnamese: 'lập trường, vị trí',
    english: 'position, standpoint',
    type: 'main',
    group: '名詞・抽象',
    example: '相手の立場に立って考えましょう。'
  },
  {
    japanese: '視点',
    kana: 'してん',
    vietnamese: 'quan điểm, góc nhìn',
    english: 'viewpoint, perspective',
    type: 'main',
    group: '名詞・抽象',
    example: '違う視点から考えてみましょう。'
  },
  {
    japanese: '観点',
    kana: 'かんてん',
    vietnamese: 'quan điểm',
    english: 'point of view',
    type: 'main',
    group: '名詞・抽象',
    example: '教育の観点から考えます。'
  },
  {
    japanese: '実態',
    kana: 'じったい',
    vietnamese: 'thực trạng',
    english: 'actual condition, reality',
    type: 'main',
    group: '名詞・抽象',
    example: '実態を把握する必要があります。'
  },
  {
    japanese: '展望',
    kana: 'てんぼう',
    vietnamese: 'triển vọng',
    english: 'prospect, outlook',
    type: 'main',
    group: '名詞・抽象',
    example: '将来の展望を語りました。'
  },
  {
    japanese: '課題',
    kana: 'かだい',
    vietnamese: 'vấn đề, bài tập',
    english: 'task, issue',
    type: 'main',
    group: '名詞・抽象',
    example: '多くの課題が残っています。'
  },

  // ===== カタカナ語 (Katakana words) =====
  {
    japanese: 'メディア',
    kana: 'メディア',
    vietnamese: 'truyền thông',
    english: 'media',
    type: 'main',
    group: 'カタカナ語',
    example: 'メディアの影響は大きいです。'
  },
  {
    japanese: 'テーマ',
    kana: 'テーマ',
    vietnamese: 'chủ đề',
    english: 'theme, topic',
    type: 'main',
    group: 'カタカナ語',
    example: '今回のテーマは環境問題です。'
  },
  {
    japanese: 'データ',
    kana: 'データ',
    vietnamese: 'dữ liệu',
    english: 'data',
    type: 'main',
    group: 'カタカナ語',
    example: 'データを分析しました。'
  },
  {
    japanese: 'エネルギー',
    kana: 'エネルギー',
    vietnamese: 'năng lượng',
    english: 'energy',
    type: 'main',
    group: 'カタカナ語',
    example: 'エネルギーを節約しましょう。'
  },
  {
    japanese: 'リサイクル',
    kana: 'リサイクル',
    vietnamese: 'tái chế',
    english: 'recycling',
    type: 'main',
    group: 'カタカナ語',
    example: 'リサイクルに協力してください。'
  },
  {
    japanese: 'ボランティア',
    kana: 'ボランティア',
    vietnamese: 'tình nguyện',
    english: 'volunteer',
    type: 'main',
    group: 'カタカナ語',
    example: 'ボランティア活動に参加しました。'
  },
  {
    japanese: 'コミュニケーション',
    kana: 'コミュニケーション',
    vietnamese: 'giao tiếp',
    english: 'communication',
    type: 'main',
    group: 'カタカナ語',
    example: 'コミュニケーション能力が大切です。'
  },
  {
    japanese: 'グローバル',
    kana: 'グローバル',
    vietnamese: 'toàn cầu',
    english: 'global',
    type: 'main',
    group: 'カタカナ語',
    example: 'グローバル化が進んでいます。'
  },
  {
    japanese: 'テクノロジー',
    kana: 'テクノロジー',
    vietnamese: 'công nghệ',
    english: 'technology',
    type: 'main',
    group: 'カタカナ語',
    example: 'テクノロジーの進歩は速いです。'
  },
  {
    japanese: 'インフラ',
    kana: 'インフラ',
    vietnamese: 'cơ sở hạ tầng',
    english: 'infrastructure',
    type: 'main',
    group: 'カタカナ語',
    example: 'インフラの整備が必要です。'
  },
  {
    japanese: 'ストレス',
    kana: 'ストレス',
    vietnamese: 'căng thẳng',
    english: 'stress',
    type: 'main',
    group: 'カタカナ語',
    example: 'ストレスが溜まっています。'
  },
  {
    japanese: 'バランス',
    kana: 'バランス',
    vietnamese: 'sự cân bằng',
    english: 'balance',
    type: 'main',
    group: 'カタカナ語',
    example: '仕事と生活のバランスが大切です。'
  },
  {
    japanese: 'リスク',
    kana: 'リスク',
    vietnamese: 'rủi ro',
    english: 'risk',
    type: 'main',
    group: 'カタカナ語',
    example: 'リスクを避けることはできません。'
  },
  {
    japanese: 'コスト',
    kana: 'コスト',
    vietnamese: 'chi phí',
    english: 'cost',
    type: 'main',
    group: 'カタカナ語',
    example: 'コストを削減する必要があります。'
  },
  {
    japanese: 'マナー',
    kana: 'マナー',
    vietnamese: 'phép lịch sự, cách cư xử',
    english: 'manners, etiquette',
    type: 'main',
    group: 'カタカナ語',
    example: 'マナーを守ってください。'
  },
  {
    japanese: 'モラル',
    kana: 'モラル',
    vietnamese: 'đạo đức',
    english: 'morals',
    type: 'main',
    group: 'カタカナ語',
    example: 'モラルが低下しています。'
  },
  {
    japanese: 'クレーム',
    kana: 'クレーム',
    vietnamese: 'khiếu nại',
    english: 'complaint, claim',
    type: 'main',
    group: 'カタカナ語',
    example: 'お客様からクレームがありました。'
  },
  {
    japanese: 'トラブル',
    kana: 'トラブル',
    vietnamese: 'rắc rối',
    english: 'trouble',
    type: 'main',
    group: 'カタカナ語',
    example: 'トラブルが発生しました。'
  },
  {
    japanese: 'アイデンティティ',
    kana: 'アイデンティティ',
    vietnamese: 'bản sắc',
    english: 'identity',
    type: 'main',
    group: 'カタカナ語',
    example: '文化的アイデンティティを大切にしています。'
  },
  {
    japanese: 'プロセス',
    kana: 'プロセス',
    vietnamese: 'quá trình, quy trình',
    english: 'process',
    type: 'main',
    group: 'カタカナ語',
    example: '製造プロセスを改善しました。'
  }
];

export function getN2VocabByGroup(): Record<string, VocabItemWithGroup[]> {
  const groups: Record<string, VocabItemWithGroup[]> = {};
  for (const item of N2_VOCAB_DATA) {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
  }
  return groups;
}

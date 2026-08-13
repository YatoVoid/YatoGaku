import type { VocabItem } from '$lib/types';

export interface VocabItemWithGroup extends VocabItem {
  group: string;
}

export const N1_VOCAB_DATA: VocabItemWithGroup[] = [
  // ============================================================
  // 動詞 (Verbs) — Advanced/Formal Verbs
  // ============================================================
  {
    japanese: '覆す',
    kana: 'くつがえす',
    vietnamese: 'lật đổ, đảo ngược',
    english: 'to overturn, to reverse',
    type: 'main',
    group: '動詞',
    example: '裁判所の判決を覆すのは難しい。'
  },
  {
    japanese: '促す',
    kana: 'うながす',
    vietnamese: 'thúc giục, khuyến khích',
    english: 'to urge, to prompt',
    type: 'main',
    group: '動詞',
    example: '政府は国民に節電を促した。'
  },
  {
    japanese: '培う',
    kana: 'つちかう',
    vietnamese: 'bồi dưỡng, vun đắp',
    english: 'to cultivate, to foster',
    type: 'main',
    group: '動詞',
    example: '長年の経験で培った技術を後輩に伝える。'
  },
  {
    japanese: '携わる',
    kana: 'たずさわる',
    vietnamese: 'tham gia, liên quan đến',
    english: 'to be involved in, to engage in',
    type: 'main',
    group: '動詞',
    example: '彼は長年教育に携わってきた。'
  },
  {
    japanese: '賄う',
    kana: 'まかなう',
    vietnamese: 'trang trải, chi trả',
    english: 'to cover (expenses), to finance',
    type: 'main',
    group: '動詞',
    example: '奨学金で生活費を賄っている。'
  },
  {
    japanese: '妨げる',
    kana: 'さまたげる',
    vietnamese: 'cản trở, ngăn cản',
    english: 'to hinder, to obstruct',
    type: 'main',
    group: '動詞',
    example: '騒音が集中力を妨げる。'
  },
  {
    japanese: '償う',
    kana: 'つぐなう',
    vietnamese: 'đền bù, bồi thường',
    english: 'to compensate, to atone for',
    type: 'main',
    group: '動詞',
    example: '過去の過ちを償うために努力している。'
  },
  {
    japanese: '潤う',
    kana: 'うるおう',
    vietnamese: 'ẩm ướt, thịnh vượng',
    english: 'to be moistened, to profit',
    type: 'main',
    group: '動詞',
    example: '雨のおかげで大地が潤った。'
  },
  {
    japanese: '揺るがす',
    kana: 'ゆるがす',
    vietnamese: 'lung lay, làm rung chuyển',
    english: 'to shake, to undermine',
    type: 'main',
    group: '動詞',
    example: 'そのスキャンダルは政権の基盤を揺るがした。'
  },
  {
    japanese: '漂う',
    kana: 'ただよう',
    vietnamese: 'trôi nổi, phảng phất',
    english: 'to drift, to float',
    type: 'main',
    group: '動詞',
    example: '部屋にコーヒーの香りが漂っている。'
  },
  {
    japanese: '怠る',
    kana: 'おこたる',
    vietnamese: 'lơ là, sao nhãng',
    english: 'to neglect, to be negligent',
    type: 'main',
    group: '動詞',
    example: '健康管理を怠ると病気になりやすい。'
  },
  {
    japanese: '悔やむ',
    kana: 'くやむ',
    vietnamese: 'hối tiếc, ân hận',
    english: 'to regret, to repent',
    type: 'main',
    group: '動詞',
    example: 'あの時の決断を今でも悔やんでいる。'
  },
  {
    japanese: '遮る',
    kana: 'さえぎる',
    vietnamese: 'che chắn, ngắt lời',
    english: 'to block, to interrupt',
    type: 'main',
    group: '動詞',
    example: '相手の話を遮るのは失礼だ。'
  },
  {
    japanese: '赴く',
    kana: 'おもむく',
    vietnamese: 'đi đến, tới',
    english: 'to go to, to proceed to',
    type: 'main',
    group: '動詞',
    example: '来月、海外の支社に赴くことになった。'
  },
  {
    japanese: '費やす',
    kana: 'ついやす',
    vietnamese: 'tiêu tốn, bỏ ra',
    english: 'to spend, to devote',
    type: 'main',
    group: '動詞',
    example: '研究に多くの時間を費やした。'
  },
  {
    japanese: '募る',
    kana: 'つのる',
    vietnamese: 'tuyển mộ, tăng dần',
    english: 'to recruit, to intensify',
    type: 'main',
    group: '動詞',
    example: 'ボランティアを募ることにした。'
  },
  {
    japanese: '挑む',
    kana: 'いどむ',
    vietnamese: 'thách thức, đương đầu',
    english: 'to challenge, to attempt',
    type: 'main',
    group: '動詞',
    example: '世界記録に挑む選手を応援する。'
  },
  {
    japanese: '覆う',
    kana: 'おおう',
    vietnamese: 'che phủ, bao phủ',
    english: 'to cover, to conceal',
    type: 'main',
    group: '動詞',
    example: '雪が山全体を覆っている。'
  },
  {
    japanese: '潜む',
    kana: 'ひそむ',
    vietnamese: 'ẩn nấp, tiềm ẩn',
    english: 'to lurk, to be hidden',
    type: 'main',
    group: '動詞',
    example: 'この計画には大きなリスクが潜んでいる。'
  },
  {
    japanese: '滞る',
    kana: 'とどこおる',
    vietnamese: 'đình trệ, chậm trễ',
    english: 'to stagnate, to be delayed',
    type: 'main',
    group: '動詞',
    example: '資金不足で工事が滞っている。'
  },
  {
    japanese: '廃れる',
    kana: 'すたれる',
    vietnamese: 'suy tàn, lỗi thời',
    english: 'to decline, to go out of use',
    type: 'main',
    group: '動詞',
    example: 'その伝統は次第に廃れてきた。'
  },
  {
    japanese: '施す',
    kana: 'ほどこす',
    vietnamese: 'ban phát, thực hiện',
    english: 'to give (charity), to apply',
    type: 'main',
    group: '動詞',
    example: '貧しい人々に食料を施す。'
  },
  {
    japanese: '傾く',
    kana: 'かたむく',
    vietnamese: 'nghiêng, suy sụp',
    english: 'to lean, to decline',
    type: 'main',
    group: '動詞',
    example: '会社の経営が傾き始めた。'
  },
  {
    japanese: '蓄える',
    kana: 'たくわえる',
    vietnamese: 'tích trữ, dự trữ',
    english: 'to store up, to save',
    type: 'main',
    group: '動詞',
    example: '冬に備えて食料を蓄える。'
  },
  {
    japanese: '見なす',
    kana: 'みなす',
    vietnamese: 'coi như, xem như',
    english: 'to regard as, to consider',
    type: 'main',
    group: '動詞',
    example: '期限までに提出しない場合、辞退と見なします。'
  },
  {
    japanese: '強いる',
    kana: 'しいる',
    vietnamese: 'ép buộc, cưỡng ép',
    english: 'to force, to compel',
    type: 'main',
    group: '動詞',
    example: '従業員に長時間労働を強いるのは違法だ。'
  },
  {
    japanese: '唱える',
    kana: 'となえる',
    vietnamese: 'chủ trương, đề xướng',
    english: 'to advocate, to chant',
    type: 'main',
    group: '動詞',
    example: '彼は教育改革を唱えている。'
  },
  {
    japanese: '掲げる',
    kana: 'かかげる',
    vietnamese: 'giương cao, đề ra',
    english: 'to raise, to put up (a flag/slogan)',
    type: 'main',
    group: '動詞',
    example: '新しい目標を掲げて活動を開始した。'
  },
  {
    japanese: '抱える',
    kana: 'かかえる',
    vietnamese: 'ôm, mang gánh nặng',
    english: 'to hold, to have (a problem)',
    type: 'main',
    group: '動詞',
    example: '多くの課題を抱えている。'
  },
  {
    japanese: '講じる',
    kana: 'こうじる',
    vietnamese: 'thi hành, áp dụng biện pháp',
    english: 'to take (measures), to lecture',
    type: 'main',
    group: '動詞',
    example: '政府は対策を講じる必要がある。'
  },
  {
    japanese: '踏まえる',
    kana: 'ふまえる',
    vietnamese: 'dựa trên, căn cứ vào',
    english: 'to be based on, to take into account',
    type: 'main',
    group: '動詞',
    example: '過去の経験を踏まえて計画を立てた。'
  },
  {
    japanese: '委ねる',
    kana: 'ゆだねる',
    vietnamese: 'giao phó, ủy thác',
    english: 'to entrust, to leave to',
    type: 'main',
    group: '動詞',
    example: '判断を専門家に委ねる。'
  },
  {
    japanese: '拒む',
    kana: 'こばむ',
    vietnamese: 'từ chối, cự tuyệt',
    english: 'to refuse, to reject',
    type: 'main',
    group: '動詞',
    example: '彼は協力を拒んだ。'
  },
  {
    japanese: '誓う',
    kana: 'ちかう',
    vietnamese: 'thề, cam kết',
    english: 'to swear, to vow',
    type: 'main',
    group: '動詞',
    example: '二度と同じ過ちを犯さないと誓った。'
  },
  {
    japanese: '問う',
    kana: 'とう',
    vietnamese: 'hỏi, truy cứu',
    english: 'to question, to inquire',
    type: 'main',
    group: '動詞',
    example: '責任を問う声が高まっている。'
  },
  {
    japanese: '及ぼす',
    kana: 'およぼす',
    vietnamese: 'gây ra, ảnh hưởng đến',
    english: 'to exert, to have an effect on',
    type: 'main',
    group: '動詞',
    example: '環境汚染は健康に悪影響を及ぼす。'
  },
  {
    japanese: '兼ねる',
    kana: 'かねる',
    vietnamese: 'kiêm nhiệm, không thể',
    english: 'to serve as both, to be unable to',
    type: 'main',
    group: '動詞',
    example: '彼は社長と会長を兼ねている。'
  },
  {
    japanese: '遂げる',
    kana: 'とげる',
    vietnamese: 'hoàn thành, đạt được',
    english: 'to accomplish, to achieve',
    type: 'main',
    group: '動詞',
    example: '目的を遂げるまで諦めない。'
  },
  {
    japanese: '経る',
    kana: 'へる',
    vietnamese: 'trải qua, kinh qua',
    english: 'to pass through, to go through',
    type: 'main',
    group: '動詞',
    example: '長い年月を経て完成した。'
  },
  {
    japanese: '秀でる',
    kana: 'ひいでる',
    vietnamese: 'xuất sắc, nổi trội',
    english: 'to excel, to surpass',
    type: 'main',
    group: '動詞',
    example: '彼女は数学に秀でている。'
  },
  {
    japanese: '省みる',
    kana: 'かえりみる',
    vietnamese: 'nhìn lại, tự xét',
    english: 'to reflect on, to look back on',
    type: 'main',
    group: '動詞',
    example: '自分の行動を省みるべきだ。'
  },
  {
    japanese: '仰ぐ',
    kana: 'あおぐ',
    vietnamese: 'ngước nhìn, nhờ vả',
    english: 'to look up, to seek (advice)',
    type: 'main',
    group: '動詞',
    example: '師匠の教えを仰ぐ。'
  },
  {
    japanese: '甘んじる',
    kana: 'あまんじる',
    vietnamese: 'cam chịu, bằng lòng',
    english: 'to resign oneself to, to accept',
    type: 'main',
    group: '動詞',
    example: '現状に甘んじてはいけない。'
  },
  {
    japanese: '陥る',
    kana: 'おちいる',
    vietnamese: 'rơi vào, sa vào',
    english: 'to fall into, to be caught in',
    type: 'main',
    group: '動詞',
    example: 'パニックに陥る人が多かった。'
  },
  {
    japanese: '司る',
    kana: 'つかさどる',
    vietnamese: 'cai quản, phụ trách',
    english: 'to manage, to preside over',
    type: 'main',
    group: '動詞',
    example: '彼は財務を司る役割を担っている。'
  },
  {
    japanese: '窺う',
    kana: 'うかがう',
    vietnamese: 'dò xét, rình',
    english: 'to spy on, to watch for an opportunity',
    type: 'main',
    group: '動詞',
    example: '相手の様子を窺いながら話を進めた。'
  },
  {
    japanese: '嘆く',
    kana: 'なげく',
    vietnamese: 'than thở, thương tiếc',
    english: 'to lament, to grieve',
    type: 'main',
    group: '動詞',
    example: '世の中の不公平さを嘆く。'
  },
  {
    japanese: '抑制する',
    kana: 'よくせいする',
    vietnamese: 'kiềm chế, ức chế',
    english: 'to suppress, to restrain',
    type: 'main',
    group: '動詞',
    example: 'インフレを抑制する政策が必要だ。'
  },
  {
    japanese: '把握する',
    kana: 'はあくする',
    vietnamese: 'nắm bắt, hiểu rõ',
    english: 'to grasp, to understand',
    type: 'main',
    group: '動詞',
    example: '現状を正確に把握する必要がある。'
  },
  {
    japanese: '遂行する',
    kana: 'すいこうする',
    vietnamese: 'thi hành, thực hiện',
    english: 'to carry out, to execute',
    type: 'main',
    group: '動詞',
    example: '任務を遂行するために全力を尽くす。'
  },
  {
    japanese: '是正する',
    kana: 'ぜせいする',
    vietnamese: 'chỉnh sửa, sửa đổi',
    english: 'to correct, to rectify',
    type: 'main',
    group: '動詞',
    example: '格差を是正するための法律が制定された。'
  },
  {
    japanese: '網羅する',
    kana: 'もうらする',
    vietnamese: 'bao quát, bao hàm',
    english: 'to cover comprehensively',
    type: 'main',
    group: '動詞',
    example: 'この辞書はすべての専門用語を網羅している。'
  },
  {
    japanese: '凌駕する',
    kana: 'りょうがする',
    vietnamese: 'vượt trội, lấn át',
    english: 'to surpass, to outdo',
    type: 'main',
    group: '動詞',
    example: '新製品は従来品を凌駕する性能を持つ。'
  },
  {
    japanese: '逸脱する',
    kana: 'いつだつする',
    vietnamese: 'lệch khỏi, đi chệch',
    english: 'to deviate, to depart from',
    type: 'main',
    group: '動詞',
    example: '規則から逸脱した行為は許されない。'
  },
  {
    japanese: '拘束する',
    kana: 'こうそくする',
    vietnamese: 'giam giữ, ràng buộc',
    english: 'to detain, to restrain',
    type: 'main',
    group: '動詞',
    example: '容疑者は警察に拘束された。'
  },
  {
    japanese: '駆使する',
    kana: 'くしする',
    vietnamese: 'vận dụng, sử dụng thành thạo',
    english: 'to make full use of',
    type: 'main',
    group: '動詞',
    example: '最新技術を駆使して問題を解決した。'
  },
  {
    japanese: '淘汰する',
    kana: 'とうたする',
    vietnamese: 'đào thải, loại bỏ',
    english: 'to eliminate, to weed out',
    type: 'main',
    group: '動詞',
    example: '競争力のない企業は市場から淘汰される。'
  },
  {
    japanese: '喚起する',
    kana: 'かんきする',
    vietnamese: 'khơi gợi, kêu gọi',
    english: 'to arouse, to call attention to',
    type: 'main',
    group: '動詞',
    example: '国民の注意を喚起する必要がある。'
  },
  {
    japanese: '逡巡する',
    kana: 'しゅんじゅんする',
    vietnamese: 'do dự, lưỡng lự',
    english: 'to hesitate, to waver',
    type: 'main',
    group: '動詞',
    example: '決断を前に逡巡している場合ではない。'
  },
  {
    japanese: '邁進する',
    kana: 'まいしんする',
    vietnamese: 'tiến bước, dũng tiến',
    english: 'to push forward, to strive',
    type: 'main',
    group: '動詞',
    example: '目標に向かって邁進する。'
  },
  {
    japanese: '頓挫する',
    kana: 'とんざする',
    vietnamese: 'bị đình trệ, bị thất bại',
    english: 'to be frustrated, to fall through',
    type: 'main',
    group: '動詞',
    example: '資金不足で計画が頓挫した。'
  },

  // ============================================================
  // 形容詞・形容動詞 (Adjectives)
  // ============================================================
  {
    japanese: '著しい',
    kana: 'いちじるしい',
    vietnamese: 'đáng kể, rõ rệt',
    english: 'remarkable, significant',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '技術の進歩は著しい。'
  },
  {
    japanese: '甚だしい',
    kana: 'はなはだしい',
    vietnamese: 'quá đáng, nghiêm trọng',
    english: 'extreme, excessive',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '事実との相違が甚だしい。'
  },
  {
    japanese: '紛らわしい',
    kana: 'まぎらわしい',
    vietnamese: 'dễ nhầm lẫn, mập mờ',
    english: 'confusing, misleading',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '紛らわしい表現は避けてください。'
  },
  {
    japanese: '煩わしい',
    kana: 'わずらわしい',
    vietnamese: 'phiền phức, rắc rối',
    english: 'troublesome, bothersome',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '手続きが煩わしいと感じる。'
  },
  {
    japanese: '目覚ましい',
    kana: 'めざましい',
    vietnamese: 'nổi bật, vượt bậc',
    english: 'remarkable, spectacular',
    type: 'main',
    group: '形容詞・形容動詞',
    example: 'その国は目覚ましい経済成長を遂げた。'
  },
  {
    japanese: '空しい',
    kana: 'むなしい',
    vietnamese: 'trống rỗng, hư vô',
    english: 'empty, futile',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '努力が報われず空しい気持ちになった。'
  },
  {
    japanese: '疎い',
    kana: 'うとい',
    vietnamese: 'thiếu hiểu biết, không quen',
    english: 'unfamiliar with, ignorant of',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '最新の技術には疎い。'
  },
  {
    japanese: '潔い',
    kana: 'いさぎよい',
    vietnamese: 'trong sạch, dứt khoát',
    english: 'graceful (in defeat), manly',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '負けを認める潔い態度だった。'
  },
  {
    japanese: '脆い',
    kana: 'もろい',
    vietnamese: 'mong manh, dễ vỡ',
    english: 'fragile, brittle',
    type: 'main',
    group: '形容詞・形容動詞',
    example: 'この建物は地震に対して脆い構造だ。'
  },
  {
    japanese: '快い',
    kana: 'こころよい',
    vietnamese: 'dễ chịu, vui vẻ',
    english: 'pleasant, agreeable',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '快い返事をいただいた。'
  },
  {
    japanese: '慌ただしい',
    kana: 'あわただしい',
    vietnamese: 'vội vã, bận rộn',
    english: 'busy, hectic',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '年末は何かと慌ただしい。'
  },
  {
    japanese: '厚かましい',
    kana: 'あつかましい',
    vietnamese: 'trơ trẽn, dày mặt',
    english: 'impudent, shameless',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '厚かましいお願いで恐縮ですが。'
  },
  {
    japanese: '物々しい',
    kana: 'ものものしい',
    vietnamese: 'nghiêm ngặt, uy nghiêm',
    english: 'imposing, heavily guarded',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '物々しい警備が敷かれていた。'
  },
  {
    japanese: '膨大な',
    kana: 'ぼうだいな',
    vietnamese: 'đồ sộ, khổng lồ',
    english: 'enormous, vast',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '膨大なデータを分析する必要がある。'
  },
  {
    japanese: '顕著な',
    kana: 'けんちょな',
    vietnamese: 'nổi bật, rõ ràng',
    english: 'remarkable, conspicuous',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '顕著な成果を上げた。'
  },
  {
    japanese: '稀有な',
    kana: 'けうな',
    vietnamese: 'hiếm có, quý hiếm',
    english: 'rare, exceptional',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '稀有な才能の持ち主だ。'
  },
  {
    japanese: '壮大な',
    kana: 'そうだいな',
    vietnamese: 'hùng vĩ, hoành tráng',
    english: 'grand, magnificent',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '壮大な計画が発表された。'
  },
  {
    japanese: '曖昧な',
    kana: 'あいまいな',
    vietnamese: 'mơ hồ, mập mờ',
    english: 'vague, ambiguous',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '曖昧な返事はやめてほしい。'
  },
  {
    japanese: '多大な',
    kana: 'ただいな',
    vietnamese: 'to lớn, nhiều',
    english: 'great, enormous',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '多大な迷惑をおかけしました。'
  },
  {
    japanese: '円滑な',
    kana: 'えんかつな',
    vietnamese: 'suôn sẻ, trôi chảy',
    english: 'smooth, harmonious',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '円滑なコミュニケーションが大切だ。'
  },
  {
    japanese: '過酷な',
    kana: 'かこくな',
    vietnamese: 'khắc nghiệt, tàn khốc',
    english: 'harsh, severe',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '過酷な労働環境を改善すべきだ。'
  },
  {
    japanese: '崇高な',
    kana: 'すうこうな',
    vietnamese: 'cao thượng, cao cả',
    english: 'sublime, noble',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '崇高な理念に基づいて行動する。'
  },
  {
    japanese: '巧妙な',
    kana: 'こうみょうな',
    vietnamese: 'khéo léo, tinh vi',
    english: 'ingenious, clever',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '巧妙な手口で詐欺を行った。'
  },
  {
    japanese: '悲惨な',
    kana: 'ひさんな',
    vietnamese: 'bi thảm, thảm khốc',
    english: 'tragic, miserable',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '戦争の悲惨な現実を忘れてはならない。'
  },
  {
    japanese: '厳密な',
    kana: 'げんみつな',
    vietnamese: 'nghiêm ngặt, chặt chẽ',
    english: 'strict, rigorous',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '厳密な審査が行われた。'
  },
  {
    japanese: '旺盛な',
    kana: 'おうせいな',
    vietnamese: 'mạnh mẽ, sung mãn',
    english: 'vigorous, energetic',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '彼は好奇心が旺盛だ。'
  },
  {
    japanese: '辛辣な',
    kana: 'しんらつな',
    vietnamese: 'cay nghiệt, sắc bén',
    english: 'scathing, harsh',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '辛辣な批評を受けた。'
  },
  {
    japanese: '希薄な',
    kana: 'きはくな',
    vietnamese: 'mỏng manh, loãng',
    english: 'thin, diluted, weak',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '人間関係が希薄になっている。'
  },
  {
    japanese: '安泰な',
    kana: 'あんたいな',
    vietnamese: 'an toàn, yên ổn',
    english: 'safe, secure, peaceful',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '老後も安泰な生活を送りたい。'
  },
  {
    japanese: '獰猛な',
    kana: 'どうもうな',
    vietnamese: 'hung dữ, dữ tợn',
    english: 'ferocious, fierce',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '獰猛な動物が檻から逃げ出した。'
  },
  {
    japanese: '簡潔な',
    kana: 'かんけつな',
    vietnamese: 'ngắn gọn, súc tích',
    english: 'concise, brief',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '簡潔な説明をお願いします。'
  },
  {
    japanese: '斬新な',
    kana: 'ざんしんな',
    vietnamese: 'mới mẻ, tân tiến',
    english: 'novel, innovative',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '斬新なアイデアが評価された。'
  },
  {
    japanese: '緻密な',
    kana: 'ちみつな',
    vietnamese: 'tỉ mỉ, chi tiết',
    english: 'minute, detailed, elaborate',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '緻密な計画を立てる必要がある。'
  },
  {
    japanese: '深刻な',
    kana: 'しんこくな',
    vietnamese: 'nghiêm trọng, trầm trọng',
    english: 'serious, grave',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '深刻な人手不足に悩んでいる。'
  },
  {
    japanese: '不可欠な',
    kana: 'ふかけつな',
    vietnamese: 'không thể thiếu',
    english: 'indispensable, essential',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '水は生命にとって不可欠だ。'
  },
  {
    japanese: '杜撰な',
    kana: 'ずさんな',
    vietnamese: 'cẩu thả, sơ sài',
    english: 'sloppy, careless',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '杜撰な管理が事故の原因だった。'
  },
  {
    japanese: '険しい',
    kana: 'けわしい',
    vietnamese: 'hiểm trở, nghiêm nghị',
    english: 'steep, stern',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '険しい表情で話を聞いていた。'
  },
  {
    japanese: '穏やかな',
    kana: 'おだやかな',
    vietnamese: 'ôn hòa, điềm tĩnh',
    english: 'calm, gentle, mild',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '穏やかな性格の持ち主だ。'
  },
  {
    japanese: '鮮明な',
    kana: 'せんめいな',
    vietnamese: 'rõ ràng, sắc nét',
    english: 'vivid, clear',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '当時の記憶が鮮明に残っている。'
  },
  {
    japanese: '明白な',
    kana: 'めいはくな',
    vietnamese: 'rõ ràng, hiển nhiên',
    english: 'obvious, evident',
    type: 'main',
    group: '形容詞・形容動詞',
    example: '証拠は明白だ。'
  },

  // ============================================================
  // 名詞・政治・経済 (Nouns - Politics/Economy)
  // ============================================================
  {
    japanese: '施策',
    kana: 'しさく',
    vietnamese: 'chính sách, biện pháp',
    english: 'policy, measure',
    type: 'main',
    group: '名詞・政治・経済',
    example: '新しい施策が発表された。'
  },
  {
    japanese: '歳出',
    kana: 'さいしゅつ',
    vietnamese: 'chi tiêu (ngân sách)',
    english: 'expenditure, spending',
    type: 'main',
    group: '名詞・政治・経済',
    example: '歳出を削減する方針だ。'
  },
  {
    japanese: '歳入',
    kana: 'さいにゅう',
    vietnamese: 'thu nhập (ngân sách)',
    english: 'revenue, income',
    type: 'main',
    group: '名詞・政治・経済',
    example: '歳入が歳出を下回っている。'
  },
  {
    japanese: '赤字',
    kana: 'あかじ',
    vietnamese: 'thâm hụt, lỗ',
    english: 'deficit, in the red',
    type: 'main',
    group: '名詞・政治・経済',
    example: '三年連続で赤字が続いている。'
  },
  {
    japanese: '黒字',
    kana: 'くろじ',
    vietnamese: 'thặng dư, lãi',
    english: 'surplus, in the black',
    type: 'main',
    group: '名詞・政治・経済',
    example: '今期はようやく黒字に転じた。'
  },
  {
    japanese: '景気',
    kana: 'けいき',
    vietnamese: 'tình hình kinh tế',
    english: 'economic conditions, business',
    type: 'main',
    group: '名詞・政治・経済',
    example: '景気が回復の兆しを見せている。'
  },
  {
    japanese: '不況',
    kana: 'ふきょう',
    vietnamese: 'suy thoái, khủng hoảng',
    english: 'recession, depression',
    type: 'main',
    group: '名詞・政治・経済',
    example: '長引く不況で失業率が上昇した。'
  },
  {
    japanese: '財政',
    kana: 'ざいせい',
    vietnamese: 'tài chính, tài khóa',
    english: 'public finance, fiscal',
    type: 'main',
    group: '名詞・政治・経済',
    example: '国の財政状況は厳しい。'
  },
  {
    japanese: '為替',
    kana: 'かわせ',
    vietnamese: 'ngoại hối, tỷ giá',
    english: 'exchange (currency)',
    type: 'main',
    group: '名詞・政治・経済',
    example: '為替レートが大きく変動している。'
  },
  {
    japanese: '株価',
    kana: 'かぶか',
    vietnamese: 'giá cổ phiếu',
    english: 'stock price',
    type: 'main',
    group: '名詞・政治・経済',
    example: '株価が急落した。'
  },
  {
    japanese: '融資',
    kana: 'ゆうし',
    vietnamese: 'tài trợ, cho vay',
    english: 'financing, loan',
    type: 'main',
    group: '名詞・政治・経済',
    example: '銀行から融資を受けた。'
  },
  {
    japanese: '債務',
    kana: 'さいむ',
    vietnamese: 'nợ, khoản nợ',
    english: 'debt, liability',
    type: 'main',
    group: '名詞・政治・経済',
    example: '債務の返済が困難になった。'
  },
  {
    japanese: '政権',
    kana: 'せいけん',
    vietnamese: 'chính quyền',
    english: 'political power, administration',
    type: 'main',
    group: '名詞・政治・経済',
    example: '新しい政権が発足した。'
  },
  {
    japanese: '与党',
    kana: 'よとう',
    vietnamese: 'đảng cầm quyền',
    english: 'ruling party',
    type: 'main',
    group: '名詞・政治・経済',
    example: '与党が過半数を獲得した。'
  },
  {
    japanese: '野党',
    kana: 'やとう',
    vietnamese: 'đảng đối lập',
    english: 'opposition party',
    type: 'main',
    group: '名詞・政治・経済',
    example: '野党は法案に反対した。'
  },
  {
    japanese: '公約',
    kana: 'こうやく',
    vietnamese: 'cam kết, lời hứa (chính trị)',
    english: 'election pledge, promise',
    type: 'main',
    group: '名詞・政治・経済',
    example: '選挙の公約を果たすべきだ。'
  },
  {
    japanese: '法案',
    kana: 'ほうあん',
    vietnamese: 'dự luật',
    english: 'bill, legislation',
    type: 'main',
    group: '名詞・政治・経済',
    example: '新しい法案が国会に提出された。'
  },
  {
    japanese: '条約',
    kana: 'じょうやく',
    vietnamese: 'hiệp ước, điều ước',
    english: 'treaty, pact',
    type: 'main',
    group: '名詞・政治・経済',
    example: '両国間で条約が締結された。'
  },
  {
    japanese: '外交',
    kana: 'がいこう',
    vietnamese: 'ngoại giao',
    english: 'diplomacy',
    type: 'main',
    group: '名詞・政治・経済',
    example: '外交関係の改善を目指す。'
  },
  {
    japanese: '主権',
    kana: 'しゅけん',
    vietnamese: 'chủ quyền',
    english: 'sovereignty',
    type: 'main',
    group: '名詞・政治・経済',
    example: '国の主権を守ることが重要だ。'
  },
  {
    japanese: '官僚',
    kana: 'かんりょう',
    vietnamese: 'quan chức, quan liêu',
    english: 'bureaucrat',
    type: 'main',
    group: '名詞・政治・経済',
    example: '官僚制度の改革が求められている。'
  },
  {
    japanese: '汚職',
    kana: 'おしょく',
    vietnamese: 'tham nhũng',
    english: 'corruption',
    type: 'main',
    group: '名詞・政治・経済',
    example: '汚職事件が発覚した。'
  },
  {
    japanese: '規制',
    kana: 'きせい',
    vietnamese: 'quy chế, quy định',
    english: 'regulation, restriction',
    type: 'main',
    group: '名詞・政治・経済',
    example: '環境に関する規制が強化された。'
  },
  {
    japanese: '制裁',
    kana: 'せいさい',
    vietnamese: 'trừng phạt, chế tài',
    english: 'sanctions, punishment',
    type: 'main',
    group: '名詞・政治・経済',
    example: '経済制裁が発動された。'
  },
  {
    japanese: '格差',
    kana: 'かくさ',
    vietnamese: 'khoảng cách, chênh lệch',
    english: 'disparity, gap',
    type: 'main',
    group: '名詞・政治・経済',
    example: '所得格差が拡大している。'
  },
  {
    japanese: '需要',
    kana: 'じゅよう',
    vietnamese: 'nhu cầu',
    english: 'demand',
    type: 'main',
    group: '名詞・政治・経済',
    example: '国内の需要が減少している。'
  },
  {
    japanese: '供給',
    kana: 'きょうきゅう',
    vietnamese: 'cung cấp',
    english: 'supply',
    type: 'main',
    group: '名詞・政治・経済',
    example: '供給が需要に追いつかない。'
  },
  {
    japanese: '独占',
    kana: 'どくせん',
    vietnamese: 'độc quyền',
    english: 'monopoly',
    type: 'main',
    group: '名詞・政治・経済',
    example: '市場の独占は消費者に不利だ。'
  },
  {
    japanese: '利権',
    kana: 'りけん',
    vietnamese: 'quyền lợi, lợi ích',
    english: 'concession, vested interest',
    type: 'main',
    group: '名詞・政治・経済',
    example: '利権をめぐる争いが激化している。'
  },
  {
    japanese: '既得権',
    kana: 'きとくけん',
    vietnamese: 'quyền lợi đã có, đặc quyền',
    english: 'vested rights, acquired rights',
    type: 'main',
    group: '名詞・政治・経済',
    example: '既得権を守ろうとする勢力がある。'
  },
  {
    japanese: '国債',
    kana: 'こくさい',
    vietnamese: 'trái phiếu chính phủ',
    english: 'government bond',
    type: 'main',
    group: '名詞・政治・経済',
    example: '国債の発行額が増加している。'
  },
  {
    japanese: '予算',
    kana: 'よさん',
    vietnamese: 'ngân sách',
    english: 'budget',
    type: 'main',
    group: '名詞・政治・経済',
    example: '来年度の予算が承認された。'
  },
  {
    japanese: 'インフレ',
    kana: 'いんふれ',
    vietnamese: 'lạm phát',
    english: 'inflation',
    type: 'main',
    group: '名詞・政治・経済',
    example: 'インフレが加速している。'
  },
  {
    japanese: 'デフレ',
    kana: 'でふれ',
    vietnamese: 'giảm phát',
    english: 'deflation',
    type: 'main',
    group: '名詞・政治・経済',
    example: 'デフレから脱却するのが課題だ。'
  },
  {
    japanese: '民営化',
    kana: 'みんえいか',
    vietnamese: 'tư nhân hóa',
    english: 'privatization',
    type: 'main',
    group: '名詞・政治・経済',
    example: '郵政の民営化が実施された。'
  },
  {
    japanese: '規制緩和',
    kana: 'きせいかんわ',
    vietnamese: 'nới lỏng quy định',
    english: 'deregulation',
    type: 'main',
    group: '名詞・政治・経済',
    example: '規制緩和により新規参入が増えた。'
  },
  {
    japanese: '税制',
    kana: 'ぜいせい',
    vietnamese: 'chế độ thuế',
    english: 'tax system',
    type: 'main',
    group: '名詞・政治・経済',
    example: '税制の改革が議論されている。'
  },
  {
    japanese: '関税',
    kana: 'かんぜい',
    vietnamese: 'thuế quan',
    english: 'tariff, customs duty',
    type: 'main',
    group: '名詞・政治・経済',
    example: '関税の引き下げが交渉されている。'
  },
  {
    japanese: '貿易摩擦',
    kana: 'ぼうえきまさつ',
    vietnamese: 'xung đột thương mại',
    english: 'trade friction',
    type: 'main',
    group: '名詞・政治・経済',
    example: '両国間の貿易摩擦が深刻化している。'
  },
  {
    japanese: '経済圏',
    kana: 'けいざいけん',
    vietnamese: 'khu vực kinh tế',
    english: 'economic zone/bloc',
    type: 'main',
    group: '名詞・政治・経済',
    example: 'アジア経済圏の成長が著しい。'
  },

  // ============================================================
  // 名詞・文化・社会 (Nouns - Culture/Society)
  // ============================================================
  {
    japanese: '風潮',
    kana: 'ふうちょう',
    vietnamese: 'xu hướng, trào lưu',
    english: 'trend, tendency',
    type: 'main',
    group: '名詞・文化・社会',
    example: '最近の風潮として健康志向がある。'
  },
  {
    japanese: '慣習',
    kana: 'かんしゅう',
    vietnamese: 'tập quán, thói quen',
    english: 'custom, convention',
    type: 'main',
    group: '名詞・文化・社会',
    example: '古い慣習を見直す時期が来た。'
  },
  {
    japanese: '偏見',
    kana: 'へんけん',
    vietnamese: 'thành kiến, định kiến',
    english: 'prejudice, bias',
    type: 'main',
    group: '名詞・文化・社会',
    example: '偏見をなくすための教育が必要だ。'
  },
  {
    japanese: '差別',
    kana: 'さべつ',
    vietnamese: 'phân biệt đối xử',
    english: 'discrimination',
    type: 'main',
    group: '名詞・文化・社会',
    example: '人種差別は許されない。'
  },
  {
    japanese: '世論',
    kana: 'せろん',
    vietnamese: 'dư luận',
    english: 'public opinion',
    type: 'main',
    group: '名詞・文化・社会',
    example: '世論調査の結果が発表された。'
  },
  {
    japanese: '倫理',
    kana: 'りんり',
    vietnamese: 'đạo đức, luân lý',
    english: 'ethics, morality',
    type: 'main',
    group: '名詞・文化・社会',
    example: '医療倫理について議論が行われた。'
  },
  {
    japanese: '遺産',
    kana: 'いさん',
    vietnamese: 'di sản',
    english: 'heritage, inheritance',
    type: 'main',
    group: '名詞・文化・社会',
    example: '世界遺産に登録された。'
  },
  {
    japanese: '伝承',
    kana: 'でんしょう',
    vietnamese: 'truyền thuyết, truyền thừa',
    english: 'tradition, legend',
    type: 'main',
    group: '名詞・文化・社会',
    example: '地域の伝承を記録に残す。'
  },
  {
    japanese: '素養',
    kana: 'そよう',
    vietnamese: 'tố chất, kiến thức cơ bản',
    english: 'grounding, basic knowledge',
    type: 'main',
    group: '名詞・文化・社会',
    example: '音楽の素養がある人だ。'
  },
  {
    japanese: '見識',
    kana: 'けんしき',
    vietnamese: 'kiến thức, nhận thức',
    english: 'insight, discernment',
    type: 'main',
    group: '名詞・文化・社会',
    example: '幅広い見識を持つ人物だ。'
  },
  {
    japanese: '美徳',
    kana: 'びとく',
    vietnamese: 'mỹ đức, đức hạnh',
    english: 'virtue',
    type: 'main',
    group: '名詞・文化・社会',
    example: '謙虚さは日本人の美徳とされる。'
  },
  {
    japanese: '矛盾',
    kana: 'むじゅん',
    vietnamese: 'mâu thuẫn',
    english: 'contradiction',
    type: 'main',
    group: '名詞・文化・社会',
    example: '彼の発言には矛盾がある。'
  },
  {
    japanese: '葛藤',
    kana: 'かっとう',
    vietnamese: 'xung đột (nội tâm)',
    english: 'conflict, struggle',
    type: 'main',
    group: '名詞・文化・社会',
    example: '理想と現実の間で葛藤している。'
  },
  {
    japanese: '疎外',
    kana: 'そがい',
    vietnamese: 'bị cô lập, bị tách ra',
    english: 'alienation, estrangement',
    type: 'main',
    group: '名詞・文化・社会',
    example: '社会からの疎外感を感じる。'
  },
  {
    japanese: '尊厳',
    kana: 'そんげん',
    vietnamese: 'tôn nghiêm, phẩm giá',
    english: 'dignity',
    type: 'main',
    group: '名詞・文化・社会',
    example: '人間の尊厳を守ることが大切だ。'
  },
  {
    japanese: '風土',
    kana: 'ふうど',
    vietnamese: 'phong thổ, môi trường',
    english: 'climate and culture, local character',
    type: 'main',
    group: '名詞・文化・社会',
    example: 'その土地の風土に合った農業が営まれている。'
  },
  {
    japanese: '連帯',
    kana: 'れんたい',
    vietnamese: 'liên đới, đoàn kết',
    english: 'solidarity, unity',
    type: 'main',
    group: '名詞・文化・社会',
    example: '国際的な連帯が求められている。'
  },
  {
    japanese: '啓蒙',
    kana: 'けいもう',
    vietnamese: 'khai sáng, giáo dục',
    english: 'enlightenment, education',
    type: 'main',
    group: '名詞・文化・社会',
    example: '市民への啓蒙活動を行っている。'
  },
  {
    japanese: '摩擦',
    kana: 'まさつ',
    vietnamese: 'ma sát, xích mích',
    english: 'friction, conflict',
    type: 'main',
    group: '名詞・文化・社会',
    example: '文化の違いによる摩擦が生じた。'
  },
  {
    japanese: '風刺',
    kana: 'ふうし',
    vietnamese: 'châm biếm, phúng thích',
    english: 'satire, sarcasm',
    type: 'main',
    group: '名詞・文化・社会',
    example: '政治を風刺した漫画が話題になった。'
  },
  {
    japanese: '根幹',
    kana: 'こんかん',
    vietnamese: 'cốt lõi, nền tảng',
    english: 'foundation, basis',
    type: 'main',
    group: '名詞・文化・社会',
    example: '教育は社会の根幹を成す。'
  },
  {
    japanese: '自律',
    kana: 'じりつ',
    vietnamese: 'tự chủ, tự quản',
    english: 'autonomy, self-regulation',
    type: 'main',
    group: '名詞・文化・社会',
    example: '自律した生活を送ることが目標だ。'
  },
  {
    japanese: '概念',
    kana: 'がいねん',
    vietnamese: 'khái niệm',
    english: 'concept, notion',
    type: 'main',
    group: '名詞・文化・社会',
    example: '自由という概念は時代とともに変化する。'
  },
  {
    japanese: '気概',
    kana: 'きがい',
    vietnamese: 'khí phách, ý chí',
    english: 'spirit, backbone',
    type: 'main',
    group: '名詞・文化・社会',
    example: '困難に立ち向かう気概がある。'
  },
  {
    japanese: '趣旨',
    kana: 'しゅし',
    vietnamese: 'chủ đích, mục đích',
    english: 'purpose, gist',
    type: 'main',
    group: '名詞・文化・社会',
    example: 'この法律の趣旨を説明してください。'
  },
  {
    japanese: '世俗',
    kana: 'せぞく',
    vietnamese: 'thế tục, trần tục',
    english: 'worldly, secular',
    type: 'main',
    group: '名詞・文化・社会',
    example: '世俗的な価値観にとらわれない。'
  },
  {
    japanese: '威厳',
    kana: 'いげん',
    vietnamese: 'uy nghiêm, oai vệ',
    english: 'dignity, majesty',
    type: 'main',
    group: '名詞・文化・社会',
    example: '威厳のある態度で臨んだ。'
  },
  {
    japanese: '奥義',
    kana: 'おうぎ',
    vietnamese: 'bí quyết, tinh hoa',
    english: 'secrets, mysteries (of an art)',
    type: 'main',
    group: '名詞・文化・社会',
    example: '武道の奥義を極めるには長年の修行が必要だ。'
  },
  {
    japanese: '郷愁',
    kana: 'きょうしゅう',
    vietnamese: 'nỗi nhớ quê hương',
    english: 'nostalgia, homesickness',
    type: 'main',
    group: '名詞・文化・社会',
    example: '故郷への郷愁に駆られる。'
  },
  {
    japanese: '哀悼',
    kana: 'あいとう',
    vietnamese: 'thương tiếc, tưởng niệm',
    english: 'mourning, condolence',
    type: 'main',
    group: '名詞・文化・社会',
    example: '犠牲者に対し哀悼の意を表する。'
  },

  // ============================================================
  // 副詞・接続詞 (Adverbs/Conjunctions)
  // ============================================================
  {
    japanese: 'あくまで',
    kana: 'あくまで',
    vietnamese: 'đến cùng, chỉ là',
    english: 'to the end, merely',
    type: 'main',
    group: '副詞・接続詞',
    example: 'これはあくまで参考意見です。'
  },
  {
    japanese: 'おおむね',
    kana: 'おおむね',
    vietnamese: 'đại thể, nhìn chung',
    english: 'generally, on the whole',
    type: 'main',
    group: '副詞・接続詞',
    example: 'おおむね順調に進んでいる。'
  },
  {
    japanese: 'かろうじて',
    kana: 'かろうじて',
    vietnamese: 'suýt soát, vừa vặn',
    english: 'barely, narrowly',
    type: 'main',
    group: '副詞・接続詞',
    example: 'かろうじて試験に合格した。'
  },
  {
    japanese: 'ことごとく',
    kana: 'ことごとく',
    vietnamese: 'tất cả, toàn bộ',
    english: 'altogether, entirely',
    type: 'main',
    group: '副詞・接続詞',
    example: '提案はことごとく却下された。'
  },
  {
    japanese: 'たちまち',
    kana: 'たちまち',
    vietnamese: 'tức khắc, ngay lập tức',
    english: 'immediately, in no time',
    type: 'main',
    group: '副詞・接続詞',
    example: 'そのニュースはたちまち広まった。'
  },
  {
    japanese: 'もっぱら',
    kana: 'もっぱら',
    vietnamese: 'chủ yếu, chuyên',
    english: 'exclusively, solely',
    type: 'main',
    group: '副詞・接続詞',
    example: '最近はもっぱら読書をしている。'
  },
  {
    japanese: 'やむを得ず',
    kana: 'やむをえず',
    vietnamese: 'bất đắc dĩ',
    english: 'unavoidably, reluctantly',
    type: 'main',
    group: '副詞・接続詞',
    example: 'やむを得ず計画を中止した。'
  },
  {
    japanese: 'ひたすら',
    kana: 'ひたすら',
    vietnamese: 'một mực, miệt mài',
    english: 'earnestly, single-mindedly',
    type: 'main',
    group: '副詞・接続詞',
    example: 'ひたすら努力を続けた。'
  },
  {
    japanese: 'いずれ',
    kana: 'いずれ',
    vietnamese: 'không lâu nữa, sớm muộn',
    english: 'eventually, sooner or later',
    type: 'main',
    group: '副詞・接続詞',
    example: 'いずれ結果が出るだろう。'
  },
  {
    japanese: 'おのずと',
    kana: 'おのずと',
    vietnamese: 'tự nhiên, đương nhiên',
    english: 'naturally, of itself',
    type: 'main',
    group: '副詞・接続詞',
    example: '努力すればおのずと結果はついてくる。'
  },
  {
    japanese: 'しいて',
    kana: 'しいて',
    vietnamese: 'cố ý, gượng ép',
    english: 'forcibly, if pressed',
    type: 'main',
    group: '副詞・接続詞',
    example: 'しいて言えば、もう少し工夫が必要だ。'
  },
  {
    japanese: 'とりわけ',
    kana: 'とりわけ',
    vietnamese: 'đặc biệt là',
    english: 'especially, above all',
    type: 'main',
    group: '副詞・接続詞',
    example: 'とりわけ重要なのは教育だ。'
  },
  {
    japanese: 'なおさら',
    kana: 'なおさら',
    vietnamese: 'lại càng, huống chi',
    english: 'all the more, even more so',
    type: 'main',
    group: '副詞・接続詞',
    example: '経験がなければなおさら勉強が必要だ。'
  },
  {
    japanese: 'ひいては',
    kana: 'ひいては',
    vietnamese: 'hơn nữa, từ đó dẫn đến',
    english: 'furthermore, and eventually',
    type: 'main',
    group: '副詞・接続詞',
    example: '個人の努力がひいては社会の発展につながる。'
  },
  {
    japanese: 'もはや',
    kana: 'もはや',
    vietnamese: 'không còn nữa',
    english: 'no longer, already',
    type: 'main',
    group: '副詞・接続詞',
    example: 'もはや後戻りはできない。'
  },
  {
    japanese: 'むしろ',
    kana: 'むしろ',
    vietnamese: 'thà, đúng hơn là',
    english: 'rather, instead',
    type: 'main',
    group: '副詞・接続詞',
    example: '失敗をむしろチャンスと捉えるべきだ。'
  },
  {
    japanese: 'すなわち',
    kana: 'すなわち',
    vietnamese: 'tức là, nói cách khác',
    english: 'namely, in other words',
    type: 'main',
    group: '副詞・接続詞',
    example: '民主主義、すなわち国民による政治。'
  },
  {
    japanese: 'ただし',
    kana: 'ただし',
    vietnamese: 'tuy nhiên, nhưng mà',
    english: 'however, provided that',
    type: 'main',
    group: '副詞・接続詞',
    example: '参加は自由です。ただし事前申込が必要です。'
  },
  {
    japanese: 'しかしながら',
    kana: 'しかしながら',
    vietnamese: 'tuy nhiên (trang trọng)',
    english: 'however, nevertheless',
    type: 'main',
    group: '副詞・接続詞',
    example: '努力した。しかしながら結果は伴わなかった。'
  },
  {
    japanese: 'そもそも',
    kana: 'そもそも',
    vietnamese: 'ngay từ đầu, vốn dĩ',
    english: 'in the first place, to begin with',
    type: 'main',
    group: '副詞・接続詞',
    example: 'そもそもこの計画には無理があった。'
  },
  {
    japanese: '一概に',
    kana: 'いちがいに',
    vietnamese: 'không thể nói chung',
    english: 'unconditionally, sweepingly',
    type: 'main',
    group: '副詞・接続詞',
    example: '一概に悪いとは言えない。'
  },
  {
    japanese: '直ちに',
    kana: 'ただちに',
    vietnamese: 'lập tức, ngay',
    english: 'immediately, at once',
    type: 'main',
    group: '副詞・接続詞',
    example: '直ちに対応してください。'
  },
  {
    japanese: '概して',
    kana: 'がいして',
    vietnamese: 'nói chung, đại khái',
    english: 'generally, on the whole',
    type: 'main',
    group: '副詞・接続詞',
    example: '概して評価は良好だった。'
  },
  {
    japanese: '到底',
    kana: 'とうてい',
    vietnamese: 'hoàn toàn không (phủ định)',
    english: '(not) at all, (not) possibly',
    type: 'main',
    group: '副詞・接続詞',
    example: 'この問題は到底解決できない。'
  },
  {
    japanese: 'せいぜい',
    kana: 'せいぜい',
    vietnamese: 'nhiều lắm là, cùng lắm',
    english: 'at most, at best',
    type: 'main',
    group: '副詞・接続詞',
    example: 'せいぜい百人くらいしか来ないだろう。'
  },
  {
    japanese: 'さぞ',
    kana: 'さぞ',
    vietnamese: 'chắc hẳn, ắt hẳn',
    english: 'surely, no doubt',
    type: 'main',
    group: '副詞・接続詞',
    example: 'さぞお疲れだったでしょう。'
  },
  {
    japanese: '一旦',
    kana: 'いったん',
    vietnamese: 'một khi, tạm thời',
    english: 'once, temporarily',
    type: 'main',
    group: '副詞・接続詞',
    example: '一旦決めたら最後までやり遂げる。'
  },
  {
    japanese: 'あえて',
    kana: 'あえて',
    vietnamese: 'cố ý, dám',
    english: 'daringly, purposely',
    type: 'main',
    group: '副詞・接続詞',
    example: 'あえて困難な道を選んだ。'
  },
  {
    japanese: 'つまるところ',
    kana: 'つまるところ',
    vietnamese: 'rốt cuộc, nói tóm lại',
    english: 'in the end, after all',
    type: 'main',
    group: '副詞・接続詞',
    example: 'つまるところ、準備不足が原因だった。'
  },
  {
    japanese: 'ろくに',
    kana: 'ろくに',
    vietnamese: 'không đàng hoàng (phủ định)',
    english: '(not) properly, (not) sufficiently',
    type: 'main',
    group: '副詞・接続詞',
    example: 'ろくに説明もせずに帰ってしまった。'
  },

  // ============================================================
  // 名詞・学術 (Nouns - Academic)
  // ============================================================
  {
    japanese: '仮説',
    kana: 'かせつ',
    vietnamese: 'giả thuyết',
    english: 'hypothesis',
    type: 'main',
    group: '名詞・学術',
    example: '新しい仮説を立てて実験した。'
  },
  {
    japanese: '論拠',
    kana: 'ろんきょ',
    vietnamese: 'luận cứ, cơ sở lập luận',
    english: 'grounds for an argument, basis',
    type: 'main',
    group: '名詞・学術',
    example: '論拠を明確にする必要がある。'
  },
  {
    japanese: '検証',
    kana: 'けんしょう',
    vietnamese: 'kiểm chứng, xác minh',
    english: 'verification, validation',
    type: 'main',
    group: '名詞・学術',
    example: '実験結果の検証が行われた。'
  },
  {
    japanese: '考察',
    kana: 'こうさつ',
    vietnamese: 'khảo sát, phân tích',
    english: 'consideration, examination',
    type: 'main',
    group: '名詞・学術',
    example: 'データに基づいた考察を行う。'
  },
  {
    japanese: '知見',
    kana: 'ちけん',
    vietnamese: 'kiến thức, tri thức',
    english: 'knowledge, findings',
    type: 'main',
    group: '名詞・学術',
    example: '最新の知見を取り入れる。'
  },
  {
    japanese: '根拠',
    kana: 'こんきょ',
    vietnamese: 'căn cứ, cơ sở',
    english: 'basis, grounds',
    type: 'main',
    group: '名詞・学術',
    example: '科学的な根拠に基づいた議論が必要だ。'
  },
  {
    japanese: '前提',
    kana: 'ぜんてい',
    vietnamese: 'tiền đề',
    english: 'premise, precondition',
    type: 'main',
    group: '名詞・学術',
    example: 'この議論は全員が賛成であることを前提としている。'
  },
  {
    japanese: '帰結',
    kana: 'きけつ',
    vietnamese: 'kết luận, hệ quả',
    english: 'conclusion, consequence',
    type: 'main',
    group: '名詞・学術',
    example: '論理的な帰結として導き出された。'
  },
  {
    japanese: '抽象',
    kana: 'ちゅうしょう',
    vietnamese: 'trừu tượng',
    english: 'abstraction',
    type: 'main',
    group: '名詞・学術',
    example: '抽象的な概念を具体化する。'
  },
  {
    japanese: '具象',
    kana: 'ぐしょう',
    vietnamese: 'cụ thể, hữu hình',
    english: 'concrete, tangible',
    type: 'main',
    group: '名詞・学術',
    example: '具象的な表現で説明してください。'
  },
  {
    japanese: '普遍',
    kana: 'ふへん',
    vietnamese: 'phổ biến, phổ quát',
    english: 'universality',
    type: 'main',
    group: '名詞・学術',
    example: '普遍的な価値観とは何か。'
  },
  {
    japanese: '定義',
    kana: 'ていぎ',
    vietnamese: 'định nghĩa',
    english: 'definition',
    type: 'main',
    group: '名詞・学術',
    example: 'まず用語の定義を明確にしよう。'
  },
  {
    japanese: '命題',
    kana: 'めいだい',
    vietnamese: 'mệnh đề',
    english: 'proposition, thesis',
    type: 'main',
    group: '名詞・学術',
    example: 'この命題の真偽を確かめる。'
  },
  {
    japanese: '推論',
    kana: 'すいろん',
    vietnamese: 'suy luận',
    english: 'inference, reasoning',
    type: 'main',
    group: '名詞・学術',
    example: '推論に基づく結論は検証が必要だ。'
  },
  {
    japanese: '演繹',
    kana: 'えんえき',
    vietnamese: 'diễn dịch',
    english: 'deduction',
    type: 'main',
    group: '名詞・学術',
    example: '演繹法で結論を導く。'
  },
  {
    japanese: '帰納',
    kana: 'きのう',
    vietnamese: 'quy nạp',
    english: 'induction',
    type: 'main',
    group: '名詞・学術',
    example: '帰納法によって法則を見出す。'
  },
  {
    japanese: '論文',
    kana: 'ろんぶん',
    vietnamese: 'luận văn, bài nghiên cứu',
    english: 'thesis, paper',
    type: 'main',
    group: '名詞・学術',
    example: '博士論文を提出した。'
  },
  {
    japanese: '学説',
    kana: 'がくせつ',
    vietnamese: 'học thuyết',
    english: 'theory, doctrine',
    type: 'main',
    group: '名詞・学術',
    example: '新しい学説が提唱された。'
  },
  {
    japanese: '見解',
    kana: 'けんかい',
    vietnamese: 'quan điểm, ý kiến',
    english: 'opinion, view',
    type: 'main',
    group: '名詞・学術',
    example: '専門家の見解を聞きたい。'
  },
  {
    japanese: '統計',
    kana: 'とうけい',
    vietnamese: 'thống kê',
    english: 'statistics',
    type: 'main',
    group: '名詞・学術',
    example: '統計データに基づいて分析する。'
  },
  {
    japanese: '実証',
    kana: 'じっしょう',
    vietnamese: 'thực chứng, chứng minh',
    english: 'demonstration, proof',
    type: 'main',
    group: '名詞・学術',
    example: '実証的な研究が求められている。'
  },
  {
    japanese: '体系',
    kana: 'たいけい',
    vietnamese: 'hệ thống',
    english: 'system, framework',
    type: 'main',
    group: '名詞・学術',
    example: '知識を体系的にまとめる。'
  },
  {
    japanese: '典型',
    kana: 'てんけい',
    vietnamese: 'điển hình',
    english: 'typical example, model',
    type: 'main',
    group: '名詞・学術',
    example: 'これは典型的な例だ。'
  },
  {
    japanese: '範疇',
    kana: 'はんちゅう',
    vietnamese: 'phạm trù',
    english: 'category, scope',
    type: 'main',
    group: '名詞・学術',
    example: 'それは私の専門の範疇外です。'
  },
  {
    japanese: '通説',
    kana: 'つうせつ',
    vietnamese: 'thông thuyết, quan điểm phổ biến',
    english: 'prevailing theory, common view',
    type: 'main',
    group: '名詞・学術',
    example: '通説を覆す発見があった。'
  },
  {
    japanese: '洞察',
    kana: 'どうさつ',
    vietnamese: 'sự sáng suốt, nhìn thấu',
    english: 'insight, penetration',
    type: 'main',
    group: '名詞・学術',
    example: '鋭い洞察力を持つ研究者だ。'
  },
  {
    japanese: '素因',
    kana: 'そいん',
    vietnamese: 'nguyên nhân tiềm ẩn',
    english: 'predisposition, underlying cause',
    type: 'main',
    group: '名詞・学術',
    example: '遺伝的素因が病気の発症に関わる。'
  },
  {
    japanese: '精査',
    kana: 'せいさ',
    vietnamese: 'kiểm tra kỹ lưỡng',
    english: 'close examination, scrutiny',
    type: 'main',
    group: '名詞・学術',
    example: '報告書を精査する必要がある。'
  },
  {
    japanese: '概要',
    kana: 'がいよう',
    vietnamese: 'tổng quan, khái quát',
    english: 'outline, summary',
    type: 'main',
    group: '名詞・学術',
    example: '研究の概要を説明してください。'
  },
  {
    japanese: '妥当性',
    kana: 'だとうせい',
    vietnamese: 'tính hợp lý, tính thỏa đáng',
    english: 'validity, appropriateness',
    type: 'main',
    group: '名詞・学術',
    example: 'この方法の妥当性を検討する。'
  },

  // ============================================================
  // 四字熟語・慣用句 (4-char idioms/Expressions)
  // ============================================================
  {
    japanese: '一石二鳥',
    kana: 'いっせきにちょう',
    vietnamese: 'một mũi tên trúng hai đích',
    english: 'killing two birds with one stone',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '自転車通勤は一石二鳥だ。'
  },
  {
    japanese: '以心伝心',
    kana: 'いしんでんしん',
    vietnamese: 'tâm truyền tâm, hiểu ý nhau',
    english: 'telepathy, tacit understanding',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '長年の夫婦は以心伝心だ。'
  },
  {
    japanese: '試行錯誤',
    kana: 'しこうさくご',
    vietnamese: 'thử nghiệm và sai lầm',
    english: 'trial and error',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '試行錯誤を繰り返して完成した。'
  },
  {
    japanese: '自業自得',
    kana: 'じごうじとく',
    vietnamese: 'tự làm tự chịu',
    english: 'reap what you sow',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '勉強しなかったのだから自業自得だ。'
  },
  {
    japanese: '臨機応変',
    kana: 'りんきおうへん',
    vietnamese: 'tùy cơ ứng biến',
    english: 'adapting to circumstances',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '臨機応変に対応することが大切だ。'
  },
  {
    japanese: '前代未聞',
    kana: 'ぜんだいみもん',
    vietnamese: 'chưa từng có tiền lệ',
    english: 'unprecedented, unheard-of',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '前代未聞の事件が起きた。'
  },
  {
    japanese: '大器晩成',
    kana: 'たいきばんせい',
    vietnamese: 'đại khí vãn thành (lớn thành muộn)',
    english: 'great talents mature late',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '彼は大器晩成型の人間だ。'
  },
  {
    japanese: '一朝一夕',
    kana: 'いっちょういっせき',
    vietnamese: 'một sớm một chiều',
    english: 'overnight, in a short time',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '信頼は一朝一夕には築けない。'
  },
  {
    japanese: '四面楚歌',
    kana: 'しめんそか',
    vietnamese: 'tứ bề thọ địch',
    english: 'surrounded by enemies on all sides',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '四面楚歌の状況に追い込まれた。'
  },
  {
    japanese: '無我夢中',
    kana: 'むがむちゅう',
    vietnamese: 'quên mình, mê say',
    english: 'being absorbed in, ecstatic',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '無我夢中で走り続けた。'
  },
  {
    japanese: '紆余曲折',
    kana: 'うよきょくせつ',
    vietnamese: 'quanh co, gian nan',
    english: 'twists and turns, complications',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '紆余曲折を経てようやく合意に達した。'
  },
  {
    japanese: '本末転倒',
    kana: 'ほんまつてんとう',
    vietnamese: 'đảo lộn gốc ngọn',
    english: 'putting the cart before the horse',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '手段が目的化するのは本末転倒だ。'
  },
  {
    japanese: '針小棒大',
    kana: 'しんしょうぼうだい',
    vietnamese: 'phóng đại, bé xé ra to',
    english: 'making a mountain out of a molehill',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '針小棒大に話を膨らませないでほしい。'
  },
  {
    japanese: '取捨選択',
    kana: 'しゅしゃせんたく',
    vietnamese: 'chọn lọc, lấy bỏ',
    english: 'selection, choosing what to keep',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '情報の取捨選択が重要だ。'
  },
  {
    japanese: '自画自賛',
    kana: 'じがじさん',
    vietnamese: 'tự khen mình',
    english: 'self-praise, blowing one\'s own trumpet',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '自画自賛するのは見苦しい。'
  },
  {
    japanese: '唯一無二',
    kana: 'ゆいいつむに',
    vietnamese: 'duy nhất, không gì sánh bằng',
    english: 'one and only, unique',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '彼女は唯一無二の存在だ。'
  },
  {
    japanese: '異口同音',
    kana: 'いくどうおん',
    vietnamese: 'dị khẩu đồng âm, đồng thanh',
    english: 'with one voice, unanimously',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '参加者は異口同音に賛成した。'
  },
  {
    japanese: '朝令暮改',
    kana: 'ちょうれいぼかい',
    vietnamese: 'sáng ra lệnh chiều thay đổi',
    english: 'constantly changing orders',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '朝令暮改の方針に振り回されている。'
  },
  {
    japanese: '言語道断',
    kana: 'ごんごどうだん',
    vietnamese: 'không thể chấp nhận được',
    english: 'outrageous, unspeakable',
    type: 'main',
    group: '四字熟語・慣用句',
    example: 'そのような行為は言語道断だ。'
  },
  {
    japanese: '切磋琢磨',
    kana: 'せっさたくま',
    vietnamese: 'cùng nhau rèn luyện',
    english: 'friendly rivalry, mutual improvement',
    type: 'main',
    group: '四字熟語・慣用句',
    example: '仲間と切磋琢磨して成長する。'
  }
];

export function getN1VocabByGroup(): Record<string, VocabItemWithGroup[]> {
  const groups: Record<string, VocabItemWithGroup[]> = {};
  for (const item of N1_VOCAB_DATA) {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
  }
  return groups;
}

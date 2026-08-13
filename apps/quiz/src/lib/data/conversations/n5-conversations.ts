import type { ConversationPattern } from '$lib/types/lesson';

export const N5_CONVERSATIONS: ConversationPattern[] = [
  // ─────────────────────────────────────────────
  // 1. Self-introduction (自己紹介)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-01',
    title: 'Tự giới thiệu',
    titleJp: '自己紹介',
    level: 'N5',
    situation: 'Gặp người mới lần đầu tại lớp học tiếng Nhật',
    patterns: [
      {
        japanese: 'はじめまして、〜です。よろしくおねがいします。',
        kana: 'はじめまして、〜です。よろしくおねがいします。',
        vietnamese: 'Xin chào (lần đầu gặp), tôi là ~. Rất vui được gặp bạn.',
        memoryTip:
          'Nhớ: "hajimemashite" = "bắt đầu gặp" → lần đầu gặp mặt. Tưởng tượng bạn mở trang đầu tiên (hajime) cuốn sách tình bạn mới!'
      },
      {
        japanese: 'わたしは 〜じん です。',
        kana: 'わたしは 〜じん です。',
        vietnamese: 'Tôi là người ~. (quốc tịch)',
        memoryTip:
          'Nhớ: "~jin" = người nước ~. "Việt Nam jin" = người Việt Nam. Jin nghe như "nhân" (人) trong Hán Việt → con người!'
      },
      {
        japanese: 'おなまえは なんですか。',
        kana: 'おなまえは なんですか。',
        vietnamese: 'Tên bạn là gì?',
        memoryTip:
          'Nhớ: "onamae" = tên (lịch sự). "O" ở đầu là kính ngữ, "namae" = tên. Nghe như "o-na-mae" → "ồ, nà, mày tên gì?" (hài hước để nhớ!)'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Tanaka)',
        japanese: 'はじめまして。たなかです。',
        kana: 'はじめまして。たなかです。',
        vietnamese: 'Xin chào lần đầu. Tôi là Tanaka.'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'はじめまして。ランです。ベトナムじんです。',
        kana: 'はじめまして。らんです。べとなむじんです。',
        vietnamese: 'Xin chào lần đầu. Tôi là Lan. Tôi là người Việt Nam.'
      },
      {
        speaker: 'A (Tanaka)',
        japanese: 'がくせいですか。',
        kana: 'がくせいですか。',
        vietnamese: 'Bạn là sinh viên à?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'はい、がくせいです。たなかさんは？',
        kana: 'はい、がくせいです。たなかさんは？',
        vietnamese: 'Vâng, tôi là sinh viên. Còn anh Tanaka?'
      },
      {
        speaker: 'A (Tanaka)',
        japanese: 'かいしゃいんです。よろしくおねがいします。',
        kana: 'かいしゃいんです。よろしくおねがいします。',
        vietnamese: 'Tôi là nhân viên công ty. Rất vui được làm quen.'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'こちらこそ、よろしくおねがいします。',
        kana: 'こちらこそ、よろしくおねがいします。',
        vietnamese: 'Tôi mới là người vui được làm quen ạ.'
      }
    ],
    culturalNote:
      'Người Nhật thường cúi đầu (おじぎ - ojigi) khi chào hỏi. Câu "よろしくお願いします" là câu không thể thiếu khi gặp lần đầu — nó thể hiện sự tôn trọng và mong muốn xây dựng mối quan hệ tốt đẹp. Cúi đầu càng thấp thì càng lịch sự!'
  },

  // ─────────────────────────────────────────────
  // 2. Shopping (買い物)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-02',
    title: 'Mua sắm',
    titleJp: '買い物',
    level: 'N5',
    situation: 'Mua đồ tại cửa hàng tiện lợi (コンビニ) ở Nhật',
    patterns: [
      {
        japanese: 'これは いくらですか。',
        kana: 'これは いくらですか。',
        vietnamese: 'Cái này giá bao nhiêu?',
        memoryTip:
          'Nhớ: "ikura" = bao nhiêu tiền. Nghe giống "i-cu-ra" → tưởng tượng bạn hỏi "ị cú ra... bao nhiêu tiền vậy?" khi thấy giá đắt!'
      },
      {
        japanese: 'これ／それ／あれ を ください。',
        kana: 'これ／それ／あれ を ください。',
        vietnamese: 'Cho tôi cái này / cái đó / cái kia.',
        memoryTip:
          'Nhớ bộ ba KO-SO-A: Kore (gần mình), Sore (gần người nghe), Are (xa cả hai). Nghĩ "KSA" như tên nước → KSA = Ko-So-A!'
      },
      {
        japanese: 'すみません、〜は ありますか。',
        kana: 'すみません、〜は ありますか。',
        vietnamese: 'Xin lỗi, có ~ không ạ?',
        memoryTip:
          'Nhớ: "arimasu ka" = có không? "Aru" = tồn tại (đồ vật). Nghĩ "a-ri-ma-su" → "à, ri (lý), mà sự" → à, lẽ ra mà có sự tồn tại!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Khách)',
        japanese: 'すみません。これは いくらですか。',
        kana: 'すみません。これは いくらですか。',
        vietnamese: 'Xin lỗi. Cái này giá bao nhiêu?'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'それは ひゃくえん です。',
        kana: 'それは ひゃくえん です。',
        vietnamese: 'Cái đó 100 yên ạ.'
      },
      {
        speaker: 'A (Khách)',
        japanese: 'じゃ、これを ふたつ ください。',
        kana: 'じゃ、これを ふたつ ください。',
        vietnamese: 'Vậy, cho tôi hai cái này.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい。にひゃくえん です。',
        kana: 'はい。にひゃくえん です。',
        vietnamese: 'Vâng. 200 yên ạ.'
      },
      {
        speaker: 'A (Khách)',
        japanese: 'これも ください。',
        kana: 'これも ください。',
        vietnamese: 'Cho tôi cái này nữa.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'ぜんぶで さんびゃくごじゅうえん です。ありがとうございます。',
        kana: 'ぜんぶで さんびゃくごじゅうえん です。ありがとうございます。',
        vietnamese: 'Tổng cộng 350 yên ạ. Cảm ơn quý khách.'
      }
    ],
    culturalNote:
      'Ở Nhật, khi mua hàng bạn sẽ thấy nhân viên rất lịch sự, luôn dùng kính ngữ. Tiền được đặt vào khay nhỏ (お釣りトレイ), không đưa tay trực tiếp. Đừng quên nói "ありがとうございます" khi nhận hàng — đó là phép lịch sự cơ bản!'
  },

  // ─────────────────────────────────────────────
  // 3. Asking time (時間)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-03',
    title: 'Hỏi giờ',
    titleJp: '時間',
    level: 'N5',
    situation: 'Hỏi giờ ở ga tàu và sắp xếp lịch hẹn',
    patterns: [
      {
        japanese: 'いま なんじ ですか。',
        kana: 'いま なんじ ですか。',
        vietnamese: 'Bây giờ mấy giờ?',
        memoryTip:
          'Nhớ: "ima" = bây giờ, "nanji" = mấy giờ. "Nan" = mấy/bao nhiêu, "ji" = giờ. Nghĩ: "I-ma nan-ji" → "Ì mà, nản chỉ vì không biết mấy giờ!"'
      },
      {
        japanese: '〜じ 〜ふん です。',
        kana: '〜じ 〜ふん です。',
        vietnamese: '~ giờ ~ phút.',
        memoryTip:
          'Nhớ: "ji" = giờ, "fun/pun" = phút. Cẩn thận: 1 phút = "ippun", 3 phút = "sanpun", 6 phút = "roppun" — âm thay đổi theo số đếm!'
      },
      {
        japanese: '〜から 〜まで です。',
        kana: '〜から 〜まで です。',
        vietnamese: 'Từ ~ đến ~.',
        memoryTip:
          'Nhớ: "kara" = từ (bắt đầu), "made" = đến (kết thúc). Nghĩ "kara-made" → "ca-ra ma-đê" → "ca ra rồi mà deadline đến rồi!" — từ lúc bắt đầu đến lúc kết thúc!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Minh)',
        japanese: 'すみません、いま なんじですか。',
        kana: 'すみません、いま なんじですか。',
        vietnamese: 'Xin lỗi, bây giờ mấy giờ rồi ạ?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'いま くじ じゅうごふん です。',
        kana: 'いま くじ じゅうごふん です。',
        vietnamese: 'Bây giờ 9 giờ 15 phút.'
      },
      {
        speaker: 'A (Minh)',
        japanese: 'ありがとうございます。でんしゃは なんじですか。',
        kana: 'ありがとうございます。でんしゃは なんじですか。',
        vietnamese: 'Cảm ơn ạ. Tàu điện mấy giờ ạ?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'くじ はん です。',
        kana: 'くじ はん です。',
        vietnamese: '9 giờ rưỡi.'
      },
      {
        speaker: 'A (Minh)',
        japanese: 'くじはんから じゅうじまで ですか。',
        kana: 'くじはんから じゅうじまで ですか。',
        vietnamese: 'Từ 9 giờ rưỡi đến 10 giờ ạ?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'はい、そうです。がんばってください。',
        kana: 'はい、そうです。がんばってください。',
        vietnamese: 'Vâng, đúng vậy. Cố lên nhé!'
      }
    ],
    culturalNote:
      'Người Nhật cực kỳ coi trọng đúng giờ (時間厳守 - jikan genshu). Tàu điện Nhật nổi tiếng chính xác đến từng giây — nếu trễ dù chỉ 1 phút, nhà ga sẽ phát giấy xin lỗi cho hành khách! Khi hẹn ai, hãy đến sớm 5 phút là phép lịch sự.'
  },

  // ─────────────────────────────────────────────
  // 4. At restaurant (レストラン)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-04',
    title: 'Tại nhà hàng',
    titleJp: 'レストラン',
    level: 'N5',
    situation: 'Gọi món tại một quán ăn Nhật',
    patterns: [
      {
        japanese: 'すみません、メニューを おねがいします。',
        kana: 'すみません、めにゅーを おねがいします。',
        vietnamese: 'Xin lỗi, cho tôi xem thực đơn.',
        memoryTip:
          'Nhớ: "sumimasen" nghe như "xin miễn thứ" → xin lỗi / xin phép. "Onegaishimasu" = làm ơn. Hai câu thần chú sống còn ở Nhật!'
      },
      {
        japanese: '〜を おねがいします。/ 〜を ください。',
        kana: '〜を おねがいします。/ 〜を ください。',
        vietnamese: 'Cho tôi ~. (lịch sự / thường)',
        memoryTip:
          'Nhớ: "onegaishimasu" lịch sự hơn "kudasai". Nghĩ: "o-ne-gai" → "ô, nè, gái/trai ơi cho tôi cái này!" — cách nhớ vui mà không bao giờ quên!'
      },
      {
        japanese: 'おかんじょう を おねがいします。',
        kana: 'おかんじょう を おねがいします。',
        vietnamese: 'Cho tôi tính tiền.',
        memoryTip:
          'Nhớ: "okanjou" = hóa đơn/tính tiền. Nghe như "o-kan-jou" → "ô, cạn tiền rồi!" — đúng lúc cần tính tiền!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Khách - Hoa)',
        japanese: 'すみません。',
        kana: 'すみません。',
        vietnamese: 'Xin lỗi (gọi nhân viên).'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'いらっしゃいませ。なんめいさま ですか。',
        kana: 'いらっしゃいませ。なんめいさま ですか。',
        vietnamese: 'Xin chào quý khách. Mấy người ạ?'
      },
      {
        speaker: 'A (Khách - Hoa)',
        japanese: 'ふたりです。めにゅーを おねがいします。',
        kana: 'ふたりです。めにゅーを おねがいします。',
        vietnamese: 'Hai người. Cho tôi xem thực đơn ạ.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい、どうぞ。',
        kana: 'はい、どうぞ。',
        vietnamese: 'Vâng, mời ạ.'
      },
      {
        speaker: 'A (Khách - Hoa)',
        japanese: 'ラーメンと ぎょうざを おねがいします。',
        kana: 'らーめんと ぎょうざを おねがいします。',
        vietnamese: 'Cho tôi ramen và gyoza ạ.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'おのみものは？',
        kana: 'おのみものは？',
        vietnamese: 'Đồ uống ạ?'
      }
    ],
    culturalNote:
      'Ở Nhật, bạn gọi nhân viên bằng cách nói "すみません" hoặc bấm nút gọi trên bàn — KHÔNG vẫy tay ầm ĩ. Trước khi ăn nói "いただきます" (itadakimasu = tôi xin phép nhận), ăn xong nói "ごちそうさまでした" (gochisousama deshita = cảm ơn bữa ăn). Và nhớ: ở Nhật KHÔNG cần tip!'
  },

  // ─────────────────────────────────────────────
  // 5. Daily greetings (挨拶)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-05',
    title: 'Chào hỏi hằng ngày',
    titleJp: '挨拶',
    level: 'N5',
    situation: 'Chào hỏi hàng xóm, đồng nghiệp trong các thời điểm khác nhau trong ngày',
    patterns: [
      {
        japanese: 'おはようございます。/ こんにちは。/ こんばんは。',
        kana: 'おはようございます。/ こんにちは。/ こんばんは。',
        vietnamese: 'Chào buổi sáng. / Chào buổi chiều. / Chào buổi tối.',
        memoryTip:
          'Nhớ bộ ba chào: "Ohayou" (sáng) nghe như "Ohio" bang Mỹ → mỗi sáng thức dậy ở Ohio! "Konnichiwa" (chiều) → "con-ni-chi-wa" = "con nì chỉ wá!" (con này chỉ nói chào!). "Konbanwa" (tối) → "con bàn wá" = bàn chuyện buổi tối!'
      },
      {
        japanese: 'おげんきですか。— はい、げんきです。',
        kana: 'おげんきですか。— はい、げんきです。',
        vietnamese: 'Bạn khỏe không? — Vâng, tôi khỏe.',
        memoryTip:
          'Nhớ: "genki" = khỏe/vui/năng lượng. Nghĩ đến nhân vật Goku hét "GENKI DAMA!" (bom năng lượng) → genki = đầy năng lượng = khỏe mạnh!'
      },
      {
        japanese: 'さようなら。/ じゃ、また。',
        kana: 'さようなら。/ じゃ、また。',
        vietnamese: 'Tạm biệt. / Vậy, hẹn gặp lại.',
        memoryTip:
          'Nhớ: "sayounara" trang trọng (tạm biệt lâu), "ja mata" thân mật (hẹn gặp lại sớm). "Ja mata" → "cha má ta" → "cha má ta gặp lại nha!" — dùng với bạn bè!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Yuki)',
        japanese: 'おはようございます、たなかさん。',
        kana: 'おはようございます、たなかさん。',
        vietnamese: 'Chào buổi sáng, anh Tanaka.'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'おはようございます。おげんきですか。',
        kana: 'おはようございます。おげんきですか。',
        vietnamese: 'Chào buổi sáng. Bạn khỏe không?'
      },
      {
        speaker: 'A (Yuki)',
        japanese: 'はい、げんきです。たなかさんは？',
        kana: 'はい、げんきです。たなかさんは？',
        vietnamese: 'Vâng, tôi khỏe. Còn anh Tanaka?'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'げんきです。きょうは いいてんきですね。',
        kana: 'げんきです。きょうは いいてんきですね。',
        vietnamese: 'Tôi khỏe. Hôm nay thời tiết đẹp nhỉ.'
      },
      {
        speaker: 'A (Yuki)',
        japanese: 'そうですね。じゃ、いってきます。',
        kana: 'そうですね。じゃ、いってきます。',
        vietnamese: 'Đúng vậy nhỉ. Vậy, tôi đi đây.'
      },
      {
        speaker: 'B (Tanaka)',
        japanese: 'いってらっしゃい。きをつけて。',
        kana: 'いってらっしゃい。きをつけて。',
        vietnamese: 'Đi nhé. Cẩn thận nha.'
      }
    ],
    culturalNote:
      'Cặp đôi câu "いってきます" (tôi đi đây) và "いってらっしゃい" (đi rồi về nhé) là nét văn hóa đặc trưng Nhật Bản — luôn được nói khi ra khỏi nhà. Tương tự, khi về nhà sẽ nói "ただいま" (tôi về rồi) và người ở nhà đáp "おかえりなさい" (chào mừng về nhà). Đây là cách người Nhật thể hiện sự quan tâm trong gia đình.'
  },

  // ─────────────────────────────────────────────
  // 6. At the post office (郵便局)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-06',
    title: 'Tại bưu điện',
    titleJp: '郵便局',
    level: 'N5',
    situation: 'Gửi thư và mua tem tại bưu điện Nhật',
    patterns: [
      {
        japanese: 'きってを ください。',
        kana: 'きってを ください。',
        vietnamese: 'Cho tôi tem.',
        memoryTip:
          'Nhớ: "kitte" = tem thư. Nghe như "kit-te" → "kít te" → tưởng tượng tờ tem bé xíu bị kẹt (kít) vào tay te tua! Một khi dán vào phong bì thì không gỡ ra được!'
      },
      {
        japanese: 'はがきを にまい おねがいします。',
        kana: 'はがきを にまい おねがいします。',
        vietnamese: 'Cho tôi hai tấm bưu thiếp.',
        memoryTip:
          'Nhớ: "hagaki" = bưu thiếp, "nimai" = hai tấm. "Mai" là đơn vị đếm vật phẳng (tem, giấy, áo). Nghĩ "ha-ga-ki" → "hà, gà kí tên lên bưu thiếp" — gà biết viết thư!'
      },
      {
        japanese: 'ベトナムに おくりたいです。',
        kana: 'べとなむに おくりたいです。',
        vietnamese: 'Tôi muốn gửi đến Việt Nam.',
        memoryTip:
          'Nhớ: "okurimasu" = gửi, "okuritai" = muốn gửi. "Okuri" nghe như "ô ku ri" → "ồ, cú rì (free) ship đến Việt Nam!" — ước gì gửi miễn phí!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Khách - Trang)',
        japanese: 'すみません、きってを ください。',
        kana: 'すみません、きってを ください。',
        vietnamese: 'Xin lỗi, cho tôi tem ạ.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'なんまい ですか。',
        kana: 'なんまい ですか。',
        vietnamese: 'Mấy tấm ạ?'
      },
      {
        speaker: 'A (Khách - Trang)',
        japanese: 'さんまい おねがいします。はがきも にまい ください。',
        kana: 'さんまい おねがいします。はがきも にまい ください。',
        vietnamese: 'Ba tấm ạ. Cho tôi thêm hai tấm bưu thiếp nữa.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい。どこに おくりますか。',
        kana: 'はい。どこに おくりますか。',
        vietnamese: 'Vâng. Gửi đến đâu ạ?'
      },
      {
        speaker: 'A (Khách - Trang)',
        japanese: 'ベトナムに おくりたいです。いくらですか。',
        kana: 'べとなむに おくりたいです。いくらですか。',
        vietnamese: 'Tôi muốn gửi đến Việt Nam. Bao nhiêu tiền ạ?'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'ぜんぶで ごひゃくえん です。',
        kana: 'ぜんぶで ごひゃくえん です。',
        vietnamese: 'Tổng cộng 500 yên ạ.'
      }
    ],
    culturalNote:
      'Bưu điện Nhật (郵便局 - yuubinkyoku) có biểu tượng 〒 rất dễ nhận biết. Ngoài gửi thư, bưu điện Nhật còn có dịch vụ ngân hàng (ゆうちょ銀行) và bảo hiểm. Bưu thiếp năm mới (年賀状 - nengajou) là truyền thống quan trọng — người Nhật gửi hàng trăm tấm mỗi dịp Tết!'
  },

  // ─────────────────────────────────────────────
  // 7. Weather (天気)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-07',
    title: 'Thời tiết',
    titleJp: '天気',
    level: 'N5',
    situation: 'Nói chuyện về thời tiết với đồng nghiệp vào buổi sáng',
    patterns: [
      {
        japanese: 'きょうは いい てんきですね。',
        kana: 'きょうは いい てんきですね。',
        vietnamese: 'Hôm nay thời tiết đẹp nhỉ.',
        memoryTip:
          'Nhớ: "tenki" = thời tiết. "Ten" (天) = trời, "ki" (気) = khí. Đúng nghĩa Hán Việt "thiên khí" → thời tiết! "Ii tenki" = thời tiết tốt. Câu mở đầu small-talk kinh điển của người Nhật!'
      },
      {
        japanese: 'あめが ふっています。',
        kana: 'あめが ふっています。',
        vietnamese: 'Trời đang mưa.',
        memoryTip:
          'Nhớ: "ame" = mưa, "futte imasu" = đang rơi/rớt. "Ame" nghe như "a mê" → "a, mê mưa quá!" Còn "futte" nghe như "phụt" → nước phụt từ trời xuống = mưa!'
      },
      {
        japanese: 'あしたは はれですか、くもりですか。',
        kana: 'あしたは はれですか、くもりですか。',
        vietnamese: 'Ngày mai trời nắng hay u ám?',
        memoryTip:
          'Nhớ ba trạng thái trời: "hare" (晴れ) = nắng → "ha-rê" = "hả, rê chân ra ngoài đi!". "Kumori" (曇り) = u ám → "ku-mo-ri" = "cũ mờ rì" = trời cũ kỹ mờ mịt. "Ame" (雨) = mưa!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Suzuki)',
        japanese: 'おはようございます。きょうは いい てんきですね。',
        kana: 'おはようございます。きょうは いい てんきですね。',
        vietnamese: 'Chào buổi sáng. Hôm nay thời tiết đẹp nhỉ.'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'そうですね。でも、あしたは あめですよ。',
        kana: 'そうですね。でも、あしたは あめですよ。',
        vietnamese: 'Đúng vậy nhỉ. Nhưng ngày mai mưa đấy.'
      },
      {
        speaker: 'A (Suzuki)',
        japanese: 'ほんとうですか。かさを もっていきますか。',
        kana: 'ほんとうですか。かさを もっていきますか。',
        vietnamese: 'Thật á? Mang ô đi không?'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'はい、もっていったほうが いいですよ。',
        kana: 'はい、もっていったほうが いいですよ。',
        vietnamese: 'Vâng, mang theo thì tốt hơn đấy.'
      },
      {
        speaker: 'A (Suzuki)',
        japanese: 'さむいですか。',
        kana: 'さむいですか。',
        vietnamese: 'Lạnh không?'
      },
      {
        speaker: 'B (Mai)',
        japanese: 'ちょっと さむいですね。コートを きてください。',
        kana: 'ちょっと さむいですね。こーとを きてください。',
        vietnamese: 'Hơi lạnh đấy. Mặc áo khoác nhé.'
      }
    ],
    culturalNote:
      'Nói chuyện thời tiết là cách small-talk phổ biến nhất ở Nhật. Nhật Bản có 4 mùa rõ rệt và người Nhật rất tự hào về điều này. Mùa mưa (梅雨 - tsuyu) kéo dài khoảng tháng 6-7. Người Nhật luôn mang ô (傘) phòng khi — bạn sẽ thấy giá ô ở khắp nơi, từ cửa hàng tiện lợi đến nhà ga!'
  },

  // ─────────────────────────────────────────────
  // 8. Family introduction (家族)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-08',
    title: 'Giới thiệu gia đình',
    titleJp: '家族',
    level: 'N5',
    situation: 'Giới thiệu các thành viên gia đình với bạn mới',
    patterns: [
      {
        japanese: 'かぞくは ごにん です。',
        kana: 'かぞくは ごにん です。',
        vietnamese: 'Gia đình tôi có 5 người.',
        memoryTip:
          'Nhớ: "kazoku" = gia đình. "Ka" (家) = nhà, "zoku" (族) = tộc. Hán Việt "gia tộc" → gia đình! "Kazoku" nghe như "ca-dọc" → cả nhà đọc sách dọc theo hàng!'
      },
      {
        japanese: 'ちちは かいしゃいん です。ははは せんせい です。',
        kana: 'ちちは かいしゃいん です。ははは せんせい です。',
        vietnamese: 'Bố tôi là nhân viên công ty. Mẹ tôi là giáo viên.',
        memoryTip:
          'Nhớ: "chichi" = bố (của mình), "haha" = mẹ (của mình). Bố người khác = "otousan", mẹ người khác = "okaasan". "Chichi" → "chí chí" = ông bố hay chí chí cười. "Haha" → tiếng cười "haha" = mẹ lúc nào cũng vui cười!'
      },
      {
        japanese: 'あにが ひとり、あねが ひとり います。',
        kana: 'あにが ひとり、あねが ひとり います。',
        vietnamese: 'Tôi có một anh trai và một chị gái.',
        memoryTip:
          'Nhớ: "ani" = anh trai (của mình), "ane" = chị gái (của mình). Anh/chị người khác = "oniisan/oneesan". "Ani" → "a ni" = "à, anh NI (này)!". "Ane" → "a nê" = "à, chị NÊ (nè)!"'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Yamada)',
        japanese: 'ランさんの かぞくは なんにん ですか。',
        kana: 'らんさんの かぞくは なんにん ですか。',
        vietnamese: 'Gia đình bạn Lan có mấy người?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'ごにんです。ちちと ははと あにと いもうとと わたしです。',
        kana: 'ごにんです。ちちと ははと あにと いもうとと わたしです。',
        vietnamese: 'Năm người. Bố, mẹ, anh trai, em gái và tôi.'
      },
      {
        speaker: 'A (Yamada)',
        japanese: 'おにいさんは なにを していますか。',
        kana: 'おにいさんは なにを していますか。',
        vietnamese: 'Anh trai bạn làm gì?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'あには だいがくせいです。にほんごを べんきょうしています。',
        kana: 'あには だいがくせいです。にほんごを べんきょうしています。',
        vietnamese: 'Anh trai tôi là sinh viên đại học. Anh ấy đang học tiếng Nhật.'
      },
      {
        speaker: 'A (Yamada)',
        japanese: 'いいですね！いもうとさんは？',
        kana: 'いいですね！いもうとさんは？',
        vietnamese: 'Tốt quá nhỉ! Còn em gái?'
      },
      {
        speaker: 'B (Lan)',
        japanese: 'いもうとは こうこうせいです。じゅうろくさいです。',
        kana: 'いもうとは こうこうせいです。じゅうろくさいです。',
        vietnamese: 'Em gái tôi là học sinh cấp 3. Em ấy 16 tuổi.'
      }
    ],
    culturalNote:
      'Tiếng Nhật có 2 bộ từ vựng gia đình: một cho gia đình MÌNH (chichi, haha, ani, ane) và một cho gia đình NGƯỜI KHÁC (otousan, okaasan, oniisan, oneesan). Nói về bố mình mà dùng "otousan" là sai — vì đó là kính ngữ dùng cho bố người khác. Đây là quy tắc uchi-soto (trong-ngoài) rất quan trọng trong văn hóa Nhật!'
  },

  // ─────────────────────────────────────────────
  // 9. Transportation (交通)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-09',
    title: 'Phương tiện giao thông',
    titleJp: '交通',
    level: 'N5',
    situation: 'Hỏi đường đến ga tàu và đi phương tiện công cộng',
    patterns: [
      {
        japanese: 'えきは どこですか。',
        kana: 'えきは どこですか。',
        vietnamese: 'Ga tàu ở đâu?',
        memoryTip:
          'Nhớ: "eki" = ga tàu. Nghe như "ê ki" → "ê, kì lạ, ga tàu ở đâu?" Còn "doko" = ở đâu → "đô-cô" = "đô thị cô đơn, không biết đường đi!"'
      },
      {
        japanese: 'でんしゃで いきます。/ バスで いきます。',
        kana: 'でんしゃで いきます。/ ばすで いきます。',
        vietnamese: 'Tôi đi bằng tàu điện. / Tôi đi bằng xe buýt.',
        memoryTip:
          'Nhớ: "densha" = tàu điện. "Den" (電) = điện, "sha" (車) = xe. Hán Việt "điện xa" → xe điện! "Basu" = bus, từ tiếng Anh. Trợ từ "de" = bằng (phương tiện).'
      },
      {
        japanese: 'つぎの でんしゃは なんじですか。',
        kana: 'つぎの でんしゃは なんじですか。',
        vietnamese: 'Chuyến tàu tiếp theo mấy giờ?',
        memoryTip:
          'Nhớ: "tsugi" = tiếp theo. Nghe như "xu-ghi" → "xù ghi chép lại chuyến tàu kế tiếp!" Câu rất hữu ích khi đứng ở sân ga đợi tàu.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Hùng)',
        japanese: 'すみません、えきは どこですか。',
        kana: 'すみません、えきは どこですか。',
        vietnamese: 'Xin lỗi, ga tàu ở đâu ạ?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'まっすぐ いってください。みぎに あります。',
        kana: 'まっすぐ いってください。みぎに あります。',
        vietnamese: 'Đi thẳng ạ. Ở bên phải.'
      },
      {
        speaker: 'A (Hùng)',
        japanese: 'ありがとうございます。とうきょうえきまで いくらですか。',
        kana: 'ありがとうございます。とうきょうえきまで いくらですか。',
        vietnamese: 'Cảm ơn ạ. Đến ga Tokyo bao nhiêu tiền?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'にひゃくえん ぐらいですよ。',
        kana: 'にひゃくえん ぐらいですよ。',
        vietnamese: 'Khoảng 200 yên đấy.'
      },
      {
        speaker: 'A (Hùng)',
        japanese: 'でんしゃと バスと、どちらが はやいですか。',
        kana: 'でんしゃと ばすと、どちらが はやいですか。',
        vietnamese: 'Tàu điện và xe buýt, cái nào nhanh hơn?'
      },
      {
        speaker: 'B (Người qua đường)',
        japanese: 'でんしゃの ほうが はやいです。じゅっぷんぐらい ですよ。',
        kana: 'でんしゃの ほうが はやいです。じゅっぷんぐらい ですよ。',
        vietnamese: 'Tàu điện nhanh hơn. Khoảng 10 phút thôi.'
      }
    ],
    culturalNote:
      'Hệ thống tàu điện Nhật Bản là một trong những hệ thống tốt nhất thế giới — chính xác, sạch sẽ và an toàn. Thẻ IC (Suica, Pasmo) giúp thanh toán nhanh không cần mua vé. Trên tàu, hãy để điện thoại ở chế độ im lặng (マナーモード) và KHÔNG nói chuyện điện thoại — đó là quy tắc bất thành văn!'
  },

  // ─────────────────────────────────────────────
  // 10. Hobby / Likes (趣味)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-10',
    title: 'Sở thích',
    titleJp: '趣味',
    level: 'N5',
    situation: 'Nói chuyện về sở thích với bạn mới quen trong buổi giao lưu',
    patterns: [
      {
        japanese: 'しゅみは なんですか。',
        kana: 'しゅみは なんですか。',
        vietnamese: 'Sở thích của bạn là gì?',
        memoryTip:
          'Nhớ: "shumi" = sở thích. Nghe gần giống "thú mí" → "thú vị, mí ơi sở thích gì?" Hán Việt: "thú vị" — đúng nghĩa luôn!'
      },
      {
        japanese: '〜が すきです。/ 〜が きらいです。',
        kana: '〜が すきです。/ 〜が きらいです。',
        vietnamese: 'Tôi thích ~. / Tôi ghét ~.',
        memoryTip:
          'Nhớ: "suki" = thích. Nghe như "su-ki" → "xúc kích" = xúc động thích thú! "Kirai" = ghét → "ki-rai" → "kì, rài" = kì cục, rải rác ghét đủ thứ!'
      },
      {
        japanese: 'わたしも 〜が すきです。',
        kana: 'わたしも 〜が すきです。',
        vietnamese: 'Tôi cũng thích ~.',
        memoryTip:
          'Nhớ: "mo" = cũng. Trợ từ nhỏ nhưng rất quan trọng! "Watashi MO" = tôi CŨNG. Nghĩ "mô" → "mô phỏng" = bắt chước = cũng giống vậy!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Kenji)',
        japanese: 'しゅみは なんですか。',
        kana: 'しゅみは なんですか。',
        vietnamese: 'Sở thích của bạn là gì?'
      },
      {
        speaker: 'B (Thảo)',
        japanese: 'おんがくが すきです。ギターを ひきます。',
        kana: 'おんがくが すきです。ぎたーを ひきます。',
        vietnamese: 'Tôi thích âm nhạc. Tôi chơi guitar.'
      },
      {
        speaker: 'A (Kenji)',
        japanese: 'いいですね！わたしも おんがくが すきです。',
        kana: 'いいですね！わたしも おんがくが すきです。',
        vietnamese: 'Hay quá! Tôi cũng thích âm nhạc.'
      },
      {
        speaker: 'B (Thảo)',
        japanese: 'けんじさんの しゅみは なんですか。',
        kana: 'けんじさんの しゅみは なんですか。',
        vietnamese: 'Sở thích của Kenji là gì?'
      },
      {
        speaker: 'A (Kenji)',
        japanese: 'りょうりが すきです。にほんりょうりを つくります。',
        kana: 'りょうりが すきです。にほんりょうりを つくります。',
        vietnamese: 'Tôi thích nấu ăn. Tôi nấu món Nhật.'
      },
      {
        speaker: 'B (Thảo)',
        japanese: 'すごいですね！わたしは りょうりが ちょっと にがてです。',
        kana: 'すごいですね！わたしは りょうりが ちょっと にがてです。',
        vietnamese: 'Giỏi quá nhỉ! Tôi hơi không giỏi nấu ăn.'
      }
    ],
    culturalNote:
      'Người Nhật thường khiêm tốn về sở thích của mình. Thay vì nói "tôi giỏi lắm", họ sẽ nói "mada mada desu" (vẫn còn kém lắm). Câu "にがてです" (nigate desu = không giỏi/không thích) là cách từ chối nhẹ nhàng hơn "きらいです" (kirai = ghét). Trong văn hóa Nhật, nói thẳng "ghét" được coi là hơi thô!'
  },

  // ─────────────────────────────────────────────
  // 11. Counting things (数え方)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-11',
    title: 'Đếm đồ vật',
    titleJp: '数え方',
    level: 'N5',
    situation: 'Mua trái cây ở chợ và đếm số lượng',
    patterns: [
      {
        japanese: 'ひとつ、ふたつ、みっつ… いくつですか。',
        kana: 'ひとつ、ふたつ、みっつ… いくつですか。',
        vietnamese: 'Một cái, hai cái, ba cái... Mấy cái?',
        memoryTip:
          'Nhớ: hệ đếm Nhật gốc "hitotsu, futatsu, mittsu..." dùng cho đồ vật chung. "Ikutsu" = mấy cái. Mẹo: đếm 1-3 → "hí-tốt-su, phú-tát-su, mít-su" → tưởng tượng đếm quả mít: một mít, hai mít, ba mít!'
      },
      {
        japanese: 'りんごを みっつ ください。',
        kana: 'りんごを みっつ ください。',
        vietnamese: 'Cho tôi ba quả táo.',
        memoryTip:
          'Nhớ: "ringo" = táo. Nghe giống "Ringo Starr" (thành viên Beatles) → Ringo ăn táo! Đặt số đếm SAU đồ vật: "ringo wo mittsu" = táo + 3 cái.'
      },
      {
        japanese: 'ぜんぶで いくつ ありますか。',
        kana: 'ぜんぶで いくつ ありますか。',
        vietnamese: 'Tổng cộng có mấy cái?',
        memoryTip:
          'Nhớ: "zenbu de" = tổng cộng. "Zen" (全) = toàn bộ, "bu" (部) = phần. Hán Việt "toàn bộ" → tất cả! "Ikutsu arimasu ka" = có mấy cái?'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Khách - Dũng)',
        japanese: 'すみません、このりんごは いくらですか。',
        kana: 'すみません、このりんごは いくらですか。',
        vietnamese: 'Xin lỗi, táo này bao nhiêu tiền?'
      },
      {
        speaker: 'B (Người bán)',
        japanese: 'ひとつ ひゃくえん です。',
        kana: 'ひとつ ひゃくえん です。',
        vietnamese: 'Một quả 100 yên.'
      },
      {
        speaker: 'A (Khách - Dũng)',
        japanese: 'じゃ、いつつ ください。みかんは いくつ ありますか。',
        kana: 'じゃ、いつつ ください。みかんは いくつ ありますか。',
        vietnamese: 'Vậy, cho tôi năm quả. Quýt có mấy quả?'
      },
      {
        speaker: 'B (Người bán)',
        japanese: 'みかんは ここのつ あります。',
        kana: 'みかんは ここのつ あります。',
        vietnamese: 'Quýt có chín quả.'
      },
      {
        speaker: 'A (Khách - Dũng)',
        japanese: 'みかんも みっつ おねがいします。',
        kana: 'みかんも みっつ おねがいします。',
        vietnamese: 'Cho tôi thêm ba quả quýt nữa ạ.'
      },
      {
        speaker: 'B (Người bán)',
        japanese: 'はい。ぜんぶで はっぴゃくえん です。',
        kana: 'はい。ぜんぶで はっぴゃくえん です。',
        vietnamese: 'Vâng. Tổng cộng 800 yên ạ.'
      }
    ],
    culturalNote:
      'Hệ thống đếm tiếng Nhật là một trong những phần khó nhất cho người mới học! Ngoài hệ đếm gốc Nhật (hitotsu, futatsu...), còn có hàng chục "trợ từ đếm" (助数詞) tùy loại vật: "mai" (枚) cho vật phẳng, "hon" (本) cho vật dài, "hiki" (匹) cho động vật nhỏ, "satsu" (冊) cho sách. Bí quyết: học dần, bắt đầu từ hệ đếm gốc Nhật (dùng được cho hầu hết đồ vật)!'
  },

  // ─────────────────────────────────────────────
  // 12. School / Class (学校)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-12',
    title: 'Trường học',
    titleJp: '学校',
    level: 'N5',
    situation: 'Ngày đầu tiên đến lớp học tiếng Nhật, nói chuyện với bạn cùng lớp',
    patterns: [
      {
        japanese: 'せんせい、しつもんが あります。',
        kana: 'せんせい、しつもんが あります。',
        vietnamese: 'Thưa thầy/cô, em có câu hỏi.',
        memoryTip:
          'Nhớ: "sensei" = thầy/cô giáo. "Sen" (先) = trước, "sei" (生) = sinh. Người "sinh ra trước" = người dẫn đường = thầy cô! "Shitsumon" = câu hỏi → "sít-su-mon" → "xít xịt hỏi suốt!"'
      },
      {
        japanese: 'じゅぎょうは なんじから ですか。',
        kana: 'じゅぎょうは なんじから ですか。',
        vietnamese: 'Tiết học bắt đầu mấy giờ?',
        memoryTip:
          'Nhớ: "jugyou" = tiết học/bài giảng. "Ju" (授) = trao, "gyou" (業) = nghiệp. Hán Việt "thụ nghiệp" → nhận bài học! Nghe như "dìu-giâu" → thầy dìu dắt học sinh giàu kiến thức!'
      },
      {
        japanese: 'にほんごは たのしいです。',
        kana: 'にほんごは たのしいです。',
        vietnamese: 'Tiếng Nhật thú vị.',
        memoryTip:
          'Nhớ: "tanoshii" = vui/thú vị. Nghe như "ta-no-shii" → "ta nó sì (thích)" → ta và nó đều thích = vui! Tính từ -i, đuôi thay đổi: tanoshikunai (không vui), tanoshikatta (đã vui).'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Linh)',
        japanese: 'すみません、にほんごの じゅぎょうは どこですか。',
        kana: 'すみません、にほんごの じゅぎょうは どこですか。',
        vietnamese: 'Xin lỗi, lớp tiếng Nhật ở đâu ạ?'
      },
      {
        speaker: 'B (Gakusei)',
        japanese: 'さんがいの 301きょうしつ ですよ。いっしょに いきましょう。',
        kana: 'さんがいの さんまるいちきょうしつ ですよ。いっしょに いきましょう。',
        vietnamese: 'Phòng 301 tầng 3 đấy. Đi cùng nhé.'
      },
      {
        speaker: 'A (Linh)',
        japanese: 'ありがとうございます。じゅぎょうは なんじから ですか。',
        kana: 'ありがとうございます。じゅぎょうは なんじから ですか。',
        vietnamese: 'Cảm ơn ạ. Tiết học bắt đầu mấy giờ?'
      },
      {
        speaker: 'B (Gakusei)',
        japanese: 'くじから じゅうにじまで です。',
        kana: 'くじから じゅうにじまで です。',
        vietnamese: 'Từ 9 giờ đến 12 giờ.'
      },
      {
        speaker: 'A (Linh)',
        japanese: 'せんせいは だれですか。',
        kana: 'せんせいは だれですか。',
        vietnamese: 'Thầy/cô là ai?'
      },
      {
        speaker: 'B (Gakusei)',
        japanese: 'やまもとせんせいです。とても やさしい せんせいですよ。にほんごは たのしいですよ！',
        kana: 'やまもとせんせいです。とても やさしい せんせいですよ。にほんごは たのしいですよ！',
        vietnamese: 'Thầy Yamamoto. Thầy rất hiền đấy. Tiếng Nhật vui lắm!'
      }
    ],
    culturalNote:
      'Trong lớp học Nhật, học sinh đứng dậy cúi chào thầy cô đầu giờ: "きりつ、れい" (kiritsu, rei = đứng dậy, cúi chào). Trước tiết học nói "おねがいします" (xin thầy/cô chỉ dạy), cuối tiết nói "ありがとうございました" (cảm ơn đã dạy). Thầy cô được gọi là "sensei" — chức danh rất được tôn trọng, dùng cả cho bác sĩ và luật sư!'
  },

  // ─────────────────────────────────────────────
  // 13. Phone call (電話)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-13',
    title: 'Gọi điện thoại',
    titleJp: '電話',
    level: 'N5',
    situation: 'Gọi điện đến công ty để tìm người cần gặp',
    patterns: [
      {
        japanese: 'もしもし、〜です。',
        kana: 'もしもし、〜です。',
        vietnamese: 'A-lô, tôi là ~.',
        memoryTip:
          'Nhớ: "moshi moshi" = a-lô (chỉ dùng khi nghe điện thoại). Nguồn gốc từ "mousu" (nói) → "moushimasu, moushimasu" → rút gọn thành "moshi moshi". Nghĩ: "mò sì mò sì" → mò mẫm bắt máy!'
      },
      {
        japanese: '〜さんは いらっしゃいますか。',
        kana: '〜さんは いらっしゃいますか。',
        vietnamese: '~ có ở đó không ạ? (kính ngữ)',
        memoryTip:
          'Nhớ: "irasshaimasu" = có mặt/ở đây (kính ngữ của "imasu"). Rất lịch sự, dùng khi gọi điện hỏi thăm. Nghe như "i-rát-shai-masu" → "ì rạt sai ma sứ" = ông ấy đang ở không?'
      },
      {
        japanese: 'すみません、でんわばんごうを おねがいします。',
        kana: 'すみません、でんわばんごうを おねがいします。',
        vietnamese: 'Xin lỗi, cho tôi số điện thoại.',
        memoryTip:
          'Nhớ: "denwa" = điện thoại ("den" = điện, "wa" = nói). "Bangou" = số. Hán Việt: "điện thoại" = nói bằng điện, và "番号" = "phiên hiệu" = con số!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Phong)',
        japanese: 'もしもし、ABCかいしゃですか。',
        kana: 'もしもし、えーびーしーかいしゃですか。',
        vietnamese: 'A-lô, công ty ABC phải không ạ?'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい、ABCかいしゃ です。',
        kana: 'はい、えーびーしーかいしゃ です。',
        vietnamese: 'Vâng, đây là công ty ABC.'
      },
      {
        speaker: 'A (Phong)',
        japanese: 'たなかさんは いらっしゃいますか。',
        kana: 'たなかさんは いらっしゃいますか。',
        vietnamese: 'Anh Tanaka có ở đó không ạ?'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'すみません、たなかは いま でかけています。',
        kana: 'すみません、たなかは いま でかけています。',
        vietnamese: 'Xin lỗi, Tanaka hiện đang ra ngoài.'
      },
      {
        speaker: 'A (Phong)',
        japanese: 'そうですか。なんじに もどりますか。',
        kana: 'そうですか。なんじに もどりますか。',
        vietnamese: 'Vậy ạ. Mấy giờ anh ấy về?'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'さんじごろ もどります。でんわばんごうを おねがいします。',
        kana: 'さんじごろ もどります。でんわばんごうを おねがいします。',
        vietnamese: 'Khoảng 3 giờ sẽ về. Cho tôi số điện thoại ạ.'
      }
    ],
    culturalNote:
      'Khi nghe điện thoại ở Nhật, luôn bắt đầu bằng "もしもし". Nhưng trong công ty, nhân viên thường nói "はい、〜会社です" (vâng, đây là công ty ~) thay vì "moshi moshi". Khi người cần gặp vắng mặt, sẽ hỏi "伝言をお願いできますか" (có thể nhờ nhắn lại không?). Lưu ý: nói "san" khi gọi tên người ngoài công ty, nhưng KHÔNG dùng "san" cho đồng nghiệp mình khi nói với khách!'
  },

  // ─────────────────────────────────────────────
  // 14. At the bank (銀行)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-14',
    title: 'Tại ngân hàng',
    titleJp: '銀行',
    level: 'N5',
    situation: 'Đổi tiền và mở tài khoản tại ngân hàng Nhật',
    patterns: [
      {
        japanese: 'りょうがえ を おねがいします。',
        kana: 'りょうがえ を おねがいします。',
        vietnamese: 'Cho tôi đổi tiền.',
        memoryTip:
          'Nhớ: "ryougae" = đổi tiền. "Ryou" = hai bên, "gae/kae" = đổi. Nghe như "riêu ga ê" → "riêu (tiền) ga (nhà ga) ê (hết)" → hết tiền ở nhà ga, phải đổi thêm!'
      },
      {
        japanese: 'こうざを つくりたいです。',
        kana: 'こうざを つくりたいです。',
        vietnamese: 'Tôi muốn mở tài khoản.',
        memoryTip:
          'Nhớ: "kouza" = tài khoản. "Kou" (口) = miệng/cửa, "za" (座) = chỗ ngồi. Hán Việt "khẩu tọa" → cái "cửa" để tiền "ngồi"! "Tsukuritai" = muốn tạo/mở.'
      },
      {
        japanese: 'おかねを おろしたいです。',
        kana: 'おかねを おろしたいです。',
        vietnamese: 'Tôi muốn rút tiền.',
        memoryTip:
          'Nhớ: "okane" = tiền. "O" = kính ngữ, "kane" (金) = vàng/tiền. Hán Việt "kim" → tiền! "Oroshitai" = muốn rút (nghĩa gốc: hạ xuống). Tiền "rớt" xuống từ tài khoản vào tay mình!'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Khách - Thanh)',
        japanese: 'すみません、りょうがえ を おねがいします。',
        kana: 'すみません、りょうがえ を おねがいします。',
        vietnamese: 'Xin lỗi, cho tôi đổi tiền ạ.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい。なにを えんに かえますか。',
        kana: 'はい。なにを えんに かえますか。',
        vietnamese: 'Vâng. Đổi gì sang yên ạ?'
      },
      {
        speaker: 'A (Khách - Thanh)',
        japanese: 'ドルを えんに おねがいします。ひゃくドルです。',
        kana: 'どるを えんに おねがいします。ひゃくどるです。',
        vietnamese: 'Đổi đô-la sang yên ạ. 100 đô.'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'はい、パスポートを みせてください。',
        kana: 'はい、ぱすぽーとを みせてください。',
        vietnamese: 'Vâng, cho tôi xem hộ chiếu ạ.'
      },
      {
        speaker: 'A (Khách - Thanh)',
        japanese: 'はい、どうぞ。こうざも つくりたいですが…',
        kana: 'はい、どうぞ。こうざも つくりたいですが…',
        vietnamese: 'Vâng, mời ạ. Tôi cũng muốn mở tài khoản...'
      },
      {
        speaker: 'B (Nhân viên)',
        japanese: 'こうざは こちらの ようしに きにゅうしてください。',
        kana: 'こうざは こちらの ようしに きにゅうしてください。',
        vietnamese: 'Về tài khoản, xin điền vào mẫu đơn này ạ.'
      }
    ],
    culturalNote:
      'Nhật Bản vẫn là xã hội dùng tiền mặt nhiều, dù đang dần chuyển sang cashless. ATM ở bưu điện (ゆうちょ) và konbini (7-Eleven, Lawson) hỗ trợ thẻ quốc tế. Lưu ý: nhiều ATM Nhật ĐÓNG CỬA ban đêm! Mở tài khoản ngân hàng khi là người nước ngoài cần: thẻ cư trú (在留カード), hộ chiếu, và chứng minh địa chỉ. Một số ngân hàng yêu cầu đã ở Nhật ít nhất 6 tháng.'
  },

  // ─────────────────────────────────────────────
  // 15. Apologizing (謝る)
  // ─────────────────────────────────────────────
  {
    id: 'n5-conv-15',
    title: 'Xin lỗi',
    titleJp: '謝る',
    level: 'N5',
    situation: 'Các tình huống cần xin lỗi: đến muộn, làm phiền, mắc lỗi',
    patterns: [
      {
        japanese: 'ごめんなさい。おそくなって すみません。',
        kana: 'ごめんなさい。おそくなって すみません。',
        vietnamese: 'Xin lỗi. Xin lỗi vì đến muộn.',
        memoryTip:
          'Nhớ: "gomen nasai" = xin lỗi (thân mật). "Gomen" nghe như "go-men" → "gỡ mền" → "gỡ tấm mền tội lỗi"! "Osoku natte" = trở nên muộn. "Osoi" = chậm/muộn.'
      },
      {
        japanese: 'すみません、まちがえました。',
        kana: 'すみません、まちがえました。',
        vietnamese: 'Xin lỗi, tôi nhầm rồi.',
        memoryTip:
          'Nhớ: "machigaemashita" = đã nhầm. "Machigaeru" = nhầm lẫn. Nghe như "ma-chi-ga-ê" → "ma chỉ ga ê" → con ma chỉ ga ế khách → chỉ nhầm đường!'
      },
      {
        japanese: 'もうしわけ ありません。',
        kana: 'もうしわけ ありません。',
        vietnamese: 'Vô cùng xin lỗi. (rất trang trọng)',
        memoryTip:
          'Nhớ: "moushiwake arimasen" = không có lời biện hộ. Lịch sự nhất trong các cách xin lỗi. "Moushi" = nói, "wake" = lý do. Nghĩa: không tìm được lý do nào biện minh! Dùng với sếp, khách hàng, người lớn tuổi.'
      }
    ],
    dialogue: [
      {
        speaker: 'A (Nhân viên - Tuấn)',
        japanese: 'すみません、おそくなりました。',
        kana: 'すみません、おそくなりました。',
        vietnamese: 'Xin lỗi, tôi đến muộn rồi.'
      },
      {
        speaker: 'B (Sếp - Sato)',
        japanese: 'きょうは じゅっぷん おそいですよ。',
        kana: 'きょうは じゅっぷん おそいですよ。',
        vietnamese: 'Hôm nay muộn 10 phút đấy.'
      },
      {
        speaker: 'A (Nhân viên - Tuấn)',
        japanese: 'もうしわけ ありません。でんしゃが おくれました。',
        kana: 'もうしわけ ありません。でんしゃが おくれました。',
        vietnamese: 'Vô cùng xin lỗi. Tàu điện bị trễ ạ.'
      },
      {
        speaker: 'B (Sếp - Sato)',
        japanese: 'そうですか。きをつけてください。',
        kana: 'そうですか。きをつけてください。',
        vietnamese: 'Vậy à. Cẩn thận nhé.'
      },
      {
        speaker: 'A (Nhân viên - Tuấn)',
        japanese: 'はい、もう おそくなりません。ほんとうに すみませんでした。',
        kana: 'はい、もう おそくなりません。ほんとうに すみませんでした。',
        vietnamese: 'Vâng, sẽ không muộn nữa. Thực sự xin lỗi ạ.'
      },
      {
        speaker: 'B (Sếp - Sato)',
        japanese: 'わかりました。さ、しごとを はじめましょう。',
        kana: 'わかりました。さ、しごとを はじめましょう。',
        vietnamese: 'Tôi hiểu rồi. Nào, bắt đầu làm việc thôi.'
      }
    ],
    culturalNote:
      'Xin lỗi là một nghệ thuật trong văn hóa Nhật! Có nhiều cấp độ: "gomen/gomen ne" (thân mật, bạn bè), "gomen nasai" (lịch sự vừa), "sumimasen" (lịch sự, đa dụng — vừa xin lỗi vừa cảm ơn), "moushiwake arimasen" (rất trang trọng, dùng trong công việc). Người Nhật thường xin lỗi nhiều hơn cần thiết — đó được coi là phép lịch sự, không phải yếu đuối. Khi xin lỗi nghiêm trọng, họ cúi đầu rất thấp (tới 45° hoặc 90°)!'
  }
];

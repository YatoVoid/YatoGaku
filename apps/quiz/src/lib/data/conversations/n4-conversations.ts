import type { ConversationPattern } from '$lib/types/lesson';

export const N4_CONVERSATIONS: ConversationPattern[] = [
  // ─── 1. Making Plans (約束) ───────────────────────────────────────────
  {
    id: 'n4-conv-01',
    title: 'Lên kế hoạch',
    titleJp: '約束',
    level: 'N4',
    situation: 'Hai đồng nghiệp đang bàn kế hoạch cuối tuần cùng nhau',
    patterns: [
      {
        japanese: '〜ましょうか。',
        kana: '〜ましょうか。',
        vietnamese: 'Chúng ta ~ nhé? (đề nghị cùng làm gì đó)',
        memoryTip:
          'Nhớ: mashō ka = "ma" (mà) + "shō" (show) → "Mà show này hay quá, đi xem nhé?" — dùng khi rủ ai cùng làm gì đó'
      },
      {
        japanese: '〜たいです。',
        kana: '〜たいです。',
        vietnamese: 'Tôi muốn ~ (diễn tả mong muốn)',
        memoryTip:
          'Nhớ: tai = "thái" → "Thái Lan đẹp quá, tôi muốn đi!" — gắn âm "tai" với "muốn làm gì đó"'
      },
      {
        japanese: 'いつがいいですか。',
        kana: 'いつがいいですか。',
        vietnamese: 'Khi nào thì tốt ạ? (hỏi thời gian phù hợp)',
        memoryTip:
          'Nhớ: itsu ga ii = "ít sự" + "gà" + "đi" → "Ít sự bận rộn, gà rảnh lúc nào thì đi?" — hỏi lịch trống'
      }
    ],
    dialogue: [
      {
        speaker: 'たなか',
        japanese: '週末、何かしませんか。',
        kana: 'しゅうまつ、なにかしませんか。',
        vietnamese: 'Cuối tuần, làm gì đó không?'
      },
      {
        speaker: 'リン',
        japanese: 'いいですね。映画を見たいです。',
        kana: 'いいですね。えいがをみたいです。',
        vietnamese: 'Hay đấy. Tôi muốn xem phim.'
      },
      {
        speaker: 'たなか',
        japanese: 'じゃ、いっしょに見ましょうか。いつがいいですか。',
        kana: 'じゃ、いっしょにみましょうか。いつがいいですか。',
        vietnamese: 'Vậy, cùng đi xem nhé? Khi nào thì tốt?'
      },
      {
        speaker: 'リン',
        japanese: '土曜日の午後はどうですか。',
        kana: 'どようびのごごはどうですか。',
        vietnamese: 'Chiều thứ bảy thì sao?'
      },
      {
        speaker: 'たなか',
        japanese: '土曜日の午後ですね。じゃ、二時に駅で会いましょう。',
        kana: 'どようびのごごですね。じゃ、にじにえきであいましょう。',
        vietnamese: 'Chiều thứ bảy nhé. Vậy, gặp nhau ở ga lúc 2 giờ.'
      },
      {
        speaker: 'リン',
        japanese: 'はい、楽しみにしています。',
        kana: 'はい、たのしみにしています。',
        vietnamese: 'Vâng, tôi rất mong chờ.'
      }
    ],
    culturalNote:
      'Người Nhật thường hẹn gặp ở ga tàu vì đây là điểm dễ tìm nhất. Đến đúng giờ (hoặc sớm 5 phút) được coi là phép lịch sự cơ bản — đến muộn dù chỉ vài phút cũng cần xin lỗi.'
  },

  // ─── 2. Asking for Directions (道案内) ────────────────────────────────
  {
    id: 'n4-conv-02',
    title: 'Hỏi đường',
    titleJp: '道案内',
    level: 'N4',
    situation: 'Du khách hỏi đường đến bưu điện trên phố',
    patterns: [
      {
        japanese: '〜はどこですか。',
        kana: '〜はどこですか。',
        vietnamese: '~ ở đâu ạ? (hỏi vị trí)',
        memoryTip:
          'Nhớ: doko = "đô kô" → "Đô thị này kô biết chỗ nào!" — doko luôn đi kèm câu hỏi nơi chốn'
      },
      {
        japanese: '右にまがってください。',
        kana: 'みぎにまがってください。',
        vietnamese: 'Xin hãy rẽ phải.',
        memoryTip:
          'Nhớ: migi = "mi" (mình) + "gi" (gì) → tay phải là tay mình hay viết → "Migi = phải" | hidari = "hi" + "đa" + "ri" → tay trái ít dùng → "Hidari = trái"'
      },
      {
        japanese: 'まっすぐ行ってください。',
        kana: 'まっすぐいってください。',
        vietnamese: 'Xin hãy đi thẳng.',
        memoryTip:
          'Nhớ: massugu = "mát sư gù" → "Nhà sư đi thẳng lưng, không gù" — massugu = thẳng, không rẽ'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: 'すみません、郵便局はどこですか。',
        kana: 'すみません、ゆうびんきょくはどこですか。',
        vietnamese: 'Xin lỗi, bưu điện ở đâu ạ?'
      },
      {
        speaker: 'おじさん',
        japanese: '郵便局ですか。この道をまっすぐ行ってください。',
        kana: 'ゆうびんきょくですか。このみちをまっすぐいってください。',
        vietnamese: 'Bưu điện à? Hãy đi thẳng con đường này.'
      },
      {
        speaker: 'リン',
        japanese: 'まっすぐですね。それから？',
        kana: 'まっすぐですね。それから？',
        vietnamese: 'Đi thẳng nhé. Rồi sao ạ?'
      },
      {
        speaker: 'おじさん',
        japanese: '二つ目の信号を右にまがってください。左に郵便局がありますよ。',
        kana: 'ふたつめのしんごうをみぎにまがってください。ひだりにゆうびんきょくがありますよ。',
        vietnamese: 'Rẽ phải ở đèn giao thông thứ hai. Bưu điện sẽ ở bên trái.'
      },
      {
        speaker: 'リン',
        japanese: 'ここから遠いですか。',
        kana: 'ここからとおいですか。',
        vietnamese: 'Từ đây có xa không ạ?'
      },
      {
        speaker: 'おじさん',
        japanese: 'いいえ、歩いて五分ぐらいですよ。',
        kana: 'いいえ、あるいてごふんぐらいですよ。',
        vietnamese: 'Không, đi bộ khoảng 5 phút thôi.'
      }
    ],
    culturalNote:
      'Khi hỏi đường ở Nhật, hãy bắt đầu bằng "sumimasen" (xin lỗi) để tỏ ý lịch sự trước khi hỏi. Người Nhật thường rất nhiệt tình chỉ đường, đôi khi còn đi cùng bạn đến tận nơi nếu tiện đường.'
  },

  // ─── 3. Describing Experiences (経験) ─────────────────────────────────
  {
    id: 'n4-conv-03',
    title: 'Kể về trải nghiệm',
    titleJp: '経験',
    level: 'N4',
    situation: 'Hai người bạn nói chuyện về những trải nghiệm du lịch ở Nhật',
    patterns: [
      {
        japanese: '〜たことがあります。',
        kana: '〜たことがあります。',
        vietnamese: 'Tôi đã từng ~ (diễn tả kinh nghiệm)',
        memoryTip:
          'Nhớ: ~ta koto ga arimasu = "ta" (đã) + "koto" (việc) + "ga arimasu" (có) → "Có việc đã làm" = đã từng trải qua — giống cấu trúc "have done" trong tiếng Anh'
      },
      {
        japanese: '〜たら、〜。',
        kana: '〜たら、〜。',
        vietnamese: 'Nếu/Khi ~, thì ~ (điều kiện)',
        memoryTip:
          'Nhớ: ~tara = "ta" (đã) + "ra" (ra) → "Làm xong ta ra kết quả" — dùng cho điều kiện: khi A xảy ra thì B theo sau'
      },
      {
        japanese: '〜てみたいです。',
        kana: '〜てみたいです。',
        vietnamese: 'Tôi muốn thử ~ (mong muốn trải nghiệm)',
        memoryTip:
          'Nhớ: ~te mitai = "te" (rồi) + "mitai" (muốn xem) → "Làm rồi xem thử sao" — diễn tả muốn thử nghiệm điều gì mới'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '田中さんは富士山に登ったことがありますか。',
        kana: 'たなかさんはふじさんにのぼったことがありますか。',
        vietnamese: 'Anh Tanaka đã từng leo núi Phú Sĩ chưa?'
      },
      {
        speaker: 'たなか',
        japanese: 'はい、一度あります。去年の夏に登りました。',
        kana: 'はい、いちどあります。きょねんのなつにのぼりました。',
        vietnamese: 'Rồi, một lần. Tôi leo vào mùa hè năm ngoái.'
      },
      {
        speaker: 'リン',
        japanese: 'どうでしたか。',
        kana: 'どうでしたか。',
        vietnamese: 'Thế nào ạ?'
      },
      {
        speaker: 'たなか',
        japanese: '大変でしたが、頂上に着いたら、景色がすばらしかったです。',
        kana: 'たいへんでしたが、ちょうじょうについたら、けしきがすばらしかったです。',
        vietnamese: 'Vất vả lắm, nhưng khi lên đến đỉnh thì cảnh đẹp tuyệt vời.'
      },
      {
        speaker: 'リン',
        japanese: 'いいですね。私も登ってみたいです。',
        kana: 'いいですね。わたしものぼってみたいです。',
        vietnamese: 'Hay quá. Tôi cũng muốn thử leo.'
      },
      {
        speaker: 'たなか',
        japanese: '夏に行ったら、いっしょに行きましょう。',
        kana: 'なつにいったら、いっしょにいきましょう。',
        vietnamese: 'Nếu đi vào mùa hè, cùng đi nhé.'
      }
    ],
    culturalNote:
      'Leo núi Phú Sĩ là trải nghiệm "nhất sinh nhất đại" (一生一代) của nhiều người Nhật. Mùa leo chính thức chỉ kéo dài từ tháng 7 đến giữa tháng 9. Có câu nói nổi tiếng: "Người khôn ngoan leo Phú Sĩ một lần, người ngu ngốc leo hai lần" — nhưng thực tế nhiều người vẫn quay lại!'
  },

  // ─── 4. Giving Reasons (理由) ────────────────────────────────────────
  {
    id: 'n4-conv-04',
    title: 'Đưa ra lý do',
    titleJp: '理由',
    level: 'N4',
    situation: 'Sinh viên giải thích lý do nghỉ học và đến muộn với giáo viên',
    patterns: [
      {
        japanese: '〜から、〜。',
        kana: '〜から、〜。',
        vietnamese: 'Vì ~ nên ~ (lý do, dùng trong văn nói)',
        memoryTip:
          'Nhớ: kara = "ca ra" → "Ca ra lý do" — kara đặt sau nguyên nhân, nối với kết quả. Dùng thoải mái trong hội thoại thường ngày'
      },
      {
        japanese: '〜ので、〜。',
        kana: '〜ので、〜。',
        vietnamese: 'Vì ~ nên ~ (lý do, lịch sự hơn ~から)',
        memoryTip:
          'Nhớ: node = "nô đê" → lịch sự như "quý nô đê" (quý tộc) — node lịch sự hơn kara, dùng với sếp/giáo viên/người lớn tuổi'
      },
      {
        japanese: '〜て、〜。',
        kana: '〜て、〜。',
        vietnamese: '~ rồi ~ / Vì ~ nên ~ (nối nguyên nhân-kết quả)',
        memoryTip:
          'Nhớ: dạng ~te nối câu = "tê" chân → "Tê chân rồi ngã" — nguyên nhân (tê) dẫn đến kết quả (ngã). Nhẹ nhàng hơn kara/node'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '先生、昨日休んですみませんでした。',
        kana: 'せんせい、きのうやすんですみませんでした。',
        vietnamese: 'Thưa thầy, xin lỗi vì hôm qua em nghỉ học.'
      },
      {
        speaker: 'せんせい',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'Có chuyện gì vậy?'
      },
      {
        speaker: 'リン',
        japanese: '熱があったので、病院に行きました。',
        kana: 'ねつがあったので、びょういんにいきました。',
        vietnamese: 'Vì bị sốt nên em đã đi bệnh viện.'
      },
      {
        speaker: 'せんせい',
        japanese: 'そうですか。今日は大丈夫ですか。',
        kana: 'そうですか。きょうはだいじょうぶですか。',
        vietnamese: 'Vậy à. Hôm nay ổn chưa?'
      },
      {
        speaker: 'リン',
        japanese: 'はい、薬を飲んだから、もう元気です。でも今朝バスが遅れて、遅刻してしまいました。',
        kana: 'はい、くすりをのんだから、もうげんきです。でもけさバスがおくれて、ちこくしてしまいました。',
        vietnamese: 'Vâng, vì đã uống thuốc nên em khỏe rồi. Nhưng sáng nay xe buýt bị trễ nên em đã đến muộn mất.'
      },
      {
        speaker: 'せんせい',
        japanese: '分かりました。体に気をつけてくださいね。',
        kana: 'わかりました。からだにきをつけてくださいね。',
        vietnamese: 'Thầy hiểu rồi. Hãy giữ gìn sức khỏe nhé.'
      }
    ],
    culturalNote:
      'Trong văn hóa Nhật, khi giải thích lý do với người trên (thầy/cô, sếp), nên dùng "~node" thay vì "~kara" vì node lịch sự hơn. Ngoài ra, việc xin lỗi trước rồi mới giải thích lý do sau là quy tắc quan trọng — thể hiện sự tôn trọng và trách nhiệm.'
  },

  // ─── 5. At the Hospital (病院) ────────────────────────────────────────
  {
    id: 'n4-conv-05',
    title: 'Ở bệnh viện',
    titleJp: '病院',
    level: 'N4',
    situation: 'Bệnh nhân đến khám bác sĩ vì bị đau bụng và đau đầu',
    patterns: [
      {
        japanese: '頭が痛いです。/ おなかが痛いです。',
        kana: 'あたまがいたいです。/ おなかがいたいです。',
        vietnamese: 'Đau đầu. / Đau bụng. (mô tả triệu chứng)',
        memoryTip:
          'Nhớ: itai = "i tai" → "Ì tai, đau quá!" — itai là đau. Ghép với bộ phận: atama (đầu) ga itai = đau đầu, onaka (bụng) ga itai = đau bụng'
      },
      {
        japanese: '薬を飲んでください。',
        kana: 'くすりをのんでください。',
        vietnamese: 'Xin hãy uống thuốc.',
        memoryTip:
          'Nhớ: kusuri = "cú sư ri" → "Cú sư tử uống thuốc ri ri (rủ rỉ)" — kusuri = thuốc. Nonde kudasai = hãy uống (lời chỉ dẫn từ bác sĩ)'
      },
      {
        japanese: 'いつから痛いですか。',
        kana: 'いつからいたいですか。',
        vietnamese: 'Đau từ khi nào ạ? (bác sĩ hỏi bệnh nhân)',
        memoryTip:
          'Nhớ: itsu kara = "ít sự" + "ca ra" → "Ít sự đau ca ra từ lúc nào?" — itsu kara hỏi thời điểm bắt đầu'
      }
    ],
    dialogue: [
      {
        speaker: 'いしゃ',
        japanese: 'どうしましたか。',
        kana: 'どうしましたか。',
        vietnamese: 'Bạn bị làm sao?'
      },
      {
        speaker: 'リン',
        japanese: '昨日からおなかが痛いです。頭も少し痛いです。',
        kana: 'きのうからおなかがいたいです。あたまもすこしいたいです。',
        vietnamese: 'Từ hôm qua em bị đau bụng. Đầu cũng hơi đau.'
      },
      {
        speaker: 'いしゃ',
        japanese: '熱はありますか。',
        kana: 'ねつはありますか。',
        vietnamese: 'Có bị sốt không?'
      },
      {
        speaker: 'リン',
        japanese: 'はい、今朝三十八度ありました。',
        kana: 'はい、けさ さんじゅうはちど ありました。',
        vietnamese: 'Dạ có, sáng nay 38 độ ạ.'
      },
      {
        speaker: 'いしゃ',
        japanese: '分かりました。この薬を一日三回、食後に飲んでください。',
        kana: 'わかりました。このくすりをいちにちさんかい、しょくごにのんでください。',
        vietnamese: 'Tôi hiểu rồi. Hãy uống thuốc này ngày 3 lần, sau bữa ăn.'
      },
      {
        speaker: 'リン',
        japanese: 'はい、分かりました。ありがとうございます。',
        kana: 'はい、わかりました。ありがとうございます。',
        vietnamese: 'Vâng, em hiểu rồi. Cảm ơn bác sĩ ạ.'
      }
    ],
    culturalNote:
      'Ở Nhật, khi đi khám bệnh lần đầu tại một phòng khám, bạn cần điền "monshin-hyō" (問診票 — phiếu hỏi bệnh). Hệ thống y tế Nhật yêu cầu thẻ bảo hiểm sức khỏe (hokenshō), bao gồm cả du học sinh. Thuốc thường được kê ở phòng khám riêng (yakkyoku — nhà thuốc), không phải tại bệnh viện.'
  },

  // ─── 6. Part-time Job (アルバイト) ────────────────────────────────────
  {
    id: 'n4-conv-06',
    title: 'Làm thêm',
    titleJp: 'アルバイト',
    level: 'N4',
    situation: 'Hai du học sinh nói chuyện về công việc làm thêm tại nhà hàng',
    patterns: [
      {
        japanese: 'アルバイトをしています。',
        kana: 'あるばいとをしています。',
        vietnamese: 'Tôi đang làm thêm. (diễn tả công việc hiện tại)',
        memoryTip:
          'Nhớ: arubaito = từ tiếng Đức "Arbeit" (công việc) → người Nhật mượn từ này để chỉ việc làm thêm bán thời gian. Ngắn gọn gọi là "baito"'
      },
      {
        japanese: 'シフトに入る。',
        kana: 'しふとにはいる。',
        vietnamese: 'Vào ca làm. (đăng ký ca)',
        memoryTip:
          'Nhớ: shifuto = "shift" tiếng Anh → ca làm việc. "Shifuto ni hairu" = nhảy vào ca — tưởng tượng nhảy vào vòng xoay ca làm'
      },
      {
        japanese: '給料はいくらですか。',
        kana: 'きゅうりょうはいくらですか。',
        vietnamese: 'Lương bao nhiêu ạ? (hỏi mức lương)',
        memoryTip:
          'Nhớ: kyuuryou = "cứu liệu" → "Cứu liệu tài chính = lương" — kyuuryou là tiền lương, ikura = bao nhiêu'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '最近アルバイトを始めたんですよ。',
        kana: 'さいきんあるばいとをはじめたんですよ。',
        vietnamese: 'Gần đây mình bắt đầu làm thêm rồi đấy.'
      },
      {
        speaker: 'マイ',
        japanese: 'へえ、どこで働いているんですか。',
        kana: 'へえ、どこではたらいているんですか。',
        vietnamese: 'Ồ, làm ở đâu thế?'
      },
      {
        speaker: 'リン',
        japanese: '駅の近くのレストランです。週に三回シフトに入っています。',
        kana: 'えきのちかくのれすとらんです。しゅうにさんかいしふとにはいっています。',
        vietnamese: 'Nhà hàng gần ga. Mình vào ca 3 lần một tuần.'
      },
      {
        speaker: 'マイ',
        japanese: '給料はいくらですか。',
        kana: 'きゅうりょうはいくらですか。',
        vietnamese: 'Lương bao nhiêu?'
      },
      {
        speaker: 'リン',
        japanese: '時給千百円です。まだ少ないですが、勉強になります。',
        kana: 'じきゅうせんひゃくえんです。まだすくないですが、べんきょうになります。',
        vietnamese: 'Lương giờ 1100 yên. Còn ít nhưng được học hỏi nhiều.'
      },
      {
        speaker: 'マイ',
        japanese: '大変じゃないですか。授業もあるのに。',
        kana: 'たいへんじゃないですか。じゅぎょうもあるのに。',
        vietnamese: 'Không vất vả sao? Còn có cả lớp học nữa mà.'
      }
    ],
    culturalNote:
      'Du học sinh ở Nhật được phép làm thêm tối đa 28 giờ/tuần trong kỳ học và 40 giờ/tuần trong kỳ nghỉ. Lương tối thiểu khác nhau theo từng tỉnh — Tokyo cao nhất (~1113 yên/giờ năm 2024). Từ "baito" (バイト) được dùng phổ biến hơn "arubaito" trong hội thoại.'
  },

  // ─── 7. Travel Planning (旅行) ───────────────────────────────────────
  {
    id: 'n4-conv-07',
    title: 'Lên kế hoạch du lịch',
    titleJp: '旅行',
    level: 'N4',
    situation: 'Hai người bạn lên kế hoạch chuyến đi Kyoto vào kỳ nghỉ',
    patterns: [
      {
        japanese: '予約をしたいです。',
        kana: 'よやくをしたいです。',
        vietnamese: 'Tôi muốn đặt chỗ. (đặt phòng/vé)',
        memoryTip:
          'Nhớ: yoyaku = "yô yá cú" → "Yô, đặt cú này đi!" — yoyaku = đặt trước (phòng khách sạn, nhà hàng, vé)'
      },
      {
        japanese: '切符を買います。',
        kana: 'きっぷをかいます。',
        vietnamese: 'Mua vé. (vé tàu/xe buýt)',
        memoryTip:
          'Nhớ: kippu = "kíp pú" → "Kịp mua vé pú (phút chót)" — kippu = vé (tàu, xe buýt). Khác với chiketto (チケット) dùng cho vé xem phim/concert'
      },
      {
        japanese: '旅館に泊まりたいです。',
        kana: 'りょかんにとまりたいです。',
        vietnamese: 'Tôi muốn ở nhà trọ kiểu Nhật.',
        memoryTip:
          'Nhớ: ryokan = "liệu quán" (Hán Việt: lữ quán) → nhà trọ truyền thống Nhật, có futon, onsen, ăn kaiseki. Khác "hoteru" (hotel) phong cách phương Tây'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '夏休みに京都に行きたいんですが。',
        kana: 'なつやすみにきょうとにいきたいんですが。',
        vietnamese: 'Kỳ nghỉ hè mình muốn đi Kyoto.'
      },
      {
        speaker: 'たなか',
        japanese: 'いいですね。新幹線の切符はもう買いましたか。',
        kana: 'いいですね。しんかんせんのきっぷはもうかいましたか。',
        vietnamese: 'Hay đấy. Đã mua vé shinkansen chưa?'
      },
      {
        speaker: 'リン',
        japanese: 'まだです。いくらぐらいかかりますか。',
        kana: 'まだです。いくらぐらいかかりますか。',
        vietnamese: 'Chưa. Tốn khoảng bao nhiêu?'
      },
      {
        speaker: 'たなか',
        japanese: '東京から片道約一万四千円です。旅館の予約はしましたか。',
        kana: 'とうきょうからかたみちやくいちまんよんせんえんです。りょかんのよやくはしましたか。',
        vietnamese: 'Từ Tokyo một chiều khoảng 14,000 yên. Đã đặt ryokan chưa?'
      },
      {
        speaker: 'リン',
        japanese: '旅館に泊まりたいですが、どうやって予約しますか。',
        kana: 'りょかんにとまりたいですが、どうやってよやくしますか。',
        vietnamese: 'Muốn ở ryokan, nhưng đặt bằng cách nào?'
      },
      {
        speaker: 'たなか',
        japanese: 'インターネットで予約できますよ。手伝いましょうか。',
        kana: 'いんたーねっとでよやくできますよ。てつだいましょうか。',
        vietnamese: 'Đặt qua internet được. Để mình giúp nhé?'
      }
    ],
    culturalNote:
      'Ryokan (旅館) là nhà trọ truyền thống Nhật với phòng tatami, futon, và thường bao gồm bữa tối kaiseki. Khách được mặc yukata và tắm onsen. Khi đặt ryokan nên đặt sớm vào mùa cao điểm (hoa anh đào tháng 4, lá đỏ tháng 11). JR Pass là lựa chọn tiết kiệm cho du khách nước ngoài.'
  },

  // ─── 8. Sports/Exercise (スポーツ) ───────────────────────────────────
  {
    id: 'n4-conv-08',
    title: 'Thể thao',
    titleJp: 'スポーツ',
    level: 'N4',
    situation: 'Hai người bạn nói về sở thích thể thao và rủ nhau đi tập',
    patterns: [
      {
        japanese: '運動をしています。',
        kana: 'うんどうをしています。',
        vietnamese: 'Tôi đang tập thể dục. (thói quen hiện tại)',
        memoryTip:
          'Nhớ: undou = "ùn đồ" → "Ùn đồ thể thao ra tập" — undou = vận động, tập thể dục. Undou suru = tập luyện'
      },
      {
        japanese: '野球が好きです。',
        kana: 'やきゅうがすきです。',
        vietnamese: 'Tôi thích bóng chày.',
        memoryTip:
          'Nhớ: yakyuu = "dã cầu" (Hán Việt) → bóng chày. Ya (dã = đồng) + kyuu (cầu = bóng) = môn bóng trên đồng cỏ. Bóng chày rất phổ biến ở Nhật!'
      },
      {
        japanese: '泳ぐことができます。',
        kana: 'およぐことができます。',
        vietnamese: 'Tôi có thể bơi. (diễn tả khả năng)',
        memoryTip:
          'Nhớ: oyogu = "ô yô gù" → "Ô, yô (bơi) lội gù lưng" — oyogu = bơi. Koto ga dekimasu = có thể làm được (khả năng)'
      }
    ],
    dialogue: [
      {
        speaker: 'たなか',
        japanese: 'リンさん、何かスポーツをしていますか。',
        kana: 'りんさん、なにかすぽーつをしていますか。',
        vietnamese: 'Lin, bạn có chơi môn thể thao nào không?'
      },
      {
        speaker: 'リン',
        japanese: '毎朝ジョギングをしています。田中さんは？',
        kana: 'まいあさじょぎんぐをしています。たなかさんは？',
        vietnamese: 'Mình chạy bộ mỗi sáng. Còn Tanaka?'
      },
      {
        speaker: 'たなか',
        japanese: '僕は野球が好きです。週末にチームで練習しています。',
        kana: 'ぼくはやきゅうがすきです。しゅうまつにちーむでれんしゅうしています。',
        vietnamese: 'Mình thích bóng chày. Cuối tuần tập với đội.'
      },
      {
        speaker: 'リン',
        japanese: 'いいですね。泳ぐこともできますか。',
        kana: 'いいですね。およぐこともできますか。',
        vietnamese: 'Hay quá. Bạn cũng biết bơi không?'
      },
      {
        speaker: 'たなか',
        japanese: 'はい、少しできます。今度いっしょにプールに行きませんか。',
        kana: 'はい、すこしできます。こんどいっしょにぷーるにいきませんか。',
        vietnamese: 'Có, bơi được chút. Lần tới cùng đi bể bơi không?'
      },
      {
        speaker: 'リン',
        japanese: 'ぜひ！運動した後、おいしいものを食べましょう。',
        kana: 'ぜひ！うんどうしたあと、おいしいものをたべましょう。',
        vietnamese: 'Chắc chắn rồi! Tập xong đi ăn ngon nhé.'
      }
    ],
    culturalNote:
      'Bóng chày (yakyuu) là môn thể thao phổ biến nhất ở Nhật, được gọi là "quốc dân thể thao". Giải Koshien (甲子園) dành cho học sinh cấp 3 thu hút hàng triệu người xem mỗi năm. Ngoài ra, sumo, judo và bóng đá (sakkaa) cũng rất được yêu thích.'
  },

  // ─── 9. Moving House (引っ越し) ──────────────────────────────────────
  {
    id: 'n4-conv-09',
    title: 'Chuyển nhà',
    titleJp: '引っ越し',
    level: 'N4',
    situation: 'Sinh viên chuẩn bị chuyển đến căn hộ mới và nhờ bạn giúp đỡ',
    patterns: [
      {
        japanese: '引っ越しをします。',
        kana: 'ひっこしをします。',
        vietnamese: 'Tôi sẽ chuyển nhà.',
        memoryTip:
          'Nhớ: hikkoshi = "híc cô shi" → "Híc, cô ấy dọn đi mất rồi!" — hikkoshi = chuyển nhà, từ động từ hikkosu (kéo đồ đi)'
      },
      {
        japanese: '荷物が多いです。',
        kana: 'にもつがおおいです。',
        vietnamese: 'Hành lý/đồ đạc nhiều. (mô tả số lượng)',
        memoryTip:
          'Nhớ: nimotsu = "ni mốt sư" → "Ni (hai) mốt (một) = 21 kiện hành lý — nhiều quá!" — nimotsu = hành lý, đồ đạc'
      },
      {
        japanese: 'アパートを探しています。',
        kana: 'あぱーとをさがしています。',
        vietnamese: 'Tôi đang tìm căn hộ.',
        memoryTip:
          'Nhớ: apaato = "apartment" tiếng Anh → căn hộ (thường 2 tầng, bằng gỗ). Khác "manshon" (マンション) = chung cư cao tầng bê tông — đừng nhầm với "mansion" tiếng Anh!'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '来月引っ越しをするんです。',
        kana: 'らいげつひっこしをするんです。',
        vietnamese: 'Tháng sau mình sẽ chuyển nhà.'
      },
      {
        speaker: 'たなか',
        japanese: 'そうですか。新しいアパートはもう見つかりましたか。',
        kana: 'そうですか。あたらしいあぱーとはもうみつかりましたか。',
        vietnamese: 'Vậy à? Đã tìm được căn hộ mới chưa?'
      },
      {
        speaker: 'リン',
        japanese: 'はい、駅から歩いて十分のところに見つけました。',
        kana: 'はい、えきからあるいてじゅっぷんのところにみつけました。',
        vietnamese: 'Rồi, tìm được chỗ cách ga 10 phút đi bộ.'
      },
      {
        speaker: 'たなか',
        japanese: '荷物は多いですか。手伝いましょうか。',
        kana: 'にもつはおおいですか。てつだいましょうか。',
        vietnamese: 'Đồ đạc nhiều không? Để mình giúp nhé?'
      },
      {
        speaker: 'リン',
        japanese: '本当ですか。荷物が多くて困っているんです。',
        kana: 'ほんとうですか。にもつがおおくてこまっているんです。',
        vietnamese: 'Thật sao? Đồ nhiều quá đang khổ sở lắm.'
      },
      {
        speaker: 'たなか',
        japanese: '大丈夫ですよ。日曜日に手伝いに行きますね。',
        kana: 'だいじょうぶですよ。にちようびにてつだいにいきますね。',
        vietnamese: 'Không sao đâu. Chủ nhật mình qua giúp nhé.'
      }
    ],
    culturalNote:
      'Ở Nhật, khi chuyển nhà thường phải trả "reikin" (礼金 — tiền cảm ơn cho chủ nhà, không hoàn lại) và "shikikin" (敷金 — tiền đặt cọc). Mỗi khoản thường bằng 1-2 tháng tiền thuê. Ngoài ra, phong tục "hikkoshi soba" — tặng mì soba cho hàng xóm mới — vẫn còn phổ biến ở một số vùng.'
  },

  // ─── 10. Birthday Party (誕生日) ─────────────────────────────────────
  {
    id: 'n4-conv-10',
    title: 'Tiệc sinh nhật',
    titleJp: '誕生日',
    level: 'N4',
    situation: 'Nhóm bạn lên kế hoạch tổ chức sinh nhật bất ngờ cho bạn',
    patterns: [
      {
        japanese: 'お誕生日おめでとうございます。',
        kana: 'おたんじょうびおめでとうございます。',
        vietnamese: 'Chúc mừng sinh nhật! (lịch sự)',
        memoryTip:
          'Nhớ: otanjoubi = "ô tản giò bi" → "Ô, tản bộ mua giò bì mừng sinh nhật!" — otanjoubi = sinh nhật. Omedetou = chúc mừng'
      },
      {
        japanese: 'プレゼントを買いました。',
        kana: 'ぷれぜんとをかいました。',
        vietnamese: 'Tôi đã mua quà.',
        memoryTip:
          'Nhớ: purezento = "present" tiếng Anh → quà tặng. Ở Nhật, tặng quà rất coi trọng — cách gói quà (tsutsumi) cũng quan trọng như món quà!'
      },
      {
        japanese: 'ケーキを作りましょう。',
        kana: 'けーきをつくりましょう。',
        vietnamese: 'Hãy cùng làm bánh nhé.',
        memoryTip:
          'Nhớ: keeki = "cake" tiếng Anh → bánh kem. Tsukurimashou = cùng làm nhé — "mashou" ở đây là "cùng nhau làm" (đề nghị)'
      }
    ],
    dialogue: [
      {
        speaker: 'マイ',
        japanese: '来週の土曜日はリンさんの誕生日ですよ。',
        kana: 'らいしゅうのどようびはりんさんのたんじょうびですよ。',
        vietnamese: 'Thứ bảy tuần sau là sinh nhật Lin đấy.'
      },
      {
        speaker: 'たなか',
        japanese: 'サプライズパーティーをしませんか。',
        kana: 'さぷらいずぱーてぃーをしませんか。',
        vietnamese: 'Tổ chức tiệc bất ngờ không?'
      },
      {
        speaker: 'マイ',
        japanese: 'いいですね！私はケーキを作ります。',
        kana: 'いいですね！わたしはけーきをつくります。',
        vietnamese: 'Hay đấy! Mình sẽ làm bánh.'
      },
      {
        speaker: 'たなか',
        japanese: 'じゃ、僕はプレゼントを買いに行きます。何がいいかな。',
        kana: 'じゃ、ぼくはぷれぜんとをかいにいきます。なにがいいかな。',
        vietnamese: 'Vậy mình đi mua quà. Mua gì hay nhỉ?'
      },
      {
        speaker: 'マイ',
        japanese: 'リンさんは日本語の本が好きだから、辞書はどうですか。',
        kana: 'りんさんはにほんごのほんがすきだから、じしょはどうですか。',
        vietnamese: 'Lin thích sách tiếng Nhật, tặng từ điển thì sao?'
      },
      {
        speaker: 'たなか',
        japanese: 'いいアイデアですね。じゃ、土曜日の五時にリンさんの家で会いましょう。',
        kana: 'いいあいであですね。じゃ、どようびのごじにりんさんのいえであいましょう。',
        vietnamese: 'Ý hay đấy. Vậy thứ bảy 5 giờ gặp ở nhà Lin nhé.'
      }
    ],
    culturalNote:
      'Ở Nhật, người tổ chức sinh nhật thường là bạn bè chứ không phải người được chúc mừng. Trong trường học, cả lớp sẽ hát "Happy Birthday" bằng tiếng Anh. Bánh kem Nhật (keeki) thường nhẹ và ít ngọt hơn bánh phương Tây, phổ biến nhất là Strawberry Shortcake.'
  },

  // ─── 11. Studying Abroad (留学) ──────────────────────────────────────
  {
    id: 'n4-conv-11',
    title: 'Du học',
    titleJp: '留学',
    level: 'N4',
    situation: 'Sinh viên chia sẻ về trải nghiệm du học và sự khác biệt văn hóa',
    patterns: [
      {
        japanese: '留学しています。',
        kana: 'りゅうがくしています。',
        vietnamese: 'Tôi đang du học.',
        memoryTip:
          'Nhớ: ryuugaku = "lưu học" (Hán Việt) → du học. Ryuu (lưu = ở lại) + gaku (học) = ở lại nước khác để học. Giống "lưu học sinh" trong tiếng Việt!'
      },
      {
        japanese: '外国語を勉強しています。',
        kana: 'がいこくごをべんきょうしています。',
        vietnamese: 'Tôi đang học ngoại ngữ.',
        memoryTip:
          'Nhớ: gaikokugo = "ngoại quốc ngữ" (Hán Việt) → tiếng nước ngoài. Gai (ngoại) + koku (quốc) + go (ngữ) = ngoại ngữ — quen thuộc với người Việt!'
      },
      {
        japanese: '文化が違います。',
        kana: 'ぶんかがちがいます。',
        vietnamese: 'Văn hóa khác nhau.',
        memoryTip:
          'Nhớ: bunka = "văn hóa" (Hán Việt). Chigaimasu = "chi gai mà sư" → "Chi (chỉ) gai (khác) mà sư (sự)" = khác nhau — dùng để nói sự khác biệt'
      }
    ],
    dialogue: [
      {
        speaker: 'せんせい',
        japanese: 'リンさんはどうして日本に留学しましたか。',
        kana: 'りんさんはどうしてにほんにりゅうがくしましたか。',
        vietnamese: 'Lin, tại sao bạn du học Nhật Bản?'
      },
      {
        speaker: 'リン',
        japanese: '日本語と日本の文化に興味があったからです。',
        kana: 'にほんごとにほんのぶんかにきょうみがあったからです。',
        vietnamese: 'Vì em thích tiếng Nhật và văn hóa Nhật ạ.'
      },
      {
        speaker: 'せんせい',
        japanese: '日本の生活はどうですか。',
        kana: 'にほんのせいかつはどうですか。',
        vietnamese: 'Cuộc sống ở Nhật thế nào?'
      },
      {
        speaker: 'リン',
        japanese: '楽しいですが、文化が違うので、時々大変です。',
        kana: 'たのしいですが、ぶんかがちがうので、ときどきたいへんです。',
        vietnamese: 'Vui nhưng văn hóa khác nên thỉnh thoảng vất vả.'
      },
      {
        speaker: 'せんせい',
        japanese: 'どんなところが違いますか。',
        kana: 'どんなところがちがいますか。',
        vietnamese: 'Khác ở điểm nào?'
      },
      {
        speaker: 'リン',
        japanese: 'ゴミの分別が難しいです。ベトナムではそんなに分けませんから。',
        kana: 'ごみのぶんべつがむずかしいです。べとなむではそんなにわけませんから。',
        vietnamese: 'Phân loại rác khó lắm. Ở Việt Nam không phân loại nhiều thế.'
      }
    ],
    culturalNote:
      'Phân loại rác (gomi no bunbetsu) là một trong những "cú sốc văn hóa" lớn nhất với du học sinh tại Nhật. Rác được chia thành: rác cháy (moeru gomi), rác không cháy (moenai gomi), rác tái chế (shigen gomi), và rác cỡ lớn (sodai gomi). Mỗi loại có ngày thu gom riêng.'
  },

  // ─── 12. Cooking (料理) ──────────────────────────────────────────────
  {
    id: 'n4-conv-12',
    title: 'Nấu ăn',
    titleJp: '料理',
    level: 'N4',
    situation: 'Hai người bạn nấu ăn cùng nhau tại nhà, thử làm món Nhật',
    patterns: [
      {
        japanese: '料理を作ります。',
        kana: 'りょうりをつくります。',
        vietnamese: 'Tôi nấu ăn / làm món ăn.',
        memoryTip:
          'Nhớ: ryouri = "liệu lý" (Hán Việt) → nấu ăn, món ăn. Tsukurimasu = làm, tạo ra. "Ryouri wo tsukuru" = chế biến món ăn — dùng "tsukuru" chứ không dùng "suru"'
      },
      {
        japanese: 'おいしいです。/ おいしくないです。',
        kana: 'おいしいです。/ おいしくないです。',
        vietnamese: 'Ngon. / Không ngon.',
        memoryTip:
          'Nhớ: oishii = "ôi shi" → "Ôi, ngon shi (thế)!" — oishii là tính từ -i, phủ định đổi thành oishikunai. Mazui = dở (nhưng nói thẳng thế bất lịch sự!)'
      },
      {
        japanese: '〜を入れてください。',
        kana: '〜をいれてください。',
        vietnamese: 'Xin hãy cho ~ vào. (chỉ dẫn nấu ăn)',
        memoryTip:
          'Nhớ: irete kudasai = "i rê tê" → "I (cho) rê tê (vào nồi)" — ireru = bỏ vào, cho vào. Dùng nhiều trong công thức nấu ăn'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '今日はカレーライスを作りましょう。',
        kana: 'きょうはかれーらいすをつくりましょう。',
        vietnamese: 'Hôm nay cùng làm cơm cà ri nhé.'
      },
      {
        speaker: 'マイ',
        japanese: 'いいですね。何を買いますか。',
        kana: 'いいですね。なにをかいますか。',
        vietnamese: 'Hay đấy. Cần mua gì?'
      },
      {
        speaker: 'リン',
        japanese: 'にんじんと玉ねぎと肉を買います。カレーのルーはもうあります。',
        kana: 'にんじんとたまねぎとにくをかいます。かれーのるーはもうあります。',
        vietnamese: 'Cà rốt, hành tây và thịt. Viên cà ri thì có rồi.'
      },
      {
        speaker: 'マイ',
        japanese: '野菜を切りましたよ。次は何をしますか。',
        kana: 'やさいをきりましたよ。つぎはなにをしますか。',
        vietnamese: 'Mình cắt rau xong rồi. Tiếp theo làm gì?'
      },
      {
        speaker: 'リン',
        japanese: '鍋に油を入れてください。それから肉を入れて炒めます。',
        kana: 'なべにあぶらをいれてください。それからにくをいれていためます。',
        vietnamese: 'Cho dầu vào nồi. Rồi cho thịt vào xào.'
      },
      {
        speaker: 'マイ',
        japanese: 'わあ、おいしそう！早く食べたいです。',
        kana: 'わあ、おいしそう！はやくたべたいです。',
        vietnamese: 'Waa, có vẻ ngon quá! Muốn ăn nhanh thôi.'
      }
    ],
    culturalNote:
      'Cơm cà ri Nhật (karee raisu) là một trong những món "quốc dân" phổ biến nhất, được nấu đơn giản bằng viên cà ri đóng hộp (ruu). Cà ri Nhật ngọt và đặc hơn cà ri Ấn Độ. Thương hiệu nổi tiếng: Vermont Curry, Java Curry, Golden Curry. Đây là món dễ nấu nhất cho du học sinh mới bắt đầu tự nấu.'
  },

  // ─── 13. Lost & Found (忘れ物) ───────────────────────────────────────
  {
    id: 'n4-conv-13',
    title: 'Đồ thất lạc',
    titleJp: '忘れ物',
    level: 'N4',
    situation: 'Hành khách đến quầy hỗ trợ ga tàu để tìm ô quên trên tàu',
    patterns: [
      {
        japanese: '忘れ物をしました。',
        kana: 'わすれものをしました。',
        vietnamese: 'Tôi đã quên đồ. (để quên vật gì đó)',
        memoryTip:
          'Nhớ: wasuremono = "wa sư rê mô nô" → "Wa (ôi), sư rê mô nô (sơ ý quên đồ)!" — wasureru = quên, mono = đồ vật → wasuremono = đồ bị quên'
      },
      {
        japanese: '落とし物をしました。',
        kana: 'おとしものをしました。',
        vietnamese: 'Tôi đã đánh rơi đồ.',
        memoryTip:
          'Nhớ: otoshimono = "ô tô shi mô nô" → "Ô tô chạy, rơi đồ mô nô (mà không biết)!" — otosu = làm rơi, mono = đồ vật → otoshimono = đồ bị rơi'
      },
      {
        japanese: '〜を探しています。',
        kana: '〜をさがしています。',
        vietnamese: 'Tôi đang tìm ~.',
        memoryTip:
          'Nhớ: sagashite imasu = "sa ga shi tê" → "Sa (rơi) ga (cái) shi tê (đi tìm)" — sagasu = tìm kiếm, dùng khi đang tìm đồ hoặc tìm người'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: 'すみません、忘れ物をしてしまいました。',
        kana: 'すみません、わすれものをしてしまいました。',
        vietnamese: 'Xin lỗi, tôi quên đồ mất rồi.'
      },
      {
        speaker: 'えきいん',
        japanese: '何を忘れましたか。',
        kana: 'なにをわすれましたか。',
        vietnamese: 'Bạn quên gì?'
      },
      {
        speaker: 'リン',
        japanese: '黒い傘を電車の中に忘れました。',
        kana: 'くろいかさをでんしゃのなかにわすれました。',
        vietnamese: 'Tôi quên cái ô đen ở trên tàu.'
      },
      {
        speaker: 'えきいん',
        japanese: '何線に乗りましたか。何時ごろでしたか。',
        kana: 'なにせんにのりましたか。なんじごろでしたか。',
        vietnamese: 'Bạn đi tuyến nào? Khoảng mấy giờ?'
      },
      {
        speaker: 'リン',
        japanese: '中央線の三時ごろの電車です。',
        kana: 'ちゅうおうせんのさんじごろのでんしゃです。',
        vietnamese: 'Tàu tuyến Chuo khoảng 3 giờ.'
      },
      {
        speaker: 'えきいん',
        japanese: '分かりました。見つかったらお電話しますね。こちらに名前と電話番号を書いてください。',
        kana: 'わかりました。みつかったらおでんわしますね。こちらになまえとでんわばんごうをかいてください。',
        vietnamese: 'Tôi hiểu rồi. Nếu tìm thấy sẽ gọi điện. Xin viết tên và số điện thoại vào đây.'
      }
    ],
    culturalNote:
      'Nhật Bản nổi tiếng với tỷ lệ trả lại đồ thất lạc cực cao. Mỗi ga tàu lớn đều có quầy "wasuremono" (忘れ物) chuyên xử lý đồ bỏ quên. Nếu không tìm thấy tại ga, bạn có thể gọi đến trung tâm xử lý đồ thất lạc (Lost & Found Center). Mỗi năm, cảnh sát Tokyo nhận hơn 3 triệu món đồ nhặt được!'
  },

  // ─── 14. Seasonal Events (季節の行事) ────────────────────────────────
  {
    id: 'n4-conv-14',
    title: 'Sự kiện theo mùa',
    titleJp: '季節の行事',
    level: 'N4',
    situation: 'Nhóm bạn bàn về các hoạt động mùa xuân và mùa hè sắp tới',
    patterns: [
      {
        japanese: '花見に行きましょう。',
        kana: 'はなみにいきましょう。',
        vietnamese: 'Cùng đi ngắm hoa nhé.',
        memoryTip:
          'Nhớ: hanami = "hana" (hoa) + "mi" (xem) → ngắm hoa anh đào. Hanami là truyền thống mùa xuân, mọi người trải chiếu dưới gốc cây sakura ăn uống vui vẻ'
      },
      {
        japanese: 'お祭りがあります。',
        kana: 'おまつりがあります。',
        vietnamese: 'Có lễ hội.',
        memoryTip:
          'Nhớ: matsuri = "mát sư ri" → "Mát vì sư ri (rước kiệu) giữa mùa hè!" — matsuri = lễ hội, thường có kiệu rước (mikoshi), quầy ăn (yatai), pháo hoa (hanabi)'
      },
      {
        japanese: '夏休みに〜するつもりです。',
        kana: 'なつやすみに〜するつもりです。',
        vietnamese: 'Kỳ nghỉ hè tôi định ~. (kế hoạch)',
        memoryTip:
          'Nhớ: natsu yasumi = "nát sư" + "ya sư mi" → "Nát sức ya (nghỉ) sư mi (smile)" — nghỉ hè. Tsumori = dự định, ý định — dùng cho kế hoạch cá nhân'
      }
    ],
    dialogue: [
      {
        speaker: 'マイ',
        japanese: 'もうすぐ春ですね。花見に行きませんか。',
        kana: 'もうすぐはるですね。はなみにいきませんか。',
        vietnamese: 'Sắp xuân rồi nhỉ. Đi ngắm hoa không?'
      },
      {
        speaker: 'リン',
        japanese: 'いいですね。どこがいいですか。',
        kana: 'いいですね。どこがいいですか。',
        vietnamese: 'Hay đấy. Ở đâu tốt nhỉ?'
      },
      {
        speaker: 'たなか',
        japanese: '上野公園はどうですか。桜がとてもきれいですよ。',
        kana: 'うえのこうえんはどうですか。さくらがとてもきれいですよ。',
        vietnamese: 'Công viên Ueno thì sao? Hoa anh đào đẹp lắm.'
      },
      {
        speaker: 'マイ',
        japanese: 'じゃ、上野にしましょう。夏はお祭りもありますよね。',
        kana: 'じゃ、うえのにしましょう。なつはおまつりもありますよね。',
        vietnamese: 'Vậy chọn Ueno đi. Mùa hè cũng có lễ hội nhỉ?'
      },
      {
        speaker: 'たなか',
        japanese: 'はい、七月に隅田川の花火大会がありますよ。',
        kana: 'はい、しちがつにすみだがわのはなびたいかいがありますよ。',
        vietnamese: 'Có, tháng 7 có lễ hội pháo hoa sông Sumida.'
      },
      {
        speaker: 'リン',
        japanese: '花火大会！夏休みにぜひ行くつもりです。浴衣を着てみたいです。',
        kana: 'はなびたいかい！なつやすみにぜひいくつもりです。ゆかたをきてみたいです。',
        vietnamese: 'Lễ hội pháo hoa! Kỳ nghỉ hè nhất định đi. Muốn thử mặc yukata nữa.'
      }
    ],
    culturalNote:
      'Nhật Bản có rất nhiều sự kiện theo mùa: mùa xuân có hanami (ngắm hoa), mùa hè có hanabi taikai (lễ hội pháo hoa) và bon odori (nhảy múa Obon), mùa thu có momijigari (ngắm lá đỏ), mùa đông có hatsumoude (viếng đền đầu năm). Lễ hội pháo hoa Sumidagawa ở Tokyo thu hút hơn 1 triệu người mỗi năm.'
  },

  // ─── 15. Comparing Things (比較) ─────────────────────────────────────
  {
    id: 'n4-conv-15',
    title: 'So sánh',
    titleJp: '比較',
    level: 'N4',
    situation: 'Hai bạn đang chọn mua điện thoại mới, so sánh các sản phẩm',
    patterns: [
      {
        japanese: 'AよりBの方がいいです。',
        kana: 'AよりBのほうがいいです。',
        vietnamese: 'B tốt hơn A. (so sánh hơn)',
        memoryTip:
          'Nhớ: yori = "hơi rì" → "A hơi rì (kém), B hou (hơn)" — yori đánh dấu cái kém hơn, hou ga đánh dấu cái hơn. Ngược với tiếng Anh: "A yori B" = "B more than A"'
      },
      {
        japanese: 'Bの方が〜です。',
        kana: 'Bのほうが〜です。',
        vietnamese: 'B thì ~ hơn. (nhấn mạnh bên hơn)',
        memoryTip:
          'Nhớ: hou = "hô" → "Hô B hơn!" — no hou ga luôn đi với cái tốt hơn/nhiều hơn. Bỏ "A yori" khi ngữ cảnh rõ ràng'
      },
      {
        japanese: '〜の中で〜が一番です。',
        kana: '〜のなかで〜がいちばんです。',
        vietnamese: 'Trong ~ thì ~ là nhất. (so sánh nhất)',
        memoryTip:
          'Nhớ: ichiban = "ichi" (một) + "ban" (bận → vị trí) → số 1, nhất. "No naka de" = trong (phạm vi). VD: "Quả trong rổ, cái nào ichiban (nhất)?"'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '新しいスマホがほしいんですが、どれがいいですか。',
        kana: 'あたらしいすまほがほしいんですが、どれがいいですか。',
        vietnamese: 'Mình muốn mua smartphone mới, cái nào tốt nhỉ?'
      },
      {
        speaker: 'たなか',
        japanese: 'このAとBを比べましょう。Aの方が安いですよ。',
        kana: 'このAとBをくらべましょう。Aのほうがやすいですよ。',
        vietnamese: 'So sánh A với B nha. A rẻ hơn đấy.'
      },
      {
        speaker: 'リン',
        japanese: 'でも、AよりBの方がカメラがいいですよね。',
        kana: 'でも、AよりBのほうがかめらがいいですよね。',
        vietnamese: 'Nhưng camera B tốt hơn A nhỉ.'
      },
      {
        speaker: 'たなか',
        japanese: 'そうですね。A、B、Cの中で、どれが一番人気ですか。',
        kana: 'そうですね。A、B、Cのなかで、どれがいちばんにんきですか。',
        vietnamese: 'Đúng rồi. Trong A, B, C thì cái nào được ưa chuộng nhất?'
      },
      {
        speaker: 'てんいん',
        japanese: 'Bが一番人気がありますよ。カメラも画面も一番きれいです。',
        kana: 'Bがいちばんにんきがありますよ。かめらもがめんもいちばんきれいです。',
        vietnamese: 'B phổ biến nhất ạ. Camera và màn hình cũng đẹp nhất.'
      },
      {
        speaker: 'リン',
        japanese: 'じゃ、Bにします。少し高いですが、長く使いたいですから。',
        kana: 'じゃ、Bにします。すこしたかいですが、ながくつかいたいですから。',
        vietnamese: 'Vậy mình chọn B. Hơi đắt nhưng muốn dùng lâu dài.'
      }
    ],
    culturalNote:
      'Người Nhật có xu hướng tránh so sánh trực tiếp theo kiểu "cái này xấu" mà thay bằng "cái kia tốt hơn" (hou ga ii). Khi mua đồ điện tử ở Nhật, nên đến các cửa hàng lớn như Yodobashi Camera hoặc Bic Camera — nhân viên rất am hiểu và có thể so sánh chi tiết sản phẩm cho bạn.'
  },

  // ─── 16. Permission (許可) ───────────────────────────────────────────
  {
    id: 'n4-conv-16',
    title: 'Xin phép',
    titleJp: '許可',
    level: 'N4',
    situation: 'Sinh viên xin phép giáo viên trong lớp học và ở thư viện',
    patterns: [
      {
        japanese: '〜てもいいですか。',
        kana: '〜てもいいですか。',
        vietnamese: 'Có được ~ không ạ? (xin phép)',
        memoryTip:
          'Nhớ: ~te mo ii desu ka = "tê mô i" → "Tê (làm) mô (cũng) i (được) không?" — cấu trúc xin phép chuẩn. Trả lời OK: "Ii desu yo". Trả lời từ chối: "Chotto..."'
      },
      {
        japanese: '〜ないでください。',
        kana: '〜ないでください。',
        vietnamese: 'Xin đừng ~. (yêu cầu không làm gì)',
        memoryTip:
          'Nhớ: ~naide kudasai = "nai đê" → "Nài đê (đừng) làm!" — nai = phủ định, de kudasai = xin hãy. Lịch sự hơn cấm thẳng, thường dùng trong lớp học, thư viện'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '先生、窓を開けてもいいですか。暑いですから。',
        kana: 'せんせい、まどをあけてもいいですか。あついですから。',
        vietnamese: 'Thưa thầy, em mở cửa sổ được không ạ? Vì nóng quá.'
      },
      {
        speaker: 'せんせい',
        japanese: 'はい、いいですよ。どうぞ。',
        kana: 'はい、いいですよ。どうぞ。',
        vietnamese: 'Được, mở đi.'
      },
      {
        speaker: 'リン',
        japanese: 'あと、辞書を使ってもいいですか。',
        kana: 'あと、じしょをつかってもいいですか。',
        vietnamese: 'Thêm nữa, em dùng từ điển được không ạ?'
      },
      {
        speaker: 'せんせい',
        japanese: 'テストの時は使わないでください。でも、今は大丈夫ですよ。',
        kana: 'てすとのときはつかわないでください。でも、いまはだいじょうぶですよ。',
        vietnamese: 'Lúc thi thì đừng dùng. Nhưng bây giờ thì được.'
      },
      {
        speaker: 'リン',
        japanese: 'はい、分かりました。写真を撮ってもいいですか。',
        kana: 'はい、わかりました。しゃしんをとってもいいですか。',
        vietnamese: 'Vâng, em hiểu rồi. Em chụp ảnh (bảng) được không ạ?'
      },
      {
        speaker: 'せんせい',
        japanese: 'いいですよ。でも授業中はスマホを見ないでくださいね。',
        kana: 'いいですよ。でもじゅぎょうちゅうはすまほをみないでくださいね。',
        vietnamese: 'Được. Nhưng đừng xem điện thoại trong giờ học nhé.'
      }
    ],
    culturalNote:
      'Trong văn hóa Nhật, xin phép trước khi làm gì là rất quan trọng, kể cả những việc nhỏ. Câu "~te mo ii desu ka" rất hay dùng hàng ngày: xin phép ngồi (suwatte mo ii desu ka), xin phép vào (haitte mo ii desu ka). Khi bị từ chối, người Nhật thường không nói thẳng "dame" mà nói "chotto..." (hơi...) để giữ không khí hài hòa.'
  },

  // ─── 17. Inviting Someone (誘い) ─────────────────────────────────────
  {
    id: 'n4-conv-17',
    title: 'Rủ ai đó',
    titleJp: '誘い',
    level: 'N4',
    situation: 'Đồng nghiệp rủ nhau đi karaoke sau giờ làm',
    patterns: [
      {
        japanese: '〜ませんか。',
        kana: '〜ませんか。',
        vietnamese: 'Bạn có muốn ~ không? (mời/rủ lịch sự)',
        memoryTip:
          'Nhớ: ~masen ka = phủ định + hỏi → "Không làm ~ sao?" = lời mời. Giống tiếng Anh "Won\'t you ~?" — hỏi phủ định nhưng ý là mời. Lịch sự hơn "~mashou"'
      },
      {
        japanese: '〜ましょう。',
        kana: '〜ましょう。',
        vietnamese: 'Cùng ~ nào! (đề nghị hành động chung)',
        memoryTip:
          'Nhớ: ~mashou = "ma show" → "Mà show (chương trình) hay quá, cùng đi!" — mashou dùng khi cả hai đã đồng ý, mang tính quyết định hơn "masen ka"'
      },
      {
        japanese: 'いっしょに〜。',
        kana: 'いっしょに〜。',
        vietnamese: 'Cùng nhau ~.',
        memoryTip:
          'Nhớ: issho ni = "ít sô ni" → "Ít sô (cô đơn) ni (nên) cùng nhau đi!" — issho ni = cùng nhau, đi kèm động từ để mời ai làm gì chung'
      }
    ],
    dialogue: [
      {
        speaker: 'たなか',
        japanese: '今日仕事の後、カラオケに行きませんか。',
        kana: 'きょうしごとのあと、からおけにいきませんか。',
        vietnamese: 'Hôm nay sau giờ làm, đi karaoke không?'
      },
      {
        speaker: 'リン',
        japanese: 'カラオケですか。いいですね。マイさんも誘いましょう。',
        kana: 'からおけですか。いいですね。まいさんもさそいましょう。',
        vietnamese: 'Karaoke à? Hay đấy. Rủ Mai nữa nhé.'
      },
      {
        speaker: 'たなか',
        japanese: 'マイさん、いっしょにカラオケに行きませんか。',
        kana: 'まいさん、いっしょにからおけにいきませんか。',
        vietnamese: 'Mai, cùng đi karaoke không?'
      },
      {
        speaker: 'マイ',
        japanese: 'すみません、今日はちょっと用事があって…。',
        kana: 'すみません、きょうはちょっとようじがあって…。',
        vietnamese: 'Xin lỗi, hôm nay mình hơi có việc...'
      },
      {
        speaker: 'たなか',
        japanese: 'そうですか。残念ですね。また今度いっしょに行きましょう。',
        kana: 'そうですか。ざんねんですね。またこんどいっしょにいきましょう。',
        vietnamese: 'Vậy à. Tiếc nhỉ. Lần sau cùng đi nhé.'
      },
      {
        speaker: 'マイ',
        japanese: 'はい、ぜひ！楽しんできてくださいね。',
        kana: 'はい、ぜひ！たのしんできてくださいね。',
        vietnamese: 'Vâng, nhất định! Đi vui nhé.'
      }
    ],
    culturalNote:
      'Trong văn hóa Nhật, từ chối lời mời trực tiếp được coi là thất lễ. Thay vào đó, người ta nói "chotto..." (hơi khó), "youji ga atte..." (có việc), hoặc hít một hơi qua răng rồi nói "sore wa chotto..." — người nghe sẽ hiểu là từ chối. Karaoke ở Nhật là hoạt động xã hội phổ biến, có phòng riêng (không phải sân khấu chung) nên ai cũng thoải mái hát.'
  },

  // ─── 18. At the Convenience Store (コンビニ) ────────────────────────
  {
    id: 'n4-conv-18',
    title: 'Ở cửa hàng tiện lợi',
    titleJp: 'コンビニ',
    level: 'N4',
    situation: 'Khách mua đồ ăn trưa tại konbini và thanh toán',
    patterns: [
      {
        japanese: 'お弁当をください。',
        kana: 'おべんとうをください。',
        vietnamese: 'Cho tôi hộp cơm.',
        memoryTip:
          'Nhớ: bentou = "bên tô" → "Bên tô (cơm) này ngon quá!" — bentou = hộp cơm, obentou (thêm "o" lịch sự). Konbini bentou là bữa trưa phổ biến nhất ở Nhật'
      },
      {
        japanese: '温めますか。',
        kana: 'あたためますか。',
        vietnamese: 'Hâm nóng không ạ? (nhân viên hỏi khách)',
        memoryTip:
          'Nhớ: atatamemasu ka = "a ta ta mê" → "A, ta ta (nóng nóng) mê (ăn)!" — câu nhân viên konbini hay hỏi nhất. Trả lời: "Hai, onegaishimasu" (vâng, nhờ anh/chị)'
      }
    ],
    dialogue: [
      {
        speaker: 'てんいん',
        japanese: 'いらっしゃいませ。',
        kana: 'いらっしゃいませ。',
        vietnamese: 'Xin chào quý khách.'
      },
      {
        speaker: 'リン',
        japanese: 'このお弁当と、おにぎりを二つください。',
        kana: 'このおべんとうと、おにぎりをふたつください。',
        vietnamese: 'Cho tôi hộp cơm này và 2 cơm nắm.'
      },
      {
        speaker: 'てんいん',
        japanese: 'お弁当は温めますか。',
        kana: 'おべんとうはあたためますか。',
        vietnamese: 'Hộp cơm hâm nóng không ạ?'
      },
      {
        speaker: 'リン',
        japanese: 'はい、お願いします。あと、お箸をつけてください。',
        kana: 'はい、おねがいします。あと、おはしをつけてください。',
        vietnamese: 'Vâng, nhờ anh. Thêm đũa nữa nhé.'
      },
      {
        speaker: 'てんいん',
        japanese: '全部で七百五十円です。袋は要りますか。',
        kana: 'ぜんぶでななひゃくごじゅうえんです。ふくろはいりますか。',
        vietnamese: 'Tổng cộng 750 yên. Cần túi không ạ?'
      },
      {
        speaker: 'リン',
        japanese: '袋は大丈夫です。カードで払えますか。',
        kana: 'ふくろはだいじょうぶです。かーどではらえますか。',
        vietnamese: 'Túi không cần. Trả bằng thẻ được không?'
      }
    ],
    culturalNote:
      'Konbini (convenience store) ở Nhật không chỉ bán đồ ăn mà còn có dịch vụ ATM, photocopy, gửi bưu kiện (takuhaibin), thanh toán hóa đơn điện nước, và mua vé concert. Ba chuỗi lớn nhất: 7-Eleven, FamilyMart, Lawson. Từ 2020, túi nilon phải trả thêm tiền (~3-5 yên) theo chính sách giảm nhựa.'
  },

  // ─── 19. Talking About Future (将来) ─────────────────────────────────
  {
    id: 'n4-conv-19',
    title: 'Nói về tương lai',
    titleJp: '将来',
    level: 'N4',
    situation: 'Sinh viên chia sẻ ước mơ và kế hoạch tương lai với bạn bè',
    patterns: [
      {
        japanese: '将来〜たいです。',
        kana: 'しょうらい〜たいです。',
        vietnamese: 'Tương lai tôi muốn ~.',
        memoryTip:
          'Nhớ: shourai = "tương lai" (Hán Việt: tướng lai). Shou (tướng = sắp) + rai (lai = đến) = sắp đến = tương lai. Kết hợp với ~tai desu để nói ước mơ'
      },
      {
        japanese: '夢は〜ことです。',
        kana: 'ゆめは〜ことです。',
        vietnamese: 'Ước mơ của tôi là ~.',
        memoryTip:
          'Nhớ: yume = "du mê" → "Du (mơ) mê (mộng)" — yume = giấc mơ, ước mơ. "Yume wa ~ koto desu" = ước mơ là việc làm ~'
      },
      {
        japanese: '〜になりたいです。',
        kana: '〜になりたいです。',
        vietnamese: 'Tôi muốn trở thành ~.',
        memoryTip:
          'Nhớ: ni naritai = "ni" (thành) + "naritai" (muốn trở thành) → dùng với nghề nghiệp hoặc trạng thái. VD: "Sensei ni naritai" = muốn trở thành giáo viên'
      }
    ],
    dialogue: [
      {
        speaker: 'マイ',
        japanese: 'リンさん、将来何になりたいですか。',
        kana: 'りんさん、しょうらいなにになりたいですか。',
        vietnamese: 'Lin, tương lai bạn muốn trở thành gì?'
      },
      {
        speaker: 'リン',
        japanese: '通訳になりたいです。日本語とベトナム語の通訳です。',
        kana: 'つうやくになりたいです。にほんごとべとなむごのつうやくです。',
        vietnamese: 'Mình muốn trở thành phiên dịch. Phiên dịch Nhật-Việt.'
      },
      {
        speaker: 'マイ',
        japanese: 'すごいですね。夢は何ですか。',
        kana: 'すごいですね。ゆめはなんですか。',
        vietnamese: 'Tuyệt nhỉ. Ước mơ của bạn là gì?'
      },
      {
        speaker: 'リン',
        japanese: '夢は自分の会社を作ることです。マイさんは？',
        kana: 'ゆめはじぶんのかいしゃをつくることです。まいさんは？',
        vietnamese: 'Ước mơ là mở công ty riêng. Còn Mai?'
      },
      {
        speaker: 'マイ',
        japanese: '私は将来日本語の先生になりたいです。',
        kana: 'わたしはしょうらいにほんごのせんせいになりたいです。',
        vietnamese: 'Mình muốn trở thành giáo viên tiếng Nhật.'
      },
      {
        speaker: 'リン',
        japanese: 'マイさんは教えるのが上手だから、きっといい先生になりますよ。',
        kana: 'まいさんはおしえるのがじょうずだから、きっといいせんせいになりますよ。',
        vietnamese: 'Mai dạy giỏi, chắc chắn sẽ trở thành giáo viên tốt.'
      }
    ],
    culturalNote:
      'Ở Nhật, câu hỏi "shourai no yume" (ước mơ tương lai) rất phổ biến từ tiểu học. Học sinh viết về ước mơ trong bài tập "shourai no yume sakubun" (bài luận về ước mơ). Nghề phổ biến nhất mà trẻ em Nhật mơ ước: YouTuber (nam), tiệm bánh (nữ) — thay đổi nhiều so với ngày xưa là cầu thủ bóng chày và tiếp viên hàng không!'
  },

  // ─── 20. Thanking Properly (お礼) ───────────────────────────────────
  {
    id: 'n4-conv-20',
    title: 'Cảm ơn đúng cách',
    titleJp: 'お礼',
    level: 'N4',
    situation: 'Sinh viên cảm ơn giáo viên và đồng nghiệp sau khi được giúp đỡ',
    patterns: [
      {
        japanese: 'ありがとうございます。/ ありがとうございました。',
        kana: 'ありがとうございます。/ ありがとうございました。',
        vietnamese: 'Cảm ơn (hiện tại). / Cảm ơn (đã xong). (hai mức thời gian)',
        memoryTip:
          'Nhớ: arigatou gozaimasu = đang cảm ơn (việc đang diễn ra). Arigatou gozaimashita = cảm ơn (việc đã kết thúc). VD: giúp xong việc → dùng "~mashita" (quá khứ)'
      },
      {
        japanese: 'お世話になりました。',
        kana: 'おせわになりました。',
        vietnamese: 'Đã được anh/chị giúp đỡ rất nhiều. (cảm ơn sâu sắc)',
        memoryTip:
          'Nhớ: osewa ni narimashita = "ô se wa ni" → "Ô, se (chăm sóc) wa (quá) ni (nè)!" — osewa = chăm sóc, giúp đỡ. Dùng khi kết thúc mối quan hệ công việc/học tập, nghỉ việc, ra trường'
      },
      {
        japanese: 'おかげさまで〜。',
        kana: 'おかげさまで〜。',
        vietnamese: 'Nhờ có (anh/chị) mà ~. (biết ơn ai giúp)',
        memoryTip:
          'Nhớ: okagesama de = "ô ka gê sa ma" → "Ô, cá gê (kết quả) sa ma (nhờ mà có)" — dùng để nói thành công là nhờ sự giúp đỡ của người khác. Rất lịch sự và khiêm tốn'
      }
    ],
    dialogue: [
      {
        speaker: 'リン',
        japanese: '先生、一年間お世話になりました。',
        kana: 'せんせい、いちねんかんおせわになりました。',
        vietnamese: 'Thưa thầy, một năm qua em đã được thầy giúp đỡ rất nhiều.'
      },
      {
        speaker: 'せんせい',
        japanese: 'リンさんもよくがんばりましたね。',
        kana: 'りんさんもよくがんばりましたね。',
        vietnamese: 'Lin cũng đã rất cố gắng.'
      },
      {
        speaker: 'リン',
        japanese: 'おかげさまで、N4に合格できました。本当にありがとうございました。',
        kana: 'おかげさまで、N4にごうかくできました。ほんとうにありがとうございました。',
        vietnamese: 'Nhờ có thầy mà em đậu N4 rồi. Thật sự cảm ơn thầy rất nhiều.'
      },
      {
        speaker: 'せんせい',
        japanese: 'それはリンさん自身の努力ですよ。おめでとう。',
        kana: 'それはりんさんじしんのどりょくですよ。おめでとう。',
        vietnamese: 'Đó là nhờ nỗ lực của chính Lin. Chúc mừng.'
      },
      {
        speaker: 'リン',
        japanese: 'これからもよろしくお願いします。',
        kana: 'これからもよろしくおねがいします。',
        vietnamese: 'Từ nay về sau cũng xin thầy chỉ bảo ạ.'
      },
      {
        speaker: 'せんせい',
        japanese: 'こちらこそ。N3もがんばってくださいね。',
        kana: 'こちらこそ。N3もがんばってくださいね。',
        vietnamese: 'Tôi mới phải cảm ơn. N3 cũng cố gắng nhé.'
      }
    ],
    culturalNote:
      'Nhật Bản có hệ thống cảm ơn phức tạp theo mức độ trang trọng: "domo" (bạn bè) → "arigatou" (thân mật) → "arigatou gozaimasu" (lịch sự) → "osewa ni narimashita" (rất trang trọng). "Okagesama de" thể hiện tinh thần khiêm tốn — thành công không phải của riêng mình mà nhờ có người xung quanh. Đây là giá trị cốt lõi trong văn hóa Nhật.'
  }
];

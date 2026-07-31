export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  categoryLabel: string;
  shortDesc: string;
  contentBlocks: { heading: string; body: string }[];
  image: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: "a1",
    slug: "g7-va-g7-plus-trong-chuan-hoa-chat-luong-in",
    title: "G7 và G7+ Trong Quá Trình Chuẩn Hóa Chất Lượng In: Chìa Khóa Cho Sự Đồng Nhất",
    author: "Chuyên gia Ngô Anh Tuấn",
    date: "20/06/2026",
    categoryLabel: "Quản Lý Chất Lượng",
    shortDesc: "G7 không chỉ là một tiêu chuẩn, nó là một phương pháp luận cách mạng hóa toàn bộ ngành in. Khám phá chi tiết cách G7+ đang tối ưu hóa in ấn thương mại và bao bì.",
    image: "/images/news_g7_certification.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Từ kinh nghiệm truyền thống đến tiêu chuẩn hóa",
        body: "Trước khi có các chuẩn như Fogra hay G7, việc kiểm soát màu sắc phụ thuộc vào kinh nghiệm người thợ. Người thợ canh bài in bằng mắt, so sánh với bài mẫu và cố gắng giữ cho bài in nhìn 'được'. Tuy nhiên, khi thị trường yêu cầu 'in lặp lại được' và 'đồng nhất' giữa hàng triệu bản in ở các nhà máy khác nhau trên toàn thế giới, ngành in buộc phải dựa vào bộ tiêu chuẩn ISO 12647 để xác lập các giá trị mục tiêu cho từng công nghệ in."
      },
      {
        heading: "ISO 12647 và Khái niệm Điều kiện in mục tiêu",
        body: "ISO 12647 buộc ngành in phải suy nghĩ theo khái niệm 'điều kiện in mục tiêu'. Một bài in không thể chỉ đánh giá bằng cảm giác, mà phải xác định rõ loại giấy, bộ mực, kiểu tram và dữ liệu chế bản. Tư duy này tạo sự liên kết chặt chẽ giữa bộ phận thiết kế đồ họa, chế bản điện tử, bản in thử (proof) và in sản lượng thực tế trên máy in offset công nghiệp."
      },
      {
        heading: "Sự xuất hiện của G7 và Tầm quan trọng của Cân bằng xám",
        body: "Dù đã có ISO và Fogra, thực tế cho thấy một bài in đúng thông số kỹ thuật mật độ (density) đôi khi vẫn sai lệch về cảm nhận thị giác. G7 xuất hiện không phải để phủ nhận ISO, mà để cung cấp một phương pháp hiệu chỉnh mạnh mẽ tập trung vào Vùng trung tính (Neutral Gray), Cân bằng xám (Gray Balance) và Phục chế tầng thứ (Tone Reproduction / NPDC - Neutral Print Density Curve). G7 giúp các hệ in khác nhau đạt được sự hài hòa thị giác tốt nhất."
      },
      {
        heading: "Quy trình căn chỉnh G7 trên máy in Offset",
        body: "Để đạt chứng nhận G7 Master, nhà in phải tiến hành in các thang màu tiêu chuẩn (như P2P51). Sau đó, máy quang phổ (Spectrophotometer) sẽ đọc các thông số màu sắc. Phần mềm chuyên dụng như Curve4 sẽ phân tích độ lệch màu (Delta E) của vùng cân bằng xám và tính toán ra một đường cong bù trừ (compensation curve) để nạp vào hệ thống xuất kẽm CTP. Điều này giúp cân chỉnh máy in cơ học một cách hoàn toàn tự động và chính xác."
      },
      {
        heading: "Bước tiến công nghệ với G7+",
        body: "G7+ là bước phát triển tiếp theo khi thực tế in ấn phức tạp hơn, vật liệu đa dạng hơn và dải màu rộng hơn. G7+ giữ nguyên triết lý của G7 nhưng cải thiện các thuật toán tính toán đường cong NPDC để tối ưu hóa trên mọi bề mặt vật liệu, đặc biệt là in trên nhựa, màng metalize và công nghệ in kỹ thuật số hiện đại. G7+ duy trì chi tiết vùng tối tốt hơn và giảm thiểu hiện tượng gãy tông màu."
      },
      {
        heading: "Lợi ích thương mại của G7 đối với Brand Owners",
        body: "Các thương hiệu toàn cầu (Brand Owners) như Apple, Nike hay Coca-Cola luôn yêu cầu bao bì của họ phải đồng nhất màu sắc ở bất kỳ quốc gia nào. Áp dụng G7 giúp các nhà in Việt Nam dễ dàng lọt vào chuỗi cung ứng toàn cầu, giảm thiểu thời gian canh bài trên máy, tiết kiệm giấy bù hao và tăng đáng kể lợi nhuận biên."
      }
    ]
  },
  {
    id: "a2",
    slug: "quan-tri-mau-sac-voi-icc-profile",
    title: "Quản Trị Màu Sắc: Sức Mạnh Vượt Trội Của Hồ Sơ Màu ICC",
    author: "Ban Biên Tập Kỹ Thuật",
    date: "15/05/2026",
    categoryLabel: "Color Management",
    shortDesc: "ICC Profile và DeviceLink là 'người phiên dịch' màu sắc giữa các thiết bị. Tìm hiểu sâu về không gian màu PCS và các Rendering Intent trong Photoshop.",
    image: "/images/news_color_profile.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Hồ sơ màu (Color Profile) là gì?",
        body: "Ảnh từ máy ảnh, màn hình hiển thị, máy in thử (inkjet proofing) và máy in offset không biểu diễn màu theo cùng một cách do sự khác biệt về vật lý (phát quang RGB so với phản xạ ánh sáng CMYK). Hồ sơ màu (Color Profile) là một tệp dữ liệu giúp hệ điều hành và phần mềm đồ họa nhận biết đặc tính màu của thiết bị đó để thực hiện chuyển đổi màu có kiểm soát, sử dụng Không gian Kết nối (Profile Connection Space - PCS) thường là không gian màu LAB."
      },
      {
        heading: "Cấu trúc của một ICC Profile chuẩn",
        body: "Một ICC Profile chứa các ma trận toán học hoặc bảng tra cứu đa chiều (LUT - Look Up Table). Nó định nghĩa chính xác giới hạn tái tạo màu (Color Gamut) của thiết bị. Trong ngành in, các profile tiêu chuẩn như Japan Color 2001 Coated, GRACoL 2013 hoặc PSO Coated v3 (FOGRA51) được áp dụng rộng rãi để định chuẩn cho không gian CMYK đầu ra."
      },
      {
        heading: "Bốn phương pháp chuyển đổi (Rendering Intents)",
        body: "Khi chuyển đổi màu sắc từ dải màu rộng (như sRGB) sang dải màu hẹp hơn (như CMYK), ta dùng Rendering Intents. Có 4 loại: Perceptual (giữ nguyên cảm quan thị giác, thường dùng cho nhiếp ảnh), Relative Colorimetric (giữ nguyên màu trong vùng tái tạo, đổi màu ngoài vùng - dùng nhiều nhất trong in bao bì), Absolute Colorimetric (giữ luôn màu nền giấy, dùng cho in thử proofing), và Saturation (giữ độ rực rỡ, dùng cho in biểu đồ)."
      },
      {
        heading: "Sức mạnh thực sự của DeviceLink Profile",
        body: "Chuyển đổi ICC truyền thống đi qua trung gian LAB có thể làm biến đổi giá trị K (Black) nguyên thủy của text đen, hoặc làm tổng lượng mực (TAC) vượt mức cho phép gây lem mực. DeviceLink Profile giải quyết triệt để vấn đề này bằng cách liên kết trực tiếp giữa hai không gian CMYK (CMYK-to-CMYK), bảo toàn kênh đen tinh khiết và tối ưu hóa lượng mực (GCR/UCR) giúp tiết kiệm đến 15% mực in."
      },
      {
        heading: "Cách nhúng ICC Profile vào luồng công việc",
        body: "Trong thiết kế, Designer luôn phải nhúng (embed) ICC Profile vào file PDF xuất ra (thường là chuẩn PDF/X-1a hoặc PDF/X-4). Nếu không nhúng Profile, file in sẽ rơi vào trạng thái 'Untagged CMYK' và nhà in sẽ phải đoán không gian màu, dẫn đến rủi ro sai lệch màu sắc cực kỳ nghiêm trọng khi lên máy offset."
      },
      {
        heading: "Tương lai của quản trị màu đám mây (Cloud Color Management)",
        body: "Các nền tảng như PantoneLIVE hay GMG ColorServer đang đưa quản trị màu lên đám mây. Giờ đây, nhà thiết kế ở Mỹ có thể chọn một mã màu Pantone kỹ thuật số, và mã màu này sẽ được dịch thuật chính xác qua ICC Profile để máy in ở Việt Nam in ra kết quả giống hệt 99.9% trên bao bì hộp giấy."
      }
    ]
  },
  {
    id: "a3",
    slug: "tieu-chuan-fogra-trong-in-offset",
    title: "Hiểu Đúng Và Áp Dụng Tiêu Chuẩn Fogra Và PSO Trong In Offset",
    author: "Chuyên gia Ngô Anh Tuấn",
    date: "10/04/2026",
    categoryLabel: "Tiêu Chuẩn In",
    shortDesc: "Fogra39 và Fogra51 khác nhau như thế nào? Tại sao ngành công nghiệp in ấn bao bì đang chuyển dịch mạnh mẽ sang PSO và Fogra51?",
    image: "/images/news_fogra_standard.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Fogra là tổ chức gì?",
        body: "Nhiều người lầm tưởng Fogra là một tiêu chuẩn quốc tế giống như ISO. Thực tế, Fogra (Fogra Research Institute for Media Technologies) là một viện nghiên cứu công nghệ truyền thông của Đức. Họ thực hiện các bài đo kiểm thực tế trên hàng ngàn máy in offset để tạo ra các 'bộ dữ liệu đặc trưng' (Characterization Data) giúp định lượng tiêu chuẩn ISO 12647-2 vào thực tế."
      },
      {
        heading: "Sự thống trị của FOGRA39",
        body: "Ra mắt từ rất lâu, bộ dữ liệu FOGRA39 (thường đi kèm ICC Profile là ISO Coated v2) đã thống trị ngành in toàn cầu. Nó quy định các giá trị LAB mục tiêu cho mực in trên giấy phủ láng (coated paper). Tuy nhiên, FOGRA39 được đo trên giấy không có chất tăng trắng quang học (OBA), điều này dần không còn phù hợp với thực tế sản xuất giấy hiện đại."
      },
      {
        heading: "Bước chuyển mình sang FOGRA51",
        body: "Giấy in ngày nay sử dụng rất nhiều chất OBA để làm tờ giấy trông trắng và sáng hơn. Khi chiếu tia UV vào, giấy sẽ phát huỳnh quang màu xanh lam. FOGRA51 được sinh ra (kèm Profile PSO Coated v3) để thay thế FOGRA39, được đo bằng thiết bị quang phổ thế hệ mới (M1 thay vì M0) để tính toán chính xác lượng ánh sáng huỳnh quang này, giúp việc so sánh màu sắc dưới ánh sáng D50 trở nên chuẩn xác hơn bao giờ hết."
      },
      {
        heading: "PSO - Tiêu chuẩn quá trình (Process Standard Offset)",
        body: "PSO là hệ thống chứng nhận do Fogra cấp cho các nhà in. Để đạt PSO, nhà in không chỉ cần in đúng màu một lần, mà phải chứng minh được toàn bộ quy trình: từ kiểm định file PDF, làm bản in CTP, hệ thống chiếu sáng đạt chuẩn D50, đến việc máy in có thể giữ được sự ổn định màu sắc trong suốt quá trình chạy hàng vạn tờ (Run-length consistency)."
      },
      {
        heading: "Đo lường sự khác biệt với Delta E",
        body: "Trong Fogra, độ lệch màu được đo lường bằng công thức Delta E (ΔE). Delta E càng nhỏ, màu càng giống nhau. Delta E dưới 2.0 thường được xem là không thể phân biệt bằng mắt thường đối với người bình thường. Tiêu chuẩn Fogra yêu cầu các nhà in phải duy trì Delta E trung bình của bài in thử (Proof) so với bản in sản lượng dưới 3.0 cho màu CMYK và dưới 1.5 cho vùng xám."
      },
      {
        heading: "Ứng dụng Fogra vào in bao bì mỹ phẩm và dược phẩm",
        body: "Các ngành hàng cao cấp như mỹ phẩm, dược phẩm đòi hỏi tính đồng nhất thương hiệu khắc nghiệt. Việc tuân thủ Fogra giúp xưởng in kiểm soát được độ sai lệch, loại bỏ hoàn toàn cảm tính cá nhân trong việc đánh giá màu sắc. Bất cứ tranh cãi nào về việc 'màu này đậm hơn mẫu' đều được giải quyết nhanh chóng thông qua việc đặt máy đo quang phổ (Spectro-Densitometer) lên tờ in."
      }
    ]
  }
];

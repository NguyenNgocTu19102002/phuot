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
    slug: "chuyen-gia-g7-bui-minh-tuan",
    title: "Chuyên gia G7+ Bùi Minh Tuấn: Hành trình 25 năm gắn bó với ngành in",
    author: "Ban Biên Tập",
    date: "15/07/2026",
    categoryLabel: "Tin Tức Chuyên Gia",
    shortDesc: "Từ thợ chế bản năm 1998 đến chuyên gia G7 quốc tế. Khám phá hành trình và tâm huyết của người sáng lập ColorMatch App.",
    image: "/images/news_color_profile.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Bắt đầu từ đam mê nghề in",
        body: "Ông Bùi Minh Tuấn bắt đầu sự nghiệp trong ngành in từ tháng 12 năm 1998 với công việc thiết kế và chế bản. Trải qua nhiều thập kỷ, ông đã không ngừng học hỏi, nâng cao tay nghề và giữ nhiều vị trí quản lý kỹ thuật tại các nhà máy in lớn."
      },
      {
        heading: "Hành trình trở thành Chuyên gia G7",
        body: "Nhận thấy sự khó khăn của các nhà máy in Việt Nam trong việc kiểm soát chất lượng màu sắc đồng đều, ông đã dành thời gian nghiên cứu các tiêu chuẩn quốc tế. Tháng 9 năm 2019, ông chính thức được Idealliance công nhận là Chuyên gia G7."
      },
      {
        heading: "Giải pháp đột phá ColorMatch App",
        body: "Không dừng lại ở việc tư vấn, vào tháng 10 năm 2024, ông đã xuất bản ứng dụng Gray Balance Calculation Tool (ColorMatch) trên App Store. Đây là giải pháp tự động hóa việc tính toán cân bằng xám, giúp các nhà máy tiết kiệm hàng trăm giờ làm việc."
      }
    ]
  },
  {
    id: "a2",
    slug: "g7-va-g7-plus-trong-chuan-hoa-chat-luong-in",
    title: "G7 và G7+ Trong Quá Trình Chuẩn Hóa Chất Lượng In: Chìa Khóa Cho Sự Đồng Nhất",
    author: "Chuyên gia Bùi Minh Tuấn",
    date: "20/06/2026",
    categoryLabel: "Quản Lý Chất Lượng",
    shortDesc: "G7 không chỉ là một tiêu chuẩn, nó là một phương pháp luận cách mạng hóa toàn bộ ngành in. Khám phá chi tiết cách G7+ đang tối ưu hóa in ấn thương mại và bao bì.",
    image: "/images/news_g7_certification.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Phương pháp G7 là gì?",
        body: "G7 là phương pháp hiệu chuẩn thiết bị in (bao gồm máy in offset, flexo, digital) dựa trên Cân bằng xám (Gray Balance) và đường cong mật độ sáng (NPDC) thay vì chỉ đo gia tăng điểm in (TVI/Dot Gain) theo phương pháp truyền thống."
      },
      {
        heading: "Sự khác biệt của G7+",
        body: "G7+ là bản cập nhật mới nhất từ Idealliance, cho phép việc tái tạo màu sắc mượt mà hơn, đặc biệt trong các tông màu chuyển (gradient). Nó khắc phục những điểm yếu của G7 khi áp dụng trên các vật liệu đặc biệt hoặc công nghệ in phun mới."
      },
      {
        heading: "Lợi ích khi đạt G7 Master",
        body: "Các nhà in đạt chứng nhận G7 Master sẽ dễ dàng lấy được niềm tin của các thương hiệu toàn cầu (Brands). Thời gian canh bài in (make-ready) giảm tới 50%, tiết kiệm giấy và mực in đáng kể trong mỗi ca sản xuất."
      }
    ]
  },
  {
    id: "a3",
    slug: "tieu-chuan-fogra-trong-in-offset",
    title: "Hiểu Đúng Và Áp Dụng Tiêu Chuẩn Fogra Trong In Offset",
    author: "Chuyên gia Bùi Minh Tuấn",
    date: "10/04/2026",
    categoryLabel: "Tiêu Chuẩn In",
    shortDesc: "Fogra39 và Fogra51 khác nhau như thế nào? Tại sao ngành công nghiệp in ấn bao bì đang chuyển dịch mạnh mẽ sang PSO và Fogra51?",
    image: "/images/news_fogra_standard.jpg",
    featured: false,
    contentBlocks: [
      {
        heading: "Fogra là tổ chức gì?",
        body: "Nhiều người lầm tưởng Fogra là một tiêu chuẩn quốc tế giống như ISO. Thực tế, Fogra (Fogra Research Institute for Media Technologies) là một viện nghiên cứu công nghệ truyền thông của Đức. Họ thực hiện các bài đo kiểm thực tế để tạo ra bộ dữ liệu tham chiếu."
      },
      {
        heading: "Sự chuyển giao từ FOGRA39 sang FOGRA51",
        body: "Giấy in ngày nay sử dụng rất nhiều chất tăng trắng quang học (OBA). FOGRA51 được sinh ra (kèm Profile PSO Coated v3) để thay thế FOGRA39, được đo bằng thiết bị quang phổ thế hệ mới (M1 thay vì M0) để tính toán chính xác lượng ánh sáng huỳnh quang."
      },
      {
        heading: "Áp dụng Fogra vào in bao bì mỹ phẩm",
        body: "Các ngành hàng cao cấp như mỹ phẩm, dược phẩm đòi hỏi tính đồng nhất thương hiệu khắt khe. Việc tuân thủ Fogra giúp xưởng in kiểm soát được độ sai lệch Delta E dưới 3.0, loại bỏ hoàn toàn cảm tính cá nhân trong việc đánh giá màu sắc."
      }
    ]
  },
  {
    id: "a4",
    slug: "ung-dung-colormatch-trong-tinh-toan-mau",
    title: "Tối Ưu Hóa Quy Trình In Với Ứng Dụng ColorMatch",
    author: "Ban Biên Tập",
    date: "05/03/2026",
    categoryLabel: "Công Nghệ & Ứng Dụng",
    shortDesc: "Công cụ đột phá giúp tự động hóa quá trình tính toán cân bằng xám G7, giảm 80% thời gian thiết lập đường cong bù màu cho máy in.",
    image: "/images/color_management.jpg",
    featured: false,
    contentBlocks: [
      {
        heading: "Nỗi đau của thợ in khi làm G7",
        body: "Trước đây, để tính toán đường cong bù màu (compensation curve) theo chuẩn G7, kỹ thuật viên phải xuất dữ liệu ra Excel, thao tác thủ công, rất dễ gây sai sót và tốn hàng giờ đồng hồ."
      },
      {
        heading: "ColorMatch App ra đời",
        body: "Ứng dụng Gray Balance Calculation Tool trên iOS ra đời như một giải pháp cứu cánh. Chỉ cần nhập dữ liệu đo đạc, ứng dụng tự động phân tích và đưa ra đường cong RIP chính xác chỉ trong vài giây."
      },
      {
        heading: "Dễ dàng tiếp cận",
        body: "Với giao diện thân thiện và thuật toán thông minh, ngay cả những thợ in không am hiểu sâu về toán học không gian màu cũng có thể dễ dàng sử dụng ứng dụng này trực tiếp trên điện thoại."
      }
    ]
  }
];

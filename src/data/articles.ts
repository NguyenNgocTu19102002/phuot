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
    title: "G7 và G7+ Trong Quá Trình Chuẩn Hóa Chất Lượng In",
    author: "Chuyên gia Ngô Anh Tuấn",
    date: "20/06/2026",
    categoryLabel: "Quản Lý Chất Lượng",
    shortDesc: "Trong lịch sử phát triển của ngành in, việc quản lý chất lượng và màu sắc đã trải qua một quá trình phát triển liên tục. Bài viết phân tích vai trò của G7 và G7+ trên nền tảng ISO 12647.",
    image: "/images/g7_certification.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Từ kinh nghiệm đến tiêu chuẩn hóa",
        body: "Trước khi có các chuẩn như Fogra hay G7, việc kiểm soát màu sắc phụ thuộc vào kinh nghiệm người thợ. Người thợ canh bài in bằng mắt, so sánh với bài mẫu và cố gắng giữ cho bài in nhìn 'được'. Tuy nhiên, khi thị trường yêu cầu 'in lặp lại được' và 'đồng nhất', ngành in buộc phải dựa vào bộ tiêu chuẩn ISO 12647 để xác lập các giá trị mục tiêu cho từng công nghệ in."
      },
      {
        heading: "ISO 12647 và Điều kiện in mục tiêu",
        body: "ISO 12647 buộc ngành in phải suy nghĩ theo khái niệm 'điều kiện in mục tiêu'. Một bài in không thể chỉ đánh giá bằng cảm giác, mà phải xác định rõ loại giấy, bộ mực, kiểu tram và dữ liệu chế bản. Tư duy này tạo sự liên kết chặt chẽ giữa thiết kế, chế bản, bản in thử (proof) và in sản lượng thực tế."
      },
      {
        heading: "Sự xuất hiện của G7 và Cân bằng xám",
        body: "Dù đã có ISO và Fogra, thực tế cho thấy một bài in đúng thông số kỹ thuật đôi khi vẫn sai lệch về cảm nhận thị giác. G7 xuất hiện không phải để phủ nhận ISO, mà để cung cấp một phương pháp hiệu chỉnh mạnh mẽ tập trung vào Vùng trung tính, Cân bằng xám (Gray Balance) và Phục chế tầng thứ (Tone Reproduction / NPDC). G7 giúp các hệ in khác nhau đạt được sự hài hòa thị giác tốt nhất."
      },
      {
        heading: "Bước tiến lên G7+",
        body: "G7+ là bước phát triển tiếp theo khi thực tế in ấn phức tạp hơn, vật liệu đa dạng hơn và dải màu rộng hơn. G7+ giữ nguyên triết lý của G7 nhưng cải thiện các thuật toán tính toán đường cong NPDC để tối ưu hóa trên mọi bề mặt vật liệu và công nghệ in kỹ thuật số hiện đại."
      }
    ]
  },
  {
    id: "a2",
    slug: "quan-tri-mau-sac-voi-icc-profile",
    title: "Quản Trị Màu Sắc: Sức Mạnh Của Hồ Sơ Màu ICC",
    author: "Ban Biên Tập",
    date: "15/05/2026",
    categoryLabel: "Color Management",
    shortDesc: "Tìm hiểu cách ICC Profile và DeviceLink giúp kết nối ngôn ngữ màu sắc giữa màn hình thiết kế, máy in thử và máy in offset công nghiệp.",
    image: "/images/color_profile.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Hồ sơ màu là gì?",
        body: "Ảnh từ máy ảnh, màn hình, máy in thử và máy in offset không biểu diễn màu theo cùng một cách. Hồ sơ màu (Color Profile) giúp phần mềm nhận biết đặc tính màu của từng thiết bị để thực hiện chuyển đổi màu có kiểm soát, sử dụng Không gian Kết nối (Profile Connection Space)."
      },
      {
        heading: "Ứng dụng trong thực tế",
        body: "Chuyển đổi từ RGB sang CMYK hay từ điều kiện in này sang điều kiện in khác đòi hỏi sự chính xác tuyệt đối. Hồ sơ liên kết thiết bị (DeviceLink Profile) cho phép chuyển đổi trực tiếp mà vẫn giữ ổn định kênh đen và lượng mực tổng (TAC)."
      }
    ]
  },
  {
    id: "a3",
    slug: "tieu-chuan-fogra-trong-in-offset",
    title: "Hiểu Đúng Về Fogra Và PSO Trong In Offset",
    author: "Chuyên gia Ngô Anh Tuấn",
    date: "10/04/2026",
    categoryLabel: "Tiêu Chuẩn In",
    shortDesc: "Fogra không phải là tiêu chuẩn quốc tế mà là tổ chức nghiên cứu. Bài viết làm rõ vai trò của Fogra và bộ dữ liệu FOGRA39, FOGRA51 trong thực tế.",
    image: "/images/fogra_standard.jpg",
    featured: true,
    contentBlocks: [
      {
        heading: "Fogra là tổ chức, không phải tiêu chuẩn",
        body: "Fogra là tổ chức nghiên cứu và cấp chứng nhận. Họ có quan hệ chặt chẽ với Quy trình tiêu chuẩn offset (PSO) và ISO 12647. Các bộ dữ liệu như FOGRA39, FOGRA51 là những tập dữ liệu đặc trưng hóa điều kiện in do Fogra công bố."
      },
      {
        heading: "Cập nhật liên tục",
        body: "Chuẩn in không bất biến. Sự chuyển đổi từ FOGRA39 sang FOGRA51 phản ánh sự thay đổi về vật liệu in (giấy chứa nhiều chất tăng trắng quang học - OBA) và điều kiện đo mới (M1)."
      }
    ]
  }
];

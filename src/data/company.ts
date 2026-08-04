export const company = {
  name: "Công ty Tư vấn Đào tạo & Giải pháp In ấn COLORMATCH VIETNAM",
  shortName: "COLORMATCH VIETNAM",
  slogan: "Chuyên gia đào tạo G7 & Cân chỉnh màu sắc",
  description:
    "COLORMATCH VIETNAM được sáng lập và điều hành bởi Chuyên gia G7+ Bùi Minh Tuấn. Chúng tôi chuyên tư vấn, đào tạo nhân sự nhà in, triển khai cân chỉnh màu sắc máy in và hỗ trợ các nhà in đạt chứng nhận G7 Master Colorspace của Idealliance.",
  address: "Hà Nội, Việt Nam",
  phone: "086.987.81.89",
  email: "tuang7plus@colormatch.vn",
  social: {
    facebook: "https://facebook.com/colormatchvietnam",
    linkedin: "https://linkedin.com/company/colormatchvietnam",
    youtube: "https://youtube.com/colormatchvietnam"
  },
  stats: [
    { value: "1998", label: "Gắn bó ngành in từ" },
    { value: "2019", label: "Chuyên gia G7 quốc tế từ" },
    { value: "50+", label: "Nhà in đã đào tạo" },
    { value: "100+", label: "Máy in đã cân chỉnh" }
  ],
  services: [
    {
      id: "s1",
      title: "Đào Tạo Chứng Chỉ G7",
      desc: "Chương trình đào tạo chuyên sâu về phương pháp G7 và lộ trình lấy chứng chỉ Master Colorspace cho nhà in.",
      icon: "Award",
      image: "/images/news_g7_certification.jpg",
      points: [
        "Lý thuyết cân bằng xám & NPDC",
        "Thực hành đo màu trên máy thật",
        "Ôn luyện kỳ thi G7 Expert"
      ]
    },
    {
      id: "s2",
      title: "Cân Chỉnh Máy In",
      desc: "Cân chỉnh, thiết lập ICC Profile cho các hệ thống máy in Offset, Flexo, Digital đạt chuẩn ISO 12647.",
      icon: "Settings",
      image: "/images/heidelberg.jpg",
      points: [
        "In test & đo đạc dữ liệu P2P",
        "Dựng đường cong bù trừ CTP",
        "Nghiệm thu ΔE theo chuẩn"
      ]
    },
    {
      id: "s3",
      title: "Giải Pháp ColorMatch App",
      desc: "Ứng dụng Gray Balance Calculation Tool trên App Store giúp giải quyết nút thắt trong việc áp dụng G7.",
      icon: "Palette",
      image: "/images/color_management.jpg",
      points: [
        "Tính NPDC tự động",
        "Xuất đường cong bù trừ",
        "Lưu lịch sử theo từng máy"
      ]
    },
    {
      id: "s4",
      title: "Tư Vấn Kỹ Thuật In",
      desc: "Tư vấn thiết lập phòng QC, đánh giá hệ thống quản trị màu sắc, kiểm tra sai lệch màu in.",
      icon: "BookOpen",
      image: "/images/g7_certification.jpg",
      points: [
        "Chuẩn hóa phòng sáng D50",
        "Audit hệ thống quản trị màu",
        "Xây dựng quy trình QC"
      ]
    }
  ],
  // 3 cấp độ chứng nhận của Idealliance - dùng cho phần giải thích G7 ở trang chủ
  g7Levels: [
    {
      level: "G7 Grayscale",
      desc: "Cấp cơ bản. Kiểm soát cân bằng xám và đường cong mật độ trung tính (NPDC) trên trục xám của thiết bị."
    },
    {
      level: "G7 Targeted",
      desc: "Cấp trung. Ngoài cân bằng xám, các màu mực chủ đạo CMYK phải đạt giá trị Lab mục tiêu theo tiêu chuẩn tham chiếu."
    },
    {
      level: "G7 Colorspace",
      desc: "Cấp cao nhất. Toàn bộ không gian màu của thiết bị phải khớp với dữ liệu đặc trưng tham chiếu (ISO 12647-2 / CRPC)."
    }
  ]
};

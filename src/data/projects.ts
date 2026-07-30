export interface Project {
  id: string;
  slug: string;
  name: string;
  client: string;
  category: "smt" | "box-build" | "auto" | "medical";
  categoryLabel: string;
  shortDesc: string;
  description: string;
  image: string;
  
  // Thông số cơ bản
  volume: string;
  year: number;
  featured: boolean;
  
  // Thông số quản lý dự án (Mới)
  budget: string;
  teamSize: string;
  duration: string;
  startDate: string;
  endDate: string;
  manager: string;
  progress: number; // 0 - 100
  estimatedProfit: string;

  details: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "bo-mach-dieu-khien-y-te",
    name: "Bo mạch điều khiển thiết bị Y tế",
    client: "Tập đoàn Y khoa Châu Âu",
    category: "medical",
    categoryLabel: "Thiết bị Y tế",
    shortDesc: "Gia công và kiểm thử PCBA cho máy thở và thiết bị theo dõi nhịp tim.",
    description: "Dự án yêu cầu độ chính xác cực cao với tiêu chuẩn ISO 13485. Sản xuất trong phòng sạch Class 10,000, sử dụng quy trình hàn không chì và kiểm tra X-Ray 100%.",
    image: "/images/clean_room.png",
    
    volume: "50,000 sp/tháng",
    year: 2025,
    featured: true,
    
    budget: "1.2 Triệu USD",
    teamSize: "45 Kỹ sư & Công nhân viên",
    duration: "6 Tháng",
    startDate: "Tháng 01/2025",
    endDate: "Tháng 06/2025",
    manager: "Trương Quang Hải (Project Manager)",
    progress: 85,
    estimatedProfit: "180,000 USD (Biên lợi nhuận 15%)",

    details: {
      challenge: "Yêu cầu độ tin cậy tuyệt đối (zero-defect) vì sản phẩm liên quan trực tiếp đến tính mạng con người. Kích thước bo mạch nhỏ nhưng mật độ linh kiện dày đặc (mật độ cao).",
      solution: "Triển khai dây chuyền SMT chuyên dụng trong phòng sạch Class 10,000. Áp dụng hệ thống 3D AOI và X-Ray cắt lớp để kiểm tra 100% mối hàn khuất.",
      result: "Đạt tỷ lệ Pass (FPY) 99.8%. Khách hàng đã cấp chứng nhận nhà cung cấp chiến lược tại Châu Á."
    }
  },
  {
    id: "p2",
    slug: "pcba-o-to-dien",
    name: "Bảng mạch điều khiển Ô tô điện",
    client: "VinFast & Partners",
    category: "auto",
    categoryLabel: "Công nghiệp Ô tô",
    shortDesc: "Sản xuất SMT tốc độ cao cho bảng mạch ECU xe điện thông minh.",
    description: "Sản xuất hàng loạt với chứng nhận IATF 16949. Dây chuyền SMT tự động hoàn toàn, tích hợp kiểm tra quang học 3D AOI để đảm bảo zero-defect.",
    image: "/images/pcb_assembly.png",
    
    volume: "200,000 sp/tháng",
    year: 2024,
    featured: true,
    
    budget: "2.5 Triệu USD",
    teamSize: "120 Kỹ sư & Công nhân viên",
    duration: "12 Tháng",
    startDate: "Tháng 03/2024",
    endDate: "Tháng 02/2025",
    manager: "Lê Minh Tuấn (Director of Automotive Division)",
    progress: 60,
    estimatedProfit: "350,000 USD (Biên lợi nhuận 14%)",

    details: {
      challenge: "Bo mạch phải chịu được môi trường rung lắc mạnh và nhiệt độ khắc nghiệt. Sản lượng yêu cầu rất lớn và tiến độ giao hàng gắt gao.",
      solution: "Ứng dụng hệ thống truy xuất nguồn gốc (Traceability System) đến từng linh kiện. Tối ưu hóa biểu đồ nhiệt lò Reflow và thực hiện nhúng phủ bảo vệ (Conformal Coating) chống ẩm mốc.",
      result: "Đáp ứng 100% tiến độ Just-in-Time (JIT) của nhà máy lắp ráp ô tô. Tỷ lệ lỗi trả về (RMA) dưới 10 PPM."
    }
  },
  {
    id: "p3",
    slug: "thiet-bi-mang-5g",
    name: "Bộ định tuyến 5G Công nghiệp",
    client: "Viettel High Tech",
    category: "box-build",
    categoryLabel: "Viễn thông",
    shortDesc: "Lắp ráp hoàn thiện (Box Build) thiết bị mạng 5G chịu môi trường khắc nghiệt.",
    description: "Cung cấp giải pháp Turnkey từ gia công SMT, nhúng phủ bảo vệ (Conformal Coating), đến lắp ráp cơ khí và đóng gói hoàn thiện.",
    image: "/images/electronic_factory.png",
    
    volume: "10,000 sp/tháng",
    year: 2024,
    featured: true,
    
    budget: "850,000 USD",
    teamSize: "30 Chuyên gia & Kỹ sư",
    duration: "4 Tháng",
    startDate: "Tháng 05/2024",
    endDate: "Tháng 08/2024",
    manager: "Phạm Tú Anh (NPI Manager)",
    progress: 100,
    estimatedProfit: "153,000 USD (Biên lợi nhuận 18%)",

    details: {
      challenge: "Thiết bị có vỏ nhôm nguyên khối rất nặng, yêu cầu tản nhiệt tốt, cụm Anten 5G cần căn chỉnh RF cực kỳ chính xác.",
      solution: "Thiết lập phân xưởng Box-Build riêng biệt với hệ thống băng tải tự động. Trang bị buồng đo sóng RF Shielding Box chuyên dụng để kiểm tra công suất phát.",
      result: "Rút ngắn thời gian Time-to-Market của khách hàng xuống 30%. Sản phẩm đang được triển khai trên 10 tỉnh thành."
    }
  },
  {
    id: "p4",
    slug: "bo-mach-dien-tu-tieu-dung",
    name: "Mainboard Thiết bị Gia dụng thông minh",
    client: "SmartHome VN",
    category: "smt",
    categoryLabel: "Điện tử Tiêu dùng",
    shortDesc: "Gia công hàng loạt bo mạch chủ cho các thiết bị IoT gia đình.",
    description: "Sản lượng lớn với tối ưu hóa chi phí. Dây chuyền hoạt động 24/7 đảm bảo tiến độ giao hàng đúng hẹn.",
    image: "/images/circuit_board.png",
    
    volume: "500,000 sp/tháng",
    year: 2023,
    featured: true,
    
    budget: "5.5 Triệu USD",
    teamSize: "250 Kỹ sư & Công nhân viên",
    duration: "Dài hạn",
    startDate: "Tháng 01/2023",
    endDate: "Hiện tại",
    manager: "Nguyễn Văn Hoàng (Plant Manager)",
    progress: 95,
    estimatedProfit: "660,000 USD (Biên lợi nhuận 12%)",

    details: {
      challenge: "Áp lực rất lớn về chi phí sản xuất (Cost Down) trong khi vẫn phải duy trì chất lượng ổn định ở sản lượng 500,000 sản phẩm/tháng.",
      solution: "Sử dụng robot gắp thả (Pick & Place) tốc độ siêu cao. Tối ưu hóa chuỗi cung ứng linh kiện nội địa hóa để giảm chi phí logistics.",
      result: "Giảm 15% chi phí sản xuất cho đối tác. Dây chuyền chạy liên tục 24/7 với hiệu suất OEE đạt 95%."
    }
  }
];

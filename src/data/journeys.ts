export interface Checkpoint {
  time: string;
  location: string;
  description: string;
  image?: string;
  km?: number;
  elevation?: number;
}

export interface Journey {
  id: string;
  slug: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  coverImage: string;
  excerpt: string;
  date: string;
  duration: number;
  totalKm: number;
  vehicle: "motorbike" | "car" | "bicycle" | "foot";
  vehicleLabel: string;
  vehicleIcon: string;
  difficulty: "easy" | "medium" | "hard" | "extreme";
  region: string;
  destinations: string[];
  checkpoints: Checkpoint[];
  stats: {
    avgSpeed: number;
    maxElevation: number;
    totalAscent: number;
  };
  tags: string[];
  likes: number;
  views: number;
  gallery: string[];
  featured?: boolean;
}

export const journeys: Journey[] = [
  {
    id: "1",
    slug: "ha-giang-loop-7-ngay",
    title: "Hà Giang Loop 7 Ngày — Đường Đến Cực Bắc",
    author: {
      name: "Minh Tuấn",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=116",
      bio: "Phượt thủ 10 năm kinh nghiệm | 50.000km trên xe máy | Nhiếp ảnh gia đường phố",
    },
    coverImage: "/images/ha_giang.png",
    excerpt: "7 ngày xuyên qua cao nguyên đá Đồng Văn, vượt đèo Mã Pì Lèng huyền thoại, ngắm hoa tam giác mạch nở rực trên nền đất đá.",
    date: "2024-10-15",
    duration: 7,
    totalKm: 520,
    vehicle: "motorbike",
    vehicleLabel: "Xe máy",
    vehicleIcon: "🏍️",
    difficulty: "hard",
    region: "Đông Bắc",
    destinations: ["Hà Giang", "Đồng Văn", "Mèo Vạc", "Quản Bạ"],
    checkpoints: [
      { time: "Ngày 1 — 06:00", location: "Hà Nội → Hà Giang", description: "Khởi hành từ Hà Nội, vượt 320km đến thị xã Hà Giang. Đường quốc lộ 2 đẹp, ít xe.", km: 320, image: "/images/ha_giang.png" },
      { time: "Ngày 2 — 07:00", location: "Cổng Trời Quản Bạ", description: "Đèo Cổng Trời khoảng 1500m, nhìn xuống là Núi Đôi huyền thoại giữa thung lũng xanh.", km: 60, elevation: 1500, image: "/images/ha_giang.png" },
      { time: "Ngày 3 — 08:00", location: "Đồng Văn – Cột Cờ Lũng Cú", description: "Phố cổ Đồng Văn với kiến trúc độc đáo. Cột cờ Lũng Cú — điểm cực Bắc của Việt Nam.", km: 100, elevation: 1600, image: "/images/ha_giang.png" },
      { time: "Ngày 4 — 06:30", location: "Đèo Mã Pì Lèng", description: "Tứ đại đỉnh đèo Việt Nam. Nhìn xuống vực là dòng sông Nho Quế xanh như ngọc bích.", km: 20, elevation: 2000, image: "/images/ha_giang.png" },
      { time: "Ngày 5 — 07:00", location: "Mèo Vạc → Bắc Mê", description: "Đường xuống thung lũng qua những bản làng người Mông, cánh đồng tam giác mạch nở rộ.", km: 80, image: "/images/ha_giang.png" },
      { time: "Ngày 6 — 08:00", location: "Bắc Mê → Hà Giang", description: "Con đường ven sông Gâm xanh biếc, dân cư thưa thớt, thiên nhiên hoang sơ.", km: 120, image: "/images/ha_giang.png" },
      { time: "Ngày 7 — 06:00", location: "Hà Giang → Hà Nội", description: "Hành trình về, lòng nặng trĩu và đầy ắp kỷ niệm. Hẹn gặp lại Hà Giang.", km: 320, image: "/images/ha_giang.png" },
    ],
    stats: { avgSpeed: 40, maxElevation: 2000, totalAscent: 4500 },
    tags: ["Hà Giang loop", "đèo Mã Pì Lèng", "xe máy", "hoa tam giác mạch", "7 ngày"],
    likes: 1240,
    views: 8900,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
      "/images/mu_cang_chai.png",
      "/images/cao_bang.png",
      "/images/ninh_binh.png",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "xuyen-viet-50-ngay-xe-may",
    title: "Xuyên Việt 50 Ngày Trên Chiếc Xe Wave Cũ",
    author: {
      name: "Lan Anh",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=117",
      bio: "Cô gái 25 tuổi tự phượt | Nhiếp ảnh gia | Vlogger du lịch",
    },
    coverImage: "/images/hai_van.png",
    excerpt: "Từ Hà Nội đến Cà Mau trên chiếc Wave 50 cũ. 50 ngày, 2.500km, vô số câu chuyện không tên.",
    date: "2024-08-01",
    duration: 50,
    totalKm: 2500,
    vehicle: "motorbike",
    vehicleLabel: "Xe máy",
    vehicleIcon: "🏍️",
    difficulty: "extreme",
    region: "Toàn quốc",
    destinations: ["Hà Nội", "Vinh", "Huế", "Đà Nẵng", "Hội An", "Quy Nhơn", "Đà Lạt", "TP HCM", "Cà Mau"],
    checkpoints: [
      { time: "Tuần 1", location: "Hà Nội → Vinh", description: "1.300km phía Bắc, qua Sam Sơn, Vườn Quốc gia Bến En. Đêm đầu tiên ngủ võng ở nhà dân.", km: 300, image: "/images/ninh_binh.png" },
      { time: "Tuần 2", location: "Vinh → Huế → Đà Nẵng", description: "Đèo Hải Vân lúc bình minh — khoảnh khắc đẹp nhất hành trình. Ánh sáng vàng tràn qua cửa đèo.", km: 400, image: "/images/ninh_binh.png" },
      { time: "Tuần 3", location: "Hội An → Quy Nhơn", description: "Phố cổ Hội An lung linh đèn lồng và ghềnh Ráng Tiên Sa, nước biển trong vắt nhìn thấy đáy.", km: 350, image: "/images/da_nang.png" },
      { time: "Tuần 4-5", location: "Đà Lạt → Cà Mau", description: "Qua Tây Nguyên xuống đồng bằng. Kết thúc tại mũi Cà Mau — điểm cực Nam Tổ quốc.", km: 700, image: "/images/phu_quoc.png" },
    ],
    stats: { avgSpeed: 45, maxElevation: 1500, totalAscent: 6000 },
    tags: ["xuyên Việt", "solo", "xe máy", "50 ngày", "cô gái phượt"],
    likes: 3200,
    views: 24000,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
      "/images/mu_cang_chai.png",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "trek-fansipan-3-ngay",
    title: "Trek Fansipan 3 Ngày — Nóc Nhà Đông Dương",
    author: {
      name: "Đức Anh",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=102",
      bio: "Hướng dẫn viên trekking | Yêu thích leo núi và chụp ảnh thiên nhiên",
    },
    coverImage: "/images/sapa.png",
    excerpt: "Hành trình 3 ngày leo Fansipan theo đường rừng — không cáp treo, chỉ có đôi chân và ý chí.",
    date: "2024-05-20",
    duration: 3,
    totalKm: 19,
    vehicle: "foot",
    vehicleLabel: "Đi bộ",
    vehicleIcon: "🥾",
    difficulty: "hard",
    region: "Tây Bắc",
    destinations: ["Sa Pa", "Fansipan"],
    checkpoints: [
      { time: "Ngày 1 — 08:00", location: "Trại Tôn – Camp 1 (2.200m)", description: "Bắt đầu từ trại Tôn, xuyên rừng nguyên sinh. Ngủ lều tại camp 1, độ cao 2.200m.", km: 7, elevation: 2200, image: "/images/sapa.png" },
      { time: "Ngày 2 — 05:30", location: "Camp 1 → Đỉnh Fansipan 3.143m", description: "Leo qua dốc thẳng đứng 70 độ. Chạm đỉnh Fansipan 3.143m lúc 10:30. Mây trắng dưới chân.", km: 8, elevation: 3143, image: "/images/sapa.png" },
      { time: "Ngày 3 — 06:00", location: "Xuống núi về Sa Pa", description: "Đường xuống nhanh hơn nhưng đầu gối chịu áp lực cực lớn. Về đến Sa Pa lúc 14:00.", km: 4, image: "/images/sapa.png" },
    ],
    stats: { avgSpeed: 2, maxElevation: 3143, totalAscent: 2400 },
    tags: ["Fansipan", "trekking", "leo núi", "Sa Pa", "không cáp treo"],
    likes: 890,
    views: 6700,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "cao-bang-ban-gioc-cuoi-tuan",
    title: "Cuối Tuần Ở Cao Bằng — Thác Bản Giốc Trong Sương",
    author: {
      name: "Hồng Nhung",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=103",
      bio: "Phượt cuối tuần | Nhiếp ảnh landscape | Hà Nội",
    },
    coverImage: "/images/cao_bang.png",
    excerpt: "Bỏ việc thứ 6, chạy xe lên Cao Bằng. Sáng thứ 7 đứng trước thác Bản Giốc — xứng đáng mọi đêm thức trắng.",
    date: "2024-09-07",
    duration: 3,
    totalKm: 560,
    vehicle: "motorbike",
    vehicleLabel: "Xe máy",
    vehicleIcon: "🏍️",
    difficulty: "medium",
    region: "Đông Bắc",
    destinations: ["Cao Bằng", "Bản Giốc", "Ngườm Ngao"],
    checkpoints: [
      { time: "Thứ 6 — 20:00", location: "Hà Nội → Cao Bằng (đêm)", description: "Chạy đêm 280km lên Cao Bằng. Đường vắng, trời lạnh, uống cà phê 3 lần để tỉnh ngủ.", km: 280, image: "/images/ninh_binh.png" },
      { time: "Thứ 7 — 06:00", location: "Thác Bản Giốc", description: "Đến sớm để tránh đoàn khách. Sương mù phủ thác, ánh mặt trời xuyên qua — đẹp đến nghẹt thở.", image: "/images/cao_bang.png" },
      { time: "Thứ 7 — 14:00", location: "Động Ngườm Ngao", description: "Hang động 3km với thạch nhũ triệu năm. Nhiệt độ trong hang 17°C, lạnh và huyền bí.", image: "/images/cao_bang.png" },
    ],
    stats: { avgSpeed: 50, maxElevation: 800, totalAscent: 1200 },
    tags: ["cuối tuần", "Cao Bằng", "Bản Giốc", "2 ngày", "xe máy"],
    likes: 560,
    views: 4200,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
    ],
  },
  {
    id: "5",
    slug: "da-lat-xe-dap-5-ngay",
    title: "Vòng Quanh Đà Lạt Bằng Xe Đạp — 5 Ngày Không Vội",
    author: {
      name: "Thanh Bình",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=105",
      bio: "Cyclist | Cà phê addict | Đà Lạt semi-local",
    },
    coverImage: "/images/da_lat.png",
    excerpt: "Thay vì thuê xe máy như mọi người, tôi mang xe đạp leo núi từ Hà Nội vào, đạp vòng quanh Đà Lạt 5 ngày.",
    date: "2024-12-10",
    duration: 5,
    totalKm: 180,
    vehicle: "bicycle",
    vehicleLabel: "Xe đạp",
    vehicleIcon: "🚲",
    difficulty: "medium",
    region: "Tây Nguyên",
    destinations: ["Đà Lạt", "Hồ Tuyền Lâm", "Langbiang"],
    checkpoints: [
      { time: "Ngày 1", location: "Trung tâm Đà Lạt", description: "Đạp quanh hồ Xuân Hương, phố Pháp cổ. Cà phê Tùng — quán cà phê lâu đời nhất thành phố.", image: "/images/da_lat.png" },
      { time: "Ngày 2", location: "Hồ Tuyền Lâm", description: "Đạp 20km qua rừng thông đến hồ Tuyền Lâm, cắm trại bờ hồ.", km: 40, image: "/images/da_lat.png" },
      { time: "Ngày 3", location: "Núi Langbiang", description: "Leo Langbiang bằng xe đạp đến chân núi, leo bộ lên đỉnh 2.167m.", elevation: 2167, image: "/images/da_lat.png" },
    ],
    stats: { avgSpeed: 15, maxElevation: 2167, totalAscent: 3200 },
    tags: ["xe đạp", "Đà Lạt", "rừng thông", "cắm trại", "slow travel"],
    likes: 430,
    views: 3100,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
    ],
  },
  {
    id: "6",
    slug: "phu-quoc-kham-pha-bac-dao",
    title: "Khám Phá Bắc Đảo Phú Quốc Hoang Sơ",
    author: {
      name: "Quốc Bảo",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=106",
      bio: "Diver | Photographer | Yêu biển đảo",
    },
    coverImage: "/images/phu_quoc.png",
    excerpt: "Phú Quốc không chỉ có resort. Tôi thuê xe máy, đi bắc đảo — nơi chỉ có rừng, biển và im lặng.",
    date: "2024-03-15",
    duration: 4,
    totalKm: 120,
    vehicle: "motorbike",
    vehicleLabel: "Xe máy",
    vehicleIcon: "🏍️",
    difficulty: "easy",
    region: "Nam Bộ",
    destinations: ["Phú Quốc", "Bãi Dài", "Vườn Quốc Gia"],
    checkpoints: [
      { time: "Ngày 1", location: "Bãi Ông Lang – Bãi Xếp", description: "Hai bãi biển hoang vắng ở giữa đảo. Nước trong đến thấy san hô từ trên bờ.", image: "/images/phu_quoc.png" },
      { time: "Ngày 2", location: "Bắc Đảo — Gành Dầu", description: "Vào rừng nguyên sinh Vườn Quốc Gia. Không wifi, không sóng điện thoại — chỉ có tiếng chim.", image: "/images/phu_quoc.png" },
      { time: "Ngày 3-4", location: "Lặn biển An Thới", description: "Tour lặn biển quần đảo An Thới. Thế giới san hô màu sắc rực rỡ, cá nhiều như trong bể kính.", image: "/images/phu_quoc.png" },
    ],
    stats: { avgSpeed: 30, maxElevation: 100, totalAscent: 200 },
    tags: ["Phú Quốc", "biển đảo", "lặn biển", "hoang sơ", "xe máy"],
    likes: 780,
    views: 5600,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
    ],
  },
  {
    id: "7",
    slug: "mu-cang-chai-mua-lua-chin",
    title: "Mù Cang Chải Mùa Lúa Chín — Nhiếp Ảnh Gia Phượt",
    author: {
      name: "Việt Hùng",
      avatar: "https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=104",
      bio: "Landscape photographer | 15 năm đi phượt | Yêu ánh sáng vàng mùa thu",
    },
    coverImage: "/images/mu_cang_chai.png",
    excerpt: "Tháng 9 hàng năm, tôi đặt máy ảnh ở Mù Cang Chải. Lúa chín vàng, ánh nắng chiều xuyên qua mây.",
    date: "2024-09-20",
    duration: 4,
    totalKm: 640,
    vehicle: "motorbike",
    vehicleLabel: "Xe máy",
    vehicleIcon: "🏍️",
    difficulty: "medium",
    region: "Tây Bắc",
    destinations: ["Mù Cang Chải", "La Pán Tẩn", "Chế Cu Nha"],
    checkpoints: [
      { time: "Ngày 1", location: "Hà Nội → Mù Cang Chải", description: "320km qua Nghĩa Lộ. Đến nơi lúc chiều, kịp chụp hoàng hôn.", km: 320, image: "/images/ninh_binh.png" },
      { time: "Ngày 2-3", location: "La Pán Tẩn & Chế Cu Nha", description: "Hai điểm chụp ảnh đẹp nhất. Dậy 4:30 sáng mỗi ngày để có ánh sáng golden hour hoàn hảo.", image: "/images/mu_cang_chai.png" },
    ],
    stats: { avgSpeed: 45, maxElevation: 1200, totalAscent: 2800 },
    tags: ["Mù Cang Chải", "nhiếp ảnh", "ruộng bậc thang", "mùa lúa chín", "golden hour"],
    likes: 1890,
    views: 14200,
    gallery: [
      "/images/ha_giang.png",
      "/images/sapa.png",
    ],
    featured: true,
  },
];



export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: "tay-bac" | "dong-bac" | "mien-trung" | "tay-nguyen" | "nam-bo" | "dong-bang";
  regionLabel: string;
  description: string;
  shortDesc: string;
  image: string;
  coordinates: [number, number];
  difficulty: "easy" | "medium" | "hard" | "extreme";
  bestSeason: string;
  distance: number;
  elevation?: number;
  tags: string[];
  famousSpots?: { name: string; image: string; description: string }[];
  featured?: boolean;
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "ha-giang",
    name: "Hà Giang",
    region: "dong-bac",
    regionLabel: "Đông Bắc",
    description: "Cao nguyên đá Đồng Văn — nơi đá núi trùng điệp kéo dài đến tận trời xanh. Đèo Mã Pì Lèng là một trong tứ đại đỉnh đèo của Việt Nam, ôm lấy dòng sông Nho Quế thơ mộng bên dưới.",
    shortDesc: "Đèo Mã Pì Lèng, cao nguyên đá Đồng Văn",
    image: "/images/ha_giang.png",
    coordinates: [23.2619, 104.9783],
    difficulty: "hard",
    bestSeason: "Tháng 10 – 4",
    distance: 320,
    elevation: 1600,
    tags: ["đèo cao", "bản làng", "hoa tam giác mạch", "xe máy"],
    famousSpots: [
      {
        name: "Đèo Mã Pì Lèng",
        image: "/images/ha_giang.png",
        description: "Một trong tứ đại đỉnh đèo của Việt Nam với tầm nhìn ngoạn mục xuống sông Nho Quế."
      }
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "sapa",
    name: "Sa Pa",
    region: "tay-bac",
    regionLabel: "Tây Bắc",
    description: "Thị trấn trong mây với ruộng bậc thang vàng óng mùa lúa chín. Fansipan — nóc nhà Đông Dương — đứng sừng sững giữa mây mù huyền ảo.",
    shortDesc: "Ruộng bậc thang, Fansipan, bản H'Mông",
    image: "/images/sapa.png",
    coordinates: [22.3364, 103.8441],
    difficulty: "medium",
    bestSeason: "Tháng 9 – 11, 3 – 5",
    distance: 380,
    elevation: 1600,
    tags: ["leo núi", "ruộng bậc thang", "trekking", "bản làng"],
    famousSpots: [
      {
        name: "Đỉnh Fansipan",
        image: "/images/sapa.png",
        description: "Nóc nhà Đông Dương ở độ cao 3.143m, quanh năm mây mù bao phủ."
      }
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "cao-bang",
    name: "Cao Bằng",
    region: "dong-bac",
    regionLabel: "Đông Bắc",
    description: "Thác Bản Giốc hùng vĩ trải dài trên đường biên giới Việt – Trung, là thác nước lớn nhất Đông Nam Á. Động Ngườm Ngao ẩn giấu thế giới thạch nhũ huyền bí.",
    shortDesc: "Thác Bản Giốc, động Ngườm Ngao",
    image: "/images/cao_bang.png",
    coordinates: [22.6666, 106.2500],
    difficulty: "medium",
    bestSeason: "Tháng 9 – 10",
    distance: 270,
    elevation: 800,
    tags: ["thác nước", "hang động", "biên giới", "xe máy"],
    famousSpots: [
      {
        name: "Thác Bản Giốc",
        image: "/images/cao_bang.png",
        description: "Thác nước tự nhiên lớn nhất Đông Nam Á, ranh giới giữa Việt Nam và Trung Quốc."
      }
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "mu-cang-chai",
    name: "Mù Cang Chải",
    region: "tay-bac",
    regionLabel: "Tây Bắc",
    description: "Ruộng bậc thang Mù Cang Chải được công nhận là danh thắng quốc gia. Mùa lúa chín tháng 9–10, cả thung lũng nhuộm vàng như tranh sơn dầu.",
    shortDesc: "Ruộng bậc thang đẹp nhất Việt Nam",
    image: "/images/mu_cang_chai.png",
    coordinates: [21.8167, 104.1167],
    difficulty: "medium",
    bestSeason: "Tháng 9 – 10 (lúa chín)",
    distance: 310,
    elevation: 1200,
    tags: ["ruộng bậc thang", "nhiếp ảnh", "xe máy", "Y Tý"],
    famousSpots: [
      {
        name: "Ruộng bậc thang Mù Cang Chải",
        image: "/images/mu_cang_chai.png",
        description: "Biểu tượng của Mù Cang Chải với những thửa ruộng bậc thang tuyệt đẹp ngả vàng mùa lúa chín."
      }
    ]
  },
  {
    id: "5",
    slug: "da-lat",
    name: "Đà Lạt",
    region: "tay-nguyen",
    regionLabel: "Tây Nguyên",
    description: "Thành phố ngàn hoa với kiến trúc Pháp cổ kính, đồi thông vi vu và khí hậu quanh năm mát mẻ. Thiên đường cà phê và hoa dã quỳ.",
    shortDesc: "Thành phố ngàn hoa, đồi thông, thác nước",
    image: "/images/da_lat.png",
    coordinates: [11.9465, 108.4419],
    difficulty: "easy",
    bestSeason: "Quanh năm (tốt nhất tháng 12 – 3)",
    distance: 1500,
    elevation: 1500,
    tags: ["cà phê", "hoa", "thác nước", "kiến trúc Pháp"],
    famousSpots: [
      {
        name: "Hồ Xuân Hương",
        image: "/images/da_lat.png",
        description: "Trái tim của Đà Lạt, tĩnh lặng và thơ mộng giữa lòng thành phố buổi sáng sớm."
      }
    ]
  },
  {
    id: "6",
    slug: "phu-quoc",
    name: "Phú Quốc",
    region: "nam-bo",
    regionLabel: "Nam Bộ",
    description: "Đảo Ngọc với bãi biển cát trắng mịn, làn nước xanh trong vắt. Bắc đảo hoang sơ, chưa bị khai phá — thiên đường của dân phượt biển.",
    shortDesc: "Đảo Ngọc, bãi biển hoang sơ",
    image: "/images/phu_quoc.png",
    coordinates: [10.2899, 103.9840],
    difficulty: "easy",
    bestSeason: "Tháng 11 – 4",
    distance: 1700,
    elevation: 0,
    tags: ["biển đảo", "lặn biển", "hoàng hôn", "hải sản"],
    famousSpots: [
      {
        name: "Bãi biển Phú Quốc",
        image: "/images/phu_quoc.png",
        description: "Bãi biển đẹp nhất Phú Quốc với bờ cát trắng mịn như kem và nước trong vắt."
      }
    ]
  },
  {
    id: "7",
    slug: "phong-nha",
    name: "Phong Nha – Kẻ Bàng",
    region: "mien-trung",
    regionLabel: "Miền Trung",
    description: "Hệ thống hang động lớn nhất thế giới, bao gồm Hang Sơn Đoòng — hang động lớn nhất hành tinh. Di sản thiên nhiên thế giới UNESCO.",
    shortDesc: "Hang Sơn Đoòng, UNESCO",
    image: "/images/son_doong.png",
    coordinates: [17.5553, 106.2811],
    difficulty: "extreme",
    bestSeason: "Tháng 2 – 8",
    distance: 500,
    elevation: 400,
    tags: ["hang động", "UNESCO", "trekking", "mạo hiểm"],
    famousSpots: [
      {
        name: "Hang Sơn Đoòng",
        image: "/images/son_doong.png",
        description: "Hang động tự nhiên lớn nhất thế giới, nơi đón những tia nắng mặt trời rọi thẳng xuống khu rừng ngầm kỳ ảo."
      }
    ]
  },
  {
    id: "8",
    slug: "ninh-binh",
    name: "Ninh Bình",
    region: "dong-bang",
    regionLabel: "Đồng Bằng",
    description: "Vịnh Hạ Long trên cạn với những dãy núi đá vôi sừng sững giữa cánh đồng xanh mướt. Tràng An — di sản thiên nhiên và văn hóa thế giới.",
    shortDesc: "Tràng An, Tam Cốc, chèo thuyền",
    image: "/images/ninh_binh.png",
    coordinates: [20.2539, 105.9750],
    difficulty: "easy",
    bestSeason: "Quanh năm",
    distance: 100,
    elevation: 200,
    tags: ["thuyền", "núi đá", "UNESCO", "chùa chiền"],
    famousSpots: [
      {
        name: "Quần thể Tràng An",
        image: "/images/ninh_binh.png",
        description: "Di sản thiên nhiên thế giới, nổi tiếng với hệ thống núi đá vôi trập trùng trên dòng sông phẳng lặng."
      }
    ]
  },
  {
    id: "9",
    slug: "con-dao",
    name: "Côn Đảo",
    region: "nam-bo",
    regionLabel: "Nam Bộ",
    description: "Quần đảo hoang sơ với vườn quốc gia và rừng nguyên sinh. Bãi biển trong vắt, rùa biển đẻ trứng — thiên đường cho dân phượt muốn trốn xa đám đông.",
    shortDesc: "Hoang sơ, rùa biển, lặn biển",
    image: "/images/con_dao.png",
    coordinates: [8.6833, 106.6167],
    difficulty: "medium",
    bestSeason: "Tháng 3 – 9",
    distance: 2000,
    elevation: 0,
    tags: ["biển đảo", "hoang sơ", "lặn biển", "rùa biển"],
    famousSpots: [
      {
        name: "Bãi biển Côn Đảo",
        image: "/images/con_dao.png",
        description: "Bãi biển hoang sơ, tuyệt đẹp nước xanh trong vắt chưa hề bị khai thác du lịch ồ ạt."
      }
    ]
  },
  {
    id: "10",
    slug: "mai-chau",
    name: "Mai Châu",
    region: "tay-bac",
    regionLabel: "Tây Bắc",
    description: "Thung lũng Mai Châu bình yên với những ngôi nhà sàn người Thái trắng, cánh đồng lúa xanh mướt và núi non bao quanh. Chỉ cách Hà Nội 150km.",
    shortDesc: "Bản Thái, nhà sàn, thung lũng xanh",
    image: "/images/mai_chau.png",
    coordinates: [20.6500, 104.9833],
    difficulty: "easy",
    bestSeason: "Quanh năm",
    distance: 150,
    elevation: 400,
    tags: ["bản làng", "xe đạp", "trekking", "ẩm thực Thái"],
    famousSpots: [
      {
        name: "Thung lũng Mai Châu",
        image: "/images/mai_chau.png",
        description: "Bản làng xinh đẹp với những nếp nhà sàn truyền thống xen lẫn đồng lúa mênh mông."
      }
    ]
  },
  {
    id: "11",
    slug: "quan-ba",
    name: "Quản Bạ – Núi Đôi",
    region: "dong-bac",
    regionLabel: "Đông Bắc",
    description: "Hai ngọn núi tròn trĩnh nổi lên giữa thung lũng xanh mướt — Núi Đôi huyền thoại. Cổng trời Quản Bạ mở ra khung cảnh ngoạn mục như chốn bồng lai.",
    shortDesc: "Núi Đôi, cổng trời, hành trình Hà Giang",
    image: "/images/quan_ba.png",
    coordinates: [23.0667, 104.9667],
    difficulty: "hard",
    bestSeason: "Tháng 10 – 4",
    distance: 290,
    elevation: 1500,
    tags: ["đèo cao", "núi đôi", "cổng trời", "Hà Giang loop"],
    famousSpots: [
      {
        name: "Núi Đôi Quản Bạ",
        image: "/images/quan_ba.png",
        description: "Hai ngọn núi tròn trịa nằm kề nhau giữa thung lũng Tam Sơn xanh mướt, một tuyệt tác thiên nhiên."
      }
    ]
  },
  {
    id: "12",
    slug: "ha-long",
    name: "Vịnh Hạ Long",
    region: "dong-bac",
    regionLabel: "Đông Bắc",
    description: "Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi nhô lên mặt biển. Kayak qua các hang động, ngủ trên du thuyền — trải nghiệm không thể quên.",
    shortDesc: "Kỳ quan thiên nhiên thế giới, du thuyền",
    image: "/images/ha_long.png",
    coordinates: [20.9101, 107.1839],
    difficulty: "easy",
    bestSeason: "Tháng 10 – 4",
    distance: 170,
    elevation: 0,
    tags: ["biển đảo", "du thuyền", "UNESCO", "kayak"],
    famousSpots: [
      {
        name: "Vịnh Hạ Long",
        image: "/images/ha_long.png",
        description: "Quần thể hàng nghìn đảo đá vôi kỳ vĩ soi bóng xuống mặt nước xanh ngọc bích."
      }
    ]
  },
  {
    id: "13",
    slug: "da-nang",
    name: "Đà Nẵng",
    region: "mien-trung",
    regionLabel: "Miền Trung",
    description: "Thành phố đáng sống nhất Việt Nam với Bà Nà Hills, cầu Vàng, bãi biển Mỹ Khê và hành lang di sản miền Trung.",
    shortDesc: "Bà Nà Hills, cầu Vàng, Hội An gần",
    image: "/images/da_nang.png",
    coordinates: [16.0544, 108.2022],
    difficulty: "easy",
    bestSeason: "Tháng 3 – 8",
    distance: 760,
    elevation: 0,
    tags: ["biển", "city trip", "ẩm thực", "Hội An"],
    famousSpots: [
      {
        name: "Cầu Rồng Đà Nẵng",
        image: "/images/da_nang.png",
        description: "Biểu tượng của thành phố Đà Nẵng, đặc biệt lung linh và hiện đại lúc chập tối."
      }
    ]
  },
  {
    id: "14",
    slug: "gia-lai",
    name: "Gia Lai – Tây Nguyên",
    region: "tay-nguyen",
    regionLabel: "Tây Nguyên",
    description: "Cao nguyên Tây Nguyên hoang dã với những rừng cà phê bát ngát, thác nước hùng vĩ và văn hóa Ê Đê đặc sắc.",
    shortDesc: "Cao nguyên, cà phê, văn hóa Ê Đê",
    image: "/images/da_lat.png",
    coordinates: [13.9833, 108.0000],
    difficulty: "medium",
    bestSeason: "Tháng 11 – 4",
    distance: 1200,
    elevation: 800,
    tags: ["cao nguyên", "cà phê", "văn hóa bản địa", "đèo"],
    famousSpots: []
  },
  {
    id: "15",
    slug: "hoang-su-phi",
    name: "Hoàng Su Phì",
    region: "dong-bac",
    regionLabel: "Đông Bắc",
    description: "Ruộng bậc thang Hoàng Su Phì ít người biết đến hơn Mù Cang Chải nhưng không kém phần hùng vĩ. Mùa nước đổ tháng 6–7 phản chiếu bầu trời như gương.",
    shortDesc: "Ruộng bậc thang hoang sơ, ít khách",
    image: "/images/mu_cang_chai.png",
    coordinates: [22.7167, 104.6833],
    difficulty: "hard",
    bestSeason: "Tháng 6 – 7 (nước đổ), 9 – 10 (lúa chín)",
    distance: 350,
    elevation: 1200,
    tags: ["ruộng bậc thang", "hoang sơ", "nhiếp ảnh", "trek"],
    famousSpots: []
  }
];

export const regions = [
  { id: "tay-bac", label: "Tây Bắc", color: "#CAFF00" },
  { id: "dong-bac", label: "Đông Bắc", color: "#FF6B35" },
  { id: "mien-trung", label: "Miền Trung", color: "#4FC4CF" },
  { id: "tay-nguyen", label: "Tây Nguyên", color: "#A78BFA" },
  { id: "nam-bo", label: "Nam Bộ", color: "#FB923C" },
  { id: "dong-bang", label: "Đồng Bằng", color: "#34D399" },
];

export const difficultyConfig = {
  easy: { label: "Dễ", color: "#34D399", badgeClass: "badge-green" },
  medium: { label: "Trung bình", color: "#FBBF24", badgeClass: "badge-yellow" },
  hard: { label: "Khó", color: "#FF6B35", badgeClass: "badge-orange" },
  extreme: { label: "Cực khó", color: "#F87171", badgeClass: "badge-red" },
};

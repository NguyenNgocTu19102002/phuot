const fs = require('fs');
const path = require('path');

const destPath = path.resolve('src/data/destinations.ts');
let content = fs.readFileSync(destPath, 'utf8');

// We need to add `famousSpots?: { name: string; image: string; description: string }[];` to the Destination interface.
if (!content.includes('famousSpots?:')) {
  content = content.replace(
    'tags: string[];',
    'tags: string[];\n  famousSpots?: { name: string; image: string; description: string }[];'
  );
}

const spotsData = {
  'ha-giang': [
    { name: 'Đèo Mã Pì Lèng', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/800px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg', description: 'Một trong tứ đại đỉnh đèo của Việt Nam với tầm nhìn ngoạn mục xuống sông Nho Quế.' },
    { name: 'Cao Nguyên Đá Đồng Văn', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dong_Van_Karst_Plateau_Geopark.jpg/800px-Dong_Van_Karst_Plateau_Geopark.jpg', description: 'Công viên địa chất toàn cầu với hàng ngàn núi đá vôi đen trập trùng.' },
    { name: 'Cột Cờ Lũng Cú', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/C%E1%BB%99t_c%E1%BB%9D_L%C3%A9ng_C%C3%BA.jpg/800px-C%E1%BB%99t_c%E1%BB%9D_L%C3%A9ng_C%C3%BA.jpg', description: 'Điểm cực Bắc thiêng liêng của Tổ quốc, nơi có lá cờ đỏ sao vàng rộng 54m2.' }
  ],
  'sapa': [
    { name: 'Đỉnh Fansipan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/800px-Fansipan_Summit.jpg', description: 'Nóc nhà Đông Dương ở độ cao 3.143m, quanh năm mây mù bao phủ.' },
    { name: 'Bản Cát Cát', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Cat_Cat_village%2C_Sa_Pa.jpg/800px-Cat_Cat_village%2C_Sa_Pa.jpg', description: 'Bản làng truyền thống của người H\'Mông với cảnh quan tuyệt đẹp và thác nước róc rách.' },
    { name: 'Đèo Ô Quy Hồ', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/O_Quy_Ho_Pass.jpg/800px-O_Quy_Ho_Pass.jpg', description: 'Đỉnh đèo cao nhất Việt Nam, nơi săn mây lý tưởng cho các phượt thủ.' }
  ],
  'cao-bang': [
    { name: 'Thác Bản Giốc', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/800px-Bangioc9tam.jpg', description: 'Thác nước tự nhiên lớn nhất Đông Nam Á, ranh giới giữa Việt Nam và Trung Quốc.' },
    { name: 'Động Ngườm Ngao', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Son_Doong_Cave_5.jpg/800px-Son_Doong_Cave_5.jpg', description: 'Hang động kỳ vĩ với vô vàn thạch nhũ muôn hình vạn trạng.' },
    { name: 'Suối Lê-nin', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Suoi_lenin.jpg/800px-Suoi_lenin.jpg', description: 'Dòng suối xanh ngắt hiền hòa chảy qua khu di tích lịch sử Pác Bó.' }
  ],
  'mu-cang-chai': [
    { name: 'Đồi Mâm Xôi', image: '/images/mu_cang_chai.png', description: 'Biểu tượng của Mù Cang Chải với những thửa ruộng bậc thang tròn trịa tuyệt đẹp.' },
    { name: 'La Pán Tẩn', image: '/images/mu_cang_chai.png', description: 'Nơi có diện tích ruộng bậc thang rộng lớn và hùng vĩ nhất khu vực.' }
  ],
  'da-lat': [
    { name: 'Hồ Xuân Hương', image: '/images/da_lat.png', description: 'Trái tim của Đà Lạt, tĩnh lặng và thơ mộng giữa lòng thành phố.' },
    { name: 'Núi Langbiang', image: '/images/da_lat.png', description: 'Nóc nhà của Đà Lạt, điểm đến không thể bỏ qua của dân đam mê trekking.' }
  ],
  'phu-quoc': [
    { name: 'Bãi Sao', image: '/images/phu_quoc.png', description: 'Bãi biển đẹp nhất Phú Quốc với bờ cát trắng mịn như kem và nước trong vắt.' },
    { name: 'Làng chài Hàm Ninh', image: '/images/phu_quoc.png', description: 'Ngôi làng cổ kính, nơi bạn có thể ngắm bình minh và thưởng thức hải sản tươi sống.' }
  ],
  'ninh-binh': [
    { name: 'Tràng An', image: '/images/ninh_binh.png', description: 'Di sản thiên nhiên thế giới, nổi tiếng với hệ thống hang động xuyên thủy và núi đá vôi.' },
    { name: 'Hang Múa', image: '/images/ninh_binh.png', description: 'Được mệnh danh là Vạn Lý Trường Thành của Việt Nam, với tầm nhìn bao quát Tam Cốc.' }
  ],
  'ha-long': [
    { name: 'Hòn Trống Mái', image: '/images/ha_long.png', description: 'Biểu tượng của vịnh Hạ Long, hai hòn đảo đá vôi đối diện nhau trên mặt nước biếc.' },
    { name: 'Hang Sửng Sốt', image: '/images/ha_long.png', description: 'Hang động lớn và đẹp nhất vịnh, với hàng ngàn khối thạch nhũ kỳ ảo.' }
  ],
  'da-nang': [
    { name: 'Cầu Vàng', image: '/images/da_nang.png', description: 'Cây cầu độc đáo được nâng đỡ bởi hai bàn tay khổng lồ trên đỉnh Bà Nà Hills.' },
    { name: 'Bán đảo Sơn Trà', image: '/images/da_nang.png', description: 'Lá phổi xanh của Đà Nẵng, nơi cư ngụ của loài voọc chà vá chân nâu quý hiếm.' }
  ],
  'phong-nha': [
    { name: 'Hang Sơn Đoòng', image: '/images/hai_van.png', description: 'Hang động tự nhiên lớn nhất thế giới, một kỳ quan thiên nhiên đáng kinh ngạc.' },
    { name: 'Động Phong Nha', image: '/images/hai_van.png', description: 'Hang động nước nổi bật với hệ thống thạch nhũ tráng lệ và dòng sông ngầm.' }
  ],
  'con-dao': [
    { name: 'Bãi Đầm Trầu', image: '/images/phu_quoc.png', description: 'Bãi biển hoang sơ, tuyệt đẹp với cảnh máy bay cất hạ cánh ngay sát đầu.' },
    { name: 'Vườn quốc gia Côn Đảo', image: '/images/phu_quoc.png', description: 'Hệ sinh thái đa dạng, nơi bảo tồn rùa biển quý hiếm.' }
  ],
  'mai-chau': [
    { name: 'Bản Lác', image: '/images/mai_chau.png', description: 'Bản làng xinh đẹp của người Thái với những nếp nhà sàn truyền thống.' },
    { name: 'Đèo Thung Khe', image: '/images/mai_chau.png', description: 'Ngọn đèo đá trắng xóa, mang lại cảm giác như tuyết rơi giữa xứ nhiệt đới.' }
  ],
  'quan-ba': [
    { name: 'Núi Đôi Quản Bạ', image: '/images/ha_giang.png', description: 'Hai ngọn núi tròn trịa nằm kề nhau giữa thung lũng Tam Sơn xanh mướt.' },
    { name: 'Cổng Trời Quản Bạ', image: '/images/ha_giang.png', description: 'Điểm dừng chân lý tưởng để ngắm toàn cảnh thung lũng từ trên cao.' }
  ],
  'gia-lai': [
    { name: 'Biển Hồ (Hồ T\'Nưng)', image: '/images/da_lat.png', description: 'Đôi mắt Pleiku, một hồ nước ngọt xanh biếc nằm trên miệng núi lửa đã tắt.' },
    { name: 'Núi lửa Chư Đăng Ya', image: '/images/da_lat.png', description: 'Nơi có mùa hoa dã quỳ nở rực rỡ nhất Tây Nguyên vào tháng 11.' }
  ],
  'hoang-su-phi': [
    { name: 'Bản Phùng', image: '/images/mu_cang_chai.png', description: 'Nơi có những thửa ruộng bậc thang cao và đẹp nhất Hoàng Su Phì.' },
    { name: 'Chiêu Lầu Thi', image: '/images/mu_cang_chai.png', description: 'Đỉnh núi cao hùng vĩ, địa điểm săn mây tuyệt vời của vùng núi Đông Bắc.' }
  ]
};

// Inject famousSpots into each destination object in destinations.ts
let lines = content.split('\n');
let newLines = [];
let currentSlug = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  const matchSlug = line.match(/slug:\s*"([^"]+)"/);
  if (matchSlug) {
    currentSlug = matchSlug[1];
  }
  
  newLines.push(line);
  
  // Find the end of a destination object (which ends with `featured: true,` or `tags: [...]`)
  // Let's just insert it right after `tags: [...]`
  if (line.trim().startsWith('tags: [') && currentSlug) {
    const spots = spotsData[currentSlug];
    if (spots) {
      newLines.push(`    famousSpots: ${JSON.stringify(spots, null, 2).replace(/\n/g, '\n    ')},`);
    }
  }
}

fs.writeFileSync(destPath, newLines.join('\n'));
console.log('Added famousSpots to destinations.ts');

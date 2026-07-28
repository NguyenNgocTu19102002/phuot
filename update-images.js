const fs = require('fs');
const path = require('path');

const destPath = path.resolve('src/data/destinations.ts');
let destContent = fs.readFileSync(destPath, 'utf8');

const map = {
  'ha-giang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/1280px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg',
  'sapa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/1280px-Fansipan_Summit.jpg',
  'cao-bang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'mu-cang-chai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mu_Cang_Chai.jpg/1280px-Mu_Cang_Chai.jpg',
  'da-lat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xuan_Huong_Lake_11.jpg/1280px-Xuan_Huong_Lake_11.jpg',
  'phu-quoc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg',
  'phong-nha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Son_Doong_Cave_5.jpg/1280px-Son_Doong_Cave_5.jpg',
  'ninh-binh': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg',
  'con-dao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/ConDao_park_dam.jpg/1280px-ConDao_park_dam.jpg',
  'mai-chau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mai_Chau_2008.jpg/1280px-Mai_Chau_2008.jpg',
  'quan-ba': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg/1280px-Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg',
  'ha-long': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/1280px-Ha_Long_Bay_in_2019.jpg',
  'da-nang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg/1280px-Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg',
  'gia-lai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ho_T%27Nung_%282%29.jpg/1280px-Ho_T%27Nung_%282%29.jpg',
  'hoang-su-phi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hoang_Su_Phi_terraces_4.jpg/1280px-Hoang_Su_Phi_terraces_4.jpg'
};

let destLines = destContent.split('\n');
let currentSlug = '';
for (let i = 0; i < destLines.length; i++) {
  const matchSlug = destLines[i].match(/slug:\s*"([^"]+)"/);
  if (matchSlug) {
    currentSlug = matchSlug[1];
  }
  if (destLines[i].includes('image: ') && currentSlug && map[currentSlug]) {
    destLines[i] = destLines[i].replace(/image:\s*"[^"]+"/, 'image: "' + map[currentSlug] + '"');
    currentSlug = '';
  }
}
fs.writeFileSync(destPath, destLines.join('\n'));
console.log('Updated destinations.ts');

const journeyPath = path.resolve('src/data/journeys.ts');
let journeyContent = fs.readFileSync(journeyPath, 'utf8');

const journeyMap = {
  'ha-giang-loop-7-ngay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/1280px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg',
  'xuyen-viet-50-ngay-xe-may': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hai_Van_Pass.jpg/1280px-Hai_Van_Pass.jpg',
  'trek-fansipan-3-ngay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/1280px-Fansipan_Summit.jpg',
  'cao-bang-ban-gioc-cuoi-tuan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'da-lat-xe-dap-5-ngay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xuan_Huong_Lake_11.jpg/1280px-Xuan_Huong_Lake_11.jpg',
  'phu-quoc-kham-pha-bac-dao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg',
  'mu-cang-chai-mua-lua-chin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mu_Cang_Chai.jpg/1280px-Mu_Cang_Chai.jpg'
};

let journeyLines = journeyContent.split('\n');
currentSlug = '';
let inGallery = false;
for (let i = 0; i < journeyLines.length; i++) {
  const matchSlug = journeyLines[i].match(/slug:\s*"([^"]+)"/);
  if (matchSlug) {
    currentSlug = matchSlug[1];
  }
  if (journeyLines[i].includes('coverImage: ') && currentSlug && journeyMap[currentSlug]) {
    journeyLines[i] = journeyLines[i].replace(/coverImage:\s*"[^"]+"/, 'coverImage: "' + journeyMap[currentSlug] + '"');
  }
  
  if (journeyLines[i].includes('gallery: [')) {
    inGallery = true;
  }
  if (inGallery && journeyLines[i].includes(']')) {
    inGallery = false;
  }
  
  // Update generic unsplash images in gallery/checkpoints with the main image to avoid grey placeholders
  if (journeyLines[i].includes('images.unsplash.com') && currentSlug && journeyMap[currentSlug]) {
    journeyLines[i] = journeyLines[i].replace(/https:\/\/images\.unsplash\.com\/photo-[^"']+/g, journeyMap[currentSlug]);
  }
}
fs.writeFileSync(journeyPath, journeyLines.join('\n'));
console.log('Updated journeys.ts');

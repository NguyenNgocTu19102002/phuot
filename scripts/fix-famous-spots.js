const fs = require('fs');
const path = require('path');

const destPath = path.resolve('src/data/destinations.ts');
let content = fs.readFileSync(destPath, 'utf8');

const localImages = [
  '/images/ha_giang.png',
  '/images/sapa.png',
  '/images/cao_bang.png',
  '/images/mu_cang_chai.png',
  '/images/da_lat.png',
  '/images/phu_quoc.png',
  '/images/ninh_binh.png',
  '/images/hai_van.png',
  '/images/da_nang.png',
  '/images/ha_long.png',
  '/images/mai_chau.png'
];

let currentIndex = 0;
function getNextLocalImage() {
  const img = localImages[currentIndex];
  currentIndex = (currentIndex + 1) % localImages.length;
  return img;
}

// Map specific wikipedia urls to specific local images if possible, otherwise use a generic sequence
const specificMap = {
  'M%C3%A3_P%C3%AD_L%C3%A8ng': '/images/ha_giang.png',
  'Fansipan': '/images/sapa.png',
  'Bangioc': '/images/cao_bang.png',
  'Son_Doong': '/images/hai_van.png', // cave placeholder
  'Cat_Cat': '/images/mai_chau.png',
  'O_Quy_Ho': '/images/ha_giang.png',
  'Dong_Van': '/images/mu_cang_chai.png',
  'L%C3%A9ng_C%C3%BA': '/images/sapa.png',
  'Suoi_lenin': '/images/cao_bang.png'
};

content = content.replace(/image:\s*"(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+)"/g, (match, url) => {
  let matchedLocal = null;
  for (const [key, localImg] of Object.entries(specificMap)) {
    if (url.includes(key)) {
      matchedLocal = localImg;
      break;
    }
  }
  const finalImage = matchedLocal || getNextLocalImage();
  return `image: "${finalImage}"`;
});

fs.writeFileSync(destPath, content);
console.log('Updated famousSpots images to local');

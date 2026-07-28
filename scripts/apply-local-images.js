const fs = require('fs');
const path = require('path');

const destPath = path.resolve('src/data/destinations.ts');
const journeyPath = path.resolve('src/data/journeys.ts');

let destContent = fs.readFileSync(destPath, 'utf8');
let journeyContent = fs.readFileSync(journeyPath, 'utf8');

const imgMap = {
  'ha-giang': '/images/ha_giang.png',
  'quan-ba': '/images/ha_giang.png',
  'dong-van': '/images/ha_giang.png',
  'sapa': '/images/sapa.png',
  'cao-bang': '/images/cao_bang.png',
  'ban-gioc': '/images/cao_bang.png',
  'nguom-ngao': '/images/cao_bang.png',
  'mu-cang-chai': '/images/mu_cang_chai.png',
  'da-lat': '/images/da_lat.png',
  'tuyen-lam': '/images/da_lat.png',
  'phu-quoc': '/images/phu_quoc.png',
  'hai-van': '/images/hai_van.png',
  'hanoi': '/images/ninh_binh.png', 
  'da-nang': '/images/da_nang.png',
  'ninh-binh': '/images/ninh_binh.png',
  'ha-long': '/images/ha_long.png',
  'mai-chau': '/images/mai_chau.png',
  'con-dao': '/images/phu_quoc.png', 
  'gia-lai': '/images/da_lat.png',
  'hoang-su-phi': '/images/mu_cang_chai.png'
};

const defaultGalleryImages = [
  '/images/ha_giang.png',
  '/images/sapa.png',
  '/images/mu_cang_chai.png',
  '/images/cao_bang.png',
  '/images/ninh_binh.png',
  '/images/hai_van.png',
  '/images/da_nang.png',
  '/images/da_lat.png',
  '/images/phu_quoc.png'
];

function getImageForLocation(locationStr) {
  const s = locationStr.toLowerCase();
  if (s.includes('hà giang')) return imgMap['ha-giang'];
  if (s.includes('quản bạ')) return imgMap['quan-ba'];
  if (s.includes('đồng văn') || s.includes('lũng cú')) return imgMap['dong-van'];
  if (s.includes('mã pì lèng')) return imgMap['ha-giang'];
  if (s.includes('bắc mê') || s.includes('mèo vạc')) return imgMap['ha-giang'];
  
  if (s.includes('vinh') || s.includes('hà nội')) return imgMap['hanoi'];
  if (s.includes('huế') || s.includes('đà nẵng') || s.includes('hải vân')) return imgMap['hai-van'];
  if (s.includes('hội an') || s.includes('quy nhơn')) return imgMap['da-nang'];
  if (s.includes('cà mau')) return imgMap['phu-quoc'];
  
  if (s.includes('fansipan') || s.includes('sa pa')) return imgMap['sapa'];
  if (s.includes('trại tôn')) return imgMap['sapa'];
  
  if (s.includes('bản giốc')) return imgMap['ban-gioc'];
  if (s.includes('ngườm ngao')) return imgMap['nguom-ngao'];
  
  if (s.includes('đà lạt')) return imgMap['da-lat'];
  if (s.includes('tuyền lâm')) return imgMap['tuyen-lam'];
  if (s.includes('langbiang')) return imgMap['da-lat'];
  
  if (s.includes('phú quốc') || s.includes('gành dầu') || s.includes('ông lang') || s.includes('an thới')) return imgMap['phu-quoc'];
  
  if (s.includes('mù cang chải') || s.includes('la pán tẩn') || s.includes('chế cu nha')) return imgMap['mu-cang-chai'];

  return defaultGalleryImages[Math.floor(Math.random() * defaultGalleryImages.length)];
}

// 1. Update destinations.ts
let destLines = destContent.split('\n');
let currentSlug = '';
for (let i = 0; i < destLines.length; i++) {
  const matchSlug = destLines[i].match(/slug:\s*"([^"]+)"/);
  if (matchSlug) {
    currentSlug = matchSlug[1];
  }
  if (destLines[i].includes('image: ') && currentSlug) {
    const imgUrl = imgMap[currentSlug] || defaultGalleryImages[Math.floor(Math.random() * defaultGalleryImages.length)];
    destLines[i] = destLines[i].replace(/image:\s*"[^"]+"/, 'image: "' + imgUrl + '"');
    currentSlug = '';
  }
}
fs.writeFileSync(destPath, destLines.join('\n'));
console.log('Fixed destinations images to local files');


// 2. Update journeys.ts
let newContent = "";
let lines = journeyContent.split("\n");
let inGallery = false;
currentSlug = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  // Capture slug to map coverImage
  const matchSlug = line.match(/slug:\s*"([^"]+)"/);
  if (matchSlug) {
    currentSlug = matchSlug[1];
  }

  // Cover image update
  if (line.includes('coverImage: ') && currentSlug) {
    // Map journey slug to an image
    let imgUrl = defaultGalleryImages[0];
    if (currentSlug.includes('ha-giang')) imgUrl = imgMap['ha-giang'];
    else if (currentSlug.includes('xuyen-viet')) imgUrl = imgMap['hai-van'];
    else if (currentSlug.includes('fansipan')) imgUrl = imgMap['sapa'];
    else if (currentSlug.includes('cao-bang')) imgUrl = imgMap['cao-bang'];
    else if (currentSlug.includes('da-lat')) imgUrl = imgMap['da-lat'];
    else if (currentSlug.includes('phu-quoc')) imgUrl = imgMap['phu-quoc'];
    else if (currentSlug.includes('mu-cang-chai')) imgUrl = imgMap['mu-cang-chai'];
    
    line = line.replace(/coverImage:\s*"[^"]+"/, 'coverImage: "' + imgUrl + '"');
  }
  
  // check if this line has a checkpoint
  if (line.includes('{ time:') && line.includes('location:')) {
    // Extract the location to determine an image
    const locMatch = line.match(/location:\s*"([^"]+)"/);
    if (locMatch) {
      const loc = locMatch[1];
      const imgUrl = getImageForLocation(loc);
      
      // If it already has an image, replace it
      if (line.includes('image:')) {
        line = line.replace(/image:\s*"[^"]+"/, `image: "${imgUrl}"`);
      }
    }
  }
  
  // update gallery images
  if (line.includes('gallery: [')) {
    newContent += line + "\n";
    i++;
    let gIndex = 0;
    while (i < lines.length && !lines[i].includes('],')) {
      let gLine = lines[i];
      if (gLine.trim().startsWith('"') || gLine.trim().startsWith('\'')) {
        // replace image in gallery
        const newImg = defaultGalleryImages[gIndex % defaultGalleryImages.length];
        gLine = gLine.replace(/["'][^"']+["']/, `"${newImg}"`);
        gIndex++;
      }
      newContent += gLine + "\n";
      i++;
    }
    line = lines[i]; // this should be '],'
  }

  newContent += line + "\n";
}

fs.writeFileSync(journeyPath, newContent);
console.log('Fixed journeys images to local files');

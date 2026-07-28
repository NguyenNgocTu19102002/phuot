const fs = require('fs');
const path = require('path');

const journeyPath = path.resolve('src/data/journeys.ts');
let journeyContent = fs.readFileSync(journeyPath, 'utf8');

// Some beautiful valid Wikimedia URLs we know
const images = {
  'ha-giang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/1280px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg',
  'quan-ba': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg/1280px-Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg',
  'dong-van': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hoang_Su_Phi_terraces_4.jpg/1280px-Hoang_Su_Phi_terraces_4.jpg', // proxy for dong van / hoang su phi
  'sapa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/1280px-Fansipan_Summit.jpg',
  'fansipan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/1280px-Fansipan_Summit.jpg',
  'cao-bang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'ban-gioc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'nguom-ngao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Son_Doong_Cave_5.jpg/1280px-Son_Doong_Cave_5.jpg', // proxy cave
  'mu-cang-chai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mu_Cang_Chai.jpg/1280px-Mu_Cang_Chai.jpg',
  'da-lat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xuan_Huong_Lake_11.jpg/1280px-Xuan_Huong_Lake_11.jpg',
  'tuyen-lam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ho_T%27Nung_%282%29.jpg/1280px-Ho_T%27Nung_%282%29.jpg',
  'phu-quoc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg',
  'hai-van': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hai_Van_Pass.jpg/1280px-Hai_Van_Pass.jpg',
  'hanoi': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg', // generic nature
  'da-nang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg/1280px-Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg',
  'ninh-binh': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg',
};

const defaultGalleryImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/1280px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mu_Cang_Chai.jpg/1280px-Mu_Cang_Chai.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hai_Van_Pass.jpg/1280px-Hai_Van_Pass.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xuan_Huong_Lake_11.jpg/1280px-Xuan_Huong_Lake_11.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg',
];

// Helper to determine image based on location text
function getImageForLocation(locationStr) {
  const s = locationStr.toLowerCase();
  if (s.includes('hà giang')) return images['ha-giang'];
  if (s.includes('quản bạ')) return images['quan-ba'];
  if (s.includes('đồng văn') || s.includes('lũng cú')) return images['dong-van'];
  if (s.includes('mã pì lèng')) return images['ha-giang'];
  if (s.includes('bắc mê') || s.includes('mèo vạc')) return images['ha-giang'];
  
  if (s.includes('vinh') || s.includes('hà nội')) return images['ninh-binh'];
  if (s.includes('huế') || s.includes('đà nẵng') || s.includes('hải vân')) return images['hai-van'];
  if (s.includes('hội an') || s.includes('quy nhơn')) return images['da-nang'];
  if (s.includes('cà mau')) return images['phu-quoc'];
  
  if (s.includes('fansipan') || s.includes('sa pa')) return images['sapa'];
  if (s.includes('trại tôn')) return images['sapa'];
  
  if (s.includes('bản giốc')) return images['ban-gioc'];
  if (s.includes('ngườm ngao')) return images['nguom-ngao'];
  
  if (s.includes('đà lạt')) return images['da-lat'];
  if (s.includes('tuyền lâm')) return images['tuyen-lam'];
  if (s.includes('langbiang')) return images['da-lat'];
  
  if (s.includes('phú quốc') || s.includes('gành dầu') || s.includes('ông lang') || s.includes('an thới')) return images['phu-quoc'];
  
  if (s.includes('mù cang chải') || s.includes('la pán tẩn') || s.includes('chế cu nha')) return images['mu-cang-chai'];

  return defaultGalleryImages[Math.floor(Math.random() * defaultGalleryImages.length)];
}

let newContent = "";
let lines = journeyContent.split("\n");

let i = 0;
while (i < lines.length) {
  let line = lines[i];
  
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
      } else {
        // inject image right before the closing brace or at the end of the object
        // Find the last comma or just before the closing brace
        line = line.replace(/ \},?$/, `, image: "${imgUrl}" },`);
      }
    }
  }
  
  // also update gallery if we are in a gallery array
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
  i++;
}

// Clean up trailing commas inside object closing if any, like `, }`
newContent = newContent.replace(/, \}/g, ' }');

fs.writeFileSync(journeyPath, newContent);
console.log('Journey checkpoints updated with realistic images.');

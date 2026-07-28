const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'ha-giang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M%C3%A3_P%C3%AD_L%C3%A8ng.jpg/1280px-M%C3%A3_P%C3%AD_L%C3%A8ng.jpg',
  'quan-ba': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg/1280px-Twin_Mountains_in_Quan_Ba%2C_Ha_Giang.jpg',
  'dong-van': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hoang_Su_Phi_terraces_4.jpg/1280px-Hoang_Su_Phi_terraces_4.jpg', 
  'sapa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Fansipan_Summit.jpg/1280px-Fansipan_Summit.jpg',
  'cao-bang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1280px-Bangioc9tam.jpg',
  'nguom-ngao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Son_Doong_Cave_5.jpg/1280px-Son_Doong_Cave_5.jpg', 
  'mu-cang-chai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mu_Cang_Chai.jpg/1280px-Mu_Cang_Chai.jpg',
  'da-lat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xuan_Huong_Lake_11.jpg/1280px-Xuan_Huong_Lake_11.jpg',
  'tuyen-lam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ho_T%27Nung_%282%29.jpg/1280px-Ho_T%27Nung_%282%29.jpg',
  'phu-quoc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg',
  'hai-van': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hai_Van_Pass.jpg/1280px-Hai_Van_Pass.jpg',
  'ninh-binh': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Muaxuantamcoc.jpg', 
  'da-nang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg/1280px-Dragon_Bridge%2C_Da_Nang_during_day_-_20230819_%28cropped%29.jpg',
  'mai-chau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mai_Chau_2008.jpg/1280px-Mai_Chau_2008.jpg',
  'ha-long': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/1280px-Ha_Long_Bay_in_2019.jpg',
  'con-dao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/ConDao_park_dam.jpg/1280px-ConDao_park_dam.jpg',
};

const imgDir = path.resolve('public/images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, function(response) {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      } else {
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', function(err) {
      fs.unlink(dest, () => reject(err.message));
    });
  });
}

async function run() {
  for (const [key, url] of Object.entries(images)) {
    const dest = path.join(imgDir, `${key}.jpg`);
    try {
      console.log(`Downloading ${key}...`);
      await download(url, dest);
      console.log(`Saved ${key}.jpg`);
      await new Promise(r => setTimeout(r, 1000)); // Delay to avoid 429
    } catch (e) {
      console.error(`Error downloading ${key}:`, e);
    }
  }
}

run();

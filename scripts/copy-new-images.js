const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\tu.nguyenngoc1\\.gemini\\antigravity\\brain\\95c37885-9ebf-400d-a8d5-2d9fce39a5f5';
const destDir = path.resolve('public/images');

const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file.endsWith('.png') && (file.startsWith('son_doong') || file.startsWith('con_dao') || file.startsWith('quan_ba'))) {
    const newName = file.replace(/_\d+\.png$/, '.png');
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
    console.log(`Copied ${file} to ${newName}`);
  }
}

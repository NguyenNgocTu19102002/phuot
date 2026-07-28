const fs = require('fs');
const path = require('path');

const destPath = path.resolve('src/data/destinations.ts');
const journeyPath = path.resolve('src/data/journeys.ts');

let destContent = fs.readFileSync(destPath, 'utf8');
let journeyContent = fs.readFileSync(journeyPath, 'utf8');

// Function to replace wikimedia urls with loremflickr
let lockCounter = 100;
function getNewImage() {
  lockCounter++;
  return `https://loremflickr.com/1200/800/vietnam,landscape,travel?lock=${lockCounter}`;
}

const map = {};

// Replace in destinations
destContent = destContent.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"']+/g, (match) => {
  if (!map[match]) {
    map[match] = getNewImage();
  }
  return map[match];
});

fs.writeFileSync(destPath, destContent);
console.log('Fixed destinations images');

// Replace in journeys
journeyContent = journeyContent.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"']+/g, (match) => {
  if (!map[match]) {
    map[match] = getNewImage();
  }
  return map[match];
});

fs.writeFileSync(journeyPath, journeyContent);
console.log('Fixed journeys images');

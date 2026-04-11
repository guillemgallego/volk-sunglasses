import fs from 'fs';
import path from 'path';

const imagesDir = 'public/images';
const blogDir = 'src/content/blog';

// 1. Rename files in public/images
const files = fs.readdirSync(imagesDir);
for (const file of files) {
  if (file.includes('%')) {
    try {
      const decodedName = decodeURIComponent(file);
      if (decodedName !== file) {
        fs.renameSync(
          path.join(imagesDir, file),
          path.join(imagesDir, decodedName)
        );
        console.log(`Renamed: ${file} -> ${decodedName}`);
      }
    } catch (e) {
      console.log(`Failed to decode: ${file}`);
    }
  }
}

// 2. Decode filenames in markdown files
const mdFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
let changes = 0;

for (const mf of mdFiles) {
  const mfPath = path.join(blogDir, mf);
  let content = fs.readFileSync(mfPath, 'utf8');
  let original = content;

  // Search for anything with % in image paths and decode it. 
  // e.g. /images/...%D0%9E...jpg
  content = content.replace(/\/images\/[^"'\s\n\(\)]+/g, (match) => {
    if (match.includes('%')) {
      try {
        return decodeURIComponent(match);
      } catch (e) {
        return match;
      }
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(mfPath, content, 'utf8');
    console.log(`Updated images in: ${mf}`);
    changes++;
  }
}

console.log(`Total markdown files updated: ${changes}`);

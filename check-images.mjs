import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let frontmatterMissing = 0;
let inlineMissing = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  
  // Frontmatter
  const match = content.match(/image:\s*"([^"]+)"/);
  if (match && match[1]) {
    const imgPath = match[1]; // /images/xxx
    const localPath = path.join('public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.log('MISSING FRONTMATTER IMAGE:', imgPath, 'in file', file);
      frontmatterMissing++;
    }
  }

  // Inline images
  const regex = /<img[^>]+src=["']([^"']+)["']/g;
  let imgMatch;
  while ((imgMatch = regex.exec(content)) !== null) {
    const imgPath = imgMatch[1];
    if (imgPath.startsWith('http')) continue; // Ignore external for now
    const localPath = path.join('public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.log('MISSING INLINE IMAGE:', imgPath, 'in file', file);
      inlineMissing++;
    }
  }
}
console.log('Total Missing Frontmatter:', frontmatterMissing);
console.log('Total Missing Inline:', inlineMissing);

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const contentDir = join(__dirname, '../src/content');

const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);
const SIZE_THRESHOLD = 500 * 1024; // only compress files over 500KB

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...await findImages(full));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      const { size } = await stat(full);
      if (size > SIZE_THRESHOLD) images.push({ path: full, size });
    }
  }
  return images;
}

async function compressImage(filePath, originalSize) {
  const ext = extname(filePath).toLowerCase();
  const tmp = filePath + '.tmp';

  const pipeline = sharp(filePath);
  if (ext === '.png') {
    pipeline.png({ quality: 80, compressionLevel: 9 });
  } else {
    pipeline.jpeg({ quality: 80, mozjpeg: true });
  }

  await pipeline.toFile(tmp);
  const { size: newSize } = await stat(tmp);

  if (newSize < originalSize) {
    await import('fs').then(fs => fs.promises.rename(tmp, filePath));
    const saved = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`  ${basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024 / 1024).toFixed(1)}MB (${saved}% smaller)`);
  } else {
    await import('fs').then(fs => fs.promises.unlink(tmp));
    console.log(`  ${basename(filePath)}: skipped (already optimized)`);
  }
}

const images = await findImages(contentDir);
console.log(`Found ${images.length} images over 500KB\n`);
for (const { path, size } of images.sort((a, b) => b.size - a.size)) {
  await compressImage(path, size);
}
console.log('\nDone.');

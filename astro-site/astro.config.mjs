import { defineConfig, sharpImageService } from 'astro/config';
import rehypeFigure from 'rehype-figure';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://kenneth.dsouza.im',
  outDir: './dist',
  image: {
    service: sharpImageService(),
    defaultFormat: 'webp',
    quality: 80,
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeFigure, { className: 'image-figure' }]
    ],
  },
});

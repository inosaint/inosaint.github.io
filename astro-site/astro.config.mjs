import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';

export default defineConfig({
  site: 'https://inosaint.github.io',
  outDir: './dist',
  markdown: {
    rehypePlugins: [
      [rehypeFigure, { className: 'image-figure' }]
    ],
  },
});

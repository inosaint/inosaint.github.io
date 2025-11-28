import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://kenneth.dsouza.im',
  outDir: './dist',
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeFigure, { className: 'image-figure' }]
    ],
  },
});

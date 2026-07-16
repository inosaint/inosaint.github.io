import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigure from 'rehype-figure';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://kenneth.dsouza.im',
  outDir: './dist',
  integrations: [expressiveCode(), mdx()],
  image: {
    service: sharpImageService(),
    defaultFormat: 'webp',
    quality: 80,
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeFigure, { className: 'image-figure' }]
      ],
    }),
  },
});

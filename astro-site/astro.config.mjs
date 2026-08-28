import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigure from 'rehype-figure';
import remarkGfm from 'remark-gfm';

// Draft entries are still built (so their URLs stay shareable) but must be kept out
// of the sitemap and out of search/AI indexes. Read frontmatter directly — this file
// runs before `astro:content` is available.
const draftPaths = ['work', 'writing'].flatMap((collection) => {
  const base = join('src/content', collection);
  if (!existsSync(base)) return [];
  return readdirSync(base, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => {
      const file = ['index.md', 'index.mdx']
        .map((name) => join(base, entry.name, name))
        .find((candidate) => existsSync(candidate));
      if (!file) return false;
      return /^status:\s*['"]?draft['"]?\s*$/m.test(readFileSync(file, 'utf8'));
    })
    .map((entry) => `/${collection}/${entry.name}/`);
});

export default defineConfig({
  site: 'https://kenneth.dsouza.im',
  outDir: './dist',
  integrations: [expressiveCode(), mdx(), sitemap({
    filter: (page) => {
      const path = new URL(page).pathname;
      return !draftPaths.includes(path);
    },
  })],
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

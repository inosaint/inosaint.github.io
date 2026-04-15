import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    url: z.string().optional(), // optional for external posts
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    year: z.string(), // Required: format "YYYY" or "YYYY-YYYY"
    company: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = {
  writing,
  work,
};

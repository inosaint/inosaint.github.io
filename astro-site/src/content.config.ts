import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Set only when a published post is materially revised; drives the
    // freshness line in llms.txt so agents can tell a stale cache from a new one.
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    image: image().optional(),
    url: z.string().optional(), // optional for external posts
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    year: z.string(), // Required: format "YYYY" or "YYYY-YYYY"
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    company: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = {
  writing,
  work,
};

import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    url: z.string().optional(), // optional for external posts
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    year: z.string().optional(),
    company: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = {
  writing,
  projects,
};

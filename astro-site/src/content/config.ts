import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    url: z.string().optional(), // optional for external posts
  }),
});

export const collections = {
  writing,
};

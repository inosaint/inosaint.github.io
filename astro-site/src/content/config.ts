import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    url: z.string().optional(), // optional for external posts
  }),
});

export const collections = {
  writing,
};

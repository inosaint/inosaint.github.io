import { getCollection } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { externalWritings } from '../data/external-writing';

export type WritingCardItem = {
  /** Post slug for local writing, the entry's id for external pieces. */
  id: string;
  title: string;
  description: string;
  url: string;
  image?: ImageMetadata;
  imageUrl?: string;
  date: Date;
  isInternal: boolean;
};

// Local posts and external pieces in one list, newest first — the shape the
// /writing grid and the Work page's writing section both render.
export async function getWritingCards(): Promise<WritingCardItem[]> {
  const internal = await getCollection('writing', ({ data }) => data.status === 'published');

  return [
    ...internal.map((post) => ({
      id: post.id,
      title: post.data.title,
      description: post.data.description,
      url: `/writing/${post.id}/`,
      image: post.data.image,
      imageUrl: post.data.image ? undefined : 'https://placehold.co/450x250',
      date: new Date(post.data.date),
      isInternal: true,
    })),
    ...externalWritings.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      url: post.url,
      imageUrl: post.image,
      date: post.date,
      isInternal: false,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('writing', ({ data }) => data.status === 'published');

  const items = posts
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: post.data.url ?? `/writing/${post.slug}/`,
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Kenneth Mark Dsouza — Writing',
    description:
      'Writing from Kenneth Mark Dsouza, a Product Design Manager with experience building and leading design teams in India and Indonesia.',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}

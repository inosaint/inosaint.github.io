import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const externalWritings = [
  {
    title: 'Squads as a Growth Engine for Designers',
    description: 'How we used squads to help our designers level up at Jiva',
    link: 'https://medium.com/notes-from-the-fields/how-we-used-squads-to-help-our-designers-level-up-443fcbc52e2f',
    pubDate: new Date('2025-08-18'),
  },
  {
    title: 'Redesigning the Sahabat Jiva app',
    description: 'From Field Insights to Better UX for our Sahabat Jivas',
    link: 'https://medium.com/notes-from-the-fields/from-field-insights-to-better-ux-for-our-sahabat-jivas-3056b32ba51f',
    pubDate: new Date('2025-05-15'),
  },
  {
    title: 'How a sticker design became an unofficial Mascot',
    description: 'The story of how a last-minute sticker design became a beloved company icon',
    link: 'https://medium.com/notes-from-the-fields/more-than-swag-how-a-last-minute-sticker-became-a-company-icon-42d86246e736',
    pubDate: new Date('2024-11-28'),
  },
  {
    title: 'Designing the Akar Design System',
    description: 'Taming the chaos of hypergrowth with a lean approach to building a design system',
    link: 'https://medium.com/notes-from-the-fields/taming-the-chaos-of-hypergrowth-our-lean-approach-to-building-a-design-system-part-1-2adbb24ddef0',
    pubDate: new Date('2024-10-17'),
  },
  {
    title: 'Gamify DesignOps with human connection',
    description: 'A talk about bringing human connection into DesignOps',
    link: 'https://www.youtube.com/watch?v=c__raLe34ZU',
    pubDate: new Date('2023-08-09'),
  },
  {
    title: "How Gojek's design & research teams collaborate effectively across borders",
    description: 'Insights on cross-border collaboration',
    link: 'https://www.gojek.io/blog/near-far-wherever-we-are',
    pubDate: new Date('2020-09-08'),
  },
  {
    title: 'What every young designer should know',
    description: 'Advice for product designers fresh out of college or the first hire to a company',
    link: 'https://uxdesign.cc/what-every-young-designer-should-know-abb2af79f43e',
    pubDate: new Date('2016-07-25'),
  },
];

export async function GET(context) {
  const posts = await getCollection('writing', ({ data }) => data.status === 'published');

  const internalItems = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.date,
    link: post.data.url ?? `/writing/${post.slug}/`,
  }));

  const items = [...internalItems, ...externalWritings].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'Kenneth Mark Dsouza — Writing and Talks',
    description:
      'Writing and talks from Kenneth Mark Dsouza, a Product Design Manager with experience building and leading design teams in India and Indonesia.',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}

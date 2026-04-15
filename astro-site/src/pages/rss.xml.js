import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt({ html: true, linkify: true });

export async function GET(context) {
  const posts = await getCollection('writing', ({ data }) => data.status === 'published');

  const items = posts
    .map((post) => {
      const link = post.data.url ?? `/writing/${post.id}/`;
      const absoluteLink = new URL(link, context.site).href;

      const renderedHtml = parser.render(post.body ?? '');
      const sanitized = sanitizeHtml(renderedHtml, {
        // Strip images — originals reference files under src/content/writing/... that
        // aren't exposed at a stable URL in the built site, so they'd 404 in readers.
        allowedTags: sanitizeHtml.defaults.allowedTags.filter((t) => t !== 'img'),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          a: ['href', 'name', 'target', 'rel', 'title'],
        },
        transformTags: {
          // Rewrite relative links to absolute URLs so feed readers can follow them.
          a: (tagName, attribs) => {
            if (attribs.href) {
              try {
                attribs.href = new URL(attribs.href, absoluteLink).href;
              } catch {
                // leave href as-is on parse failure
              }
            }
            return { tagName, attribs };
          },
        },
      });

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link,
        content: sanitized,
      };
    })
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

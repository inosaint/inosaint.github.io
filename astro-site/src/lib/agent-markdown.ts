import type { CollectionEntry } from 'astro:content';

export const SITE = 'https://kenneth.dsouza.im';

type Entry = CollectionEntry<'work'> | CollectionEntry<'writing'>;

// Only published, locally hosted entries get a Markdown twin. External posts
// already have a canonical home elsewhere; drafts must stay out of agent indexes.
export const hasMarkdown = (entry: Entry) =>
  entry.data.status === 'published' && !('url' in entry.data && entry.data.url);

export const markdownPath = (collection: 'work' | 'writing', id: string) => `/${collection}/${id}.md`;

// Colocated images are hashed and moved at build time, so their relative paths
// would 404 from the .md URL. Keep the alt text (it carries the meaning), drop the
// rest of the raw HTML and MDX scaffolding, and leave ordinary Markdown alone.
const cleanBody = (markdown: string) =>
  markdown
    .replace(/^import\s.+$/gm, '')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/<YouTube\s+id="([^"]+)"(?:\s+title="([^"]*)")?[^>]*\/>/g, (_, id, title) =>
      `[${title || 'Video'}](https://www.youtube.com/watch?v=${id})`,
    )
    .replace(/<iframe[^>]*\ssrc="([^"]+)"[^>]*>[\s\S]*?<\/iframe>/gi, '[Embedded content]($1)')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt) => (alt.trim() ? `*[Image: ${alt.trim()}]*` : ''))
    .replace(/<img[^>]*\salt="([^"]+)"[^>]*>/gi, '*[Image: $1]*')
    .replace(/<\/?[A-Za-z][^>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const iso = (date: Date) => date.toISOString().slice(0, 10);

export const entryToMarkdown = (collection: 'work' | 'writing', entry: Entry) => {
  const { data } = entry;
  const pageUrl = `${SITE}/${collection}/${entry.id}/`;

  const meta = [
    `source: ${pageUrl}`,
    'author: Kenneth Mark Dsouza',
    'date' in data && `published: ${iso(data.date)}`,
    'year' in data && `year: ${data.year}`,
    'company' in data && data.company && `company: ${data.company}`,
    data.updated && `updated: ${iso(data.updated)}`,
    data.tags.length && `tags: ${data.tags.join(', ')}`,
  ].filter(Boolean);

  return `# ${data.title}

> ${data.description}

${meta.map((line) => `- ${line}`).join('\n')}

${cleanBody(entry.body ?? '')}
`;
};

export const markdownResponse = (body: string) =>
  new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });

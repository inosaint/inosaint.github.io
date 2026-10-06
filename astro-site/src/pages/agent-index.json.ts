import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE, hasMarkdown, markdownPath } from '../lib/agent-markdown';

// Compact catalogue of published pages, fetched on demand by the WebMCP tools in
// BaseLayout. Kept out of the page HTML so ordinary visitors never download it.
export const GET: APIRoute = async () => {
  const published = ({ data }: { data: { status: string } }) => data.status === 'published';

  const writing = (await getCollection('writing', published))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((entry) => ({
      type: 'writing',
      title: entry.data.title,
      description: entry.data.description,
      url: entry.data.url ?? `${SITE}/writing/${entry.id}/`,
      markdown: hasMarkdown(entry) ? `${SITE}${markdownPath('writing', entry.id)}` : null,
      date: entry.data.date.toISOString().slice(0, 10),
      tags: entry.data.tags,
    }));

  const work = (await getCollection('work', published))
    .sort((a, b) => b.data.year.localeCompare(a.data.year))
    .map((entry) => ({
      type: 'work',
      title: entry.data.title,
      description: entry.data.description,
      url: `${SITE}/work/${entry.id}/`,
      markdown: `${SITE}${markdownPath('work', entry.id)}`,
      year: entry.data.year,
      company: entry.data.company ?? null,
      tags: entry.data.tags,
    }));

  return new Response(JSON.stringify({ site: SITE, pages: [...work, ...writing] }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

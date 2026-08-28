import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const SITE = 'https://kenneth.dsouza.im';

export const GET: APIRoute = async () => {
  const writing = (await getCollection('writing', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const work = (await getCollection('work', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.year.localeCompare(a.data.year));

  const workLines = work.map((entry) => {
    const context = [entry.data.company, entry.data.year].filter(Boolean).join(', ');
    return `- [${entry.data.title}](${SITE}/work/${entry.id}/)${context ? ` (${context})` : ''}: ${entry.data.description}`;
  });

  // External posts point at their canonical home rather than a local page.
  const writingLines = writing.map((entry) => {
    const href = entry.data.url ?? `${SITE}/writing/${entry.id}/`;
    const year = entry.data.date.getUTCFullYear();
    return `- [${entry.data.title}](${href}) (${year}): ${entry.data.description}`;
  });

  const body = `# Kenneth Mark Dsouza

> Product Design Manager with experience building and leading design teams in India and Indonesia. Previously senior design manager at Jiva (agritech, Indonesia), and design lead at Gojek (GoBiz merchant SuperApp) and Practo (healthcare, India).

This is the personal site and portfolio of Kenneth Mark Dsouza. It holds long-form case studies of product design work, writing on design practice and AI, and a resume.

## Work

${workLines.join('\n')}

## Writing

${writingLines.join('\n')}

## About

- [Home](${SITE}/): Biography, selected work, and recent writing.
- [Resume](${SITE}/resume): Full professional history.
- [Resume (PDF)](${SITE}/resume.pdf): Downloadable resume.

## Optional

- [Full text of all pages](${SITE}/llms-full.txt): Every published case study and post as plain text.
- [RSS feed](${SITE}/rss.xml): Writing, in reverse-chronological order.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

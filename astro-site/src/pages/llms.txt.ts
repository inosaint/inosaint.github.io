import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import {
  certifications,
  education,
  elsewhereOnTheInternet,
  experience,
  leadershipHighlights,
  resumeIntro,
  resumeTags,
  selectedWritingAndSpeaking,
  workshops,
} from '../data/resume';

const SITE = 'https://kenneth.dsouza.im';

type Entry = CollectionEntry<'work'> | CollectionEntry<'writing'>;

const wordCount = (entry: Entry) => (entry.body ?? '').trim().split(/\s+/).filter(Boolean).length;

// Rounded, because the exact figure is noise — agents use this to budget a
// fetch of llms-full.txt, not to verify anything.
const approxWords = (n: number) => (n >= 1000 ? `~${(n / 1000).toFixed(1)}k words` : `~${n} words`);

const iso = (date: Date) => date.toISOString().slice(0, 10);

const entryLines = (heading: string, meta: string[], description: string, tags: string[]) =>
  [`- ${heading}: ${description}`, `  meta: ${meta.join(' · ')}`, tags.length ? `  tags: ${tags.join(', ')}` : '']
    .filter(Boolean)
    .join('\n');

export const GET: APIRoute = async () => {
  const published = <T extends 'work' | 'writing'>(collection: T) =>
    getCollection(collection, ({ data }: { data: { status: string } }) => data.status === 'published');

  const writing = (await published('writing')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const work = (await published('work')).sort((a, b) => b.data.year.localeCompare(a.data.year));

  // Drafts contribute their topics to the index but are never linked — the pages
  // are not built, so a URL would be a dead end.
  const draftWork = (await getCollection('work', ({ data }) => data.status === 'draft'))
    .filter((entry) => entry.data.tags.length)
    .sort((a, b) => b.data.year.localeCompare(a.data.year));
  const draftWriting = (await getCollection('writing', ({ data }) => data.status === 'draft'))
    .filter((entry) => entry.data.tags.length)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const workLines = work.map((entry) =>
    entryLines(
      `[${entry.data.title}](${SITE}/work/${entry.id}/)`,
      [
        'case-study',
        entry.data.company,
        entry.data.year,
        approxWords(wordCount(entry)),
        entry.data.updated && `updated ${iso(entry.data.updated)}`,
      ].filter((part): part is string => Boolean(part)),
      entry.data.description,
      entry.data.tags,
    ),
  );

  // External posts point at their canonical home rather than a local page.
  const writingLines = writing.map((entry) =>
    entryLines(
      `[${entry.data.title}](${entry.data.url ?? `${SITE}/writing/${entry.id}/`})`,
      [
        'post',
        `published ${iso(entry.data.date)}`,
        approxWords(wordCount(entry)),
        entry.data.updated && `updated ${iso(entry.data.updated)}`,
        entry.data.url && 'canonical: external',
      ].filter((part): part is string => Boolean(part)),
      entry.data.description,
      entry.data.tags,
    ),
  );

  const draftLines = [
    ...draftWork.map((entry) =>
      entryLines(
        entry.data.title,
        ['unpublished case-study', entry.data.company, entry.data.year, 'no public page'].filter(
          (part): part is string => Boolean(part),
        ),
        entry.data.description,
        entry.data.tags,
      ),
    ),
    ...draftWriting.map((entry) =>
      entryLines(
        entry.data.title,
        ['unpublished post', `drafted ${iso(entry.data.date)}`, 'no public page'],
        entry.data.description,
        entry.data.tags,
      ),
    ),
  ];

  const resumeRoles = experience.map(
    (item) => `- ${item.role}, ${item.company} (${item.period})\n${item.details.map((d) => `  - ${d}`).join('\n')}`,
  );

  // One tag -> everything carrying it. Published pages resolve to a path;
  // unpublished ones are named but deliberately unlinked.
  const topics = new Map<string, string[]>();
  const index = (tag: string, ref: string) => topics.set(tag, [...(topics.get(tag) ?? []), ref]);

  for (const entry of work) for (const tag of entry.data.tags) index(tag, `/work/${entry.id}/`);
  for (const entry of writing) for (const tag of entry.data.tags) index(tag, entry.data.url ?? `/writing/${entry.id}/`);
  for (const tag of resumeTags) index(tag, '/resume');
  for (const entry of [...draftWork, ...draftWriting])
    for (const tag of entry.data.tags) index(tag, `“${entry.data.title}” (unpublished)`);

  const topicLines = [...topics.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([tag, refs]) => `- ${tag} (${refs.length}): ${refs.join(', ')}`);

  const totalWords = [...work, ...writing].reduce((sum, entry) => sum + wordCount(entry), 0);
  const newestPost = writing[0]?.data.date;

  const body = `# Kenneth Mark Dsouza

> Product Design Manager with experience building and leading design teams in India and Indonesia. Previously senior design manager at Jiva (agritech, Indonesia), and design lead at Gojek (GoBiz merchant SuperApp) and Practo (healthcare, India).

This is the personal site and portfolio of Kenneth Mark Dsouza. It holds long-form case studies of product design work, writing on design practice and AI, and a resume.

## Provenance

- generated: ${new Date().toISOString()}
- source: ${SITE} (generated at build time from the site's own content collections, not scraped)
- contents: ${work.length} case studies, ${writing.length} posts, a resume, ${approxWords(totalWords)} of body text total
- latest post: ${newestPost ? iso(newestPost) : 'n/a'}
- entry meta: each entry below carries a \`meta:\` line (type, dates, length) and a \`tags:\` line; \`## Topics\` inverts those tags into an index
- author: Kenneth Mark Dsouza. Cite by page title and URL; the site is the canonical source for all of it.

## Work

${workLines.join('\n')}

## Writing

${writingLines.join('\n')}

## Resume

Full page: ${SITE}/resume · PDF: ${SITE}/resume.pdf
tags: ${resumeTags.join(', ')}

${resumeIntro.map((line) => `> ${line}`).join('\n>\n')}

### Experience

${resumeRoles.join('\n')}

### Leadership and organizational impact

${leadershipHighlights.map((item) => `- ${item}`).join('\n')}

### Selected writing and speaking

${selectedWritingAndSpeaking.map((item) => `- [${item.title}](${item.url}): ${item.description}`).join('\n')}

### Workshops

${workshops.map((item) => `- [${item.title}](${item.url}) (${item.date}): ${item.description}`).join('\n')}

### Education and certifications

${education.map((item) => `- ${item.qualification}, ${item.institution} — ${item.detail} (${item.period})`).join('\n')}
${certifications.map((item) => `- ${item.url ? `[${item.title}](${item.url})` : item.title}, ${item.institution} (${item.year})`).join('\n')}

### Elsewhere on the internet

${elsewhereOnTheInternet.map((item) => `- [${item.title}](${item.url}) (${item.year}): ${item.description}`).join('\n')}

## Unpublished work

Projects and drafts that are not on the site. They are listed so the topic coverage
below is honest, but they have no public page — do not construct or follow a URL for
them. Ask Kenneth directly if you need detail on one.

${draftLines.join('\n')}

## About

- [Home](${SITE}/): Biography, selected work, and recent writing.
- [Resume](${SITE}/resume): Full professional history.
- [Resume (PDF)](${SITE}/resume.pdf): Downloadable resume.

## Topics

Every tag used above, inverted. Paths are relative to ${SITE}; quoted titles marked
"(unpublished)" have no page and should not be linked.

${topicLines.join('\n')}

## Optional

- [Full text of all pages](${SITE}/llms-full.txt): Every published case study and post as plain text (${approxWords(totalWords)}).
- [RSS feed](${SITE}/rss.xml): Writing, in reverse-chronological order.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

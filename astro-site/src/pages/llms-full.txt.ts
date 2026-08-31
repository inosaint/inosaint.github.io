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

// The bodies are Markdown with colocated image references and the occasional raw
// HTML embed. Strip the parts that carry no meaning without the rendered page.
const toPlainText = (markdown: string) =>
  markdown
    .replace(/^import\s.+$/gm, '')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const section = (
  entry: CollectionEntry<'work'> | CollectionEntry<'writing'>,
  url: string,
  meta: string,
) =>
  `## ${entry.data.title}

Source: ${url}
${meta}

${entry.data.description}

${toPlainText(entry.body ?? '')}`;

const resumeSection = () => `Source: ${SITE}/resume
Tags: ${resumeTags.join(', ')}

${resumeIntro.join('\n\n')}

### Experience

${experience
  .map((item) => `${item.role}, ${item.company} (${item.period})\n${item.details.map((d) => `- ${d}`).join('\n')}`)
  .join('\n\n')}

### Leadership and organizational impact

${leadershipHighlights.map((item) => `- ${item}`).join('\n')}

### Selected writing and speaking

${selectedWritingAndSpeaking.map((item) => `- ${item.title} (${item.url}): ${item.description}`).join('\n')}

### Workshops

${workshops.map((item) => `- ${item.title} (${item.date}, ${item.url}): ${item.description}`).join('\n')}

### Education

${education.map((item) => `- ${item.qualification}, ${item.institution} — ${item.detail} (${item.period})`).join('\n')}

### Certifications

${certifications.map((item) => `- ${item.title}, ${item.institution} (${item.year})`).join('\n')}

### Elsewhere on the internet

${elsewhereOnTheInternet.map((item) => `- ${item.title} (${item.year}, ${item.url}): ${item.description}`).join('\n')}`;

export const GET: APIRoute = async () => {
  const work = (await getCollection('work', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.year.localeCompare(a.data.year))
    .map((entry) =>
      section(
        entry,
        `${SITE}/work/${entry.id}/`,
        [
          entry.data.company && `Company: ${entry.data.company}`,
          `Year: ${entry.data.year}`,
          entry.data.updated && `Updated: ${entry.data.updated.toISOString().slice(0, 10)}`,
          entry.data.tags.length && `Tags: ${entry.data.tags.join(', ')}`,
        ]
          .filter(Boolean)
          .join('\n'),
      ),
    );

  const writing = (await getCollection('writing', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((entry) =>
      section(
        entry,
        entry.data.url ?? `${SITE}/writing/${entry.id}/`,
        [
          `Published: ${entry.data.date.toISOString().slice(0, 10)}`,
          entry.data.updated && `Updated: ${entry.data.updated.toISOString().slice(0, 10)}`,
          entry.data.tags.length && `Tags: ${entry.data.tags.join(', ')}`,
        ]
          .filter(Boolean)
          .join('\n'),
      ),
    );

  const body = `# Kenneth Mark Dsouza — full text

> Product Design Manager with experience building and leading design teams in India and Indonesia.

Every published case study and post from ${SITE}, as plain text.

---

# Work

${work.join('\n\n---\n\n')}

---

# Writing

${writing.join('\n\n---\n\n')}

---

# Resume

${resumeSection()}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

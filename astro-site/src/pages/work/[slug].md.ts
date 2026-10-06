import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import { entryToMarkdown, hasMarkdown, markdownResponse } from '../../lib/agent-markdown';

// /work/<slug>.md — the case study as Markdown. See writing/[slug].md.ts.
export async function getStaticPaths() {
  const entries = await getCollection('work', hasMarkdown);
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export const GET: APIRoute<{ entry: CollectionEntry<'work'> }> = ({ props }) =>
  markdownResponse(entryToMarkdown('work', props.entry));

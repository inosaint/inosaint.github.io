import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import { entryToMarkdown, hasMarkdown, markdownResponse } from '../../lib/agent-markdown';

// /writing/<slug>.md — the post as Markdown, for agents. GitHub Pages can't do
// Accept-header negotiation, so this sits beside the HTML page and is advertised
// with <link rel="alternate" type="text/markdown"> in its <head>.
export async function getStaticPaths() {
  const entries = await getCollection('writing', hasMarkdown);
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export const GET: APIRoute<{ entry: CollectionEntry<'writing'> }> = ({ props }) =>
  markdownResponse(entryToMarkdown('writing', props.entry));

import type { APIRoute } from "astro";
import { getProjects, projectUrl } from "../lib/projects";
import { site } from "../data/site";

/** Atom feed at /feed.xml, same structure as the old jekyll-feed output. */
const escapeXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cdata = (s: string) => `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
const stripHtml = (s: string) => s.replace(/<[^>]*>/g, "");
const iso = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, "+00:00");

export const GET: APIRoute = async () => {
  // jekyll-feed lists the newest posts first
  const projects = (await getProjects()).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const author = `<author><name>${escapeXml(site.author)}</name></author>`;

  const entries = projects
    .map((p) => {
      const url = `${site.url}${projectUrl(p)}`;
      const date = iso(p.data.date);
      const title = escapeXml(p.data.title);
      return (
        `<entry><title type="html">${title}</title>` +
        `<link href="${url}" rel="alternate" type="text/html" title="${title}" />` +
        `<published>${date}</published><updated>${date}</updated><id>${url}</id>` +
        `<content type="html" xml:base="${url}">${cdata("")}</content>${author}` +
        `<category term="post" /><summary type="html">${cdata(stripHtml(p.data.description))}</summary></entry>`
      );
    })
    .join("");

  const body =
    `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom" >` +
    `<generator uri="https://astro.build/">Astro</generator>` +
    `<link href="${site.url}/feed.xml" rel="self" type="application/atom+xml" />` +
    `<link href="${site.url}/" rel="alternate" type="text/html" />` +
    `<updated>${iso(new Date())}</updated><id>${site.url}/feed.xml</id>` +
    `<title type="html">${escapeXml(site.title)}</title><subtitle>${escapeXml(site.description)}</subtitle>${author}` +
    entries +
    `</feed>`;

  return new Response(body, { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
};

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Optional text field: Jekyll front matter often has empty values (e.g. `fb_img:`). */
const optionalText = z.string().nullish();

/** A group of info items, as rendered by InfoGroup (details, references, about sections). */
export const infoGroup = z.object({
  tag: z.string(),
  title: optionalText,
  item: z.array(
    z.object({
      subtitle: optionalText,
      text: z.array(z.object({ line: z.coerce.string() })),
      link: optionalText,
    }),
  ),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    title: z.string(),
    type: z.string(),
    /** Position on the home page (ascending) and in the "See next project" cycle. */
    index: z.number(),
    /** May contain HTML (links, <i>). */
    description: z.string(),
    /** Avatar file name inside /assets/ */
    img: z.string(),
    link: optionalText,
    gallery: z.array(
      z.object({
        /** File name inside /assets/projects/<slug>/ */
        img: optionalText,
        /** Video embed URL (Vimeo); when set, an iframe is rendered instead of the image */
        src: optionalText,
        alt: optionalText,
        caption: optionalText,
      }),
    ),
    details: infoGroup,
    references: infoGroup.optional(),
    fb_title: optionalText,
    fb_description: optionalText,
    fb_img: optionalText,
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    fb_title: optionalText,
    fb_description: optionalText,
    fb_img: optionalText,
    /** About page */
    bio: optionalText,
    img: optionalText,
    experience: infoGroup.optional(),
    events: infoGroup.optional(),
    awards: infoGroup.optional(),
    tools: infoGroup.optional(),
    website: infoGroup.optional(),
  }),
});

export const collections = { projects, pages };

import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** Published projects, sorted by `index` (home page order). Drafts are hidden in production and dev alike, like Jekyll's `_` prefix. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.index - b.data.index);
}

export const projectUrl = (p: Project) => `/${p.id}`;

/** "See next project": the project whose index is (index + 1) % count, as in the old footer. */
export function nextProject(projects: Project[], current: Project) {
  const target = (current.data.index + 1) % projects.length;
  const next = projects.find((p) => p.data.index === target);
  return next ? { title: next.data.title, url: projectUrl(next) } : undefined;
}

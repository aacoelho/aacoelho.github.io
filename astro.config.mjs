// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * React 19 injects `<link rel="preload" as="image">` before every <img> it renders on the server.
 * The old site had no such tags (and they sit between list items), so strip them to keep the
 * markup identical. Remove this when moving to astro:assets / lazy-loaded images.
 */
/** @returns {import("astro").AstroIntegration} */
function stripReactImagePreloads() {
  return {
    name: "strip-react-image-preloads",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith(".html"));
        for (const name of files) {
          const file = join(root, name);
          const html = await readFile(file, "utf8");
          const out = html.replace(/<link rel="preload" as="image" href="[^"]*"\/>/g, "");
          if (out !== html) await writeFile(file, out);
        }
      },
    },
  };
}

export default defineConfig({
  site: "https://angelacoelho.com",
  integrations: [react(), stripReactImagePreloads()],
  // `[slug].astro` -> `mjf.html` (served as /mjf), `about/index.astro` -> `/about/`
  // This keeps every URL identical to the old Jekyll site.
  build: {
    format: "preserve",
    // Inline the full stylesheet in <head> (replaces the hand-made criticalstyles.css)
    inlineStylesheets: "always",
  },
  trailingSlash: "ignore",
  vite: {
    build: {
      // Don't let the minifier reorder/merge declarations: keep the CSS exactly as Sass compiles it.
      cssMinify: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // The SCSS still uses @import; silence Dart Sass deprecation noise for now.
          silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div"],
        },
      },
    },
  },
});

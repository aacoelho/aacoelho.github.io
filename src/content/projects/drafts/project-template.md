---
# ─────────────────────────────────────────────────────────────────────────────
# PROJECT TEMPLATE: copy this file to start a new project.
#
#   1. Copy it to src/content/projects/drafts/<slug>.md while you work on it.
#      Everything in drafts/ is hidden from the site.
#   2. Put the avatar in        public/assets/<img>
#      and gallery images in    public/assets/projects/<slug>/
#   3. Replace the placeholders below.
#   4. To publish, move the file up to src/content/projects/<slug>.md.
#      The file name becomes the URL (my-project.md → angelacoelho.com/my-project).
#
# This file lives in drafts/, so it never appears on the site, but the build
# still checks it against the schema (src/content.config.ts).
# ─────────────────────────────────────────────────────────────────────────────

# Optional: set to true to hide a project without moving it into drafts/.
draft: false

# Used for the feed (newest first). Format: YYYY-MM-DD
date: 2026-01-01

# Position on the home page (0 = first) and in the "See next project" cycle.
# Published projects should use consecutive numbers starting at 0.
index: 99

title: "Project Name"

# Shown under the title and on the home page card. Can contain HTML.
type: "Frontend Development"

# Intro paragraph. Can contain HTML, e.g. links styled like the rest of the site:
# <a class='f_textBig-link' target='_blank' href='https://example.com'>Example</a>
description: "Short description of the project: what it is, the goal, and your role. Project developed while working with <a class='f_textBig-link' target='_blank' href='https://example.com/'>Company Name</a>."

# Avatar for the home page card, a file inside public/assets/
img: "avatar_project-name.png"

# "Visit Website" button. Leave empty ("") to hide it.
link: "https://example.com/"

# Social sharing (og:title, og:description, og:image). fb_img is a file inside public/assets/
fb_title: "Ângela Coelho - Project Name"
fb_description: "Frontend Development"
fb_img: "avatar_project-name.png"

# Gallery, shown in this order.
# Use `img` for a file inside public/assets/projects/<slug>/,
# or `src` for a Vimeo embed URL (img is then ignored).
gallery:
  - img: "1_project-name_home.gif"
    alt: "Homepage animation"
    caption: ""
  - img: "2_project-name_page.png"
    alt: "Inner page"
    caption: "Optional caption shown under the image."
  - src: "https://player.vimeo.com/video/000000000?byline=0&portrait=0"
    alt: "Project video"
    caption: ""

# "Details" block: role and tools. Each line is one list item.
details:
  tag: details
  title: Details
  item:
    - subtitle: Role
      text:
        - line: Frontend Development
        - line: Interactive Animations
    - subtitle: Tools
      text:
        - line: JavaScript
        - line: SASS

# Optional "Additional information" block (articles, awards, …). Delete it if unused.
# `link` adds an "Open" link under the item.
references:
  tag: references
  title: Additional information
  item:
    - text:
        - line: "Article or award name"
      link: https://example.com/article
---

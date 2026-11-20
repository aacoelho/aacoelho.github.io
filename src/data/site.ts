// Former _config.yml site settings
export const site = {
  title: "Ângela Coelho | Portfolio",
  author: "Ângela Coelho",
  keywords: "angela, coelho, multimedia, design, programming, frontend, developer, code, portfolio",
  email: "angacoelho@gmail.com",
  description: "Frontend crafted with design focus",
  // Kept as http:// to match the old site's meta tags exactly (see README "Future improvements").
  url: "http://angelacoelho.com",
  twitter: "@aacoelho93",
  lang: "en",
} as const;

// Former _data/social.yml
export const social = [
  { name: "Linkedin", url: "https://www.linkedin.com/in/aacoelho/" },
  { name: "GitHub", url: "https://github.com/aacoelho" },
  { name: "Codepen", url: "https://codepen.io/aacoelho" },
  { name: "Dribbble", url: "https://dribbble.com/aacoelho" },
  { name: "Vimeo", url: "https://vimeo.com/aacoelho" },
  { name: "Behance", url: "https://www.behance.net/aacoelho" },
  { name: "Instagram", url: "https://www.instagram.com/angelaacoelho/" },
] as const;

// Header navigation (Jekyll listed pages with a title, in this order)
export const nav = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about/" },
] as const;

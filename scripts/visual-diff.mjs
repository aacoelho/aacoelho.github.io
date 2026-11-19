// Visual regression check: screenshots two versions of the site and compares them pixel by pixel.
//
//   npm run build && npm run preview          # in one terminal
//   npm run visual-diff                       # compares live angelacoelho.com vs http://localhost:4321
//   BASE=https://angelacoelho.com CANDIDATE=http://localhost:4321 npm run visual-diff
//
// Images and iframes are masked (their files are compared separately and GIFs animate),
// so this checks layout, typography, colours and spacing. Results go to ./visual-diff/.
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { mkdir, writeFile } from "node:fs/promises";

const BASE = process.env.BASE ?? "https://angelacoelho.com";
const CANDIDATE = process.env.CANDIDATE ?? "http://localhost:4321";
const OUT = "visual-diff";
const PAGES = ["/", "/about/", "/mjfswipe", "/superhuit", "/mjf", "/poetryassound", "/hyp", "/deiguide", "/404.html"];
const WIDTHS = [375, 768, 1280, 1920];

async function shoot(page, url) {
  await page.goto(url, { waitUntil: "load", timeout: 120_000 });
  // Wait for the loader to finish (main.js adds .fade-in to .main after window load)
  await page.waitForFunction(() => document.querySelector(".main")?.classList.contains("fade-in"), null, { timeout: 60_000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200); // .main opacity transition (0.6s) + loader fade
  return PNG.sync.read(
    await page.screenshot({
      fullPage: true,
      animations: "disabled",
      mask: [page.locator("img"), page.locator("iframe")],
      maskColor: "#ff00ff",
    }),
  );
}

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
let failures = 0;

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  for (const path of PAGES) {
    const a = await shoot(page, BASE + path);
    const b = await shoot(page, CANDIDATE + path);
    const name = `${width}${path.replace(/[/.]/g, "_") || "_"}`;
    if (a.width !== b.width || a.height !== b.height) {
      failures++;
      console.log(`✗ ${width}px ${path}: size differs (${a.width}x${a.height} vs ${b.width}x${b.height})`);
      await writeFile(`${OUT}/${name}-base.png`, PNG.sync.write(a));
      await writeFile(`${OUT}/${name}-candidate.png`, PNG.sync.write(b));
      continue;
    }
    const diff = new PNG({ width: a.width, height: a.height });
    const changed = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
    if (changed > 0) {
      failures++;
      console.log(`✗ ${width}px ${path}: ${changed} pixels differ`);
      await writeFile(`${OUT}/${name}-diff.png`, PNG.sync.write(diff));
      await writeFile(`${OUT}/${name}-base.png`, PNG.sync.write(a));
      await writeFile(`${OUT}/${name}-candidate.png`, PNG.sync.write(b));
    } else {
      console.log(`✓ ${width}px ${path}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(failures ? `\n${failures} difference(s), see ./${OUT}/` : "\nAll pages match.");
process.exit(failures ? 1 : 0);

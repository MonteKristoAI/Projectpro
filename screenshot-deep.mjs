// Screenshot a section by navigating to its hash anchor
import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const puppeteer = require('/tmp/pup-test/node_modules/puppeteer');

const __dirname = dirname(fileURLToPath(import.meta.url));
const sectionId = process.argv[2] || '';
const label     = process.argv[3] || sectionId || 'top';

const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir);
const existing = readdirSync(dir).filter(f => f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const n = (nums.length > 0 ? Math.max(...nums) : 0) + 1;
const outPath = join(dir, `screenshot-${n}-${label}.png`);

const baseUrl = 'http://localhost:3000';
const url = sectionId ? `${baseUrl}/#${sectionId}` : baseUrl;

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--blink-settings=imagesEnabled=false'
  ]
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
// Navigate directly to the hash anchor — browser scrolls to the section
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await new Promise(r => setTimeout(r, 2500));   // longer wait for layout + scroll
// Reveal .rv elements without touching scroll
await page.evaluate(() => {
  document.querySelectorAll('.rv').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();
console.log(`Saved: ${outPath}`);

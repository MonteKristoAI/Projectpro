import { createRequire } from 'module';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const puppeteer = require('/tmp/pup-test/node_modules/puppeteer');

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir);

const url = 'http://localhost:3000';
const sections = [
  { y: 0,    label: 'hero' },
  { y: 780,  label: 'logos-problem' },
  { y: 1600, label: 'problem-cards' },
  { y: 2500, label: 'spec-window' },
  { y: 3500, label: 'what-you-get' },
  { y: 4600, label: 'sample-sheet' },
  { y: 5600, label: 'benefits-proof' },
  { y: 6700, label: 'regions' },
  { y: 7700, label: 'trial-faq' },
  { y: 8600, label: 'final-cta' },
];

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await new Promise(r => setTimeout(r, 2500));

// Reveal all animated elements
await page.evaluate(() => {
  document.querySelectorAll('.rv').forEach(el => el.classList.add('show'));
});
await new Promise(r => setTimeout(r, 400));

let i = 1;
for (const { y, label } of sections) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await new Promise(r => setTimeout(r, 350));
  const path = join(dir, `section-${String(i).padStart(2,'0')}-${label}.png`);
  await page.screenshot({ path, fullPage: false });
  console.log(`  ✓ ${path}`);
  i++;
}

await browser.close();
console.log('\nDone.');

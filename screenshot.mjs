import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const puppeteer = require('/tmp/pup-test/node_modules/puppeteer');

const __dirname = dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir);

const existing = readdirSync(dir).filter(f => f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const n = (nums.length > 0 ? Math.max(...nums) : 0) + 1;
const fname = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath = join(dir, fname);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Force-reveal all animated elements for screenshot
await page.evaluate(() => {
  document.querySelectorAll('.rv').forEach(el => el.classList.add('show'));
});
await new Promise(r => setTimeout(r, 600));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved: ${outPath}`);

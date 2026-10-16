// Prints the /cv/ page to website/files/Greta_Grosz_CV_{EN,DE}.pdf, so the PDFs are always exactly the
// sheet on the page. Re-run after any change to cv/index.html, css/cv.css or js/i18n/cv.js.
//
//   node scripts/make-cv-pdf.mjs [baseUrl]      default http://localhost:4321 (node scripts/serve.mjs 4321)
//
// Needs Playwright with Chromium. It resolves 'playwright' from this repo, or from PLAYWRIGHT_DIR
// (a folder whose node_modules has playwright, e.g. ~/.claude/scratch/ggtools).
// Fails loudly, and writes nothing, if a language overflows its one A4 page or the page logs an error.
import { createRequire } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const base = (process.argv[2] || 'http://localhost:4321').replace(/\/+$/, '')
const outDir = join(root, 'website', 'files')

function loadPlaywright() {
  const tries = [process.env.PLAYWRIGHT_DIR, root, join(homedir(), '.claude/scratch/ggtools')].filter(Boolean)
  for (const dir of tries) {
    try { return createRequire(join(dir, 'noop.js'))('playwright') } catch {}
  }
  throw new Error(`Playwright not found (looked in ${tries.join(', ')}). Install it or set PLAYWRIGHT_DIR.`)
}

const { chromium } = loadPlaywright()
const browser = await chromium.launch({ args: ['--use-mock-keychain', '--password-store=basic'] })
const results = []
try {
  for (const lang of ['en', 'de']) {
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 2 })
    await ctx.addInitScript((l) => { try { localStorage.setItem('lang', l) } catch (e) {} }, lang)
    const page = await ctx.newPage()
    const errors = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
    page.on('requestfailed', (r) => errors.push(`request failed: ${r.url()}`))

    const res = await page.goto(`${base}/cv/`, { waitUntil: 'networkidle' })
    if (!res || !res.ok()) throw new Error(`${base}/cv/ answered ${res ? res.status() : 'nothing'}`)
    await page.emulateMedia({ media: 'print' })
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r }))))
    })

    const check = await page.evaluate(() => {
      const sheet = document.querySelector('.sheet')
      const cols = [...sheet.querySelectorAll('.side, .body')]
      const over = cols.filter((c) => c.scrollHeight > c.clientHeight + 0.5 || c.getBoundingClientRect().bottom > sheet.getBoundingClientRect().bottom + 0.5)
      const nunito = document.fonts.check('700 12px Nunito')
      const broken = [...sheet.querySelectorAll('img')].filter((i) => !i.naturalWidth).map((i) => i.src)
      return { lang: document.documentElement.lang, over: over.map((c) => c.className), nunito, broken }
    })
    if (check.lang !== lang) throw new Error(`page came up in "${check.lang}", wanted "${lang}"`)
    if (check.over.length) throw new Error(`${lang.toUpperCase()}: content overflows the A4 sheet in .${check.over.join(', .')}; shorten it`)
    if (!check.nunito) throw new Error(`${lang.toUpperCase()}: Nunito did not load`)
    if (check.broken.length) throw new Error(`${lang.toUpperCase()}: images failed: ${check.broken.join(', ')}`)
    if (errors.length) throw new Error(`${lang.toUpperCase()}: page errors:\n${errors.join('\n')}`)

    const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true, outline: false })
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) || []).length
    if (pages !== 1) throw new Error(`${lang.toUpperCase()}: PDF has ${pages} pages, must be exactly 1`)
    results.push({ file: `Greta_Grosz_CV_${lang.toUpperCase()}.pdf`, pdf })
    await ctx.close()
  }
  await mkdir(outDir, { recursive: true })
  for (const r of results) {
    await writeFile(join(outDir, r.file), r.pdf)
    console.log(`${r.file}  ${(r.pdf.length / 1024).toFixed(0)} KB  1 page`)
  }
} finally {
  await browser.close()
}

// Local preview of gretagrosz.com: serves website/ (the site source) and falls back to deploy/site/
// for what only exists there (the built apps at /bwbuddy/ /blank/ /tenaday/ /regional/, /files/).
// Usage: node scripts/serve.mjs [port]   (default 4321)
import { createServer } from 'node:http'
import { stat, readFile } from 'node:fs/promises'
import { join, normalize, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const ROOTS = [join(root, 'website'), join(root, 'deploy/site')]
const PORT = Number(process.argv[2]) || 4321
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2',
  '.pdf': 'application/pdf', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
}

async function resolve(path) {
  for (const base of ROOTS) {
    let p = normalize(join(base, path))
    if (!p.startsWith(base)) return null
    try {
      const s = await stat(p)
      if (s.isDirectory()) {
        if (!path.endsWith('/')) return { redirect: path + '/' }
        p = join(p, 'index.html')
        await stat(p)
      }
      return { file: p }
    } catch {}
  }
  return null
}

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x')
  const path = decodeURIComponent(url.pathname)
  if (path === '/business' || path === '/business/') { res.writeHead(301, { Location: '/' }); return res.end() }
  const r = await resolve(path)
  if (r?.redirect) { res.writeHead(301, { Location: r.redirect + url.search }); return res.end() }
  if (!r) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404') }
  const body = await readFile(r.file)
  res.writeHead(200, { 'Content-Type': TYPES[extname(r.file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' })
  res.end(body)
}).listen(PORT, () => console.log(`gretagrosz.com preview → http://localhost:${PORT}/`))

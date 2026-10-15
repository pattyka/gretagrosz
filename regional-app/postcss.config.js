import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Point Tailwind at this folder's config (the dev server runs from the parent folder)
const dir = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: {
    tailwindcss: { config: path.join(dir, 'tailwind.config.js') },
    autoprefixer: {},
  },
}

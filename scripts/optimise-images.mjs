/**
 * One-shot image optimiser.
 *
 * The customer logo wall is ~34 unoptimised jpg/png files straight from press
 * kits. They are the single largest asset group on the site and every one of
 * them is a small greyscale-ish mark that compresses far better as WebP.
 *
 * Run with: node scripts/optimise-images.mjs
 * Requires sharp (dev-only, not a runtime dependency):
 *   npm install --no-save sharp
 *
 * Writes `<name>.webp` next to each source and leaves the original in place so
 * the change is reversible; update the references separately.
 */
import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, extname, basename, dirname } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const LOGO_DIR = join(ROOT, 'public/images/logos')

// Logos render at most 140px wide in a 2x grid; 320px covers retina with room
// to spare and caps the pathological 2000px press-kit files.
const MAX_WIDTH = 320
const QUALITY = 82

let before = 0
let after = 0
let converted = 0
const broken = []

const entries = await readdir(LOGO_DIR)
for (const name of entries) {
  const ext = extname(name).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const src = join(LOGO_DIR, name)
  const dest = join(LOGO_DIR, `${basename(name, ext)}.webp`)

  const srcSize = (await stat(src)).size
  let buf
  try {
    buf = await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer()
  } catch {
    // Some press-kit files in this folder are not images at all (saved HTML
    // error pages with an image extension). Report and skip rather than abort.
    broken.push(name)
    continue
  }

  await writeFile(dest, buf)
  before += srcSize
  after += buf.length
  converted += 1
  const pct = Math.round((1 - buf.length / srcSize) * 100)
  console.log(
    `  ${name.padEnd(28)} ${(srcSize / 1024).toFixed(1).padStart(7)} KB -> ${(buf.length / 1024).toFixed(1).padStart(6)} KB  (-${pct}%)`,
  )
}

// The OG card: crawlers do not reliably render SVG, so a raster is required.
const OG_SVG = join(ROOT, 'public/images/og/default.svg')
try {
  const png = await sharp(OG_SVG, { density: 144 })
    // Matches --color-base so the letterbox is invisible against the card.
    .resize(1200, 630, { fit: 'contain', background: '#161b26' })
    .png({ compressionLevel: 9 })
    .toBuffer()
  await writeFile(join(dirname(OG_SVG), 'default.png'), png)
  console.log(`\n  og/default.png  ${(png.length / 1024).toFixed(1)} KB (1200x630)`)
} catch (err) {
  console.log(`\n  og/default.png SKIPPED: ${err.message}`)
}

console.log(
  `\n[images] ${converted} logos: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB ` +
    `(-${Math.round((1 - after / before) * 100)}%)`,
)
if (broken.length) {
  console.log(`[images] not valid images, skipped: ${broken.join(', ')}`)
}

// Shared script for every page of gretagrosz.com. Each part only runs if its section is on the page.
// Your public contact email and CV link. Leave empty to hide the button.
const CONTACT_EMAIL = ''
const CV_URL = ''
const LINKEDIN_URL = 'https://www.linkedin.com/in/greta-grosz'

const $ = (s, el = document) => el.querySelector(s)
const $$ = (s, el = document) => [...el.querySelectorAll(s)]
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x))
const seg = (p, a, b) => clamp((p - a) / (b - a)) // progress of p inside [a, b]
const ease = (t) => 1 - Math.pow(1 - t, 3)
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

const contactActions = $('#contact-actions')
if (contactActions) contactActions.innerHTML = [
  CONTACT_EMAIL && `<a class="button" href="mailto:${CONTACT_EMAIL}">${t('Email me')}</a>`,
  `<a class="${CONTACT_EMAIL ? 'more' : 'button'}" href="${LINKEDIN_URL}" target="_blank" rel="noopener">${t('Connect on LinkedIn')}</a>`,
  CV_URL && `<a class="more" href="${CV_URL}" download>${t('Download my CV')}</a>`,
].filter(Boolean).join('')
$('#year').textContent = new Date().getFullYear()

/* ---------- Live account calculator: same formula as my Excel tool ---------- */
// Order and ratings follow the Excel sheet. bonus = € value used for scoring.
const ACCOUNTS = [
  { name: 'spark7', bank: 'Erste Bank & Sparkasse', min: 10, max: 19, bonus: 20, label: '€20', app: 5, events: 4, branches: 4, invest: 5 },
  { name: 'Raiffeisen Studentenkonto', bank: 'Raiffeisen', min: 18, max: 27, bonus: 0, label: 'Gold card 1 year free', app: 3, events: 5, branches: 5, invest: 3 },
  { name: 'Raiffeisen Jugendkonto', bank: 'Raiffeisen', min: 14, max: 19, bonus: 50, label: 'JBL headphones', app: 3, events: 5, branches: 5, invest: 3 },
  { name: 'Erste Studentenkonto', bank: 'Erste Bank & Sparkasse', min: 18, max: 27, bonus: 100, label: 'up to €100', app: 5, events: 4, branches: 4, invest: 5 },
  { name: 'MegaCard', bank: 'Bank Austria', min: 7, max: 20, bonus: 40, label: '€40 voucher', app: 4, events: 4, branches: 2, invest: 3 },
  { name: 'GoGreen Studentenkonto', bank: 'Bank Austria', min: 18, max: 30, bonus: 70, label: '€70 voucher', app: 4, events: 4, branches: 2, invest: 3 },
  { name: 'B4-19 KontoBox', bank: 'BAWAG', min: 14, max: 19, bonus: 50, label: 'up to €50', app: 4, events: 2, branches: 2, invest: 2 },
  { name: 'Studenten KontoBox', bank: 'BAWAG', min: 18, max: 27, bonus: 0, label: 'Gold card 1 year free', app: 4, events: 2, branches: 2, invest: 2 },
  { name: 'easy youth', bank: 'easybank', min: 14, max: 17, bonus: 50, label: 'up to €50', app: 4, events: 2, branches: 1, invest: 2 },
  { name: 'bank99 Jugendkonto', bank: 'bank99', min: 14, max: 20, bonus: 50, label: '€50', app: 3, events: 1, branches: 4, invest: 1 },
  { name: 'N26 Standard / <18', bank: 'N26', min: 7, max: 99, bonus: 0, label: 'no bonus', app: 5, events: 1, branches: 0, invest: 4 },
  { name: 'Revolut Standard / <18', bank: 'Revolut', min: 6, max: 99, bonus: 0, label: 'no bonus', app: 5, events: 1, branches: 0, invest: 5 },
]
const bonusPoints = (b) => (b === 0 ? 0 : b === 20 ? 1 : b === 50 ? 2.5 : 5) // as in the Excel formula
const sliders = ['age', 'app', 'events', 'branches', 'invest', 'bonus'].map((k) => $(`#c-${k}`))
function calculate() {
  const [age, wApp, wEvents, wBranches, wInvest, wBonus] = sliders.map((s) => Number(s.value))
  sliders.forEach((s) => {
    $(`#o-${s.id.slice(2)}`).textContent = s.value
    s.style.setProperty('--fill', `${((s.value - s.min) / (s.max - s.min)) * 100}%`)
  })
  const weights = wApp + wEvents + wBranches + wInvest + wBonus
  const rows = ACCOUNTS.map((a) => {
    const available = age >= a.min && age <= a.max
    const score = !available || weights === 0 ? 0 : (wApp * a.app + wEvents * a.events + wBranches * a.branches + wInvest * a.invest + wBonus * bonusPoints(a.bonus) * 0.5) / weights
    return { ...a, available, score }
  })
  const best = rows.reduce((top, r) => (r.score > top.score ? r : top), rows[0]) // first account with the highest score, like XLOOKUP
  if (weights === 0) {
    $('#r-name').textContent = t('Set a priority')
    $('#r-meta').textContent = t('Move at least one slider above 0.')
    $('#r-score').textContent = '–'
  } else {
    $('#r-name').textContent = best.name
    $('#r-meta').textContent = `${best.bank} · ${t('bonus')}: ${t(best.label)}`
    $('#r-score').textContent = best.score.toFixed(2)
  }
  const sorted = [...rows].sort((a, b) => b.available - a.available || b.score - a.score)
  $('#ranking').innerHTML = sorted
    .map(
      (r) => `<li class="${r.available ? '' : 'off'} ${r === best && weights ? 'top' : ''}">
        <span class="nm">${r.name.replace('<', '&lt;')} <em>· ${r.bank}</em></span>
        <span class="sc">${r.available ? r.score.toFixed(2) : t('n/a')}</span>
        <span class="bar"><i style="width: ${(r.score / 5) * 100}%"></i></span>
      </li>`,
    )
    .join('')
}
if (sliders[0]) {
  sliders.forEach((s) => s.addEventListener('input', calculate))
  calculate()
}

// Market research numbers count up when they come into view
const statIO = new IntersectionObserver((entries) =>
  entries.forEach((e) => {
    if (!e.isIntersecting) return
    statIO.unobserve(e.target)
    const b = $('b', e.target)
    const to = Number(b.dataset.to)
    const pre = b.dataset.prefix || ''
    const suf = b.dataset.suffix || ''
    if (reduced) return void (b.textContent = pre + to + suf)
    const start = performance.now()
    const tick = (t) => {
      const k = clamp((t - start) / 1100)
      b.textContent = pre + Math.round(to * ease(k)) + suf
      if (k < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }), { threshold: 0.4 })
$$('.stat').forEach((el) => statIO.observe(el))

// About: words light up while you scroll
const words = $('#words')
const BLUE = LANG === 'de' ? ['baue', 'apps', 'entwickle', 'drei'] : ['build', 'apps', 'company', 'three']
if (words)
  words.innerHTML = words.textContent
    .split(' ')
    .map((w) => `<span class="${BLUE.some((b) => w.toLowerCase().startsWith(b)) ? 'blue' : ''}">${w}</span>`)
    .join(' ')
const wordEls = words ? [...words.children] : []

// Fade-ins
const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.15 })
$$('.fade').forEach((el) => io.observe(el))

/* ---------- App demos: each one is driven by how far its stage has scrolled ---------- */

const demos = {
  ten(stage, p) {
    const cards = $$('.fc', stage).reverse() // top card first
    const dots = $$('.dots i', stage)
    cards.forEach((card, i) => {
      const t = ease(seg(p, 0.12 + i * 0.17, 0.27 + i * 0.17))
      const dir = Number(card.dataset.dir)
      card.style.transform = `translateX(${dir * t * 150}%) rotate(${dir * t * 18}deg)`
      card.style.zIndex = 10 - i
      const tint = $('.tint', card)
      tint.style.background = dir > 0 ? 'var(--green)' : 'var(--red)'
      tint.style.opacity = Math.min(1, t * 2.2) * 0.9
      if (dots[i]) dots[i].style.background = t > 0.5 ? (dir > 0 ? 'var(--green)' : 'var(--red)') : ''
    })
    $('#ten-count').textContent = cards.filter((c, i) => Number(c.dataset.dir) > 0 && seg(p, 0.12 + i * 0.17, 0.27 + i * 0.17) > 0.5).length
  },
  quiz(stage, p) {
    const right = $('#q-right')
    right.classList.toggle('tap', p > 0.3 && p < 0.38)
    right.classList.toggle('right', p > 0.36)
    const next = p > 0.62
    $('#q-num').textContent = next ? 4 : 3
    $('#q-bar').style.width = `${30 + ease(seg(p, 0.4, 0.62)) * 10}%`
    const toast = $('#q-toast')
    const tt = seg(p, 0.4, 0.5)
    toast.style.opacity = p > 0.85 ? 1 - seg(p, 0.85, 0.95) : tt
    toast.style.transform = `translateY(${(1 - tt) * 12}px)`
  },
  feed(stage, p) {
    const cols = $$('.col', stage)
    cols.forEach((col, i) => (col.style.transform = `translateY(${-p * (110 + i * 50)}px)`))
    const liked = p > 0.45
    const heart = $('#heart')
    heart.innerHTML = `<svg viewBox="0 0 24 24" fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>`
    const pop = seg(p, 0.45, 0.55)
    heart.style.transform = `scale(${1 + Math.sin(pop * Math.PI) * 0.45})`
    $('#like-count').textContent = liked ? 24 : 23
  },
  proof(stage, p) {
    const scan = $('#scan')
    const paper = $('#paper')
    const s = seg(p, 0.08, 0.42)
    scan.style.opacity = s > 0 && s < 1 ? 1 : 0
    scan.style.top = `${s * paper.clientHeight}px`
    $$('.ok', paper).forEach((ok, i) => {
      const t = seg(p, 0.42 + i * 0.07, 0.48 + i * 0.07)
      ok.style.opacity = t
      ok.style.transform = `scale(${0.6 + t * 0.4})`
    })
    const r = ease(seg(p, 0.66, 0.9))
    $('#ring').style.strokeDashoffset = 326.7 * (1 - r)
    $('#pts').textContent = Math.round(r * 8)
  },
  cloth(stage, p) {
    const shirt = $('#c-shirt')
    const len = shirt.getTotalLength()
    shirt.style.strokeDasharray = len
    shirt.style.strokeDashoffset = len * (1 - ease(seg(p, 0.05, 0.4)))
    shirt.style.fillOpacity = seg(p, 0.5, 0.62) * 0.9
    ;['#c-label', '#c-spark'].forEach((id, i) => {
      const el = $(id)
      const n = el.getTotalLength()
      el.style.strokeDasharray = n
      el.style.strokeDashoffset = n * (1 - ease(seg(p, 0.3 + i * 0.1, 0.5 + i * 0.1)))
    })
    $('#c-band').style.opacity = seg(p, 0.5, 0.6)
    $('#c-word').style.opacity = seg(p, 0.55, 0.65)
    $$('.stitch', stage).forEach((s, i) => (s.style.opacity = seg(p, 0.36 + i * 0.07, 0.46 + i * 0.07)))
    const l = ease(seg(p, 0.6, 0.78))
    const listing = $('#listing')
    listing.style.opacity = l
    listing.style.transform = `translateY(${(1 - l) * 30}px)`
    const sold = p > 0.86
    const tag = $('#listing-tag')
    tag.textContent = t(sold ? 'Sold' : 'Listed')
    tag.classList.toggle('sold', sold)
  },
  tattoo(stage, p) {
    const parts = ['#t-star', '#t-ring', '#t-wave']
    parts.forEach((id, i) => {
      const el = $(id)
      const len = el.getTotalLength()
      el.style.strokeDasharray = len
      el.style.strokeDashoffset = len * (1 - ease(seg(p, 0.05 + i * 0.1, 0.3 + i * 0.1)))
    })
    $('#t-word').style.opacity = seg(p, 0.35, 0.45)
    const band = $('#t-band')
    if (band) band.style.opacity = seg(p, 0.15, 0.25)
    // The design is printed on a paper sheet; the sheet peels off and the design stays on the skin
    const peel = ease(seg(p, 0.5, 0.78))
    $('#t-fill').style.opacity = seg(p, 0.72, 0.86) * 0.9
    const backing = $('#backing')
    backing.style.transform = `translate(${peel * 70}%, ${peel * -40}%) rotate(${peel * 28}deg)`
    backing.style.opacity = 1 - seg(p, 0.7, 0.8)
    const uses = $$('#uses span')
    const active = Math.min(uses.length - 1, Math.floor(seg(p, 0.2, 1) * uses.length))
    uses.forEach((u, i) => u.classList.toggle('on', i === active))
  },
}
const stages = $$('[data-demo]')

/* ---------- Journey: a curvy line drawn as you scroll, with a plane flying along it ---------- */
const NS = 'http://www.w3.org/2000/svg'
const svg = $('#route-svg')
const route = $('#route')
const places = $$('.place')
let path, total, stopLengths, plane, stopDots, layoutWide
const PLANE = 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'

function buildRoute() {
  if (!route) return
  const wide = route.clientWidth >= 700
  if (wide === layoutWide && path) return
  layoutWide = wide
  const W = wide ? 1000 : 400
  const H = 1500
  const pts = wide ? [[500, 40], [260, 470], [740, 900], [480, 1330]] : [[44, 40], [120, 470], [44, 900], [110, 1330]]
  let d = `M${pts[0][0]},${pts[0][1]}`
  const segs = [d]
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const my = (y0 + y1) / 2
    d += ` C${x0},${my} ${x1},${my} ${x1},${y1}`
    segs.push(d)
  }
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
  svg.innerHTML = ''
  const track = document.createElementNS(NS, 'path')
  track.setAttribute('d', d)
  track.setAttribute('class', 'track-line')
  path = document.createElementNS(NS, 'path')
  path.setAttribute('d', d)
  path.setAttribute('class', 'drawn')
  svg.append(track, path)
  total = path.getTotalLength()
  stopLengths = segs.map((s, i) => {
    if (i === 0) return 0
    const tmp = document.createElementNS(NS, 'path')
    tmp.setAttribute('d', s)
    svg.append(tmp)
    const l = tmp.getTotalLength()
    tmp.remove()
    return l
  })
  path.style.strokeDasharray = total
  stopDots = pts.map(([x, y]) => {
    const c = document.createElementNS(NS, 'circle')
    c.setAttribute('cx', x)
    c.setAttribute('cy', y)
    c.setAttribute('r', wide ? 11 : 9)
    c.setAttribute('class', 'stop')
    svg.append(c)
    return c
  })
  plane = document.createElementNS(NS, 'path')
  plane.setAttribute('d', PLANE)
  plane.setAttribute('class', 'plane')
  plane.dataset.scale = wide ? 2.2 : 1.6
  svg.append(plane)
  places.forEach((el, i) => {
    const [x, y] = pts[i]
    el.style.top = `${(y / H) * 100}%`
    el.style.marginTop = '-14px'
    const right = !wide || x <= W / 2 + 10
    el.style.left = right ? `${((x + 50) / W) * 100}%` : 'auto'
    el.style.right = right ? 'auto' : `${((W - x + 50) / W) * 100}%`
    el.style.textAlign = right ? 'left' : 'right'
  })
}

function drawRoute(progress) {
  if (!path) return
  const len = total * progress
  path.style.strokeDashoffset = total - len
  const a = path.getPointAtLength(Math.max(0.01, len))
  const b = path.getPointAtLength(Math.min(total, len + 2))
  const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 90
  plane.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${angle}) scale(${plane.dataset.scale}) translate(-11.5 -12)`)
  stopLengths.forEach((l, i) => {
    const on = len >= l - 1
    stopDots[i].classList.toggle('on', on)
    places[i].classList.toggle('on', on)
  })
}

/* ---------- One loop for every scroll effect ---------- */
const hero = $('#hero')
const nav = $('.nav')
const statement = $('#about')

// Sidebar menu on phones and tablets
const menuBtn = $('#menu-btn')
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open)
  menuBtn.setAttribute('aria-expanded', open)
}
menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')))
$('#scrim').addEventListener('click', () => setMenu(false))
$$('#sidebar a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

// The sidebar highlights the section you're reading
const sbLinks = $$('.sb-sections a')
const sbSections = sbLinks.map((a) => document.getElementById(a.dataset.section))
function markSection() {
  let current = 0
  sbSections.forEach((sec, i) => {
    if (sec && sec.getBoundingClientRect().top < innerHeight * 0.4) current = i
  })
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) current = sbSections.length - 1
  sbLinks.forEach((a, i) => a.classList.toggle('active', i === current))
}

function frame() {
  markSection()
  const vh = innerHeight
  nav.classList.toggle('scrolled', scrollY > 10)

  if (!reduced && hero) {
    // Fade the hero only once it's nearly scrolled away, so its buttons stay usable on phones
    const h = clamp(1 - hero.getBoundingClientRect().bottom / (vh * 0.55))
    hero.style.opacity = 1 - h
    hero.style.transform = `scale(${1 - h * 0.08}) translateY(${h * -40}px)`
  }
  if (!reduced && statement) {
    const r = statement.getBoundingClientRect()
    const lit = Math.floor(clamp(-r.top / (r.height - vh)) * wordEls.length * 1.1)
    wordEls.forEach((w, i) => w.classList.toggle('lit', i < lit))
  }

  // Each demo plays while its stage moves from the bottom of the screen to near the top
  stages.forEach((stage) => {
    const r = stage.getBoundingClientRect()
    if (r.bottom < -100 || r.top > vh + 100) return
    const p = reduced ? 1 : clamp((vh * 0.92 - r.top) / (vh * 0.92 - vh * 0.1))
    demos[stage.dataset.demo](stage, p)
  })

  if (route) {
    const jr = route.getBoundingClientRect()
    drawRoute(reduced ? 1 : clamp((vh * 0.62 - jr.top) / jr.height))
  }
}

let ticking = false
addEventListener('scroll', () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    frame()
    ticking = false
  })
}, { passive: true })
addEventListener('resize', () => {
  buildRoute()
  frame()
})
buildRoute()
frame()
if (reduced) wordEls.forEach((w) => w.classList.add('lit'))

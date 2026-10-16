// Homepage: the mascot hop, the About statement lighting up, the 83-in-100 waffle,
// and the flight UK → Hungary → Austria driven by the page scroll.
;(() => {
  const q = (s, el = document) => el.querySelector(s)
  const qa = (s, el = document) => [...el.querySelectorAll(s)]
  const cl = (x) => Math.min(1, Math.max(0, x))
  const sub = (p, a, b) => cl((p - a) / (b - a))
  const lerp = (a, b, k) => a + (b - a) * k
  const smooth = (k) => k * k * (3 - 2 * k)
  const inOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches
  const tr = (s) => (window.I18N ? I18N.t(s) : s)
  const svgEl = (tag, cls) => { const e = document.createElementNS('http://www.w3.org/2000/svg', tag); if (cls) e.setAttribute('class', cls); return e }
  const attrs = (el, o) => { for (const k in o) el.setAttribute(k, o[k]); return el }

  /* Hero: tap the photo and the mascot hops */
  const polaroid = q('#polaroid')
  if (polaroid && !still) {
    polaroid.addEventListener('pointerdown', () => { polaroid.classList.remove('boop'); void polaroid.offsetWidth; polaroid.classList.add('boop') })
    polaroid.addEventListener('animationend', (e) => { if (e.animationName === 'boop') polaroid.classList.remove('boop') })
  }

  /* About: one span per word, rebuilt in the current language, lit as it scrolls in */
  const statement = q('#statement')
  const parts = statement ? [...statement.children].map((el) => ({ en: el.textContent.replace(/\s+/g, ' ').trim(), hi: el.classList.contains('hi') })) : []
  let words = [], lastLit = -1
  if (statement) statement.setAttribute('data-no-i18n', '')
  function buildStatement() {
    if (!statement) return
    statement.textContent = ''
    words = []
    parts.forEach((part, pi) => {
      const holder = part.hi ? statement.appendChild(Object.assign(document.createElement('span'), { className: 'mark' })) : statement
      const list = tr(part.en).split(/\s+/)
      list.forEach((w, i) => {
        const span = Object.assign(document.createElement('span'), { className: 'w', textContent: w })
        span.setAttribute('aria-hidden', 'true')
        if (part.hi) span.style.setProperty('--k', i)
        holder.append(span, i < list.length - 1 ? ' ' : '')
        words.push(span)
      })
      if (pi < parts.length - 1) statement.append(' ')
    })
    statement.setAttribute('aria-label', parts.map((p) => tr(p.en)).join(' '))
    lastLit = -1
    if (still) { words.forEach((w) => w.classList.add('lit')); statement.classList.add('done') }
  }
  function lightStatement() {
    if (still || !statement) return
    const r = statement.getBoundingClientRect(), vh = innerHeight
    if (r.bottom < -vh || r.top > vh * 1.5) return
    const lit = Math.round(sub(vh * 0.86 - r.top, 0, vh * 0.42) * words.length)
    if (lit === lastLit) return
    lastLit = lit
    words.forEach((w, i) => w.classList.toggle('lit', i < lit))
    statement.classList.toggle('done', lit >= words.length)
  }
  buildStatement()

  /* Finance card: 83 of every 100 */
  const waffle = q('.waffle')
  if (waffle) for (let i = 0; i < 100; i++) {
    const dot = waffle.appendChild(document.createElement('i'))
    if (i < 83) { dot.className = 'on'; dot.style.setProperty('--k', i) }
  }

  /* Journey */
  const journey = q('#journey'), svg = q('#jr-svg')
  const chapters = qa('.jr-ch'), steps = qa('.jr-steps button'), story = q('.jr-story'), title = q('.jr-title')
  const C50 = Math.cos((50 * Math.PI) / 180)
  const proj = (lon, lat) => [(lon - 10) * C50 * 20, -(lat - 50) * 20]   // the projection img/home-map.svg was drawn in
  const STOPS = [
    { key: 'uk', name: 'United Kingdom', at: proj(-1.6, 52.6), label: [14, -14, 'start'] },
    { key: 'hu', name: 'Hungary', at: proj(19.3, 47.15), label: [0, 30, 'middle'] },
    { key: 'at', name: 'Austria', at: proj(14.4, 47.55), label: [-14, -16, 'end'] },
  ]
  // Scroll progress (0..1 through the pinned section): each flight, each arrival, each chapter on screen
  const LEGS = [[0.1, 0.38], [0.6, 0.72]], ARRIVE = [0, 0.38, 0.72], NOW_AT = 0.89
  const SHOW = [[-1, 0.3], [0.4, 0.6], [0.73, 0.87], [0.89, 2]], STEP_AT = [0.04, 0.5, 0.8, 0.97]
  const PLANE = 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'

  // Each flight is a gentle arc northwards, sampled by arc length so the plane keeps an even pace
  const legs = [[STOPS[0].at, STOPS[1].at, 0.2], [STOPS[1].at, STOPS[2].at, 0.45]].map(([a, b, lift]) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy)
    const s = dx > 0 ? 1 : -1, c = [(a[0] + b[0]) / 2 + s * (dy / len) * len * lift, (a[1] + b[1]) / 2 - s * (dx / len) * len * lift]
    const pts = [], acc = [0]
    for (let i = 0; i <= 200; i++) {
      const t = i / 200, u = 1 - t
      pts.push([u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]])
      if (i) acc.push(acc[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
    }
    return { pts, acc, total: acc[200] }
  })
  function along(leg, f) {
    const target = cl(f) * leg.total
    let i = 1
    while (i < 200 && leg.acc[i] < target) i++
    const k = (target - leg.acc[i - 1]) / (leg.acc[i] - leg.acc[i - 1] || 1), a = leg.pts[i - 1], b = leg.pts[i]
    return { x: lerp(a[0], b[0], k), y: lerp(a[1], b[1], k), i }
  }
  const heading = (leg, f) => { const a = along(leg, Math.min(f, 0.995)), b = along(leg, Math.min(f, 0.995) + 0.005); return Math.atan2(b.y - a.y, b.x - a.x) }
  const turn = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * k }

  // Camera: centre and zoom along the scroll
  const P = STOPS.map((s) => s.at), mid0 = along(legs[0], 0.5), mid1 = along(legs[1], 0.5)
  const xs = P.map((p) => p[0]), ys = [...P.map((p) => p[1]), mid0.y]
  const ALL = [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2]
  const SPAN = [(Math.max(...xs) - Math.min(...xs)) * 1.25, (Math.max(...ys) - Math.min(...ys)) * 1.6]
  const CAM = [[0, P[0], 2.2], [0.08, P[0], 2.2], [0.24, [mid0.x, mid0.y], 1.02], [0.38, P[1], 2.2], [0.5, P[1], 2.6],
    [0.62, [lerp(P[1][0], mid1.x, 0.5), lerp(P[1][1], mid1.y, 0.5)], 2.9], [0.72, P[2], 2.9], [0.86, P[2], 2.6], [0.97, ALL, 1], [1, ALL, 1]]
  function camera(p) {
    let i = 0
    while (i < CAM.length - 2 && p > CAM[i + 1][0]) i++
    const [p0, c0, k0] = CAM[i], [p1, c1, k1] = CAM[i + 1], e = smooth(sub(p, p0, p1))
    return { cx: lerp(c0[0], c1[0], e), cy: lerp(c0[1], c1[1], e), k: Math.exp(lerp(Math.log(k0), Math.log(k1), e)) }
  }

  const live = !!(journey && svg) && !still
  let mapG, trail, plane, shadow, dots, rings, names, view, lands = {}, lastOn = [], lastNow = null, lastStep = -1, mapLoaded = false

  function buildScene() {
    mapG = svgEl('g'); trail = svgEl('path', 'jr-trail')
    svg.append(mapG, trail)
    rings = STOPS.map(() => svg.appendChild(attrs(svgEl('circle', 'jr-ring'), { r: 7 })))
    dots = STOPS.map(() => svg.appendChild(attrs(svgEl('circle', 'jr-dot'), { r: 6.5 })))
    names = STOPS.map((s) => { const t = attrs(svgEl('text', 'jr-name'), { 'text-anchor': s.label[2] }); t.textContent = tr(s.name); return svg.appendChild(t) })
    shadow = attrs(svgEl('path', 'jr-shadow'), { d: PLANE }); plane = attrs(svgEl('path', 'jr-plane'), { d: PLANE })
    svg.append(shadow, plane)
    if (!live) shadow.style.display = plane.style.display = 'none'
  }

  // The map data stops at its viewBox; fade the edges into the sea so land never ends on a straight line
  function edgeFade([x, y, w, h]) {
    const g = svgEl('g'), F = 60, FAR = 4000, SEA = '#F4F6FA'
    const defs = g.appendChild(svgEl('defs'))
    Object.entries({ t: [0, 0, 0, 1], b: [0, 1, 0, 0], l: [0, 0, 1, 0], r: [1, 0, 0, 0] }).forEach(([k, [x1, y1, x2, y2]]) => {
      const lg = defs.appendChild(attrs(svgEl('linearGradient'), { id: 'jr-fade-' + k, x1, y1, x2, y2 }))
      lg.innerHTML = `<stop offset="0" stop-color="${SEA}"/><stop offset="1" stop-color="${SEA}" stop-opacity="0"/>`
    })
    ;[[x - FAR, y - FAR, w + 2 * FAR, FAR, SEA], [x - FAR, y + h, w + 2 * FAR, FAR, SEA], [x - FAR, y, FAR, h, SEA], [x + w, y, FAR, h, SEA],
      [x, y, w, F, 'url(#jr-fade-t)'], [x, y + h - F, w, F, 'url(#jr-fade-b)'], [x, y, F, h, 'url(#jr-fade-l)'], [x + w - F, y, F, h, 'url(#jr-fade-r)'],
    ].forEach(([rx, ry, rw, rh, fill]) => g.appendChild(attrs(svgEl('rect'), { x: rx, y: ry, width: rw, height: rh, fill })))
    return g
  }

  function loadMap() {
    if (mapLoaded) return
    mapLoaded = true
    fetch('/img/home-map.svg')
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error('home-map.svg ' + r.status))))
      .then((text) => {
        const doc = new DOMParser().parseFromString(text, 'image/svg+xml'), land = doc.querySelector('.h-land')
        if (!land) return
        const g = document.importNode(land, true)
        g.setAttribute('class', 'jr-land')
        mapG.append(g, edgeFade((doc.documentElement.getAttribute('viewBox') || '-308.5 -280 617.1 580').split(/\s+/).map(Number)))
        lands = {}
        qa('[data-c]', g).forEach((el) => (lands[el.dataset.c] = el))
        lastOn = []
        render()
      })
      .catch(() => { mapLoaded = false })   // the route still draws; the next scroll into view retries
  }

  function measure() {
    const rect = svg.getBoundingClientRect(), w = rect.width, h = rect.height
    if (!w || !h) return
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
    // Frame the map in the part of the stage the text leaves free
    let x0 = 0, x1 = w, y0 = 0, y1 = h
    if (live) {
      const sr = story.getBoundingClientRect(), tr0 = title.getBoundingClientRect()
      if (innerWidth > 640) { x0 = Math.max(sr.right, tr0.right) - rect.left + 40; y0 = 72; y1 = h - 24 }
      else { x0 = 12; x1 = w - 12; y0 = tr0.bottom - rect.top + 12; y1 = sr.top - rect.top - 8 }
    }
    const effW = Math.max(120, x1 - x0) * 0.86, effH = Math.max(120, y1 - y0) * 0.84
    view = { ax: (x0 + x1) / 2, ay: (y0 + y1) / 2, s0: Math.min(effW / SPAN[0], effH / SPAN[1]), planeSize: innerWidth > 640 ? 32 : 26 }
  }

  const progress = () => { if (!live) return 1; const r = journey.getBoundingClientRect(); return cl(-r.top / (r.height - innerHeight)) }

  function render() {
    if (!view) return
    const p = progress(), cam = live ? camera(p) : { cx: ALL[0], cy: ALL[1], k: 1 }, s = view.s0 * cam.k
    const X = (x) => view.ax + (x - cam.cx) * s, Y = (y) => view.ay + (y - cam.cy) * s
    mapG.setAttribute('transform', `translate(${(view.ax - cam.cx * s).toFixed(2)} ${(view.ay - cam.cy * s).toFixed(2)}) scale(${s.toFixed(4)})`)

    const f = LEGS.map(([a, b]) => (live ? inOut(sub(p, a, b)) : 1))
    let d = ''
    legs.forEach((leg, li) => {
      if (f[li] <= 0) return
      const end = along(leg, f[li])
      d += `M${X(leg.pts[0][0]).toFixed(1)},${Y(leg.pts[0][1]).toFixed(1)}`
      for (let i = 1; i < end.i; i++) d += `L${X(leg.pts[i][0]).toFixed(1)},${Y(leg.pts[i][1]).toFixed(1)}`
      d += `L${X(end.x).toFixed(1)},${Y(end.y).toFixed(1)}`
    })
    trail.setAttribute('d', d)

    if (live) {
      const second = f[0] >= 1, leg = legs[second ? 1 : 0], fl = f[second ? 1 : 0], pos = along(leg, fl), lift = Math.sin(fl * Math.PI)
      const ang = second && fl <= 0 ? turn(heading(legs[0], 1), heading(legs[1], 0), smooth(sub(p, 0.46, 0.6))) : heading(leg, fl)
      const away = sub(p, 0.86, 0.9)   // after landing the plane folds away and the green dot takes over
      const sc = (view.planeSize / 24) * (1 + lift * 0.3) * (1 - away * 0.6), deg = ((ang * 180) / Math.PI + 90).toFixed(2), px = X(pos.x), py = Y(pos.y)
      plane.setAttribute('transform', `translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${deg}) scale(${sc.toFixed(3)}) translate(-11.5 -12)`)
      plane.style.opacity = (1 - away).toFixed(3)
      shadow.setAttribute('transform', `translate(${(px + 4 + lift * 12).toFixed(1)} ${(py + 6 + lift * 18).toFixed(1)}) rotate(${deg}) scale(${(sc * (1 - lift * 0.25)).toFixed(3)}) translate(-11.5 -12)`)
      shadow.style.opacity = ((1 - away) * (1 - lift * 0.45)).toFixed(3)
    }

    STOPS.forEach((st, i) => {
      const x = X(st.at[0]), y = Y(st.at[1]), on = !live || p >= ARRIVE[i]
      attrs(dots[i], { cx: x.toFixed(1), cy: y.toFixed(1) }); attrs(rings[i], { cx: x.toFixed(1), cy: y.toFixed(1) })
      attrs(names[i], { x: (x + st.label[0]).toFixed(1), y: (y + st.label[1]).toFixed(1) })
      if (on === lastOn[i]) return
      dots[i].classList.toggle('on', on); names[i].classList.toggle('on', on)
      if (lands[st.key]) lands[st.key].classList.toggle('on', on)
      rings[i].classList.remove('go')
      if (live && on && i > 0 && lastOn[i] === false) { void rings[i].getBoundingClientRect(); rings[i].classList.add('go') }
      lastOn[i] = on
    })
    const isNow = !live || p >= NOW_AT
    if (isNow !== lastNow) { dots[2].classList.toggle('now', isNow); rings[2].classList.toggle('now', isNow && live); lastNow = isNow }

    if (!live) return
    let active = 0
    chapters.forEach((ch, i) => {
      const [a, b] = SHOW[i], o = Math.min(sub(p, a, a + 0.035), 1 - sub(p, b - 0.035, b))
      ch.style.opacity = o.toFixed(3)
      ch.style.transform = o >= 1 ? '' : `translateY(${((p < a + 0.035 ? 1 - o : o - 1) * 26).toFixed(1)}px)`
      ch.style.visibility = o > 0.001 ? 'visible' : 'hidden'
      if (p >= a) active = i
    })
    if (active !== lastStep) { steps.forEach((b, i) => b.classList.toggle('on', i === active)); lastStep = active }
  }

  if (journey && svg) {
    journey.classList.add('has-map')
    if (live) journey.classList.add('live')
    buildScene(); measure(); render()
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) loadMap(); if (lands.uk) io.disconnect() }, { rootMargin: '1200px 0px' })
      io.observe(journey)
    } else loadMap()
    steps.forEach((b, i) => b.addEventListener('click', () => {
      const r = journey.getBoundingClientRect()
      scrollTo({ top: scrollY + r.top + STEP_AT[i] * (r.height - innerHeight), behavior: 'smooth' })
    }))
  }

  /* Language switch: rebuild what was built from strings, then reframe */
  document.addEventListener('langchange', () => {
    buildStatement(); lightStatement()
    if (names) names.forEach((n, i) => (n.textContent = tr(STOPS[i].name)))
    if (journey && svg) { measure(); render() }
  })

  /* One scroll loop */
  function frame() {
    lightStatement()
    if (journey && view) { const r = journey.getBoundingClientRect(); if (r.bottom > -50 && r.top < innerHeight + 50) render() }
  }
  let ticking = false, resizeRaf = 0
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; frame() }) } }, { passive: true })
  const reframe = () => { if (journey && svg) measure(); frame() }
  addEventListener('resize', () => { cancelAnimationFrame(resizeRaf); resizeRaf = requestAnimationFrame(reframe) })
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reframe)   // fonts change the story's size, which frames the map
  frame()
  requestAnimationFrame(reframe)   // site.js translates the page right after this file runs
})()

// Homepage only: the hero stepping back, the About statement lighting up,
// and the flight UK → Hungary → Austria. Wrapped so nothing clashes with site.js.
;(() => {
  const q = (s, el = document) => el.querySelector(s)
  const qa = (s, el = document) => [...el.querySelectorAll(s)]
  const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x))
  const sub = (p, a, b) => cl((p - a) / (b - a))
  const lerp = (a, b, k) => a + (b - a) * k
  const smooth = (k) => k * k * (3 - 2 * k)
  const inOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches
  const tr = typeof t === 'function' ? t : (s) => s
  const NS = 'http://www.w3.org/2000/svg'

  /* ---------- About: split the statement into words (the .h-hi part is the accent); the lines below follow ---------- */
  const words = q('#h-words')
  const more = q('#h-more')
  const wordEls = []
  if (words) {
    const parts = [...words.children].map((el) => ({ hi: el.classList.contains('h-hi'), list: el.textContent.trim().split(/\s+/) }))
    words.textContent = ''
    parts.forEach((part, p) => {
      part.list.forEach((w, i) => {
        const span = document.createElement('span')
        span.textContent = w
        if (part.hi) span.className = 'hi'
        words.append(span)
        if (i < part.list.length - 1 || p < parts.length - 1) words.append(' ')
        wordEls.push(span)
      })
    })
    if (still) wordEls.forEach((w) => w.classList.add('lit'))
  }
  if (more && !still) q('#about').classList.add('h-js')

  /* ---------- Journey ---------- */
  const journey = q('#journey')
  const svg = q('#h-svg')
  const chapters = qa('.h-ch')
  const C50 = Math.cos((50 * Math.PI) / 180)
  // Same projection as img/home-map.svg (made from Natural Earth data)
  const proj = (lon, lat) => [(lon - 10) * C50 * 20, -(lat - 50) * 20]
  // Country-level points, not towns
  const STOPS = [
    { key: 'uk', name: 'United Kingdom', at: proj(-1.6, 52.6), label: [12, -12, 'start'] },
    { key: 'hu', name: 'Hungary', at: proj(19.3, 47.15), label: [0, 24, 'middle'] },
    { key: 'at', name: 'Austria', at: proj(14.4, 47.55), label: [-12, -14, 'end'] },
  ]
  const LEGS = [[0.1, 0.4], [0.58, 0.72]] // scroll progress for each flight
  const ARRIVE = [0, 0.4, 0.72]
  const SHOW = [[-1, 0.3], [0.41, 0.6], [0.73, 0.86], [0.89, 2]] // when each chapter is on screen
  const PLANE = 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'

  // Each flight is a gentle arc, sampled by arc length so the plane moves at an even pace
  const legs = [
    [STOPS[0].at, STOPS[1].at, 0.2],
    [STOPS[1].at, STOPS[2].at, 0.42],
  ].map(([a, b, lift]) => {
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const len = Math.hypot(dx, dy)
    let nx = dy / len
    let ny = -dx / len
    if (ny > 0) (nx = -nx), (ny = -ny) // always arc northwards
    const c = [(a[0] + b[0]) / 2 + nx * len * lift, (a[1] + b[1]) / 2 + ny * len * lift]
    const pts = []
    const acc = [0]
    for (let i = 0; i <= 240; i++) {
      const s = i / 240
      const u = 1 - s
      pts.push([u * u * a[0] + 2 * u * s * c[0] + s * s * b[0], u * u * a[1] + 2 * u * s * c[1] + s * s * b[1]])
      if (i) acc.push(acc[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
    }
    return { pts, acc, total: acc[acc.length - 1] }
  })
  // Point at fraction f of a leg's length, and how many samples come before it
  function along(leg, f) {
    const target = cl(f) * leg.total
    let i = 1
    while (i < leg.acc.length - 1 && leg.acc[i] < target) i++
    const k = (target - leg.acc[i - 1]) / (leg.acc[i] - leg.acc[i - 1] || 1)
    const a = leg.pts[i - 1]
    const b = leg.pts[i]
    return { x: lerp(a[0], b[0], k), y: lerp(a[1], b[1], k), i }
  }
  function heading(leg, f) {
    const a = along(leg, Math.min(f, 0.995))
    const b = along(leg, Math.min(f, 0.995) + 0.005)
    return Math.atan2(b.y - a.y, b.x - a.x)
  }
  const turn = (a, b, k) => {
    let d = b - a
    while (d > Math.PI) d -= 2 * Math.PI
    while (d < -Math.PI) d += 2 * Math.PI
    return a + d * k
  }

  // Camera: where the view is centred and how far it is zoomed in, along the scroll
  const P = STOPS.map((s) => s.at)
  const mid0 = along(legs[0], 0.5)
  const mid1 = along(legs[1], 0.5)
  const ys = [...P.map((p) => p[1]), mid0.y]
  const xs = P.map((p) => p[0])
  const ALL = [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2]
  const SPAN = [(Math.max(...xs) - Math.min(...xs)) * 1.18, (Math.max(...ys) - Math.min(...ys)) * 1.5]
  const CAM = [
    [0, P[0], 2.1],
    [0.1, P[0], 2.1],
    [0.25, [mid0.x, mid0.y], 1.02],
    [0.4, P[1], 2.1],
    [0.52, P[1], 2.5],
    [0.6, [lerp(P[1][0], mid1.x, 0.45), lerp(P[1][1], mid1.y, 0.45)], 2.7],
    [0.66, [mid1.x, mid1.y], 2.8],
    [0.72, P[2], 2.8],
    [0.86, P[2], 2.6],
    [0.97, ALL, 1],
    [1, ALL, 1],
  ]
  function camera(p) {
    let i = 0
    while (i < CAM.length - 2 && p > CAM[i + 1][0]) i++
    const [p0, c0, k0] = CAM[i]
    const [p1, c1, k1] = CAM[i + 1]
    const e = smooth(sub(p, p0, p1))
    return { cx: lerp(c0[0], c1[0], e), cy: lerp(c0[1], c1[1], e), k: Math.exp(lerp(Math.log(k0), Math.log(k1), e)) }
  }

  let mapG, trail, plane, dots, rings, names, lands, view
  let lastArrived = []
  function buildScene() {
    svg.innerHTML = ''
    mapG = document.createElementNS(NS, 'g')
    trail = document.createElementNS(NS, 'path')
    trail.setAttribute('class', 'h-trail')
    svg.append(mapG, trail)
    rings = STOPS.map(() => {
      const c = document.createElementNS(NS, 'circle')
      c.setAttribute('class', 'h-ring')
      c.setAttribute('r', 6)
      return svg.appendChild(c)
    })
    dots = STOPS.map(() => {
      const c = document.createElementNS(NS, 'circle')
      c.setAttribute('class', 'h-dot')
      c.setAttribute('r', 5.5)
      return svg.appendChild(c)
    })
    names = STOPS.map((s) => {
      const tx = document.createElementNS(NS, 'text')
      tx.setAttribute('class', 'h-name')
      tx.setAttribute('text-anchor', s.label[2])
      tx.textContent = tr(s.name)
      return svg.appendChild(tx)
    })
    plane = document.createElementNS(NS, 'path')
    plane.setAttribute('d', PLANE)
    plane.setAttribute('class', 'h-plane')
    svg.append(plane)
    lands = {}
    fetch('/img/home-map.svg')
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((text) => {
        const doc = new DOMParser().parseFromString(text, 'image/svg+xml')
        const land = doc.querySelector('.h-land')
        if (!land) return
        mapG.append(document.importNode(land, true))
        qa('[data-c]', mapG).forEach((el) => (lands[el.dataset.c] = el))
        lastArrived = []
        render()
      })
      .catch(() => {})
  }

  function measure() {
    const w = svg.clientWidth
    const h = svg.clientHeight
    const wide = journey.classList.contains('h-live') && matchMedia('(min-width: 900px)').matches
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
    const ax = wide ? w * 0.66 : w / 2
    const ay = wide ? h * 0.5 : h / 2
    const effW = wide ? w * 0.56 : w * 0.8
    const effH = h * 0.86
    view = { w, h, ax, ay, s0: Math.min(effW / SPAN[0], effH / SPAN[1]), planeSize: wide ? 30 : 24 }
  }

  function progress() {
    if (still || !journey.classList.contains('h-live')) return 1
    const r = journey.getBoundingClientRect()
    return cl(-r.top / (r.height - innerHeight))
  }

  function render() {
    if (!view || !view.w) return
    const p = progress()
    const cam = still ? { cx: ALL[0], cy: ALL[1], k: 1 } : camera(p)
    const s = view.s0 * cam.k
    const X = (x) => view.ax + (x - cam.cx) * s
    const Y = (y) => view.ay + (y - cam.cy) * s
    mapG.setAttribute('transform', `translate(${(view.ax - cam.cx * s).toFixed(2)} ${(view.ay - cam.cy * s).toFixed(2)}) scale(${s.toFixed(4)})`)

    // How far along each flight the plane is
    const f = LEGS.map(([a, b]) => inOut(sub(p, a, b)))
    let pos, ang, lift
    if (f[0] < 1) {
      pos = along(legs[0], f[0])
      ang = heading(legs[0], f[0])
      lift = Math.sin(f[0] * Math.PI)
    } else {
      pos = along(legs[1], f[1])
      ang = f[1] > 0 ? heading(legs[1], f[1]) : turn(heading(legs[0], 1), heading(legs[1], 0), smooth(sub(p, 0.47, 0.58)))
      lift = Math.sin(f[1] * Math.PI)
    }

    // The dashed trail behind the plane
    let d = ''
    legs.forEach((leg, li) => {
      if (f[li] <= 0) return
      const end = along(leg, f[li])
      d += `M${X(leg.pts[0][0]).toFixed(1)},${Y(leg.pts[0][1]).toFixed(1)}`
      for (let i = 1; i < end.i; i++) d += `L${X(leg.pts[i][0]).toFixed(1)},${Y(leg.pts[i][1]).toFixed(1)}`
      d += `L${X(end.x).toFixed(1)},${Y(end.y).toFixed(1)}`
    })
    trail.setAttribute('d', d)

    const sc = (view.planeSize / 24) * (1 + lift * 0.28)
    const deg = (ang * 180) / Math.PI + 90
    plane.setAttribute('transform', `translate(${X(pos.x).toFixed(1)} ${Y(pos.y).toFixed(1)}) rotate(${deg.toFixed(2)}) scale(${sc.toFixed(3)}) translate(-11.5 -12)`)

    STOPS.forEach((st, i) => {
      const x = X(st.at[0])
      const y = Y(st.at[1])
      const on = p >= ARRIVE[i]
      dots[i].setAttribute('cx', x.toFixed(1))
      dots[i].setAttribute('cy', y.toFixed(1))
      rings[i].setAttribute('cx', x.toFixed(1))
      rings[i].setAttribute('cy', y.toFixed(1))
      names[i].setAttribute('x', (x + st.label[0]).toFixed(1))
      names[i].setAttribute('y', (y + st.label[1]).toFixed(1))
      if (on !== lastArrived[i]) {
        dots[i].classList.toggle('on', on)
        names[i].classList.toggle('on', on)
        if (lands[st.key]) lands[st.key].classList.toggle('on', on)
        rings[i].classList.remove('go')
        if (on && i > 0 && lastArrived[i] === false) {
          void rings[i].getBoundingClientRect()
          rings[i].classList.add('go')
        }
        lastArrived[i] = on
      }
    })

    // Chapters: one at a time, fading and rising in
    if (journey.classList.contains('h-live'))
      chapters.forEach((ch, i) => {
        const [a, b] = SHOW[i]
        const o = Math.min(sub(p, a, a + 0.03), 1 - sub(p, b - 0.03, b))
        const y = p < a + 0.03 ? (1 - o) * 24 : (o - 1) * 24
        ch.style.opacity = o.toFixed(3)
        ch.style.transform = `translateY(${y.toFixed(1)}px)`
        ch.style.visibility = o > 0.001 ? 'visible' : 'hidden'
        ch.setAttribute('aria-hidden', o < 0.5)
      })
  }

  if (journey && svg) {
    journey.classList.add('h-has-map')
    if (!still) journey.classList.add('h-live')
    buildScene()
    measure()
    render()
  }

  /* ---------- One scroll loop ---------- */
  const heroInner = q('.h-hero-inner')
  const about = q('#about')
  function frame() {
    const vh = innerHeight
    if (!still && heroInner) {
      const r = heroInner.closest('.h-hero').getBoundingClientRect()
      const h = cl(-r.top / (r.height * 0.7))
      heroInner.style.opacity = (1 - h).toFixed(3)
      heroInner.style.transform = h ? `translateY(${(h * -50).toFixed(1)}px) scale(${(1 - h * 0.06).toFixed(4)})` : ''
    }
    if (!still && about && wordEls.length) {
      const r = about.getBoundingClientRect()
      const run = r.height - vh
      // Pinned: progress through the pin. Short screens (not pinned): progress as it scrolls up the screen.
      const k = run > vh * 0.5 ? sub(-r.top, 0, run * 0.8) : sub(vh * 0.85 - r.top, 0, vh * 0.6)
      const lit = Math.floor(sub(k, 0, 0.6) * wordEls.length * 1.0001)
      wordEls.forEach((w, i) => w.classList.toggle('lit', i < lit))
      if (more) more.classList.toggle('on', k > 0.68)
    }
    if (journey && view) {
      const r = journey.getBoundingClientRect()
      if (r.bottom > -50 && r.top < vh + 50) render()
    }
  }
  let ticking = false
  addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        frame()
        ticking = false
      })
    },
    { passive: true },
  )
  let resizeTimer
  addEventListener('resize', () => {
    cancelAnimationFrame(resizeTimer)
    resizeTimer = requestAnimationFrame(() => {
      if (journey && svg) measure()
      frame()
    })
  })
  frame()
})()

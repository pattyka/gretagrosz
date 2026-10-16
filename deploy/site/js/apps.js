// Apps page: the hero shelf comes alive (the icons hop in turn and the mascot leans toward them),
// on tall desktops each card recedes a little as the next one stacks over it, and a floating dock
// jumps between the four apps once the shelf has scrolled away.
;(function () {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const stackMode = matchMedia('(min-width: 1000px) and (min-height: 860px)')
  const stage = document.querySelector('.shelf-stage')
  const peek = document.querySelector('.peek')
  const icons = [...document.querySelectorAll('.shelf a')]
  const cards = [...document.querySelectorAll('.app[data-app]')]
  const dock = document.querySelector('.dock')
  const dockLinks = dock ? [...dock.querySelectorAll('a')] : []
  const end = document.querySelector('.apps-end')

  /* ---------- Hero shelf ---------- */
  function lean(a) {
    if (!peek) return
    let deg = 0
    if (a) {
      const p = peek.getBoundingClientRect()
      const r = a.getBoundingClientRect()
      deg = Math.max(-7, Math.min(7, (r.left + r.width / 2 - (p.left + p.width / 2)) / 28))
    }
    peek.style.setProperty('--tilt', deg.toFixed(1) + 'deg')
  }

  let shelfVisible = true
  let hovering = false
  let next = 0
  let timer = 0

  function hop() {
    timer = 0
    if (!shelfVisible || hovering || reduced.matches || document.hidden) return
    const a = icons[next]
    next = (next + 1) % icons.length
    const icon = a.querySelector('.app-icon')
    icon.classList.remove('hop')
    void icon.offsetWidth // restart the animation if it is somehow still set
    icon.classList.add('hop')
    lean(a)
    schedule(2600)
  }
  function schedule(ms) {
    clearTimeout(timer)
    timer = setTimeout(hop, ms)
  }

  icons.forEach((a) => {
    const icon = a.querySelector('.app-icon')
    icon.addEventListener('animationend', () => icon.classList.remove('hop'))
    a.addEventListener('pointerenter', () => { hovering = true; clearTimeout(timer); lean(a) })
    a.addEventListener('pointerleave', () => { hovering = false; lean(null); schedule(1600) })
    a.addEventListener('focus', () => lean(a))
    a.addEventListener('blur', () => lean(null))
  })
  document.addEventListener('visibilitychange', () => { if (!document.hidden && shelfVisible) schedule(1200) })

  /* ---------- Floating dock + stacking cards ---------- */
  let endVisible = false
  let dockOn = false

  function setDock(on) {
    if (!dock || on === dockOn) return
    dockOn = on
    dock.classList.toggle('on', on)
    dock.inert = !on
  }

  if (dock) {
    dock.hidden = false
    dock.inert = true
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === stage) {
          shelfVisible = e.isIntersecting
          if (shelfVisible) schedule(timer ? 2600 : 1400)
          else clearTimeout(timer)
        } else if (e.target === end) endVisible = e.isIntersecting
      }
      setDock(!shelfVisible && !endVisible)
    }, { rootMargin: '0px 0px -12% 0px' })
    if (stage) io.observe(stage)
    if (end) io.observe(end)
  }
  // first hop once the shelf has popped in
  schedule(2300)

  let ticking = false
  function frame() {
    ticking = false
    const mid = innerHeight * 0.5
    let active = 0
    cards.forEach((c, i) => { if (c.getBoundingClientRect().top <= mid) active = i })
    dockLinks.forEach((a, i) => {
      if (i === active) a.setAttribute('aria-current', 'true')
      else a.removeAttribute('aria-current')
    })

    const stacking = stackMode.matches && !reduced.matches
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i]
      let s = 1
      if (stacking && i < cards.length - 1) {
        const h = c.offsetHeight
        const covered = (c.getBoundingClientRect().top + h - cards[i + 1].getBoundingClientRect().top) / h
        s = 1 - 0.05 * Math.max(0, Math.min(1, covered))
      }
      const v = s === 1 ? '' : `scale(${s.toFixed(4)})`
      if (c.style.transform !== v) c.style.transform = v
    }
  }
  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(frame)
  }
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('resize', onScroll, { passive: true })
  stackMode.addEventListener?.('change', onScroll)
  frame()
})()

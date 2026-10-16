// Finance page: the market-research numbers and the live account calculator.
// The calculator is a port of Greta's Excel file (Jugendkonto_Vergleichsrechner.xlsx, sheet "Rechner"):
// same accounts, same ratings, same bonus points, same formula, same tie-break.
;(function () {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const $ = (s, el = document) => el.querySelector(s)
  const T = (s) => I18N.t(s)
  const fmt = (n, d = 0) => I18N.num(n, { minimumFractionDigits: d, maximumFractionDigits: d })
  const NB = ' '

  /* ---------- Market research: waffles fill and numbers count up when they come into view ---------- */

  const FORMAT = {
    pct: (n) => I18N.num(n / 100, { style: 'percent', maximumFractionDigits: 0 }),
    bn: (n) => (I18N.lang === 'de' ? `${fmt(n)}${NB}Mrd.${NB}€` : `€${fmt(n)}bn`),
  }
  const NS = 'http://www.w3.org/2000/svg'
  document.querySelectorAll('.waffle').forEach((svg) => {
    const n = Number(svg.dataset.n)
    let base = '', lit = ''
    for (let i = 0; i < 100; i++) {
      const x = 5 + (i % 10) * 10, y = 5 + Math.floor(i / 10) * 10
      base += `<circle cx="${x}" cy="${y}" r="3.7"/>`
      if (i < n) lit += `<circle cx="${x}" cy="${y}" r="3.7" style="--i:${i}"/>`
    }
    svg.innerHTML = `<g class="w-base">${base}</g><g class="w-lit">${lit}</g>`
    svg.setAttribute('xmlns', NS)
  })

  const nums = [...document.querySelectorAll('.stat .num')].map((el) => ({ el, to: Number(el.dataset.to), f: FORMAT[el.dataset.fmt], v: Number(el.dataset.to) }))
  const paint = (s) => { s.el.textContent = s.f(s.v) }
  nums.forEach(paint)

  const ease = (t) => 1 - Math.pow(1 - t, 4)
  function count(s) {
    const start = performance.now(), dur = 1400
    const tick = (now) => {
      const k = Math.min(1, (now - start) / dur)
      s.v = Math.round(s.to * ease(k))
      paint(s)
      if (k < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }
  const stats = document.querySelectorAll('[data-stat]')
  if (reduced || !('IntersectionObserver' in window)) stats.forEach((el) => el.classList.add('go'))
  else {
    nums.forEach((s) => { s.v = 0; paint(s) })
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return
      io.unobserve(e.target)
      e.target.classList.add('go')
      const s = nums.find((x) => e.target.contains(x.el))
      if (s) count(s)
    }), { threshold: 0.45 })
    stats.forEach((el) => io.observe(el))
  }

  /* ---------- Account calculator ---------- */

  // Order and ratings follow the Excel sheet. bonus = € value used for scoring (the JBL headphones count as 50).
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
  const KEYS = ['app', 'events', 'branches', 'invest', 'bonus']
  // Excel: IF(Q=0,0,IF(Q=20,1,IF(Q=50,2.5,5)))
  const bonusPoints = (b) => (b === 0 ? 0 : b === 20 ? 1 : b === 50 ? 2.5 : 5)
  // Excel: IF(Verfügbar="Nein",0,(App*T+Events*U+Filiale*V+Investieren*W+Bonus*bonusPoints*0.5)/SUM(weights))
  function score(a, age, w) {
    const available = age >= a.min && age <= a.max
    const sum = w.app + w.events + w.branches + w.invest + w.bonus
    const value = !available || sum === 0 ? 0 : (w.app * a.app + w.events * a.events + w.branches * a.branches + w.invest * a.invest + w.bonus * bonusPoints(a.bonus) * 0.5) / sum
    return { available, value, sum }
  }
  // Excel: XLOOKUP(MAX(scores), scores, names) = the first account in sheet order with the highest score.
  // Ranking = available first, then by score; Array.sort is stable, so ties keep sheet order and row 1 is
  // always that same first-highest account.
  function rank(age, w) {
    const rows = ACCOUNTS.map((a, i) => ({ a, i, ...score(a, age, w) }))
    const sorted = [...rows].sort((x, y) => y.available - x.available || y.value - x.value)
    return { rows, sorted, best: sorted[0], sum: sorted[0].sum }
  }
  window.FINANCE = { ACCOUNTS, bonusPoints, score, rank }   // exposed for checking against the Excel file

  const form = $('#controls')
  if (!form) return
  const ageInput = $('#c-age')
  const ageOut = $('#o-age')
  const list = $('#ranking')
  const DEFAULTS = { app: 3, events: 3, branches: 3, invest: 3, bonus: 3 }

  // Segmented controls 0–5: real radio groups, so arrow keys, Tab and screen readers behave natively
  form.querySelectorAll('.seg').forEach((seg) => {
    const k = seg.dataset.k
    let html = ''
    for (let v = 0; v <= 5; v++) html += `<label><input type="radio" name="${k}" value="${v}"${v === DEFAULTS[k] ? ' checked' : ''} /><span>${v}</span></label>`
    seg.innerHTML = html + '<i class="thumb" aria-hidden="true"></i>'
  })
  form.addEventListener('submit', (e) => e.preventDefault())

  // One persistent row per account, so rows can glide to their new place (FLIP)
  const rowEls = ACCOUNTS.map((a, i) => {
    const li = document.createElement('li')
    li.innerHTML = '<button type="button" class="row"><span class="rk"></span><span class="nm"><b></b><small></small></span><span class="sc"></span><span class="bar"><i></i></span></button>'
    const btn = li.firstChild
    btn.addEventListener('click', () => { selected = selected === i || i === current.best.i ? null : i; render() })
    list.appendChild(li)
    return { li, btn, rk: $('.rk', li), name: $('.nm b', li), meta: $('.nm small', li), sc: $('.sc', li), bar: $('.bar i', li) }
  })

  let selected = null     // index of the account whose formula is shown; null = follow the recommendation
  let current = null
  let lastBest = -1
  let announceTimer = 0

  const ages = (a) => (a.max >= 99 ? T('Only from age {a}').replace('{a}', a.min) : T('Only for ages {a}–{b}').replace('{a}', a.min).replace('{b}', a.max))
  const bonusText = (a) => `${T('Bonus')}: ${T(a.label)}`.replace(/ /g, NB)

  function formula(r, w, age) {
    if (!r.available) return `${T('Age')} ${age} · ${ages(r.a)}`
    const a = r.a
    const parts = [`${w.app}×${a.app}`, `${w.events}×${a.events}`, `${w.branches}×${a.branches}`, `${w.invest}×${a.invest}`, `${w.bonus}×${fmt(bonusPoints(a.bonus), bonusPoints(a.bonus) % 1 ? 1 : 0)}×${fmt(0.5, 1)}`]
    const result = r.sum === 0 ? '#DIV/0!' : fmt(r.value, 2)
    return `=(${parts.join('+')})÷${r.sum}  →  ${result}`
  }

  function flip(order) {
    const animate = !reduced && list.getClientRects().length
    const first = animate ? order.map((r) => rowEls[r.i].li.getBoundingClientRect().top) : null
    const focused = list.contains(document.activeElement) ? document.activeElement : null
    let moved = false
    order.forEach((r, pos) => {
      const li = rowEls[r.i].li
      if (list.children[pos] !== li) { list.insertBefore(li, list.children[pos]); moved = true }
    })
    if (focused && document.activeElement !== focused) focused.focus({ preventScroll: true })
    if (!moved || !animate) return
    order.forEach((r) => { const li = rowEls[r.i].li; li.style.transition = 'none'; li.style.transform = '' })
    const last = order.map((r) => rowEls[r.i].li.getBoundingClientRect().top)
    order.forEach((r, k) => {
      const dy = first[k] - last[k]
      const li = rowEls[r.i].li
      li.classList.toggle('up', dy > 0.5)
      if (Math.abs(dy) > 0.5) li.style.transform = `translateY(${dy}px)`
    })
    void list.offsetHeight
    order.forEach((r) => { const li = rowEls[r.i].li; li.style.transition = ''; li.style.transform = '' })
  }

  function render() {
    const age = Number(ageInput.value)
    const w = {}
    KEYS.forEach((k) => { w[k] = Number(form.elements[k].value) })
    current = rank(age, w)
    const { sorted, best, sum } = current
    const none = sum === 0

    // Controls
    ageOut.textContent = age
    ageInput.setAttribute('aria-valuetext', T('{n} years').replace('{n}', age))
    ageInput.style.setProperty('--fill', `${((age - ageInput.min) / (ageInput.max - ageInput.min)) * 100}%`)
    form.querySelectorAll('.seg').forEach((seg) => seg.style.setProperty('--v', w[seg.dataset.k]))

    // Recommendation
    $('#r-kicker').textContent = T('Your recommendation')
    $('#r-score-l').textContent = T('Score')
    $('#r-name').textContent = none ? T('Set a priority') : best.a.name
    $('#r-meta').textContent = none ? T('Choose at least one priority above 0.') : `${best.a.bank} · ${bonusText(best.a)}`
    $('#r-score').textContent = none ? '–' : fmt(best.value, 2)
    const pick = $('#pick')
    pick.classList.toggle('none', none)
    const bestKey = none ? -2 : best.i
    if (lastBest !== -1 && bestKey !== lastBest && !reduced) {
      pick.classList.remove('bump'); void pick.offsetWidth; pick.classList.add('bump')
    }
    lastBest = bestKey

    // Formula bar: the formula of the selected row (or the recommendation), with today's numbers in it
    const shown = selected == null ? best : current.rows[selected]
    $('#fx-name').textContent = shown.a.name
    $('#fx-f').textContent = formula(shown, w, age)

    // Ranking
    let n = 0
    sorted.forEach((r) => {
      const el = rowEls[r.i]
      if (r.available) n++
      el.rk.textContent = r.available ? n : ''
      el.name.textContent = r.a.name
      el.meta.textContent = r.available ? r.a.bank : `${r.a.bank} · ${ages(r.a)}`
      el.sc.textContent = !r.available ? T('n/a') : none ? '–' : fmt(r.value, 2)
      el.bar.style.transform = `scaleX(${r.value / 5})`
      el.li.classList.toggle('off', !r.available)
      el.li.classList.toggle('top', r === best && !none)
      el.btn.setAttribute('aria-pressed', String(r === shown))
      el.btn.setAttribute('aria-label', `${r.a.name}, ${r.a.bank}, ${r.available ? (none ? '–' : `${T('Score')} ${fmt(r.value, 2)}`) : `${T('n/a')}, ${ages(r.a)}`}`)
    })
    flip(sorted)

    // Screen readers hear the result once the controls settle, not on every slider step
    clearTimeout(announceTimer)
    announceTimer = setTimeout(() => {
      $('#announce').textContent = none ? `${T('Set a priority')}. ${T('Choose at least one priority above 0.')}` : `${T('Your recommendation')}: ${best.a.name}, ${best.a.bank}. ${T('Score')} ${fmt(best.value, 2)}.`
    }, 500)
  }

  form.addEventListener('input', render)
  form.addEventListener('change', render)
  document.addEventListener('langchange', () => { render(); nums.forEach(paint) })
  render()
})()

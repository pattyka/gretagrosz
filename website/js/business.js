// Business page: the two hero tiles lean toward the pointer, and "Plan your tattoos" opens a sheet that
// writes the enquiry for you (occasion, design, date, people), ready to copy into a LinkedIn message.
// Without JS (or without <dialog>) the button is a plain link to LinkedIn.
;(function () {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const fine = matchMedia('(hover: hover) and (pointer: fine)')

  /* ---------- Hero tiles: a small 3D lean toward the pointer ---------- */
  document.querySelectorAll('.pair .tile').forEach((tile) => {
    const icon = tile.querySelector('.app-icon')
    let raf = 0
    let px = 0
    let py = 0
    const paint = () => {
      raf = 0
      const r = icon.getBoundingClientRect()
      const x = Math.max(-1, Math.min(1, (px - (r.left + r.width / 2)) / (r.width / 2)))
      const y = Math.max(-1, Math.min(1, (py - (r.top + r.height / 2)) / (r.height / 2)))
      icon.style.setProperty('--ry', (x * 12).toFixed(2) + 'deg')
      icon.style.setProperty('--rx', (-y * 12).toFixed(2) + 'deg')
    }
    tile.addEventListener('pointermove', (e) => {
      if (!fine.matches || reduced.matches || e.pointerType !== 'mouse') return
      px = e.clientX
      py = e.clientY
      tile.classList.add('tracking')
      if (!raf) raf = requestAnimationFrame(paint)
    })
    tile.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf)
      raf = 0
      tile.classList.remove('tracking')
      icon.style.removeProperty('--rx')
      icon.style.removeProperty('--ry')
    })
  })

  /* ---------- Plan your tattoos ---------- */
  const dialog = document.querySelector('.planner')
  const trigger = document.querySelector('[data-plan]')
  if (!dialog || !trigger || typeof dialog.showModal !== 'function') return

  const form = dialog.querySelector('.plan')
  const msg = form.elements.msg
  const date = form.elements.date
  const people = form.elements.people
  const copyBtn = dialog.querySelector('.copy')
  const status = dialog.querySelector('[role="status"]')
  const t = I18N.t

  // The message is written from the choices until the visitor types in it themselves
  let edited = false
  let doneTimer = 0

  const OCC = { festival: 'for a festival', event: 'for an event', team: 'for my team' }
  const DESIGN = { logo: 'We are thinking of our logo.', name: 'We are thinking of a name.', idea: 'We have our own idea.' }

  function compose() {
    const occ = form.elements.occ.value || 'festival'
    const design = form.elements.design.value || 'logo'
    let first = `${t('I would like Weekend Ink tattoos')} ${t(OCC[occ])}`
    if (date.value) {
      const d = new Date(date.value + 'T12:00:00')
      if (!Number.isNaN(d.getTime())) {
        const when = new Intl.DateTimeFormat(I18N.lang === 'de' ? 'de-AT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
        first += ' ' + t('on {date}').replace('{date}', when)
      }
    }
    const n = Math.round(Number(people.value))
    if (people.value !== '' && Number.isFinite(n) && n > 0) first += ' ' + t(n === 1 ? 'for about {n} person' : 'for about {n} people').replace('{n}', I18N.num(n))
    return `${t('Hi Greta,')}\n\n${first}. ${t(DESIGN[design])} ${t('Can we talk about it?')}`
  }
  // The message box grows with its text, so the whole message is always readable
  function fit() {
    if (!dialog.open) return
    msg.style.height = 'auto'
    msg.style.height = msg.scrollHeight + 2 + 'px'
  }
  function refresh() {
    if (!edited) msg.value = compose()
    fit()
  }

  form.addEventListener('change', (e) => { if (e.target !== msg) refresh() })
  form.addEventListener('input', (e) => {
    if (e.target === msg) { edited = msg.value.trim() !== '' && msg.value !== compose(); fit() }
    else refresh()
  })
  form.addEventListener('submit', (e) => e.preventDefault())
  document.addEventListener('langchange', refresh)

  function setDone(on) {
    clearTimeout(doneTimer)
    copyBtn.classList.toggle('done', on)
    copyBtn.querySelector('.l-done').setAttribute('aria-hidden', String(!on))
    copyBtn.querySelector('.l-copy').setAttribute('aria-hidden', String(on))
    if (on) doneTimer = setTimeout(() => setDone(false), 2400)
  }

  function legacyCopy(text) {
    // Older Safari, or a page without clipboard permission: copy from the textarea itself
    const start = msg.selectionStart
    const end = msg.selectionEnd
    const prev = msg.value
    msg.value = text
    msg.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch (e) { ok = false }
    msg.value = prev
    try { msg.setSelectionRange(start, end) } catch (e) {}
    return ok
  }

  copyBtn.addEventListener('click', async () => {
    const text = msg.value.trim() || compose()
    let ok = false
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); ok = true } catch (e) { ok = false }
    }
    if (!ok) ok = legacyCopy(text)
    if (ok) {
      setDone(true)
      status.textContent = t('Message copied.')
    } else {
      // Nothing could be copied: select the text so it can be copied by hand
      msg.focus()
      msg.select()
      status.textContent = t('Select the message and copy it.')
    }
  })

  let closing = 0
  function open(e) {
    e.preventDefault()
    if (dialog.open) return
    clearTimeout(closing)
    const today = new Date()
    date.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    refresh()
    setDone(false)
    status.textContent = ''
    document.documentElement.classList.add('sheet-open')
    dialog.showModal()
    fit()
    // the sheet animates in from its closed state on the next frame
    requestAnimationFrame(() => requestAnimationFrame(() => dialog.classList.add('on')))
  }
  function close() {
    if (!dialog.open) return
    dialog.classList.remove('on')
    document.documentElement.classList.remove('sheet-open')
    clearTimeout(closing)
    closing = setTimeout(() => dialog.close(), reduced.matches ? 0 : 260)
  }

  trigger.addEventListener('click', open)
  dialog.querySelector('.x').addEventListener('click', close)
  dialog.addEventListener('cancel', (e) => { e.preventDefault(); close() })
  dialog.addEventListener('close', () => {
    dialog.classList.remove('on')
    document.documentElement.classList.remove('sheet-open')
    // Safari does not focus a clicked link, so hand focus back to the button explicitly
    trigger.focus({ preventScroll: true })
  })
  // A click on the backdrop lands on the <dialog> itself, outside the sheet
  dialog.addEventListener('click', (e) => {
    if (e.target !== dialog) return
    const r = dialog.getBoundingClientRect()
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
    if (!inside) close()
  })
})()

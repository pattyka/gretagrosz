// Shared behaviour for every page. Loaded last (after i18n.js and the page dictionaries).
;(function () {
  const CONTACT = {
    email: '',   // public email; empty hides the button
    linkedin: 'https://www.linkedin.com/in/greta-grosz',
  }
  window.SITE = { CONTACT }

  document.documentElement.classList.add('js')

  // Contact buttons: any element with [data-contact] gets them
  document.querySelectorAll('[data-contact]').forEach((el) => {
    el.innerHTML = [
      CONTACT.email && `<a class="btn" href="mailto:${CONTACT.email}">Email me</a>`,
      `<a class="btn${CONTACT.email ? ' soft' : ''}" href="${CONTACT.linkedin}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z"/></svg>Connect on LinkedIn</a>`,
      `<a class="btn soft" href="/cv/">Download my CV</a>`,
    ].filter(Boolean).join('')
  })
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()))

  // Language switch
  document.querySelectorAll('.lang button[data-lang]').forEach((b) => b.addEventListener('click', () => I18N.set(b.dataset.lang)))
  I18N.applyDocument()

  // Reveal on scroll
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const rv = document.querySelectorAll('.rv')
  if (reduced || !('IntersectionObserver' in window)) rv.forEach((el) => el.classList.add('in'))
  else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    rv.forEach((el) => io.observe(el))
  }

  // Scenes: <div class="scene" data-scene="deca"></div> loads /scenes/deca.js (+ .css) shortly before it
  // scrolls into view and calls its mount(el). Nothing is downloaded for scenes you never reach.
  const scenes = document.querySelectorAll('[data-scene]')
  if (scenes.length) {
    const v = document.querySelector('meta[name="build"]')?.content || ''
    const q = v ? `?v=${v}` : ''
    const load = (el) => {
      if (el.dataset.mounted) return
      el.dataset.mounted = '1'
      const name = el.dataset.scene
      if (!document.querySelector(`link[data-scene-css="${name}"]`)) {
        const l = document.createElement('link')
        l.rel = 'stylesheet'; l.href = `/scenes/${name}.css${q}`; l.dataset.sceneCss = name
        document.head.appendChild(l)
      }
      import(`/scenes/${name}.js${q}`)
        .then((m) => m.mount(el))
        .catch((err) => { el.classList.add('scene-failed'); setTimeout(() => { throw err }) })
    }
    if (!('IntersectionObserver' in window)) scenes.forEach(load)
    else {
      const io = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { load(e.target); io.unobserve(e.target) }
      }), { rootMargin: '600px 0px' })
      scenes.forEach((el) => io.observe(el))
    }
  }
})()

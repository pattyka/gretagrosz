// CV page: the download button follows the language, the print button prints the sheet.
// The PDFs are made from this page by scripts/make-cv-pdf.mjs, so screen, print and PDF are one document.
;(function () {
  const pdf = document.querySelector('[data-cv-pdf]')
  const print = document.querySelector('[data-cv-print]')
  const peek = document.querySelector('.cv-peek')
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')

  function syncPdf() {
    if (!pdf) return
    const file = `Greta_Grosz_CV_${I18N.lang === 'de' ? 'DE' : 'EN'}.pdf`
    pdf.href = `/files/${file}`
    pdf.setAttribute('download', file)
  }

  function hop() {
    if (!peek || reduced.matches) return
    peek.classList.remove('hop')
    void peek.offsetWidth   // restart the animation on repeated clicks
    peek.classList.add('hop')
  }
  if (peek) peek.addEventListener('animationend', () => peek.classList.remove('hop'))

  if (pdf) pdf.addEventListener('click', hop)

  if (print && typeof window.print === 'function') {
    print.hidden = false
    print.addEventListener('click', () => window.print())
  }

  syncPdf()
  document.addEventListener('langchange', syncPdf)
})()

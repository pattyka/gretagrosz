// Shared helpers for every app demo scene on gretagrosz.com. Scenes import from here and never edit it.

export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
/** Sub-progress of t inside [a, b], clamped to 0..1. */
export const range = (t, a, b) => clamp((t - a) / (b - a));
export const ease = {
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  expoOut: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
};
/** Damped spring from 0 to 1 starting at rest; u in 0..1 covers the settle. */
export function spring(u, zeta = 0.72, omega = 9) {
  if (u <= 0) return 0;
  if (u >= 1) return 1;
  const t = u * omega, wd = Math.sqrt(1 - zeta * zeta);
  return 1 - Math.exp(-zeta * t) * (Math.cos(wd * t) + (zeta / wd) * Math.sin(wd * t));
}

/**
 * Run a timeline while `el` is on screen. `draw(t)` gets seconds since the
 * current loop started; the loop restarts every `period` seconds. Frames stop
 * when the element is off screen or the tab is hidden, and resume where they
 * were. With reduced motion, draw(restAt) is called once and nothing animates;
 * inside a [data-still] element the same happens at its time.
 * Returns { restart() } so a scene can replay on tap/hover.
 */
export function timeline(el, draw, { period, restAt = period * 0.6, threshold = 0.35 } = {}) {
  // A still (the overview's thumbnails, overview-thumbs.js): one frame at
  // data-still seconds (empty = restAt), no clock, no observers.
  const still = el.closest('[data-still]');
  if (still) {
    const at = parseFloat(still.dataset.still);
    draw(Number.isFinite(at) ? at % period : restAt);
    return { restart() {} };
  }
  if (reduced) { draw(restAt); return { restart() {} }; }
  let t = 0, last = 0, raf = 0, on = false;
  const frame = (now) => {
    raf = 0;
    if (!on || document.hidden) return;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    t = (t + dt) % period;
    draw(t);
    raf = requestAnimationFrame(frame);
  };
  const start = () => { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } };
  new IntersectionObserver(([e]) => { on = e.isIntersecting; if (on) start(); }, { threshold }).observe(el);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && on) start(); });
  draw(0);
  return { restart() { t = 0; last = 0; start(); } };
}

/** Build DOM from an HTML string; returns the first element. */
export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

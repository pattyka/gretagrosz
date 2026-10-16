// QED: a real proof problem from the app (day 26). Two hints show the path, the proof is written by hand,
// the AI coach marks it 8 of 8. Constants in cqw; line widths are read once per font/size/language, never per frame.
import { timeline, ease, spring, range, clamp, lerp, h } from './kit.js';

const I18N = window.I18N;
I18N.add({
  'Prove it': 'Beweise',
  'Prove that 2ⁿ + 1 is never divisible by 7, for any positive integer n.': 'Beweise, dass 2ⁿ + 1 für keine positive ganze Zahl n durch 7 teilbar ist.',
  'Show a hint': 'Tipp anzeigen',
  'Show the key idea': 'Kernidee anzeigen',
  'Nudge': 'Anstoß',
  'Key idea': 'Kernidee',
  'Look at the powers of 2 mod 7.': 'Schau dir die Potenzen von 2 mod 7 an.',
  'They cycle with period 3: 2, 4, 1.': 'Sie wiederholen sich mit Periode 3: 2, 4, 1.',
  'so': 'also',
  'or': 'oder',
  'never': 'nie',
  'Check My Proof': 'Beweis prüfen',
  'Reading your proof…': 'Beweis wird gelesen …',
  'of 8 points': 'von 8 Punkten',
  'Marked by the AI coach': 'Vom KI-Coach bewertet',
  'Proof accepted!': 'Beweis akzeptiert!',
  'QED: a proof problem, two hints, a handwritten proof, marked 8 of 8 points by the AI coach.':
    'QED: eine Beweisaufgabe, zwei Tipps, ein handschriftlicher Beweis, vom KI-Coach mit 8 von 8 Punkten bewertet.',
});

/* ---------- timing (s) ---------- */
const PERIOD = 12;
const REST = 11.1;
const CARD = 0.05, LINK1 = 0.75, TAP1 = 1.2, TAP2 = 2.45;
const PAPER = 3.15, WRITE = 3.95, SPEED = 60, GAP = 0.2; // writing speed in cqw per second
const BTN = 7.95, PRESS = 8.6, READ = 8.72, GRADE = 9.4, FILL = [9.65, 10.85], TICKS = [9.9, 10.25, 10.6], OK = 10.95;
const EXIT = [11.45, 11.95];
const LINE_TOP = [3, 11.5, 20]; // cqw inside the paper

const eq = '<i class="q-eq"></i>';
const tick = '<svg class="q-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const LINES = [
  `2<sup>1</sup> = 2,  2<sup>2</sup> = 4,  2<sup>3</sup> = 8 ${eq} 1`,
  `<span>so</span> 2<sup>n</sup> ${eq} 1, 2 <span>or</span> 4  (mod 7)`,
  `2<sup>n</sup> + 1 ${eq} 2, 3 <span>or</span> 5,  <span>never</span> 0`,
];

const f3 = (n) => Math.round(n * 1000) / 1000;
function put(el, tr, op) {
  if (tr != null && el._t !== tr) { el._t = tr; el.style.transform = tr; }
  if (op != null) {
    op = f3(clamp(op));
    if (el._o !== op) {
      el._o = op;
      el.style.opacity = op;
      const v = op === 0 ? 'hidden' : '';
      if (el._v !== v) { el._v = v; el.style.visibility = v; }
    }
  }
}
const ty = (y, s = 1) => `translate3d(0,${f3(y)}cqw,0)` + (s === 1 ? '' : ` scale(${f3(s)})`);
function pop(el, u, from = 0.9, dy = 1.6) {
  const s = spring(u, 0.7, 9);
  put(el, ty((1 - s) * dy, lerp(from, 1, s)), clamp(u * 3));
}
const fade = (el, u, dy = 1.2) => put(el, ty(-u * dy), 1 - u);

export function mount(el) {
  el.classList.add('sc-qed');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', 'QED: a proof problem, two hints, a handwritten proof, marked 8 of 8 points by the AI coach.');

  const root = h(`<div class="q-all" aria-hidden="true">
    <div class="q-eye">Prove it</div>
    <div class="q-card"><p>Prove that 2ⁿ + 1 is never divisible by 7, for any positive integer n.</p></div>
    <div class="q-hint q-h1"><span class="q-cap">Nudge</span><span class="q-ht">Look at the powers of 2 mod 7.</span></div>
    <div class="q-hint q-h2"><span class="q-cap">Key idea</span><span class="q-ht">They cycle with period 3: 2, 4, 1.</span></div>
    <div class="q-link q-l1">Show a hint<i class="q-tap"></i></div>
    <div class="q-link q-l2">Show the key idea<i class="q-tap"></i></div>
    <div class="q-btn"><span class="q-b1">Check My Proof</span><span class="q-b2"><i class="q-spin"></i><span>Reading your proof…</span></span></div>
    <div class="q-grade">
      <div class="q-ring"><i class="q-track"></i><i class="q-win q-wr"><i class="q-half"><i class="q-arc"></i></i></i><i class="q-win q-wl"><i class="q-half"><i class="q-arc"></i></i></i><i class="q-cap0"></i><i class="q-rot"></i><b class="q-num">0</b></div>
      <div class="q-gt"><span class="q-gh"><b class="q-n">0</b> <span>of 8 points</span></span><span class="q-gs">Marked by the AI coach</span></div>
      <div class="q-ok">Proof accepted!</div>
    </div>
    <div class="q-paper">
      ${LINES.map((l, i) => `<div class="q-ln" style="top:${LINE_TOP[i]}cqw"><span class="q-tx">${l}</span>${i === 2 ? '<i class="q-end"></i>' : ''}</div><i class="q-cv" style="top:${LINE_TOP[i]}cqw"></i>${tick.replace('class="q-tick"', `class="q-tick" style="top:${LINE_TOP[i] + 1.75}cqw"`)}`).join('')}
      <i class="q-grid"></i>
    </div>
  </div>`);
  el.append(root);
  I18N.apply(el);

  const $ = (s) => root.querySelector(s);
  const $$ = (s) => [...root.querySelectorAll(s)];
  const eye = $('.q-eye'), card = $('.q-card'), [h1, h2] = $$('.q-hint'), [l1, l2] = $$('.q-link');
  const [tap1, tap2] = $$('.q-tap'), btn = $('.q-btn'), b1 = $('.q-b1'), b2 = $('.q-b2'), spin = $('.q-spin');
  const grade = $('.q-grade'), [hr, hl] = $$('.q-half'), cap0 = $('.q-cap0'), rot = $('.q-rot');
  const num = $('.q-num'), n2 = $('.q-n'), ok = $('.q-ok'), paper = $('.q-paper');
  const txs = $$('.q-tx'), covers = $$('.q-cv'), ticks = $$('.q-tick'), end = $('.q-end');

  // per line: [start, end, width in cqw]
  let W = null;
  function measure() {
    const cq = el.clientWidth / 100;
    if (!cq) return;
    let s = WRITE;
    W = txs.map((t) => {
      const w = t.offsetWidth / cq;
      const a = s;
      s += w / SPEED + 0.12;
      const r = [a, s, w];
      s += GAP;
      return r;
    });
  }

  let shown = -1;
  const setNum = (n) => { if (n !== shown) { shown = n; num.textContent = n2.textContent = String(n); } };

  let lastT = 0;
  function draw(t) {
    lastT = t;
    if (!W) measure();
    if (!W) return;
    const out = ease.inOut(range(t, EXIT[0], EXIT[1]));
    put(root, null, 1 - out);

    const c = range(t, CARD, CARD + 0.7);
    pop(eye, c, 1, 1.2);
    pop(card, c, 0.96, 2.4);

    // tap the link, the hint takes its place
    const tapAt = [TAP1, TAP2];
    [[l1, tap1, h1, LINK1], [l2, tap2, h2, TAP1 + 0.35]].forEach(([link, tp, hint, inAt], i) => {
      const at = tapAt[i];
      const gone = range(t, at + 0.08, at + 0.28);
      const press = t >= at && t < at + 0.12 ? 0.5 : 1;
      put(link, ty(0), range(t, inAt, inAt + 0.3) * (1 - gone) * press);
      const tu = range(t, at - 0.05, at + 0.45);
      put(tp, `scale(${f3(lerp(0.3, 1.3, ease.out(tu)))})`, tu > 0 && tu < 1 ? 1 - tu : 0);
      const hu = range(t, at + 0.12, at + 0.8);
      const hOut = ease.inOut(range(t, BTN - 0.35, BTN));
      if (hOut > 0) fade(hint, hOut, 1.5);
      else pop(hint, hu, 0.94, 2);
    });

    // the paper slides up, then the proof is written line by line
    const pu = range(t, PAPER, PAPER + 0.9);
    const ps = spring(pu, 0.74, 8.5);
    put(paper, `translate3d(0,${f3((1 - ps) * 34)}cqw,0) rotate(${f3(lerp(-4, -1.1, ps))}deg)`, clamp(pu * 4));
    W.forEach(([a, b, w], i) => {
      const u = range(t, a, b);
      const v = lerp(u, u * u * (3 - 2 * u), 0.4);
      put(covers[i], `translate3d(${f3(v * (w + 3.4))}cqw,0,0)`, u >= 1 ? 0 : 1);
      const k = range(t, TICKS[i], TICKS[i] + 0.55);
      const s = spring(k, 0.5, 10);
      put(ticks[i], `scale(${f3(lerp(0.3, 1, s))}) rotate(${f3((1 - s) * -18)}deg)`, clamp(k * 4));
    });
    const e = range(t, W[2][1] + 0.08, W[2][1] + 0.6);
    const es = spring(e, 0.45, 11);
    put(end, `scale(${f3(lerp(1.8, 1, es))}) rotate(${f3(lerp(14, -4, es))}deg)`, clamp(e * 5));

    // check: press, the coach reads, the grade card replaces the button
    const bu = range(t, BTN, BTN + 0.6);
    const bOut = range(t, GRADE - 0.2, GRADE);
    const pr = t >= PRESS && t < PRESS + 0.16 ? 0.97 : 1;
    const bs = spring(bu, 0.7, 9);
    put(btn, ty((1 - bs) * 2, lerp(0.95, 1, bs) * pr), clamp(bu * 3) * (1 - bOut) * (pr < 1 ? 0.8 : 1));
    const r = range(t, READ, READ + 0.2);
    put(b1, null, 1 - r);
    put(b2, null, r);
    put(spin, `rotate(${Math.round((t * 400) % 360)}deg)`, null);

    pop(grade, range(t, GRADE + 0.05, GRADE + 0.8), 0.94, 2.4);
    const f = ease.inOut(range(t, FILL[0], FILL[1]));
    const deg = f * 360;
    put(hr, `rotate(${f3(Math.min(180, deg))}deg)`, null);
    put(hl, `rotate(${f3(Math.max(0, deg - 180))}deg)`, null);
    put(cap0, null, f > 0 ? 1 : 0);
    put(rot, `rotate(${f3(deg)}deg)`, f > 0 ? 1 : 0);
    setNum(Math.round(f * 8));
    const o = range(t, OK, OK + 0.6);
    const os = spring(o, 0.55, 10);
    put(ok, `translate3d(${f3((1 - os) * 2)}cqw,0,0) scale(${f3(lerp(0.7, 1, os))})`, clamp(o * 4));
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST });
  el.addEventListener('click', () => tl.restart());

  const redo = () => { W = null; draw(lastT); };
  let rw = el.clientWidth;
  new ResizeObserver(() => { if (el.clientWidth !== rw) { rw = el.clientWidth; redo(); } }).observe(el);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(redo);
  document.addEventListener('langchange', () => { I18N.apply(el); redo(); });
  return tl;
}

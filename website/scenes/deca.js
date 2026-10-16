// Deca: ten flashcards (the first flips hello → hallo), all pulled right as known; the ten dots fold
// into one day of a year in the app's streak colours, counting to 3,650 words. The live app's day-one
// theme, card and done screen. Positions are cqw constants; draw(t) writes transform/opacity only.
import { timeline, range, ease, spring, lerp, clamp, h, reduced } from './kit.js';

const LABEL = 'Deca: a flashcard flips from hello to hallo, all ten of today’s words are swiped as known, and the day joins a year of 365 coloured days: 3,650 words.';
I18N.add({
  'Today': 'Heute',
  'Flashcards': 'Karteikarten',
  'of 10': 'von 10',
  'English': 'Englisch',
  'also:': 'auch:',
  'Got it': 'Gewusst',
  'All 10 are green!': 'Alle 10 sind grün!',
  'words': 'Wörter',
  'words a year, ten a day': 'Wörter im Jahr, zehn am Tag',
  [LABEL]: 'Deca: Eine Karteikarte dreht sich von hello zu hallo, alle zehn Wörter von heute werden als gewusst weggewischt, und der Tag wird Teil eines Jahres aus 365 farbigen Tagen: 3.650 Wörter.',
});

// Day 1 of the app's English → German year (vocab-app/src/words.js).
const WORDS = ['hello', 'goodbye', 'please', 'thank you', 'yes', 'no', 'sorry', 'good morning', 'good night', 'friend'];
// Streak colours (theme.js), 30 days each.
const COLORS = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#30B0C7', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55'];

// Geometry in cqw (the box is 100 × 80), timing in s.
const DOT_Y = 70.4, dotX = (i) => 50 + (i - 4.5) * 2.6;
const COLS = 30, DAYS = 365, GP = 2.1;
const GX = 50 - ((COLS - 1) * GP) / 2, GY = 38.6;
const DRAG = 11;

const PERIOD = 11.6, REST = 10.75;
const FLIP0 = 0.8, FLIP1 = 1.35;
// Card i: grows in at S[i], pulled from D[i], known at G[i], gone by G[i] + FLY[i].
const S = [0], D = [1.85], G = [2.32], FLY = [0.28];
for (let i = 1; i < 10; i++) {
  S[i] = G[i - 1];
  G[i] = S[i] + 0.34 - (i - 1) * 0.02;
  D[i] = G[i] - 0.11;
  FLY[i] = 0.17;
}
const DONE = G[9] + 0.06;
const AWAY0 = 6.0, MERGE0 = 6.05, MERGE1 = 6.45, HOP0 = 6.5, HOP1 = 7.1;
const SW0 = 7.2, SW1 = 9.55, SW_POW = 0.62, WAVE0 = 9.7, OUT0 = 10.95, OUT1 = 11.4;
// Day k lights at RK[k], faster and faster.
const RK = Array.from({ length: DAYS }, (_, k) => SW0 + (SW1 - SW0) * Math.pow(k / (DAYS - 1), SW_POW));

const f3 = (n) => Math.round(n * 1000) / 1000;
// Write only what changed; fully transparent = hidden.
function put(el, tr, op) {
  if (tr != null && el._t !== tr) el.style.transform = el._t = tr;
  if (op == null || el._o === (op = f3(clamp(op)))) return;
  el.style.opacity = el._o = op;
  el.style.visibility = op ? '' : 'hidden';
}
const at = (x, y, s = 1) => `translate(${f3(x)}cqw,${f3(y)}cqw)` + (s === 1 ? '' : ` scale(${f3(s)})`);
const bump = (u) => (u <= 0 || u >= 1 ? 0 : Math.sin(Math.PI * u));
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function markup() {
  const card = (w, i) => `
    <div class="dk-card" style="z-index:${20 - i}">
      <div class="dk-flip">
        <div class="dk-face dk-front"><span class="dk-cap">English</span><b data-no-i18n>${w}</b></div>
        ${i === 0 ? '<div class="dk-face dk-back"><div class="dk-tint"><span>Got it</span></div><span class="dk-cap" data-no-i18n>hello</span><b data-no-i18n>hallo</b><span class="dk-also"><span>also:</span> <span data-no-i18n>servus, grüß Gott</span></span></div>' : ''}
      </div>
      ${i === 0 ? '' : '<div class="dk-tint"><span>Got it</span></div>'}
    </div>`;
  let grid = '';
  for (let k = 1; k < DAYS; k++) {
    grid += `<i class="dk-day" style="left:${f3(GX + (k % COLS) * GP)}cqw;top:${f3(GY + Math.floor(k / COLS) * GP)}cqw;background:${COLORS[Math.floor(k / COLS) % 9]}"></i>`;
  }
  let empty = '';
  for (let k = 0; k < DAYS; k++) empty += `<circle cx="${f3((k % COLS) * GP + 0.75)}" cy="${f3(Math.floor(k / COLS) * GP + 0.75)}" r="0.75"/>`;
  return `
      <div class="dk-art" aria-hidden="true">
        <div class="dk-nav">
          <span class="dk-back-link">${CHECK.replace('M5 12.5l4.5 4.5L19 7.5', 'M15 5l-7 7 7 7')}Today</span>
          <b>Flashcards</b>
          <span class="dk-count">${Array.from({ length: 11 }, (_, n) => `<span><span data-no-i18n>${n}</span> of 10</span>`).join('')}</span>
        </div>
        <div class="dk-peek"></div>
        ${WORDS.map(card).join('')}
        <div class="dk-done"><span class="dk-ok">${CHECK}</span><b>All 10 are green!</b></div>
        <svg class="dk-empty" style="left:${f3(GX - 0.75)}cqw;top:${f3(GY - 0.75)}cqw;width:${f3((COLS - 1) * GP + 1.5)}cqw" viewBox="0 0 ${f3((COLS - 1) * GP + 1.5)} ${f3(12 * GP + 1.5)}" fill="rgba(118,118,128,.14)">${empty}</svg>
        ${grid}
        <div class="dk-total"><b data-no-i18n>10</b><span><span>words</span><span>words a year, ten a day</span></span></div>
        <i class="dk-ring"></i>
        ${WORDS.map(() => '<i class="dk-dot"><i></i><i></i></i>').join('')}
      </div>`;
}

export function mount(el) {
  const root = h(markup());
  el.classList.add('sc-deca');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', LABEL);
  el.append(root);
  I18N.apply(el);
  const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
  const nav = $('.dk-nav'), peek = $('.dk-peek'), done = $('.dk-done'), ok = $('.dk-ok'), title = $('.dk-done b');
  const counts = $$('.dk-count > span');
  const cards = $$('.dk-card').map((c) => ({ el: c, flip: c.firstElementChild, tint: c.querySelector('.dk-tint') }));
  const empty = $('.dk-empty'), days = $$('.dk-day'), ring = $('.dk-ring');
  const total = $('.dk-total'), totalNum = total.firstElementChild, [capA, capB] = total.lastElementChild.children;
  const dots = $$('.dk-dot').map((d) => ({ el: d, green: d.firstElementChild, red: d.lastElementChild }));
  let shown = -1, last = 0;

  function draw(t) {
    last = t;
    const out = 1 - ease.in(range(t, OUT0, OUT1));
    const intro = ease.out(range(t, 0, 0.35));
    const away = ease.inOut(range(t, AWAY0, AWAY0 + 0.35));
    const known = G.filter((g) => t >= g).length;

    put(nav, null, intro * (1 - away));
    counts.forEach((c, n) => {
      if (n === known) {
        const u = n === 0 ? 1 : ease.out(range(t, G[n - 1] + 0.07, G[n - 1] + 0.27));
        put(c, `translateY(${f3((1 - u) * 1.1)}cqw)`, u);
      } else if (n === known - 1) {
        const u = range(t, G[n], G[n] + 0.07);
        put(c, `translateY(${f3(-u * 1.1)}cqw)`, 1 - u);
      } else put(c, null, 0);
    });

    put(peek, null, 0.6 * intro * (1 - range(t, S[9], S[9] + 0.18)));

    // Cards grow in from the peek, the first flips, each is pulled right (green) and flies off.
    cards.forEach((c, i) => {
      const grow = i === 0 ? ease.out(range(t, 0, 0.45)) : ease.out(range(t, S[i], S[i] + 0.18));
      const dx = DRAG * ease.inOut(range(t, D[i], G[i])) + 72 * ease.in(range(t, G[i], G[i] + FLY[i]));
      const s = i === 0 ? lerp(0.9, 1, grow) : lerp(0.95, 1, grow);
      const vis = t >= S[i] && t < G[i] + FLY[i] ? (i === 0 ? grow : lerp(0.6, 1, grow)) : 0;
      put(c.el, `translateX(${f3(dx)}cqw) rotate(${f3(dx * 0.5)}deg) scale(${f3(s)})`, vis);
      if (i === 0) {
        const f = ease.out(range(t, FLIP0, FLIP1));
        put(c.flip, `rotateY(${f3(f * 180)}deg) scale(${f3(1 + 0.04 * bump(f))})`, null);
      }
      put(c.tint, null, i === 0 ? range(dx, 1.5, 4.5) : Math.min(1, dx / DRAG) * 0.9);
    });

    // Dots go green, cheer at 10 of 10, fold into one day.
    const merge = ease.inOut(range(t, MERGE0, MERGE1));
    const hop = range(t, HOP0, HOP1), hx = ease.inOut(hop), hy = ease.out(hop);
    dots.forEach((d, i) => {
      const g = spring(range(t, G[i], G[i] + 0.5), 0.5, 11);
      const cheer = bump(range(t, DONE + 0.05 + i * 0.035, DONE + 0.33 + i * 0.035));
      let x = lerp(dotX(i), 50, merge), y = DOT_Y, sc = 1 + 0.45 * cheer;
      if (i === 0) {
        x = lerp(x, GX, hx); y = lerp(DOT_Y, GY, hy);
        sc *= 1 + 0.5 * bump(range(t, HOP1 - 0.05, HOP1 + 0.3));
      }
      put(d.el, at(x - 0.75, y - 0.75, sc), intro * out * (i === 0 ? 1 : 1 - range(t, MERGE1 - 0.08, MERGE1)));
      put(d.green, `scale(${f3(lerp(0.2, 1, g))})`, range(t, G[i], G[i] + 0.08));
      if (i === 0) put(d.red, null, range(t, HOP1 - 0.22, HOP1 - 0.08));
    });
    const cur = Math.min(known, 9), rm = known && known < 10 ? spring(range(t, G[known - 1], G[known - 1] + 0.45), 0.7, 10) : 1;
    put(ring, at(lerp(dotX(Math.max(cur - 1, 0)), dotX(cur), rm) - 1.35, DOT_Y - 1.35), intro * (1 - range(t, G[9], G[9] + 0.15)));

    const okIn = spring(range(t, DONE, DONE + 0.7), 0.55, 10);
    put(done, `scale(${f3(1 - away * 0.06)})`, range(t, DONE, DONE + 0.12) * (1 - away));
    put(ok, `scale(${f3(okIn)})`, null);
    const ti = ease.out(range(t, DONE + 0.2, DONE + 0.6));
    put(title, `translateY(${f3((1 - ti) * 2)}cqw)`, ti);

    // The year: today, then the rest, then one wave across.
    const yr = ease.out(range(t, HOP0 - 0.1, HOP1 - 0.2)) * out;
    put(empty, null, yr);
    put(total, `translateY(${f3((1 - yr) * 1.5)}cqw)`, yr);
    const lit = t < SW0 ? 0 : Math.min(DAYS - 1, Math.floor((DAYS - 1) * Math.pow(clamp((t - SW0) / (SW1 - SW0)), 1 / SW_POW)) + 1);
    const words = (1 + lit) * 10;
    put(totalNum, `scale(${f3(1 + 0.08 * bump(range(t, SW1, SW1 + 0.45)))})`, null);
    const fin = ease.out(range(t, SW1 + 0.1, SW1 + 0.45));
    put(capA, `translateY(${f3(-fin * 1.2)}cqw)`, 1 - fin);
    put(capB, `translateY(${f3((1 - fin) * 1.2)}cqw)`, fin);
    if (words !== shown) { shown = words; totalNum.textContent = I18N.num(words); }
    for (let k = 1; k < DAYS; k++) {
      const d = days[k - 1], r = RK[k];
      if (t < r) { put(d, '', 0); continue; }
      const s = spring(range(t, r, r + 0.3), 0.55, 10);
      const w0 = WAVE0 + ((k % COLS) + Math.floor(k / COLS) * 1.5) * 0.012, w = bump(range(t, w0, w0 + 0.28));
      const sc = lerp(0.3, 1, s) * (1 + 0.35 * w);
      put(d, sc === 1 ? '' : `scale(${f3(sc)})`, range(t, r, r + 0.06) * out);
    }
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST });
  if (!reduced && !el.closest('[data-still]')) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => tl.restart());
  }
  document.addEventListener('langchange', () => {
    I18N.apply(el);
    shown = -1;
    draw(last);
  });
}

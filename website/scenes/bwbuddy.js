// BW Buddy: Loopy buys a chocolate-moulding machine and the quiz asks what kind of good that is.
// "Investitionsgut" is tapped and right, +3 XP fly to her level card, 57 becomes 60, and at exactly
// 60 XP her market stall becomes her own shop (the app's real level 2). Pure function of t, cqw constants.
import { timeline, spring, range, lerp, ease, h } from './kit.js';

const PERIOD = 10, REST_AT = 6.4;
const IN = 0.55, TOUCH = [1.25, 1.6], PRESS = 2, ANSWER = 2.14, YES = 2.24, CHIP = 2.7, FLY = [2.95, 3.7];
const TICK = [3.62, 4.12], LEVEL = 4.3, RESET = [4.85, 5.35], OUT = [9.4, 9.92];
const PILL = [48.8, 53], XP_AT = [70.4, 61.5], TAP = [30, 53]; // cqw, mirrors the CSS

// Loopy's Candy Store, levels 0 and 1: the app's own art (src/components/ShopScene.jsx) in assets/bwbuddy/.
const ART = (n) => new URL(`./assets/bwbuddy/${n}.svg`, import.meta.url).href;
const VB = 'viewBox="100 26 200 200"';
const GLITTER = [[128, 150, 0], [282, 120, 0.6], [160, 82, 1.2]];
const glint = ([x, y]) => `<g class="bw-gl"><path d="M${x} ${y - 3.5}Q${x + 0.63} ${y - 0.63} ${x + 3.5} ${y}Q${x + 0.63} ${y + 0.63} ${x} ${y + 3.5}Q${x - 0.63} ${y + 0.63} ${x - 3.5} ${y}Q${x - 0.63} ${y - 0.63} ${x} ${y - 3.5}Z"/></g>`;

const OPTIONS = ['Konsumgut', 'Investitionsgut', 'Freies Gut', 'Dienstleistung'];
const build = () => h(`
  <div class="bw-app" aria-hidden="true" data-no-i18n lang="de">
    <div class="bw-quiz">
      <div class="bw-top"><span>Grundlagen des Wirtschaftens</span><span class="bw-count">Frage 3 / 11</span></div>
      <div class="bw-track"><i class="bw-fill"></i></div>
      <div class="bw-q"><p>Loopy kauft für Loopys Candy Store eine neue Schokoladen-Gieß&shy;maschine. Um welche Art von Gut handelt es sich?</p></div>
      ${OPTIONS.map((o, i) => `<div class="bw-opt" style="--i:${i}">${i === 1 ? '<i class="bw-ok"></i>' : ''}<b>${'ABCD'[i]}${i === 1 ? '<i>B</i>' : ''}</b><span>${o}</span>${i === 1 ? '<em>Richtig!</em>' : ''}</div>`).join('')}
    </div>
    <div class="bw-side">
      <span class="bw-up">Level up!</span>
      <div class="bw-shop"><svg ${VB}><ellipse cx="200" cy="214" rx="92" ry="9" fill="#1D3F86" opacity=".12"/></svg>
        <img class="bw-stall" src="${ART('stall')}" alt=""><img class="bw-store" src="${ART('shop')}" alt="">
        <svg class="bw-glit" ${VB} fill="#FFD166">${GLITTER.map(glint).join('')}</svg></div>
      <div class="bw-card">
        <div class="bw-name"><span>Marktstand</span><span>Eigener Laden</span></div>
        <div class="bw-bar"><i></i></div>
        <div class="bw-row"><span class="bw-xp">57 XP</span><span class="bw-lv"><span>Level 1</span><span>Level 2</span></span></div>
      </div>
    </div>
    <span class="bw-chip">+3 XP</span><i class="bw-touch"></i>
  </div>`);

const LABEL = 'BW Buddy: a business studies question answered right earns 3 XP, and Loopy’s market stall grows into her own shop';
if (window.I18N) I18N.add({ [LABEL]: 'BW Buddy: Eine BW-Frage wird richtig beantwortet, bringt 3 XP, und aus Loopys Marktstand wird ein eigener Laden' });

export function mount(el) {
  el.classList.add('sc-bwbuddy');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', LABEL);
  const root = build();
  el.append(root);
  if (window.I18N) { I18N.apply(el); document.addEventListener('langchange', () => I18N.apply(el)); }

  const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
  const quiz = $('.bw-quiz'), side = $('.bw-side'), fill = $('.bw-fill'), opt = $$('.bw-opt')[1];
  const ok = $('.bw-ok'), okB = $('.bw-opt b i'), yes = $('.bw-opt em'), touch = $('.bw-touch'), chip = $('.bw-chip');
  const stall = $('.bw-stall'), store = $('.bw-store'), glitter = $$('.bw-gl');
  const up = $('.bw-up'), bar = $('.bw-bar'), barFill = $('.bw-bar i'), xp = $('.bw-xp');
  const [name0, name1] = $$('.bw-name span'), [lv0, lv1] = $$('.bw-lv span');

  const memo = new WeakMap();   // write a style only when it changes
  const put = (node, prop, v) => {
    let m = memo.get(node);
    if (!m) memo.set(node, (m = {}));
    if (m[prop] !== v) { m[prop] = v; node.style[prop] = v; }
  };
  const f = (n, d = 3) => n.toFixed(d);
  const y3 = (v) => `translate3d(0, ${f(v)}cqw, 0)`;
  const pct = (p) => `translate3d(${f((p - 1) * 100, 2)}%, 0, 0)`;
  let shownXp = 57;

  function draw(t) {
    const out = ease.inOut(range(t, OUT[0], OUT[1]));

    // panels rise in, and leave at the seam
    for (const [node, d] of [[quiz, 0], [side, 0.12]]) {
      const p = ease.out(range(t, d, d + IN));
      put(node, 'opacity', f(Math.min(p, 1 - out)));
      put(node, 'transform', y3((1 - p) * 2.2 - out * 1.6));
    }

    // the finger arrives over B, presses (the app's whileTap .98), lifts off
    const tin = ease.out(range(t, TOUCH[0], TOUCH[1]));
    const press = range(t, PRESS, PRESS + 0.1) - range(t, ANSWER, ANSWER + 0.12);
    const tout = range(t, ANSWER + 0.12, ANSWER + 0.42);
    put(touch, 'opacity', f(tin * (1 - tout) * 0.9));
    put(touch, 'transform', `translate3d(${f(lerp(TAP[0] + 7, TAP[0], tin))}cqw, ${f(lerp(TAP[1] + 5, TAP[1], tin))}cqw, 0) translate(-50%, -50%) scale(${f(lerp(1.35, 1, tin) - press * 0.18 + tout * 0.25)})`);
    const settle = range(t, ANSWER, ANSWER + 0.6);
    put(opt, 'transform', `scale(${f(1 - press * 0.02 + (spring(settle, 0.5, 10) - settle) * 0.016, 4)})`);
    const green = range(t, ANSWER, ANSWER + 0.16);
    put(ok, 'opacity', f(green));
    put(okB, 'opacity', f(green));
    put(fill, 'transform', pct((2 + ease.out(range(t, ANSWER, ANSWER + 0.5))) / 11));

    // "Richtig!"
    put(yes, 'opacity', f(range(t, YES, YES + 0.12)));
    put(yes, 'transform', `scale(${f(0.55 + 0.45 * spring(range(t, YES, YES + 0.7), 0.5, 11))})`);

    // +3 XP pops out of the pill, arcs over to the level card and lands in the count
    const pop = spring(range(t, CHIP, CHIP + 0.5), 0.55, 10);
    const fly = ease.inOut(range(t, FLY[0], FLY[1]));
    const cx = lerp(PILL[0], XP_AT[0], fly);
    const cy = lerp(PILL[1] - 4.4 * pop, XP_AT[1], fly) - Math.sin(Math.PI * fly) * 9;
    put(chip, 'opacity', f(t >= CHIP ? range(t, CHIP, CHIP + 0.1) * (1 - range(t, FLY[1] - 0.12, FLY[1] + 0.05)) : 0));
    put(chip, 'transform', `translate3d(${f(cx)}cqw, ${f(cy)}cqw, 0) translate(-50%, -50%) scale(${f((0.4 + 0.6 * pop) * (1 - 0.35 * fly))})`);

    // the count ticks, the bar fills its last 5 %, then level 2 starts empty (60 of 60–200 XP)
    const tick = ease.out(range(t, TICK[0], TICK[1]));
    const n = Math.round(57 + 3 * tick);
    if (n !== shownXp) { shownXp = n; xp.textContent = `${n} XP`; }
    const bump = Math.sin(Math.PI * range(t, TICK[0], TICK[0] + 0.3)) + 0.6 * Math.sin(Math.PI * range(t, LEVEL, LEVEL + 0.3));
    put(xp, 'transform', `scale(${f(1 + 0.12 * bump)})`);
    put(barFill, 'transform', pct(lerp(57 / 60, 1, tick) * (1 - ease.inOut(range(t, RESET[0], RESET[1])))));
    put(bar, 'transform', `scaleY(${f(1 + 0.6 * Math.sin(Math.PI * range(t, TICK[1] - 0.05, LEVEL + 0.2)))})`);

    // level up: the stall packs away, the shop springs up (the app's own pop: scale .6 → 1)
    const gone = range(t, LEVEL - 0.06, LEVEL + 0.14);
    put(stall, 'opacity', f(1 - gone));
    put(stall, 'transform', `scale(${f(1 - 0.25 * ease.in(gone))})`);
    const s = spring(range(t, LEVEL, LEVEL + 0.75), 0.5, 10);
    put(store, 'opacity', f(range(t, LEVEL, LEVEL + 0.12)));
    put(store, 'transform', `${y3((1 - s) * 1.9)} scale(${f(0.6 + 0.4 * s)})`);
    glitter.forEach((g, i) => {
      const ph = (((t - LEVEL - GLITTER[i][2]) / 2.8) % 1 + 1) % 1;
      const w = t < LEVEL ? 0 : 0.5 - 0.5 * Math.cos(2 * Math.PI * ph);
      put(g, 'opacity', f((0.4 + 0.6 * w) * range(t, LEVEL + 0.2, LEVEL + 0.5)));
      put(g, 'transform', `translate(0px, ${f(-5 * w, 2)}px)`);
    });
    for (const [a, b, at] of [[name0, name1, LEVEL + 0.05], [lv0, lv1, LEVEL + 0.12]]) {
      const p = ease.out(range(t, at, at + 0.35));
      put(a, 'opacity', f(1 - p)); put(a, 'transform', y3(-p * 1.4));
      put(b, 'opacity', f(p)); put(b, 'transform', y3((1 - p) * 1.4));
    }
    const u = spring(range(t, LEVEL + 0.15, LEVEL + 0.95), 0.48, 11);
    put(up, 'opacity', f(range(t, LEVEL + 0.15, LEVEL + 0.3)));
    put(up, 'transform', `translate3d(-50%, ${f((1 - u) * 2.4)}cqw, 0) scale(${f(0.5 + 0.5 * u)})`);
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST_AT });
  el.addEventListener('click', () => tl.restart());
  return tl;
}

// Weekend Ink: Friday a sun is drawn and printed, one is pressed on and peeled; Saturday a crowd wears it; Monday gone.
import { timeline, range, ease, spring, lerp, clamp, h } from './kit.js';

const LABEL = 'Weekend Ink: a tattoo designed on Friday, pressed on and peeled, worn at a festival on Saturday, gone by Monday.';
I18N.add({
  Friday: 'Freitag',
  Saturday: 'Samstag',
  Monday: 'Montag',
  'Gone by Monday.': 'Am Montag wieder weg.',
  [LABEL]: 'Weekend Ink: ein Tattoo, am Freitag entworfen, aufgedrückt und abgezogen, am Samstag auf dem Festival getragen, am Montag wieder weg.',
});

// clock (s)
const PERIOD = 12, REST = 7.75, OUT = 11.2;
const FACE = 0.4, RAYS = 0.68, SMILE = 1.15, GLASSES = 1.45, SHRINK = 2.3, COPIES = 2.75;
const LIFT = 3.25, TRAVEL = 3.6, FLIP = 3.75, ARM = 3.45, LAND = 4.45, ON = 4.9;
const CURL = 5.05, PEEL = 5.4, OFF = 6.3, SAT = 6.6, SWAY = 7, SNAP = 7.95, FLASH = 8.2, MON = 9, FADE = 9.5, TAG = 10;
// cqw: big sun → cell 0 → arm; fold; clip
const HERO = [-20, -10, 14.22 / 30], FLY = [20, 28, 0.8], F0 = 14.6, F1 = -14.8, L = 40, CURLK = 0.68;

const sun = (c = '') => `<div class="wi-sun${c}">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<i class="wi-r" style="--a:${i * 45}deg;--k:${i % 2 ? 0.72 : 1}"></i>`).join('')}<i class="wi-face"><i class="wi-ck"></i><i class="wi-ck r"></i><i class="wi-sm"></i></i><i class="wi-gl"><i></i><i></i></i></div>`;
const arm = (c, spot = '') => `<div class="wi-arm ${c}"><i class="wi-fa"></i><i class="wi-fist"><i class="wi-kn"></i><i class="wi-th"></i></i><i class="wi-band"></i><div class="wi-spot"><div class="wi-tat wi-pad">${sun()}</div>${spot}</div></div>`;
const clip = (pp) => `<div class="wi-clip"><div class="wi-in"><div class="wi-pp ${pp}</div></div></div>`;

function bunting() {
  const y = (x) => 1 + 0.28 * x * (1 - x / 100), c = ['#2B3652', '#8DB1E4', '#FFD15C', '#FFFFFF', '#F2A28E'], n = (v) => v.toFixed(2);
  let s = '';
  for (let i = 2; i < 11; i++) {
    const x = 4.6 + i * 9.08, a = x - 3.3, b = x + 3.3;
    s += `<path d="M${n(a)} ${n(y(a))}L${n(b)} ${n(y(b))}L${n(x)} ${n(y(x) + 7.6)}Z" fill="${c[i % 5]}"/>`;
  }
  return `<svg viewBox="0 0 100 18" preserveAspectRatio="none"><path d="M0 1Q50 15 100 1" fill="none" stroke="#2B3652" stroke-width=".35"/>${s}</svg>`;
}

const MARKUP = `<div class="wi-all" aria-hidden="true">
  <div class="wi-bunt">${bunting()}</div>
  ${arm('l')}${arm('r')}
  ${arm('m', `<div class="wi-pw wi-mv"><div class="wi-pf">${clip(`wi-pad">${sun(' wi-ghost')}`)}${clip('wi-flap">')}</div></div><svg class="wi-vf" viewBox="0 0 36 36"><path d="M1 8V1h7M28 1h7v7M35 28v7h-7M8 35H1v-7"/></svg>`)}
  <div class="wi-sheet">${[0, 1, 2, 3, 4, 5].map((i) => `<div class="wi-cell wi-pad" style="left:${4 + (i % 3) * 20}cqw;top:${i < 3 ? 4 : 24}cqw"><i class="wi-cut"></i>${i ? sun() : ''}</div>`).join('')}${sun(' wi-hero')}</div>
  <div class="wi-fly"><div class="wi-pp wi-pad">${sun()}</div><div class="wi-pp wi-pad back">${sun(' wi-ghost')}</div></div>
  <div class="wi-day"><span>Friday</span><span>Saturday</span><span>Monday</span></div>
  <div class="wi-tag"><div class="wi-tagp">Gone by Monday.</div></div>
  <i class="wi-flash"></i>
</div>`;

const { sin, cos, PI } = Math, f3 = (n) => Math.round(n * 1000) / 1000;
function put(el, tr, op) {
  if (tr != null && el._t !== tr) el.style.transform = el._t = tr;
  if (op == null) return;
  op = f3(clamp(op));
  if (el._o === op) return;
  el.style.opacity = el._o = op;
  el.style.visibility = op ? '' : 'hidden';
}
const tr = (x, y, s = 1, r = 0) => `translate3d(${f3(x)}cqw,${f3(y)}cqw,0)` + (r ? ` rotate(${f3(r)}deg)` : '') + (s === 1 ? '' : ` scale(${f3(s)})`);
const sc = (s) => `scale(${f3(s)})`;
const tx = (x) => `translate3d(${f3(x)}cqw,0,0)`;

export function mount(el) {
  el.classList.add('sc-weekendink');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', LABEL);
  const root = h(MARKUP);
  el.append(root);
  I18N.apply(el);

  const $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => [...r.querySelectorAll(s)];
  const bunt = $('.wi-bunt'), [armL, armR, armM] = $$('.wi-arm'), sheet = $('.wi-sheet'), cuts = $$('.wi-cut');
  const copies = $$('.wi-cell > .wi-sun'), hero = $('.wi-hero'), rays = $$('.wi-r', hero), face = $('.wi-face', hero);
  const smile = [$('.wi-sm', hero), ...$$('.wi-ck', hero)], glasses = $('.wi-gl', hero);
  const fly = $('.wi-fly'), [front, back] = $$('.wi-fly > .wi-pp'), bands = $$('.wi-band');
  const tat = $('.wi-tat', armM), pw = $('.wi-pw'), [clipA, clipB] = $$('.wi-clip'), [inA, inB] = $$('.wi-in');
  const vf = $('.wi-vf'), day = $('.wi-day'), days = $$('span', day), tag = $('.wi-tag'), flash = $('.wi-flash');

  function draw(t) {
    const R = (a, d) => range(t, a, a + d), pop = (u, z = 0.7, w = 9) => spring(u, z, w);
    put(root, null, 1 - ease.inOut(R(OUT, 0.6)));

    put(day, sc(lerp(0.9, 1, pop(R(0.1, 0.5)))), R(0.1, 0.2));
    const d1 = ease.inOut(R(SAT, 0.45)), d2 = ease.inOut(R(MON, 0.45));
    [[-d1, 1 - d1], [1 - d1 - d2, d1 - d2], [1 - d2, d2]].forEach(([y, o], i) => put(days[i], tr(0, 6 * y), o));

    // Friday
    const sIn = pop(R(0.05, 0.7), 0.75, 8), sOut = ease.in(R(3.35, 0.6));
    put(sheet, tr(-92 * sOut, (1 - sIn) * 3 + 10 * sOut, lerp(0.94, 1, sIn), -12 * sOut), sOut < 1 ? R(0.05, 0.2) : 0);
    put(face, sc(pop(R(FACE, 0.5), 0.55, 10)), R(FACE, 0.08));
    rays.forEach((r, i) => {
      const a = RAYS + i * 0.05, s = pop(R(a, 0.5), 0.5, 10);
      put(r, `rotate(${i * 45}deg) translateY(${f3(-lerp(0.27, 0.38, s))}em) scale(${f3(s * 0.6 + 0.4)},${f3(s * (i % 2 ? 0.72 : 1))})`, R(a, 0.06));
    });
    const sm = pop(R(SMILE, 0.45), 0.55, 10);
    smile.forEach((s, i) => put(s, i ? sc(sm) : `scaleX(${f3(sm)})`, sm > 0 ? 1 : 0));
    const g = R(GLASSES, 0.6), gs = pop(g, 0.42, 11);
    put(glasses, `translate3d(0,${f3(-(1 - gs) * 0.55)}em,0) rotate(${f3((1 - gs) * -14)}deg)`, g * 6);
    const k = ease.inOut(R(SHRINK, 0.55));
    put(hero, tr(HERO[0] * k, HERO[1] * k, lerp(1, HERO[2], k)), t < LIFT ? 1 : 0);
    cuts.forEach((c, i) => put(c, null, R(2.65 + i * 0.05, 0.2)));
    copies.forEach((c, i) => { const u = R(COPIES + i * 0.08, 0.4); put(c, sc(lerp(1.3, 1, pop(u, 0.6, 10))), u * 5); });

    const l = pop(R(LIFT, 0.4)), v = ease.inOut(R(TRAVEL, 0.85));
    const fs = lerp(FLY[2], 1.06, l) + 0.1 * sin(PI * v) - 0.06 * pop(R(LAND, 0.45), 0.45, 12);
    const flip = cos(PI * ease.inOut(R(FLIP, 0.5)));
    put(fly, tr(FLY[0] * v, -1.5 * l + FLY[1] * v - 8 * sin(PI * v), 1, -7 * l * (1 - v)) + ` scale(${f3(fs * flip)},${f3(fs)})`, t >= LIFT && t < ON ? 1 : 0);
    put(front, null, flip > 0 ? 1 : 0);
    put(back, null, flip > 0 ? 0 : 1);

    // peel: both halves clip at the fold, the flap is mirrored and foreshortened
    const f = F0 - 3.4 * pop(R(CURL, 0.4), 0.5, 10) - (F0 - F1 - 3.4) * lerp(R(PEEL, 0.95), ease.inOut(R(PEEL, 0.95)), 0.75);
    [clipA, clipB].forEach((c) => put(c, tx(f - L), null));
    put(inA, tx(L - f), null);
    put(inB, tx(f * CURLK + L) + ` scaleX(${-CURLK})`, null);
    const o = R(OFF, 0.5);
    put(pw, tr(-10 * ease.out(o), -22 * ease.in(o) - 2 * sin(PI * o), lerp(1, 0.8, o), 30 * ease.inOut(o)), t >= ON && o < 1 ? 1 - ease.in(o) : 0);
    put(tat, sc(1 - 0.03 * R(FADE, 0.9)), t < ON ? 0 : 1 - ease.inOut(R(FADE, 0.9)));

    // Saturday, Monday
    const ph = 2 * PI * (t - SWAY) / 1.5, env = R(SWAY, 0.5) * (1 - R(MON - 0.2, 0.4)), bob = (p) => -0.6 * env * (1 - cos(2 * ph + p));
    put(armM, tr(-13 * ease.inOut(R(MON + 0.1, 0.8)), (1 - pop(R(ARM, 0.9), 0.75, 8)) * 72 + bob(0), 1, 3.5 * env * sin(ph)), null);
    [[armL, -1, 6.7], [armR, 1, 6.85]].forEach(([a, s, at]) => {
      const up = pop(R(at, 0.7), 0.68, 9), down = ease.in(R(MON, 0.55));
      put(a, tr(s * 32, (1 - up + down) * 60 + bob(s), 1, -3.5 * env * sin(ph + s * 0.8)) + ' scale(.78)', up > 0 && down < 1 ? 1 : 0);
    });
    bands.forEach((b, i) => {
      const a = 6.8 + i * 0.12, off = ease.in(R(MON, 0.5));
      put(b, tr(0, (1 - pop(R(a, 0.6), 0.6, 9) + off) * 34), R(a, 0.15) - off * 1.2);
    });
    const b = R(SAT + 0.05, 0.7), bs = pop(b, 0.45, 9), bOut = ease.in(R(MON, 0.45));
    put(bunt, tr(0, -(1 - bs + bOut) * 20, 1, (1 - bs) * 2), b > 0 && bOut < 1 ? 1 : 0);
    const sn = R(SNAP, 0.3);
    put(vf, sc(lerp(1.35, 1, ease.out(sn))), sn * 3 * (1 - R(8.6, 0.25)));
    put(flash, null, t >= FLASH ? 0.6 * (1 - ease.out(R(FLASH, 0.45))) : 0);
    const tg = R(TAG, 0.55), ts = pop(tg, 0.55, 10);
    put(tag, tr(0, 0, lerp(1.3, 1, ts), lerp(-6, 3, ts)), tg * 5);
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST });
  el.addEventListener('click', () => tl.restart());
  document.addEventListener('langchange', () => I18N.apply(el));
  return tl;
}

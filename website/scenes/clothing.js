// Clothing: a top is stitched, photographed, listed, sold, packed and sent.
// Geometry in clothing.css (cqw); draw(t) writes only transform and opacity.
import { timeline, range, ease, spring, lerp, clamp, reduced, h } from './kit.js';

const LABEL = 'Clothing: a top is sewn, photographed, listed as one of a kind, sold and sent off with a thank-you tag';
I18N.add({
  'One of a kind': 'Einzelstück',
  'Gingham top': 'Karo-Top',
  'Sewn by me · Cotton': 'Selbst genäht · Baumwolle',
  'Listed': 'Eingestellt',
  'Sold': 'Verkauft',
  'Thank you!': 'Danke!',
  [LABEL]: 'Kleidung: Ein Top wird genäht, fotografiert, als Einzelstück eingestellt, verkauft und mit Dankeskärtchen verschickt',
});

// the clock, s
const PERIOD = 12, REST = 10.45, IN = 0.45, OUT = [11.45, 11.85];
const POCKET = 0.3, NIN = [0.85, 1.25], ST0 = 1.3, STEP = 0.1, NOUT = [2.65, 3];
const VF = 3, FLASH = 3.42, SETTLE = 3.48, TOCARD = [4.25, 4.95], CARD = [4.45, 4.95];
const TYPE = [[5.15, 5.75], [5.85, 6.6]], BADGE = 6.62, LISTED = 6.8, SOLD = 7.35;
const SHIFT = [7.85, 8.6], BOXIN = 8, DROP = 8.75, LID = 9.35, TAPE = 9.62, STICK = 9.82, TAG = 9.9;
const GO = [10.6, 11.15];

const GX = 7, U = 0.46;                 // garment svg left in the shot, cqw per unit
const SLOT_DY = -9.12, SLOT_S = 0.66;   // shot → card photo slot

// The pocket's U seam: per side [from, to, stitches].
const STITCHES = [];
for (const [[ax, ay], [bx, by], n] of [[[56.6, 44], [56.6, 52.4], 4], [[56.6, 52.4], [67.4, 52.4], 5], [[67.4, 52.4], [67.4, 44], 4]]) {
  for (let k = 0; k < n; k++) {
    const s = (k + 0.19) / n, e = s + 0.62 / n;
    STITCHES.push([ax + (bx - ax) * s, ay + (by - ay) * s, ax + (bx - ax) * e, ay + (by - ay) * e]);
  }
}
const N = STITCHES.length;
const at = (i) => ST0 + i * STEP;
const cq = (i) => [GX + STITCHES[i][2] * U, STITCHES[i][3] * U];   // stitch end, shot cqw

let uid = 0;
const markup = (g, b) => `
<div class="cl-root" aria-hidden="true">
<div class="cl-list">
<div class="cl-card"></div>
<div class="cl-shot">
<i class="cl-bd"></i>
<svg class="cl-tee" viewBox="0 0 100 100"><defs><pattern id="${g}" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#fff"/><rect width="3" height="6" class="cl-ck"/><rect width="6" height="3" class="cl-ck"/></pattern><pattern id="${b}" href="#${g}" patternTransform="rotate(45)"/></defs>
<path class="cl-body" fill="url(#${g})" d="M38 9Q50 21 62 9L79 13Q83 14 85 18L93 31L80 38L76 32V90Q76 92 74 92H26Q24 92 24 90V32L20 38L7 31L15 18Q17 14 21 13Z"/>
<path class="cl-seam" d="M40.5 11.6Q50 21.8 59.5 11.6M27 87.4H73M9.4 29.3L21.4 35.8M90.6 29.3L78.6 35.8"/>
<g class="cl-pk"><path class="cl-body" fill="url(#${b})" d="M55 41H69V52Q69 54 67 54H57Q55 54 55 52Z"/><path class="cl-seam" d="M56.4 42.9H67.6"/>
${STITCHES.map((s) => `<line class="cl-st" x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${s[2].toFixed(1)}" y2="${s[3].toFixed(1)}"/>`).join('')}</g></svg>
<svg class="cl-ndl" viewBox="0 0 10 60"><path class="cl-tail" d="M5 8C8 4 12 3 15-2"/><path class="cl-pin" fill-rule="evenodd" d="M5 60L6.1 14Q6.1 2 5 2Q3.9 2 3.9 14ZM4.6 5.5h.8v5h-.8Z"/></svg>
<svg class="cl-vf" viewBox="0 0 48 41" preserveAspectRatio="none"><path d="M1 6V3Q1 1 3 1H6M42 1H45Q47 1 47 3V6M47 35V38Q47 40 45 40H42M6 40H3Q1 40 1 38V35"/></svg>
</div>
<div class="cl-txt cl-t1"><span>Gingham top</span><i class="cl-cv"><i></i></i></div>
<div class="cl-txt cl-t2"><span>Sewn by me · Cotton</span><i class="cl-cv"><i></i></i></div>
<span class="cl-chip">One of a kind</span>
<span class="cl-pill cl-listed"><i class="cl-dot"></i><span>Listed</span></span>
<span class="cl-pill cl-sold"><i><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i><span>Sold</span></span>
</div>
<div class="cl-box">
<i class="cl-flr"></i><i class="cl-flap"></i><i class="cl-in"></i><i class="cl-fold"></i><i class="cl-front"></i><i class="cl-lid"></i><i class="cl-tape"></i>
<i class="cl-label"></i>
<span class="cl-tag"><i></i><span>Thank you!</span></span>
</div>
<i class="cl-flash"></i>
</div>`;

export function mount(el) {
  el.classList.add('sc-clothing');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', LABEL);
  uid++;
  const root = h(markup(`cl-g${uid}`, `cl-b${uid}`));
  el.append(root);
  I18N.apply(el);

  const [list, card, shot, bd, pocket, ndl, vf, chip, listed, sold, box, flap, fold, lid, tape, label, tag, flash] =
    'list card shot bd pk ndl vf chip listed sold box flap fold lid tape label tag flash'.split(' ').map((c) => root.querySelector('.cl-' + c));
  const stitches = [...root.querySelectorAll('.cl-st')];
  const lines = [...root.querySelectorAll('.cl-txt')].map((n) => ({ n, text: n.firstElementChild, cover: n.lastElementChild, w: 0 }));

  const memo = new Map();
  const put = (n, p, v) => { const m = memo.get(n) || memo.set(n, {}).get(n); if (m[p] !== v) n.style[p] = m[p] = v; };
  const f = (n, d = 3) => n.toFixed(d);
  const set = (n, o, t) => { put(n, 'opacity', f(clamp(o))); if (t) put(n, 'transform', t); };
  const sc = (s) => `scale(${f(s, 4)})`, T = (x, y) => `translate3d(${f(x)}cqw,${f(y)}cqw,0)`, deg = (r) => `rotate(${f(r, 2)}deg)`;
  const vis = (n, on) => put(n, 'opacity', on ? '1' : '0'), bump = (t, a, b) => Math.sin(Math.PI * range(t, a, b));
  const pop = (n, t, t0, from = 0.6) => set(n, range(t, t0, t0 + 0.12), sc(lerp(from, 1, spring(range(t, t0, t0 + 0.7), 0.58, 10))));

  let last = 0, measured = false;
  const measure = () => {
    const w = el.offsetWidth;
    if (!w) return false;
    for (const l of lines) { l.w = l.text.offsetWidth / w * 100 + 0.3; l.n.style.width = `${f(l.w + 0.5)}cqw`; }
    return true;
  };
  const redo = () => { measured = measure(); draw(last); };
  document.addEventListener('langchange', () => { I18N.apply(el); redo(); });
  if (document.fonts) document.fonts.ready.then(redo);

  function draw(t) {
    last = t;
    if (!measured) measured = measure();
    put(root, 'opacity', f(ease.out(range(t, 0, IN)) * (1 - ease.inOut(range(t, OUT[0], OUT[1])))));

    const pk = spring(range(t, POCKET, POCKET + 0.75), 0.6, 10);
    set(pocket, range(t, POCKET, POCKET + 0.1), `translate(0px,${f((1 - pk) * -7, 2)}px) ${deg((1 - pk) * -9)}`);

    // The needle dips at every stitch.
    let n = 0;
    while (n < N && t >= at(n)) n++;
    stitches.forEach((s, i) => vis(s, i < n));
    let x, y, lift;
    if (!n) {
      const u = 1 - ease.out(range(t, NIN[0], NIN[1]));
      [x, y] = cq(0); x += u * 14; y -= u * 16;
      lift = bump(t, NIN[1] - 0.05, at(0)) * 1.2;
    } else if (n < N) {
      const u = range(t, at(n - 1), at(n)), e = ease.inOut(u), a = cq(n - 1), b = cq(n);
      x = lerp(a[0], b[0], e); y = lerp(a[1], b[1], e);
      lift = Math.sin(Math.PI * u) * 1.4;
    } else {
      const u = ease.in(range(t, NOUT[0], NOUT[1]));
      [x, y] = cq(N - 1); x += u * 16; y -= u * 18;
      lift = bump(t, at(N - 1), NOUT[0]) * 1.2;
    }
    y -= lift;
    const on = range(t, NIN[0], NIN[0] + 0.15) * (1 - range(t, NOUT[1] - 0.15, NOUT[1]));
    set(ndl, on, `${T(x, y)} rotate(28deg)`);

    // Viewfinder, flash, the photo lands and flies into the listing.
    set(vf, t < FLASH + 0.06 ? range(t, VF, VF + 0.12) : 0, sc(lerp(1.14, 1, ease.out(range(t, VF, VF + 0.3)))));
    put(flash, 'opacity', f(Math.max(0, range(t, FLASH, FLASH + 0.06) - ease.out(range(t, FLASH + 0.06, FLASH + 0.5))) * 0.92));
    vis(bd, t >= FLASH + 0.05);
    const land = spring(range(t, SETTLE, SETTLE + 0.8), 0.6, 10), go = ease.inOut(range(t, TOCARD[0], TOCARD[1]));
    put(shot, 'transform', `${T(0, go * SLOT_DY)} ${sc(lerp(t < SETTLE ? 1 : lerp(1.05, 0.93, land), SLOT_S, go))} ${deg(-2.4 * land * (1 - go))}`);

    // Listing: typed lines, chip, Listed → Sold.
    const cu = ease.out(range(t, CARD[0], CARD[1]));
    set(card, cu, sc(lerp(0.94, 1, cu)));
    lines.forEach((l, i) => {
      const [a, b] = TYPE[i], u = range(t, a, b);
      set(l.cover, u < 1 ? 1 : 0, T(u * l.w, 0));
      vis(l.cover.firstElementChild, t >= a - 0.1 && t < b + 0.05 + i * 0.2);
      vis(l.n, t >= a - 0.1);
    });
    pop(chip, t, BADGE);
    const flip = (p, a, b) => set(p, t >= a && t < b ? 1 : 0, sc(t < a ? 0.6 : lerp(0.6, 1, spring(range(t, a, a + 0.7), 0.5, 11))));
    flip(listed, LISTED, SOLD);
    flip(sold, SOLD, PERIOD + 1);

    // Listing steps aside; box rises, top drops in, lid, tape, label, tag; box hops off.
    const aside = ease.inOut(range(t, SHIFT[0], SHIFT[1]));
    put(list, 'transform', `${T(aside * -20, 0)} ${sc(1 - 0.1 * aside)}`);
    const rise = spring(range(t, BOXIN, BOXIN + 0.8), 0.68, 10);
    const squash = bump(t, LID + 0.2, LID + 0.45) * 0.035;
    const hop = bump(t, GO[0], GO[0] + 0.3);
    set(box, range(t, BOXIN, BOXIN + 0.12), `${T(ease.in(range(t, GO[0] + 0.12, GO[1])) * 48, (1 - rise) * 16 - hop * 2.2)} ${deg(-hop * 3)} scale(${f(1 + squash, 4)},${f(1 - squash, 4)})`);
    const dr = spring(range(t, DROP, DROP + 0.7), 0.62, 11);
    set(fold, range(t, DROP, DROP + 0.08), `${T(0, (1 - dr) * -26)} ${deg((1 - dr) * 7)}`);
    set(flap, t < LID + 0.2 ? 1 : 0, `scaleY(${f(1 - ease.in(range(t, LID, LID + 0.2)), 4)})`);
    vis(lid, t >= LID + 0.2);
    set(tape, t >= TAPE ? 1 : 0, `scaleY(${f(ease.out(range(t, TAPE, TAPE + 0.26)), 4)})`);
    pop(label, t, STICK, 0.5);
    const tu = range(t, TAG, TAG + 1.4);
    set(tag, range(t, TAG, TAG + 0.1), deg(t < TAG ? 0 : 16 * Math.exp(-4.2 * tu) * Math.cos(tu * 13) - hop * 10));
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST });
  if (!reduced && !el.closest('[data-still]')) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => tl.restart());
  }
}

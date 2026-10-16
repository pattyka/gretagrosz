// Blank: an empty post, the coral mascot peeks; the app's "Need a spark?" card shuffles real ideas; the bread
// is started, the mascot pops up in the picture with the loaf, likes land. Geometry in blank.css (cqw);
// draw(t) is pure and writes only transform, opacity and the like count.
import { timeline, range, ease, spring, lerp, clamp, h } from './kit.js';

const LABEL = 'Blank: a starter idea becomes a shared post that collects likes';
I18N.add({
  'Need a spark?': 'Keine Idee?',
  'Music': 'Musik',
  'Photography': 'Fotografie',
  'Cooking': 'Kochen',
  'Learn three chords on the ukulele': 'Drei Akkorde auf der Ukulele lernen',
  'Take one photo every day for 30 days': '30 Tage lang jeden Tag ein Foto',
  'Bake your first loaf of bread': 'Das erste eigene Brot backen',
  'Needs some gear': 'Braucht etwas Ausrüstung',
  'Costs nothing': 'Kostet nichts',
  'Under €20': 'Unter 20 €',
  'Nothing to buy': 'Nichts zu kaufen',
  'Start this': 'Loslegen',
  'Another idea': 'Andere Idee',
  'First attempt': 'Erster Versuch',
  'My first loaf': 'Mein erstes Brot',
  'You': 'Du',
  [LABEL]: 'Blank: eine Idee wird zu einem geteilten Beitrag, der Likes sammelt',
});

const A = new URL('./assets/blank/', import.meta.url).href;

// Real starter ideas and cost labels from the app (hobby-app/src/data.js).
const IDEAS = [
  ['Music', 'Learn three chords on the ukulele', ['Needs some gear'], 'guitar'],
  ['Photography', 'Take one photo every day for 30 days', ['Costs nothing', 'Nothing to buy'], 'camera'],
  ['Cooking', 'Bake your first loaf of bread', ['Under €20', 'Nothing to buy'], 'loaf'],
];
// The app's demo people (seed.js), in the order their likes land.
const LIKERS = [['ML', '#FCE7F3'], ['AT', '#FFEDD5'], ['SR', '#FEF3C7'], ['JW', '#D1FAE5']];
const LIKES_END = 12;

// ---- the clock, s ----
const PERIOD = 11.6, REST = 10.2;
const IN = [0, 0.45], OUT = [10.9, 11.45];
const PEEK = 0.5, SPARK = 1.25;
const ROLLS = [2.6, 3.8], START = 4.85;   // "Another idea" is tapped 0.3 s before each roll
const FLY = [5.1, 5.55], DUCK = [5.0, 5.35], FILL = [5.4, 5.8], META = [5.9, 6.3];
const LOAF = 5.55, BADGE = 6.3, PILL = 7.15;
const LIKE_AT = [7.2, 7.55, 7.9, 8.25], ROLLUP = [8.5, 9.2];

// ---- geometry, cqw (as in blank.css) ----
const SLOT = 20, TILE = 15;        // reel steps: window + 3 gap, so a settle never shows a neighbour
const SPARK_DY = -20.6;            // spark card centre → cover centre
const LIFT = -6.3;                 // the made post rises to the middle

const ICON = {
  image: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
};
const img = (name, cls = '') => `<img${cls && ` class="${cls}"`} src="${A}${name}.webp" alt="" decoding="async">`;

const MARKUP = `
<div class="bk-root" aria-hidden="true">
<div class="bk-peek">${img('peek')}</div>
<div class="bk-card">
<div class="bk-cover">
<div class="bk-empty"><span class="bk-dot">${ICON.image}</span></div>
<div class="bk-fill"></div>
${img('loaf', 'bk-loaf')}
<span class="bk-badge">First attempt</span>
<span class="bk-pill"><i>${ICON.heart}</i><b>0</b></span>
</div>
<div class="bk-skel"><i></i><i></i><i></i></div>
<div class="bk-meta">
<p class="bk-name">My first loaf</p>
<p class="bk-by"><span class="bk-av bk-me">Y</span><span>You</span></p>
<span class="bk-likers">${LIKERS.map(([n, c]) => `<span class="bk-av bk-liker" style="background:${c}">${n}</span>`).join('')}</span>
</div>
</div>
<div class="bk-spark">
<span class="bk-x">${ICON.x}</span>
<div class="bk-tile"><div class="bk-reel">${IDEAS.map((i) => img(i[3])).join('')}</div></div>
<div class="bk-text">
<div class="bk-slot"><div class="bk-reel">${IDEAS.map(([cat, title, chips]) => `
<div class="bk-idea">
<p class="bk-lab"><span>Need a spark?</span> · <span>${cat}</span></p>
<p class="bk-title">${title}</p>
<p class="bk-chips">${chips.map((c) => `<span${c === 'Nothing to buy' ? ' class="bk-green"' : ''}>${c}</span>`).join('')}</p>
</div>`).join('')}</div></div>
<p class="bk-btns"><span class="bk-btn bk-go"><i></i><span>Start this</span></span><span class="bk-btn bk-next"><i></i><span>Another idea</span></span></p>
</div>
</div>
</div>`;

export function mount(el) {
  el.classList.add('sc-blank');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', LABEL);
  const root = h(MARKUP);
  el.append(root);
  I18N.apply(el);
  document.addEventListener('langchange', () => I18N.apply(el));

  const $ = (s) => root.querySelector(s);
  const [peek, card, empty, fill, loaf, badge, pill, skel, meta, spark, go, next] =
    ['.bk-peek img', '.bk-card', '.bk-empty', '.bk-fill', '.bk-loaf', '.bk-badge', '.bk-pill', '.bk-skel', '.bk-meta', '.bk-spark', '.bk-go', '.bk-next'].map($);
  const [heart, count] = [pill.firstElementChild, pill.lastElementChild];
  const [reelText, reelTile] = [$('.bk-slot .bk-reel'), $('.bk-tile .bk-reel')];
  const likers = [...root.querySelectorAll('.bk-liker')];

  const memo = new Map();   // write a style only when it changes
  const put = (n, p, v) => { const m = memo.get(n) || memo.set(n, {}).get(n); if (m[p] !== v) n.style[p] = m[p] = v; };
  const f = (n, d = 3) => n.toFixed(d);
  const set = (n, o, tr) => { put(n, 'opacity', o); put(n, 'transform', tr); };
  const tap = (t, t0) => Math.sin(Math.PI * range(t, t0, t0 + 0.36));   // 0 → 1 → 0
  const popIn = (n, t, t0) => set(n, f(clamp(range(t, t0, t0 + 0.15))), `scale(${f(lerp(0.6, 1, spring(range(t, t0, t0 + 0.7), 0.6, 10)), 4)})`);
  const press = (b, p) => { put(b.firstElementChild, 'opacity', f(p)); put(b, 'transform', `scale(${f(1 - 0.07 * p, 4)})`); };

  function draw(t) {
    // The picture fades in at the top of the loop and out at the end; the post rises once it is made.
    const vin = ease.out(range(t, IN[0], IN[1]));
    const vout = ease.inOut(range(t, OUT[0], OUT[1]));
    const lift = spring(range(t, FILL[0], FILL[0] + 1), 0.8, 9);
    put(root, 'opacity', f(vin * (1 - vout)));
    put(card, 'transform', `translate3d(0,${f((1 - vin) * 1.5 - vout + lift * LIFT)}cqw,0) scale(${f(lerp(0.97, 1, vin), 4)})`);

    // The mascot peeks over the edge, tilts its head at every new idea, ducks at "Start this".
    const up = spring(range(t, PEEK, PEEK + 0.9), 0.62, 10);
    const duck = ease.in(range(t, DUCK[0], DUCK[1]));
    let tilt = -4 * Math.sin(Math.PI * range(t, PEEK + 0.55, PEEK + 1.2));
    ROLLS.forEach((r, i) => {
      const u = range(t, r - 0.1, r + 0.8);
      tilt += (i % 2 ? -6 : 6) * Math.sin(Math.PI * u) * (1 - u);
    });
    put(peek, 'transform', `translate3d(0,${f((1 - up + duck) * 100, 2)}%,0) rotate(${f(tilt, 2)}deg)`);

    // The spark card rises, shuffles ideas, then flies into the cover.
    const sIn = spring(range(t, SPARK, SPARK + 0.85), 0.7, 10);
    const sFly = ease.inOut(range(t, FLY[0], FLY[1]));
    set(spark, f(clamp(range(t, SPARK, SPARK + 0.3)) * (1 - ease.in(range(t, FLY[0] + 0.15, FLY[1])))), `translate3d(0,${f((1 - sIn) * 10 + sFly * SPARK_DY)}cqw,0) scale(${f(lerp(lerp(0.94, 1, sIn), 0.22, sFly), 4)})`);
    const k = ROLLS.reduce((s, r) => s + spring(range(t, r, r + 0.7), 0.82, 11), 0);
    put(reelText, 'transform', `translate3d(0,${f(-k * SLOT)}cqw,0)`);
    put(reelTile, 'transform', `translate3d(0,${f(-k * TILE)}cqw,0)`);
    press(next, Math.max(...ROLLS.map((r) => tap(t, r - 0.3))));
    press(go, tap(t, START));

    // The cover fills: the mascot is back, holding the loaf, and bobs at every like.
    const fl = ease.out(range(t, FILL[0], FILL[1]));
    put(empty, 'opacity', f(1 - fl));
    put(fill, 'opacity', f(fl));
    const lu = spring(range(t, LOAF, LOAF + 1), 0.6, 10);
    const bob = LIKE_AT.reduce((s, a) => s + Math.sin(Math.PI * range(t, a, a + 0.3)), 0);
    set(loaf, f(clamp(range(t, LOAF, LOAF + 0.12))), `translate3d(0,${f((1 - lu) * 110, 2)}%,0) scale(${f(1 + 0.035 * bob, 4)})`);
    popIn(badge, t, BADGE);
    const m = ease.out(range(t, META[0], META[1]));
    put(skel, 'opacity', f(1 - m));
    set(meta, f(m), `translate3d(0,${f((1 - m) * 0.8)}cqw,0)`);

    // Likes: the pill pops, the demo people land one by one, then the count climbs.
    popIn(pill, t, PILL);
    let n = 0, pop = 0;
    likers.forEach((av, i) => {
      const a = LIKE_AT[i];
      if (t >= a) n = i + 1;
      const s = spring(range(t, a, a + 0.6), 0.55, 11);
      set(av, f(clamp(range(t, a, a + 0.1))), `translate3d(${f((1 - s) * 1.5)}cqw,0,0) scale(${f(lerp(0.4, 1, s), 4)})`);
      pop = Math.max(pop, Math.sin(Math.PI * range(t, a, a + 0.32)));
    });
    if (t >= ROLLUP[0]) n = Math.round(lerp(LIKERS.length, LIKES_END, ease.out(range(t, ROLLUP[0], ROLLUP[1]))));
    put(heart, 'transform', `scale(${f(1 + 0.35 * pop, 4)})`);
    if (count.textContent !== String(n)) count.textContent = n;
  }

  const tl = timeline(el, draw, { period: PERIOD, restAt: REST });
  el.addEventListener('click', () => tl.restart());
}

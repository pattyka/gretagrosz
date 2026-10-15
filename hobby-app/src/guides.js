// Ready-made beginner plans shown under "Inspired? Start your own project like this".
// Each demo post has a plan matching its photo; everything else falls back to its category's plan.
import { PHOTOS } from './photos'

// YouTube search filtered to playlists only
const yt = (title, query) => ({
  kind: 'youtube',
  title,
  note: 'YouTube playlists',
  url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAw%253D%253D`,
})
const site = (title, url, note) => ({ kind: 'site', title, url, note })
const reddit = (sub, note = 'Ask questions, share progress') => ({ kind: 'community', title: `r/${sub}`, url: `https://www.reddit.com/r/${sub}/`, note })

export const GUIDES = {
  knit: {
    title: 'Knit your first sweater', time: '4–8 weeks', cost: '€€',
    steps: ['Learn knit & purl stitches on a scrap swatch', 'Knit a simple scarf or hat for practice', 'Pick a free beginner top-down sweater pattern', 'Buy chunky yarn + the needle size the pattern says', 'Knit a gauge swatch and measure it', 'Knit the yoke and body', 'Knit the sleeves, weave in the ends — wear it!'],
    resources: [yt('Beginner sweater knit-alongs', 'beginner top down sweater knit along'), site('Ravelry', 'https://www.ravelry.com/', 'Thousands of free patterns, filter by “beginner”'), reddit('knitting')],
  },
  embroidery: {
    title: 'Learn hand embroidery', time: '1–2 weeks', cost: '€',
    steps: ['Get a hoop, cotton fabric, needles and floss', 'Learn back stitch, stem stitch and satin stitch', 'Practise each stitch on a sampler', 'Trace a simple small design onto fabric', 'Stitch your first finished piece', 'Frame it in the hoop'],
    resources: [yt('Embroidery stitches for beginners', 'hand embroidery for beginners stitches'), reddit('Embroidery')],
  },
  sewing: {
    title: 'Learn to use a sewing machine', time: '2–3 weeks', cost: '€€',
    steps: ['Learn to thread the machine and wind a bobbin', 'Sew straight lines on paper, then scrap fabric', 'Practise curves and turning corners', 'Make a simple tote bag', 'Make a pillowcase or pyjama shorts', 'Pick your next project from a beginner pattern'],
    resources: [yt('Sewing machine basics', 'sewing machine for beginners'), reddit('sewing')],
  },
  pottery: {
    title: 'Throw your first bowl on the wheel', time: '4–6 weeks', cost: '€€',
    steps: ['Find a beginner wheel class or open studio nearby', 'Learn wedging and centering the clay', 'Practise opening and pulling up walls', 'Throw five small bowls (expect collapses!)', 'Trim your best bowl when leather-hard', 'Glaze and fire it'],
    resources: [yt('Wheel throwing for beginners', 'pottery wheel throwing for beginners'), reddit('Pottery')],
  },
  linocut: {
    title: 'Make your first linocut print', time: '1 week', cost: '€',
    steps: ['Get a lino block, cutting tools, ink, brayer and paper', 'Draw a simple bold design (remember: it prints mirrored)', 'Transfer the design onto the block', 'Carve away everything that should stay white', 'Ink up and print by hand with a spoon', 'Make a small edition of 5 prints'],
    resources: [yt('Linocut printing for beginners', 'linocut printmaking for beginners'), reddit('printmaking')],
  },
  sketch: {
    title: 'Start a daily sketch habit', time: '30 days to start', cost: '€',
    steps: ['Buy a small sketchbook and a pencil', 'Pick a fixed time: 10 minutes a day', 'Week 1: simple shapes and objects on your desk', 'Week 2: practise shading and light', 'Week 3: draw from life — mugs, plants, hands', 'Week 4: one detailed drawing (like an eye)', 'Flip through and compare day 1 with day 30'],
    resources: [yt('Learn to draw from scratch', 'learn to draw for beginners course'), site('Drawabox', 'https://drawabox.com/', 'Free structured drawing lessons'), reddit('learnart')],
  },
  lemons: {
    title: 'Paint your first watercolour still life', time: '2 weeks', cost: '€',
    steps: ['Get a small watercolour set, 2 brushes and proper paper', 'Practise flat washes and gradients', 'Learn wet-on-wet vs wet-on-dry', 'Paint simple fruit shapes', 'Set up a still life with real lemons', 'Paint it in 15 minutes — keep it loose'],
    resources: [yt('Watercolour for beginners', 'watercolor for beginners step by step'), reddit('Watercolor')],
  },
  pixels: {
    title: 'Learn pixel art', time: '2–3 weeks', cost: 'Free',
    steps: ['Install a free pixel editor (e.g. Piskel in the browser)', 'Pick a small palette (8–16 colours)', 'Draw 16×16 objects: a cup, an apple, a key', 'Learn shading and outlines', 'Draw a small character', 'Animate a simple 4-frame walk cycle'],
    resources: [yt('Pixel art tutorials', 'pixel art tutorial for beginners'), site('Lospec', 'https://lospec.com/', 'Free palettes and pixel art tutorials'), reddit('PixelArt')],
  },
  console: {
    title: 'Make your first small video game', time: '1–2 months', cost: 'Free',
    steps: ['Install Godot (free) and do the official “first 2D game”', 'Make a character that moves and jumps', 'Build one short level', 'Add a goal, a hazard and a restart', 'Add simple sounds and art', 'Let 3 friends play it and fix what confuses them'],
    resources: [yt('Godot beginner courses', 'godot 4 beginner tutorial series'), site('Godot docs', 'https://docs.godotengine.org/', 'Official step-by-step tutorials'), reddit('godot')],
  },
  scratch: {
    title: 'Make a tiny game in Scratch', time: '1–2 weeks', cost: 'Free',
    steps: ['Open Scratch in your browser (it’s free)', 'Do the built-in “Getting started” tutorial', 'Make a character move with the arrow keys', 'Add something to collect and a score', 'Add a sound and a “You win!” screen', 'Let a friend play it'],
    resources: [yt('Scratch game tutorials', 'scratch game tutorial for beginners'), site('Scratch', 'https://scratch.mit.edu/', 'Free coding for games, from MIT'), reddit('scratch')],
  },
  synth: {
    title: 'Make your first song', time: '2–3 weeks', cost: 'Free',
    steps: ['Install a free music app (e.g. GarageBand, BandLab or LMMS)', 'Make a simple 4-bar drum loop', 'Add a bassline using one scale', 'Add a melody on top', 'Arrange: intro, loop, ending', 'Export it and share it'],
    resources: [yt('Music production for beginners', 'music production for beginners free'), site('musictheory.net', 'https://www.musictheory.net/', 'Free interactive music theory lessons'), reddit('WeAreTheMusicMakers')],
  },
  ukulele: {
    title: 'Learn your first songs on ukulele', time: '3–6 weeks', cost: '€€',
    steps: ['Get a ukulele and tune it with a free app', 'Learn C, Am, F and G chords', 'Practise switching chords for 10 minutes a day', 'Learn one simple strumming pattern', 'Play your first full song', 'Play it for someone'],
    resources: [yt('Ukulele for beginners', 'ukulele for beginners lessons'), reddit('ukulele')],
  },
  scarf: {
    title: 'Knit your first scarf', time: '2–3 weeks', cost: '€',
    steps: ['Get chunky yarn and big needles (8–10 mm)', 'Learn to cast on', 'Learn the knit stitch on a small swatch', 'Cast on for your scarf and knit 10 rows a day', 'Bind off and weave in the ends', 'Wear it!'],
    resources: [yt('Knit a scarf for beginners', 'knit a scarf for beginners'), reddit('knitting')],
  },
  guitar: {
    title: 'Learn your first songs on guitar', time: '1–3 months', cost: '€€',
    steps: ['Get a guitar tuned (a tuner app works)', 'Learn G, C, D and Em chords', 'Practise switching chords for 10 minutes a day', 'Learn one simple strumming pattern', 'Play your first full song slowly', 'Play it for a friend'],
    resources: [yt('Beginner guitar courses', 'beginner guitar course lessons'), site('JustinGuitar', 'https://www.justinguitar.com/', 'Free, very popular beginner guitar course'), reddit('guitarlessons')],
  },
  sourdough: {
    title: 'Bake your first sourdough loaf', time: '2–3 weeks', cost: '€',
    steps: ['Make a starter (flour + water, feed daily for ~7 days)', 'Pick one simple beginner recipe and stick to it', 'Mix, rest and do stretch-and-folds', 'Shape the loaf and proof it overnight in the fridge', 'Bake in a hot Dutch oven', 'Write down what you changed — and bake again'],
    resources: [yt('Sourdough for beginners', 'sourdough bread for beginners'), site('The Perfect Loaf', 'https://www.theperfectloaf.com/', 'Detailed beginner guides and schedules'), reddit('Sourdough')],
  },
  focaccia: {
    title: 'Bake a focaccia', time: '1 weekend', cost: '€',
    steps: ['Pick a simple no-knead focaccia recipe', 'Mix the dough the evening before', 'Let it rise overnight in the fridge', 'Stretch it into an oiled tray and dimple it', 'Top with olive oil, salt and rosemary', 'Bake until golden and share it'],
    resources: [yt('Focaccia recipes', 'easy focaccia recipe beginner'), reddit('Breadit')],
  },
  ramen: {
    title: 'Make homemade ramen', time: '1 weekend', cost: '€€',
    steps: ['Pick one style (shoyu is easiest)', 'Make or buy a good broth', 'Make a tare (seasoning base)', 'Marinate soft-boiled eggs the day before', 'Cook noodles and prep toppings', 'Assemble the bowl: tare, broth, noodles, toppings'],
    resources: [yt('Homemade ramen', 'homemade ramen from scratch'), site('Serious Eats', 'https://www.seriouseats.com/', 'Tested recipes that explain the why'), reddit('ramen')],
  },
  cinnamon: {
    title: 'Bake cinnamon rolls', time: '1 day', cost: '€',
    steps: ['Pick a beginner cinnamon roll recipe', 'Make the enriched dough and let it rise', 'Roll it out and spread the cinnamon filling', 'Roll up, cut into pieces and rise again', 'Bake and add icing while warm', 'Invite people to eat them'],
    resources: [yt('Cinnamon rolls step by step', 'cinnamon rolls recipe from scratch'), reddit('Baking')],
  },
  pasta: {
    title: 'Make fresh pasta from scratch', time: '1 afternoon', cost: '€',
    steps: ['Get “00” or plain flour and eggs', 'Make a well, mix and knead for 10 minutes', 'Rest the dough for 30 minutes', 'Roll it thin (pin or machine)', 'Cut tagliatelle', 'Cook for 2 minutes and pair with a simple sauce'],
    resources: [yt('Fresh pasta for beginners', 'fresh pasta from scratch beginner'), reddit('pasta')],
  },
  tomato: {
    title: 'Grow tomatoes on a balcony', time: '3–4 months', cost: '€',
    steps: ['Choose a compact variety (cherry or bush tomatoes)', 'Get a large pot (20 L+) and good compost', 'Plant seedlings after the last frost', 'Put them in the sunniest spot and add a stake', 'Water regularly and feed weekly once flowering', 'Harvest when fully coloured'],
    resources: [yt('Container tomato growing', 'growing tomatoes in pots balcony'), site('RHS gardening advice', 'https://www.rhs.org.uk/advice', 'Trusted beginner gardening guides'), reddit('vegetablegardening')],
  },
  plant: {
    title: 'Propagate houseplants from cuttings', time: '3–6 weeks', cost: 'Free',
    steps: ['Pick an easy plant (pothos, monstera, tradescantia)', 'Cut just below a node with clean scissors', 'Put the cutting in water in bright, indirect light', 'Change the water weekly', 'Pot it in soil when roots are ~3 cm', 'Give the new plants to friends'],
    resources: [yt('Plant propagation for beginners', 'houseplant propagation for beginners'), reddit('houseplants')],
  },
  canoe: {
    title: 'Learn to canoe', time: '2–4 weekends', cost: '€€',
    steps: ['Book a beginner paddling session or rent with a guide', 'Learn the forward stroke and J-stroke', 'Practise getting in and out safely', 'Paddle a calm lake for an hour', 'Learn what to do if you capsize', 'Plan your first half-day trip with a friend'],
    resources: [yt('Canoe strokes for beginners', 'canoe paddling strokes for beginners'), reddit('Canoeing')],
  },
  bench: {
    title: 'Restore an old piece of wooden furniture', time: '1–2 weekends', cost: '€',
    steps: ['Find something to restore (a bench, chair or stool)', 'Tighten loose joints and replace broken parts', 'Sand from coarse to fine grit', 'Wipe off the dust', 'Apply oil or outdoor finish in thin coats', 'Let it cure and enjoy it'],
    resources: [yt('Furniture restoration for beginners', 'wood furniture restoration beginner'), reddit('woodworking')],
  },
  tools: {
    title: 'Set up a small beginner workshop', time: '2–4 weeks', cost: '€€',
    steps: ['Pick a corner, a sturdy table and good light', 'Start with basic hand tools: saw, square, chisel, clamps', 'Add safety gear: glasses, ear and dust protection', 'Build a simple wall rack for your tools', 'Make a first small project to test the setup', 'Add tools only when a project needs them'],
    resources: [yt('Beginner woodworking', 'woodworking for beginners getting started'), reddit('woodworking')],
  },
  birdhouse: {
    title: 'Build a birdhouse', time: '1 weekend', cost: '€',
    steps: ['Find a free birdhouse plan for local birds', 'Buy untreated wood (no paint inside)', 'Measure and cut the pieces', 'Drill the entrance hole and small drainage holes', 'Assemble with screws or nails', 'Hang it 2–4 m high, away from cats'],
    resources: [yt('Birdhouse build', 'how to build a birdhouse beginner'), reddit('woodworking')],
  },
  radio: {
    title: 'Repair an old electronic device', time: '2–4 weeks', cost: '€',
    steps: ['Find an old broken device (radio, lamp, speaker)', 'Learn basic electrical safety — unplug everything!', 'Look up a teardown or repair guide for it', 'Open it, take photos, find the obvious faults', 'Replace the broken part', 'Put it back together and test it'],
    resources: [yt('Electronics repair for beginners', 'electronics repair for beginners'), site('iFixit', 'https://www.ifixit.com/', 'Free step-by-step repair guides'), reddit('AskElectronics')],
  },
  circuit: {
    title: 'Learn to solder', time: '1–2 weeks', cost: '€',
    steps: ['Get a temperature-controlled iron, solder and a stand', 'Read a soldering safety guide (ventilate!)', 'Practise on a cheap practice kit', 'Learn to make a clean, shiny joint', 'Build a small kit (blinking LEDs)', 'Fix something broken at home'],
    resources: [yt('Soldering for beginners', 'how to solder for beginners'), site('Adafruit Learn', 'https://learn.adafruit.com/', 'Free guides, including soldering basics'), reddit('AskElectronics')],
  },
  runner: {
    title: 'Run 10 km without stopping', time: '8–12 weeks', cost: 'Free',
    steps: ['Get comfortable running shoes', 'Start a couch-to-5K plan (3 runs a week)', 'Run 5 km without stopping', 'Add 10% distance per week', 'Do one longer slow run every week', 'Run your first 10 km — slowly is fine!'],
    resources: [yt('Beginner running plans', 'beginner running plan couch to 5k'), reddit('C25K')],
  },
  trail: {
    title: 'Try trail running', time: '4–6 weeks', cost: '€',
    steps: ['Find an easy, well-marked trail nearby', 'Start with run–walk intervals', 'Walk the uphills — everyone does', 'Practise short, quick steps on the downhills', 'Bring water and tell someone your route', 'Run your first full trail loop'],
    resources: [yt('Trail running for beginners', 'trail running tips for beginners'), site('AllTrails', 'https://www.alltrails.com/', 'Find trails near you'), reddit('trailrunning')],
  },
  mountain: {
    title: 'Hike to a summit', time: '4–8 weeks', cost: '€',
    steps: ['Do a few 2–3 hour hikes to build fitness', 'Get proper boots and break them in', 'Pick a beginner-friendly summit and check the weather', 'Pack water, food, layers and a map', 'Start early and turn back if conditions change', 'Reach the top and take the photo!'],
    resources: [yt('Hiking for beginners', 'hiking for beginners tips'), site('AllTrails', 'https://www.alltrails.com/', 'Routes, difficulty and reviews'), reddit('hiking')],
  },
  climb: {
    title: 'Get into bouldering', time: '4 weeks', cost: '€€',
    steps: ['Go to a climbing gym intro session', 'Rent shoes first — buy later', 'Climb the easiest grade until it feels easy', 'Learn to fall and land safely', 'Focus on footwork, not arm strength', 'Go twice a week with a friend'],
    resources: [yt('Bouldering technique for beginners', 'bouldering technique for beginners'), reddit('bouldering')],
  },
  journal: {
    title: 'Start a journaling habit', time: '30 days', cost: 'Free',
    steps: ['Pick a notebook you like', 'Choose a time: morning or before bed', 'Write 3 lines a day — no pressure', 'Try prompts when you are stuck', 'Look back after one week', 'Keep going for 30 days'],
    resources: [yt('Journaling for beginners', 'journaling for beginners how to start'), reddit('Journaling')],
  },
  camera: {
    title: 'Shoot your first roll of film', time: '2–3 weeks', cost: '€€',
    steps: ['Get a simple film camera (second-hand is fine)', 'Buy a roll of ISO 400 colour film', 'Learn how to load and wind the film', 'Shoot 36 photos in good light', 'Get it developed and scanned at a lab', 'Pick your 3 favourites and share them'],
    resources: [yt('Film photography for beginners', 'film photography for beginners'), reddit('AnalogCommunity')],
  },
  flowers: {
    title: 'Get better at photography', time: '30 days', cost: 'Free',
    steps: ['Use the camera you already have (a phone is fine)', 'Learn the rule of thirds', 'Shoot at golden hour for a week', 'Learn focus and depth of field', 'Take one photo every day for 30 days', 'Pick your best 10 and share them'],
    resources: [yt('Photography basics', 'photography basics for beginners'), site('Cambridge in Colour', 'https://www.cambridgeincolour.com/tutorials.htm', 'Free photography tutorials'), reddit('photography')],
  },
}

// Fallback plans for posts people create themselves
export const CATEGORY_GUIDES = {
  art: GUIDES.sketch,
  music: GUIDES.guitar,
  crafts: GUIDES.embroidery,
  cooking: {
    title: 'Learn to cook a new dish', time: '1–2 weeks', cost: '€',
    steps: ['Pick one dish you love eating', 'Find a well-reviewed beginner recipe', 'Buy the ingredients and read the recipe twice', 'Cook it once, exactly as written', 'Note what to change and cook it again', 'Cook it for friends or family'],
    resources: [yt('Cooking basics', 'cooking basics for beginners'), site('Serious Eats', 'https://www.seriouseats.com/', 'Tested recipes that explain the why'), reddit('Cooking')],
  },
  tech: {
    title: 'Build your first small website', time: '2–4 weeks', cost: 'Free',
    steps: ['Learn basic HTML: headings, text, images, links', 'Learn CSS for colours and layout', 'Plan a one-page site about something you love', 'Build it step by step', 'Add a little JavaScript (e.g. a button)', 'Publish it for free and share the link'],
    resources: [yt('Web development for beginners', 'html css for beginners full course'), site('freeCodeCamp', 'https://www.freecodecamp.org/', 'Free interactive coding courses'), reddit('learnprogramming')],
  },
  outdoors: GUIDES.trail,
  fitness: GUIDES.runner,
  writing: {
    title: 'Write your first short story', time: '2–3 weeks', cost: 'Free',
    steps: ['Read 3 short stories you love', 'Pick one character who wants something', 'Plan beginning, middle and end in 5 lines', 'Write a messy first draft (500–1500 words)', 'Put it away for 2 days, then revise', 'Share it with one person you trust'],
    resources: [yt('Creative writing for beginners', 'how to write a short story for beginners'), reddit('writing')],
  },
  photo: GUIDES.flowers,
  garden: GUIDES.tomato,
  wood: GUIDES.birdhouse,
}

// Every plan starts with a tiny step you can do today in about 10 minutes, with nothing to buy
export const TINY_STEP = 'Watch one short beginner video (about 10 minutes)'
for (const g of new Set([...Object.values(GUIDES), ...Object.values(CATEGORY_GUIDES)])) g.steps.unshift(TINY_STEP)

// People who've done this before skip the "watch a beginner video" step
export const stepsFor = (guide, level) => (level && level !== 'new' ? guide.steps.filter((s) => s !== TINY_STEP) : guide.steps)

const guideKeyByImage = Object.fromEntries(Object.entries(PHOTOS).map(([k, v]) => [v.src, k]))

export const guideFor = (post) => GUIDES[guideKeyByImage[post.image]] || planForName(post.title, post.category).guide

// Finds a fitting plan for whatever name someone types ("learn ukulele" → the guitar plan)
const MATCHERS = [
  ['scarf', 'crafts', /scarf|beanie|hat\b/],
  ['knit', 'crafts', /knit|sweater|jumper|crochet/],
  ['embroidery', 'crafts', /embroider|cross.?stitch/],
  ['sewing', 'crafts', /sew|tote bag|quilt/],
  ['pottery', 'crafts', /pottery|ceramic|clay/],
  ['linocut', 'art', /lino|printmaking|block print/],
  ['lemons', 'art', /watercolou?r|paint/],
  ['pixels', 'art', /pixel/],
  ['sketch', 'art', /draw|sketch|doodle|illustrat/],
  ['journal', 'writing', /journal|diary/],
  ['scratch', 'tech', /scratch/],
  ['console', 'tech', /game|godot|unity/],
  ['synth', 'music', /\bbeat|produc|compose|synth|\bdj\b/],
  ['ukulele', 'music', /ukulele/],
  ['guitar', 'music', /guitar|bass|chord/],
  ['focaccia', 'cooking', /focaccia/],
  ['sourdough', 'cooking', /sourdough|loaf|(?<!banana )bread/],
  ['ramen', 'cooking', /ramen|noodle/],
  ['pasta', 'cooking', /pasta/],
  ['cinnamon', 'cooking', /cinnamon|bun|pastr|bake|baking|cake|cookie/],
  ['tomato', 'garden', /tomato/],
  ['plant', 'garden', /plant|propagat|cutting/],
  ['canoe', 'outdoors', /canoe|kayak|paddl/],
  ['bench', 'wood', /restor|furniture|refinish/],
  ['tools', 'wood', /workshop/],
  ['birdhouse', 'wood', /birdhouse|bird house/],
  ['radio', 'tech', /repair|fix/],
  ['circuit', 'tech', /solder|circuit|arduino|electronic|robot/],
  ['trail', 'outdoors', /trail ?run/],
  ['runner', 'fitness', /\brun|marathon|5 ?k\b|10 ?k\b|jog/],
  ['mountain', 'outdoors', /hike|hiking|summit|mountain/],
  ['climb', 'fitness', /climb|boulder/],
  ['journal', 'writing', /journal|diary/],
  ['camera', 'photo', /film camera|analog|film photo|roll of film/],
  ['flowers', 'photo', /photo|camera/],
]
const CATEGORY_MATCHERS = [
  ['tech', /website|code|coding|program|app\b|web|scratch/],
  ['writing', /story|write|writing|poem|book|novel|blog/],
  ['cooking', /cook|recipe|dish|meal|food/],
]

// Category plans that fit almost anything in that category (e.g. any cooking idea)
const BROAD = ['cooking', 'tech', 'writing', 'photo']

const genericGuide = (name) => ({
  title: name,
  time: 'a few weeks',
  cost: 'up to you',
  steps: [TINY_STEP, 'Write down why you want to do this', 'Get the basic supplies (if you need any)', 'Do a first small attempt — it’s allowed to be bad', 'Practise a little, 3 times a week', 'Make something you are proud of', 'Share it with someone'],
  resources: [yt(`${name}: beginner playlists`, `${name} for beginners`)],
})

export function planForName(name, hintCategory) {
  const text = name.toLowerCase()
  const hit = MATCHERS.find(([, , re]) => re.test(text))
  if (hit) return { guide: GUIDES[hit[0]], category: hit[1] }
  const catHit = CATEGORY_MATCHERS.find(([, re]) => re.test(text))
  if (catHit) return { guide: CATEGORY_GUIDES[catHit[0]], category: catHit[0] }
  if (BROAD.includes(hintCategory)) return { guide: CATEGORY_GUIDES[hintCategory], category: hintCategory }
  return { guide: genericGuide(name), category: hintCategory || 'other' }
}

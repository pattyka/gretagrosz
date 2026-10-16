// Demo content so the app feels alive before real accounts exist
import { PHOTOS } from './photos'

export const ME = 'u_me'

const DAY = 864e5
const HOUR = 36e5

export function seed() {
  const now = Date.now()
  const ago = (d) => now - d

  const users = [
    { id: ME, name: 'You', handle: 'you', color: '#FEE9E5', photo: null, prefs: null, bio: 'Just getting started — trying new things!', passions: ['Music', 'Cooking'] },
    { id: 'u_maya', name: 'Maya Lin', handle: 'maya.makes', color: '#FCE7F3', photo: null, bio: 'Knitting my way through winter. Beginner at everything, proud of it.', passions: ['Crafts', 'Gardening'] },
    { id: 'u_leo', name: 'Leo Okafor', handle: 'leo.builds', color: '#DBEAFE', photo: null, bio: 'Weekend woodworker & tinkerer. Currently: a canoe.', passions: ['Woodwork', 'Outdoors'] },
    { id: 'u_sofia', name: 'Sofia Reyes', handle: 'sofi.sketch', color: '#FEF3C7', photo: null, bio: 'One sketch a day since January.', passions: ['Art', 'Photography'] },
    { id: 'u_jonas', name: 'Jonas Weber', handle: 'jonas.runs', color: '#D1FAE5', photo: null, bio: 'From couch to half-marathon. Slowly.', passions: ['Fitness', 'Outdoors'] },
    { id: 'u_aiko', name: 'Aiko Tanaka', handle: 'aiko.bakes', color: '#FFEDD5', photo: null, bio: 'Sourdough scientist. My starter is called Doug.', passions: ['Cooking'] },
    { id: 'u_sam', name: 'Sam Rivera', handle: 'sam.codes', color: '#EDE9FE', photo: null, bio: 'Making tiny games after school.', passions: ['Tech', 'Music'] },
  ]

  // Unfinished projects are always private
  const project = (p) => ({ status: 'active', updates: [], ...p, visibility: p.status === 'done' ? p.visibility : 'private', cover: PHOTOS[p.cover]?.src || null })

  const projects = [
    project({
      id: 'pr_guitar', userId: ME, title: 'Learn 5 songs on guitar', category: 'music', cover: 'guitar', visibility: 'public',
      description: 'I got a second-hand acoustic for my birthday. Goal: play 5 full songs by summer.',
      createdAt: ago(20 * DAY),
      milestones: [
        { id: 'm1', text: 'Learn G, C, D and Em chords', done: true },
        { id: 'm2', text: 'Switch chords without looking', done: true },
        { id: 'm3', text: 'Song 1: Wonderwall', done: false },
        { id: 'm4', text: 'Learn a strumming pattern', done: false },
        { id: 'm5', text: 'Play a song for a friend', done: false },
      ],
      updates: [
        { id: 'up1', text: 'Fingertips finally stopped hurting! Chord changes are getting smoother.', createdAt: ago(3 * DAY) },
        { id: 'up2', text: 'Day one. Everything sounds like a cat on a keyboard.', createdAt: ago(20 * DAY) },
      ],
    }),
    project({
      id: 'pr_world', userId: ME, title: 'Cook a dish from every continent', category: 'cooking', cover: 'padthai', visibility: 'private',
      description: 'Just for me for now — will share when I am less embarrassed by my plating.',
      createdAt: ago(9 * DAY),
      milestones: [
        { id: 'm6', text: 'Asia — pad thai', done: true },
        { id: 'm7', text: 'Africa — jollof rice', done: false },
        { id: 'm8', text: 'Europe — paella', done: false },
        { id: 'm9', text: 'South America — arepas', done: false },
      ],
      updates: [{ id: 'up3', text: 'Pad thai was a success, even if too salty.', createdAt: ago(6 * DAY) }],
    }),
    project({
      id: 'pr_canoe', userId: 'u_leo', title: 'Build a cedar-strip canoe', category: 'wood', cover: 'canoe', visibility: 'public',
      description: 'Garage project. 16 ft, cedar strips, fibreglass. First time doing anything this big.',
      createdAt: ago(60 * DAY),
      milestones: [
        { id: 'c1', text: 'Build the strongback and forms', done: true },
        { id: 'c2', text: 'Strip the hull', done: true },
        { id: 'c3', text: 'Sand & fibreglass outside', done: false },
        { id: 'c4', text: 'Flip and do the inside', done: false },
        { id: 'c5', text: 'First paddle on the lake', done: false },
      ],
      updates: [{ id: 'cu1', text: 'Hull is fully stripped! 200+ strips later.', createdAt: ago(2 * DAY) }],
    }),
    project({
      id: 'pr_sweater', userId: 'u_maya', title: 'My first sweater', category: 'crafts', cover: 'knit', visibility: 'public', status: 'done',
      description: 'Top-down raglan in chunky wool.',
      createdAt: ago(40 * DAY),
      milestones: [
        { id: 's1', text: 'Swatch', done: true },
        { id: 's2', text: 'Yoke', done: true },
        { id: 's3', text: 'Body', done: true },
        { id: 's4', text: 'Sleeves (the worst part)', done: true },
      ],
      updates: [
        { id: 'su1', text: 'Done!!! It fits!!!', createdAt: ago(1 * DAY) },
        { id: 'su2', text: 'Second sleeve done. Only the neckline left.', createdAt: ago(6 * DAY) },
        { id: 'su3', text: 'Had to unravel the whole first sleeve. Started again, slower this time.', createdAt: ago(14 * DAY) },
        { id: 'su4', text: 'Body is done and it actually looks like a sweater!', createdAt: ago(22 * DAY) },
        { id: 'su5', text: 'Finished the yoke. My first raglan increases!', createdAt: ago(31 * DAY) },
        { id: 'su6', text: 'Day one: knitted a swatch and bought way too much wool.', createdAt: ago(39 * DAY) },
      ],
    }),
    project({
      id: 'pr_half', userId: 'u_jonas', title: 'Half-marathon training', category: 'fitness', cover: 'runner', visibility: 'public',
      description: '16-week plan. Race is in April.',
      createdAt: ago(50 * DAY),
      milestones: [
        { id: 'h1', text: 'Run 5 km', done: true },
        { id: 'h2', text: 'Run 10 km', done: true },
        { id: 'h3', text: 'Run 15 km', done: false },
        { id: 'h4', text: 'Race day', done: false },
      ],
    }),
    project({
      id: 'pr_365', userId: 'u_sofia', title: '365-day sketch challenge', category: 'art', cover: 'sketch', visibility: 'public',
      description: 'One sketch a day, no matter how small.',
      createdAt: ago(280 * DAY),
      milestones: [
        { id: 'k1', text: '30 days', done: true },
        { id: 'k2', text: '100 days', done: true },
        { id: 'k3', text: '200 days', done: true },
        { id: 'k4', text: '365 days', done: false },
      ],
    }),
    project({
      id: 'pr_game', userId: 'u_sam', title: 'Pixel platformer game', category: 'tech', cover: 'console', visibility: 'public',
      description: 'A tiny game about a frog who wants to see the ocean. Made with Godot.',
      createdAt: ago(30 * DAY),
      milestones: [
        { id: 'g1', text: 'Player movement & jumping', done: true },
        { id: 'g2', text: 'First level', done: true },
        { id: 'g3', text: 'Pixel art for the frog', done: false },
        { id: 'g4', text: 'Music', done: false },
        { id: 'g5', text: 'Let friends play-test', done: false },
      ],
    }),
  ]

  // [user, category, kind, title, caption, photo, age, likes, projectId]
  const raw = [
    ['u_maya', 'crafts', 'made', 'Finished my first sweater!', 'Six weeks, one unravelled sleeve and a lot of podcasts. It actually fits. If I can do this, you can too.', 'knit', 1 * DAY, 142, 'pr_sweater'],
    ['u_aiko', 'cooking', 'made', 'Open crumb sourdough, finally', 'Took 11 tries. The secret was patience (and a warmer kitchen).', 'sourdough', 5 * HOUR, 203, null],
    ['u_leo', 'outdoors', 'progress', 'Test paddle before my own canoe is done', 'Borrowed a friend’s canoe to learn the strokes. Mine will be on the water by spring.', 'canoe', 2 * DAY, 88, 'pr_canoe'],
    ['u_sofia', 'art', 'milestone', 'Day 200 of my sketch challenge', 'Some days it is a masterpiece, some days it is a mug. Both count.', 'sketch', 8 * HOUR, 96, 'pr_365'],
    ['u_jonas', 'fitness', 'milestone', 'First 10 km without stopping', 'Six months ago I could not run to the bus stop.', 'runner', 1 * DAY, 77, 'pr_half'],
    ['u_maya', 'crafts', 'first', 'First time on a pottery wheel', 'Everything collapsed twice. The third bowl survived!', 'pottery', 3 * HOUR, 2, null],
    ['u_sam', 'tech', 'progress', 'My frog game runs on a handheld now', 'Exported it to my old console and it actually works.', 'console', 3 * DAY, 54, 'pr_game'],
    ['u_maya', 'garden', 'progress', 'Balcony tomatoes are ready', 'First harvest from three pots on a tiny balcony.', 'tomato', 4 * DAY, 39, null],
    ['u_sofia', 'photo', 'made', 'Tilt-shift experiment', 'Played with an old tilt-shift lens on a morning walk.', 'flowers', 6 * DAY, 61, null],
    ['u_aiko', 'cooking', 'started', 'Trying homemade ramen', 'Broth simmered for 12 hours. Worth it.', 'ramen', 2 * DAY, 3, null],
    ['u_leo', 'wood', 'made', 'Fixed up the old park bench', 'Sanded and oiled it with my neighbours on a Saturday.', 'bench', 9 * DAY, 58, null],
    ['u_jonas', 'outdoors', 'progress', 'Trail running is a whole new sport', 'Roots, rocks and mud. Loved every second.', 'trail', 5 * DAY, 33, null],
    ['u_sam', 'music', 'made', 'Made a chiptune for my game', 'First song I have ever composed. It is 40 seconds long and it loops.', 'synth', 7 * DAY, 71, 'pr_game'],
    ['u_maya', 'crafts', 'first', 'Learning embroidery', 'First attempt. Very wonky, very proud.', 'embroidery', 10 * DAY, 0, null],
    ['u_sofia', 'art', 'made', 'Painted lemons at my easel', 'Trying to loosen up. Painted these in 15 minutes.', 'lemons', 12 * DAY, 112, null],
    ['u_aiko', 'cooking', 'progress', 'Doug the starter turns one', 'Celebrated with focaccia, obviously.', 'focaccia', 14 * DAY, 66, null],
    ['u_jonas', 'writing', 'started', 'Starting a running journal', 'Writing down how every run feels, not just the time.', 'journal', 15 * DAY, 0, null],
    ['u_leo', 'tech', 'made', 'Fixed my grandma’s old radio', 'Replaced two capacitors and it plays again. She cried a bit.', 'radio', 16 * DAY, 154, null],
    ['u_sam', 'art', 'progress', 'Pixel art practice', '16×16 sprites are harder than they look.', 'pixels', 18 * DAY, 29, 'pr_game'],
    [ME, 'music', 'milestone', 'Can switch G → C without looking!', 'Tiny win but it took two weeks.', 'guitar', 3 * DAY, 24, 'pr_guitar'],
    ['u_sofia', 'photo', 'started', 'Bought a 40-year-old film camera', '36 shots, no screen, no idea what I am doing. Love it.', 'camera', 20 * HOUR, 52, null],
    ['u_aiko', 'cooking', 'made', 'Sunday cinnamon rolls', 'Recipe from my aunt. Gone in ten minutes.', 'cinnamon', 4 * DAY, 131, null],
    ['u_leo', 'wood', 'progress', 'Finally organised my workshop', 'Now I can actually find the chisel I need.', 'tools', 11 * DAY, 42, null],
    ['u_jonas', 'outdoors', 'made', 'Summit before sunrise', 'Started at 3am. Worth every step.', 'mountain', 8 * DAY, 119, null],
    ['u_sam', 'tech', 'progress', 'Soldered my first circuit board', 'Only burned myself once.', 'circuit', 13 * DAY, 37, null],
    ['u_maya', 'garden', 'progress', 'Propagating cuttings for friends', 'One plant became twelve.', 'plant', 17 * DAY, 58, null],
    ['u_sofia', 'art', 'first', 'Linocut chicken, because why not', 'First time carving lino. The chicken has a lot of personality.', 'linocut', 19 * DAY, 87, null],
    ['u_aiko', 'cooking', 'made', 'Fresh pasta from scratch', 'Flour, eggs and a lot of rolling.', 'pasta', 21 * DAY, 74, null],
    ['u_leo', 'wood', 'made', 'Birdhouse for my grandma’s garden', 'A family of blue tits moved in within a week.', 'birdhouse', 22 * DAY, 95, null],
    ['u_jonas', 'fitness', 'first', 'Tried bouldering for the first time', 'Arms are jelly. Already booked the next session.', 'climb', 23 * DAY, 0, null],
    ['u_maya', 'crafts', 'progress', 'Learning to use my mum’s sewing machine', 'Straight lines: achieved. Curves: working on it.', 'sewing', 24 * DAY, 34, null],
  ]

  // How many people (in the demo) started a project because of a post
  const INSPIRED = { p1: 12, p2: 31, p3: 6, p4: 9, p5: 7, p11: 4, p15: 5, p22: 18, p24: 15, p27: 8 }

  const posts = raw.map(([userId, category, kind, title, caption, photo, age, likes, projectId], i) => ({
    id: `p${i + 1}`, userId, category, kind, title, caption, projectId,
    image: PHOTOS[photo].src, ratio: PHOTOS[photo].ratio, credit: PHOTOS[photo].by,
    createdAt: now - age, likes, likedBy: [], inspired: INSPIRED[`p${i + 1}`] || 0, comments: [],
  }))

  posts[0].comments = [
    { id: 'c1', userId: 'u_sofia', text: 'The colour is gorgeous!!', createdAt: ago(20 * HOUR) },
    { id: 'c2', userId: 'u_jonas', text: 'This is the motivation I needed to finish anything this week.', createdAt: ago(18 * HOUR) },
  ]
  posts[19].comments = [{ id: 'c3', userId: 'u_sam', text: 'Huge! Chord changes are the hardest part.', createdAt: ago(2 * DAY) }]

  const conversations = [
    {
      id: 'cv_maya', members: [ME, 'u_maya'],
      messages: [
        { id: 'x1', from: 'u_maya', text: 'Hey! Saw your guitar post — how long have you been learning?', createdAt: ago(2 * DAY) },
        { id: 'x2', from: ME, text: 'About three weeks! My fingers hate me haha', createdAt: ago(2 * DAY - HOUR) },
        { id: 'x3', from: 'u_maya', text: 'That was me with knitting needles. Keep going, it gets fun so fast!', createdAt: ago(2 * DAY - 2 * HOUR) },
      ],
    },
    {
      id: 'cv_leo', members: [ME, 'u_leo'],
      messages: [{ id: 'x4', from: 'u_leo', text: 'Thanks for the like on the canoe! Fibreglass this weekend.', createdAt: ago(1 * DAY) }],
    },
  ]

  const boards = [
    { id: 'b_try', name: 'Want to try', postIds: ['p2', 'p6', 'p27'] },
    { id: 'b_cozy', name: 'Cozy inspiration', postIds: ['p1', 'p15', 'p22', 'p26'] },
  ]

  // Things you did on your projects (ticking steps, journal entries) — used for daily streaks and check-ins
  const activity = [
    { projectId: 'pr_guitar', at: ago(1 * DAY) },
    { projectId: 'pr_guitar', at: ago(3 * DAY) },
    { projectId: 'pr_guitar', at: ago(9 * DAY) },
    { projectId: 'pr_guitar', at: ago(16 * DAY) },
    { projectId: 'pr_world', at: ago(6 * DAY) },
  ]

  const notifications = [
    { id: 'n1', text: 'Maya Lin liked your post “Can switch G → C without looking!”', link: '/post/p20', at: ago(5 * HOUR), read: false },
    { id: 'n2', text: 'Leo Okafor started following you', link: '/u/leo.builds', at: ago(1 * DAY), read: false },
    { id: 'n3', text: 'Sam Rivera commented on your post', link: '/post/p20', at: ago(2 * DAY), read: true },
  ]

  return {
    version: 5,
    onboarded: false,
    users, projects, posts, conversations, boards, activity, notifications,
    freezes: { available: 1, used: [], earned: [] },
    challenges: {},
    challengeWins: [],
    unlockedNotified: null,
    buddies: [],
    following: ['u_maya', 'u_leo'],
  }
}

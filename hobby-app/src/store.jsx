// All app data lives here and is saved in the browser (localStorage).
// When the app goes online, this is the part that gets swapped for a real database.
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { seed, ME } from './seed'
import { uid, dailyStreak, bestDailyStreak, dayOf } from './data'
import { CHALLENGES, checkinsThisMonth } from './challenges'
import { OUTFITS, outfitItem } from './components/Buddy'

const KEY = 'blank-data-v2'
const Ctx = createContext(null)

const REPLIES = [
  'That is amazing, keep going!',
  'Love this! How long did it take you?',
  'You are inspiring me to start my own project',
  'Haha same! Send pics when it is done!',
  'Proud of you honestly',
  'Ooh tell me more!',
]

// Brings data saved by an older version of the app up to date, keeping everything you made
function upgrade(data) {
  if ((data.version || 2) < 3) {
    const fresh = seed()
    const freshPost = Object.fromEntries(fresh.posts.map((p) => [p.id, p]))
    // Cheers became likes; demo posts also get "first attempt" tags and "inspired" counts
    data.posts = data.posts.map(({ cheers = 0, cheeredBy = [], ...p }) => {
      const f = freshPost[p.id]
      const demo = f && f.title === p.title
      return { ...p, likes: demo ? f.likes : cheers, likedBy: cheeredBy, inspired: demo ? f.inspired : 0, kind: demo ? f.kind : p.kind }
    })
    // Rebuild your activity from the demo history plus the journal entries you wrote
    const projectIds = new Set(data.projects.map((p) => p.id))
    data.activity = [
      ...fresh.activity.filter((a) => projectIds.has(a.projectId)),
      ...data.projects
        .filter((p) => p.userId === ME)
        .flatMap((p) => p.updates.filter((u) => u.id.includes('_')).map((u) => ({ projectId: p.id, at: u.createdAt }))),
    ]
    data.buddies = []
    data.onboarded = false
    data.version = 3
  }
  if (data.version < 4) {
    // Notifications, streak freezes and monthly challenges
    const fresh = seed()
    data.notifications = fresh.notifications
    data.freezes = fresh.freezes
    data.challenges = {}
    data.challengeWins = []
    data.unlockedNotified = null
    data.version = 4
  }
  if (data.version < 5) {
    // A fuller demo journey for Maya's sweater (only if it's still the original demo project)
    const freshSweater = seed().projects.find((p) => p.id === 'pr_sweater')
    data.projects = data.projects.map((p) => (p.id === 'pr_sweater' && p.updates.length === 1 && p.updates[0].id === 'su1' ? { ...p, updates: freshSweater.updates } : p))
    data.version = 5
  }
  return data
}

const withNote = (d, note) => ({
  ...d,
  notifications: [{ id: uid('n'), at: Date.now(), read: false, ...note }, ...d.notifications].slice(0, 50),
})

// Things that happen automatically after you do something: streak freezes, challenge wins and outfit unlocks.
// Returns the same object when nothing changed.
function sync(d) {
  let n = d
  const times = n.activity.map((a) => a.at)
  const today = dayOf(Date.now())

  // A missed day (or two) gets covered by your saved streak freezes
  const covered = new Set([...times.map(dayOf), ...n.freezes.used])
  let gap = 0
  while (!covered.has(today - 1 - gap) && gap <= n.freezes.available) gap += 1
  if (gap > 0 && gap <= n.freezes.available && covered.has(today - 1 - gap)) {
    const saved = Array.from({ length: gap }, (_, i) => today - 1 - i)
    n = { ...n, freezes: { ...n.freezes, available: n.freezes.available - gap, used: [...n.freezes.used, ...saved] } }
    n = withNote(n, { text: gap === 1 ? 'A streak freeze saved your streak yesterday!' : `${gap} streak freezes saved your streak!`, link: '/buddy' })
  }

  // Every 7 days in a row earns a freeze (you can keep up to 2)
  const streak = dailyStreak(times, n.freezes.used)
  if (streak > 0 && streak % 7 === 0) {
    const doneToday = new Set([...times.map(dayOf), ...n.freezes.used]).has(today)
    const key = `${(doneToday ? today : today - 1) - streak + 1}-${streak}`
    if (!n.freezes.earned.includes(key)) {
      const gotOne = n.freezes.available < 2
      n = { ...n, freezes: { ...n.freezes, available: Math.min(2, n.freezes.available + 1), earned: [...n.freezes.earned, key] } }
      if (gotOne) n = withNote(n, { text: `${streak} days in a row! You earned a streak freeze.`, link: '/buddy' })
    }
  }

  // Finishing a monthly challenge
  for (const ch of CHALLENGES) {
    if (!n.challengeWins.includes(ch.id) && checkinsThisMonth(n.challenges[ch.id]).length >= ch.goal) {
      n = { ...n, challengeWins: [...n.challengeWins, ch.id] }
      n = withNote(n, { text: `You finished the “${ch.title}” challenge!`, link: `/challenge/${ch.id}` })
    }
  }

  // New buddy outfits
  const best = Math.max(bestDailyStreak(times, n.freezes.used), streak)
  const unlocked = OUTFITS.filter((o) => (o.day && o.day <= best) || (o.challenge && n.challengeWins.includes(o.challenge))).map((o) => o.id)
  if (n.unlockedNotified == null) {
    n = { ...n, unlockedNotified: unlocked } // first run: don't announce what you already had
  } else {
    const fresh = unlocked.filter((id) => !n.unlockedNotified.includes(id))
    if (fresh.length) {
      n = { ...n, unlockedNotified: [...n.unlockedNotified, ...fresh] }
      for (const id of fresh) n = withNote(n, { text: `New outfit unlocked for your streak buddy: ${outfitItem(id).name}`, link: '/buddy' })
    }
  }
  return n
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const data = upgrade(JSON.parse(raw))
      // The app colour changed from red to indigo: update the default avatar colour to match
      data.users = data.users.map((u) => (u.id === ME && u.color === '#FDE8E5' ? { ...u, color: '#ECEBFC' } : u))
      // Unfinished projects are always private
      data.projects = data.projects.map((p) => (p.status === 'done' ? p : { ...p, visibility: 'private' }))
      return data
    }
  } catch {}
  return seed()
}

export function StoreProvider({ children }) {
  const [data, setData] = useState(load)
  useEffect(() => {
    setData(sync)
  }, [data.activity, data.challenges])
  const dataRef = useRef(data)
  dataRef.current = data
  const warned = useRef(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(data))
    } catch {
      if (!warned.current) {
        warned.current = true
        alert('Your browser storage is full — try smaller photos or delete a few posts.')
      }
    }
  }, [data])

  const actionsRef = useRef(null)
  const actions = useMemo(() => {
    const set = setData
    const mapPost = (id, fn) => set((d) => ({ ...d, posts: d.posts.map((p) => (p.id === id ? fn(p) : p)) }))
    const mapProject = (id, fn) => set((d) => ({ ...d, projects: d.projects.map((p) => (p.id === id ? fn(p) : p)) }))
    const pushMessage = (cid, msg) =>
      set((d) => {
        const next = {
          ...d,
          conversations: d.conversations.map((c) =>
            c.id === cid ? { ...c, messages: [...c.messages, { id: uid('msg'), createdAt: Date.now(), ...msg }] } : c,
          ),
        }
        if (msg.from === ME) return next
        const name = d.users.find((u) => u.id === msg.from)?.name || 'Someone'
        return withNote(next, { text: `${name} sent you a message`, link: `/chat/${cid}` })
      })

    return {
      updateMe: (patch) => set((d) => ({ ...d, users: d.users.map((u) => (u.id === ME ? { ...u, ...patch } : u)) })),

      addPost: (post) => {
        const p = { id: uid('p'), userId: ME, createdAt: Date.now(), likes: 0, likedBy: [], inspired: 0, comments: [], ratio: 1, ...post }
        set((d) => ({ ...d, posts: [p, ...d.posts] }))
        // Demo only: someone likes your new post a few seconds later
        setTimeout(() => {
          set((d) => {
            if (!d.posts.some((x) => x.id === p.id)) return d
            const others = d.users.filter((u) => u.id !== ME)
            const fan = others[Math.floor(Math.random() * others.length)]
            const liked = { ...d, posts: d.posts.map((x) => (x.id === p.id ? { ...x, likes: x.likes + 1 } : x)) }
            return withNote(liked, { text: `${fan.name} liked your post “${p.title}”`, link: `/post/${p.id}` })
          })
        }, 6000)
        return p.id
      },
      deletePost: (id) => set((d) => ({ ...d, posts: d.posts.filter((p) => p.id !== id) })),
      toggleLike: (id) =>
        mapPost(id, (p) => ({
          ...p,
          likedBy: p.likedBy.includes(ME) ? p.likedBy.filter((x) => x !== ME) : [...p.likedBy, ME],
        })),
      addComment: (id, text) =>
        mapPost(id, (p) => ({ ...p, comments: [...p.comments, { id: uid('c'), userId: ME, text, createdAt: Date.now() }] })),

      addProject: (proj) => {
        const p = { id: uid('pr'), userId: ME, createdAt: Date.now(), status: 'active', milestones: [], updates: [], ...proj }
        set((d) => ({ ...d, projects: [p, ...d.projects] }))
        return p.id
      },
      updateProject: (id, patch) => mapProject(id, (p) => ({ ...p, ...patch })),
      deleteProject: (id) =>
        set((d) => ({
          ...d,
          projects: d.projects.filter((p) => p.id !== id),
          posts: d.posts.map((p) => (p.projectId === id ? { ...p, projectId: null } : p)),
        })),
      addMilestone: (id, text) =>
        mapProject(id, (p) => ({ ...p, milestones: [...p.milestones, { id: uid('m'), text, done: false }] })),
      // Ticking off a step counts as activity (for streaks and check-ins)
      toggleMilestone: (id, mid) =>
        set((d) => {
          const project = d.projects.find((p) => p.id === id)
          const nowDone = !project.milestones.find((m) => m.id === mid)?.done
          return {
            ...d,
            projects: d.projects.map((p) => (p.id === id ? { ...p, milestones: p.milestones.map((m) => (m.id === mid ? { ...m, done: nowDone } : m)) } : p)),
            activity: nowDone ? [...d.activity, { projectId: id, at: Date.now() }] : d.activity,
          }
        }),
      removeMilestone: (id, mid) => mapProject(id, (p) => ({ ...p, milestones: p.milestones.filter((m) => m.id !== mid) })),
      addUpdate: (id, update) =>
        set((d) => ({
          ...d,
          projects: d.projects.map((p) => (p.id === id ? { ...p, updates: [{ id: uid('up'), createdAt: Date.now(), ...update }, ...p.updates] } : p)),
          activity: [...d.activity, { projectId: id, at: Date.now() }],
        })),

      toggleFollow: (userId) =>
        set((d) => ({
          ...d,
          following: d.following.includes(userId) ? d.following.filter((x) => x !== userId) : [...d.following, userId],
        })),

      // Returns the id of the chat with this person, creating it if needed
      openConversation: (userId) => {
        const existing = dataRef.current.conversations.find((c) => c.members.includes(userId))
        if (existing) return existing.id
        const c = { id: uid('cv'), members: [ME, userId], messages: [] }
        set((d) => ({ ...d, conversations: [c, ...d.conversations] }))
        return c.id
      },
      sendMessage: (cid, text, reply) => {
        pushMessage(cid, { from: ME, text })
        // Demo only: the other person answers so the chat feels real
        const other = dataRef.current.conversations.find((c) => c.id === cid)?.members.find((m) => m !== ME)
        if (other) {
          setTimeout(() => pushMessage(cid, { from: other, text: reply || REPLIES[Math.floor(Math.random() * REPLIES.length)] }), 1400)
        }
      },

      // Buddies: two people keeping each other going. Buddies can see each other's unfinished projects.
      addBuddy: (userId, project) => {
        set((d) => ({ ...d, buddies: [...d.buddies.filter((b) => b.userId !== userId), { userId, projectId: project.id, since: Date.now() }] }))
        const cid = actionsRef.current.openConversation(userId)
        setTimeout(() =>
          actionsRef.current.sendMessage(
            cid,
            `Hey! I just started “${project.title}”. Want to be buddies and keep each other going?`,
            'Yes, let’s do it! Send me an update every week and I’ll do the same.',
          ),
        50)
        return cid
      },
      removeBuddy: (userId) => set((d) => ({ ...d, buddies: d.buddies.filter((b) => b.userId !== userId) })),

      // Welcome quiz
      completeOnboarding: (prefs) =>
        set((d) => ({ ...d, onboarded: true, users: d.users.map((u) => (u.id === ME ? { ...u, prefs } : u)) })),
      retakeOnboarding: () => set((d) => ({ ...d, onboarded: false })),

      // Boards = collections of saved posts (like Pinterest)
      toggleSave: (boardId, postId) =>
        set((d) => ({
          ...d,
          boards: d.boards.map((b) =>
            b.id !== boardId ? b : { ...b, postIds: b.postIds.includes(postId) ? b.postIds.filter((x) => x !== postId) : [postId, ...b.postIds] },
          ),
        })),
      // Quick save from the feed: saves to the first board, or un-saves everywhere
      quickSave: (postId) =>
        set((d) => {
          const saved = d.boards.some((b) => b.postIds.includes(postId))
          if (saved) return { ...d, boards: d.boards.map((b) => ({ ...b, postIds: b.postIds.filter((x) => x !== postId) })) }
          if (!d.boards.length) return { ...d, boards: [{ id: uid('b'), name: 'Saved', postIds: [postId] }] }
          return { ...d, boards: d.boards.map((b, i) => (i === 0 ? { ...b, postIds: [postId, ...b.postIds] } : b)) }
        }),
      createBoard: (name, postId) => {
        const b = { id: uid('b'), name, postIds: postId ? [postId] : [] }
        set((d) => ({ ...d, boards: [...d.boards, b] }))
        return b.id
      },
      deleteBoard: (id) => set((d) => ({ ...d, boards: d.boards.filter((b) => b.id !== id) })),

      // Monthly challenges: check in once a day; each check-in also counts for your streak
      joinChallenge: (id) => set((d) => ({ ...d, challenges: { ...d.challenges, [id]: d.challenges[id] || { joinedAt: Date.now(), days: [] } } })),
      leaveChallenge: (id) => set((d) => {
        const { [id]: _, ...rest } = d.challenges
        return { ...d, challenges: rest }
      }),
      checkInChallenge: (id) =>
        set((d) => {
          const entry = d.challenges[id] || { joinedAt: Date.now(), days: [] }
          const today = dayOf(Date.now())
          if (entry.days.includes(today)) return d
          return {
            ...d,
            challenges: { ...d.challenges, [id]: { ...entry, days: [...entry.days, today] } },
            activity: [...d.activity, { projectId: `challenge:${id}`, at: Date.now() }],
          }
        }),

      markNotificationRead: (id) => set((d) => ({ ...d, notifications: d.notifications.map((x) => (x.id === id ? { ...x, read: true } : x)) })),
      markAllNotificationsRead: () => set((d) => ({ ...d, notifications: d.notifications.map((x) => ({ ...x, read: true })) })),

      resetDemo: () => set(seed()),
    }
  }, [])
  actionsRef.current = actions

  const value = useMemo(() => {
    const userById = (id) => data.users.find((u) => u.id === id) || data.users[0]
    const isSaved = (postId) => data.boards.some((b) => b.postIds.includes(postId))
    const isBuddy = (userId) => data.buddies.some((b) => b.userId === userId)
    // Finished public projects are visible to everyone; unfinished ones only to you and your buddies
    const canSee = (project) => project.userId === ME || (project.status === 'done' && project.visibility === 'public') || isBuddy(project.userId)
    const activityOf = (projectId) => data.activity.filter((a) => !projectId || a.projectId === projectId).map((a) => a.at)
    // Your overall streak counts days saved by streak freezes; a single project's streak doesn't
    const streak = (projectId) => (projectId ? dailyStreak(activityOf(projectId)) : dailyStreak(activityOf(), data.freezes.used))
    const bestStreak = () => Math.max(bestDailyStreak(activityOf(), data.freezes.used), streak())
    const isUnlocked = (item) => (item.challenge ? data.challengeWins.includes(item.challenge) : item.day <= bestStreak())
    const unread = data.notifications.filter((x) => !x.read).length
    // How many different days you've worked on a project
    const daysWorked = (projectId) => new Set(activityOf(projectId).map(dayOf)).size
    const lastActive = (project) => Math.max(project.createdAt, ...activityOf(project.id))
    return { data, actions, me: userById(ME), userById, isSaved, isBuddy, canSee, streak, bestStreak, isUnlocked, unread, daysWorked, lastActive }
  }, [data, actions])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useStore = () => useContext(Ctx)
export { ME }

import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useStore, ME } from '../store'
import { COST_LABEL, IDEAS, cat, daysSince } from '../data'
import { Icon, Masonry } from '../components/ui'

const readFlag = (key) => {
  try {
    return sessionStorage.getItem(key) === '1'
  } catch {
    return false
  }
}
const setFlag = (key) => {
  try {
    sessionStorage.setItem(key, '1')
  } catch {}
}

// A gentle nudge when one of your projects has been quiet for a few days
function CheckIn() {
  const { data, me, lastActive } = useStore()
  const [hidden, setHidden] = useState(() => readFlag('checkin-hidden'))

  const quiet = data.projects
    .filter((p) => p.userId === ME && p.status !== 'done')
    .map((p) => ({ project: p, days: daysSince(lastActive(p)) }))
    .filter((x) => x.days >= 3)
    .sort((a, b) => b.days - a.days)[0]
  if (!quiet || hidden) return null

  const { project, days } = quiet
  const next = project.milestones.find((m) => !m.done)
  const minutes = me.prefs?.time === 'lots' ? 20 : 10

  return (
    <div className="mb-5 flex max-w-2xl animate-rise items-center gap-4 rounded-3xl bg-spark-light/60 p-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card text-spark">
        <Icon name="bell" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold leading-snug">
          It’s been {days} days. {minutes} minutes on “{project.title}” today?
        </p>
        {next && <p className="mt-0.5 truncate text-sm text-ink/60">Next step: {next.text}</p>}
        <div className="mt-2 flex gap-2">
          <Link to={`/project/${project.id}`} className="btn-primary py-2">Let’s go</Link>
          <button
            onClick={() => {
              setHidden(true)
              setFlag('checkin-hidden')
            }}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/60 hover:bg-card hover:text-ink"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Feed() {
  const { data, me, userById } = useStore()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const query = (params.get('q') || '').trim().toLowerCase()
  const prefs = me.prefs

  // Ideas for the popup: matching your interests and budget from the welcome quiz, if you took it
  const ideaPool = useMemo(() => {
    const allowed = { free: ['free'], cheap: ['free', 'cheap'] }[prefs?.budget]
    const fits = IDEAS.filter((i) => (!allowed || allowed.includes(i.cost)) && (!prefs?.interests?.length || prefs.interests.includes(i.category)))
    return fits.length ? fits : IDEAS
  }, [prefs])
  const [idea, setIdea] = useState(() => ideaPool[Math.floor(Math.random() * ideaPool.length)])
  // Closing the idea popup hides it until the app is opened again
  const [showIdea, setShowIdea] = useState(() => !readFlag('idea-closed'))
  // The idea popup waits until you've scrolled a bit, so it never covers the top of the page
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => window.scrollY > 500 && setScrolled(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const closeIdea = () => {
    setShowIdea(false)
    setFlag('idea-closed')
  }

  // Newest first, with posts about your interests given a few days' head start
  const posts = useMemo(() => {
    const boost = (p) => p.createdAt + (prefs?.interests?.includes(p.category) ? 3 * 864e5 : 0)
    return [...data.posts]
      .sort((a, b) => boost(b) - boost(a))
      .filter((p) => !query || `${p.title} ${p.caption} ${cat(p.category).label} ${userById(p.userId).name}`.toLowerCase().includes(query))
  }, [data.posts, query, userById, prefs])

  const shuffleIdea = () => {
    if (ideaPool.length < 2) return
    let next = idea
    while (next === idea) next = ideaPool[Math.floor(Math.random() * ideaPool.length)]
    setIdea(next)
  }

  return (
    <div className="pt-2">
      {query ? (
        <p className="mb-4 px-1 text-sm text-ink/60">
          {posts.length} {posts.length === 1 ? 'result' : 'results'} for “{params.get('q')}”
        </p>
      ) : (
        <>
          <CheckIn />
        </>
      )}

      <Masonry key={query} posts={posts} empty="No posts found. Try another search." />

      {showIdea && scrolled && (
        <div className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center px-4 md:bottom-6">
          <div className="card pointer-events-auto relative flex w-full max-w-md animate-rise items-center gap-4 p-4 pr-11 shadow-pop">
            <button onClick={closeIdea} className="absolute right-3 top-3 rounded-full p-1.5 text-ink/50 hover:bg-mist hover:text-ink" aria-label="Close">
              <Icon name="x" className="h-4 w-4" />
            </button>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-spark-light text-spark">
              <Icon name="sparkles" filled className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-ink/50">Need a spark? · {cat(idea.category).label}</p>
              <p className="font-semibold leading-snug">{idea.title}</p>
              <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] font-semibold">
                <span className="rounded-full bg-mist px-2 py-0.5">{COST_LABEL[idea.cost]}</span>
                {idea.noGear && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-900">Nothing to buy</span>}
              </div>
              <div className="mt-1.5 flex gap-4 text-sm font-semibold">
                <button onClick={() => navigate('/projects', { state: { idea } })} className="text-spark hover:text-spark-dark">Start this</button>
                <button onClick={shuffleIdea} className="text-ink/50 hover:text-ink">Another idea</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

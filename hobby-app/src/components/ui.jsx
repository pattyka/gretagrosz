import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { cat, imgSrc, initials } from '../data'

const PATHS = {
  home: (<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></>),
  explore: (<><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" /></>),
  projects: (<><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8M13 12h8M13 18h8" /></>),
  plus: <path d="M12 5v14M5 12h14" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>),
  send: (<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></>),
  lock: (<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
  globe: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
  image: (<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" /></>),
  trash: <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />,
  search: (<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>),
  back: <path d="M19 12H5M12 19l-7-7 7-7" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  check: <path d="M20 6 9 17l-5-5" />,
  heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  snow: <path d="M2 12h20M12 2v20m8-4-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />,
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
  bell: (<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>),
  chevron: <path d="m6 9 6 6 6-6" />,
  play: (<><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20v-.5A5.5 5.5 0 0 1 8 14h2a5.5 5.5 0 0 1 5.5 5.5v.5" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5 5 0 0 1 4 5v1" /></>),
  external: <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />,
  trophy: (<><path d="M6 9H4a2 2 0 0 1 0-4h2M18 9h2a2 2 0 0 0 0-4h-2" /><path d="M6 3h12v6a6 6 0 0 1-12 0z" /><path d="M9 21h6M12 15v6" /></>),
  sparkles: <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />,
}

export function Icon({ name, className = 'h-5 w-5', filled = false }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-8 w-8" />
      <span className="hidden text-xl font-extrabold tracking-tight sm:inline">blank</span>
    </span>
  )
}

const SIZES = { xs: 'h-6 w-6 text-[10px]', sm: 'h-8 w-8 text-xs', md: 'h-11 w-11 text-sm', lg: 'h-28 w-28 text-3xl' }

export function Avatar({ user, size = 'sm', link = false }) {
  const el = user.photo ? (
    <img src={user.photo} alt="" className={`${SIZES[size]} shrink-0 rounded-full object-cover`} />
  ) : (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-zinc-800 ${SIZES[size]}`} style={{ background: user.color }}>
      {initials(user.name)}
    </span>
  )
  return link ? <Link to={`/u/${user.handle}`}>{el}</Link> : el
}

// A photo with a grey placeholder while it loads, or a coloured text tile if there is no photo
export function Cover({ post, w = 600, rounded = 'rounded-2xl', className = '' }) {
  const [loaded, setLoaded] = useState(false)
  if (!post.image) {
    return (
      <div className={`flex aspect-square w-full items-center justify-center p-6 ${cat(post.category).tint} ${rounded} ${className}`}>
        <p className="line-clamp-5 text-center text-xl font-bold leading-tight tracking-tight">{post.title || 'Your title'}</p>
      </div>
    )
  }
  return (
    <div className={`relative w-full overflow-hidden bg-mist ${loaded ? '' : 'animate-pulse'} ${rounded} ${className}`} style={{ paddingBottom: `${(post.ratio || 1) * 100}%` }}>
      <img
        src={imgSrc(post.image, w)}
        alt={post.title}
        loading="lazy"
        ref={(el) => el?.complete && el.naturalWidth && setLoaded(true)}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export const likeCount = (post) => post.likes + post.likedBy.length

// Links to a post open it as a popup over the current page
export function usePostLink() {
  const location = useLocation()
  const background = location.state?.background || location
  return (id) => ({ to: `/post/${id}`, state: { background } })
}

export function PostCard({ post }) {
  const { userById, isSaved, actions } = useStore()
  const postLink = usePostLink()
  const u = userById(post.userId)
  const saved = isSaved(post.id)
  return (
    <div className="group animate-fade">
      <div className="relative">
        <Link {...postLink(post.id)} className="block">
          <Cover post={post} />
          <div className="absolute inset-0 rounded-2xl bg-black/0 transition group-hover:bg-black/35" />
          {post.kind === 'first' && (
            <span className="absolute left-2.5 top-2.5 rounded-full bg-card/95 px-2.5 py-1 text-[11px] font-semibold transition group-hover:opacity-0">First attempt</span>
          )}
          <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1.5 text-xs font-semibold opacity-0 transition group-hover:opacity-100">
            <Icon name="heart" filled className="h-3.5 w-3.5 text-red-500" /> {likeCount(post)}
          </span>
        </Link>
        <button
          onClick={() => actions.quickSave(post.id)}
          className={`absolute right-3 top-3 rounded-full px-4 py-2.5 text-sm font-semibold opacity-0 transition group-hover:opacity-100 ${saved ? 'bg-ink text-card' : 'bg-spark text-white hover:bg-spark-dark'}`}
        >
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
      <div className="px-1 pt-2">
        <Link {...postLink(post.id)} className="line-clamp-2 text-sm font-semibold leading-snug">
          {post.title}
        </Link>
        <Link to={`/u/${u.handle}`} className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/70 hover:text-ink">
          <Avatar user={u} size="xs" />
          <span className="truncate">{u.name}</span>
        </Link>
      </div>
    </div>
  )
}

// Fits as many ~240px columns as the space allows (at least 2)
function useColumnCount(ref) {
  const [n, setN] = useState(() => Math.max(2, Math.floor((window.innerWidth - 16) / 256)))
  useEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([e]) => setN(Math.max(2, Math.floor((e.contentRect.width + 16) / 256))))
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ref])
  return n
}

// Pinterest-style grid: posts go left-to-right into the shortest column, more load as you scroll
export function Masonry({ posts, empty = 'Nothing here yet.', pageSize = 18 }) {
  const box = useRef(null)
  const n = useColumnCount(box)
  const [limit, setLimit] = useState(pageSize)
  const sentinel = useRef(null)
  const hasMore = posts.length > limit

  useEffect(() => {
    if (!hasMore || !sentinel.current) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setLimit((l) => l + pageSize), { rootMargin: '800px' })
    io.observe(sentinel.current)
    return () => io.disconnect()
  }, [hasMore, limit, pageSize])

  if (!posts.length) return <p ref={box} className="py-16 text-center text-ink/50">{empty}</p>

  const cols = Array.from({ length: n }, () => [])
  const heights = Array(n).fill(0)
  for (const p of posts.slice(0, limit)) {
    const i = heights.indexOf(Math.min(...heights))
    cols[i].push(p)
    heights[i] += (p.image ? p.ratio || 1 : 1) + 0.3
  }

  return (
    <div ref={box}>
      <div className="flex items-start gap-3 sm:gap-4">
        {cols.map((col, i) => (
          <div key={i} className="flex min-w-0 flex-1 flex-col gap-5">
            {col.map((p) => <PostCard key={p.id} post={p} />)}
          </div>
        ))}
      </div>
      {hasMore && (
        <div ref={sentinel} className="mt-5 flex gap-3 sm:gap-4" aria-hidden="true">
          {Array.from({ length: n }, (_, i) => (
            <div key={i} className="h-48 flex-1 animate-pulse rounded-2xl bg-mist" />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProgressBar({ value, className = '' }) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-mist ${className}`}>
      <div className="h-full rounded-full bg-ink transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  )
}

export function VisibilityBadge({ visibility, className = '' }) {
  const priv = visibility === 'private'
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-[11px] font-semibold text-ink ${className}`}>
      <Icon name={priv ? 'lock' : 'globe'} className="h-3 w-3" />
      {priv ? 'Private' : 'Public'}
    </span>
  )
}

export function Modal({ onClose, children, className = '' }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-50 animate-fade overflow-y-auto bg-black/60" onClick={onClose}>
      <div className={`mx-auto my-0 min-h-full sm:my-8 sm:min-h-0 ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

const RESOURCE_ICON = { youtube: 'play', site: 'globe', community: 'users' }
const RESOURCE_TINT = { youtube: 'bg-red-50 text-red-600', site: 'bg-sky-50 text-sky-700', community: 'bg-orange-50 text-orange-600' }

export function ResourceList({ resources, className = 'bg-card' }) {
  return (
    <ul className="space-y-2">
      {resources.map((r) => (
        <li key={r.url}>
          <a href={r.url} target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-3 rounded-2xl p-2.5 pr-3 transition hover:shadow-soft ${className}`}>
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${RESOURCE_TINT[r.kind]}`}>
              <Icon name={RESOURCE_ICON[r.kind]} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{r.title}</span>
              <span className="block truncate text-xs text-ink/55">{r.note}</span>
            </span>
            <Icon name="external" className="h-4 w-4 shrink-0 text-ink/30 group-hover:text-ink" />
          </a>
        </li>
      ))}
    </ul>
  )
}

// A short burst of confetti, e.g. when a step is ticked off
const CONFETTI_COLORS = ['#F4644F', '#F59E0B', '#10B981', '#EC4899', '#3B82F6']
export function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    delay: `${(i % 7) * 0.04}s`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotate: `${(i * 47) % 360}deg`,
  }))
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-0 overflow-visible" aria-hidden="true">
      {pieces.map((p, i) => (
        <span key={i} className="confetti" style={{ left: p.left, animationDelay: p.delay, background: p.color, transform: `rotate(${p.rotate})` }} />
      ))}
    </div>
  )
}

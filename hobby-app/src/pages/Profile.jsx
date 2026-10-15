import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore, ME } from '../store'
import { AVATAR_COLORS, cat, compressImage, imgSrc } from '../data'
import { Avatar, Icon, likeCount, usePostLink } from '../components/ui'
import { ProjectCard } from './Projects'

function EditProfile({ me, onDone }) {
  const { actions } = useStore()
  const fileRef = useRef(null)
  const [form, setForm] = useState({ name: me.name, bio: me.bio, color: me.color, photo: me.photo, passions: me.passions.join(', ') })
  const save = (e) => {
    e.preventDefault()
    actions.updateMe({
      name: form.name.trim() || 'You',
      bio: form.bio.trim(),
      color: form.color,
      photo: form.photo,
      // No duplicates, ignoring capital letters ("Maths" and "maths" count as the same)
      passions: form.passions
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .filter((p, i, all) => all.findIndex((q) => q.toLowerCase() === p.toLowerCase()) === i),
    })
    onDone()
  }
  return (
    <form onSubmit={save} className="card mx-auto mt-6 max-w-md animate-rise space-y-4 p-6 text-left">
      <div className="flex items-center gap-4">
        <Avatar user={{ ...me, ...form }} size="md" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={async (e) => e.target.files?.[0] && setForm({ ...form, photo: (await compressImage(e.target.files[0], 300)).src })} />
        <button type="button" onClick={() => fileRef.current.click()} className="btn-ghost">Change photo</button>
        {form.photo && <button type="button" onClick={() => setForm({ ...form, photo: null })} className="text-sm font-semibold text-ink/60 hover:text-ink">Remove</button>}
      </div>
      {!form.photo && (
        <div className="flex flex-wrap gap-2">
          {AVATAR_COLORS.map((c) => (
            <button key={c} type="button" onClick={() => setForm({ ...form, color: c })} className={`h-8 w-8 rounded-full ${form.color === c ? 'ring-2 ring-ink ring-offset-2' : ''}`} style={{ background: c }} aria-label="Avatar colour" />
          ))}
        </div>
      )}
      <input className="input" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <textarea className="input" placeholder="About you" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
      <input className="input" placeholder="Passions, separated by commas" value={form.passions} onChange={(e) => setForm({ ...form, passions: e.target.value })} />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onDone} className="btn-ghost">Cancel</button>
        <button className="btn-primary">Save</button>
      </div>
    </form>
  )
}

// Light, dark, or follow the device ("Auto")
function ThemePicker() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('blank-theme') || 'auto'
    } catch {
      return 'auto'
    }
  })
  const choose = (t) => {
    setTheme(t)
    try {
      if (t === 'auto') localStorage.removeItem('blank-theme')
      else localStorage.setItem('blank-theme', t)
    } catch {}
    if (t === 'auto') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = t
  }
  return (
    <div className="mx-auto flex w-fit gap-1 rounded-full bg-mist p-1 text-sm font-semibold" role="group" aria-label="Appearance">
      {[
        ['auto', 'Auto', null],
        ['light', 'Light', 'sun'],
        ['dark', 'Dark', 'moon'],
      ].map(([v, label, icon]) => (
        <button
          key={v}
          onClick={() => choose(v)}
          aria-pressed={theme === v}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 transition ${theme === v ? 'bg-card shadow-sm' : 'text-ink/55 hover:text-ink'}`}
        >
          {icon && <Icon name={icon} className="h-4 w-4" />}
          {label}
        </button>
      ))}
    </div>
  )
}

// The same grid and square shape as the project cards
const SQUARE_GRID = 'grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-4'

// A post as a square photo with its title underneath
function PostSquare({ post }) {
  const postLink = usePostLink()
  return (
    <Link {...postLink(post.id)} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        {post.image ? (
          <img src={imgSrc(post.image, 500)} alt={post.title} className="aspect-square w-full bg-mist object-cover" />
        ) : (
          <div className={`flex aspect-square items-center justify-center p-4 text-center text-base font-bold leading-tight sm:text-xl ${cat(post.category).tint}`}>{post.title}</div>
        )}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>
      <div className="flex items-start justify-between gap-2 px-1 pt-2 sm:pt-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug sm:text-base">{post.title}</h3>
        <span className="flex shrink-0 items-center gap-1 pt-0.5 text-xs font-semibold text-ink/60">
          <Icon name="heart" className="h-3.5 w-3.5" /> {likeCount(post)}
        </span>
      </div>
    </Link>
  )
}

// A board preview: a square of four saved photos
function BoardCard({ board }) {
  const { data } = useStore()
  const imgs = board.postIds.map((id) => data.posts.find((p) => p.id === id)?.image).filter(Boolean)
  const tile = (i, cls) => (imgs[i] ? <img src={imgSrc(imgs[i], 400)} alt="" className={`h-full w-full object-cover ${cls}`} /> : <div className={`h-full w-full bg-mist ${cls}`} />)
  return (
    <Link to={`/board/${board.id}`} className="group block">
      <div className="grid aspect-square grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-2xl transition group-hover:opacity-90">
        {tile(0)}
        {tile(1)}
        {tile(2)}
        {tile(3)}
      </div>
      <p className="px-1 pt-2 text-sm font-semibold leading-snug sm:pt-3 sm:text-base">{board.name}</p>
      <p className="px-1 text-xs text-ink/55">{board.postIds.length} {board.postIds.length === 1 ? 'post' : 'posts'}</p>
    </Link>
  )
}

export default function Profile() {
  const { handle } = useParams()
  const { data, actions, canSee, isBuddy } = useStore()
  const navigate = useNavigate()
  const [tab, setTab] = useState('posts')
  const [editing, setEditing] = useState(false)
  const [boardName, setBoardName] = useState('')

  const user = data.users.find((u) => u.handle === handle)
  if (!user) return <p className="py-20 text-center text-ink/50">User not found.</p>

  const isMe = user.id === ME
  const following = data.following.includes(user.id)
  const posts = data.posts.filter((p) => p.userId === user.id).sort((a, b) => b.createdAt - a.createdAt)
  const projects = data.projects.filter((p) => p.userId === user.id && canSee(p))
  const likes = posts.reduce((n, p) => n + likeCount(p), 0)
  const tabs = isMe ? ['posts', 'projects', 'saved'] : ['posts', 'projects']

  const newBoard = (e) => {
    e.preventDefault()
    if (!boardName.trim()) return
    actions.createBoard(boardName.trim())
    setBoardName('')
  }

  return (
    <div className="pt-6">
      <section className="mx-auto max-w-xl text-center">
        <div className="flex justify-center"><Avatar user={user} size="lg" /></div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{user.name}</h1>
        <p className="mt-1 text-sm text-ink/55">@{user.handle}</p>
        {user.bio && <p className="mt-3 text-ink/80">{user.bio}</p>}
        <p className="mt-3 text-sm font-semibold">
          {posts.length} posts · {projects.length} projects · {likes} likes
        </p>
        {!isMe && isBuddy(user.id) && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-spark-light px-3 py-1.5 text-sm font-semibold text-spark-dark">
            <Icon name="users" className="h-4 w-4" /> Your buddy — you can see each other’s projects
          </p>
        )}
        {user.passions.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {user.passions.map((p) => <span key={p} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold">{p}</span>)}
          </div>
        )}

        <div className="mt-5 flex justify-center gap-2">
          {isMe ? (
            !editing && (
              <>
                <button onClick={() => setEditing(true)} className="btn-ghost">Edit profile</button>
                <button onClick={actions.retakeOnboarding} className="btn-ghost">Find new ideas</button>
              </>
            )
          ) : (
            <>
              <button onClick={() => navigate(`/chat/${actions.openConversation(user.id)}`)} className="btn-ghost">Message</button>
              <button onClick={() => actions.toggleFollow(user.id)} className={following ? 'btn-dark' : 'btn-primary'}>
                {following ? 'Following' : 'Follow'}
              </button>
            </>
          )}
        </div>
        {editing && <EditProfile me={user} onDone={() => setEditing(false)} />}
      </section>

      <div className="mb-6 mt-10 flex justify-center gap-6">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`border-b-[3px] pb-2 text-sm font-semibold capitalize transition ${tab === t ? 'border-ink' : 'border-transparent text-ink/60 hover:text-ink'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'posts' &&
        (posts.length ? (
          <div className={SQUARE_GRID}>
            {posts.map((p) => <PostSquare key={p.id} post={p} />)}
          </div>
        ) : (
          <p className="py-16 text-center text-ink/50">{isMe ? 'You haven’t shared anything yet.' : 'No posts yet.'}</p>
        ))}

      {tab === 'projects' &&
        (projects.length ? (
          <div className={SQUARE_GRID}>
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <p className="py-16 text-center text-ink/50">No public projects yet.</p>
        ))}

      {tab === 'saved' && (
        <div>
          <form onSubmit={newBoard} className="mx-auto mb-8 flex max-w-sm gap-2">
            <input className="input rounded-full" placeholder="New board name" value={boardName} onChange={(e) => setBoardName(e.target.value)} />
            <button className="btn-dark shrink-0" disabled={!boardName.trim()}>Create board</button>
          </form>
          <div className={SQUARE_GRID}>
            {data.boards.map((b) => <BoardCard key={b.id} board={b} />)}
          </div>
          {!data.boards.length && <p className="py-10 text-center text-ink/50">No boards yet. Save posts you love to find them later.</p>}
        </div>
      )}

      {isMe && (
        <div className="mt-20">
          <p className="mb-2 text-center text-xs font-semibold text-ink/50">Appearance</p>
          <ThemePicker />
        </div>
      )}

      {isMe && (
        <p className="mt-8 text-center text-xs text-ink/40">
          Everything is saved in this browser for now.{' '}
          <button onClick={() => confirm('Reset all data back to the demo content?') && actions.resetDemo()} className="underline hover:text-ink">
            Reset demo data
          </button>
        </p>
      )}
    </div>
  )
}

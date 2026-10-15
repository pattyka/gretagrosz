import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore, ME } from '../store'
import { KINDS, cat, imgSrc, timeAgo } from '../data'
import { TINY_STEP, guideFor, stepsFor } from '../guides'
import { Avatar, Cover, Icon, Masonry, ResourceList, likeCount } from '../components/ui'

// "Save" button with a menu to pick (or create) a board
function SaveMenu({ postId }) {
  const { data, actions, isSaved } = useStore()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const ref = useRef(null)
  const saved = isSaved(postId)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const create = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    actions.createBoard(name.trim(), postId)
    setName('')
  }

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((v) => !v)} className={saved ? 'btn-dark' : 'btn-primary'}>
        {saved ? 'Saved' : 'Save'} <Icon name="chevron" className="h-4 w-4" />
      </button>
      {open && (
        <div className="card absolute right-0 top-12 z-20 w-72 animate-fade p-2 shadow-pop">
          <p className="px-3 pb-1 pt-2 text-center text-sm font-semibold">Save to board</p>
          <ul className="max-h-60 overflow-y-auto">
            {data.boards.map((b) => {
              const inBoard = b.postIds.includes(postId)
              return (
                <li key={b.id}>
                  <button onClick={() => actions.toggleSave(b.id, postId)} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium hover:bg-mist">
                    {b.name}
                    {inBoard ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-card"><Icon name="check" className="h-3.5 w-3.5" /></span>
                    ) : (
                      <span className="rounded-full bg-spark px-3 py-1 text-xs font-semibold text-white">Save</span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
          <form onSubmit={create} className="mt-1 flex gap-2 border-t border-ink/5 p-2">
            <input className="input py-2" placeholder="New board name" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="btn-ghost px-3" disabled={!name.trim()} aria-label="Create board"><Icon name="plus" className="h-4 w-4" /></button>
          </form>
        </div>
      )}
    </div>
  )
}

// A step-by-step plan for doing what this post shows, which can become a project in one tap.
// If the post comes from a finished project, you can copy the exact steps that person used.
function PlanCard({ post }) {
  const { data, actions, me, userById, canSee } = useStore()
  const navigate = useNavigate()
  const guide = guideFor(post)
  const project = data.projects.find((p) => p.id === post.projectId)
  const source = project && project.userId !== ME && project.status === 'done' && project.milestones.length > 0 && canSee(project) ? project : null
  const first = source && userById(source.userId).name.split(' ')[0]
  const [useTheirs, setUseTheirs] = useState(!!source)
  const plan =
    source && useTheirs
      ? { title: source.title, time: guide.time, cost: guide.cost, steps: source.milestones.map((m) => m.text), resources: source.resources?.length ? source.resources : guide.resources }
      : { ...guide, steps: stepsFor(guide, me.prefs?.level) }
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(plan.title)

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="mt-3 flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/15 p-3 text-sm font-semibold text-ink/70 transition hover:border-spark hover:text-spark"
      >
        <Icon name="sparkles" className="h-4 w-4" />
        {source ? `Inspired? Use ${first}’s steps to do this yourself` : 'Inspired? Get a step-by-step plan to do this yourself'}
      </button>
    )
  }

  const start = () => {
    const id = actions.addProject({
      title: title.trim() || plan.title,
      description: '',
      category: post.category,
      visibility: 'private',
      milestones: plan.steps.map((text, i) => ({ id: `m${Date.now()}${i}`, text, done: false })),
      resources: plan.resources,
      inspiredBy: post.id,
    })
    navigate(`/project/${id}`)
  }

  return (
    <div className="mt-3 animate-fade rounded-3xl bg-mist p-5">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-spark">
          <Icon name="sparkles" filled className="h-3.5 w-3.5" /> {source && useTheirs ? `The steps ${first} actually used — and finished!` : 'Your plan'}
        </p>
        <button onClick={() => setOpen(false)} className="rounded-full p-1 text-ink/50 hover:bg-card hover:text-ink" aria-label="Close plan">
          <Icon name="x" className="h-4 w-4" />
        </button>
      </div>
      <input className="mt-2 w-full rounded-xl bg-transparent text-lg font-bold tracking-tight outline-none focus:bg-card focus:px-2" value={title} onChange={(e) => setTitle(e.target.value)} aria-label="Project name" />
      <p className="text-xs text-ink/55">About {plan.time} · Cost: {plan.cost}</p>
      {source && (
        <div className="mt-3 grid grid-cols-2 gap-1 rounded-full bg-card p-1 text-xs font-semibold">
          {[
            [true, `${first}’s steps`],
            [false, 'Beginner plan'],
          ].map(([v, label]) => (
            <button key={label} onClick={() => setUseTheirs(v)} className={`rounded-full py-1.5 transition ${useTheirs === v ? 'bg-spark text-white' : 'text-ink/60 hover:text-ink'}`}>
              {label}
            </button>
          ))}
        </div>
      )}

      <ol className="mt-4 space-y-2.5">
        {plan.steps.map((step, i) => (
          <li key={step} className="flex gap-3 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card text-xs font-bold">{i + 1}</span>
            <span className="pt-0.5">
              {step}
              {step === TINY_STEP && <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">Do it today</span>}
            </span>
          </li>
        ))}
      </ol>

      <p className="mb-2 mt-5 text-xs font-semibold text-ink/60">Helpful to get started</p>
      <ResourceList resources={plan.resources} />

      <button onClick={start} className="btn-primary mt-5 w-full py-3">Start this project</button>
      <button
        onClick={() => navigate('/projects', { state: { idea: { title: title.trim() || plan.title, category: post.category } } })}
        className="mt-2 w-full rounded-full py-2.5 text-sm font-semibold text-ink/70 hover:bg-card hover:text-ink"
      >
        Don’t like my steps? Make your own
      </button>
    </div>
  )
}

// From day 1 to finished: the journal entries of the project behind a "Finished" post
function Journey({ project, post }) {
  const day = (t) => Math.floor((t - project.createdAt) / 864e5) + 1
  const entries = [...project.updates].sort((a, b) => a.createdAt - b.createdAt)
  return (
    <div className="mt-4">
      <p className="mb-2 text-sm font-semibold">The journey</p>
      <ol className="-mx-1 flex items-start gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
        {entries.map((u) => (
          <li key={u.id} className="w-32 shrink-0 rounded-2xl bg-mist p-2">
            {u.image && <img src={imgSrc(u.image, 300)} alt="" className="mb-2 aspect-square w-full rounded-xl object-cover" />}
            <p className="text-[11px] font-bold text-spark">Day {day(u.createdAt)}</p>
            <p className="line-clamp-3 text-xs">{u.text}</p>
          </li>
        ))}
        <li className="w-32 shrink-0 rounded-2xl bg-spark p-2 text-white">
          {post.image && <img src={imgSrc(post.image, 300)} alt="" className="mb-2 aspect-square w-full rounded-xl object-cover" />}
          <p className="text-[11px] font-bold">Finished!</p>
          <p className="text-xs">Day {day(post.createdAt)}</p>
        </li>
      </ol>
    </div>
  )
}

export default function PostPage({ modal = false }) {
  const { id } = useParams()
  const { data, actions, userById, canSee } = useStore()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  const [popKey, setPopKey] = useState(0)

  const post = data.posts.find((p) => p.id === id)
  if (!post) return <p className="rounded-3xl bg-card py-20 text-center text-ink/50">This post no longer exists.</p>

  const author = userById(post.userId)
  const mine = post.userId === ME
  const liked = post.likedBy.includes(ME)
  const following = data.following.includes(author.id)
  const project = data.projects.find((p) => p.id === post.projectId)
  const showProject = project && canSee(project)
  // People who started their own project because of this post
  const inspired = (post.inspired || 0) + data.projects.filter((p) => p.inspiredBy === post.id).length
  const more = data.posts.filter((p) => p.id !== post.id && (p.category === post.category || p.userId === post.userId))

  const like = () => {
    actions.toggleLike(post.id)
    setPopKey((k) => k + 1)
  }
  const submitComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    actions.addComment(post.id, comment.trim())
    setComment('')
  }

  return (
    <div className={modal ? '' : 'pt-2'}>
      <article className="relative grid grid-cols-1 overflow-hidden rounded-none bg-card shadow-soft sm:rounded-[2rem] md:grid-cols-2">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft hover:bg-mist md:hidden"
          aria-label="Back"
        >
          <Icon name="back" className="h-5 w-5" />
        </button>

        <div className="p-0 md:p-4">
          <Cover post={post} w={1000} rounded="md:rounded-3xl" />
        </div>

        <div className="flex min-w-0 flex-col p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <button onClick={() => navigate(-1)} className="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-mist md:flex" aria-label="Back">
                <Icon name="back" className="h-5 w-5" />
              </button>
              <button
                onClick={like}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-semibold transition hover:bg-mist ${liked ? 'text-red-500' : ''}`}
                aria-label={liked ? 'Unlike' : 'Like'}
              >
                <span key={popKey} className="inline-block animate-pop"><Icon name="heart" filled={liked} className="h-5 w-5" /></span>
                {likeCount(post)}
              </button>
            </div>
            <SaveMenu postId={post.id} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
            {post.kind && <span className="rounded-full bg-mist px-3 py-1.5">{KINDS[post.kind].label}</span>}
            <span className="rounded-full bg-mist px-3 py-1.5">{cat(post.category).label}</span>
          </div>

          <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight">{post.title}</h1>
          {post.caption && <p className="mt-3 whitespace-pre-line text-ink/80">{post.caption}</p>}
          {post.kind === 'made' && showProject && project.updates.length > 0 && <Journey project={project} post={post} />}
          {inspired > 0 && (
            <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-spark">
              <Icon name="sparkles" filled className="h-4 w-4" />
              {inspired} {inspired === 1 ? 'person' : 'people'} started a project because of this post
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link to={`/u/${author.handle}`} className="flex min-w-0 items-center gap-3">
              <Avatar user={author} size="md" />
              <div className="min-w-0">
                <p className="truncate font-semibold">{author.name}</p>
                <p className="text-xs text-ink/50">{timeAgo(post.createdAt)}</p>
              </div>
            </Link>
            {!mine && (
              <div className="flex shrink-0 gap-2">
                <button onClick={() => navigate(`/chat/${actions.openConversation(author.id)}`)} className="btn-ghost">Message</button>
                <button onClick={() => actions.toggleFollow(author.id)} className={following ? 'btn-dark' : 'btn-ghost'}>
                  {following ? 'Following' : 'Follow'}
                </button>
              </div>
            )}
          </div>

          {showProject && (
            <Link to={`/project/${project.id}`} className="mt-5 flex items-center gap-3 rounded-2xl bg-mist p-3 transition hover:bg-ink/10">
              {project.cover && <img src={`${project.cover}?w=120&q=70&auto=format&fit=crop`} alt="" className="h-12 w-12 rounded-xl object-cover" />}
              <div className="min-w-0">
                <p className="text-xs text-ink/60">Part of the project</p>
                <p className="truncate font-semibold">{project.title}</p>
              </div>
            </Link>
          )}

          {!mine && <PlanCard key={post.id} post={post} />}

          <div className="mt-6 flex-1 border-t border-ink/10 pt-5">
            <h2 className="mb-3 font-semibold">{post.comments.length ? `${post.comments.length} comment${post.comments.length > 1 ? 's' : ''}` : 'Comments'}</h2>
            <ul className="space-y-3">
              {post.comments.map((c) => {
                const u = userById(c.userId)
                return (
                  <li key={c.id} className="flex gap-2.5 text-sm">
                    <Avatar user={u} size="sm" link />
                    <div>
                      <p>
                        <Link to={`/u/${u.handle}`} className="font-semibold">{u.name}</Link> {c.text}
                      </p>
                      <p className="text-xs text-ink/45">{timeAgo(c.createdAt)}</p>
                    </div>
                  </li>
                )
              })}
              {!post.comments.length && <li className="text-sm text-ink/50">No comments yet. Say something kind!</li>}
            </ul>
            <form onSubmit={submitComment} className="mt-4 flex gap-2">
              <input className="input rounded-full" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
              <button className="btn-primary" disabled={!comment.trim()}>Post</button>
            </form>
          </div>

          {post.credit && <p className="mt-6 text-xs text-ink/40">Demo photo by {post.credit} on Unsplash</p>}

          {mine && (
            <button
              onClick={() => {
                if (confirm('Delete this post?')) {
                  actions.deletePost(post.id)
                  navigate('/')
                }
              }}
              className="mt-4 flex items-center gap-1.5 self-start text-sm font-semibold text-red-600 hover:underline"
            >
              <Icon name="trash" className="h-4 w-4" /> Delete post
            </button>
          )}
        </div>
      </article>

      {more.length > 0 && (
        <section className={`mt-8 ${modal ? 'rounded-t-[2rem] bg-card px-3 pb-8 pt-6 sm:px-4' : ''}`}>
          <h2 className="mb-4 text-center text-xl font-bold">More like this</h2>
          <Masonry key={post.id} posts={more} pageSize={12} />
        </section>
      )}
    </div>
  )
}

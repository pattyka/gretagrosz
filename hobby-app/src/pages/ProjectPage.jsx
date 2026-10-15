import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore, ME } from '../store'
import { cat, compressImage, imgSrc, progressOf, timeAgo } from '../data'
import { Avatar, Confetti, Icon, Masonry, Modal, ProgressBar, ResourceList, VisibilityBadge, usePostLink } from '../components/ui'
import { useProjectCover } from './Projects'

function UpdateForm({ project }) {
  const { actions } = useStore()
  const fileRef = useRef(null)
  const [text, setText] = useState('')
  const [photo, setPhoto] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    actions.addUpdate(project.id, { text: text.trim(), image: photo?.src || null })
    setText('')
    setPhoto(null)
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-mist p-4">
      <textarea className="input min-h-[80px] bg-card" placeholder="What did you work on? Any wins or struggles?" value={text} onChange={(e) => setText(e.target.value)} />
      {photo && (
        <div className="relative mt-2 w-32">
          <img src={photo.src} alt="" className="rounded-xl" />
          <button type="button" onClick={() => setPhoto(null)} className="absolute right-1 top-1 rounded-full bg-card p-1 shadow" aria-label="Remove photo">
            <Icon name="x" className="h-3 w-3" />
          </button>
        </div>
      )}
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={async (e) => e.target.files?.[0] && setPhoto(await compressImage(e.target.files[0]))} />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => fileRef.current.click()} className="btn bg-card hover:bg-ink/5">
          <Icon name="image" className="h-4 w-4" /> Photo
        </button>
        <button className="btn-primary" disabled={!text.trim()}>Add update</button>
      </div>
    </form>
  )
}

// Finishing a project: choose who sees it, and optionally add a photo and a few words
function FinishModal({ project, onClose }) {
  const { actions } = useStore()
  const fileRef = useRef(null)
  const [visibility, setVisibility] = useState(project.visibility)
  const [photo, setPhoto] = useState(null)
  const [bio, setBio] = useState(project.description || '')

  const submit = (e) => {
    e.preventDefault()
    const text = bio.trim()
    actions.updateProject(project.id, { status: 'done', visibility, description: text, ...(photo && { cover: photo.src }) })
    if (visibility === 'public') {
      actions.addPost({
        title: `Finished: ${project.title}`,
        caption: text,
        image: photo?.src || null,
        ratio: photo?.ratio || 1,
        category: project.category,
        kind: 'made',
        projectId: project.id,
      })
    }
    onClose()
  }

  const options = [
    { v: 'public', icon: 'globe', t: 'Public', d: 'Show it on your profile and the feed' },
    { v: 'private', icon: 'lock', t: 'Private', d: 'Keep it just for you' },
  ]

  return (
    <Modal onClose={onClose} className="max-w-lg px-3 py-6 sm:px-0 sm:py-0">
      <form onSubmit={submit} className="animate-rise rounded-[2rem] bg-card p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-spark-light text-spark">
            <Icon name="trophy" className="h-7 w-7" />
          </span>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-ink/60 hover:bg-mist hover:text-ink" aria-label="Close">
            <Icon name="x" />
          </button>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">You did it!</h2>
        <p className="text-ink/60">You finished “{project.title}”. That’s a big deal.</p>

        <p className="mb-2 mt-6 text-sm font-semibold">Who can see it?</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {options.map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => setVisibility(o.v)}
              className={`flex items-start gap-3 rounded-2xl border-2 p-3 text-left transition ${visibility === o.v ? 'border-spark bg-spark-light/50' : 'border-mist hover:border-ink/20'}`}
            >
              <Icon name={o.icon} className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                <span className="block text-sm font-semibold">{o.t}</span>
                <span className="block text-xs text-ink/60">{o.d}</span>
              </span>
            </button>
          ))}
        </div>

        {visibility === 'public' && project.updates.length > 0 && (
          <p className="mt-3 rounded-2xl bg-mist p-3 text-xs text-ink/70">Your post will show your journey too: your journal entries from day 1 to today.</p>
        )}

        <p className="mb-2 mt-6 text-sm font-semibold">Add a photo <span className="font-normal text-ink/50">(optional)</span></p>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={async (e) => e.target.files?.[0] && setPhoto(await compressImage(e.target.files[0]))} />
        {photo ? (
          <div className="relative w-40">
            <img src={photo.src} alt="" className="rounded-2xl" />
            <button type="button" onClick={() => setPhoto(null)} className="absolute right-2 top-2 rounded-full bg-card p-1.5 shadow-soft" aria-label="Remove photo">
              <Icon name="x" className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => fileRef.current.click()} className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/20 bg-mist py-6 text-sm font-semibold text-ink/60 hover:border-ink/40">
            <Icon name="image" className="h-5 w-5" /> Choose a photo of what you made
          </button>
        )}

        <p className="mb-2 mt-6 text-sm font-semibold">Say something about it <span className="font-normal text-ink/50">(optional)</span></p>
        <textarea className="input min-h-[90px]" placeholder="How did it go? What are you proud of?" value={bio} onChange={(e) => setBio(e.target.value)} />

        <button className="btn-primary mt-6 w-full py-3">Finish project</button>
      </form>
    </Modal>
  )
}

// One big card with just the next thing to do — fewer decisions, more doing
function NextStep({ project, onFinish }) {
  const { actions } = useStore()
  const [wins, setWins] = useState(0)
  const [first, setFirst] = useState('')
  const next = project.milestones.find((m) => !m.done)
  const doneCount = project.milestones.filter((m) => m.done).length

  const done = () => {
    actions.toggleMilestone(project.id, next.id)
    setWins((n) => n + 1)
  }
  const addFirst = (e) => {
    e.preventDefault()
    if (!first.trim()) return
    actions.addMilestone(project.id, first.trim())
    setFirst('')
  }

  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl bg-spark p-6 text-white sm:p-8">
      {wins > 0 && <Confetti key={wins} />}
      {next ? (
        <>
          <p className="text-sm font-semibold text-white/70">
            Your next step · {doneCount} of {project.milestones.length} done
          </p>
          <p key={next.id} className="mt-2 animate-rise text-2xl font-bold leading-snug sm:text-3xl">{next.text}</p>
          {wins > 0 && <p key={`w${wins}`} className="mt-2 animate-fade text-sm font-medium text-white/85">Nice one! One step closer.</p>}
          <button onClick={done} className="btn mt-5 bg-card px-6 py-3 text-base text-spark hover:bg-card/90">
            <Icon name="check" className="h-5 w-5" /> Done!
          </button>
        </>
      ) : project.milestones.length ? (
        <>
          <p className="text-sm font-semibold text-white/70">All {project.milestones.length} steps done</p>
          <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">You did every step. Ready to call it finished?</p>
          <button onClick={onFinish} className="btn mt-5 bg-card px-6 py-3 text-base text-spark hover:bg-card/90">
            <Icon name="trophy" className="h-5 w-5" /> Mark as finished
          </button>
        </>
      ) : (
        <>
          <p className="text-sm font-semibold text-white/70">No steps yet</p>
          <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">What’s one small thing you could do in 10 minutes?</p>
          <form onSubmit={addFirst} className="mt-5 flex gap-2">
            <input className="input rounded-full border-0 bg-white text-zinc-900" placeholder="e.g. Watch one beginner video" value={first} onChange={(e) => setFirst(e.target.value)} />
            <button className="btn shrink-0 bg-white text-spark hover:bg-white/90" disabled={!first.trim()}>Add</button>
          </form>
        </>
      )}
    </section>
  )
}

// Doing it with someone: suggest people into the same thing, and show your buddy once you have one
function Buddies({ project }) {
  const { data, userById, actions, isBuddy } = useStore()
  const navigate = useNavigate()
  const label = cat(project.category).label
  const current = data.buddies.find((b) => b.projectId === project.id)

  if (current) {
    const u = userById(current.userId)
    return (
      <section className="mt-4 flex items-start gap-4 rounded-3xl bg-mist p-5">
        <Avatar user={u} size="md" link />
        <div className="min-w-0 flex-1">
          <p className="font-semibold">{u.name} is your buddy for this project</p>
          <p className="text-sm text-ink/60">You can see each other’s progress. Check in once a week!</p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => navigate(`/chat/${actions.openConversation(u.id)}`)} className="btn-dark">Message</button>
            <button onClick={() => actions.removeBuddy(u.id)} className="btn bg-card hover:bg-ink/5">Remove</button>
          </div>
        </div>
      </section>
    )
  }

  const others = data.users.filter((u) => u.id !== ME && !isBuddy(u.id))
  const match = others.filter((u) => u.passions.includes(label) || data.projects.some((p) => p.userId === u.id && p.category === project.category))
  const list = (match.length ? match : others).slice(0, 3)
  if (!list.length) return null

  return (
    <section className="mt-4 rounded-3xl bg-mist p-5">
      <p className="flex items-center gap-2 font-semibold">
        <Icon name="users" className="h-5 w-5" /> Team up with a buddy
      </p>
      <p className="text-sm text-ink/60">
        {match.length ? `${match.length} ${match.length === 1 ? 'person is' : 'people are'} into ${label.toLowerCase()} too. ` : ''}
        Buddies see each other’s unfinished projects and keep each other going.
      </p>
      <ul className="mt-3 space-y-2">
        {list.map((u) => (
          <li key={u.id} className="flex items-center gap-3 rounded-2xl bg-card p-2.5">
            <Avatar user={u} size="md" link />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{u.name}</p>
              <p className="truncate text-xs text-ink/55">{u.bio}</p>
            </div>
            <button onClick={() => actions.addBuddy(u.id, project)} className="btn-primary shrink-0 py-2">Team up</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const { data, actions, userById, canSee, streak } = useStore()
  const navigate = useNavigate()
  const [step, setStep] = useState('')
  const [finishing, setFinishing] = useState(false)
  const postLink = usePostLink()

  const project = data.projects.find((p) => p.id === id)
  const cover = useProjectCover(project || { id: null })
  if (!project) return <p className="py-20 text-center text-ink/50">This project doesn’t exist.</p>

  const mine = project.userId === ME
  if (!canSee(project)) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist"><Icon name="lock" /></span>
        <p className="mt-3 font-semibold">This project is private</p>
      </div>
    )
  }

  const owner = userById(project.userId)
  const pct = progressOf(project)
  const posts = data.posts.filter((p) => p.projectId === project.id)
  const inspiration = data.posts.find((p) => p.id === project.inspiredBy)
  const days = streak(project.id)
  const active = mine && project.status !== 'done'

  const addStep = (e) => {
    e.preventDefault()
    if (!step.trim()) return
    actions.addMilestone(project.id, step.trim())
    setStep('')
  }


  return (
    <div className="mx-auto max-w-5xl pt-4">
      <button onClick={() => navigate(-1)} className="mb-4 flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist" aria-label="Back">
        <Icon name="back" />
      </button>

      <header className="grid gap-6 md:grid-cols-[minmax(0,360px)_1fr] md:items-end">
        {cover ? (
          <img src={imgSrc(cover, 800)} alt="" className="aspect-[4/3] w-full rounded-3xl bg-mist object-cover" />
        ) : (
          <div className={`flex aspect-[4/3] items-center justify-center rounded-3xl p-8 text-center text-2xl font-bold ${cat(project.category).tint}`}>{project.title}</div>
        )}
        <div>
          <div className="flex flex-wrap gap-2">
            <VisibilityBadge visibility={project.visibility} className="bg-mist" />
            <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold">{cat(project.category).label}</span>
            {project.status === 'done' && (
              <span className="inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold"><Icon name="trophy" className="h-3 w-3" /> Completed</span>
            )}
            {mine && days > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-900">
                <Icon name="flame" filled className="h-3 w-3 text-amber-500" /> {days}-day streak
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{project.title}</h1>
          {project.description && <p className="mt-2 text-ink/70">{project.description}</p>}
          {inspiration && (
            <p className="mt-2 text-ink/70">
              Inspired by <Link {...postLink(inspiration.id)} className="font-semibold text-ink underline-offset-2 hover:underline">{inspiration.title}</Link>
            </p>
          )}
          <Link to={`/u/${owner.handle}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
            <Avatar user={owner} size="sm" /> {owner.name} · started {timeAgo(project.createdAt)}
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <ProgressBar value={pct} className="h-2" />
            <span className="text-lg font-bold">{pct}%</span>
          </div>
          {!mine && project.status === 'done' && project.milestones.length > 0 && (
            <button
              onClick={() => {
                const copy = actions.addProject({
                  title: project.title,
                  category: project.category,
                  visibility: 'private',
                  milestones: project.milestones.map((m, i) => ({ id: `m${Date.now()}${i}`, text: m.text, done: false })),
                  resources: project.resources || [],
                })
                navigate(`/project/${copy}`)
              }}
              className="btn-primary mt-5"
            >
              <Icon name="sparkles" className="h-4 w-4" /> Use {owner.name.split(' ')[0]}’s steps for my own project
            </button>
          )}
          {mine && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.status !== 'done' ? (
                <button onClick={() => setFinishing(true)} className="btn-primary"><Icon name="trophy" className="h-4 w-4" /> Mark as finished</button>
              ) : (
                <>
                  <button onClick={() => actions.updateProject(project.id, { visibility: project.visibility === 'public' ? 'private' : 'public' })} className="btn-ghost">
                    <Icon name={project.visibility === 'public' ? 'lock' : 'globe'} className="h-4 w-4" />
                    Make {project.visibility === 'public' ? 'private' : 'public'}
                  </button>
                  <button onClick={() => actions.updateProject(project.id, { status: 'active', visibility: 'private' })} className="btn-ghost">Reopen</button>
                </>
              )}
              <button
                onClick={() => {
                  if (confirm('Delete this project? Posts linked to it stay on the feed.')) {
                    actions.deleteProject(project.id)
                    navigate('/projects')
                  }
                }}
                className="btn-ghost text-red-600"
              >
                <Icon name="trash" className="h-4 w-4" /> Delete
              </button>
            </div>
          )}
        </div>
      </header>

      {active && (
        <>
          <NextStep project={project} onFinish={() => setFinishing(true)} />
          {days === 0 && <p className="mt-2 px-2 text-sm text-ink/55">Do one small thing today to start a daily streak.</p>}
          <Buddies project={project} />
        </>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <section>
          <h2 className="mb-3 text-xl font-bold">Steps</h2>
          <ul className="space-y-1">
            {project.milestones.map((m) => (
              <li key={m.id} className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-mist">
                <button
                  disabled={!mine}
                  onClick={() => actions.toggleMilestone(project.id, m.id)}
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-card transition ${m.done ? 'border-ink bg-ink' : 'border-ink/25'} ${mine ? 'hover:border-ink' : ''}`}
                  aria-label={m.done ? 'Mark as not done' : 'Mark as done'}
                >
                  {m.done && <Icon name="check" className="h-3.5 w-3.5" />}
                </button>
                <span className={`flex-1 text-sm ${m.done ? 'text-ink/40 line-through' : ''}`}>{m.text}</span>
                {mine && (
                  <button onClick={() => actions.removeMilestone(project.id, m.id)} className="text-ink/30 opacity-0 hover:text-red-600 group-hover:opacity-100" aria-label="Remove step">
                    <Icon name="x" className="h-4 w-4" />
                  </button>
                )}
              </li>
            ))}
            {!project.milestones.length && <li className="px-3 py-2 text-sm text-ink/50">No steps yet.</li>}
          </ul>
          {mine && (
            <form onSubmit={addStep} className="mt-3 flex gap-2">
              <input className="input rounded-full" placeholder="Add a step" value={step} onChange={(e) => setStep(e.target.value)} />
              <button className="btn-dark" disabled={!step.trim()}>Add</button>
            </form>
          )}
          {project.resources?.length > 0 && (
            <>
              <h2 className="mb-3 mt-10 text-xl font-bold">Helpful resources</h2>
              <ResourceList resources={project.resources} className="bg-mist" />
            </>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">Journal</h2>
          {mine && <UpdateForm project={project} />}
          <ol className="relative mt-5 space-y-5 border-l-2 border-mist pl-5">
            {project.updates.map((u) => (
              <li key={u.id} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-ink" />
                <p className="text-xs text-ink/50">{timeAgo(u.createdAt)}</p>
                <p className="mt-0.5 whitespace-pre-line text-sm">{u.text}</p>
                {u.image && <img src={imgSrc(u.image, 600)} alt="" className="mt-2 max-h-64 rounded-2xl" />}
              </li>
            ))}
            {!project.updates.length && <li className="text-sm text-ink/50">No journal entries yet.</li>}
          </ol>
        </section>
      </div>

      {posts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Shared on the feed</h2>
          <Masonry posts={posts} />
        </section>
      )}
      {finishing && <FinishModal project={project} onClose={() => setFinishing(false)} />}
    </div>
  )
}

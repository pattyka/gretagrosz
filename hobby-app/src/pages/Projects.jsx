import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore, ME } from '../store'
import { cat, imgSrc, progressOf } from '../data'
import { planForName, stepsFor } from '../guides'
import { Avatar, Icon, ProgressBar, VisibilityBadge } from '../components/ui'
import { FireCount } from '../components/Buddy'
import { ChallengesRow } from './Challenges'

// A project's cover: its own photo, else the newest photo shared from it, else a coloured tile
export function useProjectCover(project) {
  const { data } = useStore()
  return project.cover || data.posts.find((p) => p.projectId === project.id && p.image)?.image || null
}

export function ProjectCard({ project, showOwner = false }) {
  const { userById, daysWorked } = useStore()
  const days = project.userId === ME ? daysWorked(project.id) : 0
  const cover = useProjectCover(project)
  const pct = progressOf(project)
  const owner = userById(project.userId)
  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        {cover ? (
          <img src={imgSrc(cover, 600)} alt="" className="aspect-square w-full bg-mist object-cover" />
        ) : (
          <div className={`flex aspect-square items-center justify-center p-4 text-center text-base font-bold leading-tight sm:text-xl ${cat(project.category).tint}`}>{project.title}</div>
        )}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
        <div className="absolute left-2 right-2 top-2 flex flex-wrap gap-1 sm:left-3 sm:top-3 sm:gap-1.5">
          <VisibilityBadge visibility={project.visibility} />
          {project.status === 'done' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-[11px] font-semibold">
              <Icon name="trophy" className="h-3 w-3" /> Completed
            </span>
          )}
        </div>
      </div>
      <div className="px-1 pt-2 sm:pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug sm:text-base">{project.title}</h3>
          {days > 0 && <FireCount n={days} />}
        </div>
        {showOwner && (
          <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/60">
            <Avatar user={owner} size="xs" /> {owner.name}
          </p>
        )}
        <div className="mt-2.5 flex items-center gap-3">
          <ProgressBar value={pct} />
          <span className="text-xs font-semibold text-ink/60">{pct}%</span>
        </div>
        <p className="mt-1.5 text-xs text-ink/50">
          {project.milestones.filter((m) => m.done).length} of {project.milestones.length} steps
        </p>
      </div>
    </Link>
  )
}

// Starting a project is just two questions: a name, and whether you want a ready-made plan
function NewProjectForm({ initial, onClose }) {
  const { actions, me } = useStore()
  const navigate = useNavigate()
  const [title, setTitle] = useState(initial?.title || '')
  const [wantsPlan, setWantsPlan] = useState(true)

  const submit = (e) => {
    e.preventDefault()
    const name = title.trim()
    const { guide, category } = planForName(name, initial?.category)
    const id = actions.addProject({
      title: name,
      description: '',
      category,
      visibility: 'private',
      cover: null,
      milestones: wantsPlan ? stepsFor(guide, me.prefs?.level).map((text, i) => ({ id: `m${Date.now()}${i}`, text, done: false })) : [],
      resources: wantsPlan ? guide.resources : [],
    })
    navigate(`/project/${id}`)
  }

  const options = [
    { v: true, icon: 'sparkles', t: 'Yes, give me a step-by-step plan', d: 'Steps and helpful videos to get you started' },
    { v: false, icon: 'projects', t: 'No thanks', d: 'I’ll add my own steps' },
  ]

  return (
    <form onSubmit={submit} className="card mx-auto mb-8 max-w-xl animate-rise p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">New project</h2>
        <button type="button" onClick={onClose} className="rounded-full p-2 text-ink/60 hover:bg-mist hover:text-ink" aria-label="Close">
          <Icon name="x" />
        </button>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">What do you want to call it?</span>
        <input className="input" required autoFocus placeholder="e.g. Learn the ukulele" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <p className="mb-2 mt-6 text-sm font-semibold">Want a step-by-step plan?</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o.t}
            type="button"
            onClick={() => setWantsPlan(o.v)}
            className={`flex items-start gap-3 rounded-2xl border-2 p-3 text-left transition ${wantsPlan === o.v ? 'border-spark bg-spark-light/50' : 'border-mist hover:border-ink/20'}`}
          >
            <Icon name={o.icon} filled={o.v && wantsPlan} className={`mt-0.5 h-5 w-5 shrink-0 ${o.v ? 'text-spark' : ''}`} />
            <span>
              <span className="block text-sm font-semibold">{o.t}</span>
              <span className="block text-xs text-ink/60">{o.d}</span>
            </span>
          </button>
        ))}
      </div>

      <button className="btn-primary mt-6 w-full py-3" disabled={!title.trim()}>Create project</button>
    </form>
  )
}

export default function Projects() {
  const { data } = useStore()
  const idea = useLocation().state?.idea
  const [creating, setCreating] = useState(!!idea)
  const mine = data.projects.filter((p) => p.userId === ME)

  return (
    <div className="pt-4">
      {creating && <NewProjectForm key={idea?.title} initial={idea} onClose={() => setCreating(false)} />}

      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-4 2xl:grid-cols-5">
        <button
          onClick={() => setCreating(true)}
          className="flex aspect-square w-full items-center justify-center rounded-2xl bg-spark text-white transition hover:bg-spark-dark active:scale-95"
          aria-label="Add project"
        >
          <Icon name="plus" className="h-14 w-14" />
        </button>
        {mine.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="mt-12">
        <ChallengesRow />
      </div>
    </div>
  )
}

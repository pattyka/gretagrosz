import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStore, ME } from '../store'
import { CATEGORIES, KINDS, compressImage } from '../data'
import { Cover, Icon } from '../components/ui'

export default function NewPost() {
  const { data, actions } = useStore()
  const navigate = useNavigate()
  const prefill = useLocation().state || {}
  const fileRef = useRef(null)
  const myProjects = data.projects.filter((p) => p.userId === ME)
  const linked = myProjects.find((p) => p.id === prefill.projectId)

  const [form, setForm] = useState({
    title: prefill.title || '',
    caption: '',
    category: linked?.category || prefill.category || 'art',
    kind: prefill.kind || 'progress',
    projectId: prefill.projectId || '',
    image: null,
    ratio: 1,
  })
  const set = (patch) => setForm((f) => ({ ...f, ...patch }))

  const pickPhoto = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const { src, ratio } = await compressImage(file)
    set({ image: src, ratio })
  }

  const pickProject = (projectId) => {
    const p = myProjects.find((x) => x.id === projectId)
    set({ projectId, ...(p && { category: p.category }) })
  }

  const submit = (e) => {
    e.preventDefault()
    const id = actions.addPost({
      ...form,
      title: form.title.trim(),
      caption: form.caption.trim(),
      projectId: form.projectId || null,
      challengeId: prefill.challengeId || null,
    })
    navigate(`/post/${id}`)
  }

  return (
    <div className="mx-auto max-w-5xl pt-4">
      <h1 className="h-title">Create a post</h1>

      <form onSubmit={submit} className="mt-6 grid gap-8 md:grid-cols-[minmax(0,380px)_1fr]">
        <div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={pickPhoto} />
          {form.image ? (
            <div className="relative">
              <Cover post={form} rounded="rounded-3xl" />
              <button type="button" onClick={() => set({ image: null, ratio: 1 })} className="absolute right-3 top-3 rounded-full bg-card p-2 shadow-soft hover:bg-mist" aria-label="Remove photo">
                <Icon name="trash" className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-ink/20 bg-mist text-ink/70 transition hover:border-ink/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-card">
                <Icon name="image" className="h-5 w-5" />
              </span>
              <span className="font-semibold">Choose a photo</span>
              <span className="max-w-[220px] text-center text-xs text-ink/50">Posts with photos get the most likes. No photo? Your title becomes the cover.</span>
            </button>
          )}
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">Title</span>
            <input className="input" required maxLength={80} placeholder="e.g. Finished my first sweater!" value={form.title} onChange={(e) => set({ title: e.target.value })} />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">Description</span>
            <textarea className="input min-h-[120px]" placeholder="How did it go? What did you learn? What was hard?" value={form.caption} onChange={(e) => set({ caption: e.target.value })} />
          </label>

          <div>
            <span className="mb-1.5 block text-xs font-semibold">Where are you at?</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(KINDS).map(([k, v]) => (
                <button key={k} type="button" onClick={() => set({ kind: k })} className={`chip ${form.kind === k ? 'bg-ink text-card' : 'bg-mist hover:bg-ink/10'}`}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold">Category</span>
            <select className="input" value={form.category} onChange={(e) => set({ category: e.target.value })}>
              {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </label>

          {myProjects.length > 0 && (
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold">Link to one of your projects (optional)</span>
              <select className="input" value={form.projectId} onChange={(e) => pickProject(e.target.value)}>
                <option value="">None</option>
                {myProjects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} {p.visibility === 'private' ? '(private)' : ''}
                  </option>
                ))}
              </select>
            </label>
          )}

          <div className="flex justify-end">
            <button className="btn-primary px-6 py-3" disabled={!form.title.trim()}>Publish</button>
          </div>
        </div>
      </form>
    </div>
  )
}

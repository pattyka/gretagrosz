import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { CATEGORIES, COST_LABEL, IDEAS, cat } from '../data'
import { planForName, stepsFor } from '../guides'
import { Icon, Logo } from '../components/ui'

const LEVEL = [
  { v: 'new', t: 'Total beginner', d: 'Never tried — that’s perfect' },
  { v: 'some', t: 'Tried it a bit', d: 'I know the basics' },
  { v: 'good', t: 'Pretty experienced', d: 'Looking for something new to make' },
]
const TIME = [
  { v: 'little', t: 'About 1 hour a week', d: 'Tiny steps still add up' },
  { v: 'some', t: '2–3 hours a week', d: 'A couple of evenings' },
  { v: 'lots', t: '5+ hours a week', d: 'Ready to dive in' },
]
const BUDGET = [
  { v: 'free', t: 'Free only', d: 'Use what you already have' },
  { v: 'cheap', t: 'A little', d: 'Under €20 is fine' },
  { v: 'any', t: 'Doesn’t matter', d: 'Show me everything' },
]
const ALLOWED_COST = { free: ['free'], cheap: ['free', 'cheap'], any: ['free', 'cheap', 'some'] }

// Three starter ideas: one per chosen interest first, cheapest and gear-free first, then anything that fits the budget
function pickStarters(interests, budget) {
  const fits = IDEAS.filter((i) => ALLOWED_COST[budget || 'any'].includes(i.cost)).sort((a, b) => b.noGear - a.noGear)
  const picks = []
  for (let round = 0; picks.length < 3 && round < 3; round++) {
    for (const c of interests) {
      const idea = fits.filter((i) => i.category === c && !picks.includes(i))[0]
      if (idea && picks.length < 3) picks.push(idea)
    }
  }
  for (const i of fits) if (picks.length < 3 && !picks.includes(i)) picks.push(i)
  return picks
}

function Choice({ selected, onClick, title, desc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 p-4 text-left transition ${selected ? 'border-spark bg-spark-light/50' : 'border-mist hover:border-ink/20'}`}
    >
      <span>
        <span className="block font-semibold">{title}</span>
        {desc && <span className="block text-sm text-ink/60">{desc}</span>}
      </span>
      {selected && (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-spark text-white">
          <Icon name="check" className="h-3.5 w-3.5" />
        </span>
      )}
    </button>
  )
}

export default function Onboarding() {
  const { actions } = useStore()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [interests, setInterests] = useState([])
  const [level, setLevel] = useState(null)
  const [time, setTime] = useState(null)
  const [budget, setBudget] = useState(null)
  const prefs = { interests, level, time, budget }

  const toggleInterest = (id) => setInterests((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]))

  const finish = () => {
    actions.completeOnboarding(prefs)
    navigate('/')
  }
  const start = (idea) => {
    const { guide, category } = planForName(idea.title, idea.category)
    actions.completeOnboarding(prefs)
    const id = actions.addProject({
      title: idea.title,
      category,
      visibility: 'private',
      milestones: stepsFor(guide, level).map((text, i) => ({ id: `m${Date.now()}${i}`, text, done: false })),
      resources: guide.resources,
    })
    navigate(`/project/${id}`)
  }

  const LAST = 4
  const canNext = [interests.length > 0, !!level, !!time, !!budget][step]
  const starters = step === LAST ? pickStarters(interests, budget) : []

  return (
    <div className="fixed inset-0 z-[60] animate-fade overflow-y-auto bg-card">
      <div className="mx-auto flex min-h-full max-w-xl flex-col px-5 pb-10 pt-6">
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={finish} className="rounded-full px-3 py-2 text-sm font-semibold text-ink/50 hover:bg-mist hover:text-ink">
            Skip
          </button>
        </div>

        <div className="mt-6 flex gap-1.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full transition ${i <= step ? 'bg-spark' : 'bg-mist'}`} />
          ))}
        </div>

        <div key={step} className="mt-8 flex-1 animate-rise">
          {step === 0 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight">What are you curious about?</h1>
              <p className="mt-2 text-ink/60">Pick as many as you like. You don’t need any experience.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CATEGORIES.filter((c) => c.id !== 'other').map((c) => {
                  const on = interests.includes(c.id)
                  return (
                    <button key={c.id} onClick={() => toggleInterest(c.id)} className={`chip border-2 px-5 py-3 text-base ${on ? 'border-spark bg-spark text-white' : 'border-mist bg-card hover:border-ink/20'}`}>
                      {c.label}
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight">How much have you done before?</h1>
              <p className="mt-2 text-ink/60">We’ll pitch your plans at the right level.</p>
              <div className="mt-6 space-y-2">
                {LEVEL.map((o) => <Choice key={o.v} selected={level === o.v} onClick={() => setLevel(o.v)} title={o.t} desc={o.d} />)}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight">How much time do you have?</h1>
              <p className="mt-2 text-ink/60">Be honest — small is perfect. We’ll size your steps to fit.</p>
              <div className="mt-6 space-y-2">
                {TIME.map((o) => <Choice key={o.v} selected={time === o.v} onClick={() => setTime(o.v)} title={o.t} desc={o.d} />)}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight">What about money?</h1>
              <p className="mt-2 text-ink/60">Lots of great hobbies cost nothing at all.</p>
              <div className="mt-6 space-y-2">
                {BUDGET.map((o) => <Choice key={o.v} selected={budget === o.v} onClick={() => setBudget(o.v)} title={o.t} desc={o.d} />)}
              </div>
            </>
          )}

          {step === LAST && (
            <>
              <h1 className="text-3xl font-bold tracking-tight">Here are 3 ideas for you</h1>
              <p className="mt-2 text-ink/60">
                Each one comes with a step-by-step plan.{level === 'new' ? ' The first step takes about 10 minutes.' : ''}
              </p>
              <div className="mt-6 space-y-3">
                {starters.map((idea) => (
                  <div key={idea.title} className="flex items-center gap-4 rounded-3xl border-2 border-mist p-4">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xs font-bold ${cat(idea.category).tint}`}>{cat(idea.category).label.slice(0, 4)}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold leading-snug">{idea.title}</p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5 text-[11px] font-semibold">
                        <span className="rounded-full bg-mist px-2 py-0.5">{COST_LABEL[idea.cost]}</span>
                        {idea.noGear && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-900">Nothing to buy</span>}
                      </div>
                    </div>
                    <button onClick={() => start(idea)} className="btn-primary shrink-0">Start</button>
                  </div>
                ))}
              </div>
              <button onClick={finish} className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-ink/60 hover:bg-mist hover:text-ink">
                Just show me what people are making
              </button>
            </>
          )}
        </div>

        {step < LAST && (
          <div className="mt-8 flex gap-2">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="btn-ghost px-5 py-3" aria-label="Back">
                <Icon name="back" className="h-4 w-4" />
              </button>
            )}
            <button onClick={() => setStep(step + 1)} disabled={!canNext} className="btn-primary flex-1 py-3 text-base">
              {step === LAST - 1 ? 'Show my ideas' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

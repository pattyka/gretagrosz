import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { BuddyFigure, OUTFITS, OutfitPreview, SLOTS } from '../components/Buddy'
import { Icon } from '../components/ui'
import { challengeById } from '../challenges'

// Dress up your streak buddy — new outfits unlock the longer your daily streak gets
export default function BuddyPage() {
  const { me, data, actions, streak, bestStreak, isUnlocked } = useStore()
  const navigate = useNavigate()
  const count = streak()
  const best = bestStreak()
  const outfit = me.outfit || {}
  const next = OUTFITS.find((o) => o.day && o.day > best)
  const freezes = data.freezes.available

  const wear = (item) => {
    if (!isUnlocked(item)) return
    actions.updateMe({ outfit: { ...outfit, [item.slot]: outfit[item.slot] === item.id ? null : item.id } })
  }

  return (
    <div className="mx-auto max-w-2xl pt-4">
      <button onClick={() => navigate(-1)} className="mb-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist" aria-label="Back">
        <Icon name="back" />
      </button>

      <section className="flex flex-col items-center rounded-[2rem] bg-gradient-to-b from-orange-500/10 to-card px-6 pb-6 pt-8 text-center">
        <div className="h-52 w-44 animate-bob">
          <BuddyFigure awake={count > 0} outfit={outfit} />
        </div>
        <p className="mt-3 text-4xl font-extrabold tracking-tight">{count}-day streak</p>
        <p className="mt-1 text-sm text-ink/55">Your best: {best} {best === 1 ? 'day' : 'days'} in a row</p>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900">
          <Icon name="snow" className="h-4 w-4" />
          {freezes} streak {freezes === 1 ? 'freeze' : 'freezes'}
        </div>
        <p className="mt-2 max-w-xs text-xs text-ink/55">
          You earn one for every 7 days in a row (you can keep 2). If you miss a day, one is used automatically so your streak survives.
        </p>
        {next && (
          <p className="mt-4 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-soft">
            {next.day - best} more {next.day - best === 1 ? 'day' : 'days'} to unlock the {next.name.toLowerCase()}
          </p>
        )}
      </section>

      {SLOTS.map((slot) => (
        <section key={slot.id} className="mt-8">
          <h2 className="mb-3 px-1 text-lg font-bold">{slot.label}</h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {OUTFITS.filter((o) => o.slot === slot.id).map((item) => {
              const locked = !isUnlocked(item)
              const on = outfit[item.slot] === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => wear(item)}
                  disabled={locked}
                  className={`relative flex flex-col items-center rounded-2xl border-2 p-3 transition ${on ? 'border-spark bg-spark-light/50' : 'border-mist hover:border-ink/20'} ${locked ? 'cursor-not-allowed' : ''}`}
                  aria-pressed={on}
                >
                  <span className={`flex h-14 w-full items-center justify-center ${locked ? 'opacity-30 grayscale' : ''}`}>
                    <OutfitPreview item={item} />
                  </span>
                  <span className="mt-1 text-xs font-semibold">{item.name}</span>
                  {locked ? (
                    <span className="mt-0.5 flex items-center gap-1 text-center text-[11px] leading-tight text-ink/50">
                      <Icon name="lock" className="h-3 w-3 shrink-0" /> {item.challenge ? `Win “${challengeById(item.challenge).title}”` : `Day ${item.day}`}
                    </span>
                  ) : (
                    <span className={`mt-0.5 text-[11px] ${on ? 'font-semibold text-spark' : 'text-ink/50'}`}>{on ? 'Wearing' : 'Tap to wear'}</span>
                  )}
                </button>
              )
            })}
          </div>
        </section>
      ))}

      <p className="mt-8 px-1 text-center text-xs text-ink/50">
        A day counts if you tick off a step or write in your journal. Outfits you’ve unlocked stay yours, even if your streak breaks.
      </p>
    </div>
  )
}

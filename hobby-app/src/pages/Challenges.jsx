import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store'
import { CHALLENGES, challengeById, checkinsThisMonth, daysLeftThisMonth, monthName } from '../challenges'
import { cat, dayOf } from '../data'
import { BuddyFigure, outfitItem } from '../components/Buddy'
import { Confetti, Icon, Masonry, ProgressBar } from '../components/ui'

// Shared bits for a challenge: your check-ins this month, whether today is done, and the check-in action
export function useChallenge(ch) {
  const { data, actions } = useStore()
  const entry = data.challenges[ch.id]
  const joined = !!entry
  const days = checkinsThisMonth(entry)
  const doneToday = days.includes(dayOf(Date.now()))
  const won = data.challengeWins.includes(ch.id)
  const people = ch.people + (joined ? 1 : 0)
  return { joined, days, doneToday, won, people, join: () => actions.joinChallenge(ch.id), checkIn: () => actions.checkInChallenge(ch.id) }
}

function CheckInButton({ ch, onWin, className = '' }) {
  const { joined, doneToday, join, checkIn } = useChallenge(ch)
  if (!joined) return <button onClick={join} className={`btn-primary ${className}`}>Join challenge</button>
  if (doneToday)
    return (
      <span className={`btn cursor-default bg-emerald-100 text-emerald-900 ${className}`}>
        <Icon name="check" className="h-4 w-4" /> Done today
      </span>
    )
  return (
    <button
      onClick={() => {
        checkIn()
        onWin?.()
      }}
      className={`btn-primary ${className}`}
    >
      <Icon name="check" className="h-4 w-4" /> I did it today
    </button>
  )
}

// Small card used on the home feed and the challenges list
export function ChallengeCard({ ch, wide = false }) {
  const { joined, days, won, people } = useChallenge(ch)
  const reward = outfitItem(ch.outfit)
  return (
    <div className={`flex shrink-0 flex-col rounded-3xl p-4 ${cat(ch.category).tint} ${wide ? 'w-full' : 'w-64'}`}>
      <Link to={`/challenge/${ch.id}`} className="block">
        <p className="text-xs font-semibold opacity-70">{monthName()} challenge · {daysLeftThisMonth()} days left</p>
        <p className="mt-1 text-lg font-bold leading-snug">
          {ch.title} on {ch.goal} days
        </p>
        <p className="mt-1 text-xs opacity-70">{people} people taking part</p>
      </Link>
      <div className="mt-auto pt-3">
        {joined ? (
          <>
            <div className="mb-1 flex justify-between text-xs font-semibold">
              <span>{won ? 'Finished!' : `${days.length} of ${ch.goal} days`}</span>
              <span className="opacity-70">Win: {reward.name}</span>
            </div>
            <ProgressBar value={Math.min(100, (days.length / ch.goal) * 100)} className="bg-card/60" />
            <CheckInButton ch={ch} className="mt-3 w-full py-2" />
          </>
        ) : (
          <>
            <p className="mb-2 text-xs font-semibold opacity-70">Finish it to win: {reward.name} for your streak buddy</p>
            <CheckInButton ch={ch} className="w-full py-2" />
          </>
        )}
      </div>
    </div>
  )
}

// This month's challenges, the ones you joined first
export function ChallengesRow() {
  const { data } = useStore()
  const list = [...CHALLENGES].sort((a, b) => !!data.challenges[b.id] - !!data.challenges[a.id])
  return (
    <section className="mb-6">
      <div className="flex items-baseline justify-between px-1">
        <h2 className="text-lg font-bold">{monthName()} challenges</h2>
        <Link to="/challenges" className="text-sm font-semibold text-spark hover:underline">See all</Link>
      </div>
      <div className="-mx-3 mt-3 flex gap-3 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:-mx-4 sm:px-4">
        {list.map((ch) => <ChallengeCard key={ch.id} ch={ch} />)}
      </div>
    </section>
  )
}

export function ChallengesList() {
  return (
    <div className="mx-auto max-w-4xl pt-4">
      <h1 className="h-title">{monthName()} challenges</h1>
      <p className="mt-1 text-ink/60">Do it on enough days this month to finish. Every check-in counts for your streak too.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map((ch) => <ChallengeCard key={ch.id} ch={ch} wide />)}
      </div>
    </div>
  )
}

export default function ChallengePage() {
  const { id } = useParams()
  const { data, me, actions } = useStore()
  const navigate = useNavigate()
  const [wins, setWins] = useState(0)
  const ch = challengeById(id)
  const state = useChallenge(ch || CHALLENGES[0])
  if (!ch) return <p className="py-20 text-center text-ink/50">This challenge doesn’t exist.</p>

  const { joined, days, won, people } = state
  const reward = outfitItem(ch.outfit)
  const posts = data.posts.filter((p) => p.challengeId === ch.id || ch.posts.includes(p.id)).sort((a, b) => b.createdAt - a.createdAt)

  // This month's calendar, with the days you checked in filled
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const firstDay = dayOf(monthStart.getTime())
  const today = dayOf(Date.now())

  return (
    <div className="mx-auto max-w-4xl pt-4">
      <button onClick={() => navigate(-1)} className="mb-4 flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist" aria-label="Back">
        <Icon name="back" />
      </button>

      <header className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 ${cat(ch.category).tint}`}>
        {wins > 0 && <Confetti key={wins} />}
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold opacity-70">{monthName()} challenge · {daysLeftThisMonth()} days left</p>
            <h1 className="mt-1 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {ch.title} on {ch.goal} days
            </h1>
            <p className="mt-2 opacity-80">{ch.blurb}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold">
              <Icon name="users" className="h-4 w-4" /> {people} people taking part
            </p>
            {joined && (
              <div className="mt-5 max-w-sm">
                <div className="mb-1 flex justify-between text-sm font-semibold">
                  <span>{won ? 'You finished it!' : `${days.length} of ${ch.goal} days`}</span>
                  <span>{Math.min(100, Math.round((days.length / ch.goal) * 100))}%</span>
                </div>
                <ProgressBar value={Math.min(100, (days.length / ch.goal) * 100)} className="h-2 bg-card/60" />
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              <CheckInButton ch={ch} onWin={() => setWins((n) => n + 1)} className="px-5 py-3" />
              {joined && (
                <button onClick={() => navigate('/new', { state: { challengeId: ch.id, category: ch.category, kind: 'progress' } })} className="btn bg-card px-5 py-3 hover:bg-card/80">
                  Share to the challenge
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`h-28 w-24 sm:h-36 sm:w-32 ${won ? 'animate-bob' : 'opacity-70'}`}>
              <BuddyFigure outfit={{ ...(me.outfit || {}), head: reward.id }} />
            </div>
            <p className="mt-1 text-xs font-semibold">{won ? `You won the ${reward.name.toLowerCase()}!` : `Finish to win the ${reward.name.toLowerCase()}`}</p>
          </div>
        </div>
      </header>

      {joined && (
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold">Your {monthName()}</h2>
          <div className="grid grid-cols-7 gap-1.5 sm:max-w-md">
            {Array.from({ length: (monthStart.getDay() + 6) % 7 }, (_, i) => <span key={`pad${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = firstDay + i
              const done = days.includes(d)
              return (
                <span
                  key={d}
                  className={`flex aspect-square items-center justify-center rounded-xl text-xs font-semibold ${done ? 'bg-spark text-white' : d === today ? 'ring-2 ring-spark' : d > today ? 'bg-mist/50 text-ink/30' : 'bg-mist text-ink/50'}`}
                >
                  {i + 1}
                </span>
              )
            })}
          </div>
          <button onClick={() => actions.leaveChallenge(ch.id)} className="mt-4 text-sm font-semibold text-ink/50 hover:text-ink hover:underline">
            Leave this challenge
          </button>
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold">What people are sharing</h2>
        <Masonry posts={posts} empty="Nothing shared yet. Be the first!" />
      </section>
    </div>
  )
}

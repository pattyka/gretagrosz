import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore, ME } from '../store'
import { timeAgo } from '../data'
import { Avatar, Icon } from '../components/ui'

export default function Chat() {
  const { id } = useParams()
  const { data, actions, userById } = useStore()
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [picking, setPicking] = useState(false)
  const bottomRef = useRef(null)

  const lastAt = (c) => c.messages.at(-1)?.createdAt || 0
  const convos = [...data.conversations].sort((a, b) => lastAt(b) - lastAt(a))
  const active = data.conversations.find((c) => c.id === id)
  const other = active && userById(active.members.find((m) => m !== ME))

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [active?.messages.length])

  const send = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    actions.sendMessage(active.id, text.trim())
    setText('')
  }

  const startWith = (userId) => {
    setPicking(false)
    navigate(`/chat/${actions.openConversation(userId)}`)
  }

  return (
    <div className="mx-auto grid h-[calc(100vh-13rem)] max-w-6xl overflow-hidden rounded-3xl border border-ink/10 md:h-[calc(100vh-7.5rem)] md:grid-cols-[340px_1fr]">
      {/* Conversation list */}
      <aside className={`min-h-0 flex-col border-r border-ink/10 ${active ? 'hidden md:flex' : 'flex'}`}>
        <div className="flex items-center justify-between p-5 pb-3">
          <h1 className="text-xl font-bold">Messages</h1>
          <button onClick={() => setPicking((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist" aria-label="New message">
            <Icon name={picking ? 'x' : 'plus'} />
          </button>
        </div>
        {picking && (
          <div className="mx-3 mb-2 animate-fade rounded-2xl bg-mist p-2">
            <p className="px-2 py-1 text-xs font-semibold text-ink/60">New message to…</p>
            {data.users.filter((u) => u.id !== ME).map((u) => (
              <button key={u.id} onClick={() => startWith(u.id)} className="flex w-full items-center gap-2.5 rounded-xl p-2 text-left text-sm font-medium hover:bg-card">
                <Avatar user={u} size="sm" /> {u.name}
              </button>
            ))}
          </div>
        )}
        <ul className="flex-1 overflow-y-auto px-2">
          {convos.map((c) => {
            const u = userById(c.members.find((m) => m !== ME))
            const last = c.messages.at(-1)
            return (
              <li key={c.id}>
                <Link to={`/chat/${c.id}`} className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${c.id === id ? 'bg-mist' : 'hover:bg-mist/60'}`}>
                  <Avatar user={u} size="md" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate font-semibold">{u.name}</p>
                      {last && <span className="shrink-0 text-[11px] text-ink/45">{timeAgo(last.createdAt)}</span>}
                    </div>
                    <p className="truncate text-sm text-ink/60">{last ? `${last.from === ME ? 'You: ' : ''}${last.text}` : 'Say hi'}</p>
                  </div>
                </Link>
              </li>
            )
          })}
          {!convos.length && <li className="p-6 text-center text-sm text-ink/50">No messages yet. Tap + to start one.</li>}
        </ul>
      </aside>

      {/* Thread */}
      {active ? (
        <section className="flex min-h-0 flex-col">
          <div className="flex items-center gap-3 border-b border-ink/10 p-3">
            <Link to="/chat" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist md:hidden" aria-label="Back to messages">
              <Icon name="back" className="h-5 w-5" />
            </Link>
            <Link to={`/u/${other.handle}`} className="flex items-center gap-3">
              <Avatar user={other} size="md" />
              <div>
                <p className="font-semibold leading-tight">{other.name}</p>
                <p className="text-xs text-ink/50">@{other.handle}</p>
              </div>
            </Link>
          </div>
          <div className="flex-1 space-y-1.5 overflow-y-auto p-4">
            {active.messages.map((m) => {
              const fromMe = m.from === ME
              return (
                <div key={m.id} className={`flex animate-rise ${fromMe ? 'justify-end' : 'justify-start'}`}>
                  <p className={`max-w-[75%] rounded-3xl px-4 py-2.5 text-sm ${fromMe ? 'bg-ink text-card' : 'bg-mist'}`}>{m.text}</p>
                </div>
              )
            })}
            {!active.messages.length && <p className="pt-10 text-center text-sm text-ink/50">Send {other.name.split(' ')[0]} some encouragement.</p>}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={send} className="flex gap-2 p-3">
            <input className="input rounded-full" placeholder="Send a message" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn-primary px-3.5" disabled={!text.trim()} aria-label="Send">
              <Icon name="send" className="h-4 w-4" />
            </button>
          </form>
        </section>
      ) : (
        <section className="hidden flex-col items-center justify-center text-center md:flex">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mist"><Icon name="chat" className="h-7 w-7" /></span>
          <p className="mt-4 font-semibold">Your messages</p>
          <p className="text-sm text-ink/50">Pick a conversation or start a new one.</p>
        </section>
      )}
    </div>
  )
}

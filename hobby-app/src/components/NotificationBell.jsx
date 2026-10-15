import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { timeAgo } from '../data'
import { Icon } from './ui'

// The bell in the header: likes, messages, unlocks and challenge news
export default function NotificationBell() {
  const { data, actions, unread } = useStore()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const go = (n) => {
    actions.markNotificationRead(n.id)
    setOpen(false)
    if (n.link) navigate(n.link)
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button onClick={() => setOpen((v) => !v)} className="relative rounded-full p-2.5 hover:bg-mist" aria-label={`Notifications${unread ? ` (${unread} new)` : ''}`}>
        <Icon name="bell" className="h-6 w-6" />
        {unread > 0 && (
          <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-3 top-20 z-50 animate-fade rounded-3xl bg-card p-2 shadow-pop sm:absolute sm:inset-x-auto sm:right-0 sm:top-14 sm:w-96">
          <div className="flex items-center justify-between px-3 py-2">
            <p className="font-bold">Updates</p>
            {unread > 0 && (
              <button onClick={actions.markAllNotificationsRead} className="text-xs font-semibold text-spark hover:underline">
                Mark all as read
              </button>
            )}
          </div>
          <ul className="max-h-[60vh] overflow-y-auto">
            {data.notifications.map((n) => (
              <li key={n.id}>
                <button onClick={() => go(n)} className="flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-mist">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.read ? 'bg-transparent' : 'bg-spark'}`} />
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm leading-snug ${n.read ? 'text-ink/70' : 'font-semibold'}`}>{n.text}</span>
                    <span className="block text-xs text-ink/45">{timeAgo(n.at)}</span>
                  </span>
                </button>
              </li>
            ))}
            {!data.notifications.length && <li className="px-3 py-8 text-center text-sm text-ink/50">Nothing new yet.</li>}
          </ul>
        </div>
      )}
    </div>
  )
}

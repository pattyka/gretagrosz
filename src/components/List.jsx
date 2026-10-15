import { ChevronRight } from './Icons.jsx'

// Gruppierte Liste wie in den iPhone-Einstellungen: weiße Box mit feinen Trennlinien.
export function ListGroup({ header, footer, children, className = '' }) {
  return (
    <section className={`mb-7 ${className}`}>
      {header && <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{header}</h2>}
      <div className="overflow-hidden rounded-xl bg-white shadow-bubbleSm divide-y divide-black/[0.08]">{children}</div>
      {footer && <p className="mt-1.5 px-4 text-[13px] text-muted">{footer}</p>}
    </section>
  )
}

// Eine Zeile: optional Icon links, Titel + Untertitel, rechts Wert und Pfeil (›).
export function ListRow({ title, subtitle, left, right, onClick, disabled = false, chevron = true, accent = false, children }) {
  const clickable = Boolean(onClick) && !disabled
  return (
    <button
      type="button"
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
        clickable ? 'active:bg-black/[0.06]' : 'cursor-default'
      }`}
    >
      {left}
      <span className="min-w-0 flex-1">
        <span
          className={`block text-[17px] leading-snug ${
            disabled ? 'text-slate-400' : accent ? 'text-accent-ink' : 'text-slate-900'
          }`}
        >
          {title}
        </span>
        {subtitle && <span className="block text-[13px] text-slate-500">{subtitle}</span>}
        {children}
      </span>
      {right && <span className="shrink-0 text-[15px] text-slate-400">{right}</span>}
      {chevron && clickable && <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />}
    </button>
  )
}

// Kleines Quadrat in der Akzentfarbe mit Zahl oder Icon (wie die App-Icons in den Einstellungen).
export function IconTile({ children }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-[15px] font-semibold text-accent-on">
      {children}
    </span>
  )
}

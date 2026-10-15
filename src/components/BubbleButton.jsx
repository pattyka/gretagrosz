/**
 * Schlichter Button im Apple-Stil: einfarbig, ohne Farbverlauf und ohne harten Schatten.
 * Beim Antippen wird er nur leicht abgedunkelt.
 * variant: 'solid' (Pastell-Akzentfarbe) | 'ghost' (hellgrau, Schrift in Akzentfarbe)
 * `gradient` wird aus Kompatibilitätsgründen angenommen, aber ignoriert.
 */
export default function BubbleButton({
  children,
  onClick,
  className = '',
  variant = 'solid',
  type = 'button',
  disabled = false,
}) {
  const base =
    'font-semibold rounded-full select-none transition-opacity duration-150 ' +
    'active:opacity-60 disabled:opacity-40 disabled:cursor-not-allowed'

  const look = variant === 'solid' ? 'bg-accent text-accent-on' : 'bg-black/[0.06] text-accent-ink'

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${look} ${className}`}>
      {children}
    </button>
  )
}

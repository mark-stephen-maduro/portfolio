export function SectionLabel({ children, dark = false }) {
  return (
    <p className={`font-mono text-xs tracking-widest uppercase mb-12 ${dark ? 'text-white/55' : 'text-muted'}`}>
      {children}
    </p>
  )
}

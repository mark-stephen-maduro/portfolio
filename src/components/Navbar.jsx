import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../constants/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onDark,   setOnDark]   = useState(false)

  useEffect(() => {
    const NAV_SAMPLE_Y = 32 // px from top — mid-point of the nav bar

    const update = () => {
      setScrolled(window.scrollY > 60)

      // Hit-test the element sitting behind the centre of the nav
      const el = document.elementFromPoint(window.innerWidth / 2, NAV_SAMPLE_Y)
      setOnDark(!!el?.closest('[data-dark]'))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // ── style tokens derived from current surface ──────────────────────────
  const bg      = scrolled
    ? onDark
      ? 'bg-void/80 backdrop-blur-xl border-b border-white/10'
      : 'bg-cream/80 backdrop-blur-xl border-b border-void/10'
    : ''

  const linkCls = onDark
    ? 'text-cream/50 hover:text-cream'
    : 'text-void/60 hover:text-void'

  const hireCls = onDark
    ? 'bg-cream text-void hover:bg-signal hover:text-cream'
    : 'bg-void text-cream hover:bg-signal'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-end px-8 py-5 transition-all duration-500 ${bg}`}>
      <div className="flex items-center gap-8">
        {NAV_LINKS.map(([id, label]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`font-mono text-xs tracking-widest uppercase transition-colors ${linkCls}`}
          >
            {label}
          </button>
        ))}
        <a
          href="mailto:mark.zizon@gmail.com"
          className={`font-mono text-xs px-4 py-2 tracking-widest uppercase transition-colors duration-300 ${hireCls}`}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}

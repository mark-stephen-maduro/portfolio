import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionLabel } from './SectionLabel'
import { RIGHT_NOW_CELLS } from '../constants/data'

function useManilaClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Manila',
        hour: 'numeric', minute: '2-digit', second: '2-digit',
        hour12: true,
      })

    setTime(format())
    const id = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

function Cell({ label, value, mono, signal }) {
  return (
    <div className="rn-cell bg-cream p-8 flex flex-col justify-between min-h-[140px]">
      <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">{label}</p>
      <p
        className={`${mono ? 'font-mono' : 'font-bebas'} ${signal ? 'text-signal' : 'text-void'} leading-tight`}
        style={{ fontSize: mono ? '0.85rem' : 'clamp(1rem, 2vw, 1.3rem)' }}
      >
        {value}
      </p>
    </div>
  )
}

export function RightNow() {
  const ref  = useRef(null)
  const time = useManilaClock()

  useScrollReveal(ref, '.rn-cell', { y: 30, duration: 0.8, stagger: 0.08 })

  const cells = RIGHT_NOW_CELLS.map((c) =>
    c.label === 'Local Time' ? { ...c, value: time } : c
  )

  return (
    <section ref={ref} className="section-pad bg-cream border-t border-void/10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Right Now</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-void/10">
          {cells.map((c) => <Cell key={c.label} {...c} />)}
        </div>
      </div>
    </section>
  )
}

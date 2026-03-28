import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionLabel } from './SectionLabel'
import { STACK, STATS } from '../constants/data'

export function TechStack() {
  const ref = useRef(null)

  useScrollReveal(ref, '.stack-col', { stagger: 0.1 })

  return (
    <section id="stack" ref={ref} className="section-pad bg-void" data-dark>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <SectionLabel dark>Tech Stack</SectionLabel>
          <p className="font-mono text-xs mb-12 text-white/40">Full-Stack</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STACK.map((group) => (
            <div key={group.label} className="stack-col">
              <p className="font-mono text-xs text-signal tracking-widest uppercase mb-4">{group.label}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-bebas text-white/60 text-base font-medium">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-12">
          {STATS.map(([val, label]) => (
            <div key={label}>
              <p className="font-bebas text-cream text-stat">{val}</p>
              <p className="font-mono text-white/50 text-xs tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

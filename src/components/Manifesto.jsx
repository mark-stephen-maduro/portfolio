import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionLabel } from './SectionLabel'

export function Manifesto() {
  const ref   = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)

  useScrollReveal(ref, [line1, line2, line3], { start: 'top 75%', y: 80, duration: 1.2, stagger: 0.15 })

  return (
    <section ref={ref} className="section-pad bg-cream border-t border-void/10">
      <div className="max-w-6xl">
        <div ref={line1} className="mb-6">
          <p className="font-bebas uppercase text-void/30 leading-tight text-lead">
            Most code doesn't survive growth.
          </p>
        </div>

        <div ref={line2} className="mb-2">
          <p className="font-bebas text-void text-manifesto">
            I build <span className="text-signal">systems</span><br />that scale.
          </p>
        </div>

        <div ref={line3} className="mt-10 max-w-xl">
          <p className="font-bebas text-void/60 text-lg leading-relaxed">
            From design systems to enterprise ERPs, from e-commerce storefronts to live education
            platforms — every layer, every decision, built to last.
          </p>
        </div>
      </div>
    </section>
  )
}

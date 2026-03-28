import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionLabel } from './SectionLabel'
import { SOCIAL_LINKS } from '../constants/data'

export function Contact() {
  const ref     = useRef(null)
  const headRef = useRef(null)
  const bodyRef = useRef(null)

  useScrollReveal(ref, [headRef, bodyRef], { y: 60, duration: 1.1, stagger: 0.15 })

  return (
    <section id="contact" ref={ref} className="section-pad bg-void" data-dark>
      <div className="max-w-6xl mx-auto">
        <SectionLabel dark>Get In Touch</SectionLabel>

        <div ref={headRef}>
          <h2 className="font-bebas text-cream text-contact-xl">
            LET'S<br /><span className="text-signal">BUILD</span><br />TOGETHER
          </h2>
        </div>

        <div
          ref={bodyRef}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-t border-white/10 pt-10"
        >
          <div>
            <a
              href="mailto:mark.zizon@gmail.com"
              className="font-bebas text-cream hover:text-signal transition-colors text-email"
            >
              mark.zizon@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/40 hover:text-signal tracking-widest uppercase transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:mark.zizon@gmail.com"
              className="font-mono text-xs bg-signal text-cream px-6 py-3 tracking-widest uppercase hover:bg-cream hover:text-void transition-colors duration-300"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

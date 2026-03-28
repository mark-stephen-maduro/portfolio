import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DEFAULTS = {
  start:    'top 80%',
  y:        50,
  duration: 0.9,
  ease:     'power3.out',
  stagger:  0.1,
  delay:    0,
}

/**
 * Reusable scroll-triggered fade-up reveal.
 *
 * @param {React.RefObject} sectionRef  - The section that acts as the ScrollTrigger trigger.
 * @param {Array|string}    targets     - Array of refs, array of elements, or a CSS selector
 *                                        string (scoped to sectionRef by gsap.context).
 * @param {object}          config      - Overrides for DEFAULTS. Pass `noTrigger: true` to
 *                                        skip ScrollTrigger (for entrance animations on load).
 */
export function useScrollReveal(sectionRef, targets, config = {}) {
  useEffect(() => {
    const resolved = Array.isArray(targets)
      ? targets.map((t) => t?.current ?? t).filter(Boolean)
      : targets // CSS selector — scoped by gsap.context to sectionRef

    const opts = { ...DEFAULTS, ...config }

    const ctx = gsap.context(() => {
      gsap.from(resolved, {
        ...(opts.noTrigger
          ? {}
          : { scrollTrigger: { trigger: sectionRef.current, start: opts.start } }),
        y:        opts.y,
        opacity:  0,
        duration: opts.duration,
        ease:     opts.ease,
        stagger:  opts.stagger,
        delay:    opts.delay,
      })
    }, sectionRef)

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

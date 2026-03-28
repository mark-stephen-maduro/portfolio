import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Module-level singleton — only one Lenis instance ever exists.
let instance = null

export function useLenis(enabled) {
  useEffect(() => {
    if (!enabled || instance) return

    instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    instance.on('scroll', ScrollTrigger.update)

    // GSAP ticker gives seconds; Lenis.raf() expects milliseconds
    const onRaf = (time) => instance.raf(time * 1000)
    gsap.ticker.add(onRaf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      instance.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(onRaf)
      instance.destroy()
      instance = null
    }
  }, [enabled])
}

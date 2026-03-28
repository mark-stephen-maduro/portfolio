import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Each character gets its own inline-block span so GSAP can target it individually.
function CharLine({ text, charsRef, className = '' }) {
  return (
    <span className={`block ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => { if (el) charsRef.current.push(el) }}
          className="inline-block"
        >
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </span>
  )
}

// zarcerog.com name hover: any char → swap group colors + micro-jitter that char.
function useNameHover(groupA, groupB) {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const A_DEFAULT = '#060606'
    const B_DEFAULT = '#ff2d00'
    const A_HOVER   = '#ff2d00'
    const B_HOVER   = '#060606'

    let debounce = null
    const reset = () => {
      clearTimeout(debounce)
      debounce = setTimeout(() => {
        gsap.to(groupA.current, { color: A_DEFAULT, duration: 0.3, overwrite: 'auto' })
        gsap.to(groupB.current, { color: B_DEFAULT, duration: 0.3, overwrite: 'auto' })
      }, 50)
    }

    const handlers = new Map()
    const allChars = [...groupA.current, ...groupB.current]

    allChars.forEach((char) => {
      const onEnter = () => {
        clearTimeout(debounce)
        gsap.to(groupA.current, { color: A_HOVER, duration: 0.3, overwrite: 'auto' })
        gsap.to(groupB.current, { color: B_HOVER, duration: 0.3, overwrite: 'auto' })
        gsap.to(char, {
          y: gsap.utils.random(-8, 8),
          x: gsap.utils.random(-3, 3),
          duration: 0.35,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          overwrite: 'auto',
        })
      }
      handlers.set(char, { onEnter, reset })
      char.addEventListener('mouseenter', onEnter)
      char.addEventListener('mouseleave', reset)
    })

    return () => {
      clearTimeout(debounce)
      allChars.forEach((char) => {
        const h = handlers.get(char)
        if (!h) return
        char.removeEventListener('mouseenter', h.onEnter)
        char.removeEventListener('mouseleave', h.reset)
      })
    }
  }, [groupA, groupB])
}

export function Hero() {
  const ref     = useRef(null)
  const metaRef = useRef(null)
  const lineRef = useRef(null)
  const groupA  = useRef([])
  const groupB  = useRef([])

  useScrollReveal(ref, [metaRef, lineRef], { noTrigger: true, y: 60, duration: 1.2, stagger: 0.12, delay: 0.4 })
  useNameHover(groupA, groupB)

  const scrollToWork = (e) => {
    e.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative min-h-[70svh] md:min-h-screen flex flex-col justify-end section-pad overflow-hidden">
      <div className="absolute top-8 right-8 text-right hidden md:block">
        <p className="font-mono text-xs text-muted tracking-widest uppercase">Manila, PH</p>
      </div>

      <div className="absolute top-0 left-0 w-1 h-full bg-signal opacity-90" />

      {/* Name — split into chars for hover color-swap effect */}
      <div className="relative z-10 font-bebas text-void select-none text-hero">
        <CharLine text="MARK"    charsRef={groupA} />
        <CharLine text="STEPHEN" charsRef={groupA} />
        <CharLine text="MADURO"  charsRef={groupB} className="text-signal" />
      </div>

      <div ref={metaRef} className="flex items-end justify-between mt-8 relative z-10">
        <div>
          <p className="font-bebas uppercase text-void tracking-widest text-role">
            Full-Stack Software Engineer
          </p>
          <p className="font-mono text-muted text-xs mt-2 tracking-wider">
            6+ Years Experience
          </p>
        </div>

        <a
          href="#work"
          onClick={scrollToWork}
          className="group flex items-center gap-3 font-mono text-xs text-void/50 tracking-widest uppercase hover:text-signal"
        >
          <span>Scroll</span>
          <span className="block w-8 h-px bg-void/30 group-hover:w-16 transition-all duration-500 group-hover:bg-signal" />
        </a>
      </div>

      <div ref={lineRef} className="mt-12 relative z-10">
        <div className="w-full h-px bg-void/10" />
      </div>
    </section>
  )
}

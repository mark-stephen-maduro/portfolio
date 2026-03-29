import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// indent stored as Tailwind arbitrary-value classes — no inline styles needed
const LINES = [
  { words: ['MAKE', 'IT', 'FEEL.'],              indent: 'md:pl-[10vw]' },
  { words: ['MAKE', 'IT', 'MEAN', 'SOMETHING.'], indent: 'md:pl-[20vw]' },
  { words: ['KEEP', 'IT', 'RAW.'],               indent: 'md:pl-[5vw]'  },
]

const ALL_WORDS = LINES.flatMap((l) => l.words)

export function Statement() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = ref.current.querySelectorAll('.stmt-word')

      gsap.set(words, { opacity: 0.07 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: `+=${ALL_WORDS.length * 70}`,
          scrub: 1.5,
          pin: true,
        },
      })

      tl.to(words, {
        opacity: 1,
        ease: 'none',
        stagger: { each: 0.5, ease: 'none' },
        duration: 1,
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-void flex flex-col justify-center min-h-screen overflow-hidden gap-[0.05em] px-6 md:px-0"
      data-dark
    >
      {LINES.map(({ words, indent }, li) => (
        <div key={li} className={`${indent} leading-[0.88] md:whitespace-nowrap`}>
          {words.map((word, wi) => (
            <span
              key={`${li}-${wi}`}
              className="stmt-word font-bebas text-cream text-[11vw] md:text-statement inline-block mr-[0.2em]"
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function Preloader({ onComplete }) {
  const ref    = useRef(null)
  const barRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 1
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        if (barRef.current) barRef.current.style.width = '100%'
        gsap.to(ref.current, { yPercent: -100, duration: 0.9, ease: 'power3.inOut', delay: 0.3, onComplete })
        return
      }
      if (barRef.current) barRef.current.style.width = `${current}%`
      setCount(current)
    }, 28)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="preloader" ref={ref}>
      <div className="flex items-end justify-between w-full">
        <span className="font-mono text-cream/60 text-sm tracking-widest uppercase">Loading</span>
        <span className="font-bebas text-cream text-loader">{String(count).padStart(3, '0')}</span>
      </div>
      {/* width is the only remaining inline style — it's a dynamic runtime value */}
      <div className="w-full h-px bg-white/10 mt-4 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute left-0 top-0 h-full bg-signal transition-[width] duration-100 ease-linear"
        />
      </div>
    </div>
  )
}

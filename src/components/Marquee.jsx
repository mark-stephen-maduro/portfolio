import { SKILLS_MARQUEE } from '../constants/data'

function MarqueeSet() {
  return (
    <div className="marquee-set">
      {SKILLS_MARQUEE.map((item, i) => (
        <span
          key={i}
          className={`font-bebas text-cream tracking-widest uppercase mx-4 text-sm md:text-base ${
            item === '·' ? 'text-signal' : ''
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-void py-4" data-dark>
      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <div className="marquee-outer">
        {/* Two identical sets — second runs right after first ends, no flicker */}
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  )
}

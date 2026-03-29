import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PROJECTS } from '../constants/data'

// ProjectCard uses CSS `group` so hover state needs no useState.
// The only remaining inline style is `background: project.color` — a dynamic hex from data.
function ProjectCard({ project }) {
  return (
    <div
      className={`group project-card flex-shrink-0 relative overflow-hidden ${project.bgClass}`}
      data-hover
    >
      <div className="absolute top-6 left-6">
        <span className="font-mono text-white/60 text-xs tracking-widest">{project.index}</span>
      </div>
      <div className="absolute top-6 right-6">
        <span className="font-mono text-white/50 text-xs">{project.year}</span>
      </div>

      {/* Signal underline — expands on hover via group */}
      <div className="absolute bottom-0 left-0 h-1 bg-signal w-0 group-hover:w-full transition-[width] duration-700" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="font-mono text-white/60 text-xs tracking-widest uppercase mb-3">{project.role}</p>

        <h3 className="font-bebas text-cream text-card-title transition-transform duration-[400ms] ease-spring group-hover:-translate-y-1">
          {project.title}
        </h3>

        {/* Grid row collapse: takes no space when closed, pushes tags down when open */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-[400ms] ease-spring">
          <div className="overflow-hidden">
            <p className="font-bebas text-white/60 text-base leading-snug tracking-widest pt-2 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-spring">
              {project.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-white/60 border border-white/10 px-2 py-1 tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const sectionRef = useRef(null)
  const trackRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth - window.innerWidth

      gsap.to(trackRef.current, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      gsap.from('.project-card', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden bg-cream [scroll-margin-top:80px]">
      <div className="flex items-center justify-between px-8 md:px-16 pt-24 pb-8">
        <p className="font-mono text-xs text-muted tracking-widest uppercase">Selected Work</p>
        <p className="font-mono text-xs text-muted tracking-widest">{PROJECTS.length} Projects</p>
      </div>

      <div ref={trackRef} className="work-track pb-16 pl-16">
        {PROJECTS.map((p) => <ProjectCard key={p.index} project={p} />)}
        <div className="w-16 flex-shrink-0" />
      </div>
    </section>
  )
}

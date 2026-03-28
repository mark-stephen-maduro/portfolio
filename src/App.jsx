import { useCallback, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { Preloader } from './components/Preloader'
import { Cursor }    from './components/Cursor'
import { Navbar }    from './components/Navbar'
import { Hero }      from './components/Hero'
import { Marquee }   from './components/Marquee'
import { Manifesto } from './components/Manifesto'
import { Statement } from './components/Statement'
import { Work }      from './components/Work'
import { TechStack } from './components/TechStack'
import { RightNow }  from './components/RightNow'
import { Contact }   from './components/Contact'
import { Footer }    from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onComplete = useCallback(() => setLoaded(true), [])

  useLenis(loaded)

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Cursor />

      {!loaded && <Preloader onComplete={onComplete} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Statement />
          <Manifesto />
          <Work />
          <TechStack />
          <RightNow />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

import { Header } from '@/components/base/header.tsx'
import Particles from '@/components/react-bits/background-particles'
import LightRays from '@/components/react-bits/light-rays'
import { Home } from '@/components/base/home.tsx'
import { About } from '@/components/base/about.tsx'
import { Jobs } from '@/components/base/jobs.tsx'

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <LightRays
          lightSpread={0.8}
          raysOrigin={'top-left'}
          rayLength={2}
          raysSpeed={0.8}
          fadeDistance={0.8}
          mouseInfluence={0}
        />
      </div>
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <Particles
          className="fixed inset-0 -z-20 h-screen w-screen"
          particleCount={1000}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
        />
      </div>
      <Header />
      <main className="flex-1 pt-17">
        <Home />
        <About />
        <Jobs />
      </main>
    </>
  )
}

export default App

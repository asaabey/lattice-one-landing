import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Comparison } from '@/components/sections/Comparison'
import { AIWizardShowcase } from '@/components/sections/AIWizardShowcase'
import { Features } from '@/components/sections/Features'
import { UseCases } from '@/components/sections/UseCases'
import { TechStack } from '@/components/sections/TechStack'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <AIWizardShowcase />
        <Features />
        <UseCases />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Nav } from './Nav'
import { Hero } from './Hero'
import { SocialProof } from './SocialProof'
import { Services } from './Services'
import { BentoGrid } from './BentoGrid'
import { FinalCta } from './FinalCta'
import { Footer } from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black selection:bg-[#00cceb]/30 selection:text-black">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <BentoGrid />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

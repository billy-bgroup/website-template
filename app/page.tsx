import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PriorityRegistration } from '@/components/priority-registration'
import { IntroSection } from '@/components/intro-section'
import { PhaseComparison } from '@/components/phase-comparison'
import { FacilitiesSection } from '@/components/facilities-section'
import { NearbySection } from '@/components/nearby-section'
import { EditorReview } from '@/components/editor-review'
import { SiteFooter } from '@/components/site-footer'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="scroll-smooth pb-16 md:pb-0">
        <Hero />
        <PriorityRegistration />
        <IntroSection />
        <PhaseComparison />
        <FacilitiesSection />
        <NearbySection />
        <EditorReview />
      </main>
      <SiteFooter />
      <FloatingButtons />
    </>
  )
}

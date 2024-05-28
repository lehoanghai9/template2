import Benefits from '@/components/Benefits'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Benefits />
      <Services />
      <section id="pricing" className="h-[1000px]">
        pricing
      </section>
      <section id="faq" className="h-[1000px]">
        faq
      </section>
      {/* <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs /> */}
    </>
  )
}

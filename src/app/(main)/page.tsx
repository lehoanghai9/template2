import Hero from '@/components/Hero'
import Process from '@/components/Process'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <section id="benefits" className="h-[1000px]">
        benefits
      </section>
      <section id="services" className="h-[1000px]">
        services
      </section>
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

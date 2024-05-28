import Benefits from '@/components/Benefits'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import Process from '@/components/Process'
import Services from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Benefits />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      {/* <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs /> */}
    </>
  )
}

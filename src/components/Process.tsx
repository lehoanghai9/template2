import React from 'react'
import { Container, SectionContainer } from './Container'
import SectionHeader from './SectionHeader'
import envelopeLottie from '@/images/lotties/envelopeLottie.json'
import demandLottie from '@/images/lotties/demandLottie.json'
import giftLottie from '@/images/lotties/giftLottie.json'
import { ProcessCard } from './Cards'
import { SingleTestimonial } from './Testimonials'
import { testimonials } from '@/lib/constants'



const Process = () => {
  return (
    <SectionContainer id="process">
      <Container className="flex flex-col items-center">
        <SectionHeader
          label="Process"
          title="Streamlined and Effective"
          description="Our simple 3-step process"
        />
        <div className="flex w-full flex-col items-center justify-center  gap-6 lg:flex-row ">
          <ProcessCard
            title="Subscribe"
            description="Select the plan that is the best fit for your needs."
            lottieJson={demandLottie}
          />
          <ProcessCard
            title="Request"
            description="Request as many designs as you desire."
            lottieJson={envelopeLottie}
          />
          <ProcessCard
            title="Receive"
            description="Your design will be delivered within 2 days."
            lottieJson={giftLottie}
          />
        </div>
        <SingleTestimonial testimonial={testimonials[0]} />
      </Container>
    </SectionContainer>
  )
}

export default Process

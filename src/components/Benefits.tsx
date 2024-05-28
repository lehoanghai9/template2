import React from 'react'
import { Container, SectionContainer } from './Container'
import SectionHeader from './SectionHeader'
import { FadeInStagger } from './FadeIn'
import layersLottie from '@/images/lotties/layersLottie.json'
import clockLottie from '@/images/lotties/clockLottie.json'
import pencilLottie from '@/images/lotties/pencilLottie.json'
import reverseLottie from '@/images/lotties/reverseLottie.json'
import puzzleLottie from '@/images/lotties/puzzleLottie.json'
import tickLottie from '@/images/lotties/tickLottie.json'
import { BenefitCard } from './Cards'

const Benefits = () => {
  return (
    <SectionContainer id="benefits">
      <Container>
        <SectionHeader
          label="Benefits"
          title="Subscription Benefits"
          description="Design perks so irresistible, you'll wonder why you ever looked elsewhere"
        />
        <div className="flex w-full justify-center">
          <FadeInStagger className="grid justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Endless Requests"
              description="Request as many designs as you want."
              lottieJson={layersLottie}
            />
            <BenefitCard
              title="Fast Turnaround Time"
              description="Get your designs quickly, ensuring timely delivery."
              lottieJson={clockLottie}
            />
            <BenefitCard
              title="Customized Designs"
              description="Your designs are 100% custom made."
              lottieJson={pencilLottie}
            />
            <BenefitCard
              title="Unlimited Revisions"
              description="Request revisions until you're completely satisfied."
              lottieJson={reverseLottie}
            />
            <BenefitCard
              title="Diverse Designs"
              description="Logos, branding, illustrations, web design, and much more."
              lottieJson={puzzleLottie}
            />
            <BenefitCard
              title="Cancel Anytime"
              description="Easily pause or cancel your subscription."
              lottieJson={tickLottie}
            />
          </FadeInStagger>
        </div>
      </Container>
    </SectionContainer>
  )
}

export default Benefits

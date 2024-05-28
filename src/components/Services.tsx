import React from 'react'
import { Container, SectionContainer } from './Container'
import SectionHeader from './SectionHeader'
import { FadeIn, FadeInStagger } from './FadeIn'
import websiteIcon from '@/images/websiteIcon.png'
import Image from 'next/image'

const ServiceCard = () => {
  return (
    <FadeIn>
      <div className="justShadow flex w-full flex-col items-center gap-6 rounded-universal px-8 py-6 md:max-w-[550px] md:flex-row">
        <div className="p-2.5 rounded-full bg-main/20 w-[60px]">
          <Image src={websiteIcon} alt="web design icon" className='w-[50px] h-[50px]'/>
        </div>
        <div className="space-y-2.5">
          <h2 className="text-center text-lg font-semibold md:text-left md:text-[1.4rem]">
            Website design
          </h2>
          <p className="text-center text-muted md:text-left md:text-lg">
            Engaging websites tailored to your brand, blending creativity with
            functionality for a captivating online presence.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

const Services = () => {
  return (
    <SectionContainer id="services">
      <Container>
        <SectionHeader
          label="Services"
          title="What we offer"
          description="A glimpse into our wide range of services"
        />
        <FadeInStagger className="grid justify-items-center gap-6 lg:grid-cols-2">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </FadeInStagger>
      </Container>
    </SectionContainer>
  )
}

export default Services

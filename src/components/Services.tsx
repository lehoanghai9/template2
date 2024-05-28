import React from 'react'
import { Container, SectionContainer } from './Container'
import SectionHeader from './SectionHeader'
import { FadeIn, FadeInStagger } from './FadeIn'
import Image from 'next/image'
import { Service, services } from '@/lib/constants'

const ServiceCard: React.FC<Service> = ({ image, title, description }) => {
  return (
    <FadeIn>
      <div className="justShadow flex w-full flex-col items-center gap-6 rounded-universal px-8 py-6 md:flex-row">
        <div className="rounded-full bg-main/20 p-2.5 aspect-square">
          <Image
            src={image}
            alt={title + ' service' + ' image'}
            width={50}
            height={50}
            className="aspect-square w-[50px] h-[50px]"
          />
        </div>
        <div className="space-y-2.5 max-w-[376px]">
          <h2 className="text-center text-lg font-semibold md:text-left md:text-[1.4rem]">
            {title}
          </h2>
          <p className="text-center text-muted md:text-left md:text-lg">
            {description}
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
        <FadeInStagger className="grid justify-items-center gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
              key={service.title}
            />
          ))}
        </FadeInStagger>
      </Container>
    </SectionContainer>
  )
}

export default Services

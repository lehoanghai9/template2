'use client'
import { Testimonial, testimonials } from '@/lib/constants'
import { useAnimate } from 'framer-motion'
import React from 'react'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import Stars from './Stars'
import SectionHeader from './SectionHeader'
import { Container, SectionContainer } from './Container'
import Marquee from 'react-fast-marquee'

interface TestimonialProps {
  testimonial: Testimonial
}

export const SingleTestimonial: React.FC<TestimonialProps> = ({
  testimonial,
}) => {
  const [scope, animate] = useAnimate()

  const onHover = () => {
    animate(
      '#reveal',
      {
        rotate: '-25deg',
        transformOrigin: 'left',
        y: -30,
        x: -15,
      },
      { duration: 0.7, type: 'spring' },
    )

    animate('#secret', {
      opacity: 1,
    })
  }

  const onLeave = () => {
    animate(
      '#reveal',
      {
        rotate: '0deg',
        transformOrigin: 'left',
        y: 0,
        x: 0,
      },
      { duration: 0.7, type: 'spring' },
    )

    animate('#secret', {
      opacity: 0,
    })
  }

  return (
    <FadeIn>
      <div className="justShadow mt-40 flex w-full max-w-[700px] flex-col items-center gap-10 rounded-universal p-[30px] md:flex-row md:items-start">
        <div className="">
          <div className="absolute aspect-square w-[150px] rotate-[8deg] rounded-universal bg-main" />
          <Image
            src={testimonial.image}
            width={150}
            height={150}
            alt="client image"
            className="relative aspect-square w-[150px] rounded-universal object-cover object-top"
          />
          <div ref={scope} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <div
              id="secret"
              className="absolute mt-1 px-2 py-2 text-lg font-medium"
            >
              {testimonial.position}
            </div>
            <div
              id="reveal"
              className="shadowMain relative mt-6 rounded-2xl bg-white px-2 py-2 text-center text-lg font-medium"
            >
              {testimonial.author}
            </div>
          </div>
        </div>
        <div className="md:max-w-[450px]">
          <h2 className="mb-2.5 text-center text-[1.8rem] font-semibold italic text-main md:text-left">
            {testimonial.title}
          </h2>
          <p className="mb-6 text-center text-muted md:text-left">
            {testimonial.comment}
          </p>
          <div className="flex justify-center md:justify-end">
            <Stars amount={testimonial.rating} />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="mr-4 flex">
      <div className="mediumShadow w-[400px] space-y-6 rounded-universal p-7 ">
        <div className="flex">
          <Stars amount={testimonial.rating} />
        </div>
        <p className="line-clamp-3 text-lg text-muted">
          &quot;{testimonial.comment}&quot;
        </p>

        <div className="flex gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.author + ' image'}
            className="aspect-square w-[70px] rounded-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-[1.4rem] font-semibold">
              {testimonial.author}
            </h3>
            <h4>{testimonial.position}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <SectionContainer id="pricing" className="pb-4 md:pb-12">
      <SectionHeader
        label="Testimonials"
        title="Don't trust us. Trust them."
        description="Hear what our customers say"
      />
      <Container>
        <FadeIn>
          <Marquee
            className="flex overflow-hidden pb-12 pt-5"
            pauseOnHover
            gradient
            gradientWidth={30}
          >
            {testimonials.slice(1).map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </Marquee>
        </FadeIn>
      </Container>
    </SectionContainer>
  )
}

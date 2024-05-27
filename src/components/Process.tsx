'use client'
import React from 'react'
import { Container } from './Container'
import SectionHeader from './SectionHeader'
import envelopeLottie from '@/images/lotties/envelopeLottie.json'
import demandLottie from '@/images/lotties/demandLottie.json'
import giftLottie from '@/images/lotties/giftLottie.json'
import clientImage from '@/images/barry-allenjpg.jpg'
import { useAnimate } from 'framer-motion'

/* Dynamic import countering the server-side rendering issue on the lottie window object */
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FadeIn } from './FadeIn'
import Stars from './Stars'
import { Testimonial, testimonials } from '@/lib/constants'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface ProcessCardProps {
  title: string
  description: string
  lottieJson: any
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  lottieJson,
}) => {
  return (
    <FadeIn>
      <div className="justShadow group relative inline-flex h-[320px] w-[320px] items-center justify-center overflow-hidden rounded-universal bg-white px-5 py-10">
        <div className="z-10 mt-10 flex flex-col items-center space-y-4">
          <div className="aspect-square w-[60px]">
            <Lottie animationData={lottieJson} />
          </div>
          <h3 className="text-center text-lg font-semibold group-hover:text-white md:text-[1.4rem] lg:text-2xl">
            {title}
          </h3>
          <p className="text-center text-muted group-hover:text-white lg:text-lg">
            {description}
          </p>
        </div>
        <span className="absolute h-0 w-0 rounded-full bg-black opacity-0 transition-all duration-500 ease-out group-hover:h-[500px] group-hover:w-[500px] group-hover:opacity-100" />
      </div>
    </FadeIn>
  )
}

interface SingleTestimonialProps {
  testimonial: Testimonial
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
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

const Process = () => {
  return (
    <section id="process" className="pb-16 pt-24 md:pb-24 lg:pt-0">
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
    </section>
  )
}

export default Process

'use client'
import { Testimonial } from '@/lib/constants'
import { useAnimate } from 'framer-motion'
import React from 'react'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import Stars from './Stars'

interface SingleTestimonialProps {
  testimonial: Testimonial
}

export const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
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

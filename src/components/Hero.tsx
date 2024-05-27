import React from 'react'
import { Container } from './Container'
import { SignatureLogo } from './Logo'
import { SignatureButton } from './SignatureButton'
import CtaButton from './CtaButton'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { FadeIn, FadeInStagger } from './FadeIn'
import Link from 'next/link'
import { Review, Stat, reviews, stats } from '@/lib/constants'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import logo1 from '@/images/logos/logo1.svg'
import logo2 from '@/images/logos/logo2.svg'
import logo3 from '@/images/logos/logo3.svg'
import logo4 from '@/images/logos/logo4.svg'
import logo5 from '@/images/logos/logo5.svg'
import logo6 from '@/images/logos/logo6.svg'
import Marquee from 'react-fast-marquee'

interface ReviewCardProps {
  review: Review
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  let parts: (string | JSX.Element)[] = [review.comment]

  if (review.highlight) {
    parts = review.comment
      .split(new RegExp(`(${review.highlight})`, 'gi'))
      .map((part, index) =>
        part.toLowerCase() === review.highlight!.toLowerCase() ? (
          <span key={index} className="text-main">
            {part}
          </span>
        ) : (
          part
        ),
      )
  }
  return (
    <div className="justShadow rounded-universal w-full space-y-4 bg-white p-6">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src={review.image.src}
            alt={review.clientName}
            width={30}
            height={30}
            className="aspect-square rounded-full object-cover"
          />
          <h4 className="text-sm font-semibold">{review.clientName}</h4>
        </div>

        <div className="flex">
          {Array.from({ length: review.stars }, (_, index) => (
            <StarIcon className="aspect-square w-6 text-main" />
          ))}
        </div>
      </div>
      <p className="">"{parts}"</p>
    </div>
  )
}

const Reviews = () => {
  const reviewsToShow = reviews.slice(0, 2)
  return (
    <FadeIn>
      <div className="flex w-full flex-col gap-6 md:flex-row ">
        {reviewsToShow.map((review) => (
          <ReviewCard review={review} key={review.clientName} />
        ))}
      </div>
    </FadeIn>
  )
}

interface StatItemProps {
  stat: Stat
}

const StatItem = ({ stat }: StatItemProps) => {
  const highlightedAmount = stat.amount.slice(-1)
  const restAmount = stat.amount.slice(0, -1)
  return (
    <div className="space-y-2.5 text-center md:space-y-3">
      <h3 className="text-3xl font-semibold lg:text-5xl">
        <span>
          {restAmount}
          <span className="text-main">{highlightedAmount}</span>
        </span>
      </h3>
      <h4 className="text-base font-normal text-muted sm:text-lg">
        {stat.name}
      </h4>
    </div>
  )
}

const Stats = () => {
  return (
    <FadeIn>
      <section
        id="stats"
        className="flex flex-col justify-center gap-12 py-6 md:flex-row md:gap-24"
      >
        {stats.map((stat) => (
          <StatItem stat={stat} key={stat.name} />
        ))}
      </section>
    </FadeIn>
  )
}

const CallToAction = () => {
  return (
    <FadeIn>
      <div className="flex justify-center ">
        <Link href="#pricing">
          <CtaButton
            label={<>Get started</>}
            Icon={
              <div className="relative  flex items-center justify-center rounded-full bg-white p-2.5">
                <ArrowRightIcon className=" aspect-square w-4 text-black duration-300 ease-out group-hover:rotate-90" />
              </div>
            }
          />
        </Link>
      </div>
    </FadeIn>
  )
}

const Title = () => {
  return (
    <section id="hero" className="overflow-y-hidden pt-8">
      <FadeIn>
        <div className="flex flex-col items-center space-y-6">
          <SignatureButton Icon={SignatureLogo} label="Developed by Hai" />
          <h1 className="text-center text-3xl font-semibold leading-tight text-gray-900 sm:hidden">
            Endless design <br /> possibilities for everyone
          </h1>

          <div className="hidden items-center justify-center gap-2.5 text-5xl font-semibold leading-tight text-gray-900 sm:flex xl:text-6xl">
            <div className="text-right">
              <h1>Endless</h1>
              <h1>possibilities</h1>
            </div>
            <div className="text-left text-main">
              <h1>Design</h1>
              <h1>for everyone</h1>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

const Description = () => {
  return (
    <FadeIn>
      <p className="text-center text-base text-muted md:max-w-[632px] md:text-lg">
        Ready for top-tier design services at an unbeatable value? With one
        subscription, unlock unlimited design requests and elevate your brand to
        new heights.
      </p>
    </FadeIn>
  )
}

const LogosMarquee = () => {
  const logos = [
    { src: logo1, key: 'logo1' },
    { src: logo2, key: 'logo2' },
    { src: logo3, key: 'logo3' },
    { src: logo4, key: 'logo4' },
    { src: logo5, key: 'logo5' },
    { src: logo6, key: 'logo6' },
  ]
  return (
    <FadeIn>
      <div className="space-y-2.5">
        <h2 className="px-2.5 py-4 text-center text-[1.4rem] font-medium">
          Trusted by
        </h2>
        <Marquee className="flex overflow-hidden py-4" gradient pauseOnHover>
          {logos.map(({ src, key }) => (
            <Image
              src={src}
              alt="name"
              className="mr-16 h-8"
              unoptimized
              key={key}
            />
          ))}
        </Marquee>
      </div>
    </FadeIn>
  )
}

const Hero = () => {
  return (
    <section className="overflow-hidden py-12 lg:pb-32 xl:pb-36">
      <Container>
        <FadeInStagger>
          <div className="space-y-12">
            <div className="mb-28 md:mb-0">
              <div className="mb-12 flex flex-col items-center space-y-6">
                <Title />
                <Description />
              </div>
              <CallToAction />
            </div>
            <Reviews />
            <Stats />
            <LogosMarquee />
          </div>
        </FadeInStagger>
      </Container>
    </section>
  )
}

export default Hero

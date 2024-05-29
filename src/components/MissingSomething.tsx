'use client'
import React from 'react'
import { FadeIn } from './FadeIn'
import dynamic from 'next/dynamic'
import CtaButton from './CtaButton'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import magnifyingGlassLottie from '@/images/lotties/zoomLottie.json'

const MissingSomething = () => {
  return (
    <section id="faq" className="pt-6">
      <FadeIn>
        <div className="mediumShadow flex w-full flex-col items-center  rounded-universal px-10 pb-12 ">
          <div className="mediumShadow flex aspect-square w-[90px] items-center justify-center rounded-full bg-white">
            <Lottie
              animationData={magnifyingGlassLottie}
              className="mr-2 w-[60px]"
            />
          </div>
          <h3 className="pt-6 text-center text-2xl font-semibold">
            Can't find what you're looking for?
          </h3>
          <div className="pt-6">
            <CtaButton
              label={<span className="text-white">Book a call</span>}
              Icon={
                <div className="relative flex items-center justify-center rounded-full bg-white p-2.5">
                  <ArrowRightIcon className=" aspect-square w-4 -rotate-45 text-black" />
                </div>
              }
            />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default MissingSomething

'use client'
import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
/* Dynamic import countering the server-side rendering issue on the lottie window object */
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface BenefitCardProps {
  title: string
  description: string
  lottieJson: any
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  lottieJson,
}) => {
  return (
    <FadeIn>
      <div className="justShadow group relative inline-flex w-full max-w-[320px] items-center justify-center overflow-hidden rounded-universal bg-white px-5 py-10">
        <div className="z-10 mt-10 flex flex-col items-center space-y-4">
          <motion.div
            className="aspect-square w-[60px]"
            whileHover={{ rotate: '180deg' }}
          >
            <Lottie animationData={lottieJson} />
          </motion.div>
          <h3 className="text-center text-lg font-semibold md:text-[1.4rem] lg:text-2xl">
            {title}
          </h3>
          <p className="text-center leading-tight text-muted lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

interface ProcessCardProps {
  title: string
  description: string
  lottieJson: any
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
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

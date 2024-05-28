'use client'
import { FadeIn } from './FadeIn'
import { motion } from 'framer-motion'
/* Dynamic import countering the server-side rendering issue on the lottie window object */
import dynamic from 'next/dynamic'
import { satoshi } from '@/fonts/fonts'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { Plan } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
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
      <div className="mediumShadow group relative inline-flex w-full max-w-[320px] items-center justify-center overflow-hidden rounded-universal bg-white px-5 py-10">
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

interface PricingCardProps {
  plan: Plan
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <FadeIn>
      <div
        className="hardShadow w-[350px] rounded-universal p-6 sm:w-[400px] md:p-8"
        style={satoshi.style}
      >
        <div className="space-y-3">
          <h2
            className={`text-2xl font-medium ${plan.featured && 'text-main'}`}
          >
            {plan.name}
          </h2>
          <h4 className="font-bold">
            <span className="text-4xl">
              $ {formatPrice(plan.monthlyPrice)}{' '}
            </span>
            <span className="text-xl">/ month</span>
          </h4>
          <p className="text-lg font-medium text-muted">{plan.description}</p>
        </div>
        <div className="space-y-4 py-6 md:py-8">
          {plan.features.map((feature) => (
            <div className="flex gap-4" key={feature.title}>
              {feature.available ? (
                <CheckCircleIcon className="aspect-square w-6 text-main" />
              ) : (
                <XCircleIcon className="aspect-square w-6 text-muted" />
              )}
              <p className="text-[1.05rem] font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
        <button className="shadowMain flex w-full items-center justify-center gap-2 rounded-full border border-main/10 px-4 py-2">
          <span className="text-lg font-medium text-main">Get started</span>
          <ArrowRightIcon className="aspect-square w-4 text-main" />
        </button>
      </div>
    </FadeIn>
  )
}

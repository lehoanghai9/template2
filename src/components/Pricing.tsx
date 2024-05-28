import { Container, SectionContainer } from '@/components/Container'
import SectionHeader from './SectionHeader'
import { PricingCard } from './Cards'
import { plans } from '@/lib/constants'
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { satoshi } from '@/fonts/fonts'

export function Pricing() {
  return (
    <SectionContainer id="pricing">
      <Container>
        <SectionHeader
          label="Pricing"
          title="Choose your plan"
          description="Pick a plan that suits your needs"
        />
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
          {plans.map((plan) => (
            <PricingCard plan={plan} key={plan.name} />
          ))}
        </div>
        <div
          className="mt-12 flex flex-col md:flex-row items-center md:gap-6 justify-center gap-3 text-main"
          style={satoshi.style}
        >
          <div className="flex gap-2">
            <CurrencyDollarIcon className="aspect-square w-6" />
            <span className="text-lg font-medium">Money back guarantee</span>
          </div>
          <div className="flex gap-2">
            <XCircleIcon className="aspect-square w-6" />
            <span className="text-lg font-medium">Money back guarantee</span>
          </div>
        </div>
      </Container>
    </SectionContainer>
  )
}

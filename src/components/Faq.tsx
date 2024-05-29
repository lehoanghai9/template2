import React from 'react'
import { Container, SectionContainer } from './Container'
import SectionHeader from './SectionHeader'
import { FadeIn, FadeInStagger } from './FadeIn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'
import { Faq, faqs } from '@/lib/constants'
import MissingSomething from './MissingSomething'

const FaqAccordion: React.FC<Faq> = ({ question, answer }) => {
  return (
    <FadeIn>
      <Accordion
        type="single"
        collapsible
        className="mediumShadow rounded-universal text-xl"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-7 px-6 text-left text-lg">
            {question}
          </AccordionTrigger>
          <AccordionContent className="pb-7 text-base text-muted">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </FadeIn>
  )
}

const Faqs = () => {
  return (
    <SectionContainer id="faq">
      <SectionHeader label="FAQ" title="Frequently Asked Questions" />
      <Container>
        <FadeInStagger className="mx-auto space-y-2 lg:max-w-[840px]">
          {faqs.map((faq) => (
            <FaqAccordion
              question={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
          <MissingSomething />
        </FadeInStagger>
      </Container>
    </SectionContainer>
  )
}

export default Faqs

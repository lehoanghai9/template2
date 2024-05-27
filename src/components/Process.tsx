'use client'
import React from 'react'
import { Container } from './Container'
import SectionHeader from './SectionHeader'
import { UserIcon } from '@heroicons/react/24/solid'

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description }) => {
  return (
    <div className="justShadow rounded-universal group relative inline-flex h-[320px] w-[320px] items-center justify-center overflow-hidden bg-white py-10 px-5">
      <div className="flex flex-col items-center z-10 space-y-4">
        <UserIcon className="aspect-square w-[60px] text-main" />
        <h3 className='text-center group-hover:text-white font-semibold text-lg md:text-[1.4rem] lg:text-2xl'>{title}</h3>
        <p className='text-center text-muted group-hover:text-white lg:text-lg'>{description}</p>
      </div>
      <span className="absolute h-0 w-0 rounded-full bg-black opacity-0 transition-all duration-500 ease-out group-hover:h-[500px] group-hover:w-[500px] group-hover:opacity-100" />
    </div>
  );
}

const Process = () => {
  return (
    <section id="process" className="py-24">
      <Container>
        <SectionHeader
          label="Process"
          title="Streamlined and Effective"
          description="Our simple 3-step process"
        />
        <div className="flex w-full flex-col items-center justify-center  gap-6 lg:flex-row ">
          <ProcessCard title='Subscribe' description='Select the plan that is the best fit for your needs.'/>
          <ProcessCard title='Request' description='Request as many designs as you desire.'/>
          <ProcessCard title='Receive' description='Your design will be delivered within 2 days.'/>
        </div>
      </Container>
    </section>
  )
}

export default Process

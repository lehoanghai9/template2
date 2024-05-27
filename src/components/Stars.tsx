import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

interface StarsProps {
  amount: number
}

const Stars: React.FC<StarsProps> = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <StarIcon key={index} className="aspect-square w-6 text-main" />
      ))}
    </>
  )
}

export default Stars

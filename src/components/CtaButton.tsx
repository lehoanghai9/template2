import { ArrowRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React from 'react'

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label: React.ReactElement
  Icon?: React.ReactElement
}

const CtaButton = ({ className, label, Icon }: CtaButtonProps) => {
  return (
    <button
      className={clsx(
        `group relative flex items-center gap-2 overflow-hidden rounded-full bg-main text-white shadow-sm shadow-main/20 ${
          Icon ? 'py-1 pl-4 pr-1' : 'px-4 py-2.5'
        }`,
        className,
      )}
    >
      <span
        className={`absolute right-0 z-0 h-9 w-9  rounded-full bg-black opacity-0 transition-all duration-[500ms] ease-in-out group-hover:h-[46px] group-hover:w-[165px] group-hover:opacity-100`}
      />
      <h4 className="z-10">{label}</h4>
      {Icon && Icon}
    </button>
  )
}

interface CtaButtonSecondaryProps {
  label: string
}

export const CtaButtonSecondary = ({ label }: CtaButtonSecondaryProps) => {
  return (
    <CtaButton
      label={<span className="text-black group-hover:text-white">{label}</span>}
      className="bg-white text-black hover:text-white"
      Icon={
        <div className="relative  flex items-center justify-center rounded-full bg-black p-2.5 duration-100 group-hover:bg-white">
          <ArrowRightIcon className=" aspect-square w-4 -rotate-45 text-white duration-300 ease-out group-hover:rotate-0 group-hover:text-black" />
        </div>
      }
    />
  )
}

export default CtaButton

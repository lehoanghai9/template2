import clsx from 'clsx'
import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  className?: string
}

const Badge = ({ label, className, ...props }: BadgeProps) => {
  return (
    <div
      className={clsx(
        'w-fit rounded-full bg-main/10 px-4 py-2 text-main',
        className,
      )}
      {...props}
    >
      {label}
    </div>
  )
}

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        'text-center text-[1.4rem] font-semibold md:text-4xl  lg:text-[2.8rem]',
        className,
      )}
      {...props}
    >
      {title}
    </h2>
  )
}

interface SectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  description: string
  className?: string
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  description,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx(
        'text-center md:text-[1.4rem] text-muted  md:text-lg',
        className,
      )}
      {...props}
    >
      {description}
    </p>
  )
}

interface SectionHeaderWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const SectionHeaderWrapper: React.FC<SectionHeaderWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx('flex w-full flex-col items-center gap-4 mb-12', className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  className?: string
  label: string
  title: string
  description: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className,
}) => {
  return (
    <SectionHeaderWrapper className={className}>
      <Badge label={label} />
      <SectionTitle title={title} />
      <SectionDescription description={description} />
    </SectionHeaderWrapper>
  )
}

export default SectionHeader

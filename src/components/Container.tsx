import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-6xl sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

export function SectionContainer({
  id,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      id={id}
      className={clsx('pb-16 pt-24 md:pb-24 lg:pt-24', className)}
      {...props}
    />
  )
}

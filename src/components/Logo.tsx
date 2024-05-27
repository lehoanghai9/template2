import clsx from 'clsx'

export function SignatureLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
    </svg>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
      />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="fill-main" />
    </svg>
  )
}

interface LogoWithTitleProps extends React.ComponentPropsWithoutRef<'span'> {
  width?: number | string
  height?: number | string
}

export function LogoWithTitle({
  className,
  width,
  height,
  ...props
}: LogoWithTitleProps) {
  return (
    <span
      className={clsx(
        'flex items-center gap-2 text-[28px] font-bold',
        className,
      )}
      {...props}
    >
      <Logomark width={width} height={height} className="fill-main" />
      Endless.
    </span>
  )
}

export function LogoWithoutTitle({
  className,
  width,
  height,
  ...props
}: LogoWithTitleProps) {
  return (
    <span
      className={clsx(
        'flex items-center rounded-full bg-white p-1.5',
        className,
      )}
      {...props}
    >
      <Logomark width={width} height={height} className="fill-main" />
    </span>
  )
}

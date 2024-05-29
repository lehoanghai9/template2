import clsx from 'clsx'
import Link from 'next/link'

interface SignatureButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label?: string
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const SignatureButton: React.FC<SignatureButtonProps> = ({
  className,
  label,
  Icon,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `shadowMain group flex gap-2 rounded-full bg-white px-5 py-2.5 text-base font-[400] text-black hover:bg-white hover:text-main hover:duration-200`,
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="stroke-black group-hover:stroke-main" />}
      {label ? label : 'Developed by Hai'}
    </button>
  )
}

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
  className?: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  className,
  Icon,
}) => {
  return (
    <Link href={href} target='_blank'>
      <button className={clsx("hardShadow flex items-center justify-center hover:scale-125 transition-all duration-200 rounded-full p-4", className)}>
        <Icon className="aspect-square w-6" />
      </button>
    </Link>
  )
}

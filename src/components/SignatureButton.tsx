import clsx from 'clsx'

interface SignatureButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label?: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
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
      <Icon className="stroke-black group-hover:stroke-main" />
      {label ? label : 'Developed by Hai'}
    </button>
  )
}

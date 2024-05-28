import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: {
    template: 'Template 2',
    default: 'Template 2',
  },
  description: 'BLAH BLAH SOMETHING',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-white pb-10 antialiased   md:pb-16',
        poppins.className,
      )}
    >
      <body>{children}</body>
    </html>
  )
}

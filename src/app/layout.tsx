import { type Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = localFont({src: "../fonts/Poppins-Variable.woff2"})

export const metadata: Metadata = {
  title: {
    template: 'Template 2',
    default: 'Template 2',
  },
  description:
    'BLAH BLAH SOMETHING',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-white antialiased pb-10   md:pb-16', inter.className)}>
      <body>{children}</body>
    </html>
  )
}

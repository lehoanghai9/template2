'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navlinks } from '@/lib/constants'
import { useInViewSection } from '@/hooks/useInViewSection'
import useReducedNavbar from '@/hooks/useReducedNavbar'

export function NavLinks() {
  const currentSection = useInViewSection()

  const reducedNavbar = useReducedNavbar()

  return navlinks.map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors delay-150  hover:delay-0 lg:text-base ${
        reducedNavbar ? 'text-white ' : 'text-muted hover:text-gray-900'
      }`}
    >
      <AnimatePresence>
        {href === `/#${currentSection}` && (
          <motion.span
            className="absolute inset-0 rounded-full bg-main"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}

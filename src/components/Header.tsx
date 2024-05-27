'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { LogoWithTitle, LogoWithoutTitle } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import CtaButton from './CtaButton'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { navlinks } from '@/lib/constants'
import { useInViewSection } from '@/hooks/useInViewSection'
import useReducedNavbar from '@/hooks/useReducedNavbar'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-center text-lg leading-7 tracking-tight text-muted"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="mx-auto max-w-6xl">
      <nav className="md:hidden">
        <HeaderMobile />
      </nav>
      <nav className="hidden justify-center md:flex">
        <HeaderLarger />
      </nav>
    </header>
  )
}

function HeaderMobile() {
  return (
    <div className="fixed z-50 mx-auto flex w-full max-w-6xl justify-between bg-white px-4 py-2.5 pb-4 pt-4 ">
      <div className="relative z-10 flex items-center gap-16">
        <Link href="/" aria-label="Home">
          <LogoWithTitle
            width={28}
            height={28}
            className="h-6 flex-none text-xl"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Popover className="md:hidden">
          {({ open }) => (
            <>
              <PopoverButton
                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                aria-label="Toggle site navigation"
              >
                {({ open }) =>
                  open ? (
                    <ChevronUpIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )
                }
              </PopoverButton>
              <AnimatePresence initial={false}>
                {open && (
                  <>
                    <PopoverOverlay
                      static
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                    />
                    <PopoverPanel
                      static
                      as={motion.div}
                      initial={{ opacity: 0, y: -32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -32,
                        transition: { duration: 0.2 },
                      }}
                      className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-20 shadow-2xl shadow-gray-900/20"
                    >
                      <div className="space-y-4">
                        {navlinks.map(([label, href]) => (
                          <MobileNavLink href={href} key={label}>
                            {label}
                          </MobileNavLink>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-col gap-4">
                        <button className="rounded-full bg-main px-4 py-3 text-white duration-300 hover:bg-black">
                          Book a call
                        </button>
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

const variants: { [key: string]: React.CSSProperties } = {
  open: {
    maxWidth: '1152px',
    padding: '12px',
  },
  closed: {
    background: 'black',
    width: '640px',
    padding: '6px',
    gap: '12px',
  },
}

function HeaderLarger() {
  const reducedNavbar = useReducedNavbar()
  return (
    <div className="flex w-full justify-center">
      <motion.div
        layout
        style={reducedNavbar ? variants.closed : variants.open}
        className=" fixed top-0 z-50 mx-auto mt-4 flex w-full justify-between rounded-full  backdrop-blur-sm"
      >
        <motion.div layout className="relative z-10 flex items-center gap-16">
          <Link href="/" aria-label="Home">
            {reducedNavbar ? (
              <motion.div layout>
                <LogoWithoutTitle width={28} height={28} />
              </motion.div>
            ) : (
              <LogoWithTitle
                width={28}
                height={28}
                className="h-6 flex-none text-xl md:text-2xl lg:text-3xl"
              />
            )}
          </Link>
        </motion.div>
        <motion.div
          layout
          className="hidden items-center md:flex md:gap-6 lg:gap-10"
        >
          <NavLinks />
        </motion.div>
        <motion.div layout className="flex items-center gap-6">
          <AnimatePresence>
            {reducedNavbar ? (
              <motion.button
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex items-center justify-center rounded-full bg-white p-2.5"
              >
                <ArrowRightIcon className=" aspect-square w-4 -rotate-45 text-black" />
              </motion.button>
            ) : (
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CtaButton
                  label={<span className="text-white">Book a call</span>}
                  className="hidden lg:flex"
                  Icon={
                    <div className="relative flex items-center justify-center rounded-full bg-white p-2.5">
                      <ArrowRightIcon className=" aspect-square w-4 -rotate-45 text-black" />
                    </div>
                  }
                />
                <CtaButton
                  label={<span className="text-white">Book a call</span>}
                  className="hidden md:flex lg:hidden"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

import { Container } from '@/components/Container'
import { LogoWithTitle } from '@/components/Logo'
import { navlinks, socialMediaLinks } from '@/lib/constants'
import Link from 'next/link'
import { SignatureButton, SocialButton } from './SignatureButton'
import { GithubLogo } from '@/components/Logo'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col  items-center pt-16 text-sm">
          <LogoWithTitle
            width={50}
            height={50}
            className="h-6 flex-none text-[50px]"
          />
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
              {navlinks.map(([link, href]) => (
                <Link
                  href={href}
                  className="text-center  text-muted duration-200 hover:text-main"
                >
                  {link}
                </Link>
              ))}
            </div>
            <p className="text-muted md:text-center">
              Icons from{' '}
              <Link
                href="https://lordicon.com/"
                className=" text-muted duration-200 hover:text-main"
              >
                Lordicon
              </Link>{' '}
              &{' '}
              <Link
                href="https://icons8.com/"
                className=" text-muted duration-200 hover:text-main"
              >
                Icons8
              </Link>
            </p>
            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-6">
              <SignatureButton className="text-sm" />
              <Link href="https://x.com/arunspacek">
                <SignatureButton
                  className="text-sm"
                  label="Designed by Arun K"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <div className='flex gap-4'>
            {socialMediaLinks.map((social) => (
              <SocialButton
                Icon={social.Icon}
                href={social.href}
                key={social.type}
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()} Endless.
          </p>
        </div>
      </Container>
    </footer>
  )
}

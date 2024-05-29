import { Container } from '@/components/Container'
import CtaButton from '@/components/CtaButton'
import { Layout } from '@/components/Layout'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <p className="font-semibold text-main">
          404
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-muted">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/">
          <CtaButton
            label={<>Go back home</>}
            Icon={
              <div className="relative  flex items-center justify-center rounded-full bg-white p-2.5">
                <ArrowRightIcon className=" aspect-square w-4 text-black duration-300 ease-out  group-hover:rotate-180" />
              </div>
            }
            className="mt-8"
          />
        </Link>
      </Container>
    </Layout>
  )
}

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto pt-[100px] px-4 md:px-10">{children}</main>
      {/* <Footer /> */}
    </>
  )
}

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto px-4 pt-[100px] md:px-10">{children}</main>
      <Footer />
    </>
  )
}

import { useInViewSection } from './useInViewSection'
import { navlinks } from '@/lib/constants'

const useReducedNavbar = (): boolean => {
  const currentSection: string | null = useInViewSection()

  const isReduced: boolean = navlinks.some(
    ([label, href]) => href === '/#' + currentSection,
  )
  return isReduced
}

export default useReducedNavbar

"use client"
import { useState, useEffect } from 'react'

export function useInViewSection() {
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust this threshold to determine how much of the section needs to be in view
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return currentSection
}

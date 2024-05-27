import client1Image from '@/images/max-bentley.jpg'
import client2Image from '@/images/ethan-chambers.jpg'
import { StaticImageData } from 'next/image'
type Navlink = [string, string]

export const navlinks: Navlink[] = [
  ['Process', '/#process'],
  ['Benefits', '/#benefits'],
  ['Services', '/#services'],
  ['Pricing', '/#pricing'],
  ['FAQ', '/#faq'],
]

export interface Review {
  clientName: string
  image: StaticImageData
  stars: number
  comment: string
  highlight?: string
}

export const reviews: Review[] = [
  {
    clientName: 'Max Bentley',
    image: client1Image,
    stars: 5,
    comment:
      'Unmatched creativity and convenience. Endless transformed my brand effortlessly!',
    highlight: 'transformed my brand',
  },
  {
    clientName: 'Ethan Chambers',
    image: client2Image,
    stars: 5,
    comment:
      'Game-changer for my startup. Affordable, top-notch designs every time!',
    highlight: 'top-notch designs',
  },
]

export interface Stat {
  name: string
  amount: string
}

export const stats: Stat[] = [
  { name: 'Happy customers', amount: '27k+' },
  { name: 'Projects completed', amount: '100k+' },
  { name: 'Customer satisfaction', amount: '99.8%' },
]

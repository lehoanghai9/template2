import client1Image from '@/images/max-bentley.jpg'
import client2Image from '@/images/ethan-chambers.jpg'
import testimonialClient1Image from '@/images/barry-allenjpg.jpg'
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
  author: string
  image: StaticImageData
  rating: number
  comment: string
  highlight?: string
}

export const reviews: Review[] = [
  {
    author: 'Max Bentley',
    image: client1Image,
    rating: 5,
    comment:
      'Unmatched creativity and convenience. Endless transformed my brand effortlessly!',
    highlight: 'transformed my brand',
  },
  {
    author: 'Ethan Chambers',
    image: client2Image,
    rating: 5,
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

export interface Testimonial {
  image: StaticImageData
  author: string
  position: string
  title?: string
  comment: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    image: testimonialClient1Image,
    author: 'Barry Allen',
    position: 'CEO of Speed4s',
    title: 'Lightning-fast',
    comment:
      "Endless is a lifesaver! Their lightning-fast design service keeps up with my company's needs. It's like having my own design team on standby. Thanks, Endless!",
    rating: 5,
  },
]

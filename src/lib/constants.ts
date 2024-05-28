import client1Image from '@/images/max-bentley.jpg'
import client2Image from '@/images/ethan-chambers.jpg'
import testimonialClient1Image from '@/images/barry-allenjpg.jpg'
import { StaticImageData } from 'next/image'
import service1Image from '@/images/websiteIcon.png'
import service2Image from '@/images/logoDesignIcon.png'
import service3Image from '@/images/mobileIcon.png'
import service4Image from '@/images/brandingIcon.png'
import service5Image from '@/images/uiuxIcon.png'
import service6Image from '@/images/illustrationIcon.png'
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

export interface Service {
  image: StaticImageData
  title: string
  description: string
}

export const services: Service[] = [
  {
    image: service1Image,
    title: 'Website design',
    description:
      'Engaging websites tailored to your brand, blending creativity with functionality for a captivating online presence.',
  },
  {
    image: service2Image,
    title: 'Logo design',
    description:
      "Unique logos crafted to reflect your brand's essence, leaving a memorable mark that resonates with your audience.",
  },
  {
    image: service3Image,
    title: 'Mobile design',
    description:
      "Seamless mobile experiences that mirror your brand's identity, ensuring smooth performance on any device.",
  },
  {
    image: service4Image,
    title: 'Branding',
    description:
      'Complete brand identity solutions to establish consistency across all platforms, fostering trust and recognition.',
  },
  {
    image: service5Image,
    title: 'UI/UX Design',
    description:
      'Intuitive interfaces and user experiences that prioritize usability, enhancing engagement and conversion rates.',
  },
  {
    image: service6Image,
    title: 'Illustrations',
    description:
      'Custom visuals that add personality and enhance communication, whether for digital or print media.',
  },
]

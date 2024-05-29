import client1Image from '@/images/max-bentley.jpg'
import client2Image from '@/images/ethan-chambers.jpg'
import testimonialClient1Image from '@/images/barry-allenjpg.jpg'
import testimonialClient2Image from '@/images/sarah-johnson.jpg'
import testimonialClient3Image from '@/images/mark-thompson.jpg'
import testimonialClient4Image from '@/images/jessica-moore.jpg'
import testimonialClient5Image from '@/images/matthew-taylor.jpg'
import testimonialClient6Image from '@/images/emily-thompson.jpg'
import testimonialClient7Image from '@/images/john-smith.jpg'
import { StaticImageData } from 'next/image'
import service1Image from '@/images/websiteIcon.png'
import service2Image from '@/images/logoDesignIcon.png'
import service3Image from '@/images/mobileIcon.png'
import service4Image from '@/images/brandingIcon.png'
import service5Image from '@/images/uiuxIcon.png'
import service6Image from '@/images/illustrationIcon.png'
import { GithubLogo } from '@/components/Logo'
import { FacebookLogo } from '@/components/Logo'
import { InstagramLogo } from '@/components/Logo'

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
  {
    image: testimonialClient2Image,
    author: 'Sarah Johnson',
    position: 'CEO, ProTech Inc',
    comment:
      'Endless has completely transformed our design process with their creativity and attention to detail',
    rating: 5,
  },
  {
    image: testimonialClient3Image,
    author: 'Mark Thompson',
    position: 'Director, Vision LLC',
    comment:
      'Working with Endless has been a game-changer. Designs are top-notch and always delivered on time.',
    rating: 5,
  },
  {
    image: testimonialClient4Image,
    author: 'Jessica Moore',
    position: 'CEO, SwiftTech',
    comment:
      'Endless has helped us elevate our visual identity and stand out in a crowded market. Highly recommend',
    rating: 5,
  },
  {
    image: testimonialClient5Image,
    author: 'Director, Speed Inc',
    position: 'CEO of Speed4s',
    comment:
      'Working with Endless is a pleasure. Responsive, professional, and deliver exceptional designs.',
    rating: 5,
  },
  {
    image: testimonialClient6Image,
    author: 'Emily Johnson',
    position: 'CEO of Speed4s',
    comment:
      "I've been blown away by The Endless. Their designs are top-notch, and the turnaround time is unbelievable.",
    rating: 5,
  },
  {
    image: testimonialClient7Image,
    author: 'John Smith',
    position: 'Creative Director, GlowUp',
    comment:
      'The quality is unmatched, and the subscription model makes it so convenient. Worth every penny!',
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

interface PlanFeature {
  title: string
  available: boolean
}

export interface Plan {
  featured: boolean
  name: string
  monthlyPrice: number
  description: string
  features: PlanFeature[]
}

export const plans: Plan[] = [
  {
    featured: false,
    name: 'Standard',
    monthlyPrice: 2995,
    description: 'Perfect for starters and small teams.',
    features: [
      {
        title: 'Unlimited requests',
        available: true,
      },
      {
        title: 'One request at a time',
        available: true,
      },
      {
        title: '2-days delivery',
        available: true,
      },
      {
        title: 'Unlimited revisions',
        available: true,
      },
      {
        title: 'Framer development',
        available: false,
      },
      {
        title: 'Weekly calls',
        available: false,
      },
      {
        title: 'Dashboard Access',
        available: false,
      },
      {
        title: 'Unlimited stock photos',
        available: false,
      },
    ],
  },
  {
    featured: true,
    name: 'Premium',
    monthlyPrice: 5995,
    description: 'Exclusive and advanced features.',
    features: [
      {
        title: 'Unlimited requests',
        available: true,
      },
      {
        title: '2 request at a time',
        available: true,
      },
      {
        title: 'Same day delivery',
        available: true,
      },
      {
        title: 'Unlimited revisions',
        available: true,
      },
      {
        title: 'Framer development',
        available: true,
      },
      {
        title: 'Weekly calls',
        available: true,
      },
      {
        title: 'Dashboard Access',
        available: true,
      },
      {
        title: 'Unlimited stock photos',
        available: true,
      },
    ],
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How many design requests can I make?',
    answer:
      'With your subscription, you have unlimited design requests. You can submit as many design projects as you need, and our team will work on them based on your priority and our workload.',
  },
  {
    question: 'What is the turnaround time for design requests?',
    answer:
      'Our standard turnaround time for design requests is 2 days, but this may vary depending on the complexity of the project and our current workload. Rest assured, we strive to deliver high-quality designs within a reasonable timeframe.',
  },
  {
    question: 'Can I request revisions to my designs?',
    answer:
      "Yes, we offer revisions for all design requests to ensure your satisfaction. After receiving the initial design draft, you can provide feedback and request any necessary revisions. We'll work closely with you to make sure the final design meets your expectations.",
  },
  {
    question: 'What types of designs do you offer?',
    answer:
      "We offer a wide range of design services, including but not limited to: Logo design, Branding and identity, Website design Marketing materials (flyers, brochures, posters), Social media graphics, Packaging design, And much more! If you have a specific design need, feel free to reach out, and we'll do our best to accommodate it.",
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "We offer a 30-day refund policy, if applicable] refund policy. If you're unsatisfied with our service for any reason, please reach out to our support team, and we'll do our best to address your concerns.",
  },
  {
    question: 'How can I contact your support team?',
    answer:
      "You can contact our support team via email at support@example.com or by phone at +123456789. We're here to assist you with any questions or issues you may have, so don't hesitate to reach out!",
  },
]

export interface SocialMedia {
  type: string
  href: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const socialMediaLinks: SocialMedia[] = [
  {
    type: 'Github',
    href: 'https://github.com/lehoanghai9',
    Icon: GithubLogo,
  },
  {
    type: 'Facebook',
    href: 'https://www.facebook.com/hai.lehoanghai/',
    Icon: FacebookLogo,
  },
  {
    type: 'Instagram',
    href: 'https://www.instagram.com/_lehoanghai/',
    Icon: InstagramLogo,
  },
]

export const signatureLink: string = "https://github.com/lehoanghai9"
import type { Metadata } from 'next'
import { Providers } from '../providers'
import { Navigation } from '@/components/Navigation'
import { Locale, getDictionary } from '@/lib/dictionaries'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale as Locale)
  
  return {
    title: 'AO Fit - Personal Training & Fitness Coaching',
    description: dictionary.hero.subtitle,
    keywords: [
      'personal training',
      'fitness coach',
      'workout plans',
      'fitness transformation',
      'health coaching',
    ],
    authors: [{ name: 'AO Fit' }],
    openGraph: {
      title: dictionary.hero.title,
      description: dictionary.hero.subtitle,
      type: 'website',
      locale: locale === 'uk-ua' ? 'uk_UA' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.hero.title,
      description: dictionary.hero.subtitle,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  
  return (
    <Providers>
      <Navigation />
      <main className='pt-16'>{children}</main>
    </Providers>
  )
}
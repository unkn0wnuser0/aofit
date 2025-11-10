import { Metadata } from 'next'
import { getDictionary, Locale } from '@/lib/dictionaries'
import { homePageData } from '../data/home'
import HeroSection from '../components/HeroSection'
import FeatureHighlights from '../components/FeatureHighlights'
import AchievementsSection from '../components/AchievementsSection'
import ChallengeSection from '../components/ChallengeSection'
import CoachSection from '../components/CoachSection'
import StatsSection from '../components/StatsSection'
import ValuePropositionSection from '../components/ValuePropositionSection'
import ServicesSection from '../components/ServicesSection'
import ProgramsSection from '../components/ProgramsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import MissionSection from '../components/MissionSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher'

interface HomeProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale as Locale)
  
  return {
    title: dictionary.hero.title,
    description: dictionary.hero.subtitle,
    openGraph: {
      title: dictionary.hero.title,
      description: dictionary.hero.subtitle,
    },
  }
}

// Generate static params for supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en-us' },
    { locale: 'uk-ua' },
  ]
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale as Locale)

  return (
    <div className='min-h-screen' id='main-1'>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <LanguageSwitcher currentLocale={locale as Locale} dictionary={dictionary} />
      </div>

      {/* Page Content */}
      <HeroSection data={homePageData.hero} />
      <FeatureHighlights data={homePageData.featureHighlights} />
      <AchievementsSection data={homePageData.achievements} />
      <ChallengeSection data={homePageData.challenge} />
      <CoachSection data={homePageData.coach} />
      <StatsSection data={homePageData.stats} />
      <ValuePropositionSection data={homePageData.valueProposition} />
      <ServicesSection data={homePageData.services} />
      <ProgramsSection data={homePageData.programs} />
      <TestimonialsSection data={homePageData.testimonials} />
      <PricingSection data={homePageData.pricing} />
      <MissionSection data={homePageData.mission} />
      <FAQSection data={homePageData.faq} />
      <Footer data={homePageData.footer} />
    </div>
  )
}
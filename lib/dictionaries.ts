import 'server-only'

export type Locale = 'en-us' | 'uk-ua'

// Dictionary type based on the English dictionary structure
export type Dictionary = {
  nav: {
    home: string
    programs: string
    about: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    ctaText: string
    secondaryCtaText: string
  }
  features: {
    title: string
    subtitle: string
  }
  achievements: {
    title: string
    subtitle: string
  }
  challenge: {
    title: string
    description: string
    ctaText: string
  }
  coach: {
    title: string
    subtitle: string
  }
  stats: {
    title: string
    clients: string
    experience: string
    success: string
    programs: string
  }
  valueProposition: {
    title: string
    subtitle: string
  }
  services: {
    title: string
    subtitle: string
  }
  programs: {
    title: string
    subtitle: string
    ctaText: string
  }
  testimonials: {
    title: string
    ctaText: string
  }
  pricing: {
    title: string
    subtitle: string
  }
  mission: {
    title: string
    subtitle: string
  }
  faq: {
    title: string
    contactTitle: string
  }
  footer: {
    copyright: string
    links: {
      privacy: string
      terms: string
      contact: string
    }
  }
  common: {
    getStarted: string
    learnMore: string
    readMore: string
    viewAll: string
    contact: string
    submit: string
    loading: string
    error: string
    success: string
  }
  language: {
    switchTo: string
    english: string
    ukrainian: string
  }
}

const dictionaries = {
  'en-us': () => import('./dictionaries/en-us.json').then((module) => module.default),
  'uk-ua': () => import('./dictionaries/uk-ua.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    // Fallback to English if locale not found
    return dictionaries['en-us']()
  }
  return dictionaries[locale]()
}
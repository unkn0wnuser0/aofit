'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@heroui/react'
import { Locale, Dictionary } from '@/lib/dictionaries'

interface LanguageSwitcherProps {
  currentLocale: Locale
  dictionary: Dictionary
}

const localeLabels: Record<Locale, { flag: string; name: keyof Dictionary['language'] }> = {
  'en-us': { flag: '🇺🇸', name: 'english' },
  'uk-ua': { flag: '🇺🇦', name: 'ukrainian' },
}

export function LanguageSwitcher({ currentLocale, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    
    // Add new locale to pathname
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">
        {dictionary.language.switchTo}:
      </span>
      <div className="flex items-center gap-1">
        {Object.entries(localeLabels).map(([locale, { flag, name }]) => (
          <Button
            key={locale}
            variant={currentLocale === locale ? 'primary' : 'ghost'}
            size="sm"
            className="min-w-0 px-3 py-1 h-8"
            onClick={() => switchLanguage(locale as Locale)}
            aria-label={`${dictionary.language.switchTo} ${dictionary.language[name]}`}
          >
            <span className="mr-1">{flag}</span>
            <span className="text-xs uppercase font-medium">
              {locale.split('-')[1]}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}
import { NextRequest, NextResponse } from 'next/server'

// Define supported locales
const locales = ['en-us', 'uk-ua']
const defaultLocale = 'en-us'

// Get locale from request
function getLocale(request: NextRequest): string {
  // Check if pathname already includes a locale
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameLocale) return pathnameLocale

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // Simple language detection based on browser preferences
    if (acceptLanguage.includes('uk')) return 'uk-ua'
    if (acceptLanguage.includes('en')) return 'en-us'
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // Redirect to URL with locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
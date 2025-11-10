import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AO Fit - Personal Training & Fitness Coaching',
  description:
    'Transform your fitness journey with professional personal training and coaching. Achieve your goals with customized workout plans and expert guidance.',
  keywords: [
    'personal training',
    'fitness coach',
    'workout plans',
    'fitness transformation',
    'health coaching',
  ],
  authors: [{ name: 'AO Fit' }],
  openGraph: {
    title: 'AO Fit - Personal Training & Fitness Coaching',
    description:
      'Transform your fitness journey with professional personal training and coaching.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AO Fit - Personal Training & Fitness Coaching',
    description:
      'Transform your fitness journey with professional personal training and coaching.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

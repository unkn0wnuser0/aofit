'use client'

import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <h1 className='text-xl font-bold text-foreground'>AO Fit</h1>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-6'>
            <a
              href='#home'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              About
            </a>
            <a
              href='#services'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Services
            </a>
            <button
              onClick={scrollToContact}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle & CTA */}
          <div className='flex items-center space-x-4'>
            <ThemeToggle />
            <Button
              variant='primary'
              size='sm'
              onClick={scrollToContact}
              className='hidden md:flex'
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

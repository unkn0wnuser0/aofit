'use client'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick: () => void
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  backgroundImage,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50',
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className='container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Subtitle */}
          <p className='text-lg md:text-xl text-muted-foreground font-medium tracking-wide uppercase'>
            {subtitle}
          </p>

          {/* Main Title */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
            <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              {title}
            </span>
          </h1>

          {/* Description */}
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            {description}
          </p>

          {/* CTA Button */}
          <div className='pt-8'>
            <Button
              variant='primary'
              size='lg'
              onClick={onCtaClick}
              className='px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { HeroSection } from '@/components/HeroSection'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div id='home'>
        <HeroSection
          subtitle='PERSONAL FITNESS COACHING'
          title='Transform Your Body, Transform Your Life'
          description='Get personalized training programs, expert guidance, and the motivation you need to achieve your fitness goals with professional coaching.'
          ctaText='Start Your Journey'
          onCtaClick={scrollToContact}
        />
      </div>

      {/* About Section */}
      <section id='about' className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>
              Why Choose AO Fit?
            </h2>
            <div className='grid md:grid-cols-3 gap-8 mt-12'>
              <div className='space-y-4'>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                  <span className='text-2xl'>🎯</span>
                </div>
                <h3 className='text-xl font-semibold'>Personalized Programs</h3>
                <p className='text-muted-foreground'>
                  Custom workout plans tailored to your specific goals, fitness
                  level, and lifestyle.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                  <span className='text-2xl'>💪</span>
                </div>
                <h3 className='text-xl font-semibold'>Expert Guidance</h3>
                <p className='text-muted-foreground'>
                  Professional coaching with years of experience in fitness
                  training and nutrition.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                  <span className='text-2xl'>📈</span>
                </div>
                <h3 className='text-xl font-semibold'>Proven Results</h3>
                <p className='text-muted-foreground'>
                  Track your progress with measurable results and continuous
                  support throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
              Training Programs
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-card p-8 rounded-lg border'>
                <h3 className='text-2xl font-semibold mb-4'>
                  1-on-1 Personal Training
                </h3>
                <p className='text-muted-foreground mb-6'>
                  Intensive one-on-one sessions focused on your specific goals
                  with personalized attention and immediate feedback.
                </p>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Customized workout plans
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Nutrition guidance
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Progress tracking
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    24/7 support
                  </li>
                </ul>
              </div>

              <div className='bg-card p-8 rounded-lg border'>
                <h3 className='text-2xl font-semibold mb-4'>Online Coaching</h3>
                <p className='text-muted-foreground mb-6'>
                  Flexible online programs that fit your schedule with virtual
                  check-ins and digital workout plans.
                </p>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Weekly video calls
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Mobile app access
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Meal planning
                  </li>
                  <li className='flex items-center'>
                    <span className='text-green-500 mr-2'>✓</span>
                    Community support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id='contact'>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className='py-12 bg-muted/30 border-t'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4'>AO Fit</h3>
            <p className='text-muted-foreground mb-6'>
              Transform your fitness journey with professional personal training
              and coaching.
            </p>
            <div className='flex justify-center space-x-6 text-sm text-muted-foreground'>
              <a href='#' className='hover:text-foreground transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-foreground transition-colors'>
                Terms of Service
              </a>
              <a
                href='#contact'
                className='hover:text-foreground transition-colors'
              >
                Contact
              </a>
            </div>
            <div className='mt-6 pt-6 border-t border-border'>
              <p className='text-sm text-muted-foreground'>
                © 2024 AO Fit. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

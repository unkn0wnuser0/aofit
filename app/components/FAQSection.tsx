'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { homePageData } from '../data/home'

interface FAQSectionProps {
  data: typeof homePageData.faq
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const chevronRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Initialize all content elements as closed
  useEffect(() => {
    data.items.forEach((item) => {
      const contentEl = contentRefs.current[item.id]
      if (contentEl && !openItems.has(item.id)) {
        gsap.set(contentEl, { height: 0, paddingTop: 0, paddingBottom: 0 })
      }
    })
  }, [data.items])

  const toggleItem = (id: string) => {
    const isCurrentlyOpen = openItems.has(id)
    const contentEl = contentRefs.current[id]
    const chevronEl = chevronRefs.current[id]

    if (!contentEl || !chevronEl) return

    if (isCurrentlyOpen) {
      // Close animation
      gsap.to(contentEl, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })

      gsap.to(chevronEl, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      })

      // Update state after animation starts
      const newOpenItems = new Set(openItems)
      newOpenItems.delete(id)
      setOpenItems(newOpenItems)
    } else {
      // Open animation
      gsap.to(contentEl, {
        height: 'auto',
        paddingBottom: '1.5rem',
        duration: 0.2,
        ease: 'power2.out',
      })

      gsap.to(chevronEl, {
        rotation: 180,
        duration: 0.3,
        ease: 'power2.inOut',
      })

      // Update state
      const newOpenItems = new Set(openItems)
      newOpenItems.add(id)
      setOpenItems(newOpenItems)
    }
  }

  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>{data.title}</h2>

        <div className='space-y-4'>
          {data.items.map((item) => (
            <div
              key={item.id}
              className='bg-background rounded-lg border border-border overflow-hidden'
            >
              <button
                onClick={() => toggleItem(item.id)}
                className='w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between'
              >
                <h3 className='font-semibold text-lg pr-4'>{item.question}</h3>
                <div
                  className='shrink-0'
                  ref={(el) => {
                    chevronRefs.current[item.id] = el
                  }}
                >
                  <svg
                    className='w-5 h-5 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </button>

              {item.answer && (
                <div
                  className='px-6 overflow-hidden'
                  ref={(el) => {
                    contentRefs.current[item.id] = el
                  }}
                >
                  <div className='border-t border-border pt-4'>
                    <p className='text-muted-foreground leading-relaxed whitespace-pre-line'>
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <h3 className='text-xl font-bold mb-4'>{data.contactTitle}</h3>
          <div className='flex flex-wrap gap-4 justify-center'>
            {data.contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-primary hover:text-primary/80 hover:underline transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

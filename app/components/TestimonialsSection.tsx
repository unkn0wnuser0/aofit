'use client'

import { homePageData } from '../data/home'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/parallax'

interface TestimonialsSectionProps {
  data: typeof homePageData.testimonials
}

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  // Handle titles with or without comma separation
  const titleParts = data.title.split(', ')
  const title1 = titleParts[0]
  const title2 = titleParts[1] || '' // Handle cases where there's no comma

  return (
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        {/* Title */}
        <div className='text-center mb-16'>
          {title2 ? (
            // Two-part title (English format)
            <>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title1},</h2>
              <h2 className='text-3xl md:text-4xl font-bold'>{title2}</h2>
            </>
          ) : (
            // Single-part title (Ukrainian format)
            <h2 className='text-3xl md:text-4xl font-bold'>{title1}</h2>
          )}
        </div>

        {/* Testimonials Slider */}
        <div className='relative'>
          <div className='w-[65%] mx-auto'>
            <Swiper
              modules={[Autoplay, Pagination, Navigation, Parallax]}
              spaceBetween={30}
              slidesPerView={1}
              parallax={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-primary/30',
                bulletActiveClass:
                  'swiper-pagination-bullet-active !bg-primary',
              }}
              navigation={{
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              className='testimonials-swiper pb-16'
            >
              {data.items.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className='p-8 rounded-lg transition-shadow duration-300 h-full'
                    style={{
                      backgroundColor: `rgba(255, 255, 255, var(--glass-bg-alpha))`,
                      border: `1px solid rgba(255, 255, 255, var(--glass-border-alpha))`,
                    }}
                  >
                    <div className='flex gap-6 h-full'>
                      {/* Photo */}
                      <div
                        className='w-2/5 shrink-0'
                        data-swiper-parallax='-300'
                      >
                        <img
                          src={testimonial.photo}
                          alt={testimonial.author}
                          className='w-full h-full object-cover rounded-lg'
                          data-swiper-parallax-scale='0.85'
                        />
                      </div>

                      {/* Content */}
                      <div className='flex flex-col grow'>
                        {/* Quote */}
                        <div className='grow'>
                          <div
                            className='text-primary text-4xl mb-4 leading-none'
                            data-swiper-parallax='-100'
                          >
                            "
                          </div>
                          <p
                            className='text-lg italic mb-6 text-foreground/80'
                            data-swiper-parallax='-200'
                            data-swiper-parallax-duration='600'
                          >
                            {testimonial.quote}
                          </p>
                        </div>

                        {/* Author */}
                        <div className='mt-auto'>
                          <p
                            className='font-semibold text-primary'
                            data-swiper-parallax='-50'
                            data-swiper-parallax-duration='400'
                          >
                            {testimonial.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Arrows */}
          <div className='testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200'>
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
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </div>
          <div className='testimonials-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200'>
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
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <div className='text-center mt-16'>
          <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200'>
            {data.ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}

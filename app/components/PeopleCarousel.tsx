'use client'

const peopleImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=face',
    alt: 'Person working out with determination',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=face',
    alt: 'Woman doing yoga pose',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=600&h=400&fit=crop&crop=face',
    alt: 'Man doing push-ups',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1594381130821-d3eac8c93be8?w=600&h=400&fit=crop&crop=face',
    alt: 'Woman lifting weights',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=400&fit=crop&crop=face',
    alt: 'Person stretching after workout',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop&crop=face',
    alt: 'Group fitness class',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&crop=face',
    alt: 'Woman in athletic wear',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1566241142190-441b62351e52?w=600&h=400&fit=crop&crop=face',
    alt: 'Man doing cardio workout',
  },
]

export default function PeopleCarousel() {
  // Duplicate the images array for seamless infinite scroll
  const duplicatedImages = [...peopleImages, ...peopleImages]

  return (
    <section className='py-16 bg-background overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Join Our Community
          </h2>
          <p className='text-xl text-foreground/80 max-w-2xl mx-auto'>
            Real people achieving real results through dedicated fitness
            journeys
          </p>
        </div>

        {/* People Carousel - Infinite Scroll */}
        <div className='relative'>
          {/* Add CSS animation styles */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-animation {
              animation: scroll 20s linear infinite;
            }
            .scroll-animation:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className='flex gap-6 scroll-animation'>
            {duplicatedImages.map((person, index) => (
              <div
                key={`${person.id}-${index}`}
                className='relative group overflow-hidden rounded-2xl aspect-4/5 bg-muted shrink-0 w-72'
              >
                <img
                  src={person.src}
                  alt={person.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                />
                {/* Overlay effect on hover */}
                <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className='text-lg text-foreground/70 mb-6'>
            Ready to start your transformation?
          </p>
          <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200'>
            Join Now
          </button>
        </div>
      </div>
    </section>
  )
}

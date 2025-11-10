import { homePageData } from '../data/home'

interface TestimonialsSectionProps {
  data: typeof homePageData.testimonials
}

export default function TestimonialsSection({
  data,
}: TestimonialsSectionProps) {
  const [title1, title2] = data.title.split(', ')

  return (
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title1},</h2>
        <h2 className='text-3xl md:text-4xl font-bold mb-12'>{title2}</h2>

        {data.items.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-background p-8 rounded-lg mb-8'
          >
            <p className='text-lg italic mb-4'>"{testimonial.quote}"</p>
            <p className='font-semibold'>- {testimonial.author}</p>
          </div>
        ))}

        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold'>
          {data.ctaText}
        </button>
      </div>
    </section>
  )
}

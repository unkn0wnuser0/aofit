import { homePageData } from '../data/home'

interface CoachSectionProps {
  data: typeof homePageData.coach
}

export default function CoachSection({ data }: CoachSectionProps) {
  return (
    <section className='py-20 px-4 bg-linear-to-b from-background to-muted/20'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Coach Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Coach Image */}
          <div className='order-2 lg:order-1'>
            <div className='relative'>
              <div className='aspect-square bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center'>
                <div className='w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center'>
                  <span className='text-4xl'>💪</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Content */}
          <div className='order-1 lg:order-2 space-y-6'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              {data.title}
            </h2>

            <div className='space-y-4 text-lg text-foreground/80 leading-relaxed'>
              {data.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className='pt-4'>
              <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105'>
                {data.ctaText}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div className='space-y-2'>
            <div className='text-3xl md:text-4xl font-bold text-primary'>
              500+
            </div>
            <div className='text-muted-foreground'>Total community</div>
          </div>
          <div className='space-y-2'>
            <div className='text-3xl md:text-4xl font-bold text-primary'>
              5K+
            </div>
            <div className='text-muted-foreground'>Sessions Completed</div>
          </div>
          <div className='space-y-2'>
            <div className='text-3xl md:text-4xl font-bold text-primary'>
              200+
            </div>
            <div className='text-muted-foreground'>
              Transformations completed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

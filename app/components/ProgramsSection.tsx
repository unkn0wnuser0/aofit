import { homePageData } from '../data/home'

interface ProgramsSectionProps {
  data: typeof homePageData.programs
}

export default function ProgramsSection({ data }: ProgramsSectionProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>{data.title}</h2>
        <h3 className='text-2xl font-semibold mb-6'>{data.subtitle}</h3>
        <div className='grid md:grid-cols-2 gap-6 text-center'>
          {data.features.map((feature, index) => (
            <div key={index}>
              <div className='text-lg font-semibold'>{feature}</div>
            </div>
          ))}
        </div>
        <p className='text-muted-foreground mt-6'>{data.description}</p>
      </div>

      <div className='text-center'>
        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold'>
          {data.ctaText}
        </button>
      </div>
    </section>
  )
}

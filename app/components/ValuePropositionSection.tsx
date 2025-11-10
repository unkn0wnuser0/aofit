import { homePageData } from '../data/home'

interface ValuePropositionSectionProps {
  data: typeof homePageData.valueProposition
}

export default function ValuePropositionSection({
  data,
}: ValuePropositionSectionProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <p className='text-lg text-muted-foreground mb-8'>
          {data.description}
        </p>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.items.map((item) => (
          <div key={item.id} className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
            <p className='text-muted-foreground'>{item.description}</p>
          </div>
        ))}
      </div>

      <div className='text-center mt-12'>
        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold'>
          {data.ctaText}
        </button>
      </div>
    </section>
  )
}

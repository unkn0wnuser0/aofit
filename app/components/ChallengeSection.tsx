import { homePageData } from '../data/home'

interface ChallengeSectionProps {
  data: typeof homePageData.challenge;
}

export default function ChallengeSection({ data }: ChallengeSectionProps) {
  return (
    <section className='py-16 px-4 bg-muted/30'>
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-sm text-muted-foreground mb-2'>
          {data.startDate}
        </p>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          {data.title}
        </h2>

        <div className='grid md:grid-cols-4 gap-4 mb-8'>
          {data.features.map((feature) => (
            <div key={feature.id} className='bg-background p-4 rounded-lg'>
              <span className='font-semibold'>{feature.title}</span>
            </div>
          ))}
        </div>

        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold mb-4'>
          {data.ctaText}
        </button>
        <p className='text-sm text-muted-foreground'>{data.note}</p>
      </div>
    </section>
  )
}

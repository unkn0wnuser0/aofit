import { homePageData } from '../data/home'

interface CoachSectionProps {
  data: typeof homePageData.coach;
}

export default function CoachSection({ data }: CoachSectionProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>{data.title}</h2>

        <div className='prose prose-lg mx-auto text-muted-foreground mb-8'>
          {data.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold'>
          {data.ctaText}
        </button>
      </div>
    </section>
  )
}

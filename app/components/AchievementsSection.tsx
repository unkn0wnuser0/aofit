import { homePageData } from '../data/home'

interface AchievementsSectionProps {
  data: typeof homePageData.achievements;
}

export default function AchievementsSection({ data }: AchievementsSectionProps) {
  return (
    <section className='py-16 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='mb-8'>
          <span className='text-6xl font-light text-muted-foreground'>
            {data.sectionNumber}
          </span>
        </div>
        <h2 className='text-4xl md:text-5xl font-bold mb-8'>
          {data.title}
        </h2>
        <p className='text-lg mb-8 text-muted-foreground'>
          {data.description}
        </p>

        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          {data.items.map((item) => (
            <div key={item.id} className='flex items-center'>
              <span className='text-primary mr-3'>✓</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

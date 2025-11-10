import { Stat } from '../data/home'

interface StatsSectionProps {
  data: Stat[];
}

export default function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className='py-16 px-4 bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 gap-8 text-center'>
          {data.map((stat) => (
            <div key={stat.id}>
              <div className='text-4xl font-bold mb-2'>{stat.number}</div>
              <div className='text-muted-foreground'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

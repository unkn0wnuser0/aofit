import { homePageData } from '../data/home'
import TablerIcon, { IconName } from './ui/TablerIcon'

interface ServicesSectionProps {
  data: typeof homePageData.services
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          {data.title.split(' ')[0]} {data.title.split(' ')[1]}
        </h2>
        <h2 className='text-3xl md:text-4xl font-bold'>
          {data.title.split(' ')[2]} {data.title.split(' ')[3]}
        </h2>
        <p className='text-lg text-muted-foreground mt-6'>{data.subtitle}</p>
      </div>

      <div className='max-w-6xl mx-auto space-y-16'>
        {data.items.map((service, index) => (
          <div
            key={service.id}
            className='grid md:grid-cols-2 gap-12 items-center'
          >
            <div
              className={service.imagePosition === 'left' ? 'md:order-2' : ''}
            >
              <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
              <p className='text-muted-foreground'>{service.description}</p>
            </div>
            <div
              className={`bg-background p-8 rounded-lg ${service.imagePosition === 'left' ? 'md:order-1' : ''}`}
            >
              <div className='h-48 bg-muted/50 rounded-lg flex items-center justify-center'>
                <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center'>
                  <TablerIcon
                    name={service.icon as IconName}
                    size={48}
                    className='text-primary'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

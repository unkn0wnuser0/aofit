import { FeatureHighlight } from '../data/home'
import TablerIcon, { IconName } from './ui/TablerIcon'

interface FeatureHighlightsProps {
  data: FeatureHighlight[]
}

export default function FeatureHighlights({ data }: FeatureHighlightsProps) {
  return (
    <section className='py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.map((feature) => (
            <div key={feature.id} className='text-center'>
              <div className='mb-4 flex justify-center'>
                <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
                  <TablerIcon
                    name={feature.icon as IconName}
                    size={32}
                    className='text-primary'
                  />
                </div>
              </div>
              <h3 className='font-semibold mb-2'>{feature.title}</h3>
              {feature.hasExpander && (
                <button className='text-primary'>+</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

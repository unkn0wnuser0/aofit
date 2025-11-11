import { homePageData } from '../data/home'

interface HeroSectionProps {
  data: typeof homePageData.hero
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className='py-20 px-4 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8'>{data.title}</h1>
        <p className='text-xl md:text-2xl mb-4 text-muted-foreground'>
          {data.subtitle}
        </p>
        <p className='text-2xl md:text-3xl font-semibold mb-12'>
          {data.tagline}
        </p>
        <div className='text-xl tracking-widest mb-8'>{data.spacedTitle}</div>
        <button className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold mb-8'>
          {data.ctaText}
        </button>
      </div>
    </section>
  )
}

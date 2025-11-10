import { homePageData } from '../data/home'

interface MissionSectionProps {
  data: typeof homePageData.mission
}

export default function MissionSection({ data }: MissionSectionProps) {
  // Split the description and highlight specific words
  const renderDescription = () => {
    let description = data.description

    data.highlights.forEach((highlight) => {
      const placeholder = `{${highlight}}`
      if (description.includes(placeholder)) {
        description = description.replace(
          placeholder,
          `<span class="text-primary font-semibold">${highlight}</span>`
        )
      }
    })

    return { __html: description }
  }

  return (
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold mb-8'>{data.title}</h2>
        <p
          className='text-lg text-muted-foreground'
          dangerouslySetInnerHTML={renderDescription()}
        />
      </div>
    </section>
  )
}

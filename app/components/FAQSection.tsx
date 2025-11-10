import { homePageData } from '../data/home'

interface FAQSectionProps {
  data: typeof homePageData.faq
}

export default function FAQSection({ data }: FAQSectionProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>{data.title}</h2>

        <div className='space-y-6'>
          {data.items.map((item) => (
            <div key={item.id} className='bg-background p-6 rounded-lg border'>
              <h3 className='font-semibold mb-2'>{item.question}</h3>
              {item.answer && (
                <p className='text-muted-foreground'>{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <h3 className='text-xl font-bold mb-4'>{data.contactTitle}</h3>
          <div className='space-x-4'>
            {data.contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-primary hover:underline'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

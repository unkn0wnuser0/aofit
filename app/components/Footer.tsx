import { homePageData } from '../data/home'

interface FooterProps {
  data: typeof homePageData.footer
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className='py-12 px-4 border-t bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <p className='text-sm text-muted-foreground mb-4'>
            {data.copyright}
          </p>
          <div className='space-x-6'>
            {data.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className='text-sm text-muted-foreground hover:text-foreground'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

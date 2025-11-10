import { homePageData } from '../data/home'

interface PricingSectionProps {
  data: typeof homePageData.pricing
}

export default function PricingSection({ data }: PricingSectionProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>{data.title}</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {data.plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-lg border relative ${
                plan.isPopular
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background'
              }`}
            >
              {plan.badge && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold'>
                  {plan.badge}
                </div>
              )}
              <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>
              <p
                className={`text-sm mb-2 ${plan.isPopular ? 'opacity-90' : 'text-muted-foreground'}`}
              >
                {plan.billingPeriod}
              </p>
              <div className='text-3xl font-bold mb-2'>{plan.price}</div>
              {plan.discount && (
                <p
                  className={`text-sm mb-2 ${plan.isPopular ? 'opacity-90' : 'text-primary'}`}
                >
                  {plan.discount}
                </p>
              )}
              {plan.originalPrice && (
                <div className='text-lg mb-4'>{plan.originalPrice}</div>
              )}
              <button
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.isPopular
                    ? 'bg-background text-foreground hover:bg-background/90'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

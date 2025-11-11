import { HomePageData } from './home'

// Ukrainian content data
export const homePageDataUkUa: HomePageData = {
  hero: {
    title: 'Трансформуйте своє тіло, трансформуйте своє життя',
    subtitle: 'Приєднуйтесь до нашої фітнес-спільноти та досягайте своїх цілей',
    tagline: 'Ваша подорож до здоров\'я починається тут',
    spacedTitle: 'Трансформуйте, своє, тіло, трансформуйте, своє, життя',
    ctaText: 'Почати сьогодні'
  },
  
  featureHighlights: [
    {
      id: '1',
      icon: 'barbell',
      title: 'Персональні тренування',
      hasExpander: false
    },
    {
      id: '2',
      icon: 'apple',
      title: 'Plan харчування',
      hasExpander: false
    },
    {
      id: '3',
      icon: 'device-mobile',
      title: 'Мобільний додаток',
      hasExpander: false
    },
    {
      id: '4',
      icon: 'users',
      title: 'Спільнота підтримки',
      hasExpander: false
    }
  ],

  achievements: {
    sectionNumber: '01',
    title: 'Чого ви досягнете',
    description: 'Трансформуйте свій фітнес-шлях за допомогою структурованих програм, розроблених для досягнення вимірюваних результатів та довготривалих змін.',
    items: [
      { id: 'sculpt', text: 'Сформуйте та визначте своє тіло' },
      { id: 'strength', text: 'Нарощуйте силу та впевненість' },
      { id: 'consistency', text: 'Залишайтеся послідовними — тренуйтеся будь-де та будь-коли' }
    ]
  },

  challenge: {
    startDate: '15 ЛИСТОПАДА',
    title: '30-денний виклик трансформації',
    features: [
      {
        id: '1',
        title: 'Персональний план'
      },
      {
        id: '2',
        title: 'Щоденна підтримка'
      },
      {
        id: '3',
        title: 'Результат гарантований'
      }
    ],
    ctaText: 'Почати виклик',
    note: '* Обмежена кількість місць'
  },

  coach: {
    title: 'Знайомтесь з вашим тренером',
    bio: [
      'Сертифікований персональний тренер з 8-річним досвідом',
      'Спеціаліст з функціонального тренування та реабілітації',
      'Допоміг більше ніж 500 клієнтам досягти їхніх цілей'
    ],
    ctaText: 'Записатися на консультацію'
  },

  stats: [
    {
      id: '1',
      number: '500+',
      label: 'Задоволених клієнтів'
    },
    {
      id: '2',
      number: '8',
      label: 'Років досвіду'
    },
    {
      id: '3',
      number: '95%',
      label: 'Рівень успіху'
    },
    {
      id: '4',
      number: '15+',
      label: 'Програм тренувань'
    }
  ],

  valueProposition: {
    description: 'Ваша фітнес-подорож починається тут з персоналізованим підходом',
    items: [
      {
        id: '1',
        title: 'Науковий підхід',
        description: 'Методи, підтвержені дослідженнями'
      },
      {
        id: '2',
        title: 'Гнучкість',
        description: 'Програми адаптуються до вашого розкладу'
      },
      {
        id: '3',
        title: 'Результати',
        description: 'Видимі зміни вже через 2 тижні'
      }
    ],
    ctaText: 'Дізнатися більше'
  },

  services: {
    title: 'Наші послуги',
    subtitle: 'Комплексні фітнес-рішення для досягнення ваших цілей',
    items: [
      {
        id: '1',
        title: 'Персональні тренування',
        description: 'Індивідуальні заняття з тренером',
        icon: 'barbell',
        imagePosition: 'left' as const
      },
      {
        id: '2',
        title: 'Групові класи',
        description: 'Мотивуючі групові тренування',
        icon: 'users',
        imagePosition: 'right' as const
      },
      {
        id: '3',
        title: 'Онлайн коучинг',
        description: 'Тренування в зручний для вас час',
        icon: 'device-mobile',
        imagePosition: 'left' as const
      },
      {
        id: '4',
        title: 'План харчування',
        description: 'Персоналізоване меню та рецепти',
        icon: 'apple',
        imagePosition: 'right' as const
      }
    ]
  },

  programs: {
    title: 'Фітнес-програми',
    subtitle: 'Оберіть програму, що підходить вашому способу життя',
    features: [
      'Схуднення',
      'Набір м\'язової маси',
      'Функціональна підготовка',
      'Реабілітація'
    ],
    description: 'Кожна програма адаптується під ваші індивідуальні потреби та цілі',
    ctaText: 'Переглянути всі програми'
  },

  testimonials: {
    title: 'Відгуки наших клієнтів',
    items: [
      {
        id: '1',
        quote: 'Найкращий тренер, якого я коли-небудь мала! Результати перевершили всі очікування.',
        author: 'Ольга Петренко',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face'
      },
      {
        id: '2',
        quote: 'Професійний підхід та індивідуальна увага до кожного клієнта. Рекомендую!',
        author: 'Дмитро Коваленко',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
      },
      {
        id: '3',
        quote: 'Завдяки цій програмі я нарешті досяг форми своєї мрії. Дякую!',
        author: 'Андрій Мельник',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
      }
    ],
    ctaText: 'Читати більше відгуків'
  },

  pricing: {
    title: 'Оберіть свій план',
    plans: [
      {
        id: '1',
        name: 'Стартер',
        billingPeriod: 'щомісяця',
        price: '₴2,500',
        originalPrice: '₴3,000',
        discount: 'Знижка 15%',
        badge: 'Популярний',
        isPopular: true
      },
      {
        id: '2',
        name: 'Преміум',
        billingPeriod: 'щомісяця',
        price: '₴4,000',
        originalPrice: '₴5,000',
        discount: 'Знижка 20%',
        badge: 'Найкращий',
        isPopular: false
      },
      {
        id: '3',
        name: 'VIP',
        billingPeriod: 'щомісяця',
        price: '₴7,000',
        isPopular: false
      }
    ]
  },

  mission: {
    title: 'Наша місія',
    description: 'Ми допомагаємо людям досягти {довготривалої трансформації} через {персоналізований підхід} до фітнесу та здоров\'я. Наша мета - зробити {здоровий спосіб життя} доступним та приємним для кожного.',
    highlights: ['довготривалої трансформації', 'персоналізований підхід', 'здоровий спосіб життя']
  },

  faq: {
    title: 'Часті запитання',
    items: [
      {
        id: '1',
        question: 'Як довго триває одне тренування?',
        answer: 'Стандартне тренування триває 60 хвилин, але можна обрати 45 або 90-хвилинні сесії.'
      },
      {
        id: '2',
        question: 'Чи потрібен досвід для початку?',
        answer: 'Ні, ми працюємо з клієнтами будь-якого рівня підготовки - від початківців до професіоналів.'
      },
      {
        id: '3',
        question: 'Чи можна заморозити абонемент?',
        answer: 'Так, можна заморозити абонемент до 2 тижнів на місяць за попереднім погодженням.'
      },
      {
        id: '4',
        question: 'Що включено в план харчування?',
        answer: 'План включає персоналізоване меню, рецепти та рекомендації по харчуванню.'
      }
    ],
    contactTitle: 'Все ще маєте запитання?',
    contactLinks: [
      {
        label: 'Telegram',
        href: 'https://t.me/aofit'
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/aofit'
      }
    ]
  },

  footer: {
    copyright: '© 2024 Anna Oblomova Fit. Всі права захищені.',
    links: [
      {
        id: '1',
        label: 'Політика конфіденційності',
        href: '/privacy'
      },
      {
        id: '2',
        label: 'Умови обслуговування',
        href: '/terms'
      },
      {
        id: '3',
        label: 'Зв\'яжіться з нами',
        href: '/contact'
      }
    ]
  }
}
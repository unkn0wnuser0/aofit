// Home page data structure
export interface FeatureHighlight {
  id: string;
  icon: string;
  title: string;
  hasExpander: boolean;
}

export interface Achievement {
  id: string;
  text: string;
}

export interface ChallengeFeature {
  id: string;
  title: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imagePosition: 'left' | 'right';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  photo: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  billingPeriod: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  badge?: string;
  isPopular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer?: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface HomePageData {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    spacedTitle: string;
    ctaText: string;
  };
  featureHighlights: FeatureHighlight[];
  achievements: {
    sectionNumber: string;
    title: string;
    description: string;
    items: Achievement[];
  };
  challenge: {
    startDate: string;
    title: string;
    features: ChallengeFeature[];
    ctaText: string;
    note: string;
  };
  coach: {
    title: string;
    bio: string[];
    ctaText: string;
  };
  stats: Stat[];
  valueProposition: {
    description: string;
    items: ValueProposition[];
    ctaText: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  programs: {
    title: string;
    subtitle: string;
    features: string[];
    description: string;
    ctaText: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
    ctaText: string;
  };
  pricing: {
    title: string;
    plans: PricingPlan[];
  };
  mission: {
    title: string;
    description: string;
    highlights: string[];
  };
  faq: {
    title: string;
    items: FAQ[];
    contactTitle: string;
    contactLinks: Array<{
      label: string;
      href: string;
    }>;
  };
  footer: {
    copyright: string;
    links: FooterLink[];
  };
}

export const homePageData: HomePageData = {
  hero: {
    title: "Elevate your fitness journey",
    subtitle: "with Anna Oblomova",
    tagline: "Stronger, Fitter, Happier",
    spacedTitle: "S t a r t  w i t h  A n n a  O b l o m o v a  F i t",
    ctaText: "Start Your Journey"
  },
  featureHighlights: [
    {
      id: "workout-duration",
      icon: "clock",
      title: "Workout duration",
      hasExpander: true
    },
    {
      id: "training-style",
      icon: "barbell",
      title: "Training style & experience",
      hasExpander: true
    },
    {
      id: "nutrition",
      icon: "apple",
      title: "Nutrition",
      hasExpander: true
    },
    {
      id: "motivation",
      icon: "target",
      title: "Stay motivated & win big",
      hasExpander: true
    }
  ],
  achievements: {
    sectionNumber: "01",
    title: "What you'll achieve",
    description: "Transform your fitness journey with structured programs designed to deliver measurable results and lasting change.",
    items: [
      { id: "sculpt", text: "Sculpt and define your body" },
      { id: "strength", text: "Build strength and confidence" },
      { id: "consistency", text: "Stay consistent — train anytime, anywhere" }
    ]
  },
  challenge: {
    startDate: "Start - 27 of November",
    title: "Personal Training Challenge",
    features: [
      { id: "duration", title: "4 Weeks" },
      { id: "focus", title: "Body Definition" },
      { id: "coaching", title: "Personal Coaching" },
      { id: "nutrition", title: "Nutrition Guide" }
    ],
    ctaText: "Start Your Journey Today!",
    note: "Personal coaching included in all Anna Oblomova Fit programs"
  },
  coach: {
    title: "Meet Anna Oblomova – Your Coach, Your Guide, Your Motivation",
    bio: [
      "Hey, I'm Anna Oblomova, your guide and motivator on this journey to your best self! I know what it's like to feel stuck or unsure of where to start, which is why I've created Anna Oblomova Fit – a space to help you get stronger, move with confidence, and truly love the process. With years of experience coaching people to reach their goals, I've designed programs that fit your lifestyle without taking over your life.",
      "I believe fitness should empower you, not exhaust you. Let's train smart, nourish your body, and celebrate progress together. Ready to elevate your fitness? Let's get started! 💪"
    ],
    ctaText: "Get Started"
  },
  stats: [
    { id: "community", number: "500+", label: "Total community" },
    { id: "sessions", number: "5K+", label: "Sessions Completed" },
    { id: "transformations", number: "200+", label: "Transformations completed" }
  ],
  valueProposition: {
    description: "Elevate your fitness, fuel your body with purpose, and unlock a mindset built for success—with expert guidance, programs and a supportive community to keep you inspired.",
    items: [
      {
        id: "unlimited-access",
        title: "Unlimited Access",
        description: "Unlock all workouts, meal plans, and coaching with no restrictions."
      },
      {
        id: "flexible-training",
        title: "Flexible Training Options",
        description: "Choose from guided sessions for home or gym, with or without equipment, tailored to your schedule and goals."
      },
      {
        id: "healthy-eating",
        title: "Healthy Eating Made Easy",
        description: "Enjoy diverse recipes and meal plans designed to match your fitness goals, whether it's fat loss, muscle gain, or balanced living."
      },
      {
        id: "exclusive-content",
        title: "Exclusive Content",
        description: "Access new programs, fitness tips, and fresh recipes updated regularly."
      },
      {
        id: "supportive-community",
        title: "Supportive Community",
        description: "Connect with a global network of people who inspire and motivate you every day."
      },
      {
        id: "personal-support",
        title: "Personal Support",
        description: "Real people answering your questions, not bots, whenever you need help."
      }
    ],
    ctaText: "Let's do it!"
  },
  services: {
    title: "Unlock Your Best Self",
    subtitle: "What's waiting for you with Anna Oblomova Fit",
    items: [
      {
        id: "training-plans",
        title: "Results-Driven Training Plans",
        description: "Choose from structured training programs or explore our session library to tailor workouts to your preferences. Achieve your goals at home, in the gym, with equipment, or without.",
        icon: "barbell",
        imagePosition: "right"
      },
      {
        id: "nutrition",
        title: "Elevate Your Nutrition",
        description: "Access a constantly updated library of recipes and meal plans tailored to your dietary preferences and goals—whether it's fat loss, muscle gain, or balanced living.",
        icon: "apple",
        imagePosition: "left"
      },
      {
        id: "community-support",
        title: "Community & Personalized Support",
        description: "Stay motivated with a global community of like-minded individuals and get personal support directly from our coaching team.",
        icon: "users",
        imagePosition: "right"
      },
      {
        id: "progress-tracking",
        title: "Progress Tracking Made Simple",
        description: "Track your measurements, progress with every exercise, and compare before-and-after photos to see how far you've come.",
        icon: "chart-bar",
        imagePosition: "left"
      }
    ]
  },
  programs: {
    title: "All-in-One Access:",
    subtitle: "Programs Included in Your Plan",
    features: ["One membership", "Unlimited progress"],
    description: "Get full access to every training program—plus new ones added every few months to keep things fresh and exciting.",
    ctaText: "Get Started"
  },
  testimonials: {
    title: "Real people, achieving real results",
    items: [
      {
        id: "sarah-m",
        quote: "Anna Oblomova Fit transformed not just my body, but my entire relationship with fitness. The personalized approach made all the difference!",
        author: "Sarah M.",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b332c1fc?w=300&h=300&fit=crop&crop=face"
      },
      {
        id: "mike-j",
        quote: "I never thought I could stick to a fitness routine, but Anna's approach made it sustainable and enjoyable. Down 30 pounds and feeling amazing!",
        author: "Mike J.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      },
      {
        id: "elena-r",
        quote: "The nutrition guidance combined with personalized workouts gave me results I never achieved on my own. Anna truly cares about your success!",
        author: "Elena R.",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
      },
      {
        id: "david-l",
        quote: "From complete beginner to running my first 5K - Anna's program adapted perfectly to my fitness level and goals. Highly recommend!",
        author: "David L.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
      },
      {
        id: "maria-s",
        quote: "The community support and expert guidance made all the difference. I finally found a sustainable way to stay fit and healthy!",
        author: "Maria S.",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
      }
    ],
    ctaText: "Start Your Journey Today!"
  },
  pricing: {
    title: "Choose your plan, and begin your journey with Anna Oblomova Fit",
    plans: [
      {
        id: "monthly",
        name: "Monthly",
        billingPeriod: "billed every month",
        price: "$19.99/mo."
      },
      {
        id: "biannual",
        name: "Bi-annual",
        billingPeriod: "billed every 6 months",
        price: "$15.99/mo.",
        originalPrice: "$95.99",
        discount: "save 20%"
      },
      {
        id: "annual",
        name: "Annual",
        billingPeriod: "billed every 12 months",
        price: "$12.99/mo.",
        originalPrice: "$155.99",
        badge: "BEST VALUE",
        isPopular: true
      }
    ]
  },
  mission: {
    title: "Our mission",
    description: "To empower people to take control of their {fitness} and {nutrition}, unlocking their {potential} and building {habits} that last a lifetime.",
    highlights: ["fitness", "nutrition", "potential", "habits"]
  },
  faq: {
    title: "Still have questions?",
    items: [
      { 
        id: "consultation", 
        question: "Is there a complimentary consultation?",
        answer: "Yes! I offer a free 30-minute consultation call to all new clients. During this session, we'll discuss your fitness goals, current lifestyle, any limitations or concerns you might have, and determine if my coaching approach is the right fit for you. This consultation allows us to create a personalized roadmap for your success and ensures you feel confident about starting your fitness journey with me. You can book your complimentary consultation directly through our website or by contacting our support team."
      },
      { 
        id: "results", 
        question: "How quickly can I expect to see results?",
        answer: "Results vary depending on your starting point, goals, and consistency, but most clients begin noticing positive changes within 2-3 weeks. You'll likely feel stronger and more energetic first, followed by visible physical changes around 4-6 weeks. Significant transformations typically occur within 8-12 weeks of consistent training and nutrition adherence. Remember, sustainable results take time - I focus on building lasting habits rather than quick fixes. Your dedication to the program, combined with proper nutrition and adequate rest, will determine how quickly you achieve your goals."
      },
      { 
        id: "gym", 
        question: "Do I need a gym membership to train with Anna Oblomova Fit?",
        answer: "Not at all! My programs are designed to be flexible and adaptable to your environment. I offer both gym-based and home workout options, so you can train wherever you're most comfortable. For home workouts, you'll need minimal equipment - usually just resistance bands, dumbbells, and a yoga mat. Many exercises use bodyweight only. If you prefer gym training, I'll create programs that utilize available equipment. The most important thing is consistency, not location. I'll work with whatever setup you have to ensure you get an effective, challenging workout."
      },
      { 
        id: "diet", 
        question: "Do you offer plans for vegan/vegetarian diets?",
        answer: "Absolutely! I have extensive experience working with clients following various dietary preferences, including vegan, vegetarian, pescatarian, and other plant-based lifestyles. All nutrition plans are completely customized to your dietary requirements, food preferences, and cultural background. I'll ensure you're getting adequate protein, essential nutrients, and energy to support your fitness goals while respecting your dietary choices. Whether you're plant-based for health, ethical, or environmental reasons, I'll create a sustainable and enjoyable meal plan that fits your lifestyle perfectly."
      },
      { 
        id: "levels", 
        question: "What levels is Anna Oblomova Fit suitable for?",
        answer: "My programs are designed for all fitness levels, from complete beginners to advanced athletes. I believe everyone deserves personalized attention regardless of their starting point. For beginners, I focus on building proper form, establishing healthy habits, and gradually increasing intensity. Intermediate clients work on breaking plateaus and refining techniques. Advanced clients receive complex programming to reach peak performance. Each program is completely customized - I assess your current fitness level, experience, and goals to create the perfect challenge that pushes you without overwhelming you."
      },
      { 
        id: "subscription", 
        question: "How do I manage my subscription?",
        answer: "Managing your subscription is simple and transparent. You'll receive access to a personal client portal where you can view your current plan, update payment information, and modify your subscription at any time. You can upgrade, downgrade, pause, or cancel your subscription with just a few clicks - no lengthy phone calls or complicated processes. All billing is handled securely, and you'll receive clear invoices and reminders. If you need any assistance with your account, our support team is available via email or chat to help you with any subscription-related questions or changes."
      }
    ],
    contactTitle: "Don't see your questions?",
    contactLinks: [
      { label: "Contact us", href: "#contact" },
      { label: "support@aofit.com", href: "mailto:support@aofit.com" }
    ]
  },
  footer: {
    copyright: "© 2025 Anna Oblomova Fit. All rights reserved.",
    links: [
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "terms", label: "Terms & Conditions", href: "#" },
      { id: "refund", label: "Refund Policy", href: "#" }
    ]
  }
};
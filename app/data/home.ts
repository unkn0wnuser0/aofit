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
    subtitle: "with AO",
    tagline: "Stronger, Fitter, Happier",
    spacedTitle: "S t a r t  w i t h  A O  F i t",
    ctaText: "Start Your Journey"
  },
  featureHighlights: [
    {
      id: "workout-duration",
      icon: "⏱️",
      title: "Workout duration",
      hasExpander: true
    },
    {
      id: "training-style",
      icon: "🏋️",
      title: "Training style & experience",
      hasExpander: true
    },
    {
      id: "nutrition",
      icon: "🥗",
      title: "Nutrition",
      hasExpander: true
    },
    {
      id: "motivation",
      icon: "🎯",
      title: "Stay motivated & win big",
      hasExpander: true
    }
  ],
  achievements: {
    sectionNumber: "01",
    title: "What you'll achieve",
    description: "Our personal training programs are built to help you move with intention and see real results.",
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
    note: "Personal coaching included in all AO Fit programs"
  },
  coach: {
    title: "Meet AO – Your Coach, Your Guide, Your Motivation",
    bio: [
      "Hey, I'm AO, your guide and motivator on this journey to your best self! I know what it's like to feel stuck or unsure of where to start, which is why I've created AO Fit – a space to help you get stronger, move with confidence, and truly love the process. With years of experience coaching people to reach their goals, I've designed programs that fit your lifestyle without taking over your life.",
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
    subtitle: "What's waiting for you with AO Fit",
    items: [
      {
        id: "training-plans",
        title: "Results-Driven Training Plans",
        description: "Choose from structured training programs or explore our session library to tailor workouts to your preferences. Achieve your goals at home, in the gym, with equipment, or without.",
        icon: "🏋️‍♂️",
        imagePosition: "right"
      },
      {
        id: "nutrition",
        title: "Elevate Your Nutrition",
        description: "Access a constantly updated library of recipes and meal plans tailored to your dietary preferences and goals—whether it's fat loss, muscle gain, or balanced living.",
        icon: "🥗",
        imagePosition: "left"
      },
      {
        id: "community-support",
        title: "Community & Personalized Support",
        description: "Stay motivated with a global community of like-minded individuals and get personal support directly from our coaching team.",
        icon: "👥",
        imagePosition: "right"
      },
      {
        id: "progress-tracking",
        title: "Progress Tracking Made Simple",
        description: "Track your measurements, progress with every exercise, and compare before-and-after photos to see how far you've come.",
        icon: "📊",
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
        quote: "AO Fit transformed not just my body, but my entire relationship with fitness. The personalized approach made all the difference!",
        author: "Sarah M."
      }
    ],
    ctaText: "Start Your Journey Today!"
  },
  pricing: {
    title: "Choose your plan, and begin your journey with AO Fit",
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
      { id: "consultation", question: "Is there a complimentary consultation?" },
      { id: "results", question: "How quickly can I expect to see results?" },
      { id: "gym", question: "Do I need a gym membership to train with AO Fit?" },
      { id: "diet", question: "Do you offer plans for vegan/vegetarian diets?" },
      { id: "levels", question: "What levels is AO Fit suitable for?" },
      { id: "subscription", question: "How do I manage my subscription?" }
    ],
    contactTitle: "Don't see your questions?",
    contactLinks: [
      { label: "Contact us", href: "#contact" },
      { label: "support@aofit.com", href: "mailto:support@aofit.com" }
    ]
  },
  footer: {
    copyright: "© 2025 AO Fit. All rights reserved.",
    links: [
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "terms", label: "Terms & Conditions", href: "#" },
      { id: "refund", label: "Refund Policy", href: "#" }
    ]
  }
};
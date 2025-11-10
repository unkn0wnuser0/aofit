# AO Fit - Personal Training & Fitness Coaching Website

A modern, professional website for personal fitness coaching built with Next.js, HeroUI, and Prismic CMS. Features a contact form with Google Apps Script integration and advanced spam protection.

## 🚀 Features

- **Modern Design**: Built with HeroUI components and Tailwind CSS
- **Contact Form**: Advanced contact form with spam protection
- **Google Apps Script Integration**: Submissions automatically saved to Google Sheets
- **Prismic CMS**: Content management system for easy updates
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Security**: Advanced spam filtering and rate limiting

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI Components**: HeroUI (Hero UI)
- **Styling**: Tailwind CSS 4.0
- **CMS**: Prismic
- **Forms**: Custom React components with validation
- **Backend**: Google Apps Script for form handling
- **TypeScript**: Full type safety
- **Animations**: GSAP and CSS animations

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Google account (for Apps Script)
- Prismic account (optional)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd aofit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```
   PRISMIC_REPOSITORY_NAME=aofit
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_script_url
   ```

4. **Set up Google Apps Script** (Required for contact form)

   Follow the detailed guide: [GOOGLE_APPS_SCRIPT_SETUP.md](./GOOGLE_APPS_SCRIPT_SETUP.md)

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
aofit/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── providers.tsx     # Theme and UI providers
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── ContactSection.tsx
│   └── HeroSection.tsx
├── lib/                  # Utility functions
│   ├── rateLimiter.ts    # Rate limiting logic
│   ├── spamFilter.ts     # Spam detection
│   ├── spamMonitoring.ts # Spam analytics
│   └── utils.ts          # General utilities
├── customtypes/          # Prismic custom types
├── slices/              # Prismic slices
└── public/              # Static assets
```

## 🔧 Configuration

### Contact Form Settings

The contact form includes advanced spam protection:

- **Rate Limiting**: 3 submissions per IP per 15 minutes
- **Honeypot Fields**: Hidden fields to catch bots
- **Content Analysis**: Scans for spam keywords
- **Timing Validation**: Rejects too-fast submissions
- **Email/Name Validation**: Format and pattern validation

### Environment Variables

| Variable                        | Description                    | Required |
| ------------------------------- | ------------------------------ | -------- |
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Google Apps Script webhook URL | Yes      |
| `PRISMIC_REPOSITORY_NAME`       | Prismic repository name        | No       |
| `RATE_LIMIT_WINDOW`             | Rate limit time window (ms)    | No       |
| `RATE_LIMIT_MAX_REQUESTS`       | Max requests per window        | No       |

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `app/globals.css`. You can customize:

- Colors and themes
- Typography (Inter + Playfair Display)
- Component styles
- Animations and transitions

### Content

Update the content in:

- `app/page.tsx` - Main page content
- Components for section-specific content
- Prismic CMS for dynamic content (if configured)

### Components

All components are in the `components/` directory:

- `ui/` - Reusable UI components (Button, Card, Input, etc.)
- Page-specific components (HeroSection, ContactSection, etc.)

## 📊 Contact Form Integration

The contact form automatically:

1. **Validates** user input client-side and server-side
2. **Filters spam** using advanced detection algorithms
3. **Rate limits** submissions to prevent abuse
4. **Sends data** to Google Apps Script
5. **Stores submissions** in Google Sheets
6. **Provides feedback** to users

### Google Sheets Integration

When properly configured, form submissions create rows in Google Sheets with:

- Timestamp
- Name
- Email
- Fitness Goals
- Consent status
- Submission status
- Notes field for follow-up

## 🔒 Security Features

- **CSRF Protection**: Form tokens and validation
- **Rate Limiting**: IP-based submission limits
- **Spam Detection**: Content analysis and pattern matching
- **Input Validation**: Server-side validation of all fields
- **Honeypot Fields**: Hidden form fields to catch bots
- **Timing Analysis**: Detects suspiciously fast submissions

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Flexible grid layouts
- Optimized touch interactions
- Readable typography on all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed on any platform supporting Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- Self-hosted

## 🤝 Coach Transfer Process

When ready to transfer to the coach:

1. **Share Google Sheet** with coach as editor
2. **Help coach create** their own Google Apps Script
3. **Update environment variables** with coach's script URL
4. **Test the integration** together
5. **Transfer domain** and hosting access
6. **Provide documentation** and training

## 📞 Support

For questions or issues:

1. Check the troubleshooting section in [GOOGLE_APPS_SCRIPT_SETUP.md](./GOOGLE_APPS_SCRIPT_SETUP.md)
2. Review component documentation
3. Check browser console for errors
4. Verify environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **HeroUI** for the beautiful component library
- **Prismic** for the headless CMS
- **Next.js** for the React framework
- **Tailwind CSS** for the utility-first CSS framework

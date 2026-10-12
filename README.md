# Royal Swiss City - Premium Gated Community Website

![Royal Swiss City Logo](client/public/crown.svg)

**Live Site:** [royalswisscity.com](https://royalswisscity.com)

A sophisticated, high-performance real estate website for Royal Swiss City, a premium gated community in Lahore, Pakistan. The site showcases luxury residential and commercial spaces with cinematic visuals, smooth animations, and comprehensive community information.

## 📋 Project Overview

Royal Swiss City is a thoughtfully planned residential and commercial community where nature, modern infrastructure, and world-class amenities converge. This website serves as the primary digital presence, featuring detailed information about:

- **The City**: Community features, lifestyle, and strategic location
- **Developer**: Information about the development team
- **Enquiry System**: Lead generation and customer inquiry management
- **FAQ**: Comprehensive answers to common questions
- **Partners/Dealers**: Network of real estate dealers and partners

## ✨ Key Features

### 🎬 Cinematic Design & Animations
- **Hero Capsule Animation**: Smooth scroll-triggered animations with GSAP ScrollTrigger
- **Smooth Section Transitions**: Elegant entrance animations for all major sections
- **Image-First Aesthetic**: Dark, professional visual stage with high-quality product photography
- **Carousel Components**: Auto-rotating showcases with desktop and mobile-optimized layouts

### 🏗️ Multi-Page Application
- **Home**: Hero landing with company overview and key messaging
- **The City**: Comprehensive community tour with amenities, infrastructure, location, and sustainability
- **Developer**: Development team and company background
- **Enquire**: Interactive form for customer inquiries with backend processing
- **FAQ**: Expandable accordion with frequently asked questions
- **Floating Contacts**: Persistent contact options accessible from any page

### 📱 Responsive Design
- **Desktop-First Approach**: Optimized for 1920px+ displays
- **Mobile-Responsive**: Adaptive layouts for all screen sizes (320px-2560px)
- **Tablet Support**: Seamless experience across all devices
- **Performance Optimized**: WebP images, lazy loading, and code splitting

### 🗺️ Location & Navigation
- **Interactive Map**: Google Maps integration showing strategic location
- **Geofencing**: Positioned within Lahore's Ravi Riverfront development zone
- **Navigation Structure**: Intuitive menu with desktop nav and mobile-friendly hamburger menu
- **Breadcrumb Navigation**: Clear page hierarchy for better UX

### 🎯 Business Features
- **Lead Capture Form**: Enquiry system with validation and database storage
- **Real Estate Imagery**: High-resolution photos and renderings of amenities
- **Amenities Showcase**: Sports complex, aquatic water park, wildlife zoo
- **Infrastructure Details**: 40-feet roads, grand entrance, green corridors
- **Social Integration**: Links to Instagram, Facebook, TikTok, LinkedIn, YouTube, and X

## 🏗️ Project Structure

```
Royal-Swiss-City/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets (images, icons, documents)
│   │   ├── api/                     # Backend API endpoints (enquire.php)
│   │   ├── *.webp                   # Optimized images (amenities, infrastructure, etc.)
│   │   └── *.jpeg                   # Footer backgrounds and fallbacks
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── HeroCapsuleAnimation.tsx    # Main hero section
│   │   │   ├── ShowcaseCarousel.tsx        # Auto-rotating carousel
│   │   │   ├── ProjectsCarousel.tsx        # Project listings
│   │   │   ├── Map.tsx                     # Location map component
│   │   │   ├── Breadcrumb.tsx              # Breadcrumb navigation
│   │   │   ├── FloatingContacts.tsx        # Persistent contact bar
│   │   │   ├── ErrorBoundary.tsx           # Error handling
│   │   │   ├── SEOHead.tsx                 # Meta tags and SEO
│   │   │   ├── ArchivedSheet.tsx           # Archive functionality
│   │   │   ├── ManusDialog.tsx             # Dialog component
│   │   │   └── ui/                         # Radix UI components (50+ components)
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.tsx             # Landing page
│   │   │   ├── TheCity.tsx          # Community tour page
│   │   │   ├── Developer.tsx        # Developer information
│   │   │   ├── Enquire.tsx          # Enquiry form page
│   │   │   ├── FAQ.tsx              # FAQ accordion page
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── contexts/                # React context (state management)
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── utils/                   # Utility functions
│   │   ├── lib/                     # Library utilities
│   │   ├── config/                  # Configuration files
│   │   ├── const.ts                 # Constants and URLs
│   │   ├── index.css                # Global Tailwind CSS
│   │   ├── App.tsx                  # Root component
│   │   └── main.tsx                 # Entry point
│   ├── index.html                   # HTML template
│   └── vite.config.ts               # Vite build configuration
├── server/
│   └── index.ts                     # Express.js server (public folder serving & routing)
├── shared/                          # Shared utilities between client and server
├── dist/                            # Production build output
├── patches/                         # NPM package patches
├── project screenshots/             # UI/UX screenshots
│   ├── 01 - Desktop/                # Desktop screenshots (Hero, sections, footer)
│   └── 02 - Mobile/                 # Mobile screenshots (Hero, sections, footer)
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Root Vite config
├── tsconfig.json                    # TypeScript configuration
├── components.json                  # Radix UI component registry
├── tailwind.config.ts               # Tailwind CSS configuration
├── .env.example                     # Environment variables template
└── README.md                        # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2**: Modern UI library
- **TypeScript 5.6**: Type-safe development
- **Vite 7.1**: Fast build tool and dev server
- **Tailwind CSS 4.1**: Utility-first styling
- **Framer Motion 12.23**: Animation library
- **GSAP 3.15**: Professional animation framework with ScrollTrigger
- **Radix UI**: Unstyled, accessible component primitives (50+ components)
- **Wouter 3.3**: Lightweight client-side router
- **Recharts 2.15**: React charting library
- **React Hook Form 7.64**: Form state management
- **Zod 4.1**: TypeScript-first schema validation
- **Lucide React 0.453**: Icon library
- **Embla Carousel 8.6**: Touch-friendly carousel library
- **Next Themes 0.4**: Dark mode support
- **Sonner 2.0**: Toast notifications

### Backend
- **Node.js**: JavaScript runtime
- **Express 4.21**: Web framework
- **TypeScript**: Typed Node.js development
- **esbuild**: Fast bundler for production builds

### Development
- **Prettier 3.6**: Code formatting
- **Vite Plugin Manus Runtime**: Development enhancement
- **Tailwind CSS Vite Plugin**: Optimized Tailwind integration
- **PostCSS 8.4**: CSS transformations

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (recommended: 20.x or higher)
- **npm 10.x** or **yarn 4.x**
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdullah-webster/royal_swiss_city80.git
   cd Royal-Swiss-City
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```
   Add any required environment variables (see `.env.example` for configuration options).

### Development

**Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if in use).

**Type checking:**
```bash
npm run check
```

**Code formatting:**
```bash
npm run format
```

### Production Build

**Build for production:**
```bash
npm run build
```

This creates optimized builds for both client (Vite) and server (Express + esbuild):
- Client output: `dist/public/`
- Server output: `dist/index.js`

**Start production server:**
```bash
npm start
```

Server runs on port 3000 by default (configurable via `PORT` environment variable).

**Preview build locally:**
```bash
npm run preview
```

## 📸 Screenshots

### Desktop Version

#### Hero Section
![Desktop Hero](project%20screenshots/01%20-%20Desktop/Hero.png)

#### Community Showcase
![Desktop Section 2](project%20screenshots/01%20-%20Desktop/2.png)

#### Amenities & Features
![Desktop Section 3](project%20screenshots/01%20-%20Desktop/3.png)

#### Footer
![Desktop Footer](project%20screenshots/01%20-%20Desktop/footer.png)

### Mobile Version

#### Hero Section
![Mobile Hero](project%20screenshots/02%20-%20Mobile/Hero.png)

#### Community Showcase
![Mobile Section 2](project%20screenshots/02%20-%20Mobile/2.png)

#### Amenities & Features
![Mobile Section 3](project%20screenshots/02%20-%20Mobile/3.png)

#### Footer
![Mobile Footer](project%20screenshots/02%20-%20Mobile/Footer.png)

## 🏢 Pages Overview

### Home (`/`)
Landing page featuring:
- Cinematic hero section with brand messaging
- Featured projects carousel
- Key amenities showcase
- Call-to-action for enquiries
- Social proof and testimonials

### The City (`/the-city`)
Comprehensive community guide including:
- Full-screen hero with community imagery
- City immersion narrative ("A City Immersed In Nature")
- World-class amenities (Sports Complex, Aquatic Water Park, Wildlife Zoo)
- Modern infrastructure (40-feet roads, grand entrance, organized blocks)
- Location & strategic positioning with interactive map
- Sustainability and green living initiatives
- Riverfront living experience
- Expandable footer with detailed sections

### Developer (`/developer`)
Information about the development company:
- Developer background and credentials
- Past projects and portfolio
- Company vision and mission
- Team leadership
- Certifications and accolades

### Enquire (`/enquire`)
Interactive inquiry system:
- Contact information form
- Property type selection
- Budget and timeline inputs
- Form validation with Zod
- Backend API integration for lead capture
- Success/error notifications
- Mobile-responsive form layout

### FAQ (`/faq`)
Comprehensive Q&A section:
- Expandable accordion interface
- Topics: Location, Property Types, Payment Plans, Amenities, Investment
- Mobile-friendly collapse/expand
- Smooth animations

## 🔧 API Endpoints

### Enquiry Form
- **POST** `/api/enquire`
- Accepts: name, email, phone, message, property_type, budget
- Returns: success/error response
- Database: Enquiries stored in MySQL

## 📊 Performance Optimizations

- **Image Optimization**: WebP format with JPEG fallbacks
- **Lazy Loading**: Images load on-demand
- **Code Splitting**: Vendor chunks separated for better caching
- **Tree Shaking**: Unused code removed in production
- **Minification**: esbuild for fast minification
- **Bundle Analysis**: Configured chunk size warnings

## 🌐 Browser Support

- **Chrome/Edge**: Latest versions (2025+)
- **Firefox**: Latest versions (2025+)
- **Safari**: Latest versions (iOS 15+, macOS 12+)
- **Mobile Browsers**: Chrome Mobile, Safari Mobile, Samsung Internet

## 🔐 Security & Compliance

- **HTTPS Only**: All production traffic encrypted
- **CORS Configuration**: Properly configured for cross-origin requests
- **Input Validation**: Zod schema validation on all forms
- **Environment Variables**: Sensitive data in `.env` files
- **XSS Protection**: React's built-in XSS protection
- **CSRF Tokens**: Implemented on forms (if applicable)

## 📝 Environment Variables

Reference: See `.env.example`

Example configuration:
```
VITE_API_URL=https://api.royalswisscity.com
VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key
PORT=3000
NODE_ENV=production
```

## 🚀 Deployment

### Self-Hosted (Current)
The site is **NOT deployed on Vercel** but on dedicated hosting at `royalswisscity.com`.

**Deployment steps:**
1. Build the project: `npm run build`
2. Upload `dist/` folder to your server
3. Configure your web server (Apache/Nginx) to serve the Express server
4. Set environment variables on the server
5. Start the application: `npm start`

### Alternative Deployment Options
- **Docker**: Create a Dockerfile for containerized deployment
- **AWS**: Deploy on EC2, Elastic Beanstalk, or Amplify
- **Google Cloud**: Cloud Run, App Engine, or Compute Engine
- **Azure**: App Service or Container Instances
- **Traditional VPS**: Any Linux server with Node.js support

## 📞 Contact & Support

**Website:** [royalswisscity.com](https://royalswisscity.com)

**Social Media:**
- Instagram: [@royalswisscity](https://instagram.com/royalswisscity)
- Facebook: [Royal Swiss City](https://facebook.com/royalswisscity)
- LinkedIn: [Royal Swiss City](https://linkedin.com/company/royalswisscity)
- YouTube: [@royalswisscity](https://youtube.com/@royalswisscity)
- TikTok: [@royalswisscity](https://tiktok.com/@royalswisscity)
- X (Twitter): [@royalswisscity](https://x.com/royalswisscity)

## 👥 Contributors

- **Lead Developer**: [Muhammad Abdullah Wasim](https://www.linkedin.com/in/muhammad-abdullah-92b50a304/)
- **Content & Strategy**: [Muhammad Abdullah Wasim](https://www.linkedin.com/in/muhammad-abdullah-92b50a304/), [Noor-Ul-Huda](https://www.linkedin.com/in/noor-ul-huda-26b689437/)

## 🐛 Known Issues & Limitations

- Map functionality requires valid Google Maps API key
- Enquiry form backend requires MySQL database configuration
- Some animations may perform differently on lower-end mobile devices
- Third-party tracking/analytics may require user consent (GDPR/privacy compliance)

## 📝 Notes for Developers

- All paths use forward slashes (`/`), even on Windows
- Images should be optimized WebP format for production
- Keep Tailwind CSS custom colors in sync with brand guidelines
- GSAP animations are scroll-triggered; ensure images load before triggering
- Mobile breakpoint: 768px (Tailwind's `md` breakpoint)
- Forms use React Hook Form with Zod validation
- Component library: Radix UI (unstyled, highly customizable)

---

**Last Updated:** October 2026
**Repository:** [GitHub - Abdullah-Webster/royal_swiss_city80](https://github.com/Abdullah-webster/royal_swiss_city80)
**Live Demo:** [royalswisscity.com](https://royalswisscity.com)

# Royal Swiss City 75 - Website

A modern, responsive real estate website built with React, TypeScript, GSAP animations, and Vite. Deployed on Vercel.

## Features

- **Hero Capsule Animation**: Smooth scroll-triggered animation with GSAP ScrollTrigger
- **Showcase Carousel**: Auto-rotating carousel with landscape cards on desktop and mobile-responsive design
- **Section Animations**: Smooth entrance animations for all major sections
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS

## Development

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

```bash
npm run build
```

This builds both the client (Vite) and server (Express with esbuild).

### Type Checking

```bash
npm run check
```

### Formatting

```bash
npm run format
```

## Deployment to Vercel

### Automatic Deployment

1. Push to GitHub:
   ```bash
   git push origin main
   ```

2. Connect your GitHub repository to Vercel at https://vercel.com
3. Vercel will automatically deploy on push to `main`

### Manual Deployment

```bash
vercel
```

### Environment Variables

Create a `.env.local` file for local development (see `.env.example`).

For Vercel, add environment variables in the project settings:
- Go to Settings → Environment Variables in your Vercel project
- Add any required variables (currently minimal configuration needed)

### Build Command

```
npm run build
```

### Output Directory

```
dist
```

### Start Command

```
npm start
```

## Project Structure

```
├── client/               # Frontend React application
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components (HeroCapsuleAnimation, ShowcaseCarousel)
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Animation utilities
│   │   ├── index.css    # Global styles
│   │   └── main.tsx     # Entry point
│   ├── index.html       # HTML template
│   └── vite.config.ts   # Vite configuration
├── server/              # Express server
├── vercel.json         # Vercel deployment config
└── package.json        # Project dependencies
```

## Key Components

### HeroCapsuleAnimation
Animated hero section with capsule animation from mobile pill shape to fullscreen.

### ShowcaseCarousel
Auto-rotating carousel with landscape cards on desktop (1000px × 500px) and mobile-responsive (70vw × 380px).

## Animations

All animations use GSAP with ScrollTrigger for scroll-based animations and interval-based for carousel rotation.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Contact

For inquiries about Royal Swiss City, visit https://royalswisscity.com

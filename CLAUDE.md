# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (lint is disabled with `--no-lint` flag)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15 developer portfolio website built with TypeScript and Tailwind CSS. The project is configured for static export (`output: "export"` in next.config.ts).

### Key Technologies
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **next-themes** for theme support

### App Structure
The app uses Next.js App Router with the following pages:
- `/` - Main homepage with hero section, AI technology stack, and development comparison
- `/portfolio` - Portfolio showcase page
- `/contact` - Contact form page
- `/services` - Services page

### Key Components
- **TypewriterText**: Custom animated text component with typewriter effect
- **Hero Section**: Features animated background particles, terminal simulation, and floating elements
- **Navigation**: Fixed header with responsive navigation and CTA button

### Styling Approach
- Uses Tailwind CSS with custom gradients and animations
- Dark theme with slate/blue color scheme
- Responsive design with mobile-first approach
- Framer Motion animations with stagger effects and hover interactions

### Static Export Configuration
The project is configured for static export, suitable for deployment to static hosting platforms. The build process generates static files in the `out/` directory.

### Font Configuration
Uses Google Fonts (Geist Sans and Geist Mono) with CSS variables for consistent typography.

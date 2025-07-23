# Developer Portfolio

This repository contains an AI‑powered portfolio and service showcase built with **Next.js 15**. It demonstrates how to combine TypeScript, Tailwind CSS and Framer Motion to create an engaging single page experience.

## Features

- **Next.js App Router** with TypeScript configuration
- Animated user interface powered by **Framer Motion**
- Responsive styling using **Tailwind CSS**
- Portfolio grid with modal details
- Service descriptions and pricing tables
- Contact form that posts data to a Google Apps Script endpoint

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm start
```

## Project Layout

- `app/` – application source pages (`page.tsx`, `portfolio`, `services`, `contact`)
- `public/` – static assets
- `postcss.config.mjs` – Tailwind integration
- `next.config.ts` – basic Next.js configuration

## Linting

Run ESLint with:

```bash
npm run lint
```

## Deployment

The project can be deployed to any Node.js hosting provider. It is pre‑configured for Vercel, which supports the Next.js App Router out of the box.


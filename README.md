# Aurelia Interiors Website

A modern, minimal, and premium single-page website for an interior design business, built with performance, SEO, and conversion in mind.

## Tech Stack

- `Next.js` (App Router) for SEO-friendly static output and production reliability
- `React` + `TypeScript` for component-driven architecture and type safety
- `Tailwind CSS` for scalable, production-grade styling
- `Framer Motion` for subtle premium animations
- `ESLint` for code quality and consistency

## Why This Stack

- **SEO first:** server-rendered/static-friendly structure with proper metadata
- **Fast loading:** optimized images via `next/image`, lazy loading, static page build
- **Maintainable:** reusable components, clear section separation, strict TypeScript
- **Scalable:** easy to extend with CMS, analytics, form backend, and multi-page routes

## Project Structure

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    AnimatedReveal.tsx
    BeforeAfterComparison.tsx
    PortfolioSection.tsx
next.config.ts
tailwind.config.js
eslint.config.mjs
```

## Features Implemented

- Hero section with premium headline, CTA, and visual focus
- About section with credibility points
- Portfolio section with:
  - category filters
  - hover gallery effects
  - before/after comparison slider
  - video showcase support
- Services section (residential, commercial, renovation, consultation)
- Testimonials section for trust building
- Contact section with lead form + email + phone + WhatsApp
- Sticky navigation and premium footer
- Smooth reveal animations
- Mobile responsive layout

## Getting Started

## 1) Install dependencies

```bash
npm install
```

## 2) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3) Lint

```bash
npm run lint
```

## 4) Production build

```bash
npm run build
npm run start
```

## SEO and Performance Notes

- Metadata is set in `src/app/layout.tsx`
- Portfolio images use optimized rendering and lazy loading
- Minimal JS where possible, with interaction only in client components
- Layout uses whitespace-first structure for better readability and UX
- CSS is utility-driven and purge-friendly through Tailwind content paths

## Content Customization

Update these files to brand the website:

- `src/app/layout.tsx` → title, description, SEO metadata
- `src/app/page.tsx` → company name, services, testimonials, contact info
- `src/components/PortfolioSection.tsx` → portfolio items, categories, media links
- `src/app/globals.css` + `tailwind.config.js` → colors, typography, visual style tokens

## Form and Lead Integration (Next Step)

Current form is UI-ready and can be connected to:

- Next.js API route (`/api/contact`)
- Formspree
- Resend / SendGrid
- HubSpot / Zoho CRM webhook

## Deployment

Recommended: **Vercel** for best Next.js compatibility.

Alternative: Netlify (with Next support) or custom Node hosting.

## Quality Checklist

- [x] Responsive on mobile/tablet/desktop
- [x] Clean semantic sectioning for SEO
- [x] Conversion-focused CTAs and microcopy
- [x] Reusable component architecture
- [x] Lint-clean codebase


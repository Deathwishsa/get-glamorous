# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**GetGlamorous** is an Angular 21 beauty salon website featuring:
- Service catalog (hair, nails, combos)
- Booking system with calendar availability
- Gallery with filtering
- Contact form (enquiry / booking enquiry)
- Mobile support via Capacitor
- Server-side rendering (SSR) with Angular 21

**Tech Stack:**
- Framework: Angular 21.2.0 (standalone components, no NgModules)
- Build: Angular CLI 21.2.7 with SSR
- Styling: SCSS with design tokens via `src/styles/theme.scss` (pink/white luxury theme)
- Testing: Vitest + jsdom
- Server: Express 5.1.0 for SSR
- Mobile: Capacitor 8.3.1 (Android)
- Code quality: Prettier 3.8.1, TypeScript 5.9.2
- Icons: Font Awesome Free (npm, loaded via angular.json styles array)
- Fonts: Playfair Display (display) + DM Sans (body) via Google Fonts in index.html

## Development Commands

### Core Commands
```bash
npm start              # Start dev server (ng serve) at http://localhost:4200
npm run build          # Build for production
npm run watch          # Watch mode during development (incremental builds)
npm test               # Run unit tests with Vitest
```

### Build & Deployment
```bash
npm run build                                      # Production build
npx ng build --configuration development          # Dev build with source maps
npm run serve:ssr:get-glamorous                   # Run Express SSR server (port 4000)
```

The project includes **deploy-to-live.ps1** PowerShell script for automated deployment to GitHub Pages or custom domain.

### Testing
```bash
npm test                    # Run all tests
npm test -- --run         # Run tests once (CI mode)
npm test -- FILE.spec.ts  # Run specific test file
```

## Architecture & Structure

### Directory Layout
```
src/
├── styles/
│   └── theme.scss         # Single source of truth: all design tokens, mixins, utility classes
├── styles.scss            # Global reset, scrollbar, section utilities — imports theme.scss
├── index.html             # Google Fonts preconnect + link tags
└── app/
    ├── common/
    │   ├── component/
    │   │   ├── header/    # Sticky nav, mobile menu, scroll shadow
    │   │   └── footer/    # 3-col grid: brand/social, nav, contact
    │   └── constant/
    │       └── business.ts  # BUSINESS constant — ALL hardcoded data lives here
    └── page/
        ├── home/          # Compositor — imports 7 child sections, zero logic
        │   ├── hero/
        │   ├── stats-bar/
        │   ├── about/
        │   ├── services/
        │   ├── testimonials/
        │   ├── preview-gallery/
        │   └── preview-booking/
        ├── menu/          # Tab-based: hair / nails / combos
        ├── gallery/       # Filter + grid + lightbox
        ├── booking/       # Calendar + time slots + form
        │   ├── calendar-grid/  # Page-scoped sub-component; exports BookingStatus type
        │   └── day-cell/       # Page-scoped sub-component
        └── contact-us/    # Form state machine + sidebar
```

### Routing
All routes are standalone components, no NgModules:
- `/` → HomeComponent
- `/menu` → MenuComponent (tabs: hair/nails/combos)
- `/gallery` → GalleryComponent (filter from `BUSINESS.galleryCategories`)
- `/booking` → BookingComponent (calendar + time slots)
- `/contact-us` → ContactUsComponent (enquiry form + contact sidebar)
- `**` → redirect to home

### Data Flow

**Single source of truth:** `BUSINESS` constant in `src/app/common/constant/business.ts`
- All salon info: name, address, phone, email, social links, business hours, SEO
- `nav[]` — 5 nav items used by header, footer, and any component needing nav links
- `services[]` — flat 4-item array for home page cards and form dropdowns
- `menuServices: { hair[], nails[], combos[] }` — full service data for `/menu`
- `galleryCategories` — `['All', 'Hair', 'Nails', 'Combos'] as const`
- `galleryItems[]` — uses `src` field (not `url`), has `caption` and `category`
- `galleryPreview[]` — 6 URLs shown on home page
- `testimonials[]`, `stats[]`, `social[]`, `heroSlides[]`

**No DataService** — components import `BUSINESS` directly. No singleton service layer.

### Key Patterns

**Styling:**
- `@use '../../styles/theme' as t;` in every component SCSS (adjust `../../` depth as needed)
- Path depth from `src/`: common/component = 4 levels (`../../../../`), page = 3 levels (`../../../`), page sub-components = 4 levels (`../../../../`)
- BEM methodology throughout (`.block__element--modifier`)
- All design tokens come from `theme.scss` — no hardcoded hex values in component SCSS
- Global utility classes from `theme.scss`: `.btn-primary`, `.btn-outline`, `.pink-gradient-text`, `.section-label`, `.section-heading`, `.section-subheading`, `.container`

**Forms — state machine pattern:**
- `type FormStatus = 'idle' | 'submitting' | 'success' | 'error'`
- `formStatus: FormStatus = 'idle'`
- `setTimeout(() => { this.formStatus = 'success'; }, 1800)` simulates async
- Template conditionally shows form / spinner / success / error panels via `*ngIf`

**Booking sub-components:**
- `BookingStatus` type (`'available' | 'requested' | 'booked'`) is defined and exported from `page/booking/calendar-grid/calendar-grid.component.ts`
- `CalendarGridComponent` and `DayCellComponent` are page-scoped (not shared globally)
- Mock availability is an inline constant in `booking.component.ts` (replace with API call)

**Gallery:**
- Filter values match `BUSINESS.galleryCategories` exactly (capitalized: `'All'`, `'Hair'`, `'Nails'`, `'Combos'`)
- `GalleryItem.src` is the image URL field (not `.url`)
- Lightbox keyboard support via `@HostListener('document:keydown')`

### Server-Side Rendering (SSR)

- Entry: src/server.ts (Express app)
- All routes use `RenderMode.Prerender` (static HTML at build time)
- Start: `npm run serve:ssr:get-glamorous` (port 4000 or `$PORT`)

## Configuration Files

- **angular.json**: Build config; Font Awesome CSS is in the `styles` array
- **tsconfig.json**: ES2022 target, strict mode, isolatedModules
- **.prettierrc**: 100 char width, single quotes, angular HTML parser
- **capacitor.config.ts**: Android app config (appId, appName, webDir: dist)

## Important Notes

### Booking System
- `BookingStatus`: `'available' | 'requested' | 'booked'` — defined in `page/booking/calendar-grid/`
- Mock availability is an IIFE constant in `BookingComponent` — replace with API
- **No backend integration** — form submission is simulated with `setTimeout`

### Contact / Booking Forms
- No email service connected — simulate only
- Form state machine pattern used in both `contact-us` and `booking`

### Gallery
- `GalleryItem.src` (not `.url`) — use `item.src` in templates
- Category filter values are capitalized strings matching `galleryCategories`

### Build Artifacts
- Browser output at dist/browser (SSR mode)
- Server output at dist/server

## Git Workflow

- **Branches**: prod (production), live (deployment branch with build artifacts)
- Deploy script (deploy-to-live.ps1): Automates prod → live sync, build, and force-push
- Supports both GitHub Pages (with /get-glamorous/ base-href) and custom domain deployments

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**GetGlamorous** is an Angular 21 beauty salon website featuring:
- Service catalog (hair, nails, combos)
- Booking system with calendar availability
- Gallery with filtering
- Contact form with Google Maps integration
- Mobile support via Capacitor
- Server-side rendering (SSR) with Angular 21

**Tech Stack:**
- Framework: Angular 21.2.0 (standalone components, no NgModules)
- Build: Angular CLI 21.2.7 with SSR
- Styling: SCSS with design tokens (pink/white luxury theme)
- Testing: Vitest + jsdom
- Server: Express 5.1.0 for SSR
- Mobile: Capacitor 8.3.1 (Android)
- Code quality: Prettier 3.8.1, TypeScript 5.9.2

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
npm run build                                    # Production build (default config)
npx ng build --configuration development        # Dev build with source maps
npx ng build --watch --configuration development  # Same as npm run watch
npm run serve:ssr:get-glamorous                 # Run Express SSR server (port 4000)
```

The project includes **deploy-to-live.ps1** PowerShell script for automated deployment to GitHub Pages or custom domain:
- Handles base-href configuration for both deployment targets
- Creates 404.html for SPA routing on static hosts
- Force-pushes to live branch on GitHub

### Testing
```bash
npm test                    # Run all tests
npm test -- --run         # Run tests once (CI mode)
npm test -- --watch       # Watch mode (default)
npm test -- FILE.spec.ts  # Run specific test file
```

## Architecture & Structure

### Directory Layout
```
src/
├── app/
│   ├── page/              # Routed page components (home, menu, gallery, booking, contact-us)
│   ├── common/component/  # Layout (header, footer)
│   ├── shared/            # Reusable components (calendar-grid, service-card, hero-slider, day-cell)
│   ├── services/          # DataService for client data
│   ├── constants/         # CLIENT_DATA (services, gallery, availability)
│   ├── app.component.ts   # Root component with RouterOutlet
│   ├── app.routes.ts      # Route definitions
│   ├── app.config.ts      # App config (providers)
│   ├── app.config.server.ts      # SSR-specific config
│   ├── app.routes.server.ts      # Server render modes (all routes prerendered)
├── main.ts                # Bootstrap standalone AppComponent
├── main.server.ts         # Server bootstrap
├── server.ts              # Express SSR server setup
├── styles.scss            # Global styles with CSS custom properties
└── index.html             # Entry point
```

### Routing
- **Standalone Components**: All components are standalone (no modules)
- **Routes** (app.routes.ts):
  - `/` → HomeComponent
  - `/menu` → MenuComponent (tab-based: hair/nails/combos)
  - `/gallery` → GalleryComponent (filter: all/hair/nails/combo)
  - `/booking` → BookingComponent (calendar + time slots)
  - `/contact-us` → ContactUsComponent (form + Google Maps)
  - `**` → redirect to home

### Data Flow

**Single source of truth:** `CLIENT_DATA` constant in `src/app/constants/client-data.ts`
- Contains all salon info: name, address, phone, email, social links, business hours
- Service definitions (hair, nails, combo) with pricing, duration, description
- Gallery images with category filtering
- Mock booking availability by date

**DataService** (singleton) provides `getClientData()` to all components.
Components inject DataService and read from `clientData` property.

### Key Patterns

**State Management:**
- No NgRx; client data is static and injected via DataService
- Component-level state for UI (selected date, activeTab, form inputs)
- Example: BookingComponent manages selectedDate, selectedTime, form fields

**Component Types:**
1. **Pages** (route components): HomeComponent, MenuComponent, GalleryComponent, BookingComponent, ContactUsComponent
2. **Layout** (header/footer): Always visible via AppComponent
3. **Shared** (reusable): CalendarGridComponent, ServiceCardComponent, HeroSliderComponent, DayCellComponent

**Styling:**
- SCSS with design tokens at :root (--primary-pink: #e91e63, etc.)
- Scoped component styles (.scss per component)
- Global styles in src/styles.scss (reset, typography, .container)
- Prettier format: 100 char line width, single quotes, angular parser for .html

**Forms:**
- FormsModule for [(ngModel)] binding (ContactUsComponent, BookingComponent)
- No validation framework; alert() for basic feedback
- Frontend-only; logs to console.log (e.g., booking requests, form submissions)

### Server-Side Rendering (SSR)

- Entry: src/server.ts (Express app)
- AngularNodeAppEngine renders all routes (see app.routes.server.ts)
- All routes use `RenderMode.Prerender` (generate static HTML at build time)
- Static assets served from dist/browser with 1-year max-age cache
- Fallback to Angular routing for SPA behavior
- Start: `npm run serve:ssr:get-glamorous` (listens on port 4000 or $PORT env var)

## Configuration Files

- **angular.json**: Build config, compiler options, SSR entry points
- **tsconfig.json**: TypeScript compiler settings (ES2022 target, strict mode)
- **tsconfig.app.json**: App-specific TS config (excludes .spec.ts)
- **tsconfig.spec.json**: Test-specific TS config
- **.prettierrc**: Code formatting (100 char width, single quotes, angular HTML parser)
- **.editorconfig**: Editor settings (2 spaces, UTF-8, trim trailing whitespace)
- **capacitor.config.ts**: Mobile app config (appId, appName, webDir: dist)

## Important Notes

### Booking System
- Uses mock availability in CLIENT_DATA.mockAvailability (YYYY-MM-DD keys)
- Status values: "available", "requested", "booked"
- CalendarGridComponent handles month navigation and day rendering
- BookingComponent manages time slot selection (predefined array)
- **No backend integration**; booking requests log to console only

### Contact Form
- No email service configured; logs to console
- Uses DomSanitizer to safely embed Google Maps iframe
- Auto-hides success message after 6 seconds

### Gallery
- Images stored in CLIENT_DATA.galleryImages with category metadata
- Supports filtering by category; lightbox with keyboard shortcuts (ESC, arrows)
- Currently uses external URLs (therighthairstyles.com, walmartimages.com, cloudfront)

### Mobile
- Capacitor configured for Android (target: dist folder)
- See capacitor.config.ts for app ID and name

### Build Artifacts
- **Development**: dist/get-glamorous (unoptimized, source maps)
- **Production**: dist/ (optimized, code splitting, hashed assets)
- Browser output at dist/browser (SSR mode)
- Server output at dist/server (SSR mode)

## TypeScript Configuration

- **Strict mode enabled**: noImplicitAny, strict null checks, strict function types
- **Standalone compilation**: isolatedModules enabled
- **Angular strict templates**: strictTemplates, strictInputAccessModifiers, strictInjectionParameters
- Target: ES2022, Module: preserve
- Component decorator style: `@Component({ selector, standalone, imports, templateUrl, styleUrls })`

## Git Workflow

- **Branches**: prod (production), live (deployment branch with build artifacts)
- Deploy script (deploy-to-live.ps1): Automates prod → live sync, build, and force-push
- Supports both GitHub Pages (with /get-glamorous/ base-href) and custom domain deployments

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page Next.js 16 portfolio site with React 19 and TypeScript. App Router is used but the entire visible page is one large `'use client'` component — there are no Server Components beyond `app/layout.tsx`.

**Key files:**
- `app/page.tsx` — entire page content (header, experience, education, skills, projects, contact, footer). All sections are inline here, not split into sub-components.
- `app/layout.tsx` — root layout with metadata; intentionally minimal (no Navigation/Footer wrappers).
- `app/components/Navigation.tsx` — exists but is **not currently used** by the app (not imported anywhere).
- `app/components/Footer.tsx` — exists but is **not currently used**; the footer is inlined in `page.tsx`.
- `app/globals.css` — all styling via CSS custom properties and the `[data-theme="dark"]` selector.

**Dark mode:** `page.tsx` controls theme via `document.documentElement.setAttribute('data-theme', 'dark'|'light')` and persists to `localStorage`. The unused `Navigation.tsx` uses a different approach (`classList.add('dark-mode')`) — these are inconsistent if Navigation is ever wired up.

**Public assets:** NYU/Courant logos with light/dark variants (`courant_short_white.png` / `courant_short_black.png`), selected dynamically based on `isDarkMode` state.

**No API routes, no database, no auth.** Deployed on Vercel.

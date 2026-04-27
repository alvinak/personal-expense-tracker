# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

@AGENTS.md

This project uses **Next.js 16.2.4** — a version with breaking changes from what you may know. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Stack:** Next.js 16.2.4 (App Router) · React 19.2.4 · TypeScript 5 · Tailwind CSS v4

The project uses the **App Router** pattern under `app/`. All routes are file-based under that directory. The path alias `@/*` resolves to the project root.

**Styling:** Tailwind v4 with PostCSS (`@tailwindcss/postcss`). Global styles and Tailwind are imported in `app/globals.css` via `@import "tailwindcss"`. No separate `tailwind.config.*` file — v4 uses CSS-first configuration.

**Current state:** Fresh scaffold — only the default Create Next App structure exists. No API routes, database, auth, or application logic has been implemented yet.

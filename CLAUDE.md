# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Status

This is a fresh `create-next-app` scaffold for a personal expense tracker. No domain code, data layer, or tests exist yet. `app/page.tsx` and the `metadata` in `app/layout.tsx` are still the template defaults.

## Commands

- `npm run dev`: dev server at http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run start`: serve the production build
- `npm run lint`: ESLint 9 flat config (`eslint.config.mjs`, Next core-web-vitals + TypeScript presets)
- `npx tsc --noEmit`: type-check on its own

No test runner is configured.

## Stack and things that differ from defaults

- **Next.js 16.4 (App Router only) + React 19.3.** Per AGENTS.md, APIs may differ from what you remember. Check `node_modules/next/dist/docs/` (`01-app/`, `03-architecture/`) before using a Next API you're unsure of.
- **`next.config.ts` turns on non-default features** that change how routes render and cache:
  - `cacheComponents: true`: caching is opt-in through `"use cache"` and dynamic data needs `<Suspense>` boundaries. Read the docs on this before adding data fetching.
  - `partialPrefetching: true`
  - `experimental.agentFeedback: true`
- **Tailwind CSS v4 runs through a Turbopack loader** (`@tailwindcss/turbopack`, set in `next.config.ts` `turbopack.rules`), not PostCSS. There's no `postcss.config` or `tailwind.config`. Theme tokens are defined in CSS with `@theme inline` in `app/globals.css`.
- Route props use Next's generated global types (for example, `LayoutProps<"/">` in `app/layout.tsx`). These come from `.next/types`, which `next dev` or `next build` regenerates.
- Path alias: `@/*` maps to the repo root.

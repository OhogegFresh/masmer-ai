# Masmer AI - Standalone Setup

This is a fully standalone version of the Masmer AI app, independent of Lovable.  
Stack: React 19 + TanStack Start (SSR) + Supabase + Tailwind CSS v4

---

## Prerequisites

- Node.js 20+ or Bun
- A Supabase project (existing one works fine)

---

## Quick Start

```bash
# 1. Install dependencies
npm install
# or: bun install

# 2. Copy the env file and fill in your Supabase credentials
cp .env.example .env

# 3. Start dev server
npm run dev
# App runs at http://localhost:3000
```

---

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

These come from your Supabase project: Settings → API.

---

## Build & Deploy

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Cloudflare Pages
The `wrangler.jsonc` config is already set up for Cloudflare Workers (SSR).
```bash
npm install -g wrangler
wrangler deploy
```

---

## What Changed From Lovable

The only change made to make this standalone:

1. `vite.config.ts` - replaced `@lovable.dev/vite-tanstack-config` with the standard `@tanstack/react-start/plugin` directly
2. `package.json` - removed `@lovable.dev/vite-tanstack-config` and `@cloudflare/vite-plugin` (cloudflare plugin is bundled in TanStack Start)
3. `src/routes/__root.tsx` - removed Lovable branding from meta tags

All app code, Supabase integrations, and routes are 100% unchanged.

---

## Project Structure

```
src/
├── routes/          # All app pages (TanStack Router file-based routing)
│   ├── index.tsx    # Landing page
│   ├── dashboard.tsx
│   ├── customers.tsx
│   ├── projects.tsx
│   ├── calls.tsx
│   ├── estimate.tsx
│   └── ...
├── components/
│   ├── masmer/      # All Masmer-specific components
│   └── ui/          # shadcn/ui components
├── integrations/
│   └── supabase/    # Supabase client + auth
└── styles.css       # Global styles + design tokens
```

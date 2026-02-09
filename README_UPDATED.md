Codexia

Codexia is a collaborative AI-first code and project workspace built with Next.js. It combines a modern editor/preview experience with realtime project storage (Convex), background processing (Inngest), and user auth (Clerk). The app provides features for projects, files, AI-assisted conversations, import/export integrations, and WebContainer-based previews.

**Key Features**

- **Projects & Files:** create, edit, preview, and manage files in projects.
- **AI Conversations:** background processing of messages using Inngest + agent integrations.
- **Import / Export:** import repos from GitHub and export projects back to GitHub (background jobs).
- **WebContainer Preview:** run lightweight previews of project code in the browser.
- **Auth & Realtime:** authentication with Clerk and realtime data with Convex.
- **Observability:** Sentry configured for client/server error reporting.

**Tech stack**

- **Framework:** Next.js 16 (app router)
- **Database / Realtime:** Convex
- **Background jobs:** Inngest (+ agent-kit)
- **Auth:** Clerk
- **Observability:** Sentry
- **Editor / Preview:** CodeMirror, WebContainer, custom UI components

## Getting started

Prerequisites

- Node.js 18+ (recommended)
- pnpm or npm
- Convex CLI (if running Convex locally)
- Inngest CLI (if running Inngest functions locally)

1. Install dependencies

```bash
npm install
# or
pnpm install
```

2. Environment variables

# Copy this file to `.env` and fill in real values before running the app.

# Public keys (safe to be exposed to the browser) should be prefixed with NEXT_PUBLIC.

# Convex (client) URL

NEXT_PUBLIC_CONVEX_URL=https://your-convex-http-url

# Internal key used by server/background jobs (must be kept secret)

CODEXIA_CONVEX_INTERNAL_KEY=changeme_internal_key

# Firecrawl (optional)

FIRECRAWL_API_KEY=your_firecrawl_api_key

# Convex

CONVEX_DEPLOYMENT=xxxxx

# Clerk (auth) - replace with your Clerk keys

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=sk_xxx
CLERK_JWT_ISSUER_DOMAIN=https://your-issuer-domain
CLERK_SECRET_KEY=sk_live_xxx

# Anthropic API key

ANTHROPIC_API_KEY=sk_xxxx

# Sentry (optional; set to enable error tracking)

SENTRY_AUTH_TOKEN=

# Any other env variables referenced in the code can be added below.

# Search the repo for `process.env.` to discover additional variables.

Refer to the code for additional variables (search for `process.env.`).

3. Run services

- Start the web app:

```bash
npm run dev
```

- Start Convex (local dev):

```bash
npm run convex:dev
```

- Run Inngest functions locally (for background jobs):

```bash
npm run inngest:dev
```

- Convenience: the repository includes a `dev:all` script that runs multiple processes via `mprocs` with dotenv. Use when you have all services configured.

```bash
npm run dev:all
```

## Important project routes & files

- **App entry:** [src/app](src/app)
- **API routes:** [src/app/api](src/app/api)
- **Inngest functions:** [src/inngest](src/inngest)
- **Convex server functions & schema:** [convex](convex)
- **Client Convex helper:** [src/lib/convex-client.ts](src/lib/convex-client.ts)
- **Providers / Auth:** [src/components/providers.tsx](src/components/providers.tsx)

## Development tips

- When importing/exporting with GitHub the app uses background Inngest functions. Make sure `CODEXIA_CONVEX_INTERNAL_KEY` is set for these flows.
- Convex-generated client code lives in `convex/_generated` and is used throughout features.
- Sentry is already configured; set `SENTRY_AUTH_TOKEN` to enable your own project reporting.

## Deploy

This is a standard Next.js app and can be deployed on Vercel or any platform that supports Node.js. Ensure Convex, Inngest, and Clerk configuration are provided in the target environment.

## Contributing

- Open issues and PRs. Keep changes focused and add tests where applicable.

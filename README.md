# Stuckwerkstatt Voitenko – Web App

Marketing website built with [Next.js](https://nextjs.org) (App Router) and TypeScript.

## Tech stack

- **Framework**: Next.js
- **UI**: React
- **State**: Zustand
- **Styling**: Sass
- **SEO**: `next-sitemap` (runs after `yarn build`)

## Prerequisites

- **Node.js**: 20+ recommended
- **Package manager**: Yarn (examples below use Yarn)

## Setup

Install dependencies:

```bash
yarn
```

Run the dev server:

```bash
yarn dev
```

Open `http://localhost:3000`.

## Environment variables

This app reads environment variables via Next.js and `dotenv`. The most relevant variables are:

- **`NEXT_PUBLIC_BACKEND_URL`**: Base URL for the backend API (exposed to the browser)
- **`BASE_URL`**: Public site base URL (used for metadata/OG URLs)
- **`AWS_S3_CONFIG`**: S3 hostname used to allow remote images in `next.config.ts`

Notes:

- **Local development**: set `BASE_URL` to `http://localhost:3000`.
- **Images**: if `AWS_S3_CONFIG` is empty, remote images may be blocked by Next.js image security policy.

## Scripts

```bash
yarn dev    # Start Next.js dev server
yarn build  # Production build (also generates sitemap via postbuild)
yarn start  # Start production server
yarn lint   # ESLint
```

## Project structure (high level)

- **`src/app/`**: Next.js routes (App Router)
- **`src/components/`**: UI components

## Deployment

Deploy as a standard Next.js app (for example on Vercel). Make sure to configure the **environment variables** above in your hosting provider.

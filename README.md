# Swisstek Ceylon — Immersive Redesign Prototype

A custom-coded, 3D-first Next.js prototype built around the idea **Building the Perfect Finish**.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run type-check
npm run build
```

## Deploy to GitHub Pages

Push to `main` in `Ad4mrr/swisstek1`. The workflow in `.github/workflows/deploy-pages.yml` performs a static Next.js export and deploys the `out` directory to GitHub Pages.

The deployed project URL is:

`https://ad4mrr.github.io/swisstek1/`

## Prototype notes

- The signature architectural sequence is built procedurally with React Three Fiber, so no external GLB is required.
- Product, leadership, news, timeline, downloads and directory content is separated from presentation under `src/data`.
- Product pack visuals, dealer records, tiler profiles, service imagery and unverified technical values are clearly marked as prototype placeholders.
- Verified source material was taken from the public Swisstek website in August 2026. Contaminated casino copy and malformed placeholder contact content from the current homepage were intentionally excluded.
- The site includes reduced-motion and WebGL fallback states, semantic HTML content, responsive layouts, per-detail metadata, structured data, sitemap and robots routes.

## Primary routes

- `/`
- `/products` and `/products/[slug]`
- `/solutions`
- `/services`
- `/about`
- `/leadership`
- `/investor-relations`
- `/downloads`
- `/dealer-network`
- `/tilers-club`
- `/news` and `/news/[slug]`
- `/careers`
- `/contact`

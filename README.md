# FutureJobs.ai — Landing Page

Standalone repo for the FutureJobs.ai marketing homepage (`/`), extracted from
`futurejobs-fe`. It contains only the landing page — no app routes, auth, or
dashboard.

## Run

```sh
pnpm install
cp .env.example .env   # adjust if needed
pnpm dev               # http://localhost:5174
pnpm build             # outputs to build/
```

## Environment

| Variable | Purpose |
| --- | --- |
| `VITE_APP_BACKEND_BASE_URL` | API used by the "paste a JD → matching talent" preview |
| `VITE_APP_URL` | Product app the CTAs point to (log in, sign up, privacy, terms). Defaults to `https://futurejobs.ai` |

## Layout

- `src/Home.jsx` — page composition
- `src/marketing/` — sections, mocks, primitives, copy (`content.js`), styles
- `src/lib/` — brand values, API client, small helpers
- `src/components/FaqList.jsx` — FAQ accordion
- `vite-plugins/seoContent.js` — injects title/meta/JSON-LD and a no-JS
  content fallback, and emits `llms.txt`

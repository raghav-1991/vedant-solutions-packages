# NEET UG Counselling Packages — Pricing Page

A React + Vite pricing page for the Basic, Silver and Gold NEET UG counselling
packages. White theme with a `#ff4f00` accent.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).
That's all you need — the page renders from bundled data with no other setup.

## Optional: run the API too

The page can load its data from a small Express API. It's optional: if the API
isn't running, the app falls back to the bundled data automatically.

```bash
# both the web app and the API together
npm run dev:all

# or the API on its own (http://localhost:3001/api/packages)
npm run api
```

Vite proxies `/api` to the API server during development (see `vite.config.js`).

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## The "Choose" buttons

Every "Choose <package>" button currently points to `#` (placeholder).
Set the real link in one place: `CHOOSE_URL` in `src/config.js`.
For a different link per package, add a `url` field to that package in
`src/data/packages.js`.

## Where things live

```
neet-counselling-pricing/
├── api/
│   └── server.js            # Express API: GET /api/packages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Header, PackageCard, FeatureToggle, Accordion, TermsSection
│   ├── pages/
│   │   └── PricingPlans.jsx # the page itself
│   ├── data/
│   │   └── packages.js      # all package + terms content (edit here)
│   ├── services/
│   │   └── packagesApi.js   # fetch from API, fall back to local data
│   ├── styles/
│   │   └── index.css        # theme + all styling (brand color = --brand)
│   ├── utils/
│   │   └── format.js        # ₹ formatting
│   ├── config.js            # CHOOSE_URL, brand color, brand name
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Editing content

All copy, prices and feature lists live in `src/data/packages.js`.
Change the theme color by editing `--brand` in `src/styles/index.css`
(and `BRAND` in `src/config.js` if you reference it in JS).

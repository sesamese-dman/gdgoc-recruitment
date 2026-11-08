# GDGoC UGM Open Recruitment: Frontend Assignment

A responsive recreation of the **About** and **Contact** pages from the GDGoC UGM Figma design, built with React and Tailwind CSS and powered by the provided API.

**Live site:** https://gdgoc-recruitment-lake.vercel.app
**Video presentation:** https://drive.google.com/file/d/1Fwd0RwteacM7bmWKI_RaO-SfybxSlLTW/view?usp=sharing

## Features

- Two pages recreated from Figma: **About** and **Contact**
- Responsive layout, with fluid scaling (`rem` units on a viewport-based root font size)
- Content loaded from the API: navigation links, values, roles, community stats (footer) and inquiry categories
- **Loading** (skeleton), **error** and **empty** states for every API-driven section
- Contact form with controlled inputs, validation and a success state
- Topic cards and the form's category dropdown share one state
- Accessible markup: labelled form fields, `aria-invalid`/`aria-describedby` errors, keyboard-friendly radio cards
- Client-side routing with a SPA rewrite for deployment
- Mobile navigation menu (hamburger) for small screens
- Error boundary around the routes, so a  rendering crash shows a friendly fallback
- State persistence: the contact form draft and selected topic are saved in `localStorage`and cleared when the form is sent

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Lucide React and React Icons (icons)
- ESLint

## API

Base URL: `https://gdgoc-ugm-api.vercel.app/api`

| Endpoint | Used for |
| --- | --- |
| `/navigation` | Navbar and footer links (with a hardcoded fallback) |
| `/values` | "Our values" cards on the About page |
| `/roles` | "Ways to belong" list on the About page |
| `/stats` | Footer handle, tagline and university |
| `/inquiry-categories` | Contact topic cards and form dropdown |

## Project Structure

```
src/
├── components/   Reusable UI and page sections (Navbar, Footer, ValuesSection, ContactForm, ...)
├── hooks/        useFetch (data/loading/error) and useNavigation (nav links)
├── pages/        AboutPage, ContactPage, ComingSoonPage
├── App.jsx       Routes
├── main.jsx      Entry point with BrowserRouter
└── index.css     Tailwind import and design tokens (@theme)
```

## Architecture and Decisions

- **Page sections as components.** Each page is a thin composition of focused section components, so each file does one job.
- **`useFetch` hook.** One custom hook handles fetching, loading and error state, and cancels in-flight requests with `AbortController`. Every API section reuses it.
- **`useLocalStorage` hook.** Same shape as `useState` (`[value, setValue]`), but it reads the saved value on first render and writes it back on every change. It's wrapped in `try/catch`, so the app still works if storage is blocked.
- **State management.** Local React state only (`useState`). The selected inquiry category is lifted into `ContactWorkspace` so the topic cards and the form dropdown stay in sync. No extra library was needed for this scope.
- **Design tokens.** Colors come from the Figma variables and live in the Tailwind `@theme` block, so components use names like `text-brand` and `bg-surface` instead of raw hex values.
- **Runtime colors.** Colors that come from the API (value accent bars) use inline styles, because Tailwind only generates classes it can see at build time.
- **Contact form.** There is no backend, so submitting validates the fields and shows a confirmation without sending data anywhere.

## Getting Started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/sesamese-dman/gdgoc-recruitment.git
cd gdgoc-recruitment
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `index.html` so direct visits and refreshes on routes like `/contact` work with client-side routing.

## Additional Challenges

- **State persistence:** implemented with a custom `useLocalStorage` hook (contact form draft and selected topic).
- **Linting:** ESLint is configured and `npm run lint` passes with no errors.
- Not implemented: TypeScript, and client-side filtering, sorting or pagination. 

## Known Limitations

- The Overview page is a placeholder, since the assignment only asked for two pages.
- The Linkedin and Instagram links in the footer are built from the handle the API returns, so they point to the right accounts only if that handle matches the real profile
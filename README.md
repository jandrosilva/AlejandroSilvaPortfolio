# Alejandro Silva — Portfolio

A single-page software-engineering portfolio. Built from a Claude Design concept.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/index.css`)
- Scroll-driven CSS reveals + lightweight JS for parallax, active-nav, and animated counters — all respecting `prefers-reduced-motion`

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├─ App.tsx                 # composes the page
├─ index.css              # tokens, fonts, keyframes, reveal animations, component classes
├─ data/portfolio.ts      # all editable content (bio, skills, projects, experience, links)
├─ hooks/useScrollEffects.ts
└─ components/            # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer, ...
public/
├─ assets/                # profile photos
└─ Alejandro_Silva_Resume.docx
```

## Editing content

Almost everything you'd want to change — projects, experience, skills, contact links —
lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).

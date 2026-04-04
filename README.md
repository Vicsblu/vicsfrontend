# Victor Oguntoyinbo — Frontend Portfolio

A minimal, premium portfolio site built with **React + Vite + Tailwind CSS**.

## Project Structure

```
victor-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component, dark/light state
    ├── index.css         # Global styles, keyframes, Tailwind directives
    ├── data/
    │   └── index.js      # All constants (projects, skills, certs, etc.)
    ├── hooks/
    │   ├── useTypingEffect.js   # Typewriter animation hook
    │   └── useInView.js         # IntersectionObserver scroll hook
    └── components/
        ├── ui/
        │   ├── FadeIn.jsx       # Scroll-triggered fade-up wrapper
        │   ├── Tag.jsx          # Tech pill badge
        │   └── SectionLabel.jsx # Numbered section header
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── CaseStudies.jsx
        ├── UXSection.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed
4. `vercel.json` handles SPA routing

## Customisation

- **Personal data** — edit `src/data/index.js` to update projects, skills, certs, contact links, etc.
- **Colors** — the gold accent `#d4a853` appears throughout inline styles; search-replace to change the palette.
- **Fonts** — update `body { font-family }` in `index.css` and the `fontFamily: "Georgia, serif"` calls in components.

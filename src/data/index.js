// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Skills", "Projects", "Case Studies", "Contact"];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  Tools: ["Git & GitHub", "VS Code", "Chrome DevTools", "Vercel"],
  Design: ["Photoshop", "CorelDRAW", "Illustrator", "Figma"],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "NovaDash",
    type: "Dashboard UI",
    description:
      "A real-time analytics dashboard with dynamic charts, filterable tables, and a dark/light mode toggle — built for SaaS teams tracking user metrics.",
    problem: "Teams were using spreadsheets to track KPIs. Needed a visual, always-on interface.",
    tech: ["React", "CSS Grid", "Chart.js", "LocalStorage"],
    demo: "https://novadash-lovat.vercel.app",
    github: "https://github.com/Vicsblu/NovaDash",
    color: "#d4a853",
  },
  {
    id: 2,
    title: "Vicsbag Enterprise",
    type: "Landing Page",
    description:
      "A high-converting landing page for a fashion brand that specialises in bag making. Focused on trust signals, conversion-oriented layout, and mobile-first performance.",
    problem: "Their old page had 78% mobile bounce rate. Rebuilt with performance and clarity in mind.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    demo: "https://vicsbags-website.vercel.app",
    github: "https://github.com/Vicsblu/vicsbags-website",
    color: "#6b9fd4",
  },
  {
    id: 3,
    title: "StopShop UI",
    type: "Responsive Web App",
    description:
      "An e-commerce product listing and cart UI with smooth transitions, filter/sort controls, and a persistent cart using localStorage.",
    problem: "Clunky shopping UIs hurt conversions. Built a faster, cleaner, more tactile experience.",
    tech: ["React", "Tailwind CSS", "Context API", "Framer Motion"],
    demo: "https://stopshop-two.vercel.app",
    github: "https://github.com/Vicsblu/stopshop",
    color: "#7ec8a4",
  },
  {
    id: 4,
    title: "Portfolio",
    type: "Portfolio Website",
    description:
      "A portfolio for a developer — minimal, accessible, fast, and deployable to Vercel in under 5 minutes.",
    problem: "Cybersecuirity Analyst needed a polished portfolio but didn't know where to start.",
    tech: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
    demo: "https://victorcyber-nu.vercel.app/",
    github: "https://github.com/Vicsblu/Cyber",
    color: "#c47fcc",
  },
  {
    id: 5,
    title: "TaskFlow",
    type: "Small Web App",
    description:
      "A minimal Kanban-style task manager with drag-and-drop columns, priority labels, and offline persistence.",
    problem: "Needed a lightweight to-do tool that actually respected user time.",
    tech: ["React", "CSS Modules", "DnD Kit", "IndexedDB"],
    demo: "https://taskflow-smoky-alpha.vercel.app",
    github: "https://github.com/Vicsblu/TaskFlow",
    color: "#e87c5b",
  },
  {
    id: 6,
    title: "Nova Dash LogIn Page",
    type: "Authentication App",
    description:
      "A minimal authentication page.",
    problem: "Needed to personalise their web app to restrict everyone from gaining access.",
    tech: ["React", "CSS Modules", "DnD Kit", "IndexedDB"],
    demo: "https://novadash-auth.vercel.app/",
    github: "https://github.com/Vicsblu/novadashAuth",
    color: "#b90e16",
  },
];

export const PROJECT_TYPES = [
  "All",
  "Dashboard UI",
  "Landing Page",
  "Responsive Web App",
  "Portfolio Website",
  "Small Web App",
  "Authentication page"
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: 1,
    title: "Rebuilding a Mobile Experience",
    subtitle: "From 78% Bounce to 40% Conversion",
    problem:
      "A fintech client's landing page had catastrophic mobile UX — tiny tap targets, unreadable text, and a 4.2s load time.",
    approach:
      "Audited with Lighthouse and heatmaps. Rebuilt from mobile-first, cutting all non-essential DOM. Replaced heavy hero video with CSS animation.",
    decisions:
      "Chose system fonts for speed. Used CSS Grid for layout instead of a heavy library. Deferred all non-critical JS.",
    challenges:
      "Stakeholder attachment to the original hero video. Solved by showing side-by-side Lighthouse scores.",
    result:
      "Load time dropped to 1.1s. Bounce rate fell from 78% to 31%. Conversion improved by ~40% in the first month.",
    color: "#d4a853",
  },
  {
    id: 2,
    title: "Designing an Accessible Dashboard",
    subtitle: "Inclusive by Design, Not Afterthought",
    problem:
      "An internal analytics tool was flagged by an audit for WCAG 2.1 failures — poor contrast, missing ARIA labels, keyboard traps.",
    approach:
      "Ran full axe audit. Created a design token system with accessible color pairs. Rewrote all interactive components with full keyboard support.",
    decisions:
      "Every color combination was tested at AA and AAA contrast levels. Focus states were made visually prominent, not hidden.",
    challenges:
      "Maintaining visual appeal while meeting strict contrast requirements. Solved with a refined dark palette that was both accessible and premium.",
    result:
      "Zero critical WCAG violations. Passed internal accessibility review. Became the internal design system baseline.",
    color: "#6b9fd4",
  },
  {
    id: 3,
    title: "Component Architecture for Scale",
    subtitle: "Building a Design System from Scratch",
    problem:
      "A growing product had inconsistent UI — 14 different button styles, 6 modal patterns, zero documentation.",
    approach:
      "Audited all UI patterns, identified 8 core component types, built an atomic design system in React with Tailwind variants.",
    decisions:
      "Chose compound component pattern for flexibility. Used CSS custom properties for theming so components work in both light and dark contexts.",
    challenges:
      "Getting developers to adopt the system. Solved by making it faster to use than to build from scratch — great docs and codesandbox demos.",
    result:
      "UI consistency improved dramatically. New feature development speed increased by ~35% over the following quarter.",
    color: "#7ec8a4",
  },
];

// ─── UX Principles ────────────────────────────────────────────────────────────
export const PRINCIPLES = [
  {
    icon: "◎",
    title: "Simplicity",
    desc: "Every element earns its place. If it doesn't serve the user, it doesn't ship.",
  },
  {
    icon: "◈",
    title: "Accessibility",
    desc: "Great UX is inclusive by design. WCAG compliance is the floor, not the ceiling.",
  },
  {
    icon: "▣",
    title: "Responsiveness",
    desc: "Mobile-first, always. A layout that breaks on any screen is a broken layout.",
  },
  {
    icon: "◆",
    title: "Performance",
    desc: "Speed is a feature. Sub-2s load times are non-negotiable for quality UX.",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTS = [
  { name: "Frontend Developer Certification", issuer: "HNG Internship", year: "2024", color: "#d4a853" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023", color: "#6b9fd4" },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    color: "#7ec8a4",
  },
];

// ─── Hero typing phrases ───────────────────────────────────────────────────────
export const TYPING_PHRASES = [
  "Building Clean Interfaces.",
  "Crafting User Experiences.",
  "Turning Ideas into Products.",
  "Designing with Purpose.",
];

// ─── Contact info ─────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { icon: "✉", label: "Email", value: "oguntoyinbo50@gmail.com", href: "mailto:oguntoyinbo50@gmail.com" },
  { icon: "☎", label: "Phone", value: "+234-8159730671", href: "tel:+2348159730671" },
  { icon: "⌘", label: "LinkedIn", value: "Oguntoyinbo-victor", href: "https://linkedin.com/in/Oguntoyinbo-victor" },
  { icon: "◎", label: "GitHub", value: "github.com/vicsblu", href: "https://github.com/Vicsblu" },
];

// ─── About facts ──────────────────────────────────────────────────────────────
export const ABOUT_FACTS = [
  { label: "Location", value: "Lagos State, Nigeria" },
  { label: "Role", value: "Frontend Developer" },
  { label: "Background", value: "Design + IT Support + Dev" },
  { label: "Email", value: "oguntoyinbo50@gmail.com" },
  { label: "LinkedIn", value: "Oguntoyinbo-victor" },
];

// ─── Hero stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "7+" },
  { label: "Years Learning", value: "4+" },
];

// ─── Footer links ─────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { l: "GitHub", h: "https://github.com/Vicsblu" },
  { l: "LinkedIn", h: "https://linkedin.com/in/Oguntoyinbo-victor" },
  { l: "Email", h: "mailto:oguntoyinbo50@gmail.com" },
];

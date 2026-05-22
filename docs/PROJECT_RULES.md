# VerroAI Website Engineering Standards & Development Rules

---

# 1. PROJECT PURPOSE

The VerroAI website is a production-grade AI-native company website designed to:
- establish startup legitimacy
- support investor credibility
- support Google for Startups eligibility
- showcase VerroAI products
- communicate operational intelligence positioning
- create enterprise trust

The website MUST feel:
- premium
- technically credible
- startup realistic
- visually polished
- production-ready

The website MUST NOT feel:
- like a hackathon prototype
- like a generic AI landing page
- overhyped or fictional
- like a template clone

---

# 2. CORE ENGINEERING PRINCIPLES

All development decisions should prioritize:

1. Maintainability
2. Scalability
3. Simplicity
4. Clarity
5. Reusability
6. Performance
7. Accessibility
8. Consistency
9. Production readiness
10. Startup realism

Avoid:
- overengineering
- unnecessary abstractions
- premature optimization
- dependency bloat
- spaghetti architecture

---

# 3. REQUIRED TECH STACK

Frontend:
- Next.js 15 App Router
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion

Deployment:
- Vercel

Preferred tooling:
- ESLint
- Prettier
- Husky (optional)
- Zod for validation

---

# 4. FOLDER STRUCTURE RULES

Required structure:

/app
/components
/features
/lib
/hooks
/styles
/public
/docs
/types
/constants

Documentation files:

/docs/prd.md
/docs/brand.md
/docs/routes.md
/docs/ui-system.md
/docs/PROJECT_RULES.md

---

# 5. COMPONENT ARCHITECTURE RULES

Components must:
- be modular
- be reusable
- have single responsibility
- remain composable
- support responsiveness
- maintain accessibility

Avoid:
- giant monolithic components
- deeply nested JSX
- duplicated layouts
- duplicated logic
- hardcoded content everywhere

---

# 6. NAMING CONVENTIONS

## Components

Use:
PascalCase

Examples:
- Navbar.tsx
- HeroSection.tsx
- DashboardPreview.tsx

---

## Hooks

Use:
camelCase prefixed with use

Examples:
- useScrollReveal.ts
- useMobileMenu.ts

---

## Utility Functions

Use:
camelCase

Examples:
- formatMetric.ts
- generateGradient.ts

---

## CSS/Tailwind Rules

Avoid:
- random utility clutter
- excessive inline styling
- inconsistent spacing

Prefer:
- reusable utility patterns
- consistent spacing scales
- clean composition

---

# Product Identity Rules

All generated pages and UI systems must reinforce the VerroAI differentiation:

Operational Intelligence for Startups.

Every feature should support:
- operational visibility
- startup execution
- executive awareness
- workflow intelligence
- decision support

# 7. DESIGN SYSTEM RULES

The UI must remain:
- visually consistent
- premium
- minimal
- cinematic
- enterprise-grade

Design inspiration:
- Stripe
- Linear
- Vercel
- OpenAI
- Notion

---

## Color Rules

Use:
- warm yellows
- cream backgrounds
- black typography
- subtle grayscale UI

Avoid:
- neon colors
- random gradients
- excessive glow effects
- cyberpunk styling

---

## Typography Rules

Typography should:
- establish hierarchy
- maximize readability
- remain minimal
- feel premium

Use:
- consistent scale
- responsive typography
- strong spacing rhythm

Avoid:
- oversized paragraphs
- inconsistent headings
- decorative fonts

---

# 8. STATE MANAGEMENT RULES

Prefer:
- local state first
- server components where possible
- minimal client-side complexity

Use:
- useState
- useReducer
- React Context only when justified

Avoid:
- unnecessary global state
- overcomplicated stores
- premature Zustand/Redux usage

---

# 9. API & DATA RULES

All APIs must:
- validate inputs
- handle failures gracefully
- avoid exposing secrets
- return typed responses

Use:
- Zod validation
- typed interfaces
- centralized fetch utilities

Avoid:
- untyped API responses
- inline fetch chaos
- duplicated request logic

---

# 10. ERROR HANDLING RULES

All features must:
- fail gracefully
- preserve UX quality
- avoid breaking layouts

Required:
- loading states
- empty states
- fallback states
- error boundaries where necessary

Avoid:
- blank screens
- uncaught runtime errors
- broken animations after failure

---

# 11. SECURITY RULES

Never:
- expose API keys
- commit secrets
- hardcode credentials
- trust client-side validation alone

Use:
- environment variables
- secure form handling
- validation on all inputs
- sanitized outputs

Environment variables must use:
NEXT_PUBLIC_ only for safe public values.

---

# 12. ACCESSIBILITY RULES

All pages/components must:
- use semantic HTML
- support keyboard navigation
- maintain accessible contrast ratios
- include alt text
- include proper labels

Required:
- aria labels where needed
- accessible buttons
- proper heading hierarchy

Avoid:
- inaccessible hover-only interactions
- low-contrast text
- missing focus states

---

# 13. RESPONSIVE DESIGN RULES

The website must support:
- mobile
- tablet
- desktop
- ultrawide displays

Responsive design should:
- preserve visual hierarchy
- preserve readability
- preserve spacing rhythm

Avoid:
- simple vertical stacking without redesign
- broken mobile layouts
- inconsistent spacing across breakpoints

---

# 14. ANIMATION RULES

Animations should feel:
- smooth
- intentional
- premium
- subtle

Use animations for:
- section reveals
- hover interactions
- navigation transitions
- dashboard movement

Avoid:
- flashy gimmicks
- excessive motion
- distracting effects
- animation overload

Motion should enhance UX, not dominate it.

---

# 15. PERFORMANCE RULES

Target:
- Lighthouse 90+
- optimized bundle size
- fast initial load
- smooth rendering

Optimize:
- lazy loading
- image optimization
- animation performance
- server rendering

Avoid:
- oversized dependencies
- render-blocking assets
- excessive client components

---

# 16. CONTENT RULES

All copy must feel:
- credible
- concise
- technically grounded
- startup realistic

Avoid:
- fake infrastructure terminology
- sci-fi AI language
- exaggerated claims
- meaningless buzzwords

Do NOT use:
- autonomous cognition fabric
- neural execution mesh
- self-healing intelligence systems

Preferred messaging:
- operational intelligence
- workflow automation
- startup analytics
- AI-powered operations

---

# 17. ROUTING RULES

All routes must:
- function correctly
- never use placeholder href="#"
- support active states
- maintain navigation consistency

Required pages:
- /
- /about
- /team
- /platform
- /contact
- /book-demo

Avoid:
- empty pages
- duplicate pages
- broken navigation flows

---

# 18. TESTING REQUIREMENTS

Before deployment verify:
- all routes work
- all buttons function
- mobile responsiveness
- Lighthouse performance
- SEO metadata
- animation smoothness
- accessibility basics
- form validation

Critical flows:
- navigation
- CTA buttons
- contact forms
- mobile menu
- responsive layouts

---

# 19. CODE REVIEW RULES

Before merging/generating code verify:
- naming consistency
- component reuse
- responsive behavior
- accessibility
- no dead code
- no duplicated logic
- no placeholder junk
- no fake data overload

---

# 20. AI GENERATION RULES

When generating code/content:
- prioritize realism
- prioritize maintainability
- prioritize clarity
- prioritize consistency

Never generate:
- fake enterprise systems
- placeholder-heavy sections
- disconnected UI
- unrealistic startup claims

All generated work should:
- support startup legitimacy
- support investor trust
- support Google for Startups eligibility
- feel production-ready

---

# 21. FINAL QUALITY BAR

The final VerroAI website should feel:
- world-class
- investor-ready
- technically credible
- visually premium
- operationally realistic
- startup authentic

The result should resemble:
a real venture-backed AI startup website built by a high-level engineering and design team.

It should NOT resemble:
- a generic AI-generated landing page
- a hackathon prototype
- a template clone
- a fictional AI megacorporation website

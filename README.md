# PKZCorp — Creative Collective Website

A static site for PKZCorp, a creative tech collective showcasing members, projects, and collaborative jams.

## 🏗️ Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation, zero JS by default)
- **Styling:** SCSS with CSS custom properties for design tokens
- **Data:** YAML files in Astro Content Collections with Zod validation
- **Hosting:** GitHub Pages (via GitHub Actions CI/CD)
- **Fonts:** Google Fonts (Inter, IBM Plex Sans, JetBrains Mono)
- **Icons:** [@lucide/astro](https://www.npmjs.com/package/@lucide/astro) (Lucide Astro)

## 🚀 Development

### Prerequisites

- Node.js 22+ (check with `node --version`)
- npm 10+

### Local Setup

```bash
# Install dependencies
npm install

# Start dev server (hot reload at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

### Adding a Member

1. Create a file in `src/content/members/` (e.g., `joão.yaml`)
2. Use the template from `src/content/members/_template.yaml`
3. Fill in your details (avatar, bio, skills, links, productions)
4. Commit and push — site rebuilds automatically

### Adding a Project

1. Create a file in `src/content/projects/` with project details
2. Link members, define category (web, game, music, art, etc.)
3. Submit via pull request

### Creating a Jam

1. Create a file in `src/content/jams/`
2. Define brief, rules, theme, dates, and expected output type

## 🎨 Design System

All design tokens are centralized in `src/styles/_variables.scss`:
- **Colors:** Brand palette + semantic colors (text, surface, borders, etc.)
- **Typography:** Font scales (h1–h3, body, captions)
- **Spacing:** xs, sm, md, lg, xl, 2xl
- **Motion:** Fast/normal/slow transitions + easing functions
- **Breakpoints:** Desktop (1200px), tablet (768px), mobile (480px)

To update colors, spacing, or fonts, modify `_variables.scss` and rebuild.

## 🔗 Routing & Base Paths

The site uses a standard **base path** of `/PKZCorp/` for GitHub Pages routing. All internal links must use the `useBaseUrl()` helper:

```astro
import { useBaseUrl } from '../lib/useBaseUrl';

<a href={useBaseUrl('/membros')}>Members</a>
```

This ensures links work correctly whether developing locally or on GitHub Pages.

## 🚢 Deployment

Deployment happens automatically via GitHub Actions:

- **Trigger:** Every push to `main` branch
- **Build:** Node 22, `npm run build`
- **Deploy:** Artifact uploaded to GitHub Pages
- **Site URL:** https://pkzcorp.github.io/

To enable GitHub Pages:
1. Go to repo Settings → Pages
2. Under "Build and deployment," select **GitHub Actions** as source
3. Next push will trigger the workflow

## 📋 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test locally (`npm run build`)
5. Commit with clear messages
6. Push and open a PR

## 🔄 Phases

- **Phase 1 — Foundation** ✅ Complete (Astro setup, styles, schemas)
- **Phase 2 — Membros & Projetos** (MemberCard, ProjectCard, filtering)
- **Phase 3 — Jams** (Schema, pages, integration)
- **Phase 4 — Polish** (Home complete, mobile responsive, SEO, a11y)
- **Phase 5 — Launch** (Domain, final review, go live)

See [docs/plano-site-coletivo.md](docs/plano-site-coletivo.md) for full project plan.

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Zod Validation](https://zod.dev)

## 📄 License

All rights reserved. © 2026 PKZCorp

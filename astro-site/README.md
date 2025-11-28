# Kenneth Mark Dsouza - Portfolio

A personal portfolio website built with Astro, showcasing design projects and writing with a clean, accessible interface.

## Features

- **Content Collections**: Type-safe project and writing management with Astro
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Accessibility**: WCAG AA compliant colors, screen reader support, keyboard navigation
- **Image Optimization**: Automatic image optimization with Astro's built-in image processing
- **Sticky Breadcrumbs**: Contextual navigation on detail pages
- **External Link Indicators**: Screen reader warnings for links opening in new tabs

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```bash
npm run build
```

This will generate a static site in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
astro-site/
├── src/
│   ├── content/
│   │   ├── projects/          # Project markdown files
│   │   ├── writing/           # Writing markdown files
│   │   └── config.ts          # Content collection schemas
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with footer and modal
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── projects.astro     # Projects listing
│   │   ├── writing.astro      # Writing & talks listing
│   │   ├── projects/[slug].astro  # Dynamic project pages
│   │   └── writing/[slug].astro   # Dynamic writing pages
│   ├── styles/
│   │   └── global.css         # Global styles and design system
│   └── public/                # Static assets
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

## Design System

### Typography

- **Headings**: Hanken Grotesk (Google Fonts)
- **Body**: Liter font
- **Base Font Size**: 20px (desktop), 16px (mobile)
- **Line Height**: 1.6 for optimal readability

### Colors

- **Primary**: `#5B5FED` (purple/blue)
- **Text Primary**: `#1a1a1a`
- **Text Secondary**: `#5B5C7A` (WCAG AA compliant - 4.8:1 contrast)
- **Background**: `#ffffff`
- **Gray Light**: `#d3d3d3`

### Layout

- **Max Width**: 1200px
- **Responsive Breakpoint**: 768px
- **Grid**: 2-column (desktop), 1-column (mobile)

### Components

- **Cards**: Hover effects with underline on title, description fade
- **Images**: 8px border-radius with subtle shadow
- **Breadcrumbs**: Sticky header with blur backdrop
- **Links**: Dashed underline for in-text links, clean for card titles

## Content Management

### Adding Projects

1. Create a new folder in `src/content/projects/`
2. Add an `index.md` file with frontmatter:

```markdown
---
title: "Project Title"
description: "Short description"
year: "2024"
company: "Company Name"
image: "./cover.jpg"
---

Your project content here...
```

### Adding Writing

1. Create a new folder in `src/content/writing/`
2. Add an `index.md` file with frontmatter:

```markdown
---
title: "Article Title"
description: "Short description"
date: 2024-01-01
image: "./cover.jpg"
---

Your article content here...
```

### Image Grids in Markdown

Use custom HTML classes for side-by-side images:

```html
<div class="image-grid-2">
  <figure>
    <img src="/images/screenshot1.jpg" alt="Description" />
    <figcaption>Caption for first image</figcaption>
  </figure>
  <figure>
    <img src="/images/screenshot2.jpg" alt="Description" />
    <figcaption>Caption for second image</figcaption>
  </figure>
</div>
```

Available classes:
- `.image-grid-2` - Two-column grid (stacks on mobile)
- `.image-grid-3` - Three-column grid (stacks on mobile)

## Redundant/Unused CSS Classes

The following CSS classes are defined but may be redundant:

1. **`.container`** - Used in BaseLayout but adds no value since body already has max-width
2. **`.section-header h4`** - Redundant; h4 already styled globally
3. **`.intro-text h1`** - Adds no unique styles; h1 already styled globally
4. **`.post figure.image-figure img`** - Only removes margin; could be simplified

These classes are kept for potential future use or backward compatibility.

## Accessibility Features

- **Color Contrast**: All text meets WCAG AA standards (minimum 4.5:1 ratio)
- **Screen Readers**: `.sr-only` class for visually-hidden content
- **External Links**: Automatic warnings for links opening in new tabs
- **Keyboard Navigation**: Hover states work with keyboard focus
- **Semantic HTML**: Proper heading hierarchy and landmarks

## Deployment

The site is configured for GitHub Pages deployment:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site URL: `https://kenneth.dsouza.im`

To change the site URL, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  base: '/'
});
```

## License

Personal portfolio site © 2024 Kenneth Mark Dsouza

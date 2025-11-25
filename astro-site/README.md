# Kenneth Mark Dsouza - Portfolio

A redesigned personal website built with Astro, featuring a clean, minimal design.

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
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with header and footer
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── projects.astro      # Projects listing
│   │   └── writing.astro       # Writing & talks listing
│   └── styles/
│       └── global.css          # Global styles and design system
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## Design System

The site uses a minimal design system with:

- **Primary Color**: `#5B5FED` (blue/purple)
- **Typography**: System font stack for optimal performance
- **Links**: Dashed underline style
- **Layout**: Max-width of 900px for optimal readability
- **Responsive**: Mobile-first design with breakpoint at 768px

## TODO

- [ ] Replace placeholder profile photo with actual photo
- [ ] Replace placeholder project images with actual images
- [ ] Add actual project detail pages
- [ ] Update Projects page design (waiting for Figma design)
- [ ] Add resume page
- [ ] Migrate old blog posts
- [ ] Add analytics (optional)
- [ ] Configure deployment to GitHub Pages

## Deployment

The site is configured to deploy to GitHub Pages. Update `astro.config.mjs` if you need to change the site URL.

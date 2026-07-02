# Quantari Advisory Partners Website Redesign

Production-ready static website for Quantari Advisory Partners Limited, suitable for GitHub Pages hosting.

## Files

- `index.html` contains semantic page structure, SEO metadata, Open Graph, Twitter Cards and Schema.org Organization data.
- `styles.css` contains the responsive visual system, layout, accessibility states and motion preferences.
- `script.js` contains mobile navigation, Intersection Observer reveal animations, animated counters and contact form validation.
- `assets/` contains favicon, social image, hero visual and service icon assets.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` and `.nojekyll` support GitHub Pages delivery and search crawling.

## GitHub Pages Deployment

Use one of these standard setups:

1. Put these files at the repository root and publish GitHub Pages from the root of the default branch.
2. Put these files inside a `docs/` folder and publish GitHub Pages from `/docs` on the default branch.

For the custom domain `www.quantariadvisorypartners.co.ke`, configure the domain in GitHub Pages settings and keep the DNS records pointed to GitHub Pages. If the repository already has a `CNAME` file, keep it alongside `index.html` with this exact content:

```text
www.quantariadvisorypartners.co.ke
```

## Contact Configuration

The contact form uses a static `mailto:` action addressed to `engage@quantariadvisorypartners.co.ke`. For a hosted form endpoint later, connect the form to the chosen secure form service while preserving the visible fields and validation.

## Brand Asset

The site uses the official company logo at `assets/images/logo.png` in the navigation, footer and organization metadata.

# Betsegaw Degefe — Portfolio

Personal portfolio site, live at https://betsegaw-degefe.github.io.

Built with [Astro](https://astro.build) and Tailwind CSS v4, based on the MIT-licensed
[devportfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald.

## Editing content

All content (about, skills, case studies, experience, education, links) lives in
`src/config.ts`. Case-study pages are generated from `caseStudies` in that file.

The downloadable CV is `public/Betsegaw-Degefe-CV.pdf` — replace that file to update it.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

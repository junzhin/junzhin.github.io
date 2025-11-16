# Junzhi Ning – Research Blog (Static Site)

This repository contains a lightweight, animation-rich personal research blog for Junzhi (Raymond) Ning. It is a pure static site (HTML/CSS/JS) and can be deployed directly with GitHub Pages.

## Structure

- `index.html` – main single-page layout (hero, research, highlights, news, projects, blog preview, affiliations, contact)
- `styles/main.css` – visual design, layout, and animations
- `scripts/main.js` – navigation, smooth scrolling, scroll-triggered reveals, hero parallax
- `assets/img/` – profile and project images copied from the previous Jekyll site

## Local preview

You can open `index.html` directly in a browser, or start a simple HTTP server from the project root, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

1. Create a new GitHub repository (for example `junzhin-homepage3` or use `junzhin.github.io` if you want it as your main site).
2. Add the repository as a remote and push:
   ```bash
   git init
   git add .
   git commit -m "Initial research blog"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the GitHub repository, go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
4. Save. GitHub will build and serve the site at:
   - `https://<your-username>.github.io/<your-repo>/` (or `https://<your-username>.github.io/` if the repo is `<your-username>.github.io`).

No build step is required, as this is a static site.

## Customisation

- Edit text and sections directly in `index.html`.
- Adjust colours, spacing, or animations in `styles/main.css`.
- Extend behaviour (e.g., more interactions or section-specific animations) in `scripts/main.js`.


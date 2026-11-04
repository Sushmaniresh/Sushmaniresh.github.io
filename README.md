# Sushma Niresh — portfolio site

Static HTML/CSS/JS. No build step, no framework, no tracking.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: intro, about, how I work, case studies, industry (NDA), contact |
| `ecg.html` `wake-word.html` `nyc-taxi.html` `emg.html` | Case studies, with code from the repos |
| `404.html` | "Out of distribution" not-found page (GitHub Pages serves it automatically) |
| `site.css` `site.js` | Shared chrome: toasts, NDA modal, copy-email, ESC handling, reduced-motion |
| `favicon.svg` `og.png` | Tab icon and link-preview image (1200×627) |
| `Sushma_Niresh_Resume.pdf` | Linked from the Résumé button |

Fonts load from Google Fonts (Inter Tight, JetBrains Mono). Everything else is inline.

## Put it live on GitHub Pages (5 minutes)

1. Create a repo named `sushmaniresh.github.io` (public).
2. Upload every file in this folder to the repo root (drag-and-drop in the GitHub UI works).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. Visit `https://sushmaniresh.github.io` after a minute.

Custom domain later: add a `CNAME` file containing the domain, point the domain's DNS at GitHub Pages, tick *Enforce HTTPS*.

## Before going live

- [ ] Replace `og.png` URL if using a custom domain (absolute URL is safer for LinkedIn previews): `<meta property="og:image" content="https://yourdomain/og.png">` in each page `<head>`.
- [ ] Update `Sushma_Niresh_Resume.pdf` whenever the résumé changes (same filename, no other edits needed).
- [ ] Email is `sniresh@asu.edu` in `index.html`, `404.html` and `site.js`'s modal — change in those three places if it moves.

## Editing

Each page is self-contained: styles live in a `<style>` block at the top of the file, content below. The 12-column grid is `.g12`; anything with `grid-column: a / b` snaps to it. The black-on-white rule set is deliberate — no colour, no shadows except the hard 12px offset on modals.

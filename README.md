# Losia website

The website of Losia, a skincare routine and product shelf app for Android:
https://kaanbulut22.github.io/losia-site/

Plain HTML, CSS and JavaScript, served by GitHub Pages. No build step, no
trackers; the fonts (Fraunces, Instrument Sans) are self-hosted.

- `index.html` (Turkish), `en/index.html` (English)
- `gizlilik/`, `en/privacy/`: privacy policy, kept in sync with
  `docs/privacy-policy.md` in the app repository
- `assets/`: styles, script, fonts, app screens, share images
- `_tools/og.html`: source of the share images (`assets/og-*.png`), rendered
  at 1200×630 with a headless browser; folders starting with `_` are not
  published by GitHub Pages
- Social media covers and their template moved to the private `losia-sosyal` repo (`sablonlar/kapak.html`)

To preview locally, serve the folder (opening the files directly breaks the
folder links and the fonts):

```
python -m http.server 8765
```

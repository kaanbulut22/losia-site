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
- `_tools/cover.html`: source of the social media covers (X 1500×500,
  Facebook 1640×624; the app repository keeps them in `store/graphics/`).
  `?v=e` is the one in use; render at 2× and scale down for sharp screens

To preview locally, serve the folder (opening the files directly breaks the
folder links and the fonts):

```
python -m http.server 8765
```

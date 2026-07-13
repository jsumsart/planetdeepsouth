# Planet Deep South

Static multi-page website for **Planet Deep South 2026**, a one-day Jackson State University program on **Wednesday, September 30, 2026**.

## Files

- `index.html`: homepage
- `schedule.html`, `john-jennings.html`, `build-your-tiger-world.html`, `about.html`: additional static pages
- `styles.css`: shared multi-page visual system and responsive layout
- `site-data.js`: shared navigation/footer data plus per-page content
- `app.js`: shared header/footer and page rendering logic

## Local preview

Because this is a static site, you can preview it with any simple local server. One option:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This project is designed to work as a GitHub Pages project site:

1. Push the repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set the source to deploy from the main branch root.
4. Wait for the site to publish at `https://<owner>.github.io/<repository-name>/`.

## Updating content

Edit `site-data.js` to replace placeholders such as announced speakers, room locations, submission links, contact email, and program details as they are confirmed.

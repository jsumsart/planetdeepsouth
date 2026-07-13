# Planet Deep South

Static website for **Planet Deep South 2026: Building Tiger Worlds**, a one-day Jackson State University program on **Wednesday, September 30, 2026**.

## Files

- `index.html`: page structure and section anchors
- `styles.css`: afrofuturist visual system and responsive layout
- `site-data.js`: editable structured content for navigation, schedule, John Jennings, exhibition, student participation, about, and event information
- `app.js`: client-side rendering for the one-page program site

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

Edit `site-data.js` to replace placeholders such as announced speakers, room locations, submission links, contact email, and exhibition details as they are confirmed.

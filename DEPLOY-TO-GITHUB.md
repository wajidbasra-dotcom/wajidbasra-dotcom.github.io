# Deploy the redesigned website to GitHub Pages

This project is a static HTML/CSS/JavaScript site. No WordPress, Node.js, build command or package installation is required.

## Recommended one-time deployment with GitHub Desktop

1. Download and extract `wajid-basra-complete-website.zip`.
2. Keep a backup of the current repository before replacing anything. The original website ZIP is also available separately.
3. Install/open GitHub Desktop and clone `wajidbasra-dotcom/wajidbasra-dotcom.github.io` using **File → Clone Repository → URL**.
4. Open the extracted website folder. Copy **all of its contents** (including the hidden `.github` and `.nojekyll` entries) into the cloned repository folder. Do not copy the parent folder itself; `index.html` must sit at the repository root.
5. Allow the file manager to replace matching files. The existing portrait is included in `assets/`.
6. In GitHub Desktop, review the changed files. Commit with the message `Deploy redesigned Wajid Basra portfolio` and click **Push origin**.
7. In GitHub, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions** if it is not already selected. The included workflow deploys the repository root.
8. Open the **Actions** tab and wait for the `Deploy Wajid Basra Website` workflow to complete successfully. Then check `https://wajidbasra-dotcom.github.io/` and the service URLs.

## Main URLs to test after deployment

- `/`
- `/about.html`
- `/services.html`
- `/services/technical-seo.html`
- `/services/local-seo.html`
- `/services/ai-search-optimization.html`
- `/how-search-works.html`
- `/work.html`
- `/insights.html`
- `/contact.html`
- `/sitemap.xml`

Legacy root-level service URLs are retained as redirects to the dedicated `/services/` pages.

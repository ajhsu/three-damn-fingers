# Three Damn Fingers: public site

The official website of Three Damn Fingers, https://threedamnfingers.com/, and its privacy
policy. Cloudflare Pages hosts it.

- `public`: the site. Cloudflare deploys this folder.
  - `index.html`: the one page. It has no scripts. CSS animates its pictures, and stops them
    when Windows asks for less motion.
  - `privacy.html`: the privacy policy. The Microsoft Store listing links to it.
  - `404.html`: the page for a missing address.
  - `style.css`, `icon.svg`, `badge.svg` (the official Microsoft Store badge), and `og.png` (the
    picture for link previews).
  - `_headers`: the security headers. The site loads nothing from other websites.
- `index.html` and `privacy.html` at the top: redirects for the old GitHub Pages addresses,
  https://ajhsu.github.io/three-damn-fingers/. Until the Store listing names the new domain,
  its privacy link goes there.

## Deploy

Wrangler, the Cloudflare command-line tool, uploads the `public` folder to the Pages project
`threedamnfingers`:

```powershell
npx wrangler login
npx wrangler pages deploy public --project-name threedamnfingers --branch main
```

On Windows on ARM64, Wrangler needs the x64 package of workerd to start, even though a deploy
does not run it. Install it with `npm install @cloudflare/workerd-windows-64 --force`, at the
version of the `workerd` package next to it.

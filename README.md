# Three Damn Fingers: public site

The official website of Three Damn Fingers, https://threedamnfingers.com/, and its privacy
policy. Cloudflare hosts it as static files on Workers, the current form of Cloudflare Pages.

- `public`: the site. Cloudflare serves this folder.
  - `index.html`: the one page. It has no scripts. CSS animates its pictures, and stops them
    when Windows asks for less motion.
  - `privacy.html`: the privacy policy, at https://threedamnfingers.com/privacy.
  - `404.html`: the page for a missing address.
  - `style.css`, `icon.svg`, `badge.svg` (the official Microsoft Store badge), and `og.png` (the
    picture for link previews).
  - `_headers`: the security headers. The site loads nothing from other websites.
- `wrangler.jsonc`: the Worker `threedamnfingers`. It serves `public` on threedamnfingers.com,
  with no workers.dev address and no request logs.
- `www`: the Worker `threedamnfingers-www`. It redirects www.threedamnfingers.com to
  threedamnfingers.com, because static files cannot redirect by host name.
- `index.html` and `privacy.html` at the top: redirects for the old GitHub Pages addresses,
  https://ajhsu.github.io/three-damn-fingers/. Until the Store listing names the new domain,
  its privacy link goes there.

## Deploy

Wrangler, the Cloudflare command-line tool, deploys each Worker and connects its domain. Cloudflare
makes the DNS records and the certificates:

```powershell
npx wrangler login
npx wrangler deploy
cd www
npx wrangler deploy
```

On Windows on ARM64, Wrangler needs the x64 package of workerd to start, even though a deploy
does not run it. Install it with `npm install @cloudflare/workerd-windows-64 --force`, at the
version of the `workerd` package next to it.

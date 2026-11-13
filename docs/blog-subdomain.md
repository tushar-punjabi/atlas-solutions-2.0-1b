# Atlas Journal subdomain deployment

Target: https://blog.atlasolutions.cl

This branch adds a standalone static journal landing page at `/journal`, and a Next.js 16 `proxy.ts` that rewrites requests for the blog hostname to that landing page. It also redirects the primary domain's `/blog` index to the subdomain, while leaving existing article routes unchanged.

## Deploy checklist

1. Merge this PR after verifying `pnpm install` and `pnpm build` on the hosting server/CI.
2. Deploy the updated Next.js application.
3. In Cloudflare DNS, add a **proxied** CNAME record named `blog` pointing to `atlasolutions.cl` **if the current primary domain routes to the same web service and its ingress accepts the new hostname**. Otherwise, point it at the deployed application's actual host.
4. If using Cloudflare Tunnel, add a public hostname for `blog.atlasolutions.cl` with the **same HTTP origin service** as the primary website. Ensure the reverse proxy routes that Host header to the Next.js app. Cloudflare DNS alone may not configure tunnel ingress.
5. Confirm the TLS certificate covers `blog.atlasolutions.cl`.
6. Verify `https://blog.atlasolutions.cl/` serves the Journal, `https://atlasolutions.cl/` stays unchanged, and `https://atlasolutions.cl/blog` redirects.
7. Do not remove the old database-backed article routes until content and canonical URLs are migrated. Those routes can still return 500 while the DB is unhealthy.

The Journal is an editorial landing page with three topic placeholders, not a CMS. Publishing and article migration are a separate phase.

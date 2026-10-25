# Relax Studio®

A mobile-first creative studio website built with Next.js App Router, TypeScript, and responsive CSS.

## Local development

Requirements: Node.js 20.9+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

Import `Fahim-hash/relaxstudio` into Vercel and use the default Next.js framework settings. Vercel will build and deploy the app on pushes to `main`.

GitHub Pages is not suitable for this version because it requires a Next.js server route for contact form delivery.

## Environment variables

Set these in Vercel → Project Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL`: the actual production URL (custom domain recommended). Used for canonical metadata and sitemap links.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional email address shown as a clickable `mailto:` link in the global footer.
- `NEXT_PUBLIC_PHONE_NUMBER`: optional phone number shown as a clickable `tel:` link. Use international format, e.g. +880...
- `RESEND_API_KEY`: server-only Resend API key.
- `RESEND_FROM_EMAIL`: sender address on a domain verified with Resend.
- `CONTACT_EMAIL`: inbox that receives contact form enquiries.

The contact form returns a visible success message only after Resend accepts the message. If delivery configuration is missing or the provider rejects the request, visitors see an error message instead. Never add private API keys to variables prefixed with `NEXT_PUBLIC_`.

## Included

- Next.js App Router with page-specific title and description metadata
- Responsive desktop/mobile navigation and a clickable home logo
- Overflow-safe responsive layout and reduced-motion support
- Global footer with automatic copyright year and optional clickable contact links
- Custom 404 page, SVG favicon, Open Graph preview, `robots.txt`, and `sitemap.xml`
- Contact API route with validation, honeypot field, and success/error feedback
- CSS-rendered chrome artwork (no large raster hero image to download)

## Before launch

1. Set the real production URL and contact environment variables.
2. Configure a verified sender address and Resend API key.
3. Run `npm run build` and `npm run lint`.
4. Test the mobile menu, contact form delivery, and the deployed 404 page.

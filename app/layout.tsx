import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Relax Studio® — Creative that moves brands",
    template: "%s | Relax Studio®",
  },
  description:
    "Relax Studio helps ambitious brands grow through graphic design, video editing, motion graphics, brand identity, and thoughtful digital experiences.",
  applicationName: "Relax Studio",
  openGraph: {
    type: "website",
    siteName: "Relax Studio®",
    title: "Relax Studio® — Creative that moves brands",
    description:
      "Creative design, motion, and digital experiences built to move brands forward.",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "Relax Studio — Make your brand move" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relax Studio® — Creative that moves brands",
    description: "Creative design, motion, and digital experiences built to move brands forward.",
    images: ["/opengraph-image.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f4f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

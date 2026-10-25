import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
  if (!configuredUrl) return [];
  const base = configuredUrl.replace(/\/$/, "");
  return [{
    url: base,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}

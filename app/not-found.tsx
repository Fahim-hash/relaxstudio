import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page isn’t here. Return to Relax Studio to explore creative services and start a project.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <span className="not-found-code">ERROR / 404</span>
        <h1>Lost your<br /><span className="shine-word">way?</span></h1>
        <p>The page you’re looking for may have moved or no longer exists. Let’s get you back to something good.</p>
        <div className="not-found-actions">
          <Link href="/">Back to home ↗</Link>
          <Link href="/#services">Explore services</Link>
        </div>
      </div>
    </main>
  );
}

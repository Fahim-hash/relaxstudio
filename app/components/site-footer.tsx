"use client";

import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim();

  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" href="/" aria-label="Relax Studio home">
        <span className="brand-mark">R<span>®</span></span>
        <span className="brand-name">RELAX<br />STUDIO</span>
      </Link>
      <span className="footer-note">CREATIVE WITH INTENTION.</span>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/#services">Services</Link>
        <Link href="/#about">About</Link>
        <Link href="/#process">Process</Link>
        <Link href="/#contact">Contact</Link>
        {email && <a href={`mailto:${email}`}>Email</a>}
        {phone && <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>Call</a>}
      </nav>
      <div className="footer-right">
        <Link href="/#top">BACK TO TOP ↑</Link>
        <span>© {year} RELAX STUDIO</span>
      </div>
    </footer>
  );
}

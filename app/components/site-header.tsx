"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Our approach" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", open);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Relax Studio home" onClick={() => setOpen(false)}>
        <span className="brand-mark">R<span>®</span></span>
        <span className="brand-name">RELAX<br />STUDIO</span>
      </Link>
      <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <Link className="mobile-nav-cta" href="/#contact" onClick={() => setOpen(false)}>Start a project ↗</Link>
      </nav>
      <Link className="header-cta" href="/#contact">Let’s talk <span aria-hidden="true">↗</span></Link>
      <button
        className={`menu-toggle ${open ? "is-active" : ""}`}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      ><span /><span /><span /></button>
    </header>
  );
}

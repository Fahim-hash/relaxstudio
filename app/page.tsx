import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./components/contact-form";
import { ThreeDObject } from "./components/three-d-object";

export const metadata: Metadata = {
  title: "Creative Studio for Design, Motion & Digital",
  description:
    "Build a brand people remember. Relax Studio creates graphic design, video edits, motion graphics, brand identities, and modern websites.",
  alternates: { canonical: "/" },
};

const services = [
  { number: "01", symbol: "Aa", title: "Graphic design", description: "Campaigns, social visuals, and considered creative that earns attention." },
  { number: "02", symbol: "▶", title: "Video editing", description: "Clear storytelling, purposeful pacing, and polished edits that connect." },
  { number: "03", symbol: "↗", title: "Motion graphics", description: "Animated identities and dynamic visuals with their own energy." },
  { number: "04", symbol: "✳", title: "Brand identity", description: "Distinctive visual systems that make your brand feel unmistakably yours." },
  { number: "05", symbol: "⌘", title: "Web experiences", description: "Responsive websites built to look considered and work beautifully." },
];

const steps = [
  { number: "01 / DISCOVER", title: "We listen first.", description: "We learn about your goals, audience, and what success should look like." },
  { number: "02 / CREATE", title: "Make it meaningful.", description: "We shape a clear direction and create work that feels distinctly yours." },
  { number: "03 / DELIVER", title: "Ready for what’s next.", description: "Thoughtful, polished creative made ready to meet the world." },
];

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-meta"><span><i className="status-dot" /> INDEPENDENT CREATIVE STUDIO</span><span>DESIGN · MOTION · DIGITAL</span></div>
        <div className="hero-copy">
          <p className="eyebrow">GOOD IDEAS DESERVE GREAT DESIGN.</p>
          <h1>Make your<br />brand <span className="shine-word">move<span className="period">.</span></span></h1>
          <div className="hero-bottom">
            <p className="hero-description">We turn ambitious ideas into identities, visuals, and digital experiences that help brands stand out and grow.</p>
            <Link className="round-link" href="#services" aria-label="Explore our services">↓</Link>
          </div>
        </div>
        <div className="hero-art">
          <span className="art-label label-top">FORM / 001</span>
          <ThreeDObject />
          <span className="art-label label-bottom">IDEAS IN MOTION — SINCE DAY ONE</span>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 04</span></div>
      </section>

      <div className="ticker" aria-label="Our creative philosophy"><div className="ticker-track"><span>MAKE IT MATTER ✳</span><span>BUILD WITH INTENT ✳</span><span>MAKE IT MATTER ✳</span><span>BUILD WITH INTENT ✳</span></div></div>

      <section className="services section-wrap" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO / 01</p><h2>Creative work.<br /><span className="muted">Real momentum.</span></h2></div><p className="section-intro">From the first sketch to the final frame, we bring strategy and craft together to make your brand impossible to ignore.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.number}>
            <div className="service-top"><span>{service.number}</span><span className="service-icon">{service.symbol}</span></div>
            <h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow" aria-hidden="true">↗</span>
          </article>)}
          <article className="service-card service-card-dark"><div className="service-top"><span>06</span><span className="service-icon">＋</span></div><h3>Your next big idea</h3><p>Have a different project in mind? Tell us what you’re building and let’s explore it together.</p><Link className="text-link" href="#contact">Start a conversation <span>↗</span></Link></article>
        </div>
      </section>

      <section className="manifesto" id="about"><div className="manifesto-inner section-wrap"><p className="eyebrow">A LITTLE ABOUT US / 02</p><h2>Not just making<br />things look good.<br /><span className="outline-text">Making brands</span><br /><span className="shine-word">go further.</span></h2><div className="manifesto-bottom"><span className="manifesto-symbol">R®</span><p>Relax Studio is a creative partner for brands with somewhere to go. We believe good design should do more than decorate — it should communicate clearly, build trust, and move people to act.</p></div></div></section>

      <section className="approach section-wrap" id="process"><div className="section-heading"><div><p className="eyebrow">HOW WE WORK / 03</p><h2>Small details.<br /><span className="muted">Big picture.</span></h2></div><p className="section-intro">Thoughtful collaboration, clear communication, and a little obsession with getting the details right.</p></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span className="step-num">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-orb" aria-hidden="true" /><div className="contact-content section-wrap"><p className="eyebrow">HAVE A GOOD ONE IN MIND? / 04</p><h2>Let’s make<br /><span className="shine-word">something matter.</span></h2><div className="contact-bottom"><div><p>Tell us what you’re building.</p><p>Share a few details and we’ll get back to you.</p></div><Link className="contact-button contact-jump" href="#contact-form">Start a conversation <span>↗</span></Link></div><div id="contact-form" className="contact-form-wrap"><ContactForm /></div></div></section>
    </main>
  );
}

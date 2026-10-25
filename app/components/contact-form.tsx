"use client";

import { FormEvent, useState } from "react";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We couldn’t send your message. Please try again.");
      form.reset();
      setStatus({ kind: "success", message: "Thanks for reaching out. Your message has been sent, and we’ll be in touch soon." });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <label>What can we help with?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Graphic design</option>
          <option>Video editing</option>
          <option>Motion graphics</option>
          <option>Brand identity</option>
          <option>Website design and development</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Tell us about your project<textarea name="message" rows={4} required minLength={10} maxLength={5000} /></label>
      <div className="form-trap" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-submit-row">
        <button className="contact-button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send your message"} <span aria-hidden="true">↗</span></button>
        <span className="form-privacy">Your details are only used to respond to your enquiry.</span>
      </div>
      {status && <p className={`form-status ${status.kind}`} role={status.kind === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p>}
    </form>
  );
}

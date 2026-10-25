import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please check your form details and try again." }, { status: 400 });
  }

  // Quiet honeypot: reject automated submissions without revealing the check.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const service = clean(body.service);
  const message = clean(body.message);

  if (name.length < 1 || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name (up to 100 characters)." }, { status: 400 });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (service.length < 1 || service.length > 120) {
    return NextResponse.json({ error: "Please choose a service so we know how to help." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please tell us a little more about your project (10–5,000 characters)." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form is not configured. Set RESEND_API_KEY, CONTACT_EMAIL, and RESEND_FROM_EMAIL.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `New Relax Studio enquiry — ${service}`,
      text: [
        "New project enquiry from the Relax Studio website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    }),
    cache: "no-store",
  }).catch((error: unknown) => {
    console.error("Contact email request failed:", error);
    return null;
  });

  if (!emailResponse || !emailResponse.ok) {
    const details = emailResponse ? await emailResponse.text().catch(() => "") : "";
    console.error("Resend rejected contact enquiry:", emailResponse?.status, details.slice(0, 500));
    return NextResponse.json(
      { error: "We couldn’t send your message just now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

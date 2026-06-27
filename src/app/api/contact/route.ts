import { NextResponse } from "next/server";

// Contact submission shape for Libmarc Projects.
// Required: name (>= 2 chars), a phone OR an email, message (>= 10 chars).
// Optional: service, siteAddress, preferredDate.
type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  siteAddress?: string;
  preferredDate?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }

  const phone = (payload.phone ?? "").trim();
  const email = (payload.email ?? "").trim();

  if (!phone && !email) {
    return "Please provide either a phone number or an email so we can reply.";
  }

  if (email && !EMAIL_RE.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!payload.message || payload.message.trim().length < 10) {
    return "Please include a message of at least 10 characters.";
  }

  return null;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 400 }
    );
  }

  // Generate a stable Libmarc reference id for the enquiry.
  const id = `LMP-${Date.now().toString(36).toUpperCase()}${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  // Log the submission so it is visible in the dev server / server logs.
  console.log("[contact] New Libmarc enquiry", {
    id,
    name: body.name,
    phone: body.phone ?? null,
    email: body.email ?? null,
    service: body.service ?? null,
    siteAddress: body.siteAddress ?? null,
    preferredDate: body.preferredDate ?? null,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: true,
      id,
      message:
        "Thanks for reaching out — the Libmarc Projects team will reply within one business day.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    success: true,
    endpoint: "/api/contact",
    method: "POST",
    required: ["name (>=2 chars)", "phone OR email", "message (>=10 chars)"],
    optional: ["service", "siteAddress", "preferredDate"],
    company: "Libmarc Projects",
  });
}

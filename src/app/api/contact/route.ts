import { NextResponse } from "next/server";

// Contact submission shape. Only name, email, and message are required;
// the remaining fields are optional but useful for routing the inquiry.
type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.trim().length < 2) {
    return "Please enter your full name.";
  }
  if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
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

  // Generate a stable reference id for the inquiry.
  const id = `INQ-${Date.now().toString(36).toUpperCase()}`;

  // Log the submission so it is visible in the dev server / server logs.
  console.log("[contact] New submission", {
    id,
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    projectType: body.projectType ?? null,
    budget: body.budget ?? null,
    timeline: body.timeline ?? null,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: true,
      id,
      message:
        "Thanks for reaching out — a pre-construction lead will respond within one business day.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    success: true,
    endpoint: "/api/contact",
    method: "POST",
    required: ["name", "email", "message"],
  });
}

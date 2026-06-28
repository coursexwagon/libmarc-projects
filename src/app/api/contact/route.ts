import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, siteAddress, preferredDate, message } =
      body;

    // Basic validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }
    if (!phone?.trim() && !email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Phone or email is required.",
        },
        { status: 400 }
      );
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be at least 10 characters.",
        },
        { status: 400 }
      );
    }

    // Generate a reference ID
    const id = `LIB-${Date.now().toString(36).toUpperCase()}`;

    // Log the submission (in production you'd send email/save to DB)
    console.log("=== NEW QUOTE REQUEST ===");
    console.log(`Reference: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Service: ${service}`);
    console.log(`Site Address: ${siteAddress}`);
    console.log(`Preferred Date: ${preferredDate}`);
    console.log(`Message: ${message}`);
    console.log("========================");

    return NextResponse.json({
      success: true,
      id,
      message: "Quote request received.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

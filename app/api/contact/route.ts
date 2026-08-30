import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_RECEIVER = "koustavsinghcollege@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set; cannot send contact form email")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact Form <onboarding@resend.dev>",
      to: CONTACT_RECEIVER,
      replyTo: email,
      subject: `New message from ${name} (portfolio contact form)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("Resend error sending contact form email:", error)
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Phone, Mail, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"

const contactInfo = [
  { icon: Phone, label: "Phone", value: DATA.contact.tel, href: `tel:${DATA.contact.tel.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/koustavx08", href: DATA.contact.social.LinkedIn.url },
  { icon: Github, label: "GitHub", value: "github.com/koustavx08", href: DATA.contact.social.GitHub.url },
]

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const validateField = (field: keyof typeof formData, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        break
      case "email":
        if (!value.trim()) return "Email is required"
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email"
        break
      case "message":
        if (!value.trim()) return "Message is required"
        if (value.trim().length < 10) return "Message must be at least 10 characters"
        break
    }
    return undefined
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    setSubmitError(null)
  }

  const handleBlur = (field: keyof typeof formData) => {
    const error = validateField(field, formData[field])
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    }

    setErrors(newErrors)

    if (newErrors.name) {
      nameRef.current?.focus()
      return
    }
    if (newErrors.email) {
      emailRef.current?.focus()
      return
    }
    if (newErrors.message) {
      messageRef.current?.focus()
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        const data = await response.json()
        setSubmitError(data?.error || "Failed to send message. Please try again.")
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeader label="Contact" title="Get In Touch" subtitle="Let's build something together" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <item.icon className="size-4" aria-hidden />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center py-8 text-center" role="status" aria-live="polite">
              <CheckCircle className="mb-4 size-12 text-green-500" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
              <p className="mt-1 text-sm text-muted-foreground">Thanks — I&apos;ll reply within 48 hours.</p>
              <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${errors.name ? "border-destructive" : "border-input"}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${errors.email ? "border-destructive" : "border-input"}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full resize-none rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${errors.message ? "border-destructive" : "border-input"}`}
                  placeholder="Your message…"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">
                  {submitError}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Or email me at{" "}
                <a href={`mailto:${DATA.contact.email}`} className="text-primary hover:underline">
                  {DATA.contact.email}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { NeoButton } from "./neo-button"
import { Phone, Mail, Linkedin, Github, Globe, Send, CheckCircle, Loader2 } from "lucide-react"

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91-7980072154", href: "tel:+917980072154" },
  {
    icon: Mail,
    label: "Email",
    value: "koustavsinghcollege@gmail.com",
    href: "mailto:koustavsinghcollege@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/koustavx08",
    href: "https://linkedin.com/in/koustavx08",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/koustavx08",
    href: "https://github.com/koustavx08",
  },
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
    // Clear error when user starts typing
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

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((error) => error)) {
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
    <section id="contact" className="py-24 px-4 bg-background/80">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <SectionHeader title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-center mt-10">
          {/* Contact Info */}
          <div className="space-y-6 w-full max-w-md">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-background transition-colors">
                    <item.icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <NeoCard className="p-8 w-full max-w-md mx-auto shadow-neo-lg">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" aria-hidden />
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks — I'll reply within 48 hours.</p>
                <NeoButton variant="secondary" className="mt-6" onClick={() => setIsSubmitted(false)}>
                  Send another message
                </NeoButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-card shadow-neo-inset text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all ${errors.name ? "ring-2 ring-destructive" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-card shadow-neo-inset text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all ${errors.email ? "ring-2 ring-destructive" : ""}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-card shadow-neo-inset text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all resize-none ${errors.message ? "ring-2 ring-destructive" : ""}`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-destructive" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm" role="alert">
                    {submitError}
                  </div>
                )}

                <NeoButton type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </NeoButton>

                <p className="text-sm text-muted-foreground text-center">
                  Or email me at{" "}
                  <a href="mailto:koustavsinghcollege@gmail.com" className="text-accent-blue hover:underline">
                    koustavsinghcollege@gmail.com
                  </a>
                </p>
              </form>
            )}
          </NeoCard>
        </div>
      </div>
    </section>
  )
}

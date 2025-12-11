"use client"


import { ArrowDown, Download, Mail } from "lucide-react"
import { GlowingOrb } from "./glowing-orb"
import { NeoButton } from "./neo-button"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Ripple Background Effect for Hero Only */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundRippleEffect rows={30} cols={50} cellSize={56} />
      </div>
      {/* Other Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <GlowingOrb className="absolute top-20 right-10 w-72 h-72 opacity-30" />
        <GlowingOrb className="absolute bottom-20 left-10 w-96 h-96 opacity-20" delay={2} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-card shadow-neo-soft p-1">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-card-elevated shadow-neo-lg p-1">
                <div className="w-full h-full rounded-full bg-linear-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile-pixelated.png"
                    alt="Koustav Singh profile"
                    className="w-full h-full object-cover rounded-full" style={{ imageRendering: 'pixelated' }}
                    onError={e => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }}
                  />
                  <span className="text-4xl font-bold text-accent-blue absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>KS</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background shadow-neo-sm" />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Koustav Singh</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-blue mb-6">
          Full-Stack MERN & Web3 Developer
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-pretty leading-relaxed">
          Building scalable, user-centric web & AI products that actually ship.
        </p>

        {/* Meta Line */}
        <p className="text-sm text-muted-foreground/70 mb-10">
          Based in Kolkata, India · Open to Full-Stack & Software Engineering roles
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <NeoButton onClick={scrollToProjects} variant="primary" size="lg" className="w-56 justify-center">
            <span className="flex items-center gap-2 w-full justify-center">
              See my work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" aria-hidden />
            </span>
          </NeoButton>

          <NeoButton asChild variant="secondary" size="lg" className="w-56 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full justify-center"
              aria-label="Download CV as PDF"
            >
              <Download className="w-5 h-5 text-accent-blue" aria-hidden />
              <span className="font-semibold text-base text-foreground">Download CV</span>
            </a>
          </NeoButton>

          <NeoButton onClick={scrollToContact} variant="secondary" size="lg" className="w-56 justify-center">
            <span className="flex items-center gap-2 w-full justify-center">
              <Mail className="w-5 h-5" aria-hidden />
              Book a chat
            </span>
          </NeoButton>
        </div>
      </div>

      {/* Cool Scroll Indicator - centered and lower in hero */}
      <div className="pointer-events-none absolute left-1/2 z-40 flex flex-col items-center" style={{ bottom: 'clamp(32px, 8vw, 64px)', transform: 'translateX(-50%)' }}>
        <div className="relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-blue/60 to-accent-cyan/60 blur-sm opacity-60 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-8 h-14 rounded-full border-2 border-accent-blue/40 bg-background/80 flex items-start justify-center p-2 shadow-neo-blue-lg relative animate-bounce">
            <div className="w-1.5 h-4 rounded-full bg-accent-blue animate-pulse mt-1" />
          </div>
        </div>
        <span className="mt-2 text-xs text-accent-blue/80 font-semibold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Scroll Down
        </span>
      </div>
    </section>
  )
}

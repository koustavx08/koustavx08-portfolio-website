"use client"

import { ArrowDown, Download, Linkedin } from "lucide-react"
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
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundRippleEffect rows={30} cols={50} cellSize={56} />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <GlowingOrb className="absolute top-20 right-10 w-72 h-72 opacity-30" />
        <GlowingOrb className="absolute bottom-20 left-10 w-96 h-96 opacity-20" delay={2} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Koustav Singh</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-blue mb-6 text-balance">
          Full-Stack, Systems & Web3 Engineer building production-ready products
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto text-pretty leading-relaxed">
          I design and ship scalable web systems across MERN, AI, and blockchain—combining product speed with strong engineering fundamentals.
        </p>

        <p className="text-sm text-muted-foreground/80 mb-10">
          Built for 500+ active users · Startup execution + developer ecosystem leadership
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <NeoButton onClick={scrollToProjects} variant="primary" size="lg" className="w-56 justify-center">
            <span className="flex items-center gap-2 w-full justify-center">
              See selected work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" aria-hidden />
            </span>
          </NeoButton>

          <NeoButton asChild variant="secondary" size="lg" className="w-56 justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center" aria-label="Download CV as PDF">
              <Download className="w-5 h-5 text-accent-blue" aria-hidden />
              <span className="font-semibold text-base text-foreground">Download CV</span>
            </a>
          </NeoButton>

          <NeoButton onClick={scrollToContact} variant="secondary" size="lg" className="w-56 justify-center">
            Book a conversation
          </NeoButton>

          <NeoButton asChild variant="ghost" size="lg" className="w-56 justify-center">
            <a href="https://linkedin.com/in/koustavx08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
              <Linkedin className="w-5 h-5" aria-hidden />
              LinkedIn
            </a>
          </NeoButton>
        </div>
      </div>
    </section>
  )
}

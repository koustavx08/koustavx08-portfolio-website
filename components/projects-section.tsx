"use client"

import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { NeoButton } from "./neo-button"
import { ExternalLink, Github } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const projects = [
  {
    title: "AI Nutrition Tracker",
    tagline: "AI-powered calorie detection PWA",
    techStack: ["Next.js 14", "TypeScript", "Groq API", "PWA"],
    highlights: [
      "Image-based calorie detection using AI",
      "Voice assistant for hands-free tracking",
      "Comprehensive macro dashboard",
      "Dark/light mode with installable PWA",
    ],
    metrics: "1K+ active users",
    live: "https://nutrition-tracker.vercel.app",
    github: "https://github.com/koustavx08/nutrition-tracker",
  },
  {
    title: "Web3 Booking Platform",
    tagline: "Decentralized booking dApp with smart contracts",
    techStack: ["Solidity", "Web3.js", "React", "Supabase"],
    highlights: [
      "On-chain payments with escrow system",
      "Smart contract-based booking management",
      "IPFS integration for decentralized storage",
      "MetaMask wallet integration",
    ],
    metrics: "Blockchain-powered",
    live: "https://web3-booking.vercel.app",
    github: "https://github.com/koustavx08/web3-booking",
  },
  {
    title: "Event Management Platform",
    tagline: "Real-time event tracking and management",
    techStack: ["MERN", "Socket.io", "Clerk", "Firebase"],
    highlights: [
      "Real-time attendance tracking via Socket.io",
      "QR code-based check-in system",
      "Admin analytics dashboard",
      "Handles 500+ concurrent users",
    ],
    metrics: "500+ concurrent users",
    live: "https://event-platform.vercel.app",
    github: "https://github.com/koustavx08/event-platform",
  },
  {
    title: "AI Content Platform",
    tagline: "Multi-model AI content generation",
    techStack: ["Next.js", "OpenAI", "Gemini API", "Redis"],
    highlights: [
      "OpenAI & Gemini API integration",
      "Token optimization and caching",
      "Automated content workflows",
      "Serves 2K+ daily requests",
    ],
    metrics: "2K+ daily requests",
    live: "https://ai-content.vercel.app",
    github: "https://github.com/koustavx08/ai-content",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Projects" subtitle="Some things I've built" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <BackgroundGradient key={index} className="rounded-2xl h-full" containerClassName="rounded-2xl h-full">
              <NeoCard hover glowOnHover className="p-6 group h-full bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{project.tagline}</p>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-blue/10 text-accent-blue font-medium">
                    {project.metrics}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto">
                  <NeoButton asChild variant="primary" size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      Live
                    </a>
                  </NeoButton>
                  <NeoButton asChild variant="secondary" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" aria-hidden />
                      Explore repo
                    </a>
                  </NeoButton>
                </div>
              </NeoCard>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  )
}

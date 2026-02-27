"use client"

import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { NeoButton } from "./neo-button"
import { ExternalLink, Github } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const projects = [
  {
    title: "Veritas Protocol",
    tagline: "Web3 protocol for verifiable records, transparent state transitions, and audit-friendly product flows.",
    techStack: ["TypeScript", "Next.js", "Solidity", "IPFS"],
    highlights: [
      "Designed contract + app flow with clear data provenance",
      "Implemented decentralized storage patterns for critical artifacts",
      "Focused on production-grade UX for non-crypto-native users",
    ],
    live: "https://github.com/koustavx08?tab=repositories",
    github: "https://github.com/koustavx08?tab=repositories",
  },
  {
    title: "EmBed",
    tagline: "AI product focused on embedding-driven retrieval and practical developer-facing workflows.",
    techStack: ["React", "Node.js", "Vector Workflows", "API Integrations"],
    highlights: [
      "Built backend-first pipeline for retrieval and response orchestration",
      "Delivered frontend flows optimized for iteration and clarity",
      "Structured for scale-ready deployment patterns",
    ],
    live: "https://github.com/koustavx08?tab=repositories",
    github: "https://github.com/koustavx08?tab=repositories",
  },
  {
    title: "Event Platform",
    tagline: "Scalable MERN platform with real-time coordination and operational dashboards.",
    techStack: ["MERN", "Socket.IO", "Role-based Access", "Analytics"],
    highlights: [
      "Supports high-activity student and community events",
      "Real-time status updates for participants and organizers",
      "Operational views for better decision-making during live execution",
    ],
    live: "https://event-organizer-koustavx08.vercel.app/",
    github: "https://github.com/koustavx08/event-organizer",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Selected Projects" subtitle="AI, Web3, and scalable backend-focused builds" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <BackgroundGradient key={index} className="rounded-2xl h-full" containerClassName="rounded-2xl h-full">
              <NeoCard hover glowOnHover className="p-6 group h-full bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto">
                  <NeoButton asChild variant="primary" size="sm" className="min-w-[100px] justify-center">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      <span className="font-semibold text-sm">Live</span>
                    </a>
                  </NeoButton>
                  <NeoButton asChild variant="secondary" size="sm" className="min-w-[100px] justify-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                      <Github className="w-4 h-4" aria-hidden />
                      <span className="font-semibold text-sm">GitHub</span>
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

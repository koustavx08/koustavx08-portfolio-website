"use client"

import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { NeoButton } from "./neo-button"
import { ExternalLink, Github } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const projects = [
  {
    title: "synthamint-platform",
    tagline: "AI-powered NFT minting platform transforming creative ideas into unique digital assets",
    techStack: ["TypeScript", "Next.js", "IPFS", "Solidity"],
    highlights: [
      "AI-assisted metadata & media generation for NFTs",
      "Minting pipeline with decentralized storage (IPFS)",
      "Admin tooling for collection management and royalties",
    ],
    metrics: "Public · TypeScript",
    live: "https://synthamint-platform.vercel.app/",
    github: "https://github.com/koustavx08/synthamint-platform",
  },
  {
    title: "atscribe",
    tagline: "Production-ready MERN app for creating ATS-optimized resumes using AI",
    techStack: ["TypeScript", "React", "Node.js", "MongoDB"],
    highlights: [
      "End-to-end resume generation with AI prompts and templates",
      "ATS-friendly formatting and export to PDF",
      "Conversational editing and versioned resume drafts",
    ],
    metrics: "Public · TypeScript",
    live: "https://atscribe.vercel.app/",
    github: "https://github.com/koustavx08/atscribe",
  },
  {
    title: "calorie-detector-app",
    tagline: "AI-powered nutrition tracker with real-time analysis and voice assistant",
    techStack: ["TypeScript", "Next.js", "Groq API", "PWA"],
    highlights: [
      "Image-based calorie detection using AI vision APIs",
      "Voice assistant for hands-free tracking",
      "Macro dashboard and offline-capable PWA",
    ],
    metrics: "Public · TypeScript",
    live: "https://calorie-detector-app-koustavx08.vercel.app/",
    github: "https://github.com/koustavx08/calorie-detector-app",
  },
  {
    title: "chat-app",
    tagline: "Full-stack chat & messaging application using Socket.IO and MongoDB",
    techStack: ["TypeScript", "React", "Node.js", "Socket.IO"],
    highlights: [
      "Real-time messaging with rooms and typing indicators",
      "Persistent message storage with MongoDB",
      "User presence, read receipts, and media support",
    ],
    metrics: "Public · TypeScript",
    live: "https://chat-app-x08.vercel.app/",
    github: "https://github.com/koustavx08/chat-app",
  },
  {
    title: "event-organizer",
    tagline: "Full-featured event management platform built with Next.js and MongoDB",
    techStack: ["TypeScript", "Next.js", "MongoDB", "Clerk"],
    highlights: [
      "Real-time attendance tracking and QR check-in",
      "Admin analytics dashboard and role-based access",
      "Designed for large events (500+ concurrent users)",
    ],
    metrics: "Public · TypeScript",
    live: "https://event-organizer-koustavx08.vercel.app/",
    github: "https://github.com/koustavx08/event-organizer",
  },
  {
    title: "web3-todo-dapp",
    tagline: "Decentralized task management with NFT rewards and streak tracking",
    techStack: ["TypeScript", "React", "Solidity", "Avalanche (Fuji)"],
    highlights: [
      "On-chain rewards via NFT minting for task completion",
      "Task delegation and persistent streak tracking",
      "Frontend integration with wallet providers and testnet deployment",
    ],
    metrics: "Public · TypeScript",
    live: "https://web3-todo-dapp-alpha.vercel.app/",
    github: "https://github.com/koustavx08/web3-todo-dapp",
  },
]

function slugToTitle(slug: string) {
  // handle common separators and camelCase
  const spaced = slug
    // replace separators with space
    .replace(/[-_]/g, " ")
    // insert spaces before capital letters in camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2")
  return spaced
    .split(" ")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w)) // keep small words as-is or capitalized
    .join(" ")
}

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
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors whitespace-nowrap">
                        {slugToTitle(project.title)}
                      </h3>
                      <span
                        className="px-3 py-1 text-xs rounded-full bg-linear-to-r from-accent-blue/20 to-accent-cyan/20 text-accent-blue font-semibold shadow-neo-sm border border-accent-blue/20 whitespace-nowrap"
                        aria-label={project.metrics}
                      >
                        {project.metrics}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.tagline}</p>
                  </div>
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
                  <NeoButton asChild variant="primary" size="sm" className="min-w-[100px] justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full justify-center"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      <span className="font-semibold text-sm">Live</span>
                    </a>
                  </NeoButton>
                  <NeoButton asChild variant="secondary" size="sm" className="min-w-[100px] justify-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full justify-center"
                      aria-label={`Explore ${project.title} repo on GitHub`}
                    >
                      <Github className="w-4 h-4" aria-hidden />
                      <span className="font-semibold text-sm">Explore repo</span>
                    </a>
                  </NeoButton>
                </div>
              </NeoCard>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <NeoButton asChild variant="primary" size="lg" className="px-6 py-3 font-bold text-lg shadow-neo-lg animate-pulse">
          <a
            href="https://github.com/koustavx08?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See more projects on GitHub"
            className="flex items-center gap-3"
          >
            <Github className="w-5 h-5" aria-hidden />
            More Projects are live at GitHub — do checkout!
          </a>
        </NeoButton>
      </div>
    </section>
  )
}

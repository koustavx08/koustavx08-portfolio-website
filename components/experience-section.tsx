"use client"

import { Timeline } from "@/components/ui/timeline"
import { NeoCard } from "./neo-card"
import { MapPin, Calendar } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const timelineData = [
  {
    title: "2024 - Present",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl">
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Web Developer</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">Samarth TMSL</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Kolkata, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Nov 2024 - Present
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
              Engineered full-stack student platforms using the MERN stack, serving 500+ active users
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
              Developed secure authentication using Clerk and Firebase, achieving 99.9% uptime
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
              Built admin dashboards with analytics, reducing manual operational workload by 60%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
              Optimized performance and accessibility (WCAG 2.1 AA), increasing user adoption by 40%
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-6">
        {/* Modelsuite.ai */}
        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Full Stack Developer</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">Modelsuite.ai</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Rüsselsheim, Germany (Remote)
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Jun 2025 – Oct 2025
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Built AI-driven SaaS features using React, Node.js, and MongoDB, reducing delivery time by 20%
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Architected and optimized RESTful APIs and microservices, improving responsiveness by 15%
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Implemented scalable database schemas supporting 10,000+ concurrent users
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Collaborated in Agile sprints with cross-functional teams, shipping production features weekly
              </li>
            </ul>
          </NeoCard>
        </BackgroundGradient>

        {/* AI Wallah */}
        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Generative AI Developer Intern</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">AI Wallah</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Kolkata, India
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Jun 2025 – Jul 2025
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Designed and fine-tuned LLM models for domain-specific tasks, improving accuracy by 25%
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Integrated AI workflows using Groq API and OpenAI, processing 10K+ automated requests/day
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Developed proof-of-concept AI prototypes adopted in 3 production applications
              </li>
            </ul>
          </NeoCard>
        </BackgroundGradient>

        {/* SaaSForge */}
        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Backend Developer Intern</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">SaaSForge</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Delhi, India
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Feb 2025 – Mar 2025
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Designed RESTful APIs serving 50K+ daily requests with 99.5% service uptime
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Optimized PostgreSQL queries and indexing, reducing query execution time by 40%
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                Implemented Redis-based caching, decreasing API response latency by 30%
              </li>
            </ul>
          </NeoCard>
        </BackgroundGradient>
      </div>
    ),
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
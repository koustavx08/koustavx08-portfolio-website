"use client"

import { Timeline } from "@/components/ui/timeline"
import { NeoCard } from "./neo-card"
import { MapPin, Calendar } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const timelineData = [
  {
    title: "2025 - Present",
    content: (
      <div className="space-y-6">
        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl">
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Web Developer</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">Samarth TMSL</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Kolkata, India</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Nov 2024 – Present</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Built and operated MERN applications used by 500+ students and contributors.</li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Implemented real-time product features and operational dashboards for event workflows.</li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Owned full delivery lifecycle from architecture to deployment and iteration.</li>
            </ul>
          </NeoCard>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Full Stack Developer</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">Modelsuite.ai</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2025</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Delivered AI SaaS product modules across React and Node.js services.</li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Improved frontend responsiveness and backend API throughput through focused refactors.</li>
            </ul>
          </NeoCard>
        </BackgroundGradient>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-6">
        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Generative AI Developer Intern</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">AI Wallah</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Kolkata, India</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2025</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Built and integrated generative AI features for domain-specific workflows.</li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Prototyped production-facing AI use cases with rapid iteration loops.</li>
            </ul>
          </NeoCard>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
          <NeoCard className="p-6 bg-card" hover>
            <h3 className="text-xl font-bold text-foreground mb-1">Backend Developer Intern</h3>
            <h4 className="text-lg font-semibold text-accent-blue mb-3">SaaSForge</h4>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2025</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Developed backend APIs and data models for SaaS workflows.</li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />Improved query and caching strategy to support stable production performance.</li>
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

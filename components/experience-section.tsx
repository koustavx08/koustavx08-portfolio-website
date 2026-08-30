"use client"

import { Timeline } from "@/components/ui/timeline"
import { NeoCard } from "./neo-card"
import { MapPin, Calendar } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

type ExperienceEntry = {
  title: string
  subtitle: string
  date: string
  location: string
  content: React.ReactNode
  startDate: string
  year?: string
}

const parseStartDate = (dateString: string): Date => {
  const isoMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (isoMatch) {
    return new Date(
      parseInt(isoMatch[1], 10),
      parseInt(isoMatch[2], 10) - 1,
      parseInt(isoMatch[3], 10)
    )
  }
  const yearMatch = dateString.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/i)
  if (yearMatch) {
    const monthMap: Record<string, number> = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
    }
    const month = monthMap[yearMatch[1].toLowerCase()]
    const day = 1
    const year = parseInt(yearMatch[2], 10)
    return new Date(year, month, day)
  }
  const presentMatch = dateString.match(/Present|– Present|— Present/)
  if (presentMatch) {
    return new Date(new Date().getFullYear(), 11, 31)
  }
  const yearMatch2 = dateString.match(/\d{4}/)
  if (yearMatch2) {
    return new Date(parseInt(yearMatch2[0], 10), 0, 1)
  }
  return new Date(0)
}

const timelineData: ExperienceEntry[] = [
  {
    title: "Software Development Engineer",
    subtitle: "Dol Tech Labs",
    date: "June 2026 – Present",
    location: "Kolkata",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl">
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">SDE - Software Development Engineer</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">Dol Tech Labs</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Kolkata, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Jun 2026 – Present
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Contributing to scalable software solutions and developer-focused products
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Collaborating on application development and system design
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Technical problem solving and product discussions
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Feature implementation, testing and deployment workflows
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Engineering best practices and modern development tools
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2026-06-01",
    year: "2026",
  },
  {
    title: "Technical Co Head",
    subtitle: "Samarth TMSL",
    date: "June 2026 – Present",
    location: "Kolkata",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl">
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Technical Co Head</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">Samarth TMSL</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Kolkata, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Jun 2026 – Present
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Leading technical initiatives and overseeing development of student-focused platforms
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Mentoring the web development team and driving technical projects
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Collaborating with cross-functional teams and delivering scalable solutions
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Streamlining development workflows and supporting community events through technology
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2026-06-01",
    year: "2026",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Modelsuite.ai",
    date: "Jun 2025 – Oct 2025",
    location: "Rüsselsheim, Germany (Remote)",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Full Stack Developer</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">Modelsuite.ai</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Rüsselsheim, Germany (Remote)
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Jun 2025 – Oct 2025
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Built AI-driven SaaS features using React, Node.js, and MongoDB, reducing delivery time by 20%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Architected and optimized RESTful APIs and microservices, improving responsiveness by 15%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Implemented scalable database schemas supporting 10,000+ concurrent users
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Collaborated in Agile sprints with cross-functional teams, shipping production features weekly
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2025-06-01",
    year: "2025",
  },
  {
    title: "Generative AI Developer Intern",
    subtitle: "AI Wallah",
    date: "Jun 2025 – Jul 2025",
    location: "Kolkata, India",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Generative AI Developer Intern</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">AI Wallah</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Kolkata, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Jun 2025 – Jul 2025
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Designed and fine-tuned LLM models for domain-specific tasks, improving accuracy by 25%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Integrated AI workflows using Groq API and OpenAI, processing 10K+ automated requests/day
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Developed proof-of-concept AI prototypes adopted in 3 production applications
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2025-06-01",
    year: "2025",
  },
  {
    title: "Backend Developer Intern",
    subtitle: "SaaSForge",
    date: "Feb 2025 – Mar 2025",
    location: "Delhi, India",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl" animate={false}>
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Backend Developer Intern</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">SaaSForge</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Delhi, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Feb 2025 – Mar 2025
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Designed RESTful APIs serving 50K+ daily requests with 99.5% service uptime
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Optimized PostgreSQL queries and indexing, reducing query execution time by 40%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Implemented Redis-based caching, decreasing API response latency by 30%
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2025-02-01",
    year: "2025",
  },
  {
    title: "Web Developer",
    subtitle: "Samarth TMSL",
    date: "November 2024 – May 2026",
    location: "Kolkata",
    content: (
      <BackgroundGradient className="rounded-2xl" containerClassName="rounded-2xl">
        <NeoCard className="p-6 bg-card" hover>
          <h3 className="text-xl font-bold text-foreground mb-1">Web Developer</h3>
          <h4 className="text-lg font-semibold text-accent-blue mb-3">Samarth TMSL</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden />
              Kolkata, India
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Nov 2024 – May 2026
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Engineered full-stack student platforms using the MERN stack, serving 500+ active users
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Developed secure authentication using Clerk and Firebase, achieving 99.9% uptime
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Built admin dashboards with analytics, reducing manual operational workload by 60%
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" aria-hidden />
              Optimized performance and accessibility (WCAG 2.1 AA), increasing user adoption by 40%
            </li>
          </ul>
        </NeoCard>
      </BackgroundGradient>
    ),
    startDate: "2024-11-01",
    year: "2024",
  },
]

export function ExperienceSection() {
  const sortedExperiences = [...timelineData]
    .sort((a, b) => {
      const dateA = parseStartDate(a.startDate).getTime()
      const dateB = parseStartDate(b.startDate).getTime()
      return dateB - dateA
    })
    .map((entry, index, sorted) =>
      index > 0 && entry.year === sorted[index - 1].year ? { ...entry, year: undefined } : entry,
    )

  return (
    <section id="experience" className="py-20">
      <div className="relative w-full overflow-clip">
        <Timeline data={sortedExperiences} />
      </div>
    </section>
  )
}
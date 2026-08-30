"use client"

import { SectionHeader } from "./section-header"
import { Timeline } from "@mantine/core"
import { Award, Star, GitBranch, Users, TrendingUp, Shield, Flag } from "lucide-react"

export const achievementsData = [
  {
    title: "Open Odyssey — Winner",
    subtitle: "1st Place — Full-stack Web3",
    date: "Nov 2024",
    meta: "Decentralized marketplace, 120 teams",
    details:
      "Led frontend + smart-contract integration; built product demo, won judges' choice for real-world impact.",
    icon: <Award className="w-6 h-6" aria-hidden />,
  },
  {
    title: "How-To-Hackathons — Published Article",
    subtitle: "SamarthTech Hashnode",
    date: "Jul 2025",
    meta: "Guide for developers",
    details:
      "Authored a hands-on guide covering planning, execution and pitching — received 4k+ reads and community shares.",
    icon: <Star className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Hult Prize — On-Campus Winner",
    subtitle: "Campus Winner — Business Innovation",
    date: "Feb 2025",
    meta: "Campus level — Hult Prize",
    details:
      "Won the on-campus Hult Prize competition for a social impact startup idea. Led team ideation and pitch.",
    icon: <Flag className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Hult Prize — National Top 10",
    subtitle: "Top 10 at National Finals",
    date: "Apr 2025",
    meta: "Hult Prize Nationals",
    details:
      "Advanced from campus to national stage and ranked among the top 10 teams nationally for the Hult Prize.",
    icon: <TrendingUp className="w-6 h-6" aria-hidden />,
  },
  {
    title: "CCU Fest — STRUP (Investor Interest)",
    subtitle: "2 Investor Commitments",
    date: "Nov 2025",
    meta: "CCU Fest — STRUP",
    details:
      "Presented startup idea at CCU Fest STRUP and secured interest/commitments from two potential investors.",
    icon: <Users className="w-6 h-6" aria-hidden />,
  },
  {
    title: "East India Blockchain Summit — Top 10",
    subtitle: "Top 10 Project",
    date: "Jan 2025",
    meta: "East India Blockchain Summit",
    details:
      "Selected among the top 10 projects at the East India Blockchain Summit for blockchain innovation and impact.",
    icon: <Star className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Hack <N> Pitch — Finalist",
    subtitle: "Pitch Competition Finalist",
    date: "Nov 2024",
    meta: "Hack <N> Pitch",
    details:
      "Reached the final round of Hack <N> Pitch — delivered concise demo + investor-style pitch to judges.",
    icon: <Award className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Web3 Hackathons — Finalist",
    subtitle: "Multiple Web3 Hackathon Finalist",
    date: "2025",
    meta: "Web3 Hackathons",
    details:
      "Finalist across several Web3 hackathons — delivered fast prototypes integrating smart contracts and DApps.",
    icon: <GitBranch className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Open Odyssey 2.0 Organiser",
    subtitle: "MLH 2025",
    date: "Oct 2025",
    meta: "MLH Hackathon Program",
    details:
      "Organized large-scale open-source program with 200+ developers. Learning pathways for beginners.",
    icon: <Award className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Dol Tech Labs — SDE",
    subtitle: "Software Development Engineer",
    date: "June 2026 – Present",
    meta: "Current Role",
    details:
      "Contributing to scalable software solutions and developer-focused products at Dol Tech Labs.",
    icon: <Shield className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Samarth TMSL — Technical Co Head",
    subtitle: "Technical Leadership",
    date: "June 2026 – Present",
    meta: "Promoted Role",
    details:
      "Leading technical initiatives and mentoring web development team at Samarth TMSL.",
    icon: <Award className="w-6 h-6" aria-hidden />,
  },
  {
    title: "CalTech Circle — PR & Outreach Lead",
    subtitle: "Community Leadership",
    date: "March 2026 – Present",
    meta: "Community Expansion",
    details:
      "PR, Partnerships, Outreach. Expanding community reach with builders, developers, and innovators.",
    icon: <Users className="w-6 h-6" aria-hidden />,
  },
  {
    title: "DropoutHacks — Core Team Member",
    subtitle: "Hackathon Organization",
    date: "Jan 2026 – Present",
    meta: "3,000+ Participants",
    details:
      "Hackathon organization, sponsor outreach, event planning, and community coordination.",
    icon: <Award className="w-6 h-6" aria-hidden />,
  },
  {
    title: "GirlScript Summer of Code — Mentor",
    subtitle: "Full-Stack Mentorship",
    date: "Jul 2025 – Jan 2026",
    meta: "Open-Source Mentorship",
    details:
      "Mentored students in full-stack web development. Open-source collaboration, PR quality, and code review.",
    icon: <Shield className="w-6 h-6" aria-hidden />,
  },
  {
    title: "Open Source Connect — Mentor",
    subtitle: "Developer Mentorship",
    date: "Aug 2025 – Dec 2025",
    meta: "Early-Career Mentorship",
    details:
      "Mentored early-career developers. Git and GitHub workflows, collaborative coding practices.",
    icon: <Users className="w-6 h-6" aria-hidden />,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Achievements" subtitle="Selected wins & milestones" />
        <Timeline
          radius="md"
          active={achievementsData.length}
          lineWidth={5}
          bulletSize={26}
          align="left"
          className="mt-8"
        >
          {achievementsData.map((item, idx) => (
            <Timeline.Item
              key={idx}
              bullet={item.icon}
              title={
                <span className="text-lg font-semibold text-accent-blue">{item.title}</span>
              }
              className="mb-8"
            >
              <div className="text-sm text-accent-blue font-medium">{item.subtitle}</div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium border border-accent-cyan/20 mb-2">
                {item.meta}
              </div>
              <div className="text-sm text-muted-foreground mb-2">{item.details}</div>
              <div className="text-xs text-neutral-500 font-mono">{item.date}</div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
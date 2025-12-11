"use client"

import { SectionHeader } from "./section-header"
import { Timeline } from "@mantine/core"
import { Award, Star, GitBranch } from "lucide-react"
import React from "react"

const achievementsData = [
  {
    title: "Open Odyssey — Winner",
    subtitle: "1st Place — Full-stack Web3",
    date: "Nov 2024",
    meta: "Decentralized marketplace, 120 teams",
    details: "Led frontend + smart-contract integration; built product demo, won judges' choice for real-world impact.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "How-To-Hackathons — Published Article",
    subtitle: "SamarthTech Hashnode",
    date: "Jul 2025",
    meta: "Guide for developers",
    details: "Authored a hands-on guide covering planning, execution and pitching — received 4k+ reads and community shares.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "CVForge.ai — MVP Launch",
    subtitle: "AI resume platform (ATS optimized)",
    date: "Aug 2025",
    meta: "LLMs · LangChain · Vector search",
    details: "Built core pipeline for resume parsing, LLM-driven rewriting and export — validated with early user testing.",
    icon: <GitBranch className="w-6 h-6" />,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Achievements" subtitle="Selected wins & milestones" />
        <Timeline
          radius="md"
          active={1}
          lineWidth={5}
          bulletSize={26}
          align="left"
          className="mt-8"
        >
          {achievementsData.map((item, idx) => (
            <Timeline.Item
              key={idx}
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
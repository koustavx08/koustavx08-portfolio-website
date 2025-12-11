"use client"

import { SectionHeader } from "./section-header"
import { Timeline } from "@mantine/core"
import { Award, Star, GitBranch } from "lucide-react"
import React from "react"

import { Users, TrendingUp, Shield, Flag, Calendar } from "lucide-react";

export const achievementsData = [
  {
    title: "Open Odyssey — Winner",
    subtitle: "1st Place — Full-stack Web3",
    date: "Nov 2024",
    meta: "Decentralized marketplace, 120 teams",
    details:
      "Led frontend + smart-contract integration; built product demo, won judges' choice for real-world impact.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "How-To-Hackathons — Published Article",
    subtitle: "SamarthTech Hashnode",
    date: "Jul 2025",
    meta: "Guide for developers",
    details:
      "Authored a hands-on guide covering planning, execution and pitching — received 4k+ reads and community shares.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Hult Prize — On-Campus Winner",
    subtitle: "Campus Winner — Business Innovation",
    date: "Feb 2025",
    meta: "Campus level — Hult Prize",
    details:
      "Won the on-campus Hult Prize competition for a social impact startup idea. Led team ideation and pitch.",
    icon: <Flag className="w-6 h-6" />,
  },
  {
    title: "Hult Prize — National Top 10",
    subtitle: "Top 10 at National Finals",
    date: "Apr 2025",
    meta: "Hult Prize Nationals",
    details:
      "Advanced from campus to national stage and ranked among the top 10 teams nationally for the Hult Prize.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "CCU Fest — STRUP (Investor Interest)",
    subtitle: "2 Investor Commitments",
    date: "Nov 2025",
    meta: "CCU Fest — STRUP",
    details:
      "Presented startup idea at CCU Fest STRUP and secured interest/commitments from two potential investors.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "East India Blockchain Summit — Top 10",
    subtitle: "Top 10 Project",
    date: "Jan 2025",
    meta: "East India Blockchain Summit",
    details:
      "Selected among the top 10 projects at the East India Blockchain Summit for blockchain innovation and impact.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Hack <N> Pitch — Finalist",
    subtitle: "Pitch Competition Finalist",
    date: "Nov 2024",
    meta: "Hack <N> Pitch",
    details:
      "Reached the final round of Hack <N> Pitch — delivered concise demo + investor-style pitch to judges.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Web3 Hackathons — Finalist",
    subtitle: "Multiple Web3 Hackathon Finalist",
    date: "2025",
    meta: "Web3 Hackathons",
    details:
      "Finalist across several Web3 hackathons — delivered fast prototypes integrating smart contracts and DApps.",
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    title: "Organiser — Educathon 2.0",
    subtitle: "Event Organizer & Reviewer",
    date: "Nov 2025",
    meta: "Educathon 2.0",
    details:
      "Organised Educathon 2.0: planned logistics, mentored participants, reviewed submissions and coordinated judges.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
  title: "Co-Founder — CloudBoot AI",
  subtitle: "Building AI-driven Server Security Automation Startup",
  date: "2025",
  meta: "AI · Cybersecurity · Blockchain Audit Layer",
  details:
    "Co-founded CloudBoot AI and buiding the company and product from the ground up — architecting an agent-based real-time threat detection system with anomaly scoring, automated mitigation workflows, blockchain-logged threat signatures, and a peer defense mesh for distributed alerting.",
  icon: <Shield className="w-6 h-6" />,
},
];


export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Achievements" subtitle="Selected wins & milestones" />
        <Timeline
          radius="md"
          active={8}
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
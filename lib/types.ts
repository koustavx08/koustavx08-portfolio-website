import type { LucideIcon } from "lucide-react"

export interface NavItem {
  href: string
  label: string
}

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
  navbar: boolean
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

/** Dates are stored sortable ("YYYY-MM") so no component ever hardcodes a formatted label. */
export interface DateRange {
  start: string
  end: string | "Present"
}

export interface WorkExperience extends DateRange {
  title: string
  company: string
  location: string
  bullets: string[]
}

export interface ProjectLink {
  type: "Website" | "Source"
  href: string
  icon: LucideIcon
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  links: ProjectLink[]
}

export interface EducationEntry extends DateRange {
  school: string
  degree: string
  location: string
  score?: string
}

export interface LeadershipRole extends Partial<DateRange> {
  title: string
  organization: string
  description?: string
  highlights?: string[]
}

export interface Achievement {
  title: string
  subtitle: string
  date: string
  sortDate: string
  description: string
}

"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, User, Code2, Briefcase, FolderKanban, Users, GraduationCap, Mail } from "lucide-react"

const navItems = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" />,
    href: "#hero",
  },
  {
    title: "About",
    icon: <User className="h-full w-full" />,
    href: "#about",
  },
  {
    title: "Skills",
    icon: <Code2 className="h-full w-full" />,
    href: "#skills",
  },
  {
    title: "Experience",
    icon: <Briefcase className="h-full w-full" />,
    href: "#experience",
  },
  {
    title: "Projects",
    icon: <FolderKanban className="h-full w-full" />,
    href: "#projects",
  },
  {
    title: "Leadership",
    icon: <Users className="h-full w-full" />,
    href: "#leadership",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-full w-full" />,
    href: "#education",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
    href: "#contact",
  },
]

export function FloatingDockNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={navItems}
        desktopClassName="backdrop-blur-xl bg-card/60 shadow-neo-soft rounded-2xl"
        mobileClassName="backdrop-blur-xl bg-card/60 shadow-neo-soft"
      />
    </div>
  )
}

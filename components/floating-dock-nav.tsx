"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Code,
  Users,
  Trophy,
  GraduationCap,
  Mail,
  MessageSquare,
} from "lucide-react";
import { DATA } from "@/data/resume";

const navItems = DATA.navbar.map((item) => {
  const iconMap: Record<string, React.ReactNode> = {
    "#hero": <Home className="h-full w-full" />,
    "#about": <User className="h-full w-full" />,
    "#work": <Briefcase className="h-full w-full" />,
    "#projects": <FolderKanban className="h-full w-full" />,
    "#skills": <Code className="h-full w-full" />,
    "#leadership": <Users className="h-full w-full" />,
    "#testimonials": <MessageSquare className="h-full w-full" />,
    "#achievements": <Trophy className="h-full w-full" />,
    "#education": <GraduationCap className="h-full w-full" />,
    "#contact": <Mail className="h-full w-full" />,
  };

  return {
    title: item.label,
    icon: iconMap[item.href] || <Home className="h-full w-full" />,
    href: item.href,
  };
});

export function FloatingDockNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-8">
      <FloatingDock
        items={navItems}
        desktopClassName="backdrop-blur-xl bg-card/80 shadow-neo-soft border border-border/50 rounded-2xl"
        mobileClassName="backdrop-blur-xl bg-card/80 shadow-neo-soft border border-border/50"
      />
    </div>
  );
}
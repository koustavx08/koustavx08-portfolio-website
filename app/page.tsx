import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { LeadershipSection } from "@/components/leadership-section"
import { EducationSection } from "@/components/education-section"

import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingDockNav } from "@/components/floating-dock-nav"

import { AchievementsSection } from "@/components/achievement-timeline"


export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeadershipSection />
      <EducationSection />
        <AchievementsSection />
      <ContactSection />
      <Footer />
      <FloatingDockNav />
    </main>
  )
}

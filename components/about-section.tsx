import { Code2, Rocket, Users, Zap } from "lucide-react"
import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Full-Stack Software Engineer" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <NeoCard className="p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Full-Stack Software Engineer focused on building scalable, user-centric web applications. Currently
              working as SDE at Dol Tech Labs while leading technical initiatives at Samarth TMSL as Technical Co
              Head. Experienced in end-to-end product development, from AI-driven SaaS platforms to student-facing
              systems serving hundreds of active users.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              My expertise spans full-stack development, real-time features, authentication systems, and AI/ML
              integrations. I'm passionate about crafting performant, accessible software and mentoring emerging
              developers across developer communities.
            </p>
          </NeoCard>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Interests</h3>
            <div className="flex flex-wrap gap-3">
              <div
                key={1}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 hover:-translate-y-0.5"
              >
                <Code2 className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-foreground">Full-Stack Development</span>
              </div>
              <div
                key={2}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-frontend">APIs & Backend</span>
              </div>
              <div
                key={3}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 hover:-translate-y-0.5"
              >
                <Rocket className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-foreground">AI & Generative Tech</span>
              </div>
              <div
                key={4}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 hover:-translate-y-0.5"
              >
                <Users className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-foreground">Developer Communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

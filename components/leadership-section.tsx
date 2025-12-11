import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { Users, Award, Calendar } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const leadership = [
  {
    title: "Mentor",
    organization: "Open Source Connect & GSSoC",
    description: "Mentored 50+ developers across full-stack, AI/ML, and Web3 stacks. Provided architectural guidance on scalability and clean API design.",
    icon: Users,
    highlights: ["50+ Mentees Guided", "+30% Project Completion", "Reduced Onboarding Time"],
  },
  {
    title: "Organiser",
    organization: "Open Odyssey 2.0 (MLH Hacktoberfest)",
    description: "Co-led a large-scale open-source program with 200+ developers. Designed learning pathways enabling beginners to ship production-ready PRs.",
    icon: Award,
    highlights: ["200+ Developers", "Web3, AI/ML & Cloud", "Boosted PR Acceptance"],
  },
  {
    title: "Organiser",
    organization: "EDUC-A-THON 2.0",
    description: "Organised a national-level hackathon with 1400+ participants. Managed logistics , outreach, and the 9-hour innovation sprint for 20 finalist teams.",
    icon: Award,
    highlights: ["1400+ Participants", "National Level Hackathon", "Operational Blueprint"],
  },
    {
    title: "Community Contributor",
    organization: "Hacktoberfest & Open Source",
    description: "Active contributor to various open-source projects, focusing on scalability and security best practices.",
    icon: Users,
    highlights: ["Multiple PRs merged", "Security improvements", "Documentation"],
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Leadership & Community" subtitle="Giving back to the community" />

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-2xl h-full"
              containerClassName="rounded-2xl h-full"
              animate={false}
            >
              <NeoCard className="p-6 h-full bg-card" hover>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-accent-blue">{item.organization}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </NeoCard>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  )
}
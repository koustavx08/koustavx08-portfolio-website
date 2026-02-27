import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { Users, Handshake, Megaphone, BookOpen } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const communityRoles = [
  {
    title: "Core Team Member",
    organization: "DropoutHacks",
    description:
      "Leading sponsorship and partnership operations for a builder-first hackathon ecosystem expecting 3,000+ participants.",
    icon: Handshake,
    highlights: ["Sponsorship Pipeline", "Partnership Outreach", "3,000+ Expected Builders"],
  },
  {
    title: "Core Team Member",
    organization: "Machine Learning Kolkata",
    description:
      "Supporting community programming and technical collaboration initiatives for ML learners and practitioners.",
    icon: Users,
    highlights: ["Community Programs", "Technical Sessions", "Ecosystem Collaboration"],
  },
  {
    title: "Core Team Member",
    organization: "React Kolkata",
    description:
      "Contributing to React-focused developer engagement through events, knowledge sharing, and peer learning.",
    icon: Megaphone,
    highlights: ["React Community", "Developer Engagement", "Knowledge Sharing"],
  },
  {
    title: "Mentor",
    organization: "Open Source Connect",
    description: "Mentoring contributors on open-source workflows, code quality, and maintainable engineering practices.",
    icon: BookOpen,
    highlights: ["Open Source Mentorship", "Code Reviews", "Contributor Enablement"],
  },
  {
    title: "Mentor",
    organization: "GirlScript Summer of Code",
    description: "Guiding student contributors on practical project execution and collaborative software development.",
    icon: BookOpen,
    highlights: ["Contributor Guidance", "Project Delivery", "Community Support"],
  },
  {
    title: "Organiser",
    organization: "Open Odyssey 2.0 (MLH Hacktoberfest 2025)",
    description: "Organised a public open-source event stream focused on learning, shipping, and contributor outcomes.",
    icon: Users,
    highlights: ["Program Operations", "Open-Source Focus", "Builder Outcomes"],
  },
]

export function LeadershipSection() {
  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Community & Ecosystem" subtitle="Where I contribute beyond product delivery" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityRoles.map((item, index) => (
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
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground">
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

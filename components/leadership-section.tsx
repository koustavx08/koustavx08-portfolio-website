import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { Users, Award, Calendar, GitBranch, Star, Flag } from "lucide-react"
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
    description: "Organised a national-level hackathon with 1400+ participants. Managed logistics, outreach, and the 9-hour innovation sprint for 20 finalist teams.",
    icon: Award,
    highlights: ["1400+ Participants", "National Level Hackathon", "Operational Blueprint"],
  },
  {
    title: "PR and Outreach Lead",
    organization: "CalTech Circle",
    date: "March 2026 – Present",
    description: "PR, Partnerships, Outreach. Expanding community reach. Working with builders, developers, designers, founders, and innovators.",
    icon: Users,
    highlights: ["Community Reach Expansion", "Builder & Developer Engagement", "Cross-functional Partnerships"],
  },
  {
    title: "Core Team Member",
    organization: "DropoutHacks",
    date: "January 2026 – Present",
    description: "Hackathon organization, sponsor outreach, event planning, and community coordination.",
    icon: Award,
    highlights: ["3,000+ Participants", "Sponsor Coordination", "Workshop Delivery"],
  },
  {
    title: "Core Team Member",
    organization: "Machine Learning Kolkata",
    date: "December 2025 – Present",
    description: "",
  },
  {
    title: "Core Team Member",
    organization: "React Kolkata",
    date: "November 2025 – Present",
    description: "",
  },
  {
    title: "Miro Meetups Ambassador (APAC)",
    organization: "Miro",
    date: "March 2026 – July 2026",
    description: "Organized meetups in Kolkata. Community building. Partnerships with local tech organizations.",
    icon: Award,
    highlights: ["Kolkata Meetups", "Local Tech Partnerships", "Collaborative Workflows"],
  },
  {
    title: "Mentor",
    organization: "GirlScript Summer of Code",
    date: "July 2025 – January 2026",
    description: "Mentored students in full-stack web development. Open-source collaboration, PR quality, issue resolution, and code review.",
  },
  {
    title: "Mentor",
    organization: "Open Source Connect",
    date: "August 2025 – December 2025",
    description: "Mentored early-career developers. Git and GitHub workflows, individual and group mentoring, collaborative coding practices.",
  },
  {
    title: "Open Odyssey 2.0 Organiser",
    organization: "MLH 2025",
    date: "October 2025",
    description: "Large-scale open-source program organization with MLH.",
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
                  {item.icon && (
                    <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                      <item.icon className="w-6 h-6" aria-hidden />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    {item.date && <p className="text-sm text-accent-blue">{item.date}</p>}
                    {item.organization && <p className="text-sm text-accent-blue">{item.organization}</p>}
                  </div>
                </div>

                {item.description && (
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                )}

                {item.highlights && item.highlights.length > 0 && (
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
                )}
              </NeoCard>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Code2, Rocket, Users, Network, Blocks } from "lucide-react"
import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"

const interests = [
  { icon: Code2, label: "Full-Stack Product Engineering" },
  { icon: Network, label: "Scalable Backend Systems" },
  { icon: Blocks, label: "Web3 Application Architecture" },
  { icon: Rocket, label: "AI-Powered Product Workflows" },
  { icon: Users, label: "Developer Ecosystem Building" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About" subtitle="Builder mindset with systems ownership" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <NeoCard className="p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I build software with a product-and-systems lens: clear requirements, fast iteration, and reliable execution.
              My work spans full-stack platforms, API services, and AI-enabled workflows, with a focus on performance,
              maintainability, and measurable user value.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Beyond shipping code, I contribute to the developer ecosystem through mentorship and community operations.
              I have supported hackathons, open-source programs, and technical communities across Kolkata, helping teams move
              from ideas to working products.
            </p>
          </NeoCard>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Focus Areas</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo transition-all duration-300 hover:-translate-y-0.5"
                >
                  <interest.icon className="w-4 h-4 text-accent-blue" />
                  <span className="text-sm text-foreground">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

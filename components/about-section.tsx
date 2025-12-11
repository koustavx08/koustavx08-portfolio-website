import { Code2, Rocket, Users, Zap } from "lucide-react"
import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"

const interests = [
  { icon: Code2, label: "Full-Stack Development (MERN)" },
  { icon: Zap, label: "Responsive UI/UX" },
  { icon: Rocket, label: "Secure Auth & Payments" },
  { icon: Users, label: "Real-Time Data" },
  { icon: Rocket, label: "Startup & Product Development" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me better" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <NeoCard className="p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a <span className="text-foreground font-semibold">Full-Stack MERN developer</span> with a focus on
              building scalable, user-centric applications. My experience spans creating event platforms with real-time
              tracking, booking systems with secure payments, and AI-driven products that serve thousands of users
              daily.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              I'm passionate about <span className="text-accent-blue font-semibold">hackathons</span>,
              <span className="text-accent-cyan font-semibold"> open-source</span>, and building
              <span className="text-accent-blue font-semibold"> developer communities</span>. I believe in shipping
              fast, iterating often, and always learning new technologies.
            </p>
          </NeoCard>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Interests</h3>
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

import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { Code, Layout, Server, Database, Blocks, Brain, Wrench } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Solidity", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js 14", "Redux", "Tailwind CSS", "shadcn/ui", "PWA", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices", "System Design"],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "MySQL", "Redis"],
  },
  {
    title: "Web3 & Blockchain",
    icon: Blocks,
    skills: ["Smart Contracts", "Solidity", "Web3.js", "Ethers.js", "DApps", "MetaMask Integration"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["LLMs", "Groq API", "OpenAI", "Gemini API", "Generative AI", "AI Workflows", "Prompt Engineering"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Agile/Scrum", "Clerk Auth", "Stripe/Payment Gateways"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-2xl h-full"
              containerClassName="rounded-2xl h-full"
              animate={false}
            >
              <NeoCard className="p-6 h-full bg-card" hover>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs rounded-full bg-card shadow-neo-inset text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
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

import { NeoCard } from "./neo-card"
import { SectionHeader } from "./section-header"

const items = [
  {
    title: "Veritas Protocol",
    summary: "A trust-focused Web3 protocol for verifiable records and transparent workflow states.",
    focus: ["Smart contract architecture", "Reliability-first backend services", "Product validation"],
  },
  {
    title: "EmBed",
    summary: "An AI-oriented platform focused on embedding-driven intelligence and practical developer workflows.",
    focus: ["Inference workflow design", "Node + React delivery", "Production integration"],
  },
]

export function CurrentlyBuildingSection() {
  return (
    <section id="currently-building" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Currently Building" subtitle="Active products and technical bets" />

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <NeoCard key={item.title} className="p-6" hover>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.summary}</p>
              <ul className="space-y-2">
                {item.focus.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  )
}

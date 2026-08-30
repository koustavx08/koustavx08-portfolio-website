import { SectionHeader } from "./section-header"
import { Terminal } from "./ui/terminal"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Full-Stack & Web3 Developer" />

        <div className="flex justify-center">
          <Terminal
            username="koustavx08"
            enableSound={false}
            typingSpeed={35}
            delayBetweenCommands={900}
            commands={["whoami", "cat about.md", "ls interests/", "cat status.txt"]}
            outputs={{
              0: ["Koustav Singh — Full-Stack & Web3 Developer"],
              1: [
                "Full-Stack & Web3 Developer focused on building scalable,",
                "user-centric web and blockchain applications.",
                "",
                "SDE @ Dol Tech Labs · Technical Co Head @ Samarth TMSL.",
                "Experience spans AI-driven SaaS platforms, smart-contract",
                "integrations, and student-facing systems serving hundreds",
                "of active users.",
              ],
              2: [
                "full-stack-development/",
                "web3-and-blockchain/",
                "apis-and-backend/",
                "ai-and-generative-tech/",
                "developer-communities/",
              ],
              3: ["Based in Kolkata, India", "Open to Full-Stack & Web3 Engineering roles"],
            }}
          />
        </div>

        {/* Accessible, crawlable copy mirroring the terminal above — for screen readers, SEO, and no-JS */}
        <div className="sr-only">
          <p>
            Full-Stack &amp; Web3 Developer focused on building scalable, user-centric web and blockchain
            applications. Currently working as SDE at Dol Tech Labs while leading technical initiatives at
            Samarth TMSL as Technical Co Head. Experienced in end-to-end product development, from AI-driven SaaS
            platforms and smart-contract integrations to student-facing systems serving hundreds of active users.
          </p>
          <p>
            Core interests: Full-Stack Development, Web3 &amp; Blockchain, APIs &amp; Backend, AI &amp; Generative
            Tech, Developer Communities. Based in Kolkata, India. Open to Full-Stack &amp; Web3 Engineering roles.
          </p>
        </div>
      </div>
    </section>
  )
}

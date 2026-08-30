import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeader label="About" title="About Me" />
      <BlurFade>
        <div className="mb-4 flex justify-center">
          <Badge variant="outline">Gay</Badge>
        </div>
        <p className="text-pretty text-center leading-relaxed text-muted-foreground">{DATA.summary}</p>
      </BlurFade>
    </section>
  )
}

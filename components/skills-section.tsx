import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-4 py-20">
      <SectionHeader label="Skills" title="Technologies" subtitle="What I work with" />

      <div className="grid gap-4 sm:grid-cols-2">
        {DATA.skills.map((category, index) => (
          <BlurFade key={category.title} delay={0.05 * index}>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <category.icon className="size-4 text-primary" aria-hidden />
                <h3 className="font-medium text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

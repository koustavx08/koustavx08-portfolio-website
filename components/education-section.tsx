import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"
import { formatDateRange } from "@/lib/date"

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeader label="Education" title="Education" subtitle="Academic background" />

      <div className="space-y-4">
        {DATA.education.map((item, index) => (
          <BlurFade key={item.school + item.degree} delay={0.05 * index}>
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{item.degree}</h3>
                <p className="text-sm text-primary">{item.school}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </div>
              <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                <span className="text-xs text-muted-foreground">{formatDateRange(item.start, item.end)}</span>
                {item.score && (
                  <Badge variant="outline" className="font-normal">
                    {item.score}
                  </Badge>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

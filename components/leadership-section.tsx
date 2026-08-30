import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"
import { parseDateLabel, formatDateRange } from "@/lib/date"

const dated = DATA.leadership
  .filter((role) => role.start)
  .sort((a, b) => parseDateLabel(b.start!).getTime() - parseDateLabel(a.start!).getTime())
const undated = DATA.leadership.filter((role) => !role.start)
const sortedLeadership = [...dated, ...undated]

export function LeadershipSection() {
  return (
    <section id="leadership" className="border-t border-border/60 bg-card/30 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="Leadership" title="Leadership & Community" subtitle="Giving back to the community" />

        <div className="grid gap-4 sm:grid-cols-2">
          {sortedLeadership.map((role, index) => (
            <BlurFade key={`${role.organization}-${role.title}`} delay={0.04 * index}>
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{role.title}</h3>
                  {role.start && role.end && (
                    <span className="shrink-0 text-xs text-muted-foreground">{formatDateRange(role.start, role.end)}</span>
                  )}
                </div>
                <p className="text-sm text-primary">{role.organization}</p>
                {role.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
                )}
                {role.highlights && role.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="font-normal">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

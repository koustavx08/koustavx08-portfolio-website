import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

const sortedAchievements = [...DATA.achievements].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))

export function AchievementsSection() {
  return (
    <section id="achievements" className="border-t border-border/60 bg-card/30 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="Achievements"
          title="Achievements & Hackathons"
          subtitle="Selected wins & milestones"
        />

        <BlurFade>
          <div className="space-y-4">
            {sortedAchievements.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-border hover:shadow-neo-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
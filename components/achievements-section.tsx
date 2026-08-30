import { SectionHeader } from "@/components/section-header"
import { Timeline, TimelineItem } from "@/components/timeline"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

const sortedAchievements = [...DATA.achievements].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))

export function AchievementsSection() {
  return (
    <section id="achievements" className="border-t border-border/60 bg-card/30 px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeader label="Achievements" title="Achievements & Hackathons" subtitle="Selected wins & milestones" />

        <BlurFade>
          <Timeline>
            {sortedAchievements.map((item, index) => (
              <TimelineItem key={item.title} isLast={index === sortedAchievements.length - 1}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="shrink-0 text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-primary">{item.subtitle}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </TimelineItem>
            ))}
          </Timeline>
        </BlurFade>
      </div>
    </section>
  )
}

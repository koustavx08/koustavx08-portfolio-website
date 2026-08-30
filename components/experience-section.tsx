import { MapPin } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { BlurFade } from "@/components/magicui/blur-fade"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { DATA } from "@/data/resume"
import { parseDateLabel, formatDateRange } from "@/lib/date"

const sortedWork = [...DATA.work].sort(
  (a, b) => parseDateLabel(b.start).getTime() - parseDateLabel(a.start).getTime(),
)

export function ExperienceSection() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeader label="Experience" title="Work" subtitle="Where I've built things" />

      <BlurFade>
        <Accordion type="single" collapsible className="w-full" defaultValue={sortedWork[0]?.company}>
          {sortedWork.map((job) => (
            <AccordionItem key={`${job.company}-${job.title}`} value={job.company}>
              <AccordionTrigger>
                <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:pr-4">
                  <div>
                    <span className="font-semibold text-foreground">{job.title}</span>
                    <span className="text-muted-foreground"> · {job.company}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{formatDateRange(job.start, job.end)}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden />
                  {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
    </section>
  )
}

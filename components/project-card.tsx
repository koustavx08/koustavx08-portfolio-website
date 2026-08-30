import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"

function slugToTitle(slug: string) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ")
}

export function ProjectCard({ project }: { project: Project }) {
  const websiteHref = project.links.find((l) => l.type === "Website")?.href

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:ring-2 hover:ring-muted">
      <div className="flex items-start justify-between gap-2">
        <a
          href={websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 font-semibold text-foreground"
        >
          {slugToTitle(project.title)}
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </a>
        <div className="flex shrink-0 gap-1.5">
          {project.links.map((link) => (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.type === "Website" ? "Live site" : "Source code"} for ${project.title}`}
              className="rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"

export function ProjectCard({ project }: { project: Project }) {
  // Not every project has a live site (AutoLayout.ai is source-only), and an
  // <a> with no href is not focusable, so fall back to the first link there is.
  const titleHref = project.links.find((l) => l.type === "Website")?.href ?? project.links[0]?.href

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:ring-2 hover:ring-muted">
      <div className="flex items-start justify-between gap-2">
        <a
          href={titleHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 font-semibold text-foreground"
        >
          {project.title}
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

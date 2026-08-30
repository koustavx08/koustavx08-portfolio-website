import { Github } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/60 bg-card/30 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="Projects" title="Selected Projects" subtitle="Some things I've built" />

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <BlurFade key={project.title} delay={0.05 * index}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/koustavx08?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" aria-hidden />
            More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

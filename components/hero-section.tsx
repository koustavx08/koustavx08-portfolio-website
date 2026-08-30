import { ArrowDown, Download, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magicui/blur-fade"
import { BlurFadeText } from "@/components/magicui/blur-fade-text"
import { DATA } from "@/data/resume"

const BLUR_FADE_DELAY = 0.04

export function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[85vh] flex-col items-center justify-center px-4 py-24 text-center">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="mx-auto mb-6 size-24 border border-border">
          <AvatarImage src={DATA.avatarUrl} alt={DATA.name} style={{ imageRendering: "pixelated" }} />
          <AvatarFallback className="text-xl font-semibold">{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>

      <BlurFadeText
        as="h1"
        text={DATA.name}
        delay={BLUR_FADE_DELAY * 2}
        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      />

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="mt-3 text-lg font-medium text-primary sm:text-xl">{DATA.headline}</p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">{DATA.description}</p>
        <p className="mt-2 text-sm text-muted-foreground/70">{DATA.location}</p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Work
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" aria-hidden />
              Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              <Mail className="size-4" aria-hidden />
              Contact
            </a>
          </Button>
        </div>
      </BlurFade>
    </section>
  )
}

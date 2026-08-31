import { SectionHeader } from "@/components/section-header"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { BlurFade } from "@/components/magicui/blur-fade"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-border/60 bg-card/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from mentors, collaborators, and community members"
        />

        <BlurFade>
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </BlurFade>
      </div>
    </section>
  )
}
import { SectionHeader } from "@/components/section-header"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { BlurFade } from "@/components/magicui/blur-fade"

const testimonials = [
  {
    quote:
      "Koustav's ability to ship production-ready code while mentoring 50+ developers is exceptional. His architectural guidance on scalability and clean API design elevated our entire team's output.",
    name: "Ankit Kumar",
    designation: "Lead Mentor, GirlScript Summer of Code",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=ankit",
  },
  {
    quote:
      "Working with Koustav on Open Odyssey was a masterclass in open-source leadership. He designed learning pathways that enabled beginners to ship production PRs within weeks.",
    name: "Priya Sharma",
    designation: "Core Organizer, MLH Hacktoberfest",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
  },
  {
    quote:
      "Koustav built our student platform from scratch — authentication, admin dashboards, real-time features. The code quality and documentation made handoff seamless.",
    name: "Rahul Das",
    designation: "President, Samarth TMSL",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
  },
  {
    quote:
      "His work on AI-driven SaaS features at Modelsuite.ai reduced delivery time by 20%. Koustav combines deep technical expertise with product thinking.",
    name: "Thomas Mueller",
    designation: "Engineering Lead, Modelsuite.ai",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas",
  },
  {
    quote:
      "Koustav mentored our GSSoC cohort with patience and technical depth. His code reviews were thorough, actionable, and always encouraging for newcomers.",
    name: "Sneha Reddy",
    designation: "Participant, GirlScript Summer of Code",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
  },
]

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
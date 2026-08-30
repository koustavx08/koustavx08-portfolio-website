import { SectionHeader } from "./section-header"
import { NeoCard } from "./neo-card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const educationData = [
  {
    institution: "Techno Main Salt Lake",
    degree: "B.Tech in Information Technology",
    duration: "Aug 2024 – Jun 2028",
    location: "Kolkata, India",
    score: null,
  },
  {
    institution: "K.E. Carmel School, Amtala",
    degree: "Class XII — Computer Science",
    duration: "2022 – 2024",
    location: "Kolkata, India",
    score: "Score: 85.5%",
  },
  {
    institution: "K.E. Carmel School, Amtala",
    degree: "Class X",
    duration: "2020 – 2022",
    location: "Kolkata, India",
    score: "Score: 92%",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Education" subtitle="Academic background" />

        <div className="space-y-6 max-w-2xl mx-auto">
          {educationData.map((item, index) => (
            <NeoCard key={index} className="p-8" hover>
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-accent-blue/10 text-accent-blue shrink-0">
                  <GraduationCap className="w-8 h-8" aria-hidden />
                </div>
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                      <p className="text-lg text-accent-blue font-semibold">{item.institution}</p>
                    </div>
                    {item.score && (
                      <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium border border-accent-cyan/20 flex items-center gap-1 w-fit">
                        <Award className="w-3 h-3" aria-hidden />
                        {item.score}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" aria-hidden />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
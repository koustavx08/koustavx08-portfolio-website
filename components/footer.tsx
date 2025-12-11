import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Koustav Singh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/koustavx08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo hover:text-accent-blue transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/koustavx08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo hover:text-accent-blue transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:koustavsinghcollege@gmail.com"
            className="p-2 rounded-full bg-card-elevated shadow-neo-sm hover:shadow-neo hover:text-accent-blue transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

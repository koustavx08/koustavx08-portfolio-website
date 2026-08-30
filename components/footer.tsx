import { DATA } from "@/data/resume"

const socials = Object.values(DATA.contact.social)

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={social.name}
            >
              <social.icon className="size-4" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

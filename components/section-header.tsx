interface SectionHeaderProps {
  title: string
  subtitle?: string
  label: string
}

export function SectionHeader({ title, subtitle, label }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-border sm:w-16" aria-hidden />
        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-border sm:w-16" aria-hidden />
      </div>
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

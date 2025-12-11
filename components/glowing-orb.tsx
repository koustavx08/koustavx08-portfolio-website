import { cn } from "@/lib/utils"

interface GlowingOrbProps {
  className?: string
  delay?: number
}

export function GlowingOrb({ className, delay = 0 }: GlowingOrbProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br from-accent-blue/30 via-accent-cyan/20 to-transparent blur-3xl animate-pulse",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

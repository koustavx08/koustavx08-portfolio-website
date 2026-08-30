import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative", className)}>{children}</div>
}

export function TimelineItem({
  children,
  isLast,
  className,
}: {
  children: ReactNode
  isLast?: boolean
  className?: string
}) {
  return (
    <div className={cn("relative flex gap-4 pb-8 last:pb-0", className)}>
      <div className="flex flex-col items-center">
        <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
        {!isLast && <span className="w-px flex-1 bg-border" aria-hidden />}
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

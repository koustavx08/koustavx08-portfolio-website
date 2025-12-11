"use client"

import { cn } from "@/lib/utils"

interface RippleProps {
  className?: string
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

export function Ripple({ className, mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 }: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none mask-[linear-gradient(white,transparent)]",
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animationDelay = `${i * 0.06}s`
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid"
        const borderOpacity = 5 + i * 5

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full border bg-accent-blue/5"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `oklch(0.65 0.2 250 / ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        )
      })}
    </div>
  )
}

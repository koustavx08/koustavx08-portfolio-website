"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeoCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glowOnHover?: boolean
}

export function NeoCard({ children, className, hover = false, glowOnHover = false }: NeoCardProps) {
  const shouldReduceMotion = useReducedMotion()

  if (!hover) {
    return (
      <div className={cn("rounded-2xl bg-card-elevated shadow-neo transition-all duration-300", className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -8,
              scale: 1.02,
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl bg-card-elevated shadow-neo transition-shadow duration-300",
        hover && "hover:shadow-neo-lg cursor-pointer",
        glowOnHover && "hover:shadow-neo-blue-lg",
        className,
      )}
    >
      {glowOnHover && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-accent-blue/5" />
      )}
      {children}
    </motion.div>
  )
}

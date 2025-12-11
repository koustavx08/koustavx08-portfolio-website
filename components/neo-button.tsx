"use client"

import { motion, useReducedMotion } from "framer-motion"
import type React from "react"
import { cn } from "@/lib/utils"

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  asChild?: boolean
}

export function NeoButton({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: NeoButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-accent-blue text-background shadow-neo-blue hover:shadow-neo-blue-lg",
    secondary: "bg-card-elevated text-foreground shadow-neo hover:shadow-neo-lg",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-card-elevated",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <motion.button
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}

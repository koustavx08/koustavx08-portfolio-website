"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ElementType } from "react"

interface BlurFadeTextProps {
  text: string
  className?: string
  delay?: number
  as?: ElementType
}

export function BlurFadeText({ text, className, delay = 0, as: Tag = "span" }: BlurFadeTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion(Tag)

  return (
    <MotionTag
      initial={{ y: shouldReduceMotion ? 0 : 8, opacity: 0, filter: shouldReduceMotion ? "none" : "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: shouldReduceMotion ? 0 : delay, duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
      className={className}
    >
      {text}
    </MotionTag>
  )
}

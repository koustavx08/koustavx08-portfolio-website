"use client"

import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react"
import type { ReactNode } from "react"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: string
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  inView = true,
  inViewMargin = "-50px",
}: BlurFadeProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { y: shouldReduceMotion ? 0 : yOffset, opacity: 0, filter: shouldReduceMotion ? "none" : "blur(6px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  }

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={inView ? "visible" : undefined}
        viewport={inView ? { once: true, margin: inViewMargin } : undefined}
        variants={variants}
        transition={{ delay: shouldReduceMotion ? 0 : delay, duration: shouldReduceMotion ? 0 : duration, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

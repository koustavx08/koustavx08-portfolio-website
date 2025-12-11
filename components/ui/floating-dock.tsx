"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { Menu } from "lucide-react"
import { useRef, useState } from "react"

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleClick = (href: string) => {
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute inset-x-0 bottom-full mb-3 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <button
                  onClick={() => handleClick(item.href)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-card-elevated shadow-neo-sm transition-all duration-200 hover:shadow-neo hover:shadow-accent-blue/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                  aria-label={item.title}
                >
                  <div className="h-5 w-5 text-muted-foreground">{item.icon}</div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-neo transition-all duration-200 hover:shadow-neo-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <Menu className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto hidden h-[4.5rem] items-end gap-4 rounded-2xl bg-card px-4 pb-3 md:flex shadow-neo",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const springConfig = { mass: 0.1, stiffness: 150, damping: 12 }

  const width = useSpring(widthTransform, springConfig)
  const height = useSpring(heightTransform, springConfig)
  const widthIcon = useSpring(widthTransformIcon, springConfig)
  const heightIcon = useSpring(heightTransformIcon, springConfig)

  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // If reduced motion, use static sizes
  const staticStyle = shouldReduceMotion ? { width: 48, height: 48 } : { width, height }

  const staticIconStyle = shouldReduceMotion ? { width: 24, height: 24 } : { width: widthIcon, height: heightIcon }

  return (
    <button
      onClick={handleClick}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-full"
    >
      <motion.div
        ref={ref}
        style={staticStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-card-elevated shadow-neo-sm transition-shadow duration-200 hover:shadow-neo-blue"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-9 left-1/2 w-fit rounded-lg border border-border bg-card px-3 py-1.5 text-xs whitespace-pre text-foreground shadow-neo-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={staticIconStyle} className="flex items-center justify-center text-muted-foreground">
          {icon}
        </motion.div>
      </motion.div>
    </button>
  )
}

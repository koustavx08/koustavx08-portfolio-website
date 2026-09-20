"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  linkedin?: string;
};

/** Deterministic per-index tilt. Math.random() here would differ between the
 *  server and client renders and trip a hydration mismatch. */
const tiltFor = (index: number) => ((index * 37) % 21) - 10;

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    // Autoplay is unattended motion, so honour the reduced-motion preference.
    if (!autoplay || shouldReduceMotion) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, shouldReduceMotion]);

  return (
    <div className={cn("mx-auto max-w-4xl px-4 py-16", className)}>
      <div className="relative grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div className="relative h-72 md:h-80">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={false}
              animate={{
                opacity: isActive(index) ? 1 : 0.5,
                scale: isActive(index) ? 1 : 0.9,
                rotateY: isActive(index) ? 0 : tiltFor(index),
                zIndex: isActive(index) ? 40 : testimonials.length - index,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 origin-bottom"
            >
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                draggable={false}
                className="rounded-2xl object-cover object-center shadow-neo-soft"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-bold text-foreground">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].designation}
              </p>
              {testimonials[active].linkedin && (
                <a
                  href={testimonials[active].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline transition-colors"
                  aria-label={`View ${testimonials[active].name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-3 w-3" aria-hidden />
                  LinkedIn
                </a>
              )}
              <motion.p
                initial={{ filter: "blur(8px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                className="mt-6 text-base text-muted-foreground/90 leading-relaxed"
              >
                {testimonials[active].quote}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-8 pt-6 border-t border-border/50">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-card-elevated shadow-neo-sm border border-border hover:shadow-neo transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:rotate-12"
              />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-card-elevated shadow-neo-sm border border-border hover:shadow-neo transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight
                className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-rotate-12"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
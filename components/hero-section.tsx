"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const [scrambledText, setScrambledText] = useState("")
  const finalText = "We are simply the best"
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
    if (ctaRef.current) {
      // Existing gsap animation for ctaRef
    }
    if (taglineRef.current) {
      // Existing gsap animation for taglineRef
    }

    let iteration = 0
    const interval = setInterval(() => {
      setScrambledText(
        finalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return finalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= finalText.length) {
        clearInterval(interval)
      }

      iteration += 1
    }, 55)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              <div className="relative px-4 py-1.5 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl rounded-lg border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6),inset_0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="text-primary text-sm"
                  >
                    ✦
                  </motion.span>
                  <p className="text-sm md:text-base font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                    {scrambledText || finalText}
                  </p>
                  <motion.span
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="text-accent text-sm"
                  >
                    ✦
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-balance font-heading"
          >
            <span className="text-glow">About IETE!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto"
          >
            The Institution of Electronics and Telecommunication Engineers (IETE) is India&apos;s leading recognised
            professional society devoted to the advancement of science and technology of Electronics, Telecommunication
            & IT. Founded in 1953.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

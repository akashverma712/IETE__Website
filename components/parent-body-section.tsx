"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function ParentBodySection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const cardRef = useRef<HTMLDivElement>(null)
  const circuitRef = useRef<SVGPathElement>(null)
  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const finalText = "Our Parent Body"
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
    if (isInView && !hasAnimated) {
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
          setHasAnimated(true)
        }

        iteration += 1
      }, 55)

      return () => clearInterval(interval)
    }
  }, [isInView, hasAnimated])

  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.to(cardRef.current, {
        boxShadow:
          "0 0 100px rgba(59, 130, 246, 0.5), 0 25px 80px rgba(0, 0, 0, 0.9), inset 0 0 50px rgba(59, 130, 246, 0.1)",
        duration: 3.5,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }

    if (isInView && circuitRef.current) {
      gsap.to(circuitRef.current, {
        strokeDashoffset: 0,
        duration: 4,
        delay: 0.3,
        repeat: -1,
        ease: "linear",
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
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

          <h3 className="text-5xl md:text-6xl font-bold tracking-tight font-heading">IETE National Body</h3>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-12 rounded-3xl bg-gradient-to-br from-card/50 to-background/80 backdrop-blur-md border border-primary/20 p-8 md:p-12 overflow-hidden depth-card"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

            <div className="relative space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                The Institution of Electronics and Telecommunication Engineers (IETE) stands as the{" "}
                <span className="text-primary font-semibold">National Apex Professional Body</span> for electronics,
                telecommunication, and information technology professionals in India.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With a prestigious legacy spanning seven decades, IETE has grown to encompass a thriving community of{" "}
                <span className="text-primary font-semibold">over 1,25,000 members</span> across{" "}
                <span className="text-primary font-semibold">64 centres</span> in India and abroad, driving
                technological advancement and professional excellence.
              </p>

              <div className="pt-6">
                <svg className="w-full h-24" viewBox="0 0 800 100" fill="none" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                      <stop offset="30%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="50%" stopColor="rgba(96, 165, 250, 1)" />
                      <stop offset="70%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path
                    ref={circuitRef}
                    d="M 0 50 L 200 50 L 250 20 L 300 50 L 500 50 L 550 80 L 600 50 L 800 50"
                    stroke="url(#circuitGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                  />
                  {[200, 300, 500, 600].map((x, i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={x === 250 ? 20 : x === 550 ? 80 : 50}
                      r="6"
                      fill="rgba(96, 165, 250, 1)"
                      filter="url(#glow)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: [0, 2, 1], opacity: [0.5, 1, 0.8] } : {}}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.2 + 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2.5,
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const ieteCities = [
  { name: "Delhi", x: 42, y: 28 },
  { name: "Mumbai", x: 25, y: 50 },
  { name: "Bangalore", x: 38, y: 72 },
  { name: "Chennai", x: 48, y: 73 },
  { name: "Kolkata", x: 70, y: 45 },
  { name: "Hyderabad", x: 43, y: 60 },
  { name: "Pune", x: 32, y: 53 },
  { name: "Ahmedabad", x: 22, y: 42 },
  { name: "Jaipur", x: 34, y: 35 },
  { name: "Lucknow", x: 52, y: 35 },
  { name: "Chandigarh", x: 41, y: 23 },
  { name: "Bhopal", x: 42, y: 45 },
  { name: "Visakhapatnam", x: 57, y: 60 },
  { name: "Coimbatore", x: 42, y: 78 },
]

export function PanIndiaSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const mapRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const finalText = "Nationwide Presence"
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
    if (isInView && mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { scale: 0.92, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          delay: 0.3,
          ease: "power3.out",
        },
      )
    }

    if (isInView && pathRef.current) {
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 5,
        repeat: -1,
        ease: "linear",
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="relative py-32 px-4 mb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
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

          <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 font-heading">IETE is All Around India</h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div ref={mapRef} className="relative w-full h-[700px]">
              <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="30%" stopColor="rgba(96, 165, 250, 1)" />
                    <stop offset="50%" stopColor="rgba(147, 197, 253, 1)" />
                    <stop offset="70%" stopColor="rgba(96, 165, 250, 1)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                  </linearGradient>
                  <filter id="mapGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="outerGlow">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feFlood floodColor="rgba(59, 130, 246, 0.8)" />
                    <feComposite in2="blur" operator="in" result="outerGlow" />
                    <feMerge>
                      <feMergeNode in="outerGlow" />
                      <feMergeNode in="outerGlow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  ref={pathRef}
                  d="M 420 100 L 430 95 L 445 92 L 460 90 L 475 95 L 485 102 L 495 112 L 500 125 L 502 140 L 500 155 L 495 168 L 488 178 L 480 185 L 485 192 L 495 198 L 508 205 L 520 215 L 530 228 L 538 242 L 545 258 L 552 275 L 558 292 L 562 308 L 565 325 L 568 342 L 572 360 L 575 378 L 578 395 L 582 413 L 585 430 L 588 448 L 592 465 L 595 482 L 598 500 L 600 518 L 602 536 L 603 554 L 604 572 L 605 590 L 605 608 L 604 625 L 602 642 L 600 658 L 597 674 L 593 689 L 588 703 L 582 716 L 575 728 L 567 739 L 558 749 L 548 758 L 537 766 L 525 773 L 512 779 L 498 784 L 483 788 L 468 790 L 452 791 L 437 790 L 422 788 L 408 784 L 395 779 L 382 773 L 370 766 L 359 758 L 348 749 L 338 739 L 329 728 L 321 716 L 314 703 L 308 689 L 303 674 L 299 658 L 296 642 L 294 625 L 293 608 L 292 590 L 292 572 L 293 554 L 295 536 L 297 518 L 300 500 L 303 482 L 307 465 L 312 448 L 317 430 L 323 413 L 329 395 L 336 378 L 343 360 L 350 342 L 357 325 L 363 308 L 368 292 L 373 275 L 377 258 L 380 242 L 382 228 L 383 215 L 382 205 L 378 198 L 372 192 L 365 188 L 358 185 L 352 182 L 348 178 L 345 172 L 343 165 L 342 158 L 343 150 L 345 143 L 348 137 L 352 132 L 358 128 L 365 125 L 373 122 L 382 120 L 392 118 L 402 117 L 412 115 L 420 110 L 420 100 Z M 280 320 L 285 315 L 292 312 L 300 310 L 308 312 L 315 316 L 320 322 L 323 330 L 324 338 L 322 346 L 318 353 L 312 358 L 305 361 L 297 362 L 289 360 L 282 356 L 277 350 L 274 343 L 273 335 L 275 327 L 280 320 Z M 600 180 L 608 175 L 618 172 L 628 172 L 638 175 L 646 180 L 653 188 L 658 197 L 660 208 L 659 218 L 655 228 L 649 235 L 641 241 L 631 244 L 621 245 L 611 243 L 602 239 L 595 233 L 590 225 L 587 216 L 587 206 L 590 196 L 595 187 L 600 180 Z"
                  stroke="url(#mapGradient)"
                  strokeWidth="8"
                  strokeDasharray="3000"
                  strokeDashoffset="3000"
                  fill="rgba(59, 130, 246, 0.05)"
                  filter="url(#outerGlow)"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 1)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.6))",
                  }}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>

              {ieteCities.map((city, i) => (
                <motion.div
                  key={city.name}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    top: `${city.y}%`,
                    left: `${city.x}%`,
                    boxShadow:
                      "0 0 30px rgba(96, 165, 250, 1), 0 0 50px rgba(59, 130, 246, 0.6), 0 0 70px rgba(59, 130, 246, 0.3)",
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2 + 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <StatBox number="64" label="Centres" suffix="+" delay={0.6} isInView={isInView} />
            <StatBox number="1.25" label="Members" suffix="L+" delay={0.8} isInView={isInView} />
            <StatBox number="70" label="Years" suffix="+" delay={1.0} isInView={isInView} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl font-bold text-primary mb-4"
          >
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function StatBox({
  number,
  label,
  suffix = "",
  delay,
  isInView,
}: {
  number: string
  label: string
  suffix?: string
  delay: number
  isInView: boolean
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [scrambledNumber, setScrambledNumber] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const chars = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let iteration = 0
      const displayText = number + suffix
      const totalLength = displayText.length

      const interval = setInterval(() => {
        setScrambledNumber(
          displayText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return displayText[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        if (iteration >= totalLength) {
          clearInterval(interval)
          setHasAnimated(true)
        }

        iteration += 1
      }, 55)

      return () => clearInterval(interval)
    }
  }, [isInView, number, suffix, hasAnimated, chars])

  const handleMouseEnter = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        boxShadow:
          "0 0 60px rgba(59, 130, 246, 0.8), 0 0 100px rgba(59, 130, 246, 0.5), 0 15px 50px rgba(0, 0, 0, 0.8)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3), 0 10px 35px rgba(0, 0, 0, 0.6)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="gradient-border rounded-2xl p-6 backdrop-blur-sm depth-sm cursor-pointer"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">
        {scrambledNumber || number + suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium tracking-wider uppercase">{label}</div>
    </motion.div>
  )
}

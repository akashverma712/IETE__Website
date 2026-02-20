"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const professors = [
  {
    role: "Our Patron",
    name: "Prof. (Dr.) Pankaj Rai",
    image: "/pr.jpg",
    description: "Guiding the institution with wisdom and vision towards excellence in technical education.",
  },
  {
    role: "Our Professor In-Charge",
    name: "Prof. Imteyaz Ahmed",
    image: "/ia.jpg",
    description: "Leading day-to-day operations and ensuring the highest standards of academic excellence.",
  },
]

export function ProfessorsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const finalText = "Meet Our Leaders"
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

  return (
    <section ref={ref} className="relative py-32 px-4">
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

          <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 font-heading">Our Support</h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {professors.map((professor, index) => (
              <ProfessorCard key={index} {...professor} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProfessorCard({
  role,
  name,
  image,
  description,
  index,
  isInView,
}: {
  role: string
  name: string
  image: string
  description: string
  index: number
  isInView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        boxShadow: "0 0 40px rgba(59, 130, 246, 1), 0 0 60px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.5)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = () => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.to(cardRef.current, {
        boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), 0 20px 50px rgba(0, 0, 0, 0.7)",
        duration: 2.5,
        delay: index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }
  }, [isInView, index])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      whileHover={{ y: -12, scale: 1.03 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="gradient-border rounded-2xl overflow-hidden backdrop-blur-sm group cursor-pointer depth-card"
    >
      <div className="relative flex justify-center pt-8 pb-4">
        <div className="relative">
          <div
            ref={ringRef}
            className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background transition-shadow duration-300"
            style={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }} className="w-full h-full">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3 text-center">
        <p className="text-sm text-primary font-medium tracking-wider uppercase">{role}</p>
        <h4 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">{name}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

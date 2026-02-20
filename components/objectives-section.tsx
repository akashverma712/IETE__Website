"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GiArtificialIntelligence, GiTrophyCup, GiSpellBook } from "react-icons/gi"
import { PiExamFill } from "react-icons/pi"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const objectives = [
  {
    icon: GiArtificialIntelligence,
    title: "Advancement of Technology",
    description: "Promoting the advancement of Electronics, Telecommunications, and Information Technology sciences.",
  },
  {
    icon: GiTrophyCup,
    title: "Leadership & Development",
    description:
      "Fostering professional excellence and contributing to national development through technological leadership.",
  },
  {
    icon: GiSpellBook,
    title: "Knowledge Dissemination",
    description: "Organizing conferences, publishing journals, and facilitating continuing education programs.",
  },
  {
    icon: PiExamFill,
    title: "Professional Examinations",
    description: "Conducting AMIETE and DIPIETE examinations to certify professional competence in the field.",
  },
]

export function ObjectivesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 font-heading">Objective of IETE</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving excellence in electronics and telecommunications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objectives.map((objective, index) => (
            <ObjectiveCard key={index} {...objective} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ObjectiveCard({
  icon: Icon,
  title,
  description,
  index,
  isInView,
}: {
  icon: React.ElementType
  title: string
  description: string
  index: number
  isInView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView && iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.15,
        boxShadow: "0 0 40px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.4)",
        duration: 2,
        delay: index * 0.15 + 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }

    if (isInView && cardRef.current) {
      gsap.to(cardRef.current, {
        boxShadow: "0 0 50px rgba(59, 130, 246, 0.35), 0 15px 40px rgba(0, 0, 0, 0.6)",
        duration: 2.5,
        delay: index * 0.15 + 0.5,
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
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -12, scale: 1.04 }}
      className="gradient-border rounded-2xl p-6 backdrop-blur-sm group cursor-pointer depth-sm"
    >
      <motion.div
        ref={iconRef}
        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-primary/20 transition-colors mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-xl" />
        <Icon className="text-primary w-8 h-8 relative z-10" />
      </motion.div>

      <h3 className="text-xl font-bold mb-3 text-balance text-center">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm text-center">{description}</p>
    </motion.div>
  )
}

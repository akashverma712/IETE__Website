"use client"

import { motion } from "framer-motion"
import { BsLinkedin, BsTwitterX, BsInstagram, BsYoutube } from "react-icons/bs"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur-md mt-8">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/iete.png"
                alt="IETE Logo"
                className="h-16 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold font-heading">IETE</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The Institution of Electronics and Telecommunication Engineers Students&apos; Forum
            </p>
            <div className="flex gap-4">
              {[BsLinkedin, BsTwitterX, BsInstagram, BsYoutube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors glow-blue-sm"
                >
                  <Icon className="text-primary w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Contact us", "About us", "Events"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-heading">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MdLocationOn className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>BIT Sindri</p>
                  <p>828123, Dhanbad</p>
                  <p>Jharkhand</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-primary w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:contact@ietebits.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contact@ietebits.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-primary w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+917909041883"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91-7909041883
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-primary w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+919199791291"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91-9199791291
                </a>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-medium transition-colors glow-blue-sm"
              >
                Get in touch
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} IETE Students&apos; Forum, BIT Sindri. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  )
}

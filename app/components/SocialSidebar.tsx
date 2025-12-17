"use client";

import { useState } from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const socials = [
  { name: "Instagram", icon: Instagram },
  { name: "Twitter", icon: Twitter },
  { name: "Linkedin", icon: Linkedin },
];

function scrambleText(text: string, setText: (val: string) => void) {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iterations = 0;

  const interval = setInterval(() => {
    setText(
      text
        .split("")
        .map((_, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
    );

    if (iterations >= text.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
}

export default function SocialSidebar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("");

  return (
    <div
      className="
        fixed z-50 
        left-3 sm:left-5 md:left-6 
        top-1/2 -translate-y-1/2
        flex flex-col gap-4 sm:gap-5 md:gap-6
      "
    >
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="group flex items-center gap-2 sm:gap-3 cursor-pointer"
            onMouseEnter={() => {
              setHovered(item.name);
              scrambleText(item.name, setDisplayText);
            }}
            onMouseLeave={() => {
              setHovered(null);
              setDisplayText("");
            }}
          >
            <Icon
              className="
                text-white 
                w-4 h-4 sm:w-5 sm:h-5
                opacity-70 group-hover:opacity-100
                transition-opacity duration-200
              "
            />

            <span
              className="
                text-[0.65rem] sm:text-xs md:text-sm
                tracking-widest
                text-white font-medium
                min-w-22 sm:min-w-26 md:min-w-28
                whitespace-nowrap
              "
            >
              {hovered === item.name ? displayText : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}

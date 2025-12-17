"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Info, Mail } from "lucide-react";

const Navbar = () => {
  const [hoverLabel, setHoverLabel] = useState("");

  const items = [
    { icon: <Home size={20} />, label: "Home", route: "/" },
    { icon: <Info size={20} />, label: "About", route: "/about" },
    { icon: <Mail size={20} />, label: "Contact", route: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          relative flex items-center gap-3
          px-4 py-2 rounded-2xl
          border border-white/15
          bg-white/10 backdrop-blur-xl
          shadow-[0_6px_25px_rgba(0,0,0,0.25)]
        "
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="
            w-9 h-9 rounded-xl object-contain
            border border-white/20 p-1 bg-white/10
          "
        />

        <div
          className={`
            absolute -bottom-6 left-1/2 -translate-x-1/2
            text-[0.7rem] tracking-wider text-white/80
            transition-opacity duration-200
            ${hoverLabel ? "opacity-100" : "opacity-0"}
          `}
        >
          {hoverLabel}
        </div>

        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <Link key={index} href={item.route}>
              <button
                onMouseEnter={() => setHoverLabel(item.label)}
                onMouseLeave={() => setHoverLabel("")}
                className="
                  flex items-center justify-center
                  w-9 h-9 rounded-xl
                  border border-white/10 text-white
                  transition-all duration-300
                  hover:border-white/40 hover:bg-white/10
                  hover:scale-110
                "
              >
                {item.icon}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

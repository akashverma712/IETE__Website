"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";

export default function Home() {
  const line1 = "WELCOMES";
  const line2 = "BATCH 2K25";

  const [isClient, setIsClient] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const totalLength = line1.length + line2.length;

    if (step >= totalLength) return;

    const timeout = setTimeout(() => {
      if (step < line1.length) {
        setText1(line1.slice(0, step + 1));
      } else {
        setText2(line2.slice(0, step - line1.length + 1));
      }
      setStep((s) => s + 1);
    }, 85);

    return () => clearTimeout(timeout);
  }, [step, isClient]);

  if (!isClient) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://my.spline.design/3dstars-rvAlBo8Maxlo2VYbHwOHmN2O/"
        className="absolute inset-0 w-full h-full"
      />

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <SocialSidebar />

      <div className="fixed bottom-[12vh] left-1/2 -translate-x-1/2 z-40 text-center w-full px-4">
        <h1
          className="
            font-[var(--font-orbitron)]
            uppercase tracking-[0.35em]
            text-transparent
            text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw]
            leading-none
            select-none
          "
          style={{ WebkitTextStroke: "2px white" }}
        >
          {text1}
        </h1>

        <h2
          className="
            mt-3
            font-[var(--font-orbitron)]
            uppercase tracking-[0.45em]
            text-transparent
            text-[9vw] sm:text-[6.5vw] md:text-[4.5vw] lg:text-[3.5vw]
            leading-none
            select-none
          "
          style={{ WebkitTextStroke: "1.6px white" }}
        >
          {text2}
          <span className="animate-pulse">|</span>
        </h2>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const domains = [
  {
    title: "WEB DEVELOPMENT",
    scramble: "HYPER-SCALABLE V8 OPTIMIZATION",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Orchestrating distributed micro-frontends with low-latency edge computing. Implementing WebAssembly-driven bottlenecks reduction and isomorphic rendering patterns."
  },
  {
    title: "VISUAL EDITING",
    scramble: "TEMPORAL NON-LINEAR WARPING",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Advanced chroma-subsampling and LUT-based volumetric lighting. Utilizing CUDA-accelerated denoising pipelines and multi-threaded rasterization."
  },
  {
    title: "IOT & ROBOTICS",
    scramble: "KINEMATIC SINGULARITY ANALYSIS",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: "Integrating Real-Time Operating Systems (RTOS) with PID-controlled feedback loops. Engineering sensor fusion matrices for IMU telemetry and MQTT mesh networking."
  },
  {
    title: "COMPETITIVE PROGRAMMING",
    scramble: "AMORTIZED COMPLEXITY HEURISTICS",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Decoding NP-Hard paradigms through dynamic programming and segment tree optimization. Engineering bitwise manipulation strategies to achieve O(1) space-time convergence."
  },
  {
    title: "AI/ML",
    scramble: "LATENT SPACE BACKPROPAGATION",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Implementing Transformer-based attention mechanisms and generative adversarial manifolds. Leveraging stochastic gradient descent to navigate high-dimensional distributions."
  },
];

const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+<>?:{}|";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="scramble-font">{display}</span>;
};

const Particles = () => {
  // Particles ko client-side par generate karna zaroori hai hydration error se bachne ke liye
  const [particleList, setParticleList] = useState<any[]>([]);

  useEffect(() => {
    const generated = [...Array(100)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `-${Math.random() * 20}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticleList(generated);
  }, []);

  return (
    <div className="particles-container">
      {particleList.map((p) => (
        <div 
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const CarouselComponent = () => {
  const [items, setItems] = useState(domains);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        if (first) newArr.push(first);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  const handlePrev = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const autoSlide = setInterval(handleNext, 9000);
    return () => clearInterval(autoSlide);
  }, [handleNext]);

  return (
    <div className="carousel">
      <div className="list">
        {items.map((d, i) => (
          <div className="item" key={d.title}>
            <img src={d.image} alt={d.title} className="box-bg-img" />
            <div className="box-overlay" />

            <div className="big-icon-container">{d.icon}</div>
            <div className="micro-icon m-1">{d.icon}</div>
            <div className="micro-icon m-2">{d.icon}</div>
            <div className="micro-icon m-3">{d.icon}</div>
            <div className="micro-icon m-4">{d.icon}</div>
            <div className="micro-icon m-5">{d.icon}</div>

            <div className="content">
              <div className="title-scramble">
                <ScrambleText key={d.title} text={d.scramble} />
              </div>
              <div className="name">{d.title}</div>
              <div className="description">{d.description}</div>
            </div>

            <div className="box-label">
                <h3>{d.title}</h3>
                <div className="label-line" />
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={handlePrev}>PREV</button>
        <button className="next" onClick={handleNext}>NEXT</button>
      </div>
      <div 
        className="timeRunning" 
        style={{ animation: isAnimating ? "runningTime 9s linear forwards" : "none" }}
      />
    </div>
  );
};

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ background: '#000', height: '100vh' }} />;

  return (
    <main className={orbitron.className}>
      <style>{`
        body { margin: 0; background: #000; color: white; overflow: hidden; }
        
        .bg-grid {
          position: fixed; inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: -2;
          pointer-events: none;
        }

        .bg-grid::after {
          content: '';
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 15px 15px;
        }

        .particles-container { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
        .particle {
          position: absolute; background: #fff; border-radius: 50%;
          animation: floatUp linear infinite;
        }
        @keyframes floatUp {
          from { transform: translateY(110vh) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          to { transform: translateY(-10vh) translateX(20px); opacity: 0; }
        }

        .carousel { width: 100vw; height: 100vh; position: relative; }

        .list .item {
          position: absolute; width: 220px; height: 320px;
          top: 70%; left: 70%; transform: translateY(-50%);
          border-radius: 12px; overflow: hidden;
          transition: 0.8s cubic-bezier(0.6, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #0a0a0a;
          cursor: pointer;
        }

        .item:nth-child(n+3):hover .box-bg-img {
            filter: grayscale(0) brightness(1) contrast(1.1);
            transform: scale(1.08);
            opacity: 1;
        }
        .item:nth-child(n+3):hover {
            border-color: rgba(255, 255, 255, 0.6);
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
        }

        .box-bg-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0; transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
          filter: grayscale(1) brightness(0.4);
        }

        .box-overlay {
          position: absolute; inset: 0; 
          background: linear-gradient(to top, rgba(0,0,0,0.9) 5%, transparent 60%);
          opacity: 0; transition: 0.5s;
        }

        .item:nth-child(n+3) .box-bg-img,
        .item:nth-child(n+3) .box-overlay { opacity: 1; }

        .item:nth-child(1), .item:nth-child(2) {
          width: 100%; height: 100%; top: 0; left: 0;
          transform: none; border: none; border-radius: 0;
          background: transparent;
        }
        
        .item:nth-child(2) .box-bg-img {
            opacity: 0.25;
            filter: grayscale(0.4) blur(4px);
            transform: scale(1.1);
            display: block;
        }

        .list .item:nth-child(3) { left: 55%; }
        .list .item:nth-child(4) { left: calc(55% + 240px); }
        .list .item:nth-child(5) { left: calc(55% + 480px); }

        .box-label {
            position: absolute; bottom: 30px; left: 20px; z-index: 5;
            opacity: 0; transition: 0.5s;
        }
        .item:nth-child(n+3) .box-label { opacity: 1; }
        .box-label h3 { font-size: 10px; letter-spacing: 2px; margin: 0; font-weight: 700; color: #fff; }
        .label-line { width: 30px; height: 1px; background: #fff; margin-top: 8px; }

        .content {
          position: relative; z-index: 10; top: 20%; left: 8%;
          max-width: 800px; display: none;
        }
        .item:nth-child(2) .content { display: block; }

        .scramble-font {
            text-shadow: 0 0 10px rgba(255,255,255,0.4);
            font-family: monospace;
        }

        .title-scramble { 
          letter-spacing: 6px; font-size: 13px; color: #fff; 
          margin-bottom: 20px; opacity: 0.8;
        }

        .name { 
          font-size: clamp(40px, 8vw, 100px); font-weight: 900; line-height: 0.8; 
          letter-spacing: -2px; color: #fff; text-transform: uppercase;
          animation: titleReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .description { 
          margin-top: 40px; font-size: 16px; color: rgba(255, 255, 255, 0.6); 
          line-height: 1.6; max-width: 500px;
          border-left: 2px solid #fff; padding-left: 25px;
          animation: descReveal 1s ease-out 0.4s forwards; opacity: 0;
        }

        @keyframes descReveal { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }

        .big-icon-container {
          position: absolute; top: 50%; right: 0%; transform: translateY(-50%);
          width: 55vw; height: 55vw;
          color: rgba(255, 255, 255, 0.12); 
          z-index: 0; display: none;
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
        }
        
        .micro-icon {
          position: absolute; 
          color: rgba(255, 255, 255, 0.18); 
          z-index: 0; display: none;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.1));
        }
        .m-1 { top: 8%; left: 35%; width: 130px; }
        .m-2 { bottom: 15%; right: 3%; width: 190px; }
        .m-3 { top: 45%; right: 42%; width: 90px; }
        .m-4 { top: 65%; left: 12%; width: 150px; }
        .m-5 { top: 12%; right: 15%; width: 100px; }

        .item:nth-child(2) .big-icon-container,
        .item:nth-child(2) .micro-icon { 
            display: block; 
            animation: svgPulse 12s ease-in-out infinite alternate; 
        }

        @keyframes svgPulse {
            0% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            100% { opacity: 0.7; transform: scale(1.1) rotate(12deg); }
        }

        .arrows { 
          position: absolute; bottom: 10%; left: 8%; 
          display: flex; gap: 12px; z-index: 100; 
        }
        .arrows button {
          padding: 12px 20px; border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.7); color: #fff; cursor: pointer; transition: 0.3s;
          font-weight: 700; font-size: 11px; letter-spacing: 2px;
          backdrop-filter: blur(10px);
        }
        .arrows button:hover { background: #fff; color: #000; border-color: #fff; box-shadow: 0 0 15px #fff; }

        .timeRunning { position: absolute; top: 0; left: 0; height: 4px; width: 0%; background: #fff; z-index: 1000; box-shadow: 0 0 10px #fff; }
        @keyframes runningTime { from { width: 0%; } to { width: 100%; } }
      `}</style>

      <div className="bg-grid" />
      <Particles />
      <CarouselComponent />
    </main>
  );
}
import { useRef, useState, useEffect, MouseEvent, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Subtle Mouse Parallax Tracking for Background Aura
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const auraX = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]);
  const auraY = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-25, 25]);

  useEffect(() => {
    const handleWindowMouseMove = (e: globalThis.MouseEvent) => {
      if (isMobile) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, [isMobile, mouseX, mouseY]);

  // Generate deterministic subtle ambient particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: (i * 17 + 8) % 100, // percentage across width
      y: (i * 23 + 12) % 100, // percentage across height
      size: (i % 3) + 1.2, // 1.2px - 3.2px
      duration: 9 + (i % 6) * 2.2, // 9s - 20s
      delay: (i % 5) * 1.5,
      driftX: ((i % 4) - 1.5) * 25,
      opacity: 0.12 + (i % 4) * 0.08, // 0.12 - 0.36
    }));
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Subtle Radial Vignette & Studio Depth Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* 2. Top Overhead Studio Light Beam */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[45rem] w-[85rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(139, 92, 246, 0.15), rgba(91, 33, 182, 0.06), transparent 70%)",
        }}
      />

      {/* 3. Primary Central Ambient Light Field (Morphing & Floating) */}
      <motion.div
        style={{ x: auraX, y: auraY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.65, 0.9, 0.65],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[450px] w-[650px] sm:h-[550px] sm:w-[850px] rounded-full bg-gradient-to-tr from-[#5B21B6]/20 via-[#8B5CF6]/15 to-[#6366F1]/10 blur-[130px]"
      />

      {/* 4. Device Underglow Spot (Anchoring the laptop and phone composition) */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 h-[260px] w-[500px] sm:h-[340px] sm:w-[720px] rounded-full bg-gradient-to-r from-[#8B5CF6]/15 via-[#A855F7]/12 to-[#5B21B6]/15 blur-[90px]"
      />

      {/* 5. Very Faint Atmospheric Floating Light Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: `${p.y + 10}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${p.y + 10}%`, `${p.y - 25}%`],
              x: [`${p.x}vw`, `${p.x + p.driftX * 0.06}vw`],
              opacity: [0, p.opacity, p.opacity * 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="absolute rounded-full bg-[#A855F7] shadow-[0_0_6px_#8B5CF6]"
          />
        ))}
      </div>
    </div>
  );
}

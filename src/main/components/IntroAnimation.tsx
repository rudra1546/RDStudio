import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setComplete(true);
      return;
    }

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setComplete(true);
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const renderLogo = () => (
    <div className="flex items-center gap-3.5 sm:gap-4 select-none whitespace-nowrap">
      <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-accent/15 border border-accent/30 text-accent text-xl sm:text-2xl shadow-[0_0_30px_rgba(139,92,246,0.45)]">
        ◆
      </span>
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F3FF]">
        RD Studio<span className="text-accent">.</span>
      </span>
    </div>
  );

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07070A] pointer-events-none select-none overflow-hidden"
        >
          {/* Subtle Ambient Violet Background Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.6, 0.9, 0],
              scale: [0.8, 1, 1.2, 1.5],
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
            }}
            className="absolute h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-gradient-to-tr from-[#5B21B6]/40 via-[#8B5CF6]/30 to-[#6366F1]/20 blur-[90px]"
          />

          {/* Logo Animation Stage */}
          <div className="relative flex items-center justify-center">
            {/* Left Half of UI Logo */}
            <motion.div
              className="flex items-center justify-center"
              style={{
                clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
              }}
              initial={{ opacity: 0, scale: 0.92, x: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.92, 1, 1, 1.02],
                x: [0, 0, -100, -160],
                filter: ["blur(0px)", "blur(0px)", "blur(2px)", "blur(6px)"],
              }}
              transition={{
                duration: 2.1,
                times: [0, 0.35, 0.7, 1],
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {renderLogo()}
            </motion.div>

            {/* Right Half of UI Logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
              }}
              initial={{ opacity: 0, scale: 0.92, x: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.92, 1, 1, 1.02],
                x: [0, 0, 100, 160],
                filter: ["blur(0px)", "blur(0px)", "blur(2px)", "blur(6px)"],
              }}
              transition={{
                duration: 2.1,
                times: [0, 0.35, 0.7, 1],
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {renderLogo()}
            </motion.div>

            {/* Center Electric Violet Energy Seam */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: [0, 0, 1, 0.8, 0],
                scaleY: [0, 0, 1.2, 1.5, 1.8],
                scaleX: [1, 1, 2, 8, 20],
              }}
              transition={{
                duration: 2.1,
                times: [0, 0.45, 0.65, 0.85, 1],
                ease: "easeOut",
              }}
              className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#A855F7] to-transparent shadow-[0_0_20px_#8B5CF6,0_0_40px_#A855F7,0_0_60px_#6366F1]"
            />

            {/* Radial Light Burst during split */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0, 0.7, 0],
                scale: [0.5, 0.5, 1.8, 2.5],
              }}
              transition={{
                duration: 2.1,
                times: [0, 0.48, 0.75, 1],
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-radial from-[#A855F7]/30 via-[#8B5CF6]/15 to-transparent blur-md pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

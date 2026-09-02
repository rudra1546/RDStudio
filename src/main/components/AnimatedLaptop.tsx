import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Lock, ArrowRight, Menu, Sparkles, Check, ArrowUpRight, Wifi, Battery } from "lucide-react";

import salonShot from "@/assets/black-crown.png";
import spaShot from "@/assets/aura-spa.png";
import cafeShot from "@/assets/brew-haven-shot.png";

export default function AnimatedLaptop() {
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

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 24 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Laptop parallax transforms (main/back device)
  const laptopRotateX = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [3.5, -3.5]);
  const laptopRotateY = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-4, 4]);
  const laptopGlareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);

  // iPhone parallax transforms (foreground device - higher sensitivity & forward tilt)
  const phoneRotateX = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [5.5, -5.5]);
  const phoneRotateY = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-6.5, 6.5]);
  const phoneXParallax = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-8, 8]);
  const phoneYParallax = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto max-w-4xl px-2 sm:px-6 py-6 sm:py-10 perspective-[1500px]"
    >
      {/* Soft Violet Atmospheric Lighting Behind Both Devices */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[85%] max-w-[700px] rounded-full bg-gradient-to-tr from-[#5B21B6]/30 via-[#8B5CF6]/20 to-[#6366F1]/15 blur-[110px] -z-10"
      />

      {/* COMPOSITION CONTAINER: LAPTOP + FOREGROUND IPHONE */}
      <div className="relative mx-auto max-w-[740px]">
        {/* ========================================================= */}
        {/* 1. ANIMATED 3D LAPTOP (MAIN / BACK DEVICE - 15-20% SMALLER) */}
        {/* ========================================================= */}
        <motion.div
          animate={
            isMobile
              ? { y: [-5, 5, -5] }
              : {
                  y: [-8, 8, -8],
                  rotateX: [5, 3, 5],
                  rotateY: [-3.5, -1.5, -3.5],
                }
          }
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            rotateX: laptopRotateX,
            rotateY: laptopRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full transition-transform duration-200 ease-out"
        >
          {/* LAPTOP LID / CHASSIS */}
          <div className="relative mx-auto w-full rounded-[1.25rem] sm:rounded-[1.5rem] border-[2px] border-[#2A273C] bg-gradient-to-b from-[#1C1B2A] via-[#14131F] to-[#0E0D16] p-2.5 sm:p-3.5 shadow-[0_28px_60px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(139,92,246,0.18),inset_0_1px_1px_rgba(245,243,255,0.12)]">
            {/* Top Bezel Camera Dot */}
            <div className="flex items-center justify-center pb-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#353349] ring-2 ring-[#12111C]" />
            </div>

            {/* SCREEN DISPLAY: REAL THE RD STUDIO WEBSITE PREVIEW */}
            <div className="relative overflow-hidden rounded-xl border border-[#262436] bg-[#07070A] shadow-inner aspect-[16/10] select-none">
              {/* Glass Glare Reflection */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-30 opacity-35 mix-blend-overlay"
                style={{
                  background: `linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.08) 45%, transparent 60%)`,
                  backgroundPosition: laptopGlareX,
                }}
              />

              {/* Browser Chrome Header */}
              <div className="flex h-7 sm:h-8 items-center justify-between border-b border-[#1E1D2C] bg-[#0E0E15]/95 px-3 backdrop-blur-md">
                {/* Window Controls */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2 w-2 rounded-full bg-[#10B981]/70" />
                </div>

                {/* URL Pill */}
                <div className="flex items-center gap-1.5 rounded-md border border-[#242236] bg-[#141320] px-2.5 py-0.5 text-[9px] sm:text-[10px] text-[#9692A3]">
                  <Lock className="h-2 w-2 text-[#8B5CF6]" />
                  <span className="font-mono text-[#F5F3FF]">therdstudio.co.in</span>
                </div>

                {/* Available Status */}
                <div className="flex items-center gap-1 text-[9px] text-accent font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="hidden sm:inline">Available for work</span>
                </div>
              </div>

              {/* WEBSITE PREVIEW CONTAINER */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between h-[calc(100%-1.75rem)] sm:h-[calc(100%-2rem)] overflow-hidden bg-gradient-to-b from-[#07070A] via-[#0B0B11] to-[#07070A]">
                {/* Website Navigation Preview */}
                <div className="flex items-center justify-between border-b border-[#24222F]/60 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 border border-accent/40 text-accent text-[10px]">
                      ◆
                    </span>
                    <span className="text-xs font-bold tracking-tight text-[#F5F3FF]">
                      RD Studio<span className="text-accent">.</span>
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#9692A3]">
                    <span className="hover:text-white transition-colors">About</span>
                    <span className="hover:text-white transition-colors">Services</span>
                    <span className="text-accent font-semibold">Work</span>
                    <span className="hover:text-white transition-colors">Pricing</span>
                  </div>

                  <div className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] px-2.5 py-1 text-[9px] font-semibold text-white shadow-sm">
                    Get a quote
                  </div>
                </div>

                {/* Website Hero Section Preview */}
                <div className="my-auto py-1 text-center max-w-md mx-auto">
                  <div className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Freelance Full Stack Developer
                  </div>

                  <h3 className="mt-1.5 text-xs sm:text-base md:text-lg font-bold leading-tight text-[#F5F3FF]">
                    Premium websites designed to{" "}
                    <span className="text-accent">grow your business.</span>
                  </h3>

                  <p className="mt-1 text-[9px] sm:text-[10px] text-[#9692A3] line-clamp-2 max-w-xs mx-auto">
                    Fast, responsive, modern websites that help local businesses build trust and
                    attract customers.
                  </p>

                  <div className="mt-2.5 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[8px] sm:text-[9px] font-semibold text-white shadow-sm">
                      View work
                      <ArrowRight className="h-2 w-2" />
                    </span>
                    <span className="rounded-full border border-[#24222F] bg-[#13131A] px-2.5 py-0.5 text-[8px] sm:text-[9px] font-medium text-[#F5F3FF]">
                      Free quote
                    </span>
                  </div>
                </div>

                {/* Website Project Cards Bar Preview */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { name: "Black Crown", category: "Salon Website", img: salonShot },
                    { name: "Aura Spa", category: "Spa Website", img: spaShot },
                    { name: "Brew Haven", category: "Café Website", img: cafeShot },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="group/card relative overflow-hidden rounded-lg border border-[#24222F] bg-[#13131A]/90 p-1.5 shadow-sm"
                    >
                      <div className="h-9 sm:h-11 w-full rounded overflow-hidden bg-[#07070A]">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="h-full w-full object-cover opacity-80"
                        />
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="text-[8px] sm:text-[9px] font-semibold text-[#F5F3FF] truncate">
                          {p.name}
                        </div>
                        <span className="text-[7px] text-accent font-medium">Demo ↗</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LAPTOP BASE CHASSIS */}
          <div className="relative mx-auto w-[102%] -left-[1%] -mt-1">
            <div className="mx-auto h-2 w-24 sm:w-32 rounded-t-sm bg-gradient-to-r from-[#181726] via-[#2D2B40] to-[#181726] border-t border-[#3B3852]" />
            <div className="h-2.5 sm:h-3.5 w-full rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-r from-[#181726] via-[#2C2A3E] to-[#181726] border-t border-[#3D3A56] shadow-[0_15px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(139,92,246,0.15)] flex items-start justify-center">
              <div className="h-1 w-12 sm:w-16 rounded-full bg-[#0C0B12] shadow-inner" />
            </div>
          </div>

          {/* Laptop Floor Shadow & Underglow */}
          <div className="mx-auto -mt-1 h-7 w-[85%] rounded-full bg-[#8B5CF6]/15 blur-xl pointer-events-none" />
          <div className="mx-auto -mt-5 h-5 w-[65%] rounded-full bg-black/80 blur-md pointer-events-none" />
        </motion.div>

        {/* ========================================================= */}
        {/* 2. FOREGROUND IPHONE DEVICE (MOBILE PREVIEW OF THE WEBSITE) */}
        {/* ========================================================= */}
        <motion.div
          animate={
            isMobile
              ? { y: [4, -5, 4] }
              : {
                  y: [6, -8, 6],
                  rotateX: [6, 4, 6],
                  rotateY: [-6, -2, -6],
                  scale: [1, 1.015, 1],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            rotateX: phoneRotateX,
            rotateY: phoneRotateY,
            x: phoneXParallax,
            y: phoneYParallax,
            transformStyle: "preserve-3d",
          }}
          className="absolute -bottom-4 sm:-bottom-6 -right-1 sm:right-4 md:right-8 z-20 w-[110px] sm:w-[150px] md:w-[185px] transition-transform duration-200 ease-out"
        >
          {/* iPhone Chassis (Dark Matte Titanium with Beveled Edges) */}
          <div className="relative w-full rounded-[1.75rem] sm:rounded-[2.4rem] border-[2px] border-[#2E2B42] bg-gradient-to-b from-[#1C1B2B] via-[#141320] to-[#0E0D16] p-1.5 sm:p-2 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.95),0_0_25px_rgba(139,92,246,0.22),inset_0_1px_1px_rgba(245,243,255,0.15)]">
            {/* Left Side Buttons (Volume) */}
            <div className="absolute -left-[3px] top-12 h-6 w-[2px] rounded-l bg-[#34314A]" />
            <div className="absolute -left-[3px] top-20 h-6 w-[2px] rounded-l bg-[#34314A]" />

            {/* Right Side Button (Power) */}
            <div className="absolute -right-[3px] top-14 h-8 w-[2px] rounded-r bg-[#34314A]" />

            {/* iPhone Glass Screen */}
            <div className="relative overflow-hidden rounded-[1.4rem] sm:rounded-[2rem] border border-[#242236] bg-[#07070A] aspect-[9/19] flex flex-col justify-between select-none">
              {/* Top Dynamic Island Notch */}
              <div className="relative z-30 pt-1 px-2.5 flex items-center justify-between text-[7px] text-[#9692A3]">
                <span className="font-semibold text-white">9:41</span>
                {/* Pill Notch */}
                <div className="h-3 w-10 sm:w-14 rounded-full bg-black border border-[#1A1926] mx-auto flex items-center justify-end px-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#12111D]" />
                </div>
                <div className="flex items-center gap-1 text-[6px]">
                  <Wifi className="h-2 w-2 text-white" />
                  <Battery className="h-2 w-2 text-white" />
                </div>
              </div>

              {/* Mobile Website Header */}
              <div className="px-2 pt-1 pb-1 flex items-center justify-between border-b border-[#24222F]/50">
                <div className="flex items-center gap-1">
                  <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent/20 text-accent text-[7px]">
                    ◆
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white">
                    RD Studio<span className="text-accent">.</span>
                  </span>
                </div>
                <Menu className="h-2.5 w-2.5 text-[#9692A3]" />
              </div>

              {/* Mobile Website Content */}
              <div className="px-2 py-1 flex-1 flex flex-col justify-between">
                {/* Mobile Hero */}
                <div className="text-center pt-1">
                  <span className="inline-block rounded-full bg-accent/15 px-1.5 py-0.2 text-[6px] sm:text-[7px] font-semibold text-accent">
                    Freelance Dev
                  </span>
                  <div className="mt-1 text-[7px] sm:text-[9px] font-bold leading-tight text-white">
                    Websites that <span className="text-accent">grow business.</span>
                  </div>
                  <div className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-2 py-0.5 text-[6px] font-bold text-white shadow-sm">
                    View work
                  </div>
                </div>

                {/* Mobile Featured Project Card */}
                <div className="rounded-lg border border-[#24222F] bg-[#13131A] p-1 shadow-sm">
                  <div className="h-10 sm:h-14 w-full rounded overflow-hidden bg-black">
                    <img
                      src={salonShot}
                      alt="Black Crown"
                      className="h-full w-full object-cover opacity-85"
                    />
                  </div>
                  <div className="mt-0.5 flex items-center justify-between text-[6px] sm:text-[7px]">
                    <span className="font-semibold text-white">Black Crown</span>
                    <span className="text-accent font-medium">Salon</span>
                  </div>
                </div>

                {/* Mobile Quick Feature Pill */}
                <div className="rounded-md border border-[#24222F] bg-[#0E0E15] p-1 flex items-center justify-between text-[6px]">
                  <span className="text-[#9692A3]">Performance</span>
                  <span className="text-emerald-400 font-bold">100% Score</span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="pb-1 pt-0.5 flex justify-center">
                <div className="h-0.5 w-10 rounded-full bg-white/40" />
              </div>
            </div>
          </div>

          {/* iPhone Floor Shadow */}
          <div className="mx-auto -mt-2 h-5 w-[80%] rounded-full bg-[#8B5CF6]/20 blur-md pointer-events-none" />
          <div className="mx-auto -mt-4 h-4 w-[60%] rounded-full bg-black/80 blur-sm pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}

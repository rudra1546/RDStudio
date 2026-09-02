import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code,
  Globe,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  Lock,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";

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

  const springConfig = { stiffness: 180, damping: 22 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateXParallax = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [4, -4]);
  const rotateYParallax = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-5, 5]);
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);

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
      className="relative mx-auto max-w-5xl px-2 sm:px-4 py-8 perspective-[1400px]"
    >
      {/* Ambient Behind-the-Laptop Glowing Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[90%] max-w-[800px] rounded-full bg-gradient-to-tr from-[#5B21B6]/25 via-[#8B5CF6]/20 to-[#6366F1]/15 blur-[100px] -z-10"
      />

      {/* Floating 3D Laptop Root Container */}
      <motion.div
        animate={
          isMobile
            ? { y: [-6, 6, -6] }
            : {
                y: [-10, 10, -10],
                rotateX: [6, 4, 6],
                rotateY: [-4, -2, -4],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          rotateX: rotateXParallax,
          rotateY: rotateYParallax,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto w-full transition-transform duration-200 ease-out"
      >
        {/* LAPTOP LID / SCREEN */}
        <div className="relative mx-auto w-full rounded-[1.25rem] sm:rounded-[1.75rem] border-[2px] border-[#2A273C] bg-gradient-to-b from-[#1C1B2A] via-[#14131F] to-[#0E0D16] p-2.5 sm:p-4 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95),0_0_35px_rgba(139,92,246,0.18),inset_0_1px_1px_rgba(245,243,255,0.12)]">
          {/* Top Bezel Camera & Sensor */}
          <div className="flex items-center justify-center pb-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#353349] ring-2 ring-[#12111C]" />
          </div>

          {/* INNER SCREEN DISPLAY (Dark Glass UI) */}
          <div className="relative overflow-hidden rounded-xl border border-[#262436] bg-[#0A0A0F] shadow-inner aspect-[16/10] sm:aspect-[16/9.5]">
            {/* Glass Glare Reflection Overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-30 opacity-40 mix-blend-overlay"
              style={{
                background: `linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.08) 45%, transparent 60%)`,
                backgroundPosition: glareX,
              }}
            />

            {/* Screen Top Bar / Browser Shell */}
            <div className="flex h-8 sm:h-9 items-center justify-between border-b border-[#1E1D2C] bg-[#0E0E15]/90 px-3 sm:px-4 backdrop-blur-md">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60 border border-[#EF4444]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60 border border-[#F59E0B]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/60 border border-[#10B981]/40" />
              </div>

              {/* URL Address Pill */}
              <div className="flex items-center gap-1.5 rounded-md border border-[#252336] bg-[#141320] px-3 py-0.5 text-[10px] sm:text-xs text-[#9692A3]">
                <Lock className="h-2.5 w-2.5 text-[#8B5CF6]" />
                <span className="font-mono text-[#F5F3FF]">therdstudio.co.in</span>
                <span className="text-[#8B5CF6]">/live-preview</span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="hidden sm:inline">Operational</span>
              </div>
            </div>

            {/* SCREEN BODY / FUTURISTIC STUDIO INTERFACE */}
            <div className="p-3 sm:p-5 md:p-6 grid grid-cols-12 gap-3 sm:gap-4 h-[calc(100%-2rem)] sm:h-[calc(100%-2.25rem)] overflow-hidden">
              {/* Left Column: Live Project & Metrics Overview */}
              <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-3">
                {/* Brand Header Banner */}
                <div className="rounded-lg border border-[#242236] bg-gradient-to-r from-[#171626] to-[#12111C] p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border border-accent/40 text-accent text-xs">
                        ◆
                      </span>
                      <span className="text-xs sm:text-sm font-bold tracking-tight text-[#F5F3FF]">
                        RD Studio Digital Core
                      </span>
                    </div>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent border border-accent/30">
                      v2.4 Live
                    </span>
                  </div>

                  <p className="mt-1.5 text-[11px] sm:text-xs text-[#9692A3] line-clamp-1">
                    Engineering high-conversion digital experiences for ambitious businesses.
                  </p>
                </div>

                {/* Interactive Project Preview Tiles */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  {[
                    {
                      name: "Black Crown",
                      type: "Salon & Spa",
                      stat: "100 Score",
                      gradient: "from-violet-900/40 to-[#12111D]",
                    },
                    {
                      name: "Aura Spa",
                      type: "Wellness",
                      stat: "+320% Bookings",
                      gradient: "from-indigo-900/40 to-[#12111D]",
                    },
                    {
                      name: "Brew Haven",
                      type: "Artisan Café",
                      stat: "0.4s Speed",
                      gradient: "from-purple-900/40 to-[#12111D]",
                    },
                  ].map((proj) => (
                    <div
                      key={proj.name}
                      className={`group/tile rounded-lg border border-[#242236] bg-gradient-to-b ${proj.gradient} p-2 sm:p-2.5 hover:border-accent/50 transition-all duration-300`}
                    >
                      <div className="text-[10px] sm:text-[11px] font-semibold text-[#F5F3FF] truncate">
                        {proj.name}
                      </div>
                      <div className="text-[9px] text-[#9692A3] truncate">{proj.type}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-accent">
                        <CheckCircle2 className="h-2.5 w-2.5" />
                        {proj.stat}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conversion & Web Vitals Metric Bar */}
                <div className="rounded-lg border border-[#242236] bg-[#12111C]/90 p-2.5 sm:p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#F5F3FF]">
                        Core Web Vitals
                      </div>
                      <div className="text-[9px] text-emerald-400">99.8% Perfect Score</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <div className="text-[11px] font-bold text-[#F5F3FF]">0.38s</div>
                      <div className="text-[9px] text-[#9692A3]">Load Time</div>
                    </div>
                    <div className="h-6 w-px bg-[#262438]" />
                    <div>
                      <div className="text-[11px] font-bold text-accent">100%</div>
                      <div className="text-[9px] text-[#9692A3]">Mobile SEO</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Code Terminal & Stack Radar */}
              <div className="hidden lg:flex col-span-5 flex-col justify-between gap-3">
                {/* Live Code Terminal Panel */}
                <div className="h-full rounded-lg border border-[#242236] bg-[#0C0C14] p-3 font-mono text-[10px] sm:text-[11px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-[#1E1D2D] pb-1.5 text-[#9692A3] text-[9px]">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="h-3 w-3 text-accent" />
                      <span>StudioEngine.tsx</span>
                    </div>
                    <span className="text-accent/80">TypeScript</span>
                  </div>

                  <div className="space-y-1.5 py-2 text-[#9692A3]">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-indigo-300">experience</span> = {"{"}
                    </p>
                    <p className="pl-3">
                      <span className="text-slate-400">design:</span>{" "}
                      <span className="text-emerald-300">"bespoke"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-slate-400">speed:</span>{" "}
                      <span className="text-emerald-300">"ultra-fast"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-slate-400">seo:</span>{" "}
                      <span className="text-accent">"optimized"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-slate-400">status:</span>{" "}
                      <span className="text-emerald-400">"readyToDeploy"</span>
                    </p>
                    <p>{"};"}</p>
                  </div>

                  {/* Deploy Pulse Line */}
                  <div className="flex items-center justify-between rounded bg-[#141322] px-2 py-1 text-[9px]">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Build Passed
                    </span>
                    <span className="text-[#9692A3]">0 errors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAPTOP BASE CHASSIS (Bottom Deck & Trackpad) */}
        <div className="relative mx-auto w-[102%] -left-[1%] -mt-1.5">
          {/* Hinge Connection */}
          <div className="mx-auto h-2 w-28 sm:w-36 rounded-t-sm bg-gradient-to-r from-[#181726] via-[#2D2B40] to-[#181726] border-t border-[#3B3852]" />

          {/* Aluminum Lip & Front Bevel */}
          <div className="h-3 sm:h-4 w-full rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-r from-[#181726] via-[#2C2A3E] to-[#181726] border-t border-[#3D3A56] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(139,92,246,0.15)] flex items-start justify-center">
            {/* Center Opening Notch */}
            <div className="h-1 sm:h-1.5 w-14 sm:w-20 rounded-full bg-[#0C0B12] shadow-inner" />
          </div>
        </div>

        {/* Ambient Floor Shadow & Underglow */}
        <div className="mx-auto -mt-1 h-8 w-[88%] rounded-full bg-[#8B5CF6]/15 blur-xl pointer-events-none" />
        <div className="mx-auto -mt-6 h-6 w-[70%] rounded-full bg-black/80 blur-lg pointer-events-none" />
      </motion.div>
    </div>
  );
}

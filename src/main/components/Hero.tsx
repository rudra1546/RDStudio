import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import AnimatedLaptop from "./AnimatedLaptop";
import HeroBackground from "./HeroBackground";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Coordinated entrance sequence (starts seamlessly after opening intro finishes at ~2.1s)
  const baseDelay = prefersReducedMotion ? 0 : 2.1;
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <HeroBackground />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* 1. Small label / eyebrow (Masked Reveal) */}
          <div className="overflow-hidden flex justify-center py-1">
            <motion.div
              initial={
                prefersReducedMotion
                  ? { y: 0, opacity: 1 }
                  : { y: "120%", opacity: 0, filter: "blur(4px)" }
              }
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: baseDelay + 0.05, ease: easeCurve }}
              className="flex justify-center"
            >
              <span className="eyebrow justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Freelance Full Stack Developer · Available for projects
              </span>
            </motion.div>
          </div>

          {/* 2. Main Headline (Clipped / Masked Line-by-Line Reveal) */}
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
            {/* Line 1 */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={
                  prefersReducedMotion
                    ? { y: 0, opacity: 1 }
                    : { y: "115%", opacity: 0, filter: "blur(6px)" }
                }
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: baseDelay + 0.18, ease: easeCurve }}
                className="inline-block"
              >
                Premium websites designed to
              </motion.span>
            </div>

            {/* Line 2 with Clean Violet Highlight Word */}
            <div className="overflow-hidden py-1">
              <motion.span
                initial={
                  prefersReducedMotion
                    ? { y: 0, opacity: 1 }
                    : { y: "115%", opacity: 0, filter: "blur(6px)" }
                }
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: baseDelay + 0.34, ease: easeCurve }}
                className="inline-block"
              >
                <span
                  className="text-accent"
                  style={{ textShadow: "0 0 18px rgba(139, 92, 246, 0.18)" }}
                >
                  grow
                </span>{" "}
                your business.
              </motion.span>
            </div>
          </h1>

          {/* 3. Description (Masked Reveal) */}
          <div className="overflow-hidden mt-6">
            <motion.p
              initial={
                prefersReducedMotion
                  ? { y: 0, opacity: 1 }
                  : { y: "110%", opacity: 0, filter: "blur(4px)" }
              }
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: baseDelay + 0.52, ease: easeCurve }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              I design fast, responsive, modern websites that help local businesses build trust,
              attract more customers, and increase bookings.
            </motion.p>
          </div>

          {/* 4. CTA buttons with Entrance & Sheen Sweep */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: 22, opacity: 0, scale: 0.96 }
            }
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: baseDelay + 0.7, ease: easeCurve }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/projects" className="btn-primary relative overflow-hidden group">
              {/* Subtle entrance sheen sweep across primary button */}
              {!prefersReducedMotion && (
                <motion.span
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ duration: 0.9, delay: baseDelay + 1.05, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              )}
              View my work
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/contact" className="btn-ghost">
              Get a free quote
            </Link>
          </motion.div>
        </div>

        {/* 5. Device Showcase (Laptop + iPhone) */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.0,
            delay: baseDelay + 0.75,
            ease: easeCurve,
          }}
          className="mt-10 sm:mt-14 md:mt-16"
        >
          <AnimatedLaptop />
        </motion.div>

        {/* 6. Stats Metrics Grid */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: baseDelay + 0.95,
            ease: easeCurve,
          }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Premium", label: "Design" },
              { title: "Mobile", label: "Optimized" },
              { title: "SEO", label: "Ready" },
              { title: "Fast", label: "Delivery" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight">{item.title}</div>

                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

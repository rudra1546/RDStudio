import { Check, Headphones, Palette, Rocket, Search, Smartphone, Sparkles } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const bullets = [
  "Custom design tailored to your brand",
  "Mobile-first, pixel-perfect development",
  "Blazing performance & Core Web Vitals",
  "Professional UI/UX with clear hierarchy",
  "Fast delivery in days, not months",
  "Reliable ongoing support after launch",
];

const whys = [
  {
    icon: Palette,
    title: "Custom Design",
    desc: "Handcrafted, on-brand — never a template.",
  },
  {
    icon: Sparkles,
    title: "Premium UI/UX",
    desc: "Interfaces that feel intuitive and effortless.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Most projects live in under two weeks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    desc: "Flawless on every screen size.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    desc: "Built on solid technical foundations.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "I stay involved long after launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        {/* Main About Row */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="About"
            title="An independent developer building websites that actually convert."
            desc="I partner with local businesses to ship modern websites that look premium, load in a blink, and turn visitors into bookings. Every project is handcrafted — no cheap templates, no fluff."
          />

          <Reveal delay={1}>
            <ul className="grid sm:grid-cols-2 gap-4">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-xl border border-border bg-gradient-to-b from-[#171622] to-[#13131A] p-4 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(245,243,255,0.06)] hover:border-accent/40 hover:shadow-[0_8px_20px_-4px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent border border-accent/20">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Why work with me subsection */}
        <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-border/80">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Why work with me
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F3FF]">
                A calm, senior process from first call to launch.
              </h3>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whys.map((why, index) => (
              <Reveal key={why.title} delay={index}>
                <SpotlightCard enableTilt={true} className="p-7 h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                    <why.icon className="h-5 w-5" />
                  </span>

                  <h4 className="mt-5 text-lg font-semibold text-[#F5F3FF]">{why.title}</h4>

                  <p className="mt-2 text-sm text-[#9692A3] leading-relaxed">{why.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

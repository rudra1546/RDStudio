import { Check } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  const bullets = [
    "Custom design tailored to your brand",
    "Mobile-first, pixel-perfect development",
    "Blazing performance & Core Web Vitals",
    "Professional UI/UX with clear hierarchy",
    "Fast delivery in days, not months",
    "Reliable ongoing support after launch",
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                className="flex items-start gap-3 rounded-xl border border-border bg-subtle/60 p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>

                <span className="text-sm font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
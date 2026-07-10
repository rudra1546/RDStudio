import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most business websites are ready in 5–10 days. Simple landing pages can go live in as little as 3 days.",
  },
  {
    q: "Can I request changes?",
    a: "Absolutely. Every package includes revision rounds, and I share progress in Figma so you can steer the design early.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Yes. Every project is mobile-first — designed and tested on real devices for a flawless experience.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. All packages include post-launch guidance, and I offer affordable monthly maintenance plans if you need ongoing help.",
  },
  {
    q: "Can you redesign my current website?",
    a: "Definitely. I offer full redesigns that modernize your look, improve speed, and lift conversions — usually without changing your domain.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers to the things clients ask most."
            desc="Still curious? Message me directly — I usually reply within a few hours."
          />
        </div>

        <div className="lg:col-span-3">
          <div className="divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <Reveal key={faq.q} delay={index}>
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  >
                    <span className="text-base md:text-lg font-semibold group-hover:text-accent transition-colors">
                      {faq.q}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 mt-1 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : "text-muted-foreground"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground max-w-prose">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

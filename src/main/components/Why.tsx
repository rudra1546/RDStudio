import { Headphones, Palette, Rocket, Search, Smartphone, Sparkles } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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

export default function Why() {
  return (
    <section className="py-24 md:py-32 bg-subtle/60 border-y border-border">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why work with me"
          title="A calm, senior process from first call to launch."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whys.map((why, index) => (
            <Reveal key={why.title} delay={index}>
              <div className="card-elegant p-7 h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <why.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold">{why.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">{why.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

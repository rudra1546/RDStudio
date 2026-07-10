import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import salonShot from "@/assets/black-crown.png";
import gymShot from "@/assets/Titan-forge.png";
import spaShot from "@/assets/aura-spa.png";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Black Crown",
    category: "Salon Website",
    image: salonShot,
    features: ["Modern UI", "Online Booking", "WhatsApp Integration", "Fully Responsive"],
    demo: "https://salon-neon-rho.vercel.app/",
  },
  {
    name: "Aura Spa & Wellness",
    category: "Spa Website",
    image: spaShot,
    features: ["Modern UI", "Online Booking", "WhatsApp Integration", "Fully Responsive"],
    demo: "https://aura-spa-design-mauve.vercel.app/",
  },
  {
    name: "Titan Forge",
    category: "Gym Website",
    image: gymShot,
    features: ["Membership Plans", "Trainer Profiles", "Contact Forms", "Mobile Optimized"],
    demo: "https://titan-forge-livid.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-subtle/60 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Real websites, real results."
            desc="A closer look at recent projects designed and built end-to-end."
          />

          <Reveal delay={1}>
            <a href="#contact" className="btn-ghost">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index}>
              <article className="group card-elegant overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="relative lg:col-span-3 overflow-hidden bg-background">
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.category}`}
                      width={1600}
                      height={1100}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
                    <span className="eyebrow">{project.category}</span>

                    <h3 className="mt-3 text-2xl md:text-3xl font-bold">{project.name}</h3>

                    <ul className="mt-6 space-y-2.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Check className="h-3 w-3" />
                          </span>

                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-sm !py-2.5 !px-5"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <a href="#contact" className="btn-ghost text-sm !py-2.5 !px-5">
                        Get similar website
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

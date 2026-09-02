import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarCheck,
  Globe,
  LifeBuoy,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Trustworthy, modern sites that establish your brand and drive inquiries.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-converting single pages built for campaigns and product launches.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Websites",
    desc: "Frictionless online booking that fills your calendar around the clock.",
  },
  {
    icon: Sparkles,
    title: "Portfolio Websites",
    desc: "Elegant showcases for creatives, studios, and independent professionals.",
  },
  {
    icon: Palette,
    title: "Website Redesign",
    desc: "Refresh your existing site with modern design, speed, and clarity.",
  },
  {
    icon: LifeBuoy,
    title: "Website Maintenance",
    desc: "Updates, backups, and improvements — so your site keeps working hard.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-subtle/60 border-y border-border">
      <div className="container-x">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to launch a premium website."
          desc="From strategy to launch — one developer, end-to-end."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index}>
              <SpotlightCard enableTilt={true} className="group h-full p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20 transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(139,92,246,0.3)]">
                  <service.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

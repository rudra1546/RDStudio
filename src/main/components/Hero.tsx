import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AnimatedLaptop from "./AnimatedLaptop";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[80rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139, 92, 246, 0.14), rgba(99, 102, 241, 0.05), transparent)",
        }}
      />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Freelance Full Stack Developer · Available for projects
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Premium websites designed to
              <span className="relative whitespace-nowrap">
                {" "}
                grow{" "}
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-[#8B5CF6]/20" />
              </span>
              your business.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I design fast, responsive, modern websites that help local businesses build trust,
              attract more customers, and increase bookings.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/projects" className="btn-primary">
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/contact" className="btn-ghost">
                Get a free quote
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedLaptop />
        </Reveal>

        <Reveal delay={3} className="mt-20">
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
        </Reveal>
      </div>
    </section>
  );
}

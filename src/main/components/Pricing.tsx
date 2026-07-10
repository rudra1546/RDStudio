import { ArrowRight, Check } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const plans = [
  {
    name: "Starter",
    price: "₹5,999",
    tagline: "For simple, single-page sites.",
    features: [
      "1-page responsive website",
      "Modern design",
      "Contact form",
      "WhatsApp button",
      "Basic SEO setup",
      "Delivered in 3–5 days",
    ],
  },
  {
    name: "Business",
    price: "₹8,999 – ₹11,999",
    tagline: "For growing local businesses.",
    features: [
      "Up to 5 pages",
      "Custom modern UI",
      "Online booking / forms",
      "WhatsApp + Google Maps",
      "SEO + speed optimized",
      "Delivered in 5–8 days",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "₹14,999+",
    tagline: "For businesses that need a fully customized website.",
    features: [
      "Unlimited pages",
      "Advanced custom design",
      "Booking, blog, CMS",
      "Advanced SEO",
      "Priority support",
      "1 month free maintenance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent packages. No surprises."
          desc="Pick the package that fits — every plan includes premium design, mobile optimization, and post-launch guidance."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index}>
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-foreground text-background border-foreground shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] md:-translate-y-3"
                    : "card-elegant"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p
                  className={`mt-1 text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 text-4xl font-bold tracking-tight">{plan.price}</div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Note: Domain and hosting charges are not included. Domain purchase and hosting setup will
          be provided separately based on client requirements.
        </div>
      </div>
    </section>
  );
}

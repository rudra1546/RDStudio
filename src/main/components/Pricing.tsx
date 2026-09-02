import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

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
    price: "₹7,999 – ₹11,999",
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
    price: "₹11,999+",
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
              <SpotlightCard
                isPopular={plan.popular}
                enableTilt={true}
                className={`h-full p-8 ${plan.popular ? "md:-translate-y-3" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-6 text-4xl font-bold tracking-tight">{plan.price}</div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "btn-primary shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                      : "btn-ghost"
                  }`}
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SpotlightCard>
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

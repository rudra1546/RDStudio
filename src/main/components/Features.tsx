import {
  CalendarCheck,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: Smartphone, title: "Mobile Responsive" },
  { icon: Zap, title: "Fast Loading" },
  { icon: MessageCircle, title: "WhatsApp Integration" },
  { icon: MapPin, title: "Google Maps" },
  { icon: Mail, title: "Contact Forms" },
  { icon: CalendarCheck, title: "Online Booking" },
  { icon: Search, title: "SEO Ready" },
  { icon: ShieldCheck, title: "SSL Security" },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What's included"
          title="Every website ships with premium essentials."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index}>
              <div className="card-elegant p-6 flex flex-col items-start gap-4 h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-5 w-5" />
                </span>

                <span className="text-sm font-semibold">
                  {feature.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
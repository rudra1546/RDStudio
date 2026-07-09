import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Field from "./Field";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_cucvjm5",
        "template_45pz0fo",
        form.current,
        {
          publicKey: "5FT4Q45WvQqpHvAiy",
        }
      )
      .then(
        () => {
          alert("Thanks! I'll be in touch shortly.");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-subtle/60 border-y border-border"
    >
      <div className="container-x grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something your customers remember."
            desc="Tell me about your business and what you need. I'll get back within 24 hours with next steps and an honest quote."
          />

          <div className="mt-8 space-y-4">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 94092 34651",
                href: "tel:+919409234651",
              },
              {
                icon: Mail,
                label: "Email",
                value: "rudra15406@gmail.com",
                href: "mailto:rudra15406@gmail.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat on WhatsApp",
                href: "https://wa.me/919409234651",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 hover:border-foreground transition-colors"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background group-hover:bg-accent transition-colors">
                  <contact.icon className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {contact.label}
                  </div>

                  <div className="font-semibold">
                    {contact.value}
                  </div>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <Reveal delay={1} className="lg:col-span-3">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your name"
                name="name"
                placeholder="Jane Doe"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />

              <Field
                label="Business"
                name="business"
                placeholder="Your business"
              />

              <Field
                label="Budget"
                name="budget"
                placeholder="e.g. ₹10,000"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tell me about your project
              </label>

              <textarea
                required
                rows={5}
                name="message"
                placeholder="A short description of your business, goals, and timeline."
                className="mt-2 w-full rounded-xl border border-input bg-subtle/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-muted-foreground">
                No spam. Your information stays private.
              </p>

              <button type="submit" className="btn-primary">
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>

  );
}
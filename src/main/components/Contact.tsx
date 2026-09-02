import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Field from "./Field";
import GreetingAnimation from "./Anime";
export default function Contact() {
  type Message = {
    type: "success" | "error";
    text: string;
  };
  const [message, setMessage] = useState<Message | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_cucvjm5", "template_45pz0fo", form.current, {
        publicKey: "5FT4Q45WvQqpHvAiy",
      })
      .then(
        () => {
          setPopupType("success");
          setSubmitted(true);

          setTimeout(() => {
            setSubmitted(false);
            setMessage(null);
          }, 3000);
        },

        (error) => {
          console.log(error.text);

          setPopupType("error");
          setSubmitted(true);

          setTimeout(() => {
            setSubmitted(false);
            setMessage(null);
          }, 3000);
        },
      );
  };
  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-subtle/60 border-y border-border">
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
                  value: "rudra@therdstudio.co.in",
                  href: "mailto:rudra@therdstudio.co.in",
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
                  className="group flex items-center gap-4 rounded-xl border border-border bg-gradient-to-b from-[#171622] to-[#13131A] p-4 hover:border-accent hover:shadow-[0_8px_24px_-4px_rgba(139,92,246,0.25),inset_0_1px_1px_rgba(245,243,255,0.08)] transition-all duration-300"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                    <contact.icon className="h-5 w-5" />
                  </span>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </div>

                    <div className="font-semibold">{contact.value}</div>
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
              className="rounded-2xl border border-border bg-gradient-to-b from-[#171622]/95 via-[#13131A] to-[#0F0E17] p-6 md:p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(245,243,255,0.08)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" placeholder="Jane Doe" required />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />

                <Field label="Business" name="business" placeholder="Your business" />

                <Field label="Budget" name="budget" placeholder="e.g. ₹10,000" />
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
                  className="mt-2 w-full rounded-xl border border-input bg-muted px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
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
      <GreetingAnimation show={submitted} type={popupType} />
    </>
  );
}

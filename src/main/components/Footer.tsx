import FooterCol from "./FooterCol";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                ◆
              </span>

              <span>
                RD Studio<span className="text-accent">.</span>
              </span>
            </a>

            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium websites for ambitious local businesses. Designed and built by one developer
              who cares.
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              { label: "Home", href: "#top" },
              { label: "About", href: "#about" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          <FooterCol
            title="Services"
            items={[
              { label: "Business Websites", href: "#services" },
              { label: "Landing Pages", href: "#services" },
              { label: "Booking Websites", href: "#services" },
              { label: "Redesigns", href: "#services" },
            ]}
          />

          <FooterCol
            title="Contact"
            items={[
              {
                label: "rudra15406@gmail.com",
                href: "mailto:rudra15406@gmail.com",
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/919409234651",
              },
              {
                label: "Instagram",
                href: "#",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/rudra1546",
              },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} RD Studio. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="/terms&conditions.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </div>


          <span>Handcrafted with care.</span>
        </div>
      </div>
    </footer>
  );
}

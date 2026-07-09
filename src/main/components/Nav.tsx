import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { navLinks } from "../data/navLinks";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
            ◆
          </span>

          <span>
            RD Studio<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
            Get a free quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
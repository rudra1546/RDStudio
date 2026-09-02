import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          ? "backdrop-blur-xl bg-background/85 border-b border-border shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 border border-accent/30 text-accent text-sm shadow-sm">
            ◆
          </span>

          <span>
            RD Studio<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:transition-transform after:duration-300 ${
                  isActive
                    ? "text-accent font-semibold after:bg-accent after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:bg-accent after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm !py-2.5 !px-5">
            Get a free quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-[#0D0D12]/98 backdrop-blur-xl shadow-2xl">
          <div className="container-x py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base transition-colors ${
                    isActive
                      ? "font-semibold text-foreground pl-2 border-l-2 border-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

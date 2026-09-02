import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import IntroAnimation from "./IntroAnimation";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      {/* Subtle Atmospheric Background Ambient Lighting */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#5B21B6]/10 blur-[150px] -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[#8B5CF6]/8 blur-[180px] -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#6366F1]/7 blur-[160px] -z-10"
      />

      <IntroAnimation />
      <ScrollToTop />
      <Nav />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PortfolioSection from "./components/PortfolioSection";
import Pricing from "./components/Pricing";
import Services from "./components/Service";
import Why from "./components/Why";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <PortfolioSection />
        <Pricing />
        <Why />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service";
import Features from "../components/Features";
import PortfolioSection from "../components/PortfolioSection";
import Pricing from "../components/Pricing";
import Why from "../components/Why";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <PortfolioSection />
      <Pricing />
      <Why />
      <FAQ />
      <Contact />
    </>
  );
}

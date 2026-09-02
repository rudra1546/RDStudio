import PortfolioSection from "../components/PortfolioSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PortfolioSection />
      <section className="py-20 bg-background border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Want a website like these?</h2>
            <p className="mt-4 text-muted-foreground">
              Let's create a custom, high-converting website tailored to your brand.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

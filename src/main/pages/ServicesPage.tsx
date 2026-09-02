import Services from "../components/Service";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Services />
      <Features />
      <section className="py-20 bg-subtle/60 border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Have a custom requirement?</h2>
            <p className="mt-4 text-muted-foreground">
              Every project is tailored to your business needs and goals.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn-primary">
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="btn-ghost">
                View packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

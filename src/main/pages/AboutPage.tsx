import About from "../components/About";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <About />

      <section className="py-20 bg-background border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to start your project?</h2>
            <p className="mt-4 text-muted-foreground">
              Let's build a website that sets your business apart.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

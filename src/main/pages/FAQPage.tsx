import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function FAQPage() {
  return (
    <div className="pt-16 md:pt-20">
      <FAQ />
      <section className="py-20 bg-subtle/60 border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Have more questions?</h2>
            <p className="mt-4 text-muted-foreground">
              I'm always happy to talk through your ideas and specific business requirements.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Send a message
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

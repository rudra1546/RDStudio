import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./main/components/Layout";
import HomePage from "./main/pages/HomePage";
import AboutPage from "./main/pages/AboutPage";
import ServicesPage from "./main/pages/ServicesPage";
import ProjectsPage from "./main/pages/ProjectsPage";
import PricingPage from "./main/pages/PricingPage";
import FAQPage from "./main/pages/FAQPage";
import ContactPage from "./main/pages/ContactPage";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

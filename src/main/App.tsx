import PortfolioPage from "./PortfolioPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <PortfolioPage />
      <Analytics />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "@/main/PortfolioPage";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

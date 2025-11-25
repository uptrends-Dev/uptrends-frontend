import React from "react";
import { PortfolioSection } from "@/components/PortfolioSection";

export const metadata = {
  title: "Portfolio — Uptrends Solutions",
  description:
    "See results and reinventions across Web UI, Media Production, and Branding.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioSection />
    </main>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { PortfolioSection } from "@/components/PortfolioSection";
import { FloatingWords } from "@/components/FloatingWords";
import { Badges } from "@/components/Badges";
import { LogoCarousel } from "@/components/LogoCarousel";
import { FinalCTA } from "@/components/FinalCTA";
import React from "react";

export const metadata: Metadata = {
  title: "Uptrends Solutions — Creative Branding & Digital Growth Platforms",
  description:
    "Red Sea-born creative agency crafting brand experiences and conversion-driven digital platforms across Egypt, GCC, and Europe. Book a free strategy call.",
  openGraph: {
    title: "Uptrends Solutions",
    description:
      "Creative branding, media production & high-converting digital platforms (Egypt, GCC, EU).",
    url: "https://example.com/",
    siteName: "Uptrends Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptrends Solutions",
    description: "Creative branding, media & digital growth platforms.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uptrends Solutions",
  url: "https://example.com/",
  description:
    "Creative branding, media production & digital growth platforms across Egypt, GCC & Europe.",
  logo: "https://example.com/logo.png",
  sameAs: [
    "https://facebook.com/",
    "https://instagram.com/",
    "https://linkedin.com/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@uptrends.example",
    },
  ],
  areaServed: ["EG", "AE", "SA", "EU"],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Showreel />
      <PortfolioSection />
      <FloatingWords />
      <Badges />
      <LogoCarousel />
      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

import type { Metadata } from "next";
import LandingPage from "../../../components/LandingPage";
import { taLanding, taLandingMeta } from "../../../lib/landing-copy";

export const metadata: Metadata = {
  title: taLandingMeta.title,
  description: taLandingMeta.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: taLandingMeta.title,
    description: taLandingMeta.description,
    url: "https://buyerperception.com/ta",
    siteName: "Buyer Perception",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description: taLandingMeta.description,
  },
};

export default function TaPage() {
  return <LandingPage copy={taLanding} />;
}

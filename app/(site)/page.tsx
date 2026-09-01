import type { Metadata } from "next";
import LandingPage from "../../components/LandingPage";
import { genericLanding, genericLandingMeta } from "../../lib/landing-copy";

export const metadata: Metadata = {
  title: genericLandingMeta.title,
  description: genericLandingMeta.description,
  openGraph: {
    title: genericLandingMeta.title,
    description: genericLandingMeta.description,
    url: "https://buyerperception.com",
    siteName: "Buyer Perception",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description: genericLandingMeta.description,
  },
};

export default function HomePage() {
  return <LandingPage copy={genericLanding} />;
}

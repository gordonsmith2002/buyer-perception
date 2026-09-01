import type { Metadata } from "next";
import InsightsPage from "../../components/insights/InsightsPage";

export const metadata: Metadata = {
  title: "Buyer Perception | Share Your Perspective",
  description:
    "We're interviewing senior TA leaders anonymously about what it's really like to buy TA technology in 2026. Your perspective matters.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Buyer Perception | Share Your Perspective",
    description:
      "We're interviewing senior TA leaders anonymously about what it's really like to buy TA technology in 2026. Your perspective matters.",
    url: "https://buyerperception.com/insights",
    siteName: "Buyer Perception",
    type: "website",
  },
};

export default function InsightsRoute() {
  return <InsightsPage />;
}

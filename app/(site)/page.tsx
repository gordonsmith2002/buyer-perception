import Hero from "../../components/Hero";
import DataGap from "../../components/DataGap";
import StackBlindSpot from "../../components/StackBlindSpot";
import NpsReviewsSection from "../../components/NpsReviewsSection";
import InvisiblePipelineSection from "../../components/InvisiblePipelineSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import WhoThisIsFor from "../../components/WhoThisIsFor";
import AboutSection from "../../components/AboutSection";
import ClosingCta from "../../components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataGap />
      <StackBlindSpot />
      <NpsReviewsSection />
      <InvisiblePipelineSection />
      <HowItWorksSection />
      <WhoThisIsFor />
      <AboutSection />
      <ClosingCta />
    </>
  );
}

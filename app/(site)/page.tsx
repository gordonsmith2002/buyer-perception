import Hero from "../../components/Hero";
import DataGap from "../../components/DataGap";
import StackBlindSpot from "../../components/StackBlindSpot";
import InvisiblePipelineSection from "../../components/InvisiblePipelineSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import AboutSection from "../../components/AboutSection";
import ClosingCta from "../../components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataGap />
      <StackBlindSpot />
      <HowItWorksSection />
      <InvisiblePipelineSection />
      <AboutSection />
      <ClosingCta />
    </>
  );
}

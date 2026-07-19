import Hero from "../../components/Hero";
import DataGap from "../../components/DataGap";
import HowItWorksSection from "../../components/HowItWorksSection";
import InvisiblePipelineSection from "../../components/InvisiblePipelineSection";
import ReportRevealsSection from "../../components/ReportRevealsSection";
import AboutSection from "../../components/AboutSection";
import ClosingCta from "../../components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataGap />
      <HowItWorksSection />
      <InvisiblePipelineSection />
      <ReportRevealsSection />
      <AboutSection />
      <ClosingCta />
    </>
  );
}

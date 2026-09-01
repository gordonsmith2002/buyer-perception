import AboutSection from "./AboutSection";
import ClosingCta from "./ClosingCta";
import DataGap from "./DataGap";
import Hero from "./Hero";
import HowItWorksSection from "./HowItWorksSection";
import InvisiblePipelineSection from "./InvisiblePipelineSection";
import ReportRevealsSection from "./ReportRevealsSection";
import type { LandingCopy } from "../lib/landing-copy";

export default function LandingPage({ copy }: { copy: LandingCopy }) {
  return (
    <>
      <Hero copy={copy} />
      <DataGap rows={copy.dataGapRows} />
      <HowItWorksSection stages={copy.howItWorksStages} />
      <InvisiblePipelineSection />
      <ReportRevealsSection />
      <AboutSection copy={copy} />
      <ClosingCta copy={copy} />
    </>
  );
}

import Hero from "../../components/Hero";
import CrmComparison from "../../components/CrmComparison";
import Provocation from "../../components/Provocation";
import FourCards from "../../components/FourCards";
import InvisiblePipelineSection from "../../components/InvisiblePipelineSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import WhoThisIsFor from "../../components/WhoThisIsFor";
import AboutSection from "../../components/AboutSection";
import ClosingCta from "../../components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CrmComparison />
      <Provocation />
      <FourCards />
      <InvisiblePipelineSection />
      <HowItWorksSection />
      <WhoThisIsFor />
      <AboutSection />
      <ClosingCta />
    </>
  );
}

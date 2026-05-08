import Hero from "../../components/Hero";
import DataGap from "../../components/DataGap";
import FourCards from "../../components/FourCards";
import HowItWorksSection from "../../components/HowItWorksSection";
import AboutSection from "../../components/AboutSection";
import ClosingCta from "../../components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataGap />
      <FourCards />
      <HowItWorksSection />
      <AboutSection />
      <ClosingCta />
    </>
  );
}

import React from "react";
import BrandDivider from "./BrandDivider";
import EditorialStatCallout from "./EditorialStatCallout";
import InsightMarkDivider from "./InsightMarkDivider";
import Reveal from "./Reveal";
import RippleVisualization from "./RippleVisualization";

export default function InvisiblePipelineSection() {
  return (
    <section
      id="invisible-pipeline"
      className="bg-sand text-charcoal border-t border-charcoal/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-terracotta font-medium">
            THE INVISIBLE PIPELINE
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-semibold leading-tight max-w-3xl text-charcoal">
            Every deal you lose has an afterlife. So does every customer who
            leaves.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-8 max-w-3xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            The moment a deal closes, won or lost, the buyer does not disappear.
            They go back to their network and tell people what dealing with you
            was actually like. Some become advocates, sending you referrals and
            recommendations you will never trace back to them. Others become
            critics, steering peers toward your competitors. This is your
            invisible pipeline. It is running right now, and the only question is
            which way it is flowing.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 max-w-4xl">
          <EditorialStatCallout
            percentage="73%"
            surface="white"
            headline="73% of B2B buyers say peer recommendations are the number one factor in choosing a vendor."
            source="Source: Wynter, 2024."
          >
            <p>
              If recommendations are the single biggest factor in how your buyers
              choose, then every experience you create, good or bad, is shaping
              pipeline you will never see.
            </p>
            <p className="mt-4">
              This is not a soft metric. Peer conversations are shaping your
              pipeline right now, and you have no way to track, measure, or
              influence them.
            </p>
          </EditorialStatCallout>
        </div>

        <div className="mt-14 sm:mt-16">
          <InsightMarkDivider color="olive" className="mb-10" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-10 text-center text-sm">
            <p className="inline-flex items-center justify-center gap-2 text-charcoal font-medium">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-olive" />
              Advocate path — building pipeline
            </p>
            <p className="inline-flex items-center justify-center gap-2 text-charcoal font-medium">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-terracotta" />
              Critic path — destroying pipeline
            </p>
          </div>
        </div>

        <RippleVisualization />

        <Reveal className="flex flex-col items-center">
          <div className="mt-12 sm:mt-14 w-16">
            <BrandDivider color="terracotta" variant="solid" />
          </div>
          <p className="mt-6 max-w-3xl text-center font-medium text-charcoal text-lg sm:text-xl leading-snug">
            Your current internal data cannot tell you which is which. We can.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

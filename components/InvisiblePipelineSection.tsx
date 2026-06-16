import React from "react";
import Reveal from "./Reveal";
import EditorialStatCallout from "./EditorialStatCallout";
import RippleVisualization from "./RippleVisualization";

export default function InvisiblePipelineSection() {
  return (
    <section
      id="invisible-pipeline"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            THE INVISIBLE PIPELINE
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight max-w-3xl text-[#1a1a1a]">
            Every deal you lose has an afterlife. So does every customer who
            leaves.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-8 max-w-3xl text-base sm:text-lg text-[#555] leading-relaxed">
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

        <RippleVisualization />

        <Reveal className="flex justify-center">
          <p className="mt-12 sm:mt-14 max-w-3xl text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl leading-snug">
            Your current internal data cannot tell you which is which. We can.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

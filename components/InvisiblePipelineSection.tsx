import React from "react";
import BrandDivider from "./BrandDivider";
import EditorialStatCallout from "./EditorialStatCallout";
import Reveal from "./Reveal";

export default function InvisiblePipelineSection() {
  return (
    <section
      id="invisible-pipeline"
      className="bg-sand text-charcoal border-t border-charcoal/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            THE INVISIBLE PIPELINE
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl leading-tight max-w-3xl text-charcoal">
            The deal closes. The conversation about you doesn&apos;t.
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-10 max-w-4xl">
          <EditorialStatCallout
            percentage="73%"
            surface="platinum"
            headline="73% of B2B buyers say peer recommendations are the number one factor in choosing a vendor."
            source="Source: Wynter, 2024."
          />
        </div>

        <Reveal>
          <p className="mt-8 sm:mt-10 max-w-3xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            The moment a deal closes, won or lost, that buyer does not
            disappear. They go back to their network and tell people what
            dealing with you was actually like. Some of them become advocates,
            sending you referrals you will never correctly attribute. Others
            become critics, steering peers toward your competitors. This is your
            invisible pipeline. It exists right now, and you have no way to
            track, measure, or influence it.
          </p>
        </Reveal>

        <Reveal className="flex flex-col items-center">
          <div className="mt-10 sm:mt-12 w-16">
            <BrandDivider color="terracotta" variant="solid" />
          </div>
          <p className="mt-5 max-w-3xl text-center font-medium text-charcoal text-lg sm:text-xl leading-snug">
            Your current internal data cannot tell you which is which. We can.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

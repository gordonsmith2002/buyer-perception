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
          <p className="mt-8 max-w-4xl font-serif text-xl sm:text-2xl font-bold leading-snug text-[#1a1a1a]">
            This is not a you problem. Every revenue team is flying on the same
            instruments, and they all have the same blind spot.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl mt-8 leading-tight max-w-3xl text-[#1a1a1a]">
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
          </EditorialStatCallout>
        </div>

        <RippleVisualization />

        <Reveal className="flex justify-center">
          <p className="mt-12 sm:mt-14 max-w-3xl text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl leading-snug">
            Your CRM does not know the difference. Both look the same in the
            system. The pipeline impact is completely opposite.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-black/10 bg-[#f7f3ed] px-6 py-6 sm:px-8 sm:py-8">
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#1a1a1a]">
              You lose around 100 deals a year. If even 20 of those buyers walked
              away as critics, that is 40 to 60 conversations steering peers away
              from you, at your average deal size. Now run the same maths on the
              advocates you are not creating.
            </p>
            <p className="mt-4 text-sm text-black/50 italic">
              Illustrative. Your real ratio is the thing we measure.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-14 sm:mt-16 text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl">
            Right now you do not know the ratio. We find out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

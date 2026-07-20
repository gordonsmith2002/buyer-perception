import React from "react";
import BrandDivider from "./BrandDivider";
import EditorialStatCallout from "./EditorialStatCallout";
import Reveal from "./Reveal";

const ADVOCATE_POINTS = [
  "Put you on a shortlist you didn't know existed",
  "Recommended you in a buying group discussion",
  "Generated a referral you will never trace back",
];

const CRITIC_POINTS = [
  "Told a peer not to bother with you",
  "Recommended your main competitor instead",
  "Removed you from a shortlist before you knew you were on it",
];

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
            Every deal you lose has an afterlife. So does every customer who
            leaves.
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
            The moment a deal closes, won or lost, the buyer does not disappear.
            They go back to their network and tell people what dealing with you
            was actually like. Some become advocates, sending you referrals you
            will never trace back. Others become critics, steering peers toward
            your competitors. This is your invisible pipeline. It is running
            right now, and you have no way to track, measure, or influence it.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl">
          <Reveal>
            <div className="rounded-xl bg-platinum border-l-[3px] border-l-olive px-5 py-5 h-full">
              <p className="font-sans text-sm font-medium text-olive tracking-tight">
                One advocate
              </p>
              <ul className="mt-3 space-y-2.5">
                {ADVOCATE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-snug text-charcoal/75"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="rounded-xl bg-platinum border-l-[3px] border-l-terracotta px-5 py-5 h-full">
              <p className="font-sans text-sm font-medium text-terracotta tracking-tight">
                One critic
              </p>
              <ul className="mt-3 space-y-2.5">
                {CRITIC_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-snug text-charcoal/75"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

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

import React from "react";
import Reveal from "./Reveal";

function ProblemCard({
  children,
  delayMs = 0,
}: {
  children: React.ReactNode;
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 h-full flex flex-col min-h-0">
        {children}
      </div>
    </Reveal>
  );
}

export default function Provocation() {
  return (
    <section className="bg-brandDark text-brandLight scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold">
            THE PROBLEM
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <ProblemCard>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] leading-tight text-white">
              Your data is a mirror, not a window.
            </h2>
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col min-h-0">
              <div className="space-y-5 text-base sm:text-lg leading-[1.65] text-[#aaaaaa]">
                <p>
                  Your CRM data was entered by the rep who lost the deal. Your
                  call recordings capture a conversation the rep directed. Your
                  debriefs are the rep&apos;s version of what happened. Your
                  sales frameworks were designed to help the rep qualify and
                  close. Every internal data source reflects your own
                  organisation&apos;s perception back at itself. The
                  buyer&apos;s voice isn&apos;t in there.
                </p>
              </div>
            </div>
          </ProblemCard>

          <ProblemCard delayMs={80}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] leading-tight text-white">
              Your external feedback is a highlight reel.
            </h2>
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col min-h-0">
              <div className="space-y-5 text-base sm:text-lg leading-[1.65] text-[#aaaaaa]">
                <p>
                  G2 reviews, NPS surveys, testimonials — these are real buyer
                  voices. But they come from a self-selected minority: the
                  warmest relationships, often incentivised, always aware their
                  name is attached. GTM leaders coach their reps not to have
                  happy ears on deals. Then at company level, they do exactly
                  the same thing — building strategy on positive reviews from
                  people who were never going to say anything negative.
                </p>
              </div>
            </div>
          </ProblemCard>
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-10 max-w-4xl text-center font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
            The 60–70% who went elsewhere or left quietly aren&apos;t in either
            data set. They&apos;re having conversations about you right now. And
            you have no idea what they&apos;re saying.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

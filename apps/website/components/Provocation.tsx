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
              Your team tells you what you want to hear. Your buyers won&apos;t.
            </h2>
            <p className="mt-4 font-serif text-lg sm:text-xl leading-snug text-white/85 font-semibold">
              It&apos;s easier for them to ghost you or be polite.
            </p>
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col min-h-0">
              <div className="space-y-5 text-base sm:text-lg leading-[1.65] text-[#aaaaaa]">
                <p>
                  GTM leaders coach their reps not to have happy ears on deals.
                  Then at company level, they end up in an echo chamber of
                  positive G2 reviews, NPS scores, and testimonials.
                </p>
                <p>
                  That&apos;s a highlight reel from self-selected people who knew
                  they were being watched.
                </p>
                <p>
                  The 60 to 70% who went elsewhere or left quietly aren&apos;t in
                  that data. They&apos;re having conversations about you right
                  now. And you have no idea what they&apos;re saying.
                </p>
                <p className="text-white font-medium pt-0.5">We find out.</p>
              </div>
            </div>
          </ProblemCard>

          <ProblemCard delayMs={80}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] leading-tight text-white">
              Buyers don&apos;t choose your competitor because they&apos;re
              objectively better.
            </h2>
            <p className="mt-4 font-serif text-lg sm:text-xl leading-snug text-white/85 font-semibold">
              They choose them because they perceived them as better.
            </p>
            <div className="mt-6 sm:mt-8 flex-1 flex flex-col min-h-0">
              <div className="space-y-5 text-base sm:text-lg leading-[1.65] text-[#aaaaaa]">
                <p>
                  Perception isn&apos;t a soft metric. It&apos;s the mechanism by
                  which every buying decision gets made. The gap between how you
                  think your market sees you and how they actually see you is
                  where lost deals live, where churn starts, and where pipeline
                  disappears without a trace.
                </p>
                <p className="text-white font-medium pt-0.5">We close that gap.</p>
              </div>
            </div>
          </ProblemCard>
        </div>
      </div>
    </section>
  );
}

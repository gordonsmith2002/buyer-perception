import React from "react";
import Reveal from "./Reveal";

type Row = {
  crm: string;
  quote: string;
  impact: string;
  tone: "advocate" | "critic";
};

const ROWS: Row[] = [
  {
    crm: "Closed Lost: Budget",
    quote:
      "If it were my call I would have bought it. The rep was outstanding and helped me build the business case. Our CFO killed it on budget. We've gone with an inferior solution, for now.",
    impact:
      "Already recommended you to three people. You'll never see this in your pipeline data.",
    tone: "advocate",
  },
  {
    crm: "Closed Lost: Pricing",
    quote:
      "Pricing was fine. Your proposal felt like a find-and-replace template. Their competitor laid out exactly what our first 90 days would look like.",
    impact:
      "Warned three people at a conference to go with your competitor. That's the story they tell about you now.",
    tone: "critic",
  },
  {
    crm: "Closed Lost: Went with Competitor",
    quote:
      "We liked your product better, but your team was slow to respond. And if I'm honest, I found the rep a bit pushy and patronising.",
    impact:
      "Was recently asked for their opinion on you. Told them not to bother.",
    tone: "critic",
  },
];

export default function CrmComparison() {
  return (
    <section
      id="problem"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-sm sm:text-base tracking-[0.18em] uppercase text-black/60 font-semibold">
            WHAT YOUR DATA SAYS VS WHAT&apos;S ACTUALLY HAPPENING
          </div>
        </Reveal>

        <div className="mt-10 hidden md:grid md:grid-cols-12 md:gap-0 border-b border-black/10 pb-4">
          <div className="md:col-span-2 pr-3 font-serif text-base lg:text-lg leading-tight text-[#1a1a1a]">
            What Your CRM Says
          </div>
          <div className="md:col-span-7 px-3 lg:px-4 border-l border-black/10 font-serif text-lg md:text-xl lg:text-2xl leading-tight text-[#1a1a1a]">
            What They Actually Said
          </div>
          <div className="md:col-span-3 pl-3 border-l border-black/10 font-serif text-base lg:text-lg leading-tight text-[#1a1a1a]">
            What Was the Impact?
          </div>
        </div>

        <div className="mt-0 md:mt-6 space-y-4">
          {ROWS.map((row, idx) => (
            <Reveal key={`${row.crm}-${idx}`}>
              <div
                className={[
                  "rounded-2xl border overflow-hidden border-black/10",
                  row.tone === "advocate"
                    ? "bg-[#f0f5ed]/80 border-l-[3px] border-l-emerald-700/35 shadow-sm"
                    : "bg-[#fdf8f3]/90 border-l-[3px] border-l-amber-700/30 shadow-sm",
                ].join(" ")}
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="p-4 sm:p-5 md:col-span-2 md:border-r border-black/10 flex flex-col justify-center md:min-w-0 bg-white/50">
                    <div className="md:hidden text-[10px] tracking-[0.18em] uppercase text-black/50 font-semibold mb-2">
                      What your CRM says
                    </div>
                    <div className="inline-flex w-fit max-w-full rounded-md border border-black/20 bg-white px-3 py-2 font-mono text-sm sm:text-[0.9375rem] text-black/80 leading-snug tracking-tight">
                      {row.crm}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:col-span-7 flex flex-col justify-center border-t md:border-t-0 border-black/10 md:border-r border-black/10 md:min-w-0">
                    <div className="md:hidden text-[10px] tracking-[0.18em] uppercase text-black/50 font-semibold mb-2">
                      What they actually said
                    </div>
                    <blockquote className="font-serif italic text-[#1a1a1a] text-lg sm:text-xl md:text-[1.35rem] leading-relaxed">
                      {row.quote}
                    </blockquote>
                  </div>
                  <div className="p-4 sm:p-5 md:col-span-3 flex flex-col justify-center border-t md:border-t-0 border-black/10 md:min-w-0">
                    <div className="md:hidden text-[10px] tracking-[0.18em] uppercase text-black/50 font-semibold mb-2">
                      What was the impact?
                    </div>
                    <p className="text-[13px] sm:text-sm md:text-base font-semibold text-[#1a1a1a] leading-snug">
                      {row.impact}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-[#555] text-lg max-w-3xl mx-auto text-center leading-relaxed">
            Same deals. Completely different stories, and completely different
            word-of-mouth after the deal. One version helps you. The other
            doesn&apos;t.
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-4 text-lg text-black/45 max-w-3xl mx-auto text-center leading-relaxed">
            If you&apos;ve considered win/loss analysis, you&apos;ve already identified
            the problem. This goes further.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

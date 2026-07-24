import Image from "next/image";
import React from "react";
import Reveal from "./Reveal";

const REPORT_ITEMS = [
  {
    title: "Your Buyer Perception Score",
    desc: "A single number showing how your market actually perceives you, tracked over time. The leading indicator your NPS was supposed to be.",
  },
  {
    title: "Where the experience breaks down",
    desc: "Stage-by-stage scoring from first impression to final decision: where you lose goodwill, and why.",
  },
  {
    title: "Your advocate-to-critic ratio",
    desc: "How many lost buyers would recommend you, and how many are steering people away.",
  },
  {
    title: "What they would tell peers",
    desc: "In their own words. The conversations about you that you have never been part of.",
  },
  {
    title: "How your competitors showed up",
    desc: "Direct comparison from people who evaluated you side by side, against what your team assumed.",
  },
  {
    title: "What to fix first",
    desc: "Actions ranked by revenue impact: the gaps most likely to lift win rate and cut churn.",
  },
];

function ReportMark() {
  return (
    <Image
      src="/images/logo-mark-terracotta.svg"
      alt=""
      width={14}
      height={24}
      className="mt-0.5 h-5 w-auto shrink-0 opacity-80"
      aria-hidden
    />
  );
}

export default function ReportRevealsSection() {
  return (
    <section className="bg-sand/40 text-charcoal border-t border-charcoal/5 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-charcoal text-center">
            What your report reveals
          </h3>
        </Reveal>
        <Reveal>
          <p className="mt-6 mx-auto max-w-3xl text-center text-sm sm:text-base leading-relaxed text-charcoal/70">
            For the first time, buyer perception becomes measurable,
            comparable, and actionable. The gaps between what you believed and
            what your buyers actually said become immediately visible.
          </p>
        </Reveal>

        {/* Mobile: compact list */}
        <div className="mt-10 space-y-5 sm:hidden">
          {REPORT_ITEMS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 40}>
              <div className="flex gap-3 items-start">
                <ReportMark />
                <div className="min-w-0">
                  <h4 className="font-sans text-base font-medium text-charcoal leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-charcoal/70 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tablet 2-col / Desktop 3-col: tighter cards */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {REPORT_ITEMS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 50}>
              <div className="rounded-xl bg-sand px-4 py-4 h-full">
                <div className="flex gap-3 items-start">
                  <ReportMark />
                  <div className="min-w-0">
                    <h4 className="font-sans text-base lg:text-lg font-medium text-charcoal leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-charcoal/70 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

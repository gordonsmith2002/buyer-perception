import Image from "next/image";
import React from "react";
import Reveal from "./Reveal";

const REPORT_ITEMS = [
  {
    title: "Why you really lost those deals",
    desc: "Your team logged a reason. The buyer has a different one. We show you both, side by side, across every deal we investigate. The gaps between what you believed and what actually happened become immediately visible.",
  },
  {
    title: "Where the experience breaks down",
    desc: "Stage-by-stage scoring from first impression to final decision. Where you're building trust, where you're losing it, and exactly when buyers start looking at alternatives.",
  },
  {
    title: "Which customers are already at risk",
    desc: "Not every closed-won is a success. We identify which recently signed customers are already underwhelmed and where the post-sale experience is creating churn risk before renewal conversations even start.",
  },
  {
    title: "What buyers are telling their peers about you",
    desc: "Some of your lost deals are recommending you. Some of your won deals are warning people off. Your advocate-to-critic ratio tells you which is happening more, and what they're actually saying.",
  },
  {
    title: "How your competitors showed up",
    desc: "Direct comparison from people who evaluated you side by side. Not your competitive intel deck. Not G2. What buyers actually experienced when they compared you, in their own words.",
  },
  {
    title: "What to fix first",
    desc: "Every finding is ranked by revenue impact. The three to five changes most likely to improve your win rate, reduce churn, and protect the pipeline you've already built.",
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
            What your report will reveal
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

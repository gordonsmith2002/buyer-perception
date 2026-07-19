import Image from "next/image";
import React from "react";
import BrandDivider from "./BrandDivider";
import Reveal from "./Reveal";

const REPORT_ITEMS = [
  {
    title: "Your Buyer Perception Score",
    desc: "A single number showing how your market actually perceives you, revealed dimension by dimension across five areas of buyer experience. Tracked over time, it becomes the leading indicator your NPS was supposed to be.",
  },
  {
    title: "Where the experience breaks down",
    desc: "Stage-by-stage scoring from first impression to final decision, showing exactly where you are losing goodwill and why.",
  },
  {
    title: "Your advocate-to-critic ratio",
    desc: "How many of your lost prospects would recommend you to a peer, and how many are actively steering people away.",
  },
  {
    title: "What they would tell peers",
    desc: "In their own words. The conversations happening about you that you have never been part of.",
  },
  {
    title: "How your competitors showed up",
    desc: "Direct, experiential comparison from people who evaluated you side by side, against what your team assumed.",
  },
  {
    title: "What to fix first",
    desc: "Prioritised actions ranked by revenue impact: the gaps most likely to improve your win rate, reduce churn, and protect the pipeline you have already built.",
  },
];

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
            comparable, and actionable. Your leadership team&apos;s predictions
            are revealed against buyer reality in a live session, one dimension
            at a time. The gaps between what you believed and what your buyers
            actually said become immediately visible.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REPORT_ITEMS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60}>
              <div className="relative rounded-xl bg-sand p-5 sm:p-6 h-full overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-8 opacity-[0.12]"
                >
                  <Image
                    src="/images/logo-mark-terracotta.svg"
                    alt=""
                    width={120}
                    height={200}
                    className="h-36 w-auto rotate-12"
                  />
                </div>
                <div className="relative">
                  <div className="mb-3 w-8">
                    <BrandDivider color="terracotta" variant="solid" />
                  </div>
                  <h4 className="font-sans text-lg sm:text-xl font-semibold text-charcoal">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "The Lost Revenue Assessment",
    detail:
      "A 60-minute working session with your leadership team. We quantify the financial exposure from deals you could have won and customers you didn't need to lose, using your own data. Your team makes predictions across five dimensions of buyer experience. Those predictions become one of the most powerful elements of the final report.",
  },
  {
    n: "02",
    title: "The Buyer Perception Report",
    detail:
      "Anonymous interviews with your lost prospects or churned customers, synthesised into a strategic report covering five dimensions of buyer experience, competitive intelligence, and a pipeline impact analysis. Findings are delivered live: your predictions shown first, then buyer reality revealed one dimension at a time.",
  },
  {
    n: "03",
    title: "The Action Workshop (optional)",
    detail:
      "A half-day facilitated session where we partner with your leadership team to turn findings into specific commitments. Specific changes, with owners, timelines, and measurable outcomes.",
  },
];

const REPORT_ITEMS = [
  {
    title: "Your Buyer Perception Score",
    desc: "A single number showing how your market actually perceives you, revealed dimension by dimension across five areas of buyer experience.",
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

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-brandDark text-brandLight scroll-mt-20 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold">
            HOW IT WORKS
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#aaaaaa]">
            This isn&apos;t market research. It isn&apos;t a survey. It&apos;s a
            structured, independent, human conversation, with the depth to turn
            what buyers say into insight you can act on.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <div className="flex flex-col h-full border-t border-white/10 pt-8 md:pt-10">
                <span className="font-serif text-4xl sm:text-5xl text-white/25 leading-none">
                  {step.n}
                </span>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl text-white leading-snug">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#aaaaaa] flex-1">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 sm:mt-28 pt-16 border-t border-white/10">
          <Reveal>
            <h3 className="font-serif text-2xl sm:text-3xl text-white text-center">
              What your report reveals
            </h3>
          </Reveal>
          <Reveal>
            <p className="mt-6 mx-auto max-w-3xl text-center text-sm sm:text-base leading-relaxed text-[#aaaaaa]">
              Your leadership team&apos;s predictions are revealed against buyer
              reality in a live session, one dimension at a time. The gaps
              between what you believed and what your buyers actually said
              become immediately visible.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPORT_ITEMS.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60}>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 h-full">
                  <h4 className="font-serif text-lg sm:text-xl text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-[#aaaaaa] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

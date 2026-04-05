import React from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "You share a contact list",
    detail:
      "We work with you to build the right list, focusing on the contacts most likely to deliver the highest-quality insight. Takes about ten minutes of your time.",
  },
  {
    n: "02",
    title: "We run anonymous interviews",
    detail:
      "Structured, honest conversations with your buyers, completely independent of your team. No surveys. No forms. Real conversations with a real person.",
  },
  {
    n: "03",
    title: "You get the unfiltered truth",
    detail:
      "A Buyer Perception Report with your score across five dimensions, an advocate-to-critic ratio, competitive intelligence, and prioritised actions, delivered in a strategic debrief with your leadership team.",
  },
];

const REPORT_ITEMS = [
  {
    title: "Your Buyer Perception Score",
    desc: "A single number showing how your market actually perceives you, scored across five dimensions.",
  },
  {
    title: "Where the experience breaks down",
    desc: "Stage-by-stage scoring from first impression to final decision. See exactly where you're losing goodwill.",
  },
  {
    title: "Your advocate-to-critic ratio",
    desc: "How many of your lost prospects would recommend you to a peer, and how many are actively steering people away.",
  },
  {
    title: "What they'd tell a colleague",
    desc: "In their own words. The conversations happening about you that you've never been part of.",
  },
  {
    title: "How your competitors showed up",
    desc: "Direct, experiential comparison from people who evaluated you side by side.",
  },
  {
    title: "What to fix first",
    desc: "Prioritised actions ranked by impact. Monday morning changes, not six-month projects.",
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
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

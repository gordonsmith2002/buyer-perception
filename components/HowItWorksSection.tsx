import Image from "next/image";
import React from "react";
import BrandDivider from "./BrandDivider";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Lost Revenue Assessment",
    detail:
      "A 45-minute working session with your leadership team. We quantify the financial exposure from deals you could have won and customers you didn't need to lose, using your own data. Your team makes predictions across five dimensions of buyer experience. Those predictions become one of the most powerful elements of the final report.",
  },
  {
    n: "02",
    title: "Buyer Perception Report",
    detail:
      "Anonymous interviews with your lost prospects or churned customers, synthesised into a strategic report covering five dimensions of buyer experience, competitive intelligence, and a pipeline impact analysis. Findings are delivered live: your predictions shown first, then buyer reality revealed one dimension at a time.",
  },
  {
    n: "03",
    title: "Action Workshop (optional)",
    detail:
      "A half-day facilitated session where we partner with your leadership team to turn findings into specific commitments. Specific changes, with owners, timelines, and measurable outcomes. No fluff, no AI slop, no long reports.",
  },
];

const REPORT_ITEMS = [
  {
    title: "Your Buyer Perception Score",
    desc: "A single number showing how your market actually perceives you, revealed dimension by dimension across five areas of buyer experience. Tracked over time, it becomes the leading indicator your NPS was supposed to be.",
    accent: "terracotta" as const,
  },
  {
    title: "Where the experience breaks down",
    desc: "Stage-by-stage scoring from first impression to final decision, showing exactly where you are losing goodwill and why.",
    accent: "olive" as const,
  },
  {
    title: "Your advocate-to-critic ratio",
    desc: "How many of your lost prospects would recommend you to a peer, and how many are actively steering people away.",
    accent: "charcoal" as const,
  },
  {
    title: "What they would tell peers",
    desc: "In their own words. The conversations happening about you that you have never been part of.",
    accent: "terracotta" as const,
  },
  {
    title: "How your competitors showed up",
    desc: "Direct, experiential comparison from people who evaluated you side by side, against what your team assumed.",
    accent: "olive" as const,
  },
  {
    title: "What to fix first",
    desc: "Prioritised actions ranked by revenue impact: the gaps most likely to improve your win rate, reduce churn, and protect the pipeline you have already built.",
    accent: "charcoal" as const,
  },
];

const MARK_SRC = {
  terracotta: "/images/logo-mark-terracotta.svg",
  olive: "/images/logo-mark-olive.svg",
  charcoal: "/images/logo-mark-charcoal.svg",
} as const;

function GeometricCorner({
  variant,
}: {
  variant: "triangle" | "quarter" | "circle";
}) {
  if (variant === "triangle") {
    return (
      <div
        aria-hidden
        className="absolute -right-1 -bottom-1 h-16 w-16 bg-terracotta"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    );
  }
  if (variant === "quarter") {
    return (
      <div
        aria-hidden
        className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-olive/25"
      />
    );
  }
  return (
    <div
      aria-hidden
      className="absolute -right-5 -top-5 h-16 w-16 rounded-full border-2 border-charcoal/15"
    />
  );
}

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-sand/40 text-charcoal scroll-mt-20 border-t border-charcoal/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
            HOW IT WORKS
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-charcoal/70">
            This isn&apos;t market research. It isn&apos;t a survey. It&apos;s a
            structured, independent, human conversation, with the depth to turn
            what buyers say into insight you can act on.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <div className="flex flex-col h-full">
                <div className="w-12">
                  <BrandDivider color="terracotta" variant="solid" />
                </div>
                <span className="mt-6 font-sans text-4xl sm:text-5xl font-semibold text-terracotta leading-none tracking-tight">
                  {step.n}
                </span>
                <h3 className="mt-4 font-sans text-xl sm:text-2xl font-semibold text-charcoal leading-snug">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-charcoal/70 flex-1">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 sm:mt-28 pt-16">
          <BrandDivider color="charcoal" variant="solid" className="opacity-15 mb-14" />

          <Reveal>
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-charcoal text-center">
              What your report reveals
            </h3>
          </Reveal>
          <Reveal>
            <p className="mt-6 mx-auto max-w-3xl text-center text-sm sm:text-base leading-relaxed text-charcoal/70">
              For the first time, buyer perception becomes measurable,
              comparable, and actionable. Your leadership team&apos;s predictions
              are revealed against buyer reality in a live session, one
              dimension at a time. The gaps between what you believed and what
              your buyers actually said become immediately visible.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {REPORT_ITEMS.map((item, i) => {
              const geo =
                i % 3 === 0 ? "triangle" : i % 3 === 1 ? "quarter" : "circle";
              return (
                <Reveal key={item.title} delayMs={i * 60}>
                  <div className="relative rounded-xl bg-sand border border-charcoal/10 shadow-sm p-5 sm:p-6 h-full overflow-hidden">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-4 -bottom-6 opacity-[0.08]"
                    >
                      <Image
                        src={MARK_SRC[item.accent]}
                        alt=""
                        width={100}
                        height={170}
                        className="h-28 w-auto -rotate-6"
                      />
                    </div>
                    <GeometricCorner variant={geo} />
                    <div className="relative">
                      <div className="mb-3 w-8">
                        <BrandDivider
                          color={
                            item.accent === "charcoal"
                              ? "charcoal"
                              : item.accent === "olive"
                                ? "olive"
                                : "terracotta"
                          }
                          variant="solid"
                        />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

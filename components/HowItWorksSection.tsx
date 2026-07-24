import React from "react";
import Reveal from "./Reveal";

type TimelineStage = {
  stage: string;
  title: string;
  duration: string;
  detail: string;
  badge?: string;
  note?: string;
};

const STAGES: TimelineStage[] = [
  {
    stage: "STAGE 1",
    title: "Lost Revenue Assessment",
    duration: "Free · 45 minutes",
    detail:
      "A working session with your leadership team using your own pipeline and churn data. We quantify the financial exposure from deals you could have won and customers you didn't need to lose. Your team predicts how buyers perceived them across five dimensions. These predictions become one of the most revealing parts of the final report.",
    badge: "Free. No commitment",
  },
  {
    stage: "STAGE 2",
    title: "Anonymous Buyer Interviews",
    duration: "Weeks 1–4",
    detail:
      "8–12 structured conversations with your lost prospects and churned customers, carried out by an experienced B2B revenue leader. Independent. Anonymous. No one knows who said what. Buyers talk to us because they have nothing to lose and no reason to perform.",
  },
  {
    stage: "STAGE 3",
    title: "Buyer Perception Report",
    duration: "Weeks 5–7",
    detail:
      "Everything synthesised into a strategic report covering five dimensions of buyer experience, competitive intelligence, and pipeline impact. Not a transcript dump. Not AI-generated analysis. Findings built from human conversations, organised by what matters most to your revenue.",
  },
  {
    stage: "STAGE 4",
    title: "Live Readout & Action Workshop",
    duration: "Week 8",
    detail:
      "Your leadership team's predictions revealed against buyer reality, one dimension at a time. The gaps between what you believed and what your buyers actually said become immediately visible. Then the workshop turns findings into three to five specific commitments: changes with owners, timelines, and measurable outcomes. We see the biggest impact when the broader leadership team hears buyer feedback directly.",
  },
];

function StageContent({ stage }: { stage: TimelineStage }) {
  return (
    <div>
      <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">
        {stage.stage}
      </p>
      <h3 className="mt-2 font-sans text-lg sm:text-xl font-medium text-charcoal leading-snug">
        {stage.title}
      </h3>
      <p className="mt-1.5 font-sans font-normal text-sm text-charcoal/55">
        {stage.duration}
      </p>
      {stage.badge ? (
        <span className="mt-4 inline-flex items-center rounded-md border border-terracotta bg-terracotta px-3 py-1.5 font-sans text-xs font-medium tracking-tight text-white">
          {stage.badge}
        </span>
      ) : null}
      <p className="mt-4 text-sm sm:text-[0.9375rem] leading-relaxed text-charcoal/70">
        {stage.detail}
      </p>
      {stage.note ? (
        <p className="mt-3 text-xs sm:text-sm text-charcoal/50 italic">
          {stage.note}
        </p>
      ) : null}
    </div>
  );
}

function DesktopTimeline() {
  return (
    <div className="hidden lg:block mt-16">
      <div className="relative grid grid-cols-4 gap-8 xl:gap-10">
        <div
          aria-hidden
          className="absolute top-[11px] left-[calc(12.5%-4px)] right-[calc(12.5%-4px)] h-px bg-charcoal/20"
        />
        {STAGES.map((stage, i) => (
          <Reveal key={stage.stage} delayMs={i * 80}>
            <div className="relative flex flex-col items-stretch">
              <div className="relative z-10 mb-8 flex justify-center">
                <span
                  aria-hidden
                  className="block h-[23px] w-[23px] rounded-full border-[3px] border-sand bg-terracotta"
                />
              </div>
              <StageContent stage={stage} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function MobileTimeline() {
  return (
    <div className="lg:hidden mt-14 relative pl-8">
      <div
        aria-hidden
        className="absolute left-[9px] top-2 bottom-2 w-px bg-charcoal/20"
      />
      <div className="space-y-12">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.stage} delayMs={i * 60}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 block h-[19px] w-[19px] rounded-full border-[3px] border-sand bg-terracotta"
              />
              <StageContent stage={stage} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
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
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            HOW IT WORKS
          </div>
        </Reveal>

        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </section>
  );
}

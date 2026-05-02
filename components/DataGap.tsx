import React from "react";
import Reveal from "./Reveal";

type DataGapRow = {
  source: string;
  officialData: string;
  buyerTruth: string;
  currentReality: string;
};

const ROWS: DataGapRow[] = [
  {
    source: "CRM",
    officialData: "Closed Lost — Pricing",
    buyerTruth:
      "Pricing was fine. Their CFO overruled the champion — and nobody on your team ever spoke to the CFO.",
    currentReality:
      "That champion still rates you highly. She's told two peers to put you on their shortlist. You have no idea she's generating pipeline for you — or how to replicate it.",
  },
  {
    source: "Call Recording",
    officialData: "Discovery call scored 92% on methodology",
    buyerTruth:
      "The buyer felt interrogated, not understood. Your rep asked great questions but didn't listen to the answers.",
    currentReality:
      "The buyer told their Head of Ops not to bother taking your call. That's a deal you'll never see in your pipeline.",
  },
  {
    source: "Rep Debrief",
    officialData: "Lost to competitor on features",
    buyerTruth:
      "Your product was fine. The competitor's implementation story made the transition feel painless. Yours felt risky.",
    currentReality:
      "That buyer now sits on your competitor's customer advisory board. They're shaping the product roadmap you'll be competing against next year.",
  },
  {
    source: "Sales Framework",
    officialData: "Economic buyer identified. Decision criteria mapped. Process validated.",
    buyerTruth:
      '"Honestly, they were wasting their time with me. My CFO was never going to approve this."',
    currentReality:
      "The actual decision-maker thinks your team doesn't understand how their organisation buys. They've told procurement to remove you from the vendor list.",
  },
];

const LABELS = {
  officialData: "Your data says:",
  buyerTruth: "What actually happened:",
  currentReality: "Right now:",
};

function MobileRow({ row }: { row: DataGapRow }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-creamCard shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="border-b border-black/10 bg-white/55 px-4 py-3">
        <p className="text-[10px] tracking-[0.2em] uppercase text-black/45 font-semibold">
          {row.source}
        </p>
      </div>
      <div className="divide-y divide-black/10">
        <div className="p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-black/45 font-semibold">
            {LABELS.officialData}
          </p>
          <p className="mt-2 inline-flex rounded-md border border-black/15 bg-white px-3 py-2 font-mono text-sm leading-snug text-black/75">
            {row.officialData}
          </p>
        </div>
        <div className="p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-black/45 font-semibold">
            {LABELS.buyerTruth}
          </p>
          <p className="mt-2 font-serif text-lg leading-relaxed text-[#1a1a1a]">
            {row.buyerTruth}
          </p>
        </div>
        <div className="border-l-[3px] border-l-emerald-700/45 bg-[#eef5ef]/75 p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-emerald-900/55 font-semibold">
            {LABELS.currentReality}
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-emerald-950/90">
            {row.currentReality}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DataGap() {
  return (
    <section
      id="data-gap"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            THE DATA GAP
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1a1a1a]">
            Four tools. Four confident conclusions. None of them captured what
            happened after the buyer hung up.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4 md:hidden">
          {ROWS.map((row, index) => (
            <Reveal key={row.source} delayMs={index * 80}>
              <MobileRow row={row} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-black/10 bg-creamCard shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-12 border-b border-black/10 bg-white/60">
            <div className="col-span-3 px-5 py-5">
              <h3 className="font-serif text-lg lg:text-xl leading-tight text-[#1a1a1a]">
                What Your Data Says
              </h3>
            </div>
            <div className="col-span-5 border-l border-black/10 px-5 py-5">
              <h3 className="font-serif text-lg lg:text-xl leading-tight text-[#1a1a1a]">
                What the Buyer Actually Said
              </h3>
            </div>
            <div className="col-span-4 border-l border-black/10 bg-[#eef5ef]/70 px-5 py-5">
              <h3 className="font-serif text-lg lg:text-xl leading-tight text-emerald-950">
                What&apos;s Happening Right Now
              </h3>
            </div>
          </div>

          <div className="divide-y divide-black/10">
            {ROWS.map((row, index) => (
              <Reveal key={row.source} delayMs={index * 80}>
                <div className="grid grid-cols-12">
                  <div className="col-span-3 bg-white/45 px-5 py-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-black/45 font-semibold">
                      {row.source}
                    </p>
                    <p className="mt-3 inline-flex rounded-md border border-black/15 bg-white px-3 py-2 font-mono text-sm lg:text-[0.9375rem] leading-snug text-black/75">
                      {row.officialData}
                    </p>
                  </div>
                  <div className="col-span-5 border-l border-black/10 px-5 py-6">
                    <p className="font-serif text-xl lg:text-[1.35rem] leading-relaxed text-[#1a1a1a]">
                      {row.buyerTruth}
                    </p>
                  </div>
                  <div className="col-span-4 border-l-[3px] border-l-emerald-700/45 bg-[#eef5ef]/70 px-5 py-6">
                    <p className="text-sm lg:text-base font-semibold leading-relaxed text-emerald-950/90">
                      {row.currentReality}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-12 max-w-4xl text-center font-serif text-xl sm:text-2xl leading-snug text-[#1a1a1a]">
            You invested in the stack. You trained the team. You ran the
            framework. And you still don&apos;t know what the buyer told their
            colleague after they hung up.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import React from "react";
import Reveal from "./Reveal";

type CrmRow = {
  crmField: string;
  buyerTruth: string;
  currentReality: string;
};

const ROWS: CrmRow[] = [
  {
    crmField: "Closed Lost: Pricing",
    buyerTruth:
      "Pricing was never the issue. My CFO overruled me, and nobody on your team ever spoke to my CFO.",
    currentReality:
      "That champion still rates you. She has told two peers to put you on their shortlist.",
  },
  {
    crmField: "Closed Lost: No decision",
    buyerTruth:
      "We were ready to buy, but I could not get it prioritised internally, and nobody on your side helped me build the business case, so we moved on to a new project.",
    currentReality:
      "They still rate you highly and would re-engage if approached. Nobody followed up.",
  },
  {
    crmField: "Churned: Non-renewal",
    buyerTruth:
      "The product did what it said. We just went quiet on each other after onboarding. I have not heard from anyone in months.",
    currentReality:
      "They recently attended an industry event and told three separate people not to consider you in a selection process.",
  },
];

function MobileRow({ row }: { row: CrmRow }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-creamCard shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="divide-y divide-black/10">
        <div className="p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-black/45 font-semibold">
            What your CRM says
          </p>
          <p className="mt-2 inline-flex rounded-md border border-black/15 bg-white px-3 py-2 font-mono text-sm leading-snug text-black/75">
            {row.crmField}
          </p>
        </div>
        <div className="p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-black/45 font-semibold">
            What the buyer actually said
          </p>
          <p className="mt-2 font-serif text-lg leading-relaxed text-[#1a1a1a] italic">
            &ldquo;{row.buyerTruth}&rdquo;
          </p>
        </div>
        <div className="border-l-[3px] border-l-emerald-700/45 bg-[#eef5ef]/75 p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-emerald-900/55 font-semibold">
            What&apos;s happening right now
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
      id="problem"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            YOUR DATA GAP
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1a1a1a]">
            85% of closed-lost data in your CRM is either completely wrong or
            missing vital information.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-[#555] leading-relaxed">
            Reps do not lie intentionally. But they enter a loss reason at the
            moment they are least motivated to reflect on it. What goes into the
            system is whatever the buyer politely told them on the way out,
            which in most cases is not the real reason.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-3 text-xs sm:text-sm text-black/45">
            Source: independent win-loss research across 1,000+ closed-lost
            opportunities.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4 md:hidden">
          {ROWS.map((row, index) => (
            <Reveal key={row.crmField} delayMs={index * 80}>
              <MobileRow row={row} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-black/10 bg-creamCard shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-12 border-b border-black/10 bg-white/60">
            <div className="col-span-3 px-5 py-5">
              <h3 className="font-serif text-lg lg:text-xl leading-tight text-[#1a1a1a]">
                What Your CRM Says
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
              <Reveal key={row.crmField} delayMs={index * 80}>
                <div className="grid grid-cols-12">
                  <div className="col-span-3 bg-white/45 px-5 py-6 min-w-0">
                    <p className="inline-flex max-w-full rounded-md border border-black/15 bg-white px-3 py-2 font-mono text-sm lg:text-[0.9375rem] leading-snug text-black/75 break-words">
                      {row.crmField}
                    </p>
                  </div>
                  <div className="col-span-5 border-l border-black/10 px-5 py-6 min-w-0">
                    <p className="font-serif text-xl lg:text-[1.35rem] leading-relaxed text-[#1a1a1a] italic">
                      &ldquo;{row.buyerTruth}&rdquo;
                    </p>
                  </div>
                  <div className="col-span-4 border-l-[3px] border-l-emerald-700/45 bg-[#eef5ef]/70 px-5 py-6 min-w-0">
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
          <p className="mt-12 max-w-4xl text-center text-base sm:text-lg text-[#555] leading-relaxed">
            Every line in your CRM is your side of the deal. Not fabricated, not
            useless, just the seller&apos;s version. The buyer&apos;s version
            never entered the system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

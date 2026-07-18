import React from "react";
import BrandDivider from "./BrandDivider";
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

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium">
      {children}
    </p>
  );
}

function MobileRow({ row }: { row: CrmRow }) {
  return (
    <div className="rounded-xl bg-sand overflow-hidden">
      <div className="p-5 sm:p-6">
        <ColumnLabel>What your CRM says</ColumnLabel>
        <p className="mt-3 inline-flex rounded-md border border-charcoal/15 bg-white px-3 py-2 font-mono text-sm leading-snug text-charcoal/80">
          {row.crmField}
        </p>
      </div>

      <div className="px-5 sm:px-6">
        <BrandDivider color="terracotta" variant="solid" />
      </div>

      <div className="p-5 sm:p-6 border-l-[3px] border-l-terracotta ml-0">
        <ColumnLabel>What the buyer actually said</ColumnLabel>
        <p className="mt-3 font-sans text-lg leading-relaxed text-charcoal italic">
          &ldquo;{row.buyerTruth}&rdquo;
        </p>
      </div>

      <div className="px-5 sm:px-6">
        <BrandDivider color="olive" variant="dashed" />
      </div>

      <div className="bg-platinum/70 p-5 sm:p-6 border-l-[3px] border-l-olive">
        <ColumnLabel>What&apos;s happening right now</ColumnLabel>
        <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal">
          {row.currentReality}
        </p>
      </div>
    </div>
  );
}

function DesktopRow({ row }: { row: CrmRow }) {
  return (
    <div className="rounded-xl bg-sand overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-platinum/50 px-5 lg:px-6 py-7 min-w-0">
          <p className="inline-flex max-w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 font-mono text-sm lg:text-[0.9375rem] leading-snug text-charcoal/80 break-words">
            {row.crmField}
          </p>
        </div>
        <div className="col-span-5 border-l-[3px] border-l-terracotta px-5 lg:px-6 py-7 min-w-0">
          <p className="font-sans text-xl lg:text-[1.35rem] leading-relaxed text-charcoal italic">
            &ldquo;{row.buyerTruth}&rdquo;
          </p>
        </div>
        <div className="col-span-4 border-l-[3px] border-l-olive bg-platinum/60 px-5 lg:px-6 py-7 min-w-0">
          <p className="text-sm lg:text-base font-medium leading-relaxed text-charcoal">
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
      className="bg-white text-charcoal border-t border-charcoal/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-terracotta font-medium">
            YOUR DATA GAP
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-charcoal">
            85% of closed-lost data in your CRM is either completely wrong or
            missing vital information.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            Reps do not lie intentionally. But they enter a loss reason at the
            moment they are least motivated to reflect on it. What goes into the
            system is whatever the buyer politely told them on the way out,
            which in most cases is not the real reason.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-3 text-xs sm:text-sm text-charcoal/45">
            Source: independent win-loss research across 1,000+ closed-lost
            opportunities.
          </p>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="mt-14 space-y-10 md:hidden">
          {ROWS.map((row, index) => (
            <Reveal key={row.crmField} delayMs={index * 80}>
              <div className="space-y-6">
                {index > 0 ? (
                  <BrandDivider color="terracotta" variant="dotted" />
                ) : null}
                <MobileRow row={row} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: three-column cards with breathing room */}
        <div className="mt-14 hidden md:block space-y-8">
          <Reveal>
            <div className="grid grid-cols-12 gap-0 px-1 pb-2">
              <div className="col-span-3 pr-4">
                <h3 className="font-sans text-lg lg:text-xl font-medium leading-tight text-charcoal">
                  What Your CRM Says
                </h3>
                <div className="mt-3 w-12">
                  <BrandDivider color="terracotta" variant="solid" />
                </div>
              </div>
              <div className="col-span-5 px-5 lg:px-6">
                <h3 className="font-sans text-lg lg:text-xl font-medium leading-tight text-charcoal">
                  What the Buyer Actually Said
                </h3>
                <div className="mt-3 w-12">
                  <BrandDivider color="terracotta" variant="solid" />
                </div>
              </div>
              <div className="col-span-4 px-5 lg:px-6">
                <h3 className="font-sans text-lg lg:text-xl font-medium leading-tight text-charcoal">
                  What&apos;s Happening Right Now
                </h3>
                <div className="mt-3 w-12">
                  <BrandDivider color="terracotta" variant="solid" />
                </div>
              </div>
            </div>
          </Reveal>

          <BrandDivider color="charcoal" variant="solid" className="opacity-20" />

          {ROWS.map((row, index) => (
            <Reveal key={row.crmField} delayMs={index * 80}>
              <div className="space-y-8">
                {index > 0 ? (
                  <BrandDivider color="terracotta" variant="dashed" className="opacity-70" />
                ) : null}
                <DesktopRow row={row} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-14 max-w-4xl text-center text-base sm:text-lg text-charcoal/70 leading-relaxed">
            Every line in your CRM is your side of the deal. Not fabricated, not
            useless, just the seller&apos;s version. The buyer&apos;s version
            never entered the system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

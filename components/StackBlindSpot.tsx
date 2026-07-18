import Image from "next/image";
import React from "react";
import BrandDivider from "./BrandDivider";
import EditorialStatCallout from "./EditorialStatCallout";
import InsightMarkDivider from "./InsightMarkDivider";
import QuoteCallout from "./QuoteCallout";
import Reveal from "./Reveal";

type StackItem = {
  label: string;
  brilliantAt: string;
  cantSee: string;
};

const ITEMS: StackItem[] = [
  {
    label: "Call recording and conversational intelligence",
    brilliantAt:
      "Reading every call and email, scoring the conversation, surfacing coaching moments, saving your team hours. A genuine game changer for seller efficiency.",
    cantSee:
      "How the buyer felt while it was happening, or anything they thought and said after the conversation ended.",
  },
  {
    label: "Sales frameworks (MEDDPICC and similar)",
    brilliantAt:
      "Qualifying deals, mapping decision criteria, driving discipline and forecast accuracy.",
    cantSee:
      "What it felt like to be on the other side of the process. No framework ever asks the buyer.",
  },
];

function StackCard({ item, index }: { item: StackItem; index: number }) {
  return (
    <Reveal delayMs={index * 80}>
      <div className="relative rounded-xl bg-sand p-6 sm:p-8 h-full overflow-hidden">
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

        <h3 className="relative font-sans text-xl sm:text-2xl font-medium leading-tight text-charcoal">
          {item.label}
        </h3>
        <div className="relative mt-3 w-12">
          <BrandDivider color="terracotta" variant="solid" />
        </div>

        <div className="relative mt-6 space-y-5 text-sm sm:text-base leading-relaxed">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-olive font-medium">
              Brilliant at
            </p>
            <p className="mt-2 text-charcoal/70">{item.brilliantAt}</p>
          </div>
          <BrandDivider color="charcoal" variant="dotted" className="opacity-25" />
          <div className="border-l-[3px] border-l-terracotta pl-4">
            <p className="text-[11px] tracking-[0.18em] uppercase text-terracotta font-medium">
              Can&apos;t see
            </p>
            <p className="mt-2 text-charcoal font-medium">{item.cantSee}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function StackBlindSpot() {
  return (
    <section className="bg-platinum text-charcoal border-t border-charcoal/5 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-terracotta font-medium">
            THE BLIND SPOT IN YOUR TOOLS AND FRAMEWORKS
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-charcoal">
            You are measuring more effectively than any revenue team in history.
            There is one thing none of your tools can measure: buyer perception.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            AI and sales frameworks have helped revenue leaders be more
            efficient and automate at a level that was not possible five years
            ago. These tools are genuinely powerful. None of them can tell you
            what your buyers really think about you.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ITEMS.map((item, index) => (
            <StackCard key={item.label} item={item} index={index} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <InsightMarkDivider color="terracotta" className="mb-10" />
          <div className="max-w-4xl mx-auto">
            <EditorialStatCallout
              percentage="75%"
              headline="Gartner predicts that by 2030, 75% of B2B buyers will prefer sales experiences that prioritise human interaction over AI."
              source="Source: Gartner, August 2025."
            />
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <InsightMarkDivider color="olive" className="mb-10" />
          <QuoteCallout>
            AI can read the transcript. It cannot have the one conversation that
            matters, the one that only happens when no one is selling.
          </QuoteCallout>
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-10 max-w-4xl text-center text-base sm:text-lg leading-relaxed text-charcoal/70">
            Buyer perception remains the one thing you cannot measure. The
            company that closes this gap first gains an advantage that
            compounds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

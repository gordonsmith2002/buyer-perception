import React from "react";
import Reveal from "./Reveal";
import EditorialStatCallout from "./EditorialStatCallout";

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
      <div className="rounded-2xl border border-black/10 bg-creamCard p-6 sm:p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <h3 className="font-serif text-xl sm:text-2xl leading-tight text-[#1a1a1a]">
          {item.label}
        </h3>
        <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-emerald-800/70 font-semibold">
              Brilliant at
            </p>
            <p className="mt-2 text-[#555]">{item.brilliantAt}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-amber-900/60 font-semibold">
              Can&apos;t see
            </p>
            <p className="mt-2 text-[#1a1a1a] font-medium">{item.cantSee}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function StackBlindSpot() {
  return (
    <section className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            THE BLIND SPOT IN YOUR TOOLS AND FRAMEWORKS
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1a1a1a]">
            You are measuring more effectively than any revenue team in history.
            There is one thing none of your tools can measure.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-[#555] leading-relaxed">
            AI has helped revenue leaders be more efficient and automate at a
            level that was not possible five years ago. These tools are genuinely
            powerful. None of them can tell you what your buyers really think
            about you.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((item, index) => (
            <StackCard key={item.label} item={item} index={index} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <EditorialStatCallout
            percentage="75%"
            headline="Gartner predicts that by 2030, 75% of B2B buyers will prefer sales experiences that prioritise human interaction over AI."
            source="Source: Gartner, August 2025."
          />
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-12 sm:mt-16 max-w-4xl text-center font-serif text-xl sm:text-2xl leading-snug text-[#1a1a1a]">
            AI can read the transcript. It cannot have the one conversation that
            matters, the one that only happens when no one is selling.
          </p>
        </Reveal>
        <Reveal className="flex justify-center">
          <p className="mt-8 max-w-4xl text-center text-base sm:text-lg leading-relaxed text-[#555]">
            Buyer perception remains the one thing you cannot measure. The
            company that closes this gap first gains an advantage that
            compounds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import React from "react";
import Reveal from "./Reveal";

const CARDS = [
  {
    title: "Sales Leaders",
    body: "Your reps say it was pricing. Your CRM says it was timing. Neither tells you what actually happened in the room, or what's being said about you now.",
  },
  {
    title: "CEOs & Founders",
    body: "You're making strategic decisions based on internal data and self-selected feedback. We bring you the external truth your team can't access.",
  },
  {
    title: "Revenue Operations",
    body: "Your CRM captures the seller's workflow. We capture the buyer's verdict. The gap between the two is where your pipeline is leaking.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            WHO THIS IS FOR
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 100}>
              <div className="rounded-2xl border border-black/10 bg-creamCard p-6 sm:p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[#555] text-sm sm:text-base leading-relaxed">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

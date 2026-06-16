import React from "react";
import Reveal from "./Reveal";

const CARDS = [
  {
    title: "Revenue Leaders",
    body: "You've just seen the gap. You want independent evidence to close it: not opinions, not frameworks, not what your reps told you happened. You want to know why you are really winning and losing, what your buyers would tell their peers about you, and what to change first to protect the pipeline you have already built.",
  },
  {
    title: "Founders and CEOs",
    body: "Your VP Sales says you lose on pricing. Your buyers say you lose on responsiveness. You need the truth before you invest in the wrong fix.",
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
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

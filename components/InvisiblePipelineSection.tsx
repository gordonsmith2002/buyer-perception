import React from "react";
import Reveal from "./Reveal";

function ScenarioCard({
  variant,
  title,
  body,
  quant,
  quantFootnote,
  delayMs = 0,
}: {
  variant: "advocate" | "critic";
  title: string;
  body: string;
  quant: string;
  quantFootnote: string;
  delayMs?: number;
}) {
  const isAdv = variant === "advocate";
  return (
    <Reveal delayMs={delayMs} className="w-full lg:flex-1">
      <div
        className={[
          "h-full rounded-2xl border p-6 sm:p-8",
          isAdv
            ? "border-black/10 bg-gradient-to-b from-emerald-50/60 to-brandLight/0"
            : "border-black/10 bg-gradient-to-b from-amber-50/50 to-brandLight/0",
        ].join(" ")}
      >
        <h3
          className={[
            "font-serif text-xl sm:text-2xl leading-snug",
            isAdv ? "text-emerald-900" : "text-[#1a1a1a]",
          ].join(" ")}
        >
          {title}
        </h3>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#555]">
          {body}
        </p>
        <p
          className={[
            "mt-5 text-sm font-semibold",
            isAdv ? "text-emerald-800" : "text-slate-800",
          ].join(" ")}
        >
          {quant}
        </p>
        <p className="mt-2 text-xs text-black/45 leading-snug">
          {quantFootnote}
        </p>
      </div>
    </Reveal>
  );
}

export default function InvisiblePipelineSection() {
  return (
    <section
      id="invisible-pipeline"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            THE INVISIBLE PIPELINE
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-4xl font-serif text-xl sm:text-2xl font-bold leading-snug text-[#1a1a1a]">
            This is not a you problem. Every revenue team is flying on the same
            instruments, and they all have the same blind spot.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl mt-8 leading-tight max-w-3xl text-[#1a1a1a]">
            Every deal you lose has an afterlife. So does every customer who
            leaves.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-8 max-w-3xl text-base sm:text-lg text-[#555] leading-relaxed">
            The moment a deal closes, won or lost, the buyer does not disappear.
            They go back to their network and tell people what dealing with you
            was actually like. Some become advocates, sending you referrals and
            recommendations you will never trace back to them. Others become
            critics, steering peers toward your competitors. This is your
            invisible pipeline. It is running right now, and the only question is
            which way it is flowing.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 max-w-3xl rounded-2xl border border-black/10 bg-creamCard px-6 py-6 sm:px-8 sm:py-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <p className="font-serif text-xl sm:text-2xl leading-snug text-[#1a1a1a]">
              73% of B2B buyers say peer recommendations are the number one
              factor in choosing a vendor.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-black/45">
              Source: Wynter, 2024.
            </p>
            <p className="mt-6 text-base sm:text-lg text-[#555] leading-relaxed">
              If recommendations are the single biggest factor in how your buyers
              choose, then every experience you create, good or bad, is shaping
              pipeline you will never see. The question is whether you are
              creating advocates or critics.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 sm:mt-16 flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-stretch">
          <ScenarioCard
            variant="advocate"
            title="You lose the deal. You gain an advocate."
            body="The buyer needed a feature you didn't have, and that was never going to change. But your team was responsive, honest, and made the process easy. When a peer asks next quarter who else to look at, your name comes first. That closed-lost is generating pipeline you'll never attribute."
            quant="Each advocate ≈ £50K to £150K in invisible pipeline per year"
            quantFootnote="Based on 2-3 peer recommendations per year at average B2B deal values."
          />
          <ScenarioCard
            variant="critic"
            delayMs={80}
            title="You win the deal. You create a critic."
            body="You got the signature. Then you botched the handoff, ghosted them after onboarding, and treated the close as the finish line. They churn inside a year. When peers ask, they say don't bother. That closed-won is destroying deals you'll never see."
            quant="Each critic ≈ £50K to £150K in invisible pipeline damage per year"
            quantFootnote="Based on 2-3 negative conversations per year at average B2B deal values."
          />
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-10 max-w-3xl text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl leading-snug">
            Your CRM doesn&apos;t know the difference. Both look the same. The
            pipeline impact is completely opposite.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-black/10 bg-[#f7f3ed] px-6 py-6 sm:px-8 sm:py-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#1a1a1a]">
              You lose ~100 deals a year. If even 20 of those buyers walked away
              as critics, that&apos;s 40-60 conversations steering peers away
              from you, at your average deal size. Now run the same maths on the
              advocates you&apos;re not creating.
            </p>
            <p className="mt-4 text-sm text-black/50 italic">
              Illustrative. Your real ratio is the thing we measure.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-14 sm:mt-16 text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl">
            Right now you don&apos;t know the ratio. We find out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

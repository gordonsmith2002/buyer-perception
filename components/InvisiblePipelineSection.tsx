import React from "react";
import Reveal from "./Reveal";

function ScenarioCard({
  variant,
  title,
  body,
  delayMs = 0,
}: {
  variant: "advocate" | "critic";
  title: string;
  body: string;
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
      </div>
    </Reveal>
  );
}

function Stat({ value, source }: { value: string; source?: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-creamCard p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <p className="flex-1 font-serif text-lg sm:text-xl leading-snug text-[#1a1a1a]">
        {value}
      </p>
      {source ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-black/45">
          {source}
        </p>
      ) : null}
    </div>
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
          <h2 className="font-serif text-3xl sm:text-4xl mt-4 leading-tight max-w-3xl text-[#1a1a1a]">
            Every lost deal and every churned customer has an afterlife.
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 space-y-5 text-base sm:text-lg text-[#555] leading-relaxed max-w-3xl">
            <p>
              The moment a deal closes, won or lost, the buyer doesn&apos;t
              disappear. They go back to their network and share what the
              experience was like. Some become advocates: generating referrals,
              recommendations, and pipeline you&apos;ll never attribute. Others
              become critics: warning peers, steering people toward competitors,
              and compounding damage you&apos;ll never see.
            </p>
            <p>
              This is the invisible pipeline. It&apos;s operating right now
              inside your market. The only question is which direction it&apos;s
              flowing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 sm:mt-16 flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-stretch">
          <ScenarioCard
            variant="advocate"
            title="You lose the deal. You gain an advocate."
            body="The buyer needed a feature you didn't have — that was never going to change. But your team was responsive, honest, and made the process easy. When a peer asks next quarter who else to look at, your name comes first. That closed-lost is generating pipeline you'll never attribute."
          />
          <ScenarioCard
            variant="critic"
            delayMs={80}
            title="You win the deal. You create a critic."
            body="You got the signature. Then you botched the handoff, ghosted them after onboarding, and treated the close as the finish line. They churn inside a year. When peers ask, they say don't bother. That closed-won is destroying deals you'll never see."
          />
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-10 max-w-3xl text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl leading-snug">
            Your CRM doesn&apos;t know the difference. Both look the same. The
            pipeline impact is completely opposite.
          </p>
        </Reveal>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <Stat
              value="73% of B2B buyers say peer recommendations are the #1 factor in choosing a vendor."
              source="Wynter, 2024"
            />
          </Reveal>
          <Reveal delayMs={80}>
            <Stat
              value="Dissatisfied customers tell 15+ people. Satisfied customers tell 6."
              source="American Express"
            />
          </Reveal>
          <Reveal delayMs={160}>
            <Stat value="Most unhappy buyers never complain to the brand. They just leave and tell everyone else." />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-14 sm:mt-16 text-center font-semibold text-[#1a1a1a] text-lg sm:text-xl">
            Right now you don&apos;t know the ratio. We find out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

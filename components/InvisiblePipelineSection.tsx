import React from "react";
import Reveal from "./Reveal";

function Silhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      width="44"
      height="52"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="14" r="9" fill="currentColor" opacity="0.2" />
      <path
        d="M8 52 C8 36 13 28 24 28 C35 28 40 36 40 52"
        fill="currentColor"
        opacity="0.2"
      />
    </svg>
  );
}

function FanThree({ className }: { className?: string }) {
  return (
    <div className={["flex justify-center gap-2 h-10", className].join(" ")}>
      <div className="w-px h-8 origin-bottom -rotate-[18deg] bg-current opacity-25" />
      <div className="w-px h-9 bg-current opacity-25" />
      <div className="w-px h-8 origin-bottom rotate-[18deg] bg-current opacity-25" />
    </div>
  );
}

function Side({
  variant,
  title,
  items,
  footLine,
  quant,
  quantFootnote,
}: {
  variant: "advocate" | "critic";
  title: string;
  items: string[];
  footLine: string;
  quant: string;
  quantFootnote: string;
}) {
  const isAdv = variant === "advocate";
  return (
    <div
      className={[
        "flex-1 rounded-2xl border p-6 sm:p-8",
        isAdv
          ? "border-black/10 bg-gradient-to-b from-amber-50/40 to-brandLight/0 text-emerald-900"
          : "border-black/10 bg-gradient-to-b from-slate-100/50 to-brandLight/0 text-[#1a1a1a]",
      ].join(" ")}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 text-center mb-6">
        {title}
      </p>
      <div
        className={[
          "flex flex-col items-center text-center",
          isAdv ? "text-emerald-800" : "text-slate-700",
        ].join(" ")}
      >
        <Silhouette />
        <FanThree
          className={[
            "mt-2",
            isAdv ? "text-emerald-600" : "text-slate-500",
          ].join(" ")}
        />
      </div>
      <ul className="mt-6 space-y-3 text-sm sm:text-[0.9375rem] leading-relaxed text-[#555]">
        {items.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="text-black/30 shrink-0 select-none" aria-hidden>
              &bull;
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <p
        className={[
          "mt-6 text-sm font-semibold text-center",
          isAdv ? "text-emerald-800" : "text-slate-800",
        ].join(" ")}
      >
        {footLine}
      </p>
      <p className="mt-3 text-xs sm:text-sm text-black/50 text-center leading-snug">
        {quant}
      </p>
      <p className="mt-2 text-[11px] sm:text-xs text-black/40 text-center leading-snug max-w-[280px] mx-auto">
        {quantFootnote}
      </p>
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
              This is the invisible pipeline. It&apos;s operating right now inside
              your market. The only question is which direction it&apos;s flowing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 sm:mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-stretch relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-black/10 -translate-x-1/2" />
          <Reveal className="w-full lg:flex-1 lg:pr-8">
            <Side
              variant="advocate"
              title="Advocates creating pipeline"
              items={[
                "Recommended you to a peer",
                "Mentioned you in a Slack group",
                "Introduced a colleague",
              ]}
              footLine="New pipeline → (you'll never attribute this)"
              quant="Each advocate ≈ £50K to £150K in invisible pipeline per year"
              quantFootnote="Based on 2 to 3 peer recommendations per year at average B2B deal values."
            />
          </Reveal>
          <Reveal className="w-full lg:flex-1 lg:pl-8">
            <Side
              variant="critic"
              title="Critics destroying pipeline"
              items={[
                "Warned a peer to avoid you",
                "Told their network not to bother",
                "Recommended your competitor instead",
              ]}
              footLine="← Lost pipeline (you'll never see this)"
              quant="Each critic ≈ £50K to £150K in invisible pipeline damage per year"
              quantFootnote="Based on 2 to 3 negative conversations per year at average B2B deal values."
            />
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
